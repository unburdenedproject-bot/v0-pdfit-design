import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UrlPdfInterface } from "@/components/url-pdf-interface"
import { Globe, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convert URL to PDF Online — Save Any Webpage as PDF | PDF.it",
  description:
    "Convert any webpage to a high-quality PDF. Enter a URL and download a perfectly formatted PDF. Supports custom page size, orientation, and margins. PDF.it Pro feature.",
}

export default function UrlToPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
                <Globe className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert URL to PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Save any webpage as a high-quality PDF. Enter a URL, customize the layout, and download a perfectly formatted document in seconds.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Any Public Webpage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Custom Layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Instant Download</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Web content changes or disappears all the time. Converting a webpage to PDF creates a permanent snapshot that preserves the text, images, and layout exactly as they appeared. Whether you're saving research, archiving important pages, or sharing content offline, a PDF ensures it's always available.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convert any public webpage to a formatted PDF</li>
              <li className="flex items-center gap-2">✓ Choose page size, orientation, and margins</li>
              <li className="flex items-center gap-2">✓ Preserves text, images, and page layout</li>
              <li className="flex items-center gap-2">✓ No installation — runs in your browser</li>
              <li className="flex items-center gap-2">✓ Perfect for offline reading, printing, and archiving</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <UrlPdfInterface />

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
                { title: "Save Articles and Research", desc: "Capture online articles, documentation, and blog posts as PDFs. Build a permanent research library you can search and reference — even when the original page goes offline." },
                { title: "Archive Webpages Permanently", desc: "Preserve important webpages before they change or get taken down. Create timestamped records of web content for compliance, evidence, or personal reference." },
                { title: "Share Content Offline", desc: "Convert webpages to PDF and share them with teammates or clients who may not have internet access. PDFs work on any device without a browser." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Convert URL to PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Enter the URL", desc: "Paste the webpage address you want to save" },
                { num: "2", title: "Choose settings", desc: "Pick page size, orientation, and margins" },
                { num: "3", title: "Download your PDF", desc: "Get a perfectly formatted document" },
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
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages to images" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scans" },
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
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How do I convert a URL to PDF?", a: "Paste the webpage URL into PDF.it, choose your page size, orientation, and margin settings, then click Convert. Your PDF will be ready to download in seconds." },
                { q: "Can I convert any website to PDF?", a: "You can convert most publicly accessible webpages. Pages that require login or have heavy JavaScript rendering may not convert perfectly. Static content pages convert best." },
                { q: "Will the PDF keep the original formatting?", a: "PDF.it captures the webpage layout, images, and text formatting as closely as possible. You can customize page size, orientation, and margins for the best result." },
                { q: "Is URL to PDF free?", a: "URL to PDF is a Pro feature available for $3.99/month. Pro accounts also include OCR, QR code generation, batch processing, and all other premium tools." },
                { q: "Can I save a webpage for offline reading?", a: "Yes. Converting a URL to PDF creates a permanent, offline copy of the webpage you can read anytime without an internet connection." },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How do I convert a URL to PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Paste the webpage URL into PDF.it, choose your page size, orientation, and margin settings, then click Convert. Your PDF will be ready to download in seconds." } },
            { "@type": "Question", "name": "Can I convert any website to PDF?", "acceptedAnswer": { "@type": "Answer", "text": "You can convert most publicly accessible webpages. Pages that require login or have heavy JavaScript rendering may not convert perfectly. Static content pages convert best." } },
            { "@type": "Question", "name": "Will the PDF keep the original formatting?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it captures the webpage layout, images, and text formatting as closely as possible. You can customize page size, orientation, and margins for the best result." } },
            { "@type": "Question", "name": "Is URL to PDF free?", "acceptedAnswer": { "@type": "Answer", "text": "URL to PDF is a Pro feature available for $3.99/month. Pro accounts also include OCR, QR code generation, batch processing, and all other premium tools." } },
            { "@type": "Question", "name": "Can I save a webpage for offline reading?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Converting a URL to PDF creates a permanent, offline copy of the webpage you can read anytime without an internet connection." } }
          ]
        })}} />
      </main>
      <Footer />
    </div>
  )
}
