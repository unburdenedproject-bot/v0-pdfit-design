import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

const ALLOWED_EXTENSIONS: Set<string> = new Set([
  "doc", "docx", "ppt", "pptx", "xls", "xlsx", "odt", "odp", "ods",
]);

/**
 * Fetch a Vercel Blob URL and write it to /tmp.
 * Returns { tmpPath, name }.
 */
async function blobUrlToTmp(blobUrl: string): Promise<{ tmpPath: string; name: string }> {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
    throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
  }

  let name: string = "input.docx";
  try {
    const pathname = new URL(blobUrl).pathname;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      name = decodeURIComponent(segments[segments.length - 1]);
    }
  } catch {
    // keep default name
  }

  const id: string = randomUUID();
  const tmpPath: string = join("/tmp", `${id}-${name}`);
  if (res.body) { const nodeStream = Readable.fromWeb(res.body as any); await pipeline(nodeStream, createWriteStream(tmpPath)); } else { const buf: Buffer = Buffer.from(await res.arrayBuffer()); await writeFile(tmpPath, buf); }
  return { tmpPath, name };
}

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

function getExtension(filename: string): string {
  const parts = filename.split(".");
  return parts.length > 1 ? parts.pop()!.toLowerCase() : "";
}

export async function POST(request: NextRequest) {
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Usage check: auth + daily limit
    const { createClient } = await import("@/lib/supabase/server");
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

    let originalName: string = "input.docx";

    if (isJson) {
      // ---- JSON path: { blobUrl } ----
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
          userId: user.id,
          userPlan: profile?.plan,
          tool: "office-to-pdf",
          inputBlobUrl: blobUrl,
          inputParams: { original_name: body.originalName || "input.docx" },
        });
        if ("error" in result) {
          return errorResponse(result.error, 500);
        }
        const { logUsage } = await import("@/lib/usage-check");
        await logUsage(user.id, "office-to-pdf");
        return Response.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = result.name;

      // Validate extension
      const ext: string = getExtension(originalName);
      if (!ALLOWED_EXTENSIONS.has(ext)) {
        await unlink(tmpPath).catch(() => {});
        return errorResponse(
          `Invalid file type ".${ext}". Allowed: ${[...ALLOWED_EXTENSIONS].join(", ")}.`,
          400
        );
      }
    } else {
      // ---- Multipart path: formData key "file" (backwards compat) ----
      const formData = await request.formData();
      let file: FormDataEntryValue | null = formData.get("file");
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

      originalName = file.name || "input.docx";
      const ext: string = getExtension(originalName);

      if (!ALLOWED_EXTENSIONS.has(ext)) {
        return errorResponse(
          `Invalid file type ".${ext}". Allowed: ${[...ALLOWED_EXTENSIONS].join(", ")}.`,
          400
        );
      }

      const id: string = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer: Buffer = Buffer.from(await file.arrayBuffer());
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

    const baseName: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

    // Log successful usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "office-to-pdf");

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    console.error("office-to-pdf route error:", err);

    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob.vercel/i.test(raw)
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
