"use client"

import { FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SoftErrorCardProps {
  errorMessage: string
  onReset: () => void
  retryLabel?: string
  variant?: "input-error" | "unavailable"
}

/**
 * Premium soft error card for user-input errors (file too large, unsupported
 * type, empty file). Uses the same teal→indigo gradient circle + soft pastel
 * background as the invalid-PDF card on ats-optimizer / translate-pdf /
 * summarizer / question-generator. Never use the red AlertCircle look for
 * user-input errors — see BRAND.md.
 */
export function SoftErrorCard({ errorMessage, onReset, retryLabel = "Try Again", variant = "input-error" }: SoftErrorCardProps) {
  const lower = errorMessage.toLowerCase()
  const heading = variant === "unavailable"
    ? "Temporarily Unavailable"
    : lower.includes("too large") || lower.includes("size limit")
      ? "File Too Large"
      : lower.includes("appears to be empty") || lower.includes("is empty") || lower.includes("empty and cannot")
        ? "Empty File"
        : "Unsupported File Type"
  const Icon = variant === "unavailable" ? Clock : FileText

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div
            className="rounded-2xl p-6 flex items-start gap-4"
            style={{
              background: "linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)",
              border: "1px solid #DBEAFE",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 mb-1 text-lg">{heading}</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{errorMessage}</p>
              <Button
                onClick={onReset}
                className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold"
              >
                {retryLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function isUserInputError(errorMessage: string): boolean {
  const lower = errorMessage.toLowerCase()
  return (
    lower.includes("too large") ||
    lower.includes("size limit") ||
    lower.includes("invalid file type") ||
    lower.includes("not supported") ||
    lower.includes("file format") ||
    lower.includes("not a valid pdf") ||
    lower.includes("appears to be empty") ||
    lower.includes("is empty") ||
    lower.includes("empty and cannot") ||
    lower.includes("empty and contains")
  )
}
