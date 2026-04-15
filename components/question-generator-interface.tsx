"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Crown,
  FileText,
  Loader2,
  Upload,
  X,
  AlertTriangle,
  HelpCircle,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Check,
  Copy,
  Download,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { validateClientFile, getSizeLimitLabel } from "@/lib/client-file-validator"
import { trackToolEvent, classifyError } from "@/lib/analytics"
import { TrustBadges } from "@/components/trust-badges"

interface Question {
  type: "multiple_choice" | "short_answer" | "true_false"
  question: string
  options: string[] | null
  answer: string
  explanation: string
}

export function QuestionGeneratorInterface() {
  const router = useRouter()
  const pathname = usePathname()

  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isInvalidPdf, setIsInvalidPdf] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionType, setQuestionType] = useState<"mixed" | "multiple_choice" | "short_answer" | "true_false">("mixed")
  const [count, setCount] = useState(10)
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium")
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set())
  const [copied, setCopied] = useState(false)
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

  const isPaidUser = userPlan === "pro" || userPlan === "business" || userPlan === "enterprise"

  const labels =
    localePrefix === "/es"
      ? {
          uploadTitle: "Sube tu PDF",
          uploadDesc: "Arrastra y suelta tu archivo PDF aqui, o haz clic para seleccionar",
          browse: "Seleccionar archivo",
          generate: "Generar Preguntas",
          processing: "Generando preguntas con IA...",
          startNew: "Nuevo documento",
          copyAll: "Copiar todo",
          copied: "Copiado",
          downloadTxt: "Descargar TXT",
          downloadPdf: "Descargar PDF",
          showAnswer: "Ver respuesta",
          hideAnswer: "Ocultar",
          upgradeTitle: "Funcion Pro",
          upgradeDesc: "El Generador de Preguntas con IA esta disponible en el plan Pro ($3.99/mes). Genera preguntas de estudio y examen de cualquier documento.",
          upgradeBtn: "Ver Plan Pro",
          typeLabel: "Tipo de preguntas",
          mixed: "Mixto",
          multipleChoice: "Opcion multiple",
          shortAnswer: "Respuesta corta",
          trueFalse: "Verdadero/Falso",
          countLabel: "Cantidad",
          diffLabel: "Dificultad",
          easy: "Facil",
          medium: "Medio",
          hard: "Dificil",
          invalidTitle: "No pudimos leer este PDF",
          invalidDesc: "El PDF parece estar en blanco, escaneado o contener solo imagenes. Para generar preguntas, necesitamos un PDF con texto seleccionable.",
          invalidTip1: "Exporta desde Word o Google Docs como PDF",
          invalidTip2: "Si es un escaneo, pasalo primero por nuestra herramienta OCR",
          invalidTip3: "Verifica que el archivo no tenga contrasena",
        }
      : localePrefix === "/br"
        ? {
            uploadTitle: "Envie seu PDF",
            uploadDesc: "Arraste e solte seu arquivo PDF aqui, ou clique para selecionar",
            browse: "Selecionar arquivo",
            generate: "Gerar Perguntas",
            processing: "Gerando perguntas com IA...",
            startNew: "Novo documento",
            copyAll: "Copiar tudo",
            copied: "Copiado",
            downloadTxt: "Baixar TXT",
            downloadPdf: "Baixar PDF",
            showAnswer: "Ver resposta",
            hideAnswer: "Ocultar",
            upgradeTitle: "Funcao Pro",
            upgradeDesc: "O Gerador de Perguntas com IA esta disponivel no plano Pro ($3.99/mes). Gere perguntas de estudo e prova de qualquer documento.",
            upgradeBtn: "Ver Plano Pro",
            typeLabel: "Tipo de perguntas",
            mixed: "Misto",
            multipleChoice: "Multipla escolha",
            shortAnswer: "Resposta curta",
            trueFalse: "Verdadeiro/Falso",
            countLabel: "Quantidade",
            diffLabel: "Dificuldade",
            easy: "Facil",
            medium: "Medio",
            hard: "Dificil",
            invalidTitle: "Nao conseguimos ler este PDF",
            invalidDesc: "O PDF parece estar em branco, escaneado ou conter apenas imagens. Para gerar perguntas, precisamos de um PDF com texto selecionavel.",
            invalidTip1: "Exporte do Word ou Google Docs como PDF",
            invalidTip2: "Se for um scan, passe antes pela nossa ferramenta OCR",
            invalidTip3: "Verifique se o arquivo nao esta protegido por senha",
          }
        : {
            uploadTitle: "Upload your PDF",
            uploadDesc: "Drag and drop your PDF file here, or click to browse",
            browse: "Browse files",
            generate: "Generate Questions",
            processing: "Generating questions with AI...",
            startNew: "New document",
            copyAll: "Copy all",
            copied: "Copied",
            downloadTxt: "Download TXT",
            downloadPdf: "Download PDF",
            showAnswer: "Show answer",
            hideAnswer: "Hide",
            upgradeTitle: "Pro Feature",
            upgradeDesc: "AI Question Generator is available on the Pro plan ($3.99/month). Generate study and exam questions from any document.",
            upgradeBtn: "View Pro Plan",
            typeLabel: "Question type",
            mixed: "Mixed",
            multipleChoice: "Multiple choice",
            shortAnswer: "Short answer",
            trueFalse: "True / False",
            countLabel: "Count",
            diffLabel: "Difficulty",
            easy: "Easy",
            medium: "Medium",
            hard: "Hard",
            invalidTitle: "We couldn't read this PDF",
            invalidDesc: "The PDF appears to be blank, a scan, or image-only. To generate questions, we need a PDF that has selectable text.",
            invalidTip1: "Try exporting from Word or Google Docs as PDF",
            invalidTip2: "If it's a scan, run it through our OCR tool first",
            invalidTip3: "Make sure the file isn't password-protected",
          }

  const acceptFile = useCallback(async (f: File | undefined) => {
    if (!f) return
    if (f.type && f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      setHasError(true); setErrorMessage("Please upload a PDF file."); setFile(null); setQuestions([]); setRevealedAnswers(new Set()); return
    }
    const r = await validateClientFile(f, userPlan)
    if (!r.ok) { setHasError(true); setErrorMessage(r.error || "This file cannot be used."); setFile(null); setQuestions([]); setRevealedAnswers(new Set()); return }
    trackToolEvent("question-generator", "file_selected", {
      tier: userPlan,
      file_size_mb: f.size / (1024 * 1024),
      file_type: f.type || "pdf",
    })
    setFile(f); setHasError(false); setErrorMessage(""); setQuestions([]); setRevealedAnswers(new Set())
  }, [userPlan])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    acceptFile(e.dataTransfer.files[0])
  }, [acceptFile])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    acceptFile(e.target.files?.[0])
  }, [acceptFile])

  const handleProcess = useCallback(async () => {
    if (!file) return

    setIsProcessing(true)
    setHasError(false)
    setErrorMessage("")
    setIsInvalidPdf(false)

    let blobUrl: string | null = null
    const t0 = Date.now()
    trackToolEvent("question-generator", "process_start", {
      tier: userPlan,
      file_size_mb: file.size / (1024 * 1024),
      question_type: questionType,
      count,
      difficulty,
    })

    try {
      blobUrl = await uploadFileToBlob(file)

      const response = await fetch("/api/question-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blobUrl, questionType, count, difficulty }),
      })

      if (!response.ok) {
        let message = `Processing failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required")) {
            router.push(pricingUrl)
            return
          }
        } catch {
          // response might not be JSON
        }
        if (response.status === 422 || response.status === 400) {
          setIsInvalidPdf(true)
          trackToolEvent("question-generator", "process_error", {
            tier: userPlan,
            latency_ms: Date.now() - t0,
            error_type: classifyError(response.status, message),
            error_code: response.status,
          })
          return
        }
        throw new Error(message)
      }

      const data = await response.json()
      setQuestions(data.questions || [])
      trackToolEvent("question-generator", "process_complete", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
        output_count: (data.questions || []).length,
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
      trackToolEvent("question-generator", "process_error", {
        tier: userPlan,
        latency_ms: Date.now() - t0,
        error_type: classifyError(undefined, msg),
      })
    } finally {
      setIsProcessing(false)
      if (blobUrl) deleteBlobUrl(blobUrl)
    }
  }, [file, questionType, count, difficulty, pricingUrl, router, userPlan])

  const toggleAnswer = useCallback((index: number) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }, [])

  const formatQuestionsAsText = useCallback((): string => {
    return questions
      .map((q, i) => {
        let str = `${i + 1}. ${q.question}`
        if (q.options) str += "\n" + q.options.join("\n")
        str += `\nAnswer: ${q.answer}`
        str += `\nExplanation: ${q.explanation}`
        return str
      })
      .join("\n\n")
  }, [questions])

  const handleCopyAll = useCallback(() => {
    navigator.clipboard.writeText(formatQuestionsAsText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [formatQuestionsAsText])

  const handleDownloadTxt = useCallback(() => {
    trackToolEvent("question-generator", "result_downloaded", { tier: userPlan, format: "txt" })
    const text = formatQuestionsAsText()
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    const base = file?.name.replace(/\.pdf$/i, "") || "questions"
    a.download = `${base}-questions.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [file, formatQuestionsAsText, userPlan])

  const handleDownloadPdf = useCallback(async () => {
    trackToolEvent("question-generator", "result_downloaded", { tier: userPlan, format: "pdf" })
    const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib")
    const pdfDoc = await PDFDocument.create()
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    const pageWidth = 595.28
    const pageHeight = 841.89
    const margin = 50
    const maxWidth = pageWidth - margin * 2
    const lineHeight = 14
    const fontSize = 11

    let page = pdfDoc.addPage([pageWidth, pageHeight])
    let y = pageHeight - margin

    const wrapText = (text: string, f: any, size: number): string[] => {
      const words = text.split(/\s+/)
      const lines: string[] = []
      let current = ""
      for (const word of words) {
        const trial = current ? `${current} ${word}` : word
        if (f.widthOfTextAtSize(trial, size) > maxWidth) {
          if (current) lines.push(current)
          current = word
        } else {
          current = trial
        }
      }
      if (current) lines.push(current)
      return lines
    }

    const drawLine = (text: string, f: any, size: number, color = rgb(0.1, 0.1, 0.15)) => {
      const lines = wrapText(text, f, size)
      for (const line of lines) {
        if (y < margin + lineHeight) {
          page = pdfDoc.addPage([pageWidth, pageHeight])
          y = pageHeight - margin
        }
        page.drawText(line, { x: margin, y, size, font: f, color })
        y -= lineHeight
      }
    }

    const title = file?.name.replace(/\.pdf$/i, "") || "Questions"
    drawLine(`Questions: ${title}`, bold, 14)
    y -= 6

    questions.forEach((q, i) => {
      if (y < margin + lineHeight * 6) {
        page = pdfDoc.addPage([pageWidth, pageHeight])
        y = pageHeight - margin
      }
      drawLine(`${i + 1}. ${q.question}`, bold, fontSize)
      if (q.options) {
        for (const opt of q.options) drawLine(`   ${opt}`, font, fontSize)
      }
      drawLine(`Answer: ${q.answer}`, font, fontSize, rgb(0.05, 0.4, 0.35))
      drawLine(`Explanation: ${q.explanation}`, font, fontSize, rgb(0.35, 0.35, 0.4))
      y -= 8
    })

    const bytes = await pdfDoc.save()
    const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    const base = file?.name.replace(/\.pdf$/i, "") || "questions"
    a.download = `${base}-questions.pdf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [file, questions, userPlan])

  const handleReset = useCallback(() => {
    setFile(null)
    setIsProcessing(false)
    setHasError(false)
    setErrorMessage("")
    setIsInvalidPdf(false)
    setQuestions([])
    setRevealedAnswers(new Set())
    setCopied(false)
  }, [])

  // Pro tier gate (gold styling)
  if (!isPaidUser) {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(214,179,106,0.5), rgba(20,216,196,0.3), rgba(214,179,106,0.3), rgba(107,124,255,0.2), rgba(214,179,106,0.4))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(214,179,106,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 1px 1px rgba(214,179,106,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>Most Popular</div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(214,179,106,0.25), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#E0C27A]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{labels.upgradeTitle}</h2>
                <p className="text-sm text-slate-400 mb-6">{labels.upgradeDesc}</p>
                <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{labels.upgradeBtn}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Results view
  if (questions.length > 0) {
    const typeLabel = (t: string) =>
      t === "multiple_choice" ? "MC" : t === "true_false" ? "T/F" : "SA"
    const typeColor = (t: string) =>
      t === "multiple_choice"
        ? "bg-indigo-100 text-indigo-700"
        : t === "true_false"
          ? "bg-amber-100 text-amber-700"
          : "bg-green-100 text-green-700"

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <HelpCircle className="h-4 w-4 text-indigo-600" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {questions.length} questions
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyAll}
                    className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? labels.copied : labels.copyAll}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    {labels.startNew}
                  </button>
                </div>
              </div>

              {/* Questions */}
              <div className="max-h-[500px] overflow-y-auto divide-y divide-slate-100">
                {questions.map((q, i) => (
                  <div key={i} className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-slate-400 mt-0.5 w-5 shrink-0">{i + 1}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full uppercase", typeColor(q.type))}>
                            {typeLabel(q.type)}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-800 mb-2">{q.question}</p>

                        {q.options && (
                          <div className="space-y-1 mb-3">
                            {q.options.map((opt, oi) => (
                              <div key={oi} className="text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-1.5">
                                {opt}
                              </div>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => toggleAnswer(i)}
                          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                        >
                          {revealedAnswers.has(i) ? (
                            <><ChevronUp className="h-3 w-3" /> {labels.hideAnswer}</>
                          ) : (
                            <><ChevronDown className="h-3 w-3" /> {labels.showAnswer}</>
                          )}
                        </button>

                        {revealedAnswers.has(i) && (
                          <div className="mt-2 bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-sm font-semibold text-green-800 mb-1">{q.answer}</p>
                            <p className="text-xs text-green-700">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download bar */}
              <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 sm:px-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleDownloadPdf}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-5 rounded-xl transition-colors shadow-sm"
                  >
                    <Download className="h-4 w-4" />
                    {labels.downloadPdf}
                  </button>
                  <button
                    onClick={handleDownloadTxt}
                    className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-[#14D8C4] text-[#0E0F1E] hover:bg-[#14D8C4]/5 font-bold py-3 px-5 rounded-xl transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    {labels.downloadTxt}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8"><TrustBadges /></div>
          </div>
        </div>
      </section>
    )
  }

  // Upload state
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            {isInvalidPdf && (
              <div className="rounded-2xl p-5 mb-6 flex items-start gap-4" style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)", border: "1px solid #DBEAFE" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-1">{labels.invalidTitle}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{labels.invalidDesc}</p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-5">
                    <li>{labels.invalidTip1}</li>
                    <li>{labels.invalidTip2}</li>
                    <li>{labels.invalidTip3}</li>
                  </ul>
                </div>
              </div>
            )}
            {hasError && (
              <div className="rounded-2xl p-4 mb-6 flex items-start gap-3" style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)", border: "1px solid #DBEAFE" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                  <Info className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">{errorMessage}</p>
              </div>
            )}

            {!file ? (
              <div
                className={cn(
                  "border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer",
                  isDragOver ? "border-indigo-400 bg-indigo-50" : "border-slate-300 hover:border-indigo-300 hover:bg-slate-50"
                )}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("qgen-file-input")?.click()}
              >
                <input id="qgen-file-input" type="file" accept="application/pdf" className="hidden" onChange={handleFileSelect} />
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">{labels.uploadTitle}</h3>
                <p className="text-sm text-slate-500 mb-4">{labels.uploadDesc}</p>
                <Button variant="outline" className="font-semibold" onClick={(e) => { e.stopPropagation(); document.getElementById("qgen-file-input")?.click() }}>
                  {labels.browse}
                </Button>
                <p className="text-xs text-slate-400 mt-4">PDF only &middot; up to {getSizeLimitLabel(userPlan)}</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">{file.name}</p>
                      <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  {!isProcessing && (
                    <button onClick={handleReset} className="text-slate-400 hover:text-slate-600 transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {!isProcessing && (
                  <div className="space-y-4 mb-6">
                    {/* Question type */}
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-2 block">{labels.typeLabel}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                        {(["mixed", "multiple_choice", "short_answer", "true_false"] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setQuestionType(opt)}
                            className={cn(
                              "text-xs font-semibold py-2 px-2 rounded-lg border transition-colors",
                              questionType === opt
                                ? "bg-indigo-50 border-indigo-300 text-indigo-700"
                                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                            )}
                          >
                            {labels[opt === "multiple_choice" ? "multipleChoice" : opt === "short_answer" ? "shortAnswer" : opt === "true_false" ? "trueFalse" : "mixed"]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Count */}
                      <div>
                        <label className="text-xs font-semibold text-slate-600 mb-2 block">{labels.countLabel}</label>
                        <select
                          value={count}
                          onChange={(e) => setCount(parseInt(e.target.value))}
                          className="w-full text-xs font-semibold py-2 px-3 rounded-lg border border-slate-200 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        >
                          {[5, 10, 15, 20].map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                      {/* Difficulty */}
                      <div>
                        <label className="text-xs font-semibold text-slate-600 mb-2 block">{labels.diffLabel}</label>
                        <div className="flex gap-1">
                          {(["easy", "medium", "hard"] as const).map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setDifficulty(opt)}
                              className={cn(
                                "flex-1 text-xs font-semibold py-2 px-2 rounded-lg border transition-colors",
                                difficulty === opt
                                  ? "bg-indigo-50 border-indigo-300 text-indigo-700"
                                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                              )}
                            >
                              {labels[opt]}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {isProcessing && (
                  <div className="mb-6 text-center py-8">
                    <Loader2 className="h-10 w-10 text-indigo-500 animate-spin mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-700">{labels.processing}</p>
                  </div>
                )}

                {!isProcessing && (
                  <Button onClick={handleProcess} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl text-lg">
                    <HelpCircle className="h-5 w-5 mr-2" />
                    {labels.generate}
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="mt-8"><TrustBadges /></div>
        </div>
      </div>
    </section>
  )
}
