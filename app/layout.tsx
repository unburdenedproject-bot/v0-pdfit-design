import type React from "react"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "OmnisPDF - The fastest PDF tools on the planet",
  description:
    "Convert, compress, merge, split and edit PDF files instantly. No registration required. Lightning fast processing.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
