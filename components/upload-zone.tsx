"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function UploadZone() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])

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

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={cn(
          "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer",
          isDragOver
            ? "border-orange-500 bg-orange-500/10"
            : "border-slate-600 hover:border-orange-500/50 hover:bg-slate-800/50",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        <div className="text-center">
          <Upload className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Drop your PDF here</h3>
          <p className="text-slate-400 mb-6">or click to browse files</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
            Choose Files
          </Button>
        </div>
      </div>

      <input
        id="file-upload"
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png"
        className="hidden"
        onClick={(e) => { (e.target as HTMLInputElement).value = "" }}
        onChange={handleFileSelect}
      />

      {files.length > 0 && (
        <div className="mt-6 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-orange-500" />
                <span className="font-medium">{file.name}</span>
                <span className="text-sm text-slate-400">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-4" size="lg">
            Process {files.length} File{files.length > 1 ? "s" : ""} →
          </Button>
        </div>
      )}
    </div>
  )
}
