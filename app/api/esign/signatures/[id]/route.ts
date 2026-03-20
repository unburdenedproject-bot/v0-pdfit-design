import { NextResponse } from "next/server"
import { del } from "@vercel/blob"
import { createClient } from "@/lib/supabase/server"

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

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await requireEsignUser()
  if ("error" in auth) return auth.error

  const { supabase, user } = auth
  const { id } = await context.params

  const { data: signature, error: selectError } = await supabase
    .from("esign_signatures")
    .select("id, asset_url, preview_url")
    .eq("id", id)
    .eq("user_id", user.id)
    .single()

  if (selectError || !signature) {
    return jsonError("Signature not found.", 404)
  }

  const { error } = await supabase
    .from("esign_signatures")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id)

  if (error) {
    return jsonError(error.message, 500)
  }

  await Promise.allSettled(
    [signature.asset_url, signature.preview_url]
      .filter((value, index, arr): value is string => Boolean(value) && arr.indexOf(value) === index)
      .map((url) => del(url))
  )

  return NextResponse.json({ success: true })
}
