import { createClient } from "@supabase/supabase-js"
import { logger } from "@/lib/logger"

const supabaseAdmin = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
})()

export interface Job {
  id: string
  user_id: string | null
  tool: string
  status: "pending" | "processing" | "completed" | "failed"
  input_blob_url: string | null
  input_params: Record<string, unknown>
  output_blob_url: string | null
  output_filename: string | null
  error_message: string | null
  progress: number
  priority: number
  attempts: number
  max_attempts: number
  created_at: string
  started_at: string | null
  completed_at: string | null
  expires_at: string
}

/** Priority levels by plan */
const PLAN_PRIORITY: Record<string, number> = {
  free: 0,
  pro: 1,
  business: 2,
  enterprise: 3,
}

/**
 * Create a new processing job.
 * Returns the job ID immediately — processing happens asynchronously.
 */
export async function createJob(opts: {
  userId: string | null
  userPlan?: string
  tool: string
  inputBlobUrl: string
  inputParams?: Record<string, unknown>
}): Promise<{ jobId: string } | { error: string }> {
  if (!supabaseAdmin) {
    return { error: "Database not configured" }
  }

  const priority = PLAN_PRIORITY[opts.userPlan || "free"] ?? 0

  const { data, error } = await supabaseAdmin
    .from("processing_jobs")
    .insert({
      user_id: opts.userId,
      tool: opts.tool,
      status: "pending",
      input_blob_url: opts.inputBlobUrl,
      input_params: opts.inputParams || {},
      priority,
    })
    .select("id")
    .single()

  if (error || !data) {
    logger.error("job_create_failed", error, { tool: opts.tool })
    return { error: "Failed to create processing job" }
  }

  logger.info("job_created", { jobId: data.id, tool: opts.tool, priority })
  return { jobId: data.id }
}

/**
 * Get job status — used by the polling endpoint.
 */
export async function getJobStatus(jobId: string): Promise<Job | null> {
  if (!supabaseAdmin) return null

  const { data } = await supabaseAdmin
    .from("processing_jobs")
    .select("*")
    .eq("id", jobId)
    .single()

  return data as Job | null
}

/**
 * Claim the next pending job for processing.
 * Uses UPDATE with WHERE to prevent two workers from claiming the same job.
 */
export async function claimNextJob(tool?: string): Promise<Job | null> {
  if (!supabaseAdmin) return null

  let query = supabaseAdmin
    .from("processing_jobs")
    .select("*")
    .eq("status", "pending")
    .order("priority", { ascending: false })
    .order("created_at", { ascending: true })
    .limit(1)

  if (tool) {
    query = query.eq("tool", tool)
  }

  const { data: jobs } = await query

  if (!jobs || jobs.length === 0) return null

  const job = jobs[0]

  // Atomically claim by updating status
  const { data: claimed, error } = await supabaseAdmin
    .from("processing_jobs")
    .update({
      status: "processing",
      started_at: new Date().toISOString(),
      attempts: job.attempts + 1,
    })
    .eq("id", job.id)
    .eq("status", "pending") // Only if still pending (prevents double-claim)
    .select("*")
    .single()

  if (error || !claimed) return null // Another worker claimed it

  return claimed as Job
}

/**
 * Update job progress (0-100).
 */
export async function updateJobProgress(jobId: string, progress: number) {
  if (!supabaseAdmin) return
  await supabaseAdmin
    .from("processing_jobs")
    .update({ progress: Math.min(100, Math.max(0, progress)) })
    .eq("id", jobId)
}

/**
 * Mark job as completed with output file.
 */
export async function completeJob(
  jobId: string,
  outputBlobUrl: string,
  outputFilename: string
) {
  if (!supabaseAdmin) return

  await supabaseAdmin
    .from("processing_jobs")
    .update({
      status: "completed",
      output_blob_url: outputBlobUrl,
      output_filename: outputFilename,
      progress: 100,
      completed_at: new Date().toISOString(),
    })
    .eq("id", jobId)

  logger.info("job_completed", { jobId })
}

/**
 * Mark job as failed. Will be retried if attempts < max_attempts.
 */
export async function failJob(jobId: string, errorMessage: string) {
  if (!supabaseAdmin) return

  const { data: job } = await supabaseAdmin
    .from("processing_jobs")
    .select("attempts, max_attempts")
    .eq("id", jobId)
    .single()

  const shouldRetry = job && job.attempts < job.max_attempts
  const newStatus = shouldRetry ? "pending" : "failed"

  await supabaseAdmin
    .from("processing_jobs")
    .update({
      status: newStatus,
      error_message: errorMessage,
      completed_at: newStatus === "failed" ? new Date().toISOString() : null,
    })
    .eq("id", jobId)

  logger.info(shouldRetry ? "job_retry_queued" : "job_failed", {
    jobId,
    errorMessage,
    attempts: job?.attempts,
  })
}
