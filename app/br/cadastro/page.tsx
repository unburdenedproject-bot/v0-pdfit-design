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
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"

export default function SignUpPagePt() {
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
      setError("A autenticação não está configurada.")
      setIsLoading(false)
      return
    }

    if (!firstName.trim()) {
      setError("Por favor, digite seu nome")
      setIsLoading(false)
      return
    }

    if (!/^[\p{L}\s'\-]+$/u.test(firstName.trim())) {
      setError("O nome só pode conter letras")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem")
      setIsLoading(false)
      return
    }

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres")
      setIsLoading(false)
      return
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
      setError("A senha deve incluir maiúsculas, minúsculas, um número e um caractere especial.")
      setIsLoading(false)
      return
    }

    if (!captchaToken) {
      setError("Por favor, complete a verificação captcha")
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
            `${window.location.origin}/br/painel`,
          captchaToken: captchaToken ?? undefined,
          data: {
            full_name: firstName.trim(),
          },
        },
      })
      if (error) throw error

      if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
        setError("Já existe uma conta com este email. Faça login ou redefina sua senha.")
        setIsLoading(false)
        captchaRef.current?.resetCaptcha()
        return
      }

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

      router.push("/br/cadastro/sucesso")
      captchaRef.current?.resetCaptcha()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Ocorreu um erro")
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

      <HeaderBr />

      <main className="relative z-20 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card with metallic gradient border */}
          <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05), rgba(20,216,196,0.2), rgba(255,255,255,0.05))" }}>
            <div className="rounded-[15px] p-8" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
              {/* Logo & Title */}
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3"><img src="/logo.svg" alt="PDF.it" style={{height: '32px', width: 'auto', display: 'inline-block'}} /></div>
                <h1 className="text-xl font-bold text-white">Crie sua conta</h1>
                <p className="mt-1 text-sm text-slate-400">Receba 10 conversões grátis por dia</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name" className="text-slate-300">Nome <span className="text-red-400">*</span></Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Seu nome"
                      required
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-[#14D8C4] focus:border-[#14D8C4] focus-visible:ring-[#14D8C4]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@exemplo.com"
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
                    <Label htmlFor="password" className="text-slate-300">Senha</Label>
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
                        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password" className="text-slate-300">Confirmar Senha</Label>
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
                        aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                      onVerify={(token) => setCaptchaToken(token)}
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
                    className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? "Criando conta..." : "Cadastrar-se"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-slate-400">
                  {"Já tem uma conta? "}
                  <Link
                    href="/br/login"
                    className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium underline underline-offset-4 transition-colors"
                    >
                    Entrar
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Privacy note */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-xs text-slate-500">Seus arquivos nunca são armazenados. Criptografia SSL.</span>
          </div>

          {/* Trust points */}
          <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#14D8C4]" />
              <span className="text-xs text-slate-400">10 conversões grátis/dia</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#14D8C4]" />
              <span className="text-xs text-slate-400">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#14D8C4]" />
              <span className="text-xs text-slate-400">Arquivos excluídos após download</span>
            </div>
          </div>
        </div>
      </main>

      <FooterBr />
    </div>
  )
}
