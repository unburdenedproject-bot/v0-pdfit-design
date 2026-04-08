import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

/**
 * PDF to TXT processor — extracted from app/api/pdf-to-txt/route.ts
 * Uses iLoveAPI "extract" task.
 * Used by the job queue system for async processing.
 */
export async function pdfToTxtProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
  const secretKey = process.env.ILOVEAPI_SECRET_KEY

  if (!publicKey || !secretKey) {
    throw new Error("Processing service not configured")
  }

  const originalName = (params.original_name as string) || "input.pdf"

  onProgress(10)

  // Check for blank PDF
  const pdfBytes = await readFile(tmpPath)
  try {
    const { isBlankPdf } = await import("@/lib/blank-pdf-check")
    const { blank } = await isBlankPdf(pdfBytes)
    if (blank) {
      throw new Error("This file appears to be empty and cannot be converted")
    }
  } catch (err) {
    if ((err as Error).message.includes("empty")) throw err
  }

  onProgress(30)

  // Process with iLoveAPI
  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  const instance = new ILovePDFApi(publicKey, secretKey)
  const task = instance.newTask("extract")
  await task.start()

  onProgress(50)

  const pdfFile = new ILovePDFFile(tmpPath)
  await task.addFile(pdfFile)
  await task.process()

  onProgress(70)

  const data = await task.download()

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
  const outputFilename = `${baseName}.txt`

  const blob = await put(outputFilename, data, {
    access: "public",
    contentType: "text/plain",
  })

  logger.info("pdf_to_txt_complete", { originalName, outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
