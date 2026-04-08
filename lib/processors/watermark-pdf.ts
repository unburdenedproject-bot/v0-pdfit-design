import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

/**
 * Watermark PDF processor — extracted from app/api/watermark-pdf/route.ts
 * Used by the job queue system for async processing.
 */
export async function watermarkPdfProcessor(
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
  const watermarkText = (params.text as string) || "CONFIDENTIAL"
  const transparency = (params.transparency as number) ?? 50
  const fontSize = (params.font_size as number) ?? 48
  const fontColor = (params.font_color as string) || "#000000"
  const position = (params.position as string) || "center"

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
      throw new Error("This file appears to be empty and cannot be watermarked")
    }
  } catch (err) {
    if ((err as Error).message.includes("empty")) throw err
  }

  onProgress(30)

  // Process with iLoveAPI
  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  const instance = new ILovePDFApi(publicKey, secretKey)
  const task = instance.newTask("watermark")
  await task.start()

  onProgress(50)

  const pdfFile = new ILovePDFFile(tmpPath)
  await task.addFile(pdfFile)

  // Map position string to iLovePDF vertical/horizontal params
  let vertical_position: string = "middle"
  let horizontal_position: string = "center"
  if (position === "top-left") { vertical_position = "top"; horizontal_position = "left" }
  else if (position === "top-right") { vertical_position = "top"; horizontal_position = "right" }
  else if (position === "bottom-left") { vertical_position = "bottom"; horizontal_position = "left" }
  else if (position === "bottom-right") { vertical_position = "bottom"; horizontal_position = "right" }

  await task.process({
    mode: "text",
    text: watermarkText,
    transparency: transparency,
    font_family: "Arial",
    font_size: fontSize,
    font_color: fontColor,
    rotation: position === "center" ? 315 : 0,
    vertical_position: vertical_position,
    horizontal_position: horizontal_position,
    layer: "above",
  })

  onProgress(70)

  const data = await task.download()

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "")
  const outputFilename = `${baseName}-watermarked.pdf`

  const blob = await put(outputFilename, data, {
    access: "public",
    contentType: "application/pdf",
  })

  logger.info("watermark_pdf_complete", {
    originalName,
    watermarkText,
    outputUrl: blob.url,
  })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
