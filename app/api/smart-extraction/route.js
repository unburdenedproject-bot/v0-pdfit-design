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

const MAX_PDF_TEXT_CHARS = 10000;

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
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }

    // Download PDF from blob
    const res = await fetch(blobUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch PDF (${res.status})`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const id = randomUUID();
    tmpPath = join("/tmp", `${id}-extract.pdf`);
    await writeFile(tmpPath, buffer);

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

    if (!documentText || documentText.trim().length < 50) {
      return errorResponse(
        "Could not extract text from this PDF. Try a text-based PDF (not a scanned image). Run OCR first if needed.",
        422
      );
    }

    documentText = documentText.substring(0, MAX_PDF_TEXT_CHARS);

    // Call OpenAI to extract structured data
    const systemPrompt = `You are a document data extraction assistant. Extract ALL structured data from the document text below. Return only valid JSON. No markdown. No code fences. No commentary.

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

    const userPrompt = `Extract all structured data from this document:\n\n${documentText}`;

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
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.1,
          max_tokens: 2000,
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
    const content = openaiData.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("AI returned no response.");
    }

    // Parse the JSON response
    let extraction;
    try {
      const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      extraction = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", content);
      throw new Error("AI returned invalid extraction format.");
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "smart-extraction");

    return NextResponse.json(extraction);
  } catch (err) {
    if (tmpPath) await unlink(tmpPath).catch(() => {});
    if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});

    console.error("smart-extraction route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
