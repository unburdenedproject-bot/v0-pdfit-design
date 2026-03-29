"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Crown,
  FileText,
  Loader2,
  Upload,
  X,
  Send,
  MessageCircle,
  AlertTriangle,
  RotateCcw,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { TrustBadges } from "@/components/trust-badges"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

export function ChatWithPdfInterface() {
  const router = useRouter()
  const pathname = usePathname()
  const chatEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [blobUrl, setBlobUrl] = useState<string | null>(null)
  const [pdfText, setPdfText] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [question, setQuestion] = useState("")
  const [isThinking, setIsThinking] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [userPlan, setUserPlan] = useState<string>("free")

  // Locale detection
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

  // Fetch user plan
  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const isBusinessUser = userPlan === "business" || userPlan === "enterprise"

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isThinking])

  // Labels by locale
  const labels =
    localePrefix === "/es"
      ? {
          uploadTitle: "Sube tu PDF",
          uploadDesc: "Arrastra y suelta tu archivo PDF aqui, o haz clic para seleccionar",
          browse: "Seleccionar archivo",
          uploading: "Subiendo...",
          placeholder: "Pregunta algo sobre tu documento...",
          send: "Enviar",
          thinking: "Pensando...",
          welcome: "Tu PDF esta listo. Pregunta lo que quieras sobre el documento.",
          startNew: "Nuevo documento",
          upgradeTitle: "Funcion Business",
          upgradeDesc: "Chat con PDF esta disponible en el plan Business ($13.99/mes). Haz preguntas y obtén respuestas instantaneas de cualquier documento.",
          upgradeBtn: "Ver Plan Business",
        }
      : localePrefix === "/br"
        ? {
            uploadTitle: "Envie seu PDF",
            uploadDesc: "Arraste e solte seu arquivo PDF aqui, ou clique para selecionar",
            browse: "Selecionar arquivo",
            uploading: "Enviando...",
            placeholder: "Pergunte algo sobre seu documento...",
            send: "Enviar",
            thinking: "Pensando...",
            welcome: "Seu PDF esta pronto. Pergunte o que quiser sobre o documento.",
            startNew: "Novo documento",
            upgradeTitle: "Funcao Business",
            upgradeDesc: "Chat com PDF esta disponivel no plano Business ($13.99/mes). Faca perguntas e obtenha respostas instantaneas de qualquer documento.",
            upgradeBtn: "Ver Plano Business",
          }
        : {
            uploadTitle: "Upload your PDF",
            uploadDesc: "Drag and drop your PDF file here, or click to browse",
            browse: "Browse files",
            uploading: "Uploading...",
            placeholder: "Ask a question about your document...",
            send: "Send",
            thinking: "Thinking...",
            welcome: "Your PDF is ready. Ask anything about the document.",
            startNew: "New document",
            upgradeTitle: "Business Feature",
            upgradeDesc: "Chat with PDF is available on the Business plan ($13.99/month). Ask questions and get instant answers from any document.",
            upgradeBtn: "View Business Plan",
          }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
      setHasError(false)
      setErrorMessage("")
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setHasError(false)
      setErrorMessage("")
    }
  }, [])

  // Upload file and send first extraction request
  const handleUpload = useCallback(async () => {
    if (!file) return

    setIsUploading(true)
    setHasError(false)
    setErrorMessage("")

    try {
      const url = await uploadFileToBlob(file)
      setBlobUrl(url)

      // Send a first request to extract text
      const response = await fetch("/api/chat-with-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl: url,
          question: "Briefly summarize this document in 2-3 sentences.",
          history: [],
        }),
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
        throw new Error(message)
      }

      const data = await response.json()
      setPdfText(data.pdfText || null)
      setMessages([
        { role: "assistant", content: labels.welcome },
        { role: "assistant", content: data.answer },
      ])

      // Clean up blob after text extraction
      deleteBlobUrl(url)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setHasError(true)
      setErrorMessage(msg)
      setFile(null)
      setBlobUrl(null)
    } finally {
      setIsUploading(false)
    }
  }, [file, labels.welcome, pricingUrl, router])

  // Auto-upload when file is selected
  useEffect(() => {
    if (file && !blobUrl && !isUploading) {
      handleUpload()
    }
  }, [file, blobUrl, isUploading, handleUpload])

  const handleSend = useCallback(async () => {
    if (!question.trim() || isThinking || !pdfText) return

    const userQuestion = question.trim()
    setQuestion("")
    setHasError(false)
    setErrorMessage("")

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userQuestion },
    ]
    setMessages(newMessages)
    setIsThinking(true)

    try {
      // Build history from existing messages (skip the welcome message)
      const history = newMessages
        .filter((_, i) => i > 0) // Skip welcome message
        .map((m) => ({ role: m.role, content: m.content }))

      const response = await fetch("/api/chat-with-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pdfText,
          question: userQuestion,
          history: history.slice(-10), // Last 10 messages
        }),
      })

      if (!response.ok) {
        let message = `Request failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
        } catch {
          // response might not be JSON
        }
        throw new Error(message)
      }

      const data = await response.json()
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.answer },
      ])
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setMessages([
        ...newMessages,
        { role: "assistant", content: `Error: ${msg}` },
      ])
    } finally {
      setIsThinking(false)
      inputRef.current?.focus()
    }
  }, [question, isThinking, pdfText, messages])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend]
  )

  const handleReset = useCallback(() => {
    if (blobUrl) deleteBlobUrl(blobUrl)
    setFile(null)
    setBlobUrl(null)
    setPdfText(null)
    setMessages([])
    setQuestion("")
    setIsThinking(false)
    setHasError(false)
    setErrorMessage("")
    setIsUploading(false)
  }, [blobUrl])

  // Business tier gate
  if (!isBusinessUser) {
    return (
      <section
        className="py-16"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(20,216,196,0.04) 0%, transparent 50%), #0E0F1E",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div
              className="rounded-2xl p-[1px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.2), rgba(107,124,255,0.4))",
              }}
            >
              <div
                className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(107,124,255,0.03) 0%, transparent 60%), rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow:
                    "inset 0 1px 1px rgba(107,124,255,0.08), 0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)",
                    color: "#0E0F1E",
                  }}
                >
                  Business Feature
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                    boxShadow:
                      "0 0 20px rgba(107,124,255,0.3), 0 0 40px rgba(20,216,196,0.1), 0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <Crown className="h-7 w-7 text-[#6B7CFF]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {labels.upgradeTitle}
                </h2>
                <p className="text-sm text-slate-400 mb-6">
                  {labels.upgradeDesc}
                </p>
                <Button
                  onClick={() => router.push(pricingUrl)}
                  className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl"
                >
                  {labels.upgradeBtn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Chat active state
  if (pdfText && messages.length > 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">
                      {file?.name || "Document"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  {labels.startNew}
                </button>
              </div>

              {/* Messages */}
              <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                        msg.role === "user"
                          ? "bg-indigo-500 text-white"
                          : "bg-slate-100 text-slate-800"
                      )}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {isThinking && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-2xl px-4 py-3 text-sm text-slate-500 flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {labels.thinking}
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Input area */}
              <div className="border-t border-slate-200 p-4">
                <div className="flex gap-2">
                  <textarea
                    ref={inputRef}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={labels.placeholder}
                    rows={1}
                    className="flex-1 resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                    disabled={isThinking}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!question.trim() || isThinking}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8">
              <TrustBadges />
            </div>
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
            {/* Error message */}
            {hasError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}

            {isUploading ? (
              <div className="text-center py-12">
                <Loader2 className="h-12 w-12 text-indigo-500 animate-spin mx-auto mb-4" />
                <p className="text-sm font-medium text-slate-700">{labels.uploading}</p>
                <p className="text-xs text-slate-500 mt-1">Extracting text from your PDF...</p>
              </div>
            ) : (
              <div
                className={cn(
                  "border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer",
                  isDragOver
                    ? "border-indigo-400 bg-indigo-50"
                    : "border-slate-300 hover:border-indigo-300 hover:bg-slate-50"
                )}
                onDragOver={(e) => {
                  e.preventDefault()
                  setIsDragOver(true)
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() =>
                  document.getElementById("chat-pdf-file-input")?.click()
                }
              >
                <input
                  id="chat-pdf-file-input"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handleFileSelect}
                />
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {labels.uploadTitle}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {labels.uploadDesc}
                </p>
                <Button
                  variant="outline"
                  className="font-semibold"
                  onClick={(e) => {
                    e.stopPropagation()
                    document.getElementById("chat-pdf-file-input")?.click()
                  }}
                >
                  {labels.browse}
                </Button>
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  )
}
