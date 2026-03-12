"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Upload,
  FileText,
  X,
  Download,
  CheckCircle,
  Loader2,
  AlertCircle,
  Shield,
  Camera,
  ScanLine,
  Palette,
  Crown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"

interface ProcessedFile {
  name: string
  url: string
  inputBlobUrl?: string
  size: number
}

type CleanupMode = "bw" | "color"

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"]

export function PhoneScanCleanupInterface() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [mode, setMode] = useState<CleanupMode>("bw")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [processedFile, setProcessedFile] = useState<ProcessedFile | null>(null)
  const router = useRouter()

  const handleFile = useCallback((f: File) => {
    if (!ACCEPTED_TYPES.includes(f.type)) {
      setHasError(true)
      setErrorMessage("Please upload a JPG, PNG, or WEBP image.")
      return
    }
    setFile(f)
    setPreviewUrl(URL.createObjectURL(f))
    setHasError(false)
    setErrorMessage("")
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      const f = e.dataTransfer.files[0]
      if (f) handleFile(f)
    },
    [handleFile]
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0]
      if (f) handleFile(f)
      e.target.value = ""
    },
    [handleFile]
  )

  const removeFile = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setFile(null)
    setPreviewUrl(null)
  }, [previewUrl])

  const processFile = useCallback(async () => {
    if (!file) return

    setIsProcessing(true)
    setHasError(false)
    setProgress(10)

    let inputBlobUrl: string | undefined

    try {
      // Step 1: Upload to Vercel Blob
      inputBlobUrl = await uploadFileToBlob(file)
      setProgress(30)

      // Step 2: Call API
      const response = await fetch("/api/phone-scan-cleanup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blobUrl: inputBlobUrl, mode }),
      })

      setProgress(70)

      if (!response.ok) {
        const rawBody = await response.text()
        let message = `Cleanup failed (HTTP ${response.status})`

        try {
          const errorData = JSON.parse(rawBody)
          if (errorData.error) message = errorData.error
          if (message.includes("upgrade_required") || message.includes("signup_required")) {
            router.push("/pricing?source=phone-scan-cleanup")
            return
          }
        } catch {
          if (rawBody) message = rawBody
        }

        throw new Error(message)
      }

      // Derive filename from Content-Disposition
      let downloadName = "cleaned-scan.pdf"
      const cd = response.headers.get("content-disposition") || ""
      const cdMatch = cd.match(/filename[^;=\n]*=["']?([^"';\n]+)/)
      if (cdMatch?.[1]) downloadName = cdMatch[1]

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
      // Clean up the uploaded blob if API failed
      if (inputBlobUrl) deleteBlobUrl(inputBlobUrl)
      setHasError(true)
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      )
      setIsProcessing(false)
    }
  }, [file, mode, router])

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
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    if (processedFile) {
      URL.revokeObjectURL(processedFile.url)
      if (processedFile.inputBlobUrl) deleteBlobUrl(processedFile.inputBlobUrl)
    }
    setFile(null)
    setPreviewUrl(null)
    setMode("bw")
    setProcessedFile(null)
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setProgress(0)
  }, [previewUrl, processedFile])

  // ── Error state ──
  if (hasError && !file) {
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
              <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">Upgrade to Pro</p>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                {isUpgradeError
                  ? "This tool is available on the Pro plan. Upgrade to unlock unlimited access to all PDF tools."
                  : "Free includes 10 conversions per day. Upgrade for unlimited conversions."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={() => router.push("/pricing")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl px-6 py-3"
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

    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Cleanup Failed
            </h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button
              onClick={resetInterface}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // ── Success state ──
  if (isComplete && processedFile) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Scan Cleaned Up!
              </h2>
              <p className="text-slate-600 text-lg">
                Your phone scan has been cleaned, straightened, and converted to a professional PDF.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      {processedFile.name}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                      <span>
                        {(processedFile.size / 1024).toFixed(0)} KB
                      </span>
                      <span className="text-green-600 font-medium">
                        {mode === "bw" ? "Black & White" : "Color"} Cleanup
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetInterface}
                variant="outline"
                className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50 px-8 py-3"
              >
                Clean Another Scan
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
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
                    Your files are automatically deleted from our servers after 1
                    hour for your privacy and security.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── Processing state ──
  if (isProcessing) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-orange-600 animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Cleaning Your Scan...
            </h2>
            <p className="text-slate-600 mb-8">
              Removing shadows, adjusting contrast, and straightening your document.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {file && (
              <div className="flex items-center justify-center gap-3 text-slate-600">
                <Camera className="h-4 w-4" />
                <span>{file.name}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // ── Upload state ──
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Drop zone */}
          <div
            className={cn(
              "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer",
              isDragOver
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300 hover:border-orange-400 hover:bg-gray-50"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() =>
              document.getElementById("scan-file-upload")?.click()
            }
          >
            <div className="text-center">
              <Camera className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Drop your phone scan here
              </h3>
              <p className="text-slate-600 mb-6">or click to browse files</p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
              >
                Choose Image
              </Button>
              <p className="text-sm text-slate-500 mt-4">
                Supported formats: JPG, PNG, WEBP
              </p>
            </div>
          </div>

          <input
            id="scan-file-upload"
            type="file"
            accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
            className="hidden"
            onChange={handleFileSelect}
          />

          {/* File selected + options */}
          {file && previewUrl && (
            <div className="mt-8 space-y-6">
              {/* Preview */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Preview:
                </h3>
                <div className="relative bg-gray-100 border border-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Scan preview"
                    className="w-full max-h-[400px] object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile()
                    }}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white text-slate-600 shadow-sm"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                  <Camera className="h-4 w-4 text-orange-500" />
                  <span>{file.name}</span>
                  <span>({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                </div>
              </div>

              {/* Error inline */}
              {hasError && errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Mode selector */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Cleanup Mode:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setMode("bw")}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all",
                      mode === "bw"
                        ? "border-orange-500 bg-orange-50 shadow-sm"
                        : "border-gray-200 hover:border-orange-300 hover:bg-gray-50"
                    )}
                  >
                    <ScanLine className={cn("h-8 w-8", mode === "bw" ? "text-orange-600" : "text-slate-400")} />
                    <span className={cn("font-bold text-sm", mode === "bw" ? "text-orange-700" : "text-slate-700")}>
                      Black & White
                    </span>
                    <span className="text-xs text-slate-500 text-center">
                      Crisp text on white background. Best for documents.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("color")}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all",
                      mode === "color"
                        ? "border-orange-500 bg-orange-50 shadow-sm"
                        : "border-gray-200 hover:border-orange-300 hover:bg-gray-50"
                    )}
                  >
                    <Palette className={cn("h-8 w-8", mode === "color" ? "text-orange-600" : "text-slate-400")} />
                    <span className={cn("font-bold text-sm", mode === "color" ? "text-orange-700" : "text-slate-700")}>
                      Color Cleanup
                    </span>
                    <span className="text-xs text-slate-500 text-center">
                      Keep colors, remove shadows. Good for receipts and forms.
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                onClick={processFile}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                size="lg"
              >
                <ScanLine className="h-4 w-4 mr-2" />
                Clean Up Scan
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
