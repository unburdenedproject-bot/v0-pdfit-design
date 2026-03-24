"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Zap,
  Shield,
  Download,
  Upload,
  X,
  CheckCircle,
  Loader2,
  AlertCircle,
  Crown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { uploadFileToBlob, deleteBlobUrl } from "@/lib/upload-to-blob"


const ACCEPTED_EXTENSIONS = ".doc,.docx,.ppt,.pptx,.xls,.xlsx,.odt,.odp,.ods"

interface ProcessedFile {
  name: string
  url: string
  inputBlobUrl?: string
  size: number
}

export default function OfficeToPDFPage() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [processedFiles, setProcessedFiles] = useState<ProcessedFile[]>([])
  const router = useRouter()

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
    setFiles((prev) => [...prev, ...droppedFiles])
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...selectedFiles])
    }
  }, [])

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const processFiles = useCallback(async () => {
    setIsProcessing(true)
    setHasError(false)
    setProgress(0)

    const inputBlobUrls: string[] = []

    try {
      const processed: ProcessedFile[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setProgress(((i / files.length) * 30) + 5)

        // Step 1: Upload to Vercel Blob (browser -> Blob, no server body)
        const inputUrl = await uploadFileToBlob(file)
        inputBlobUrls.push(inputUrl)

        setProgress(((i / files.length) * 40) + 35)

        // Step 2: Call API with JSON { blobUrl }
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
          } catch {
            // JSON parsing failed, keep generic message
          }
          throw new Error(message)
        }

        const blob = await response.blob()
        const baseName = file.name.replace(/\.[^/.]+$/, "")
        const url = URL.createObjectURL(blob)

        processed.push({
          name: `${baseName}.pdf`,
          url,
          inputBlobUrl: inputUrl,
          size: blob.size,
        })
      }

      setProgress(100)
      setProcessedFiles(processed)
      setIsProcessing(false)
      setIsComplete(true)
    } catch (error) {
      console.error("Processing failed:", error)
      setHasError(true)
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
      setIsProcessing(false)
    } finally {
      // Cleanup input blobs -- they are no longer needed after processing
      inputBlobUrls.forEach((u) => deleteBlobUrl(u))
    }
  }, [files])

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
    processedFiles.forEach((file) => {
      URL.revokeObjectURL(file.url)
      if (file.inputBlobUrl) deleteBlobUrl(file.inputBlobUrl)
    })
    setFiles([])
    setProcessedFiles([])
    setIsProcessing(false)
    setIsComplete(false)
    setHasError(false)
    setErrorMessage("")
    setProgress(0)
  }, [processedFiles])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4 text-white">Office to PDF Converter</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert Word, Excel, PowerPoint and other office files to PDF. Fast, accurate, and secure.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2 text-white">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Formatting Preserved</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Files Deleted After Session</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>No Login Required</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-400">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">DOC / DOCX</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">XLS / XLSX</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">PPT / PPTX</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">ODT / ODP / ODS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">

              {/* Error state */}
              {hasError && (
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="h-10 w-10 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Processing Failed</h2>
                  <p className="text-slate-600 mb-8">{errorMessage}</p>
                  <Button onClick={resetInterface} className="bg-orange-500 hover:bg-orange-600 text-white">
                    Try Again
                  </Button>
                </div>
              )}

              {/* Success state */}
              {isComplete && !hasError && (
                <div>
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Conversion Complete!</h2>
                    <p className="text-slate-600 text-lg">
                      Your {files.length > 1 ? "files have" : "file has"} been successfully converted to PDF.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {processedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-lg">{file.name}</div>
                            <div className="text-sm text-slate-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                              <span className="mx-2">-</span>
                              <span className="text-green-600 font-medium">Ready for download</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3"
                          onClick={() => downloadFile(file.url, file.name)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={resetInterface}
                      variant="outline"
                      className="bg-background text-slate-800 border-slate-300 hover:bg-slate-50 px-8 py-3"
                    >
                      Convert More Files
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
                          Your files are automatically deleted from our servers after 1 hour for your privacy and security.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Processing state */}
              {isProcessing && (
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Loader2 className="h-10 w-10 text-orange-600 animate-spin" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Converting to PDF...</h2>
                  <p className="text-slate-600 mb-8">This will only take a few seconds...</p>

                  <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                    <div
                      className="bg-orange-500 h-3 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-center gap-3 text-slate-600">
                        <FileText className="h-4 w-4" />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload state */}
              {!isProcessing && !isComplete && !hasError && (
                <>
                  <div
                    className={cn(
                      "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer",
                      isDragOver
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-300 hover:border-orange-400 hover:bg-gray-50",
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("office-file-upload")?.click()}
                  >
                    <div className="text-center">
                      <Upload className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your office files here</h3>
                      <p className="text-slate-600 mb-6">or click to browse files</p>
                      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                        Choose Files
                      </Button>
                      <p className="text-sm text-slate-500 mt-4">
                        Supported: DOC, DOCX, XLS, XLSX, PPT, PPTX, ODT, ODP, ODS
                      </p>
                    </div>
                  </div>

                  <input
                    id="office-file-upload"
                    type="file"
                    multiple
                    accept={ACCEPTED_EXTENSIONS}
                    className="hidden"
                    onChange={handleFileSelect}
                  />

                  {files.length > 0 && (
                    <div className="mt-8 space-y-4">
                      <h3 className="text-lg font-bold text-slate-900">Files to convert:</h3>
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-background border border-border rounded-lg p-4"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-orange-500" />
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
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                        size="lg"
                        disabled={files.length === 0}
                      >
                        Convert {files.length} File{files.length > 1 ? "s" : ""} to PDF
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word docs to PDF" },
                { name: "Excel to PDF", href: "/excel-to-pdf", desc: "Convert spreadsheets to PDF" },
                { name: "PowerPoint to PDF", href: "/powerpoint-to-pdf", desc: "Convert slides to PDF" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size after converting" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What Office formats can PDF.it convert to PDF?",
                  a: "PDF.it converts Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX), and OpenDocument formats (ODT/ODP/ODS) to PDF.",
                },
                {
                  q: "Will my formatting stay the same after converting to PDF?",
                  a: "Most documents convert cleanly. Some complex layouts with unusual fonts or wide spreadsheets may render slightly differently depending on the source file.",
                },
                {
                  q: "Can I convert Office files to PDF on mobile?",
                  a: "Yes. PDF.it works in mobile browsers — upload your file and download the PDF.",
                },
                {
                  q: "Do PowerPoint animations convert to PDF?",
                  a: "No. PDFs are static, so animations and transitions won't play — slides are exported as still pages.",
                },
                {
                  q: "Is it safe to upload Office files?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can convert?",
                  a: "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
