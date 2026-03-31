"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useRef, Suspense } from "react"
import { Eye, EyeOff, Shield } from "lucide-react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
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
    setResetLoading(true)
    setResetError(null)
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to send reset email")
      }
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
        options: { captchaToken: captchaToken ?? undefined },
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
      <>
        <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent">
          <div className="rounded-[15px] p-8 bg-white/[0.07] backdrop-blur-xl">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-white">Reset Password</h1>
              <p className="text-slate-400 text-sm mt-1">
                {resetSent
                  ? "Check your email for a password reset link."
                  : "Enter your email and we'll send you a reset link."}
              </p>
            </div>
            {!resetSent ? (
              <form onSubmit={handleResetPassword}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="reset-email" className="text-slate-300">Email</Label>
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4]"
                    />
                  </div>
                  {resetError && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
                      {resetError}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold"
                    disabled={resetLoading}
                  >
                    {resetLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </div>
              </form>
            ) : (
              <p className="text-center text-sm text-green-400 bg-green-500/10 rounded-md px-3 py-3">
                If an account exists for that email, you will receive a reset link shortly. Please check your junk or spam folder if you don't see it in your inbox.
              </p>
            )}
            <div className="mt-4 text-center">
              <button
                onClick={() => { setForgotPassword(false); setResetSent(false); setResetError(null) }}
                className="text-sm text-[#14D8C4] hover:text-[#2EE6D6] font-medium underline underline-offset-4"
              >
                Back to Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <Shield className="h-3.5 w-3.5 text-slate-500" />
          <p className="text-slate-500 text-xs">Your files are never stored. SSL encrypted.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent">
        <div className="rounded-[15px] p-8 bg-white/[0.07] backdrop-blur-xl">
          <div className="text-center mb-6">
            <div className="mx-auto mb-2"><span style={{fontWeight: 800, color: '#ffffff', fontSize: '28px', letterSpacing: '-0.5px'}}>PDF<span style={{color: '#14D8C4', fontWeight: 400}}>.it</span></span></div>
            <h1 className="text-xl font-bold text-white">Welcome back</h1>
            <p className="text-slate-400 text-sm mt-1">
              Sign in to your account to continue
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4]"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-300">Password</Label>
                  <button
                    type="button"
                    onClick={() => setForgotPassword(true)}
                    className="text-xs text-[#14D8C4] hover:text-[#2EE6D6] font-medium underline underline-offset-4"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4] pr-10 [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white z-10"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-center overflow-hidden min-h-[78px]">
                <HCaptcha
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                  onVerify={(token) => { setCaptchaToken(token); setError(null) }}
                  onExpire={() => setCaptchaToken(null)}
                  ref={captchaRef}
                />
              </div>
              {error && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-slate-400">
              {"Don't have an account? "}
              <Link
                href="/signup"
                className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-6">
        <Shield className="h-3.5 w-3.5 text-slate-500" />
        <p className="text-slate-500 text-xs">Your files are never stored. SSL encrypted.</p>
      </div>
    </>
  )
}

export default function LoginPage() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20, 216, 196, 0.08), transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 100%, rgba(107, 124, 255, 0.06), transparent 50%),
          #0E0F1E
        `,
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <Header />
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
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
