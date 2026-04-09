import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

const serviceClient = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
})()

const ANON_LIMIT = 3
const FREE_LIMIT = 10

async function logAttempt(
  userId: string,
  tool: string,
  allowed: boolean,
  blockReason?: string
) {
  if (!serviceClient) return
  try {
    await serviceClient.from("usage_logs").insert({
      user_id: userId,
      tool,
      allowed,
      block_reason: blockReason || null,
    })
  } catch (err) {
    console.error("[logAttempt] insert error:", err)
  }
}

export { logAttempt }

export async function checkUsageAndAuth(toolName: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase is not configured, allow everything (dev/sandbox)
  if (!url || !anonKey) {
    return { allowed: true, userId: "anonymous" }
  }

  const cookieStore = await cookies()
  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // Called from a Server Component -- can be ignored
        }
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    const cookieStore = await cookies()
    // Include today's date so the limit resets daily (3 anonymous conversions per day)
    const todayStr = new Date().toISOString().split("T")[0]
    const cookieKey = `pdfit_uses_${todayStr}`
    const current = parseInt(cookieStore.get(cookieKey)?.value || "0", 10)

    if (current >= ANON_LIMIT) {
      return { allowed: false, error: "signup_required" }
    }

    // Set the cookie immediately so it's always written — even if the route
    // returns early (async path), throws an error, or uses Response.json()
    // instead of NextResponse. Previously the cookie was returned for routes
    // to set manually, which many routes failed to do on error/async paths.
    try {
      cookieStore.set(cookieKey, String(current + 1), {
        path: "/",
        maxAge: 60 * 60 * 24, // expires at end of day
        httpOnly: true,
        sameSite: "lax" as const,
      })
    } catch {
      // Server Component context — can be ignored in Route Handlers
    }

    return {
      allowed: true,
      userId: "anonymous",
      currentCount: current,
    }
  }

  if (!serviceClient) {
    return { allowed: true, userId: user.id }
  }

  const { data: profile } = await serviceClient
    .from("users")
    .select("plan")
    .eq("id", user.id)
    .single()

  const userPlan = profile?.plan || "free"

  if (userPlan === "pro" || userPlan === "business" || userPlan === "enterprise") return { allowed: true, userId: user.id, plan: userPlan }

  const today = new Date().toISOString().split("T")[0]

  const { data: usage } = await serviceClient
    .from("usage")
    .select("count")
    .eq("user_id", user.id)
    .eq("date", today)
    .single()

  const currentCount = usage?.count ?? 0

  if (currentCount >= FREE_LIMIT) {
    await logAttempt(user.id, toolName, false, "daily_limit_reached")
    return { allowed: false, error: "Daily limit reached. Upgrade to Pro." }
  }

  return { allowed: true, userId: user.id, currentCount, plan: "free" }
}

export async function logUsage(userId: string, toolName: string) {
  if (!serviceClient) return

  await logAttempt(userId, toolName, true)

  const today = new Date().toISOString().split("T")[0]

  // Atomic increment — avoids race condition where two concurrent requests
  // both read the same count and write count+1 (losing one increment).
  // Uses SQL ON CONFLICT to do INSERT or UPDATE in a single statement.
  const { error: upsertError } = await serviceClient.rpc(
    "increment_usage",
    { p_user_id: userId, p_date: today }
  )

  if (upsertError) {
    // Fallback to non-atomic upsert if RPC function doesn't exist yet
    console.error("[logUsage] rpc error (falling back to upsert):", upsertError)
    const { data: usage } = await serviceClient
      .from("usage")
      .select("count")
      .eq("user_id", userId)
      .eq("date", today)
      .single()

    const currentCount = usage?.count ?? 0

    await serviceClient.from("usage").upsert(
      { user_id: userId, date: today, count: currentCount + 1 },
      { onConflict: "user_id,date" }
    )
  }
}
