import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

const MAX_PDF_TEXT_CHARS = 12000

/**
 * Question Generator processor — extracted from app/api/question-generator/route.ts
 * Uses iLoveAPI for text extraction + OpenAI for question generation.
 * Returns JSON result as .txt blob.
 */
export async function questionGeneratorProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error("AI service not configured")

  const questionType = (params.questionType as string) || "mixed"
  const count = Math.min(Math.max(parseInt(params.count as string) || 10, 3), 20)
  const difficulty = (params.difficulty as string) || "medium"
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
  const typeInstruction =
    questionType === "multiple_choice"
      ? "Generate ONLY multiple choice questions. Each must have exactly 4 options (A, B, C, D) with one correct answer."
      : questionType === "short_answer"
        ? "Generate ONLY short answer questions. Each answer should be 1-3 sentences."
        : questionType === "true_false"
          ? "Generate ONLY true/false questions. Each must have a clear true or false answer."
          : "Generate a MIX of multiple choice, short answer, and true/false questions."

  const difficultyInstruction =
    difficulty === "easy"
      ? "Questions should test basic recall and understanding. Straightforward factual questions."
      : difficulty === "hard"
        ? "Questions should test critical thinking, analysis, and deeper understanding. Include questions that require combining multiple concepts."
        : "Questions should test understanding and application. A mix of factual and analytical questions."

  const systemPrompt = `You are an educational question generator. Generate ${count} questions based on the document content below. Return only valid JSON. No markdown. No code fences.

${typeInstruction}
${difficultyInstruction}

Output JSON matching this structure exactly:
{
  "questions": [
    {
      "type": "multiple_choice" | "short_answer" | "true_false",
      "question": string,
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."] | null,
      "answer": string,
      "explanation": string
    }
  ]
}

Rules:
- Generate exactly ${count} questions.
- All questions must be based ONLY on information in the document. Do not use outside knowledge.
- For multiple choice: exactly 4 options, answer is the letter (e.g. "B").
- For short answer: answer is 1-3 sentences.
- For true/false: answer is "True" or "False".
- explanation: 1 sentence explaining why the answer is correct, referencing the document.
- options is null for short_answer and true_false types.
- Keep questions clear, concise, and unambiguous.`

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
          { role: "user", content: `Generate questions from this document:\n\n${documentText}` },
        ],
        temperature: 0.5,
        max_tokens: 3000,
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
  let result: unknown
  try {
    const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim()
    result = JSON.parse(cleaned)
  } catch {
    throw new Error("AI returned invalid format")
  }

  onProgress(90)

  // Store result as .txt blob
  const { put } = await import("@vercel/blob")
  const resultText = JSON.stringify(result)
  const outputFilename = "questions-result.txt"

  const blob = await put(outputFilename, resultText, {
    access: "public",
    contentType: "text/plain",
  })

  logger.info("question_generator_complete", { outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
