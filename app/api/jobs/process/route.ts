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
      // Download input file to /tmp
      if (!inputBlobUrl) {
        throw new Error("Job has no input file")
      }

      await updateJobProgress(job.id, 10)
      const { tmpPath: path } = await blobUrlToTmp(inputBlobUrl)
      tmpPath = path
      await updateJobProgress(job.id, 30)

      // Route to the correct processor based on tool name
      const processor = getProcessor(job.tool)
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
function getProcessor(tool: string): Processor | null {
  const processors: Record<string, Processor> = {
    // Phase 2: Register processors here as tools are migrated
    // "compress-pdf": compressPdfProcessor,
    // "merge-pdf": mergePdfProcessor,
    // etc.
  }

  return processors[tool] || null
}
