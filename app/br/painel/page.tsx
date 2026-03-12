export const dynamic = "force-dynamic"
export const revalidate = 0

import { redirect } from "next/navigation"
import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { DashboardClientBr } from "@/components/dashboard-client-br"

export default async function DashboardPagePt() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) redirect("/login")

  let plan = "free"
  let usageCount = 0
  let cancelAtPeriodEnd = false
  let currentPeriodEnd: string | null = null

  const { data: profile } = await supabase
    .from("users")
    .select("plan, full_name, cancel_at_period_end, current_period_end")
    .eq("id", data.user.id)
    .single()

  if (profile?.plan) plan = profile.plan
  if (profile?.cancel_at_period_end) cancelAtPeriodEnd = profile.cancel_at_period_end
  if (profile?.current_period_end) currentPeriodEnd = profile.current_period_end

  // Auto-populate full_name if missing
  let fullName = profile?.full_name?.trim() || ""
  if (!fullName) {
    fullName =
      (data.user.user_metadata?.full_name as string)?.trim() ||
      (data.user.user_metadata?.name as string)?.trim() ||
      ""
    if (!fullName && data.user.email) {
      const local = data.user.email.split("@")[0]
      fullName = local
        .replace(/[._]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    }
    if (fullName) {
      await supabase
        .from("users")
        .upsert(
          { id: data.user.id, email: data.user.email, full_name: fullName, updated_at: new Date().toISOString() },
          { onConflict: "id" }
        )
    }
  }

  const firstName = fullName.split(" ")[0] || "amigo"

  const today = new Date().toISOString().split("T")[0]
  const { data: usage } = await supabase
    .from("usage")
    .select("count")
    .eq("user_id", data.user.id)
    .eq("date", today)
    .single()

  if (usage?.count) usageCount = usage.count

  // Fetch recent activity (last 10 successful conversions)
  const { data: recentActivity } = await supabase
    .from("usage_logs")
    .select("tool, created_at")
    .eq("user_id", data.user.id)
    .eq("allowed", true)
    .order("created_at", { ascending: false })
    .limit(10)

  // Fetch monthly stats
  const monthStart = new Date()
  monthStart.setDate(1)
  monthStart.setHours(0, 0, 0, 0)
  const { count: monthlyCount } = await supabase
    .from("usage_logs")
    .select("*", { count: "exact", head: true })
    .eq("user_id", data.user.id)
    .eq("allowed", true)
    .gte("created_at", monthStart.toISOString())

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <HeaderBr />
      <main className="flex-1">
        <Suspense>
          <DashboardClientBr
            user={data.user}
            plan={plan}
            usageCount={usageCount}
            cancelAtPeriodEnd={cancelAtPeriodEnd}
            currentPeriodEnd={currentPeriodEnd}
            displayName={firstName}
            recentActivity={recentActivity || []}
            monthlyCount={monthlyCount || 0}
          />
        </Suspense>
      </main>
      <FooterBr />
    </div>
  )
}
