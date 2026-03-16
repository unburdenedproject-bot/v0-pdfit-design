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
    const cookieKey = `omnispdf_uses`
    const current = parseInt(cookieStore.get(cookieKey)?.value || "0", 10)

    if (current >= ANON_LIMIT) {
      return { allowed: false, error: "signup_required" }
    }

    return {
      allowed: true,
      userId: "anonymous",
      currentCount: current,
      anonCookie: {
        name: cookieKey,
        value: String(current + 1),
        options: {
          path: "/",
          maxAge: 60 * 60 * 24 * 30,
          httpOnly: true,
          sameSite: "lax" as const,
        }
      }
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

  if (profile?.plan === "pro" || profile?.plan === "business" || profile?.plan === "enterprise") return { allowed: true, userId: user.id }

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

  return { allowed: true, userId: user.id, currentCount }
}

export async function logUsage(userId: string, toolName: string) {
  if (!serviceClient) return

  await logAttempt(userId, toolName, true)

  const today = new Date().toISOString().split("T")[0]

  const { data: usage, error: selectError } = await serviceClient
    .from("usage")
    .select("count")
    .eq("user_id", userId)
    .eq("date", today)
    .single()

  if (selectError) {
    console.error("[logUsage] select error:", selectError)
  }

  const currentCount = usage?.count ?? 0

  const { error: upsertError } = await serviceClient.from("usage").upsert(
    {
      user_id: userId,
      date: today,
      count: currentCount + 1,
    },
    { onConflict: "user_id,date" }
  )

  if (upsertError) {
    console.error("[logUsage] upsert error:", upsertError)
  }
}
