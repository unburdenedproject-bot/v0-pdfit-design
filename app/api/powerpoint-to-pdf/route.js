export const runtime = "nodejs";

import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

const ALLOWED_EXTENSIONS = new Set(["ppt", "pptx"]);

/**
 * Fetch a Vercel Blob URL and write it to /tmp.
 * Returns { tmpPath, name }.
 */
async function blobUrlToTmp(blobUrl) {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
  }

  let name = "input.pptx";
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

function getExtension(filename) {
  const parts = filename.split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "";
}

export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

  try {
    // Usage check: auth + daily limit
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return Response.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
    if (profile?.plan !== "pro" && profile?.plan !== "business") {
      return Response.json({ error: "upgrade_required" }, { status: 403 });
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

    let originalName = "input.pptx";

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
      originalName = result.name;

      // Validate extension
      const ext = getExtension(originalName);
      if (!ALLOWED_EXTENSIONS.has(ext)) {
        await unlink(tmpPath).catch(() => {});
        return errorResponse(
          `Only PowerPoint files are accepted. Got ".${ext}".`,
          400
        );
      }
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
          'No file provided. Send a file under the key "file".',
          400
        );
      }

      originalName = file.name || "input.pptx";
      const ext = getExtension(originalName);

      if (!ALLOWED_EXTENSIONS.has(ext)) {
        return errorResponse(
          `Only PowerPoint files are accepted. Got ".${ext}".`,
          400
        );
      }

      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    // -----------------------------------------------------------
    // Common: run iLovePDF officepdf task
    // -----------------------------------------------------------
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("officepdf");

    await task.start();

    const officeFile = new ILovePDFFile(tmpPath);
    await task.addFile(officeFile);

    await task.process();

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
    if (usage) await logUsage(usage.userId, "powerpoint-to-pdf");

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }

    console.error("powerpoint-to-pdf route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
