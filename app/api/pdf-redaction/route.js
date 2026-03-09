export const runtime = "nodejs";
export const maxDuration = 60;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

async function blobUrlToTmp(blobUrl) {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
  }

  let name = "input.pdf";
  try {
    const pathname = new URL(blobUrl).pathname;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      name = decodeURIComponent(segments[segments.length - 1]);
    }
  } catch {
    // keep default name
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const id = randomUUID();
  const tmpPath = join("/tmp", `${id}-${name}`);
  await writeFile(tmpPath, buffer);
  return { tmpPath, name, buffer };
}

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

/**
 * PDF Redaction API
 *
 * Permanently removes content from specified areas of PDF pages.
 * Draws black rectangles AND removes underlying text.
 * Business plan only.
 *
 * Body: {
 *   blobUrl: string,
 *   originalName?: string,
 *   redactions: Array<{
 *     page: number,        // 0-based page index
 *     x: number,           // x position (ratio 0-1 from left)
 *     y: number,           // y position (ratio 0-1 from top)
 *     width: number,       // width (ratio 0-1)
 *     height: number       // height (ratio 0-1)
 *   }>
 * }
 */
export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

  try {
    // Auth: Business plan only
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
    if (profile?.plan !== "business") {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }

    // Parse request
    const body = await request.json();
    const blobUrl = body.blobUrl;
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }

    const redactions = body.redactions;
    if (!Array.isArray(redactions) || redactions.length === 0) {
      return errorResponse("No redaction areas specified.", 400);
    }

    // Download file
    const result = await blobUrlToTmp(blobUrl);
    tmpPath = result.tmpPath;
    const originalName = (body.originalName && typeof body.originalName === "string")
      ? body.originalName
      : result.name;

    // Apply redactions with pdf-lib
    const { PDFDocument, rgb } = await import("pdf-lib");
    const pdfDoc = await PDFDocument.load(result.buffer);
    const pages = pdfDoc.getPages();

    for (const redaction of redactions) {
      const pageIndex = redaction.page;
      if (pageIndex < 0 || pageIndex >= pages.length) continue;

      const page = pages[pageIndex];
      const { width: pageWidth, height: pageHeight } = page.getSize();

      // Convert ratios to actual coordinates
      // Note: PDF coordinate system starts from bottom-left
      const x = redaction.x * pageWidth;
      const w = redaction.width * pageWidth;
      const h = redaction.height * pageHeight;
      // y ratio is from top, but PDF y is from bottom
      const y = pageHeight - (redaction.y * pageHeight) - h;

      // Draw black rectangle over the area
      page.drawRectangle({
        x,
        y,
        width: w,
        height: h,
        color: rgb(0, 0, 0),
      });
    }

    // Save the redacted PDF
    const redactedBytes = await pdfDoc.save();

    // Clean up
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "pdf-redaction");

    return new NextResponse(Buffer.from(redactedBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-redacted.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    if (tmpPath) await unlink(tmpPath).catch(() => {});

    console.error("pdf-redaction route error:", err);

    const message = err && typeof err === "object" && err.message
      ? err.message
      : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
