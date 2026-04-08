import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const runtime = "nodejs"

/**
 * GET /api/stats — Public stats for social proof.
 * Returns total conversions, user count, and tool count.
 * Cached for 1 hour to avoid hammering the database.
 */

let cachedStats: { data: Record<string, unknown>; timestamp: number } | null = null
const CACHE_TTL = 60 * 60 * 1000 // 1 hour

export async function GET() {
  // Return cached stats if fresh
  if (cachedStats && Date.now() - cachedStats.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedStats.data, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200" },
    })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    // Return reasonable defaults if DB not configured
    return NextResponse.json({
      totalConversions: 0,
      totalUsers: 0,
      toolCount: 30,
      aiToolCount: 7,
      languageCount: 3,
    })
  }

  const supabase = createClient(url, key)

  try {
    // Total conversions (sum of all usage counts)
    const { data: usageData } = await supabase
      .from("usage")
      .select("count")

    const totalConversions = usageData
      ? usageData.reduce((sum: number, row: { count: number }) => sum + (row.count || 0), 0)
      : 0

    // Total registered users
    const { count: totalUsers } = await supabase
      .from("users")
      .select("id", { count: "exact", head: true })

    const stats = {
      totalConversions,
      totalUsers: totalUsers || 0,
      toolCount: 30,
      aiToolCount: 7,
      languageCount: 3,
    }

    cachedStats = { data: stats, timestamp: Date.now() }

    return NextResponse.json(stats, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200" },
    })
  } catch {
    return NextResponse.json({
      totalConversions: 0,
      totalUsers: 0,
      toolCount: 30,
      aiToolCount: 7,
      languageCount: 3,
    })
  }
}
