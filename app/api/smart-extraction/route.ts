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

const MAX_PDF_TEXT_CHARS: number = 10000;

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

    // Download PDF from blob
    const res: globalThis.Response = await fetch(blobUrl);
    if (!res.ok) {
      console.error("Failed to fetch PDF:", res.status); throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const buffer: Buffer = Buffer.from(await res.arrayBuffer());
    const id: string = randomUUID();
    tmpPath = join("/tmp", `${id}-extract.pdf`);
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
      // Fallback: try reading raw text from buffer
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

    const guardResult = guardPdfContent(documentText);
    if (!guardResult.ok) {
      return errorResponse(guardResult.userMessage!, 422);
    }
    documentText = guardResult.sanitized.substring(0, MAX_PDF_TEXT_CHARS);

    // Call OpenAI to extract structured data
    const systemPrompt: string = `You are a document data extraction assistant. Extract ALL structured data from the document text below. Return only valid JSON. No markdown. No code fences. No commentary.

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
- Extract ONLY data that is clearly present in the document. Do not guess or infer.
- people: names of individuals mentioned, with role if stated (e.g. "Buyer", "Signatory", "Manager")
- organizations: company names, institutions, agencies
- dates: labeled dates (e.g. "Invoice Date", "Due Date", "Effective Date", "Date of Birth")
- amounts: monetary values with labels (e.g. "Total", "Subtotal", "Tax", "Salary")
- contact_info: emails, phone numbers, physical addresses found in the document
- key_values: other important labeled fields (e.g. "Invoice #", "Policy Number", "Account Number", "SSN last 4")
- important_clauses: key legal, contractual, or policy statements (max 5, keep short)
- If a category has no data, return an empty array or object
- Keep all strings concise and production-safe`;

    const userPrompt: string = `Extract all structured data from this document:\n\n${documentText}`;

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
            { role: "user", content: userPrompt },
          ],
          temperature: 0.1,
          max_tokens: 2000,
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

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "smart-extraction");

    return NextResponse.json(extraction);
  } catch (err: unknown) {
    console.error("smart-extraction route error:", err);

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
