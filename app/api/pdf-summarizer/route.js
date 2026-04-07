import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
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

const MAX_PDF_TEXT_CHARS = 14000;

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
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      );
    }
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single();
    if (
      profile?.plan !== "business" &&
      profile?.plan !== "enterprise"
    ) {
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return errorResponse("The service is temporarily unavailable. Please try again later.", 500);
    }

    // Parse request
    const body = await request.json();
    const blobUrl = body.blobUrl;
    const length = body.length || "medium"; // "short", "medium", "detailed"
    const language = body.language || "same"; // "same", "english", "spanish", "portuguese"
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }
    if (!isValidBlobUrl(blobUrl)) {
      return errorResponse("Invalid file URL.", 400);
    }

    // Download PDF from blob
    const res = await fetch(blobUrl);
    if (!res.ok) {
      console.error("Failed to fetch PDF:", res.status); throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const id = randomUUID();
    tmpPath = join("/tmp", `${id}-summarize.pdf`);
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

    // Clean up temp file and blob
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
      tmpPath = null;
    }
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
      uploadedBlobUrl = null;
    }

    if (!documentText || documentText.trim().length < 50) {
      return errorResponse(
        "Could not extract text from this PDF. Try a text-based PDF (not a scanned image). Run OCR first if needed.",
        422
      );
    }

    documentText = documentText.substring(0, MAX_PDF_TEXT_CHARS);

    // Build length instruction
    const lengthInstruction =
      length === "short"
        ? "Provide a brief summary in 2-3 sentences (max 100 words)."
        : length === "detailed"
          ? "Provide a comprehensive summary with key sections, main arguments, and important details (300-500 words). Use clear paragraph breaks."
          : "Provide a clear summary covering the main points (150-250 words). Use paragraph breaks for readability.";

    // Build language instruction
    const languageInstruction =
      language === "english"
        ? "Write the summary in English."
        : language === "spanish"
          ? "Write the summary in Spanish."
          : language === "portuguese"
            ? "Write the summary in Brazilian Portuguese."
            : "Write the summary in the same language as the document.";

    const systemPrompt = `You are a professional document summarizer. Summarize the document text provided below. ${lengthInstruction} ${languageInstruction}

Rules:
- Focus on the most important information, key findings, and main conclusions.
- Be factual — only include information present in the document.
- Use plain text with paragraph breaks. No markdown headers, no bullet points, no code blocks.
- If the document is a contract, highlight key terms, parties, and obligations.
- If the document is a report, highlight key findings and recommendations.
- If the document is an invoice, highlight total amount, parties, and due date.`;

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
            { role: "user", content: `Summarize this document:\n\n${documentText}` },
          ],
          temperature: 0.3,
          max_tokens: length === "short" ? 200 : length === "detailed" ? 800 : 400,
        }),
      });

      if (openaiRes.ok || openaiRes.status !== 429) break;

      const waitMs = (attempt + 1) * 5000;
      console.log(`OpenAI rate limited, retrying in ${waitMs}ms...`);
      await new Promise((r) => setTimeout(r, waitMs));
    }

    if (!openaiRes.ok) {
      const errBody = await openaiRes.text();
      console.error("OpenAI API error:", openaiRes.status, errBody);
      if (openaiRes.status === 429) {
        throw new Error("AI service is temporarily busy. Please try again in a few seconds.");
      }
      console.error("AI service request failed:", openaiRes.status); throw new Error("An error occurred while processing your request. Please try again.");
    }

    const openaiData = await openaiRes.json();
    const summary = openaiData.choices?.[0]?.message?.content;

    if (!summary) {
      throw new Error("AI returned no response.");
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "pdf-summarizer");

    return NextResponse.json({ summary: summary.trim() });
  } catch (err) {
    console.error("pdf-summarizer route error:", err);

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
