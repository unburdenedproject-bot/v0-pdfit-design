import { readFile, writeFile, unlink } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"
import { logger } from "@/lib/logger"

const MAX_RESUME_TEXT_CHARS = 7000

function clampScore(value: unknown, fallback: number = 0): number {
  const num = Number(value)
  if (!Number.isFinite(num)) return fallback
  return Math.max(0, Math.min(100, Math.round(num)))
}

function cleanString(value: unknown, fallback: string = ""): string {
  return typeof value === "string" ? value.trim() : fallback
}

function cleanStringArray(value: unknown, maxItems: number): string[] {
  if (!Array.isArray(value)) return []
  const seen = new Set<string>()
  const items: string[] = []
  for (const entry of value) {
    const cleaned = cleanString(entry)
    const key = cleaned.toLowerCase()
    if (!cleaned || seen.has(key)) continue
    seen.add(key)
    items.push(cleaned)
    if (items.length >= maxItems) break
  }
  return items
}

function normalizeSection(value: any, fallbackFeedback: string) {
  return {
    score: clampScore(value?.score),
    feedback: cleanString(value?.feedback, fallbackFeedback),
  }
}

function normalizeAnalysis(rawAnalysis: any, jobDescriptionProvided: boolean) {
  const keywordAnalysis = {
    matched: cleanStringArray(rawAnalysis?.keyword_analysis?.matched ?? rawAnalysis?.matched_keywords, 8),
    missing: cleanStringArray(rawAnalysis?.keyword_analysis?.missing ?? rawAnalysis?.missing_keywords, 8),
    partial: cleanStringArray(rawAnalysis?.keyword_analysis?.partial, 5),
  }

  const parsingRisks = Array.isArray(rawAnalysis?.parsing_risks)
    ? rawAnalysis.parsing_risks
        .map((risk: any) => ({
          severity: ["high", "medium", "low"].includes(risk?.severity) ? risk.severity : "medium",
          type: ["tables", "columns", "headers", "footers", "graphics", "dates", "file_format", "unknown"].includes(risk?.type)
            ? risk.type
            : "unknown",
          issue: cleanString(risk?.issue),
          fix: cleanString(risk?.fix),
        }))
        .filter((risk: any) => risk.issue)
        .slice(0, 4)
    : []

  const formatRisks = [
    ...parsingRisks.map((risk: any) => ({
      severity: risk.severity,
      issue: risk.issue,
    })),
    ...(Array.isArray(rawAnalysis?.format_risks) ? rawAnalysis.format_risks : [])
      .map((risk: any) => ({
        severity: ["high", "medium", "low"].includes(risk?.severity) ? risk.severity : "medium",
        issue: cleanString(risk?.issue),
      }))
      .filter((risk: any) => risk.issue),
  ].slice(0, 4)

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
      .filter((item: any) => item.original && item.problem && item.improved)
      .slice(0, 3),
    rewrite_suggestions: (Array.isArray(rawAnalysis?.rewrite_suggestions) ? rawAnalysis.rewrite_suggestions : [])
      .map((item: any) => ({
        section: cleanString(item?.section, "section"),
        original: cleanString(item?.original),
        improved: cleanString(item?.improved),
      }))
      .filter((item: any) => item.original && item.improved)
      .slice(0, 3),
    section_improvements: (Array.isArray(rawAnalysis?.section_improvements) ? rawAnalysis.section_improvements : [])
      .map((item: any) => ({
        section: cleanString(item?.section, "section"),
        priority: ["high", "medium", "low"].includes(item?.priority) ? item.priority : "medium",
        issue: cleanString(item?.issue),
        fix: cleanString(item?.fix),
      }))
      .filter((item: any) => item.issue && item.fix)
      .slice(0, 6),
  }
}

/**
 * ATS Optimizer processor — extracted from app/api/ats-optimizer/route.ts
 * Used by the job queue system for async processing.
 *
 * This returns JSON analysis (uploaded as a .json blob), not a PDF.
 *
 * params.original_name: string
 * params.job_description: string
 */
export async function atsOptimizerProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const jobDescription = (params.job_description as string) || ""

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error("The analysis service is temporarily unavailable. Please try again later.")
  }

  const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
  const secretKey = process.env.ILOVEAPI_SECRET_KEY

  onProgress(10)

  // Extract text from PDF using iLoveAPI
  let resumeText = ""

  if (publicKey && secretKey) {
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

    const instance = new ILovePDFApi(publicKey, secretKey)
    const task = instance.newTask("extract")
    await task.start()
    const pdfFile = new ILovePDFFile(tmpPath)
    await task.addFile(pdfFile)
    await task.process()
    const txtData = await task.download()
    resumeText = txtData.toString("utf-8")
  }

  onProgress(30)

  if (!resumeText || resumeText.trim().length < 50) {
    const buffer = await readFile(tmpPath)
    resumeText = buffer.toString("utf-8").replace(/[^\x20-\x7E\n\r\t]/g, " ").trim()
  }

  if (!resumeText || resumeText.trim().length < 50) {
    throw new Error(
      "Could not extract text from this PDF. Try a text-based resume (not a scanned image). Run OCR first if needed."
    )
  }

  onProgress(40)

  // Analyze with OpenAI
  const systemPrompt =
    "You are an ATS resume analyzer. Return only valid JSON. No markdown. No commentary. No code fences. Be concise. If evidence is weak, use fewer items rather than guessing."
  const userPrompt = `Analyze this resume for ATS compatibility.

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
${resumeText.substring(0, MAX_RESUME_TEXT_CHARS)}`

  let openaiRes: globalThis.Response | undefined
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
          { role: "user", content: userPrompt },
        ],
        temperature: 0.1,
        max_tokens: 1800,
      }),
    })

    if (openaiRes.ok || openaiRes.status !== 429) break
    const waitMs = (attempt + 1) * 5000
    await new Promise((r) => setTimeout(r, waitMs))
  }

  onProgress(70)

  if (!openaiRes!.ok) {
    if (openaiRes!.status === 429) {
      throw new Error("AI service is temporarily busy. Please try again in a few seconds.")
    }
    throw new Error("An error occurred while analyzing your file. Please try again.")
  }

  const openaiData = await openaiRes!.json()
  const content = openaiData.choices?.[0]?.message?.content

  if (!content) {
    throw new Error("AI returned no analysis.")
  }

  let analysis: any
  try {
    const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim()
    analysis = normalizeAnalysis(JSON.parse(cleaned), Boolean(jobDescription.trim()))
  } catch {
    console.error("Failed to parse AI response:", content)
    throw new Error("AI returned invalid analysis format.")
  }

  onProgress(90)

  // Upload JSON result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const outputFilename = "ats-analysis.json"

  const blob = await put(outputFilename, JSON.stringify(analysis), {
    access: "public",
    contentType: "application/json",
  })

  logger.info("ats_optimizer_complete", { score: analysis.score, outputUrl: blob.url })

  return { outputUrl: blob.url, outputFilename }
}
