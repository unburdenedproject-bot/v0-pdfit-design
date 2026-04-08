import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { checkCsrf } from "@/lib/csrf"

export const runtime = "nodejs"

/**
 * POST /api/feedback — Save user feedback after file download.
 * Stores rating (1-5), optional quote, tool name, and user info.
 */
export async function POST(request: NextRequest) {
  try {
    const csrfError = checkCsrf(request)
    if (csrfError) return csrfError

    const body = await request.json()
    const rating = Number(body.rating)
    const quote = (body.quote || "").trim().slice(0, 500)
    const tool = (body.tool || "").trim().slice(0, 100)
    const name = (body.name || "").trim().slice(0, 100)
    const role = (body.role || "").trim().slice(0, 100)

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating required (1-5)" }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceKey) {
      console.log("[feedback] No DB:", { rating, quote, tool })
      return NextResponse.json({ success: true })
    }

    const supabase = createClient(supabaseUrl, serviceKey)

    await supabase.from("user_feedback").insert({
      rating,
      quote: quote || null,
      tool: tool || null,
      name: name || null,
      role: role || null,
      created_at: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to save feedback" }, { status: 500 })
  }
}
