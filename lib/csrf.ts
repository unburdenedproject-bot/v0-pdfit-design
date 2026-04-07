import { NextRequest, NextResponse } from "next/server"

/**
 * Validate that a POST request originates from our own domain.
 * Returns null if valid, or an error response if CSRF detected.
 */
export function checkCsrf(request: NextRequest): NextResponse | null {
  const origin = request.headers.get("origin")
  const referer = request.headers.get("referer")
  const source = origin || referer

  // Allow if no origin header (same-origin requests from older browsers, curl, etc.)
  if (!source) return null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdf.it.com"
  const allowedOrigins = [
    siteUrl,
    siteUrl.replace("https://", "https://www."),
    "https://pdf.it.com",
    "https://www.pdf.it.com",
    "http://localhost:3000",
  ]

  const isAllowed = allowedOrigins.some(
    (allowed) => source === allowed || source.startsWith(allowed + "/")
  )

  if (!isAllowed) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  return null
}
