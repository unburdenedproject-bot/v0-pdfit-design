import { NextRequest, NextResponse } from "next/server"
import { getJobStatus } from "@/lib/job-queue"
import { createClient } from "@/lib/supabase/server"

export const runtime = "nodejs"

/**
 * GET /api/jobs/[id] — Poll job status
 *
 * Returns the current status of a processing job.
 * Frontend polls this every 2 seconds until status is "completed" or "failed".
 * Users can only see their own jobs.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!id) {
    return NextResponse.json({ error: "Missing job ID" }, { status: 400 })
  }

  const job = await getJobStatus(id)

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 })
  }

  // Auth check: users can only see their own jobs
  if (job.user_id) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || user.id !== job.user_id) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 })
    }
  }

  return NextResponse.json({
    id: job.id,
    status: job.status,
    progress: job.progress,
    tool: job.tool,
    outputUrl: job.output_blob_url,
    outputFilename: job.output_filename,
    error: job.error_message,
    createdAt: job.created_at,
    startedAt: job.started_at,
    completedAt: job.completed_at,
  })
}
