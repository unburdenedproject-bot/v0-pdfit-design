import { updateSession } from "@/lib/supabase/middleware"
import { type NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis/cloudflare"

const kvUrl = process.env.KV_REST_API_URL
const kvToken = process.env.KV_REST_API_TOKEN

const ratelimit =
  kvUrl && kvToken
    ? new Ratelimit({
        redis: new Redis({
          url: kvUrl,
          token: kvToken,
        }),
        limiter: Ratelimit.slidingWindow(100, "1 m"),
        analytics: true,
      })
    : null

export async function middleware(request: NextRequest) {
  // Apply rate limiting only to /api/ routes
  if (request.nextUrl.pathname.startsWith("/api/") && ratelimit) {
    const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "127.0.0.1"
    const { success } = await ratelimit.limit(ip)

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please slow down." },
        { status: 429 }
      )
    }

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
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
