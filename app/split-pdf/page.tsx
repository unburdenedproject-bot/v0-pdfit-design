import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Split PDF Online — Extract Pages from PDF | PDF.it",
  description:
    "Split a PDF into separate pages or smaller PDFs with PDF.it. Extract pages by range and download instantly—fast, simple, online.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I split a PDF into multiple files?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, choose the pages or ranges you want, then click Split PDF to download the new file(s)." }
    },
    {
      "@type": "Question",
      "name": "Can I extract only certain pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Select the page numbers or a page range and PDF.it will create a new PDF containing only those pages." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, select pages, split, and download." }
    },
    {
      "@type": "Question",
      "name": "Can I split password-protected PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "You'll need to unlock the PDF before splitting. Use our Unlock PDF tool first." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum PDF size I can split?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function SplitPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Split PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Split a PDF into smaller files with PDF.it. Extract specific pages, split by ranges, and download clean PDFs instantly.
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
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's Split PDF tool to extract pages from a PDF or break a large PDF into smaller files. Choose a page range, split by individual pages, and download the PDFs you need — perfect for sharing, uploading, and emailing.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Split PDF pages into separate files</li>
              <li>✓ Extract a page range (e.g., pages 3–7) into a new PDF</li>
              <li>✓ Create smaller PDFs for email, portals, and printing</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — split PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Pages From a PDF</h2>
              <p className="text-slate-600">
                Need only part of a document? PDF.it lets you pull out the pages you want and save them as a new PDF — great for forms, contracts, chapters, and statements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Split PDF Into Individual Pages</h2>
              <p className="text-slate-600">
                Turn one PDF into many PDFs — one file per page — so you can upload, share, or organize pages individually.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Split Large PDFs for Sharing and Uploading</h2>
              <p className="text-slate-600">
                Many email systems and portals limit upload size. Splitting helps you stay under limits and send only what's required.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Split a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Choose how to split: extract pages, page ranges, or individual pages.",
                "Click Split PDF.",
                "Download your new PDF file(s).",
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
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs after splitting" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size before splitting" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
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
                  q: "How do I split a PDF into multiple files?",
                  a: "Upload your PDF to PDF.it, choose the pages or ranges you want, then click Split PDF to download the new file(s).",
                },
                {
                  q: "Can I extract only certain pages from a PDF?",
                  a: "Yes. Select the page numbers or a page range and PDF.it will create a new PDF containing only those pages.",
                },
                {
                  q: "Can I split a PDF on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload, select pages, split, and download.",
                },
                {
                  q: "Can I split password-protected PDFs?",
                  a: "You'll need to unlock the PDF before splitting. Use our Unlock PDF tool first.",
                },
                {
                  q: "Is it safe to upload my PDF?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum PDF size I can split?",
                  a: "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB.",
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
