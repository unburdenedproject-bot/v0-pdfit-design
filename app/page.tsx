import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { TrustSection } from "@/components/trust-section"
import { ComprehensiveFAQSection } from "@/components/comprehensive-faq-section"
import { Footer } from "@/components/footer"
import { ScrollToTools } from "@/components/scroll-to-tools"

export const metadata: Metadata = {
  title: "AI PDF Tools, ATS Resume Optimizer & Resume Builder | PDF.it",
  description:
    "Use PDF.it to compress, convert, merge, split, and edit PDFs online. Try AI Resume ATS Optimizer and AI Resume Builder to score, fix, and create ATS-friendly resumes fast.",
  keywords: [
    "AI PDF tools",
    "ATS resume optimizer",
    "AI resume builder",
    "resume ATS checker",
    "AI resume writer",
    "PDF tools online",
    "compress PDF",
    "merge PDF",
    "convert PDF",
  ],
  openGraph: {
    title: "AI PDF Tools, ATS Resume Optimizer & Resume Builder | PDF.it",
    description:
      "Compress, convert, merge, split, and edit PDFs online. Score your resume with AI ATS analysis or create a new ATS-friendly resume in minutes.",
    url: "https://pdf.it.com",
    siteName: "PDF.it",
    images: [
      {
        url: "https://pdf.it.com/og-logo.png",
        width: 1200,
        height: 630,
        alt: "PDF.it AI PDF and Resume Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PDF Tools, ATS Resume Optimizer & Resume Builder | PDF.it",
    description:
      "Compress PDFs and use AI to optimize or build ATS-friendly resumes.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <TrustSection />
        <ComprehensiveFAQSection />
      </main>
      <Footer />
      <ScrollToTools />
    </div>
  )
}
