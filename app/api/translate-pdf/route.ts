import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";
import { guardPdfContent } from "@/lib/pdf-content-guard";

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

/**
 * Split text into chunks of at most `maxChars`, preferring to break at
 * paragraph boundaries (double newlines), then line breaks, then spaces.
 * Preserves reading order so the joined translation reads naturally.
 */
function splitIntoChunks(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];
  const chunks: string[] = [];
  let remaining = text;
  while (remaining.length > maxChars) {
    let breakAt = remaining.lastIndexOf("\n\n", maxChars);
    if (breakAt < maxChars * 0.5) breakAt = remaining.lastIndexOf("\n", maxChars);
    if (breakAt < maxChars * 0.5) breakAt = remaining.lastIndexOf(" ", maxChars);
    if (breakAt < maxChars * 0.5) breakAt = maxChars;
    chunks.push(remaining.slice(0, breakAt).trim());
    remaining = remaining.slice(breakAt).trim();
  }
  if (remaining.length > 0) chunks.push(remaining);
  return chunks;
}

const MAX_PDF_TEXT_CHARS: number = 40000;
// Chunk the document before translating so long PDFs don't get silently
// truncated by the model's max_tokens output cap.
const CHUNK_CHARS: number = 3000;
const MAX_PARALLEL_CHUNKS: number = 4;

const LANGUAGES: Record<string, string> = {
  english: "English",
  spanish: "Spanish",
  portuguese: "Brazilian Portuguese",
  french: "French",
  german: "German",
  italian: "Italian",
  dutch: "Dutch",
  chinese: "Simplified Chinese",
  japanese: "Japanese",
  korean: "Korean",
  arabic: "Arabic",
  russian: "Russian",
  hindi: "Hindi",
};

export async function POST(request: NextRequest): Promise<Response> {
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Auth: Business/Enterprise only
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single();
    if (profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }

    const apiKey: string | undefined = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return errorResponse("The service is temporarily unavailable. Please try again later.", 500);
    }

    const body = await request.json();
    const blobUrl: string = body.blobUrl;
    const targetLang: string = body.targetLanguage || "english";
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
        tool: "translate-pdf",
        inputBlobUrl: blobUrl,
        inputParams: {
          targetLanguage: targetLang,
          original_name: body.fileName || "input.pdf",
        },
      });
      if ("error" in result) {
        return errorResponse(result.error, 500);
      }
      const { logUsage } = await import("@/lib/usage-check");
      await logUsage(user.id, "translate-pdf");
      return NextResponse.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
    }

    const targetLanguageName: string = LANGUAGES[targetLang] || "English";

    // Download PDF from blob
    const res: globalThis.Response = await fetch(blobUrl);
    if (!res.ok) {
      console.error("Failed to fetch PDF:", res.status);
      throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const buffer: Buffer = Buffer.from(await res.arrayBuffer());
    const id: string = randomUUID();
    tmpPath = join("/tmp", `${id}-translate.pdf`);
    await writeFile(tmpPath, buffer);

    // ── Reject blank PDFs before hitting paid API ──
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check");
      const { blank } = await isBlankPdf(buffer);
      if (blank) {
        if (tmpPath) { await unlink(tmpPath).catch(() => {}); tmpPath = null; }
        return errorResponse("This file appears to be empty. Please upload a PDF with content.", 400);
      }
    } catch (blankCheckErr) {
      console.error("Blank PDF check failed:", blankCheckErr);
      if (tmpPath) { await unlink(tmpPath).catch(() => {}); tmpPath = null; }
      return errorResponse("Could not read this PDF. The file may be corrupted or password-protected.", 400);
    }

    // Extract text using iLoveAPI
    const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;
    let documentText: string = "";

    if (publicKey && secretKey) {
      const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
      const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;
      const instance = new ILovePDFApi(publicKey, secretKey);
      const task = instance.newTask("extract");
      await task.start();
      const pdfFile = new ILovePDFFile(tmpPath);
      await task.addFile(pdfFile);
      await task.process();
      const txtData = await task.download();
      documentText = txtData.toString("utf-8");
    }

    if (!documentText || documentText.trim().length < 50) {
      documentText = buffer.toString("utf-8").replace(/[^\x20-\x7E\n\r\t]/g, " ").trim();
    }

    // Clean up
    if (tmpPath) { await unlink(tmpPath).catch(() => {}); tmpPath = null; }
    if (uploadedBlobUrl) { await del(uploadedBlobUrl).catch(() => {}); uploadedBlobUrl = null; }

    const guardResult = guardPdfContent(documentText);
    if (!guardResult.ok) {
      return errorResponse(guardResult.userMessage!, 422);
    }
    documentText = guardResult.sanitized.substring(0, MAX_PDF_TEXT_CHARS);

    const systemPrompt: string = `You are a professional document translator. Translate the document text below into ${targetLanguageName}.

Rules:
- Translate ALL text faithfully and accurately. Do not summarize or skip sections.
- Preserve the document structure: keep paragraph breaks, section headers, and list formatting.
- Keep proper nouns, company names, and technical terms that don't have standard translations in the original language.
- Keep numbers, dates, and currencies in their original format unless the target language has a different standard.
- Use formal/professional register appropriate for business documents.
- Output only the translated text. No commentary, no notes, no "Translation:" prefix.
- This may be one chunk of a longer document. Translate only what you are given, and do not add "continued" markers or commentary.`;

    // Split the document into chunks at paragraph boundaries so nothing is
    // silently truncated by the model's max_tokens output cap.
    const chunks: string[] = splitIntoChunks(documentText, CHUNK_CHARS);

    async function translateChunk(chunk: string): Promise<string> {
      let openaiRes: globalThis.Response | undefined;
      for (let attempt = 0; attempt < 3; attempt++) {
        openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: chunk },
            ],
            temperature: 0.2,
            max_tokens: 4000,
          }),
        });
        if (openaiRes.ok || openaiRes.status !== 429) break;
        const waitMs: number = (attempt + 1) * 5000;
        await new Promise((r) => setTimeout(r, waitMs));
      }
      if (!openaiRes!.ok) {
        if (openaiRes!.status === 429) throw new Error("AI service is temporarily busy. Please try again in a few seconds.");
        console.error("AI service request failed:", openaiRes!.status);
        throw new Error("An error occurred while processing your request. Please try again.");
      }
      const data = await openaiRes!.json();
      const out: string | undefined = data.choices?.[0]?.message?.content;
      if (!out) throw new Error("AI returned no response.");
      return out.trim();
    }

    // Translate chunks in bounded-parallel batches -- preserves order, caps concurrency.
    const translatedChunks: string[] = new Array(chunks.length);
    for (let i = 0; i < chunks.length; i += MAX_PARALLEL_CHUNKS) {
      const batch = chunks.slice(i, i + MAX_PARALLEL_CHUNKS);
      const results = await Promise.all(batch.map((c) => translateChunk(c)));
      for (let j = 0; j < results.length; j++) {
        translatedChunks[i + j] = results[j];
      }
    }
    const translation: string = translatedChunks.join("\n\n");

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "translate-pdf");

    return NextResponse.json({
      translation: translation.trim(),
      detectedLanguage: null, // Could add detection later
      targetLanguage: targetLanguageName,
    });
  } catch (err: unknown) {
    console.error("translate-pdf route error:", err);
    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob\.vercel/i.test(raw)
      ? "An error occurred while translating your file. Please try again."
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
