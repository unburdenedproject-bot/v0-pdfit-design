"use client"

import { useState } from "react"
import { Mail, CheckCircle, Loader2, Info } from "lucide-react"

export function NewsletterSignup({ locale = "en" }: { locale?: "en" | "es" | "br" }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const copy = {
    en: {
      title: "Stay Updated",
      desc: "Get PDF tips, product updates, and best practices from the PDF.it team.",
      placeholder: "you@example.com",
      button: "Subscribe",
      sending: "Subscribing...",
      success: "You're subscribed! Check your inbox for updates.",
      privacy: "We respect your inbox. No spam, ever.",
    },
    es: {
      title: "Mantente al Día",
      desc: "Recibe consejos sobre PDF, actualizaciones del producto y mejores prácticas del equipo PDF.it.",
      placeholder: "tu@ejemplo.com",
      button: "Suscribirse",
      sending: "Suscribiendo...",
      success: "¡Estás suscrito! Revisa tu bandeja para actualizaciones.",
      privacy: "Respetamos tu bandeja. Sin spam, nunca.",
    },
    br: {
      title: "Fique por Dentro",
      desc: "Receba dicas de PDF, novidades do produto e boas praticas da equipe PDF.it.",
      placeholder: "voce@exemplo.com",
      button: "Inscrever-se",
      sending: "Inscrevendo...",
      success: "Voce esta inscrito! Confira sua caixa de entrada.",
      privacy: "Respeitamos sua caixa de entrada. Sem spam, nunca.",
    },
  }

  const t = copy[locale]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to subscribe")
      }

      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <CheckCircle className="h-10 w-10 text-[#14D8C4] mx-auto mb-3" />
        <h2 className="text-2xl font-black text-white mb-2">{t.title}</h2>
        <p className="text-[#14D8C4] font-semibold">{t.success}</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-black text-white mb-3">{t.title}</h2>
      <p className="text-slate-400 mb-6">{t.desc}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.placeholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14D8C4] focus:border-transparent text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-xl font-bold text-[#0E0F1E] bg-[#14D8C4] hover:bg-[#2EE6D6] transition-colors text-sm whitespace-nowrap disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <><Loader2 className="h-4 w-4 animate-spin" />{t.sending}</>
          ) : (
            t.button
          )}
        </button>
      </form>
      {status === "error" && (
        <div className="rounded-2xl p-4 mt-3 flex items-start gap-3" style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)", border: "1px solid #DBEAFE" }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
            <Info className="h-4 w-4 text-white" />
          </div>
          <p className="text-sm text-slate-700 leading-relaxed flex-1">{errorMsg}</p>
        </div>
      )}
      <p className="text-slate-500 text-sm mt-4">{t.privacy}</p>
    </div>
  )
}
