"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Upload, FileText, X, Download, CheckCircle, Loader2, AlertCircle,
  PenTool, Crown, ChevronLeft, ChevronRight, Trash2, Type, ImageIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadBlobToBlob, uploadFileToBlob } from "@/lib/upload-to-blob"
import { TrustBadges } from "@/components/trust-badges"

type SignatureMode = "draw" | "type" | "upload"

interface PlacedSignature {
  id: string
  page: number
  x: number      // ratio 0-1
  y: number      // ratio 0-1
  width: number   // ratio 0-1
  height: number  // ratio 0-1
  imageDataUrl: string
}

export function EsignInterface() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sigCanvasRef = useRef<HTMLCanvasElement>(null)

  const [userPlan, setUserPlan] = useState<string>("free")
  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [pageImages, setPageImages] = useState<string[]>([])
  const [pageSizes, setPageSizes] = useState<{ width: number; height: number }[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoadingPdf, setIsLoadingPdf] = useState(false)

  // Signature creation
  const [signatureMode, setSignatureMode] = useState<SignatureMode>("draw")
  const [signatureReady, setSignatureReady] = useState(false)
  const [signatureDataUrl, setSignatureDataUrl] = useState<string>("")
  const [isDrawingSig, setIsDrawingSig] = useState(false)
  const [typedName, setTypedName] = useState("")
  const [signatureFont, setSignatureFont] = useState("cursive")

  // Placing signatures on PDF
  const [placedSignatures, setPlacedSignatures] = useState<PlacedSignature[]>([])
  const [isPlacing, setIsPlacing] = useState(false)
  const [placingPreview, setPlacingPreview] = useState<{ x: number; y: number } | null>(null)

  // Processing
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [resultUrl, setResultUrl] = useState("")
  const [resultName, setResultName] = useState("")

  const isBusinessUser = userPlan === "business"

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  // Render current page with placed signatures
  const renderPage = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || pageImages.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new window.Image()
    img.onload = () => {
      const containerWidth = container.clientWidth
      const scale = containerWidth / img.width
      const displayWidth = containerWidth
      const displayHeight = img.height * scale

      canvas.width = displayWidth
      canvas.height = displayHeight

      ctx.drawImage(img, 0, 0, displayWidth, displayHeight)

      // Draw placed signatures for this page
      const pageSigs = placedSignatures.filter((s) => s.page === currentPage)
      for (const sig of pageSigs) {
        const sigImg = new window.Image()
        sigImg.onload = () => {
          ctx.drawImage(
            sigImg,
            sig.x * displayWidth,
            sig.y * displayHeight,
            sig.width * displayWidth,
            sig.height * displayHeight
          )
        }
        sigImg.src = sig.imageDataUrl
      }

      // Draw placing preview
      if (isPlacing && placingPreview && signatureDataUrl) {
        const previewImg = new window.Image()
        previewImg.onload = () => {
          const sigW = 200
          const sigH = 80
          ctx.globalAlpha = 0.6
          ctx.drawImage(previewImg, placingPreview.x - sigW / 2, placingPreview.y - sigH / 2, sigW, sigH)
          ctx.globalAlpha = 1.0
        }
        previewImg.src = signatureDataUrl
      }
    }
    img.src = pageImages[currentPage]
  }, [pageImages, currentPage, placedSignatures, isPlacing, placingPreview, signatureDataUrl])

  useEffect(() => {
    renderPage()
  }, [renderPage])

  useEffect(() => {
    const handleResize = () => renderPage()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [renderPage])

  // Load PDF
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
      setErrorMessage("Failed to load PDF. The file may be corrupted or password-protected.")
      setIsLoadingPdf(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) {
      setFile(droppedFiles[0])
      loadPdf(droppedFiles[0])
    }
  }, [loadPdf])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      loadPdf(e.target.files[0])
    }
  }, [loadPdf])

  // --- Signature Drawing ---
  const initSigCanvas = useCallback(() => {
    const canvas = sigCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  useEffect(() => {
    if (signatureMode === "draw") {
      setTimeout(initSigCanvas, 100)
    }
  }, [signatureMode, initSigCanvas])

  const handleSigMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawingSig(true)
    const canvas = sigCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const rect = canvas.getBoundingClientRect()
    ctx.beginPath()
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
    ctx.strokeStyle = "#1a1a2e"
    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
  }

  const handleSigMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingSig) return
    const canvas = sigCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const rect = canvas.getBoundingClientRect()
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
    ctx.stroke()
  }

  const handleSigMouseUp = () => {
    setIsDrawingSig(false)
  }

  const clearSigCanvas = () => {
    initSigCanvas()
    setSignatureReady(false)
    setSignatureDataUrl("")
  }

  const confirmDrawnSignature = () => {
    const canvas = sigCanvasRef.current
    if (!canvas) return
    const dataUrl = canvas.toDataURL("image/png")
    setSignatureDataUrl(dataUrl)
    setSignatureReady(true)
  }

  // --- Typed Signature ---
  const confirmTypedSignature = useCallback(() => {
    if (!typedName.trim()) return
    const canvas = document.createElement("canvas")
    canvas.width = 400
    canvas.height = 160
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 400, 160)

    const fontFamily = signatureFont === "cursive"
      ? "'Brush Script MT', 'Segoe Script', cursive"
      : signatureFont === "serif"
        ? "'Times New Roman', Georgia, serif"
        : "'Courier New', monospace"

    ctx.font = `48px ${fontFamily}`
    ctx.fillStyle = "#1a1a2e"
    ctx.textBaseline = "middle"
    ctx.textAlign = "center"
    ctx.fillText(typedName, 200, 80)

    const dataUrl = canvas.toDataURL("image/png")
    setSignatureDataUrl(dataUrl)
    setSignatureReady(true)
  }, [typedName, signatureFont])

  // --- Upload Signature Image ---
  const handleSigImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (!uploadedFile) return

    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result as string
      setSignatureDataUrl(dataUrl)
      setSignatureReady(true)
    }
    reader.readAsDataURL(uploadedFile)
  }

  // --- Place signature on PDF ---
  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handlePdfClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPlacing || !signatureDataUrl) return
    const canvas = canvasRef.current
    if (!canvas) return

    const coords = getCanvasCoords(e)
    const sigW = 200
    const sigH = 80

    const newSig: PlacedSignature = {
      id: crypto.randomUUID(),
      page: currentPage,
      x: (coords.x - sigW / 2) / canvas.width,
      y: (coords.y - sigH / 2) / canvas.height,
      width: sigW / canvas.width,
      height: sigH / canvas.height,
      imageDataUrl: signatureDataUrl,
    }

    setPlacedSignatures((prev) => [...prev, newSig])
    setIsPlacing(false)
    setPlacingPreview(null)
  }

  const handlePdfMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPlacing) return
    const coords = getCanvasCoords(e)
    setPlacingPreview(coords)
  }

  const removeSignature = useCallback((id: string) => {
    setPlacedSignatures((prev) => prev.filter((s) => s.id !== id))
  }, [])

  // --- Apply signatures ---
  const applySignatures = useCallback(async () => {
    if (!file || placedSignatures.length === 0) return

    setIsProcessing(true)
    setHasError(false)

    try {
      const inputUrl = await uploadFileToBlob(file)

      // Upload each unique signature image
      const sigImageMap = new Map<string, string>()
      for (const sig of placedSignatures) {
        if (!sigImageMap.has(sig.imageDataUrl)) {
          const response = await fetch(sig.imageDataUrl)
          const blob = await response.blob()
          const blobUrl = await uploadBlobToBlob(blob, `signature-${sigImageMap.size + 1}.png`)
          sigImageMap.set(sig.imageDataUrl, blobUrl)
        }
      }

      const signatures = placedSignatures.map((sig) => ({
        page: sig.page,
        x: sig.x,
        y: sig.y,
        width: sig.width,
        height: sig.height,
        signatureBlobUrl: sigImageMap.get(sig.imageDataUrl)!,
      }))

      const res = await fetch("/api/esign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl: inputUrl,
          originalName: file.name,
          signatures,
        }),
      })

      if (!res.ok) {
        let message = `Signing failed (HTTP ${res.status})`
        try {
          const errorData = await res.json()
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required")) {
            router.push("/pricing?source=esign")
            return
          }
        } catch { }
        throw new Error(message)
      }

      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const baseName = file.name.replace(/\.[^/.]+$/, "")
      setResultUrl(url)
      setResultName(`${baseName}-signed.pdf`)
      setIsComplete(true)
      setIsProcessing(false)
    } catch (error) {
      setHasError(true)
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
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
    setPageSizes([])
    setCurrentPage(0)
    setTotalPages(0)
    setPlacedSignatures([])
    setSignatureReady(false)
    setSignatureDataUrl("")
    setTypedName("")
    setIsPlacing(false)
    setPlacingPreview(null)
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setResultUrl("")
    setResultName("")
  }, [resultUrl])

  // --- Render states ---

  // Not Business user
  if (!isBusinessUser && userPlan !== "loading") {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Business Feature</h2>
            <p className="text-lg text-slate-600 mb-8">
              eSign Documents is available on the Business plan. Add electronic signatures to your PDFs with a visual editor.
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-8 py-3 text-lg"
              onClick={() => router.push("/pricing?source=esign")}
            >
              Upgrade to Business — $13.99/mo
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (hasError) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Signing Failed</h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button onClick={resetInterface} className="bg-orange-500 hover:bg-orange-600 text-white">
              Try Again
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Document Signed!</h2>
            <p className="text-slate-600 mb-2">
              {placedSignatures.length} signature{placedSignatures.length > 1 ? "s" : ""} applied across {new Set(placedSignatures.map((s) => s.page)).size} page{new Set(placedSignatures.map((s) => s.page)).size > 1 ? "s" : ""}.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <div className="text-left">
                    <div className="font-bold text-slate-900">{resultName}</div>
                    <div className="text-sm text-green-600">Ready for download</div>
                  </div>
                </div>
                <Button onClick={downloadResult} className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetInterface} variant="outline" className="border-slate-300">
                Sign Another PDF
              </Button>
              <Button onClick={() => (window.location.href = "/")} className="bg-orange-500 hover:bg-orange-600 text-white">
                Back to Tools
              </Button>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Applying Signatures...</h2>
            <p className="text-slate-600">Embedding {placedSignatures.length} signature{placedSignatures.length > 1 ? "s" : ""} into your PDF...</p>
          </div>
        </div>
      </section>
    )
  }

  // Upload state
  if (!file || pageImages.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {isLoadingPdf ? (
              <div className="text-center py-16">
                <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Loading PDF pages...</p>
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
                  onClick={() => document.getElementById("esign-file-upload")?.click()}
                >
                  <Upload className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Upload your PDF to sign</h3>
                  <p className="text-slate-600 mb-6">or click to browse files</p>
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8">
                    Choose PDF
                  </Button>
                  <p className="text-sm text-slate-500 mt-4">Supported format: .pdf</p>
                </div>
                <input
                  id="esign-file-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
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

  // Editor state — PDF loaded
  const pageSigs = placedSignatures.filter((s) => s.page === currentPage)
  const totalSigs = placedSignatures.length

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left: Signature Panel */}
            <div className="lg:col-span-1 space-y-4">
              {/* Signature Creator */}
              {!signatureReady ? (
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">Create Your Signature</h3>

                  {/* Mode tabs */}
                  <div className="flex gap-1 mb-4 bg-gray-100 rounded-lg p-1">
                    <button
                      className={cn("flex-1 text-xs font-semibold py-2 px-2 rounded-md transition-colors flex items-center justify-center gap-1",
                        signatureMode === "draw" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                      onClick={() => setSignatureMode("draw")}
                    >
                      <PenTool className="h-3 w-3" /> Draw
                    </button>
                    <button
                      className={cn("flex-1 text-xs font-semibold py-2 px-2 rounded-md transition-colors flex items-center justify-center gap-1",
                        signatureMode === "type" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                      onClick={() => setSignatureMode("type")}
                    >
                      <Type className="h-3 w-3" /> Type
                    </button>
                    <button
                      className={cn("flex-1 text-xs font-semibold py-2 px-2 rounded-md transition-colors flex items-center justify-center gap-1",
                        signatureMode === "upload" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                      onClick={() => setSignatureMode("upload")}
                    >
                      <ImageIcon className="h-3 w-3" /> Upload
                    </button>
                  </div>

                  {/* Draw mode */}
                  {signatureMode === "draw" && (
                    <div>
                      <canvas
                        ref={sigCanvasRef}
                        width={320}
                        height={140}
                        className="w-full border border-gray-300 rounded-lg cursor-crosshair bg-white"
                        onMouseDown={handleSigMouseDown}
                        onMouseMove={handleSigMouseMove}
                        onMouseUp={handleSigMouseUp}
                        onMouseLeave={handleSigMouseUp}
                      />
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline" onClick={clearSigCanvas} className="flex-1 text-xs">
                          Clear
                        </Button>
                        <Button size="sm" onClick={confirmDrawnSignature} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs">
                          Use Signature
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Type mode */}
                  {signatureMode === "type" && (
                    <div>
                      <input
                        type="text"
                        placeholder="Type your name..."
                        value={typedName}
                        onChange={(e) => setTypedName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        style={{ fontFamily: signatureFont === "cursive" ? "'Brush Script MT', 'Segoe Script', cursive" : signatureFont === "serif" ? "'Times New Roman', Georgia, serif" : "'Courier New', monospace" }}
                      />
                      <div className="flex gap-2 mb-3">
                        {["cursive", "serif", "monospace"].map((font) => (
                          <button
                            key={font}
                            onClick={() => setSignatureFont(font)}
                            className={cn(
                              "flex-1 text-xs py-1.5 rounded-md border transition-colors",
                              signatureFont === font ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-gray-200 text-slate-500 hover:border-gray-300"
                            )}
                            style={{ fontFamily: font === "cursive" ? "cursive" : font === "serif" ? "serif" : "monospace" }}
                          >
                            {font === "cursive" ? "Script" : font === "serif" ? "Serif" : "Mono"}
                          </button>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        onClick={confirmTypedSignature}
                        disabled={!typedName.trim()}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs disabled:opacity-50"
                      >
                        Use Signature
                      </Button>
                    </div>
                  )}

                  {/* Upload mode */}
                  {signatureMode === "upload" && (
                    <div>
                      <label className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-400 hover:bg-gray-50 transition-colors">
                        <ImageIcon className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600 mb-1">Upload signature image</p>
                        <p className="text-xs text-slate-400">PNG, JPG, or SVG</p>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleSigImageUpload}
                        />
                      </label>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">Your Signature</h3>
                  <div className="border border-gray-200 rounded-lg p-2 bg-gray-50 mb-3">
                    <img src={signatureDataUrl} alt="Your signature" className="max-h-20 mx-auto" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => { setSignatureReady(false); setSignatureDataUrl("") }}
                      className="flex-1 text-xs"
                    >
                      Change
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setIsPlacing(true)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs"
                    >
                      <PenTool className="h-3 w-3 mr-1" />
                      Place on PDF
                    </Button>
                  </div>
                </div>
              )}

              {/* Placed signatures list */}
              {totalSigs > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">
                    Placed Signatures ({totalSigs})
                  </h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {placedSignatures.map((sig, i) => (
                      <div key={sig.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-xs text-slate-600">
                          Signature {i + 1} — Page {sig.page + 1}
                        </span>
                        <button onClick={() => removeSignature(sig.id)} className="text-red-400 hover:text-red-600">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Apply Button */}
              <Button
                onClick={applySignatures}
                disabled={totalSigs === 0}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base py-3 disabled:opacity-50"
                size="lg"
              >
                <PenTool className="h-5 w-5 mr-2" />
                Apply {totalSigs} Signature{totalSigs !== 1 ? "s" : ""}
              </Button>
            </div>

            {/* Right: PDF Preview */}
            <div className="lg:col-span-2">
              {/* Toolbar */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-indigo-600" />
                  <span className="font-bold text-slate-900 text-sm truncate max-w-[180px]">{file.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled={currentPage === 0} onClick={() => setCurrentPage((p) => p - 1)}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium text-slate-700 min-w-[80px] text-center">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  <Button variant="outline" size="sm" disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage((p) => p + 1)}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" size="sm" onClick={resetInterface} className="text-xs">
                  <X className="h-3 w-3 mr-1" /> New File
                </Button>
              </div>

              {/* Placing instruction */}
              {isPlacing && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-3 text-center">
                  <p className="text-sm text-indigo-800 font-medium">
                    Click on the PDF where you want to place your signature.
                  </p>
                </div>
              )}

              {/* Canvas */}
              <div ref={containerRef} className="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden">
                <canvas
                  ref={canvasRef}
                  className={cn("w-full block", isPlacing ? "cursor-pointer" : "cursor-default")}
                  onClick={handlePdfClick}
                  onMouseMove={handlePdfMouseMove}
                />
              </div>

              {pageSigs.length > 0 && (
                <p className="text-xs text-slate-500 mt-2 text-center">
                  {pageSigs.length} signature{pageSigs.length !== 1 ? "s" : ""} on this page
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
