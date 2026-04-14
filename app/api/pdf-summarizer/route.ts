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

const MAX_PDF_TEXT_CHARS: number = 14000;

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

    const apiKey: string | undefined = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return errorResponse("The service is temporarily unavailable. Please try again later.", 500);
    }

    // Parse request
    const body = await request.json();
    const blobUrl: string = body.blobUrl;
    const length: string = body.length || "medium"; // "short", "medium", "detailed"
    const language: string = body.language || "same"; // "same", "english", "spanish", "portuguese"
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
        tool: "pdf-summarizer",
        inputBlobUrl: blobUrl,
        inputParams: {
          length,
          language,
          original_name: body.fileName || "input.pdf",
        },
      });
      if ("error" in result) {
        return errorResponse(result.error, 500);
      }
      const { logUsage } = await import("@/lib/usage-check");
      await logUsage(user.id, "pdf-summarizer");
      return NextResponse.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
    }

    // Download PDF from blob
    const res: globalThis.Response = await fetch(blobUrl);
    if (!res.ok) {
      console.error("Failed to fetch PDF:", res.status); throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const buffer: Buffer = Buffer.from(await res.arrayBuffer());
    const id: string = randomUUID();
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
    } catch (blankCheckErr) {
      console.error("Blank PDF check failed (skipping):", blankCheckErr);
      // Continue processing — let the API handle invalid files
    }

    // Extract text using iLoveAPI
    const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;

    let documentText: string = "";

    if (publicKey && secretKey) {
      try {
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
      } catch (extractErr) {
        console.error("iLoveAPI extract failed (falling back to buffer):", extractErr);
      }
    }

    if (!documentText || documentText.trim().length < 50) {
      try {
        const pdfParse = (await import("pdf-parse/lib/pdf-parse.js")).default;
        const parsed = await pdfParse(buffer);
        documentText = (parsed.text || "").trim();
      } catch (parseErr) {
        console.error("pdf-parse fallback failed:", parseErr);
        documentText = "";
      }
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

    const guardResult = guardPdfContent(documentText);
    if (!guardResult.ok) {
      return errorResponse(guardResult.userMessage!, 422);
    }
    documentText = guardResult.sanitized.substring(0, MAX_PDF_TEXT_CHARS);

    // Build length instruction
    const lengthInstruction: string =
      length === "short"
        ? "Provide a brief summary in 2-3 sentences (max 100 words)."
        : length === "detailed"
          ? "Provide a comprehensive summary with key sections, main arguments, and important details (300-500 words). Use clear paragraph breaks."
          : "Provide a clear summary covering the main points (150-250 words). Use paragraph breaks for readability.";

    // Build language instruction
    const languageInstruction: string =
      language === "english"
        ? "Write the summary in English."
        : language === "spanish"
          ? "Write the summary in Spanish."
          : language === "portuguese"
            ? "Write the summary in Brazilian Portuguese."
            : "Write the summary in the same language as the document.";

    const systemPrompt: string = `You are a professional document summarizer. Summarize the document text provided below. ${lengthInstruction} ${languageInstruction}

Rules:
- Focus on the most important information, key findings, and main conclusions.
- Be factual — only include information present in the document.
- Use plain text with paragraph breaks. No markdown headers, no bullet points, no code blocks.
- If the document is a contract, highlight key terms, parties, and obligations.
- If the document is a report, highlight key findings and recommendations.
- If the document is an invoice, highlight total amount, parties, and due date.`;

    // Call OpenAI with retry
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
            { role: "user", content: `Summarize this document:\n\n${documentText}` },
          ],
          temperature: 0.3,
          max_tokens: length === "short" ? 200 : length === "detailed" ? 800 : 400,
        }),
      });

      if (openaiRes.ok || openaiRes.status !== 429) break;

      const waitMs: number = (attempt + 1) * 5000;
      console.log(`OpenAI rate limited, retrying in ${waitMs}ms...`);
      await new Promise((r) => setTimeout(r, waitMs));
    }

    if (!openaiRes!.ok) {
      const errBody: string = await openaiRes!.text();
      console.error("OpenAI API error:", openaiRes!.status, errBody);
      if (openaiRes!.status === 429) {
        throw new Error("AI service is temporarily busy. Please try again in a few seconds.");
      }
      console.error("AI service request failed:", openaiRes!.status); throw new Error("An error occurred while processing your request. Please try again.");
    }

    const openaiData = await openaiRes!.json();
    const summary: string | undefined = openaiData.choices?.[0]?.message?.content;

    if (!summary) {
      throw new Error("AI returned no response.");
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "pdf-summarizer");

    return NextResponse.json({ summary: summary.trim() });
  } catch (err: unknown) {
    console.error("pdf-summarizer route error:", err);

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
