"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import * as Diff from "diff"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowLeftRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Crown,
  Download,
  FileText,
  Loader2,
  Upload,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { TrustBadges } from "@/components/trust-badges"

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

type TokenHighlight = "none" | "removed" | "added"

interface DiffToken {
  text: string
  highlight: TokenHighlight
}

interface ParagraphDiff {
  leftTokens: DiffToken[]
  rightTokens: DiffToken[]
  changed: boolean
}

interface PageDiffResult {
  paragraphs: ParagraphDiff[]
  addedWords: number
  removedWords: number
}

interface TextItemLike {
  str: string
  width?: number
  height?: number
  hasEOL?: boolean
  transform: number[]
}

// ──────────────────────────────────────────────
// Smart paragraph extraction from PDF text items
// ──────────────────────────────────────────────

function median(values: number[]): number {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  return sorted[Math.floor(sorted.length / 2)]
}

function extractParagraphs(items: TextItemLike[]): string[] {
  const filtered = items
    .filter((item) => item.str && item.str.trim().length > 0)
    .map((item) => ({
      text: item.str,
      x: item.transform[4],
      y: item.transform[5],
      width: typeof item.width === "number" ? item.width : 0,
      height: typeof item.height === "number" ? item.height : Math.abs(item.transform[0]) || 12,
      hasEOL: Boolean(item.hasEOL),
    }))

  if (filtered.length === 0) return []

  // Fallback: if all items lack valid transform data, just join as one block
  const hasValidPositions = filtered.some((item) => item.x !== 0 || item.y !== 0)
  if (!hasValidPositions) {
    const text = filtered.map((item) => item.text).join(" ").replace(/\s+/g, " ").trim()
    return text ? [text] : []
  }

  // Sort top-to-bottom, left-to-right
  filtered.sort((a, b) => {
    const yDelta = b.y - a.y
    if (Math.abs(yDelta) > 2.5) return yDelta
    return a.x - b.x
  })

  // Group into lines by y-position
  const lines: Array<{ y: number; text: string }> = []
  let currentLine: typeof filtered = []

  const pushLine = () => {
    if (currentLine.length === 0) return
    currentLine.sort((a, b) => a.x - b.x)
    const chunks: string[] = []
    let prevRight = 0

    currentLine.forEach((item, idx) => {
      const gap = item.x - prevRight
      if (idx > 0 && gap > Math.max(1, item.height * 0.35)) {
        chunks.push(" ")
      }
      chunks.push(item.text)
      prevRight = item.x + item.width
    })

    lines.push({
      y: currentLine[0].y,
      text: chunks.join("").replace(/\s+/g, " ").trim(),
    })
    currentLine = []
  }

  filtered.forEach((item) => {
    const currentY = currentLine[0]?.y
    if (typeof currentY === "number" && Math.abs(currentY - item.y) > 2.5) {
      pushLine()
    }
    currentLine.push(item)
  })
  pushLine()

  // Detect paragraph breaks by line gap
  const lineGaps: number[] = []
  for (let i = 1; i < lines.length; i++) {
    lineGaps.push(Math.abs(lines[i - 1].y - lines[i].y))
  }

  const normalGap = median(lineGaps) || 14
  const paragraphs: string[] = []
  let buffer: string[] = []

  lines.forEach((line, idx) => {
    if (line.text.length === 0) return

    const prevLine = lines[idx - 1]
    const gap = prevLine ? Math.abs(prevLine.y - line.y) : normalGap
    const isNewParagraph = buffer.length > 0 && gap > normalGap * 1.8

    if (isNewParagraph) {
      paragraphs.push(buffer.join(" ").replace(/\s+/g, " ").trim())
      buffer = []
    }

    buffer.push(line.text)
  })

  if (buffer.length > 0) {
    paragraphs.push(buffer.join(" ").replace(/\s+/g, " ").trim())
  }

  const result = paragraphs.filter((p) => p.length > 0)

  // Fallback: if smart paragraph detection returned nothing but we had text items,
  // join all items as a single text block so the diff still works
  if (result.length === 0 && filtered.length > 0) {
    const fallback = filtered.map((item) => item.text).join(" ").replace(/\s+/g, " ").trim()
    return fallback ? [fallback] : []
  }

  return result
}

// ──────────────────────────────────────────────
// Diff logic using the `diff` library
// ──────────────────────────────────────────────

function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

/** Diff two paragraph strings word-by-word using the diff library */
function diffParagraph(leftText: string, rightText: string): ParagraphDiff {
  const parts = Diff.diffWords(leftText, rightText)
  const leftTokens: DiffToken[] = []
  const rightTokens: DiffToken[] = []
  let hasChange = false

  for (const part of parts) {
    if (part.added) {
      hasChange = true
      rightTokens.push({ text: part.value, highlight: "added" })
    } else if (part.removed) {
      hasChange = true
      leftTokens.push({ text: part.value, highlight: "removed" })
    } else {
      leftTokens.push({ text: part.value, highlight: "none" })
      rightTokens.push({ text: part.value, highlight: "none" })
    }
  }

  return { leftTokens, rightTokens, changed: hasChange }
}

/** Align paragraphs from both pages using Dice similarity scoring */
function paragraphSimilarity(a: string, b: string): number {
  const wordsA = new Set(a.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [])
  const wordsB = new Set(b.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [])
  if (wordsA.size === 0 && wordsB.size === 0) return a.trim() === b.trim() ? 1 : 0
  let overlap = 0
  for (const w of wordsA) if (wordsB.has(w)) overlap++
  return (2 * overlap) / (wordsA.size + wordsB.size)
}

function alignParagraphs(leftParas: string[], rightParas: string[]): Array<{ left: string | null; right: string | null }> {
  const m = leftParas.length
  const n = rightParas.length
  const GAP = -0.35

  const scores = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  const trace = Array.from({ length: m + 1 }, () => Array<"match" | "left" | "right" | null>(n + 1).fill(null))

  for (let i = 1; i <= m; i++) { scores[i][0] = i * GAP; trace[i][0] = "left" }
  for (let j = 1; j <= n; j++) { scores[0][j] = j * GAP; trace[0][j] = "right" }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const sim = paragraphSimilarity(leftParas[i - 1], rightParas[j - 1])
      const matchScore = scores[i - 1][j - 1] + sim
      const skipLeft = scores[i - 1][j] + GAP
      const skipRight = scores[i][j - 1] + GAP

      if (matchScore >= skipLeft && matchScore >= skipRight) {
        scores[i][j] = matchScore; trace[i][j] = "match"
      } else if (skipLeft >= skipRight) {
        scores[i][j] = skipLeft; trace[i][j] = "left"
      } else {
        scores[i][j] = skipRight; trace[i][j] = "right"
      }
    }
  }

  const rows: Array<{ left: string | null; right: string | null }> = []
  let i = m, j = n

  while (i > 0 || j > 0) {
    const action = trace[i][j]
    if (action === "match" && i > 0 && j > 0) {
      rows.push({ left: leftParas[i - 1], right: rightParas[j - 1] }); i--; j--
    } else if (action === "left" && i > 0) {
      rows.push({ left: leftParas[i - 1], right: null }); i--
    } else if (j > 0) {
      rows.push({ left: null, right: rightParas[j - 1] }); j--
    } else {
      break
    }
  }

  return rows.reverse()
}

/** Build full page diff: align paragraphs, then word-diff each pair */
function buildPageDiff(leftParas: string[], rightParas: string[]): PageDiffResult {
  const aligned = alignParagraphs(leftParas, rightParas)
  const paragraphs: ParagraphDiff[] = []
  let addedWords = 0
  let removedWords = 0

  for (const pair of aligned) {
    const leftText = pair.left ?? ""
    const rightText = pair.right ?? ""
    const diff = diffParagraph(leftText, rightText)
    paragraphs.push(diff)

    // Count changed words
    for (const t of diff.leftTokens) if (t.highlight === "removed") removedWords += countWords(t.text)
    for (const t of diff.rightTokens) if (t.highlight === "added") addedWords += countWords(t.text)
  }

  return { paragraphs, addedWords, removedWords }
}

// ──────────────────────────────────────────────
// Render helpers
// ──────────────────────────────────────────────

function renderTokens(tokens: DiffToken[], emptyLabel: string) {
  if (tokens.length === 0) {
    return <span className="italic text-slate-400">{emptyLabel}</span>
  }

  return tokens.map((token, index) => {
    if (token.highlight === "none") {
      return <span key={index}>{token.text}</span>
    }

    return (
      <span
        key={index}
        className={cn(
          "rounded-sm px-[1px]",
          token.highlight === "removed" && "bg-red-200 text-red-900",
          token.highlight === "added" && "bg-green-200 text-green-900"
        )}
      >
        {token.text}
      </span>
    )
  })
}

// ──────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────

export function PdfCompareInterface() {
  const router = useRouter()

  const [userPlan, setUserPlan] = useState("loading")
  const [fileA, setFileA] = useState<File | null>(null)
  const [fileB, setFileB] = useState<File | null>(null)
  const [isDragOverA, setIsDragOverA] = useState(false)
  const [isDragOverB, setIsDragOverB] = useState(false)
  const [paraPagesA, setParaPagesA] = useState<string[][]>([])
  const [paraPagesB, setParaPagesB] = useState<string[][]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoadingA, setIsLoadingA] = useState(false)
  const [isLoadingB, setIsLoadingB] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const totalPagesA = paraPagesA.length
  const totalPagesB = paraPagesB.length
  const maxPages = Math.max(totalPagesA, totalPagesB)
  const hasBothFiles = totalPagesA > 0 && totalPagesB > 0
  const isBusinessUser = userPlan === "business"

  useEffect(() => {
    fetch("/api/user-plan")
      .then((response) => response.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const extractPages = useCallback(async (pdfFile: File): Promise<string[][]> => {
    const pdfjsLib = await import("pdfjs-dist")
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

    const pdf = await pdfjsLib.getDocument({ data: await pdfFile.arrayBuffer() }).promise
    const pages: string[][] = []

    for (let p = 1; p <= pdf.numPages; p++) {
      const page = await pdf.getPage(p)
      const content = await page.getTextContent()
      pages.push(extractParagraphs(content.items as TextItemLike[]))
    }

    return pages
  }, [])

  const handlePdfLoad = useCallback(
    async (file: File, side: "left" | "right") => {
      if (file.type !== "application/pdf") {
        setErrorMessage("Please upload a valid PDF file.")
        return
      }

      const setLoading = side === "left" ? setIsLoadingA : setIsLoadingB
      setLoading(true)
      setErrorMessage("")

      try {
        const pages = await extractPages(file)

        if (pages.length === 0) {
          setErrorMessage(`The ${side === "left" ? "original" : "modified"} PDF has no readable pages.`)
          return
        }

        if (side === "left") {
          setFileA(file)
          setParaPagesA(pages)
        } else {
          setFileB(file)
          setParaPagesB(pages)
        }

        setCurrentPage(0)
      } catch {
        setErrorMessage(`Failed to read the ${side === "left" ? "original" : "modified"} PDF.`)
      } finally {
        setLoading(false)
      }
    },
    [extractPages]
  )

  const pageResults = useMemo(
    () => {
      if (!hasBothFiles) return []
      return Array.from({ length: maxPages }, (_, index) =>
        buildPageDiff(paraPagesA[index] ?? [], paraPagesB[index] ?? [])
      )
    },
    [hasBothFiles, maxPages, paraPagesA, paraPagesB]
  )

  const resetInterface = useCallback(() => {
    setFileA(null)
    setFileB(null)
    setParaPagesA([])
    setParaPagesB([])
    setCurrentPage(0)
    setIsLoadingA(false)
    setIsLoadingB(false)
    setErrorMessage("")
  }, [])

  const downloadDiffReport = useCallback(() => {
    const totalAdded = pageResults.reduce((sum, page) => sum + page.addedWords, 0)
    const totalRemoved = pageResults.reduce((sum, page) => sum + page.removedWords, 0)

    let report = "PDF COMPARE REPORT\n"
    report += "===================\n\n"
    report += `Original: ${fileA?.name || "Unknown"} (${totalPagesA} pages)\n`
    report += `Modified: ${fileB?.name || "Unknown"} (${totalPagesB} pages)\n\n`
    report += `Added words:   ${totalAdded}\n`
    report += `Removed words: ${totalRemoved}\n\n`

    pageResults.forEach((page, pageIdx) => {
      const changes = page.addedWords + page.removedWords
      report += `--- Page ${pageIdx + 1} ${changes === 0 ? "(IDENTICAL)" : `(+${page.addedWords} / -${page.removedWords})`} ---\n`

      if (changes > 0) {
        page.paragraphs.forEach((para, pIdx) => {
          if (!para.changed) return
          const leftText = para.leftTokens.map((t) => t.text).join("")
          const rightText = para.rightTokens.map((t) => t.text).join("")
          report += `  Paragraph ${pIdx + 1}:\n`
          report += `    - ${leftText}\n`
          report += `    + ${rightText}\n\n`
        })
      }
    })

    report += "---\nGenerated by OmnisPDF PDF Compare (omnispdf.com/pdf-compare)\n"

    const blob = new Blob([report], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "pdf-compare-report.txt"
    link.click()
    URL.revokeObjectURL(url)
  }, [fileA, fileB, pageResults, totalPagesA, totalPagesB])

  // ──── Render states ────

  if (userPlan === "loading") {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Loading PDF Compare...</p>
          </div>
        </div>
      </section>
    )
  }

  if (!isBusinessUser) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Business Feature</h2>
            <p className="text-lg text-slate-600 mb-8">
              PDF Compare is available on the Business plan. Upload two PDFs and review word-level edits side by side.
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

  if (!hasBothFiles) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {errorMessage && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Original PDF</h3>
                {isLoadingA ? (
                  <div className="border-2 border-indigo-300 bg-indigo-50 rounded-xl p-8 text-center">
                    <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto mb-3" />
                    <p className="font-medium text-slate-700">Extracting text...</p>
                  </div>
                ) : fileA && totalPagesA > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileA.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesA} page{totalPagesA !== 1 ? "s" : ""}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3 text-xs"
                      onClick={() => { setFileA(null); setParaPagesA([]); setErrorMessage("") }}
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
                    onDrop={(e) => { e.preventDefault(); setIsDragOverA(false); const f = e.dataTransfer.files[0]; if (f) void handlePdfLoad(f, "left") }}
                    onClick={() => document.getElementById("compare-file-a")?.click()}
                  >
                    <Upload className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 mb-1">Upload original PDF</p>
                    <p className="text-sm text-slate-500">Drag and drop or click to browse</p>
                  </div>
                )}
                <input id="compare-file-a" type="file" accept=".pdf,application/pdf" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void handlePdfLoad(f, "left") }} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Modified PDF</h3>
                {isLoadingB ? (
                  <div className="border-2 border-indigo-300 bg-indigo-50 rounded-xl p-8 text-center">
                    <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto mb-3" />
                    <p className="font-medium text-slate-700">Extracting text...</p>
                  </div>
                ) : fileB && totalPagesB > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileB.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesB} page{totalPagesB !== 1 ? "s" : ""}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3 text-xs"
                      onClick={() => { setFileB(null); setParaPagesB([]); setErrorMessage("") }}
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
                    onDrop={(e) => { e.preventDefault(); setIsDragOverB(false); const f = e.dataTransfer.files[0]; if (f) void handlePdfLoad(f, "right") }}
                    onClick={() => document.getElementById("compare-file-b")?.click()}
                  >
                    <Upload className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 mb-1">Upload modified PDF</p>
                    <p className="text-sm text-slate-500">Drag and drop or click to browse</p>
                  </div>
                )}
                <input id="compare-file-b" type="file" accept=".pdf,application/pdf" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void handlePdfLoad(f, "right") }} />
              </div>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>
    )
  }

  // ──── Comparison view ────

  const current = pageResults[currentPage]
  const totalChanges = (current?.addedWords ?? 0) + (current?.removedWords ?? 0)
  const diffLabel =
    totalChanges === 0 ? "Identical" :
    totalChanges <= 20 ? "Minor changes" :
    totalChanges <= 80 ? "Moderate changes" :
    "Major changes"
  const diffColor =
    totalChanges === 0 ? "text-green-600" :
    totalChanges <= 20 ? "text-yellow-600" :
    totalChanges <= 80 ? "text-orange-600" :
    "text-red-600"

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="flex items-center gap-2 text-sm min-w-0">
                <FileText className="h-4 w-4 text-red-500 shrink-0" />
                <span className="font-medium text-slate-700 truncate">{fileA?.name}</span>
              </div>
              <ArrowLeftRight className="h-4 w-4 text-slate-400 shrink-0" />
              <div className="flex items-center gap-2 text-sm min-w-0">
                <FileText className="h-4 w-4 text-green-500 shrink-0" />
                <span className="font-medium text-slate-700 truncate">{fileB?.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={downloadDiffReport} className="text-xs">
                <Download className="h-3 w-3 mr-1" /> Report
              </Button>
              <Button variant="outline" size="sm" onClick={resetInterface} className="text-xs">
                <X className="h-3 w-3 mr-1" /> New Compare
              </Button>
            </div>
          </div>

          {/* Page navigation */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled={currentPage === 0} onClick={() => setCurrentPage((p) => p - 1)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-slate-700 min-w-[90px] text-center">
                Page {currentPage + 1} of {maxPages}
              </span>
              <Button variant="outline" size="sm" disabled={currentPage >= maxPages - 1} onClick={() => setCurrentPage((p) => p + 1)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <span className={cn("text-sm font-bold", diffColor)}>{diffLabel}</span>
              <span className="text-xs text-slate-500">
                +{current?.addedWords ?? 0} / -{current?.removedWords ?? 0}
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-4 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-red-200 border border-red-300"></span>
              Removed words
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-green-200 border border-green-300"></span>
              Added words
            </span>
          </div>

          {/* Side-by-side paragraph diff */}
          {current && (
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-50 border-b border-gray-200">
                <div className="px-4 py-2 text-xs font-bold text-red-600 uppercase tracking-wide">Original</div>
                <div className="px-4 py-2 text-xs font-bold text-green-600 uppercase tracking-wide">Modified</div>
              </div>

              <div className="max-h-[650px] overflow-y-auto divide-y divide-gray-100">
                {current.paragraphs.map((para, idx) => (
                  <div key={idx} className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className={cn("px-4 py-3 text-sm leading-7 break-words", para.changed ? "bg-red-50/40" : "bg-white")}>
                      <p className="whitespace-pre-wrap text-slate-800">
                        {renderTokens(para.leftTokens, "")}
                      </p>
                    </div>
                    <div className={cn("px-4 py-3 text-sm leading-7 break-words", para.changed ? "bg-green-50/40" : "bg-white")}>
                      <p className="whitespace-pre-wrap text-slate-800">
                        {renderTokens(para.rightTokens, "")}
                      </p>
                    </div>
                  </div>
                ))}

                {current.paragraphs.length === 0 && (
                  <div className="px-4 py-8 text-center text-slate-400">No text content on this page.</div>
                )}
              </div>
            </div>
          )}

          {/* Page summary pills */}
          {pageResults.length > 1 && (
            <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Page Summary</h3>
              <div className="flex flex-wrap gap-2">
                {pageResults.map((page, index) => {
                  const changes = page.addedWords + page.removedWords
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={cn(
                        "text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors",
                        currentPage === index && "ring-2 ring-indigo-500",
                        changes === 0 && "bg-green-50 border-green-200 text-green-700",
                        changes > 0 && changes <= 20 && "bg-yellow-50 border-yellow-200 text-yellow-700",
                        changes > 20 && changes <= 80 && "bg-orange-50 border-orange-200 text-orange-700",
                        changes > 80 && "bg-red-50 border-red-200 text-red-700"
                      )}
                    >
                      P{index + 1}: {changes === 0 ? "Same" : `${changes} word${changes === 1 ? "" : "s"}`}
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
