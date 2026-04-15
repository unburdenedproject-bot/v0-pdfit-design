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
    const blobUrl: string = body.blobUrl;
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
        tool: "smart-extraction",
        inputBlobUrl: blobUrl,
        inputParams: {
          original_name: body.fileName || "input.pdf",
        },
      });
      if ("error" in result) {
        return errorResponse(result.error, 500);
      }
      const { logUsage } = await import("@/lib/usage-check");
      await logUsage(user.id, "smart-extraction");
      return NextResponse.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
    }

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

    // Call OpenAI to extract structured data
    const systemPrompt: string = `You are a document data extraction assistant. Extract ALL structured data from the attached PDF. Return only valid JSON. No markdown. No code fences. No commentary. If the PDF is blank, unreadable, or contains no extractable content, return {"is_valid_document": false, "reason": "<short explanation>"} and nothing else.

Output JSON matching this structure exactly:
{
  "document_type": string (e.g. "invoice", "contract", "receipt", "form", "report", "letter", "resume", "other"),
  "summary": string (1-2 sentence summary of the document),
  "people": [
    { "name": string, "role": string or null }
  ],
  "organizations": [string],
  "dates": [
    { "label": string, "value": string }
  ],
  "amounts": [
    { "label": string, "value": string, "currency": string or null }
  ],
  "contact_info": {
    "emails": [string],
    "phones": [string],
    "addresses": [string]
  },
  "key_values": [
    { "key": string, "value": string }
  ],
  "important_clauses": [string]
}

Rules:
- Extract ONLY data that is clearly present in the document. Do not guess, infer, or hallucinate.
- Use the EXACT strings from the document for names, numbers, dates, and amounts. Do not paraphrase values.
- If a field is ambiguous, leave it out rather than guessing.
- people: names of individuals mentioned, with role if stated (e.g. "Buyer", "Signatory", "Manager")
- organizations: company names, institutions, agencies
- dates: labeled dates (e.g. "Invoice Date", "Due Date", "Effective Date", "Date of Birth")
- amounts: monetary values with labels (e.g. "Total", "Subtotal", "Tax", "Salary")
- contact_info: emails, phone numbers, physical addresses found in the document
- key_values: other important labeled fields (e.g. "Invoice #", "Policy Number", "Account Number", "SSN last 4")
- important_clauses: key legal, contractual, or policy statements (max 5, keep short)
- If a category has no data, return an empty array or object
- Keep all strings concise and production-safe`;

    const userPrompt: string = `Extract all structured data from the attached PDF.`;

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
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: [
                { type: "file", file: { file_id: openaiFileId } },
                { type: "text", text: userPrompt },
              ],
            },
          ],
          temperature: 0,
          max_tokens: 2000,
          response_format: { type: "json_object" },
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
    const content: string | undefined = openaiData.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("AI returned no response.");
    }

    // Parse the JSON response
    let extraction: any;
    try {
      const cleaned: string = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      extraction = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", content);
      throw new Error("AI returned invalid extraction format.");
    }

    if (extraction?.is_valid_document === false) {
      return errorResponse(
        "This PDF doesn't appear to contain extractable content. Please upload a PDF with text (not blank or scanned images).",
        422
      );
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "smart-extraction");

    return NextResponse.json(extraction);
  } catch (err: unknown) {
    console.error("smart-extraction route error:", err);

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
      await fetch(`https://api.openai.com/v1/files/${openaiFileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${apiKey}` },
      }).catch(() => {});
    }
  }
}
