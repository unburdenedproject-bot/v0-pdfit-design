export const runtime = "nodejs";
export const maxDuration = 300;

import { del } from "@vercel/blob";

const API_BASE = "https://api.ilovepdf.com/v1";

function jsonError(message, status = 500, details) {
  const body = { error: message };
  if (details) body.details = details;
  return Response.json(body, { status });
}

async function readUpstreamError(res) {
  try {
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      const j = await res.json();
      return JSON.stringify(j);
    }
    return await res.text();
  } catch {
    return "";
  }
}

/**
 * Resolve input to { buffer, originalName, lang }.
 * Accepts either JSON { blobUrl, lang? } or multipart form-data.
 */
async function resolveInput(request) {
  const contentType = request.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");

  if (isJson) {
    // ---- JSON path: { blobUrl, lang? } ----
    const body = await request.json();
    const blobUrl = body.blobUrl;
    const lang = body.lang || "eng";

    if (!blobUrl || typeof blobUrl !== "string") {
      return { error: jsonError('JSON body must include "blobUrl".', 400) };
    }

    const res = await fetch(blobUrl);
    if (!res.ok) {
      return { error: jsonError(`Failed to fetch blob URL (${res.status}).`, 502) };
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

    const buffer = Buffer.from(await res.arrayBuffer());
    return { buffer, originalName, lang, uploadedBlobUrl: blobUrl };
  } else {
    // ---- Multipart path (backwards compat) ----
    const incoming = await request.formData();

    let file = incoming.get("file");
    if (!file || typeof file === "string") file = incoming.get("pdf");

    if (!file || typeof file === "string") {
      return {
        error: jsonError(
          'No PDF file provided. Send a file under the key "file" or "pdf".',
          400
        ),
      };
    }

    const originalName = file.name || "input.pdf";
    const ext = originalName.split(".").pop()?.toLowerCase() || "";
    if (file.type !== "application/pdf" && ext !== "pdf") {
      return { error: jsonError("Please upload a PDF", 400) };
    }

    const langField = incoming.get("lang");
    const lang =
      langField && typeof langField === "string" && langField.trim().length > 0
        ? langField.trim()
        : "eng";

    const buffer = Buffer.from(await file.arrayBuffer());
    return { buffer, originalName, lang };
  }
}

export async function POST(request) {
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
    if (profile?.plan !== "pro" && profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return Response.json({ error: "upgrade_required" }, { status: 403 });
    }

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;
    if (!publicKey || !secretKey) {
      return jsonError("Server is not configured with iLoveAPI credentials.", 500);
    }

    // -----------------------------------------------------------
    // Resolve input from JSON or multipart
    // -----------------------------------------------------------
    const input = await resolveInput(request);
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
    } catch {
      return jsonError("This file appears to be empty or unreadable. Please upload a PDF with content.", 400);
    }

    const region = (process.env.ILOVEAPI_REGION || "us").toLowerCase();

    // 1) AUTH -> token
    const authRes = await fetch(`${API_BASE}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ public_key: publicKey }),
    });

    if (!authRes.ok) {
      const details = await readUpstreamError(authRes);
      return jsonError("OCR failed: auth error", 500, details || `HTTP ${authRes.status}`);
    }

    const authJson = await authRes.json();
    const token = authJson?.token;
    if (!token) {
      return jsonError("OCR failed: auth response missing token", 500, JSON.stringify(authJson));
    }

    const authHeaders = { Authorization: `Bearer ${token}` };

    // 2) START -> server + task
    const startUrl = `${API_BASE}/start/pdfocr/${region}`;
    let startRes = await fetch(startUrl, { method: "GET", headers: authHeaders });
    if (startRes.status === 405) {
      startRes = await fetch(startUrl, { method: "POST", headers: authHeaders });
    }

    if (!startRes.ok) {
      const details = await readUpstreamError(startRes);
      return jsonError("OCR failed: start error", 500, details || `HTTP ${startRes.status}`);
    }

    const startJson = await startRes.json();
    const server = startJson?.server;
    const task = startJson?.task;
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
      const details = await readUpstreamError(uploadRes);
      return jsonError("OCR failed: upload error", 500, details || `HTTP ${uploadRes.status}`);
    }

    const uploadJson = await uploadRes.json();
    const serverFilename = uploadJson?.server_filename;
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
      const details = await readUpstreamError(processRes);
      return jsonError("OCR failed: process error", 500, details || `HTTP ${processRes.status}`);
    }

    // 5) DOWNLOAD -> final bytes
    const downloadRes = await fetch(`${serverBase}/v1/download/${task}`, {
      method: "GET",
      headers: authHeaders,
    });

    if (!downloadRes.ok) {
      const details = await readUpstreamError(downloadRes);
      return jsonError("OCR failed: download error", 500, details || `HTTP ${downloadRes.status}`);
    }

    const out = Buffer.from(await downloadRes.arrayBuffer());

    // Clean up uploaded blob from Vercel Blob storage
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

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
  } catch (err) {
    console.error("OCR route failed:", err?.stack || err);
    return jsonError("OCR failed", 500, err?.message || String(err));
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
  }
}
