import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF to JPG Converter — PDF.it",
  description: "Convert PDF to JPG in seconds with PDF.it. Export every page as a high-quality JPEG image and download instantly—no installs or software needed.",
}

export default function PDFToJPGPage() {
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
                <ImageIcon className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to JPG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert a PDF into crisp JPG images in seconds with PDF.it—fast, simple, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>High Resolution Output</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>All Pages Converted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>ZIP Download</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Convert your PDF into high-quality JPG (JPEG) images with PDF.it. Upload a file, convert in seconds, and download each page as a separate image—perfect for sharing, slides, previews, and email.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convert entire PDF pages into JPG images</li>
              <li className="flex items-center gap-2">✓ Sharp, readable output for text, charts, and diagrams</li>
              <li className="flex items-center gap-2">✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li className="flex items-center gap-2">✓ No installation — runs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to JPG"
          outputFormat="JPG"
          processingMessage="Converting your PDF to images..."
          successMessage="Your images are ready!"
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
                { title: "Convert PDF Pages to JPG", desc: "Turn every page of your PDF into a JPG image. Each page becomes its own file, so it's easy to use individual pages anywhere." },
                { title: "Keep Layouts Clean and Clear", desc: "PDF.it preserves the page layout so your content stays readable and professional-looking after conversion." },
                { title: "Download Instantly", desc: "Download JPGs right away after conversion. All pages are bundled into a ZIP file for easy downloading in one click." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to JPG</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Upload your PDF", desc: "Drag and drop or click to choose a file" },
                { num: "2", title: "Click Convert", desc: "Processing usually takes a few seconds" },
                { num: "3", title: "Download your JPGs", desc: "Get all pages in a single ZIP file" },
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
                { name: "PDF to PNG", href: "/pdf-to-png", desc: "Lossless image output" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size before converting" },
                { name: "Split PDF", href: "/split-pdf", desc: "Convert only the pages you need" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
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
                { q: "Can I convert a multi-page PDF to JPG?", a: "Yes. PDF.it converts each PDF page into its own JPG image so you can download pages individually." },
                { q: "Can I convert just one page of a PDF to JPG?", a: "Yes. Convert the PDF, then download only the page JPG you need from the ZIP file." },
                { q: "Will converting PDF to JPG reduce quality?", a: "The output quality depends on the source PDF. High-resolution PDFs produce crisp JPGs; low-resolution scans may look softer." },
                { q: "Does PDF.it work on Mac, Windows, iPhone, and Android?", a: "Yes. PDF.it runs in your browser, so it works across modern devices and operating systems." },
                { q: "What's the difference between JPG and PNG for PDF pages?", a: "JPG usually creates smaller files and is great for sharing. PNG can be better for very sharp text and graphics." },
                { q: "Why do my JPG pages look blurry?", a: "Blurriness usually comes from a low-resolution scanned PDF or small text in the original file." },
                { q: "Is it safe to upload my PDF?", a: "Yes. Files are transferred over HTTPS and automatically deleted after your session. We never store or share your documents." },
                { q: "Do you add watermarks?", a: "No. PDF.it does not add watermarks to your converted JPG files." },
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
            { "@type": "Question", "name": "Can I convert a multi-page PDF to JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it converts each PDF page into its own JPG image so you can download pages individually." } },
            { "@type": "Question", "name": "Can I convert just one page of a PDF to JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Convert the PDF, then download only the page JPG you need from the ZIP file." } },
            { "@type": "Question", "name": "Will converting PDF to JPG reduce quality?", "acceptedAnswer": { "@type": "Answer", "text": "The output quality depends on the source PDF. High-resolution PDFs produce crisp JPGs; low-resolution scans may look softer." } },
            { "@type": "Question", "name": "Does PDF.it work on Mac, Windows, iPhone, and Android?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it runs in your browser, so it works across modern devices and operating systems." } },
            { "@type": "Question", "name": "What's the difference between JPG and PNG for PDF pages?", "acceptedAnswer": { "@type": "Answer", "text": "JPG usually creates smaller files and is great for sharing. PNG can be better for very sharp text and graphics." } },
            { "@type": "Question", "name": "Why do my JPG pages look blurry?", "acceptedAnswer": { "@type": "Answer", "text": "Blurriness usually comes from a low-resolution scanned PDF or small text in the original file." } },
            { "@type": "Question", "name": "Is it safe to upload my PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Files are transferred over HTTPS and automatically deleted after your session. We never store or share your documents." } },
            { "@type": "Question", "name": "Do you add watermarks?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it does not add watermarks to your converted JPG files." } }
          ]
        })}} />
      </main>
      <Footer />
    </div>
  )
}
