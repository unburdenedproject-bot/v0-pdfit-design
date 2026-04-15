"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import type { User } from "@supabase/supabase-js"
import {
  FileText,
  Zap,
  Crown,
  LogOut,
  ArrowRight,
  CheckCircle,
  XCircle,
  Loader2,
  AlertTriangle,
  Merge,
  Split,
  RotateCw,
  FileArchiveIcon as Compress,
  Lock,
  Unlock,
  Image,
  Scan,
  Camera,
  Upload,
  Layers,
  BarChart3,
  Clock,
  Lightbulb,
  Info,
} from "lucide-react"
import Link from "next/link"
import { DashboardSearch } from "@/components/dashboard-search"

interface RecentActivity {
  tool: string
  created_at: string
}

interface DashboardClientProps {
  user: User
  plan?: string
  usageCount?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodEnd?: string | null
  displayName?: string
  recentActivity?: RecentActivity[]
  monthlyCount?: number
}

const toolDisplayNames: Record<string, { label: string; icon: typeof FileText }> = {
  "merge-pdf": { label: "Merge PDF", icon: Merge },
  "split-pdf": { label: "Split PDF", icon: Split },
  "rotate-pdf": { label: "Rotate PDF", icon: RotateCw },
  "compress-pdf": { label: "Compress PDF", icon: Compress },
  "protect-pdf": { label: "Protect PDF", icon: Lock },
  "unlock-pdf": { label: "Unlock PDF", icon: Unlock },
  "flatten-pdf": { label: "Flatten PDF", icon: Layers },
  "pdf-to-jpg": { label: "PDF to JPG", icon: Image },
  "pdf-to-png": { label: "PDF to PNG", icon: Image },
  "pdf-to-txt": { label: "PDF to TXT", icon: FileText },
  "pdf-to-word": { label: "PDF to Word", icon: FileText },
  "pdf-to-excel": { label: "PDF to Excel", icon: FileText },
  "pdf-to-powerpoint": { label: "PDF to PowerPoint", icon: FileText },
  "word-to-pdf": { label: "Word to PDF", icon: FileText },
  "excel-to-pdf": { label: "Excel to PDF", icon: FileText },
  "powerpoint-to-pdf": { label: "PowerPoint to PDF", icon: FileText },
  "extract-images-from-pdf": { label: "Extract Images", icon: Image },
  "upload-ready-pdf": { label: "Upload-Ready PDF", icon: Upload },
  "ocr-pdf": { label: "OCR Scanner", icon: Scan },
  "phone-scan-cleanup": { label: "Phone Scan Cleanup", icon: Camera },
  "watermark-pdf": { label: "Watermark PDF", icon: FileText },
}

const quickTools = [
  { label: "Merge PDF", href: "/merge-pdf", icon: Merge },
  { label: "Split PDF", href: "/split-pdf", icon: Split },
  { label: "Compress PDF", href: "/compress-pdf", icon: Compress },
  { label: "Rotate PDF", href: "/rotate-pdf", icon: RotateCw },
  { label: "PDF to JPG", href: "/pdf-to-jpg", icon: Image },
  { label: "PDF to Word", href: "/pdf-to-word", icon: FileText },
  { label: "Protect PDF", href: "/protect-pdf", icon: Lock },
  { label: "Unlock PDF", href: "/unlock-pdf", icon: Unlock },
  { label: "OCR Scanner", href: "/ocr-scanner", icon: Scan },
  { label: "Flatten PDF", href: "/flatten-pdf", icon: Layers },
  { label: "Upload-Ready", href: "/upload-ready-pdf", icon: Upload },
  { label: "Scan Cleanup", href: "/phone-scan-cleanup", icon: Camera },
]

const tips = [
  { text: "Combine multiple PDFs into one using Merge PDF", href: "/merge-pdf" },
  { text: "Reduce file size for email with Compress PDF", href: "/compress-pdf" },
  { text: "Make scanned documents searchable with OCR Scanner", href: "/ocr-scanner" },
  { text: "Fix and optimize files for upload portals with Upload-Ready PDF", href: "/upload-ready-pdf" },
]

function formatTimeAgo(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays}d ago`
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function getPlanBadgeClasses(plan: string): string {
  switch (plan) {
    case "enterprise":
      return "bg-gradient-to-r from-slate-300/20 to-slate-400/20 text-slate-300 border border-slate-400/30"
    case "business":
      return "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 border border-blue-500/30"
    case "pro":
      return "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border border-amber-500/30"
    default:
      return "bg-white/10 text-slate-400 border border-white/10"
  }
}

export function DashboardClient({
  user,
  plan = "free",
  usageCount = 0,
  cancelAtPeriodEnd = false,
  currentPeriodEnd = null,
  displayName,
  recentActivity = [],
  monthlyCount = 0,
}: DashboardClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "canceled"
    text: string
  } | null>(null)
  const [isBillingLoading, setIsBillingLoading] = useState(false)
  const [billingError, setBillingError] = useState<string | null>(null)

  const [currentPlan, setCurrentPlan] = useState(plan)
  const isPro = currentPlan === "pro" || currentPlan === "business" || currentPlan === "enterprise"
  const planLabel = currentPlan === "enterprise" ? "Enterprise" : currentPlan === "business" ? "Business" : currentPlan === "pro" ? "Pro" : "Free"
  const dailyLimit = 10
  const usagePercent = isPro ? 100 : Math.min((usageCount / dailyLimit) * 100, 100)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setStatusMessage({
        type: "success",
        text: "Payment successful! Activating your plan...",
      })

      // Poll Supabase until the plan updates (webhook may take a few seconds)
      if (currentPlan === "free") {
        const supabase = createClient()
        let attempts = 0
        const poll = setInterval(async () => {
          attempts++
          const { data } = await supabase
            .from("users")
            .select("plan")
            .eq("id", user.id)
            .single()
          if (data && data.plan !== "free") {
            setCurrentPlan(data.plan)
            const label = data.plan === "enterprise" ? "Enterprise" : data.plan === "business" ? "Business" : "Pro"
            setStatusMessage({ type: "success", text: `Payment successful! Your ${label} plan is now active.` })
            clearInterval(poll)
          } else if (attempts >= 15) {
            setStatusMessage({ type: "success", text: "Payment successful! Your plan will activate shortly — please refresh if needed." })
            clearInterval(poll)
          }
        }, 2000)
        return () => clearInterval(poll)
      }
    } else if (searchParams.get("canceled") === "true") {
      setStatusMessage({
        type: "canceled",
        text: "Checkout was canceled. You can try again anytime.",
      })
    }
  }, [searchParams])

  const handleSignOut = async () => {
    const supabase = createClient()
    if (supabase) {
      await supabase.auth.signOut()
    }
    router.push("/")
    router.refresh()
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Status banners */}
      {statusMessage && (
        <div
          className={`mb-6 flex items-center gap-3 rounded-lg border p-4 ${
            statusMessage.type === "success"
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-amber-500/10 border-amber-500/20 text-amber-400"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle className="h-5 w-5 shrink-0" />
          ) : (
            <XCircle className="h-5 w-5 shrink-0" />
          )}
          <p className="text-sm font-medium">{statusMessage.text}</p>
        </div>
      )}

      {/* Welcome Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-white">
            Welcome back, {displayName || "there"}
          </h1>
          <p className="text-slate-400 mt-1">
            What do you need to fix today?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/tools">
            <Button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold">
              <Zap className="mr-2 h-4 w-4" />
              All Tools
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Get Started CTA (for users with 0 usage) */}
      {usageCount === 0 && recentActivity.length === 0 && (
        <div className="mb-8 rounded-2xl p-[1px] bg-gradient-to-br from-[#14D8C4]/40 via-[#6B7CFF]/30 to-[#14D8C4]/20">
          <div className="rounded-2xl bg-white/[0.05] backdrop-blur-sm p-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-black text-white mb-2">Get started with your first tool</h2>
              <p className="text-slate-400 mb-6">
                Pick a tool below to convert, compress, or organize your PDF. It only takes a few seconds.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/compress-pdf">
                  <Button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold">
                    <Compress className="mr-2 h-4 w-4" />
                    Compress PDF
                  </Button>
                </Link>
                <Link href="/merge-pdf">
                  <Button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold">
                    <Merge className="mr-2 h-4 w-4" />
                    Merge PDF
                  </Button>
                </Link>
                <Link href="/pdf-to-jpg">
                  <Button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold">
                    <Image className="mr-2 h-4 w-4" />
                    PDF to JPG
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tool Search */}
      <DashboardSearch locale="en" />

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Today's Usage */}
        <div className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#14D8C4]/20 to-[#14D8C4]/5 border border-[#14D8C4]/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-[#14D8C4]" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Today</p>
              <p className="text-2xl font-black text-white">
                {isPro ? usageCount : `${usageCount}/${dailyLimit}`}
              </p>
            </div>
          </div>
          {!isPro && (
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500 bg-[#14D8C4]"
                style={{ width: `${usagePercent}%` }}
              />
            </div>
          )}
          {isPro && (
            <p className="text-xs text-slate-500">Unlimited conversions</p>
          )}
        </div>

        {/* Monthly Stats */}
        <div className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B7CFF]/20 to-[#6B7CFF]/5 border border-[#6B7CFF]/20 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-[#6B7CFF]" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">This Month</p>
              <p className="text-2xl font-black text-white">{monthlyCount}</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">Files processed</p>
        </div>

        {/* Plan Status */}
        <div className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10 p-5">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              plan === "enterprise"
                ? "bg-gradient-to-br from-slate-300/20 to-slate-400/5 border border-slate-400/20"
                : plan === "business"
                ? "bg-gradient-to-br from-blue-500/20 to-indigo-500/5 border border-blue-500/20"
                : isPro
                ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/5 border border-amber-500/20"
                : "bg-gradient-to-br from-slate-500/20 to-slate-600/5 border border-slate-500/20"
            }`}>
              <Crown className={`h-5 w-5 ${
                plan === "enterprise"
                  ? "text-slate-300"
                  : plan === "business"
                  ? "text-blue-400"
                  : isPro
                  ? "text-amber-400"
                  : "text-slate-500"
              }`} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Plan</p>
              <p className="text-2xl font-black text-white">{planLabel}</p>
            </div>
          </div>
          {!isPro && (
            <Button
              onClick={() => router.push("/pricing?source=dashboard")}
              size="sm"
              className="mt-3 w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] text-xs font-bold"
            >
              <Crown className="mr-1.5 h-3.5 w-3.5" />
              Upgrade to Pro
            </Button>
          )}
          {isPro && !cancelAtPeriodEnd && currentPeriodEnd && (
            <p className="text-xs text-slate-500 mt-3">
              Renews {new Date(currentPeriodEnd).toLocaleDateString("en-US", {
                month: "short", day: "numeric", year: "numeric",
              })}
            </p>
          )}
          {cancelAtPeriodEnd && currentPeriodEnd && (
            <div className="flex items-center gap-1.5 mt-3">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
              <p className="text-xs text-amber-400">
                Ends {new Date(currentPeriodEnd).toLocaleDateString("en-US", {
                  month: "short", day: "numeric",
                })}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Tools - Takes 2 columns */}
        <div className="lg:col-span-2">
          <div className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10 h-full">
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Quick Tools</h3>
                <Link href="/tools" className="text-sm text-[#14D8C4] hover:text-[#2EE6D6] font-medium flex items-center gap-1">
                  View all <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {quickTools.map((tool) => (
                  <Link key={tool.href} href={tool.href} className="group">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 p-3 hover:border-[#14D8C4]/30 hover:bg-white/[0.03] transition-all duration-200">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#14D8C4]/20 to-[#14D8C4]/5 border border-[#14D8C4]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <tool.icon className="h-4 w-4 text-[#14D8C4]" />
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white truncate">
                        {tool.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity - Takes 1 column */}
        <div>
          <div className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10 h-full">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                Recent Activity
              </h3>
            </div>
            <div className="px-6 pb-6">
              {recentActivity.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-slate-600" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">No activity yet</p>
                  <p className="text-xs text-slate-600 mt-1">
                    Your recent conversions will appear here
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {recentActivity.map((item, index) => {
                    const toolInfo = toolDisplayNames[item.tool] || {
                      label: item.tool.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
                      icon: FileText,
                    }
                    const ToolIcon = toolInfo.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#14D8C4]/20 to-[#14D8C4]/5 border border-[#14D8C4]/20 flex items-center justify-center shrink-0">
                            <ToolIcon className="h-3.5 w-3.5 text-[#14D8C4]" />
                          </div>
                          <span className="text-sm text-slate-300 font-medium truncate">
                            {toolInfo.label}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 shrink-0 ml-2">
                          {formatTimeAgo(item.created_at)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Plan Details + Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan & Billing */}
        <div className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10">
          <div className="p-6 pb-4">
            <h3 className="text-lg font-bold text-white">Plan & Billing</h3>
          </div>
          <div className="px-6 pb-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-sm text-slate-500">Plan</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getPlanBadgeClasses(currentPlan)}`}>
                  {planLabel}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-sm text-slate-500">Status</span>
                <span className="text-sm font-medium text-green-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-sm text-slate-500">Conversions</span>
                <span className="text-sm font-medium text-white">
                  {isPro ? "Unlimited" : `${dailyLimit}/day`}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-sm text-slate-500">Email</span>
                <span className="text-sm font-medium text-white truncate ml-4">
                  {user.email}
                </span>
              </div>

              {isPro ? (
                <Button
                  variant="outline"
                  size="sm"
                  disabled={isBillingLoading}
                  onClick={async () => {
                    setIsBillingLoading(true)
                    setBillingError(null)
                    try {
                      const res = await fetch("/api/create-portal-session", { method: "POST" })
                      const data = await res.json()
                      if (!res.ok) throw new Error(data.error || "Something went wrong")
                      if (data.url) window.location.href = data.url
                    } catch (err) {
                      setBillingError(err instanceof Error ? err.message : "Could not open billing portal.")
                      setIsBillingLoading(false)
                    }
                  }}
                  className="w-full border-white/10 text-slate-300 hover:text-white hover:bg-white/5"
                >
                  {isBillingLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Opening...
                    </>
                  ) : (
                    "Manage Billing"
                  )}
                </Button>
              ) : (
                <Button
                  onClick={() => router.push("/pricing?source=dashboard")}
                  className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold"
                >
                  <Crown className="mr-2 h-4 w-4" />
                  Upgrade to Pro — $3.99/mo
                </Button>
              )}
              {billingError && (
                <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(107,124,255,0.25)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                    <Info className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed flex-1">{billingError}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10">
          <div className="p-6 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-[#14D8C4]" />
              Tips
            </h3>
          </div>
          <div className="px-6 pb-6">
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <Link key={index} href={tip.href} className="group block">
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-white/10 hover:border-[#14D8C4]/30 hover:bg-white/[0.03] transition-all duration-200">
                    <span className="text-[#14D8C4] font-bold text-sm mt-0.5 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed">
                      {tip.text}
                    </p>
                    <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-[#14D8C4] shrink-0 mt-0.5 ml-auto" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Banner (for free users, only when they've used some conversions) */}
      {!isPro && usageCount >= 5 && (
        <div className="mt-8 rounded-2xl p-[1px] bg-gradient-to-r from-[#14D8C4]/60 via-[#6B7CFF]/40 to-[#14D8C4]/60">
          <div className="rounded-2xl bg-white/[0.05] backdrop-blur-sm p-6 text-center">
            <h3 className="text-lg font-black text-white mb-1">
              You've used {usageCount} of {dailyLimit} free conversions today
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Upgrade to Pro for unlimited conversions, all tools, and files up to 200MB. Business supports files up to 1GB.
            </p>
            <Button
              onClick={() => router.push("/pricing?source=dashboard")}
              className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold"
            >
              <Crown className="mr-2 h-4 w-4" />
              Upgrade to Pro — $3.99/mo
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
