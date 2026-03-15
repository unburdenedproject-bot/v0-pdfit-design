export const runtime = "nodejs";
export const maxDuration = 120;

import { NextResponse } from "next/server";
import { writeFile, unlink, readFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
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

    // Call Google Document AI
    const { DocumentProcessorServiceClient } = await import(
      "@google-cloud/documentai"
    );

    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
    const location = process.env.GOOGLE_CLOUD_LOCATION || "us";
    const processorId = process.env.GOOGLE_CLOUD_PROCESSOR_ID;

    if (!projectId || !processorId) {
      throw new Error("Google Cloud Document AI is not configured.");
    }

    const client = new DocumentProcessorServiceClient({
      credentials: {
        client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      projectId,
    });

    const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;

    const encodedDocument = buffer.toString("base64");

    const [result] = await client.processDocument({
      name,
      rawDocument: {
        content: encodedDocument,
        mimeType: "application/pdf",
      },
    });

    const { document } = result;

    if (!document) {
      throw new Error("Document AI returned no document.");
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
