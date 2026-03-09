"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
} from "lucide-react"
import Link from "next/link"

interface DashboardClientProps {
  user: User
  plan?: string
  usageCount?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodEnd?: string | null
  displayName?: string
}

export function DashboardClient({
  user,
  plan = "free",
  usageCount = 0,
  cancelAtPeriodEnd = false,
  currentPeriodEnd = null,
  displayName,
}: DashboardClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "canceled"
    text: string
  } | null>(null)
  const [isBillingLoading, setIsBillingLoading] = useState(false)
  const [billingError, setBillingError] = useState<string | null>(null)

  const isPro = plan === "pro"

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

  const handleUpgrade = async () => {
    setIsCheckoutLoading(true)
    try {
      const res = await fetch("/api/create-checkout", { method: "POST" })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to start checkout")
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout failed:", error)
      setIsCheckoutLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      {/* Header section */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">
            {"Welcome back, "}
            <span className="font-medium text-slate-700">{displayName || "there"}</span>
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleSignOut}
          className="mt-3 sm:mt-0 w-fit border-slate-200 text-slate-600 hover:text-slate-800"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

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

      {/* Plan card */}
      <Card className="mb-6 border-slate-200 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-slate-800">Your Plan</CardTitle>
            {isPro ? (
              <Badge className="bg-orange-500 text-white hover:bg-orange-500">
                <Crown className="mr-1 h-3 w-3" />
                Pro
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                Free Trial
              </Badge>
            )}
          </div>
          <CardDescription className="text-slate-500">
            {isPro
              ? "Unlimited conversions with your Pro subscription."
              : "You have 10 free conversions per day with your account."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isPro && (
            <>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-600">
                  Conversions used today: <strong className="text-slate-800">{usageCount} / 10</strong>
                </span>
              </div>
              <Button
                onClick={() => router.push("/pricing?source=dashboard")}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Crown className="mr-2 h-4 w-4" />
                Upgrade to Pro
              </Button>
            </>
          )}
          {isPro && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600">
                    Unlimited conversions active
                  </span>
                </div>
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
                      setBillingError(err instanceof Error ? err.message : "Could not open billing portal. Please try again.")
                      setIsBillingLoading(false)
                    }
                  }}
                  className="border-slate-200 text-slate-600 hover:text-slate-800"
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
              </div>
              {billingError && (
                <p className="text-sm text-red-600">{billingError}</p>
              )}
              {!cancelAtPeriodEnd && currentPeriodEnd && (
                <p className="text-sm text-slate-500">
                  Renews on{" "}
                  {new Date(currentPeriodEnd).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}
              {cancelAtPeriodEnd && currentPeriodEnd && (
                <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-sm text-amber-800">
                    Pro active until{" "}
                    <strong>
                      {new Date(currentPeriodEnd).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </strong>{" "}
                    (cancellation scheduled)
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick actions */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-slate-800">Quick Actions</CardTitle>
          <CardDescription className="text-slate-500">
            Jump to a tool and start converting.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Merge PDF", href: "/merge-pdf" },
              { label: "Compress PDF", href: "/compress-pdf" },
              { label: "PDF to Word", href: "/pdf-to-word" },
              { label: "All Tools", href: "/tools" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group">
                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:border-orange-200 hover:bg-orange-50/50">
                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-800">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-orange-500" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
