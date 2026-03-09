"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Upload, FileText, X, Download, CheckCircle, Loader2, AlertCircle,
  ArrowLeftRight, Crown, ChevronLeft, ChevronRight, Eye, Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { TrustBadges } from "@/components/trust-badges"

type ViewMode = "side-by-side" | "overlay" | "diff"

export function PdfCompareInterface() {
  const router = useRouter()
  const canvasLeftRef = useRef<HTMLCanvasElement>(null)
  const canvasRightRef = useRef<HTMLCanvasElement>(null)
  const canvasDiffRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [userPlan, setUserPlan] = useState<string>("free")
  const [fileA, setFileA] = useState<File | null>(null)
  const [fileB, setFileB] = useState<File | null>(null)
  const [isDragOverA, setIsDragOverA] = useState(false)
  const [isDragOverB, setIsDragOverB] = useState(false)
  const [pagesA, setPagesA] = useState<string[]>([])
  const [pagesB, setPagesB] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPagesA, setTotalPagesA] = useState(0)
  const [totalPagesB, setTotalPagesB] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>("side-by-side")
  const [diffPercentages, setDiffPercentages] = useState<number[]>([])
  const [diffRegionsMap, setDiffRegionsMap] = useState<Map<number, { x: number; y: number; w: number; h: number }[]>>(new Map())
  const [diffImagesMap, setDiffImagesMap] = useState<Map<number, string>>(new Map())
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const isBusinessUser = userPlan === "business"
  const maxPages = Math.max(totalPagesA, totalPagesB)
  const isReady = pagesA.length > 0 && pagesB.length > 0

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  // Load PDF into page images
  const loadPdf = useCallback(async (pdfFile: File): Promise<string[]> => {
    const pdfjsLib = await import("pdfjs-dist")
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

    const arrayBuffer = await pdfFile.arrayBuffer()
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

    const images: string[] = []
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const viewport = page.getViewport({ scale: 1.5 })

      const offscreen = document.createElement("canvas")
      offscreen.width = viewport.width
      offscreen.height = viewport.height
      const ctx = offscreen.getContext("2d")!

      await page.render({ canvasContext: ctx, viewport }).promise
      images.push(offscreen.toDataURL("image/png"))
    }

    return images
  }, [])

  const handleFileA = useCallback(async (file: File) => {
    setFileA(file)
    setIsLoading(true)
    setHasError(false)
    try {
      const images = await loadPdf(file)
      setPagesA(images)
      setTotalPagesA(images.length)
      setCurrentPage(0)
    } catch (err) {
      setHasError(true)
      setErrorMessage("Failed to load the first PDF. It may be corrupted or password-protected.")
    }
    setIsLoading(false)
  }, [loadPdf])

  const handleFileB = useCallback(async (file: File) => {
    setFileB(file)
    setIsLoading(true)
    setHasError(false)
    try {
      const images = await loadPdf(file)
      setPagesB(images)
      setTotalPagesB(images.length)
      setCurrentPage(0)
    } catch (err) {
      setHasError(true)
      setErrorMessage("Failed to load the second PDF. It may be corrupted or password-protected.")
    }
    setIsLoading(false)
  }, [loadPdf])

  // Compute pixel diff between two images and find bounding boxes of changed regions
  const computeDiff = useCallback((imgA: HTMLImageElement, imgB: HTMLImageElement): { diffDataUrl: string; diffPercent: number; diffRegions: { x: number; y: number; w: number; h: number }[] } => {
    const w = Math.max(imgA.width, imgB.width)
    const h = Math.max(imgA.height, imgB.height)

    const canvasA = document.createElement("canvas")
    canvasA.width = w
    canvasA.height = h
    const ctxA = canvasA.getContext("2d")!
    ctxA.fillStyle = "white"
    ctxA.fillRect(0, 0, w, h)
    ctxA.drawImage(imgA, 0, 0, imgA.width, imgA.height)

    const canvasB = document.createElement("canvas")
    canvasB.width = w
    canvasB.height = h
    const ctxB = canvasB.getContext("2d")!
    ctxB.fillStyle = "white"
    ctxB.fillRect(0, 0, w, h)
    ctxB.drawImage(imgB, 0, 0, imgB.width, imgB.height)

    const dataA = ctxA.getImageData(0, 0, w, h)
    const dataB = ctxB.getImageData(0, 0, w, h)

    const diffCanvas = document.createElement("canvas")
    diffCanvas.width = w
    diffCanvas.height = h
    const ctxDiff = diffCanvas.getContext("2d")!
    const diffData = ctxDiff.createImageData(w, h)

    // Track which pixels are different using a grid for region detection
    const blockSize = 16
    const gridW = Math.ceil(w / blockSize)
    const gridH = Math.ceil(h / blockSize)
    const diffGrid: boolean[][] = Array.from({ length: gridH }, () => Array(gridW).fill(false))

    let diffPixels = 0
    const totalPixels = w * h
    const threshold = 30

    for (let i = 0; i < dataA.data.length; i += 4) {
      const rDiff = Math.abs(dataA.data[i] - dataB.data[i])
      const gDiff = Math.abs(dataA.data[i + 1] - dataB.data[i + 1])
      const bDiff = Math.abs(dataA.data[i + 2] - dataB.data[i + 2])

      const pixelIndex = i / 4
      const px = pixelIndex % w
      const py = Math.floor(pixelIndex / w)

      if (rDiff > threshold || gDiff > threshold || bDiff > threshold) {
        // Highlight difference in red
        diffData.data[i] = 255
        diffData.data[i + 1] = 50
        diffData.data[i + 2] = 50
        diffData.data[i + 3] = 200
        diffPixels++
        diffGrid[Math.floor(py / blockSize)][Math.floor(px / blockSize)] = true
      } else {
        // Keep original but dimmed
        diffData.data[i] = Math.round(dataA.data[i] * 0.3 + 200 * 0.7)
        diffData.data[i + 1] = Math.round(dataA.data[i + 1] * 0.3 + 200 * 0.7)
        diffData.data[i + 2] = Math.round(dataA.data[i + 2] * 0.3 + 200 * 0.7)
        diffData.data[i + 3] = 255
      }
    }

    ctxDiff.putImageData(diffData, 0, 0)

    // Find bounding boxes of changed regions using connected components on the grid
    const visited: boolean[][] = Array.from({ length: gridH }, () => Array(gridW).fill(false))
    const regions: { x: number; y: number; w: number; h: number }[] = []

    for (let gy = 0; gy < gridH; gy++) {
      for (let gx = 0; gx < gridW; gx++) {
        if (diffGrid[gy][gx] && !visited[gy][gx]) {
          // Flood fill to find the full region
          let minX = gx, maxX = gx, minY = gy, maxY = gy
          const queue: [number, number][] = [[gx, gy]]
          visited[gy][gx] = true

          while (queue.length > 0) {
            const [cx, cy] = queue.shift()!
            for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]) {
              const nx = cx + dx
              const ny = cy + dy
              if (nx >= 0 && nx < gridW && ny >= 0 && ny < gridH && diffGrid[ny][nx] && !visited[ny][nx]) {
                visited[ny][nx] = true
                queue.push([nx, ny])
                minX = Math.min(minX, nx)
                maxX = Math.max(maxX, nx)
                minY = Math.min(minY, ny)
                maxY = Math.max(maxY, ny)
              }
            }
          }

          // Convert grid coordinates to pixel coordinates with padding
          const pad = blockSize
          regions.push({
            x: Math.max(0, minX * blockSize - pad),
            y: Math.max(0, minY * blockSize - pad),
            w: Math.min(w, (maxX + 1) * blockSize + pad) - Math.max(0, minX * blockSize - pad),
            h: Math.min(h, (maxY + 1) * blockSize + pad) - Math.max(0, minY * blockSize - pad),
          })
        }
      }
    }

    return {
      diffDataUrl: diffCanvas.toDataURL("image/png"),
      diffPercent: totalPixels > 0 ? (diffPixels / totalPixels) * 100 : 0,
      diffRegions: regions,
    }
  }, [])

  // Render comparison when both PDFs are loaded
  useEffect(() => {
    if (!isReady) return

    // Compute diff percentages, regions, and diff images for all pages
    const diffs: number[] = []
    const regionsMap = new Map<number, { x: number; y: number; w: number; h: number }[]>()
    const imagesMap = new Map<number, string>()

    const processPages = async () => {
      for (let i = 0; i < maxPages; i++) {
        if (pagesA[i] && pagesB[i]) {
          const imgA = new window.Image()
          const imgB = new window.Image()

          await Promise.all([
            new Promise<void>((resolve) => { imgA.onload = () => resolve(); imgA.src = pagesA[i] }),
            new Promise<void>((resolve) => { imgB.onload = () => resolve(); imgB.src = pagesB[i] }),
          ])

          const { diffPercent, diffRegions, diffDataUrl } = computeDiff(imgA, imgB)
          diffs.push(diffPercent)
          regionsMap.set(i, diffRegions)
          imagesMap.set(i, diffDataUrl)
        } else {
          diffs.push(100)
          regionsMap.set(i, [])
          imagesMap.set(i, "")
        }
      }
      setDiffPercentages(diffs)
      setDiffRegionsMap(regionsMap)
      setDiffImagesMap(imagesMap)
    }

    processPages()
  }, [isReady, pagesA, pagesB, maxPages, computeDiff])

  // Helper: draw red highlight rectangles around diff regions
  const drawDiffHighlights = (ctx: CanvasRenderingContext2D, regions: { x: number; y: number; w: number; h: number }[], scaleX: number, scaleY: number) => {
    ctx.strokeStyle = "rgba(255, 0, 0, 0.8)"
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(255, 0, 0, 0.08)"
    for (const r of regions) {
      const rx = r.x * scaleX
      const ry = r.y * scaleY
      const rw = r.w * scaleX
      const rh = r.h * scaleY
      ctx.fillRect(rx, ry, rw, rh)
      ctx.strokeRect(rx, ry, rw, rh)
    }
  }

  // Draw current page comparison
  useEffect(() => {
    if (!isReady) return

    const regions = diffRegionsMap.get(currentPage) || []

    const drawImageWithHighlights = (canvas: HTMLCanvasElement | null, src: string | undefined, showHighlights: boolean) => {
      if (!canvas || !src) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const img = new window.Image()
      img.onload = () => {
        const container = containerRef.current
        const maxWidth = container ? (container.clientWidth / (viewMode === "side-by-side" ? 2 : 1)) - 16 : 500
        const scale = Math.min(maxWidth / img.width, 1)
        canvas.width = img.width * scale
        canvas.height = img.height * scale
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        if (showHighlights && regions.length > 0) {
          const scaleX = canvas.width / img.width
          const scaleY = canvas.height / img.height
          drawDiffHighlights(ctx, regions, scaleX, scaleY)
        }
      }
      img.src = src
    }

    if (viewMode === "side-by-side") {
      drawImageWithHighlights(canvasLeftRef.current, pagesA[currentPage], true)
      drawImageWithHighlights(canvasRightRef.current, pagesB[currentPage], true)
    } else if (viewMode === "overlay") {
      const canvas = canvasLeftRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const imgA = new window.Image()
      imgA.onload = () => {
        const container = containerRef.current
        const maxWidth = container ? container.clientWidth - 32 : 800
        const scale = Math.min(maxWidth / imgA.width, 1)
        canvas.width = imgA.width * scale
        canvas.height = imgA.height * scale
        ctx.drawImage(imgA, 0, 0, canvas.width, canvas.height)

        if (pagesB[currentPage]) {
          const imgB = new window.Image()
          imgB.onload = () => {
            ctx.globalAlpha = 0.5
            ctx.drawImage(imgB, 0, 0, canvas.width, canvas.height)
            ctx.globalAlpha = 1.0

            // Draw highlights on overlay
            if (regions.length > 0) {
              const scaleX = canvas.width / imgA.width
              const scaleY = canvas.height / imgA.height
              drawDiffHighlights(ctx, regions, scaleX, scaleY)
            }
          }
          imgB.src = pagesB[currentPage]
        }
      }
      imgA.src = pagesA[currentPage] || ""
    } else if (viewMode === "diff") {
      const canvas = canvasLeftRef.current
      const diffSrc = diffImagesMap.get(currentPage)
      if (!canvas || !diffSrc) return

      const diffImg = new window.Image()
      diffImg.onload = () => {
        const container = containerRef.current
        const maxWidth = container ? container.clientWidth - 32 : 800
        const scale = Math.min(maxWidth / diffImg.width, 1)
        canvas.width = diffImg.width * scale
        canvas.height = diffImg.height * scale
        const ctx = canvas.getContext("2d")!
        ctx.drawImage(diffImg, 0, 0, canvas.width, canvas.height)

        // Draw region boxes on diff view too
        if (regions.length > 0) {
          const scaleX = canvas.width / diffImg.width
          const scaleY = canvas.height / diffImg.height
          ctx.strokeStyle = "rgba(255, 255, 0, 0.9)"
          ctx.lineWidth = 2
          for (const r of regions) {
            ctx.strokeRect(r.x * scaleX, r.y * scaleY, r.w * scaleX, r.h * scaleY)
          }
        }
      }
      diffImg.src = diffSrc
    }
  }, [isReady, currentPage, viewMode, pagesA, pagesB, diffRegionsMap, diffImagesMap])

  const handleDropA = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOverA(false)
    const files = Array.from(e.dataTransfer.files)
    if (files[0]) handleFileA(files[0])
  }

  const handleDropB = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOverB(false)
    const files = Array.from(e.dataTransfer.files)
    if (files[0]) handleFileB(files[0])
  }

  const resetInterface = useCallback(() => {
    setFileA(null)
    setFileB(null)
    setPagesA([])
    setPagesB([])
    setCurrentPage(0)
    setTotalPagesA(0)
    setTotalPagesB(0)
    setDiffPercentages([])
    setDiffRegionsMap(new Map())
    setDiffImagesMap(new Map())
    setHasError(false)
    setErrorMessage("")
  }, [])

  const downloadDiffReport = useCallback(() => {
    const identicalPages = diffPercentages.filter((p) => p < 0.1).length
    const changedPages = diffPercentages.filter((p) => p >= 0.1).length
    const avgDiff = diffPercentages.length > 0 ? diffPercentages.reduce((a, b) => a + b, 0) / diffPercentages.length : 0

    let report = "PDF COMPARE REPORT\n"
    report += "===================\n\n"
    report += `Original:  ${fileA?.name || "Unknown"} (${totalPagesA} pages)\n`
    report += `Modified:  ${fileB?.name || "Unknown"} (${totalPagesB} pages)\n\n`
    report += "SUMMARY\n"
    report += "-------\n"
    report += `Total pages compared: ${maxPages}\n`
    report += `Identical pages:      ${identicalPages}\n`
    report += `Changed pages:        ${changedPages}\n`
    report += `Average difference:   ${avgDiff.toFixed(2)}%\n`
    report += `Overall verdict:      ${changedPages === 0 ? "Documents are identical" : changedPages <= 2 ? "Minor revisions detected" : "Significant revisions detected"}\n\n`
    report += "PAGE-BY-PAGE BREAKDOWN\n"
    report += "----------------------\n"

    for (let i = 0; i < maxPages; i++) {
      const pct = diffPercentages[i]
      const regions = diffRegionsMap.get(i) || []

      if (pct !== undefined) {
        const status = pct < 0.1 ? "IDENTICAL" : pct < 5 ? "MINOR CHANGES" : pct < 20 ? "MODERATE CHANGES" : "MAJOR CHANGES"
        const marker = pct < 0.1 ? "  " : ">>"
        report += `${marker} Page ${i + 1}: ${pct.toFixed(2)}% different — ${status}`
        if (regions.length > 0) {
          report += ` (${regions.length} changed region${regions.length > 1 ? "s" : ""} detected)`
        }
        report += "\n"
      } else {
        report += `   Page ${i + 1}: Not analyzed\n`
      }
    }

    report += "\n---\nGenerated by OmnisPDF PDF Compare (omnispdf.com/pdf-compare)\n"

    const blob = new Blob([report], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "pdf-compare-report.txt"
    link.click()
    URL.revokeObjectURL(url)
  }, [fileA, fileB, totalPagesA, totalPagesB, maxPages, diffPercentages, diffRegionsMap])

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
              PDF Compare is available on the Business plan. Upload two PDFs and see exactly what changed between them.
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-8 py-3 text-lg"
              onClick={() => router.push("/pricing?source=pdf-compare")}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comparison Failed</h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button onClick={resetInterface} className="bg-orange-500 hover:bg-orange-600 text-white">
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Loading PDF pages...</p>
          </div>
        </div>
      </section>
    )
  }

  // Upload state — need both files
  if (!isReady) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* File A */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Original PDF</h3>
                {fileA && pagesA.length > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileA.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesA} page{totalPagesA !== 1 ? "s" : ""}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3 text-xs"
                      onClick={() => { setFileA(null); setPagesA([]); setTotalPagesA(0) }}
                    >
                      <X className="h-3 w-3 mr-1" /> Remove
                    </Button>
                  </div>
                ) : (
                  <div
                    className={cn(
                      "border-2 border-dashed rounded-xl p-8 transition-all duration-200 cursor-pointer text-center",
                      isDragOverA ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
                    )}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOverA(true) }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragOverA(false) }}
                    onDrop={handleDropA}
                    onClick={() => document.getElementById("compare-file-a")?.click()}
                  >
                    <Upload className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 mb-1">Upload original PDF</p>
                    <p className="text-sm text-slate-500">Drag and drop or click to browse</p>
                  </div>
                )}
                <input
                  id="compare-file-a"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => { if (e.target.files?.[0]) handleFileA(e.target.files[0]) }}
                />
              </div>

              {/* File B */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Modified PDF</h3>
                {fileB && pagesB.length > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileB.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesB} page{totalPagesB !== 1 ? "s" : ""}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3 text-xs"
                      onClick={() => { setFileB(null); setPagesB([]); setTotalPagesB(0) }}
                    >
                      <X className="h-3 w-3 mr-1" /> Remove
                    </Button>
                  </div>
                ) : (
                  <div
                    className={cn(
                      "border-2 border-dashed rounded-xl p-8 transition-all duration-200 cursor-pointer text-center",
                      isDragOverB ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
                    )}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOverB(true) }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragOverB(false) }}
                    onDrop={handleDropB}
                    onClick={() => document.getElementById("compare-file-b")?.click()}
                  >
                    <Upload className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 mb-1">Upload modified PDF</p>
                    <p className="text-sm text-slate-500">Drag and drop or click to browse</p>
                  </div>
                )}
                <input
                  id="compare-file-b"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => { if (e.target.files?.[0]) handleFileB(e.target.files[0]) }}
                />
              </div>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>
    )
  }

  // Comparison view
  const currentDiff = diffPercentages[currentPage]
  const diffLabel = currentDiff === undefined ? "Analyzing..." : currentDiff < 0.1 ? "Identical" : currentDiff < 5 ? "Minor changes" : currentDiff < 20 ? "Moderate changes" : "Major changes"
  const diffColor = currentDiff === undefined ? "text-slate-500" : currentDiff < 0.1 ? "text-green-600" : currentDiff < 5 ? "text-yellow-600" : currentDiff < 20 ? "text-orange-600" : "text-red-600"

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Toolbar */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-slate-700 truncate max-w-[120px]">{fileA?.name}</span>
              </div>
              <ArrowLeftRight className="h-4 w-4 text-slate-400" />
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4 text-purple-600" />
                <span className="font-medium text-slate-700 truncate max-w-[120px]">{fileB?.name}</span>
              </div>
            </div>

            {/* View mode */}
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {[
                { mode: "side-by-side" as ViewMode, label: "Side by Side", icon: ArrowLeftRight },
                { mode: "overlay" as ViewMode, label: "Overlay", icon: Layers },
                { mode: "diff" as ViewMode, label: "Differences", icon: Eye },
              ].map((v) => (
                <button
                  key={v.mode}
                  onClick={() => setViewMode(v.mode)}
                  className={cn(
                    "flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-md transition-colors",
                    viewMode === v.mode ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <v.icon className="h-3 w-3" />
                  {v.label}
                </button>
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={resetInterface} className="text-xs">
              <X className="h-3 w-3 mr-1" /> New Compare
            </Button>
          </div>

          {/* Page navigation + diff info */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled={currentPage === 0} onClick={() => setCurrentPage((p) => p - 1)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-slate-700 min-w-[80px] text-center">
                Page {currentPage + 1} of {maxPages}
              </span>
              <Button variant="outline" size="sm" disabled={currentPage >= maxPages - 1} onClick={() => setCurrentPage((p) => p + 1)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <span className={cn("text-sm font-bold", diffColor)}>
                {diffLabel}
              </span>
              {currentDiff !== undefined && currentDiff >= 0.1 && (
                <span className="text-xs text-slate-500">
                  ({currentDiff.toFixed(1)}% different)
                </span>
              )}
            </div>

            <Button variant="outline" size="sm" onClick={downloadDiffReport} className="text-xs">
              <Download className="h-3 w-3 mr-1" /> Report
            </Button>
          </div>

          {/* Canvas area */}
          <div ref={containerRef} className="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden p-4">
            {viewMode === "side-by-side" ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-xs font-bold text-blue-600 mb-2">Original</p>
                  {pagesA[currentPage] ? (
                    <canvas ref={canvasLeftRef} className="w-full rounded border border-gray-200 bg-white" />
                  ) : (
                    <div className="bg-gray-200 rounded p-12 text-sm text-slate-500">No page</div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-purple-600 mb-2">Modified</p>
                  {pagesB[currentPage] ? (
                    <canvas ref={canvasRightRef} className="w-full rounded border border-gray-200 bg-white" />
                  ) : (
                    <div className="bg-gray-200 rounded p-12 text-sm text-slate-500">No page</div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-xs font-bold text-indigo-600 mb-2">
                  {viewMode === "overlay" ? "Overlay View" : "Differences Highlighted in Red"}
                </p>
                <canvas ref={canvasLeftRef} className="mx-auto rounded border border-gray-200 bg-white max-w-full" />
              </div>
            )}
          </div>

          {/* Page summary */}
          {diffPercentages.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Page Summary</h3>
              <div className="flex flex-wrap gap-2">
                {diffPercentages.map((pct, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={cn(
                      "text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors",
                      currentPage === i ? "ring-2 ring-indigo-500" : "",
                      pct < 0.1 ? "bg-green-50 border-green-200 text-green-700" :
                      pct < 5 ? "bg-yellow-50 border-yellow-200 text-yellow-700" :
                      pct < 20 ? "bg-orange-50 border-orange-200 text-orange-700" :
                      "bg-red-50 border-red-200 text-red-700"
                    )}
                  >
                    P{i + 1}: {pct < 0.1 ? "Same" : `${pct.toFixed(1)}%`}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
