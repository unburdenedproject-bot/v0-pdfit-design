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
  Languages,
  RotateCcw,
  Copy,
  Check,
  Download,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { validateClientFile, getSizeLimitLabel } from "@/lib/client-file-validator"
import { TrustBadges } from "@/components/trust-badges"

const LANGUAGE_OPTIONS = [
  { value: "english", label: "English", labelEs: "Inglés", labelBr: "Inglês" },
  { value: "spanish", label: "Spanish", labelEs: "Español", labelBr: "Espanhol" },
  { value: "portuguese", label: "Portuguese", labelEs: "Portugués", labelBr: "Português" },
  { value: "french", label: "French", labelEs: "Francés", labelBr: "Francês" },
  { value: "german", label: "German", labelEs: "Alemán", labelBr: "Alemão" },
  { value: "italian", label: "Italian", labelEs: "Italiano", labelBr: "Italiano" },
  { value: "dutch", label: "Dutch", labelEs: "Holandés", labelBr: "Holandês" },
  { value: "chinese", label: "Chinese", labelEs: "Chino", labelBr: "Chinês" },
  { value: "japanese", label: "Japanese", labelEs: "Japonés", labelBr: "Japonês" },
  { value: "korean", label: "Korean", labelEs: "Coreano", labelBr: "Coreano" },
  { value: "arabic", label: "Arabic", labelEs: "Árabe", labelBr: "Árabe" },
  { value: "russian", label: "Russian", labelEs: "Ruso", labelBr: "Russo" },
  { value: "hindi", label: "Hindi", labelEs: "Hindi", labelBr: "Hindi" },
]

export function TranslatePdfInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isInvalidPdf, setIsInvalidPdf] = useState(false)
  const [translation, setTranslation] = useState<string | null>(null)
  const [targetLanguage, setTargetLanguage] = useState("english")
  const [targetLanguageName, setTargetLanguageName] = useState("")
  const [copied, setCopied] = useState(false)
  const [userPlan, setUserPlan] = useState<string>("free")

  const localePrefix = pathname.startsWith("/es") ? "/es" : pathname.startsWith("/br") ? "/br" : ""
  const pricingUrl = localePrefix === "/es" ? "/es/precios" : localePrefix === "/br" ? "/br/precos" : "/pricing"

  useEffect(() => {
    fetch("/api/user-plan").then((r) => r.json()).then((d) => setUserPlan(d.plan || "free")).catch(() => setUserPlan("free"))
  }, [])

  const isBusinessUser = userPlan === "business" || userPlan === "enterprise"

  const langLabelKey = localePrefix === "/es" ? "labelEs" : localePrefix === "/br" ? "labelBr" : "label"

  const labels =
    localePrefix === "/es"
      ? {
          uploadTitle: "Sube tu PDF", uploadDesc: "Arrastra y suelta tu archivo PDF aqui, o haz clic para seleccionar", browse: "Seleccionar archivo",
          translate: "Traducir Documento", processing: "Traduciendo con IA...", startNew: "Nuevo documento", copy: "Copiar", copied: "Copiado",
          download: "Descargar TXT", targetLabel: "Traducir a",
          upgradeTitle: "Función Business", upgradeDesc: "Traducir PDF está disponible en el plan Business ($13.99/mes). Traduce documentos completos a 13 idiomas con IA.",
          upgradeBtn: "Ver Plan Business",
        }
      : localePrefix === "/br"
        ? {
            uploadTitle: "Envie seu PDF", uploadDesc: "Arraste e solte seu arquivo PDF aqui, ou clique para selecionar", browse: "Selecionar arquivo",
            translate: "Traduzir Documento", processing: "Traduzindo com IA...", startNew: "Novo documento", copy: "Copiar", copied: "Copiado",
            download: "Baixar TXT", targetLabel: "Traduzir para",
            upgradeTitle: "Função Business", upgradeDesc: "Traduzir PDF está disponível no plano Business ($13.99/mês). Traduza documentos completos para 13 idiomas com IA.",
            upgradeBtn: "Ver Plano Business",
          }
        : {
            uploadTitle: "Upload your PDF", uploadDesc: "Drag and drop your PDF file here, or click to browse", browse: "Browse files",
            translate: "Translate Document", processing: "Translating with AI...", startNew: "New document", copy: "Copy", copied: "Copied",
            download: "Download TXT", targetLabel: "Translate to",
            upgradeTitle: "Business Feature", upgradeDesc: "Translate PDF is available on the Business plan ($13.99/month). Translate entire documents into 13 languages with AI.",
            upgradeBtn: "View Business Plan",
          }

  const acceptFile = useCallback(async (f: File | undefined) => {
    if (!f) return
    if (f.type && f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      setHasError(true); setErrorMessage("Please upload a PDF file."); setFile(null); setTranslation(null); return
    }
    const r = await validateClientFile(f, userPlan)
    if (!r.ok) { setHasError(true); setErrorMessage(r.error || "This file cannot be used."); setFile(null); setTranslation(null); return }
    setFile(f); setHasError(false); setErrorMessage(""); setTranslation(null)
  }, [userPlan])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setIsDragOver(false)
    acceptFile(e.dataTransfer.files[0])
  }, [acceptFile])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    acceptFile(e.target.files?.[0])
  }, [acceptFile])

  const handleProcess = useCallback(async () => {
    if (!file) return
    setIsProcessing(true); setHasError(false); setErrorMessage(""); setIsInvalidPdf(false)
    let blobUrl: string | null = null
    try {
      blobUrl = await uploadFileToBlob(file)
      const response = await fetch("/api/translate-pdf", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blobUrl, targetLanguage }),
      })
      if (!response.ok) {
        let message = `Processing failed (HTTP ${response.status})`
        try { const d = await response.json(); if (d.error) message = d.error; if (message.includes("upgrade_required")) { router.push(pricingUrl); return } } catch {}
        if (response.status === 422) {
          setIsInvalidPdf(true); setErrorMessage(message); return
        }
        throw new Error(message)
      }
      const data = await response.json()
      setTranslation(data.translation)
      setTargetLanguageName(data.targetLanguage)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true); setErrorMessage(msg)
    } finally {
      setIsProcessing(false); if (blobUrl) deleteBlobUrl(blobUrl)
    }
  }, [file, targetLanguage, pricingUrl, router])

  const handleCopy = useCallback(() => {
    if (!translation) return
    navigator.clipboard.writeText(translation); setCopied(true); setTimeout(() => setCopied(false), 2000)
  }, [translation])

  const handleDownload = useCallback(() => {
    if (!translation) return
    const blob = new Blob([translation], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = file?.name?.replace(/\.pdf$/i, `-${targetLanguage}.txt`) || "translation.txt"
    document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url)
  }, [translation, file, targetLanguage])

  const handleReset = useCallback(() => {
    setFile(null); setIsProcessing(false); setHasError(false); setErrorMessage(""); setIsInvalidPdf(false); setTranslation(null); setCopied(false)
  }, [])

  // Business tier gate
  if (!isBusinessUser) {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.2), rgba(107,124,255,0.4))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(107,124,255,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 1px 1px rgba(107,124,255,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Business Feature</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(107,124,255,0.3), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#6B7CFF]" />
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

  // Results
  if (translation) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center"><Languages className="h-4 w-4 text-indigo-600" /></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[300px]">{file?.name || "Document"}</p>
                    <p className="text-xs text-slate-500">{targetLanguageName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={handleCopy} className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? labels.copied : labels.copy}
                  </button>
                  <button onClick={handleDownload} className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                    <Download className="h-3.5 w-3.5" />{labels.download}
                  </button>
                  <button onClick={handleReset} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors">
                    <RotateCcw className="h-3.5 w-3.5" />{labels.startNew}
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-[500px] overflow-y-auto">
                <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">{translation}</p>
              </div>
            </div>
            <div className="mt-8"><TrustBadges /></div>
          </div>
        </div>
      </section>
    )
  }

  // Upload
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
                  <h4 className="font-bold text-slate-900 mb-1">We couldn't read this PDF</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    The PDF appears to be blank, a scanned image, or image-only. For the best translation, please upload a PDF that has selectable text.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-5">
                    <li>Try exporting from Word or Google Docs as PDF</li>
                    <li>If it's a scan, run it through our OCR tool first</li>
                    <li>Make sure the file isn't password-protected</li>
                  </ul>
                </div>
              </div>
            )}
            {hasError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /><p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}
            {!file ? (
              <div className={cn("border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer", isDragOver ? "border-indigo-400 bg-indigo-50" : "border-slate-300 hover:border-indigo-300 hover:bg-slate-50")}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }} onDragLeave={() => setIsDragOver(false)} onDrop={handleDrop}
                onClick={() => document.getElementById("translate-file-input")?.click()}>
                <input id="translate-file-input" type="file" accept="application/pdf" className="hidden" onChange={handleFileSelect} />
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">{labels.uploadTitle}</h3>
                <p className="text-sm text-slate-500 mb-4">{labels.uploadDesc}</p>
                <Button variant="outline" className="font-semibold" onClick={(e) => { e.stopPropagation(); document.getElementById("translate-file-input")?.click() }}>{labels.browse}</Button>
                <p className="text-xs text-slate-400 mt-4">PDF only &middot; up to {getSizeLimitLabel(userPlan)}</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center"><FileText className="h-5 w-5 text-indigo-600" /></div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">{file.name}</p>
                      <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  {!isProcessing && <button onClick={handleReset} className="text-slate-400 hover:text-slate-600 transition-colors"><X className="h-5 w-5" /></button>}
                </div>
                {!isProcessing && (
                  <div className="mb-6">
                    <label className="text-xs font-semibold text-slate-600 mb-2 block">{labels.targetLabel}</label>
                    <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}
                      className="w-full text-sm font-semibold py-2.5 px-3 rounded-lg border border-slate-200 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                      {LANGUAGE_OPTIONS.map((lang) => (
                        <option key={lang.value} value={lang.value}>{lang[langLabelKey as keyof typeof lang] || lang.label}</option>
                      ))}
                    </select>
                  </div>
                )}
                {isProcessing && (
                  <div className="mb-6 text-center py-8">
                    <Loader2 className="h-10 w-10 text-indigo-500 animate-spin mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-700">{labels.processing}</p>
                  </div>
                )}
                {!isProcessing && (
                  <Button onClick={handleProcess} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl text-lg">
                    <Languages className="h-5 w-5 mr-2" />{labels.translate}
                  </Button>
                )}
              </div>
            )}
          </div>
          <div className="mt-8"><TrustBadges /></div>
        </div>
      </div>
    </section>
  )
}
