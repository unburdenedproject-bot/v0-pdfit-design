export const runtime = "nodejs"
export const maxDuration = 60

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

/**
 * Detect plan name from a Stripe price ID.
 * Mirrors the same logic used in /api/webhook.
 */
function detectPlanFromPriceId(priceId: string | undefined): string {
  if (!priceId) return "pro"

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

  if (enterprisePriceIds.includes(priceId)) return "enterprise"
  if (businessPriceIds.includes(priceId)) return "business"
  if (proPriceIds.includes(priceId)) return "pro"

  // Unknown price — default to pro so paid users are never downgraded to free
  return "pro"
}

interface MismatchRecord {
  email: string
  stripe_customer_id: string
  stripe_plan: string
  supabase_plan: string
  fixed: boolean
}

export async function GET(request: NextRequest) {
  // --- Auth ---
  const CRON_SECRET = process.env.CRON_SECRET
  const authHeader = request.headers.get("authorization")

  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const stripe = getStripe()
  const supabase = getSupabaseAdmin()

  // --- Fetch all active + trialing subscriptions from Stripe ---
  const [activeList, trialingList] = await Promise.all([
    stripe.subscriptions.list({
      status: "active",
      limit: 100,
      expand: ["data.customer"],
    }),
    stripe.subscriptions.list({
      status: "trialing",
      limit: 100,
      expand: ["data.customer"],
    }),
  ])

  const allSubscriptions = [...activeList.data, ...trialingList.data]

  let checked = 0
  const mismatches: MismatchRecord[] = []

  for (const sub of allSubscriptions) {
    const customer = sub.customer as Stripe.Customer
    if (!customer || customer.deleted) continue

    const stripeCustomerId = customer.id
    const customerEmail = customer.email || "unknown"
    const priceId = sub.items.data[0]?.price?.id
    const stripePlan = detectPlanFromPriceId(priceId)

    // Look up user in Supabase by stripe_customer_id
    const { data: users, error } = await supabase
      .from("users")
      .select("id, email, plan, stripe_customer_id")
      .eq("stripe_customer_id", stripeCustomerId)
      .limit(1)

    if (error) {
      console.error(`Reconcile: Supabase lookup failed for ${stripeCustomerId}:`, error)
      continue
    }

    if (!users || users.length === 0) {
      // No user found with this stripe_customer_id — can't auto-fix without a user row
      console.warn(`Reconcile: No Supabase user for stripe_customer_id ${stripeCustomerId} (${customerEmail})`)
      continue
    }

    const user = users[0]
    checked++

    // Compare plans — only flag if Supabase is "free" but Stripe says they're paying
    if (user.plan === stripePlan) continue

    const mismatch: MismatchRecord = {
      email: user.email || customerEmail,
      stripe_customer_id: stripeCustomerId,
      stripe_plan: stripePlan,
      supabase_plan: user.plan,
      fixed: false,
    }

    // Auto-fix: update Supabase to match Stripe (Stripe is source of truth)
    const rawPeriodEnd = sub.current_period_end
    const currentPeriodEnd = rawPeriodEnd
      ? new Date(rawPeriodEnd * 1000).toISOString()
      : null

    const { error: updateError } = await supabase.from("users").update({
      plan: stripePlan,
      stripe_subscription_id: sub.id,
      cancel_at_period_end: sub.cancel_at_period_end ?? false,
      current_period_end: currentPeriodEnd,
      updated_at: new Date().toISOString(),
    }).eq("id", user.id)

    if (updateError) {
      console.error(`Reconcile: Failed to fix user ${user.id}:`, updateError)
    } else {
      mismatch.fixed = true
    }

    mismatches.push(mismatch)
  }

  // --- Sweep: downgrade paid users whose Stripe subscription is no longer active/trialing ---
  const activeCustomerIds = new Set(
    allSubscriptions.map((sub) => {
      const customer = sub.customer as Stripe.Customer
      return customer?.id
    }).filter(Boolean)
  )

  const { data: paidUsers } = await supabase
    .from("users")
    .select("id, email, plan, stripe_customer_id")
    .neq("plan", "free")
    .not("stripe_customer_id", "is", null)

  const downgrades: { email: string; old_plan: string; stripe_customer_id: string }[] = []

  if (paidUsers) {
    for (const pu of paidUsers) {
      if (activeCustomerIds.has(pu.stripe_customer_id)) continue

      // This user has a paid plan but no active/trialing subscription in Stripe — downgrade
      const { error: dgError } = await supabase.from("users").update({
        plan: "free",
        cancel_at_period_end: false,
        current_period_end: null,
        updated_at: new Date().toISOString(),
      }).eq("id", pu.id)

      if (!dgError) {
        downgrades.push({
          email: pu.email || "unknown",
          old_plan: pu.plan,
          stripe_customer_id: pu.stripe_customer_id,
        })
      } else {
        console.error(`Reconcile: Failed to downgrade user ${pu.id}:`, dgError)
      }
    }
  }

  // --- Send email report if there were any mismatches or downgrades ---
  if (mismatches.length > 0 || downgrades.length > 0) {
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        const resend = new Resend(resendKey)

        const rows = mismatches
          .map(
            (m) =>
              `<tr>
                <td style="padding:8px;border:1px solid #E2E8F0;">${m.email}</td>
                <td style="padding:8px;border:1px solid #E2E8F0;">${m.supabase_plan}</td>
                <td style="padding:8px;border:1px solid #E2E8F0;">${m.stripe_plan}</td>
                <td style="padding:8px;border:1px solid #E2E8F0;">${m.fixed ? "Yes" : "FAILED"}</td>
              </tr>`
          )
          .join("")

        await resend.emails.send({
          from: "PDF.it <noreply@pdf.it.com>",
          to: "paula.vargas3@gmail.com",
          subject: `PDF.it Reconciliation: ${mismatches.length + downgrades.length} issue${(mismatches.length + downgrades.length) > 1 ? "s" : ""} found`,
          html: `
            <div style="font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;">
              <h2 style="color:#0E0F1E;">Stripe–Supabase Reconciliation Report</h2>
              <p style="color:#475569;">Ran at ${new Date().toISOString()}. Checked ${checked} active subscriptions.${mismatches.length > 0 ? ` Found ${mismatches.length} plan mismatch${mismatches.length > 1 ? "es" : ""}.` : ""}${downgrades.length > 0 ? ` Downgraded ${downgrades.length} user${downgrades.length > 1 ? "s" : ""} with expired subscriptions.` : ""}</p>
              ${mismatches.length > 0 ? `
              <h3 style="color:#0E0F1E;margin-top:16px;">Plan Mismatches</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <thead>
                  <tr style="background:#F5F7FB;">
                    <th style="padding:8px;border:1px solid #E2E8F0;text-align:left;">Email</th>
                    <th style="padding:8px;border:1px solid #E2E8F0;text-align:left;">Was (Supabase)</th>
                    <th style="padding:8px;border:1px solid #E2E8F0;text-align:left;">Should Be (Stripe)</th>
                    <th style="padding:8px;border:1px solid #E2E8F0;text-align:left;">Fixed?</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>` : ""}
              ${downgrades.length > 0 ? `
              <h3 style="color:#0E0F1E;margin-top:16px;">Expired Subscription Downgrades</h3>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <thead>
                  <tr style="background:#F5F7FB;">
                    <th style="padding:8px;border:1px solid #E2E8F0;text-align:left;">Email</th>
                    <th style="padding:8px;border:1px solid #E2E8F0;text-align:left;">Was</th>
                    <th style="padding:8px;border:1px solid #E2E8F0;text-align:left;">Now</th>
                  </tr>
                </thead>
                <tbody>${downgrades.map((d) => `<tr>
                  <td style="padding:8px;border:1px solid #E2E8F0;">${d.email}</td>
                  <td style="padding:8px;border:1px solid #E2E8F0;">${d.old_plan}</td>
                  <td style="padding:8px;border:1px solid #E2E8F0;">free</td>
                </tr>`).join("")}</tbody>
              </table>` : ""}
              <p style="color:#94A3B8;font-size:12px;margin-top:24px;">This is an automated report from the weekly Stripe reconciliation cron.</p>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error("Reconcile: Failed to send report email:", emailErr)
      }
    }
  }

  return NextResponse.json({
    checked,
    mismatches: mismatches.length,
    fixed: mismatches.filter((m) => m.fixed).length,
    downgrades: downgrades.length,
    details: { mismatches, downgrades },
  })
}
