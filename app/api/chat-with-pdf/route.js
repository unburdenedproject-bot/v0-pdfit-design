export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

const MAX_PDF_TEXT_CHARS = 12000;
const MAX_QUESTION_CHARS = 500;
const MAX_HISTORY_MESSAGES = 10;

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
      return errorResponse("AI service is not configured.", 500);
    }

    // Parse request
    const body = await request.json();
    const blobUrl = body.blobUrl;
    const question = body.question;
    const pdfText = body.pdfText; // Pre-extracted text from client (optional)
    const history = body.history || []; // Previous Q&A pairs

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return errorResponse("Please enter a question.", 400);
    }

    if (question.length > MAX_QUESTION_CHARS) {
      return errorResponse(`Question is too long. Maximum ${MAX_QUESTION_CHARS} characters.`, 400);
    }

    // Get PDF text — either from pre-extracted text or extract now
    let documentText = "";

    if (pdfText && typeof pdfText === "string" && pdfText.trim().length > 50) {
      // Client already extracted text — use it
      documentText = pdfText.substring(0, MAX_PDF_TEXT_CHARS);
    } else if (blobUrl && typeof blobUrl === "string") {
      // Extract text from PDF via iLoveAPI
      uploadedBlobUrl = blobUrl;

      const res = await fetch(blobUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch PDF (${res.status})`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-chat.pdf`);
      await writeFile(tmpPath, buffer);

      const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
      const secretKey = process.env.ILOVEAPI_SECRET_KEY;

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
        // Fallback: try reading raw text from buffer
        documentText = buffer.toString("utf-8").replace(/[^\x20-\x7E\n\r\t]/g, " ").trim();
      }

      // Clean up temp file
      if (tmpPath) {
        await unlink(tmpPath).catch(() => {});
        tmpPath = null;
      }

      if (!documentText || documentText.trim().length < 50) {
        return errorResponse(
          "Could not extract text from this PDF. Try a text-based PDF (not a scanned image). Run OCR first if needed.",
          422
        );
      }

      documentText = documentText.substring(0, MAX_PDF_TEXT_CHARS);
    } else {
      return errorResponse("Missing PDF content. Please upload a PDF first.", 400);
    }

    // Build conversation messages for OpenAI
    const systemPrompt = `You are a helpful PDF document assistant. The user has uploaded a PDF document and wants to ask questions about it. Answer based ONLY on the document content provided below. If the answer is not in the document, say so clearly. Be concise, accurate, and helpful. Format your answers in plain text — no markdown headers or code blocks.

DOCUMENT CONTENT:
${documentText}`;

    const messages = [
      { role: "system", content: systemPrompt },
    ];

    // Add conversation history (limited)
    const recentHistory = Array.isArray(history)
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
          messages,
          temperature: 0.3,
          max_tokens: 1500,
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
      throw new Error(`AI service failed (${openaiRes.status})`);
    }

    const openaiData = await openaiRes.json();
    const answer = openaiData.choices?.[0]?.message?.content;

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
  } catch (err) {
    if (tmpPath) await unlink(tmpPath).catch(() => {});

    console.error("chat-with-pdf route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
