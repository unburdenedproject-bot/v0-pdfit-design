import { NextRequest, NextResponse } from "next/server"
import { claimNextJob, updateJobProgress, completeJob, failJob } from "@/lib/job-queue"
import { blobUrlToTmp, cleanupTmp } from "@/lib/api/blob-handler"
import { logger } from "@/lib/logger"
import { del } from "@vercel/blob"

export const runtime = "nodejs"
export const maxDuration = 300

/**
 * POST /api/jobs/process — Process the next pending job
 *
 * Phase 1: Called by the frontend after creating a job.
 * Phase 2: Will be called by a cron or external worker.
 *
 * Claims the highest-priority pending job and processes it.
 */
export async function POST(request: NextRequest) {
  // Only allow internal calls (from cron or server-side)
  const authHeader = request.headers.get("authorization")
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const startTime = Date.now()
  let tmpPath: string | null = null
  let inputBlobUrl: string | null = null

  try {
    const body = await request.json().catch(() => ({}))
    const tool = body.tool as string | undefined

    // Claim next job (atomic — prevents double-processing)
    const job = await claimNextJob(tool)

    if (!job) {
      return NextResponse.json({ message: "No pending jobs" }, { status: 200 })
    }

    const requestId = logger.request(job.tool, job.user_id || undefined)
    inputBlobUrl = job.input_blob_url

    try {
      // Some tools manage their own file downloads (merge-pdf uses blobUrls array in params,
      // chat-with-pdf may use pdfText without a file)
      const selfManagedTools = ["merge-pdf"]
      const optionalFileTools = ["chat-with-pdf"]

      if (selfManagedTools.includes(job.tool)) {
        // These processors download files themselves from input_params
        await updateJobProgress(job.id, 10)
      } else if (optionalFileTools.includes(job.tool) && !inputBlobUrl) {
        // chat-with-pdf can work with pdfText alone (no file needed)
        await updateJobProgress(job.id, 10)
      } else {
        // Standard: download single input file to /tmp
        if (!inputBlobUrl) {
          throw new Error("Job has no input file")
        }
        await updateJobProgress(job.id, 10)
        const { tmpPath: path } = await blobUrlToTmp(inputBlobUrl)
        tmpPath = path
      }
      await updateJobProgress(job.id, 30)

      // Route to the correct processor based on tool name
      const processor = await getProcessor(job.tool)
      if (!processor) {
        throw new Error(`Unknown tool: ${job.tool}`)
      }

      const result = await processor(tmpPath, job.input_params, (progress: number) => {
        updateJobProgress(job.id, 30 + Math.floor(progress * 0.6)) // 30-90%
      })

      await updateJobProgress(job.id, 95)

      // Mark as complete
      await completeJob(job.id, result.outputUrl, result.outputFilename)

      logger.requestEnd(requestId, job.tool, "success", Date.now() - startTime)

      return NextResponse.json({
        jobId: job.id,
        status: "completed",
        outputUrl: result.outputUrl,
        outputFilename: result.outputFilename,
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Processing failed"
      await failJob(job.id, errorMessage)
      logger.error("job_processing_failed", err, { jobId: job.id, tool: job.tool })

      return NextResponse.json(
        { jobId: job.id, status: "failed", error: "Processing failed. It will be retried automatically." },
        { status: 500 }
      )
    }
  } catch (err) {
    logger.error("job_process_endpoint_error", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  } finally {
    // Cleanup
    if (tmpPath) await cleanupTmp(tmpPath)
    if (inputBlobUrl) await del(inputBlobUrl).catch(() => {})
  }
}

interface ProcessorResult {
  outputUrl: string
  outputFilename: string
}

type Processor = (
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
) => Promise<ProcessorResult>

/**
 * Get the processor function for a given tool.
 * Phase 1: Returns null (tools still use direct processing).
 * Phase 2: Each tool registers its processor here.
 *
 * To migrate a tool:
 * 1. Extract the processing logic from its route into a function
 * 2. Register it here
 * 3. Update the route to create a job instead of processing directly
 */
async function getProcessor(tool: string): Promise<Processor | null> {
  switch (tool) {
    case "compress-pdf": {
      const { compressPdfProcessor } = await import("@/lib/processors/compress-pdf")
      return compressPdfProcessor
    }
    case "pdf-to-word": {
      const { pdfToWordProcessor } = await import("@/lib/processors/pdf-to-word")
      return pdfToWordProcessor
    }
    case "pdf-to-excel": {
      const { pdfToExcelProcessor } = await import("@/lib/processors/pdf-to-excel")
      return pdfToExcelProcessor
    }
    case "pdf-to-powerpoint": {
      const { pdfToPowerpointProcessor } = await import("@/lib/processors/pdf-to-powerpoint")
      return pdfToPowerpointProcessor
    }
    case "pdf-to-txt": {
      const { pdfToTxtProcessor } = await import("@/lib/processors/pdf-to-txt")
      return pdfToTxtProcessor
    }
    case "excel-to-pdf": {
      const { excelToPdfProcessor } = await import("@/lib/processors/excel-to-pdf")
      return excelToPdfProcessor
    }
    case "powerpoint-to-pdf": {
      const { powerpointToPdfProcessor } = await import("@/lib/processors/powerpoint-to-pdf")
      return powerpointToPdfProcessor
    }
    case "office-to-pdf": {
      const { officeToPdfProcessor } = await import("@/lib/processors/office-to-pdf")
      return officeToPdfProcessor
    }
    case "split-pdf": {
      const { splitPdfProcessor } = await import("@/lib/processors/split-pdf")
      return splitPdfProcessor
    }
    case "merge-pdf": {
      const { mergePdfProcessor } = await import("@/lib/processors/merge-pdf")
      return mergePdfProcessor
    }
    case "ocr-pdf": {
      const { ocrPdfProcessor } = await import("@/lib/processors/ocr-pdf")
      return ocrPdfProcessor
    }
    case "upload-ready-pdf": {
      const { uploadReadyPdfProcessor } = await import("@/lib/processors/upload-ready-pdf")
      return uploadReadyPdfProcessor
    }
    case "chat-with-pdf": {
      const { chatWithPdfProcessor } = await import("@/lib/processors/chat-with-pdf")
      return chatWithPdfProcessor
    }
    case "translate-pdf": {
      const { translatePdfProcessor } = await import("@/lib/processors/translate-pdf")
      return translatePdfProcessor
    }
    case "pdf-summarizer": {
      const { pdfSummarizerProcessor } = await import("@/lib/processors/pdf-summarizer")
      return pdfSummarizerProcessor
    }
    case "question-generator": {
      const { questionGeneratorProcessor } = await import("@/lib/processors/question-generator")
      return questionGeneratorProcessor
    }
    case "smart-extraction": {
      const { smartExtractionProcessor } = await import("@/lib/processors/smart-extraction")
      return smartExtractionProcessor
    }
    case "flatten-pdf": {
      const { flattenPdfProcessor } = await import("@/lib/processors/flatten-pdf")
      return flattenPdfProcessor
    }
    case "rotate-pdf": {
      const { rotatePdfProcessor } = await import("@/lib/processors/rotate-pdf")
      return rotatePdfProcessor
    }
    case "watermark-pdf": {
      const { watermarkPdfProcessor } = await import("@/lib/processors/watermark-pdf")
      return watermarkPdfProcessor
    }
    case "extract-images-from-pdf": {
      const { extractImagesFromPdfProcessor } = await import("@/lib/processors/extract-images-from-pdf")
      return extractImagesFromPdfProcessor
    }
    case "pdf-to-jpg": {
      const { pdfToJpgProcessor } = await import("@/lib/processors/pdf-to-jpg")
      return pdfToJpgProcessor
    }
    case "pdf-to-png": {
      const { pdfToPngProcessor } = await import("@/lib/processors/pdf-to-png")
      return pdfToPngProcessor
    }
    case "protect-pdf": {
      const { protectPdfProcessor } = await import("@/lib/processors/protect-pdf")
      return protectPdfProcessor
    }
    case "unlock-pdf": {
      const { unlockPdfProcessor } = await import("@/lib/processors/unlock-pdf")
      return unlockPdfProcessor
    }
    default:
      return null
  }
}
