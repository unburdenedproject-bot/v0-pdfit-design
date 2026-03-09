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
import { TrustBadges } from "@/components/trust-badges"

interface RedactionRect {
  page: number
  x: number
  y: number
  width: number
  height: number
  id: string
}

export function RedactionInterface() {
  const router = useRouter()
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

  const isBusinessUser = userPlan === "business"

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
            router.push("/pricing?source=redaction")
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
    } catch (error) {
      setHasError(true)
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
      setIsProcessing(false)
    }
  }, [createRedactedPageBlob, file, redactions, router])

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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Business Feature</h2>
            <p className="text-lg text-slate-600 mb-8">
              PDF Redaction is available on the Business plan. Permanently remove sensitive information from your documents.
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-8 py-3 text-lg"
              onClick={() => router.push("/pricing?source=redaction")}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Redaction Failed</h2>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Redaction Complete!</h2>
            <p className="text-slate-600 mb-2">
              {redactions.length} area{redactions.length > 1 ? "s" : ""} permanently redacted across {new Set(redactions.map((r) => r.page)).size} page{new Set(redactions.map((r) => r.page)).size > 1 ? "s" : ""}.
            </p>
            <p className="text-sm text-red-600 font-medium mb-8">
              The underlying text has been permanently removed and cannot be recovered.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
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
                Redact Another PDF
              </Button>
              <Button onClick={() => (window.location.href = "/")} className="bg-orange-500 hover:bg-orange-600 text-white">
                Back to Tools
              </Button>
            </div>

            <div className="mt-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-blue-800 text-sm">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">Files are automatically deleted after 1 hour.</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Applying Redactions...</h2>
            <p className="text-slate-600">Permanently removing {redactions.length} selected area{redactions.length > 1 ? "s" : ""}...</p>
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
                  onClick={() => document.getElementById("redaction-file-upload")?.click()}
                >
                  <Upload className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Upload your PDF to redact</h3>
                  <p className="text-slate-600 mb-6">or click to browse files</p>
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8">
                    Choose PDF
                  </Button>
                  <p className="text-sm text-slate-500 mt-4">Supported format: .pdf</p>
                </div>
                <input
                  id="redaction-file-upload"
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
                Page {currentPage + 1} of {totalPages}
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
                  Clear Page
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={resetInterface}
                className="text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                New File
              </Button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-4 text-center">
            <p className="text-sm text-indigo-800 font-medium">
              Click and drag on the PDF to draw black redaction boxes. Navigate pages to redact across the entire document.
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
                  <strong>{totalRedactions}</strong> redaction{totalRedactions !== 1 ? "s" : ""} total
                  {pageRedactions.length > 0 && (
                    <span className="text-slate-400"> ({pageRedactions.length} on this page)</span>
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
                    Area {i + 1}
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
            Apply Redaction ({totalRedactions} area{totalRedactions !== 1 ? "s" : ""})
          </Button>

          <p className="text-center text-xs text-red-500 mt-2 font-medium">
            This action is permanent. Redacted content cannot be recovered.
          </p>
        </div>
      </div>
    </section>
  )
}
