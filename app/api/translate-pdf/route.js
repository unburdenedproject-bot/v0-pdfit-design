export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

const MAX_PDF_TEXT_CHARS = 12000;

const LANGUAGES = {
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

export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

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

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return errorResponse("AI service is not configured.", 500);
    }

    const body = await request.json();
    const blobUrl = body.blobUrl;
    const targetLang = body.targetLanguage || "english";
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }
    if (!isValidBlobUrl(blobUrl)) {
      return errorResponse("Invalid file URL.", 400);
    }

    const targetLanguageName = LANGUAGES[targetLang] || "English";

    // Download PDF from blob
    const res = await fetch(blobUrl);
    if (!res.ok) throw new Error(`Failed to fetch PDF (${res.status})`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const id = randomUUID();
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
    } catch {
      if (tmpPath) { await unlink(tmpPath).catch(() => {}); tmpPath = null; }
      return errorResponse("This file appears to be empty or unreadable. Please upload a PDF with content.", 400);
    }

    // Extract text using iLoveAPI
    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;
    let documentText = "";

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

    if (!documentText || documentText.trim().length < 50) {
      return errorResponse(
        "Could not extract text from this PDF. Try a text-based PDF (not a scanned image). Run OCR first if needed.",
        422
      );
    }

    documentText = documentText.substring(0, MAX_PDF_TEXT_CHARS);

    const systemPrompt = `You are a professional document translator. Translate the document text below into ${targetLanguageName}.

Rules:
- Translate ALL text faithfully and accurately. Do not summarize or skip sections.
- Preserve the document structure: keep paragraph breaks, section headers, and list formatting.
- Keep proper nouns, company names, and technical terms that don't have standard translations in the original language.
- Keep numbers, dates, and currencies in their original format unless the target language has a different standard.
- Use formal/professional register appropriate for business documents.
- Output only the translated text. No commentary, no notes, no "Translation:" prefix.`;

    // Call OpenAI with retry
    let openaiRes;
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
            { role: "user", content: documentText },
          ],
          temperature: 0.2,
          max_tokens: 4000,
        }),
      });

      if (openaiRes.ok || openaiRes.status !== 429) break;
      const waitMs = (attempt + 1) * 5000;
      await new Promise((r) => setTimeout(r, waitMs));
    }

    if (!openaiRes.ok) {
      const errBody = await openaiRes.text();
      console.error("OpenAI API error:", openaiRes.status, errBody);
      if (openaiRes.status === 429) throw new Error("AI service is temporarily busy. Please try again in a few seconds.");
      throw new Error(`AI service failed (${openaiRes.status})`);
    }

    const openaiData = await openaiRes.json();
    const translation = openaiData.choices?.[0]?.message?.content;

    if (!translation) throw new Error("AI returned no response.");

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "translate-pdf");

    return NextResponse.json({
      translation: translation.trim(),
      detectedLanguage: null, // Could add detection later
      targetLanguage: targetLanguageName,
    });
  } catch (err) {
    console.error("translate-pdf route error:", err);
    const raw = err && typeof err === "object" && err.message ? err.message : "";
    const safe = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob\.vercel/i.test(raw)
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
