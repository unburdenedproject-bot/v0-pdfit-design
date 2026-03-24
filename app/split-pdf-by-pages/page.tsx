import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Split PDF by Page Number — Divide PDF into Parts | PDF.it",
  description:
    "Split a PDF by page number with PDF.it. Choose exactly which pages go into each file — download separate PDFs instantly, free and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I split a PDF by page number?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, enter the page ranges you want (e.g. 1-5, 6-10), click Split, and download each part as a separate PDF file." }
    },
    {
      "@type": "Question",
      "name": "Can I create multiple PDFs from one file using custom page ranges?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can define as many page ranges as you need. Each range produces a separate PDF file that you can download individually." }
    },
    {
      "@type": "Question",
      "name": "Can I extract a single page from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Enter a single page number (e.g. 3) as your range to extract just that one page into its own PDF file." }
    },
    {
      "@type": "Question",
      "name": "Does splitting a PDF reduce the quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting simply separates pages into different files — the content, formatting, and quality of each page remain exactly the same as the original." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF by page number on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser — upload your PDF, set your page ranges, and download the split files on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is there a limit to how many pages I can split?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can split PDFs up to 25MB. Pro users can handle files up to 200MB with batch processing and priority support." }
    }
  ]
}

export default function SplitPDFByPagesPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Split PDF by Page Number</h1>
              <p className="text-xl text-slate-300 mb-8">
                Divide large PDFs into smaller parts by specifying exact page ranges. Extract chapters, sections, or individual pages into separate PDF files — instantly, free, and right in your browser.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Custom Page Ranges</span></div>
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
              Need to pull specific pages out of a PDF? PDF.it lets you split any PDF by page number — define custom ranges like 1-5, 6-10, or even single pages, and download each part as a separate file. Perfect for breaking apart reports, extracting chapters, or creating handouts from a larger document.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Split by custom page ranges (e.g. 1-5, 6-10, 11-15)</li>
              <li>✓ Extract individual pages into their own PDF</li>
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
              <h2 className="text-2xl font-black text-slate-900 mb-3">Split Chapters from Textbooks and eBooks</h2>
              <p className="text-slate-600">
                Got a 300-page textbook PDF but only need chapters 3 and 7? Enter the page ranges for just those chapters and download them as lightweight, focused files — perfect for studying or sharing with classmates.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Divide Reports into Sections for Your Team</h2>
              <p className="text-slate-600">
                Split a quarterly report so each department gets only the pages relevant to them. Finance gets pages 1-12, marketing gets 13-24, operations gets 25-40 — everyone gets exactly what they need.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Create Handouts from Presentation Decks</h2>
              <p className="text-slate-600">
                Extract specific slides from a large presentation PDF to create targeted handouts. Pull out the key summary pages, data tables, or reference sheets and share them separately with your audience.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Split a PDF by Page Number</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Enter your page ranges (e.g. 1-5, 6-10, 11-15) to define each split.",
                "Click Split PDF to separate your file into parts.",
                "Download each part as a separate PDF file.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs into one" },
                { name: "Split PDF", href: "/split-pdf", desc: "General PDF splitting" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
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
                { q: "How do I split a PDF by page number?", a: "Upload your PDF to PDF.it, enter the page ranges you want (e.g. 1-5, 6-10), click Split, and download each part as a separate PDF file." },
                { q: "Can I create multiple PDFs from one file using custom page ranges?", a: "Yes. You can define as many page ranges as you need. Each range produces a separate PDF file that you can download individually." },
                { q: "Can I extract a single page from a PDF?", a: "Absolutely. Enter a single page number (e.g. 3) as your range to extract just that one page into its own PDF file." },
                { q: "Does splitting a PDF reduce the quality?", a: "No. Splitting simply separates pages into different files — the content, formatting, and quality of each page remain exactly the same as the original." },
                { q: "Can I split a PDF by page number on my phone?", a: "Yes. PDF.it works in any mobile browser — upload your PDF, set your page ranges, and download the split files on iPhone or Android." },
                { q: "Is there a limit to how many pages I can split?", a: "Free users can split PDFs up to 25MB. Pro users can handle files up to 200MB with batch processing and priority support." },
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
