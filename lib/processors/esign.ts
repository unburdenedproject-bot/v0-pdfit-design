import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

interface SignatureInput {
  page: number
  x: number
  y: number
  width: number
  height: number
  signatureSource: string
}

async function signatureSourceToBytes(signatureSource: string): Promise<Uint8Array> {
  if (!signatureSource || typeof signatureSource !== "string") {
    throw new Error("Missing signature image data.")
  }

  if (signatureSource.startsWith("data:")) {
    const [, encoded = ""] = signatureSource.split(",", 2)
    return Uint8Array.from(Buffer.from(encoded, "base64"))
  }

  const sigRes = await fetch(signatureSource)
  if (!sigRes.ok) {
    console.error(`Failed to fetch signature image (${sigRes.status})`)
    throw new Error("Failed to load the signature. Please try again.")
  }

  return new Uint8Array(await sigRes.arrayBuffer())
}

/**
 * eSign processor — extracted from app/api/esign/route.ts
 * Used by the job queue system for async processing.
 *
 * params.signatures: SignatureInput[]
 * params.original_name: string
 */
export async function esignProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const signatures = (params.signatures as SignatureInput[]) || []
  const originalName = (params.original_name as string) || "input.pdf"

  if (!Array.isArray(signatures) || signatures.length === 0) {
    throw new Error("No signatures specified.")
  }

  onProgress(10)

  // Load the PDF
  const pdfBytes = await readFile(tmpPath)
  const { PDFDocument } = await import("pdf-lib")
  const pdfDoc = await PDFDocument.load(pdfBytes)
  const pages = pdfDoc.getPages()

  onProgress(30)

  // Apply each signature
  for (let i = 0; i < signatures.length; i++) {
    const sig = signatures[i]
    const pageIndex = sig.page
    if (pageIndex < 0 || pageIndex >= pages.length) continue

    const page = pages[pageIndex]
    const { width: pageWidth, height: pageHeight } = page.getSize()

    const sigBytes = await signatureSourceToBytes(sig.signatureSource)

    let sigImage
    try {
      sigImage = await pdfDoc.embedPng(sigBytes)
    } catch {
      sigImage = await pdfDoc.embedJpg(sigBytes)
    }

    const x = sig.x * pageWidth
    const w = sig.width * pageWidth
    const h = sig.height * pageHeight
    const y = pageHeight - sig.y * pageHeight - h

    page.drawImage(sigImage, { x, y, width: w, height: h })

    onProgress(30 + Math.floor(((i + 1) / signatures.length) * 40))
  }

  onProgress(80)

  // Save the signed PDF
  const signedBytes = await pdfDoc.save()

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
  const outputFilename = `${baseName}-signed.pdf`

  const blob = await put(outputFilename, Buffer.from(signedBytes), {
    access: "public",
    contentType: "application/pdf",
  })

  logger.info("esign_complete", { originalName, outputUrl: blob.url })

  return { outputUrl: blob.url, outputFilename }
}
