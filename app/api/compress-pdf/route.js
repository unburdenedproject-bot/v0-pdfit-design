export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

const ALLOWED_LEVELS = new Set(["low", "recommended", "extreme"]);

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
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("compress-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 })
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
    let compressionLevel = "recommended";

    if (isJson) {
      // ---- JSON path: { blobUrl, compression_level? } ----
      const body = await request.json();
      const blobUrl = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }

      if (body.compression_level && ALLOWED_LEVELS.has(body.compression_level)) {
        compressionLevel = body.compression_level;
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = result.name;
    } else {
      // ---- Multipart path: formData key "file" (backwards compat) ----
      const formData = await request.formData();
      let file = formData.get("file");
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

      let level = formData.get("compression_level") || "recommended";
      if (typeof level === "string" && ALLOWED_LEVELS.has(level)) {
        compressionLevel = level;
      }

      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    // -----------------------------------------------------------
    // Common: run iLovePDF compress task
    // -----------------------------------------------------------
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile"))
      .default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("compress");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    await task.addFile(pdfFile);

    await task.process({ compression_level: compressionLevel });

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
    if (usage) await logUsage(usage.userId, "compress-pdf");

    const res = new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-compressed.pdf"`,
        "Cache-Control": "no-store",
      },
    })
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options)
    }
    return res;
  } catch (err) {
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }

    console.error("compress-pdf route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
