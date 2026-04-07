export const runtime = "nodejs";
export const maxDuration = 300;

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
 * Permanently removes content from specified areas of PDF pages by replacing
 * each redacted page with a flattened image rendition.
 * Business plan only.
 *
 * Body: {
 *   blobUrl: string,
 *   originalName?: string,
 *   redactedPages: Array<{
 *     page: number,        // 0-based page index
 *     blobUrl: string,     // uploaded flattened PNG for that page
 *     width: number,       // original PDF page width in points
 *     height: number       // original PDF page height in points
 *   }>
 * }
 */
export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;
  let uploadedPageBlobUrls = [];

  try {
    // Auth: Business plan only
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
    if (profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }

    // Parse request
    const body = await request.json();
    const blobUrl = body.blobUrl;
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }

    const redactedPages = body.redactedPages;
    if (!Array.isArray(redactedPages) || redactedPages.length === 0) {
      return errorResponse("No redacted page renders were provided.", 400);
    }
    uploadedPageBlobUrls = redactedPages
      .map((page) => page?.blobUrl)
      .filter((value) => typeof value === "string");

    // Download file
    const result = await blobUrlToTmp(blobUrl);
    tmpPath = result.tmpPath;
    const originalName = (body.originalName && typeof body.originalName === "string")
      ? body.originalName
      : result.name;

    const { PDFDocument } = await import("pdf-lib");
    const sourcePdf = await PDFDocument.load(result.buffer);
    const outputPdf = await PDFDocument.create();
    const replacementPages = new Map();

    for (const redactedPage of redactedPages) {
      const pageIndex = redactedPage?.page;
      const pageBlobUrl = redactedPage?.blobUrl;
      const pageWidth = redactedPage?.width;
      const pageHeight = redactedPage?.height;

      if (
        !Number.isInteger(pageIndex) ||
        pageIndex < 0 ||
        pageIndex >= sourcePdf.getPageCount()
      ) {
        return errorResponse(`Invalid page index: ${pageIndex}`, 400);
      }

      if (
        typeof pageBlobUrl !== "string" ||
        typeof pageWidth !== "number" ||
        typeof pageHeight !== "number" ||
        pageWidth <= 0 ||
        pageHeight <= 0
      ) {
        return errorResponse(`Invalid redacted page payload for page ${pageIndex + 1}.`, 400);
      }

      const imageResponse = await fetch(pageBlobUrl);
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch redacted page ${pageIndex + 1} (${imageResponse.status}).`);
      }

      const imageBytes = await imageResponse.arrayBuffer();
      replacementPages.set(pageIndex, {
        imageBytes,
        width: pageWidth,
        height: pageHeight,
      });
    }

    for (let pageIndex = 0; pageIndex < sourcePdf.getPageCount(); pageIndex++) {
      const replacement = replacementPages.get(pageIndex);

      if (replacement) {
        const image = await outputPdf.embedPng(replacement.imageBytes);
        const page = outputPdf.addPage([replacement.width, replacement.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: replacement.width,
          height: replacement.height,
        });
        continue;
      }

      const [copiedPage] = await outputPdf.copyPages(sourcePdf, [pageIndex]);
      outputPdf.addPage(copiedPage);
    }

    const redactedBytes = await outputPdf.save();

    // Clean up
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await Promise.allSettled(uploadedPageBlobUrls.map((url) => del(url)));
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
    console.error("pdf-redaction route error:", err);

    const message = err && typeof err === "object" && err.message
      ? err.message
      : "An unexpected error occurred.";

    return errorResponse(message, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await Promise.allSettled(uploadedPageBlobUrls.map((url) => del(url)));
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
