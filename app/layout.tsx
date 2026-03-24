import type React from "react"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-analytics"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PDF.it - The fastest PDF tools on the planet",
  description:
    "Convert, compress, merge, split and edit PDF files instantly. No registration required. Lightning fast processing.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "PDF.it - The fastest PDF tools on the planet",
    description: "Convert, compress, merge, split and edit PDF files instantly. No registration required.",
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
    title: "PDF.it - The fastest PDF tools on the planet",
    description: "Convert, compress, merge, split and edit PDF files instantly.",
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
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
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
