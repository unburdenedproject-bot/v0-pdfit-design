"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import * as Diff from "diff"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"
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

  // If we ended up with a single giant paragraph (50+ words), it's likely a table/invoice
  // where gap detection didn't find breaks. Split by label-value patterns.
  if (result.length === 1 && countWords(result[0]) >= 50) {
    // Match all-caps labels (2+ chars) optionally followed by a colon/number,
    // e.g. "INVOICE 8342" or "DUE DATE: 01/21/2026" or "TOTAL $500.00"
    const labelPattern = /(?=\b[A-Z][A-Z /]+(?:[:#]|\b))/g
    const parts = result[0].split(labelPattern).map((s) => s.trim()).filter(Boolean)
    if (parts.length > 1) return parts
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
    setIsGeneratingReport(false)
    setErrorMessage("")
  }, [])

  const [isGeneratingReport, setIsGeneratingReport] = useState(false)

  const downloadDiffReport = useCallback(async () => {
    setIsGeneratingReport(true)
    try {
      const totalAdded = pageResults.reduce((sum, page) => sum + page.addedWords, 0)
      const totalRemoved = pageResults.reduce((sum, page) => sum + page.removedWords, 0)
      const totalChanges = totalAdded + totalRemoved
      const overallLabel =
        totalChanges === 0 ? "Identical" :
        totalChanges <= 40 ? "Minor changes" :
        totalChanges <= 150 ? "Moderate changes" : "Major changes"

      const pdfDoc = await PDFDocument.create()
      const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
      const courier = await pdfDoc.embedFont(StandardFonts.Courier)

      const W = 612 // Letter width in points
      const H = 792 // Letter height
      const MARGIN = 50
      const CONTENT_W = W - MARGIN * 2

      const BRAND_COLOR = rgb(0.31, 0.31, 0.82)  // indigo
      const RED = rgb(0.8, 0.15, 0.15)
      const GREEN = rgb(0.1, 0.55, 0.1)
      const DARK = rgb(0.15, 0.15, 0.2)
      const GRAY = rgb(0.4, 0.4, 0.45)
      const LIGHT_GRAY = rgb(0.92, 0.92, 0.94)
      const WHITE = rgb(1, 1, 1)

      // ── Helper: sanitize text to WinAnsi-safe characters ──
      // pdf-lib standard fonts only support WinAnsi encoding.
      // Replace unsupported characters so drawText never crashes.
      function safe(text: string): string {
        return text
          .replace(/[\u2014\u2013]/g, "-")     // em/en dash -> hyphen
          .replace(/[\u2018\u2019]/g, "'")     // smart single quotes
          .replace(/[\u201C\u201D]/g, '"')     // smart double quotes
          .replace(/\u2026/g, "...")            // ellipsis
          .replace(/\u2022/g, "-")             // bullet
          .replace(/[^\x00-\xFF]/g, "?")       // anything outside Latin-1 -> ?
      }

      // ── Helper: wrap text into lines that fit a given width ──
      function wrapText(text: string, font: typeof helvetica, fontSize: number, maxWidth: number): string[] {
        const words = safe(text).split(/\s+/)
        const lines: string[] = []
        let currentLine = ""

        for (const word of words) {
          const testLine = currentLine ? `${currentLine} ${word}` : word
          const testWidth = font.widthOfTextAtSize(testLine, fontSize)
          if (testWidth > maxWidth && currentLine) {
            lines.push(currentLine)
            currentLine = word
          } else {
            currentLine = testLine
          }
        }
        if (currentLine) lines.push(currentLine)
        return lines.length > 0 ? lines : [""]
      }

      // ── Helper: draw a rectangle with optional border ──
      function drawBox(page: ReturnType<typeof pdfDoc.addPage>, x: number, y: number, w: number, h: number, color: ReturnType<typeof rgb>, borderColor?: ReturnType<typeof rgb>) {
        page.drawRectangle({ x, y, width: w, height: h, color })
        if (borderColor) {
          page.drawRectangle({ x, y, width: w, height: h, borderColor, borderWidth: 0.5 })
        }
      }

      // ── Helper: add footer to a page ──
      function addFooter(page: ReturnType<typeof pdfDoc.addPage>, pageNum: number, totalPages: number) {
        const footerY = 30
        page.drawLine({ start: { x: MARGIN, y: footerY + 12 }, end: { x: W - MARGIN, y: footerY + 12 }, thickness: 0.5, color: LIGHT_GRAY })
        page.drawText("omnispdf.com/pdf-compare", { x: MARGIN, y: footerY, size: 7, font: helvetica, color: GRAY })
        const pageLabel = `Page ${pageNum} of ${totalPages}`
        const pageLabelWidth = helvetica.widthOfTextAtSize(pageLabel, 7)
        page.drawText(pageLabel, { x: W - MARGIN - pageLabelWidth, y: footerY, size: 7, font: helvetica, color: GRAY })
      }

      // ── Helper: draw the table header row ──
      function drawTableHeader(page: ReturnType<typeof pdfDoc.addPage>, atY: number) {
        drawBox(page, MARGIN, atY - 18, CONTENT_W, 18, BRAND_COLOR)
        page.drawText("Page", { x: MARGIN + 10, y: atY - 13, size: 8, font: helveticaBold, color: WHITE })
        page.drawText("Status", { x: MARGIN + 80, y: atY - 13, size: 8, font: helveticaBold, color: WHITE })
        page.drawText("Added", { x: MARGIN + 260, y: atY - 13, size: 8, font: helveticaBold, color: WHITE })
        page.drawText("Removed", { x: MARGIN + 340, y: atY - 13, size: 8, font: helveticaBold, color: WHITE })
        page.drawText("Total", { x: MARGIN + 430, y: atY - 13, size: 8, font: helveticaBold, color: WHITE })
      }

      // ════════════════════════════════════════════════
      // PAGE 1: Cover / Summary
      // ════════════════════════════════════════════════
      let currentCoverPage = pdfDoc.addPage([W, H])

      // Header bar
      drawBox(currentCoverPage, 0, H - 80, W, 80, BRAND_COLOR)
      currentCoverPage.drawText("PDF COMPARISON REPORT", { x: MARGIN, y: H - 52, size: 20, font: helveticaBold, color: WHITE })
      currentCoverPage.drawText("Generated by OmnisPDF", { x: MARGIN, y: H - 68, size: 9, font: helvetica, color: rgb(0.8, 0.8, 1) })

      let y = H - 120

      // Date
      const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })
      currentCoverPage.drawText(dateStr, { x: MARGIN, y, size: 9, font: helvetica, color: GRAY })
      y -= 30

      // Document info box
      const nameA = safe(fileA?.name || "Unknown")
      const nameB = safe(fileB?.name || "Unknown")
      drawBox(currentCoverPage, MARGIN, y - 70, CONTENT_W, 70, rgb(0.97, 0.97, 0.99), LIGHT_GRAY)
      currentCoverPage.drawText("DOCUMENTS COMPARED", { x: MARGIN + 15, y: y - 18, size: 8, font: helveticaBold, color: BRAND_COLOR })
      currentCoverPage.drawText("Original:", { x: MARGIN + 15, y: y - 35, size: 9, font: helveticaBold, color: DARK })
      currentCoverPage.drawText(`${nameA}  (${totalPagesA} page${totalPagesA !== 1 ? "s" : ""})`, { x: MARGIN + 75, y: y - 35, size: 9, font: helvetica, color: DARK })
      currentCoverPage.drawText("Modified:", { x: MARGIN + 15, y: y - 52, size: 9, font: helveticaBold, color: DARK })
      currentCoverPage.drawText(`${nameB}  (${totalPagesB} page${totalPagesB !== 1 ? "s" : ""})`, { x: MARGIN + 75, y: y - 52, size: 9, font: helvetica, color: DARK })
      y -= 100

      // Summary stats
      currentCoverPage.drawText("SUMMARY", { x: MARGIN, y, size: 11, font: helveticaBold, color: DARK })
      y -= 20

      // Stats boxes (3 columns)
      const boxW = (CONTENT_W - 20) / 3
      const statsData = [
        { label: "Assessment", value: overallLabel, color: totalChanges === 0 ? GREEN : totalChanges <= 150 ? rgb(0.75, 0.55, 0) : RED },
        { label: "Words Added", value: `+${totalAdded}`, color: GREEN },
        { label: "Words Removed", value: `-${totalRemoved}`, color: RED },
      ]
      statsData.forEach((stat, i) => {
        const bx = MARGIN + i * (boxW + 10)
        drawBox(currentCoverPage, bx, y - 50, boxW, 50, rgb(0.97, 0.97, 0.99), LIGHT_GRAY)
        currentCoverPage.drawText(stat.label, { x: bx + 10, y: y - 18, size: 7, font: helveticaBold, color: GRAY })
        currentCoverPage.drawText(stat.value, { x: bx + 10, y: y - 38, size: 16, font: helveticaBold, color: stat.color })
      })
      y -= 80

      // Page-by-page overview table
      currentCoverPage.drawText("PAGE-BY-PAGE OVERVIEW", { x: MARGIN, y, size: 11, font: helveticaBold, color: DARK })
      y -= 20

      // Table header
      drawTableHeader(currentCoverPage, y)
      y -= 18

      pageResults.forEach((page, idx) => {
        const changes = page.addedWords + page.removedWords
        const status =
          changes === 0 ? "Identical" :
          changes <= 20 ? "Minor changes" :
          changes <= 80 ? "Moderate changes" : "Major changes"
        const statusColor = changes === 0 ? GREEN : changes <= 80 ? rgb(0.75, 0.55, 0) : RED
        const rowBg = idx % 2 === 0 ? rgb(0.98, 0.98, 1) : WHITE

        // Overflow to new page if needed
        if (y < 60) {
          currentCoverPage = pdfDoc.addPage([W, H])
          y = H - 50
          drawTableHeader(currentCoverPage, y)
          y -= 18
        }

        drawBox(currentCoverPage, MARGIN, y - 18, CONTENT_W, 18, rowBg)
        currentCoverPage.drawText(`Page ${idx + 1}`, { x: MARGIN + 10, y: y - 13, size: 8, font: helvetica, color: DARK })
        currentCoverPage.drawText(status, { x: MARGIN + 80, y: y - 13, size: 8, font: helveticaBold, color: statusColor })
        currentCoverPage.drawText(`+${page.addedWords}`, { x: MARGIN + 260, y: y - 13, size: 8, font: courier, color: GREEN })
        currentCoverPage.drawText(`-${page.removedWords}`, { x: MARGIN + 340, y: y - 13, size: 8, font: courier, color: RED })
        currentCoverPage.drawText(`${changes}`, { x: MARGIN + 430, y: y - 13, size: 8, font: courier, color: DARK })
        y -= 18
      })

      // ════════════════════════════════════════════════
      // DETAIL PAGES: One per compared page with changes
      // ════════════════════════════════════════════════

      pageResults.forEach((page, pageIdx) => {
        const changes = page.addedWords + page.removedWords
        if (changes === 0) return

        let dp = pdfDoc.addPage([W, H])

        // Detail page header helper
        function drawDetailHeader(p: typeof dp, label: string) {
          drawBox(p, 0, H - 50, W, 50, rgb(0.95, 0.95, 0.98))
          p.drawLine({ start: { x: 0, y: H - 50 }, end: { x: W, y: H - 50 }, thickness: 2, color: BRAND_COLOR })
          p.drawText(safe(label), { x: MARGIN, y: H - 35, size: 13, font: helveticaBold, color: DARK })

          const sLabel =
            changes <= 20 ? "Minor changes" :
            changes <= 80 ? "Moderate changes" : "Major changes"
          const sColor = changes <= 80 ? rgb(0.75, 0.55, 0) : RED
          const sW = helveticaBold.widthOfTextAtSize(sLabel, 9)
          p.drawText(sLabel, { x: W - MARGIN - sW, y: H - 35, size: 9, font: helveticaBold, color: sColor })
        }

        drawDetailHeader(dp, `Page ${pageIdx + 1} - Detailed Changes`)

        let dy = H - 75

        // Stats line
        dp.drawText(`+${page.addedWords} added`, { x: MARGIN, y: dy, size: 8, font: helveticaBold, color: GREEN })
        dp.drawText(`-${page.removedWords} removed`, { x: MARGIN + 80, y: dy, size: 8, font: helveticaBold, color: RED })
        dy -= 20

        page.paragraphs.forEach((para, pIdx) => {
          if (!para.changed) return

          const removedTokens = para.leftTokens.filter((t) => t.highlight === "removed")
          const addedTokens = para.rightTokens.filter((t) => t.highlight === "added")
          if (removedTokens.length === 0 && addedTokens.length === 0) return

          // Check if we need a new page
          if (dy < 100) {
            dp = pdfDoc.addPage([W, H])
            drawDetailHeader(dp, `Page ${pageIdx + 1} - Detailed Changes (continued)`)
            dy = H - 75
          }

          // Section label
          dp.drawText(`Change ${pIdx + 1}`, { x: MARGIN, y: dy, size: 9, font: helveticaBold, color: DARK })
          dy -= 5

          // Removed text block
          if (removedTokens.length > 0) {
            const removedText = removedTokens.map((t) => t.text.trim()).join("  ")
            const removedLines = wrapText(removedText, helvetica, 8, CONTENT_W - 30)

            const blockH = Math.max(22, removedLines.length * 12 + 10)
            if (dy - blockH < 60) {
              dp = pdfDoc.addPage([W, H])
              drawDetailHeader(dp, `Page ${pageIdx + 1} - Detailed Changes (continued)`)
              dy = H - 75
            }

            drawBox(dp, MARGIN, dy - blockH, CONTENT_W, blockH, rgb(1, 0.95, 0.95), rgb(0.9, 0.8, 0.8))
            dp.drawText("REMOVED", { x: MARGIN + 8, y: dy - 12, size: 6, font: helveticaBold, color: RED })
            removedLines.forEach((line, li) => {
              dp.drawText(line, { x: MARGIN + 8, y: dy - 22 - li * 12, size: 8, font: helvetica, color: rgb(0.5, 0.1, 0.1) })
            })
            dy -= blockH + 5
          }

          // Added text block
          if (addedTokens.length > 0) {
            const addedText = addedTokens.map((t) => t.text.trim()).join("  ")
            const addedLines = wrapText(addedText, helvetica, 8, CONTENT_W - 30)

            const blockH = Math.max(22, addedLines.length * 12 + 10)
            if (dy - blockH < 60) {
              dp = pdfDoc.addPage([W, H])
              drawDetailHeader(dp, `Page ${pageIdx + 1} - Detailed Changes (continued)`)
              dy = H - 75
            }

            drawBox(dp, MARGIN, dy - blockH, CONTENT_W, blockH, rgb(0.95, 1, 0.95), rgb(0.8, 0.9, 0.8))
            dp.drawText("ADDED", { x: MARGIN + 8, y: dy - 12, size: 6, font: helveticaBold, color: GREEN })
            addedLines.forEach((line, li) => {
              dp.drawText(line, { x: MARGIN + 8, y: dy - 22 - li * 12, size: 8, font: helvetica, color: rgb(0.1, 0.35, 0.1) })
            })
            dy -= blockH + 5
          }

          dy -= 10
        })
      })

      // Add footers to all pages
      const allPages = pdfDoc.getPages()
      const totalDocPages = allPages.length
      allPages.forEach((p, i) => addFooter(p, i + 1, totalDocPages))

      // Download
      const pdfBytes = await pdfDoc.save()
      const blob = new Blob([pdfBytes], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "PDF-Comparison-Report.pdf"
      link.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error("Report generation failed:", err)
      setErrorMessage("Failed to generate the comparison report. Please try again.")
    } finally {
      setIsGeneratingReport(false)
    }
  }, [fileA, fileB, pageResults, totalPagesA, totalPagesB])

  // ──── Render states ────

  // Check for upgrade/limit errors before other states
  const isUpgradeError = (errorMessage || "").includes("upgrade_required")
  const isLimitError = (errorMessage || "").toLowerCase().includes("daily limit reached") || (errorMessage || "").includes("daily_limit_reached")
  const isSignupError = (errorMessage || "").includes("signup_required")

  if (isSignupError) {
    router.push("/signup-required")
    return null
  }

  if (isUpgradeError || isLimitError) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-10 w-10 text-orange-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
              {isUpgradeError ? "This Feature Requires an Upgrade" : "You're out of free conversions"}
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">Upgrade to Business</p>
            <p className="text-base sm:text-lg text-slate-600 mb-8">
              {isUpgradeError
                ? "This tool is available on the Business plan. Upgrade to unlock unlimited access to all PDF tools."
                : "Free includes 10 conversions per day. Upgrade for unlimited conversions."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => router.push("/pricing")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl px-6 py-3"
              >
                Upgrade to Business
              </Button>
              <Button
                onClick={resetInterface}
                variant="outline"
                className="border border-slate-200 text-slate-700 rounded-xl px-6 py-3"
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

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
              <Button variant="outline" size="sm" onClick={downloadDiffReport} disabled={isGeneratingReport} className="text-xs">
                {isGeneratingReport ? (
                  <><Loader2 className="h-3 w-3 mr-1 animate-spin" /> Generating...</>
                ) : (
                  <><Download className="h-3 w-3 mr-1" /> Report</>
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={resetInterface} className="text-xs">
                <X className="h-3 w-3 mr-1" /> New Compare
              </Button>
            </div>
          </div>

          {errorMessage && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

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
