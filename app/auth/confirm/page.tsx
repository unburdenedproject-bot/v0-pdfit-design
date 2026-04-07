"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import type { EmailOtpType } from "@supabase/supabase-js"

function ConfirmForm() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    async function confirm() {
      const tokenHash = searchParams.get("token_hash")
      const type = searchParams.get("type") as EmailOtpType | null
      const redirectTo = searchParams.get("redirect_to")

      if (!tokenHash || !type) {
        setErrorMessage("Missing confirmation parameters. Please check your email link.")
        setStatus("error")
        return
      }

      const supabase = createClient()
      if (!supabase) {
        setErrorMessage("Unable to connect to authentication service.")
        setStatus("error")
        return
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type,
      })

      if (error) {
        const msg = (error.message || "").toLowerCase()
        if (msg.includes("already") || msg.includes("expired") || msg.includes("otp_expired") || msg.includes("used")) {
          setErrorMessage("Your email is already verified. Please log in.")
        } else {
          setErrorMessage(error.message || "Confirmation failed. The link may have expired.")
        }
        setStatus("error")
        return
      }

      setStatus("success")

      // Redirect after a brief pause so the user sees the success state
      setTimeout(() => {
        let destination = "/"
        if (redirectTo) {
          try {
            const url = new URL(redirectTo, window.location.origin)
            if (url.origin === window.location.origin) {
              destination = redirectTo
            }
          } catch {
            // Invalid URL — fall back to "/"
          }
        }
        window.location.href = destination
      }, 1200)
    }

    confirm()
  }, [searchParams])

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-sm w-full text-center">
      {status === "loading" && (
        <>
          <Loader2 className="h-10 w-10 animate-spin text-[#14D8C4] mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">Confirming your email</h1>
          <p className="text-sm text-slate-500">Please wait a moment...</p>
        </>
      )}

      {status === "success" && (
        <>
          <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">Email confirmed</h1>
          <p className="text-sm text-slate-500">Redirecting you now...</p>
        </>
      )}

      {status === "error" && (
        <>
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">Confirmation failed</h1>
          <p className="text-sm text-slate-500 mb-4">{errorMessage}</p>
          <a
            href="/login"
            className="text-sm font-medium text-[#14D8C4] hover:text-[#14D8C4] underline underline-offset-2"
          >
            Back to Sign In
          </a>
        </>
      )}
    </div>
  )
}

export default function AuthConfirmPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] flex items-center justify-center px-4">
      <Suspense fallback={null}>
        <ConfirmForm />
      </Suspense>
    </div>
  )
}
