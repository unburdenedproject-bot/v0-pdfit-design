import type React from "react"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-analytics"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PDF.it — Fix Any Document Problem Instantly",
  description:
    "Convert, compress, merge, split and edit PDF files instantly. AI-powered tools for professionals. No registration required.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "PDF.it — Fix Any Document Problem Instantly",
    description: "Convert, compress, merge, split and edit PDF files instantly. AI-powered tools for professionals.",
    url: "https://pdf.it.com",
    siteName: "PDF.it",
    images: [
      {
        url: "https://pdf.it.com/og-logo.png",
        width: 1200,
        height: 630,
        alt: "PDF.it",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF.it — Fix Any Document Problem Instantly",
    description: "Convert, compress, merge, split and edit PDF files instantly. AI-powered tools for professionals.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" media="print" onLoad="this.media='all'" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body style={{ backgroundColor: "#0E0F1E" }}>
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
