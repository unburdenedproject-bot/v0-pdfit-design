import { readFile, writeFile, unlink } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"
import { logger } from "@/lib/logger"

const MAX_PDF_TEXT_CHARS = 12000

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
}

/**
 * Translate PDF processor — extracted from app/api/translate-pdf/route.ts
 * Uses iLoveAPI for text extraction + OpenAI for translation.
 * Returns translation text result as .txt blob.
 */
export async function translatePdfProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error("AI service not configured")

  const targetLang = (params.targetLanguage as string) || "english"
  const originalName = (params.original_name as string) || "input.pdf"
  const targetLanguageName = LANGUAGES[targetLang] || "English"

  onProgress(5)

  // Read and validate PDF
  const buffer = await readFile(tmpPath)

  try {
    const { isBlankPdf } = await import("@/lib/blank-pdf-check")
    const { blank } = await isBlankPdf(buffer)
    if (blank) throw new Error("This file appears to be empty")
  } catch (err) {
    if ((err as Error).message.includes("empty")) throw err
  }

  onProgress(15)

  // Extract text using iLoveAPI
  const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
  const secretKey = process.env.ILOVEAPI_SECRET_KEY
  let documentText = ""

  if (publicKey && secretKey) {
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default
    const instance = new ILovePDFApi(publicKey, secretKey)
    const task = instance.newTask("extract")
    await task.start()
    await task.addFile(new ILovePDFFile(tmpPath))
    await task.process()
    const txtData = await task.download()
    documentText = Buffer.from(txtData).toString("utf-8")
  }

  if (!documentText || documentText.trim().length < 50) {
    documentText = buffer.toString("utf-8").replace(/[^\x20-\x7E\n\r\t]/g, " ").trim()
  }

  if (!documentText || documentText.trim().length < 50) {
    throw new Error("Could not extract text from this PDF. Try a text-based PDF or run OCR first.")
  }

  documentText = documentText.substring(0, MAX_PDF_TEXT_CHARS)

  onProgress(40)

  const systemPrompt = `You are a professional document translator. Translate the document text below into ${targetLanguageName}.

Rules:
- Translate ALL text faithfully and accurately. Do not summarize or skip sections.
- Preserve the document structure: keep paragraph breaks, section headers, and list formatting.
- Keep proper nouns, company names, and technical terms that don't have standard translations in the original language.
- Keep numbers, dates, and currencies in their original format unless the target language has a different standard.
- Use formal/professional register appropriate for business documents.
- Output only the translated text. No commentary, no notes, no "Translation:" prefix.`

  // Call OpenAI with retry
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
          { role: "user", content: documentText },
        ],
        temperature: 0.2,
        max_tokens: 4000,
      }),
    })
    if (openaiRes.ok || openaiRes.status !== 429) break
    await new Promise((r) => setTimeout(r, (attempt + 1) * 5000))
  }

  if (!openaiRes!.ok) {
    if (openaiRes!.status === 429) throw new Error("AI service is temporarily busy")
    throw new Error("AI service request failed")
  }

  onProgress(75)

  const openaiData = await openaiRes!.json()
  const translation = openaiData.choices?.[0]?.message?.content
  if (!translation) throw new Error("AI returned no response")

  onProgress(90)

  // Store result as .txt blob
  const { put } = await import("@vercel/blob")
  const resultText = JSON.stringify({
    translation: translation.trim(),
    detectedLanguage: null,
    targetLanguage: targetLanguageName,
  })
  const outputFilename = "translation-result.txt"

  const blob = await put(outputFilename, resultText, {
    access: "public",
    contentType: "text/plain",
  })

  logger.info("translate_pdf_complete", {
    targetLanguage: targetLanguageName,
    outputUrl: blob.url,
  })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
