/**
 * Feature flag lookup for per-tool kill switches.
 *
 * Paula flips `enabled` on a row in the `feature_flags` table (Supabase
 * dashboard) and the API route returns HTTP 503 with a soft-card message
 * instead of attempting the upstream call. No redeploy needed.
 *
 * Usage inside an API route:
 *   const flag = await isToolEnabled("chat-with-pdf")
 *   if (!flag.enabled) {
 *     return NextResponse.json({ error: flag.message }, { status: 503 })
 *   }
 *
 * On the client, a 503 response routes to the premium soft card via
 * isToolUnavailable() below (see SoftErrorCard integration).
 */

import { createClient } from "@/lib/supabase/server"

const DEFAULT_DISABLED_MESSAGE =
  "This tool is temporarily unavailable. It usually comes back within an hour — please try again shortly."

// In-memory cache so we don't hit Supabase on every API request.
// TTL is short (30s) so flag flips take effect quickly in production.
const CACHE_TTL_MS = 30_000
const cache = new Map<string, { enabled: boolean; message: string | null; expiresAt: number }>()

export interface FeatureFlag {
  enabled: boolean
  message: string
}

export async function isToolEnabled(toolSlug: string): Promise<FeatureFlag> {
  const now = Date.now()
  const cached = cache.get(toolSlug)
  if (cached && cached.expiresAt > now) {
    return { enabled: cached.enabled, message: cached.message || DEFAULT_DISABLED_MESSAGE }
  }

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("feature_flags")
      .select("enabled, disabled_message")
      .eq("tool_slug", toolSlug)
      .single()

    if (error || !data) {
      // If the flag row doesn't exist, assume tool is enabled (safer default — we don't
      // want to accidentally disable everything if Supabase is slow or seed missed a tool).
      cache.set(toolSlug, { enabled: true, message: null, expiresAt: now + CACHE_TTL_MS })
      return { enabled: true, message: DEFAULT_DISABLED_MESSAGE }
    }

    const result = {
      enabled: data.enabled,
      message: data.disabled_message || null,
      expiresAt: now + CACHE_TTL_MS,
    }
    cache.set(toolSlug, result)

    return {
      enabled: result.enabled,
      message: result.message || DEFAULT_DISABLED_MESSAGE,
    }
  } catch (err) {
    // Fail open: if Supabase is unreachable, don't disable the tool.
    console.error("feature-flags: lookup failed, failing open:", err)
    return { enabled: true, message: DEFAULT_DISABLED_MESSAGE }
  }
}

/**
 * Client-side helper: detect a 503 "tool unavailable" response.
 * The server sends HTTP 503 with { error: "<user-facing message>" }.
 */
export function isToolUnavailableStatus(status: number): boolean {
  return status === 503
}
