export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";
import { blobUrlToTmp, cleanupTmp } from "@/lib/api/blob-handler";
import { errorResponse } from "@/lib/api/error-handler";
import { isToolEnabled } from "@/lib/feature-flags";

export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

  try {
    // Kill switch: Paula can disable this tool instantly via Supabase dashboard (no redeploy).
    const flag = await isToolEnabled("pdf-to-txt");
    if (!flag.enabled) {
      return NextResponse.json({ error: flag.message }, { status: 503 });
    }

    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("pdf-to-txt");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse("The processing service is temporarily unavailable. Please try again later.", 500);
    }

    const contentType = request.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let originalName = "input.pdf";

    if (isJson) {
      const body = await request.json();
      const blobUrl = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }
      if (!isValidBlobUrl(blobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }

      // ---- Async mode: create a job and return immediately ----
      if (body.async === true) {
        const { createJob } = await import("@/lib/job-queue");
        const result = await createJob({
          userId: usage.userId === "anonymous" ? null : usage.userId,
          userPlan: usage.plan,
          tool: "pdf-to-txt",
          inputBlobUrl: blobUrl,
          inputParams: { original_name: body.originalName || "input.pdf" },
        });
        if ("error" in result) {
          return errorResponse(result.error, 500);
        }
        if (usage) await logUsage(usage.userId, "pdf-to-txt");
        return Response.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = result.name;
    } else {
      const formData = await request.formData();
      const file = formData.get("file");
      if (!file || typeof file === "string") {
        return errorResponse('No file provided. Send a PDF file under the key "file".', 400);
      }

      originalName = file.name || "input.pdf";
      const ext = originalName.split(".").pop()?.toLowerCase() || "";
      if (ext !== "pdf") {
        return errorResponse(`Invalid file type ".${ext}". Only PDF files are accepted.`, 400);
      }

      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    // ── Reject blank PDFs before hitting paid API ──
    const { readFile: readTmpFile } = await import("fs/promises");
    const pdfBytes = await readTmpFile(tmpPath);
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check");
      const { blank } = await isBlankPdf(pdfBytes);
      if (blank) {
        await unlink(tmpPath).catch(() => {});
        tmpPath = null;
        return errorResponse("This file appears to be empty. Please upload a PDF with content.", 400);
      }
    } catch (blankCheckErr) {
      console.error("Blank PDF check failed (skipping):", blankCheckErr);
      // Continue processing — let the API handle invalid files
    }

    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("extract");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    await task.addFile(pdfFile);

    await task.process();

    const data = await task.download();

    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

    if (usage) await logUsage(usage.userId, "pdf-to-txt");

    const res = new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": `attachment; filename="${baseName}.txt"`,
        "Cache-Control": "no-store",
      },
    });
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options);
    }
    return res;
  } catch (err) {
    console.error("pdf-to-txt route error:", err);

    const rawMessage =
      err && typeof err === "object" && err.message
        ? err.message
        : "";

    // Return user-friendly messages for common errors
    if (rawMessage.includes("400") || rawMessage.includes("corrupt") || rawMessage.includes("invalid")) {
      return errorResponse("The uploaded file appears to be corrupted or invalid. Please upload a valid PDF file.", 400);
    }

    return errorResponse("Something went wrong while extracting text. Please try again or upload a different file.", 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
