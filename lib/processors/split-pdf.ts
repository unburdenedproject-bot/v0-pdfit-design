import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

/**
 * Split PDF processor — extracted from app/api/split-pdf/route.ts
 * Uses iLoveAPI "split" task.
 * Used by the job queue system for async processing.
 */
export async function splitPdfProcessor(
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
  const ranges = (params.ranges as string) || ""

  if (!ranges.trim()) {
    throw new Error('Missing "ranges" field. Provide page ranges like "1-3,4-6".')
  }

  const cleanRanges = ranges.trim().replace(/\s/g, "")
  const rangesPattern = /^\d+(-\d+)?(,\d+(-\d+)?)*$/
  if (!rangesPattern.test(cleanRanges)) {
    throw new Error(`Invalid ranges format "${ranges}". Use comma-separated ranges like "1-3,4-6".`)
  }

  onProgress(10)

  // Check for blank PDF
  const pdfBytes = await readFile(tmpPath)
  try {
    const { isBlankPdf } = await import("@/lib/blank-pdf-check")
    const { blank } = await isBlankPdf(pdfBytes)
    if (blank) {
      throw new Error("This file appears to be empty and cannot be split")
    }
  } catch (err) {
    if ((err as Error).message.includes("empty")) throw err
  }

  // Validate page count
  const { PDFDocument } = await import("pdf-lib")
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true })
  const pageCount = pdfDoc.getPageCount()
  if (pageCount <= 1) {
    throw new Error("A single-page PDF cannot be split. Please upload a PDF with 2 or more pages.")
  }

  onProgress(30)

  // Process with iLoveAPI
  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  const instance = new ILovePDFApi(publicKey, secretKey)
  const task = instance.newTask("split")
  await task.start()

  onProgress(50)

  const pdfFile = new ILovePDFFile(tmpPath)
  await task.addFile(pdfFile)
  await task.process({ ranges: cleanRanges })

  onProgress(70)

  const data = await task.download()

  onProgress(85)

  // Detect output type (ZIP for multiple ranges, PDF for single)
  const outBuf = Buffer.isBuffer(data) ? data : Buffer.from(data)
  const sig2 = outBuf.subarray(0, 2).toString("utf8")
  const sig4 = outBuf.subarray(0, 4).toString("utf8")
  const isZip = sig2 === "PK"
  const isPdf = sig4 === "%PDF"

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")

  const outContentType = isZip ? "application/zip" : isPdf ? "application/pdf" : "application/octet-stream"
  const outputFilename = isZip ? `${baseName}-split.zip` : `${baseName}-split.pdf`

  const blob = await put(outputFilename, outBuf, {
    access: "public",
    contentType: outContentType,
  })

  logger.info("split_pdf_complete", { originalName, ranges: cleanRanges, outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
