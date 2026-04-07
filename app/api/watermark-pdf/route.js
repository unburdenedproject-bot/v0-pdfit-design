export const runtime = "nodejs";
export const maxDuration = 300;

import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

/**
 * Fetch a Vercel Blob URL and write it to /tmp.
 * Returns { tmpPath, name }.
 */
async function blobUrlToTmp(blobUrl) {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
    throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
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

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse(
        "The processing service is temporarily unavailable. Please try again later.",
        500
      );
    }

    // -----------------------------------------------------------
    // Detect request type: JSON (blob URL) or multipart (file)
    // -----------------------------------------------------------
    const contentType = request.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let originalName = "input.pdf";
    let watermarkText = "CONFIDENTIAL";
    let transparency = 50;
    let fontSize = 48;
    let fontColor = "#000000";
    let position = "center";

    if (isJson) {
      // ---- JSON path: { blobUrl, text, transparency?, fontSize?, color?, position? } ----
      const body = await request.json();
      const blobUrl = body.blobUrl;
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
        const t = Number(body.transparency);
        if (!isNaN(t) && t >= 0 && t <= 100) {
          transparency = t;
        }
      }

      if (body.fontSize !== undefined) {
        const fs = Number(body.fontSize);
        if (!isNaN(fs) && fs >= 8 && fs <= 120) {
          fontSize = fs;
        }
      }

      if (body.color && typeof body.color === "string") {
        fontColor = body.color;
      }

      if (body.position && typeof body.position === "string") {
        const allowed = ["center", "top-left", "top-right", "bottom-left", "bottom-right"];
        if (allowed.includes(body.position)) {
          position = body.position;
        }
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

      const textField = formData.get("text");
      if (textField && typeof textField === "string") {
        watermarkText = textField;
      }

      const transField = formData.get("transparency");
      if (transField) {
        const t = Number(transField);
        if (!isNaN(t) && t >= 0 && t <= 100) {
          transparency = t;
        }
      }

      const fsField = formData.get("fontSize");
      if (fsField) {
        const fs = Number(fsField);
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
        const allowed = ["center", "top-left", "top-right", "bottom-left", "bottom-right"];
        if (allowed.includes(posField)) {
          position = posField;
        }
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
    } catch {
      await unlink(tmpPath).catch(() => {});
      tmpPath = null;
      return errorResponse("This file appears to be empty or unreadable. Please upload a PDF with content.", 400);
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
    let vertical_position = "middle";
    let horizontal_position = "center";
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

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

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

    const raw = err && typeof err === "object" && err.message ? err.message : "";
    const safe = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob.vercel/i.test(raw)
      ? "An error occurred while processing your file. Please try again."
      : (raw || "An unexpected error occurred.");

    return errorResponse(safe, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
