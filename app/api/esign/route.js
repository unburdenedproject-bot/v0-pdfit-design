export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

async function blobUrlToTmp(blobUrl) {
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
    if (!isValidBlobUrl(blobUrl)) {
      return errorResponse("Invalid file URL.", 400);
    }

    const signatures = body.signatures;
    if (!Array.isArray(signatures) || signatures.length === 0) {
      return errorResponse("No signatures specified.", 400);
    }

    // Download PDF
    const result = await blobUrlToTmp(blobUrl);
    tmpPath = result.tmpPath;
    const originalName = (body.originalName && typeof body.originalName === "string")
      ? body.originalName
      : result.name;

    // Apply signatures with pdf-lib
    const { PDFDocument } = await import("pdf-lib");
    const pdfDoc = await PDFDocument.load(result.buffer);
    const pages = pdfDoc.getPages();

    for (const sig of signatures) {
      const pageIndex = sig.page;
      if (pageIndex < 0 || pageIndex >= pages.length) continue;

      const page = pages[pageIndex];
      const { width: pageWidth, height: pageHeight } = page.getSize();

      const sigBytes = await signatureSourceToBytes(sig.signatureSource);

      // Embed as PNG (signatures are uploaded as PNG)
      let sigImage;
      try {
        sigImage = await pdfDoc.embedPng(sigBytes);
      } catch {
        // Fallback: try JPG if PNG fails
        sigImage = await pdfDoc.embedJpg(sigBytes);
      }

      // Convert ratios to actual coordinates
      const x = sig.x * pageWidth;
      const w = sig.width * pageWidth;
      const h = sig.height * pageHeight;
      // y ratio is from top, but PDF y is from bottom
      const y = pageHeight - (sig.y * pageHeight) - h;

      page.drawImage(sigImage, {
        x,
        y,
        width: w,
        height: h,
      });
    }

    // Save the signed PDF
    const signedBytes = await pdfDoc.save();

    // Clean up
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "esign");

    return new NextResponse(Buffer.from(signedBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-signed.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("esign route error:", err);

    const raw = err && typeof err === "object" && err.message ? err.message : "";
    const safe = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob.vercel/i.test(raw)
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

async function signatureSourceToBytes(signatureSource) {
  if (!signatureSource || typeof signatureSource !== "string") {
    throw new Error("Missing signature image data.");
  }

  if (signatureSource.startsWith("data:")) {
    const [, encoded = ""] = signatureSource.split(",", 2);
    return Uint8Array.from(Buffer.from(encoded, "base64"));
  }

  const sigRes = await fetch(signatureSource);
  if (!sigRes.ok) {
    throw new Error(`Failed to fetch signature image (${sigRes.status})`);
  }

  return new Uint8Array(await sigRes.arrayBuffer());
}
