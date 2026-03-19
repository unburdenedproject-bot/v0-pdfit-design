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
  }, [])

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
            <div className="text-center">
              <Button onClick={handleReset} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl">
                {labels.analyzeAnother}
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
