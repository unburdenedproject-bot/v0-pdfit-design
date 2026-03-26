"use client"

import { useState, useCallback, useEffect, useMemo, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Upload,
  FileText,
  X,
  Download,
  CheckCircle,
  Loader2,
  AlertCircle,
  PenTool,
  Crown,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Plus,
  Signature,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob } from "@/lib/upload-to-blob"
import { TrustBadges } from "@/components/trust-badges"
import { CreateSignatureModal } from "@/components/esign/create-signature-modal"
import type { SignatureSessionAsset } from "@/lib/esign/types"

type EsignLocale = "en" | "es" | "br"

const ESIGN_COPY: Record<EsignLocale, Record<string, string>> = {
  en: {
    pricingPath: "/pricing?source=esign",
    signupRequiredPath: "/signup-required",
    homePath: "/",
    businessFeature: "Business Feature",
    businessBody: "eSign Documents is available on the Business plan. Create signatures in-session and place them directly onto your PDFs.",
    upgradeCta: "Upgrade to Business — $13.99/mo",
    upgradeRequiredTitle: "This Feature Requires an Upgrade",
    outOfFreeTitle: "You're out of free conversions",
    upgradeHeading: "Upgrade to Business",
    upgradeBody: "This tool is available on the Business plan. Upgrade to unlock unlimited access to all PDF tools.",
    limitBody: "Free includes 10 conversions per day. Upgrade for unlimited conversions.",
    upgradeButton: "Upgrade to Business",
    goBack: "Go Back",
    signingFailed: "Signing Failed",
    tryAgain: "Try Again",
    documentSigned: "Document Signed!",
    readyDownload: "Ready for download",
    download: "Download",
    signAnother: "Sign Another PDF",
    backToTools: "Back to Tools",
    applying: "Applying Signatures...",
    embedding: "Embedding",
    uploadTitle: "Upload your PDF to sign",
    uploadBrowse: "or click to browse files",
    choosePdf: "Choose PDF",
    supportedFormat: "Supported format: .pdf",
    loadingPdf: "Loading PDF pages...",
    signatureChoices: "Signature Choices",
    signatureChoicesBody: "Create a signature or initials for this document. Nothing is stored after your session.",
    create: "Create",
    signatureNotice: "By placing a signature on a PDF, you are applying it as your electronic signature to the current document.",
    noSignatures: "No signatures created yet",
    noSignaturesBody: "Create a signature style, drawing, or upload to sign this PDF.",
    created: "Created",
    placeOnPdf: "Place on PDF",
    placedSignatures: "Placed Signatures",
    initials: "Initials",
    signature: "Signature",
    applyButton: "Apply",
    newFile: "New File",
    page: "Page",
    of: "of",
    placeHintPrefix: "Click on the PDF where you want to place your",
    pdfPreviewRenderError: "Failed to render the PDF preview.",
    pdfPreviewLoadError: "Failed to load the PDF page preview.",
    invalidPdf: "Please upload a valid PDF file.",
    failedLoadPdf: "Failed to load PDF. The file may be corrupted or password-protected.",
    removeSessionSig: "Remove this signature from the current PDF before deleting it from this session.",
  },
  es: {
    pricingPath: "/es/precios?source=esign",
    signupRequiredPath: "/es/registro-requerido",
    homePath: "/es",
    businessFeature: "Función Business",
    businessBody: "La firma electrónica está disponible en el plan Business. Crea firmas dentro de la sesión y colócalas directamente en tus PDFs.",
    upgradeCta: "Actualizar a Business — $13.99/mes",
    upgradeRequiredTitle: "Esta función requiere actualización",
    outOfFreeTitle: "Te quedaste sin conversiones gratis",
    upgradeHeading: "Actualizar a Business",
    upgradeBody: "Esta herramienta está disponible en el plan Business. Actualiza para desbloquear acceso ilimitado a todas las herramientas PDF.",
    limitBody: "El plan gratis incluye 10 conversiones por día. Actualiza para conversiones ilimitadas.",
    upgradeButton: "Actualizar a Business",
    goBack: "Volver",
    signingFailed: "La firma falló",
    tryAgain: "Intentar de nuevo",
    documentSigned: "¡Documento firmado!",
    readyDownload: "Listo para descargar",
    download: "Descargar",
    signAnother: "Firmar otro PDF",
    backToTools: "Volver a herramientas",
    applying: "Aplicando firmas...",
    embedding: "Insertando",
    uploadTitle: "Sube tu PDF para firmar",
    uploadBrowse: "o haz clic para buscar archivos",
    choosePdf: "Elegir PDF",
    supportedFormat: "Formato compatible: .pdf",
    loadingPdf: "Cargando páginas del PDF...",
    signatureChoices: "Opciones de firma",
    signatureChoicesBody: "Crea una firma o iniciales para este documento. Nada se guarda después de tu sesión.",
    create: "Crear",
    signatureNotice: "Al colocar una firma en un PDF, la estás aplicando como tu firma electrónica al documento actual.",
    noSignatures: "Aún no hay firmas creadas",
    noSignaturesBody: "Crea un estilo de firma, dibuja o sube una imagen para firmar este PDF.",
    created: "Creada",
    placeOnPdf: "Colocar en PDF",
    placedSignatures: "Firmas colocadas",
    initials: "Iniciales",
    signature: "Firma",
    applyButton: "Aplicar",
    newFile: "Nuevo archivo",
    page: "Página",
    of: "de",
    placeHintPrefix: "Haz clic en el PDF donde quieres colocar tus",
    pdfPreviewRenderError: "No se pudo renderizar la vista previa del PDF.",
    pdfPreviewLoadError: "No se pudo cargar la vista previa de la página del PDF.",
    invalidPdf: "Sube un archivo PDF válido.",
    failedLoadPdf: "No se pudo cargar el PDF. El archivo puede estar dañado o protegido con contraseña.",
    removeSessionSig: "Quita esta firma del PDF actual antes de eliminarla de esta sesión.",
  },
  br: {
    pricingPath: "/br/precos?source=esign",
    signupRequiredPath: "/br/cadastro-necessario",
    homePath: "/br",
    businessFeature: "Função Business",
    businessBody: "A assinatura eletrônica está disponível no plano Business. Crie assinaturas durante a sessão e posicione-as diretamente nos seus PDFs.",
    upgradeCta: "Fazer upgrade para Business — $13.99/mês",
    upgradeRequiredTitle: "Este recurso exige upgrade",
    outOfFreeTitle: "Suas conversões grátis acabaram",
    upgradeHeading: "Fazer upgrade para Business",
    upgradeBody: "Esta ferramenta está disponível no plano Business. Faça upgrade para desbloquear acesso ilimitado a todas as ferramentas PDF.",
    limitBody: "O plano grátis inclui 10 conversões por dia. Faça upgrade para conversões ilimitadas.",
    upgradeButton: "Fazer upgrade para Business",
    goBack: "Voltar",
    signingFailed: "A assinatura falhou",
    tryAgain: "Tentar novamente",
    documentSigned: "Documento assinado!",
    readyDownload: "Pronto para download",
    download: "Baixar",
    signAnother: "Assinar outro PDF",
    backToTools: "Voltar às ferramentas",
    applying: "Aplicando assinaturas...",
    embedding: "Inserindo",
    uploadTitle: "Envie seu PDF para assinar",
    uploadBrowse: "ou clique para procurar arquivos",
    choosePdf: "Escolher PDF",
    supportedFormat: "Formato compatível: .pdf",
    loadingPdf: "Carregando páginas do PDF...",
    signatureChoices: "Opções de assinatura",
    signatureChoicesBody: "Crie uma assinatura ou iniciais para este documento. Nada é salvo após a sua sessão.",
    create: "Criar",
    signatureNotice: "Ao posicionar uma assinatura em um PDF, você a está aplicando como sua assinatura eletrônica ao documento atual.",
    noSignatures: "Nenhuma assinatura criada ainda",
    noSignaturesBody: "Crie um estilo de assinatura, desenhe ou envie uma imagem para assinar este PDF.",
    created: "Criada",
    placeOnPdf: "Posicionar no PDF",
    placedSignatures: "Assinaturas posicionadas",
    initials: "Iniciais",
    signature: "Assinatura",
    applyButton: "Aplicar",
    newFile: "Novo arquivo",
    page: "Página",
    of: "de",
    placeHintPrefix: "Clique no PDF onde deseja posicionar sua",
    pdfPreviewRenderError: "Não foi possível renderizar a prévia do PDF.",
    pdfPreviewLoadError: "Não foi possível carregar a prévia da página do PDF.",
    invalidPdf: "Envie um arquivo PDF válido.",
    failedLoadPdf: "Não foi possível carregar o PDF. O arquivo pode estar corrompido ou protegido por senha.",
    removeSessionSig: "Remova esta assinatura do PDF atual antes de excluí-la desta sessão.",
  },
}

interface PlacedSignature {
  id: string
  page: number
  x: number
  y: number
  width: number
  height: number
  assetId: string
  assetUrl: string
  kind: "signature" | "initials"
}

export function EsignInterface({ locale = "en" }: { locale?: EsignLocale }) {
  const router = useRouter()
  const copy = ESIGN_COPY[locale]
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [userPlan, setUserPlan] = useState<string>("free")
  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [pageImages, setPageImages] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoadingPdf, setIsLoadingPdf] = useState(false)
  const [selectedSignatureId, setSelectedSignatureId] = useState<string>("")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [sessionSignatures, setSessionSignatures] = useState<SignatureSessionAsset[]>([])
  const [placedSignatures, setPlacedSignatures] = useState<PlacedSignature[]>([])
  const [isPlacing, setIsPlacing] = useState(false)
  const [placingPreview, setPlacingPreview] = useState<{ x: number; y: number } | null>(null)
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

  useEffect(() => {
    if (!selectedSignatureId && sessionSignatures.length > 0) {
      setSelectedSignatureId(sessionSignatures[0].id)
    }
  }, [sessionSignatures, selectedSignatureId])

  const selectedSignature = useMemo(
    () => sessionSignatures.find((signature) => signature.id === selectedSignatureId) ?? null,
    [sessionSignatures, selectedSignatureId]
  )

  const renderPage = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || pageImages.length === 0) return
    const pageImage = pageImages[currentPage]
    if (!pageImage) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new window.Image()
    img.onload = () => {
      try {
        const containerWidth = container.clientWidth
        if (!containerWidth || !img.width || !img.height) return

        const scale = containerWidth / img.width
        const displayWidth = containerWidth
        const displayHeight = img.height * scale

        canvas.width = displayWidth
        canvas.height = displayHeight

        ctx.clearRect(0, 0, displayWidth, displayHeight)
        ctx.drawImage(img, 0, 0, displayWidth, displayHeight)

        const pageSigs = placedSignatures.filter((signature) => signature.page === currentPage)
        for (const signature of pageSigs) {
          const sigImg = new window.Image()
          sigImg.onload = () => {
            try {
              ctx.drawImage(
                sigImg,
                signature.x * displayWidth,
                signature.y * displayHeight,
                signature.width * displayWidth,
                signature.height * displayHeight
              )
            } catch (error) {
              console.error("Failed to render placed signature preview:", error)
            }
          }
          sigImg.src = signature.assetUrl
        }

        if (isPlacing && placingPreview && selectedSignature?.assetUrl) {
          const previewImg = new window.Image()
          previewImg.onload = () => {
            try {
              const sigW = selectedSignature.kind === "initials" ? 140 : 220
              const sigH = selectedSignature.kind === "initials" ? 70 : 90
              ctx.globalAlpha = 0.6
              ctx.drawImage(previewImg, placingPreview.x - sigW / 2, placingPreview.y - sigH / 2, sigW, sigH)
              ctx.globalAlpha = 1
            } catch (error) {
              console.error("Failed to render active signature preview:", error)
            }
          }
          previewImg.src = selectedSignature.assetUrl
        }
      } catch (error) {
        console.error("Failed to render PDF page preview:", error)
        setHasError(true)
        setErrorMessage(copy.pdfPreviewRenderError)
      }
    }
    img.onerror = () => {
      setHasError(true)
      setErrorMessage(copy.pdfPreviewLoadError)
    }

    img.src = pageImage
  }, [pageImages, currentPage, placedSignatures, isPlacing, placingPreview, selectedSignature])

  useEffect(() => {
    renderPage()
  }, [renderPage])

  useEffect(() => {
    const handleResize = () => renderPage()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [renderPage])

  const loadPdf = useCallback(async (pdfFile: File) => {
    setIsLoadingPdf(true)
    setHasError(false)
    setErrorMessage("")

    try {
      if (pdfFile.type && pdfFile.type !== "application/pdf") {
        throw new Error(copy.invalidPdf)
      }

      const pdfjsLib = await import("pdfjs-dist")
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

      const arrayBuffer = await pdfFile.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

      setTotalPages(pdf.numPages)

      const images: string[] = []
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: 2 })
        const offscreen = document.createElement("canvas")
        offscreen.width = viewport.width
        offscreen.height = viewport.height
        const ctx = offscreen.getContext("2d")
        if (!ctx) continue

        await page.render({ canvasContext: ctx, viewport }).promise
        images.push(offscreen.toDataURL("image/png"))
      }

      setPageImages(images)
      setCurrentPage(0)
    } catch (err) {
      console.error("Failed to load PDF:", err)
      setHasError(true)
      setErrorMessage(copy.failedLoadPdf)
    } finally {
      setIsLoadingPdf(false)
    }
  }, [copy.failedLoadPdf, copy.invalidPdf])

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()
      setIsDragOver(false)
      const droppedFiles = Array.from(event.dataTransfer.files)
      if (droppedFiles.length > 0) {
        setFile(droppedFiles[0])
        loadPdf(droppedFiles[0])
      }
    },
    [loadPdf]
  )

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        setFile(event.target.files[0])
        loadPdf(event.target.files[0])
      }
    },
    [loadPdf]
  )

  const getCanvasCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }

  const handlePdfClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPlacing || !selectedSignature) return
    const canvas = canvasRef.current
    if (!canvas) return

    const coords = getCanvasCoords(event)
    const baseWidth = selectedSignature.kind === "initials" ? 150 : 220
    const ratio = selectedSignature.width / selectedSignature.height
    const sigWidth = baseWidth
    const sigHeight = sigWidth / ratio

    const newSignature: PlacedSignature = {
      id: crypto.randomUUID(),
      page: currentPage,
      x: (coords.x - sigWidth / 2) / canvas.width,
      y: (coords.y - sigHeight / 2) / canvas.height,
      width: sigWidth / canvas.width,
      height: sigHeight / canvas.height,
      assetId: selectedSignature.id,
      assetUrl: selectedSignature.assetUrl,
      kind: selectedSignature.kind,
    }

    setPlacedSignatures((prev) => [...prev, newSignature])
    setIsPlacing(false)
    setPlacingPreview(null)
  }

  const handlePdfMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPlacing) return
    setPlacingPreview(getCanvasCoords(event))
  }

  const removePlacedSignature = useCallback((id: string) => {
    setPlacedSignatures((prev) => prev.filter((signature) => signature.id !== id))
  }, [])

  const handleDeleteSessionSignature = useCallback(
    (signatureId: string) => {
      if (placedSignatures.some((placed) => placed.assetId === signatureId)) {
        setHasError(true)
        setErrorMessage(copy.removeSessionSig)
        return
      }

      setSessionSignatures((prev) => prev.filter((signature) => signature.id !== signatureId))
      if (selectedSignatureId === signatureId) {
        setSelectedSignatureId("")
        setIsPlacing(false)
      }
    },
    [copy.removeSessionSig, placedSignatures, selectedSignatureId]
  )

  const applySignatures = useCallback(async () => {
    if (!file || placedSignatures.length === 0) return

    setIsProcessing(true)
    setHasError(false)

    try {
      const inputUrl = await uploadFileToBlob(file)
      const signaturesPayload = placedSignatures.map((signature) => ({
        page: signature.page,
        x: signature.x,
        y: signature.y,
        width: signature.width,
        height: signature.height,
        signatureSource: signature.assetUrl,
      }))

      const response = await fetch("/api/esign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl: inputUrl,
          originalName: file.name,
          signatures: signaturesPayload,
        }),
      })

      if (!response.ok) {
        let message = `Signing failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required")) {
            router.push("/pricing?source=esign")
            return
          }
        } catch {
          // ignore JSON parse failure
        }
        throw new Error(message)
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const baseName = file.name.replace(/\.[^/.]+$/, "")
      setResultUrl(url)
      setResultName(`${baseName}-signed.pdf`)
      setIsComplete(true)
    } catch (error) {
      setHasError(true)
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsProcessing(false)
    }
  }, [file, placedSignatures, router])

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
    setCurrentPage(0)
    setTotalPages(0)
    setSessionSignatures([])
    setSelectedSignatureId("")
    setPlacedSignatures([])
    setIsPlacing(false)
    setPlacingPreview(null)
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setResultUrl("")
    setResultName("")
  }, [resultUrl])

  if (!isBusinessUser && userPlan !== "loading") {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.25), rgba(107,124,255,0.35), rgba(232,129,58,0.2), rgba(107,124,255,0.4))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Business Feature</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(107,124,255,0.3), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#6B7CFF]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{copy.businessFeature}</h2>
                <p className="text-sm text-slate-400 mb-6">{copy.businessBody}</p>
                <Button onClick={() => router.push(copy.pricingPath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{copy.upgradeCta}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (hasError) {
    const isUpgradeError = (errorMessage || "").includes("upgrade_required")
    const isLimitError = (errorMessage || "").toLowerCase().includes("daily limit reached") || (errorMessage || "").includes("daily_limit_reached")
    const isSignupError = (errorMessage || "").includes("signup_required")

    if (isSignupError) {
      router.push(copy.signupRequiredPath)
      return null
    }

    if (isUpgradeError || isLimitError) {
      return (
        <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto relative">
              <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.25), rgba(107,124,255,0.35), rgba(232,129,58,0.2), rgba(107,124,255,0.4))" }}>
                <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Business Feature</div>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(107,124,255,0.3), 0 4px 8px rgba(0,0,0,0.2)" }}>
                    <Crown className="h-7 w-7 text-[#6B7CFF]" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {isUpgradeError ? copy.upgradeRequiredTitle : copy.outOfFreeTitle}
                  </h2>
                  <p className="text-sm text-slate-400 mb-6">
                    {isUpgradeError ? copy.upgradeBody : copy.limitBody}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button onClick={() => router.push(copy.pricingPath)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">
                      {copy.upgradeButton}
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

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.signingFailed}</h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button onClick={resetInterface} className="bg-orange-500 hover:bg-orange-600 text-white">
              {copy.tryAgain}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  if (isComplete) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.documentSigned}</h2>
            <p className="text-slate-600 mb-2">
              {placedSignatures.length} signature{placedSignatures.length > 1 ? "s" : ""} applied across {new Set(placedSignatures.map((signature) => signature.page)).size} page{new Set(placedSignatures.map((signature) => signature.page)).size > 1 ? "s" : ""}.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <div className="text-left">
                    <div className="font-bold text-slate-900">{resultName}</div>
                    <div className="text-sm text-green-600">{copy.readyDownload}</div>
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
                {copy.signAnother}
              </Button>
              <Button onClick={() => (window.location.href = copy.homePath)} className="bg-orange-500 hover:bg-orange-600 text-white">
                {copy.backToTools}
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (isProcessing) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{copy.applying}</h2>
            <p className="text-slate-600">{copy.embedding} {placedSignatures.length} {copy.signature.toLowerCase()}{placedSignatures.length > 1 ? "s" : ""}...</p>
          </div>
        </div>
      </section>
    )
  }

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
                  onDragOver={(event) => {
                    event.preventDefault()
                    setIsDragOver(true)
                  }}
                  onDragLeave={(event) => {
                    event.preventDefault()
                    setIsDragOver(false)
                  }}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("esign-file-upload")?.click()}
                >
                  <Upload className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{copy.uploadTitle}</h3>
                  <p className="text-slate-600 mb-6">{copy.uploadBrowse}</p>
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8">
                    {copy.choosePdf}
                  </Button>
                  <p className="text-sm text-slate-500 mt-4">{copy.supportedFormat}</p>
                </div>
                <input id="esign-file-upload" type="file" accept=".pdf" className="hidden" onClick={(e) => { (e.target as HTMLInputElement).value = "" }} onChange={handleFileSelect} />
                <TrustBadges />
              </>
            )}
          </div>
        </div>
      </section>
    )
  }

  const pageSignatures = placedSignatures.filter((signature) => signature.page === currentPage)
  const totalPlaced = placedSignatures.length

  return (
    <>
      <CreateSignatureModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        locale={locale}
        onSaved={(signature) => {
          setSessionSignatures((prev) => [signature, ...prev.filter((item) => item.id !== signature.id)])
          setSelectedSignatureId(signature.id)
        }}
      />

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900">{copy.signatureChoices}</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {copy.signatureChoicesBody}
                      </p>
                    </div>
                    <Button onClick={() => setIsCreateModalOpen(true)} className="bg-slate-900 hover:bg-slate-800 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      {copy.create}
                    </Button>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 mb-4">
                    <p className="text-xs text-slate-500">
                      {copy.signatureNotice}
                    </p>
                  </div>

                  {sessionSignatures.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                      <Signature className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                      <p className="font-semibold text-slate-900">{copy.noSignatures}</p>
                      <p className="text-sm text-slate-500 mt-1">{copy.noSignaturesBody}</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
                      {sessionSignatures.map((signature) => (
                        <div
                          key={signature.id}
                          className={cn(
                            "rounded-2xl border p-4 transition-colors",
                            selectedSignatureId === signature.id ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedSignatureId(signature.id)}
                            className="w-full text-left"
                          >
                            <div className="mb-3 flex items-center justify-between">
                              <div className="flex gap-2">
                                <span className="rounded-full bg-slate-900 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                                  {signature.kind}
                                </span>
                                <span className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                                  {signature.method}
                                </span>
                              </div>
                              {selectedSignatureId === signature.id && <CheckCircle className="h-4 w-4 text-slate-900" />}
                            </div>

                            <div className="rounded-xl border border-dashed border-slate-200 bg-white p-4 min-h-[100px] flex items-center justify-center">
                              <img src={signature.previewUrl || signature.assetUrl} alt={`${signature.kind} preview`} className="max-h-16 w-auto" />
                            </div>

                            <p className="mt-3 text-xs text-slate-500">
                              {copy.created} {new Date(signature.createdAt).toLocaleTimeString()}
                            </p>
                          </button>

                          <div className="mt-3 flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                              onClick={() => {
                                setSelectedSignatureId(signature.id)
                                setIsPlacing(true)
                              }}
                            >
                              <PenTool className="h-4 w-4 mr-2" />
                              {copy.placeOnPdf}
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteSessionSignature(signature.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {totalPlaced > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <h3 className="font-bold text-slate-900 mb-3">{copy.placedSignatures} ({totalPlaced})</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {placedSignatures.map((signature, index) => (
                        <div key={signature.id} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
                          <span className="text-xs text-slate-600">
                            {signature.kind === "initials" ? copy.initials : copy.signature} {index + 1} — {copy.page} {signature.page + 1}
                          </span>
                          <button onClick={() => removePlacedSignature(signature.id)} className="text-red-400 hover:text-red-600">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  onClick={applySignatures}
                  disabled={totalPlaced === 0}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base py-3 disabled:opacity-50"
                  size="lg"
                >
                  <PenTool className="h-5 w-5 mr-2" />
                  {copy.applyButton} {totalPlaced} {copy.signature}{totalPlaced !== 1 ? "s" : ""}
                </Button>
              </div>

              <div>
                <div className="bg-white border border-gray-200 rounded-xl p-3 mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-indigo-600" />
                    <span className="font-bold text-slate-900 text-sm truncate max-w-[220px]">{file.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled={currentPage === 0} onClick={() => setCurrentPage((page) => page - 1)}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium text-slate-700 min-w-[92px] text-center">
                      {copy.page} {currentPage + 1} {copy.of} {totalPages}
                    </span>
                    <Button variant="outline" size="sm" disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage((page) => page + 1)}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button variant="outline" size="sm" onClick={resetInterface} className="text-xs">
                    <X className="h-3 w-3 mr-1" />
                    {copy.newFile}
                  </Button>
                </div>

                {isPlacing && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-3 text-center">
                    <p className="text-sm text-indigo-800 font-medium">
                      {copy.placeHintPrefix} {selectedSignature?.kind === "initials" ? copy.initials.toLowerCase() : copy.signature.toLowerCase()}.
                    </p>
                  </div>
                )}

                <div ref={containerRef} className="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden">
                  <canvas
                    ref={canvasRef}
                    className={cn("w-full block", isPlacing ? "cursor-pointer" : "cursor-default")}
                    onClick={handlePdfClick}
                    onMouseMove={handlePdfMouseMove}
                  />
                </div>

                {pageSignatures.length > 0 && (
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    {pageSignatures.length} signature{pageSignatures.length !== 1 ? "s" : ""} on this page
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
