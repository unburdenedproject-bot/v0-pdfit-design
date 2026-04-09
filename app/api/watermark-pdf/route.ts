export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";
import { blobUrlToTmp, cleanupTmp } from "@/lib/api/blob-handler";
import { errorResponse, safeMessageFrom } from "@/lib/api/error-handler";

export async function POST(request: NextRequest) {
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Usage check: auth + daily limit
    const { createClient } = await import("@/lib/supabase/server");
    const { logUsage } = await import("@/lib/usage-check");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return Response.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
    if (profile?.plan !== "pro" && profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return Response.json({ error: "upgrade_required" }, { status: 403 });
    }

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
    let watermarkText: string = "CONFIDENTIAL";
    let transparency: number = 50;
    let fontSize: number = 48;
    let fontColor: string = "#000000";
    let position: string = "center";

    if (isJson) {
      // ---- JSON path: { blobUrl, text, transparency?, fontSize?, color?, position? } ----
      const body = await request.json();
      const blobUrl: string = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }
      if (!isValidBlobUrl(blobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }

      if (body.text && typeof body.text === "string") {
        watermarkText = body.text;
      }

      if (body.transparency !== undefined) {
        const t: number = Number(body.transparency);
        if (!isNaN(t) && t >= 0 && t <= 100) {
          transparency = t;
        }
      }

      if (body.fontSize !== undefined) {
        const fs: number = Number(body.fontSize);
        if (!isNaN(fs) && fs >= 8 && fs <= 120) {
          fontSize = fs;
        }
      }

      if (body.color && typeof body.color === "string") {
        fontColor = body.color;
      }

      if (body.position && typeof body.position === "string") {
        const allowed: string[] = ["center", "top-left", "top-right", "bottom-left", "bottom-right"];
        if (allowed.includes(body.position)) {
          position = body.position;
        }
      }

      // ---- Async mode: create a job and return immediately ----
      if (body.async === true) {
        const { createJob } = await import("@/lib/job-queue");
        const result = await createJob({
          userId: user.id,
          userPlan: profile?.plan,
          tool: "watermark-pdf",
          inputBlobUrl: blobUrl,
          inputParams: {
            text: watermarkText,
            transparency,
            font_size: fontSize,
            font_color: fontColor,
            position,
            original_name: body.fileName || "input.pdf",
          },
        });
        if ("error" in result) {
          return errorResponse(result.error, 500);
        }
        await logUsage(user.id, "watermark-pdf");
        return Response.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
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
      const ext: string = originalName.split(".").pop()?.toLowerCase() || "";

      if (ext !== "pdf") {
        return errorResponse(
          `Invalid file type ".${ext}". Only PDF files are accepted.`,
          400
        );
      }

      const textField = formData.get("text");
      if (textField && typeof textField === "string") {
        watermarkText = textField;
      }

      const transField = formData.get("transparency");
      if (transField) {
        const t: number = Number(transField);
        if (!isNaN(t) && t >= 0 && t <= 100) {
          transparency = t;
        }
      }

      const fsField = formData.get("fontSize");
      if (fsField) {
        const fs: number = Number(fsField);
        if (!isNaN(fs) && fs >= 8 && fs <= 120) {
          fontSize = fs;
        }
      }

      const colorField = formData.get("color");
      if (colorField && typeof colorField === "string") {
        fontColor = colorField;
      }

      const posField = formData.get("position");
      if (posField && typeof posField === "string") {
        const allowed: string[] = ["center", "top-left", "top-right", "bottom-left", "bottom-right"];
        if (allowed.includes(posField)) {
          position = posField;
        }
      }

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

    // -----------------------------------------------------------
    // Common: run iLovePDF watermark task
    // -----------------------------------------------------------
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile"))
      .default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("watermark");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    await task.addFile(pdfFile);

    // Map position string to iLovePDF vertical/horizontal params
    let vertical_position: string = "middle";
    let horizontal_position: string = "center";
    if (position === "top-left") { vertical_position = "top"; horizontal_position = "left"; }
    else if (position === "top-right") { vertical_position = "top"; horizontal_position = "right"; }
    else if (position === "bottom-left") { vertical_position = "bottom"; horizontal_position = "left"; }
    else if (position === "bottom-right") { vertical_position = "bottom"; horizontal_position = "right"; }

    await task.process({
      mode: "text",
      text: watermarkText,
      transparency: transparency,
      font_family: "Arial",
      font_size: fontSize,
      font_color: fontColor,
      rotation: position === "center" ? 315 : 0,
      vertical_position: vertical_position,
      horizontal_position: horizontal_position,
      layer: "above",
    });

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
    await logUsage(user.id, "watermark-pdf");

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-watermarked.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("watermark-pdf route error:", err);
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
