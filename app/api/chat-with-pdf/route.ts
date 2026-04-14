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

const MAX_PDF_TEXT_CHARS: number = 12000;
const MAX_QUESTION_CHARS: number = 500;
const MAX_HISTORY_MESSAGES: number = 10;

interface ChatMessage {
  role: string;
  content: string;
}

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
    const question: string = body.question;
    const pdfText: string | undefined = body.pdfText; // Pre-extracted text from client (optional)
    const history: ChatMessage[] = body.history || []; // Previous Q&A pairs

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return errorResponse("Please enter a question.", 400);
    }

    if (question.length > MAX_QUESTION_CHARS) {
      return errorResponse(`Question is too long. Maximum ${MAX_QUESTION_CHARS} characters.`, 400);
    }

    // ---- Async mode: create a job and return immediately ----
    if (body.async === true) {
      const { createJob } = await import("@/lib/job-queue");
      const result = await createJob({
        userId: user.id,
        userPlan: profile?.plan,
        tool: "chat-with-pdf",
        inputBlobUrl: blobUrl || "none",
        inputParams: {
          question,
          pdfText: pdfText || undefined,
          history: history || [],
          blobUrl: blobUrl || undefined,
        },
      });
      if ("error" in result) {
        return errorResponse(result.error, 500);
      }
      const { logUsage } = await import("@/lib/usage-check");
      await logUsage(user.id, "chat-with-pdf");
      return NextResponse.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
    }

    // Get PDF text — either from pre-extracted text or extract now
    let documentText: string = "";

    if (pdfText && typeof pdfText === "string" && pdfText.trim().length > 50) {
      // Client already extracted text — use it
      documentText = pdfText.substring(0, MAX_PDF_TEXT_CHARS);
    } else if (blobUrl && typeof blobUrl === "string") {
      // Extract text from PDF via iLoveAPI
      if (!isValidBlobUrl(blobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }
      uploadedBlobUrl = blobUrl;

      const res: globalThis.Response = await fetch(blobUrl);
      if (!res.ok) {
        console.error("Failed to fetch PDF:", res.status); throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
      }
      const buffer: Buffer = Buffer.from(await res.arrayBuffer());
      const id: string = randomUUID();
      tmpPath = join("/tmp", `${id}-chat.pdf`);
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

      const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
      const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;

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

      // Clean up temp file
      if (tmpPath) {
        await unlink(tmpPath).catch(() => {});
        tmpPath = null;
      }

      const guardResult = guardPdfContent(documentText);
      if (!guardResult.ok) {
        return errorResponse(guardResult.userMessage!, 422);
      }
      documentText = guardResult.sanitized.substring(0, MAX_PDF_TEXT_CHARS);
    } else {
      return errorResponse("Missing PDF content. Please upload a PDF first.", 400);
    }

    // Build conversation messages for OpenAI
    const systemPrompt: string = `You are a helpful PDF document assistant. The user has uploaded a PDF document and wants to ask questions about it. Answer based ONLY on the document content provided below. If the answer is not in the document, say so clearly. Be concise, accurate, and helpful. Format your answers in plain text — no markdown headers or code blocks.

DOCUMENT CONTENT:
${documentText}`;

    const messages: { role: string; content: string }[] = [
      { role: "system", content: systemPrompt },
    ];

    // Add conversation history (limited)
    const recentHistory: ChatMessage[] = Array.isArray(history)
      ? history.slice(-MAX_HISTORY_MESSAGES)
      : [];

    for (const msg of recentHistory) {
      if (msg.role === "user" && typeof msg.content === "string") {
        messages.push({ role: "user", content: msg.content.substring(0, MAX_QUESTION_CHARS) });
      } else if (msg.role === "assistant" && typeof msg.content === "string") {
        messages.push({ role: "assistant", content: msg.content.substring(0, 2000) });
      }
    }

    // Add current question
    messages.push({ role: "user", content: question.trim() });

    // Call OpenAI with retry for rate limits
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
          messages,
          temperature: 0.3,
          max_tokens: 1500,
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
    const answer: string | undefined = openaiData.choices?.[0]?.message?.content;

    if (!answer) {
      throw new Error("AI returned no response.");
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "chat-with-pdf");

    return NextResponse.json({
      answer: answer.trim(),
      pdfText: documentText, // Return extracted text so client can cache it
    });
  } catch (err: unknown) {
    console.error("chat-with-pdf route error:", err);

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
