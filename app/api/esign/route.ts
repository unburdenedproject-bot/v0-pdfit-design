import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";
import { isToolEnabled } from "@/lib/feature-flags";

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

interface SignatureInput {
  page: number;
  x: number;
  y: number;
  width: number;
  height: number;
  signatureSource: string;
}

/**
 * eSign API
 *
 * Embeds signature images onto specified positions in a PDF.
 * Business plan only.
 *
 * Body: {
 *   blobUrl: string,
 *   originalName?: string,
 *   signatures: Array<{
 *     page: number,              // 0-based page index
 *     x: number,                 // x position (ratio 0-1 from left)
 *     y: number,                 // y position (ratio 0-1 from top)
 *     width: number,             // width (ratio 0-1)
 *     height: number,            // height (ratio 0-1)
 *     signatureSource: string    // data URL or public image URL
 *   }>
 * }
 */
export async function POST(request: NextRequest): Promise<NextResponse | Response> {
  const startTime = Date.now();
  const requestId = logger.request("esign");
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Kill switch: Paula can disable this tool instantly via Supabase dashboard (no redeploy).
    const flag = await isToolEnabled("esign");
    if (!flag.enabled) {
      return NextResponse.json({ error: flag.message }, { status: 503 });
    }

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
    logger.info("auth_passed", { requestId, userId: user.id, tool: "esign" });

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

    const signatures: SignatureInput[] = body.signatures;
    if (!Array.isArray(signatures) || signatures.length === 0) {
      return errorResponse("No signatures specified.", 400);
    }

    // ---- Async mode: create a job and return immediately ----
    if (body.async === true) {
      const { createJob } = await import("@/lib/job-queue");
      const jobResult = await createJob({
        userId: user.id,
        userPlan: profile?.plan,
        tool: "esign",
        inputBlobUrl: blobUrl,
        inputParams: {
          signatures,
          original_name: body.originalName || "input.pdf",
        },
      });
      if ("error" in jobResult) {
        return errorResponse(jobResult.error, 500);
      }
      const { logUsage } = await import("@/lib/usage-check");
      await logUsage(user.id, "esign");
      logger.info("job_queued", { requestId, jobId: jobResult.jobId, tool: "esign" });
      return NextResponse.json({ jobId: jobResult.jobId, status: "pending" }, { status: 202 });
    }

    // Download PDF
    const result = await blobUrlToTmp(blobUrl);
    tmpPath = result.tmpPath;
    const originalName: string = (body.originalName && typeof body.originalName === "string")
      ? body.originalName
      : result.name;

    // Apply signatures with pdf-lib
    const { PDFDocument } = await import("pdf-lib");
    const pdfDoc = await PDFDocument.load(result.buffer);
    const pages = pdfDoc.getPages();

    for (const sig of signatures) {
      const pageIndex: number = sig.page;
      if (pageIndex < 0 || pageIndex >= pages.length) continue;

      const page = pages[pageIndex];
      const { width: pageWidth, height: pageHeight } = page.getSize();

      const sigBytes: Uint8Array = await signatureSourceToBytes(sig.signatureSource);

      // Embed as PNG (signatures are uploaded as PNG)
      let sigImage;
      try {
        sigImage = await pdfDoc.embedPng(sigBytes);
      } catch {
        // Fallback: try JPG if PNG fails
        sigImage = await pdfDoc.embedJpg(sigBytes);
      }

      // Convert ratios to actual coordinates
      const x: number = sig.x * pageWidth;
      const w: number = sig.width * pageWidth;
      const h: number = sig.height * pageHeight;
      // y ratio is from top, but PDF y is from bottom
      const y: number = pageHeight - (sig.y * pageHeight) - h;

      page.drawImage(sigImage, {
        x,
        y,
        width: w,
        height: h,
      });
    }

    // Save the signed PDF
    const signedBytes: Uint8Array = await pdfDoc.save();

    // Clean up
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "esign");

    logger.requestEnd(requestId, "esign", "success", Date.now() - startTime);
    return new NextResponse(Buffer.from(signedBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-signed.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    logger.error("processing_failed", err, { requestId, tool: "esign" });

    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob.vercel/i.test(raw)
      ? "An error occurred while processing your file. Please try again."
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

async function signatureSourceToBytes(signatureSource: string): Promise<Uint8Array> {
  if (!signatureSource || typeof signatureSource !== "string") {
    throw new Error("Missing signature image data.");
  }

  if (signatureSource.startsWith("data:")) {
    const [, encoded = ""] = signatureSource.split(",", 2);
    return Uint8Array.from(Buffer.from(encoded, "base64"));
  }

  const sigRes = await fetch(signatureSource);
  if (!sigRes.ok) {
    console.error(`Failed to fetch signature image (${sigRes.status})`);
    throw new Error("Failed to load the signature. Please try again.");
  }

  return new Uint8Array(await sigRes.arrayBuffer());
}
