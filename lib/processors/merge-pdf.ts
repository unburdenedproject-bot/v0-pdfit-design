import { writeFile, unlink } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"
import { logger } from "@/lib/logger"

/**
 * Merge PDF processor — extracted from app/api/merge-pdf/route.ts
 * Used by the job queue system for async processing.
 *
 * Special: accepts blobUrls array in params instead of a single tmpPath.
 * The tmpPath argument is ignored (null) — files are downloaded from params.blobUrls.
 */
export async function mergePdfProcessor(
  _tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
  const secretKey = process.env.ILOVEAPI_SECRET_KEY

  if (!publicKey || !secretKey) {
    throw new Error("Processing service not configured")
  }

  const blobUrls = params.blobUrls as string[]
  if (!blobUrls || !Array.isArray(blobUrls) || blobUrls.length < 2) {
    throw new Error("At least 2 blob URLs are required to merge")
  }

  onProgress(10)

  // Download all PDFs to /tmp
  const tmpPaths: string[] = []
  try {
    for (let i = 0; i < blobUrls.length; i++) {
      const res = await fetch(blobUrls[i])
      if (!res.ok) throw new Error("Failed to retrieve uploaded file")
      const buffer = Buffer.from(await res.arrayBuffer())
      const id = randomUUID()
      const p = join("/tmp", `${id}-${i}-merge.pdf`)
      await writeFile(p, buffer)
      tmpPaths.push(p)
    }

    onProgress(30)

    // Process with iLoveAPI
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default

    const instance = new ILovePDFApi(publicKey, secretKey)
    const task = instance.newTask("merge")
    await task.start()

    onProgress(50)

    for (const p of tmpPaths) {
      const pdfFile = new ILovePDFFile(p)
      await task.addFile(pdfFile)
    }

    await task.process()

    onProgress(70)

    const data = await task.download()

    onProgress(90)

    // Upload result to Vercel Blob
    const { put } = await import("@vercel/blob")
    const outputFilename = "merged.pdf"

    const blob = await put(outputFilename, Buffer.from(data), {
      access: "public",
      contentType: "application/pdf",
    })

    logger.info("merge_pdf_complete", {
      fileCount: blobUrls.length,
      outputUrl: blob.url,
    })

    return {
      outputUrl: blob.url,
      outputFilename,
    }
  } finally {
    // Clean up all temp files
    for (const p of tmpPaths) {
      await unlink(p).catch(() => {})
    }
  }
}
