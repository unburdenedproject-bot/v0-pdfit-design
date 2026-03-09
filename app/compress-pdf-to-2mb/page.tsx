import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF to 2MB Online — Free PDF Size Reducer | OmnisPDF",
  description:
    "Compress PDF files to under 2MB with OmnisPDF. Shrink PDFs for strict upload limits, forms, and applications — fast, browser-based, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF to 2MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF, click Compress, and download the reduced file. OmnisPDF uses extreme compression to get your file as small as possible." }
    },
    {
      "@type": "Question",
      "name": "Can I guarantee my PDF will be under 2MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF applies maximum compression. Most PDFs under 10MB will compress to under 2MB. Very large or image-heavy files may need to be split first." }
    },
    {
      "@type": "Question",
      "name": "Will the quality be affected by compressing to 2MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Text remains sharp and fully readable. Images may be slightly reduced in quality, but pages stay clear and usable for most purposes." }
    },
    {
      "@type": "Question",
      "name": "What types of portals require a 2MB PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Many government forms, visa applications, exam submissions, and HR portals require PDFs under 2MB. OmnisPDF helps you meet these strict requirements." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF to 2MB on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in mobile browsers — upload, compress, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still over 2MB after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try splitting the PDF into smaller sections using OmnisPDF's Split PDF tool, then compress each part separately." }
    }
  ]
}

export default function CompressPDFTo2MBPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF to 2MB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Shrink your PDF to under 2MB for strict upload limits. Maximum compression for government forms, visa applications, and exam submissions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Maximum Compression</span></div>
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
          processingMessage="Compressing your PDF to under 2MB..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Many official portals require PDFs under 2MB — visa applications, government forms, exam uploads, and HR systems. OmnisPDF applies extreme compression to shrink your PDF as much as possible so it meets the strictest size limits.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extreme compression to shrink PDFs under 2MB</li>
              <li>✓ Perfect for visa, government, and exam portals</li>
              <li>✓ Text stays sharp and readable</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — compress PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Meet Strict 2MB Upload Requirements</h2>
              <p className="text-slate-600">
                Government portals, visa applications, and exam systems often enforce a hard 2MB limit. OmnisPDF's extreme compression mode aggressively reduces file size to help you submit without issues.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compress Scanned IDs and Documents</h2>
              <p className="text-slate-600">
                Scanned identity documents, certificates, and forms often exceed 2MB. OmnisPDF reduces embedded image sizes while keeping text legible for official submissions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Still Too Large? Split Then Compress</h2>
              <p className="text-slate-600">
                If your PDF is still over 2MB after compression, use OmnisPDF's Split PDF tool to break it into individual pages, then compress each one separately.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF to 2MB</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into OmnisPDF.",
                "Click Compress PDF — extreme compression is applied automatically.",
                "Download your smaller PDF and upload it to your portal.",
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
                { name: "Compress to 5MB", href: "/compress-pdf-to-5mb", desc: "Larger size target" },
                { name: "Compress for Email", href: "/compress-pdf-for-email", desc: "Email-ready PDFs" },
                { name: "Split PDF", href: "/split-pdf", desc: "Split if still too large" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Standard compression" },
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
                { q: "How do I compress a PDF to 2MB?", a: "Upload your PDF to OmnisPDF, click Compress, and download the reduced file. OmnisPDF uses extreme compression to get your file as small as possible." },
                { q: "Can I guarantee my PDF will be under 2MB?", a: "OmnisPDF applies maximum compression. Most PDFs under 10MB will compress to under 2MB. Very large or image-heavy files may need to be split first." },
                { q: "Will the quality be affected by compressing to 2MB?", a: "Text remains sharp and fully readable. Images may be slightly reduced in quality, but pages stay clear and usable for most purposes." },
                { q: "What types of portals require a 2MB PDF?", a: "Many government forms, visa applications, exam submissions, and HR portals require PDFs under 2MB. OmnisPDF helps you meet these strict requirements." },
                { q: "Can I compress a PDF to 2MB on my phone?", a: "Yes. OmnisPDF works in mobile browsers — upload, compress, and download on iPhone or Android." },
                { q: "What if my PDF is still over 2MB after compression?", a: "Try splitting the PDF into smaller sections using OmnisPDF's Split PDF tool, then compress each part separately." },
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
