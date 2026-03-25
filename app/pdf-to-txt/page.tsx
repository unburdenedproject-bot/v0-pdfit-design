import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF to TXT Converter — Free & No Login Required | PDF.it",
  description:
    "Convert PDF to TXT in seconds with PDF.it. Extract plain text from PDFs online for copying, editing, and sharing—no installs.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert any PDF to a TXT file?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most text-based PDFs convert cleanly. If your PDF is scanned (image-only), you'll need OCR to extract text." }
    },
    {
      "@type": "Question",
      "name": "Does PDF.it keep the formatting from the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "TXT is plain text, so formatting like fonts, columns, and spacing may not carry over. If you need layout preserved, use a PDF to Word tool instead." }
    },
    {
      "@type": "Question",
      "name": "Why does my converted text look messy or out of order?",
      "acceptedAnswer": { "@type": "Answer", "text": "Some PDFs store text in columns or positioned blocks. TXT export follows the PDF's internal structure, which may reorder lines." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to TXT on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open PDF.it in your mobile browser, upload the PDF, convert, and download the TXT file." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session." }
    }
  ]
}

export default function PDFToTXTPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Type className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to TXT Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extract clean, editable text from any PDF. Convert to a plain .txt file for quick copying, notes, and editing.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Pure Text Output</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Files Deleted After Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>No Login Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use PDF.it's PDF to TXT converter to turn a PDF into a plain text (.txt) file in seconds. Perfect for copying content into notes, docs, emails, or AI tools—without retyping. Upload your PDF, convert, and download the extracted text instantly.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convert PDF to TXT for fast copying and editing</li>
              <li className="flex items-center gap-2">✓ Extract text from reports, articles, invoices, and forms</li>
              <li className="flex items-center gap-2">✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li className="flex items-center gap-2">✓ No software install — browser-based</li>
              <li className="flex items-center gap-2">✓ Great for searching, quoting, and repurposing content</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to TXT"
          outputFormat="TXT"
          processingMessage="Extracting text from your PDF..."
          successMessage="Your text file is ready!"
        />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Extract Text from PDF to TXT", desc: "Convert PDF pages into a clean text file you can edit anywhere. PDF.it exports your content as plain text, making it easy to paste into Word, Google Docs, Notion, email, or code editors." },
                { title: "Clean, Copyable Output", desc: "TXT output is ideal when you want the words without the formatting. It's also lightweight and compatible with every device and app." },
                { title: "Fast Online Conversion on Any Device", desc: "Convert PDF to text from any modern browser—desktop or mobile—without downloads or installations." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to TXT</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Upload your PDF", desc: "Drag and drop or click to choose a file" },
                { num: "2", title: "Click Convert", desc: "Processing usually takes a few seconds" },
                { num: "3", title: "Download your TXT", desc: "Get your plain text file instantly" },
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
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert with formatting preserved" },
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Extract pages as images" },
                { name: "Split PDF", href: "/split-pdf", desc: "Convert only the pages you need" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Can I convert any PDF to a TXT file?</h3>
                <p className="text-slate-600 leading-relaxed">Most text-based PDFs convert cleanly. If your PDF is scanned (image-only), you'll need OCR to extract text.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Does PDF.it keep the formatting from the PDF?</h3>
                <p className="text-slate-600 leading-relaxed">TXT is plain text, so formatting like fonts, columns, and spacing may not carry over. If you need layout preserved, use a PDF to Word tool instead.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Why does my converted text look messy or out of order?</h3>
                <p className="text-slate-600 leading-relaxed">Some PDFs store text in columns or positioned blocks. TXT export follows the PDF's internal structure, which may reorder lines.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Can I convert PDF to TXT on mobile?</h3>
                <p className="text-slate-600 leading-relaxed">Yes. Open PDF.it in your mobile browser, upload the PDF, convert, and download the TXT file.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Is it safe to upload my PDF?</h3>
                <p className="text-slate-600 leading-relaxed">Yes. All transfers are SSL encrypted and your files are deleted immediately after your session.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
