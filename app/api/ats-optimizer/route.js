export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink, readFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

  try {
    // Auth: Pro/Business/Enterprise only
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

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return errorResponse("OpenAI API is not configured.", 500);
    }

    // Parse request
    const body = await request.json();
    const blobUrl = body.blobUrl;
    const jobDescription = body.jobDescription || "";
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }

    // Download PDF from blob
    const res = await fetch(blobUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch blob URL (${res.status})`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const id = randomUUID();
    tmpPath = join("/tmp", `${id}-resume.pdf`);
    await writeFile(tmpPath, buffer);

    // Extract text from PDF using iLoveAPI pdftxt
    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    let resumeText = "";

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
      resumeText = txtData.toString("utf-8");
    }

    if (!resumeText || resumeText.trim().length < 50) {
      // Fallback: try reading raw text from buffer
      resumeText = buffer.toString("utf-8").replace(/[^\x20-\x7E\n\r\t]/g, " ").trim();
    }

    if (!resumeText || resumeText.trim().length < 50) {
      if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});
      if (tmpPath) await unlink(tmpPath).catch(() => {});
      return errorResponse(
        "Could not extract text from this PDF. Try a text-based resume (not a scanned image). Run OCR first if needed.",
        422
      );
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

    // Analyze with OpenAI
    const systemPrompt = `You are an expert resume and ATS analyzer. Return ONLY valid JSON matching this schema exactly.

{
  "score": <0-100>,
  "summary": "<2-3 sentences>",
  "sections": {
    "contact_info": {"score":<0-100>,"feedback":"<1 sentence>"},
    "formatting": {"score":<0-100>,"feedback":"<1 sentence>"},
    "keywords": {"score":<0-100>,"feedback":"<1 sentence>"},
    "experience": {"score":<0-100>,"feedback":"<1 sentence>"},
    "education": {"score":<0-100>,"feedback":"<1 sentence>"},
    "skills": {"score":<0-100>,"feedback":"<1 sentence>"}
  },
  "improvements": ["<action 1>","<action 2>","<action 3>","<action 4>","<action 5>"],
  "missing_keywords": ["<keyword not in resume>"],
  "matched_keywords": ["<keyword found in resume>"],
  "format_risks": [{"severity":"high|medium|low","issue":"<1 sentence>"}],
  "bullet_feedback": [{"original":"<exact bullet from resume>","problem":"<why it's weak>","improved":"<rewritten with metrics>"}],
  "rewrite_suggestions": [{"section":"<section name>","original":"<current text>","improved":"<better version>"}]
}

Rules:
- Score 90-100: excellent. 70-89: good. 50-69: needs work. 0-49: major issues.
- matched_keywords: 3-6 keywords FROM the resume that match the job or are strong.
- missing_keywords: 3-6 important keywords NOT in the resume.
- format_risks: 1-3 formatting/parsing risks (columns, tables, graphics, inconsistent dates, missing headings).
- bullet_feedback: pick the 3 weakest bullets. Show original, problem, and improved version with quantified impact.
- rewrite_suggestions: pick 2-3 sections that need the most improvement. Show original text and improved version.
- Keep all text concise. No long paragraphs.
${jobDescription ? `\nTARGET JOB: "${jobDescription}". Match keywords and tailor analysis to this role.` : "\nNo job description provided — give general optimization advice."}
Return ONLY valid JSON. No markdown, no code blocks.`

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
            { role: "user", content: `Resume text:\n\n${resumeText.substring(0, 8000)}` },
          ],
          temperature: 0.3,
          max_tokens: 2500,
        }),
      });

      if (openaiRes.ok || openaiRes.status !== 429) break;

      // Rate limited — wait and retry
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
      throw new Error(`AI analysis failed (${openaiRes.status})`);
    }

    const openaiData = await openaiRes.json();
    const content = openaiData.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("AI returned no analysis.");
    }

    // Parse the JSON response
    let analysis;
    try {
      // Strip markdown code blocks if present
      const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      analysis = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", content);
      throw new Error("AI returned invalid analysis format.");
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "ats-optimizer");

    return NextResponse.json(analysis);
  } catch (err) {
    if (tmpPath) await unlink(tmpPath).catch(() => {});
    if (uploadedBlobUrl) await del(uploadedBlobUrl).catch(() => {});

    console.error("ats-optimizer route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
