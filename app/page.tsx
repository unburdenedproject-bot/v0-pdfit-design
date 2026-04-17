import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"
import { ScrollToTools } from "@/components/scroll-to-tools"
import { NewsletterSignup } from "@/components/newsletter-signup"

const ComprehensiveFAQSection = dynamic(() => import("@/components/comprehensive-faq-section").then(mod => ({ default: mod.ComprehensiveFAQSection })), { ssr: true })

export const metadata: Metadata = {
  title: "AI PDF Tools, ATS Resume Optimizer & Resume Builder | PDF.it",
  description:
    "Use PDF.it to compress, convert, merge, split, and edit PDFs online. 7 AI tools: chat with PDF, summarize documents, extract data, generate questions, translate to 13 languages, and optimize resumes.",
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
    "PDF for professionals",
    "PDF for lawyers",
    "PDF for accountants",
    "PDF for students",
    "PDF for freelancers",
    "PDF for teachers",
    "PDF for real estate",
    "PDF for HR",
    "PDF for healthcare",
    "PDF for small business",
    "iLovePDF alternative",
    "SmallPDF alternative",
    "Adobe Acrobat alternative",
    "free PDF editor online",
    "reduce PDF file size for email",
    "extract tables from PDF to Excel",
    "sign PDF online without account",
    "secure PDF tools no file storage",
    "batch PDF processing online",
    "PDF workflow automation",
    "PDF tools no signup required",
    "make scanned PDF searchable",
    "chat with PDF",
    "ask questions about PDF",
    "PDF summarizer",
    "summarize PDF document",
    "translate PDF",
    "PDF translation tool",
    "AI question generator",
    "generate quiz from PDF",
    "extract data from PDF",
    "smart data extraction",
    "AI document analysis",
  ],
  openGraph: {
    title: "AI PDF Tools, ATS Resume Optimizer & Resume Builder | PDF.it",
    description:
      "Compress, convert, merge, split, and edit PDFs online. 7 AI tools: chat with PDF, summarize, extract data, generate questions, translate, and optimize resumes.",
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
  alternates: {
    canonical: "https://pdf.it.com",
    languages: {
      en: "https://pdf.it.com",
      es: "https://pdf.it.com/es",
      pt: "https://pdf.it.com/br",
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <FeaturesGrid />
        </Suspense>
        <TrustSection />

        {/* Newsletter Signup */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <NewsletterSignup locale="en" />
          </div>
        </section>

        <ComprehensiveFAQSection />
      </main>
      <Footer />
      <ScrollToTools />
    </div>
  )
}
