import { logger } from "@/lib/logger"

/**
 * Office to PDF processor — extracted from app/api/office-to-pdf/route.ts
 * Uses iLoveAPI "officepdf" task. Accepts doc, docx, ppt, pptx, xls, xlsx, odt, odp, ods.
 * Used by the job queue system for async processing.
 */
export async function officeToPdfProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
  const secretKey = process.env.ILOVEAPI_SECRET_KEY

  if (!publicKey || !secretKey) {
    throw new Error("Processing service not configured")
  }

  const originalName = (params.original_name as string) || "input.docx"

  onProgress(10)

  // Process with iLoveAPI
  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  const instance = new ILovePDFApi(publicKey, secretKey)
  const task = instance.newTask("officepdf")
  await task.start()

  onProgress(30)

  const officeFile = new ILovePDFFile(tmpPath)
  await task.addFile(officeFile)
  await task.process()

  onProgress(70)

  const data = await task.download()

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
  const outputFilename = `${baseName}.pdf`

  const blob = await put(outputFilename, data, {
    access: "public",
    contentType: "application/pdf",
  })

  logger.info("office_to_pdf_complete", { originalName, outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
