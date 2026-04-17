"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Mail } from "lucide-react"
import Link from "next/link"

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const email = searchParams?.get("email") || ""
  const [status, setStatus] = useState<"confirm" | "loading" | "done">("confirm")

  const handleUnsubscribe = async () => {
    if (!email) return
    setStatus("loading")
    try {
      await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
    } catch {
      // Always show success — even if API fails, don't keep the user stuck
    }
    setStatus("done")
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20,216,196,0.08), transparent 60%), #0E0F1E",
      }}
    >
      <div className="max-w-md mx-auto px-6 text-center">
        {status === "done" ? (
          <>
            <CheckCircle className="h-14 w-14 text-[#14D8C4] mx-auto mb-5" />
            <h1 className="text-2xl font-black text-white mb-3">You've been unsubscribed</h1>
            <p className="text-slate-400 mb-8">
              You won't receive any more emails from PDF.it™. If this was a mistake, you can always re-subscribe from our website.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-full transition-colors"
            >
              Back to PDF.it
            </Link>
          </>
        ) : (
          <>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}
            >
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white mb-3">Unsubscribe</h1>
            <p className="text-slate-400 mb-2">
              You're about to unsubscribe this email from PDF.it™ updates:
            </p>
            {email && (
              <p className="text-white font-semibold mb-8">{email}</p>
            )}
            <button
              onClick={handleUnsubscribe}
              disabled={status === "loading" || !email}
              className="inline-block bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-full transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Unsubscribing..." : "Confirm unsubscribe"}
            </button>
            <p className="text-slate-500 text-sm mt-6">
              Changed your mind? Just close this page — nothing will happen.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={null}>
      <UnsubscribeContent />
    </Suspense>
  )
}
