import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeftRight, Zap, Shield, Download, Split, Merge } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reorder PDF Pages Online — Rearrange Pages in a PDF | PDF.it",
  description:
    "Rearrange pages in a PDF with PDF.it. Use Split and Merge to reorder pages in any sequence — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I reorder pages in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PDF.it's Split PDF tool to extract individual pages or groups, then use Merge PDF to recombine them in the order you want. Upload the pages in your desired sequence and download the reordered PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I move a specific page to a different position?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Split your PDF to extract the page you want to move, then merge all pages back together in the new order. For example, to move page 5 to the front, split out page 5, then merge it first followed by the remaining pages." }
    },
    {
      "@type": "Question",
      "name": "Can I rearrange PDF pages on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — split and merge your PDFs on iPhone or Android to rearrange pages in any order." }
    },
    {
      "@type": "Question",
      "name": "Do I need to install software to reorder PDF pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it runs entirely in your browser — no downloads, no installations. Just upload, split, merge, and download." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF for reordering?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "Can I reverse the page order of a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Split your PDF into individual pages, then upload them to Merge PDF in reverse order. PDF.it combines them in the sequence you choose." }
    }
  ]
}

export default function ReorderPDFPagesPage() {
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
                <ArrowLeftRight className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reorder PDF Pages</h1>
              <p className="text-xl text-slate-300 mb-8">
                Rearrange pages in any PDF by splitting and merging. Extract the pages you need, put them in the right order, and download a clean, reorganized document.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Any Page Order</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section — Split + Merge workflow */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Get Started</h2>
            <p className="text-slate-600 mb-8">Use these two tools together to reorder your PDF pages:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/split-pdf" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
                <Split className="h-5 w-5" /> Step 1: Split PDF
              </Link>
              <Link href="/merge-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                <Merge className="h-5 w-5" /> Step 2: Merge PDF
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Reordering PDF pages is easy with PDF.it. First, use the Split PDF tool to extract individual pages or page ranges from your document. Then, upload the extracted pages to the Merge PDF tool in your desired order. PDF.it combines them into a single, reorganized PDF — ready to download, print, or share.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Rearrange pages in any order you need</li>
              <li>✓ Move, swap, or reverse page sequences</li>
              <li>✓ No software installation required</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ Split and merge directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Fix Incorrect Page Order</h2>
              <p className="text-slate-600">
                Scanned documents, exported reports, and combined files sometimes end up with pages out of order. Use Split and Merge to quickly fix the sequence without editing the original content.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Rearrange Presentations and Proposals</h2>
              <p className="text-slate-600">
                Need to move a section to the beginning or reorganize chapters in a proposal? Split your PDF into sections, then merge them back in the new order for a polished final document.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organize Scanned Documents</h2>
              <p className="text-slate-600">
                Scanned pages often come through in the wrong order. Extract each page with Split PDF, then recombine them in the correct sequence using Merge PDF — no rescanning needed.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Reorder PDF Pages</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to PDF.it's Split PDF tool.",
                "Split the PDF into individual pages or page groups.",
                "Upload the extracted pages to the Merge PDF tool in your desired order.",
                "Click Merge PDFs and download your reordered document.",
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
                { name: "Split PDF", href: "/split-pdf", desc: "Extract pages from a PDF" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs into one" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
                { name: "Add Pages to PDF", href: "/add-page-to-pdf", desc: "Insert pages into a PDF" },
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
                  q: "How do I reorder pages in a PDF?",
                  a: "Use PDF.it's Split PDF tool to extract individual pages or groups, then use Merge PDF to recombine them in the order you want. Upload the pages in your desired sequence and download the reordered PDF.",
                },
                {
                  q: "Can I move a specific page to a different position?",
                  a: "Yes. Split your PDF to extract the page you want to move, then merge all pages back together in the new order. For example, to move page 5 to the front, split out page 5, then merge it first followed by the remaining pages.",
                },
                {
                  q: "Can I rearrange PDF pages on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — split and merge your PDFs on iPhone or Android to rearrange pages in any order.",
                },
                {
                  q: "Do I need to install software to reorder PDF pages?",
                  a: "No. PDF.it runs entirely in your browser — no downloads, no installations. Just upload, split, merge, and download.",
                },
                {
                  q: "Is it safe to upload my PDF for reordering?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "Can I reverse the page order of a PDF?",
                  a: "Yes. Split your PDF into individual pages, then upload them to Merge PDF in reverse order. PDF.it combines them in the sequence you choose.",
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
