import { readFile, writeFile, unlink } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"
import { logger } from "@/lib/logger"

/**
 * Upload-Ready PDF processor — extracted from app/api/upload-ready-pdf/route.ts
 * Multi-step: flatten (PDF/A) + compress via iLoveAPI.
 */
export async function uploadReadyPdfProcessor(
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
  const compressionLevel = (params.compression_level as string) || "recommended"
  const shouldFlatten = params.flatten !== false

  onProgress(5)

  // Validate PDF header
  const headerBytes = await readFile(tmpPath).then((buf) => buf.subarray(0, 5))
  if (headerBytes.length < 5 || headerBytes.toString("ascii") !== "%PDF-") {
    throw new Error("The uploaded file is not a valid PDF")
  }

  const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
  const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

  let currentPath = tmpPath
  let flattenedPath: string | null = null

  try {
    // Step 1: Flatten (PDF/A conversion)
    if (shouldFlatten) {
      onProgress(10)
      const instance1 = new ILovePDFApi(publicKey, secretKey)
      const flattenTask = instance1.newTask("pdfa")
      await flattenTask.start()
      await flattenTask.addFile(new ILovePDFFile(currentPath))
      await flattenTask.process({ conformance: "pdfa-2b" })
      const flattenedData = await flattenTask.download()

      flattenedPath = join("/tmp", `${randomUUID()}-flattened.pdf`)
      await writeFile(flattenedPath, flattenedData)
      currentPath = flattenedPath
      onProgress(45)
    }

    // Step 2: Compress
    onProgress(50)
    const instance2 = new ILovePDFApi(publicKey, secretKey)
    const compressTask = instance2.newTask("compress")
    await compressTask.start()
    await compressTask.addFile(new ILovePDFFile(currentPath))
    await compressTask.process({ compression_level: compressionLevel })

    onProgress(75)

    const data = await compressTask.download()

    onProgress(90)

    // Upload result to Vercel Blob
    const { put } = await import("@vercel/blob")
    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
    const outputFilename = `${baseName}-upload-ready.pdf`

    const blob = await put(outputFilename, Buffer.from(data), {
      access: "public",
      contentType: "application/pdf",
    })

    logger.info("upload_ready_pdf_complete", {
      originalName,
      compressionLevel,
      flatten: shouldFlatten,
      outputUrl: blob.url,
    })

    return {
      outputUrl: blob.url,
      outputFilename,
    }
  } finally {
    if (flattenedPath) {
      await unlink(flattenedPath).catch(() => {})
    }
  }
}
