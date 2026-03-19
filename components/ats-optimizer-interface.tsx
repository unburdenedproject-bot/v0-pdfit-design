"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Crown,
  FileText,
  Loader2,
  Upload,
  X,
  AlertTriangle,
  Target,
  TrendingUp,
  AlertCircle,
  Sparkles,
  FilePlus,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { TrustBadges } from "@/components/trust-badges"

interface SectionScore {
  score: number
  feedback: string
}

interface ATSAnalysis {
  score: number
  summary: string
  sections: {
    contact_info: SectionScore
    formatting: SectionScore
    keywords: SectionScore
    experience: SectionScore
    education: SectionScore
    skills: SectionScore
  }
  improvements: string[]
  missing_keywords: string[]
}

function ScoreCircle({ score }: { score: number }) {
  const color =
    score >= 90 ? "text-green-600" :
    score >= 70 ? "text-blue-600" :
    score >= 50 ? "text-amber-500" :
    "text-red-500"
  const bgColor =
    score >= 90 ? "bg-green-50 border-green-200" :
    score >= 70 ? "bg-blue-50 border-blue-200" :
    score >= 50 ? "bg-amber-50 border-amber-200" :
    "bg-red-50 border-red-200"

  return (
    <div className={cn("w-32 h-32 rounded-full border-4 flex items-center justify-center mx-auto", bgColor)}>
      <div className="text-center">
        <div className={cn("text-4xl font-black", color)}>{score}</div>
        <div className="text-xs text-slate-500 font-semibold">/ 100</div>
      </div>
    </div>
  )
}

function SectionBar({ name, section }: { name: string; section: SectionScore }) {
  const barColor =
    section.score >= 80 ? "bg-green-500" :
    section.score >= 60 ? "bg-blue-500" :
    section.score >= 40 ? "bg-amber-500" :
    "bg-red-500"

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-slate-700">{name}</span>
        <span className="text-sm font-bold text-slate-900">{section.score}/100</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2 mb-1.5">
        <div className={cn("h-2 rounded-full transition-all", barColor)} style={{ width: `${section.score}%` }} />
      </div>
      <p className="text-xs text-slate-500">{section.feedback}</p>
    </div>
  )
}

export function AtsOptimizerInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [file, setFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState("")
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [analysis, setAnalysis] = useState<ATSAnalysis | null>(null)
  const [userPlan, setUserPlan] = useState<string>("free")
  const [resumeText, setResumeText] = useState("")
  const [showBuildForm, setShowBuildForm] = useState(false)
  const [showFixForm, setShowFixForm] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [fixExtras, setFixExtras] = useState({
    addExperience: "", addEducation: "", addSkills: "",
    addCertifications: "", addLanguages: "", addOther: "",
  })
  const [buildInfo, setBuildInfo] = useState({
    fullName: "", email: "", phone: "", location: "", linkedin: "",
    summary: "", experience: "", education: "", skills: "",
    certifications: "", languages: "", additional: "", jobTarget: "",
  })

  const localePrefix = pathname.startsWith("/es")
    ? "/es"
    : pathname.startsWith("/br")
      ? "/br"
      : ""
  const pricingUrl =
    localePrefix === "/es"
      ? "/es/precios"
      : localePrefix === "/br"
        ? "/br/precos"
        : "/pricing"

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const isPaidUser =
    userPlan === "pro" || userPlan === "business" || userPlan === "enterprise"

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
      setHasError(false)
      setAnalysis(null)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setHasError(false)
      setAnalysis(null)
    }
  }, [])

  const handleAnalyze = useCallback(async () => {
    if (!file) return

    setIsProcessing(true)
    setHasError(false)

    let blobUrl: string | null = null

    try {
      blobUrl = await uploadFileToBlob(file)

      const response = await fetch("/api/ats-optimizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl,
          jobDescription: jobDescription.trim(),
        }),
      })

      if (!response.ok) {
        let message = `Analysis failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required")) {
            router.push(pricingUrl)
            return
          }
        } catch {}
        throw new Error(message)
      }

      const data = await response.json()
      setAnalysis(data)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
    } finally {
      setIsProcessing(false)
      if (blobUrl) deleteBlobUrl(blobUrl)
    }
  }, [file, jobDescription, pricingUrl, router])

  const handleReset = useCallback(() => {
    setFile(null)
    setJobDescription("")
    setIsProcessing(false)
    setHasError(false)
    setErrorMessage("")
    setAnalysis(null)
    setShowBuildForm(false)
    setShowFixForm(false)
    setResumeText("")
    setFixExtras({ addExperience: "", addEducation: "", addSkills: "", addCertifications: "", addLanguages: "", addOther: "" })
  }, [])

  const handleFixResume = useCallback(() => {
    setShowFixForm(true)
    setHasError(false)
  }, [])

  const handleSubmitFix = useCallback(async () => {
    if (!file) return
    setIsGenerating(true)
    setHasError(false)

    try {
      const feedbackSummary = analysis
        ? `Score: ${analysis.score}/100. ${analysis.summary}. Improvements needed: ${analysis.improvements.join(". ")}. Missing keywords: ${analysis.missing_keywords.join(", ")}.`
        : ""

      const blobUrl2 = await uploadFileToBlob(file)

      const txtRes = await fetch("/api/pdf-to-txt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blobUrl: blobUrl2 }),
      })

      let extractedText = ""
      if (txtRes.ok) {
        const txtBlob = await txtRes.blob()
        extractedText = await txtBlob.text()
      }

      if (!extractedText || extractedText.length < 30) {
        throw new Error("Could not extract text from the resume for rewriting.")
      }

      // Append extra info the user wants to add
      const extras = []
      if (fixExtras.addExperience.trim()) extras.push(`ADDITIONAL EXPERIENCE:\n${fixExtras.addExperience}`)
      if (fixExtras.addEducation.trim()) extras.push(`ADDITIONAL EDUCATION:\n${fixExtras.addEducation}`)
      if (fixExtras.addSkills.trim()) extras.push(`ADDITIONAL SKILLS:\n${fixExtras.addSkills}`)
      if (fixExtras.addCertifications.trim()) extras.push(`ADDITIONAL CERTIFICATIONS:\n${fixExtras.addCertifications}`)
      if (fixExtras.addLanguages.trim()) extras.push(`ADDITIONAL LANGUAGES:\n${fixExtras.addLanguages}`)
      if (fixExtras.addOther.trim()) extras.push(`ADDITIONAL INFORMATION:\n${fixExtras.addOther}`)

      const extraText = extras.length > 0
        ? `\n\nThe candidate wants to ADD the following information to their resume:\n${extras.join("\n\n")}`
        : ""

      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "rewrite",
          resumeText: extractedText + extraText,
          jobDescription: jobDescription.trim(),
          analysisFeedback: feedbackSummary,
        }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.error || "Resume generation failed.")
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "resume-optimized.pdf"
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
  }, [file, analysis, jobDescription, fixExtras])

  const handleBuildResume = useCallback(async () => {
    setIsGenerating(true)
    setHasError(false)

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "build",
          info: buildInfo,
        }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.error || "Resume generation failed.")
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "resume-new.pdf"
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
  }, [buildInfo])

  const labels =
    localePrefix === "/es"
      ? {
          uploadTitle: "Sube tu curriculum",
          uploadDesc: "Arrastra y suelta tu curriculum en PDF, o haz clic para seleccionar",
          browse: "Seleccionar archivo",
          jobLabel: "Descripcion del puesto (opcional)",
          jobPlaceholder: "Pega la descripcion del puesto para un analisis personalizado de palabras clave...",
          analyze: "Analizar Curriculum",
          analyzing: "Analizando con IA...",
          analyzeAnother: "Analizar otro",
          fixResume: "Arreglar Mi Curriculum con IA",
          buildResume: "Crear Curriculum Nuevo",
          generating: "Generando...",
          buildFormTitle: "Crear Curriculum Nuevo desde Cero",
          upgradeTitle: "Funcion Pro",
          upgradeDesc: "El Optimizador ATS esta disponible en los planes Pro, Business y Enterprise.",
          upgradeBtn: "Ver Planes",
          scoreLabel: "Puntuacion ATS",
          improvements: "Mejoras Recomendadas",
          missingKeywords: "Palabras Clave Faltantes",
          sections: { contact_info: "Informacion de Contacto", formatting: "Formato", keywords: "Palabras Clave", experience: "Experiencia", education: "Educacion", skills: "Habilidades" },
        }
      : localePrefix === "/br"
        ? {
            uploadTitle: "Envie seu curriculo",
            uploadDesc: "Arraste e solte seu curriculo em PDF, ou clique para selecionar",
            browse: "Selecionar arquivo",
            jobLabel: "Descricao da vaga (opcional)",
            jobPlaceholder: "Cole a descricao da vaga para uma analise personalizada de palavras-chave...",
            analyze: "Analisar Curriculo",
            analyzing: "Analisando com IA...",
            analyzeAnother: "Analisar outro",
            fixResume: "Corrigir Meu Curriculo com IA",
            buildResume: "Criar Curriculo Novo",
            generating: "Gerando...",
            buildFormTitle: "Criar Curriculo Novo do Zero",
            upgradeTitle: "Funcao Pro",
            upgradeDesc: "O Otimizador ATS esta disponivel nos planos Pro, Business e Enterprise.",
            upgradeBtn: "Ver Planos",
            scoreLabel: "Pontuacao ATS",
            improvements: "Melhorias Recomendadas",
            missingKeywords: "Palavras-Chave Faltantes",
            sections: { contact_info: "Informacoes de Contato", formatting: "Formatacao", keywords: "Palavras-Chave", experience: "Experiencia", education: "Educacao", skills: "Habilidades" },
          }
        : {
            uploadTitle: "Upload your resume",
            uploadDesc: "Drag and drop your resume PDF, or click to browse",
            browse: "Browse files",
            jobLabel: "Job description (optional)",
            jobPlaceholder: "Paste the job description for tailored keyword analysis...",
            analyze: "Analyze Resume",
            analyzing: "Analyzing with AI...",
            analyzeAnother: "Analyze another",
            fixResume: "Fix My Resume with AI",
            buildResume: "Build New Resume",
            generating: "Generating...",
            buildFormTitle: "Build a New Resume from Scratch",
            upgradeTitle: "Pro Feature",
            upgradeDesc: "The ATS Optimizer is available on the Pro, Business, and Enterprise plans.",
            upgradeBtn: "View Plans",
            scoreLabel: "ATS Score",
            improvements: "Recommended Improvements",
            missingKeywords: "Missing Keywords",
            sections: { contact_info: "Contact Info", formatting: "Formatting", keywords: "Keywords", experience: "Experience", education: "Education", skills: "Skills" },
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

  // Results view
  if (analysis) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Score */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6 text-center">
              <h2 className="text-lg font-bold text-slate-700 mb-4">{labels.scoreLabel}</h2>
              <ScoreCircle score={analysis.score} />
              <p className="text-slate-600 mt-4 max-w-lg mx-auto">{analysis.summary}</p>
            </div>

            {/* Section Scores */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
              <SectionBar name={labels.sections.contact_info} section={analysis.sections.contact_info} />
              <SectionBar name={labels.sections.formatting} section={analysis.sections.formatting} />
              <SectionBar name={labels.sections.keywords} section={analysis.sections.keywords} />
              <SectionBar name={labels.sections.experience} section={analysis.sections.experience} />
              <SectionBar name={labels.sections.education} section={analysis.sections.education} />
              <SectionBar name={labels.sections.skills} section={analysis.sections.skills} />
            </div>

            {/* Improvements */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                {labels.improvements}
              </h3>
              <ul className="space-y-3">
                {analysis.improvements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">{i + 1}</span>
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Missing Keywords */}
            {analysis.missing_keywords.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  {labels.missingKeywords}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.missing_keywords.map((kw, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-200">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            {isGenerating ? (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
                <Loader2 className="h-8 w-8 text-orange-500 animate-spin mx-auto mb-3" />
                <p className="text-slate-700 font-medium">{labels.generating}</p>
              </div>
            ) : showFixForm ? (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h3 className="text-xl font-black text-slate-900 mb-2">{labels.fixResume}</h3>
                <p className="text-sm text-slate-500 mb-6">Your uploaded resume will be rewritten by AI. Add any missing information below — leave blank if nothing to add.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Add Experience</label>
                    <textarea value={fixExtras.addExperience} onChange={(e) => setFixExtras({ ...fixExtras, addExperience: e.target.value })} rows={4} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder={"New Job Title — Company (2024–Present)\n- Key achievement\n- Another achievement"} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Add Education</label>
                    <textarea value={fixExtras.addEducation} onChange={(e) => setFixExtras({ ...fixExtras, addEducation: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="Master of Business Administration — University Name, 2024" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Add Skills</label>
                    <textarea value={fixExtras.addSkills} onChange={(e) => setFixExtras({ ...fixExtras, addSkills: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="Python, Data Analysis, Tableau, SQL..." />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Add Certifications</label>
                      <textarea value={fixExtras.addCertifications} onChange={(e) => setFixExtras({ ...fixExtras, addCertifications: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="PMP, AWS Certified, etc." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Add Languages</label>
                      <textarea value={fixExtras.addLanguages} onChange={(e) => setFixExtras({ ...fixExtras, addLanguages: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="French (conversational), German (basic)" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Anything Else to Add</label>
                    <textarea value={fixExtras.addOther} onChange={(e) => setFixExtras({ ...fixExtras, addOther: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="Volunteer work, publications, awards..." />
                  </div>

                  {hasError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={handleSubmitFix} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl" disabled={isGenerating}>
                      {isGenerating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
                      {isGenerating ? labels.generating : labels.fixResume}
                    </Button>
                    <Button onClick={() => setShowFixForm(false)} variant="outline" className="font-bold py-3 px-6 rounded-xl">
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            ) : !showBuildForm ? (
              <div className="space-y-4">
                {hasError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button onClick={handleFixResume} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl" disabled={isGenerating}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    {labels.fixResume}
                  </Button>
                  <Button onClick={() => setShowBuildForm(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl">
                    <FilePlus className="h-4 w-4 mr-2" />
                    {labels.buildResume}
                  </Button>
                </div>
                <div className="text-center">
                  <Button onClick={handleReset} variant="outline" className="font-bold px-8 py-3 rounded-xl">
                    {labels.analyzeAnother}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h3 className="text-xl font-black text-slate-900 mb-6">{labels.buildFormTitle}</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Full Name *</label>
                      <input type="text" value={buildInfo.fullName} onChange={(e) => setBuildInfo({ ...buildInfo, fullName: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Email *</label>
                      <input type="email" value={buildInfo.email} onChange={(e) => setBuildInfo({ ...buildInfo, email: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Phone</label>
                      <input type="tel" value={buildInfo.phone} onChange={(e) => setBuildInfo({ ...buildInfo, phone: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Location</label>
                      <input type="text" value={buildInfo.location} onChange={(e) => setBuildInfo({ ...buildInfo, location: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="City, State" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">LinkedIn URL</label>
                      <input type="url" value={buildInfo.linkedin} onChange={(e) => setBuildInfo({ ...buildInfo, linkedin: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="linkedin.com/in/yourname" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Target Job Title</label>
                      <input type="text" value={buildInfo.jobTarget} onChange={(e) => setBuildInfo({ ...buildInfo, jobTarget: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="Software Engineer" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Professional Summary</label>
                    <textarea value={buildInfo.summary} onChange={(e) => setBuildInfo({ ...buildInfo, summary: e.target.value })} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="Brief overview of your career and goals (or leave blank for AI to generate)" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Work Experience *</label>
                    <textarea value={buildInfo.experience} onChange={(e) => setBuildInfo({ ...buildInfo, experience: e.target.value })} rows={6} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder={"Job Title — Company Name (2020–Present)\n- Managed team of 5 engineers\n- Increased revenue by 30%\n\nPrevious Job — Company (2018–2020)\n- Key achievement here"} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Education *</label>
                    <textarea value={buildInfo.education} onChange={(e) => setBuildInfo({ ...buildInfo, education: e.target.value })} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder={"Bachelor of Science in Computer Science\nUniversity Name — 2018"} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Skills *</label>
                    <textarea value={buildInfo.skills} onChange={(e) => setBuildInfo({ ...buildInfo, skills: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="JavaScript, Python, Project Management, Data Analysis, Excel..." />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Certifications</label>
                      <textarea value={buildInfo.certifications} onChange={(e) => setBuildInfo({ ...buildInfo, certifications: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="PMP, AWS Certified, etc." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Languages</label>
                      <textarea value={buildInfo.languages} onChange={(e) => setBuildInfo({ ...buildInfo, languages: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="English (native), Spanish (fluent)" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Additional Information</label>
                    <textarea value={buildInfo.additional} onChange={(e) => setBuildInfo({ ...buildInfo, additional: e.target.value })} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-vertical" placeholder="Volunteer work, publications, awards..." />
                  </div>

                  {hasError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={handleBuildResume} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl" disabled={isGenerating || !buildInfo.fullName || !buildInfo.experience}>
                      {isGenerating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <FileText className="h-4 w-4 mr-2" />}
                      {isGenerating ? labels.generating : labels.buildResume}
                    </Button>
                    <Button onClick={() => setShowBuildForm(false)} variant="outline" className="font-bold py-3 px-6 rounded-xl">
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            )}
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
            {/* Upload area */}
            {!file ? (
              <div
                className={cn(
                  "border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer",
                  isDragOver ? "border-orange-400 bg-orange-50" : "border-slate-300 hover:border-orange-300 hover:bg-slate-50"
                )}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("ats-file-input")?.click()}
              >
                <input id="ats-file-input" type="file" accept="application/pdf" className="hidden" onChange={handleFileSelect} />
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">{labels.uploadTitle}</h3>
                <p className="text-sm text-slate-500 mb-4">{labels.uploadDesc}</p>
                <Button variant="outline" className="font-semibold" onClick={(e) => { e.stopPropagation(); document.getElementById("ats-file-input")?.click() }}>
                  {labels.browse}
                </Button>
              </div>
            ) : (
              <div>
                {/* File info */}
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">{file.name}</p>
                      <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  {!isProcessing && (
                    <button onClick={handleReset} className="text-slate-400 hover:text-slate-600 transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Job description */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-700 mb-2">{labels.jobLabel}</label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder={labels.jobPlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-slate-800 text-sm resize-vertical"
                  />
                </div>

                {/* Error */}
                {hasError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* Processing */}
                {isProcessing && (
                  <div className="mb-6 flex items-center gap-3">
                    <Loader2 className="h-5 w-5 text-orange-500 animate-spin" />
                    <span className="text-sm font-medium text-slate-700">{labels.analyzing}</span>
                  </div>
                )}

                {/* Analyze button */}
                {!isProcessing && (
                  <Button onClick={handleAnalyze} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-lg" disabled={isProcessing}>
                    <Target className="h-5 w-5 mr-2" />
                    {labels.analyze}
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  )
}
