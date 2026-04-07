import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { checkCsrf } from "@/lib/csrf"

export async function POST(request: NextRequest) {
  try {
    const csrfError = checkCsrf(request)
    if (csrfError) return csrfError

    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      // If Supabase is not configured, still return success (don't block the UX)
      console.log("Newsletter signup (no DB):", email)
      return NextResponse.json({ success: true })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Upsert to avoid duplicate errors — if email exists, just update timestamp
    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email: email.toLowerCase().trim(),
        subscribed_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    )

    if (error) {
      console.error("Newsletter signup failed:", error)
      // Still return success to user — don't expose DB errors
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
