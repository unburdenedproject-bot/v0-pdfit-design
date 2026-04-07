export const runtime = "nodejs"
export const maxDuration = 60

import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

/**
 * Vercel Cron Job: runs on the 1st of each month at 3am UTC.
 * Deletes usage_logs older than 90 days to prevent unbounded table growth.
 *
 * Configured in vercel.json:
 *   { "crons": [{ "path": "/api/cron/cleanup-usage-logs", "schedule": "0 3 1 * *" }] }
 */

const CRON_SECRET = process.env.CRON_SECRET

export async function GET(request: NextRequest) {
  // Verify the request is from Vercel Cron (not a random visitor)
  const authHeader = request.headers.get("authorization")
  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json(
      { error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" },
      { status: 500 }
    )
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  try {
    // Calculate the cutoff date: 90 days ago
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - 90)
    const cutoffISO = cutoff.toISOString()

    // Delete rows older than 90 days
    const { data, error, count } = await supabase
      .from("usage_logs")
      .delete()
      .lt("created_at", cutoffISO)
      .select("id", { count: "exact", head: true })

    if (error) {
      console.error("usage_logs cleanup failed:", error)
      return NextResponse.json(
        { error: "Cleanup query failed", details: error.message },
        { status: 500 }
      )
    }

    const deleted = count ?? 0
    console.log(`usage_logs cleanup: deleted ${deleted} rows older than ${cutoffISO}`)

    return NextResponse.json({
      ok: true,
      deleted,
      cutoff: cutoffISO,
    })
  } catch (err) {
    console.error("usage_logs cleanup cron failed:", err)
    return NextResponse.json({ error: "Cron failed" }, { status: 500 })
  }
}
