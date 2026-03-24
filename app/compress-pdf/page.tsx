import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF Online — Reduce PDF File Size | PDF.it",
  description:
    "Compress PDF files with PDF.it to reduce file size fast. Shrink PDFs for email and uploads while keeping text readable—no installs needed.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF with PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF, click Compress PDF, then download the smaller file." }
    },
    {
      "@type": "Question",
      "name": "Will compressing a PDF reduce quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Compression can reduce file size by optimizing images and data. Text usually remains readable, but image-heavy PDFs may lose some detail depending on compression level." }
    },
    {
      "@type": "Question",
      "name": "Why is my PDF still large after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the PDF is already optimized or contains high-resolution images, the size may not drop much. Try splitting the PDF into smaller parts." }
    },
    {
      "@type": "Question",
      "name": "Can PDF.it compress scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — scanned PDFs are often the best candidates for compression because they contain large embedded images." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, compress, and download directly on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum PDF size I can compress?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB. Pro and Business accounts can upload up to 200MB." }
    }
  ]
}

export default function CompressPDFPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduce PDF file size with PDF.it. Compress PDFs for faster sharing, easier uploads, and smaller email attachments — quick and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Smart Compression</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF..."
          successMessage="Your compressed PDF is ready!"
          showCompressionSelector
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's Compress PDF tool to reduce PDF file size in seconds. Perfect for email attachments, upload limits, and faster sharing — upload your PDF, compress it, and download a smaller file instantly.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Reduce PDF size quickly for email and uploads</li>
              <li>✓ Keep PDFs readable and shareable after compression</li>
              <li>✓ Great for scanned PDFs, image-heavy files, and long documents</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — compress PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reduce PDF File Size for Email and Upload Limits</h2>
              <p className="text-slate-600">
                Many services cap attachment sizes. PDF.it helps shrink PDFs so they're easier to send and upload without splitting.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compress Image-Heavy and Scanned PDFs</h2>
              <p className="text-slate-600">
                Scans and photo-based PDFs can be huge. PDF compression reduces image data to create a smaller file while keeping pages usable.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Fast Online PDF Compression</h2>
              <p className="text-slate-600">
                Upload, compress, download. No software required — PDF.it runs directly in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Choose your compression level: Light (best quality), Medium (balanced), or Extreme (maximum reduction).",
                "Click Compress PDF and download your smaller file.",
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
                { name: "Split PDF", href: "/split-pdf", desc: "Split if still too large" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine after compressing" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Secure after compressing" },
                { name: "Watermark PDF", href: "/watermark-pdf", desc: "Brand after compressing" },
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
                  q: "How do I compress a PDF with PDF.it?",
                  a: "Upload your PDF, click Compress PDF, then download the smaller file.",
                },
                {
                  q: "Will compressing a PDF reduce quality?",
                  a: "Compression can reduce file size by optimizing images and data. Text usually remains readable, but image-heavy PDFs may lose some detail depending on compression level.",
                },
                {
                  q: "Why is my PDF still large after compression?",
                  a: "If the PDF is already optimized or contains high-resolution images, the size may not drop much. Try splitting the PDF into smaller parts.",
                },
                {
                  q: "Can PDF.it compress scanned PDFs?",
                  a: "Yes — scanned PDFs are often the best candidates for compression because they contain large embedded images.",
                },
                {
                  q: "Can I compress a PDF on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload, compress, and download directly on iPhone or Android.",
                },
                {
                  q: "What is the maximum PDF size I can compress?",
                  a: "Free accounts can upload files up to 25MB. Pro and Business accounts can upload up to 200MB.",
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
