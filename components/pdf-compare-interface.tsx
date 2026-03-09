"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  AlertCircle,
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

type Highlight = "none" | "removed" | "added"

interface DiffToken {
  text: string
  highlight: Highlight
}

interface ParagraphRow {
  leftText: string
  rightText: string
  leftTokens: DiffToken[]
  rightTokens: DiffToken[]
  similarity: number
  changed: boolean
}

interface PageResult {
  rows: ParagraphRow[]
  changedParagraphs: number
  unchangedParagraphs: number
}

interface TextItemLike {
  str: string
  width?: number
  height?: number
  hasEOL?: boolean
  transform: number[]
}

interface ParagraphMatch {
  left: string | null
  right: string | null
  similarity: number
}

const GAP_PENALTY = -0.35

function normalizeToken(token: string): string {
  return token.trim().toLowerCase()
}

function tokenizeParagraph(text: string): string[] {
  return text.match(/\S+\s*/g) ?? []
}

function extractWordSet(text: string): Set<string> {
  return new Set(
    (text.toLowerCase().match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []).filter(Boolean)
  )
}

function paragraphSimilarity(left: string, right: string): number {
  const leftWords = extractWordSet(left)
  const rightWords = extractWordSet(right)

  if (leftWords.size === 0 && rightWords.size === 0) {
    return normalizeText(left) === normalizeText(right) ? 1 : 0
  }

  let overlap = 0
  for (const word of leftWords) {
    if (rightWords.has(word)) {
      overlap++
    }
  }

  const dice = (2 * overlap) / (leftWords.size + rightWords.size)
  const leftNormalized = normalizeText(left)
  const rightNormalized = normalizeText(right)
  const exactBoost = leftNormalized === rightNormalized ? 0.5 : 0

  return Math.min(1, dice + exactBoost)
}

function normalizeText(text: string): string {
  return text.replace(/\s+/g, " ").trim().toLowerCase()
}

function buildLcsTable(left: string[], right: string[]): number[][] {
  const table = Array.from({ length: left.length + 1 }, () => Array(right.length + 1).fill(0))

  for (let i = 1; i <= left.length; i++) {
    for (let j = 1; j <= right.length; j++) {
      if (normalizeToken(left[i - 1]) === normalizeToken(right[j - 1])) {
        table[i][j] = table[i - 1][j - 1] + 1
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
      }
    }
  }

  return table
}

function diffParagraphWords(leftText: string, rightText: string): { leftTokens: DiffToken[]; rightTokens: DiffToken[] } {
  const leftWords = tokenizeParagraph(leftText)
  const rightWords = tokenizeParagraph(rightText)
  const table = buildLcsTable(leftWords, rightWords)

  const leftOutput: DiffToken[] = []
  const rightOutput: DiffToken[] = []
  let i = leftWords.length
  let j = rightWords.length

  while (i > 0 || j > 0) {
    if (
      i > 0 &&
      j > 0 &&
      normalizeToken(leftWords[i - 1]) === normalizeToken(rightWords[j - 1])
    ) {
      leftOutput.push({ text: leftWords[i - 1], highlight: "none" })
      rightOutput.push({ text: rightWords[j - 1], highlight: "none" })
      i--
      j--
      continue
    }

    if (j > 0 && (i === 0 || table[i][j - 1] >= table[i - 1][j])) {
      rightOutput.push({ text: rightWords[j - 1], highlight: "added" })
      j--
      continue
    }

    if (i > 0) {
      leftOutput.push({ text: leftWords[i - 1], highlight: "removed" })
      i--
    }
  }

  leftOutput.reverse()
  rightOutput.reverse()

  return {
    leftTokens: leftOutput,
    rightTokens: rightOutput,
  }
}

function alignParagraphs(leftParagraphs: string[], rightParagraphs: string[]): ParagraphMatch[] {
  const leftCount = leftParagraphs.length
  const rightCount = rightParagraphs.length
  const scores = Array.from({ length: leftCount + 1 }, () => Array(rightCount + 1).fill(0))
  const trace = Array.from({ length: leftCount + 1 }, () => Array<"match" | "left" | "right" | null>(rightCount + 1).fill(null))

  for (let i = 1; i <= leftCount; i++) {
    scores[i][0] = i * GAP_PENALTY
    trace[i][0] = "left"
  }

  for (let j = 1; j <= rightCount; j++) {
    scores[0][j] = j * GAP_PENALTY
    trace[0][j] = "right"
  }

  for (let i = 1; i <= leftCount; i++) {
    for (let j = 1; j <= rightCount; j++) {
      const similarity = paragraphSimilarity(leftParagraphs[i - 1], rightParagraphs[j - 1])
      const matchScore = scores[i - 1][j - 1] + Math.max(similarity, similarity - 0.25)
      const skipLeftScore = scores[i - 1][j] + GAP_PENALTY
      const skipRightScore = scores[i][j - 1] + GAP_PENALTY

      if (matchScore >= skipLeftScore && matchScore >= skipRightScore) {
        scores[i][j] = matchScore
        trace[i][j] = "match"
      } else if (skipLeftScore >= skipRightScore) {
        scores[i][j] = skipLeftScore
        trace[i][j] = "left"
      } else {
        scores[i][j] = skipRightScore
        trace[i][j] = "right"
      }
    }
  }

  const rows: ParagraphMatch[] = []
  let i = leftCount
  let j = rightCount

  while (i > 0 || j > 0) {
    const action = trace[i][j]

    if (action === "match" && i > 0 && j > 0) {
      rows.push({
        left: leftParagraphs[i - 1],
        right: rightParagraphs[j - 1],
        similarity: paragraphSimilarity(leftParagraphs[i - 1], rightParagraphs[j - 1]),
      })
      i--
      j--
      continue
    }

    if (action === "left" && i > 0) {
      rows.push({
        left: leftParagraphs[i - 1],
        right: null,
        similarity: 0,
      })
      i--
      continue
    }

    if (j > 0) {
      rows.push({
        left: null,
        right: rightParagraphs[j - 1],
        similarity: 0,
      })
      j--
    }
  }

  return hydrateBlankRows(rows.reverse())
}

function findNearestText(matches: ParagraphMatch[], index: number, side: "left" | "right"): string {
  for (let distance = 1; distance <= matches.length; distance++) {
    const prev = matches[index - distance]
    if (prev && prev[side]) {
      return prev[side]!
    }

    const next = matches[index + distance]
    if (next && next[side]) {
      return next[side]!
    }
  }

  return ""
}

function hydrateBlankRows(matches: ParagraphMatch[]): ParagraphMatch[] {
  return matches.map((match, index) => {
    const left = match.left ?? findNearestText(matches, index, "left")
    const right = match.right ?? findNearestText(matches, index, "right")
    const similarity = paragraphSimilarity(left, right)

    if (!match.left && !match.right) {
      return { left: "", right: "", similarity: 0 }
    }

    return {
      left,
      right,
      similarity: match.left && match.right ? match.similarity : similarity,
    }
  })
}

function buildPageDiff(leftParagraphs: string[], rightParagraphs: string[]): PageResult {
  const matches = alignParagraphs(leftParagraphs, rightParagraphs)
  const rows: ParagraphRow[] = matches.map((match) => {
    const leftText = match.left ?? ""
    const rightText = match.right ?? ""
    const { leftTokens, rightTokens } = diffParagraphWords(leftText, rightText)
    const changed = normalizeText(leftText) !== normalizeText(rightText)

    return {
      leftText,
      rightText,
      leftTokens,
      rightTokens,
      similarity: match.similarity,
      changed,
    }
  })

  return {
    changedParagraphs: rows.filter((row) => row.changed).length,
    unchangedParagraphs: rows.filter((row) => !row.changed).length,
    rows,
  }
}

function percentile(values: number[]): number {
  if (values.length === 0) {
    return 0
  }

  const sorted = [...values].sort((a, b) => a - b)
  return sorted[Math.floor(sorted.length / 2)]
}

function buildParagraphsFromItems(items: TextItemLike[]): string[] {
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

  if (filtered.length === 0) {
    return []
  }

  filtered.sort((a, b) => {
    const yDelta = b.y - a.y
    if (Math.abs(yDelta) > 2.5) {
      return yDelta
    }
    return a.x - b.x
  })

  const lines: Array<{ y: number; text: string }> = []
  let currentLine: typeof filtered = []

  const pushLine = () => {
    if (currentLine.length === 0) {
      return
    }

    currentLine.sort((a, b) => a.x - b.x)
    const chunks: string[] = []
    let previousRight = 0

    currentLine.forEach((item, index) => {
      const estimatedGap = item.x - previousRight
      if (index > 0 && estimatedGap > Math.max(1, item.height * 0.35)) {
        chunks.push(" ")
      }
      chunks.push(item.text)
      previousRight = item.x + item.width
      if (item.hasEOL) {
        chunks.push("\n")
      }
    })

    lines.push({
      y: currentLine[0].y,
      text: chunks.join("").replace(/\s+\n/g, "\n").replace(/\n+/g, " ").replace(/\s+/g, " ").trim(),
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

  const lineGaps: number[] = []
  for (let i = 1; i < lines.length; i++) {
    lineGaps.push(Math.abs(lines[i - 1].y - lines[i].y))
  }

  const normalGap = percentile(lineGaps) || 14
  const paragraphs: string[] = []
  let buffer: string[] = []

  lines.forEach((line, index) => {
    if (line.text.length === 0) {
      return
    }

    const previousLine = lines[index - 1]
    const gap = previousLine ? Math.abs(previousLine.y - line.y) : normalGap
    const startsNewParagraph = buffer.length > 0 && gap > normalGap * 1.8

    if (startsNewParagraph) {
      paragraphs.push(buffer.join(" ").replace(/\s+/g, " ").trim())
      buffer = []
    }

    buffer.push(line.text)
  })

  if (buffer.length > 0) {
    paragraphs.push(buffer.join(" ").replace(/\s+/g, " ").trim())
  }

  return paragraphs.filter((paragraph) => paragraph.length > 0)
}

function renderTokens(tokens: DiffToken[]) {
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

export function PdfCompareInterface() {
  const router = useRouter()

  const [userPlan, setUserPlan] = useState<string>("free")
  const [fileA, setFileA] = useState<File | null>(null)
  const [fileB, setFileB] = useState<File | null>(null)
  const [isDragOverA, setIsDragOverA] = useState(false)
  const [isDragOverB, setIsDragOverB] = useState(false)
  const [paragraphPagesA, setParagraphPagesA] = useState<string[][]>([])
  const [paragraphPagesB, setParagraphPagesB] = useState<string[][]>([])
  const [totalPagesA, setTotalPagesA] = useState(0)
  const [totalPagesB, setTotalPagesB] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const isBusinessUser = userPlan === "business"
  const maxPages = Math.max(totalPagesA, totalPagesB)
  const isReady = paragraphPagesA.length > 0 && paragraphPagesB.length > 0

  useEffect(() => {
    fetch("/api/user-plan")
      .then((response) => response.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const extractParagraphPages = useCallback(async (pdfFile: File): Promise<string[][]> => {
    const pdfjsLib = await import("pdfjs-dist")
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

    const pdf = await pdfjsLib.getDocument({ data: await pdfFile.arrayBuffer() }).promise
    const pages: string[][] = []

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber)
      const content = await page.getTextContent()
      pages.push(buildParagraphsFromItems(content.items as TextItemLike[]))
    }

    return pages
  }, [])

  const handlePdfLoad = useCallback(async (
    file: File,
    side: "left" | "right"
  ) => {
    setIsLoading(true)
    setHasError(false)

    try {
      const pages = await extractParagraphPages(file)

      if (side === "left") {
        setFileA(file)
        setParagraphPagesA(pages)
        setTotalPagesA(pages.length)
      } else {
        setFileB(file)
        setParagraphPagesB(pages)
        setTotalPagesB(pages.length)
      }

      setCurrentPage(0)
    } catch {
      setHasError(true)
      setErrorMessage(`Failed to load the ${side === "left" ? "original" : "modified"} PDF. The file may be corrupted or password-protected.`)
    } finally {
      setIsLoading(false)
    }
  }, [extractParagraphPages])

  const pageResults = useMemo(() => {
    if (!isReady) {
      return []
    }

    return Array.from({ length: maxPages }, (_, index) =>
      buildPageDiff(paragraphPagesA[index] ?? [], paragraphPagesB[index] ?? [])
    )
  }, [isReady, maxPages, paragraphPagesA, paragraphPagesB])

  const resetInterface = useCallback(() => {
    setFileA(null)
    setFileB(null)
    setParagraphPagesA([])
    setParagraphPagesB([])
    setTotalPagesA(0)
    setTotalPagesB(0)
    setCurrentPage(0)
    setHasError(false)
    setErrorMessage("")
  }, [])

  const downloadDiffReport = useCallback(() => {
    const totalChanged = pageResults.reduce((sum, page) => sum + page.changedParagraphs, 0)
    const totalUnchanged = pageResults.reduce((sum, page) => sum + page.unchangedParagraphs, 0)

    let report = "PDF PARAGRAPH DIFF REPORT\n"
    report += "=========================\n\n"
    report += `Original: ${fileA?.name || "Unknown"} (${totalPagesA} pages)\n`
    report += `Modified: ${fileB?.name || "Unknown"} (${totalPagesB} pages)\n\n`
    report += `Changed paragraphs: ${totalChanged}\n`
    report += `Unchanged paragraphs: ${totalUnchanged}\n\n`

    pageResults.forEach((page, pageIndex) => {
      report += `--- Page ${pageIndex + 1} ---\n`
      page.rows.forEach((row, rowIndex) => {
        if (!row.changed) {
          return
        }

        report += `Row ${rowIndex + 1}\n`
        report += `Original: ${row.leftText}\n`
        report += `Modified: ${row.rightText}\n\n`
      })
    })

    const blob = new Blob([report], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "pdf-compare-report.txt"
    link.click()
    URL.revokeObjectURL(url)
  }, [fileA, fileB, pageResults, totalPagesA, totalPagesB])

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
              PDF Compare is available on the Business plan. Upload two PDFs and review paragraph-level changes side by side.
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
            <p className="text-slate-600 font-medium">Extracting text and matching paragraphs...</p>
          </div>
        </div>
      </section>
    )
  }

  if (!isReady) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Original PDF</h3>
                {fileA && paragraphPagesA.length > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileA.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesA} page{totalPagesA !== 1 ? "s" : ""}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3 text-xs"
                      onClick={() => {
                        setFileA(null)
                        setParagraphPagesA([])
                        setTotalPagesA(0)
                      }}
                    >
                      <X className="h-3 w-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div
                    className={cn(
                      "border-2 border-dashed rounded-xl p-8 transition-all duration-200 cursor-pointer text-center",
                      isDragOverA ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
                    )}
                    onDragOver={(event) => {
                      event.preventDefault()
                      setIsDragOverA(true)
                    }}
                    onDragLeave={(event) => {
                      event.preventDefault()
                      setIsDragOverA(false)
                    }}
                    onDrop={(event) => {
                      event.preventDefault()
                      setIsDragOverA(false)
                      const file = event.dataTransfer.files[0]
                      if (file) {
                        void handlePdfLoad(file, "left")
                      }
                    }}
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
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (file) {
                      void handlePdfLoad(file, "left")
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-center">Modified PDF</h3>
                {fileB && paragraphPagesB.length > 0 ? (
                  <div className="border-2 border-green-400 bg-green-50 rounded-xl p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-slate-900 truncate">{fileB.name}</p>
                    <p className="text-sm text-slate-500">{totalPagesB} page{totalPagesB !== 1 ? "s" : ""}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3 text-xs"
                      onClick={() => {
                        setFileB(null)
                        setParagraphPagesB([])
                        setTotalPagesB(0)
                      }}
                    >
                      <X className="h-3 w-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div
                    className={cn(
                      "border-2 border-dashed rounded-xl p-8 transition-all duration-200 cursor-pointer text-center",
                      isDragOverB ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
                    )}
                    onDragOver={(event) => {
                      event.preventDefault()
                      setIsDragOverB(true)
                    }}
                    onDragLeave={(event) => {
                      event.preventDefault()
                      setIsDragOverB(false)
                    }}
                    onDrop={(event) => {
                      event.preventDefault()
                      setIsDragOverB(false)
                      const file = event.dataTransfer.files[0]
                      if (file) {
                        void handlePdfLoad(file, "right")
                      }
                    }}
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
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (file) {
                      void handlePdfLoad(file, "right")
                    }
                  }}
                />
              </div>
            </div>
            <TrustBadges />
          </div>
        </div>
      </section>
    )
  }

  const currentPageResult = pageResults[currentPage]
  const totalChanged = currentPageResult?.changedParagraphs ?? 0
  const severityClass =
    totalChanged === 0
      ? "text-green-600"
      : totalChanged <= 2
        ? "text-yellow-600"
        : totalChanged <= 6
          ? "text-orange-600"
          : "text-red-600"
  const severityLabel =
    totalChanged === 0
      ? "Identical"
      : totalChanged <= 2
        ? "Minor changes"
        : totalChanged <= 6
          ? "Moderate changes"
          : "Major changes"

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                <Download className="h-3 w-3 mr-1" />
                Report
              </Button>
              <Button variant="outline" size="sm" onClick={resetInterface} className="text-xs">
                <X className="h-3 w-3 mr-1" />
                New Compare
              </Button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((page) => page - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-slate-700 min-w-[90px] text-center">
                Page {currentPage + 1} of {maxPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage >= maxPages - 1}
                onClick={() => setCurrentPage((page) => page + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <span className={cn("text-sm font-bold", severityClass)}>{severityLabel}</span>
              <span className="text-xs text-slate-500">
                {currentPageResult?.changedParagraphs ?? 0} changed paragraph{(currentPageResult?.changedParagraphs ?? 0) === 1 ? "" : "s"}
              </span>
            </div>
          </div>

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

          {currentPageResult && (
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-50 border-b border-gray-200">
                <div className="px-4 py-2 text-xs font-bold text-red-600 uppercase tracking-wide">Original</div>
                <div className="px-4 py-2 text-xs font-bold text-green-600 uppercase tracking-wide">Modified</div>
              </div>

              <div className="max-h-[650px] overflow-y-auto divide-y divide-gray-100">
                {currentPageResult.rows.map((row, index) => (
                  <div key={index} className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className={cn("px-4 py-3 text-sm leading-7 break-words", row.changed ? "bg-red-50/40" : "bg-white")}>
                      <p className="whitespace-pre-wrap text-slate-800">{renderTokens(row.leftTokens)}</p>
                    </div>
                    <div className={cn("px-4 py-3 text-sm leading-7 break-words", row.changed ? "bg-green-50/40" : "bg-white")}>
                      <p className="whitespace-pre-wrap text-slate-800">{renderTokens(row.rightTokens)}</p>
                    </div>
                  </div>
                ))}

                {currentPageResult.rows.length === 0 && (
                  <div className="px-4 py-8 text-center text-slate-400">No text content on this page.</div>
                )}
              </div>
            </div>
          )}

          {pageResults.length > 1 && (
            <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Page Summary</h3>
              <div className="flex flex-wrap gap-2">
                {pageResults.map((result, index) => {
                  const changedCount = result.changedParagraphs

                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={cn(
                        "text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors",
                        currentPage === index && "ring-2 ring-indigo-500",
                        changedCount === 0 && "bg-green-50 border-green-200 text-green-700",
                        changedCount > 0 && changedCount <= 2 && "bg-yellow-50 border-yellow-200 text-yellow-700",
                        changedCount > 2 && changedCount <= 6 && "bg-orange-50 border-orange-200 text-orange-700",
                        changedCount > 6 && "bg-red-50 border-red-200 text-red-700"
                      )}
                    >
                      P{index + 1}: {changedCount === 0 ? "Same" : `${changedCount} change${changedCount === 1 ? "" : "s"}`}
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
