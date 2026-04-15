import { NextResponse } from "next/server"
import QRCode from "qrcode"
import { createClient } from "@/lib/supabase/server"
import { isToolEnabled } from "@/lib/feature-flags"

export async function POST(request: Request) {
  try {
    // Kill switch: Paula can disable this tool instantly via Supabase dashboard (no redeploy).
    const flag = await isToolEnabled("qr-code")
    if (!flag.enabled) {
      return NextResponse.json({ error: flag.message }, { status: 503 })
    }

    // Auth check
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      )
    }

    // Pro tier check
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single()

    if (!profile || (profile.plan !== "pro" && profile.plan !== "business" && profile.plan !== "enterprise")) {
      return NextResponse.json(
        { error: "This tool requires a Pro or Business plan." },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { text } = body

    if (!text || typeof text !== "string" || !text.trim()) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    }

    const image = await QRCode.toDataURL(text.trim(), {
      width: 512,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    })

    const { logUsage } = await import("@/lib/usage-check")
    await logUsage(user.id, "qr-code")

    return NextResponse.json({ image })
  } catch (error) {
    console.error("QR code generation failed:", error)
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    )
  }
}
