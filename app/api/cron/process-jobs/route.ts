import { NextRequest, NextResponse } from "next/server"
import { logger } from "@/lib/logger"

export const runtime = "nodejs"
export const maxDuration = 300

const CRON_SECRET = process.env.CRON_SECRET

/**
 * GET /api/cron/process-jobs — Process pending jobs in the queue
 *
 * Runs every minute via Vercel Cron. Claims and processes up to 5 pending
 * jobs per invocation. Each job is processed by calling the /api/jobs/process
 * endpoint internally.
 *
 * Phase 1: Uses Vercel serverless functions as workers.
 * Phase 2: Will be replaced by dedicated Fly.io workers.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const results: Array<{ jobId?: string; status: string; error?: string }> = []

  // Process up to 5 jobs per cron invocation
  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch(`${siteUrl}/api/jobs/process`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${CRON_SECRET}`,
        },
        body: JSON.stringify({}),
      })

      const data = await res.json()

      if (data.message === "No pending jobs") {
        break // Queue is empty
      }

      results.push({
        jobId: data.jobId,
        status: data.status || "unknown",
        error: data.error,
      })
    } catch (err) {
      logger.error("cron_process_jobs_error", err)
      results.push({ status: "error", error: "Failed to process job" })
      break // Stop on error
    }
  }

  logger.info("cron_process_jobs_complete", {
    processed: results.length,
    results,
  })

  return NextResponse.json({
    ok: true,
    processed: results.length,
    results,
  })
}
