import { NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"

export async function POST() {
  try {
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: "You must be logged in to manage billing." },
        { status: 401 },
      )
    }

    const { data: profile } = await supabase
      .from("users")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single()

    const customerId = profile?.stripe_customer_id
    if (!customerId) {
      return NextResponse.json(
        {
          error:
            "Your billing account isn't linked to the self-service portal yet. Please email paula.vargas3@gmail.com and we'll sort it out in a few minutes.",
        },
        { status: 400 },
      )
    }

    try {
      const session = await getStripe().billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://pdf.it.com"}/dashboard`,
      })
      return NextResponse.json({ url: session.url })
    } catch (stripeErr: unknown) {
      // Surface Stripe-specific messages so Paula can see the real cause in logs
      // while still showing the user something actionable.
      const message =
        stripeErr instanceof Error ? stripeErr.message : String(stripeErr)
      console.error("Stripe billing portal error:", message)

      if (/No configuration provided|No such portal configuration/i.test(message)) {
        return NextResponse.json(
          {
            error:
              "Our billing portal is being set up. Please email paula.vargas3@gmail.com to manage your plan while we finish configuring it.",
          },
          { status: 503 },
        )
      }
      if (/No such customer/i.test(message)) {
        return NextResponse.json(
          {
            error:
              "We couldn't find your Stripe account. Please email paula.vargas3@gmail.com so we can re-link your subscription.",
          },
          { status: 400 },
        )
      }
      return NextResponse.json(
        {
          error:
            "Could not open the billing portal. Please try again in a moment, or email paula.vargas3@gmail.com if the problem persists.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Portal session error:", error)
    return NextResponse.json(
      { error: "Could not open the billing portal. Please try again in a moment." },
      { status: 500 },
    )
  }
}
