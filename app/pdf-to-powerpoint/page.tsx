import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF to PowerPoint Converter Online — Convert PDF to PPTX | PDF.it",
  description:
    "Convert PDF files to editable PowerPoint presentations with PDF.it. Turn static PDFs into slides you can edit, present, and share — fast and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a PDF to PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, click Convert, and download the editable PowerPoint file. The conversion preserves layout, text, and images." }
    },
    {
      "@type": "Question",
      "name": "Will the formatting be preserved?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserves text, images, and layout as closely as possible. Complex designs may need minor adjustments in PowerPoint." }
    },
    {
      "@type": "Question",
      "name": "Can I edit the slides after conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The output is a fully editable .pptx file you can open in PowerPoint, Google Slides, or Keynote." }
    },
    {
      "@type": "Question",
      "name": "Is PDF to PowerPoint free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to PowerPoint is a Pro feature. Free users can try other tools like PDF to JPG or PDF to PNG." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to PowerPoint on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, convert, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can convert?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function PDFToPowerPointPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Presentation className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF to PowerPoint Converter</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert PDF files to editable PowerPoint presentations. Turn static documents into slides you can customize, present, and share.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Editable Slides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Layout Preserved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Professional Quality</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to PowerPoint"
          outputFormat="PPTX"
          processingMessage="Converting your PDF to PowerPoint..."
          successMessage="Your PowerPoint presentation is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it to convert PDF files into editable PowerPoint presentations. Perfect for repurposing reports, proposals, and documents into slides you can present and customize.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert PDF pages to editable PowerPoint slides</li>
              <li>✓ Preserves text, images, and layout</li>
              <li>✓ Output works in PowerPoint, Google Slides, and Keynote</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — convert in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Turn Reports into Presentations</h2>
              <p className="text-slate-600">
                Convert PDF reports, proposals, and briefs into editable slides. Add your own formatting, animations, and speaker notes after conversion.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preserve Layout and Images</h2>
              <p className="text-slate-600">
                PDF.it keeps text, images, and page structure intact so your slides look professional from the start. Minor adjustments may be needed for complex designs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Works with Google Slides and Keynote</h2>
              <p className="text-slate-600">
                The .pptx output is compatible with Microsoft PowerPoint, Google Slides, Apple Keynote, and other presentation software.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to PowerPoint</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Convert PDF to PowerPoint.",
                "Download your editable .pptx file and open it in PowerPoint or Google Slides.",
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
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Edit text in Word" },
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract tables" },
                { name: "PowerPoint to PDF", href: "/powerpoint-to-pdf", desc: "Convert back to PDF" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size first" },
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
                { q: "How do I convert a PDF to PowerPoint?", a: "Upload your PDF to PDF.it, click Convert, and download the editable PowerPoint file. The conversion preserves layout, text, and images." },
                { q: "Will the formatting be preserved?", a: "PDF.it preserves text, images, and layout as closely as possible. Complex designs may need minor adjustments in PowerPoint." },
                { q: "Can I edit the slides after conversion?", a: "Yes. The output is a fully editable .pptx file you can open in PowerPoint, Google Slides, or Keynote." },
                { q: "Is PDF to PowerPoint free?", a: "PDF to PowerPoint is a Pro feature. Free users can try other tools like PDF to JPG or PDF to PNG." },
                { q: "Can I convert PDF to PowerPoint on my phone?", a: "Yes. PDF.it works in mobile browsers — upload, convert, and download on iPhone or Android." },
                { q: "What is the maximum file size I can convert?", a: "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." },
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
