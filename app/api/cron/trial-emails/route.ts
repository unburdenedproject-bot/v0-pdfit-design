export const runtime = "nodejs"
export const maxDuration = 60

import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { Resend } from "resend"

/**
 * Vercel Cron Job: runs daily at 9am UTC.
 * Sends trial drip emails at Day 7, Day 25, and Day 30.
 *
 * Configured in vercel.json:
 *   { "crons": [{ "path": "/api/cron/trial-emails", "schedule": "0 9 * * *" }] }
 */

const CRON_SECRET = process.env.CRON_SECRET

export async function GET(request: NextRequest) {
  // Verify the request is from Vercel Cron (not a random visitor)
  const authHeader = request.headers.get("authorization")
  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY
  const resendKey = process.env.RESEND_API_KEY
  if (!stripeKey || !resendKey) {
    return NextResponse.json(
      { error: "Missing STRIPE_SECRET_KEY or RESEND_API_KEY" },
      { status: 500 }
    )
  }

  const stripe = new Stripe(stripeKey, { typescript: true })
  const resend = new Resend(resendKey)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdf.it.com"

  const now = Math.floor(Date.now() / 1000)
  const results = { day7: 0, day25: 0, day30: 0, errors: 0 }

  try {
    // Fetch all trialing subscriptions
    const subscriptions = await stripe.subscriptions.list({
      status: "trialing",
      limit: 100,
      expand: ["data.customer"],
    })

    for (const sub of subscriptions.data) {
      const trialStart = sub.trial_start
      if (!trialStart) continue

      const daysSinceStart = Math.floor((now - trialStart) / 86400)
      const customer = sub.customer as Stripe.Customer
      const email = customer.email
      if (!email) continue

      // Determine plan label
      const priceId = sub.items.data[0]?.price?.id
      let planLabel = "Pro"
      const enterpriseIds = [
        process.env.STRIPE_PRICE_ID_ENTERPRISE,
        process.env.STRIPE_PRICE_ID_ENTERPRISE_ANNUAL,
      ].filter(Boolean)
      const businessIds = [
        process.env.STRIPE_PRICE_ID_BUSINESS,
        process.env.STRIPE_PRICE_ID_BUSINESS_ANNUAL,
      ].filter(Boolean)
      if (priceId && enterpriseIds.includes(priceId)) planLabel = "Enterprise"
      else if (priceId && businessIds.includes(priceId)) planLabel = "Business"

      const name = customer.name?.split(" ")[0] || ""

      try {
        if (daysSinceStart === 7) {
          await sendDay7Email(resend, email, name, planLabel, siteUrl)
          results.day7++
        } else if (daysSinceStart === 25) {
          await sendDay25Email(resend, email, name, planLabel, siteUrl)
          results.day25++
        } else if (daysSinceStart === 30) {
          await sendDay30Email(resend, email, name, planLabel, siteUrl)
          results.day30++
        }
      } catch (emailErr) {
        console.error(`Failed to send drip email to ${email}:`, emailErr)
        results.errors++
      }
    }
  } catch (err) {
    console.error("Trial email cron failed:", err)
    return NextResponse.json({ error: "Cron failed" }, { status: 500 })
  }

  return NextResponse.json({ ok: true, sent: results })
}

// --- Email Templates ---

const footer = (siteUrl: string) => `
  <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />
  <p style="font-size: 12px; color: #94A3B8; text-align: center;">
    PDF.it &mdash; Fix any document problem instantly.<br />
    <a href="${siteUrl}" style="color: #14D8C4; text-decoration: none;">pdf.it.com</a>
  </p>
`

const wrap = (content: string) => `
  <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px;">
    <div style="text-align: center; margin-bottom: 32px;">
      <span style="font-weight: 800; color: #0E0F1E; font-size: 28px; letter-spacing: -0.5px;">PDF<span style="color: #14D8C4; font-weight: 400;">.it</span></span>
    </div>
    ${content}
  </div>
`

async function sendDay7Email(
  resend: InstanceType<typeof Resend>,
  email: string,
  name: string,
  plan: string,
  siteUrl: string
) {
  const greeting = name ? `Hi ${name},` : "Hi there,"
  await resend.emails.send({
    from: "PDF.it <noreply@pdf.it.com>",
    to: email,
    subject: `One week in — here's what you can do with ${plan}`,
    html: wrap(`
      <h1 style="font-size: 22px; font-weight: 700; color: #0E0F1E; margin-bottom: 16px;">
        ${greeting} you're one week in!
      </h1>
      <p style="font-size: 15px; color: #475569; line-height: 1.6; margin-bottom: 24px;">
        Your ${plan} trial is going strong. Here are some features you might not have tried yet:
      </p>
      <div style="background: #F0FDFA; border: 1px solid #14D8C4; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <ul style="font-size: 14px; color: #475569; line-height: 2; margin: 0; padding-left: 20px;">
          <li><strong>Batch processing</strong> — upload multiple files at once</li>
          <li><strong>OCR Scanner</strong> — make scanned PDFs searchable</li>
          <li><strong>PDF to Word/Excel</strong> — perfect formatting, every time</li>
          <li><strong>Compress for email</strong> — shrink PDFs to any target size</li>
        </ul>
      </div>
      <div style="text-align: center; margin-bottom: 32px;">
        <a href="${siteUrl}/tools" style="display: inline-block; background: #14D8C4; color: #0E0F1E; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 10px; text-decoration: none;">
          Explore All Tools
        </a>
      </div>
      <p style="font-size: 13px; color: #94A3B8; text-align: center;">
        23 days left in your free trial. No charges until it ends.
      </p>
      ${footer(siteUrl)}
    `),
  })
}

async function sendDay25Email(
  resend: InstanceType<typeof Resend>,
  email: string,
  name: string,
  plan: string,
  siteUrl: string
) {
  const greeting = name ? `Hi ${name},` : "Hi there,"
  await resend.emails.send({
    from: "PDF.it <noreply@pdf.it.com>",
    to: email,
    subject: `Your ${plan} trial ends in 5 days`,
    html: wrap(`
      <h1 style="font-size: 22px; font-weight: 700; color: #0E0F1E; margin-bottom: 16px;">
        ${greeting} heads up — 5 days left
      </h1>
      <p style="font-size: 15px; color: #475569; line-height: 1.6; margin-bottom: 24px;">
        Your ${plan} free trial ends in 5 days. After that, your subscription will begin automatically at your chosen plan rate.
      </p>
      <div style="background: #FFFBEB; border: 1px solid #F59E0B; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <p style="font-size: 14px; color: #92400E; margin: 0;">
          <strong>Want to keep your ${plan} features?</strong> No action needed — your plan continues seamlessly.
        </p>
        <p style="font-size: 14px; color: #92400E; margin: 8px 0 0 0;">
          <strong>Need to cancel?</strong> You can do it anytime from your dashboard. No questions asked.
        </p>
      </div>
      <div style="text-align: center; margin-bottom: 32px;">
        <a href="${siteUrl}/dashboard" style="display: inline-block; background: #14D8C4; color: #0E0F1E; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 10px; text-decoration: none;">
          Go to Dashboard
        </a>
      </div>
      ${footer(siteUrl)}
    `),
  })
}

async function sendDay30Email(
  resend: InstanceType<typeof Resend>,
  email: string,
  name: string,
  plan: string,
  siteUrl: string
) {
  const greeting = name ? `Hi ${name},` : "Hi there,"
  await resend.emails.send({
    from: "PDF.it <noreply@pdf.it.com>",
    to: email,
    subject: `Your ${plan} trial ends today — here's what happens next`,
    html: wrap(`
      <h1 style="font-size: 22px; font-weight: 700; color: #0E0F1E; margin-bottom: 16px;">
        ${greeting} your trial ends today
      </h1>
      <p style="font-size: 15px; color: #475569; line-height: 1.6; margin-bottom: 24px;">
        Your 30-day free trial of ${plan} ends today. Starting tomorrow, your subscription will be active and your payment method will be charged.
      </p>
      <div style="background: #F0FDFA; border: 1px solid #14D8C4; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <p style="font-size: 14px; color: #0E0F1E; margin: 0;">
          <strong>Your ${plan} features continue uninterrupted.</strong> Everything you've been using stays available — no setup needed.
        </p>
      </div>
      <div style="text-align: center; margin-bottom: 16px;">
        <a href="${siteUrl}/dashboard" style="display: inline-block; background: #14D8C4; color: #0E0F1E; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 10px; text-decoration: none;">
          Go to Dashboard
        </a>
      </div>
      <p style="font-size: 13px; color: #94A3B8; text-align: center;">
        Questions? Reply to this email or contact us at <a href="mailto:contact@pdf.it.com" style="color: #14D8C4;">contact@pdf.it.com</a>
      </p>
      ${footer(siteUrl)}
    `),
  })
}
