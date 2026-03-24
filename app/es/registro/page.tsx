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
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"
import { Eye, EyeOff } from "lucide-react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"

export default function SignUpPageEs() {
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
      setError("La autenticación no está configurada.")
      setIsLoading(false)
      return
    }

    if (!firstName.trim()) {
      setError("Por favor ingresa tu nombre")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      setIsLoading(false)
      return
    }

    if (!captchaToken) {
      setError("Por favor completa la verificación captcha")
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
            `${window.location.origin}/es/dashboard`,
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

      router.push("/es/registro/exito")
      captchaRef.current?.resetCaptcha()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Ocurrió un error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F3F4FF]">
      <HeaderEs />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="text-center">
              <img src="/logo.svg" alt="PDF.it" className="mx-auto mb-2 h-8 w-auto" />
              <CardTitle className="text-xl text-slate-800">Crea tu cuenta</CardTitle>
              <CardDescription className="text-slate-500">
                Obtén 10 conversiones gratis por día
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name" className="text-slate-700">Nombre <span className="text-red-500">*</span></Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="border-slate-200 focus-visible:ring-orange-500"
                    />
                  </div>
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
                    <Label htmlFor="password" className="text-slate-700">Contraseña</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-slate-200 focus-visible:ring-orange-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password" className="text-slate-700">Confirmar Contraseña</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border-slate-200 focus-visible:ring-orange-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
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
                    {isLoading ? "Creando cuenta..." : "Registrarse"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-slate-500">
                  {"¿Ya tienes una cuenta? "}
                  <Link
                    href="/es/login"
                    className="text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                  >
                    Inicia sesión
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <FooterEs />
    </div>
  )
}
