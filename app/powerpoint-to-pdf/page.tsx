import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PowerPoint to PDF Converter — Fast & No Login Required | OmnisPDF",
  description:
    "Convert PPT to PDF in seconds with OmnisPDF. Turn PPT/PPTX slides into a clean, shareable PDF—fast, simple, browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can OmnisPDF convert both PPT and PPTX to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF supports both .ppt and .pptx file formats." }
    },
    {
      "@type": "Question",
      "name": "Will the PDF keep my slide layout and design?",
      "acceptedAnswer": { "@type": "Answer", "text": "In most cases, yes. Very complex slides, uncommon fonts, or special effects can sometimes render slightly differently depending on the source file." }
    },
    {
      "@type": "Question",
      "name": "Do animations and transitions carry over to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. A PDF is a static format, so animations and transitions won't play — slides are exported as still pages." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PowerPoint to PDF on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in mobile browsers — upload your presentation and download the PDF." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PowerPoint file?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can convert?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function PowerPointToPDFPage() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Presentation className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PPT to PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert PPT/PPTX to PDF with OmnisPDF — ideal for sharing slides, sending decks by email, and printing handouts.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Slides Preserved</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>PPT & PPTX Supported</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".ppt,.pptx"
          toolName="PowerPoint to PDF"
          outputFormat="PDF"
          processingMessage="Converting your presentation..."
          successMessage="Your PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use OmnisPDF's PPT to PDF converter to turn a PowerPoint (PPT/PPTX) into a PDF in seconds. Export slides into a format that's easy to view anywhere — perfect for email, printing, and uploading to portals.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert PowerPoint to PDF online in seconds</li>
              <li>✓ Supports .ppt and .pptx files</li>
              <li>✓ Creates shareable, presentation-ready PDFs</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — runs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convert PPTX Slides to a Shareable PDF</h2>
              <p className="text-slate-600">
                PDFs open consistently across devices and don't require PowerPoint. Convert your deck to PDF so anyone can view it in a browser or PDF reader.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Great for Printing and Handouts</h2>
              <p className="text-slate-600">
                Need a printable version of your slides? Convert PPT to PDF for fast printing, review copies, or class and work submissions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Keep Slide Layout Clean</h2>
              <p className="text-slate-600">
                OmnisPDF converts slides into PDF pages so your text, images, and charts remain easy to read and share. Note: animations and transitions become static in PDF format.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert PPT to PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PPT/PPTX file into OmnisPDF.",
                "Click Convert PPT to PDF.",
                "Download your PDF.",
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
                { name: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word docs to PDF" },
                { name: "Excel to PDF", href: "/excel-to-pdf", desc: "Convert spreadsheets to PDF" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce your PDF size" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs" },
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
                {
                  q: "Can OmnisPDF convert both PPT and PPTX to PDF?",
                  a: "Yes. OmnisPDF supports both .ppt and .pptx file formats.",
                },
                {
                  q: "Will the PDF keep my slide layout and design?",
                  a: "In most cases, yes. Very complex slides, uncommon fonts, or special effects can sometimes render slightly differently depending on the source file.",
                },
                {
                  q: "Do animations and transitions carry over to PDF?",
                  a: "No. A PDF is a static format, so animations and transitions won't play — slides are exported as still pages.",
                },
                {
                  q: "Can I convert PowerPoint to PDF on mobile?",
                  a: "Yes. OmnisPDF works in mobile browsers — upload your presentation and download the PDF.",
                },
                {
                  q: "Is it safe to upload my PowerPoint file?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can convert?",
                  a: "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB.",
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
