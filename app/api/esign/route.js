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
 *     signatureBlobUrl: string   // uploaded signature image blob URL
 *   }>
 * }
 */
export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;
  const signatureBlobUrls = [];

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

    const signatures = body.signatures;
    if (!Array.isArray(signatures) || signatures.length === 0) {
      return errorResponse("No signatures specified.", 400);
    }

    // Collect signature blob URLs for cleanup
    for (const sig of signatures) {
      if (sig.signatureBlobUrl && typeof sig.signatureBlobUrl === "string") {
        signatureBlobUrls.push(sig.signatureBlobUrl);
      }
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

      // Fetch the signature image
      const sigRes = await fetch(sig.signatureBlobUrl);
      if (!sigRes.ok) {
        throw new Error(`Failed to fetch signature image (${sigRes.status})`);
      }
      const sigBytes = new Uint8Array(await sigRes.arrayBuffer());

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
    await Promise.allSettled(signatureBlobUrls.map((url) => del(url)));
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
    if (tmpPath) await unlink(tmpPath).catch(() => {});
    await Promise.allSettled(signatureBlobUrls.map((url) => del(url)));

    console.error("esign route error:", err);

    const message = err && typeof err === "object" && err.message
      ? err.message
      : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
