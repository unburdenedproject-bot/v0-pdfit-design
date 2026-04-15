/**
 * Client-side tool funnel events — pushed to the GTM dataLayer so they flow
 * into GA4. Enables funnel + cohort analysis in GA4 Explore:
 *   file_selected → process_start → process_complete → result_downloaded
 * plus upgrade clicks and error types.
 *
 * Usage inside a tool interface (client component):
 *   import { trackToolEvent } from "@/lib/analytics"
 *
 *   // When user picks a file
 *   trackToolEvent("compress-pdf", "file_selected", { file_size_mb: file.size / 1e6, tier: userPlan })
 *
 *   // When user hits process
 *   trackToolEvent("compress-pdf", "process_start", { tier: userPlan })
 *
 *   // On success
 *   trackToolEvent("compress-pdf", "process_complete", { tier: userPlan, latency_ms: Date.now() - t0 })
 *
 *   // On failure (classify the cause)
 *   trackToolEvent("compress-pdf", "process_error", { tier: userPlan, error_type: "input", error_code: 422 })
 *
 *   // On download
 *   trackToolEvent("compress-pdf", "result_downloaded", { tier: userPlan, format: "pdf" })
 *
 *   // On upgrade CTA click
 *   trackToolEvent("compress-pdf", "upgrade_clicked", { tier: userPlan, source: "size_limit" })
 *
 * All events fire under the GA4 event name "tool_event" so they can be
 * filtered by `event.tool` and `event.event` in GA4 Explore. Fails silently
 * if dataLayer isn't on window (SSR, or consent not granted).
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export type ToolEventName =
  | "file_selected"
  | "process_start"
  | "process_complete"
  | "process_error"
  | "result_downloaded"
  | "upgrade_clicked"
  | "tool_opened"

export type ErrorType = "input" | "server" | "unavailable" | "invalid_pdf" | "network" | "unknown"

export interface ToolEventData {
  tier?: string              // "free" | "pro" | "business" | "enterprise"
  file_size_mb?: number      // Rounded to 2 decimals when passed; helper rounds before sending
  file_type?: string         // MIME or extension
  latency_ms?: number        // Process duration
  format?: string            // Download format (pdf, txt, xlsx, json, csv, docx)
  error_type?: ErrorType     // Category of failure
  error_code?: number        // HTTP status code when available
  source?: string            // For upgrade_clicked — what triggered it
  [key: string]: unknown     // Escape hatch for tool-specific metadata
}

/**
 * Push a tool funnel event to GTM → GA4.
 * Silent no-op on the server or when GTM hasn't loaded.
 */
export function trackToolEvent(tool: string, event: ToolEventName, data: ToolEventData = {}): void {
  if (typeof window === "undefined") return
  if (!window.dataLayer) return

  try {
    // Round file_size_mb to 2 decimals to avoid cardinality explosion
    const cleaned: Record<string, unknown> = { ...data }
    if (typeof cleaned.file_size_mb === "number") {
      cleaned.file_size_mb = Math.round(cleaned.file_size_mb * 100) / 100
    }

    window.dataLayer.push({
      event: "tool_event",
      tool,
      tool_event: event,
      ...cleaned,
    })
  } catch (err) {
    // Silent — analytics should never break the tool
    if (process.env.NODE_ENV === "development") {
      console.warn("trackToolEvent failed:", err)
    }
  }
}

/**
 * Classify an error for consistent `error_type` labeling.
 * Keeps the GA4 error dimension small (5 buckets) so Paula can see patterns.
 */
export function classifyError(status?: number, message?: string): ErrorType {
  if (status === 503) return "unavailable"
  if (status === 422) return "invalid_pdf"
  if (status === 400 || status === 413) return "input"
  if (status && status >= 500) return "server"
  const lower = (message || "").toLowerCase()
  if (lower.includes("too large") || lower.includes("size limit") || lower.includes("empty") || lower.includes("not a valid")) return "input"
  if (lower.includes("network") || lower.includes("failed to fetch")) return "network"
  return "unknown"
}
