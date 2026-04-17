"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Upload, FileText, X, Download, CheckCircle, Loader2, AlertCircle,
  Shield, Crown, ChevronLeft, ChevronRight, Trash2, Eye,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadBlobToBlob, uploadFileToBlob } from "@/lib/upload-to-blob"
import { trackToolEvent, classifyError } from "@/lib/analytics"
import { SoftErrorCard, isUserInputError } from "@/components/processing/soft-error-card"
import { TrustBadges } from "@/components/trust-badges"

type ToolLocale = "en" | "es" | "br"

const REDACTION_COPY = {
  en: {
    pricingPath: "/pricing",
    pricingSourcePath: "/pricing?source=redaction",
    signupPath: "/signup-required",
    homePath: "/",
    businessFeature: "Business Feature",
    businessDescription: "PDF Redaction is available on the Business plan. Permanently remove sensitive information from your documents.",
    upgradeButton: "Upgrade to Business — $13.99/mo",
    upgradeTitle: "This Feature Requires an Upgrade",
    limitTitle: "You're out of free conversions",
    upgradeLabel: "Upgrade to Business",
    upgradeDescription: "This tool is available on the Business plan. Upgrade to unlock unlimited access to all PDF tools.",
    limitDescription: "Free includes 10 conversions per day. Upgrade for unlimited conversions.",
    goBack: "Go Back",
    failedTitle: "Redaction Failed",
    tryAgain: "Try Again",
    completeTitle: "Redaction Complete!",
    permanentWarning: "The underlying text has been permanently removed and cannot be recovered.",
    readyForDownload: "Ready for download",
    download: "Download",
    redactAnother: "Redact Another PDF",
    backToTools: "Back to Tools",
    filesDeleted: "Files are automatically deleted after download.",
    applyingTitle: "Applying Redactions...",
    applyingDescription: "Permanently removing {count} selected {areaLabel}...",
    loadingPdf: "Loading PDF pages...",
    uploadTitle: "Upload your PDF to redact",
    uploadHelp: "or click to browse files",
    choosePdf: "Choose PDF",
    supportedFormat: "Supported format: .pdf",
    toolbarNewFile: "New File",
    toolbarClearPage: "Clear Page",
    pageOf: "Page {current} of {total}",
    instruction: "Click and drag on the PDF to draw black redaction boxes. Navigate pages to redact across the entire document.",
    totalRedactions: "{count} {redactionLabel} total",
    onThisPage: "({count} on this page)",
    area: "Area",
    applyButton: "Apply Redaction ({count} {areaLabel})",
    actionPermanent: "This action is permanent. Redacted content cannot be recovered.",
    loadFailed: "Failed to load PDF. The file may be corrupted or password-protected.",
    unknownError: "An unknown error occurred",
    areaSingular: "area",
    areaPlural: "areas",
    redactionSingular: "redaction",
    redactionPlural: "redactions",
  },
  es: {
    pricingPath: "/es/precios",
    pricingSourcePath: "/es/precios?source=redaction",
    signupPath: "/es/registro-requerido",
    homePath: "/es",
    businessFeature: "Función Business",
    businessDescription: "Redacción PDF está disponible en el plan Business. Elimina de forma permanente información sensible de tus documentos.",
    upgradeButton: "Mejorar a Business — $13.99/mes",
    upgradeTitle: "Esta función requiere una mejora",
    limitTitle: "Ya no tienes conversiones gratis",
    upgradeLabel: "Mejorar a Business",
    upgradeDescription: "Esta herramienta está disponible en el plan Business. Mejora para desbloquear acceso ilimitado a todas las herramientas PDF.",
    limitDescription: "Free incluye 10 conversiones por día. Mejora para conversiones ilimitadas.",
    goBack: "Volver",
    failedTitle: "La redacción falló",
    tryAgain: "Intentar de nuevo",
    completeTitle: "¡Redacción completada!",
    permanentWarning: "El texto subyacente fue eliminado permanentemente y no se puede recuperar.",
    readyForDownload: "Listo para descargar",
    download: "Descargar",
    redactAnother: "Redactar otro PDF",
    backToTools: "Volver a herramientas",
    filesDeleted: "Los archivos se eliminan automáticamente después de 1 hora.",
    applyingTitle: "Aplicando redacciones...",
    applyingDescription: "Eliminando permanentemente {count} {areaLabel} seleccionada{suffix}...",
    loadingPdf: "Cargando páginas del PDF...",
    uploadTitle: "Sube tu PDF para redactar",
    uploadHelp: "o haz clic para explorar archivos",
    choosePdf: "Elegir PDF",
    supportedFormat: "Formato compatible: .pdf",
    toolbarNewFile: "Nuevo archivo",
    toolbarClearPage: "Limpiar página",
    pageOf: "Página {current} de {total}",
    instruction: "Haz clic y arrastra sobre el PDF para dibujar cajas negras de redacción. Navega por las páginas para redactar todo el documento.",
    totalRedactions: "{count} {redactionLabel} en total",
    onThisPage: "({count} en esta página)",
    area: "Área",
    applyButton: "Aplicar redacción ({count} {areaLabel})",
    actionPermanent: "Esta acción es permanente. El contenido redactado no se puede recuperar.",
    loadFailed: "No se pudo cargar el PDF. El archivo puede estar dañado o protegido con contraseña.",
    unknownError: "Ocurrió un error desconocido",
    areaSingular: "área",
    areaPlural: "áreas",
    redactionSingular: "redacción",
    redactionPlural: "redacciones",
  },
  br: {
    pricingPath: "/br/precos",
    pricingSourcePath: "/br/precos?source=redaction",
    signupPath: "/br/cadastro-obrigatorio",
    homePath: "/br",
    businessFeature: "Recurso Business",
    businessDescription: "Redação PDF está disponível no plano Business. Remova permanentemente informações sensíveis dos seus documentos.",
    upgradeButton: "Fazer upgrade para Business — $13.99/mês",
    upgradeTitle: "Este recurso exige upgrade",
    limitTitle: "Você ficou sem conversões gratuitas",
    upgradeLabel: "Fazer upgrade para Business",
    upgradeDescription: "Esta ferramenta está disponível no plano Business. Faça upgrade para desbloquear acesso ilimitado a todas as ferramentas PDF.",
    limitDescription: "Free inclui 10 conversões por día. Faça upgrade para conversões ilimitadas.",
    goBack: "Voltar",
    failedTitle: "A redação falhou",
    tryAgain: "Tentar novamente",
    completeTitle: "Redação concluída!",
    permanentWarning: "O texto subjacente foi removido permanentemente e não pode ser recuperado.",
    readyForDownload: "Pronto para download",
    download: "Baixar",
    redactAnother: "Redigir outro PDF",
    backToTools: "Voltar para ferramentas",
    filesDeleted: "Os arquivos são excluídos automáticamente após 1 hora.",
    applyingTitle: "Aplicando redações...",
    applyingDescription: "Removendo permanentemente {count} {areaLabel} selecionada{suffix}...",
    loadingPdf: "Carregando páginas do PDF...",
    uploadTitle: "Envie seu PDF para redigir",
    uploadHelp: "ou clique para procurar arquivos",
    choosePdf: "Escolher PDF",
    supportedFormat: "Formato compatível: .pdf",
    toolbarNewFile: "Novo arquivo",
    toolbarClearPage: "Limpar página",
    pageOf: "Página {current} de {total}",
    instruction: "Clique e arraste no PDF para desenhar caixas pretas de redação. Navegue pelas páginas para redigir todo o documento.",
    totalRedactions: "{count} {redactionLabel} no total",
    onThisPage: "({count} nesta página)",
    area: "Área",
    applyButton: "Aplicar redação ({count} {areaLabel})",
    actionPermanent: "Esta ação é permanente. O conteúdo redigido não pode ser recuperado.",
    loadFailed: "Falha ao carregar o PDF. O arquivo pode estar corrompido ou protegido por senha.",
    unknownError: "Ocorreu um erro desconhecido",
    areaSingular: "área",
    areaPlural: "áreas",
    redactionSingular: "redação",
    redactionPlural: "redações",
  },
} as const

function formatCopy(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""))
}

interface RedactionRect {
  page: number
  x: number
  y: number
  width: number
  height: number
  id: string
}

export function RedactionInterface({ locale = "en" }: { locale?: ToolLocale }) {
  const router = useRouter()
  const copy = REDACTION_COPY[locale]
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [userPlan, setUserPlan] = useState<string>("free")
  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [pageImages, setPageImages] = useState<string[]>([])
  const [pageSizes, setPageSizes] = useState<{ width: number; height: number }[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoadingPdf, setIsLoadingPdf] = useState(false)
  const [redactions, setRedactions] = useState<RedactionRect[]>([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [drawStart, setDrawStart] = useState<{ x: number; y: number } | null>(null)
  const [currentRect, setCurrentRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [resultUrl, setResultUrl] = useState("")
  const [resultName, setResultName] = useState("")

  const isBusinessUser = userPlan === "business" || userPlan === "enterprise"

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  // Render current page with redactions on canvas
  const renderPage = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || pageImages.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      // Fit to container width
      const containerWidth = container.clientWidth
      const scale = containerWidth / img.width
      const displayWidth = containerWidth
      const displayHeight = img.height * scale

      canvas.width = displayWidth
      canvas.height = displayHeight

      // Draw page image
      ctx.drawImage(img, 0, 0, displayWidth, displayHeight)

      // Draw existing redaction rectangles for this page
      const pageRedactions = redactions.filter((r) => r.page === currentPage)
      ctx.fillStyle = "rgba(0, 0, 0, 0.85)"
      for (const r of pageRedactions) {
        ctx.fillRect(
          r.x * displayWidth,
          r.y * displayHeight,
          r.width * displayWidth,
          r.height * displayHeight
        )
      }

      // Draw current selection
      if (currentRect) {
        ctx.fillStyle = "rgba(220, 38, 38, 0.4)"
        ctx.strokeStyle = "rgba(220, 38, 38, 0.9)"
        ctx.lineWidth = 2
        ctx.fillRect(currentRect.x, currentRect.y, currentRect.w, currentRect.h)
        ctx.strokeRect(currentRect.x, currentRect.y, currentRect.w, currentRect.h)
      }
    }
    img.src = pageImages[currentPage]
  }, [pageImages, currentPage, redactions, currentRect])

  useEffect(() => {
    renderPage()
  }, [renderPage])

  // Re-render on window resize
  useEffect(() => {
    const handleResize = () => renderPage()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [renderPage])

  // Load PDF and render pages as images
  const loadPdf = useCallback(async (pdfFile: File) => {
    setIsLoadingPdf(true)
    try {
      const pdfjsLib = await import("pdfjs-dist")
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

      const arrayBuffer = await pdfFile.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

      setTotalPages(pdf.numPages)

      const images: string[] = []
      const sizes: { width: number; height: number }[] = []

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const pageSize = page.getViewport({ scale: 1 })
        const viewport = page.getViewport({ scale: 2 })

        const offscreen = document.createElement("canvas")
        offscreen.width = viewport.width
        offscreen.height = viewport.height
        const ctx = offscreen.getContext("2d")!

        await page.render({ canvasContext: ctx, viewport }).promise

        images.push(offscreen.toDataURL("image/png"))
        sizes.push({ width: pageSize.width, height: pageSize.height })
      }

      setPageImages(images)
      setPageSizes(sizes)
      setCurrentPage(0)
      setIsLoadingPdf(false)
    } catch (err) {
      console.error("Failed to load PDF:", err)
      setHasError(true)
      setErrorMessage(copy.loadFailed)
      setIsLoadingPdf(false)
    }
  }, [copy.loadFailed])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) {
      const f = droppedFiles[0]
      trackToolEvent("pdf-redaction", "file_selected", {
        tier: userPlan,
        file_size_mb: f.size / (1024 * 1024),
        file_type: f.type || "pdf",
      })
      setFile(f)
      loadPdf(f)
    }
  }, [loadPdf, userPlan])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const f = e.target.files[0]
      trackToolEvent("pdf-redaction", "file_selected", {
        tier: userPlan,
        file_size_mb: f.size / (1024 * 1024),
        file_type: f.type || "pdf",
      })
      setFile(f)
      loadPdf(f)
    }
  }, [loadPdf, userPlan])

  // Mouse handlers for drawing redaction rectangles
  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const coords = getCanvasCoords(e)
    setIsDrawing(true)
    setDrawStart(coords)
    setCurrentRect(null)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !drawStart) return
    const coords = getCanvasCoords(e)
    setCurrentRect({
      x: Math.min(drawStart.x, coords.x),
      y: Math.min(drawStart.y, coords.y),
      w: Math.abs(coords.x - drawStart.x),
      h: Math.abs(coords.y - drawStart.y),
    })
  }

  const handleMouseUp = () => {
    if (!isDrawing || !currentRect || !canvasRef.current) {
      setIsDrawing(false)
      setDrawStart(null)
      setCurrentRect(null)
      return
    }

    const canvas = canvasRef.current
    const minSize = 5

    // Only add if rectangle is big enough
    if (currentRect.w > minSize && currentRect.h > minSize) {
      const newRedaction: RedactionRect = {
        page: currentPage,
        x: currentRect.x / canvas.width,
        y: currentRect.y / canvas.height,
        width: currentRect.w / canvas.width,
        height: currentRect.h / canvas.height,
        id: crypto.randomUUID(),
      }
      setRedactions((prev) => [...prev, newRedaction])
    }

    setIsDrawing(false)
    setDrawStart(null)
    setCurrentRect(null)
  }

  const removeRedaction = useCallback((id: string) => {
    setRedactions((prev) => prev.filter((r) => r.id !== id))
  }, [])

  const clearPageRedactions = useCallback(() => {
    setRedactions((prev) => prev.filter((r) => r.page !== currentPage))
  }, [currentPage])

  const createRedactedPageBlob = useCallback(async (pageIndex: number) => {
    const pageImage = pageImages[pageIndex]
    const pageSize = pageSizes[pageIndex]

    if (!pageImage || !pageSize) {
      throw new Error(`Missing rendered page data for page ${pageIndex + 1}.`)
    }

    const img = new Image()
    img.src = pageImage
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`Failed to render page ${pageIndex + 1}.`))
    })

    const canvas = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      throw new Error("Failed to create image canvas.")
    }

    ctx.drawImage(img, 0, 0)
    ctx.fillStyle = "rgb(0, 0, 0)"

    for (const redaction of redactions.filter((item) => item.page === pageIndex)) {
      ctx.fillRect(
        redaction.x * canvas.width,
        redaction.y * canvas.height,
        redaction.width * canvas.width,
        redaction.height * canvas.height
      )
    }

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((value) => {
        if (value) {
          resolve(value)
          return
        }
        reject(new Error(`Failed to export page ${pageIndex + 1}.`))
      }, "image/png")
    })

    return {
      blob,
      width: pageSize.width,
      height: pageSize.height,
    }
  }, [pageImages, pageSizes, redactions])

  const applyRedactions = useCallback(async () => {
    if (!file || redactions.length === 0) return

    setIsProcessing(true)
    setHasError(false)

    const t0 = Date.now()
    trackToolEvent("pdf-redaction", "process_start", {
      tier: userPlan,
      file_size_mb: file.size / (1024 * 1024),
    })

    try {
      const inputUrl = await uploadFileToBlob(file)
      const redactedPageIndexes = Array.from(new Set(redactions.map((item) => item.page))).sort((a, b) => a - b)
      const redactedPages = []

      for (const pageIndex of redactedPageIndexes) {
        const { blob, width, height } = await createRedactedPageBlob(pageIndex)
        const baseName = file.name.replace(/\.[^/.]+$/, "")
        const blobUrl = await uploadBlobToBlob(blob, `${baseName}-redacted-page-${pageIndex + 1}.png`)

        redactedPages.push({
          page: pageIndex,
          blobUrl,
          width,
          height,
        })
      }

      const response = await fetch("/api/pdf-redaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl: inputUrl,
          originalName: file.name,
          redactedPages,
        }),
      })

      if (!response.ok) {
        let message = `Redaction failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required")) {
            router.push(copy.pricingSourcePath)
            return
          }
        } catch { }
        throw new Error(message)
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const baseName = file.name.replace(/\.[^/.]+$/, "")
      setResultUrl(url)
      setResultName(`${baseName}-redacted.pdf`)
      setIsComplete(true)
      setIsProcessing(false)
      trackToolEvent("pdf-redaction", "process_complete", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
      })
    } catch (error) {
      const msg = error instanceof Error ? error.message : copy.unknownError
      setHasError(true)
      setErrorMessage(msg)
      trackToolEvent("pdf-redaction", "process_error", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
        error_type: classifyError(undefined, msg),
      })
      setIsProcessing(false)
    }
  }, [copy.pricingSourcePath, copy.unknownError, createRedactedPageBlob, file, redactions, router, userPlan])

  const downloadResult = useCallback(() => {
    const link = document.createElement("a")
    link.href = resultUrl
    link.download = resultName
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [resultUrl, resultName])

  const resetInterface = useCallback(() => {
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setFile(null)
    setPageImages([])
    setPageSizes([])
    setCurrentPage(0)
    setTotalPages(0)
    setRedactions([])
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setResultUrl("")
    setResultName("")
  }, [resultUrl])

  // Not Business user
  if (!isBusinessUser && userPlan !== "loading") {
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
                <h2 className="text-xl font-bold text-white mb-2">{copy.businessFeature}</h2>
                <p className="text-sm text-slate-400 mb-6">{copy.businessDescription}</p>
                <Button onClick={() => router.push(copy.pricingSourcePath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{copy.upgradeButton}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (hasError) {
    const isUpgradeError = (errorMessage || "").includes("upgrade_required")
    const isLimitError = (errorMessage || "").toLowerCase().includes("daily limit reached") || (errorMessage || "").includes("daily_limit_reached")
    const isSignupError = (errorMessage || "").includes("signup_required")

    if (isSignupError) {
      router.push(copy.signupPath)
      return null
    }

    if (isUpgradeError || isLimitError) {
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
                  <h2 className="text-xl font-bold text-white mb-2">
                    {isUpgradeError ? copy.upgradeTitle : copy.limitTitle}
                  </h2>
                  <p className="text-sm text-slate-400 mb-6">
                    {isUpgradeError ? copy.upgradeDescription : copy.limitDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button onClick={() => router.push(copy.pricingPath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">
                      {copy.upgradeLabel}
                    </Button>
                    <Button onClick={resetInterface} variant="outline" className="border border-slate-600 text-slate-300 hover:text-white rounded-xl px-6 py-3">
                      {copy.goBack}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }

    if (isUserInputError(errorMessage)) {
      return <SoftErrorCard errorMessage={errorMessage} onReset={resetInterface} />
    }

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.failedTitle}</h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button onClick={resetInterface} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]">
              {copy.tryAgain}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Success state
  if (isComplete) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.completeTitle}</h2>
            <p className="text-slate-600 mb-2">
              {redactions.length} {redactions.length === 1 ? copy.areaSingular : copy.areaPlural} permanently redacted across {new Set(redactions.map((r) => r.page)).size} {new Set(redactions.map((r) => r.page)).size === 1 ? (locale === "en" ? "page" : "página") : (locale === "en" ? "pages" : "páginas")}.
            </p>
            <p className="text-sm text-red-600 font-medium mb-8">
              {copy.permanentWarning}
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <div className="text-left">
                    <div className="font-bold text-slate-900">{resultName}</div>
                    <div className="text-sm text-green-600">{copy.readyForDownload}</div>
                  </div>
                </div>
                <Button onClick={downloadResult} className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  {copy.download}
                </Button>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetInterface} variant="outline" className="border-slate-300">
                {copy.redactAnother}
              </Button>
              <Button onClick={() => (window.location.href = copy.homePath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]">
                {copy.backToTools}
              </Button>
            </div>

            <div className="mt-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-blue-800 text-sm">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">{copy.filesDeleted}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Processing state
  if (isProcessing) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.applyingTitle}</h2>
            <p className="text-slate-600">{formatCopy(copy.applyingDescription, { count: redactions.length, areaLabel: redactions.length === 1 ? copy.areaSingular : copy.areaPlural, suffix: redactions.length === 1 ? "" : locale === "en" ? "" : "s" })}</p>
          </div>
        </div>
      </section>
    )
  }

  // Upload state — no file yet
  if (!file || pageImages.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {isLoadingPdf ? (
              <div className="text-center py-16">
                <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto mb-4" />
                <p className="text-slate-600 font-medium">{copy.loadingPdf}</p>
              </div>
            ) : (
              <>
                <div
                  className={cn(
                    "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer text-center",
                    isDragOver ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
                  )}
                  onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
                  onDragLeave={(e) => { e.preventDefault(); setIsDragOver(false) }}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("redaction-file-upload")?.click()}
                >
                  <Upload className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{copy.uploadTitle}</h3>
                  <p className="text-slate-600 mb-6">{copy.uploadHelp}</p>
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8">
                    {copy.choosePdf}
                  </Button>
                  <p className="text-sm text-slate-500 mt-4">{copy.supportedFormat}</p>
                </div>
                <input
                  id="redaction-file-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onClick={(e) => { (e.target as HTMLInputElement).value = "" }}
                  onChange={handleFileSelect}
                />
                <TrustBadges />
              </>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Editor state — PDF loaded, draw redactions
  const pageRedactions = redactions.filter((r) => r.page === currentPage)
  const totalRedactions = redactions.length

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Toolbar */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-indigo-600" />
              <span className="font-bold text-slate-900 text-sm truncate max-w-[200px]">{file.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-slate-700 min-w-[80px] text-center">
                {formatCopy(copy.pageOf, { current: currentPage + 1, total: totalPages })}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages - 1}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              {pageRedactions.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearPageRedactions}
                  className="text-red-600 border-red-200 hover:bg-red-50 text-xs"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  {copy.toolbarClearPage}
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={resetInterface}
                className="text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                {copy.toolbarNewFile}
              </Button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-4 text-center">
            <p className="text-sm text-indigo-800 font-medium">
              {copy.instruction}
            </p>
          </div>

          {/* Canvas */}
          <div ref={containerRef} className="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden mb-4">
            <canvas
              ref={canvasRef}
              className="w-full cursor-crosshair block"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
          </div>

          {/* Redaction Summary */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-slate-500" />
                <span className="text-sm text-slate-700">
                  <strong>{totalRedactions}</strong> {totalRedactions === 1 ? copy.redactionSingular : copy.redactionPlural} {locale === "en" ? "total" : locale === "es" ? "en total" : "no total"}
                  {pageRedactions.length > 0 && (
                    <span className="text-slate-400"> {formatCopy(copy.onThisPage, { count: pageRedactions.length })}</span>
                  )}
                </span>
              </div>
            </div>

            {pageRedactions.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {pageRedactions.map((r, i) => (
                  <span
                    key={r.id}
                    className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {copy.area} {i + 1}
                    <button onClick={() => removeRedaction(r.id)} className="text-red-400 hover:text-red-600">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Apply Button */}
          <Button
            onClick={applyRedactions}
            disabled={totalRedactions === 0}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 disabled:opacity-50"
            size="lg"
          >
            <Shield className="h-5 w-5 mr-2" />
            {formatCopy(copy.applyButton, { count: totalRedactions, areaLabel: totalRedactions === 1 ? copy.areaSingular : copy.areaPlural })}
          </Button>

          <p className="text-center text-xs text-red-500 mt-2 font-medium">
            {copy.actionPermanent}
          </p>
        </div>
      </div>
    </section>
  )
}
