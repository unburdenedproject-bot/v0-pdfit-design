import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

/**
 * PDF to Excel processor — extracted from app/api/pdf-to-excel/route.ts
 * Uses CloudConvert REST API (pdf → xlsx).
 * Used by the job queue system for async processing.
 */
export async function pdfToExcelProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const apiKey = process.env.CLOUDCONVERT_API_KEY
  if (!apiKey) {
    throw new Error("The conversion service is temporarily unavailable. Please try again later.")
  }

  const originalName = (params.original_name as string) || "input.pdf"

  onProgress(5)

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

  onProgress(10)

  // Step 1: Create the CloudConvert job
  const jobRes = await fetch("https://api.cloudconvert.com/v2/jobs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tasks: {
        "import-1": { operation: "import/upload" },
        "convert-1": {
          operation: "convert",
          input: "import-1",
          input_format: "pdf",
          output_format: "xlsx",
        },
        "export-1": {
          operation: "export/url",
          input: "convert-1",
        },
      },
    }),
  })

  if (!jobRes.ok) {
    throw new Error("An error occurred while processing your file. Please try again.")
  }

  const job = await jobRes.json()
  const importTask = job.data.tasks.find((t: any) => t.name === "import-1")
  if (!importTask?.result?.form) {
    throw new Error("An error occurred while processing your file. Please try again.")
  }

  onProgress(20)

  // Step 2: Upload the file
  const form = importTask.result.form
  const formData = new FormData()
  for (const [key, value] of Object.entries(form.parameters || {})) {
    formData.append(key, value as string)
  }
  formData.append("file", new Blob([pdfBytes]), originalName)

  const uploadRes = await fetch(form.url, { method: "POST", body: formData })
  if (!uploadRes.ok && uploadRes.status !== 201 && uploadRes.status !== 204) {
    throw new Error("An error occurred while processing your file. Please try again.")
  }

  onProgress(30)

  // Step 3: Poll for job completion
  const jobId = job.data.id
  let finished: any = null
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 2000))

    const pollRes = await fetch(`https://api.cloudconvert.com/v2/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    if (!pollRes.ok) continue

    const pollData = await pollRes.json()
    const status = pollData.data.status

    if (status === "finished") {
      finished = pollData.data
      break
    }
    if (status === "error") {
      throw new Error("File conversion failed. Please try again or use a different file.")
    }

    onProgress(30 + Math.min(40, i * 2))
  }

  if (!finished) {
    throw new Error("Conversion timed out. Please try again with a smaller file.")
  }

  onProgress(75)

  // Step 4: Download the result
  const exportTask = finished.tasks.find((t: any) => t.name === "export-1")
  const fileUrl = exportTask?.result?.files?.[0]?.url
  if (!fileUrl) {
    throw new Error("An error occurred while processing your file. Please try again.")
  }

  const downloadRes = await fetch(fileUrl)
  if (!downloadRes.ok) {
    throw new Error("An error occurred while retrieving the converted file. Please try again.")
  }

  const data = Buffer.from(await downloadRes.arrayBuffer())

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
  const outputFilename = `${baseName}.xlsx`

  const blob = await put(outputFilename, data, {
    access: "public",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })

  logger.info("pdf_to_excel_complete", { originalName, outputUrl: blob.url })

  return {
    outputUrl: blob.url,
    outputFilename,
  }
}
