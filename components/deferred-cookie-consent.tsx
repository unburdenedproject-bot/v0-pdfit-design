"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Load the real CookieConsent component lazily and only after the browser is
// idle. Keeps the ~2KB banner code out of the initial JS bundle and out of
// the hydration critical path. Falls back to a 1500ms timeout on older
// browsers that lack requestIdleCallback.
const CookieConsent = dynamic(
  () => import("./cookie-consent").then((m) => ({ default: m.CookieConsent })),
  { ssr: false }
)

export function DeferredCookieConsent() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number
    }
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2000 })
      return () => {
        const cancel = (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback
        if (cancel) cancel(id)
      }
    }
    const t = setTimeout(() => setReady(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return ready ? <CookieConsent /> : null
}
