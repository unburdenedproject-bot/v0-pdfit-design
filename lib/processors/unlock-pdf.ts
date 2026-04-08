import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

/**
 * Unlock PDF processor — extracted from app/api/unlock-pdf/route.ts
 * Used by the job queue system for async processing.
 */
export async function unlockPdfProcessor(
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
  const password = params.password as string

  if (!password || typeof password !== "string" || password.trim().length === 0) {
    throw new Error("Password is required to unlock this PDF")
  }

  onProgress(10)

  // Validate PDF header
  const headerBytes = await readFile(tmpPath).then((buf) => buf.subarray(0, 5))
  if (headerBytes.length < 5 || headerBytes.toString("ascii") !== "%PDF-") {
    throw new Error("The uploaded file is not a valid PDF")
  }

  // Check for blank PDF
  const pdfBytes = await readFile(tmpPath)
  try {
    const { isBlankPdf } = await import("@/lib/blank-pdf-check")
    const { blank } = await isBlankPdf(pdfBytes)
    if (blank) {
      throw new Error("This file appears to be empty and cannot be unlocked")
    }
  } catch (err) {
    if ((err as Error).message.includes("empty")) throw err
  }

  onProgress(30)

  // Process with iLoveAPI
  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  const instance = new ILovePDFApi(publicKey, secretKey)
  const task = instance.newTask("unlock")
  await task.start()

  onProgress(50)

  const pdfFile = new ILovePDFFile(tmpPath)
  pdfFile.params = { password: password.trim() }
  await task.addFile(pdfFile)
  await task.process()

  onProgress(70)

  const data = await task.download()

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "")
  const outputFilename = `${baseName}-unlocked.pdf`

  const blob = await put(outputFilename, data, {
    access: "public",
    contentType: "application/pdf",
  })

  logger.info("unlock_pdf_complete", {
    originalName,
    outputUrl: blob.url,
  })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
