"use client"

import { useState, useCallback, useRef } from "react"

interface JobStatus {
  id: string
  status: "pending" | "processing" | "completed" | "failed"
  progress: number
  tool: string
  outputUrl: string | null
  outputFilename: string | null
  error: string | null
}

interface UseJobPollingReturn {
  jobId: string | null
  jobStatus: JobStatus | null
  isPolling: boolean
  startPolling: (jobId: string) => void
  stopPolling: () => void
}

/**
 * Client-side hook for polling job status.
 * Used by ProcessingInterface when async mode is enabled.
 *
 * Usage:
 *   const { startPolling, jobStatus, isPolling } = useJobPolling(onComplete, onError)
 *   // After creating a job:
 *   startPolling(jobId)
 */
export function useJobPolling(
  onComplete: (job: JobStatus) => void,
  onError: (error: string) => void,
  pollIntervalMs = 2000
): UseJobPollingReturn {
  const [jobId, setJobId] = useState<string | null>(null)
  const [jobStatus, setJobStatus] = useState<JobStatus | null>(null)
  const [isPolling, setIsPolling] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsPolling(false)
  }, [])

  const startPolling = useCallback(
    (id: string) => {
      setJobId(id)
      setIsPolling(true)

      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      const poll = async () => {
        try {
          const res = await fetch(`/api/jobs/${id}`)
          if (!res.ok) {
            stopPolling()
            onError("Failed to check job status")
            return
          }

          const data: JobStatus = await res.json()
          setJobStatus(data)

          if (data.status === "completed") {
            stopPolling()
            onComplete(data)
          } else if (data.status === "failed") {
            stopPolling()
            onError(data.error || "Processing failed. Please try again.")
          }
          // "pending" and "processing" continue polling
        } catch {
          stopPolling()
          onError("Lost connection. Please refresh and try again.")
        }
      }

      // Poll immediately, then every N seconds
      poll()
      intervalRef.current = setInterval(poll, pollIntervalMs)
    },
    [onComplete, onError, pollIntervalMs, stopPolling]
  )

  return { jobId, jobStatus, isPolling, startPolling, stopPolling }
}
