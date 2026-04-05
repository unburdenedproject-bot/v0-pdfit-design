"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"
import { Eye, EyeOff, Shield, CheckCircle2 } from "lucide-react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (!supabase) {
      setError("Authentication is not configured.")
      setIsLoading(false)
      return
    }

    if (!firstName.trim()) {
      setError("Please enter your first name")
      setIsLoading(false)
      return
    }

    if (!/^[\p{L}\s'\-]+$/u.test(firstName.trim())) {
      setError("Name can only contain letters")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      setIsLoading(false)
      return
    }

    if (!captchaToken) {
      setError("Please complete the captcha verification")
      setIsLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo:
            process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
            `${window.location.origin}/dashboard`,
          captchaToken: captchaToken ?? undefined,
          data: {
            full_name: firstName.trim(),
          },
        },
      })
      if (error) throw error

      if (data.user) {
        await supabase.from("users").upsert(
          {
            id: data.user.id,
            email: data.user.email,
            full_name: firstName.trim(),
            plan: "free",
            updated_at: new Date().toISOString(),
          },
          { onConflict: "id" }
        )
      }

      router.push("/signup/success")
      captchaRef.current?.resetCaptcha()
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "An error occurred"
      if (msg.toLowerCase().includes("rate") || msg.toLowerCase().includes("limit") || msg.toLowerCase().includes("too many")) {
        setError("Too many signup attempts. Please wait a minute and try again.")
      } else {
        setError(msg)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: `
          radial-gradient(ellipse at 20% 0%, rgba(20, 216, 196, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 100%, rgba(107, 124, 255, 0.06) 0%, transparent 50%),
          #0E0F1E
        `,
      }}
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <Header />

      <main className="relative z-20 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card with metallic gradient border */}
          <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05), rgba(20,216,196,0.2), rgba(255,255,255,0.05))" }}>
            <div className="rounded-[15px] p-8" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
              {/* Logo & Title */}
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3"><span style={{fontWeight: 800, color: '#ffffff', fontSize: '28px', letterSpacing: '-0.5px'}}>PDF<span style={{color: '#14D8C4', fontWeight: 400}}>.it</span></span></div>
                <h1 className="text-xl font-bold text-white">Create your account</h1>
                <p className="mt-1 text-sm text-slate-400">Get 10 free conversions per day</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name" className="text-slate-300">First Name <span className="text-red-400">*</span></Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Your first name"
                      required
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-slate-300">Email <span className="text-red-400">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (captchaToken) {
                          setCaptchaToken(null)
                          captchaRef.current?.resetCaptcha()
                        }
                      }}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-slate-300">Password <span className="text-red-400">*</span></Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password" className="text-slate-300">Confirm Password <span className="text-red-400">*</span></Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                    onVerify={(token) => { setCaptchaToken(token); setError(null) }}
                    onExpire={() => setCaptchaToken(null)}
                    ref={captchaRef}
                  />
                  {error && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
                      {error}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Sign Up"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-slate-400">
                  {"Already have an account? "}
                  <Link
                    href="/login"
                    className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium underline underline-offset-4 transition-colors"
                  >
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Privacy note */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-xs text-slate-500">Your files are never stored. SSL encrypted.</span>
          </div>

          {/* Trust points */}
          <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#14D8C4]" />
              <span className="text-xs text-slate-400">10 free conversions/day</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#14D8C4]" />
              <span className="text-xs text-slate-400">No credit card required</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#14D8C4]" />
              <span className="text-xs text-slate-400">Files deleted after download</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
