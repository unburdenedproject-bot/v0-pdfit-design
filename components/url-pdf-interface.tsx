"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Crown,
  Download,
  Globe,
  Loader2,
  AlertTriangle,
} from "lucide-react"
import { TrustBadges } from "@/components/trust-badges"

export function UrlPdfInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [url, setUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [resultFilename, setResultFilename] = useState("")
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

  const handleProcess = useCallback(async () => {
    if (!url) return

    setIsProcessing(true)
    setHasError(false)
    setErrorMessage("")

    try {
      const response = await fetch("/api/url-to-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        let message = `Conversion failed (HTTP ${response.status})`
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

      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)

      const disposition = response.headers.get("Content-Disposition") || ""
      const filenameMatch = disposition.match(/filename="(.+)"/)
      const downloadName = filenameMatch ? filenameMatch[1] : "webpage.pdf"

      setResultUrl(blobUrl)
      setResultFilename(downloadName)
      setIsComplete(true)
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
    } finally {
      setIsProcessing(false)
    }
  }, [url, pricingUrl, router])

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
    setUrl("")
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setResultUrl(null)
    setResultFilename("")
  }, [resultUrl])

  const labels =
    localePrefix === "/es"
      ? {
          urlPlaceholder: "https://ejemplo.com",
          convert: "Convertir a PDF",
          converting: "Convirtiendo...",
          success: "Pagina convertida exitosamente",
          download: "Descargar PDF",
          convertAnother: "Convertir otra",
          upgradeTitle: "Funcion Pro",
          upgradeDesc:
            "Convertir URL a PDF esta disponible en los planes Pro, Business y Enterprise.",
          upgradeBtn: "Ver Planes",
          publicNote: "Funciona con paginas web publicas. Para paginas con inicio de sesion (facturas, paneles), usa Imprimir > Guardar como PDF en tu navegador.",
        }
      : localePrefix === "/br"
        ? {
            urlPlaceholder: "https://exemplo.com",
            convert: "Converter para PDF",
            converting: "Convertendo...",
            success: "Pagina convertida com sucesso",
            download: "Baixar PDF",
            convertAnother: "Converter outra",
            upgradeTitle: "Funcao Pro",
            upgradeDesc:
              "Converter URL para PDF esta disponivel nos planos Pro, Business e Enterprise.",
            upgradeBtn: "Ver Planos",
            publicNote: "Funciona com paginas web publicas. Para paginas com login (faturas, paineis), use Imprimir > Salvar como PDF no seu navegador.",
          }
        : {
            urlPlaceholder: "https://example.com",
            convert: "Convert to PDF",
            converting: "Converting...",
            success: "Page converted successfully",
            download: "Download PDF",
            convertAnother: "Convert another",
            upgradeTitle: "Pro Feature",
            upgradeDesc:
              "URL to PDF is available on the Pro, Business, and Enterprise plans.",
            upgradeBtn: "View Plans",
            publicNote: "Works with public webpages. For pages that require login (invoices, dashboards), use your browser's Print > Save as PDF.",
          }

  if (!isPaidUser) {
    return (
      <section
        className="py-16"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
            #0E0F1E
          `,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <div
              className="rounded-2xl p-[1px]"
              style={{
                background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.25), rgba(192,197,206,0.35), rgba(107,124,255,0.2), rgba(192,197,206,0.4))",
              }}
            >
              <div
                className="rounded-[15px] p-8 text-center"
                style={{
                  background: `
                    radial-gradient(ellipse 60% 50% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%),
                    radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.04) 0%, transparent 70%),
                    radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.03) 0%, transparent 60%),
                    rgba(255, 255, 255, 0.07)
                  `,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -1px 1px rgba(192,197,206,0.06), 0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, #1e2345, #2a2f55)",
                    boxShadow: "0 0 20px rgba(192,197,206,0.2), 0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <Crown className="h-7 w-7 text-[#C0C5CE]" />
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
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
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl inline-flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  {labels.download}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="font-bold px-8 py-3 rounded-xl"
                >
                  {labels.convertAnother}
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              {/* URL Input */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  URL
                </label>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={labels.urlPlaceholder}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-slate-800"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {labels.publicNote}
                </p>
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
                  <span className="text-sm font-medium text-slate-700">
                    {labels.converting}
                  </span>
                </div>
              )}

              {/* Convert Button */}
              <Button
                onClick={handleProcess}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-lg"
                disabled={isProcessing || !url}
              >
                <Globe className="h-5 w-5 mr-2" />
                {isProcessing ? labels.converting : labels.convert}
              </Button>
            </div>
          )}

          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  )
}
