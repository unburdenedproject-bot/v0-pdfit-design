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
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"

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
  const redirectTo = searchParams.get("redirect") || "/es/dashboard"

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setResetLoading(true)
    setResetError(null)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/es/dashboard`,
      })
      if (error) throw error
      setResetSent(true)
    } catch (error: unknown) {
      setResetError(error instanceof Error ? error.message : "Ocurrió un error")
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
      setError("Por favor completa la verificación captcha")
      setIsLoading(false)
      return
    }

    if (!supabase) {
      setError("La autenticación no está configurada.")
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
      setError(error instanceof Error ? error.message : "Ocurrió un error")
    } finally {
      setIsLoading(false)
    }
  }

  if (forgotPassword) {
    return (
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-slate-800">Restablecer contraseña</CardTitle>
          <CardDescription className="text-slate-500">
            {resetSent
              ? "Revisa tu correo para el enlace de restablecimiento."
              : "Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!resetSent ? (
            <form onSubmit={handleResetPassword}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="reset-email" className="text-slate-700">Correo electrónico</Label>
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="tu@ejemplo.com"
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
                  {resetLoading ? "Enviando..." : "Enviar enlace"}
                </Button>
              </div>
            </form>
          ) : (
            <p className="text-center text-sm text-green-600 bg-green-50 rounded-md px-3 py-3">
              Si existe una cuenta con ese correo, recibirás un enlace de restablecimiento.
            </p>
          )}
          <div className="mt-4 text-center">
            <button
              onClick={() => { setForgotPassword(false); setResetSent(false); setResetError(null) }}
              className="text-sm text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
            >
              Volver a iniciar sesión
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
              <CardTitle className="text-xl text-slate-800">Bienvenido de nuevo</CardTitle>
              <CardDescription className="text-slate-500">
                Inicia sesión en tu cuenta para continuar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-slate-700">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@ejemplo.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-slate-200 focus-visible:ring-orange-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-slate-700">Contraseña</Label>
                      <button
                        type="button"
                        onClick={() => setForgotPassword(true)}
                        className="text-xs text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                      >
                        ¿Olvidaste tu contraseña?
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
                    {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-slate-500">
                  {"¿No tienes una cuenta? "}
                  <Link
                    href="/es/registro"
                    className="text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                  >
                    Regístrate
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
  )
}

export default function LoginPageEs() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F3F4FF]">
      <HeaderEs />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </main>
      <FooterEs />
    </div>
  )
}
