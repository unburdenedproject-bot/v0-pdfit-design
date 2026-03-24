import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Fonts from PDF — Identify Fonts Used in PDFs | PDF.it",
  description:
    "Learn how to identify and extract fonts used in PDF documents. PDF.it helps you work with PDF content including text extraction and document conversion.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I extract fonts directly from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs embed font data for rendering, but extracting usable font files requires specialized tools. You can identify which fonts are used by examining PDF properties or converting the PDF to an editable format like Word, which preserves font names." }
    },
    {
      "@type": "Question",
      "name": "Is it legal to extract fonts from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Font licensing varies. Most commercial fonts are licensed per user or per device. Extracting and reusing embedded fonts without a proper license may violate the font's EULA. Always check the font license before reusing extracted fonts." }
    },
    {
      "@type": "Question",
      "name": "How can I identify which fonts are used in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can check PDF properties in most readers (File > Properties > Fonts), convert the PDF to Word to see font names in the editor, or extract the text and compare it visually using font identification services like WhatTheFont or Font Squirrel." }
    },
    {
      "@type": "Question",
      "name": "What happens to fonts when I convert a PDF to Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "When you convert a PDF to Word, the converter identifies the fonts used and references them in the Word document. If the font is installed on your system, it displays correctly. If not, Word substitutes a similar font." }
    },
    {
      "@type": "Question",
      "name": "Can I extract fonts from a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs contain images, not text or font data. You would first need to run OCR to extract the text, then use a visual font identification tool to match the typeface used in the scanned document." }
    },
    {
      "@type": "Question",
      "name": "What are embedded fonts in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Embedded fonts are font files included within a PDF so the document displays correctly on any device, even if the reader doesn't have the font installed. Most professional PDFs embed fonts to ensure consistent rendering." }
    }
  ]
}

export default function ExtractFontsFromPDFPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <Type className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Fonts from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Learn how to identify and extract fonts used in PDF documents. Discover which typefaces are embedded in any PDF and find ways to reuse them in your own projects.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Identify Any Font</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Privacy-First Processing</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Software Install</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Work with PDF Text Content</h2>
            <p className="text-slate-600 mb-6">While direct font extraction is coming soon, you can extract text content or convert PDFs to editable formats to identify and reuse text styling.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pdf-to-txt" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">Extract Text (Free)</Link>
              <Link href="/pdf-to-word" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">PDF to Word (Pro)</Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Fonts are a critical part of any PDF's visual identity. Whether you're trying to match a brand's typography, recreate a document layout, or simply identify what font was used, understanding how fonts are embedded in PDFs is the first step.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Identify fonts embedded in any PDF document</li>
              <li>✓ Convert PDFs to Word to reveal font names and styling</li>
              <li>✓ Extract text content for visual font matching</li>
              <li>✓ Works with any PDF — reports, brochures, books, and more</li>
              <li>✓ No installation — use PDF.it tools directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Why People Extract Fonts from PDFs</h2>
              <p className="text-slate-600">
                Designers need to match typography across projects. Marketers want to maintain brand consistency. Developers need to identify fonts for web projects. Whatever your reason, identifying the fonts in a PDF is a common workflow that starts with understanding how fonts are embedded in the document format.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">How to Identify Fonts in a PDF</h2>
              <p className="text-slate-600">
                The fastest way to identify fonts is to convert your PDF to Word using PDF.it. The converted document preserves font names, so you can select any text and see the typeface in the font menu. Alternatively, extract the text and use a visual font identification service like WhatTheFont or Font Squirrel Matcherator.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Font Licensing and Legal Considerations</h2>
              <p className="text-slate-600">
                Just because a font is embedded in a PDF doesn't mean you can freely use it. Most commercial fonts require a license for each use case — desktop, web, app, or server. Always verify the font's license terms before using it in your own projects. Many excellent free alternatives exist on Google Fonts and Font Squirrel.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Identify Fonts in a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to PDF.it and convert it to Word format.",
                "Open the Word document and select any text to see the font name.",
                "Search for the font online to find licensing options or free alternatives.",
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract text content" },
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Editable with font names" },
                { name: "Extract Text", href: "/extract-text-from-pdf", desc: "Pull all text from PDFs" },
                { name: "Extract Images", href: "/extract-images-from-pdf", desc: "Get embedded images" },
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
                { q: "Can I extract fonts directly from a PDF?", a: "PDFs embed font data for rendering, but extracting usable font files requires specialized tools. You can identify which fonts are used by examining PDF properties or converting the PDF to an editable format like Word, which preserves font names." },
                { q: "Is it legal to extract fonts from a PDF?", a: "Font licensing varies. Most commercial fonts are licensed per user or per device. Extracting and reusing embedded fonts without a proper license may violate the font's EULA. Always check the font license before reusing extracted fonts." },
                { q: "How can I identify which fonts are used in a PDF?", a: "You can check PDF properties in most readers (File > Properties > Fonts), convert the PDF to Word to see font names in the editor, or extract the text and compare it visually using font identification services like WhatTheFont or Font Squirrel." },
                { q: "What happens to fonts when I convert a PDF to Word?", a: "When you convert a PDF to Word, the converter identifies the fonts used and references them in the Word document. If the font is installed on your system, it displays correctly. If not, Word substitutes a similar font." },
                { q: "Can I extract fonts from a scanned PDF?", a: "Scanned PDFs contain images, not text or font data. You would first need to run OCR to extract the text, then use a visual font identification tool to match the typeface used in the scanned document." },
                { q: "What are embedded fonts in a PDF?", a: "Embedded fonts are font files included within a PDF so the document displays correctly on any device, even if the reader doesn't have the font installed. Most professional PDFs embed fonts to ensure consistent rendering." },
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
