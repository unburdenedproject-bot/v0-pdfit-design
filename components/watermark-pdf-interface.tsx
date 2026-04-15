"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Upload,
  FileText,
  X,
  Download,
  CheckCircle,
  Loader2,
  AlertCircle,
  Shield,
  Droplets,
  Type,
  Check,
  Crown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { SoftErrorCard, isUserInputError } from "@/components/processing/soft-error-card"

interface ProcessedFile {
  name: string
  url: string
  inputBlobUrl?: string
  size: number
}

const FONT_SIZES = [
  { value: "12", label: "12 pt" },
  { value: "18", label: "18 pt" },
  { value: "24", label: "24 pt" },
  { value: "36", label: "36 pt" },
  { value: "48", label: "48 pt" },
  { value: "60", label: "60 pt" },
  { value: "72", label: "72 pt" },
]

const POSITIONS = [
  { value: "center", label: "Center" },
  { value: "top-left", label: "Top Left" },
  { value: "top-right", label: "Top Right" },
  { value: "bottom-left", label: "Bottom Left" },
  { value: "bottom-right", label: "Bottom Right" },
]

export function WatermarkPdfInterface() {
  const pathname = usePathname()
  const router = useRouter()
  const pricingUrl = pathname.startsWith("/es") ? "/es/precios" : pathname.startsWith("/br") ? "/br/precos" : "/pricing"
  const [isDragOver, setIsDragOver] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState("CONFIDENTIAL")
  const [userPlan, setUserPlan] = useState<string | null>(null)
  const [transparency, setTransparency] = useState(50)
  const [fontSize, setFontSize] = useState("48")
  const [color, setColor] = useState("#FF0000")
  const [position, setPosition] = useState("center")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [processedFile, setProcessedFile] = useState<ProcessedFile | null>(null)

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) {
      setFile(droppedFiles[0])
    }
  }, [])

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0])
      }
    },
    []
  )

  const removeFile = useCallback(() => {
    setFile(null)
  }, [])

  const processFile = useCallback(async () => {
    if (!file || !text.trim()) return

    setIsProcessing(true)
    setHasError(false)
    setProgress(10)

    try {
      // Step 1: Upload to Vercel Blob
      const inputBlobUrl = await uploadFileToBlob(file)

      setProgress(30)

      // Step 2: Call API with JSON
      const response = await fetch("/api/watermark-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl: inputBlobUrl,
          text: text.trim(),
          transparency,
          fontSize: Number(fontSize),
          color,
          position,
        }),
      })

      setProgress(70)

      if (!response.ok) {
        let message = `Watermark failed (HTTP ${response.status})`
        let details = ""
        const rawBody = await response.text()

        try {
          const errorData = JSON.parse(rawBody)
          if (errorData.error) message = errorData.error
          if (errorData.details) {
            details =
              typeof errorData.details === "string"
                ? errorData.details
                : JSON.stringify(errorData.details)
          }
        } catch {
          if (rawBody) details = rawBody
        }

        const fullMessage = details ? `${message}: ${details}` : message
        throw new Error(fullMessage)
      }

      // Derive filename from Content-Disposition header
      let downloadName = "watermarked.pdf"
      const cd = response.headers.get("content-disposition") || ""
      const cdMatch = cd.match(/filename[^;=\n]*=["']?([^"';\n]+)/)
      if (cdMatch?.[1]) {
        downloadName = cdMatch[1]
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      setProcessedFile({
        name: downloadName,
        url,
        inputBlobUrl,
        size: blob.size,
      })

      setProgress(100)
      setIsProcessing(false)
      setIsComplete(true)
    } catch (error) {
      setHasError(true)
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      )
      setIsProcessing(false)
    }
  }, [file, text, transparency, fontSize, color, position])

  const downloadFile = useCallback((fileUrl: string, fileName: string) => {
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = fileName
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  const resetInterface = useCallback(() => {
    if (processedFile) {
      URL.revokeObjectURL(processedFile.url)
      if (processedFile.inputBlobUrl) deleteBlobUrl(processedFile.inputBlobUrl)
    }
    setFile(null)
    setText("CONFIDENTIAL")
    setTransparency(50)
    setFontSize("48")
    setColor("#FF0000")
    setPosition("center")
    setProcessedFile(null)
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setProgress(0)
  }, [processedFile])

  const isProUser = userPlan === "pro" || userPlan === "business" || userPlan === "enterprise"

  // Locale labels for upgrade card
  const localePrefix = pathname.startsWith("/es") ? "/es" : pathname.startsWith("/br") ? "/br" : ""
  const upgradeLabels =
    localePrefix === "/es"
      ? {
          title: "Función Pro",
          desc: "Agregar Marca de Agua está disponible en el plan Pro.",
          btn: "Ver Plan Pro",
        }
      : localePrefix === "/br"
        ? {
            title: "Função Pro",
            desc: "Adicionar Marca d'Água está disponível no plano Pro.",
            btn: "Ver Plano Pro",
          }
        : {
            title: "Pro Feature",
            desc: "Add Watermark is available on the Pro plan.",
            btn: "View Pro Plan",
          }

  // Non-pro users see upgrade prompt
  if (userPlan !== null && !isProUser) {
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
                <h2 className="text-xl font-bold text-white mb-2">{upgradeLabels.title}</h2>
                <p className="text-sm text-slate-400 mb-6">{upgradeLabels.desc}</p>
                <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">{upgradeLabels.btn}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (hasError) {
    const isUpgradeError = (errorMessage || "").includes("upgrade_required")
    const isLimitError = (errorMessage || "").toLowerCase().includes("daily limit reached") || (errorMessage || "").includes("daily_limit_reached")
    const isSignupError = (errorMessage || "").includes("signup_required")

    if (isSignupError) {
      window.location.href = "/signup-required"
      return null
    }

    if (isUpgradeError || isLimitError) {
      return (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-[#F0FDFA] rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                {isUpgradeError ? "This Feature Requires an Upgrade" : "You're out of free conversions"}
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-[#14D8C4] mb-4">Upgrade to Pro</p>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                {isUpgradeError
                  ? "This tool is available on the Pro plan. Upgrade to unlock unlimited access to all PDF tools."
                  : "Free includes 10 conversions per day. Upgrade for unlimited conversions."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={() => window.location.href = pricingUrl}
                  className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold rounded-xl px-6 py-3"
                >
                  Upgrade to Pro
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

    if (isUserInputError(errorMessage)) {
      return <SoftErrorCard errorMessage={errorMessage} onReset={resetInterface} />
    }

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Watermark Failed
            </h2>
            <p className="text-muted-foreground mb-8">{errorMessage}</p>
            <Button
              onClick={resetInterface}
              className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Success state
  if (isComplete && processedFile) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Watermark Applied!
              </h2>
              <p className="text-muted-foreground text-lg">
                Your PDF has been watermarked and is ready for download.
              </p>
            </div>

            {userPlan === "pro" || userPlan === "business" || userPlan === "enterprise" ? (
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Droplets className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">
                        {processedFile.name}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>
                          {(processedFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                        <span className="text-green-600 font-medium">
                          Watermarked
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3"
                    onClick={() =>
                      downloadFile(processedFile.url, processedFile.name)
                    }
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-[#14D8C4]/40 rounded-xl p-6 mb-8 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-[60px] h-[80px] rounded border border-border shadow-sm bg-red-50 flex flex-col items-center justify-center flex-shrink-0">
                    <FileText className="h-8 w-8 text-red-500" />
                    <span className="text-[9px] font-bold text-red-500 mt-1">PDF</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{processedFile.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {(processedFile.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Your watermarked PDF is ready.</h3>
                <p className="text-muted-foreground mb-4">Upgrade to Pro to download — $3.99/month</p>
                <p className="text-xs text-muted-foreground italic mb-4">
                  We never store your files — you'll need to re-upload after upgrading. Your privacy is guaranteed.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-600" />
                    Unlimited conversions
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-600" />
                    All PDF tools
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-600" />
                    Files up to 200MB
                  </span>
                </div>
                <Link href={pricingUrl}>
                  <Button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-semibold px-6 py-3">
                    Upgrade to Pro
                  </Button>
                </Link>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetInterface}
                variant="outline"
                className="bg-card text-foreground border-border hover:bg-muted px-8 py-3"
              >
                Watermark Another PDF
              </Button>
              <Button
                className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] px-8 py-3"
                onClick={() => (window.location.href = "/")}
              >
                Try Another Tool
              </Button>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-blue-800 text-sm">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">
                    Files deleted immediately after your session
                  </span>
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
            <div className="w-20 h-20 bg-[#F0FDFA] rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-[#14D8C4] animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Adding Watermark...
            </h2>
            <p className="text-muted-foreground mb-8">
              Applying your watermark to every page of the document.
            </p>
            <div className="w-full bg-muted rounded-full h-3 mb-8">
              <div
                className="bg-[#14D8C4] h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {file && (
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>{file.name}</span>
              </div>
            )}
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
          {/* Drop zone */}
          <div
            className={cn(
              "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer",
              isDragOver
                ? "border-[#14D8C4] bg-[#F0FDFA]"
                : "border-border hover:border-[#14D8C4]/40 hover:bg-muted/50"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() =>
              document.getElementById("watermark-file-upload")?.click()
            }
          >
            <div className="text-center">
              <Upload className="h-12 w-12 text-[#14D8C4] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Drop your PDF here
              </h3>
              <p className="text-muted-foreground mb-6">or click to browse files</p>
              <Button
                size="lg"
                className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-semibold px-8"
              >
                Choose File
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Supported format: .pdf
              </p>
            </div>
          </div>

          <input
            id="watermark-file-upload"
            type="file"
            accept="application/pdf,.pdf"
            className="hidden"
            onClick={(e) => { (e.target as HTMLInputElement).value = "" }}
            onChange={handleFileSelect}
          />

          {/* File + watermark settings */}
          {file && (
            <div className="mt-8 space-y-6">
              {/* Selected file */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Selected file:
                </h3>
                <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#14D8C4]" />
                    <div>
                      <div className="font-medium text-foreground">
                        {file.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile()
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Watermark text */}
              <div>
                <Label
                  htmlFor="watermark-text"
                  className="text-lg font-bold text-foreground mb-2 flex items-center gap-2"
                >
                  <Type className="h-5 w-5 text-[#14D8C4]" />
                  Watermark Text
                </Label>
                <p className="text-sm text-muted-foreground mb-3">
                  Enter the text that will appear as a watermark on every page.
                </p>
                <Input
                  id="watermark-text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="e.g. CONFIDENTIAL, DRAFT, DO NOT COPY"
                  className="w-full"
                  maxLength={100}
                />
              </div>

              {/* Transparency */}
              <div>
                <Label className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-[#14D8C4]" />
                  Transparency: {transparency}%
                </Label>
                <p className="text-sm text-muted-foreground mb-3">
                  Higher values make the watermark more transparent.
                </p>
                <Slider
                  value={[transparency]}
                  onValueChange={(v) => setTransparency(v[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Opaque</span>
                  <span>Transparent</span>
                </div>
              </div>

              {/* Font size + Color + Position row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Font size */}
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">
                    Font Size
                  </Label>
                  <Select value={fontSize} onValueChange={setFontSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Font size" />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_SIZES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Color */}
                <div>
                  <Label
                    htmlFor="watermark-color"
                    className="text-sm font-semibold text-foreground mb-2 block"
                  >
                    Color
                  </Label>
                  <div className="flex items-center gap-2">
                    <input
                      id="watermark-color"
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="h-10 w-10 rounded-md border border-border cursor-pointer p-0.5"
                    />
                    <Input
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="flex-1 font-mono text-sm uppercase"
                      maxLength={7}
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">
                    Position
                  </Label>
                  <Select value={position} onValueChange={setPosition}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent>
                      {POSITIONS.map((p) => (
                        <SelectItem key={p.value} value={p.value}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit */}
              <Button
                onClick={processFile}
                disabled={!text.trim()}
                className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-semibold"
                size="lg"
              >
                <Droplets className="h-4 w-4 mr-2" />
                Apply Watermark
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
