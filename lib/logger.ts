/**
 * Structured logger for PDF.it API routes.
 * Outputs JSON logs with consistent fields for debugging production issues.
 */

interface LogContext {
  tool?: string
  userId?: string
  requestId?: string
  [key: string]: unknown
}

function formatLog(level: string, message: string, context?: LogContext) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context,
  }
  return JSON.stringify(entry)
}

export const logger = {
  info(message: string, context?: LogContext) {
    console.log(formatLog("info", message, context))
  },

  warn(message: string, context?: LogContext) {
    console.warn(formatLog("warn", message, context))
  },

  error(message: string, error?: unknown, context?: LogContext) {
    const errorDetails: Record<string, unknown> = {}
    if (error instanceof Error) {
      errorDetails.errorMessage = error.message
      errorDetails.errorStack = error.stack?.split("\n").slice(0, 3).join(" | ")
    } else if (error) {
      errorDetails.errorMessage = String(error)
    }
    console.error(formatLog("error", message, { ...context, ...errorDetails }))
  },

  /** Log the start of an API request — returns a requestId for correlation */
  request(tool: string, userId?: string): string {
    const requestId = Math.random().toString(36).substring(2, 10)
    console.log(
      formatLog("info", "request_start", { tool, userId, requestId })
    )
    return requestId
  },

  /** Log the end of an API request with duration */
  requestEnd(
    requestId: string,
    tool: string,
    status: "success" | "error",
    durationMs: number,
    context?: LogContext
  ) {
    console.log(
      formatLog("info", "request_end", {
        requestId,
        tool,
        status,
        durationMs,
        ...context,
      })
    )
  },
}
