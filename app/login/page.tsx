"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useRef, Suspense } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [forgotPassword, setForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState("")
  const [resetSent, setResetSent] = useState(false)
  const [resetError, setResetError] = useState<string | null>(null)
  const [resetLoading, setResetLoading] = useState(false)
  const captchaRef = useRef<HCaptcha>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") || "/dashboard"

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setResetLoading(true)
    setResetError(null)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/dashboard`,
      })
      if (error) throw error
      setResetSent(true)
    } catch (error: unknown) {
      setResetError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setResetLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (!captchaToken) {
      setError("Please complete the captcha verification")
      setIsLoading(false)
      return
    }

    if (!supabase) {
      setError("Authentication is not configured.")
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      window.location.href = redirectTo
      captchaRef.current?.resetCaptcha()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (forgotPassword) {
    return (
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-slate-800">Reset Password</CardTitle>
          <CardDescription className="text-slate-500">
            {resetSent
              ? "Check your email for a password reset link."
              : "Enter your email and we'll send you a reset link."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!resetSent ? (
            <form onSubmit={handleResetPassword}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="reset-email" className="text-slate-700">Email</Label>
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="border-slate-200 focus-visible:ring-orange-500"
                  />
                </div>
                {resetError && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-md px-3 py-2">
                    {resetError}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={resetLoading}
                >
                  {resetLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </div>
            </form>
          ) : (
            <p className="text-center text-sm text-green-600 bg-green-50 rounded-md px-3 py-3">
              If an account exists for that email, you will receive a reset link shortly.
            </p>
          )}
          <div className="mt-4 text-center">
            <button
              onClick={() => { setForgotPassword(false); setResetSent(false); setResetError(null) }}
              className="text-sm text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
            >
              Back to Sign In
            </button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="text-center">
              <img src="/logo.svg" alt="PDF.it" className="mx-auto mb-2 h-8 w-auto" />
              <CardTitle className="text-xl text-slate-800">Welcome back</CardTitle>
              <CardDescription className="text-slate-500">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-slate-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-slate-200 focus-visible:ring-orange-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-slate-700">Password</Label>
                      <button
                        type="button"
                        onClick={() => setForgotPassword(true)}
                        className="text-xs text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-slate-200 focus-visible:ring-orange-500"
                    />
                  </div>
                  <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken(null)}
                    ref={captchaRef}
                  />
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-md px-3 py-2">
                      {error}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-slate-500">
                  {"Don't have an account? "}
                  <Link
                    href="/signup"
                    className="text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
  )
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F3F4FF]">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
