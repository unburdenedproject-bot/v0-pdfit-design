export const runtime = "nodejs";

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
    const usage = await checkUsageAndAuth("pdf-to-png");
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

    if (isJson) {
      // ---- JSON path: { blobUrl } ----
      const body = await request.json();
      const blobUrl = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = (body.originalName && typeof body.originalName === "string")
        ? body.originalName
        : result.name;
    } else {
      // ---- Multipart path: formData key "file" (backwards compat) ----
      const formData = await request.formData();
      let file = formData.get("file");
      if (!file) {
        const files = formData.getAll("files");
        if (files.length > 0) file = files[0];
      }

      if (!file || typeof file === "string") {
        return errorResponse(
          'No PDF file provided. Send a file under the key "file".',
          400
        );
      }

      if (file.type && file.type !== "application/pdf") {
        return errorResponse(
          `Invalid file type "${file.type}". Only PDF files are accepted.`,
          400
        );
      }

      originalName = file.name || "input.pdf";
      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    // -----------------------------------------------------------
    // Common: run iLovePDF pdfjpg task
    // -----------------------------------------------------------
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("pdfjpg");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    await task.addFile(pdfFile);

    await task.process({ pdfjpg_mode: "pages", output_format: "png" });

    const data = await task.download();

    const JSZip = (await import("jszip")).default
    const originalBase = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}/g, "")

    const newZip = new JSZip()

    const isZip = data[0] === 0x50 && data[1] === 0x4B
    if (isZip) {
      const zip = await JSZip.loadAsync(data)
      const entries = Object.keys(zip.files).sort()
      let pageNum = 1
      for (const entryName of entries) {
        const entry = zip.files[entryName]
        if (!entry.dir) {
          const ext = "png"
          const newName = `${originalBase}-page-${String(pageNum).padStart(4, "0")}.${ext}`
          const content = await entry.async("nodebuffer")
          newZip.file(newName, content)
          pageNum++
        }
      }
    } else {
      newZip.file(`${originalBase}-page-0001.png`, data)
    }

    const renamedData = await newZip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" })

    // Clean up uploaded blob from Vercel Blob storage
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    // Clean up temp file
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    // Log successful usage
    if (usage) await logUsage(usage.userId, "pdf-to-png");

    const res = new NextResponse(renamedData, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}/g, "")}-png-images.zip"`,
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

    console.error("pdf-to-png route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
