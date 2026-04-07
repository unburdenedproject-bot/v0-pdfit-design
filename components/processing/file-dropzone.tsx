"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Upload, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { TrustBadges } from "@/components/trust-badges"

interface FileDropzoneProps {
  isDragOver: boolean
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  acceptedFiles: string
  allowMultiple: boolean
  /** Whether files have already been selected (hides the full dropzone) */
  hasFiles: boolean
  /** Whether user is on a paid plan */
  isPaidUser: boolean
  /** URL to pricing page */
  pricingUrl: string
}

export function FileDropzone({
  isDragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  acceptedFiles,
  allowMultiple,
  hasFiles,
  isPaidUser,
  pricingUrl,
}: FileDropzoneProps) {
  return (
    <>
      {/* Full upload zone — only when no files selected yet */}
      {!hasFiles && (
        <div
          id="file-upload-zone"
          className={cn(
            "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer",
            isDragOver
              ? "border-[#14D8C4] bg-[#F0FDFA]"
              : "border-gray-300 hover:border-[#14D8C4]/40 hover:bg-gray-50",
          )}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <div className="text-center">
            <Upload className="h-12 w-12 text-[#14D8C4] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your files here</h3>
            <p className="text-slate-600 mb-6">or click to browse files</p>
            <Button size="lg" className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-semibold px-8">
              Choose Files
            </Button>
            <p className="text-sm text-slate-500 mt-4">Supported formats: {acceptedFiles}</p>
          </div>
        </div>
      )}

      <input
        id="file-upload"
        type="file"
        multiple={allowMultiple}
        accept={acceptedFiles}
        className="hidden"
        onClick={(e) => { (e.target as HTMLInputElement).value = "" }}
        onChange={onFileSelect}
      />

      {!isPaidUser && hasFiles && (
        <div className="mt-6 bg-gradient-to-r from-[#F0FDFA] to-[#F0FDFA] border border-[#14D8C4]/20 rounded-xl p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-slate-900">Want to process multiple files at once?</p>
            <p className="text-xs text-slate-600">Upgrade to Pro for batch processing — convert up to 50 files in one go.</p>
          </div>
          <Button
            size="sm"
            className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold text-xs px-4 flex-shrink-0"
            onClick={(e) => { e.stopPropagation(); window.location.href = `${pricingUrl}?source=batch` }}
          >
            <Crown className="h-3 w-3 mr-1" />
            Upgrade
          </Button>
        </div>
      )}

      <TrustBadges />
    </>
  )
}
