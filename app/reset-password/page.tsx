"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Shield, Eye, EyeOff } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  // Session is established by /auth/confirm before redirecting here

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

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

    const supabase = createClient()
    if (!supabase) {
      setError("Authentication is not configured.")
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setSuccess(true)
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

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
      <svg className="pointer-events-none fixed inset-0 w-full h-full z-0" style={{ opacity: 0.04 }}>
        <filter id="resetGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#resetGrain)" />
      </svg>
      <Header />
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(20,216,196,0.2))" }}>
            <div className="rounded-[15px] p-8" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "inset 0 1px 1px rgba(20,216,196,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
              <div className="text-center mb-6">
                <div className="mx-auto mb-2"><span style={{fontWeight: 800, color: '#ffffff', fontSize: '28px', letterSpacing: '-0.5px'}}>PDF<span style={{color: '#14D8C4', fontWeight: 400}}>.it</span></span></div>
                <h1 className="text-xl font-bold text-white">Set New Password</h1>
                <p className="text-slate-400 text-sm mt-1">Enter your new password below</p>
              </div>

              {success ? (
                <div className="text-center">
                  <p className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-md px-3 py-3">
                    Password updated! Redirecting to your dashboard...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReset}>
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="password" className="text-slate-300">New Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          required
                          minLength={8}
                          placeholder="At least 8 characters"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4] pr-10"
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
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password" className="text-slate-300">Confirm New Password</Label>
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
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white z-10"
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
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
                      {isLoading ? "Updating..." : "Update Password"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <Shield className="h-3.5 w-3.5 text-slate-500" />
            <p className="text-slate-500 text-xs">Your files are never stored. SSL encrypted.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
