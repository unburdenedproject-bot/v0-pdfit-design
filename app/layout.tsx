import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-analytics"
import { DeferredCookieConsent } from "@/components/deferred-cookie-consent"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

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
    <html lang="en" className={inter.variable}>
      <head>
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
        <DeferredCookieConsent />
      </body>
    </html>
  )
}
