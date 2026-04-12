"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

/**
 * Cookie consent banner — required by GDPR (EU), LGPD (Brazil), and ePrivacy Directive.
 * Shows on first visit. Blocks GTM/GA4 until user accepts.
 * Stores consent in localStorage (not cookies — avoids circular dependency).
 */

const CONSENT_KEY = "pdfit_cookie_consent"

type ConsentState = "pending" | "accepted" | "rejected"

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>("pending")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored as ConsentState)
      if (stored === "accepted") {
        enableTracking()
      }
    } else {
      // First visit — show banner after short delay (don't block first paint)
      setTimeout(() => setVisible(true), 1500)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setConsent("accepted")
    setVisible(false)
    enableTracking()
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected")
    setConsent("rejected")
    setVisible(false)
    disableTracking()
  }

  if (!visible || consent !== "pending") return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      style={{ background: "rgba(14, 15, 30, 0.97)", backdropFilter: "blur(12px)" }}
    >
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-slate-300 leading-relaxed">
            We use cookies and analytics (Google Analytics) to understand how you use PDF.it and improve our tools.
            Your uploaded files are <strong className="text-white">never stored</strong> — this only applies to browsing data.{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#14D8C4] hover:text-[#2EE6D6] underline">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-6 py-2 rounded-lg text-sm font-bold bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * Enable Google Analytics / GTM tracking.
 * Called when user accepts cookies.
 */
function enableTracking() {
  // Signal to GTM that consent was granted
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
    })
  }
}

/**
 * Disable tracking when user declines.
 */
function disableTracking() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    })
  }
}
