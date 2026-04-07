import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink, readFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

const MAX_RESUME_TEXT_CHARS: number = 7000;

function clampScore(value: unknown, fallback: number = 0): number {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return Math.max(0, Math.min(100, Math.round(num)));
}

function cleanString(value: unknown, fallback: string = ""): string {
  return typeof value === "string" ? value.trim() : fallback;
}

function cleanStringArray(value: unknown, maxItems: number): string[] {
  if (!Array.isArray(value)) return [];

  const seen = new Set<string>();
  const items: string[] = [];

  for (const entry of value) {
    const cleaned: string = cleanString(entry);
    const key: string = cleaned.toLowerCase();
    if (!cleaned || seen.has(key)) continue;
    seen.add(key);
    items.push(cleaned);
    if (items.length >= maxItems) break;
  }

  return items;
}

interface SectionScore {
  score: number;
  feedback: string;
}

function normalizeSection(value: any, fallbackFeedback: string): SectionScore {
  return {
    score: clampScore(value?.score),
    feedback: cleanString(value?.feedback, fallbackFeedback),
  };
}

interface ParsingRisk {
  severity: string;
  type: string;
  issue: string;
  fix: string;
}

interface FormatRisk {
  severity: string;
  issue: string;
}

interface BulletFeedback {
  original: string;
  problem: string;
  improved: string;
}

interface RewriteSuggestion {
  section: string;
  original: string;
  improved: string;
}

interface SectionImprovement {
  section: string;
  priority: string;
  issue: string;
  fix: string;
}

interface KeywordAnalysis {
  matched: string[];
  missing: string[];
  partial: string[];
}

interface NormalizedAnalysis {
  version: string;
  job_description_provided: boolean;
  score: number;
  summary: string;
  score_breakdown: {
    formatting: number;
    keyword_match: number;
    experience_quality: number;
    section_completeness: number;
    parsing_clarity: number;
  };
  sections: {
    contact_info: SectionScore;
    formatting: SectionScore;
    keywords: SectionScore;
    experience: SectionScore;
    education: SectionScore;
    skills: SectionScore;
  };
  improvements: string[];
  keyword_analysis: KeywordAnalysis;
  missing_keywords: string[];
  matched_keywords: string[];
  parsing_risks: ParsingRisk[];
  format_risks: FormatRisk[];
  bullet_feedback: BulletFeedback[];
  rewrite_suggestions: RewriteSuggestion[];
  section_improvements: SectionImprovement[];
}

function normalizeAnalysis(rawAnalysis: any, jobDescriptionProvided: boolean): NormalizedAnalysis {
  const keywordAnalysis: KeywordAnalysis = {
    matched: cleanStringArray(rawAnalysis?.keyword_analysis?.matched ?? rawAnalysis?.matched_keywords, 8),
    missing: cleanStringArray(rawAnalysis?.keyword_analysis?.missing ?? rawAnalysis?.missing_keywords, 8),
    partial: cleanStringArray(rawAnalysis?.keyword_analysis?.partial, 5),
  };

  const parsingRisks: ParsingRisk[] = Array.isArray(rawAnalysis?.parsing_risks)
    ? rawAnalysis.parsing_risks
        .map((risk: any) => ({
          severity: ["high", "medium", "low"].includes(risk?.severity) ? risk.severity : "medium",
          type: ["tables", "columns", "headers", "footers", "graphics", "dates", "file_format", "unknown"].includes(risk?.type)
            ? risk.type
            : "unknown",
          issue: cleanString(risk?.issue),
          fix: cleanString(risk?.fix),
        }))
        .filter((risk: ParsingRisk) => risk.issue)
        .slice(0, 4)
    : [];

  const formatRisks: FormatRisk[] = [
    ...parsingRisks.map((risk: ParsingRisk) => ({
      severity: risk.severity,
      issue: risk.issue,
    })),
    ...(Array.isArray(rawAnalysis?.format_risks) ? rawAnalysis.format_risks : [])
      .map((risk: any) => ({
        severity: ["high", "medium", "low"].includes(risk?.severity) ? risk.severity : "medium",
        issue: cleanString(risk?.issue),
      }))
      .filter((risk: FormatRisk) => risk.issue),
  ].slice(0, 4);

  return {
    version: "ats_v1_1",
    job_description_provided: jobDescriptionProvided,
    score: clampScore(rawAnalysis?.score),
    summary: cleanString(rawAnalysis?.summary, "ATS analysis completed."),
    score_breakdown: {
      formatting: clampScore(rawAnalysis?.score_breakdown?.formatting),
      keyword_match: clampScore(rawAnalysis?.score_breakdown?.keyword_match),
      experience_quality: clampScore(rawAnalysis?.score_breakdown?.experience_quality),
      section_completeness: clampScore(rawAnalysis?.score_breakdown?.section_completeness),
      parsing_clarity: clampScore(rawAnalysis?.score_breakdown?.parsing_clarity),
    },
    sections: {
      contact_info: normalizeSection(rawAnalysis?.sections?.contact_info, "Contact details are usable."),
      formatting: normalizeSection(rawAnalysis?.sections?.formatting, "Formatting is acceptable for ATS."),
      keywords: normalizeSection(rawAnalysis?.sections?.keywords, "Keyword coverage is acceptable."),
      experience: normalizeSection(rawAnalysis?.sections?.experience, "Experience section needs review."),
      education: normalizeSection(rawAnalysis?.sections?.education, "Education section is acceptable."),
      skills: normalizeSection(rawAnalysis?.sections?.skills, "Skills section needs refinement."),
    },
    improvements: cleanStringArray(rawAnalysis?.improvements, 6),
    keyword_analysis: keywordAnalysis,
    missing_keywords: keywordAnalysis.missing,
    matched_keywords: keywordAnalysis.matched,
    parsing_risks: parsingRisks,
    format_risks: formatRisks,
    bullet_feedback: (Array.isArray(rawAnalysis?.bullet_feedback) ? rawAnalysis.bullet_feedback : [])
      .map((item: any) => ({
        original: cleanString(item?.original),
        problem: cleanString(item?.problem),
        improved: cleanString(item?.improved),
      }))
      .filter((item: BulletFeedback) => item.original && item.problem && item.improved)
      .slice(0, 3),
    rewrite_suggestions: (Array.isArray(rawAnalysis?.rewrite_suggestions) ? rawAnalysis.rewrite_suggestions : [])
      .map((item: any) => ({
        section: cleanString(item?.section, "section"),
        original: cleanString(item?.original),
        improved: cleanString(item?.improved),
      }))
      .filter((item: RewriteSuggestion) => item.original && item.improved)
      .slice(0, 3),
    section_improvements: (Array.isArray(rawAnalysis?.section_improvements) ? rawAnalysis.section_improvements : [])
      .map((item: any) => ({
        section: cleanString(item?.section, "section"),
        priority: ["high", "medium", "low"].includes(item?.priority) ? item.priority : "medium",
        issue: cleanString(item?.issue),
        fix: cleanString(item?.fix),
      }))
      .filter((item: SectionImprovement) => item.issue && item.fix)
      .slice(0, 6),
  };
}

export async function POST(request: NextRequest): Promise<Response> {
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

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

    const apiKey: string | undefined = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY is not set");
      return errorResponse("The analysis service is temporarily unavailable. Please try again later.", 500);
    }

    // Parse request
    const body = await request.json();
    const blobUrl: string = body.blobUrl;
    const jobDescription: string = body.jobDescription || "";
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }
    if (!isValidBlobUrl(blobUrl)) {
      return errorResponse("Invalid file URL.", 400);
    }

    // Download PDF from blob
    const res: globalThis.Response = await fetch(blobUrl);
    if (!res.ok) {
      console.error(`Failed to fetch blob URL (${res.status})`);
      throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
    }
    const buffer: Buffer = Buffer.from(await res.arrayBuffer());
    const id: string = randomUUID();
    tmpPath = join("/tmp", `${id}-resume.pdf`);
    await writeFile(tmpPath, buffer);

    // Extract text from PDF using iLoveAPI pdftxt
    const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;

    let resumeText: string = "";

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

    // Analyze with OpenAI using a compact JSON contract.
    const systemPrompt: string = "You are an ATS resume analyzer. Return only valid JSON. No markdown. No commentary. No code fences. Be concise. If evidence is weak, use fewer items rather than guessing.";
    const userPrompt: string = `Analyze this resume for ATS compatibility.

Output JSON matching this structure exactly:
{
  "version": "ats_v1_1",
  "job_description_provided": boolean,
  "score": integer,
  "summary": string,
  "score_breakdown": {
    "formatting": integer,
    "keyword_match": integer,
    "experience_quality": integer,
    "section_completeness": integer,
    "parsing_clarity": integer
  },
  "sections": {
    "contact_info": { "score": integer, "feedback": string },
    "formatting": { "score": integer, "feedback": string },
    "keywords": { "score": integer, "feedback": string },
    "experience": { "score": integer, "feedback": string },
    "education": { "score": integer, "feedback": string },
    "skills": { "score": integer, "feedback": string }
  },
  "improvements": [string],
  "keyword_analysis": {
    "matched": [string],
    "missing": [string],
    "partial": [string]
  },
  "missing_keywords": [string],
  "matched_keywords": [string],
  "parsing_risks": [
    {
      "severity": "high|medium|low",
      "type": "tables|columns|headers|footers|graphics|dates|file_format|unknown",
      "issue": string,
      "fix": string
    }
  ],
  "format_risks": [
    {
      "severity": "high|medium|low",
      "issue": string
    }
  ],
  "bullet_feedback": [
    {
      "original": string,
      "problem": string,
      "improved": string
    }
  ],
  "rewrite_suggestions": [
    {
      "section": string,
      "original": string,
      "improved": string
    }
  ],
  "section_improvements": [
    {
      "section": string,
      "priority": "high|medium|low",
      "issue": string,
      "fix": string
    }
  ]
}

Rules:
- score and all subscores are integers 0-100.
- summary: max 240 chars.
- improvements: 3 to 6 items, action-oriented.
- matched keywords: 0 to 8 items.
- missing keywords: 0 to 8 items.
- partial keywords: 0 to 5 items.
- parsing risks: 0 to 4 items.
- bullet feedback: 0 to 3 items, only if strong evidence exists.
- rewrite suggestions: 0 to 3 items.
- section improvements: 0 to 6 items.
- Keep strings short and production-safe.
- missing_keywords must equal keyword_analysis.missing.
- matched_keywords must equal keyword_analysis.matched.

JOB DESCRIPTION:
${jobDescription.trim() || "(none)"}

RESUME TEXT:
${resumeText.substring(0, MAX_RESUME_TEXT_CHARS)}`;

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
          max_tokens: 1800,
        }),
      });

      if (openaiRes.ok || openaiRes.status !== 429) break;

      // Rate limited — wait and retry
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
      console.error("AI analysis request failed:", openaiRes!.status); throw new Error("An error occurred while analyzing your file. Please try again.");
    }

    const openaiData = await openaiRes!.json();
    const content: string | undefined = openaiData.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("AI returned no analysis.");
    }

    // Parse the JSON response
    let analysis: NormalizedAnalysis;
    try {
      const cleaned: string = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      analysis = normalizeAnalysis(JSON.parse(cleaned), Boolean(jobDescription.trim()));
    } catch {
      console.error("Failed to parse AI response:", content);
      throw new Error("AI returned invalid analysis format.");
    }

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "ats-optimizer");

    return NextResponse.json(analysis);
  } catch (err: unknown) {
    console.error("ats-optimizer route error:", err);

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
