export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

export async function POST(request: NextRequest): Promise<Response> {
  let uploadedBlobUrl: string | null = null;
  let openaiFileId: string | null = null;
  let apiKey: string | undefined;

  try {
    // Auth: Pro/Business/Enterprise
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
      profile?.plan !== "pro" &&
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
    const blobUrl: string = body.blobUrl;
    const questionType: string = body.questionType || "mixed"; // "multiple_choice", "short_answer", "true_false", "mixed"
    const count: number = Math.min(Math.max(parseInt(body.count) || 10, 3), 20);
    const difficulty: string = body.difficulty || "medium"; // "easy", "medium", "hard"
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
        tool: "question-generator",
        inputBlobUrl: blobUrl,
        inputParams: {
          questionType,
          count: String(count),
          difficulty,
          original_name: body.fileName || "input.pdf",
        },
      });
      if ("error" in result) {
        return errorResponse(result.error, 500);
      }
      const { logUsage } = await import("@/lib/usage-check");
      await logUsage(user.id, "question-generator");
      return NextResponse.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
    }

    // Download PDF from blob into memory (no /tmp needed — streamed straight to OpenAI)
    const res: globalThis.Response = await fetch(blobUrl);
    if (!res.ok) {
      console.error("Failed to fetch PDF:", res.status);
      throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const pdfBuffer: Buffer = Buffer.from(await res.arrayBuffer());

    // Upload PDF to OpenAI Files API (purpose=user_data for chat file input)
    const fileName: string = typeof body.fileName === "string" && body.fileName ? body.fileName : "input.pdf";
    const uploadForm = new FormData();
    uploadForm.append("purpose", "user_data");
    uploadForm.append(
      "file",
      new Blob([pdfBuffer], { type: "application/pdf" }),
      fileName
    );

    const uploadRes: globalThis.Response = await fetch("https://api.openai.com/v1/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: uploadForm,
    });

    if (!uploadRes.ok) {
      const errBody: string = await uploadRes.text();
      console.error("File upload failed:", uploadRes.status, errBody);
      throw new Error("An error occurred while processing your file. Please try again.");
    }
    const uploadData = await uploadRes.json();
    openaiFileId = uploadData.id as string;
    if (!openaiFileId) {
      throw new Error("An error occurred while processing your file. Please try again.");
    }

    // Release the blob early — OpenAI has the file now
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
      uploadedBlobUrl = null;
    }

    // Build question type instruction
    const typeInstruction: string =
      questionType === "multiple_choice"
        ? "Generate ONLY multiple choice questions. Each must have exactly 4 options (A, B, C, D) with one correct answer."
        : questionType === "short_answer"
          ? "Generate ONLY short answer questions. Each answer should be 1-3 sentences."
          : questionType === "true_false"
            ? "Generate ONLY true/false questions. Each must have a clear true or false answer."
            : "Generate a MIX of multiple choice, short answer, and true/false questions.";

    const difficultyInstruction: string =
      difficulty === "easy"
        ? "Questions should test basic recall and understanding. Straightforward factual questions."
        : difficulty === "hard"
          ? "Questions should test critical thinking, analysis, and deeper understanding. Include questions that require combining multiple concepts."
          : "Questions should test understanding and application. A mix of factual and analytical questions.";

    const systemPrompt: string = `You are an educational question generator. Generate ${count} questions based on the attached PDF document. Return ONLY valid JSON. No markdown. No code fences. No prose outside the JSON.

${typeInstruction}
${difficultyInstruction}

If the attached PDF is blank, a scanned image, or contains no readable text, return EXACTLY this JSON and nothing else:
{"is_valid": false}

Otherwise, output JSON matching this structure exactly:
{
  "is_valid": true,
  "questions": [
    {
      "type": "multiple_choice" | "short_answer" | "true_false",
      "question": string,
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."] | null,
      "answer": string,
      "explanation": string
    }
  ]
}

Rules:
- Generate exactly ${count} questions when is_valid is true.
- All questions must be based ONLY on information in the attached PDF. Do not use outside knowledge.
- For multiple choice: exactly 4 options, answer is the letter (e.g. "B").
- For short answer: answer is 1-3 sentences.
- For true/false: answer is "True" or "False".
- explanation: 1 sentence explaining why the answer is correct, referencing the document.
- options is null for short_answer and true_false types.
- Keep questions clear, concise, and unambiguous.`;

    // Call OpenAI Chat Completions with PDF file input + retry on 429
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
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: [
                { type: "file", file: { file_id: openaiFileId } },
                { type: "text", text: `Generate ${count} questions from the attached PDF.` },
              ],
            },
          ],
          temperature: 0.5,
          max_tokens: 3000,
          response_format: { type: "json_object" },
        }),
      });

      if (openaiRes.ok || openaiRes.status !== 429) break;

      const waitMs: number = (attempt + 1) * 5000;
      await new Promise((r) => setTimeout(r, waitMs));
    }

    if (!openaiRes!.ok) {
      const errBody: string = await openaiRes!.text();
      console.error("AI service error:", openaiRes!.status, errBody);
      if (openaiRes!.status === 429) {
        throw new Error("AI service is temporarily busy. Please try again in a few seconds.");
      }
      throw new Error("An error occurred while processing your request. Please try again.");
    }

    const openaiData = await openaiRes!.json();
    const content: string | undefined = openaiData.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("AI returned no response.");
    }

    let result: any;
    try {
      const cleaned: string = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      result = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", content);
      return errorResponse(
        "We couldn't read this PDF. It appears to be blank, scanned, or image-only. Please upload a PDF with selectable text.",
        422
      );
    }

    if (result?.is_valid === false || !Array.isArray(result?.questions) || result.questions.length === 0) {
      return errorResponse(
        "We couldn't read this PDF. It appears to be blank, scanned, or image-only. Please upload a PDF with selectable text.",
        422
      );
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "question-generator");

    return NextResponse.json({ questions: result.questions });
  } catch (err: unknown) {
    console.error("question-generator route error:", err);

    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|OpenAI|blob.vercel/i.test(raw)
      ? "An error occurred while processing your file. Please try again."
      : (raw || "An unexpected error occurred.");

    return errorResponse(safe, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (openaiFileId && apiKey) {
      // Best-effort cleanup so we don't pay for OpenAI file storage
      await fetch(`https://api.openai.com/v1/files/${openaiFileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${apiKey}` },
      }).catch(() => {});
    }
  }
}
