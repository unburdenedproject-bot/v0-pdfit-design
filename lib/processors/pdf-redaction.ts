import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"
import { isValidBlobUrl } from "@/lib/validate-blob-url"

interface RedactedPageInput {
  page: number
  blobUrl: string
  width: number
  height: number
}

/**
 * PDF Redaction processor — extracted from app/api/pdf-redaction/route.ts
 * Used by the job queue system for async processing.
 *
 * params.redacted_pages: RedactedPageInput[]
 * params.original_name: string
 */
export async function pdfRedactionProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const redactedPages = (params.redacted_pages as RedactedPageInput[]) || []
  const originalName = (params.original_name as string) || "input.pdf"

  if (!Array.isArray(redactedPages) || redactedPages.length === 0) {
    throw new Error("No redacted page renders were provided.")
  }

  onProgress(10)

  const pdfBytes = await readFile(tmpPath)
  const { PDFDocument } = await import("pdf-lib")
  const sourcePdf = await PDFDocument.load(pdfBytes)
  const outputPdf = await PDFDocument.create()

  onProgress(20)

  // Fetch all replacement page images
  const replacementPages = new Map<number, { imageBytes: ArrayBuffer; width: number; height: number }>()

  for (const redactedPage of redactedPages) {
    const pageIndex = redactedPage?.page
    const pageBlobUrl = redactedPage?.blobUrl
    const pageWidth = redactedPage?.width
    const pageHeight = redactedPage?.height

    if (
      !Number.isInteger(pageIndex) ||
      pageIndex < 0 ||
      pageIndex >= sourcePdf.getPageCount()
    ) {
      throw new Error(`Invalid page index: ${pageIndex}`)
    }

    if (
      typeof pageBlobUrl !== "string" ||
      typeof pageWidth !== "number" ||
      typeof pageHeight !== "number" ||
      pageWidth <= 0 ||
      pageHeight <= 0
    ) {
      throw new Error(`Invalid redacted page payload for page ${pageIndex + 1}.`)
    }

    if (!isValidBlobUrl(pageBlobUrl)) {
      throw new Error("Invalid file URL.")
    }

    const imageResponse = await fetch(pageBlobUrl)
    if (!imageResponse.ok) {
      throw new Error(`Failed to process page ${pageIndex + 1}. Please try again.`)
    }

    const imageBytes = await imageResponse.arrayBuffer()
    replacementPages.set(pageIndex, { imageBytes, width: pageWidth, height: pageHeight })
  }

  onProgress(50)

  // Build output PDF
  for (let pageIndex = 0; pageIndex < sourcePdf.getPageCount(); pageIndex++) {
    const replacement = replacementPages.get(pageIndex)

    if (replacement) {
      const image = await outputPdf.embedPng(replacement.imageBytes)
      const page = outputPdf.addPage([replacement.width, replacement.height])
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: replacement.width,
        height: replacement.height,
      })
      continue
    }

    const [copiedPage] = await outputPdf.copyPages(sourcePdf, [pageIndex])
    outputPdf.addPage(copiedPage)
  }

  onProgress(80)

  const redactedBytes = await outputPdf.save()

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
  const outputFilename = `${baseName}-redacted.pdf`

  const blob = await put(outputFilename, Buffer.from(redactedBytes), {
    access: "public",
    contentType: "application/pdf",
  })

  logger.info("pdf_redaction_complete", { originalName, outputUrl: blob.url })

  return { outputUrl: blob.url, outputFilename }
}
