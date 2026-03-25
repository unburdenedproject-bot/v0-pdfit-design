import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Split Large PDF into Smaller Files — Reduce PDF Size by Splitting | PDF.it",
  description:
    "Split a large PDF into smaller files with PDF.it. Break oversized PDFs into manageable parts for email, uploads, and sharing — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I split a large PDF into smaller files?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it and enter page ranges to divide it into equal parts. For example, split a 20-page PDF into four 5-page files by entering ranges 1-5, 6-10, 11-15, and 16-20. Download each part separately." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF to fit email attachment limits?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most email providers limit attachments to 25MB. Split your large PDF into smaller parts by page range, then attach each part to separate emails or compress each part further with PDF.it's Compress for Email tool." }
    },
    {
      "@type": "Question",
      "name": "How small can the split parts be?",
      "acceptedAnswer": { "@type": "Answer", "text": "Each part can be as small as a single page. The file size of each part depends on the content — pages with images will be larger than text-only pages." }
    },
    {
      "@type": "Question",
      "name": "Will splitting a PDF reduce the quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting only separates pages into different files. The content, images, and formatting stay exactly the same as the original document." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF for upload portals with file size limits?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many portals have 5MB or 10MB limits. Split your PDF into smaller sections, then use PDF.it's compression tools on each part to ensure they meet the size requirement." }
    },
    {
      "@type": "Question",
      "name": "Can I recombine the split files later?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Use PDF.it's Merge PDF tool to combine split files back into a single document whenever you need the full version again." }
    }
  ]
}

export default function SplitPDFBySizePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Split Large PDF into Smaller Files</h1>
              <p className="text-xl text-slate-300 mb-8">
                Break oversized PDFs into manageable, smaller files that fit email limits, upload portals, and sharing platforms. Split by page ranges to create parts that work everywhere — fast, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Break Into Smaller Parts</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Split Interface */}
        <SplitPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Got a PDF that is too large to email, upload, or share? PDF.it lets you split it into smaller files by selecting page ranges. For example, split a 20-page PDF into four 5-page files — each small enough to attach to an email or upload to a portal with strict size limits.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Split oversized PDFs into email-friendly parts</li>
              <li>✓ Create equal-sized sections by dividing page ranges</li>
              <li>✓ Original quality preserved — no recompression</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — split PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Split PDFs for Email Attachments</h2>
              <p className="text-slate-600">
                Most email providers cap attachments at 25MB. If your PDF exceeds that, split it into smaller parts by page range and send each part in a separate email. Combine with PDF.it's compression tools for even smaller files.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Meet Upload Portal Size Limits</h2>
              <p className="text-slate-600">
                Government portals, job applications, and university submissions often enforce strict file size limits — 5MB, 10MB, or 20MB. Split your PDF into sections that fit within those limits, then upload each part separately.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Share Large Documents in Parts</h2>
              <p className="text-slate-600">
                Need to share a 100-page report via messaging apps or cloud links? Split it into logical sections — introduction, data, appendix — so recipients can download and read the parts they need without waiting for the full file.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Split a Large PDF into Smaller Files</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your large PDF into PDF.it.",
                "Enter page ranges to create equal-sized parts (e.g. 1-5, 6-10, 11-15, 16-20).",
                "Click Split PDF to break your file into separate parts.",
                "Download each smaller PDF and email, upload, or share them individually.",
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
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs into one" },
                { name: "Compress for Email", href: "/compress-pdf-for-email", desc: "Email-ready PDFs" },
                { name: "Split PDF", href: "/split-pdf", desc: "General PDF splitting" },
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
                { q: "How do I split a large PDF into smaller files?", a: "Upload your PDF to PDF.it and enter page ranges to divide it into equal parts. For example, split a 20-page PDF into four 5-page files by entering ranges 1-5, 6-10, 11-15, and 16-20. Download each part separately." },
                { q: "Can I split a PDF to fit email attachment limits?", a: "Yes. Most email providers limit attachments to 25MB. Split your large PDF into smaller parts by page range, then attach each part to separate emails or compress each part further with PDF.it's Compress for Email tool." },
                { q: "How small can the split parts be?", a: "Each part can be as small as a single page. The file size of each part depends on the content — pages with images will be larger than text-only pages." },
                { q: "Will splitting a PDF reduce the quality?", a: "No. Splitting only separates pages into different files. The content, images, and formatting stay exactly the same as the original document." },
                { q: "Can I split a PDF for upload portals with file size limits?", a: "Yes. Many portals have 5MB or 10MB limits. Split your PDF into smaller sections, then use PDF.it's compression tools on each part to ensure they meet the size requirement." },
                { q: "Can I recombine the split files later?", a: "Absolutely. Use PDF.it's Merge PDF tool to combine split files back into a single document whenever you need the full version again." },
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
