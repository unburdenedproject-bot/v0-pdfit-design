import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combine PDF Files Online — Merge Multiple PDFs Into One | PDF.it",
  description:
    "Combine multiple PDF files into one document with PDF.it. Upload your PDFs, arrange them in order, and download a single combined file — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I combine PDF files online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF files to PDF.it, arrange them in your preferred order, and click Combine. Your merged PDF will be ready to download in seconds — no software installation needed." }
    },
    {
      "@type": "Question",
      "name": "Is there a limit to how many PDFs I can combine?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can combine files one at a time. Pro users get batch processing to combine multiple PDFs at once, with files up to 200MB each." }
    },
    {
      "@type": "Question",
      "name": "Can I control the order of combined PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After uploading your files, you can drag and drop them into any order before combining. The final PDF follows the exact sequence you set." }
    },
    {
      "@type": "Question",
      "name": "Will combining PDFs reduce the quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it combines your PDFs without re-compressing or altering the content. Every page retains its original quality, fonts, and formatting." }
    },
    {
      "@type": "Question",
      "name": "Can I combine PDFs on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser — upload your PDFs, combine them, and download the result on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account to combine PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "No account is needed for basic use. Free users get up to 3 anonymous conversions per day, then a free account unlocks up to 10 conversions daily." }
    }
  ]
}

export default function CombinePDFFilesPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combine PDF Files Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine multiple PDF files into one document. Upload your PDFs, arrange them in order, and download a single combined file — fast, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Combining</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Combining your PDF files..."
          successMessage="Your combined PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Need to combine multiple PDF files into one? PDF.it makes it simple. Upload your documents, arrange them in the right order, and download a single combined PDF — perfect for reports, applications, project submissions, and more.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Combine any number of PDF files into one document</li>
              <li>✓ Drag and drop to arrange page order</li>
              <li>✓ No quality loss — original formatting preserved</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — combine PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Reports and Proposals</h2>
              <p className="text-slate-600">
                Assembling a client proposal or quarterly report from multiple files? Upload each section as a separate PDF, arrange them in order, and combine into one polished document ready for sharing or printing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Merge Application Documents</h2>
              <p className="text-slate-600">
                College applications, visa forms, and job applications often require a single PDF with multiple documents. Combine your resume, cover letter, transcripts, and references into one file that meets submission requirements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine and Compress in One Workflow</h2>
              <p className="text-slate-600">
                After combining your PDFs, the resulting file may be too large for email or upload portals. Use PDF.it's Compress PDF tool to reduce the combined file size without losing quality.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Combine PDF Files Online</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF files into PDF.it.",
                "Arrange the files in your preferred order.",
                "Click Combine and download your single merged PDF.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Merge PDF", href: "/merge-pdf", desc: "Standard PDF merge" },
                { name: "Split PDF", href: "/split-pdf", desc: "Extract or split pages" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
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
                { q: "How do I combine PDF files online?", a: "Upload your PDF files to PDF.it, arrange them in your preferred order, and click Combine. Your merged PDF will be ready to download in seconds — no software installation needed." },
                { q: "Is there a limit to how many PDFs I can combine?", a: "Free users can combine files one at a time. Pro users get batch processing to combine multiple PDFs at once, with files up to 200MB each." },
                { q: "Can I control the order of combined PDFs?", a: "Yes. After uploading your files, you can drag and drop them into any order before combining. The final PDF follows the exact sequence you set." },
                { q: "Will combining PDFs reduce the quality?", a: "No. PDF.it combines your PDFs without re-compressing or altering the content. Every page retains its original quality, fonts, and formatting." },
                { q: "Can I combine PDFs on my phone?", a: "Yes. PDF.it works in any mobile browser — upload your PDFs, combine them, and download the result on iPhone or Android." },
                { q: "Do I need to create an account to combine PDFs?", a: "No account is needed for basic use. Free users get up to 3 anonymous conversions per day, then a free account unlocks up to 10 conversions daily." },
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
