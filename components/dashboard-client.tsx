"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Link from "next/link"

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

  const isPro = plan === "pro" || plan === "business"
  const planLabel = plan === "business" ? "Business" : plan === "pro" ? "Pro" : "Free"
  const dailyLimit = 10
  const usagePercent = isPro ? 100 : Math.min((usageCount / dailyLimit) * 100, 100)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setStatusMessage({
        type: "success",
        text: "Payment successful! Your Pro plan is now active.",
      })
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
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-amber-200 bg-amber-50 text-amber-800"
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
          <h1 className="text-3xl font-black text-slate-900">
            Welcome back, {displayName || "there"}
          </h1>
          <p className="text-slate-500 mt-1">
            What do you need to fix today?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/tools">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Zap className="mr-2 h-4 w-4" />
              All Tools
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="border-slate-200 text-slate-500 hover:text-slate-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Get Started CTA (for users with 0 usage) */}
      {usageCount === 0 && recentActivity.length === 0 && (
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black mb-2">Get started with your first tool</h2>
            <p className="text-slate-300 mb-6">
              Pick a tool below to convert, compress, or organize your PDF. It only takes a few seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compress-pdf">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  <Compress className="mr-2 h-4 w-4" />
                  Compress PDF
                </Button>
              </Link>
              <Link href="/merge-pdf">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  <Merge className="mr-2 h-4 w-4" />
                  Merge PDF
                </Button>
              </Link>
              <Link href="/pdf-to-jpg">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  <Image className="mr-2 h-4 w-4" />
                  PDF to JPG
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Today's Usage */}
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Today</p>
                <p className="text-2xl font-black text-slate-900">
                  {isPro ? usageCount : `${usageCount}/${dailyLimit}`}
                </p>
              </div>
            </div>
            {!isPro && (
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    usagePercent >= 80 ? "bg-red-500" : usagePercent >= 50 ? "bg-amber-500" : "bg-orange-500"
                  }`}
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
            )}
            {isPro && (
              <p className="text-xs text-slate-500">Unlimited conversions</p>
            )}
          </CardContent>
        </Card>

        {/* Monthly Stats */}
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">This Month</p>
                <p className="text-2xl font-black text-slate-900">{monthlyCount}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Files processed</p>
          </CardContent>
        </Card>

        {/* Plan Status */}
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                plan === "business" ? "bg-indigo-100" : isPro ? "bg-orange-100" : "bg-slate-100"
              }`}>
                <Crown className={`h-5 w-5 ${
                  plan === "business" ? "text-indigo-600" : isPro ? "text-orange-600" : "text-slate-500"
                }`} />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Plan</p>
                <p className="text-2xl font-black text-slate-900">{planLabel}</p>
              </div>
            </div>
            {!isPro && (
              <Button
                onClick={() => router.push("/pricing?source=dashboard")}
                size="sm"
                className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-xs"
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
                <p className="text-xs text-amber-700">
                  Ends {new Date(currentPeriodEnd).toLocaleDateString("en-US", {
                    month: "short", day: "numeric",
                  })}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Tools - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card className="border-slate-200 shadow-sm h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-slate-900">Quick Tools</CardTitle>
                <Link href="/tools" className="text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
                  View all <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {quickTools.map((tool) => (
                  <Link key={tool.href} href={tool.href} className="group">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-200">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <tool.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 truncate">
                        {tool.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity - Takes 1 column */}
        <div>
          <Card className="border-slate-200 shadow-sm h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentActivity.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-slate-300" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">No activity yet</p>
                  <p className="text-xs text-slate-400 mt-1">
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
                        className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-md bg-orange-100 flex items-center justify-center shrink-0">
                            <ToolIcon className="h-3.5 w-3.5 text-orange-600" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium truncate">
                            {toolInfo.label}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 shrink-0 ml-2">
                          {formatTimeAgo(item.created_at)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Row: Plan Details + Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan & Billing */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-slate-900">Plan & Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-500">Plan</span>
                <Badge className={
                  plan === "business"
                    ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-100"
                    : isPro
                    ? "bg-orange-100 text-orange-700 hover:bg-orange-100"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-100"
                }>
                  {planLabel}
                </Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-500">Status</span>
                <span className="text-sm font-medium text-green-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-500">Conversions</span>
                <span className="text-sm font-medium text-slate-700">
                  {isPro ? "Unlimited" : `${dailyLimit}/day`}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-500">Email</span>
                <span className="text-sm font-medium text-slate-700 truncate ml-4">
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
                  className="w-full border-slate-200 text-slate-600 hover:text-slate-800"
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
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Crown className="mr-2 h-4 w-4" />
                  Upgrade to Pro — $7.99/mo
                </Button>
              )}
              {billingError && (
                <p className="text-sm text-red-600">{billingError}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <Link key={index} href={tip.href} className="group block">
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-200">
                    <span className="text-orange-500 font-bold text-sm mt-0.5 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-slate-600 group-hover:text-slate-800 leading-relaxed">
                      {tip.text}
                    </p>
                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-orange-500 shrink-0 mt-0.5 ml-auto" />
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upgrade Banner (for free users, only when they've used some conversions) */}
      {!isPro && usageCount >= 5 && (
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white text-center">
          <h3 className="text-lg font-black mb-1">
            You've used {usageCount} of {dailyLimit} free conversions today
          </h3>
          <p className="text-orange-100 text-sm mb-4">
            Upgrade to Pro for unlimited conversions, all tools, and files up to 200MB. Business supports files up to 1GB.
          </p>
          <Button
            onClick={() => router.push("/pricing?source=dashboard")}
            className="bg-white text-orange-600 hover:bg-orange-50 font-bold"
          >
            <Crown className="mr-2 h-4 w-4" />
            Upgrade to Pro — $7.99/mo
          </Button>
        </div>
      )}
    </div>
  )
}
