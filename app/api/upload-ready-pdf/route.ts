export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest, NextResponse } from "next/server";
import { writeFile, unlink, readFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";
import { blobUrlToTmp, cleanupTmp } from "@/lib/api/blob-handler";
import { errorResponse, safeMessageFrom } from "@/lib/api/error-handler";

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
export async function POST(request: NextRequest): Promise<NextResponse | Response> {
  let tmpPath: string | null = null;
  let flattenedPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Auth & usage check
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("upload-ready-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse("The processing service is temporarily unavailable. Please try again later.", 500);
    }

    // Parse request
    const contentType: string = request.headers.get("content-type") || "";
    const isJson: boolean = contentType.includes("application/json");

    let originalName = "input.pdf";
    let compressionLevel = "recommended";
    let shouldFlatten = true;

    if (isJson) {
      const body = await request.json();
      const blobUrl: string = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }
      if (!isValidBlobUrl(blobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }

      // Pro options
      if (body.compression_level) compressionLevel = body.compression_level;
      if (body.flatten === false) shouldFlatten = false;

      // ---- Async mode: create a job and return immediately ----
      if (body.async === true) {
        const { createJob } = await import("@/lib/job-queue");
        const jobResult = await createJob({
          userId: usage.userId === "anonymous" ? null : (usage.userId || null),
          userPlan: (usage as any).plan,
          tool: "upload-ready-pdf",
          inputBlobUrl: blobUrl,
          inputParams: {
            original_name: body.originalName || body.fileName || "input.pdf",
            compression_level: compressionLevel,
            flatten: shouldFlatten,
          },
        });
        if ("error" in jobResult) {
          return errorResponse(jobResult.error, 500);
        }
        await logUsage(usage.userId || "anonymous", "upload-ready-pdf");
        return Response.json({ jobId: jobResult.jobId, status: "pending" }, { status: 202 });
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = (body.originalName && typeof body.originalName === "string")
        ? body.originalName
        : result.name;
    } else {
      const formData = await request.formData();
      const file = formData.get("file");
      if (!file || typeof file === "string") {
        return errorResponse('No file provided. Send a PDF file under the key "file".', 400);
      }

      originalName = file.name || "input.pdf";
      const id: string = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer: Buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    let currentPath: string = tmpPath;

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

    const baseName: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

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
  } catch (err: unknown) {
    console.error("upload-ready-pdf route error:", err);
    return errorResponse(safeMessageFrom(err), 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await cleanupTmp(tmpPath);
    await cleanupTmp(flattenedPath);
  }
}
