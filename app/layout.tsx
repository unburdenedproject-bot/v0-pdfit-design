import type React from "react"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-analytics"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "OmnisPDF - The fastest PDF tools on the planet",
  description:
    "Convert, compress, merge, split and edit PDF files instantly. No registration required. Lightning fast processing.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "OmnisPDF - The fastest PDF tools on the planet",
    description: "Convert, compress, merge, split and edit PDF files instantly. No registration required.",
    url: "https://omnispdf.com",
    siteName: "OmnisPDF",
    images: [
      {
        url: "https://omnispdf.com/og-logo.png",
        width: 1200,
        height: 630,
        alt: "OmnisPDF",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmnisPDF - The fastest PDF tools on the planet",
    description: "Convert, compress, merge, split and edit PDF files instantly.",
    images: ["https://omnispdf.com/og-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
