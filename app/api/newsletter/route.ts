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

    const cleanEmail = email.toLowerCase().trim()

    // Upsert to avoid duplicate errors — if email exists, just update timestamp
    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email: cleanEmail,
        subscribed_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    )

    if (error) {
      console.error("Newsletter signup failed:", error)
      // Still return success to user — don't expose DB errors
      return NextResponse.json({ success: true })
    }

    // Send welcome email immediately via Resend (non-blocking — don't fail the signup if email fails)
    try {
      const resendKey = process.env.RESEND_API_KEY
      if (resendKey) {
        const { Resend } = await import("resend")
        const { DRIP_EMAILS } = await import("@/lib/newsletter-emails")
        const welcome = DRIP_EMAILS.find((e) => e.slug === "welcome")
        if (welcome) {
          const resend = new Resend(resendKey)
          await resend.emails.send({
            from: "Paula from PDF.it <noreply@pdf.it.com>",
            to: cleanEmail,
            subject: welcome.subject,
            html: welcome.html(),
          })
          // Mark as sent so the drip cron doesn't re-send
          await supabase.from("newsletter_emails_sent").upsert(
            { subscriber_email: cleanEmail, email_slug: "welcome" },
            { onConflict: "subscriber_email,email_slug" }
          )
        }
      }
    } catch (emailErr) {
      console.error("Welcome email failed (non-blocking):", emailErr)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
