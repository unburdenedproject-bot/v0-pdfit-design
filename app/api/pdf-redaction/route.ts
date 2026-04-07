import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

interface BlobToTmpResult {
  tmpPath: string;
  name: string;
  buffer: Buffer;
}

async function blobUrlToTmp(blobUrl: string): Promise<BlobToTmpResult> {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
    throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
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

  const id: string = randomUUID();
  const tmpPath: string = join("/tmp", `${id}-${name}`);
  if (res.body) { const nodeStream = Readable.fromWeb(res.body as any); await pipeline(nodeStream, createWriteStream(tmpPath)); } else { const buf = Buffer.from(await res.arrayBuffer()); await writeFile(tmpPath, buf); }
  return { tmpPath, name, buffer: Buffer.alloc(0) };
}

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

interface RedactedPageInput {
  page: number;
  blobUrl: string;
  width: number;
  height: number;
}

interface ReplacementData {
  imageBytes: ArrayBuffer;
  width: number;
  height: number;
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
export async function POST(request: NextRequest): Promise<NextResponse | Response> {
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;
  let uploadedPageBlobUrls: string[] = [];

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
    const blobUrl: string = body.blobUrl;
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }
    if (!isValidBlobUrl(blobUrl)) {
      return errorResponse("Invalid file URL.", 400);
    }

    const redactedPages: RedactedPageInput[] = body.redactedPages;
    if (!Array.isArray(redactedPages) || redactedPages.length === 0) {
      return errorResponse("No redacted page renders were provided.", 400);
    }
    uploadedPageBlobUrls = redactedPages
      .map((page) => page?.blobUrl)
      .filter((value): value is string => typeof value === "string");

    // Download file
    const result = await blobUrlToTmp(blobUrl);
    tmpPath = result.tmpPath;
    const originalName: string = (body.originalName && typeof body.originalName === "string")
      ? body.originalName
      : result.name;

    const { PDFDocument } = await import("pdf-lib");
    const sourcePdf = await PDFDocument.load(result.buffer);
    const outputPdf = await PDFDocument.create();
    const replacementPages = new Map<number, ReplacementData>();

    for (const redactedPage of redactedPages) {
      const pageIndex: number | undefined = redactedPage?.page;
      const pageBlobUrl: string | undefined = redactedPage?.blobUrl;
      const pageWidth: number | undefined = redactedPage?.width;
      const pageHeight: number | undefined = redactedPage?.height;

      if (
        !Number.isInteger(pageIndex) ||
        (pageIndex as number) < 0 ||
        (pageIndex as number) >= sourcePdf.getPageCount()
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
        return errorResponse(`Invalid redacted page payload for page ${(pageIndex as number) + 1}.`, 400);
      }
      if (!isValidBlobUrl(pageBlobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }

      const imageResponse = await fetch(pageBlobUrl);
      if (!imageResponse.ok) {
        console.error(`Failed to fetch redacted page ${(pageIndex as number) + 1} (${imageResponse.status})`);
        throw new Error(`Failed to process page ${(pageIndex as number) + 1}. Please try again.`);
      }

      const imageBytes: ArrayBuffer = await imageResponse.arrayBuffer();
      replacementPages.set(pageIndex as number, {
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

    const redactedBytes: Uint8Array = await outputPdf.save();

    // Clean up
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await Promise.allSettled(uploadedPageBlobUrls.map((url) => del(url)));
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

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
  } catch (err: unknown) {
    console.error("pdf-redaction route error:", err);

    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob.vercel/i.test(raw)
      ? "An error occurred while processing your file. Please try again."
      : (raw || "An unexpected error occurred.");

    return errorResponse(safe, 500);
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
