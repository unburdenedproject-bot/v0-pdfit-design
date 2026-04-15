export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";
import { blobUrlToTmp, cleanupTmp } from "@/lib/api/blob-handler";
import { errorResponse, safeMessageFrom } from "@/lib/api/error-handler";
import { isToolEnabled } from "@/lib/feature-flags";

export async function POST(request: NextRequest) {
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Kill switch: Paula can disable this tool instantly via Supabase dashboard (no redeploy).
    const flag = await isToolEnabled("extract-images-from-pdf");
    if (!flag.enabled) {
      return NextResponse.json({ error: flag.message }, { status: 503 });
    }

    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("extract-images-from-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse("The processing service is temporarily unavailable. Please try again later.", 500);
    }

    const contentType: string = request.headers.get("content-type") || "";
    const isJson: boolean = contentType.includes("application/json");

    let originalName: string = "input.pdf";

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

      // ---- Async mode: create a job and return immediately ----
      if (body.async === true) {
        const { createJob } = await import("@/lib/job-queue");
        const result = await createJob({
          userId: usage.userId === "anonymous" ? null : usage.userId,
          userPlan: (usage as any).plan,
          tool: "extract-images-from-pdf",
          inputBlobUrl: blobUrl,
          inputParams: { original_name: body.originalName || "input.pdf" },
        });
        if ("error" in result) {
          return errorResponse(result.error, 500);
        }
        await logUsage(usage.userId, "extract-images-from-pdf");
        return NextResponse.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = (body.originalName && typeof body.originalName === "string")
        ? body.originalName
        : result.name;
    } else {
      const formData = await request.formData();
      let file = formData.get("file");
      if (!file) {
        const files = formData.getAll("files");
        if (files.length > 0) file = files[0];
      }

      if (!file || typeof file === "string") {
        return errorResponse('No PDF file provided. Send a file under the key "file".', 400);
      }

      originalName = file.name || "input.pdf";
      const id: string = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer: Buffer = Buffer.from(await file.arrayBuffer());
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
    } catch (blankCheckErr) {
      console.error("Blank PDF check failed (skipping):", blankCheckErr);
      // Continue processing — let the API handle invalid files
    }

    // Use pdfjpg with "extract" mode to extract embedded images
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("pdfjpg");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    await task.addFile(pdfFile);

    await task.process({ pdfjpg_mode: "extract" });

    const data = await task.download();

    const JSZip = (await import("jszip")).default;
    const originalBase: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}/g, "");

    const newZip = new JSZip();

    const isZip: boolean = data[0] === 0x50 && data[1] === 0x4B;
    if (isZip) {
      const zip = await JSZip.loadAsync(data);
      const entries: string[] = Object.keys(zip.files).sort();
      let imgNum: number = 1;
      for (const entryName of entries) {
        const entry = zip.files[entryName];
        if (!entry.dir) {
          const ext: string = entryName.split(".").pop() || "jpg";
          const newName: string = `${originalBase}-image-${String(imgNum).padStart(4, "0")}.${ext}`;
          const content = await entry.async("nodebuffer");
          newZip.file(newName, content);
          imgNum++;
        }
      }
    } else {
      newZip.file(`${originalBase}-image-0001.jpg`, data);
    }

    const renamedData: Buffer = await newZip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });

    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    if (usage) await logUsage(usage.userId, "extract-images-from-pdf");

    const res = new NextResponse(renamedData, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${originalBase}-extracted-images.zip"`,
        "Cache-Control": "no-store",
      },
    });
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options);
    }
    return res;
  } catch (err) {
    console.error("extract-images-from-pdf route error:", err);
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
