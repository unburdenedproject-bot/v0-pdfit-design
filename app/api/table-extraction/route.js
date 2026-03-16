export const runtime = "nodejs";
export const maxDuration = 120;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

// Monthly page limit for table extraction (Business tier)
// At $0.065/page, 200 pages = $13.00 — stays under $13.99/month revenue
const MONTHLY_PAGE_LIMIT = 200;

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

/**
 * Get how many table extraction pages the user has consumed this month.
 */
async function getMonthlyPageCount(serviceClient, userId) {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

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
async function logPageUsage(serviceClient, userId, pageCount) {
  if (!serviceClient) return;

  const rows = [];
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

export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

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
    if (profile?.plan !== "business") {
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      );
    }

    // Check monthly page limit
    const { createClient: createServiceClient } = await import("@supabase/supabase-js");
    const serviceUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    let serviceClient = null;

    if (serviceUrl && serviceKey) {
      serviceClient = createServiceClient(serviceUrl, serviceKey);
      const usedPages = await getMonthlyPageCount(serviceClient, user.id);

      if (usedPages >= MONTHLY_PAGE_LIMIT) {
        return errorResponse(
          `Monthly limit reached. You have used ${usedPages} of ${MONTHLY_PAGE_LIMIT} table extraction pages this month. Your limit resets on the 1st of next month.`,
          429
        );
      }
    }

    // Parse request
    const body = await request.json();
    const blobUrl = body.blobUrl;
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }

    // Download PDF from blob
    const res = await fetch(blobUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch blob URL (${res.status})`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const id = randomUUID();
    tmpPath = join("/tmp", `${id}-input.pdf`);
    await writeFile(tmpPath, buffer);

    // Call Google Document AI using REST API (avoids gRPC private key issues)
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
    const location = process.env.GOOGLE_CLOUD_LOCATION || "us";
    const processorId = process.env.GOOGLE_CLOUD_PROCESSOR_ID;
    const clientEmail = process.env.GOOGLE_CLOUD_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    );

    if (!projectId || !processorId || !clientEmail || !privateKey) {
      throw new Error("Google Cloud Document AI is not configured.");
    }

    // Generate JWT access token
    const accessToken = await getAccessToken(clientEmail, privateKey);

    const endpoint = `https://${location}-documentai.googleapis.com/v1/projects/${projectId}/locations/${location}/processors/${processorId}:process`;

    const encodedDocument = buffer.toString("base64");

    const docAiResponse = await fetch(endpoint, {
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
      const errBody = await docAiResponse.text();
      console.error("Document AI API error:", docAiResponse.status, errBody);
      throw new Error(`Document AI API error (${docAiResponse.status}): ${errBody.substring(0, 200)}`);
    }

    const result = await docAiResponse.json();
    const document = result.document;

    if (!document) {
      throw new Error("Document AI returned no document.");
    }

    // Check page count against remaining monthly limit
    const pageCount = (document.pages || []).length;

    if (serviceClient) {
      const usedPages = await getMonthlyPageCount(serviceClient, user.id);
      const remaining = MONTHLY_PAGE_LIMIT - usedPages;

      if (pageCount > remaining) {
        // Clean up
        if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});
        if (tmpPath) await unlink(tmpPath).catch(() => {});
        return errorResponse(
          `This PDF has ${pageCount} pages but you only have ${remaining} table extraction pages remaining this month (${MONTHLY_PAGE_LIMIT}/month limit). Try a smaller document or wait until the 1st of next month.`,
          429
        );
      }
    }

    // Extract tables from Document AI response
    const tables = [];

    for (const page of document.pages || []) {
      for (const table of page.tables || []) {
        const extractedTable = {
          pageNumber: (page.pageNumber || 1),
          headerRows: [],
          bodyRows: [],
        };

        // Extract header rows
        for (const headerRow of table.headerRows || []) {
          const row = [];
          for (const cell of headerRow.cells || []) {
            const text = extractTextFromLayout(cell.layout, document.text || "");
            row.push(text.trim());
          }
          extractedTable.headerRows.push(row);
        }

        // Extract body rows
        for (const bodyRow of table.bodyRows || []) {
          const row = [];
          for (const cell of bodyRow.cells || []) {
            const text = extractTextFromLayout(cell.layout, document.text || "");
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
    workbook.creator = "OmnisPDF";
    workbook.created = new Date();

    for (let i = 0; i < tables.length; i++) {
      const table = tables[i];
      const sheetName =
        tables.length === 1
          ? "Table"
          : `Page ${table.pageNumber} - Table ${i + 1}`;
      const worksheet = workbook.addWorksheet(
        sheetName.substring(0, 31) // Excel sheet name max 31 chars
      );

      // Add header rows with styling
      for (const headerRow of table.headerRows) {
        const row = worksheet.addRow(headerRow);
        row.eachCell((cell) => {
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
        row.eachCell((cell) => {
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
      worksheet.columns.forEach((column) => {
        let maxLength = 10;
        column.eachCell({ includeEmpty: true }, (cell) => {
          const cellValue = cell.value ? cell.value.toString() : "";
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
    const originalName = body.originalName || "document";
    const baseName = originalName
      .replace(/\.[^/.]+$/, "")
      .replace(/-[a-zA-Z0-9]{20,}$/g, "");

    return new NextResponse(Buffer.from(excelBuffer), {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${baseName}-tables.xlsx"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    if (tmpPath) await unlink(tmpPath).catch(() => {});
    if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});

    console.error("table-extraction route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}

/**
 * Extract text content from a Document AI layout object using text anchors.
 */
function extractTextFromLayout(layout, fullText) {
  if (!layout || !layout.textAnchor || !layout.textAnchor.textSegments) {
    return "";
  }
  let text = "";
  for (const segment of layout.textAnchor.textSegments) {
    const startIndex = Number(segment.startIndex || 0);
    const endIndex = Number(segment.endIndex || 0);
    text += fullText.substring(startIndex, endIndex);
  }
  return text;
}

/**
 * Generate a Google OAuth2 access token from a service account.
 * Uses JWT → token exchange via REST (no gRPC, no native crypto issues).
 */
async function getAccessToken(clientEmail, privateKey) {
  const crypto = await import("crypto");

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64url");

  const unsignedToken = `${encode(header)}.${encode(payload)}`;

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(unsignedToken);
  const signature = sign.sign(privateKey, "base64url");

  const jwt = `${unsignedToken}.${signature}`;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  if (!tokenResponse.ok) {
    const errText = await tokenResponse.text();
    throw new Error(`Failed to get access token: ${errText}`);
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}
