"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Loader2, Download, AlertCircle, Crown } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"

const localeLabels = {
  en: {
    gateTitle: "Pro Feature",
    gateDesc: "QR Code Generator is available on the Pro, Business, and Enterprise plans.",
    gateCta: "View Plans",
    gateBadge: "Most Popular",
    inputLabel: "Enter URL or text",
    inputPlaceholder: "https://example.com",
    generateBtn: "Generate QR Code",
    generating: "Generating...",
    downloadBtn: "Download QR Code",
    emptyError: "Please enter a URL or text to generate a QR code.",
    failError: "Failed to generate QR code",
    genericError: "Something went wrong. Please try again.",
    imgAlt: "Generated QR Code",
    fileName: "qrcode.png",
  },
  es: {
    gateTitle: "Función Pro",
    gateDesc: "El Generador de Código QR está disponible en los planes Pro, Business y Enterprise.",
    gateCta: "Ver Planes",
    gateBadge: "Más Popular",
    inputLabel: "Ingresa URL o texto",
    inputPlaceholder: "https://ejemplo.com",
    generateBtn: "Generar Código QR",
    generating: "Generando...",
    downloadBtn: "Descargar Código QR",
    emptyError: "Por favor ingresa una URL o texto para generar un código QR.",
    failError: "Error al generar el código QR",
    genericError: "Algo salió mal. Por favor intenta de nuevo.",
    imgAlt: "Código QR generado",
    fileName: "codigo-qr.png",
  },
  br: {
    gateTitle: "Função Pro",
    gateDesc: "O Gerador de Código QR está disponível nos planos Pro, Business e Enterprise.",
    gateCta: "Ver Planos",
    gateBadge: "Mais Popular",
    inputLabel: "Insira URL ou texto",
    inputPlaceholder: "https://exemplo.com",
    generateBtn: "Gerar Código QR",
    generating: "Gerando...",
    downloadBtn: "Baixar Código QR",
    emptyError: "Por favor, insira uma URL ou texto para gerar um código QR.",
    failError: "Erro ao gerar o código QR",
    genericError: "Algo deu errado. Por favor, tente novamente.",
    imgAlt: "Código QR gerado",
    fileName: "codigo-qr.png",
  },
}

export function QrCodeInterface() {
  const router = useRouter()
  const pathname = usePathname()
  const [userPlan, setUserPlan] = useState("loading")

  const locale = pathname.startsWith("/es") ? "es" : pathname.startsWith("/br") ? "br" : "en"
  const localePrefix = locale === "es" ? "/es" : locale === "br" ? "/br" : ""
  const pricingUrl = locale === "es" ? "/es/precios" : locale === "br" ? "/br/precos" : "/pricing"
  const labels = localeLabels[locale]

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const isPaidUser = userPlan === "pro" || userPlan === "business" || userPlan === "enterprise"

  const [text, setText] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = useCallback(async () => {
    // Runtime auth fallback
    const supabase = createClient()
    if (supabase) {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push(`${pricingUrl}?source=qr-code`)
        return
      }
      const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single()
      if (profile?.plan !== "pro" && profile?.plan !== "business" && profile?.plan !== "enterprise") {
        router.push(`${pricingUrl}?source=qr-code`)
        return
      }
    }

    const trimmed = text.trim()
    if (!trimmed) {
      setError(labels.emptyError)
      return
    }

    setIsLoading(true)
    setError(null)
    setImage(null)

    try {
      const res = await fetch("/api/qr-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || labels.failError)
      setImage(data.image)
    } catch (err) {
      setError(err instanceof Error ? err.message : labels.genericError)
    } finally {
      setIsLoading(false)
    }
  }, [text, labels, pricingUrl, router])

  const handleDownload = useCallback(() => {
    if (!image) return
    const link = document.createElement("a")
    link.href = image
    link.download = labels.fileName
    link.click()
  }, [image, labels])

  // Loading state
  if (userPlan === "loading") {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
          </div>
        </div>
      </section>
    )
  }

  // Pro pre-gate card
  if (!isPaidUser) {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(214,179,106,0.3), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>{labels.gateBadge}</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(214,179,106,0.25), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#E0C27A]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{labels.gateTitle}</h2>
                <p className="text-sm text-slate-400 mb-6">{labels.gateDesc}</p>
                <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{labels.gateCta}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Authorized generator UI
  return (
    <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), #0E0F1E" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
            <div className="rounded-[15px] p-8" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="qr-text" className="text-slate-200 font-medium">
                    {labels.inputLabel}
                  </Label>
                  <Input
                    id="qr-text"
                    type="text"
                    placeholder={labels.inputPlaceholder}
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value)
                      if (error) setError(null)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleGenerate()
                    }}
                    className="border-slate-600 bg-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#14D8C4]"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 text-base rounded-xl"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {labels.generating}
                    </>
                  ) : (
                    <>
                      <QrCode className="mr-2 h-4 w-4" />
                      {labels.generateBtn}
                    </>
                  )}
                </Button>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
              </div>

              {image && (
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="rounded-xl border border-white/10 p-4 bg-white shadow-sm">
                    <img
                      src={image}
                      alt={labels.imgAlt}
                      className="w-64 h-64"
                    />
                  </div>
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="border-slate-500 text-slate-200 hover:text-white hover:bg-white/10 font-medium"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {labels.downloadBtn}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
