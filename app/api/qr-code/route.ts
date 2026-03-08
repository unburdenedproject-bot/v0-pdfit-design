import { NextResponse } from "next/server"
import QRCode from "qrcode"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    // Auth check
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: "You must be logged in to use this tool." },
        { status: 401 }
      )
    }

    // Pro tier check
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single()

    if (!profile || (profile.plan !== "pro" && profile.plan !== "business")) {
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

    return NextResponse.json({ image })
  } catch (error) {
    console.error("QR code generation failed:", error)
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    )
  }
}
