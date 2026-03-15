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

export function TableExtractionInterface() {
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
  const [tablesFound, setTablesFound] = useState(0)

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

  const isBusinessUser = userPlan === "business"

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
    setTablesFound(0)
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
          upgradeDesc: "La Extraccion de Tablas esta disponible en el plan Business.",
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
            upgradeDesc: "A Extracao de Tabelas esta disponivel no plano Business.",
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
            upgradeDesc: "Table Extraction is available on the Business plan.",
            upgradeBtn: "View Business Plan",
            errorNoTables: "No tables detected in this PDF.",
          }

  // Non-business users see upgrade prompt
  if (!isBusinessUser) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="h-7 w-7 text-indigo-500" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                {labels.upgradeTitle}
              </h2>
              <p className="text-sm text-slate-500 mb-6">{labels.upgradeDesc}</p>
              <Button
                onClick={() => router.push(pricingUrl)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-3 rounded-xl"
              >
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
