export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink, readFile } from "fs/promises";
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
  return { tmpPath, name };
}

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

/**
 * Upload-Ready PDF Optimizer
 *
 * Chains two iLoveAPI tasks:
 *   1. Flatten (pdfa) — merges form fields, annotations, layers
 *   2. Compress — reduces file size for upload portals
 *
 * Free: automatic flatten + recommended compression
 * Pro:  optional flatten toggle, compression level, target size
 */
export async function POST(request) {
  let tmpPath = null;
  let flattenedPath = null;
  let uploadedBlobUrl = null;

  try {
    // Auth & usage check
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("upload-ready-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse("Server is not configured with iLoveAPI credentials.", 500);
    }

    // Parse request
    const contentType = request.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let originalName = "input.pdf";
    let compressionLevel = "recommended";
    let shouldFlatten = true;

    if (isJson) {
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

      // Pro options (ignored for free users — handled client-side)
      if (body.compression_level) compressionLevel = body.compression_level;
      if (body.flatten === false) shouldFlatten = false;
    } else {
      const formData = await request.formData();
      const file = formData.get("file");
      if (!file || typeof file === "string") {
        return errorResponse('No file provided. Send a PDF file under the key "file".', 400);
      }

      originalName = file.name || "input.pdf";
      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    let currentPath = tmpPath;

    // Step 1: Flatten (PDF/A conversion) — merges forms, annotations, layers
    if (shouldFlatten) {
      const instance1 = new ILovePDFApi(publicKey, secretKey);
      const flattenTask = instance1.newTask("pdfa");

      await flattenTask.start();
      await flattenTask.addFile(new ILovePDFFile(currentPath));
      await flattenTask.process({ conformance: "pdfa-2b" });

      const flattenedData = await flattenTask.download();

      flattenedPath = join("/tmp", `${randomUUID()}-flattened.pdf`);
      await writeFile(flattenedPath, flattenedData);
      currentPath = flattenedPath;
    }

    // Step 2: Compress — reduce file size
    const instance2 = new ILovePDFApi(publicKey, secretKey);
    const compressTask = instance2.newTask("compress");

    await compressTask.start();
    await compressTask.addFile(new ILovePDFFile(currentPath));
    await compressTask.process({ compression_level: compressionLevel });

    const data = await compressTask.download();

    // Clean up
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;
    if (flattenedPath) {
      await unlink(flattenedPath).catch(() => {});
      flattenedPath = null;
    }

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

    if (usage) await logUsage(usage.userId, "upload-ready-pdf");

    const res = new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-upload-ready.pdf"`,
        "Cache-Control": "no-store",
      },
    });
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options);
    }
    return res;
  } catch (err) {
    if (tmpPath) await unlink(tmpPath).catch(() => {});
    if (flattenedPath) await unlink(flattenedPath).catch(() => {});

    console.error("upload-ready-pdf route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
