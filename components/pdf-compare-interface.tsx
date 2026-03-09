"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Upload, FileText, X, Download, CheckCircle, Loader2, AlertCircle,
  ArrowLeftRight, Crown, ChevronLeft, ChevronRight, Eye, Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { TrustBadges } from "@/components/trust-badges"

type ViewMode = "text-diff" | "side-by-side" | "highlights"

interface DiffLine {
  type: "same" | "added" | "removed" | "changed"
  lineA?: string
  lineB?: string
}

interface PageDiff {
  lines: DiffLine[]
  addedCount: number
  removedCount: number
  changedCount: number
  sameCount: number
}

// Simple LCS-based diff algorithm
function computeLineDiff(linesA: string[], linesB: string[]): DiffLine[] {
  const m = linesA.length
  const n = linesB.length

  // Build LCS table
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (linesA[i - 1].trim() === linesB[j - 1].trim()) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // Backtrack to build diff
  const result: DiffLine[] = []
  let i = m, j = n
  const temp: DiffLine[] = []

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && linesA[i - 1].trim() === linesB[j - 1].trim()) {
      temp.push({ type: "same", lineA: linesA[i - 1], lineB: linesB[j - 1] })
      i--
      j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      temp.push({ type: "added", lineB: linesB[j - 1] })
      j--
    } else {
      temp.push({ type: "removed", lineA: linesA[i - 1] })
      i--
    }
  }

  temp.reverse()

  // Merge adjacent removed+added into "changed" pairs
  for (let k = 0; k < temp.length; k++) {
    if (
      temp[k].type === "removed" &&
      k + 1 < temp.length &&
      temp[k + 1].type === "added"
    ) {
      result.push({
        type: "changed",
        lineA: temp[k].lineA,
        lineB: temp[k + 1].lineB,
      })
      k++ // skip the added line
    } else {
      result.push(temp[k])
    }
  }

  return result
}

// Highlight character-level differences within a changed line
function highlightWordDiff(oldText: string, newText: string): { oldParts: { text: string; changed: boolean }[]; newParts: { text: string; changed: boolean }[] } {
  const oldWords = oldText.split(/(\s+)/)
  const newWords = newText.split(/(\s+)/)

  // Simple word-level LCS
  const m = oldWords.length
  const n = newWords.length
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldWords[i - 1] === newWords[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  const oldParts: { text: string; changed: boolean }[] = []
  const newParts: { text: string; changed: boolean }[] = []

  let i = m, j = n
  const oldTemp: { text: string; changed: boolean }[] = []
  const newTemp: { text: string; changed: boolean }[] = []

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldWords[i - 1] === newWords[j - 1]) {
      oldTemp.push({ text: oldWords[i - 1], changed: false })
      newTemp.push({ text: newWords[j - 1], changed: false })
      i--
      j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      newTemp.push({ text: newWords[j - 1], changed: true })
      j--
    } else {
      oldTemp.push({ text: oldWords[i - 1], changed: true })
      i--
    }
  }

  oldTemp.reverse()
  newTemp.reverse()

  oldParts.push(...oldTemp)
  newParts.push(...newTemp)

  return { oldParts, newParts }
}

export function PdfCompareInterface() {
  const router = useRouter()

  const [userPlan, setUserPlan] = useState<string>("free")
  const [fileA, setFileA] = useState<File | null>(null)
  const [fileB, setFileB] = useState<File | null>(null)
  const [isDragOverA, setIsDragOverA] = useState(false)
  const [isDragOverB, setIsDragOverB] = useState(false)
  const [textPagesA, setTextPagesA] = useState<string[][]>([])
  const [textPagesB, setTextPagesB] = useState<string[][]>([])
  const [totalPagesA, setTotalPagesA] = useState(0)
  const [totalPagesB, setTotalPagesB] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>("text-diff")
  const [pageDiffs, setPageDiffs] = useState<PageDiff[]>([])
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const isBusinessUser = userPlan === "business"
  const maxPages = Math.max(totalPagesA, totalPagesB)
  const isReady = textPagesA.length > 0 && textPagesB.length > 0

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  // Extract text lines from each PDF page
  const extractText = useCallback(async (pdfFile: File): Promise<string[][]> => {
    const pdfjsLib = await import("pdfjs-dist")
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

    const arrayBuffer = await pdfFile.arrayBuffer()
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

    const pages: string[][] = []
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const content = await page.getTextContent()

      // Group text items into lines by y-position
      const lineMap = new Map<number, string[]>()
      for (const item of content.items) {
        if ("str" in item && item.str.trim()) {
          // Round y to group items on the same line (within 3px)
          const y = Math.round((item as any).transform[5] / 3) * 3
          if (!lineMap.has(y)) lineMap.set(y, [])
          lineMap.get(y)!.push(item.str)
        }
      }

      // Sort by y position (top to bottom = descending y in PDF coords)
      const sortedYs = Array.from(lineMap.keys()).sort((a, b) => b - a)
      const lines = sortedYs.map((y) => lineMap.get(y)!.join(" ").trim()).filter((l) => l.length > 0)

      pages.push(lines)
    }

    return pages
  }, [])

  const handleFileA = useCallback(async (file: File) => {
    setFileA(file)
    setIsLoading(true)
    setHasError(false)
    try {
      const pages = await extractText(file)
      setTextPagesA(pages)
      setTotalPagesA(pages.length)
      setCurrentPage(0)
    } catch {
      setHasError(true)
      setErrorMessage("Failed to load the first PDF. It may be corrupted or password-protected.")
    }
    setIsLoading(false)
  }, [extractText])

  const handleFileB = useCallback(async (file: File) => {
    setFileB(file)
    setIsLoading(true)
    setHasError(false)
    try {
      const pages = await extractText(file)
      setTextPagesB(pages)
      setTotalPagesB(pages.length)
      setCurrentPage(0)
    } catch {
      setHasError(true)
      setErrorMessage("Failed to load the second PDF. It may be corrupted or password-protected.")
    }
    setIsLoading(false)
  }, [extractText])

  // Compute text diffs for all pages when both are loaded
  useEffect(() => {
    if (!isReady) return

    const diffs: PageDiff[] = []
    for (let i = 0; i < maxPages; i++) {
      const linesA = textPagesA[i] || []
      const linesB = textPagesB[i] || []
      const diffLines = computeLineDiff(linesA, linesB)

      let addedCount = 0, removedCount = 0, changedCount = 0, sameCount = 0
      for (const d of diffLines) {
        if (d.type === "added") addedCount++
        else if (d.type === "removed") removedCount++
        else if (d.type === "changed") changedCount++
        else sameCount++
      }

      diffs.push({ lines: diffLines, addedCount, removedCount, changedCount, sameCount })
    }
    setPageDiffs(diffs)
  }, [isReady, textPagesA, textPagesB, maxPages])

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
    setTextPagesA([])
    setTextPagesB([])
    setCurrentPage(0)
    setTotalPagesA(0)
    setTotalPagesB(0)
    setPageDiffs([])
    setHasError(false)
    setErrorMessage("")
  }, [])

  const downloadDiffReport = useCallback(() => {
    let totalAdded = 0, totalRemoved = 0, totalChanged = 0
    for (const d of pageDiffs) {
      totalAdded += d.addedCount
      totalRemoved += d.removedCount
      totalChanged += d.changedCount
    }

    let report = "PDF COMPARE REPORT\n"
    report += "===================\n\n"
    report += `Original:  ${fileA?.name || "Unknown"} (${totalPagesA} pages)\n`
    report += `Modified:  ${fileB?.name || "Unknown"} (${totalPagesB} pages)\n\n`
    report += "SUMMARY\n"
    report += "-------\n"
    report += `Total pages compared: ${maxPages}\n`
    report += `Lines added:          ${totalAdded}\n`
    report += `Lines removed:        ${totalRemoved}\n`
    report += `Lines changed:        ${totalChanged}\n\n`

    report += "PAGE-BY-PAGE DETAILS\n"
    report += "--------------------\n\n"

    for (let i = 0; i < pageDiffs.length; i++) {
      const d = pageDiffs[i]
      const hasChanges = d.addedCount + d.removedCount + d.changedCount > 0
      report += `--- Page ${i + 1} ${hasChanges ? "(MODIFIED)" : "(IDENTICAL)"} ---\n`

      if (hasChanges) {
        report += `  +${d.addedCount} added, -${d.removedCount} removed, ~${d.changedCount} changed\n\n`

        for (const line of d.lines) {
          if (line.type === "removed") {
            report += `  - ${line.lineA}\n`
          } else if (line.type === "added") {
            report += `  + ${line.lineB}\n`
          } else if (line.type === "changed") {
            report += `  - ${line.lineA}\n`
            report += `  + ${line.lineB}\n`
          }
        }
        report += "\n"
      } else {
        report += "  No text differences detected.\n\n"
      }
    }

    report += "---\nGenerated by OmnisPDF PDF Compare (omnispdf.com/pdf-compare)\n"

    const blob = new Blob([report], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "pdf-compare-report.txt"
    link.click()
    URL.revokeObjectURL(url)
  }, [fileA, fileB, totalPagesA, totalPagesB, maxPages, pageDiffs])

  // --- Render states ---

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

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Extracting text from PDFs...</p>
          </div>
        </div>
      </section>
    )
  }

  // Upload state
  if (!isReady) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Original PDF</h3>
                {fileA && textPagesA.length > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileA.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesA} page{totalPagesA !== 1 ? "s" : ""}</p>
                    <Button size="sm" variant="outline" className="mt-3 text-xs" onClick={() => { setFileA(null); setTextPagesA([]); setTotalPagesA(0) }}>
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
                <input id="compare-file-a" type="file" accept=".pdf" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFileA(e.target.files[0]) }} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Modified PDF</h3>
                {fileB && textPagesB.length > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileB.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesB} page{totalPagesB !== 1 ? "s" : ""}</p>
                    <Button size="sm" variant="outline" className="mt-3 text-xs" onClick={() => { setFileB(null); setTextPagesB([]); setTotalPagesB(0) }}>
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
                <input id="compare-file-b" type="file" accept=".pdf" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFileB(e.target.files[0]) }} />
              </div>
            </div>
            <TrustBadges />
          </div>
        </div>
      </section>
    )
  }

  // Comparison view
  const currentDiff = pageDiffs[currentPage]
  const totalChanges = currentDiff ? currentDiff.addedCount + currentDiff.removedCount + currentDiff.changedCount : 0
  const diffLabel = totalChanges === 0 ? "Identical" : totalChanges <= 3 ? "Minor changes" : totalChanges <= 10 ? "Moderate changes" : "Major changes"
  const diffColor = totalChanges === 0 ? "text-green-600" : totalChanges <= 3 ? "text-yellow-600" : totalChanges <= 10 ? "text-orange-600" : "text-red-600"

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

            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {[
                { mode: "text-diff" as ViewMode, label: "Text Diff", icon: Eye },
                { mode: "side-by-side" as ViewMode, label: "Side by Side", icon: ArrowLeftRight },
                { mode: "highlights" as ViewMode, label: "Highlights", icon: Layers },
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

          {/* Page navigation */}
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
              <span className={cn("text-sm font-bold", diffColor)}>{diffLabel}</span>
              {totalChanges > 0 && (
                <span className="text-xs text-slate-500">
                  (+{currentDiff?.addedCount || 0} -{currentDiff?.removedCount || 0} ~{currentDiff?.changedCount || 0})
                </span>
              )}
            </div>

            <Button variant="outline" size="sm" onClick={downloadDiffReport} className="text-xs">
              <Download className="h-3 w-3 mr-1" /> Report
            </Button>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-4 text-xs font-medium">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-100 border border-red-300"></span> Removed</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-100 border border-green-300"></span> Added</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-yellow-100 border border-yellow-300"></span> Changed</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-white border border-gray-200"></span> Unchanged</span>
          </div>

          {/* Diff content */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {currentDiff && viewMode === "text-diff" && (
              <div className="divide-y divide-gray-100 font-mono text-sm max-h-[600px] overflow-y-auto">
                {currentDiff.lines.map((line, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "px-4 py-2 flex items-start gap-3",
                      line.type === "removed" && "bg-red-50",
                      line.type === "added" && "bg-green-50",
                      line.type === "changed" && "bg-yellow-50",
                    )}
                  >
                    <span className={cn(
                      "flex-shrink-0 w-5 text-center font-bold",
                      line.type === "removed" && "text-red-500",
                      line.type === "added" && "text-green-500",
                      line.type === "changed" && "text-yellow-600",
                      line.type === "same" && "text-gray-300",
                    )}>
                      {line.type === "removed" ? "−" : line.type === "added" ? "+" : line.type === "changed" ? "~" : " "}
                    </span>
                    <div className="flex-1 min-w-0">
                      {line.type === "changed" ? (
                        <div className="space-y-1">
                          <div className="text-red-700 line-through">
                            {(() => {
                              const { oldParts } = highlightWordDiff(line.lineA || "", line.lineB || "")
                              return oldParts.map((p, i) => (
                                <span key={i} className={p.changed ? "bg-red-200 px-0.5 rounded" : ""}>
                                  {p.text}
                                </span>
                              ))
                            })()}
                          </div>
                          <div className="text-green-700">
                            {(() => {
                              const { newParts } = highlightWordDiff(line.lineA || "", line.lineB || "")
                              return newParts.map((p, i) => (
                                <span key={i} className={p.changed ? "bg-green-200 px-0.5 rounded" : ""}>
                                  {p.text}
                                </span>
                              ))
                            })()}
                          </div>
                        </div>
                      ) : (
                        <span className={cn(
                          line.type === "removed" && "text-red-700",
                          line.type === "added" && "text-green-700",
                          line.type === "same" && "text-slate-600",
                        )}>
                          {line.lineA || line.lineB}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {currentDiff.lines.length === 0 && (
                  <div className="px-4 py-8 text-center text-slate-400">No text content on this page.</div>
                )}
              </div>
            )}

            {currentDiff && viewMode === "side-by-side" && (
              <div className="max-h-[600px] overflow-y-auto">
                <div className="grid grid-cols-2 divide-x divide-gray-200 sticky top-0 bg-gray-50 border-b border-gray-200 z-10">
                  <div className="px-4 py-2 text-xs font-bold text-blue-600">Original</div>
                  <div className="px-4 py-2 text-xs font-bold text-purple-600">Modified</div>
                </div>
                {currentDiff.lines.map((line, idx) => (
                  <div key={idx} className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className={cn(
                      "px-4 py-1.5 text-sm font-mono break-words",
                      line.type === "removed" && "bg-red-50 text-red-700",
                      line.type === "changed" && "bg-yellow-50 text-red-700",
                      line.type === "same" && "text-slate-600",
                      line.type === "added" && "bg-gray-50 text-gray-300",
                    )}>
                      {line.type === "changed" ? (
                        (() => {
                          const { oldParts } = highlightWordDiff(line.lineA || "", line.lineB || "")
                          return oldParts.map((p, i) => (
                            <span key={i} className={p.changed ? "bg-red-200 px-0.5 rounded" : ""}>{p.text}</span>
                          ))
                        })()
                      ) : line.type === "added" ? (
                        <span className="italic">—</span>
                      ) : (
                        line.lineA
                      )}
                    </div>
                    <div className={cn(
                      "px-4 py-1.5 text-sm font-mono break-words",
                      line.type === "added" && "bg-green-50 text-green-700",
                      line.type === "changed" && "bg-yellow-50 text-green-700",
                      line.type === "same" && "text-slate-600",
                      line.type === "removed" && "bg-gray-50 text-gray-300",
                    )}>
                      {line.type === "changed" ? (
                        (() => {
                          const { newParts } = highlightWordDiff(line.lineA || "", line.lineB || "")
                          return newParts.map((p, i) => (
                            <span key={i} className={p.changed ? "bg-green-200 px-0.5 rounded" : ""}>{p.text}</span>
                          ))
                        })()
                      ) : line.type === "removed" ? (
                        <span className="italic">—</span>
                      ) : (
                        line.lineB
                      )}
                    </div>
                  </div>
                ))}
                {currentDiff.lines.length === 0 && (
                  <div className="px-4 py-8 text-center text-slate-400 col-span-2">No text content on this page.</div>
                )}
              </div>
            )}

            {currentDiff && viewMode === "highlights" && (
              <div className="max-h-[600px] overflow-y-auto p-6 space-y-1 text-sm leading-relaxed">
                {currentDiff.lines.map((line, idx) => {
                  if (line.type === "same") {
                    return <p key={idx} className="text-slate-700">{line.lineA}</p>
                  }
                  if (line.type === "removed") {
                    return (
                      <p key={idx} className="bg-red-100 border-l-4 border-red-500 px-3 py-1 text-red-800 line-through">
                        {line.lineA}
                      </p>
                    )
                  }
                  if (line.type === "added") {
                    return (
                      <p key={idx} className="bg-green-100 border-l-4 border-green-500 px-3 py-1 text-green-800">
                        {line.lineB}
                      </p>
                    )
                  }
                  if (line.type === "changed") {
                    const { oldParts, newParts } = highlightWordDiff(line.lineA || "", line.lineB || "")
                    return (
                      <div key={idx} className="space-y-1">
                        <p className="bg-red-100 border-l-4 border-red-500 px-3 py-1 text-red-800 line-through">
                          {oldParts.map((p, i) => (
                            <span key={i} className={p.changed ? "bg-red-300 px-0.5 rounded font-semibold" : ""}>{p.text}</span>
                          ))}
                        </p>
                        <p className="bg-green-100 border-l-4 border-green-500 px-3 py-1 text-green-800">
                          {newParts.map((p, i) => (
                            <span key={i} className={p.changed ? "bg-green-300 px-0.5 rounded font-semibold" : ""}>{p.text}</span>
                          ))}
                        </p>
                      </div>
                    )
                  }
                  return null
                })}
                {currentDiff.lines.length === 0 && (
                  <div className="text-center text-slate-400 py-8">No text content on this page.</div>
                )}
              </div>
            )}
          </div>

          {/* Page summary */}
          {pageDiffs.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Page Summary</h3>
              <div className="flex flex-wrap gap-2">
                {pageDiffs.map((d, i) => {
                  const changes = d.addedCount + d.removedCount + d.changedCount
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={cn(
                        "text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors",
                        currentPage === i ? "ring-2 ring-indigo-500" : "",
                        changes === 0 ? "bg-green-50 border-green-200 text-green-700" :
                        changes <= 3 ? "bg-yellow-50 border-yellow-200 text-yellow-700" :
                        changes <= 10 ? "bg-orange-50 border-orange-200 text-orange-700" :
                        "bg-red-50 border-red-200 text-red-700"
                      )}
                    >
                      P{i + 1}: {changes === 0 ? "Same" : `${changes} change${changes > 1 ? "s" : ""}`}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
