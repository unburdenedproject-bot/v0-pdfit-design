export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

const MAX_QUESTION_CHARS: number = 500;
const MAX_HISTORY_MESSAGES: number = 10;

interface ChatMessage {
  role: string;
  content: string;
}

export async function POST(request: NextRequest): Promise<Response> {
  let uploadedBlobUrl: string | null = null;
  let apiKey: string | undefined;

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

    apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return errorResponse("The service is temporarily unavailable. Please try again later.", 500);
    }

    // Parse request
    const body = await request.json();
    const blobUrl: string | undefined = body.blobUrl;
    let fileId: string | undefined = body.fileId;
    const question: string = body.question;
    const history: ChatMessage[] = body.history || [];

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return errorResponse("Please enter a question.", 400);
    }
    if (question.length > MAX_QUESTION_CHARS) {
      return errorResponse(`Question is too long. Maximum ${MAX_QUESTION_CHARS} characters.`, 400);
    }

    // ---- Async mode (preserved) ----
    if (body.async === true) {
      const { createJob } = await import("@/lib/job-queue");
      const result = await createJob({
        userId: user.id,
        userPlan: profile?.plan,
        tool: "chat-with-pdf",
        inputBlobUrl: blobUrl || "none",
        inputParams: {
          question,
          fileId: fileId || undefined,
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

    // First message in conversation: upload PDF to OpenAI Files API
    if (!fileId) {
      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing PDF content. Please upload a PDF first.", 400);
      }
      if (!isValidBlobUrl(blobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }
      uploadedBlobUrl = blobUrl;

      const res: globalThis.Response = await fetch(blobUrl);
      if (!res.ok) {
        console.error("Failed to fetch PDF:", res.status);
        throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
      }
      const buffer: Buffer = Buffer.from(await res.arrayBuffer());

      const form = new FormData();
      form.append("purpose", "user_data");
      form.append("file", new Blob([new Uint8Array(buffer)], { type: "application/pdf" }), "document.pdf");

      const fileUploadRes = await fetch("https://api.openai.com/v1/files", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}` },
        body: form,
      });
      if (!fileUploadRes.ok) {
        const errBody = await fileUploadRes.text();
        console.error("OpenAI file upload failed:", fileUploadRes.status, errBody);
        throw new Error("An error occurred while preparing your file. Please try again.");
      }
      const fileData = await fileUploadRes.json();
      fileId = fileData.id;

      // Free the Vercel blob now that OpenAI has the file
      if (uploadedBlobUrl) {
        await del(uploadedBlobUrl).catch(() => {});
        uploadedBlobUrl = null;
      }
    }

    // Build messages — system + history + current question (with file attached)
    const systemPrompt: string = "You are a helpful PDF document assistant. Answer based ONLY on the attached PDF document. If the answer is not in the document, say so clearly. Be concise, accurate, and helpful. Format your answers in plain text — no markdown headers or code blocks.";

    const messages: any[] = [{ role: "system", content: systemPrompt }];

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

    // Current question with the PDF attached as file content
    messages.push({
      role: "user",
      content: [
        { type: "file", file: { file_id: fileId } },
        { type: "text", text: question.trim() },
      ],
    });

    // Call OpenAI with retry for rate limits
    let openaiRes: globalThis.Response | undefined;
    for (let attempt = 0; attempt < 3; attempt++) {
      openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
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
      throw new Error("An error occurred while processing your request. Please try again.");
    }

    const openaiData = await openaiRes!.json();
    const answer: string | undefined = openaiData.choices?.[0]?.message?.content;
    if (!answer) {
      throw new Error("AI returned no response.");
    }

    // On the INITIAL summary call (no prior history), detect blank/unreadable PDFs
    // by spotting refusal patterns from the model. Downstream messages are
    // allowed to say "I don't know" without triggering this.
    if (recentHistory.length === 0) {
      const refusalPatterns = /\b(no (content|readable text)|can'?t (access|read)|cannot (access|read)|unable to (access|read)|provide (specific|the) (information|text)|happy to help)\b/i;
      if (answer.trim().length < 600 && refusalPatterns.test(answer)) {
        console.log("[chat-with-pdf] detected refusal on initial summary, treating as invalid PDF");
        return errorResponse(
          "We couldn't read this PDF. It may be blank, image-only, or password-protected.",
          422
        );
      }
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "chat-with-pdf");

    return NextResponse.json({
      answer: answer.trim(),
      fileId, // client caches and re-sends for subsequent messages
    });
  } catch (err: unknown) {
    console.error("chat-with-pdf route error:", err);

    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|OpenAI|blob.vercel/i.test(raw)
      ? "An error occurred while processing your file. Please try again."
      : (raw || "An unexpected error occurred.");

    return errorResponse(safe, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    // Note: OpenAI file is intentionally NOT deleted here — it must persist
    // across chat turns. Files auto-expire from OpenAI after a period of inactivity.
  }
}
