import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

// Monthly page limits for table extraction
// Business: 200 pages/mo ($6.00 cost at $0.03/page vs $13.99 revenue)
// Enterprise: 2,000 pages/mo ($60.00 cost at $0.03/page vs $49.99 revenue — profitable on average usage)
const MONTHLY_PAGE_LIMIT_BUSINESS: number = 200;
const MONTHLY_PAGE_LIMIT_ENTERPRISE: number = 2000;

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

interface TextSegment {
  startIndex?: number | string;
  endIndex?: number | string;
}

interface Layout {
  textAnchor?: {
    textSegments?: TextSegment[];
  };
}

interface Cell {
  layout: Layout;
}

interface TableRow {
  cells?: Cell[];
}

interface Table {
  headerRows?: TableRow[];
  bodyRows?: TableRow[];
}

interface Page {
  pageNumber?: number;
  tables?: Table[];
}

interface DocumentAIDocument {
  pages?: Page[];
  text?: string;
}

interface ExtractedTable {
  pageNumber: number;
  headerRows: string[][];
  bodyRows: string[][];
}

/**
 * Get how many table extraction pages the user has consumed this month.
 */
async function getMonthlyPageCount(serviceClient: any, userId: string): Promise<number> {
  const now: Date = new Date();
  const startOfMonth: string = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const { data, error } = await serviceClient
    .from("usage_logs")
    .select("id")
    .eq("user_id", userId)
    .eq("tool", "table-extraction-page")
    .gte("created_at", startOfMonth);

  if (error) {
    console.error("[getMonthlyPageCount] error:", error);
    return 0;
  }

  return data?.length ?? 0;
}

/**
 * Log the number of pages processed for monthly tracking.
 */
async function logPageUsage(serviceClient: any, userId: string, pageCount: number): Promise<void> {
  if (!serviceClient) return;

  const rows: { user_id: string; tool: string; allowed: boolean; block_reason: null }[] = [];
  for (let i = 0; i < pageCount; i++) {
    rows.push({
      user_id: userId,
      tool: "table-extraction-page",
      allowed: true,
      block_reason: null,
    });
  }

  const { error } = await serviceClient.from("usage_logs").insert(rows);
  if (error) {
    console.error("[logPageUsage] insert error:", error);
  }
}

export async function POST(request: NextRequest): Promise<Response> {
  const startTime = Date.now();
  const requestId = logger.request("table-extraction");
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Auth: Business plan only
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      );
    }
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single();
    if (profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      );
    }
    logger.info("auth_passed", { requestId, userId: user.id, tool: "table-extraction" });

    const monthlyPageLimit: number = profile?.plan === "enterprise"
      ? MONTHLY_PAGE_LIMIT_ENTERPRISE
      : MONTHLY_PAGE_LIMIT_BUSINESS;

    // Check monthly page limit
    const { createClient: createServiceClient } = await import("@supabase/supabase-js");
    const serviceUrl: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey: string | undefined = process.env.SUPABASE_SERVICE_ROLE_KEY;
    let serviceClient: any = null;
    let usedPagesAtStart: number = 0;

    if (serviceUrl && serviceKey) {
      serviceClient = createServiceClient(serviceUrl, serviceKey);
      usedPagesAtStart = await getMonthlyPageCount(serviceClient, user.id);

      if (usedPagesAtStart >= monthlyPageLimit) {
        return errorResponse(
          `Monthly limit reached. You have used ${usedPagesAtStart} of ${monthlyPageLimit} table extraction pages this month. Your limit resets on the 1st of next month.`,
          429
        );
      }
    }

    // Parse request
    const body = await request.json();
    const blobUrl: string = body.blobUrl;
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }
    if (!isValidBlobUrl(blobUrl)) {
      return errorResponse("Invalid file URL.", 400);
    }

    // Download PDF from blob
    const res: globalThis.Response = await fetch(blobUrl);
    if (!res.ok) {
      console.error(`Failed to fetch blob URL (${res.status})`);
      throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const buffer: Buffer = Buffer.from(await res.arrayBuffer());
    const id: string = randomUUID();
    tmpPath = join("/tmp", `${id}-input.pdf`);
    await writeFile(tmpPath, buffer);

    // Pre-flight page count: reject before calling Document AI if the PDF exceeds
    // the user's remaining monthly quota. Uses pdf-lib to count pages from the buffer
    // so we don't pay for a Document AI call we'd immediately discard.
    if (serviceClient) {
      try {
        const { PDFDocument } = await import("pdf-lib");
        const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
        const pdfPageCount: number = pdfDoc.getPageCount();
        const remaining: number = monthlyPageLimit - usedPagesAtStart;

        if (pdfPageCount > remaining) {
          if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});
          if (tmpPath) await unlink(tmpPath).catch(() => {});
          tmpPath = null;
          return errorResponse(
            `This PDF has ${pdfPageCount} pages but you only have ${remaining} table extraction pages remaining this month (${monthlyPageLimit}/month limit). Try a smaller document or wait until the 1st of next month.`,
            429
          );
        }
      } catch {
        // If pdf-lib can't parse the PDF, proceed to Document AI —
        // the post-processing check on line ~185 still applies as a safety net.
      }
    }

    // Call Google Document AI using REST API (avoids gRPC private key issues)
    const projectId: string | undefined = process.env.GOOGLE_CLOUD_PROJECT_ID;
    const location: string = process.env.GOOGLE_CLOUD_LOCATION || "us";
    const processorId: string | undefined = process.env.GOOGLE_CLOUD_PROCESSOR_ID;
    const clientEmail: string | undefined = process.env.GOOGLE_CLOUD_CLIENT_EMAIL;
    const privateKey: string | undefined = process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    );

    if (!projectId || !processorId || !clientEmail || !privateKey) {
      console.error("Google Cloud Document AI is not configured (missing env vars)");
      throw new Error("The table extraction service is temporarily unavailable. Please try again later.");
    }

    // Generate JWT access token
    const accessToken: string = await getAccessToken(clientEmail, privateKey);

    const endpoint: string = `https://${location}-documentai.googleapis.com/v1/projects/${projectId}/locations/${location}/processors/${processorId}:process`;

    const encodedDocument: string = buffer.toString("base64");

    const docAiResponse: globalThis.Response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rawDocument: {
          content: encodedDocument,
          mimeType: "application/pdf",
        },
      }),
    });

    if (!docAiResponse.ok) {
      const errBody: string = await docAiResponse.text();
      console.error("Document AI API error:", docAiResponse.status, errBody);
      throw new Error("Table extraction failed. Please try again or use a different file.");
    }

    const result = await docAiResponse.json();
    const document: DocumentAIDocument | undefined = result.document;

    if (!document) {
      console.error("Document AI returned no document in response");
      throw new Error("No data could be extracted from this file. Please try a different PDF.");
    }

    // Check page count against remaining monthly limit
    const pageCount: number = (document.pages || []).length;

    if (serviceClient) {
      const usedPages: number = await getMonthlyPageCount(serviceClient, user.id);
      const remaining: number = monthlyPageLimit - usedPages;

      if (pageCount > remaining) {
        // Clean up
        if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});
        if (tmpPath) await unlink(tmpPath).catch(() => {});
        return errorResponse(
          `This PDF has ${pageCount} pages but you only have ${remaining} table extraction pages remaining this month (${monthlyPageLimit}/month limit). Try a smaller document or wait until the 1st of next month.`,
          429
        );
      }
    }

    // Extract tables from Document AI response
    const tables: ExtractedTable[] = [];

    for (const page of document.pages || []) {
      for (const table of page.tables || []) {
        const extractedTable: ExtractedTable = {
          pageNumber: (page.pageNumber || 1),
          headerRows: [],
          bodyRows: [],
        };

        // Extract header rows
        for (const headerRow of table.headerRows || []) {
          const row: string[] = [];
          for (const cell of headerRow.cells || []) {
            const text: string = extractTextFromLayout(cell.layout, document.text || "");
            row.push(text.trim());
          }
          extractedTable.headerRows.push(row);
        }

        // Extract body rows
        for (const bodyRow of table.bodyRows || []) {
          const row: string[] = [];
          for (const cell of bodyRow.cells || []) {
            const text: string = extractTextFromLayout(cell.layout, document.text || "");
            row.push(text.trim());
          }
          extractedTable.bodyRows.push(row);
        }

        if (extractedTable.headerRows.length > 0 || extractedTable.bodyRows.length > 0) {
          tables.push(extractedTable);
        }
      }
    }

    if (tables.length === 0) {
      // Clean up
      if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});
      if (tmpPath) await unlink(tmpPath).catch(() => {});
      return errorResponse(
        "No tables were detected in this PDF. Try a document with clearly formatted tables.",
        422
      );
    }

    // Build Excel workbook using ExcelJS
    const ExcelJS = await import("exceljs");
    const workbook = new ExcelJS.default.Workbook();
    workbook.creator = "PDF.it";
    workbook.created = new Date();

    for (let i = 0; i < tables.length; i++) {
      const table: ExtractedTable = tables[i];
      const sheetName: string =
        tables.length === 1
          ? "Table"
          : `Page ${table.pageNumber} - Table ${i + 1}`;
      const worksheet = workbook.addWorksheet(
        sheetName.substring(0, 31) // Excel sheet name max 31 chars
      );

      // Add header rows with styling
      for (const headerRow of table.headerRows) {
        const row = worksheet.addRow(headerRow);
        row.eachCell((cell: any) => {
          cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FF4338CA" }, // indigo-700
          };
          cell.alignment = { horizontal: "center", vertical: "middle" };
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
      }

      // Add body rows
      for (let r = 0; r < table.bodyRows.length; r++) {
        const row = worksheet.addRow(table.bodyRows[r]);
        row.eachCell((cell: any) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
          cell.alignment = { vertical: "middle", wrapText: true };
          // Alternate row coloring
          if (r % 2 === 1) {
            cell.fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: { argb: "FFF1F5F9" }, // slate-100
            };
          }
        });
      }

      // Auto-fit column widths
      worksheet.columns.forEach((column: any) => {
        let maxLength: number = 10;
        column.eachCell({ includeEmpty: true }, (cell: any) => {
          const cellValue: string = cell.value ? cell.value.toString() : "";
          maxLength = Math.max(maxLength, Math.min(cellValue.length + 4, 50));
        });
        column.width = maxLength;
      });
    }

    // Write to buffer
    const excelBuffer = await workbook.xlsx.writeBuffer();

    // Log page usage for monthly tracking
    if (serviceClient) {
      await logPageUsage(serviceClient, user.id, pageCount);
    }

    // Clean up
    if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
      tmpPath = null;
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "table-extraction");

    // Get original filename for download
    const originalName: string = body.originalName || "document";
    const baseName: string = originalName
      .replace(/\.[^/.]+$/, "")
      .replace(/-[a-zA-Z0-9]{20,}$/g, "");

    logger.requestEnd(requestId, "table-extraction", "success", Date.now() - startTime);
    return new NextResponse(Buffer.from(excelBuffer), {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${baseName}-tables.xlsx"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    logger.error("processing_failed", err, { requestId, tool: "table-extraction" });

    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob\.vercel/i.test(raw)
      ? "An error occurred while extracting tables. Please try again."
      : (raw || "An unexpected error occurred.");

    return errorResponse(safe, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}

/**
 * Extract text content from a Document AI layout object using text anchors.
 */
function extractTextFromLayout(layout: Layout, fullText: string): string {
  if (!layout || !layout.textAnchor || !layout.textAnchor.textSegments) {
    return "";
  }
  let text: string = "";
  for (const segment of layout.textAnchor.textSegments) {
    const startIndex: number = Number(segment.startIndex || 0);
    const endIndex: number = Number(segment.endIndex || 0);
    text += fullText.substring(startIndex, endIndex);
  }
  return text;
}

/**
 * Generate a Google OAuth2 access token from a service account.
 * Uses JWT → token exchange via REST (no gRPC, no native crypto issues).
 */
async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const crypto = await import("crypto");

  const now: number = Math.floor(Date.now() / 1000);
  const header: { alg: string; typ: string } = { alg: "RS256", typ: "JWT" };
  const payload: { iss: string; scope: string; aud: string; iat: number; exp: number } = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj: object): string =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64url");

  const unsignedToken: string = `${encode(header)}.${encode(payload)}`;

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(unsignedToken);
  const signature: string = sign.sign(privateKey, "base64url");

  const jwt: string = `${unsignedToken}.${signature}`;

  const tokenResponse: globalThis.Response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  if (!tokenResponse.ok) {
    const errText: string = await tokenResponse.text();
    throw new Error(`Failed to get access token: ${errText}`);
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}
