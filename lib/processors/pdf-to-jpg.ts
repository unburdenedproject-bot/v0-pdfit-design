import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

/**
 * PDF to JPG processor — extracted from app/api/pdf-to-jpg/route.ts
 * Used by the job queue system for async processing.
 */
export async function pdfToJpgProcessor(
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
      throw new Error("This file appears to be empty and cannot be converted")
    }
  } catch (err) {
    if ((err as Error).message.includes("empty")) throw err
  }

  onProgress(30)

  // Process with iLoveAPI — pdfjpg with "pages" mode
  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  const instance = new ILovePDFApi(publicKey, secretKey)
  const task = instance.newTask("pdfjpg")
  await task.start()

  onProgress(50)

  const pdfFile = new ILovePDFFile(tmpPath)
  await task.addFile(pdfFile)
  await task.process({ pdfjpg_mode: "pages" })

  onProgress(70)

  const data = await task.download()

  // Repackage into a clean zip with renamed files
  const JSZip = (await import("jszip")).default
  const originalBase = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}/g, "")
  const newZip = new JSZip()

  const isZip = data[0] === 0x50 && data[1] === 0x4B
  if (isZip) {
    const zip = await JSZip.loadAsync(data)
    const entries = Object.keys(zip.files).sort()
    let pageNum = 1
    for (const entryName of entries) {
      const entry = zip.files[entryName]
      if (!entry.dir) {
        const ext = entryName.split(".").pop() || "jpg"
        const newName = `${originalBase}-page-${String(pageNum).padStart(4, "0")}.${ext}`
        const content = await entry.async("nodebuffer")
        newZip.file(newName, content)
        pageNum++
      }
    }
  } else {
    newZip.file(`${originalBase}-page-0001.jpg`, data)
  }

  const renamedData: Buffer = await newZip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" })

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const outputFilename = `${originalBase}-images.zip`

  const blob = await put(outputFilename, renamedData, {
    access: "public",
    contentType: "application/zip",
  })

  logger.info("pdf_to_jpg_complete", {
    originalName,
    outputUrl: blob.url,
  })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
