import { readFile, writeFile, unlink } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"
import { logger } from "@/lib/logger"

const MAX_PDF_TEXT_CHARS = 12000
const MAX_QUESTION_CHARS = 500
const MAX_HISTORY_MESSAGES = 10

interface ChatMessage {
  role: string
  content: string
}

/**
 * Chat with PDF processor — extracted from app/api/chat-with-pdf/route.ts
 * Uses OpenAI to answer questions about a PDF. Returns text result as .txt blob.
 *
 * Special: supports optional pdfText param (no file download needed).
 * tmpPath may point to a PDF or may be ignored if pdfText is provided.
 */
export async function chatWithPdfProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error("AI service not configured")

  const question = params.question as string
  const pdfText = params.pdfText as string | undefined
  const history = (params.history as ChatMessage[]) || []

  if (!question || typeof question !== "string" || question.trim().length === 0) {
    throw new Error("Please enter a question")
  }

  onProgress(10)

  // Get PDF text
  let documentText = ""

  if (pdfText && typeof pdfText === "string" && pdfText.trim().length > 50) {
    documentText = pdfText.substring(0, MAX_PDF_TEXT_CHARS)
  } else if (tmpPath) {
    // Extract text from PDF
    const buffer = await readFile(tmpPath)

    // Check for blank PDF
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check")
      const { blank } = await isBlankPdf(buffer)
      if (blank) throw new Error("This file appears to be empty")
    } catch (err) {
      if ((err as Error).message.includes("empty")) throw err
    }

    onProgress(20)

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
    const secretKey = process.env.ILOVEAPI_SECRET_KEY

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
  } else {
    throw new Error("Missing PDF content")
  }

  onProgress(40)

  // Build conversation messages
  const systemPrompt = `You are a helpful PDF document assistant. The user has uploaded a PDF document and wants to ask questions about it. Answer based ONLY on the document content provided below. If the answer is not in the document, say so clearly. Be concise, accurate, and helpful. Format your answers in plain text — no markdown headers or code blocks.

DOCUMENT CONTENT:
${documentText}`

  const messages: { role: string; content: string }[] = [
    { role: "system", content: systemPrompt },
  ]

  const recentHistory = Array.isArray(history) ? history.slice(-MAX_HISTORY_MESSAGES) : []
  for (const msg of recentHistory) {
    if (msg.role === "user" && typeof msg.content === "string") {
      messages.push({ role: "user", content: msg.content.substring(0, MAX_QUESTION_CHARS) })
    } else if (msg.role === "assistant" && typeof msg.content === "string") {
      messages.push({ role: "assistant", content: msg.content.substring(0, 2000) })
    }
  }

  messages.push({ role: "user", content: question.trim().substring(0, MAX_QUESTION_CHARS) })

  onProgress(50)

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
        messages,
        temperature: 0.3,
        max_tokens: 1500,
      }),
    })
    if (openaiRes.ok || openaiRes.status !== 429) break
    await new Promise((r) => setTimeout(r, (attempt + 1) * 5000))
  }

  if (!openaiRes!.ok) {
    if (openaiRes!.status === 429) throw new Error("AI service is temporarily busy")
    throw new Error("AI service request failed")
  }

  onProgress(80)

  const openaiData = await openaiRes!.json()
  const answer = openaiData.choices?.[0]?.message?.content
  if (!answer) throw new Error("AI returned no response")

  onProgress(90)

  // Store result as .txt blob
  const { put } = await import("@vercel/blob")
  const resultText = JSON.stringify({ answer: answer.trim(), pdfText: documentText })
  const outputFilename = "chat-response.txt"

  const blob = await put(outputFilename, resultText, {
    access: "public",
    contentType: "text/plain",
  })

  logger.info("chat_with_pdf_complete", { outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
