export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

/**
 * Fetch a Vercel Blob URL and write it to /tmp.
 * Returns { tmpPath, name }.
 */
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
  return { tmpPath, name };
}

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

  try {
    // Usage check: auth + daily limit
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("split-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse(
        "Server is not configured with iLoveAPI credentials.",
        500
      );
    }

    // -----------------------------------------------------------
    // Detect request type: JSON (blob URL) or multipart (file)
    // -----------------------------------------------------------
    const contentType = request.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let originalName = "input.pdf";
    let ranges = "";

    if (isJson) {
      // ---- JSON path: { blobUrl, ranges } ----
      const body = await request.json();
      const blobUrl = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }

      ranges = body.ranges;
      if (!ranges || typeof ranges !== "string" || !ranges.trim()) {
        return errorResponse(
          'Missing "ranges" field. Provide page ranges like "1-3,4-6".',
          400
        );
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = result.name;
    } else {
      // ---- Multipart path: formData key "file" (backwards compat) ----
      const formData = await request.formData();
      const file = formData.get("file");
      if (!file || typeof file === "string") {
        return errorResponse(
          'No file provided. Send a PDF file under the key "file".',
          400
        );
      }

      originalName = file.name || "input.pdf";
      const ext = originalName.split(".").pop()?.toLowerCase() || "";

      if (ext !== "pdf") {
        return errorResponse(
          `Invalid file type ".${ext}". Only PDF files are accepted.`,
          400
        );
      }

      ranges = formData.get("ranges");
      if (!ranges || typeof ranges !== "string" || !ranges.trim()) {
        return errorResponse(
          'Missing "ranges" field. Provide page ranges like "1-3,4-6".',
          400
        );
      }

      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    // Validate ranges format
    const cleanRanges = ranges.trim().replace(/\s/g, "");
    const rangesPattern = /^\d+(-\d+)?(,\d+(-\d+)?)*$/;
    if (!rangesPattern.test(cleanRanges)) {
      if (tmpPath) await unlink(tmpPath).catch(() => {});
      return errorResponse(
        `Invalid ranges format "${ranges}". Use comma-separated ranges like "1-3,4-6".`,
        400
      );
    }

    // ── Reject blank PDFs before hitting paid API ──
    const { readFile: readTmpFile } = await import("fs/promises");
    const pdfBytesCheck = await readTmpFile(tmpPath);
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check");
      const { blank } = await isBlankPdf(pdfBytesCheck);
      if (blank) {
        await unlink(tmpPath).catch(() => {});
        tmpPath = null;
        return errorResponse("This file appears to be empty. Please upload a PDF with content.", 400);
      }
    } catch {
      await unlink(tmpPath).catch(() => {});
      tmpPath = null;
      return errorResponse("This file appears to be empty or unreadable. Please upload a PDF with content.", 400);
    }

    // Validate the PDF has more than 1 page before splitting
    const { readFile } = await import("fs/promises");
    const { PDFDocument } = await import("pdf-lib");
    const pdfBytes = await readFile(tmpPath);
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
    const pageCount = pdfDoc.getPageCount();
    if (pageCount <= 1) {
      await unlink(tmpPath).catch(() => {});
      return errorResponse(
        "A single-page PDF cannot be split. Please upload a PDF with 2 or more pages.",
        400
      );
    }

    // -----------------------------------------------------------
    // Common: run iLovePDF split task
    // -----------------------------------------------------------
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile"))
      .default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("split");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    await task.addFile(pdfFile);

    await task.process({ ranges: cleanRanges });

    const data = await task.download();

    // Clean up uploaded blob from Vercel Blob storage
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    // Clean up temp file
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

    // Log successful usage
    if (usage) await logUsage(usage.userId, "split-pdf");

    // Detect what iLovePDF actually returned
    const outBuf = Buffer.isBuffer(data) ? data : Buffer.from(data);
    const sig2 = outBuf.subarray(0, 2).toString("utf8");
    const sig4 = outBuf.subarray(0, 4).toString("utf8");
    const isZip = sig2 === "PK";
    const isPdf = sig4 === "%PDF";
    console.log("iLovePDF split output bytes:", outBuf.length, "sig:", { sig2, sig4 });

    const outContentType = isZip ? "application/zip" : isPdf ? "application/pdf" : "application/octet-stream";
    const outFileName = isZip ? `${baseName}-split.zip` : `${baseName}-split.pdf`;

    const res = new NextResponse(outBuf, {
      status: 200,
      headers: {
        "Content-Type": outContentType,
        "Content-Disposition": `attachment; filename="${outFileName}"`,
        "Cache-Control": "no-store",
      },
    });
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options);
    }
    return res;
  } catch (err) {
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }

    console.error("split-pdf route error:", err);

    const rawMessage =
      err && typeof err === "object" && err.message
        ? err.message
        : "";

    if (rawMessage.includes("400") || rawMessage.includes("corrupt") || rawMessage.includes("invalid")) {
      return errorResponse("The uploaded file appears to be corrupted or invalid. Please upload a valid PDF file.", 400);
    }

    return errorResponse("Something went wrong while splitting your PDF. Please try again or upload a different file.", 500);
  }
}
