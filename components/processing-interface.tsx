"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X, Download, CheckCircle, Loader2, AlertCircle, Shield, Crown, Pencil, Layers } from "lucide-react"
import { cn } from "@/lib/utils"
import { FileProcessor } from "@/lib/file-processor"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"
import { useJobPolling } from "@/lib/use-job-polling"
import { TierGateCard } from "@/components/processing/tier-gate-card"
import { ProcessingResult } from "@/components/processing/processing-result"
import { FileDropzone } from "@/components/processing/file-dropzone"
import { FileList } from "@/components/processing/file-list"
import { CompressionSelector } from "@/components/processing/compression-selector"

interface ProcessingInterfaceProps {
  acceptedFiles: string
  toolName: string
  outputFormat: string
  processingMessage: string
  successMessage: string
  compressionLevel?: string
  showCompressionSelector?: boolean
  requiresPlan?: "pro" | "business" | "enterprise"
}

interface ProcessedFile {
  name: string
  url: string
  blobUrl?: string
  inputBlobUrls?: string[]
  size: number
  rawBlob?: Blob
}

/**
 * Derive filename from the HTTP response headers, falling back to a
 * Content-Type based extension when no Content-Disposition is present.
 */
function deriveFilename(response: Response, fallbackBase: string, isMerge: boolean): string {
  // 1. Try Content-Disposition
  const cd = response.headers.get("content-disposition") || ""
  const match = cd.match(/filename[^;=\n]*=["']?([^"';\n]+)/)
  if (match?.[1]) return match[1]

  // 2. Fall back to Content-Type
  const ct = (response.headers.get("content-type") || "").toLowerCase()
  if (ct.includes("application/pdf")) return isMerge ? "merged.pdf" : `${fallbackBase}.pdf`
  if (ct.includes("application/zip") || ct.includes("application/x-zip")) return `${fallbackBase}.zip`
  if (ct.includes("text/plain")) return `${fallbackBase}.txt`
  return `${fallbackBase}.bin`
}

/**
 * Upload a processed result Blob to Vercel Blob storage via the client
 * upload helper.  Returns the public blob URL, or null if the upload
 * fails (falls back to local object URL in that case).
 */
async function uploadResultToBlob(blob: Blob, filename: string): Promise<string | null> {
  try {
    const file = new File([blob], filename, { type: blob.type })
    return await uploadFileToBlob(file)
  } catch {
    return null
  }
}

/** Enable async job queue mode for tools that support it */
const ASYNC_ENABLED_TOOLS = new Set([
  "Compress PDF",
  "Merge PDF",
  "Split PDF",
  "Flatten PDF",
  "Rotate PDF",
  "Watermark PDF",
  "Protect PDF",
  "Unlock PDF",
  "Extract Images",
  "PDF to JPG",
  "PDF to PNG",
  "PDF to TXT",
  "PDF to Word",
  "PDF to Excel",
  "PDF to PowerPoint",
  "Word to PDF",
  "Excel to PDF",
  "PowerPoint to PDF",
  "OCR Scanner",
])

export function ProcessingInterface({
  acceptedFiles,
  toolName,
  outputFormat,
  processingMessage,
  successMessage,
  compressionLevel: compressionLevelProp,
  showCompressionSelector,
  requiresPlan,
}: ProcessingInterfaceProps) {
  const router = useRouter()
  const pathname = usePathname()
  const localePrefix = pathname.startsWith("/es") ? "/es" : pathname.startsWith("/br") ? "/br" : ""
  const pricingUrl = localePrefix === "/es" ? "/es/precios" : localePrefix === "/br" ? "/br/precos" : "/pricing"
  const signupRequiredUrl = localePrefix === "/es" ? "/es/registro-requerido" : localePrefix === "/br" ? "/br/cadastro-necessario" : "/signup-required"
  const dashboardUrl = localePrefix === "/es" ? "/es/dashboard" : localePrefix === "/br" ? "/br/painel" : "/dashboard"
  const [isDragOver, setIsDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [processedFiles, setProcessedFiles] = useState<ProcessedFile[]>([])
  const [editedNames, setEditedNames] = useState<Record<number, string>>({})
  const [userPlan, setUserPlan] = useState<string>("free")
  const [processingIndex, setProcessingIndex] = useState(0)
  const [selectedCompressionLevel, setSelectedCompressionLevel] = useState(compressionLevelProp || "recommended")

  const compressionLevel = showCompressionSelector ? selectedCompressionLevel : (compressionLevelProp || "recommended")
  const isPaidUser = userPlan === "pro" || userPlan === "business" || userPlan === "enterprise"
  const isMergeTool = toolName === "Merge PDF"
  const allowMultiple = isPaidUser || isMergeTool
  const freeFileLimit = isMergeTool ? 2 : 1
  const useAsyncMode = ASYNC_ENABLED_TOOLS.has(toolName)

  // Job polling for async mode
  const { startPolling, jobStatus, isPolling } = useJobPolling(
    // onComplete
    (job) => {
      if (job.outputUrl && job.outputFilename) {
        setProcessedFiles([{
          name: job.outputFilename,
          url: `/api/download/${encodeURIComponent(job.outputFilename)}?url=${encodeURIComponent(job.outputUrl)}`,
          blobUrl: job.outputUrl,
          size: 0,
        }])
      }
      setIsComplete(true)
      setIsProcessing(false)
      setProgress(100)
    },
    // onError
    (error) => {
      setHasError(true)
      setErrorMessage(error)
      setIsProcessing(false)
    }
  )

  // Sync job progress to UI when polling
  useEffect(() => {
    if (isPolling && jobStatus) {
      setProgress(jobStatus.progress)
    }
  }, [isPolling, jobStatus])

  useEffect(() => {
    fetch("/api/user-plan")
      .then((res) => res.json())
      .then((data) => setUserPlan(data.plan || "free"))
      .catch(() => setUserPlan("free"))
  }, [])

  // Warn user before leaving during processing (BUG-013)
  useEffect(() => {
    if (!isProcessing) return
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault()
    }
    window.addEventListener("beforeunload", handler)
    return () => window.removeEventListener("beforeunload", handler)
  }, [isProcessing])

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
    if (isPaidUser) {
      setFiles((prev) => [...prev, ...droppedFiles])
    } else {
      // Free users: replace file(s) with new selection (keeps latest up to limit)
      setFiles(droppedFiles.slice(0, freeFileLimit))
    }
  }, [isPaidUser, freeFileLimit])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)
      if (isPaidUser) {
        setFiles((prev) => [...prev, ...selectedFiles])
      } else {
        // Free users: replace file(s) with new selection (keeps latest up to limit)
        setFiles(selectedFiles.slice(0, freeFileLimit))
      }
    }
  }, [isPaidUser, freeFileLimit])

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => {
      const updated = prev.filter((_, i) => i !== index)
      if (updated.length === 0) {
        setHasError(false)
        setIsComplete(false)
        setIsProcessing(false)
        setErrorMessage("")
        setProgress(0)
        setProcessedFiles([])
      }
      return updated
    })
    // Always reset file input so the same file can be re-uploaded
    const input = document.getElementById("file-upload") as HTMLInputElement
    if (input) input.value = ""
  }, [])

  const processFiles = useCallback(async () => {
    // Reject empty (0-byte) files before uploading
    const emptyFile = files.find((f) => f.size === 0)
    if (emptyFile) {
      setHasError(true)
      setErrorMessage("The uploaded file is empty and cannot be processed.")
      return
    }

    // Validate PDF header for tools that accept PDFs
    const pdfFiles = files.filter((f) => f.name.toLowerCase().endsWith(".pdf"))
    for (const f of pdfFiles) {
      const header = await f.slice(0, 5).text()
      if (header !== "%PDF-") {
        setHasError(true)
        setErrorMessage("The uploaded file is not a valid PDF and cannot be processed.")
        return
      }
    }

    setIsProcessing(true)
    setHasError(false)
    setProgress(0)

    try {
      const processed: ProcessedFile[] = []

      // Track input blob URLs for cleanup
      const inputBlobUrls: string[] = []

      // ---- ASYNC MODE: Upload file, create job, poll for result ----
      if (useAsyncMode && files.length === 1) {
        setProgress(10)
        const file = files[0]
        const inputUrl = await uploadFileToBlob(file)
        inputBlobUrls.push(inputUrl)
        setProgress(30)

        // Determine the API route name from toolName
        const toolSlug = toolName.toLowerCase().replace(/\s+/g, "-")
        const apiRoute = `/api/${toolSlug}`

        // Create job via the tool's API with async: true
        const response = await fetch(apiRoute, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blobUrl: inputUrl,
            async: true,
            compression_level: compressionLevel,
            fileName: file.name,
          }),
        })

        if (!response.ok) {
          let message = "Processing failed"
          try {
            const errorData = await response.json()
            if (errorData.error) message = errorData.error
            if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
            if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
            if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
          } catch { }
          throw new Error(message)
        }

        const data = await response.json()
        if (data.jobId) {
          // Start polling — the hook will update progress and call onComplete/onError
          startPolling(data.jobId)
          return // Exit processFiles — polling takes over
        }
        // If no jobId returned, fall through to sync processing
      }

      // Handle merge PDF case (process all files together via real API)
      if (toolName === "Merge PDF") {
        setProgress(10)

        // Step 1: Upload all files to Vercel Blob
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const url = await uploadFileToBlob(files[i])
          inputBlobUrls.push(url)
          setProgress(10 + ((i + 1) / files.length) * 30)
        }

        // Step 2: Call merge API with JSON blob URLs
        const response = await fetch("/api/merge-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blobUrls: inputBlobUrls }),
        })

        if (!response.ok) {
          let message = `Merge failed (HTTP ${response.status})`
          try {
            const errorData = await response.json()
            if (errorData.error) message = errorData.error
            if (errorData.details) message += `: ${errorData.details}`
            if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
            if (message.includes("signup_required")) {
              router.push(signupRequiredUrl)
              return
            }
            if (message.includes("daily_limit_reached")) {
              message = "daily_limit_reached_anon"
            }
          } catch {
            // JSON parsing failed, keep generic message
          }
          throw new Error(message)
        }

        setProgress(80)

        // Step 3: Upload result to Blob for download
        const fileName = deriveFilename(response, "merged", true)
        const blob = await response.blob()
        const localUrl = URL.createObjectURL(blob)

        setProgress(90)
        const resultBlobUrl = await uploadResultToBlob(blob, fileName)

        processed.push({
          name: fileName,
          url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
          blobUrl: resultBlobUrl ?? undefined,
          inputBlobUrls,
          size: blob.size,
        })
        setProgress(100)
      } else if (toolName === "PDF to JPG") {
        // Call the real server-side API for PDF to JPG
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          // Step 1: Upload to Blob
          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          // Step 2: Call API with JSON
          const response = await fetch("/api/pdf-to-jpg", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl, originalName: file.name }),
          })

          if (!response.ok) {
            let message = `Conversion failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) {
                router.push(signupRequiredUrl)
                return
              }
              if (message.includes("daily_limit_reached")) {
                message = "daily_limit_reached_anon"
              }
            } catch {
              // JSON parsing failed, keep generic message
            }
            throw new Error(message)
          }

          // Step 3: Upload result to Blob
          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, `${baseName}-images`, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)

          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
            rawBlob: blob,
          })
        }
        setProgress(100)
      } else if (toolName === "Word to PDF" || toolName === "Excel to PDF" || toolName === "PowerPoint to PDF") {
        // Call the real server-side API for office-to-pdf (iLoveAPI officepdf)
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          // Step 1: Upload to Blob
          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          // Step 2: Call API with JSON
          const response = await fetch("/api/office-to-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl }),
          })

          if (!response.ok) {
            let message = `Conversion failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          // Step 3: Upload result to Blob
          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, baseName, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)

          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
          })
        }
        setProgress(100)
      } else if (toolName === "Compress PDF") {
        // Call the real server-side API for compress-pdf (iLoveAPI compress)
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          // Step 1: Upload to Blob
          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          // Step 2: Call API with JSON
          const response = await fetch("/api/compress-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl, compression_level: compressionLevel || "recommended" }),
          })

          if (!response.ok) {
            let message = `Compression failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          // Step 3: Upload result to Blob
          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, `${baseName}-compressed`, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)

          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
          })
        }
        setProgress(100)
      } else if (toolName === "Watermark PDF") {
        // Call the real server-side API for watermark-pdf (iLoveAPI watermark)
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          // Step 1: Upload to Blob
          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          // Step 2: Call API with JSON
          const response = await fetch("/api/watermark-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              blobUrl: inputUrl,
              text: "CONFIDENTIAL",
              transparency: 50,
            }),
          })

          if (!response.ok) {
            let message = `Watermark failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          // Step 3: Upload result to Blob
          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, `${baseName}-watermarked`, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)

          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
          })
        }
        setProgress(100)
      } else if (toolName === "PDF to PNG") {
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          const response = await fetch("/api/pdf-to-png", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl, originalName: file.name }),
          })

          if (!response.ok) {
            let message = `Conversion failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, `${baseName}-images`, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)
          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
            rawBlob: blob,
          })
        }
        setProgress(100)
      } else if (toolName === "PDF to Word" || toolName === "PDF to Excel" || toolName === "PDF to PowerPoint") {
        const apiMap: Record<string, { endpoint: string; ext: string; suffix: string }> = {
          "PDF to Word": { endpoint: "/api/pdf-to-word", ext: "docx", suffix: "" },
          "PDF to Excel": { endpoint: "/api/pdf-to-excel", ext: "xlsx", suffix: "" },
          "PDF to PowerPoint": { endpoint: "/api/pdf-to-powerpoint", ext: "pptx", suffix: "" },
        }
        const { endpoint, ext, suffix } = apiMap[toolName]!

        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl, originalName: file.name }),
          })

          if (!response.ok) {
            let message = `Conversion failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, baseName, false) || `${baseName}${suffix}.${ext}`
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)
          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
          })
        }
        setProgress(100)
      } else if (toolName === "Upload Ready PDF") {
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          const response = await fetch("/api/upload-ready-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl, originalName: file.name }),
          })

          if (!response.ok) {
            let message = `Optimization failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, `${baseName}-upload-ready`, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)
          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
          })
        }
        setProgress(100)
      } else if (toolName === "Extract Images from PDF") {
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          const response = await fetch("/api/extract-images-from-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl, originalName: file.name }),
          })

          if (!response.ok) {
            let message = `Extraction failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, `${baseName}-extracted-images`, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)
          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
            rawBlob: blob,
          })
        }
        setProgress(100)
      } else if (toolName === "Flatten PDF") {
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          const response = await fetch("/api/flatten-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl, originalName: file.name }),
          })

          if (!response.ok) {
            let message = `Flattening failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) { router.push(signupRequiredUrl); return }
              if (message.includes("daily_limit_reached")) { message = "daily_limit_reached_anon" }
            } catch { }
            throw new Error(message)
          }

          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = deriveFilename(response, `${baseName}-flattened`, false)
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)
          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
          })
        }
        setProgress(100)
      } else if (toolName === "PDF to TXT") {
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]
          setProgress(((i / files.length) * 60) + 10)

          const inputUrl = await uploadFileToBlob(file)
          inputBlobUrls.push(inputUrl)

          const response = await fetch("/api/pdf-to-txt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blobUrl: inputUrl }),
          })

          if (!response.ok) {
            let message = `Conversion failed (HTTP ${response.status})`
            try {
              const errorData = await response.json()
              if (errorData.error) message = errorData.error
              if (message.includes("upgrade_required")) { router.push(pricingUrl); return }
              if (message.includes("signup_required")) {
                router.push(signupRequiredUrl)
                return
              }
              if (message.includes("daily_limit_reached")) {
                message = "daily_limit_reached_anon"
              }
            } catch { }
            throw new Error(message)
          }

          const baseName = file.name.replace(/\.[^/.]+$/, "")
          const fileName = `${baseName}.txt`
          const blob = await response.blob()
          const localUrl = URL.createObjectURL(blob)
          const resultBlobUrl = await uploadResultToBlob(blob, fileName)

          processed.push({
            name: fileName,
            url: resultBlobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(resultBlobUrl)}` : localUrl,
            blobUrl: resultBlobUrl ?? undefined,
            inputBlobUrls: [inputUrl],
            size: blob.size,
          })
        }
        setProgress(100)
      } else {
        // Process files individually with client-side FileProcessor
        for (let i = 0; i < files.length; i++) {
          setProcessingIndex(i)
          const file = files[i]

          setProgress((i / files.length) * 90)

          let processedBlob: Blob

          // Route to appropriate processor based on tool name
          switch (toolName) {
            case "Word to PDF":
            case "Excel to PDF":
            case "PowerPoint to PDF":
            case "Compress PDF":
              // Handled by the server-side branch above; should not reach here
              throw new Error(`${toolName} should use the server API path`)
              break
            case "Split PDF":
              // Handled by dedicated SplitPdfInterface component; should not reach here
              throw new Error("Split PDF should use the dedicated split interface")
              break
            case "Rotate PDF":
              // Handled by dedicated RotatePdfInterface component; should not reach here
              throw new Error("Rotate PDF should use the dedicated rotate interface")
              break
            case "Protect PDF":
              // Handled by dedicated ProtectPdfInterface component; should not reach here
              throw new Error("Protect PDF should use the dedicated protect interface")
              break
            case "Unlock PDF":
              // Handled by dedicated UnlockPdfInterface component; should not reach here
              throw new Error("Unlock PDF should use the dedicated unlock interface")
              break
            case "OCR Scanner":
              // Handled by dedicated OcrPdfInterface component; should not reach here
              throw new Error("OCR Scanner should use the dedicated OCR interface")
              break
            default:
              processedBlob = await FileProcessor.processGenericTool(file, toolName)
          }

          const extension = FileProcessor.getFileExtension(toolName)
          const fileName = file.name.replace(/\.[^/.]+$/, "") + "." + extension
          const localUrl = URL.createObjectURL(processedBlob)

          const blobUrl = await uploadResultToBlob(processedBlob, fileName)

          processed.push({
            name: fileName,
            url: blobUrl ? `/api/download/${encodeURIComponent(fileName)}?url=${encodeURIComponent(blobUrl)}` : localUrl,
            blobUrl: blobUrl ?? undefined,
            size: processedBlob.size,
          })
        }
        setProgress(100)
      }

      setProcessedFiles(processed)
      setIsProcessing(false)
      setIsComplete(true)
    } catch (error) {
      setHasError(true)
      let message = error instanceof Error ? error.message : "An unknown error occurred"
      if (message.includes("413") || message.toLowerCase().includes("too large") || message.toLowerCase().includes("payload")) {
        message = "Your file exceeds the size limit. Please use a smaller file."
      } else if (message.toLowerCase().includes("unsupported") || message.toLowerCase().includes("format") || message.includes("415")) {
        message = "This file format is not supported. Please upload a PDF."
      } else if (message.toLowerCase().includes("failed to fetch") || message.toLowerCase().includes("network") || message.toLowerCase().includes("econnrefused")) {
        message = "Connection failed. Please check your internet and try again."
      }
      setErrorMessage(message)
      setIsProcessing(false)
    }
  }, [files, toolName])

  const downloadFile = useCallback(async (fileUrl: string, fileName: string) => {
    try {
      const response = await fetch(fileUrl)
      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = objectUrl
      link.download = fileName
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(objectUrl)
    } catch {
      // fallback to direct download
      const link = document.createElement("a")
      link.href = fileUrl
      link.download = fileName
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }, [])

  const downloadJpgZip = useCallback(async (rawBlob: Blob, editedName: string) => {
    const JSZip = (await import("jszip")).default
    const baseName = editedName.replace(/\.zip$/i, "")
    const originalZip = await JSZip.loadAsync(rawBlob)
    const newZip = new JSZip()
    const entries = Object.keys(originalZip.files).sort()
    let pageNum = 1
    for (const entryName of entries) {
      const entry = originalZip.files[entryName]
      if (!entry.dir) {
        const ext = entryName.split(".").pop() || "jpg"
        const newName = `${baseName}-page-${String(pageNum).padStart(4, "0")}.${ext}`
        const content = await entry.async("nodebuffer")
        newZip.file(newName, content)
        pageNum++
      }
    }
    const data = await newZip.generateAsync({ type: "blob", compression: "DEFLATE" })
    const objectUrl = URL.createObjectURL(data)
    const link = document.createElement("a")
    link.href = objectUrl
    link.download = `${baseName}.zip`
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(objectUrl)
  }, [])

  const resetInterface = useCallback(() => {
    // Clean up local object URLs to prevent memory leaks
    processedFiles.forEach((file) => {
      if (file.url.startsWith("blob:")) {
        URL.revokeObjectURL(file.url)
      }
      // Clean up Vercel Blob URLs (input + output)
      if (file.blobUrl) deleteBlobUrl(file.blobUrl)
      if (file.inputBlobUrls) {
        file.inputBlobUrls.forEach((u) => deleteBlobUrl(u))
      }
    })

    setFiles([])
    setProcessedFiles([])
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setProgress(0)
    // Scroll to upload area on mobile
    setTimeout(() => {
      document.getElementById("file-upload-zone")?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 100)
  }, [processedFiles])

  // Plan pre-gate
  if (requiresPlan && userPlan !== "loading") {
    const meetsRequirement =
      requiresPlan === "pro" ? isPaidUser :
      requiresPlan === "business" ? (userPlan === "business" || userPlan === "enterprise") :
      requiresPlan === "enterprise" ? userPlan === "enterprise" : false

    if (!meetsRequirement) {
      return <TierGateCard requiredPlan={requiresPlan} toolName={toolName} pricingUrl={pricingUrl} />
    }
  }

  // Error state
  if (hasError) {
    const isLimitError = (errorMessage || "").toLowerCase().includes("daily limit reached") || (errorMessage || "").includes("daily_limit_reached_anon")
    const isUpgradeError = (errorMessage || "").includes("upgrade_required")

    if (isUpgradeError) {
      return (
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div
                className="rounded-2xl p-[1px]"
                style={{
                  background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(214,179,106,0.3), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                }}
              >
                <div
                  className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden"
                  style={{
                    background: `
                      radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%),
                      radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                      rgba(255, 255, 255, 0.07)
                    `,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 4px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>
                    Most Popular
                  </div>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(214,179,106,0.25), 0 4px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Crown className="h-10 w-10 text-[#E0C27A]" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">This is a Pro Feature</h2>
                  <p className="text-xl sm:text-2xl font-bold text-[#14D8C4] mb-4">Upgrade to Pro</p>
                  <p className="text-base sm:text-lg text-slate-400 mb-8">
                    Upgrade to unlock this tool and get unlimited conversions, files up to 200MB, batch processing, and more. Need files up to 1GB? Try Business.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      onClick={() => {
                        const toolSlug = encodeURIComponent(toolName.toLowerCase().trim().replace(/\s+/g, "-"))
                        router.push(`${pricingUrl}?source=upgrade&tool=${toolSlug}`)
                      }}
                      className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold rounded-xl px-6 py-3"
                    >
                      Upgrade to Pro
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetInterface}
                      className="border border-[rgba(255,255,255,0.15)] text-slate-300 hover:text-white hover:border-[rgba(255,255,255,0.3)] rounded-xl px-6 py-3"
                    >
                      Go Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }

    if (isLimitError) {
      return (
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div
                className="rounded-2xl p-[1px]"
                style={{
                  background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(214,179,106,0.3), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                }}
              >
                <div
                  className="rounded-[15px] p-8 pt-10 text-center relative overflow-hidden"
                  style={{
                    background: `
                      radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%),
                      radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                      rgba(255, 255, 255, 0.07)
                    `,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 4px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>
                    Most Popular
                  </div>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(214,179,106,0.25), 0 4px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Crown className="h-10 w-10 text-[#E0C27A]" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">{"You're out of free conversions"}</h2>
                  <p className="text-xl sm:text-2xl font-bold text-[#14D8C4] mb-4">Upgrade to Pro</p>
                  <p className="text-base sm:text-lg text-slate-400 mb-8">
                    {"Free includes 10 conversions per day. Upgrade for unlimited conversions."}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      onClick={() => {
                        const toolSlug = encodeURIComponent(toolName.toLowerCase().trim().replace(/\s+/g, "-"))
                        router.push(`${pricingUrl}?source=limit&tool=${toolSlug}`)
                      }}
                      className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold rounded-xl px-6 py-3"
                    >
                      Upgrade to Pro
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => router.push(dashboardUrl)}
                      className="border border-[#14D8C4]/30 text-[#14D8C4] hover:text-white hover:bg-[#14D8C4]/10 hover:border-[#14D8C4]/50 rounded-xl px-6 py-3"
                    >
                      Back to Dashboard
                    </Button>
                  </div>
                </div>
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
              {errorMessage.toLowerCase().includes("invalid file type") || errorMessage.toLowerCase().includes("not supported") || errorMessage.toLowerCase().includes("file format")
                ? "Unsupported File Type"
                : errorMessage.toLowerCase().includes("size limit") || errorMessage.toLowerCase().includes("too large")
                ? "File Too Large"
                : errorMessage.toLowerCase().includes("appears to be empty") || errorMessage.toLowerCase().includes("empty and cannot") || errorMessage.toLowerCase().includes("is empty and contains")
                ? "Empty File"
                : "Processing Failed"}
            </h2>
            <p className="text-slate-600 mb-8">{errorMessage}</p>
            <Button onClick={resetInterface} className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]">
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Success state
  if (isComplete) {
    return (
      <ProcessingResult
        files={files}
        processedFiles={processedFiles}
        editedNames={editedNames}
        onEditName={(index, name) => setEditedNames((prev) => ({ ...prev, [index]: name }))}
        onDownload={downloadFile}
        onDownloadJpgZip={downloadJpgZip}
        onReset={resetInterface}
        toolName={toolName}
        outputFormat={outputFormat}
      />
    )
  }

  // Processing state
  if (isProcessing) {
    return (
      <section className="py-16 min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#F0FDFA] rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="h-10 w-10 text-[#14D8C4] animate-spin" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{processingMessage}</h2>
            {files.length > 1 ? (
              <p className="text-slate-600 mb-8">Processing file {processingIndex + 1} of {files.length}...</p>
            ) : (
              <p className="text-slate-600 mb-8">This will only take a few seconds...</p>
            )}

            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div
                className="bg-[#14D8C4] h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className={cn(
                  "flex items-center justify-center gap-3",
                  index < processingIndex ? "text-green-600" : index === processingIndex ? "text-[#14D8C4] font-medium" : "text-slate-400"
                )}>
                  {index < processingIndex ? <CheckCircle className="h-4 w-4" /> : index === processingIndex ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />}
                  <span>{file.name}</span>
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
          <FileDropzone
            isDragOver={isDragOver}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onFileSelect={handleFileSelect}
            acceptedFiles={acceptedFiles}
            allowMultiple={allowMultiple}
            hasFiles={files.length > 0}
            isPaidUser={isPaidUser}
            pricingUrl={pricingUrl}
          />

          <FileList
            files={files}
            onRemove={removeFile}
            allowMultiple={allowMultiple}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            toolName={toolName}
            onProcess={processFiles}
            compressionSelector={showCompressionSelector ? (
              <CompressionSelector
                selected={selectedCompressionLevel}
                onChange={setSelectedCompressionLevel}
              />
            ) : undefined}
          />
        </div>
      </div>
    </section>
  )
}
