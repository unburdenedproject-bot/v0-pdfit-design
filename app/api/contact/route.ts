import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { checkCsrf } from "@/lib/csrf"

// Rate limit: 3 contact submissions per hour per IP
const ratelimit =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(3, "1 h"),
        prefix: "contact",
      })
    : null

export async function POST(request: NextRequest) {
  try {
    // CSRF protection
    const csrfError = checkCsrf(request)
    if (csrfError) return csrfError

    // Rate limiting
    if (ratelimit) {
      const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown"
      const { success } = await ratelimit.limit(ip)
      if (!success) {
        return NextResponse.json(
          { error: "Too many submissions. Please try again later." },
          { status: 429 }
        )
      }
    }

    const body = await request.json()
    const name = (body.name || "").trim()
    const email = (body.email || "").trim()
    const subject = (body.subject || "").trim()
    const message = (body.message || "").trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceKey) {
      console.error("Supabase not configured for contact form")
      return NextResponse.json(
        { error: "Contact form is temporarily unavailable. Please email contact@pdf.it.com directly." },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, serviceKey)

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject,
      message,
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error("Failed to save contact message:", error)
      return NextResponse.json(
        { error: "Failed to send message. Please email contact@pdf.it.com directly." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    )
  }
}
