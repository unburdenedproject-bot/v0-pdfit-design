import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeftRight, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reorder PDF Online — Rearrange PDF Pages in Any Order | PDF.it",
  description:
    "Rearrange PDF pages in any order with PDF.it. Use Split and Merge tools to reorganize your document — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I reorder pages in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PDF.it's Split PDF tool to separate your document into individual pages, then use Merge PDF to combine them in your desired order. It's fast, free, and works entirely in your browser." }
    },
    {
      "@type": "Question",
      "name": "Can I drag and drop PDF pages to rearrange them?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it uses a split-and-merge workflow to reorder pages. Split your PDF into individual pages, then upload them to Merge PDF in the order you want. This gives you full control over page arrangement." }
    },
    {
      "@type": "Question",
      "name": "Will reordering pages affect the quality of my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting and merging PDFs with PDF.it preserves the original quality of your pages, including text, images, formatting, and embedded fonts." }
    },
    {
      "@type": "Question",
      "name": "Can I reorder pages in a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scanned PDFs work the same way — split the document into pages, then merge them back in the correct order. The scanned images remain unchanged." }
    },
    {
      "@type": "Question",
      "name": "Is there a page limit for reordering PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can process files up to 25MB. Pro users get files up to 200MB with batch processing for handling large documents with many pages." }
    },
    {
      "@type": "Question",
      "name": "Can I reorder PDF pages on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser on iPhone or Android. Split your PDF, then merge the pages in your preferred order — no app installation needed." }
    }
  ]
}

export default function ReorderPDFPage() {
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
                <ArrowLeftRight className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reorder PDF Pages Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Rearrange PDF pages in any order using PDF.it's Split and Merge tools. Fix page order mistakes, reorganize presentations, and sort scanned documents — fast, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>No Software Needed</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Free to Use</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Start Reordering Your PDF</h2>
            <p className="text-slate-600 mb-6">Use Split PDF to separate pages, then Merge PDF to combine them in any order you need.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/split-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Split PDF
              </Link>
              <Link href="/merge-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Merge PDF
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Need to rearrange pages in a PDF? PDF.it makes it simple with a two-step workflow: split your document into individual pages, then merge them back together in any order. No software to install, no account required.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Rearrange pages in any order you need</li>
              <li>&#10003; Preserves original quality — text, images, and formatting</li>
              <li>&#10003; Works with scanned PDFs and digital documents</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — reorder PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Fix Page Order Mistakes</h2>
              <p className="text-slate-600">
                Scanned a stack of papers in the wrong order? Received a PDF with pages out of sequence? Use PDF.it to split the document into individual pages, then merge them back in the correct order. No need to re-scan or ask the sender for a new copy.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reorganize Presentations and Reports</h2>
              <p className="text-slate-600">
                Restructure a slide deck or rearrange sections of a report by splitting the PDF and merging the pages in your new preferred order. Perfect for customizing presentations for different audiences or reordering chapters in a document.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Sort and Organize Scanned Documents</h2>
              <p className="text-slate-600">
                When scanning multiple documents at once, pages often end up out of order. Split the scanned PDF into individual pages, review them, and merge them back in the correct sequence. Works with any scanned document — receipts, contracts, forms, or certificates.
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
                "Use Split PDF to separate your document into individual pages.",
                "Upload the pages to Merge PDF in your desired order.",
                "Download your reordered PDF — ready to share or submit.",
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
                { name: "Split PDF", href: "/split-pdf", desc: "Separate pages" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine pages" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
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
                { q: "How do I reorder pages in a PDF?", a: "Use PDF.it's Split PDF tool to separate your document into individual pages, then use Merge PDF to combine them in your desired order. It's fast, free, and works entirely in your browser." },
                { q: "Can I drag and drop PDF pages to rearrange them?", a: "PDF.it uses a split-and-merge workflow to reorder pages. Split your PDF into individual pages, then upload them to Merge PDF in the order you want. This gives you full control over page arrangement." },
                { q: "Will reordering pages affect the quality of my PDF?", a: "No. Splitting and merging PDFs with PDF.it preserves the original quality of your pages, including text, images, formatting, and embedded fonts." },
                { q: "Can I reorder pages in a scanned PDF?", a: "Yes. Scanned PDFs work the same way — split the document into pages, then merge them back in the correct order. The scanned images remain unchanged." },
                { q: "Is there a page limit for reordering PDFs?", a: "Free users can process files up to 25MB. Pro users get files up to 200MB with batch processing for handling large documents with many pages." },
                { q: "Can I reorder PDF pages on my phone?", a: "Yes. PDF.it works in any mobile browser on iPhone or Android. Split your PDF, then merge the pages in your preferred order — no app installation needed." },
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
