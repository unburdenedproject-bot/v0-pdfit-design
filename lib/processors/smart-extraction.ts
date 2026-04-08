import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

const MAX_PDF_TEXT_CHARS = 10000

/**
 * Smart Extraction processor — extracted from app/api/smart-extraction/route.ts
 * Uses iLoveAPI for text extraction + OpenAI for structured data extraction.
 * Returns JSON result as .txt blob.
 */
export async function smartExtractionProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error("AI service not configured")

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
- Keep all strings concise and production-safe`

  const userPrompt = `Extract all structured data from this document:\n\n${documentText}`

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
          { role: "user", content: userPrompt },
        ],
        temperature: 0.1,
        max_tokens: 2000,
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
  const content = openaiData.choices?.[0]?.message?.content
  if (!content) throw new Error("AI returned no response")

  // Parse JSON
  let extraction: unknown
  try {
    const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim()
    extraction = JSON.parse(cleaned)
  } catch {
    throw new Error("AI returned invalid extraction format")
  }

  onProgress(90)

  // Store result as .txt blob
  const { put } = await import("@vercel/blob")
  const resultText = JSON.stringify(extraction)
  const outputFilename = "extraction-result.txt"

  const blob = await put(outputFilename, resultText, {
    access: "public",
    contentType: "text/plain",
  })

  logger.info("smart_extraction_complete", { outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
