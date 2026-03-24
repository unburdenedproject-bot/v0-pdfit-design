"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Upload,
  FileText,
  X,
  Download,
  CheckCircle,
  Loader2,
  AlertCircle,
  Shield,
  Crown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { PDFDocument } from "pdf-lib"

interface ProcessedFile {
  name: string
  url: string
  inputBlobUrl?: string
  size: number
}

export function SplitPdfInterface() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [ranges, setRanges] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [processedFile, setProcessedFile] = useState<ProcessedFile | null>(null)

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
    if (!file || !ranges.trim()) return

    setIsProcessing(true)
    setHasError(false)
    setProgress(5)

    try {
      // Step 0: Check page count — single-page PDFs cannot be split
      const arrayBuffer = await file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true })
      const pageCount = pdfDoc.getPageCount()
      if (pageCount <= 1) {
        setHasError(true)
        setErrorMessage("This PDF has only 1 page and cannot be split.")
        setIsProcessing(false)
        return
      }

      setProgress(10)

      // Step 1: Upload to Vercel Blob
      const inputBlobUrl = await uploadFileToBlob(file)

      setProgress(30)

      // Step 2: Call API with JSON
      const response = await fetch("/api/split-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blobUrl: inputBlobUrl, ranges: ranges.trim() }),
      })

      setProgress(70)

      if (!response.ok) {
        let message = `Split failed (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          if (errorData.error) message = errorData.error
          if (message.includes("daily_limit_reached")) {
            message = "daily_limit_reached_anon"
          }
        } catch {
          // JSON parsing failed, keep generic message
        }
        throw new Error(message)
      }

      const blob = await response.blob()
      const baseName = file.name.replace(/\.[^/.]+$/, "")
      const url = URL.createObjectURL(blob)

      const contentType = blob.type || ""
      const isPdf = contentType.includes("pdf")
      const outputName = isPdf ? `${baseName}-split.pdf` : `${baseName}-split.zip`

      setProcessedFile({
        name: outputName,
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
  }, [file, ranges])

  const downloadFile = useCallback(
    (fileUrl: string, fileName: string) => {
      const link = document.createElement("a")
      link.href = fileUrl
      link.download = fileName
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    []
  )

  const resetInterface = useCallback(() => {
    if (processedFile) {
      URL.revokeObjectURL(processedFile.url)
      if (processedFile.inputBlobUrl) deleteBlobUrl(processedFile.inputBlobUrl)
    }
    setFile(null)
    setRanges("")
    setProcessedFile(null)
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setProgress(0)
  }, [processedFile])

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
                  onClick={() => window.location.href = "/pricing"}
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
              Split Failed
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Split Complete!
              </h2>
              <p className="text-slate-600 text-lg">
                Your PDF has been split into separate documents and packaged as
                a ZIP file.
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
                        {(processedFile.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                      <span className="text-green-600 font-medium">
                        Split successful
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
                  Download ZIP
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetInterface}
                variant="outline"
                className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50 px-8 py-3"
              >
                Split Another PDF
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

  // Processing state
  if (isProcessing) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-orange-600 animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Splitting your PDF...
            </h2>
            <p className="text-slate-600 mb-8">
              This will only take a few seconds...
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {file && (
              <div className="flex items-center justify-center gap-3 text-slate-600">
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
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300 hover:border-orange-400 hover:bg-gray-50"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("split-file-upload")?.click()}
          >
            <div className="text-center">
              <Upload className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Drop your PDF here
              </h3>
              <p className="text-slate-600 mb-6">or click to browse files</p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
              >
                Choose File
              </Button>
              <p className="text-sm text-slate-500 mt-4">
                Supported format: .pdf
              </p>
            </div>
          </div>

          <input
            id="split-file-upload"
            type="file"
            accept=".pdf"
            className="hidden"
            onClick={(e) => { (e.target as HTMLInputElement).value = "" }}
            onChange={handleFileSelect}
          />

          {/* File + ranges form */}
          {file && (
            <div className="mt-8 space-y-6">
              {/* Selected file */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Selected file:
                </h3>
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-slate-900">
                        {file.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Ranges input */}
              <div>
                <label
                  htmlFor="ranges-input"
                  className="block text-lg font-bold text-slate-900 mb-2"
                >
                  Page Ranges
                </label>
                <p className="text-sm text-slate-500 mb-3">
                  Enter comma-separated page ranges. Each range produces a
                  separate PDF in the downloaded ZIP.
                </p>
                <Input
                  id="ranges-input"
                  type="text"
                  placeholder="e.g. 1-3,4-6,7-10"
                  value={ranges}
                  onChange={(e) => setRanges(e.target.value)}
                  className="text-base"
                />
                <p className="text-xs text-slate-400 mt-2">
                  Examples: &quot;1-3,4-6&quot; splits into two PDFs (pages 1-3
                  and 4-6). &quot;1,3,5&quot; extracts individual pages.
                </p>
              </div>

              {/* Submit */}
              <Button
                onClick={processFile}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                size="lg"
                disabled={!file || !ranges.trim()}
              >
                Split PDF
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
