import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendKey = process.env.RESEND_API_KEY

    if (!supabaseUrl || !serviceKey || !resendKey) {
      console.error("Missing env vars for forgot-password:", {
        supabaseUrl: !!supabaseUrl,
        serviceKey: !!serviceKey,
        resendKey: !!resendKey,
      })
      return NextResponse.json(
        { error: "Password reset is temporarily unavailable. Please try again later." },
        { status: 500 }
      )
    }

    // Use Supabase admin client to generate a password reset link
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdf.it.com"

    const { data, error } = await supabase.auth.admin.generateLink({
      type: "recovery",
      email,
      options: {
        redirectTo: `${siteUrl}/reset-password`,
      },
    })

    if (error) {
      console.error("Supabase generateLink error:", error.message)
      // Don't reveal whether the email exists or not
      return NextResponse.json({ success: true })
    }

    // Extract the hashed_token and build a link through our /auth/confirm page
    // which exchanges the token for a session, then redirects to /reset-password
    const hashedToken = data?.properties?.hashed_token
    if (!hashedToken) {
      console.error("No hashed_token returned from Supabase generateLink")
      return NextResponse.json({ success: true })
    }

    const resetLink = `${siteUrl}/auth/confirm?token_hash=${hashedToken}&type=recovery&redirect_to=/reset-password`

    // Send the email via Resend
    const resend = new Resend(resendKey)

    await resend.emails.send({
      from: "PDF.it <noreply@pdf.it.com>",
      to: email,
      subject: "Reset your PDF.it password",
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="font-weight: 800; color: #0E0F1E; font-size: 28px; letter-spacing: -0.5px;">PDF<span style="color: #14D8C4; font-weight: 400;">.it</span></span>
          </div>
          <h1 style="font-size: 22px; font-weight: 700; color: #0E0F1E; margin-bottom: 16px; text-align: center;">
            Reset your password
          </h1>
          <p style="font-size: 15px; color: #475569; line-height: 1.6; margin-bottom: 32px; text-align: center;">
            We received a request to reset the password for your PDF.it account. Click the button below to choose a new password.
          </p>
          <div style="text-align: center; margin-bottom: 32px;">
            <a href="${resetLink}" style="display: inline-block; background: #14D8C4; color: #0E0F1E; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 10px; text-decoration: none;">
              Reset Password
            </a>
          </div>
          <p style="font-size: 13px; color: #94A3B8; line-height: 1.6; text-align: center;">
            If you didn't request this, you can safely ignore this email. This link expires in 24 hours.
          </p>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />
          <p style="font-size: 12px; color: #94A3B8; text-align: center;">
            PDF.it &mdash; Fix any document problem instantly.<br />
            <a href="${siteUrl}" style="color: #14D8C4; text-decoration: none;">pdf.it.com</a>
          </p>
        </div>
      `,
    })

    // Always return success to avoid leaking whether the email exists
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("forgot-password route error:", err)
    return NextResponse.json({ success: true })
  }
}
