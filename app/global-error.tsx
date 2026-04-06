"use client"

import * as Sentry from "@sentry/nextjs"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <div style={{ textAlign: "center", padding: "80px 20px", fontFamily: "Inter, sans-serif" }}>
          <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#64748B", marginBottom: "24px" }}>
            We've been notified and are working on it.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#14D8C4",
              color: "#0E0F1E",
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
