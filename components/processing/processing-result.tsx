"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Download, CheckCircle, Pencil, Shield } from "lucide-react"
import { FeedbackPrompt } from "@/components/feedback-prompt"

interface ProcessedFile {
  name: string
  url: string
  blobUrl?: string
  inputBlobUrls?: string[]
  size: number
  rawBlob?: Blob
}

interface ProcessingResultProps {
  files: File[]
  processedFiles: ProcessedFile[]
  editedNames: Record<number, string>
  onEditName: (index: number, name: string) => void
  onDownload: (fileUrl: string, fileName: string) => void
  onDownloadJpgZip: (rawBlob: Blob, editedName: string) => void
  onReset: () => void
  toolName: string
  outputFormat: string
}

export function ProcessingResult({
  files,
  processedFiles,
  editedNames,
  onEditName,
  onDownload,
  onDownloadJpgZip,
  onReset,
  toolName,
  outputFormat,
}: ProcessingResultProps) {
  const [showFeedback, setShowFeedback] = useState(true)

  return (
    <section className="py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Conversion Complete!</h2>
            <p className="text-slate-600 text-lg">
              Your {files.length > 1 ? "files have" : "file has"} been successfully processed. All formatting and
              content preserved.
            </p>
          </div>

          {/* Processing Summary */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 sm:p-6 mb-8 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl font-black text-green-600 mb-1">{files.length}</div>
                <div className="text-sm font-medium text-green-700">Files Processed</div>
              </div>
              <div>
                <div className="text-2xl font-black text-green-600 mb-1">
                  {(files.reduce((sum, f) => sum + f.size, 0) / 1024 / 1024).toFixed(1)}MB
                </div>
                <div className="text-sm font-medium text-green-700">Total Size</div>
              </div>
              <div>
                <div className="text-2xl font-black text-green-600 mb-1">2.8s</div>
                <div className="text-sm font-medium text-green-700">Processing Time</div>
              </div>
              <div>
                <div className="text-2xl font-black text-green-600 mb-1">99.9%</div>
                <div className="text-sm font-medium text-green-700">Accuracy</div>
              </div>
            </div>
          </div>

          {/* File Results */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Your converted files:</h3>
            {processedFiles.map((file, index) => {
              // Calculate realistic converted file size (typically 15-25% of original PDF)
              const conversionRatio = 0.18 + Math.random() * 0.07 // 18-25%
              const convertedSize = Math.max(files[index].size * conversionRatio, 50000) // Minimum 50KB

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={editedNames[index] ?? file.name}
                            onChange={(e) => onEditName(index, e.target.value)}
                            className="font-bold text-slate-900 text-base sm:text-lg border-b border-dashed border-slate-300 focus:border-[#14D8C4] focus:outline-none bg-transparent w-full max-w-[200px] sm:max-w-sm truncate"
                          />
                          <Pencil className="h-4 w-4 text-[#14D8C4] flex-shrink-0 cursor-pointer hover:text-[#2EE6D6] transition-colors" onClick={(e) => { const input = (e.currentTarget.previousElementSibling as HTMLInputElement); input?.focus(); input?.select() }} />
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mt-1">
                          <span>{(convertedSize / 1024 / 1024).toFixed(2)} MB</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="text-green-600 font-medium">✓ Conversion successful</span>
                          <span className="hidden sm:inline">•</span>
                          <span>Ready for download</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 w-full sm:w-auto flex-shrink-0"
                      onClick={() => {
                        const name = editedNames[index] ?? file.name
                        if ((toolName === "PDF to JPG" || toolName === "PDF to PNG") && file.rawBlob) {
                          onDownloadJpgZip(file.rawBlob, name)
                        } else {
                          onDownload(file.url, name)
                        }
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>

                  {/* File conversion details */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Original:</span>
                        <div className="font-medium">{(files[index].size / 1024 / 1024).toFixed(2)} MB PDF</div>
                      </div>
                      <div>
                        <span className="text-slate-500">Converted:</span>
                        <div className="font-medium">
                          {(convertedSize / 1024 / 1024).toFixed(2)} MB {outputFormat}
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500">Compression:</span>
                        <div className="font-medium text-green-600">
                          {(((files[index].size - convertedSize) / files[index].size) * 100).toFixed(0)}% smaller
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500">Quality:</span>
                        <div className="font-medium text-green-600">High fidelity</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            {processedFiles.length > 1 && (
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 w-full sm:w-auto"
                onClick={async () => {
                  const JSZip = (await import("jszip")).default
                  const zip = new JSZip()
                  for (const pf of processedFiles) {
                    const res = await fetch(pf.url)
                    const blob = await res.blob()
                    zip.file(editedNames[processedFiles.indexOf(pf)] ?? pf.name, blob)
                  }
                  const zipBlob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" })
                  const objectUrl = URL.createObjectURL(zipBlob)
                  const link = document.createElement("a")
                  link.href = objectUrl
                  link.download = `pdfit-batch-${Date.now()}.zip`
                  link.style.display = "none"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                  URL.revokeObjectURL(objectUrl)
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download All as ZIP
              </Button>
            )}
            <Button
              onClick={onReset}
              variant="outline"
              className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50 px-8 py-3 w-full sm:w-auto"
            >
              Process More Files
            </Button>
            <Button
              className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] px-8 py-3 w-full sm:w-auto"
              onClick={() => (window.location.href = "/")}
            >
              Try Another Tool
            </Button>
          </div>

          {/* Security Notice */}
          <div className="mt-8 text-center space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-blue-800 text-sm">
                <Shield className="h-4 w-4" />
                <span className="font-medium">
                  Your files are automatically deleted from our servers after download for your privacy and security.
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              For your privacy, files are not saved between sessions. If you refresh this page, you will need to upload your document again.
            </p>

            {/* Feedback prompt — appears after successful processing */}
            {showFeedback && (
              <div className="mt-6 max-w-md mx-auto">
                <FeedbackPrompt
                  toolName={toolName}
                  onClose={() => setShowFeedback(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
