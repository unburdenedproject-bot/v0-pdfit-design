"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Crown,
  Download,
  FileSpreadsheet,
  Loader2,
  Upload,
  X,
  AlertTriangle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { TrustBadges } from "@/components/trust-badges"

export function TableExtractionInterface({ enterpriseMode = false }: { enterpriseMode?: boolean } = {}) {
  const router = useRouter()
  const pathname = usePathname()

  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [resultFilename, setResultFilename] = useState("")
  const [userPlan, setUserPlan] = useState<string>("free")

  // Locale detection
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

  // Fetch user plan
  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const isBusinessUser = userPlan === "business" || userPlan === "enterprise"
  const isEnterpriseUser = userPlan === "enterprise"

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
      setHasError(false)
      setErrorMessage("")
      setIsComplete(false)
      setResultUrl(null)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setHasError(false)
      setErrorMessage("")
      setIsComplete(false)
      setResultUrl(null)
    }
  }, [])

  const handleProcess = useCallback(async () => {
    if (!file) return

    setIsProcessing(true)
    setProgress(0)
    setHasError(false)
    setErrorMessage("")

    let blobUrl: string | null = null

    try {
      // Step 1: Upload to blob
      setProgress(10)
      blobUrl = await uploadFileToBlob(file)

      // Step 2: Call API
      setProgress(30)
      const response = await fetch("/api/table-extraction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl,
          originalName: file.name,
        }),
      })

      setProgress(80)

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
        throw new Error(message)
      }

      // Step 3: Download result
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      const disposition = response.headers.get("Content-Disposition") || ""
      const filenameMatch = disposition.match(/filename="(.+)"/)
      const downloadName = filenameMatch
        ? filenameMatch[1]
        : file.name.replace(/\.pdf$/i, "-tables.xlsx")

      setResultUrl(url)
      setResultFilename(downloadName)
      setProgress(100)
      setIsComplete(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
    } finally {
      setIsProcessing(false)
      // Clean up blob if it was uploaded
      if (blobUrl) {
        deleteBlobUrl(blobUrl)
      }
    }
  }, [file, pricingUrl, router])

  const handleDownload = useCallback(() => {
    if (!resultUrl) return
    const link = document.createElement("a")
    link.href = resultUrl
    link.download = resultFilename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [resultUrl, resultFilename])

  const handleReset = useCallback(() => {
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setFile(null)
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setProgress(0)
    setResultUrl(null)
    setResultFilename("")
  }, [resultUrl])

  // Labels by locale
  const labels =
    localePrefix === "/es"
      ? {
          uploadTitle: "Sube tu PDF",
          uploadDesc: "Arrastra y suelta tu archivo PDF aqui, o haz clic para seleccionar",
          browse: "Seleccionar archivo",
          process: "Extraer Tablas",
          processing: "Extrayendo tablas...",
          success: "Tablas extraidas exitosamente",
          download: "Descargar Excel",
          extractAnother: "Extraer otro",
          upgradeTitle: "Funcion Business",
          upgradeDesc: "La Extraccion de Tablas esta disponible en el plan Business (200 paginas/mes).",
          upgradeBtn: "Ver Plan Business",
          errorNoTables: "No se detectaron tablas en este PDF.",
        }
      : localePrefix === "/br"
        ? {
            uploadTitle: "Envie seu PDF",
            uploadDesc: "Arraste e solte seu arquivo PDF aqui, ou clique para selecionar",
            browse: "Selecionar arquivo",
            process: "Extrair Tabelas",
            processing: "Extraindo tabelas...",
            success: "Tabelas extraidas com sucesso",
            download: "Baixar Excel",
            extractAnother: "Extrair outro",
            upgradeTitle: "Funcao Business",
            upgradeDesc: "A Extracao de Tabelas esta disponivel no plano Business (200 paginas/mes).",
            upgradeBtn: "Ver Plano Business",
            errorNoTables: "Nenhuma tabela detectada neste PDF.",
          }
        : {
            uploadTitle: "Upload your PDF",
            uploadDesc: "Drag and drop your PDF file here, or click to browse",
            browse: "Browse files",
            process: "Extract Tables",
            processing: "Extracting tables...",
            success: "Tables extracted successfully",
            download: "Download Excel",
            extractAnother: "Extract another",
            upgradeTitle: "Business Feature",
            upgradeDesc: "Table Extraction is available on the Business plan (200 pages/month).",
            upgradeBtn: "View Business Plan",
            errorNoTables: "No tables detected in this PDF.",
          }

  // Business mode gates at Business, Enterprise mode gates at Enterprise
  const isGated = enterpriseMode ? !isEnterpriseUser : !isBusinessUser

  const gateLabels = enterpriseMode
    ? localePrefix === "/es"
      ? { title: "Función Enterprise", desc: "Extracción de Tablas de Alto Volumen está disponible en el plan Enterprise.", btn: "Ver Plan Enterprise" }
      : localePrefix === "/br"
        ? { title: "Função Enterprise", desc: "Extração de Tabelas de Alto Volume está disponível no plano Enterprise.", btn: "Ver Plano Enterprise" }
        : { title: "Enterprise Feature", desc: "High-Volume Table Extraction is available on the Enterprise plan.", btn: "View Enterprise Plan" }
    : { title: labels.upgradeTitle, desc: labels.upgradeDesc, btn: labels.upgradeBtn }

  if (isGated) {
    return enterpriseMode ? (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(192,197,206,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(107,124,255,0.2), rgba(192,197,206,0.4))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(192,197,206,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 1px 1px rgba(192,197,206,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Enterprise Feature</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(192,197,206,0.25), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#C0C5CE]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{gateLabels.title}</h2>
                <p className="text-sm text-slate-400 mb-6">{gateLabels.desc}</p>
                <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{gateLabels.btn}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.2), rgba(107,124,255,0.4))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(107,124,255,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 1px 1px rgba(107,124,255,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Business Feature</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(107,124,255,0.3), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#6B7CFF]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{gateLabels.title}</h2>
                <p className="text-sm text-slate-400 mb-6">{gateLabels.desc}</p>
                <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{gateLabels.btn}</Button>
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
          {/* Success State */}
          {isComplete && resultUrl ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                {labels.success}
              </h2>
              <p className="text-sm text-slate-500 mb-6">{resultFilename}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={handleDownload}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-3 rounded-xl inline-flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  {labels.download}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="font-bold px-8 py-3 rounded-xl"
                >
                  {labels.extractAnother}
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              {/* Upload area */}
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
                  onClick={() =>
                    document.getElementById("table-file-input")?.click()
                  }
                >
                  <input
                    id="table-file-input"
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                  <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {labels.uploadTitle}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    {labels.uploadDesc}
                  </p>
                  <Button
                    variant="outline"
                    className="font-semibold"
                    onClick={(e) => {
                      e.stopPropagation()
                      document.getElementById("table-file-input")?.click()
                    }}
                  >
                    {labels.browse}
                  </Button>
                </div>
              ) : (
                <div>
                  {/* File info */}
                  <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <FileSpreadsheet className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">
                          {file.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    {!isProcessing && (
                      <button
                        onClick={handleReset}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>

                  {/* Error message */}
                  {hasError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  {/* Progress bar */}
                  {isProcessing && (
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Loader2 className="h-5 w-5 text-indigo-500 animate-spin" />
                        <span className="text-sm font-medium text-slate-700">
                          {labels.processing}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Process button */}
                  {!isProcessing && (
                    <Button
                      onClick={handleProcess}
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl text-lg"
                      disabled={isProcessing}
                    >
                      <FileSpreadsheet className="h-5 w-5 mr-2" />
                      {labels.process}
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Trust badges */}
          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  )
}
