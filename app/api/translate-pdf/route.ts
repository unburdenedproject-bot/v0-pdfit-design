export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

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
  let uploadedBlobUrl: string | null = null;
  let openaiFileId: string | null = null;
  let apiKey: string | undefined;

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

    apiKey = process.env.OPENAI_API_KEY;
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

    // Download PDF from blob and upload directly to OpenAI Files API
    const res: globalThis.Response = await fetch(blobUrl);
    if (!res.ok) {
      console.error("Failed to fetch PDF:", res.status);
      throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const buffer: Buffer = Buffer.from(await res.arrayBuffer());

    const form = new FormData();
    form.append("purpose", "user_data");
    form.append("file", new Blob([new Uint8Array(buffer)], { type: "application/pdf" }), body.fileName || "document.pdf");

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
    openaiFileId = fileData.id;

    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
      uploadedBlobUrl = null;
    }

    const systemPrompt: string = `You are a professional document translator. Translate the attached PDF document into ${targetLanguageName}.

Rules:
- Translate ALL text faithfully and accurately. Do not summarize or skip sections.
- Preserve the document structure: keep paragraph breaks, section headers, and list formatting.
- Keep proper nouns, company names, and technical terms that don't have standard translations in the original language.
- Keep numbers, dates, and currencies in their original format unless the target language has a different standard.
- Use formal/professional register appropriate for business documents.
- Output ONLY the translated text. No commentary, no notes, no "Translation:" prefix, no explanation.`;

    // Single-call translation with file input
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
                { type: "text", text: `Translate this entire PDF into ${targetLanguageName}.` },
              ],
            },
          ],
          temperature: 0.2,
          max_tokens: 16000,
        }),
      });
      if (openaiRes.ok || openaiRes.status !== 429) break;
      const waitMs: number = (attempt + 1) * 5000;
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

    const data = await openaiRes!.json();
    const translation: string = (data.choices?.[0]?.message?.content || "").trim();
    console.log("[translate-pdf] response length:", translation.length, "preview:", translation.slice(0, 200));
    if (!translation || translation.length < 10) {
      return errorResponse(
        "We couldn't translate this PDF. It may be empty or contain only images. Try a different file or run OCR first.",
        422
      );
    }

    // Detect refusal/meta-replies (model explaining instead of translating)
    const refusalPatterns = /\b(can'?t access|cannot access|unable to (access|read|view)|no (content|readable text)|provide the text|happy to help)\b/i;
    if (translation.length < 600 && refusalPatterns.test(translation)) {
      console.log("[translate-pdf] detected refusal response, treating as invalid PDF");
      return errorResponse(
        "We couldn't read this PDF. It may be blank, image-only, or password-protected.",
        422
      );
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "translate-pdf");

    return NextResponse.json({
      translation,
      detectedLanguage: null,
      targetLanguage: targetLanguageName,
    });
  } catch (err: unknown) {
    console.error("translate-pdf route error:", err);
    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|OpenAI|blob\.vercel/i.test(raw)
      ? "An error occurred while translating your file. Please try again."
      : (raw || "An unexpected error occurred.");
    return errorResponse(safe, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (openaiFileId && apiKey) {
      await fetch(`https://api.openai.com/v1/files/${openaiFileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${apiKey}` },
      }).catch(() => {});
    }
  }
}
