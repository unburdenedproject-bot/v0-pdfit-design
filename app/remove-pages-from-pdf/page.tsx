import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remove Pages from PDF Online — Delete Unwanted Pages | PDF.it",
  description:
    "Remove unwanted pages from a PDF with PDF.it. Select which pages to keep, and download a clean PDF without the extras — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I remove pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, enter the page numbers you want to KEEP (everything else will be removed), then click Split PDF. Download the new PDF without the unwanted pages." }
    },
    {
      "@type": "Question",
      "name": "Does removing pages change my original PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Your original PDF is never modified. PDF.it creates a brand-new PDF with only the pages you chose to keep. Your original file stays exactly as it was." }
    },
    {
      "@type": "Question",
      "name": "Can I remove blank pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Identify the blank page numbers in your PDF, then enter only the non-blank page numbers in PDF.it. The resulting PDF will have all blank pages removed." }
    },
    {
      "@type": "Question",
      "name": "Can I remove the cover page from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. If page 1 is the cover, simply enter pages 2 through the last page (e.g., 2-25) and the cover page will be excluded from the new PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I remove pages from a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, select the pages to keep, and download the cleaned-up PDF on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it free to remove pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free accounts can process PDFs up to 25MB with up to 10 conversions per day. Pro accounts get unlimited processing and files up to 200MB." }
    }
  ]
}

export default function RemovePagesFromPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Split className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remove Pages from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Delete blank pages, cover pages, or any unwanted pages from your PDF. Select the pages you want to keep and download a clean, trimmed document — fast, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Keep Only What You Need</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Split Interface */}
        <SplitPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Got a PDF with blank pages, unnecessary cover sheets, or extra appendices? PDF.it lets you remove unwanted pages by selecting only the pages you want to keep. The result is a clean, trimmed PDF ready to share, upload, or print.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Remove blank pages, cover pages, or appendices</li>
              <li>&#10003; Original PDF stays unchanged — a new file is created</li>
              <li>&#10003; Enter the pages you want to keep, and the rest is removed</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — remove pages in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Clean Up Scanned Documents</h2>
              <p className="text-slate-600">
                Scanned PDFs often include blank pages, duplicate scans, or accidental pages. Remove the extras and keep only the pages that matter — perfect for cleaning up multi-page scans before uploading or archiving.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remove Cover Pages and Title Sheets</h2>
              <p className="text-slate-600">
                Many PDFs start with a cover page or title sheet you don't need. Remove page 1 (or any other pages) and keep the content that matters. Great for reports, proposals, and presentations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Trim Appendices and Extra Sections</h2>
              <p className="text-slate-600">
                Need to share a document without the appendix, reference section, or legal disclaimers? Remove the last pages and create a focused PDF with only the core content.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Remove Pages from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Enter the page numbers or ranges you want to KEEP (e.g., 2-8, 10-15). Pages not listed will be removed.",
                "Click Split PDF to create your trimmed document.",
                "Download your clean PDF without the unwanted pages.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Split PDF", href: "/split-pdf", desc: "Split into multiple PDFs" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs together" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Flatten form fields" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I remove pages from a PDF?",
                  a: "Upload your PDF to PDF.it, enter the page numbers you want to KEEP (everything else will be removed), then click Split PDF. Download the new PDF without the unwanted pages.",
                },
                {
                  q: "Does removing pages change my original PDF?",
                  a: "No. Your original PDF is never modified. PDF.it creates a brand-new PDF with only the pages you chose to keep. Your original file stays exactly as it was.",
                },
                {
                  q: "Can I remove blank pages from a PDF?",
                  a: "Yes. Identify the blank page numbers in your PDF, then enter only the non-blank page numbers in PDF.it. The resulting PDF will have all blank pages removed.",
                },
                {
                  q: "Can I remove the cover page from a PDF?",
                  a: "Yes. If page 1 is the cover, simply enter pages 2 through the last page (e.g., 2-25) and the cover page will be excluded from the new PDF.",
                },
                {
                  q: "Can I remove pages from a PDF on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload, select the pages to keep, and download the cleaned-up PDF on iPhone or Android.",
                },
                {
                  q: "Is it free to remove pages from a PDF?",
                  a: "Yes. Free accounts can process PDFs up to 25MB with up to 10 conversions per day. Pro accounts get unlimited processing and files up to 200MB.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
