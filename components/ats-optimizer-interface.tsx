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
import { validateClientFile, getSizeLimitLabel } from "@/lib/client-file-validator"
import { TrustBadges } from "@/components/trust-badges"

interface SectionScore {
  score: number
  feedback: string
}

interface FormatRisk {
  severity: string
  issue: string
}

interface ParsingRisk extends FormatRisk {
  type: string
  fix: string
}

interface BulletFeedback {
  original: string
  problem: string
  improved: string
}

interface RewriteSuggestion {
  section: string
  original: string
  improved: string
}

interface SectionImprovement {
  section: string
  priority: string
  issue: string
  fix: string
}

interface ScoreBreakdown {
  formatting: number
  keyword_match: number
  experience_quality: number
  section_completeness: number
  parsing_clarity: number
}

interface KeywordAnalysis {
  matched: string[]
  missing: string[]
  partial: string[]
}

interface ATSAnalysis {
  version?: string
  job_description_provided?: boolean
  score: number
  summary: string
  score_breakdown?: ScoreBreakdown
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
  matched_keywords?: string[]
  keyword_analysis?: KeywordAnalysis
  parsing_risks?: ParsingRisk[]
  format_risks?: FormatRisk[]
  bullet_feedback?: BulletFeedback[]
  rewrite_suggestions?: RewriteSuggestion[]
  section_improvements?: SectionImprovement[]
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

const defaultScoreBreakdown: ScoreBreakdown = {
  formatting: 0,
  keyword_match: 0,
  experience_quality: 0,
  section_completeness: 0,
  parsing_clarity: 0,
}

export function AtsOptimizerInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [file, setFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState("")
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isInvalidResume, setIsInvalidResume] = useState(false)
  const [analysis, setAnalysis] = useState<ATSAnalysis | null>(null)
  const [userPlan, setUserPlan] = useState<string>("free")
  const [resumeText, setResumeText] = useState("")
  const [showBuildForm, setShowBuildForm] = useState(false)
  const [showFixForm, setShowFixForm] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [includeCoverLetter, setIncludeCoverLetter] = useState(false)
  const [selectedImprovements, setSelectedImprovements] = useState<string[]>([])
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
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

  const acceptFile = useCallback(async (selected: File | undefined) => {
    if (!selected) return
    if (selected.type && selected.type !== "application/pdf" && !selected.name.toLowerCase().endsWith(".pdf")) {
      setHasError(true)
      setErrorMessage("Please upload a PDF resume.")
      setFile(null)
      setAnalysis(null)
      return
    }
    const result = await validateClientFile(selected, userPlan)
    if (!result.ok) {
      setHasError(true)
      setErrorMessage(result.error || "This file cannot be used.")
      setFile(null)
      setAnalysis(null)
      return
    }
    setFile(selected)
    setHasError(false)
    setErrorMessage("")
    setIsInvalidResume(false)
    setAnalysis(null)
  }, [userPlan])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    acceptFile(e.dataTransfer.files[0])
  }, [acceptFile])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    acceptFile(e.target.files?.[0])
  }, [acceptFile])

  const handleAnalyze = useCallback(async () => {
    if (!file) return

    setIsProcessing(true)
    setProgress(5)
    setHasError(false)

    let blobUrl: string | null = null
    let progressTimer: ReturnType<typeof setInterval> | null = null

    try {
      setProgress(15)
      blobUrl = await uploadFileToBlob(file)
      setProgress(40)

      // Simulate gradual progress during the long AI call (maxDuration 300s)
      progressTimer = setInterval(() => {
        setProgress((p) => (p < 90 ? p + 2 : p))
      }, 1500)

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
        if (response.status === 422) {
          setIsInvalidResume(true)
          setErrorMessage(message)
          return
        }
        throw new Error(message)
      }

      const data = await response.json()
      setAnalysis(data)
      // Auto-select all improvements and keywords
      setSelectedImprovements(data.improvements || [])
      setSelectedKeywords(data.missing_keywords || [])
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
    } finally {
      if (progressTimer) clearInterval(progressTimer)
      setProgress(100)
      setIsProcessing(false)
      if (blobUrl) deleteBlobUrl(blobUrl)
    }
  }, [file, jobDescription, pricingUrl, router])

  const handleReset = useCallback(() => {
    setFile(null)
    setJobDescription("")
    setIsProcessing(false)
    setProgress(0)
    setHasError(false)
    setErrorMessage("")
    setIsInvalidResume(false)
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
          selectedImprovements,
          selectedKeywords,
          includeCoverLetter,
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
      link.download = includeCoverLetter ? "resume-and-cover-letter.docx" : "resume-optimized.docx"
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
  }, [file, analysis, jobDescription, fixExtras, includeCoverLetter, selectedImprovements, selectedKeywords])

  const handleBuildResume = useCallback(async () => {
    // Frontend validation (matches server rules)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!buildInfo.fullName.trim())  { setHasError(true); setErrorMessage("Please enter your full name."); return }
    if (!buildInfo.email.trim())     { setHasError(true); setErrorMessage("Please enter your email address."); return }
    if (!emailPattern.test(buildInfo.email.trim())) { setHasError(true); setErrorMessage("Please enter a valid email address."); return }
    if (buildInfo.phone.trim()) {
      const digits = buildInfo.phone.replace(/[^\d]/g, "")
      if (digits.length < 7 || digits.length > 20 || !/^[\d\s().+\-]+$/.test(buildInfo.phone.trim())) {
        setHasError(true); setErrorMessage("Please enter a valid phone number (digits, spaces, (), +, -)."); return
      }
    }
    if (!buildInfo.experience.trim()) { setHasError(true); setErrorMessage("Please add your work experience."); return }
    if (!buildInfo.education.trim())  { setHasError(true); setErrorMessage("Please add your education."); return }
    if (!buildInfo.skills.trim())     { setHasError(true); setErrorMessage("Please add your skills (or type 'No Skills' if none)."); return }

    setIsGenerating(true)
    setHasError(false)

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "build",
          info: buildInfo,
          includeCoverLetter,
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
  }, [buildInfo, includeCoverLetter])

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
          matchedKeywords: "Palabras Clave Encontradas",
          partialKeywords: "Coincidencias Parciales",
          scoreBreakdown: "Desglose de Puntuacion",
          sectionImprovements: "Mejoras por Seccion",
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
            matchedKeywords: "Palavras-Chave Encontradas",
            partialKeywords: "Correspondencias Parciais",
            scoreBreakdown: "Detalhamento da Pontuacao",
            sectionImprovements: "Melhorias por Secao",
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
            matchedKeywords: "Keywords Found in Your Resume",
            partialKeywords: "Partial Matches",
            scoreBreakdown: "Score Breakdown",
            sectionImprovements: "Section-Level Improvements",
            sections: { contact_info: "Contact Info", formatting: "Formatting", keywords: "Keywords", experience: "Experience", education: "Education", skills: "Skills" },
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

  // Results view
  if (analysis) {
    const keywordAnalysis = analysis.keyword_analysis ?? {
      matched: analysis.matched_keywords ?? [],
      missing: analysis.missing_keywords,
      partial: [],
    }
    const scoreBreakdown = analysis.score_breakdown ?? defaultScoreBreakdown
    const displayFormatRisks = analysis.parsing_risks?.length
      ? analysis.parsing_risks
      : (analysis.format_risks ?? [])

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Score */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6 text-center">
              <h2 className="text-lg font-bold text-slate-700 mb-4">{labels.scoreLabel}</h2>
              <ScoreCircle score={analysis.score} />
              <p className="text-slate-600 mt-4 max-w-lg mx-auto">{analysis.summary}</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {[
                  { label: "Formatting", value: scoreBreakdown.formatting },
                  { label: "Keyword Match", value: scoreBreakdown.keyword_match },
                  { label: "Experience Quality", value: scoreBreakdown.experience_quality },
                  { label: "Section Completeness", value: scoreBreakdown.section_completeness },
                  { label: "Parsing Clarity", value: scoreBreakdown.parsing_clarity },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">{item.label}</span>
                    <span className="text-sm font-bold text-slate-900">{item.value}/100</span>
                  </div>
                ))}
              </div>
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

            {/* Improvements — selectable */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#14D8C4]" />
                {labels.improvements}
              </h3>
              <p className="text-xs text-slate-400 mb-4">Click to select which improvements the AI should apply when fixing your resume.</p>
              <ul className="space-y-2">
                {analysis.improvements.map((item, i) => {
                  const isSelected = selectedImprovements.includes(item)
                  return (
                    <li key={i}
                      onClick={() => setSelectedImprovements(prev => isSelected ? prev.filter(s => s !== item) : [...prev, item])}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all border",
                        isSelected ? "bg-[#F0FDFA] border-[#14D8C4]/30" : "bg-slate-50 border-slate-200 opacity-60"
                      )}
                    >
                      <div className={cn("w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5", isSelected ? "bg-[#14D8C4]" : "bg-slate-300")}>
                        {isSelected && <CheckCircle className="h-3.5 w-3.5 text-white" />}
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Missing Keywords — selectable */}
            {keywordAnalysis.missing.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  {labels.missingKeywords}
                </h3>
                <p className="text-xs text-slate-400 mb-4">Click to select which keywords the AI should add to your resume.</p>
                <div className="flex flex-wrap gap-2">
                  {keywordAnalysis.missing.map((kw, i) => {
                    const isSelected = selectedKeywords.includes(kw)
                    return (
                      <button key={i}
                        onClick={() => setSelectedKeywords(prev => isSelected ? prev.filter(s => s !== kw) : [...prev, kw])}
                        className={cn(
                          "text-sm font-medium px-3 py-1.5 rounded-full border transition-all",
                          isSelected ? "bg-blue-100 text-blue-700 border-blue-300" : "bg-slate-100 text-slate-400 border-slate-200"
                        )}
                      >
                        {kw}
                      </button>
                    )
                  })}
                </div>
                {keywordAnalysis.partial.length > 0 && (
                  <div className="mt-5">
                    <h4 className="text-sm font-bold text-slate-800 mb-2">{labels.partialKeywords}</h4>
                    <div className="flex flex-wrap gap-2">
                      {keywordAnalysis.partial.map((kw, i) => (
                        <span key={i} className="bg-amber-50 text-amber-700 text-sm font-medium px-3 py-1.5 rounded-full border border-amber-200">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Matched Keywords */}
            {keywordAnalysis.matched.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  {labels.matchedKeywords}
                </h3>
                <p className="text-xs text-slate-400 mb-4">These keywords from the job description were found in your resume.</p>
                <div className="flex flex-wrap gap-2">
                  {keywordAnalysis.matched.map((kw, i) => (
                    <span key={i} className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full border border-green-200">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Format Risks */}
            {displayFormatRisks.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Formatting Risks
                </h3>
                <div className="space-y-3">
                  {displayFormatRisks.map((risk, i) => (
                    <div key={i} className={cn(
                      "p-4 rounded-xl border flex items-start gap-3",
                      risk.severity === "high" ? "bg-red-50 border-red-200" : risk.severity === "medium" ? "bg-amber-50 border-amber-200" : "bg-slate-50 border-slate-200"
                    )}>
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase flex-shrink-0 mt-0.5",
                        risk.severity === "high" ? "bg-red-200 text-red-700" : risk.severity === "medium" ? "bg-amber-200 text-amber-700" : "bg-slate-200 text-slate-600"
                      )}>{risk.severity}</span>
                      <div>
                        <p className="text-sm text-slate-700">{risk.issue}</p>
                        {"fix" in risk && typeof risk.fix === "string" && risk.fix && (
                          <p className="text-xs text-slate-500 mt-1">{risk.fix}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section Improvements */}
            {analysis.section_improvements && analysis.section_improvements.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-[#14D8C4]" />
                  {labels.sectionImprovements}
                </h3>
                <div className="space-y-3">
                  {analysis.section_improvements.map((item, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase text-slate-500">{item.section}</span>
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase",
                          item.priority === "high" ? "bg-red-100 text-red-700" : item.priority === "medium" ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-600"
                        )}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700">{item.issue}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.fix}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bullet Feedback */}
            {analysis.bullet_feedback && analysis.bullet_feedback.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-500" />
                  Weak Bullets — Before & After
                </h3>
                <div className="space-y-4">
                  {analysis.bullet_feedback.map((bf, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-red-50 px-4 py-3 border-b border-slate-200">
                        <div className="text-xs font-bold text-red-600 mb-1">Original</div>
                        <p className="text-sm text-slate-700">{bf.original}</p>
                        <p className="text-xs text-red-500 mt-1">{bf.problem}</p>
                      </div>
                      <div className="bg-green-50 px-4 py-3">
                        <div className="text-xs font-bold text-green-600 mb-1">Improved</div>
                        <p className="text-sm text-slate-700">{bf.improved}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rewrite Suggestions */}
            {analysis.rewrite_suggestions && analysis.rewrite_suggestions.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                  Section Rewrites
                </h3>
                <div className="space-y-4">
                  {analysis.rewrite_suggestions.map((rs, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-600 uppercase">{rs.section}</span>
                      </div>
                      <div className="bg-red-50 px-4 py-3 border-b border-slate-200">
                        <div className="text-xs font-bold text-red-600 mb-1">Current</div>
                        <p className="text-sm text-slate-700">{rs.original}</p>
                      </div>
                      <div className="bg-green-50 px-4 py-3">
                        <div className="text-xs font-bold text-green-600 mb-1">Suggested</div>
                        <p className="text-sm text-slate-700">{rs.improved}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            {isGenerating ? (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
                <Loader2 className="h-8 w-8 text-[#14D8C4] animate-spin mx-auto mb-3" />
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

                  {/* Cover letter checkbox */}
                  <label className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl cursor-pointer">
                    <input type="checkbox" checked={includeCoverLetter} onChange={(e) => setIncludeCoverLetter(e.target.checked)} className="w-4 h-4 rounded text-emerald-600" />
                    <div>
                      <span className="text-sm font-bold text-emerald-800">Include a cover letter</span>
                      <p className="text-xs text-emerald-600">AI generates a matching cover letter on the second page</p>
                    </div>
                  </label>

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
                      <input type="email" required value={buildInfo.email} onChange={(e) => setBuildInfo({ ...buildInfo, email: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Phone</label>
                      <input type="tel" inputMode="tel" pattern="[\d\s().+\-]{7,20}" value={buildInfo.phone} onChange={(e) => setBuildInfo({ ...buildInfo, phone: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="+1 (555) 123-4567" />
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

                  {/* Cover letter checkbox */}
                  <label className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl cursor-pointer">
                    <input type="checkbox" checked={includeCoverLetter} onChange={(e) => setIncludeCoverLetter(e.target.checked)} className="w-4 h-4 rounded text-emerald-600" />
                    <div>
                      <span className="text-sm font-bold text-emerald-800">Include a cover letter</span>
                      <p className="text-xs text-emerald-600">AI generates a matching cover letter on the second page</p>
                    </div>
                  </label>

                  {hasError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={handleBuildResume} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl" disabled={isGenerating || !buildInfo.fullName.trim() || !buildInfo.email.trim() || !buildInfo.experience.trim() || !buildInfo.education.trim() || !buildInfo.skills.trim()}>
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
                  isDragOver ? "border-[#14D8C4]/40 bg-[#F0FDFA]" : "border-slate-300 hover:border-[#14D8C4]/30 hover:bg-slate-50"
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
                <p className="text-xs text-slate-400 mt-4">PDF only &middot; up to {getSizeLimitLabel(userPlan)}</p>
              </div>
            ) : (
              <div>
                {/* File info */}
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F0FDFA] rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#14D8C4]" />
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#14D8C4] focus:border-[#14D8C4] text-slate-800 text-sm resize-vertical"
                  />
                </div>

                {/* Invalid resume — premium-feel informational card */}
                {isInvalidResume && (
                  <div className="rounded-2xl p-5 mb-6 flex items-start gap-4" style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)", border: "1px solid #DBEAFE" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">We couldn't read this resume</h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        The PDF appears to be blank, a scanned image, or not a resume. For the best analysis, please upload a resume that has selectable text.
                      </p>
                      <ul className="text-xs text-slate-500 space-y-1 list-disc pl-5">
                        <li>Try exporting from Word or Google Docs as PDF</li>
                        <li>If it's a scan, run it through our OCR tool first</li>
                        <li>Make sure the file isn't password-protected</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Error */}
                {hasError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* Processing */}
                {isProcessing && (
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Loader2 className="h-5 w-5 text-[#14D8C4] animate-spin" />
                      <span className="text-sm font-medium text-slate-700">{labels.analyzing}</span>
                      <span className="ml-auto text-sm font-semibold text-[#14D8C4]">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#14D8C4] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Analyze button */}
                {!isProcessing && (
                  <Button onClick={handleAnalyze} className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 rounded-xl text-lg" disabled={isProcessing}>
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
