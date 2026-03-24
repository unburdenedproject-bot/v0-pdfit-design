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
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
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
    <div className="flex min-h-screen flex-col bg-[#F3F4FF]">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="text-center">
              <img src="/logo.svg" alt="PDF.it" className="mx-auto mb-2 h-8 w-auto" />
              <CardTitle className="text-xl text-slate-800">Set new password</CardTitle>
              <CardDescription className="text-slate-500">
                Enter your new password below
              </CardDescription>
            </CardHeader>
            <CardContent>
              {success ? (
                <div className="text-center">
                  <p className="text-sm text-green-700 bg-green-50 rounded-md px-3 py-2">
                    Password updated! Redirecting to your dashboard...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReset}>
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="password" className="text-slate-700">New Password</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-slate-200 focus-visible:ring-orange-500"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password" className="text-slate-700">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border-slate-200 focus-visible:ring-orange-500"
                      />
                    </div>
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
                      {isLoading ? "Updating..." : "Update Password"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
