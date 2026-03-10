"use client"

import type React from "react"
import { useState, useCallback, useRef } from "react"
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
  Image as ImageIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"

interface ImageToPdfInterfaceProps {
  acceptedTypes: string[]
  acceptedExtensions: string
  formatLabel: string
}

interface SelectedImage {
  file: File
  previewUrl: string
}

interface ProcessedFile {
  name: string
  url: string
  inputBlobUrl?: string
  size: number
}

export function ImageToPdfInterface({
  acceptedTypes,
  acceptedExtensions,
  formatLabel,
}: ImageToPdfInterfaceProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [images, setImages] = useState<SelectedImage[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [processedFiles, setProcessedFiles] = useState<ProcessedFile[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFiles = useCallback(
    (files: FileList | File[]) => {
      const newImages: SelectedImage[] = []
      for (const f of Array.from(files)) {
        if (!acceptedTypes.includes(f.type)) {
          setHasError(true)
          setErrorMessage(
            `Please upload ${formatLabel} images only. "${f.name}" is not a valid ${formatLabel} file.`
          )
          return
        }
        newImages.push({ file: f, previewUrl: URL.createObjectURL(f) })
      }
      setImages((prev) => [...prev, ...newImages])
      setHasError(false)
      setErrorMessage("")
    },
    [acceptedTypes, formatLabel]
  )

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
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files)
      }
    },
    [handleFiles]
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFiles(e.target.files)
      }
      e.target.value = ""
    },
    [handleFiles]
  )

  const removeImage = useCallback((index: number) => {
    setImages((prev) => {
      const updated = [...prev]
      URL.revokeObjectURL(updated[index].previewUrl)
      updated.splice(index, 1)
      return updated
    })
  }, [])

  const processImages = useCallback(async () => {
    if (images.length === 0) return

    setIsProcessing(true)
    setHasError(false)
    setProgress(5)

    const results: ProcessedFile[] = []
    const uploadedBlobUrls: string[] = []

    try {
      const totalSteps = images.length * 2 // upload + convert per image
      let completedSteps = 0

      for (const img of images) {
        // Step 1: Upload to Vercel Blob
        const blobUrl = await uploadFileToBlob(img.file)
        uploadedBlobUrls.push(blobUrl)
        completedSteps++
        setProgress(Math.round((completedSteps / totalSteps) * 90) + 5)

        // Step 2: Call conversion API
        const response = await fetch("/api/image-to-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blobUrl }),
        })

        if (!response.ok) {
          const rawBody = await response.text()
          let message = `Conversion failed (HTTP ${response.status})`

          try {
            const errorData = JSON.parse(rawBody)
            if (errorData.error) message = errorData.error
            if (
              message.includes("upgrade_required") ||
              message.includes("signup_required")
            ) {
              router.push(`/pricing?source=${formatLabel.toLowerCase()}-to-pdf`)
              return
            }
          } catch {
            if (rawBody) message = rawBody
          }

          throw new Error(message)
        }

        // Derive filename
        const baseName = img.file.name.replace(/\.[^.]+$/, "")
        let downloadName = `${baseName}.pdf`
        const cd = response.headers.get("content-disposition") || ""
        const cdMatch = cd.match(/filename[^;=\n]*=["']?([^"';\n]+)/)
        if (cdMatch?.[1]) downloadName = cdMatch[1]

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)

        results.push({
          name: downloadName,
          url,
          inputBlobUrl: blobUrl,
          size: blob.size,
        })

        completedSteps++
        setProgress(Math.round((completedSteps / totalSteps) * 90) + 5)
      }

      setProcessedFiles(results)
      setProgress(100)
      setIsProcessing(false)
      setIsComplete(true)
    } catch (error) {
      // Clean up uploaded blobs on failure
      for (const url of uploadedBlobUrls) {
        deleteBlobUrl(url)
      }
      setHasError(true)
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      )
      setIsProcessing(false)
    }
  }, [images, router, formatLabel])

  const downloadFile = useCallback((fileUrl: string, fileName: string) => {
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = fileName
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  const downloadAllAsZip = useCallback(async () => {
    if (processedFiles.length === 0) return

    const JSZip = (await import("jszip")).default
    const zip = new JSZip()

    for (const pf of processedFiles) {
      const resp = await fetch(pf.url)
      const blob = await resp.blob()
      zip.file(pf.name, blob)
    }

    const zipBlob = await zip.generateAsync({ type: "blob" })
    const url = URL.createObjectURL(zipBlob)
    downloadFile(url, `${formatLabel.toLowerCase()}-to-pdf-converted.zip`)
    URL.revokeObjectURL(url)
  }, [processedFiles, downloadFile, formatLabel])

  const resetInterface = useCallback(() => {
    for (const img of images) {
      URL.revokeObjectURL(img.previewUrl)
    }
    for (const pf of processedFiles) {
      URL.revokeObjectURL(pf.url)
      if (pf.inputBlobUrl) deleteBlobUrl(pf.inputBlobUrl)
    }
    setImages([])
    setProcessedFiles([])
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setProgress(0)
  }, [images, processedFiles])

  // ── Error state (no files selected) ──
  if (hasError && images.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Conversion Failed
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
  if (isComplete && processedFiles.length > 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {processedFiles.length === 1
                  ? "Image Converted to PDF!"
                  : `${processedFiles.length} Images Converted to PDF!`}
              </h2>
              <p className="text-slate-600 text-lg">
                Your {formatLabel} {processedFiles.length === 1 ? "image has" : "images have"} been converted to {processedFiles.length === 1 ? "a PDF" : "PDFs"} successfully.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {processedFiles.map((pf, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg">
                          {pf.name}
                        </div>
                        <div className="text-sm text-slate-500 mt-1">
                          {(pf.size / 1024).toFixed(0)} KB
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3"
                      onClick={() => downloadFile(pf.url, pf.name)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {processedFiles.length > 1 && (
              <div className="text-center mb-8">
                <Button
                  onClick={downloadAllAsZip}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3"
                  size="lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download All as ZIP
                </Button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetInterface}
                variant="outline"
                className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50 px-8 py-3"
              >
                Convert More Images
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
              Converting {images.length === 1 ? "Image" : "Images"} to PDF...
            </h2>
            <p className="text-slate-600 mb-8">
              Uploading and converting your {formatLabel} {images.length === 1 ? "image" : "images"} to PDF format.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <ImageIcon className="h-4 w-4" />
              <span>
                {images.length} {images.length === 1 ? "image" : "images"}
              </span>
            </div>
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
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="text-center">
              <ImageIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Drop your {formatLabel} {images.length > 0 ? "images" : "image(s)"} here
              </h3>
              <p className="text-slate-600 mb-6">or click to browse files</p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
              >
                Choose {formatLabel} Images
              </Button>
              <p className="text-sm text-slate-500 mt-4">
                Accepted format: {formatLabel}. You can select multiple files.
              </p>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedExtensions}
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />

          {/* Image previews */}
          {images.length > 0 && (
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Selected Images ({images.length}):
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="relative bg-gray-100 border border-gray-200 rounded-xl overflow-hidden group"
                    >
                      <img
                        src={img.previewUrl}
                        alt={img.file.name}
                        className="w-full h-32 object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeImage(i)
                        }}
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white text-slate-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <div className="px-2 py-1.5 text-xs text-slate-600 truncate bg-white">
                        {img.file.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error inline */}
              {hasError && errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Add more button */}
              <Button
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation()
                  fileInputRef.current?.click()
                }}
                className="w-full border-dashed border-2 border-gray-300 hover:border-orange-400 text-slate-600 hover:text-orange-600"
              >
                <Upload className="h-4 w-4 mr-2" />
                Add More Images
              </Button>

              {/* Submit */}
              <Button
                onClick={processImages}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                size="lg"
              >
                <FileText className="h-4 w-4 mr-2" />
                Convert {images.length === 1 ? "Image" : `${images.length} Images`} to PDF
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
