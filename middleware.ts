import { updateSession } from "@/lib/supabase/middleware"
import { type NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis/cloudflare"
import { createServerClient } from "@supabase/ssr"

// Accept either Vercel KV env vars (legacy marketplace) or Upstash direct env vars
// (current marketplace). Whichever pair is present wins.
const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

if (!kvUrl || !kvToken) {
  console.warn(
    "[middleware] Rate limiter is DISABLED — no Upstash credentials found. " +
    "Set KV_REST_API_URL + KV_REST_API_TOKEN or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN."
  )
}

// Authenticated users: 300 req/min (avoids blocking shared office IPs)
const authenticatedRatelimit =
  kvUrl && kvToken
    ? new Ratelimit({
        redis: new Redis({ url: kvUrl, token: kvToken }),
        limiter: Ratelimit.slidingWindow(300, "1 m"),
        analytics: true,
        prefix: "rl:user",
      })
    : null

// Anonymous users: 100 req/min (keyed by IP)
const anonymousRatelimit =
  kvUrl && kvToken
    ? new Ratelimit({
        redis: new Redis({ url: kvUrl, token: kvToken }),
        limiter: Ratelimit.slidingWindow(100, "1 m"),
        analytics: true,
        prefix: "rl:ip",
      })
    : null

/**
 * Try to extract the authenticated user ID from the Supabase session cookie.
 * This is a lightweight read-only parse — it does NOT refresh the session
 * (updateSession handles that for non-API routes).
 */
function getUserIdFromRequest(request: NextRequest): string | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !supabaseKey) return null

  // Supabase stores the session in a cookie whose name starts with "sb-"
  // and ends with "-auth-token". The cookie value is a base64-encoded JSON
  // array where the first element is the access token JWT.
  const cookies = request.cookies.getAll()
  const authCookie = cookies.find(
    (c) => c.name.startsWith("sb-") && c.name.endsWith("-auth-token")
  )
  if (!authCookie?.value) return null

  try {
    // The cookie may be a base64-encoded JSON array: ["access_token", "refresh_token"]
    // or a raw JSON string. Try to decode the JWT payload to get the user ID.
    let accessToken: string | null = null

    // Try parsing as JSON array first (chunked cookies are joined by Supabase client)
    const raw = decodeURIComponent(authCookie.value)
    if (raw.startsWith("base64-")) {
      const decoded = Buffer.from(raw.replace("base64-", ""), "base64").toString("utf-8")
      const parsed = JSON.parse(decoded)
      accessToken = Array.isArray(parsed) ? parsed[0] : parsed?.access_token
    } else {
      try {
        const parsed = JSON.parse(raw)
        accessToken = Array.isArray(parsed) ? parsed[0] : parsed?.access_token
      } catch {
        // Might be a raw JWT
        accessToken = raw
      }
    }

    if (!accessToken || typeof accessToken !== "string") return null

    // Decode JWT payload (no verification needed — we just need the sub claim for rate limiting key)
    const parts = accessToken.split(".")
    if (parts.length !== 3) return null
    const payload = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf-8"))
    return payload.sub || null
  } catch {
    return null
  }
}

export async function middleware(request: NextRequest) {
  // Apply rate limiting only to /api/ routes (excluding auth-related Supabase calls)
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const userId = getUserIdFromRequest(request)

    if (userId && authenticatedRatelimit) {
      // Authenticated user: rate limit by user ID (300 req/min)
      const { success } = await authenticatedRatelimit.limit(userId)
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please slow down." },
          { status: 429 }
        )
      }
    } else if (anonymousRatelimit) {
      // Anonymous user: rate limit by IP (100 req/min)
      const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "127.0.0.1"
      const { success } = await anonymousRatelimit.limit(ip)
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please slow down." },
          { status: 429 }
        )
      }
    }

    return NextResponse.next()
  }

  // Skip rate limiting for auth pages (signup/login) — Supabase handles its own rate limits
  if (request.nextUrl.pathname.startsWith("/auth/")) {
    return NextResponse.next()
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap\\.xml|sitemap/|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
