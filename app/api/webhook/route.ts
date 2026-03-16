export const runtime = "nodejs"

import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

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
