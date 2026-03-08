import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { getStripe } from "@/lib/stripe"

export const runtime = "nodejs"

export default async function UpgradePage({
  searchParams,
}: {
  searchParams: Promise<{ billing?: string }>
}) {
  const { billing } = await searchParams
  const isAnnual = billing === "annual"

  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/login")
  }

  let priceId: string | undefined
  if (isAnnual) {
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdf.it.com"

  const session = await getStripe().checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/dashboard?success=true`,
    cancel_url: `${siteUrl}/pricing?canceled=true`,
    client_reference_id: user.id,
    customer_email: user.email || undefined,
    metadata: {
      supabase_user_id: user.id,
    },
  })

  if (!session.url) {
    redirect("/pricing?error=checkout_session_failed")
  }

  redirect(session.url)
}
