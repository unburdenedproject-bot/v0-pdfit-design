"use client"

import { useState } from "react"
import { Star, X, CheckCircle, Loader2 } from "lucide-react"

interface FeedbackPromptProps {
  toolName: string
  onClose: () => void
}

/**
 * Post-download feedback prompt.
 * Shows after successful file processing.
 * Step 1: Star rating
 * Step 2: If 4-5 stars → ask for testimonial quote
 * Step 3: Thank you
 */
export function FeedbackPrompt({ toolName, onClose }: FeedbackPromptProps) {
  const [step, setStep] = useState<"rate" | "quote" | "thanks">("rate")
  const [rating, setRating] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [quote, setQuote] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const submitRating = async (stars: number) => {
    setRating(stars)

    if (stars >= 4) {
      // Happy user — ask for a quote
      setStep("quote")
    } else {
      // Not thrilled — just save the rating and close
      await saveFeedback(stars, "", "", "")
      setStep("thanks")
      setTimeout(onClose, 2000)
    }
  }

  const submitQuote = async () => {
    setSubmitting(true)
    await saveFeedback(rating, quote, name, role)
    setSubmitting(false)
    setStep("thanks")
    setTimeout(onClose, 3000)
  }

  const saveFeedback = async (r: number, q: string, n: string, rl: string) => {
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: r, quote: q, name: n, role: rl, tool: toolName }),
      })
    } catch {
      // Silent fail — don't interrupt the user's flow
    }
  }

  return (
    <div
      className="rounded-xl p-5 mt-4 relative"
      style={{
        background: "rgba(20, 216, 196, 0.06)",
        border: "1px solid rgba(20, 216, 196, 0.15)",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-slate-400 hover:text-slate-200 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>

      {step === "rate" && (
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            How was your experience?
          </p>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => submitRating(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="p-1 transition-transform hover:scale-110"
              >
                <Star
                  className="h-8 w-8 transition-colors"
                  fill={star <= (hoveredStar || rating) ? "#14D8C4" : "transparent"}
                  stroke={star <= (hoveredStar || rating) ? "#14D8C4" : "#94A3B8"}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "quote" && (
        <div>
          <p className="text-sm font-semibold text-slate-700 mb-1">
            Glad you liked it! Mind sharing a quick quote?
          </p>
          <p className="text-xs text-slate-500 mb-3">
            It helps other professionals find us. Optional — skip anytime.
          </p>
          <textarea
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="e.g., PDF.it compressed my 50-page contract in seconds — saved me 20 minutes."
            className="w-full p-3 rounded-lg bg-white border border-gray-200 text-slate-800 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#14D8C4] focus:border-transparent"
            rows={2}
            maxLength={500}
          />
          <div className="flex gap-2 mt-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="flex-1 p-2 rounded-lg bg-white border border-gray-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#14D8C4]"
            />
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Your role (optional)"
              className="flex-1 p-2 rounded-lg bg-white border border-gray-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#14D8C4]"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={submitQuote}
              disabled={submitting}
              className="flex-1 py-2 px-4 rounded-lg bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold text-sm transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {quote.trim() ? "Submit" : "Skip"}
            </button>
            <button
              onClick={() => { saveFeedback(rating, "", "", ""); onClose() }}
              className="py-2 px-4 rounded-lg text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors"
            >
              No thanks
            </button>
          </div>
        </div>
      )}

      {step === "thanks" && (
        <div className="text-center py-2">
          <CheckCircle className="h-8 w-8 text-[#14D8C4] mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-700">
            {quote.trim() ? "Thank you! Your feedback helps other professionals find us." : "Thanks for your feedback!"}
          </p>
        </div>
      )}
    </div>
  )
}
