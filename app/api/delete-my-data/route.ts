export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createClient as createAdminClient } from "@supabase/supabase-js"
import Stripe from "stripe"

function getSupabaseAdmin() {
  return createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
  })
}

export async function POST(request: Request) {
  try {
    // 1. Authenticate user
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: "You must be logged in to delete your data." },
        { status: 401 }
      )
    }

    // 2. Require explicit confirmation
    let body: { confirm?: boolean }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      )
    }

    if (body.confirm !== true) {
      return NextResponse.json(
        { error: "You must send { \"confirm\": true } to proceed with data deletion." },
        { status: 400 }
      )
    }

    const supabaseAdmin = getSupabaseAdmin()
    const userId = user.id
    const userEmail = user.email
    const deleted: Record<string, boolean> = {}

    // 3. Look up user record to get Stripe subscription ID before we wipe it
    let stripeSubscriptionId: string | null = null
    try {
      const { data: userData } = await supabaseAdmin
        .from("users")
        .select("stripe_subscription_id")
        .eq("id", userId)
        .single()
      stripeSubscriptionId = userData?.stripe_subscription_id || null
    } catch (err) {
      console.error("[GDPR] Failed to look up user record:", err)
    }

    // 4. Delete from usage table
    try {
      await supabaseAdmin.from("usage").delete().eq("user_id", userId)
      deleted.usage = true
    } catch (err) {
      console.error("[GDPR] Failed to delete usage records:", err)
      deleted.usage = false
    }

    // 5. Delete from usage_logs table
    try {
      await supabaseAdmin.from("usage_logs").delete().eq("user_id", userId)
      deleted.usage_logs = true
    } catch (err) {
      console.error("[GDPR] Failed to delete usage_logs records:", err)
      deleted.usage_logs = false
    }

    // 6. Delete from contact_messages (by email, best effort)
    try {
      if (userEmail) {
        await supabaseAdmin.from("contact_messages").delete().eq("email", userEmail)
        deleted.contact_messages = true
      } else {
        deleted.contact_messages = false
      }
    } catch (err) {
      console.error("[GDPR] Failed to delete contact_messages:", err)
      deleted.contact_messages = false
    }

    // 7. Clear user record (downgrade to free, remove Stripe IDs)
    try {
      await supabaseAdmin.from("users").update({
        plan: "free",
        stripe_customer_id: null,
        stripe_subscription_id: null,
        cancel_at_period_end: false,
        current_period_end: null,
        updated_at: new Date().toISOString(),
      }).eq("id", userId)
      deleted.user_record_cleared = true
    } catch (err) {
      console.error("[GDPR] Failed to clear user record:", err)
      deleted.user_record_cleared = false
    }

    // 8. Cancel Stripe subscription if one exists
    try {
      if (stripeSubscriptionId) {
        const stripe = getStripe()
        await stripe.subscriptions.cancel(stripeSubscriptionId)
        deleted.stripe_subscription = true
      } else {
        deleted.stripe_subscription = false // No subscription to cancel
      }
    } catch (err) {
      console.error("[GDPR] Failed to cancel Stripe subscription:", err)
      deleted.stripe_subscription = false
    }

    // 9. Delete the Supabase auth user
    try {
      const { error: deleteAuthError } = await supabaseAdmin.auth.admin.deleteUser(userId)
      if (deleteAuthError) {
        console.error("[GDPR] Failed to delete auth user:", deleteAuthError)
        deleted.auth = false
      } else {
        deleted.auth = true
      }
    } catch (err) {
      console.error("[GDPR] Failed to delete auth user:", err)
      deleted.auth = false
    }

    // 10. Audit log
    console.log("[GDPR] User data deleted:", userId, userEmail)

    return NextResponse.json({
      success: true,
      deleted,
    })
  } catch (err) {
    console.error("[GDPR] Unexpected error during data deletion:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred during data deletion." },
      { status: 500 }
    )
  }
}
