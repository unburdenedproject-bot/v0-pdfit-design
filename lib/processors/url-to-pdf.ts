import { logger } from "@/lib/logger"

/**
 * URL to PDF processor — extracted from app/api/url-to-pdf/route.ts
 * Used by the job queue system for async processing.
 *
 * Note: This processor does NOT use tmpPath since input is a URL, not a file.
 * The tmpPath parameter will be ignored (job runner may pass a dummy path).
 *
 * params.url: string — the URL to capture
 */
export async function urlToPdfProcessor(
  _tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const url = params.url as string

  if (!url || typeof url !== "string") {
    throw new Error("Missing URL.")
  }

  const apiKey = process.env.CLOUDCONVERT_API_KEY
  if (!apiKey) {
    throw new Error("The conversion service is temporarily unavailable. Please try again later.")
  }

  onProgress(10)

  // URL validation
  const { validateUrlForCapture } = await import("@/lib/url-validation")
  const validation = await validateUrlForCapture(url)
  if (!validation.valid) {
    throw new Error(validation.reason)
  }

  onProgress(15)

  // Create CloudConvert job
  const jobRes = await fetch("https://api.cloudconvert.com/v2/jobs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tasks: {
        "capture-1": {
          operation: "capture-website",
          url: url,
          output_format: "pdf",
          engine: "chrome",
          page_orientation: "portrait",
          page_size: "A4",
          margin_top: 10,
          margin_bottom: 10,
          margin_left: 10,
          margin_right: 10,
          print_background: true,
          wait_until: "networkidle0",
          wait_time: 3000,
        },
        "export-1": {
          operation: "export/url",
          input: "capture-1",
        },
      },
    }),
  })

  if (!jobRes.ok) {
    const err = await jobRes.json().catch(() => ({}))
    console.error("Conversion job creation failed:", (err as any).message || jobRes.status)
    throw new Error("An error occurred while converting the URL. Please try again.")
  }

  const job = await jobRes.json()
  const jobId = job.data.id

  onProgress(30)

  // Poll for completion
  let finished: any = null
  for (let i = 0; i < 60; i++) {
    await new Promise<void>((r) => setTimeout(r, 2000))

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
      const failedTask = pollData.data.tasks?.find((t: any) => t.status === "error")
      throw new Error("Conversion failed. The URL may be inaccessible or the page took too long to load.")
    }

    // Update progress during polling (30-70%)
    onProgress(30 + Math.min(40, i * 2))
  }

  if (!finished) {
    throw new Error("Conversion timed out. Please try again.")
  }

  onProgress(75)

  // Download the result
  const exportTask = finished.tasks.find((t: any) => t.name === "export-1")
  const fileUrl = exportTask?.result?.files?.[0]?.url
  if (!fileUrl) {
    throw new Error("No output file was produced.")
  }

  const fileRes = await fetch(fileUrl)
  if (!fileRes.ok) {
    throw new Error("An error occurred while processing the converted file. Please try again.")
  }

  const pdfBuffer = Buffer.from(await fileRes.arrayBuffer())

  onProgress(90)

  // Upload to Vercel Blob
  const { put } = await import("@vercel/blob")

  let filename = "webpage.pdf"
  try {
    const parsed = new URL(url)
    filename = `${parsed.hostname.replace(/\./g, "-")}.pdf`
  } catch {
    // keep default
  }

  const blob = await put(filename, pdfBuffer, {
    access: "public",
    contentType: "application/pdf",
  })

  logger.info("url_to_pdf_complete", { url, outputUrl: blob.url })

  return { outputUrl: blob.url, outputFilename: filename }
}
