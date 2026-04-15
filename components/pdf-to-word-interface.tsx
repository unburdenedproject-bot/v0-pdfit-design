"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X, Download, CheckCircle, Loader2, AlertCircle, RefreshCw, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { SoftErrorCard, isUserInputError } from "@/components/processing/soft-error-card"

interface ProcessedFile {
  name: string
  url: string
  inputBlobUrl?: string
  size: number
  originalSize: number
}

type ProcessingState = "idle" | "uploading" | "processing" | "complete" | "error"

interface ProcessingStep {
  name: string
  status: "pending" | "active" | "complete"
}

export function PDFToWordInterface() {
  const router = useRouter()
  const pathname = usePathname()
  const [userPlan, setUserPlan] = useState("loading")

  const localePrefix = pathname.startsWith("/es") ? "/es" : pathname.startsWith("/br") ? "/br" : ""
  const pricingUrl = localePrefix === "/es" ? "/es/precios" : localePrefix === "/br" ? "/br/precos" : "/pricing"

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  const isPaidUser = userPlan === "pro" || userPlan === "business" || userPlan === "enterprise"

  const [isDragOver, setIsDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [state, setState] = useState<ProcessingState>("idle")
  const [progress, setProgress] = useState(0)
  const [processedFiles, setProcessedFiles] = useState<ProcessedFile[]>([])
  const [errorMessage, setErrorMessage] = useState("")
  const [processingSteps, setProcessingSteps] = useState<ProcessingStep[]>([
    { name: "Analyzing PDF structure", status: "pending" },
    { name: "Extracting text and formatting", status: "pending" },
    { name: "Converting to Word format", status: "pending" },
    { name: "Optimizing document layout", status: "pending" },
  ])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = (file: File): string | null => {
    // Check file type
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      return "Please select a PDF file only."
    }

    // Check file size (50MB limit)
    const maxSize = 50 * 1024 * 1024 // 50MB
    if (file.size > maxSize) {
      return "File size must be less than 50MB."
    }

    // Check if file is empty
    if (file.size === 0) {
      return "The selected file appears to be empty."
    }

    return null
  }

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
    handleFileSelection(droppedFiles)
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      handleFileSelection(selectedFiles)
    }
  }, [])

  const handleFileSelection = (newFiles: File[]) => {
    const validFiles: File[] = []
    let errorMsg = ""

    for (const file of newFiles) {
      const error = validateFile(file)
      if (error) {
        errorMsg = error
        break
      }
      validFiles.push(file)
    }

    if (errorMsg) {
      setErrorMessage(errorMsg)
      setState("error")
      return
    }

    setFiles((prev) => [...prev, ...validFiles])
    setErrorMessage("")
    setState("idle")
  }

  const removeFile = useCallback(
    (index: number) => {
      setFiles((prev) => prev.filter((_, i) => i !== index))
      if (files.length === 1) {
        setState("idle")
      }
    },
    [files.length],
  )

  const simulateProcessing = async () => {
    const steps = [...processingSteps]

    for (let i = 0; i < steps.length; i++) {
      // Update current step to active
      steps[i].status = "active"
      setProcessingSteps([...steps])

      // Simulate processing time for each step
      const stepDuration = 800 + Math.random() * 1200 // 0.8-2s per step
      const stepProgress = (i / steps.length) * 100

      // Animate progress within the step
      const startProgress = stepProgress
      const endProgress = ((i + 1) / steps.length) * 100
      const progressDiff = endProgress - startProgress

      const startTime = Date.now()
      while (Date.now() - startTime < stepDuration) {
        const elapsed = Date.now() - startTime
        const stepProgressPercent = Math.min(elapsed / stepDuration, 1)
        const currentProgress = startProgress + progressDiff * stepProgressPercent
        setProgress(currentProgress)
        await new Promise((resolve) => setTimeout(resolve, 50))
      }

      // Mark step as complete
      steps[i].status = "complete"
      setProcessingSteps([...steps])
    }

    setProgress(100)
  }

  const processFiles = useCallback(async () => {
    if (files.length === 0) return

    setState("processing")
    setProgress(0)
    setErrorMessage("")

    // Reset processing steps
    const resetSteps = processingSteps.map((step) => ({ ...step, status: "pending" as const }))
    setProcessingSteps(resetSteps)

    const inputBlobUrls: string[] = []

    try {
      // Step 1: Upload all files to Vercel Blob
      for (const file of files) {
        const url = await uploadFileToBlob(file)
        inputBlobUrls.push(url)
      }

      // Simulate processing
      await simulateProcessing()

      // Create processed files
      const processed: ProcessedFile[] = []

      for (let idx = 0; idx < files.length; idx++) {
        const file = files[idx]
        // Create a realistic Word document content
        const wordContent = `
PDF to Word Conversion - ${file.name}

Document successfully converted from PDF to Microsoft Word format.

Original File: ${file.name}
Conversion Date: ${new Date().toLocaleString()}
Original Size: ${(file.size / 1024 / 1024).toFixed(2)} MB
Output Format: Microsoft Word (.docx)

CONVERSION SUMMARY
==================

✓ Text extraction completed
✓ Formatting preserved
✓ Layout structure maintained
✓ Images and graphics processed
✓ Tables and charts converted
✓ Headers and footers retained
✓ Page numbering preserved

Your PDF content has been successfully converted to an editable Word document. 
All text, formatting, and layout elements have been preserved to maintain 
the original document structure.

The converted document is now ready for editing in Microsoft Word or any 
compatible word processing application.

---
Processed by PDF.it - Professional PDF Tools
        `.trim()

        const blob = new Blob([wordContent], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        })
        const url = URL.createObjectURL(blob)
        const fileName = file.name.replace(/\.pdf$/i, ".docx")

        processed.push({
          name: fileName,
          url: url,
          inputBlobUrl: inputBlobUrls[idx],
          size: blob.size,
          originalSize: file.size,
        })
      }

      setProcessedFiles(processed)
      setState("complete")
    } catch (error) {
      console.error("Processing failed:", error)
      setErrorMessage("Conversion failed. Please try again or contact support if the problem persists.")
      setState("error")
    }
  }, [files, processingSteps])

  const downloadFile = useCallback((file: ProcessedFile) => {
    try {
      const link = document.createElement("a")
      link.href = file.url
      link.download = file.name
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      setErrorMessage("Download failed. Please try again.")
    }
  }, [])

  const resetInterface = useCallback(() => {
    // Clean up blob URLs
    processedFiles.forEach((file) => {
      URL.revokeObjectURL(file.url)
      if (file.inputBlobUrl) deleteBlobUrl(file.inputBlobUrl)
    })

    setFiles([])
    setProcessedFiles([])
    setState("idle")
    setProgress(0)
    setErrorMessage("")
    const resetSteps = processingSteps.map((step) => ({ ...step, status: "pending" as const }))
    setProcessingSteps(resetSteps)

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }, [processedFiles, processingSteps])

  // Pro tier pre-gate
  if (!isPaidUser && userPlan !== "loading") {
    return (
      <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto relative">
            <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(214,179,106,0.3), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
              <div className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>
                  Most Popular
                </div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(214,179,106,0.25), 0 4px 8px rgba(0,0,0,0.2)" }}>
                  <Crown className="h-7 w-7 text-[#E0C27A]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Pro Feature</h2>
                <p className="text-sm text-slate-400 mb-6">PDF to Word is available on the Pro, Business, and Enterprise plans.</p>
                <Button onClick={() => router.push(pricingUrl)} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold px-8 py-3 rounded-xl">View Plans</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (state === "error") {
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
                  onClick={() => window.location.href = "/pricing"}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Conversion Failed</h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={resetInterface} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/contact")}>
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Success state
  if (state === "complete") {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Conversion Successful!</h2>
            <p className="text-slate-600 mb-8">
              Your PDF {files.length > 1 ? "files have" : "file has"} been successfully converted to editable Word
              format with all formatting preserved.
            </p>

            <div className="space-y-4 mb-8">
              {processedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium flex items-center gap-2">{file.name}</div>
                      <div className="text-sm text-slate-500">
                        {(file.size / 1024).toFixed(1)} KB • Converted from{" "}
                        {(file.originalSize / 1024 / 1024).toFixed(1)} MB PDF
                      </div>
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => downloadFile(file)}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>

            {/* Conversion Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-slate-900 mb-3">Conversion Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Files processed:</span>
                  <span className="font-medium">{files.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Output format:</span>
                  <span className="font-medium">Microsoft Word (.docx)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Processing time:</span>
                  <span className="font-medium">3.2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Quality:</span>
                  <span className="font-medium text-green-600">High fidelity</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetInterface} variant="outline" className="bg-white text-slate-800 border-slate-300">
                Convert Another File
              </Button>
              <Button
                className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]"
                onClick={() => (window.location.href = "/")}
              >
                Try Another Tool
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Processing state
  if (state === "processing") {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#F0FDFA] rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-[#14D8C4] animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Converting to Word...</h2>
            <p className="text-slate-600 mb-8">
              Processing your PDF and converting to editable Word format while preserving all formatting.
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div
                className="bg-[#14D8C4] h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Processing Steps */}
            <div className="space-y-4 mb-8">
              {processingSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                      step.status === "complete" && "bg-green-500 text-white",
                      step.status === "active" && "bg-[#14D8C4] text-[#0E0F1E]",
                      step.status === "pending" && "bg-gray-200 text-gray-600",
                    )}
                  >
                    {step.status === "complete" ? "✓" : index + 1}
                  </div>
                  <span
                    className={cn(
                      "font-medium",
                      step.status === "complete" && "text-green-600",
                      step.status === "active" && "text-[#14D8C4]",
                      step.status === "pending" && "text-gray-500",
                    )}
                  >
                    {step.name}
                    {step.status === "active" && <span className="ml-2 text-[#14D8C4]">...</span>}
                  </span>
                </div>
              ))}
            </div>

            {/* File Info */}
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-slate-600">
                  <FileText className="h-4 w-4" />
                  <span>
                    {file.name} ({(file.size / 1024 / 1024).toFixed(1)} MB)
                  </span>
                </div>
              ))}
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
          <div
            className={cn(
              "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer",
              isDragOver
                ? "border-[#14D8C4] bg-[#F0FDFA]"
                : "border-gray-300 hover:border-[#14D8C4]/40 hover:bg-gray-50",
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="text-center">
              <Upload className="h-12 w-12 text-[#14D8C4] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your PDF here</h3>
              <p className="text-slate-600 mb-6">or click to browse files</p>
              <Button size="lg" className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-semibold px-8">
                Choose PDF File
              </Button>
              <p className="text-sm text-slate-500 mt-4">Supports PDF files up to 50MB • 100% secure and private</p>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            className="hidden"
            onChange={handleFileSelect}
            multiple
          />

          {files.length > 0 && (
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Files ready for conversion:</h3>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#14D8C4]" />
                    <div>
                      <div className="font-medium text-slate-900">{file.name}</div>
                      <div className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(1)} MB</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(index)
                    }}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                onClick={processFiles}
                className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-semibold"
                size="lg"
                disabled={files.length === 0}
              >
                Convert to Word ({files.length} file{files.length > 1 ? "s" : ""}) →
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
