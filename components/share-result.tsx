"use client"

import { useState } from "react"
import { Share2, Twitter, Linkedin, Link2, Check } from "lucide-react"

interface ShareResultProps {
  toolName: string
  toolSlug: string
  /** Original file size in bytes */
  originalSize: number
  /** Processed file size in bytes */
  resultSize: number
}

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)}KB`
  return `${bytes}B`
}

export function ShareResult({ toolName, toolSlug, originalSize, resultSize }: ShareResultProps) {
  const [copied, setCopied] = useState(false)

  const toolUrl = `https://pdf.it.com/${toolSlug}`
  const savedPercent = originalSize > 0 ? Math.round((1 - resultSize / originalSize) * 100) : 0
  const savedSize = formatSize(originalSize - resultSize)

  // Only show share for compress-like tools where size reduction is meaningful
  const isCompression = toolName.toLowerCase().includes("compress") || toolName.toLowerCase().includes("reduce")
  const hasStats = originalSize > 0 && resultSize > 0 && resultSize < originalSize

  // Build share text based on tool type
  let shareText: string
  if (isCompression && hasStats) {
    shareText = `Just compressed my PDF by ${savedPercent}% (saved ${savedSize}) in seconds with PDF.it — free, no signup needed.`
  } else if (toolName.includes("Merge")) {
    shareText = `Just merged multiple PDFs into one file in seconds with PDF.it — free, no signup needed.`
  } else if (toolName.includes("Split")) {
    shareText = `Just split my PDF into separate files in seconds with PDF.it — free, no signup needed.`
  } else if (toolName.includes("to Word") || toolName.includes("to Excel") || toolName.includes("to PowerPoint")) {
    shareText = `Just converted my PDF to ${toolName.replace("PDF to ", "")} with perfect formatting using PDF.it — free online tool.`
  } else if (toolName.includes("to JPG") || toolName.includes("to PNG")) {
    shareText = `Just converted my PDF pages to images with PDF.it — fast, free, no signup needed.`
  } else {
    shareText = `Just used ${toolName} on PDF.it — fast, free, and my files were deleted right after. Love it.`
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(toolUrl)}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(toolUrl)}`

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(toolUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input")
      input.value = toolUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      className="rounded-xl p-4 mt-6"
      style={{
        background: "linear-gradient(135deg, rgba(20,216,196,0.06), rgba(107,124,255,0.04))",
        border: "1px solid rgba(20,216,196,0.15)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Share2 className="h-4 w-4 text-[#14D8C4]" />
        <span className="text-sm font-semibold text-slate-700">
          {isCompression && hasStats
            ? `You just saved ${savedPercent}% (${formatSize(originalSize)} → ${formatSize(resultSize)})`
            : `Share ${toolName} with your team`}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
          style={{
            background: "rgba(29, 161, 242, 0.1)",
            color: "#1DA1F2",
            border: "1px solid rgba(29, 161, 242, 0.2)",
          }}
        >
          <Twitter className="h-3.5 w-3.5" />
          Share on X
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
          style={{
            background: "rgba(10, 102, 194, 0.1)",
            color: "#0A66C2",
            border: "1px solid rgba(10, 102, 194, 0.2)",
          }}
        >
          <Linkedin className="h-3.5 w-3.5" />
          Share on LinkedIn
        </a>

        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
          style={{
            background: "rgba(100, 116, 139, 0.1)",
            color: "#475569",
            border: "1px solid rgba(100, 116, 139, 0.2)",
          }}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Link2 className="h-3.5 w-3.5" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  )
}
