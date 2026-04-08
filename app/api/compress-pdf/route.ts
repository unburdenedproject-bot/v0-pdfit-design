export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";
import { blobUrlToTmp, cleanupTmp } from "@/lib/api/blob-handler";
import { errorResponse, safeMessageFrom } from "@/lib/api/error-handler";

const ALLOWED_LEVELS = new Set(["low", "recommended", "extreme"]);

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const requestId = logger.request("compress-pdf");
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("compress-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 })
    }
    logger.info("auth_passed", { requestId, userId: usage.userId, tool: "compress-pdf" });

    const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse(
        "The processing service is temporarily unavailable. Please try again later.",
        500
      );
    }

    // -----------------------------------------------------------
    // Detect request type: JSON (blob URL) or multipart (file)
    // -----------------------------------------------------------
    const contentType: string = request.headers.get("content-type") || "";
    const isJson: boolean = contentType.includes("application/json");

    let originalName: string = "input.pdf";
    let compressionLevel: string = "recommended";

    if (isJson) {
      // ---- JSON path: { blobUrl, compression_level?, async? } ----
      const body = await request.json();
      const blobUrl: string = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }
      if (!isValidBlobUrl(blobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }

      if (body.compression_level && ALLOWED_LEVELS.has(body.compression_level)) {
        compressionLevel = body.compression_level;
      }

      // ---- Async mode: create a job and return immediately ----
      if (body.async === true) {
        const { createJob } = await import("@/lib/job-queue");
        const result = await createJob({
          userId: usage.userId === "anonymous" ? null : usage.userId,
          userPlan: (usage as any).plan,
          tool: "compress-pdf",
          inputBlobUrl: blobUrl,
          inputParams: { compression_level: compressionLevel, original_name: body.fileName || "input.pdf" },
        });
        if ("error" in result) {
          return errorResponse(result.error, 500);
        }
        await logUsage(usage.userId, "compress-pdf");
        logger.info("job_queued", { requestId, jobId: result.jobId, tool: "compress-pdf" });
        return NextResponse.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = result.name;

      const { readFile } = await import("fs/promises");
      const headerBytes: Buffer = await readFile(tmpPath).then((buf) => buf.subarray(0, 5));
      if (headerBytes.length < 5 || headerBytes.toString("ascii") !== "%PDF-") {
        await unlink(tmpPath).catch(() => {});
        tmpPath = null;
        return errorResponse("The uploaded file is not a valid PDF and cannot be compressed.", 400);
      }
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
      const ext: string = originalName.split(".").pop()?.toLowerCase() || "";

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

      const buffer: Buffer = Buffer.from(await file.arrayBuffer());
      if (buffer.length < 5 || buffer.subarray(0, 5).toString("ascii") !== "%PDF-") {
        return errorResponse("The uploaded file is not a valid PDF and cannot be compressed.", 400);
      }

      const id: string = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      await writeFile(tmpPath, buffer);
    }

    // ── Reject blank PDFs before hitting paid API ──
    const { readFile: readTmpFile } = await import("fs/promises");
    const pdfBytes: Buffer = await readTmpFile(tmpPath);
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check");
      const { blank } = await isBlankPdf(pdfBytes);
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

    const baseName: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

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
    logger.requestEnd(requestId, "compress-pdf", "success", Date.now() - startTime);
    return res;
  } catch (err) {
    logger.error("processing_failed", err, { requestId, tool: "compress-pdf" });
    return errorResponse(safeMessageFrom(err), 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
