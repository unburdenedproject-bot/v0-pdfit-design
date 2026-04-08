import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

const MAX_PDF_TEXT_CHARS = 14000

/**
 * PDF Summarizer processor — extracted from app/api/pdf-summarizer/route.ts
 * Uses iLoveAPI for text extraction + OpenAI for summarization.
 * Returns summary text result as .txt blob.
 */
export async function pdfSummarizerProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error("AI service not configured")

  const length = (params.length as string) || "medium"
  const language = (params.language as string) || "same"
  const originalName = (params.original_name as string) || "input.pdf"

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
    documentText = txtData.toString("utf-8")
  }

  if (!documentText || documentText.trim().length < 50) {
    documentText = buffer.toString("utf-8").replace(/[^\x20-\x7E\n\r\t]/g, " ").trim()
  }

  if (!documentText || documentText.trim().length < 50) {
    throw new Error("Could not extract text from this PDF. Try a text-based PDF or run OCR first.")
  }

  documentText = documentText.substring(0, MAX_PDF_TEXT_CHARS)

  onProgress(40)

  // Build prompts
  const lengthInstruction =
    length === "short"
      ? "Provide a brief summary in 2-3 sentences (max 100 words)."
      : length === "detailed"
        ? "Provide a comprehensive summary with key sections, main arguments, and important details (300-500 words). Use clear paragraph breaks."
        : "Provide a clear summary covering the main points (150-250 words). Use paragraph breaks for readability."

  const languageInstruction =
    language === "english"
      ? "Write the summary in English."
      : language === "spanish"
        ? "Write the summary in Spanish."
        : language === "portuguese"
          ? "Write the summary in Brazilian Portuguese."
          : "Write the summary in the same language as the document."

  const systemPrompt = `You are a professional document summarizer. Summarize the document text provided below. ${lengthInstruction} ${languageInstruction}

Rules:
- Focus on the most important information, key findings, and main conclusions.
- Be factual — only include information present in the document.
- Use plain text with paragraph breaks. No markdown headers, no bullet points, no code blocks.
- If the document is a contract, highlight key terms, parties, and obligations.
- If the document is a report, highlight key findings and recommendations.
- If the document is an invoice, highlight total amount, parties, and due date.`

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
          { role: "user", content: `Summarize this document:\n\n${documentText}` },
        ],
        temperature: 0.3,
        max_tokens: length === "short" ? 200 : length === "detailed" ? 800 : 400,
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
  const summary = openaiData.choices?.[0]?.message?.content
  if (!summary) throw new Error("AI returned no response")

  onProgress(90)

  // Store result as .txt blob
  const { put } = await import("@vercel/blob")
  const resultText = JSON.stringify({ summary: summary.trim() })
  const outputFilename = "summary-result.txt"

  const blob = await put(outputFilename, resultText, {
    access: "public",
    contentType: "text/plain",
  })

  logger.info("pdf_summarizer_complete", { outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
