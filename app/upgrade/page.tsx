import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { getStripe } from "@/lib/stripe"

export const runtime = "nodejs"

export default async function UpgradePage({
  searchParams,
}: {
  searchParams: Promise<{ billing?: string; plan?: string }>
}) {
  const { billing, plan } = await searchParams
  const isAnnual = billing === "annual"
  const isEnterprise = plan === "enterprise"
  const isBusiness = plan === "business"

  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/login")
  }

  let priceId: string | undefined
  if (isEnterprise) {
    priceId = isAnnual
      ? process.env.STRIPE_PRICE_ID_ENTERPRISE_ANNUAL
      : process.env.STRIPE_PRICE_ID_ENTERPRISE
    if (!priceId) {
      redirect("/pricing?error=enterprise_price_not_configured")
    }
  } else if (isBusiness) {
    priceId = isAnnual
      ? process.env.STRIPE_PRICE_ID_BUSINESS_ANNUAL
      : process.env.STRIPE_PRICE_ID_BUSINESS
    if (!priceId) {
      redirect("/pricing?error=business_price_not_configured")
    }
  } else if (isAnnual) {
    priceId = process.env.STRIPE_PRICE_ID_ANNUAL
    if (!priceId) {
      redirect("/pricing?error=annual_price_not_configured")
    }
  } else {
    priceId = process.env.STRIPE_PRICE_ID
    if (!priceId) {
      redirect("/pricing?error=stripe_price_not_configured")
    }
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    redirect("/pricing?error=stripe_not_configured")
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdf.it.com"
  const stripe = getStripe()

  // Check if user already has an active subscription
  const { data: profile } = await supabase
    .from("users")
    .select("stripe_subscription_id, stripe_customer_id")
    .eq("id", user.id)
    .single()

  // If user has an existing subscription, update it to the new price
  if (profile?.stripe_subscription_id) {
    try {
      const subscription = await stripe.subscriptions.retrieve(
        profile.stripe_subscription_id
      )

      if (subscription.status === "active" || subscription.status === "trialing") {
        // Update the existing subscription to the new price — effective immediately
        await stripe.subscriptions.update(profile.stripe_subscription_id, {
          items: [
            {
              id: subscription.items.data[0].id,
              price: priceId,
            },
          ],
          proration_behavior: "always_invoice",
          payment_behavior: "error_if_incomplete",
        })

        // Determine the new plan from the price ID
        const enterprisePriceIds = [
          process.env.STRIPE_PRICE_ID_ENTERPRISE,
          process.env.STRIPE_PRICE_ID_ENTERPRISE_ANNUAL,
        ].filter(Boolean)
        const businessPriceIds = [
          process.env.STRIPE_PRICE_ID_BUSINESS,
          process.env.STRIPE_PRICE_ID_BUSINESS_ANNUAL,
        ].filter(Boolean)

        let newPlan = "pro"
        if (enterprisePriceIds.includes(priceId!)) {
          newPlan = "enterprise"
        } else if (businessPriceIds.includes(priceId!)) {
          newPlan = "business"
        }

        // Update Supabase directly (don't rely solely on webhook)
        await supabase.from("users").update({
          plan: newPlan,
          updated_at: new Date().toISOString(),
        }).eq("id", user.id)

        // Redirect to dashboard with success
        redirect(`${siteUrl}/dashboard?success=true&upgraded=true`)
      }
    } catch (e) {
      console.error("Stripe subscription update error:", e)
      // Fall through to create new checkout if update fails
    }
  }

  // No existing subscription — create a new checkout session
  let checkoutUrl: string | null = null
  try {
    const sessionParams: Record<string, unknown> = {
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/dashboard?success=true`,
      cancel_url: `${siteUrl}/pricing?canceled=true`,
      client_reference_id: user.id,
      metadata: {
        supabase_user_id: user.id,
      },
      subscription_data: {
        trial_period_days: 30,
      },
    }

    // If user already has a Stripe customer ID, use it (prevents duplicate customers)
    if (profile?.stripe_customer_id) {
      sessionParams.customer = profile.stripe_customer_id
    } else {
      sessionParams.customer_email = user.email || undefined
    }

    const session = await stripe.checkout.sessions.create(
      sessionParams as Parameters<typeof stripe.checkout.sessions.create>[0]
    )
    checkoutUrl = session.url
  } catch (e) {
    console.error("Stripe checkout error:", e)
  }

  if (!checkoutUrl) {
    redirect("/pricing?error=checkout_session_failed")
  }

  redirect(checkoutUrl)
}
