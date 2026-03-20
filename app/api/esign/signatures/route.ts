import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import type { SignatureSaveInput } from "@/lib/esign/types"

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

async function requireEsignUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: jsonError("upgrade_required", 403) }
  }

  const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single()
  if (profile?.plan !== "business" && profile?.plan !== "enterprise") {
    return { error: jsonError("upgrade_required", 403) }
  }

  return { supabase, user }
}

export async function GET() {
  const auth = await requireEsignUser()
  if ("error" in auth) return auth.error

  const { supabase, user } = auth
  const { data, error } = await supabase
    .from("esign_signatures")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })

  if (error) {
    return jsonError(error.message, 500)
  }

  return NextResponse.json({ signatures: data ?? [] })
}

export async function POST(request: Request) {
  const auth = await requireEsignUser()
  if ("error" in auth) return auth.error

  const { supabase, user } = auth
  const body = (await request.json()) as SignatureSaveInput

  if (!body.assetUrl || !body.assetMime || !body.kind || !body.method) {
    return jsonError("Missing required signature fields.", 400)
  }

  if (!body.width || !body.height) {
    return jsonError("Signature dimensions are required.", 400)
  }

  const payload = {
    user_id: user.id,
    kind: body.kind,
    method: body.method,
    asset_url: body.assetUrl,
    preview_url: body.previewUrl || body.assetUrl,
    asset_mime: body.assetMime,
    width: body.width,
    height: body.height,
    aspect_ratio: Number((body.width / body.height).toFixed(4)),
    color: body.color ?? null,
    font_family: body.fontFamily ?? null,
    stroke_width: body.strokeWidth ?? null,
    svg_markup: body.svgMarkup ?? null,
    metadata: body.metadata ?? {},
    consented_at: new Date().toISOString(),
  }

  const { data, error } = await supabase
    .from("esign_signatures")
    .insert(payload)
    .select("*")
    .single()

  if (error) {
    return jsonError(error.message, 500)
  }

  return NextResponse.json({ signature: data }, { status: 201 })
}
