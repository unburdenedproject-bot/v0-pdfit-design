"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { FileText, X, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileListProps {
  files: File[]
  onRemove: (index: number) => void
  allowMultiple: boolean
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
  toolName: string
  onProcess: () => void
  /** Compression selector to render between file list and process button */
  compressionSelector?: React.ReactNode
}

export function FileList({
  files,
  onRemove,
  allowMultiple,
  onDragOver,
  onDragLeave,
  onDrop,
  toolName,
  onProcess,
  compressionSelector,
}: FileListProps) {
  if (files.length === 0) return null

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-bold text-slate-900">Files to process:</h3>
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-[#14D8C4]" />
            <div>
              <div className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-xs">{file.name}</div>
              <div className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(1)} MB</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(index)}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}

      {/* Add more / Change file button */}
      {allowMultiple ? (
        <div
          className="border-2 border-dashed border-gray-300 hover:border-[#14D8C4]/40 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <div className="flex items-center justify-center gap-2 text-[#14D8C4]">
            <Upload className="h-5 w-5" />
            <span className="font-semibold">Add more files</span>
          </div>
        </div>
      ) : (
        <div
          className="border-2 border-dashed border-gray-300 hover:border-[#14D8C4]/40 rounded-xl p-3 cursor-pointer transition-all duration-200 hover:bg-gray-50"
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <div className="flex items-center justify-center gap-2 text-slate-500 hover:text-[#14D8C4] transition-colors">
            <Upload className="h-4 w-4" />
            <span className="text-sm font-medium">Choose a different file</span>
          </div>
        </div>
      )}

      {compressionSelector}

      <Button
        onClick={onProcess}
        className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-semibold"
        size="lg"
        disabled={files.length === 0}
      >
        {toolName} - Process {files.length} File{files.length > 1 ? "s" : ""} →
      </Button>
    </div>
  )
}
