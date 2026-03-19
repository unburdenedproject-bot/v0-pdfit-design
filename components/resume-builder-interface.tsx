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

  const handleBuild = useCallback(async () => {
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="h-7 w-7 text-orange-500" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">{labels.upgradeTitle}</h2>
              <p className="text-sm text-slate-500 mb-6">{labels.upgradeDesc}</p>
              <Button onClick={() => router.push(pricingUrl)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl">
                {labels.upgradeBtn}
              </Button>
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
                  <input type="email" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Phone</label>
                  <input type="tel" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="+1 (555) 123-4567" />
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
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              )}

              <Button onClick={handleBuild} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-lg" disabled={isGenerating || !info.fullName || !info.experience}>
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
