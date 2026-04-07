export const runtime = "nodejs"

import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
  })
}

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  const stripeClient = getStripe()

  let event: Stripe.Event
  try {
    event = stripeClient.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Webhook signature verification failed:", message)
    return NextResponse.json(
      { error: `Webhook Error: ${message}` },
      { status: 400 }
    )
  }

  const supabaseAdmin = getSupabaseAdmin()

  if (event.type === "checkout.session.completed") {
    const session = event.data.object

    const userId = session.metadata?.supabase_user_id || session.client_reference_id
    const customerId =
      typeof session.customer === "string" ? session.customer : session.customer?.toString()
    const subscriptionId =
      typeof session.subscription === "string"
        ? session.subscription
        : session.subscription?.toString()

    const email = session.customer_details?.email || session.customer_email

    // Determine plan based on Stripe price ID
    let plan = "pro"
    if (subscriptionId) {
      try {
        const subscription = await stripeClient.subscriptions.retrieve(subscriptionId)
        const priceId = subscription.items.data[0]?.price?.id
        const enterprisePriceIds = [
          process.env.STRIPE_PRICE_ID_ENTERPRISE,
          process.env.STRIPE_PRICE_ID_ENTERPRISE_ANNUAL,
        ].filter(Boolean)
        const businessPriceIds = [
          process.env.STRIPE_PRICE_ID_BUSINESS,
          process.env.STRIPE_PRICE_ID_BUSINESS_ANNUAL,
        ].filter(Boolean)
        const proPriceIds = [
          process.env.STRIPE_PRICE_ID,
          process.env.STRIPE_PRICE_ID_ANNUAL,
        ].filter(Boolean)
        if (priceId && enterprisePriceIds.includes(priceId)) {
          plan = "enterprise"
        } else if (priceId && businessPriceIds.includes(priceId)) {
          plan = "business"
        } else if (priceId && proPriceIds.includes(priceId)) {
          plan = "pro"
        }
      } catch (e) {
        console.error("Failed to retrieve subscription for plan detection:", e)
      }
    }

    if (userId && email) {
      const { error } = await supabaseAdmin.from("users").update({
        plan,
        stripe_customer_id: customerId || null,
        stripe_subscription_id: subscriptionId || null,
        cancel_at_period_end: false,
        current_period_end: null,
        updated_at: new Date().toISOString(),
      }).eq("id", userId)

      if (error) {
        console.error("Failed to update user plan:", error)
        // Return 500 so Stripe retries — user paid but plan didn't update
        return NextResponse.json(
          { error: "Database update failed" },
          { status: 500 }
        )
      }

      // Send welcome email
      const resendKey = process.env.RESEND_API_KEY
      if (resendKey && email) {
        try {
          const resend = new Resend(resendKey)
          const planLabel = plan === "enterprise" ? "Enterprise" : plan === "business" ? "Business" : "Pro"
          const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdf.it.com"

          await resend.emails.send({
            from: "PDF.it <noreply@pdf.it.com>",
            to: email,
            subject: `Welcome to PDF.it ${planLabel} — your 30-day free trial has started!`,
            html: `
              <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px;">
                <div style="text-align: center; margin-bottom: 32px;">
                  <span style="font-weight: 800; color: #0E0F1E; font-size: 28px; letter-spacing: -0.5px;">PDF<span style="color: #14D8C4; font-weight: 400;">.it</span></span>
                </div>
                <h1 style="font-size: 22px; font-weight: 700; color: #0E0F1E; margin-bottom: 16px; text-align: center;">
                  You're in! Welcome to ${planLabel}.
                </h1>
                <p style="font-size: 15px; color: #475569; line-height: 1.6; margin-bottom: 24px; text-align: center;">
                  Your 30-day free trial is now active. You have full access to all ${planLabel} features — no charges until your trial ends.
                </p>
                <div style="background: #F0FDFA; border: 1px solid #14D8C4; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                  <p style="font-size: 14px; color: #0E0F1E; font-weight: 600; margin: 0 0 8px 0;">What's included:</p>
                  <ul style="font-size: 14px; color: #475569; line-height: 1.8; margin: 0; padding-left: 20px;">
                    ${plan === "pro" ? `
                    <li>Unlimited conversions</li>
                    <li>Files up to 200MB</li>
                    <li>All PDF tools (OCR, QR, PDF to Word/Excel/PPT)</li>
                    <li>Batch processing</li>
                    <li>Priority speed</li>
                    ` : plan === "business" ? `
                    <li>Everything in Pro</li>
                    <li>Files up to 1GB</li>
                    <li>Table extraction (200 pages/month)</li>
                    <li>PDF comparison, eSign, redaction</li>
                    <li>Workflow automation</li>
                    ` : `
                    <li>Everything in Business</li>
                    <li>Table extraction (2,000 pages/month)</li>
                    <li>Dedicated support</li>
                    <li>Priority processing queue</li>
                    <li>Early access to new features</li>
                    `}
                  </ul>
                </div>
                <div style="text-align: center; margin-bottom: 32px;">
                  <a href="${siteUrl}/dashboard" style="display: inline-block; background: #14D8C4; color: #0E0F1E; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 10px; text-decoration: none;">
                    Go to Your Dashboard
                  </a>
                </div>
                <p style="font-size: 13px; color: #94A3B8; line-height: 1.6; text-align: center;">
                  You won't be charged during your trial. Cancel anytime from your dashboard — no questions asked.
                </p>
                <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />
                <p style="font-size: 12px; color: #94A3B8; text-align: center;">
                  PDF.it &mdash; Fix any document problem instantly.<br />
                  <a href="${siteUrl}" style="color: #14D8C4; text-decoration: none;">pdf.it.com</a>
                </p>
              </div>
            `,
          })
        } catch (emailErr) {
          console.error("Failed to send welcome email:", emailErr)
        }
      }
    }
  }

  if (event.type === "customer.subscription.updated") {
    const subscription = event.data.object
    const customerId =
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer?.toString()

    if (customerId) {
      const { data: users } = await supabaseAdmin
        .from("users")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .limit(1)

      if (users && users.length > 0) {
        const rawPeriodEnd =
          subscription.current_period_end ??
          (subscription as any).items?.data?.[0]?.current_period_end ??
          null
        const currentPeriodEnd = rawPeriodEnd
          ? new Date(rawPeriodEnd * 1000).toISOString()
          : null

        // Detect plan from price ID
        let plan = "pro"
        const priceId = subscription.items?.data?.[0]?.price?.id
        const enterprisePriceIds = [
          process.env.STRIPE_PRICE_ID_ENTERPRISE,
          process.env.STRIPE_PRICE_ID_ENTERPRISE_ANNUAL,
        ].filter(Boolean)
        const businessPriceIds = [
          process.env.STRIPE_PRICE_ID_BUSINESS,
          process.env.STRIPE_PRICE_ID_BUSINESS_ANNUAL,
        ].filter(Boolean)
        const proPriceIds = [
          process.env.STRIPE_PRICE_ID,
          process.env.STRIPE_PRICE_ID_ANNUAL,
        ].filter(Boolean)
        if (priceId && enterprisePriceIds.includes(priceId)) {
          plan = "enterprise"
        } else if (priceId && businessPriceIds.includes(priceId)) {
          plan = "business"
        } else if (priceId && proPriceIds.includes(priceId)) {
          plan = "pro"
        }

        const { error } = await supabaseAdmin.from("users").update({
          plan,
          stripe_customer_id: customerId,
          stripe_subscription_id: subscription.id,
          cancel_at_period_end: subscription.cancel_at_period_end ?? false,
          current_period_end: currentPeriodEnd,
          updated_at: new Date().toISOString(),
        }).eq("id", users[0].id)

        if (error) {
          console.error("Failed to update subscription:", error)
          return NextResponse.json(
            { error: "Database update failed" },
            { status: 500 }
          )
        }
      }
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object
    const customerId =
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer?.toString()

    if (customerId) {
      const { data: users } = await supabaseAdmin
        .from("users")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .limit(1)

      if (users && users.length > 0) {
        await supabaseAdmin.from("users").update({
          plan: "free",
          stripe_subscription_id: null,
          cancel_at_period_end: false,
          current_period_end: null,
          updated_at: new Date().toISOString(),
        }).eq("id", users[0].id)
      }
    }
  }

  return NextResponse.json({ received: true })
}
