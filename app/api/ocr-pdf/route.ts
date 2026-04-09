import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest } from "next/server";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

const API_BASE = "https://api.ilovepdf.com/v1";

function jsonError(message: string, status: number = 500, details?: string): Response {
  const body: { error: string; details?: string } = { error: message };
  if (details) body.details = details;
  return Response.json(body, { status });
}

async function readUpstreamError(res: Response): Promise<string> {
  try {
    const ct: string = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      const j = await res.json();
      return JSON.stringify(j);
    }
    return await res.text();
  } catch {
    return "";
  }
}

interface ResolvedInput {
  buffer: Buffer;
  originalName: string;
  lang: string;
  uploadedBlobUrl?: string;
  error?: never;
}

interface ResolvedInputError {
  error: Response;
  buffer?: never;
  originalName?: never;
  lang?: never;
  uploadedBlobUrl?: never;
}

/**
 * Resolve input to { buffer, originalName, lang }.
 * Accepts either JSON { blobUrl, lang? } or multipart form-data.
 */
async function resolveInput(request: NextRequest): Promise<ResolvedInput | ResolvedInputError> {
  const contentType: string = request.headers.get("content-type") || "";
  const isJson: boolean = contentType.includes("application/json");

  if (isJson) {
    // ---- JSON path: { blobUrl, lang? } ----
    const body = await request.json();
    const blobUrl: string = body.blobUrl;
    const lang: string = body.lang || "eng";

    if (!blobUrl || typeof blobUrl !== "string") {
      return { error: jsonError('JSON body must include "blobUrl".', 400) };
    }
    if (!isValidBlobUrl(blobUrl)) {
      return { error: jsonError("Invalid file URL.", 400) };
    }

    const res = await fetch(blobUrl);
    if (!res.ok) {
      console.error(`Failed to fetch blob URL (${res.status})`);
      return { error: jsonError("Failed to retrieve your uploaded file. Please try uploading again.", 502) };
    }

    // Derive filename from URL pathname
    let originalName = "input.pdf";
    try {
      const pathname = new URL(blobUrl).pathname;
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0) {
        originalName = decodeURIComponent(segments[segments.length - 1]);
      }
    } catch {
      // keep default
    }

    const buffer: Buffer = Buffer.from(await res.arrayBuffer());
    return { buffer, originalName, lang, uploadedBlobUrl: blobUrl };
  } else {
    // ---- Multipart path (backwards compat) ----
    const incoming = await request.formData();

    let file: FormDataEntryValue | null = incoming.get("file");
    if (!file || typeof file === "string") file = incoming.get("pdf");

    if (!file || typeof file === "string") {
      return {
        error: jsonError(
          'No PDF file provided. Send a file under the key "file" or "pdf".',
          400
        ),
      };
    }

    const originalName: string = file.name || "input.pdf";
    const ext: string = originalName.split(".").pop()?.toLowerCase() || "";
    if (file.type !== "application/pdf" && ext !== "pdf") {
      return { error: jsonError("Please upload a PDF", 400) };
    }

    const langField = incoming.get("lang");
    const lang: string =
      langField && typeof langField === "string" && langField.trim().length > 0
        ? langField.trim()
        : "eng";

    const buffer: Buffer = Buffer.from(await file.arrayBuffer());
    return { buffer, originalName, lang };
  }
}

/**
 * Resolve input from an already-parsed JSON body (used when async check consumed the request body).
 */
async function resolveInputFromParsedBody(body: any): Promise<ResolvedInput | ResolvedInputError> {
  const blobUrl: string = body.blobUrl;
  const lang: string = body.lang || "eng";

  if (!blobUrl || typeof blobUrl !== "string") {
    return { error: jsonError('JSON body must include "blobUrl".', 400) };
  }
  if (!isValidBlobUrl(blobUrl)) {
    return { error: jsonError("Invalid file URL.", 400) };
  }

  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status})`);
    return { error: jsonError("Failed to retrieve your uploaded file. Please try uploading again.", 502) };
  }

  let originalName = "input.pdf";
  try {
    const pathname = new URL(blobUrl).pathname;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      originalName = decodeURIComponent(segments[segments.length - 1]);
    }
  } catch {
    // keep default
  }

  const buffer: Buffer = Buffer.from(await res.arrayBuffer());
  return { buffer, originalName, lang, uploadedBlobUrl: blobUrl };
}

export async function POST(request: NextRequest): Promise<Response> {
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
      return jsonError("The processing service is temporarily unavailable. Please try again later.", 500);
    }

    // -----------------------------------------------------------
    // Check for async mode (JSON requests only)
    // -----------------------------------------------------------
    const contentType: string = request.headers.get("content-type") || "";
    const isJsonRequest: boolean = contentType.includes("application/json");
    let parsedBody: any = null;

    if (isJsonRequest) {
      parsedBody = await request.json();

      if (parsedBody.async === true) {
        const blobUrl = parsedBody.blobUrl;
        if (!blobUrl || typeof blobUrl !== "string") {
          return jsonError('JSON body must include "blobUrl".', 400);
        }
        if (!isValidBlobUrl(blobUrl)) {
          return jsonError("Invalid file URL.", 400);
        }

        const { createJob } = await import("@/lib/job-queue");
        const result = await createJob({
          userId: user.id,
          userPlan: profile?.plan,
          tool: "ocr-pdf",
          inputBlobUrl: blobUrl,
          inputParams: {
            lang: parsedBody.lang || "eng",
            original_name: parsedBody.fileName || "input.pdf",
          },
        });
        if ("error" in result) {
          return jsonError(result.error, 500);
        }
        const { logUsage } = await import("@/lib/usage-check");
        await logUsage(user.id, "ocr-pdf");
        return Response.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
      }
    }

    // -----------------------------------------------------------
    // Resolve input from JSON or multipart (sync mode)
    // -----------------------------------------------------------
    const input = isJsonRequest
      ? await resolveInputFromParsedBody(parsedBody)
      : await resolveInput(request);
    if (input.error) return input.error;

    const { buffer, originalName, lang } = input;
    uploadedBlobUrl = input.uploadedBlobUrl || null;

    // ── Reject blank PDFs before hitting paid API ──
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check");
      const { blank } = await isBlankPdf(buffer);
      if (blank) {
        return jsonError("This file appears to be empty. Please upload a PDF with content.", 400);
      }
    } catch (blankCheckErr) {
      console.error("Blank PDF check failed (skipping):", blankCheckErr);
      // Continue processing — let the API handle invalid files
    }

    const region: string = (process.env.ILOVEAPI_REGION || "us").toLowerCase();

    // 1) AUTH -> token
    const authRes = await fetch(`${API_BASE}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ public_key: publicKey }),
    });

    if (!authRes.ok) {
      const details: string = await readUpstreamError(authRes);
      return jsonError("OCR failed: auth error", 500, details || `HTTP ${authRes.status}`);
    }

    const authJson = await authRes.json();
    const token: string | undefined = authJson?.token;
    if (!token) {
      return jsonError("OCR failed: auth response missing token", 500, JSON.stringify(authJson));
    }

    const authHeaders: Record<string, string> = { Authorization: `Bearer ${token}` };

    // 2) START -> server + task
    const startUrl = `${API_BASE}/start/pdfocr/${region}`;
    let startRes = await fetch(startUrl, { method: "GET", headers: authHeaders });
    if (startRes.status === 405) {
      startRes = await fetch(startUrl, { method: "POST", headers: authHeaders });
    }

    if (!startRes.ok) {
      const details: string = await readUpstreamError(startRes);
      return jsonError("OCR failed: start error", 500, details || `HTTP ${startRes.status}`);
    }

    const startJson = await startRes.json();
    const server: string | undefined = startJson?.server;
    const task: string | undefined = startJson?.task;
    if (!server || !task) {
      return jsonError("OCR failed: start response missing server/task", 500, JSON.stringify(startJson));
    }

    const serverBase = `https://${server}`;

    // 3) UPLOAD -> server_filename
    const uploadForm = new FormData();
    uploadForm.append("task", task);

    const blob = new Blob([buffer], { type: "application/pdf" });
    uploadForm.append("file", blob, originalName);

    const uploadRes = await fetch(`${serverBase}/v1/upload`, {
      method: "POST",
      headers: authHeaders,
      body: uploadForm,
    });

    if (!uploadRes.ok) {
      const details: string = await readUpstreamError(uploadRes);
      return jsonError("OCR failed: upload error", 500, details || `HTTP ${uploadRes.status}`);
    }

    const uploadJson = await uploadRes.json();
    const serverFilename: string | undefined = uploadJson?.server_filename;
    if (!serverFilename) {
      return jsonError("OCR failed: upload response missing server_filename", 500, JSON.stringify(uploadJson));
    }

    // 4) PROCESS -> pdfocr with ocr_languages
    const processPayload = {
      task,
      tool: "pdfocr",
      files: [{ server_filename: serverFilename, filename: originalName }],
      ocr_languages: [lang],
    };

    const processRes = await fetch(`${serverBase}/v1/process`, {
      method: "POST",
      headers: { ...authHeaders, "Content-Type": "application/json" },
      body: JSON.stringify(processPayload),
    });

    if (!processRes.ok) {
      const details: string = await readUpstreamError(processRes);
      return jsonError("OCR failed: process error", 500, details || `HTTP ${processRes.status}`);
    }

    // 5) DOWNLOAD -> final bytes
    const downloadRes = await fetch(`${serverBase}/v1/download/${task}`, {
      method: "GET",
      headers: authHeaders,
    });

    if (!downloadRes.ok) {
      const details: string = await readUpstreamError(downloadRes);
      return jsonError("OCR failed: download error", 500, details || `HTTP ${downloadRes.status}`);
    }

    const out: Buffer = Buffer.from(await downloadRes.arrayBuffer());

    // Clean up uploaded blob from Vercel Blob storage
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    const baseName: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

    // Log successful usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "ocr-pdf");

    return new Response(out, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="ocr_${baseName}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    console.error("OCR route failed:", (err as Error)?.stack || err);
    return jsonError("An error occurred while processing your file. Please try again.", 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
  }
}
