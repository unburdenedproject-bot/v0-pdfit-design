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
  User,
  Building2,
  Calendar,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Key,
  FileSearch,
  RotateCcw,
  Download,
  Scale,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { validateClientFile, getSizeLimitLabel } from "@/lib/client-file-validator"
import { TrustBadges } from "@/components/trust-badges"

interface Extraction {
  document_type: string
  summary: string
  people: { name: string; role: string | null }[]
  organizations: string[]
  dates: { label: string; value: string }[]
  amounts: { label: string; value: string; currency: string | null }[]
  contact_info: {
    emails: string[]
    phones: string[]
    addresses: string[]
  }
  key_values: { key: string; value: string }[]
  important_clauses: string[]
}

export function SmartExtractionInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [extraction, setExtraction] = useState<Extraction | null>(null)
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
          uploadDesc: "Arrastra y suelta tu archivo PDF aqui, o haz clic para seleccionar",
          browse: "Seleccionar archivo",
          process: "Extraer Datos",
          processing: "Extrayendo datos con IA...",
          startNew: "Nuevo documento",
          downloadExcel: "Descargar Excel",
          downloadCsv: "Descargar CSV",
          downloadJson: "Descargar JSON",
          upgradeTitle: "Funcion Business",
          upgradeDesc: "Extraccion Inteligente de Datos esta disponible en el plan Business ($13.99/mes). Extrae automaticamente nombres, fechas, montos y datos clave de cualquier documento.",
          upgradeBtn: "Ver Plan Business",
          docType: "Tipo de Documento",
          summary: "Resumen",
          people: "Personas",
          orgs: "Organizaciones",
          dates: "Fechas",
          amounts: "Montos",
          contact: "Contacto",
          keyValues: "Campos Clave",
          clauses: "Clausulas Importantes",
        }
      : localePrefix === "/br"
        ? {
            uploadTitle: "Envie seu PDF",
            uploadDesc: "Arraste e solte seu arquivo PDF aqui, ou clique para selecionar",
            browse: "Selecionar arquivo",
            process: "Extrair Dados",
            processing: "Extraindo dados com IA...",
            startNew: "Novo documento",
            downloadExcel: "Baixar Excel",
            downloadCsv: "Baixar CSV",
            downloadJson: "Baixar JSON",
            upgradeTitle: "Funcao Business",
            upgradeDesc: "Extracao Inteligente de Dados esta disponivel no plano Business ($13.99/mes). Extraia automaticamente nomes, datas, valores e dados chave de qualquer documento.",
            upgradeBtn: "Ver Plano Business",
            docType: "Tipo de Documento",
            summary: "Resumo",
            people: "Pessoas",
            orgs: "Organizacoes",
            dates: "Datas",
            amounts: "Valores",
            contact: "Contato",
            keyValues: "Campos Chave",
            clauses: "Clausulas Importantes",
          }
        : {
            uploadTitle: "Upload your PDF",
            uploadDesc: "Drag and drop your PDF file here, or click to browse",
            browse: "Browse files",
            process: "Extract Data",
            processing: "Extracting data with AI...",
            startNew: "New document",
            downloadExcel: "Download Excel",
            downloadCsv: "Download CSV",
            downloadJson: "Download JSON",
            upgradeTitle: "Business Feature",
            upgradeDesc: "Smart Data Extraction is available on the Business plan ($13.99/month). Automatically pull names, dates, amounts, and key data from any document.",
            upgradeBtn: "View Business Plan",
            docType: "Document Type",
            summary: "Summary",
            people: "People",
            orgs: "Organizations",
            dates: "Dates",
            amounts: "Amounts",
            contact: "Contact Info",
            keyValues: "Key Fields",
            clauses: "Important Clauses",
          }

  const acceptFile = useCallback(async (f: File | undefined) => {
    if (!f) return
    if (f.type && f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      setHasError(true); setErrorMessage("Please upload a PDF file."); setFile(null); setExtraction(null); return
    }
    const r = await validateClientFile(f, userPlan)
    if (!r.ok) { setHasError(true); setErrorMessage(r.error || "This file cannot be used."); setFile(null); setExtraction(null); return }
    setFile(f); setHasError(false); setErrorMessage(""); setExtraction(null)
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

    let blobUrl: string | null = null

    try {
      blobUrl = await uploadFileToBlob(file)

      const response = await fetch("/api/smart-extraction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blobUrl }),
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
        throw new Error(message)
      }

      const data = await response.json()
      setExtraction(data)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
    } finally {
      setIsProcessing(false)
      if (blobUrl) deleteBlobUrl(blobUrl)
    }
  }, [file, pricingUrl, router])

  const baseFilename = useCallback((ext: string): string => {
    const base = file?.name?.replace(/\.pdf$/i, "") || "extraction"
    return `${base}-extracted.${ext}`
  }, [file])

  const triggerDownload = useCallback((blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, [])

  const handleDownloadJson = useCallback(() => {
    if (!extraction) return
    const json = JSON.stringify(extraction, null, 2)
    triggerDownload(new Blob([json], { type: "application/json" }), baseFilename("json"))
  }, [extraction, baseFilename, triggerDownload])

  const buildRows = useCallback((): { sheet: string; rows: (string | number)[][] }[] => {
    if (!extraction) return []
    const sheets: { sheet: string; rows: (string | number)[][] }[] = []

    sheets.push({
      sheet: "Summary",
      rows: [
        ["Field", "Value"],
        ["Document Type", extraction.document_type || ""],
        ["Summary", extraction.summary || ""],
      ],
    })

    if (Array.isArray(extraction.people) && extraction.people.length) {
      sheets.push({
        sheet: "People",
        rows: [["Name", "Role"], ...extraction.people.map((p: any) => [p?.name || "", p?.role || ""])],
      })
    }
    if (Array.isArray(extraction.organizations) && extraction.organizations.length) {
      sheets.push({
        sheet: "Organizations",
        rows: [["Organization"], ...extraction.organizations.map((o: any) => [String(o)])],
      })
    }
    if (Array.isArray(extraction.dates) && extraction.dates.length) {
      sheets.push({
        sheet: "Dates",
        rows: [["Label", "Value"], ...extraction.dates.map((d: any) => [d?.label || "", d?.value || ""])],
      })
    }
    if (Array.isArray(extraction.amounts) && extraction.amounts.length) {
      sheets.push({
        sheet: "Amounts",
        rows: [
          ["Label", "Value", "Currency"],
          ...extraction.amounts.map((a: any) => [a?.label || "", a?.value || "", a?.currency || ""]),
        ],
      })
    }
    const ci = extraction.contact_info || {}
    const contactRows: (string | number)[][] = [["Type", "Value"]]
    for (const e of ci.emails || []) contactRows.push(["Email", e])
    for (const p of ci.phones || []) contactRows.push(["Phone", p])
    for (const a of ci.addresses || []) contactRows.push(["Address", a])
    if (contactRows.length > 1) sheets.push({ sheet: "Contact Info", rows: contactRows })

    if (Array.isArray(extraction.key_values) && extraction.key_values.length) {
      sheets.push({
        sheet: "Key Fields",
        rows: [["Key", "Value"], ...extraction.key_values.map((k: any) => [k?.key || "", k?.value || ""])],
      })
    }
    if (Array.isArray(extraction.important_clauses) && extraction.important_clauses.length) {
      sheets.push({
        sheet: "Important Clauses",
        rows: [["Clause"], ...extraction.important_clauses.map((c: any) => [String(c)])],
      })
    }

    return sheets
  }, [extraction])

  const handleDownloadExcel = useCallback(async () => {
    if (!extraction) return
    const ExcelJS = await import("exceljs")
    const wb = new ExcelJS.default.Workbook()
    wb.creator = "PDF.it"
    wb.created = new Date()

    for (const { sheet, rows } of buildRows()) {
      const ws = wb.addWorksheet(sheet.substring(0, 31))
      rows.forEach((row, i) => {
        const r = ws.addRow(row)
        if (i === 0) {
          r.eachCell((cell: any) => {
            cell.font = { bold: true, color: { argb: "FFFFFFFF" } }
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF4338CA" } }
            cell.alignment = { horizontal: "center", vertical: "middle" }
          })
        }
      })
      ws.columns.forEach((col: any) => {
        let max = 12
        col.eachCell({ includeEmpty: true }, (cell: any) => {
          const v = cell.value ? String(cell.value) : ""
          max = Math.max(max, Math.min(v.length + 4, 60))
        })
        col.width = max
      })
    }

    const buffer = await wb.xlsx.writeBuffer()
    triggerDownload(
      new Blob([new Uint8Array(buffer as ArrayBuffer)], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      baseFilename("xlsx")
    )
  }, [extraction, buildRows, baseFilename, triggerDownload])

  const handleDownloadCsv = useCallback(() => {
    if (!extraction) return
    const escape = (v: string | number): string => {
      const s = String(v ?? "")
      return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
    }
    const lines: string[] = []
    for (const { sheet, rows } of buildRows()) {
      lines.push(`# ${sheet}`)
      for (const row of rows) lines.push(row.map(escape).join(","))
      lines.push("")
    }
    triggerDownload(new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" }), baseFilename("csv"))
  }, [extraction, buildRows, baseFilename, triggerDownload])

  const handleReset = useCallback(() => {
    setFile(null)
    setIsProcessing(false)
    setHasError(false)
    setErrorMessage("")
    setExtraction(null)
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
                  style={{
                    background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)",
                    color: "#0E0F1E",
                  }}
                >
                  Business Feature
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                    boxShadow:
                      "0 0 20px rgba(107,124,255,0.3), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <Crown className="h-7 w-7 text-[#6B7CFF]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {labels.upgradeTitle}
                </h2>
                <p className="text-sm text-slate-400 mb-6">
                  {labels.upgradeDesc}
                </p>
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
  if (extraction) {
    const hasData = (arr: unknown[]) => Array.isArray(arr) && arr.length > 0

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <FileSearch className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">
                      {file?.name || "Document"}
                    </p>
                    <p className="text-xs text-slate-500 capitalize">{extraction.document_type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={handleDownloadExcel}
                    className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {labels.downloadExcel}
                  </button>
                  <button
                    onClick={handleDownloadCsv}
                    className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {labels.downloadCsv}
                  </button>
                  <button
                    onClick={handleDownloadJson}
                    className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {labels.downloadJson}
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

              {/* Results */}
              <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
                {/* Summary */}
                {extraction.summary && (
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-indigo-900 mb-1">{labels.summary}</p>
                    <p className="text-sm text-indigo-700">{extraction.summary}</p>
                  </div>
                )}

                {/* People */}
                {hasData(extraction.people) && (
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {labels.people}
                    </p>
                    <div className="space-y-1">
                      {extraction.people.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-800">
                          <span className="font-medium">{p.name}</span>
                          {p.role && <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{p.role}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Organizations */}
                {hasData(extraction.organizations) && (
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" /> {labels.orgs}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {extraction.organizations.map((org, i) => (
                        <span key={i} className="text-sm bg-slate-100 text-slate-800 px-3 py-1 rounded-full">{org}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dates */}
                {hasData(extraction.dates) && (
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {labels.dates}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {extraction.dates.map((d, i) => (
                        <div key={i} className="bg-slate-50 rounded-lg p-2">
                          <p className="text-xs text-slate-500">{d.label}</p>
                          <p className="text-sm font-medium text-slate-800">{d.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Amounts */}
                {hasData(extraction.amounts) && (
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5" /> {labels.amounts}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {extraction.amounts.map((a, i) => (
                        <div key={i} className="bg-green-50 rounded-lg p-2">
                          <p className="text-xs text-green-600">{a.label}</p>
                          <p className="text-sm font-bold text-green-800">{a.value} {a.currency || ""}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                {(hasData(extraction.contact_info?.emails || []) || hasData(extraction.contact_info?.phones || []) || hasData(extraction.contact_info?.addresses || [])) && (
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">{labels.contact}</p>
                    <div className="space-y-1.5">
                      {extraction.contact_info?.emails?.map((e, i) => (
                        <div key={`e${i}`} className="flex items-center gap-2 text-sm text-slate-800">
                          <Mail className="h-3.5 w-3.5 text-slate-400" /> {e}
                        </div>
                      ))}
                      {extraction.contact_info?.phones?.map((p, i) => (
                        <div key={`p${i}`} className="flex items-center gap-2 text-sm text-slate-800">
                          <Phone className="h-3.5 w-3.5 text-slate-400" /> {p}
                        </div>
                      ))}
                      {extraction.contact_info?.addresses?.map((a, i) => (
                        <div key={`a${i}`} className="flex items-center gap-2 text-sm text-slate-800">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" /> {a}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Values */}
                {hasData(extraction.key_values) && (
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Key className="h-3.5 w-3.5" /> {labels.keyValues}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {extraction.key_values.map((kv, i) => (
                        <div key={i} className="bg-slate-50 rounded-lg p-2">
                          <p className="text-xs text-slate-500">{kv.key}</p>
                          <p className="text-sm font-medium text-slate-800">{kv.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Important Clauses */}
                {hasData(extraction.important_clauses) && (
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Scale className="h-3.5 w-3.5" /> {labels.clauses}
                    </p>
                    <div className="space-y-2">
                      {extraction.important_clauses.map((c, i) => (
                        <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <p className="text-sm text-amber-900">{c}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
            {hasError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700">{errorMessage}</p>
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
                onClick={() =>
                  document.getElementById("smart-extract-file-input")?.click()
                }
              >
                <input
                  id="smart-extract-file-input"
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
                    document.getElementById("smart-extract-file-input")?.click()
                  }}
                >
                  {labels.browse}
                </Button>
                <p className="text-xs text-slate-400 mt-4">PDF only &middot; up to {getSizeLimitLabel(userPlan)}</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-indigo-600" />
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
                    <FileSearch className="h-5 w-5 mr-2" />
                    {labels.process}
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
