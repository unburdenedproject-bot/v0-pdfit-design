"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Crown,
  FileText,
  Loader2,
  Upload,
  X,
  AlertTriangle,
  BookOpen,
  RotateCcw,
  Copy,
  Check,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { validateClientFile, getSizeLimitLabel } from "@/lib/client-file-validator"
import { trackToolEvent, classifyError } from "@/lib/analytics"
import { TrustBadges } from "@/components/trust-badges"

export function PdfSummarizerInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isInvalidPdf, setIsInvalidPdf] = useState(false)
  const [summary, setSummary] = useState<string | null>(null)
  const [length, setLength] = useState<"short" | "medium" | "detailed">("medium")
  const [language, setLanguage] = useState<"same" | "english" | "spanish" | "portuguese">("same")
  const [copied, setCopied] = useState(false)
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

  const isBusinessUser = userPlan === "business" || userPlan === "enterprise"

  const labels =
    localePrefix === "/es"
      ? {
          uploadTitle: "Sube tu PDF",
          uploadDesc: "Arrastra y suelta tu archivo PDF aquí, o haz clic para seleccionar",
          browse: "Seleccionar archivo",
          summarize: "Resumir Documento",
          processing: "Generando resumen con IA...",
          startNew: "Nuevo documento",
          copy: "Copiar",
          copied: "Copiado",
          upgradeTitle: "Función Business",
          upgradeDesc: "El Resumidor de PDF con IA está disponible en el plan Business ($13.99/mes). Resume documentos largos en segundos, en cualquier idioma.",
          upgradeBtn: "Ver Plan Business",
          lengthLabel: "Longitud del resumen",
          short: "Corto",
          medium: "Medio",
          detailed: "Detallado",
          langLabel: "Idioma del resumen",
          same: "Mismo idioma",
          english: "Inglés",
          spanish: "Español",
          portuguese: "Portugués",
          invalidTitle: "No pudimos leer este PDF",
          invalidDesc: "El PDF parece estar en blanco, escaneado o contener solo imágenes. Para resumirlo, necesitamos un PDF con texto seleccionable.",
          invalidTip1: "Exporta desde Word o Google Docs como PDF",
          invalidTip2: "Si es un escaneo, pásalo primero por nuestra herramienta OCR",
          invalidTip3: "Verifica que el archivo no tenga contraseña",
        }
      : localePrefix === "/br"
        ? {
            uploadTitle: "Envie seu PDF",
            uploadDesc: "Arraste e solte seu arquivo PDF aquí, ou clique para selecionar",
            browse: "Selecionar arquivo",
            summarize: "Resumir Documento",
            processing: "Gerando resumo com IA...",
            startNew: "Novo documento",
            copy: "Copiar",
            copied: "Copiado",
            upgradeTitle: "Funcao Business",
            upgradeDesc: "O Resumidor de PDF com IA está disponível no plano Business ($13.99/mes). Resuma documentos longos em segundos, em qualquer idioma.",
            upgradeBtn: "Ver Plano Business",
            lengthLabel: "Tamanho do resumo",
            short: "Curto",
            medium: "Medio",
            detailed: "Detalhado",
            langLabel: "Idioma do resumo",
            same: "Mesmo idioma",
            english: "Inglés",
            spanish: "Espanhol",
            portuguese: "Portugués",
            invalidTitle: "Nao conseguimos ler este PDF",
            invalidDesc: "O PDF parece estar em branco, escaneado ou conter apenas imagens. Para resumi-lo, precisamos de um PDF com texto selecionavel.",
            invalidTip1: "Exporte do Word ou Google Docs como PDF",
            invalidTip2: "Se for um scan, passe antes pela nossa ferramenta OCR",
            invalidTip3: "Verifique se o arquivo nao esta protegido por senha",
          }
        : {
            uploadTitle: "Upload your PDF",
            uploadDesc: "Drag and drop your PDF file here, or click to browse",
            browse: "Browse files",
            summarize: "Summarize Document",
            processing: "Generating summary with AI...",
            startNew: "New document",
            copy: "Copy",
            copied: "Copied",
            upgradeTitle: "Business Feature",
            upgradeDesc: "AI PDF Summarizer is available on the Business plan ($13.99/month). Summarize long documents in seconds, in any language.",
            upgradeBtn: "View Business Plan",
            lengthLabel: "Summary length",
            short: "Short",
            medium: "Medium",
            detailed: "Detailed",
            langLabel: "Summary language",
            same: "Same as document",
            english: "English",
            spanish: "Spanish",
            portuguese: "Portuguese",
            invalidTitle: "We couldn't read this PDF",
            invalidDesc: "The PDF appears to be blank, a scan, or image-only. To summarize it, we need a PDF that has selectable text.",
            invalidTip1: "Try exporting from Word or Google Docs as PDF",
            invalidTip2: "If it's a scan, run it through our OCR tool first",
            invalidTip3: "Make sure the file isn't password-protected",
          }

  const acceptFile = useCallback(async (f: File | undefined) => {
    if (!f) return
    if (f.type && f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      setHasError(true); setErrorMessage("Please upload a PDF file."); setFile(null); setSummary(null); return
    }
    const r = await validateClientFile(f, userPlan)
    if (!r.ok) { setHasError(true); setErrorMessage(r.error || "This file cannot be used."); setFile(null); setSummary(null); return }
    trackToolEvent("pdf-summarizer", "file_selected", {
      tier: userPlan,
      file_size_mb: f.size / (1024 * 1024),
      file_type: f.type || "pdf",
    })
    setFile(f); setHasError(false); setErrorMessage(""); setSummary(null)
  }, [userPlan])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    acceptFile(e.dataTransfer.files[0])
  }, [acceptFile])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    acceptFile(e.target.files?.[0])
  }, [acceptFile])

  const handleProcess = useCallback(async () => {
    if (!file) return

    setIsProcessing(true)
    setHasError(false)
    setErrorMessage("")
    setIsInvalidPdf(false)

    let blobUrl: string | null = null
    const t0 = Date.now()
    trackToolEvent("pdf-summarizer", "process_start", {
      tier: userPlan,
      file_size_mb: file.size / (1024 * 1024),
      length,
      language,
    })

    try {
      blobUrl = await uploadFileToBlob(file)

      const response = await fetch("/api/pdf-summarizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blobUrl, length, language }),
      })

      if (!response.ok) {
        let message = `Processing failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required")) {
            router.push(pricingUrl)
            return
          }
        } catch {
          // response might not be JSON
        }
        if (response.status === 422 || response.status === 400) {
          setIsInvalidPdf(true)
          trackToolEvent("pdf-summarizer", "process_error", {
            tier: userPlan,
            latency_ms: Date.now() - t0,
            error_type: classifyError(response.status, message),
            error_code: response.status,
          })
          return
        }
        throw new Error(message)
      }

      const data = await response.json()
      setSummary(data.summary)
      trackToolEvent("pdf-summarizer", "process_complete", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
      trackToolEvent("pdf-summarizer", "process_error", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
        error_type: classifyError(undefined, msg),
      })
    } finally {
      setIsProcessing(false)
      if (blobUrl) deleteBlobUrl(blobUrl)
    }
  }, [file, length, language, pricingUrl, router])

  const handleCopy = useCallback(() => {
    if (!summary) return
    navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [summary])

  const handleReset = useCallback(() => {
    setFile(null)
    setIsProcessing(false)
    setHasError(false)
    setErrorMessage("")
    setIsInvalidPdf(false)
    setSummary(null)
    setCopied(false)
  }, [])

  // Business tier gate
  if (!isBusinessUser) {
    return (
      <section
        className="py-16"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div
              className="rounded-2xl p-[1px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.2), rgba(107,124,255,0.4))",
              }}
            >
              <div
                className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(107,124,255,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow:
                    "inset 0 1px 1px rgba(107,124,255,0.08), 0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}
                >
                  Business Feature
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                    boxShadow: "0 0 20px rgba(107,124,255,0.3), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <Crown className="h-7 w-7 text-[#6B7CFF]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{labels.upgradeTitle}</h2>
                <p className="text-sm text-slate-400 mb-6">{labels.upgradeDesc}</p>
                <Button
                  onClick={() => router.push(pricingUrl)}
                  className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl"
                >
                  {labels.upgradeBtn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Results view
  if (summary) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-indigo-600" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">
                    {file?.name || "Document"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? labels.copied : labels.copy}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    {labels.startNew}
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="p-6">
                <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">{summary}</p>
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

  // Upload state
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            {isInvalidPdf && (
              <div className="rounded-2xl p-5 mb-6 flex items-start gap-4" style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)", border: "1px solid #DBEAFE" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-1">{labels.invalidTitle}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{labels.invalidDesc}</p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-5">
                    <li>{labels.invalidTip1}</li>
                    <li>{labels.invalidTip2}</li>
                    <li>{labels.invalidTip3}</li>
                  </ul>
                </div>
              </div>
            )}
            {hasError && (
              <div className="rounded-2xl p-4 mb-6 flex items-start gap-3" style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)", border: "1px solid #DBEAFE" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                  <Info className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">{errorMessage}</p>
              </div>
            )}

            {!file ? (
              <div
                className={cn(
                  "border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer",
                  isDragOver
                    ? "border-indigo-400 bg-indigo-50"
                    : "border-slate-300 hover:border-indigo-300 hover:bg-slate-50"
                )}
                onDragOver={(e) => {
                  e.preventDefault()
                  setIsDragOver(true)
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("summarizer-file-input")?.click()}
              >
                <input
                  id="summarizer-file-input"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handleFileSelect}
                />
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">{labels.uploadTitle}</h3>
                <p className="text-sm text-slate-500 mb-4">{labels.uploadDesc}</p>
                <Button
                  variant="outline"
                  className="font-semibold"
                  onClick={(e) => {
                    e.stopPropagation()
                    document.getElementById("summarizer-file-input")?.click()
                  }}
                >
                  {labels.browse}
                </Button>
                <p className="text-xs text-slate-400 mt-4">PDF only &middot; up to {getSizeLimitLabel(userPlan)}</p>
              </div>
            ) : (
              <div>
                {/* File info */}
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-indigo-600" />
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

                {/* Options */}
                {!isProcessing && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-2 block">{labels.lengthLabel}</label>
                      <div className="flex gap-1">
                        {(["short", "medium", "detailed"] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setLength(opt)}
                            className={cn(
                              "flex-1 text-xs font-semibold py-2 px-2 rounded-lg border transition-colors",
                              length === opt
                                ? "bg-indigo-50 border-indigo-300 text-indigo-700"
                                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                            )}
                          >
                            {labels[opt]}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-2 block">{labels.langLabel}</label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as "same" | "english" | "spanish" | "portuguese")}
                        className="w-full text-xs font-semibold py-2 px-3 rounded-lg border border-slate-200 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      >
                        <option value="same">{labels.same}</option>
                        <option value="english">{labels.english}</option>
                        <option value="spanish">{labels.spanish}</option>
                        <option value="portuguese">{labels.portuguese}</option>
                      </select>
                    </div>
                  </div>
                )}

                {isProcessing && (
                  <div className="mb-6 text-center py-8">
                    <Loader2 className="h-10 w-10 text-indigo-500 animate-spin mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-700">{labels.processing}</p>
                  </div>
                )}

                {!isProcessing && (
                  <Button
                    onClick={handleProcess}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl text-lg"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    {labels.summarize}
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
