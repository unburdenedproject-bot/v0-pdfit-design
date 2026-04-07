import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Batch Split PDFs — Split Multiple Files at Once | PDF.it",
  description:
    "Batch split multiple PDF files at once with PDF.it Pro. Process dozens of PDFs simultaneously — split, extract pages, and organize in bulk.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I batch split multiple PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "With PDF.it Pro, upload multiple PDF files to the Split PDF tool simultaneously. Each file is processed in parallel — split into individual pages or custom page ranges — and you can download all results as a ZIP file." }
    },
    {
      "@type": "Question",
      "name": "How many PDFs can I split at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro users can upload and split dozens of PDF files in a single batch operation. Each file can be up to 200MB with Pro, or up to 1GB with Business. There is no fixed file count limit for batch processing." }
    },
    {
      "@type": "Question",
      "name": "Is batch splitting available on the free plan?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can split one file at a time with files up to 25MB. Batch processing — splitting multiple files simultaneously — is a Pro feature available for $3.99/month." }
    },
    {
      "@type": "Question",
      "name": "Can I extract specific pages from multiple PDFs in a batch?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. With batch splitting, you can configure page ranges for each file. Extract specific pages, split into individual pages, or divide by custom ranges — all processed simultaneously." }
    },
    {
      "@type": "Question",
      "name": "How do I download the results of a batch split?",
      "acceptedAnswer": { "@type": "Answer", "text": "After batch splitting, you can download individual results or use the Download All button to get everything as a single ZIP file. Each split file is clearly labeled for easy identification." }
    },
    {
      "@type": "Question",
      "name": "Does batch splitting affect PDF quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting PDFs does not alter the content. Each extracted page retains its original quality — text, images, formatting, and embedded fonts remain unchanged." }
    }
  ]
}

export default function BatchSplitPDFPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Split className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Batch Split PDFs</h1>
              <p className="text-xl text-slate-300 mb-8">
                Split multiple PDF files at once with PDF.it Pro. Process dozens of documents simultaneously — extract pages, split by range, and download results in bulk.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Process Multiple Files</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Download as ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Upsell CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Batch Processing Requires Pro</h2>
            <p className="text-slate-600 mb-6">Free users can split files one at a time. Upgrade to Pro for batch splitting, larger files, and unlimited conversions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/split-pdf" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
                Try Split PDF Free
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Splitting PDFs one at a time is tedious when you have a stack of documents to process. PDF.it Pro's batch split feature lets you upload multiple files at once, configure split settings for each, and process them all simultaneously.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Split multiple PDFs simultaneously in one operation</li>
              <li>&#10003; Extract specific pages or split into individual pages</li>
              <li>&#10003; Files up to 200MB each with Pro, 1GB with Business</li>
              <li>&#10003; Per-file progress tracking and Download All as ZIP</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Split Invoices and Statements in Bulk</h2>
              <p className="text-slate-600">
                Financial teams often receive multi-page invoices or bank statements that need to be separated into individual documents. Batch split lets you process an entire folder of PDFs at once — extract each invoice or statement page and organize them for filing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Pages from Multiple Documents</h2>
              <p className="text-slate-600">
                Need the first page from 50 different contracts? Or pages 3-5 from a set of reports? Batch splitting lets you apply the same extraction rules to multiple files simultaneously, saving you from repetitive manual work.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Process Legal and Compliance Documents</h2>
              <p className="text-slate-600">
                Law firms and compliance teams regularly need to split large document packages into individual filings. Upload a batch of legal PDFs, split them by page ranges, and download organized results as a ZIP — all processed securely with files deleted after your session.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Batch Split PDFs</h2>
            <div className="space-y-4">
              {[
                "Open Split PDF and upload multiple files at once (Pro feature).",
                "Configure split settings — by page, by range, or into individual pages.",
                "Click Split All and download your results as a ZIP file.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
                { name: "Split PDF", href: "/split-pdf", desc: "Split single files" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix orientation" },
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
                { q: "How do I batch split multiple PDFs at once?", a: "With PDF.it Pro, upload multiple PDF files to the Split PDF tool simultaneously. Each file is processed in parallel — split into individual pages or custom page ranges — and you can download all results as a ZIP file." },
                { q: "How many PDFs can I split at once?", a: "Pro users can upload and split dozens of PDF files in a single batch operation. Each file can be up to 200MB with Pro, or up to 1GB with Business. There is no fixed file count limit for batch processing." },
                { q: "Is batch splitting available on the free plan?", a: "Free users can split one file at a time with files up to 25MB. Batch processing — splitting multiple files simultaneously — is a Pro feature available for $3.99/month." },
                { q: "Can I extract specific pages from multiple PDFs in a batch?", a: "Yes. With batch splitting, you can configure page ranges for each file. Extract specific pages, split into individual pages, or divide by custom ranges — all processed simultaneously." },
                { q: "How do I download the results of a batch split?", a: "After batch splitting, you can download individual results or use the Download All button to get everything as a single ZIP file. Each split file is clearly labeled for easy identification." },
                { q: "Does batch splitting affect PDF quality?", a: "No. Splitting PDFs does not alter the content. Each extracted page retains its original quality — text, images, formatting, and embedded fonts remain unchanged." },
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
