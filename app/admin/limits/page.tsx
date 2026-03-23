export const dynamic = "force-dynamic"
export const revalidate = 0

import { redirect, notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { createClient as createServiceClient } from "@supabase/supabase-js"

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean)

export default async function AdminLimitsPage() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) redirect("/login")

  // Gate: only admin emails can access
  if (!ADMIN_EMAILS.includes(user.email?.toLowerCase() || "")) {
    notFound()
  }

  // Use service client for admin queries
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600">Service client not configured.</p>
      </div>
    )
  }

  const admin = createServiceClient(url, key)
  const today = new Date().toISOString().split("T")[0]

  // Fetch user profile
  const { data: profile } = await admin
    .from("users")
    .select("plan, email, full_name, cancel_at_period_end, current_period_end")
    .eq("id", user.id)
    .single()

  // Fetch today's usage count
  const { data: usage } = await admin
    .from("usage")
    .select("count")
    .eq("user_id", user.id)
    .eq("date", today)
    .single()

  const dailyCount = usage?.count ?? 0
  const plan = profile?.plan || "free"
  const limit = (plan === "pro" || plan === "business" || plan === "enterprise") ? "Unlimited" : "10"

  // Fetch last 20 download attempts from usage_logs
  const { data: logs } = await admin
    .from("usage_logs")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(20)

  const recentLogs = logs || []

  // Calculate next reset time (midnight UTC)
  const now = new Date()
  const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1))
  const hoursUntilReset = Math.ceil((tomorrow.getTime() - now.getTime()) / (1000 * 60 * 60))

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Admin: Limit Enforcement</h1>
          <p className="text-sm text-slate-500 mt-1">
            Viewing as {profile?.full_name || user.email}
          </p>
        </div>

        {/* Status cards */}
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {/* Plan card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Plan</p>
            <p className="text-2xl font-bold text-slate-900 capitalize">{plan}</p>
            {profile?.cancel_at_period_end && profile?.current_period_end && (
              <p className="text-xs text-amber-600 mt-1">
                Cancels {new Date(profile.current_period_end).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            )}
          </div>

          {/* Daily usage card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
              Today{"'"}s Downloads
            </p>
            <p className="text-2xl font-bold text-slate-900">
              {dailyCount} / {limit}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Resets in ~{hoursUntilReset}h (midnight UTC)
            </p>
          </div>

          {/* Enforcement card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
              Enforcement
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              <span className="text-lg font-bold text-green-700">ON</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Free users limited to 10 conversions/day
            </p>
          </div>
        </div>

        {/* Recent attempts table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-900">
              Recent Download Attempts
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Last 20 logged attempts for your account</p>
          </div>

          {recentLogs.length === 0 ? (
            <div className="px-5 py-10 text-center text-sm text-slate-400">
              No download attempts logged yet. Run the{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">
                004_create_usage_logs.sql
              </code>{" "}
              migration and try a tool.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-5 py-3 font-medium text-slate-600 text-xs uppercase tracking-wide">
                      Time
                    </th>
                    <th className="px-5 py-3 font-medium text-slate-600 text-xs uppercase tracking-wide">
                      Tool
                    </th>
                    <th className="px-5 py-3 font-medium text-slate-600 text-xs uppercase tracking-wide">
                      Status
                    </th>
                    <th className="px-5 py-3 font-medium text-slate-600 text-xs uppercase tracking-wide">
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentLogs.map((log: {
                    id: string
                    created_at: string
                    tool: string
                    allowed: boolean
                    block_reason: string | null
                  }) => (
                    <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3 text-slate-600 whitespace-nowrap">
                        {new Date(log.created_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })}
                      </td>
                      <td className="px-5 py-3 text-slate-800 font-medium whitespace-nowrap">
                        {log.tool}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {log.allowed ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                            Allowed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700">
                            Blocked
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-slate-500 text-xs">
                        {log.block_reason || "\u2014"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
