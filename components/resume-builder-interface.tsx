"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Crown,
  FileText,
  Loader2,
  AlertTriangle,
  Sparkles,
  Info,
} from "lucide-react"
import { TrustBadges } from "@/components/trust-badges"

export function ResumeBuilderInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [isGenerating, setIsGenerating] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [userPlan, setUserPlan] = useState<string>("free")
  const [includeCoverLetter, setIncludeCoverLetter] = useState(false)
  const [info, setInfo] = useState({
    fullName: "", email: "", phone: "", location: "", linkedin: "",
    summary: "", experience: "", education: "", skills: "",
    certifications: "", languages: "", additional: "", jobTarget: "",
  })

  const localePrefix = pathname.startsWith("/es") ? "/es" : pathname.startsWith("/br") ? "/br" : ""
  const pricingUrl = localePrefix === "/es" ? "/es/precios" : localePrefix === "/br" ? "/br/precos" : "/pricing"

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const isPaidUser = userPlan === "pro" || userPlan === "business" || userPlan === "enterprise"

  const validateInfo = useCallback((): string | null => {
    if (!info.fullName.trim()) return "Please enter your full name."
    if (!info.email.trim()) return "Please enter your email address."
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(info.email.trim())) return "Please enter a valid email address."
    if (info.phone.trim()) {
      const digits = info.phone.replace(/[^\d]/g, "")
      if (digits.length < 7 || digits.length > 20 || !/^[\d\s().+\-]+$/.test(info.phone.trim())) {
        return "Please enter a valid phone number (digits, spaces, (), +, -)."
      }
    }
    if (!info.experience.trim()) return "Please add your work experience."
    if (!info.education.trim()) return "Please add your education."
    if (!info.skills.trim()) return "Please add your skills (or type 'No Skills' if none)."
    return null
  }, [info])

  const handleBuild = useCallback(async () => {
    const validationError = validateInfo()
    if (validationError) {
      setHasError(true)
      setErrorMessage(validationError)
      return
    }
    setIsGenerating(true)
    setHasError(false)

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "build",
          info,
          includeCoverLetter,
        }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        if (err.error?.includes("upgrade_required")) {
          router.push(pricingUrl)
          return
        }
        throw new Error(err.error || "Resume generation failed.")
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = includeCoverLetter ? "resume-and-cover-letter.docx" : "resume-new.docx"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
    } finally {
      setIsGenerating(false)
    }
  }, [info, includeCoverLetter, pricingUrl, router])

  const labels =
    localePrefix === "/es"
      ? {
          upgradeTitle: "Funcion Pro",
          upgradeDesc: "Crear Curriculum esta disponible en los planes Pro, Business y Enterprise.",
          upgradeBtn: "Ver Planes",
          generating: "Generando...",
          buildBtn: "Generar Mi Curriculum",
          coverLabel: "Incluir carta de presentacion",
          coverDesc: "La IA genera una carta de presentacion en la segunda pagina",
        }
      : localePrefix === "/br"
        ? {
            upgradeTitle: "Funcao Pro",
            upgradeDesc: "Criar Curriculo esta disponivel nos planos Pro, Business e Enterprise.",
            upgradeBtn: "Ver Planos",
            generating: "Gerando...",
            buildBtn: "Gerar Meu Curriculo",
            coverLabel: "Incluir carta de apresentacao",
            coverDesc: "A IA gera uma carta de apresentacao na segunda pagina",
          }
        : {
            upgradeTitle: "Pro Feature",
            upgradeDesc: "Create a Resume is available on the Pro, Business, and Enterprise plans.",
            upgradeBtn: "View Plans",
            generating: "Generating...",
            buildBtn: "Generate My Resume",
            coverLabel: "Include a cover letter",
            coverDesc: "AI generates a matching cover letter on the second page",
          }

  if (!isPaidUser) {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(214,179,106,0.5), rgba(20,216,196,0.3), rgba(214,179,106,0.3), rgba(107,124,255,0.2), rgba(214,179,106,0.4))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(214,179,106,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 1px 1px rgba(214,179,106,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>Most Popular</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(214,179,106,0.25), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#E0C27A]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{labels.upgradeTitle}</h2>
                <p className="text-sm text-slate-400 mb-6">{labels.upgradeDesc}</p>
                <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{labels.upgradeBtn}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Full Name *</label>
                  <input type="text" value={info.fullName} onChange={(e) => setInfo({ ...info, fullName: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Email *</label>
                  <input type="email" required value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Phone</label>
                  <input type="tel" inputMode="tel" pattern="[\d\s().+\-]{7,20}" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Location</label>
                  <input type="text" value={info.location} onChange={(e) => setInfo({ ...info, location: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="City, State" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">LinkedIn URL</label>
                  <input type="url" value={info.linkedin} onChange={(e) => setInfo({ ...info, linkedin: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="linkedin.com/in/yourname" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Target Job Title</label>
                  <input type="text" value={info.jobTarget} onChange={(e) => setInfo({ ...info, jobTarget: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="Software Engineer" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Professional Summary</label>
                <textarea value={info.summary} onChange={(e) => setInfo({ ...info, summary: e.target.value })} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="Brief overview of your career and goals (or leave blank for AI to generate)" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Work Experience *</label>
                <textarea value={info.experience} onChange={(e) => setInfo({ ...info, experience: e.target.value })} rows={6} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder={"Job Title — Company Name (2020–Present)\n- Managed team of 5 engineers\n- Increased revenue by 30%\n\nPrevious Job — Company (2018–2020)\n- Key achievement here"} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Education *</label>
                <textarea value={info.education} onChange={(e) => setInfo({ ...info, education: e.target.value })} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder={"Bachelor of Science in Computer Science\nUniversity Name — 2018"} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Skills *</label>
                <textarea value={info.skills} onChange={(e) => setInfo({ ...info, skills: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="JavaScript, Python, Project Management, Data Analysis, Excel..." />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Certifications</label>
                  <textarea value={info.certifications} onChange={(e) => setInfo({ ...info, certifications: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="PMP, AWS Certified, etc." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Languages</label>
                  <textarea value={info.languages} onChange={(e) => setInfo({ ...info, languages: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="English (native), Spanish (fluent)" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Additional Information</label>
                <textarea value={info.additional} onChange={(e) => setInfo({ ...info, additional: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="Volunteer work, publications, awards..." />
              </div>

              {/* Cover letter */}
              <label className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl cursor-pointer">
                <input type="checkbox" checked={includeCoverLetter} onChange={(e) => setIncludeCoverLetter(e.target.checked)} className="w-4 h-4 rounded text-emerald-600" />
                <div>
                  <span className="text-sm font-bold text-emerald-800">{labels.coverLabel}</span>
                  <p className="text-xs text-emerald-600">{labels.coverDesc}</p>
                </div>
              </label>

              {hasError && (
                <div className="rounded-2xl p-4 flex items-start gap-3" style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)", border: "1px solid #DBEAFE" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                    <Info className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed flex-1">{errorMessage}</p>
                </div>
              )}

              <Button onClick={handleBuild} className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 rounded-xl text-lg" disabled={isGenerating || !info.fullName.trim() || !info.email.trim() || !info.experience.trim() || !info.education.trim() || !info.skills.trim()}>
                {isGenerating ? <Loader2 className="h-5 w-5 mr-2 animate-spin" /> : <Sparkles className="h-5 w-5 mr-2" />}
                {isGenerating ? labels.generating : labels.buildBtn}
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  )
}
