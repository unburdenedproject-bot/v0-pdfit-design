import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Pages from PDF Online — Pull Specific Pages | PDF.it",
  description:
    "Extract specific pages from a PDF with PDF.it. Select page numbers or ranges, then download a new PDF with only the pages you need — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract specific pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, enter the page numbers or ranges you want (e.g., 1, 3, 5-10), then click Extract Pages. A new PDF with only the selected pages will be ready to download." }
    },
    {
      "@type": "Question",
      "name": "Can I extract a range of pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Enter a range like 5-15 and PDF.it will create a new PDF containing only those pages. You can also combine individual pages and ranges, like 1, 3, 7-12." }
    },
    {
      "@type": "Question",
      "name": "Does extracting pages change my original PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Your original PDF is never modified. PDF.it creates a brand-new PDF with only the pages you selected. The original stays exactly as it was." }
    },
    {
      "@type": "Question",
      "name": "Can I extract pages from a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload your PDF, select pages, and download the extracted PDF on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it free to extract pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free accounts can extract pages from PDFs up to 25MB with up to 10 conversions per day. Pro accounts get unlimited extractions and files up to 200MB." }
    },
    {
      "@type": "Question",
      "name": "Can I extract pages from a password-protected PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You'll need to unlock the PDF first. Use PDF.it's Unlock PDF tool to remove the password, then extract the pages you need." }
    }
  ]
}

export default function ExtractPagesFromPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Pages from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Pull specific pages from any PDF with PDF.it. Select page numbers or ranges, then download a new PDF with only the pages you need — fast, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Select Any Pages or Ranges</span></div>
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
              Need just a few pages from a long PDF? PDF.it lets you extract specific pages or page ranges into a brand-new PDF. Perfect for pulling chapters from a textbook, isolating pages from a contract, or creating a summary from a report.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extract individual pages or page ranges</li>
              <li>&#10003; Original PDF stays unchanged</li>
              <li>&#10003; Download a clean PDF with only the pages you selected</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — extract pages in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Chapters and Sections</h2>
              <p className="text-slate-600">
                Working with a long textbook, manual, or report? Extract only the chapters or sections you need into a separate PDF. Share specific parts with your team without sending the entire document.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remove Unwanted Pages</h2>
              <p className="text-slate-600">
                Extract only the pages you want to keep and leave the rest behind. This is the easiest way to remove cover pages, blank pages, or appendices from a PDF without editing the original.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Create Summaries and Highlights</h2>
              <p className="text-slate-600">
                Pull the most important pages from a long document to create a quick summary PDF. Great for presentations, executive briefings, or study materials.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Extract Pages from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Enter the page numbers or ranges you want to extract (e.g., 1, 3, 5-10).",
                "Click Split PDF to extract your selected pages.",
                "Download your new PDF with only the pages you chose.",
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
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
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
                  q: "How do I extract specific pages from a PDF?",
                  a: "Upload your PDF to PDF.it, enter the page numbers or ranges you want (e.g., 1, 3, 5-10), then click Extract Pages. A new PDF with only the selected pages will be ready to download.",
                },
                {
                  q: "Can I extract a range of pages from a PDF?",
                  a: "Yes. Enter a range like 5-15 and PDF.it will create a new PDF containing only those pages. You can also combine individual pages and ranges, like 1, 3, 7-12.",
                },
                {
                  q: "Does extracting pages change my original PDF?",
                  a: "No. Your original PDF is never modified. PDF.it creates a brand-new PDF with only the pages you selected. The original stays exactly as it was.",
                },
                {
                  q: "Can I extract pages from a PDF on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload your PDF, select pages, and download the extracted PDF on iPhone or Android.",
                },
                {
                  q: "Is it free to extract pages from a PDF?",
                  a: "Yes. Free accounts can extract pages from PDFs up to 25MB with up to 10 conversions per day. Pro accounts get unlimited extractions and files up to 200MB.",
                },
                {
                  q: "Can I extract pages from a password-protected PDF?",
                  a: "You'll need to unlock the PDF first. Use PDF.it's Unlock PDF tool to remove the password, then extract the pages you need.",
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
