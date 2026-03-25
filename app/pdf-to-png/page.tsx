import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileImage, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF to PNG Converter — Free & No Login Required | PDF.it",
  description:
    "Convert PDF to PNG in seconds with PDF.it. Export each page as a high-quality PNG image—great for sharp text, graphics, and transparency.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert a multi-page PDF to PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it converts each PDF page into its own PNG image so you can download pages individually." }
    },
    {
      "@type": "Question",
      "name": "Why should I use PNG instead of JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG is better for sharp text, charts, and graphics because it doesn't use aggressive compression. JPG is usually smaller and better for photo-heavy pages." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to PNG on iPhone or Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, convert, and download your PNG images." }
    },
    {
      "@type": "Question",
      "name": "Why do my PNG files look blurry?",
      "acceptedAnswer": { "@type": "Answer", "text": "Blurry PNGs usually come from a low-quality source PDF, especially scanned documents. Try our OCR Scanner for scanned PDFs." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session." }
    }
  ]
}

export default function PDFToPNGPage() {
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
                <FileImage className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to PNG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert a PDF into high-quality PNG images — perfect for sharp text, screenshots, design assets, and clean page exports.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>High Resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Files Deleted After Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>No Login Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to PNG"
          outputFormat="PNG"
          processingMessage="Converting your PDF to PNG images..."
          successMessage="Your PNG images are ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's PDF to PNG converter to export PDF pages as PNG images — fast. PNG is ideal when you need crisp text, clean graphics, and consistent quality for presentations, documents, and web use. Upload your PDF, convert, and download your PNGs instantly.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert PDF to PNG with sharp, readable results</li>
              <li>✓ Great for text-heavy pages, charts, and line art</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — runs in your browser</li>
              <li>✓ Easy downloads for single pages or full documents</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convert PDF Pages to PNG Images</h2>
              <p className="text-slate-600">
                Turn every page of a PDF into a separate PNG file. Each page becomes an image you can drop into slides, emails, docs, design tools, or websites.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Why Choose PNG Instead of JPG?</h2>
              <p className="text-slate-600">
                PNG produces cleaner text and graphics than JPG because it avoids heavy compression artifacts. If you need smaller file sizes, try our PDF to JPG tool instead.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">High-Quality Output for Design and Sharing</h2>
              <p className="text-slate-600">
                PNG exports are great for diagrams, UI mockups, receipts, forms, and any PDF where clarity matters.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Works Anywhere — Desktop and Mobile</h2>
              <p className="text-slate-600">
                Convert PDF to PNG online from any modern browser. No apps, no downloads, no complicated steps.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to PNG</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Upload your PDF", desc: "Drag and drop or click to choose a file" },
                { num: "2", title: "Click Convert", desc: "Processing usually takes a few seconds" },
                { num: "3", title: "Download your PNGs", desc: "Get all pages in a single ZIP file" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
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
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Smaller file sizes" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size before converting" },
                { name: "Split PDF", href: "/split-pdf", desc: "Convert only the pages you need" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I convert a multi-page PDF to PNG?", a: "Yes. PDF.it converts each PDF page into its own PNG image so you can download pages individually." },
                { q: "Why should I use PNG instead of JPG?", a: "PNG is better for sharp text, charts, and graphics because it doesn't use aggressive compression. JPG is usually smaller and better for photo-heavy pages." },
                { q: "Can I convert PDF to PNG on iPhone or Android?", a: "Yes. PDF.it works in mobile browsers — upload, convert, and download your PNG images." },
                { q: "Why do my PNG files look blurry?", a: "Blurry PNGs usually come from a low-quality source PDF, especially scanned documents. Try our OCR Scanner for scanned PDFs." },
                { q: "Is it safe to upload my PDF?", a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
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
