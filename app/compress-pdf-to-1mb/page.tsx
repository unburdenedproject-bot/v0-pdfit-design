import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF to 1MB Online — Free PDF Size Reducer | OmnisPDF",
  description:
    "Compress PDF files to under 1MB with OmnisPDF. Reduce PDF size for strict upload limits, forms, and mobile sharing — fast, browser-based, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF to 1MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF and click Compress. The tool applies extreme compression to reduce image resolution and optimize internal structures, getting your file as close to 1MB as possible." }
    },
    {
      "@type": "Question",
      "name": "Can any PDF be compressed to under 1MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most PDFs under 10MB can be compressed to under 1MB. Very large or image-heavy files may not reach 1MB in a single pass. In that case, split the PDF first and compress each part separately." }
    },
    {
      "@type": "Question",
      "name": "Will my PDF still be readable after compressing to 1MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Text remains sharp and fully readable. Images may lose some detail at extreme compression levels, but the document stays usable for most purposes." }
    },
    {
      "@type": "Question",
      "name": "Why would I need a PDF under 1MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Many online forms, government portals, visa applications, and mobile messaging apps have strict size limits of 1MB. Compressing to 1MB ensures your document uploads without issues." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF to 1MB on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between compressing to 1MB vs 2MB or 5MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "All three use the same extreme compression engine. The difference is the target size. Compressing to 1MB applies more aggressive optimization, which may reduce image quality slightly more than 2MB or 5MB targets." }
    }
  ]
}

export default function CompressPDFTo1MBPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF to 1MB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Shrink your PDF to under 1MB for strict upload limits, visa applications, government forms, and mobile sharing. Extreme compression, instant results.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Extreme Compression</span></div>
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
          processingMessage="Compressing your PDF to under 1MB..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Compress a PDF to 1MB?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Many platforms enforce a strict 1MB file size limit. Visa applications, government ID submissions, scholarship forms, and some job portals all require documents under 1MB. OmnisPDF applies extreme compression to get your PDF under this limit without making it unreadable.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extreme compression to target under 1MB</li>
              <li>&#10003; Perfect for visa, passport, and government form uploads</li>
              <li>&#10003; Text stays sharp and readable</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — compress PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Visa and Immigration Applications</h3>
                <p className="text-slate-600">
                  Many visa portals (Schengen, US, UK, Canada) require supporting documents under 1MB each. Compress your passport scans, bank statements, and cover letters to meet these strict limits.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Government Forms and ID Uploads</h3>
                <p className="text-slate-600">
                  Government portals for tax filings, permit applications, and ID submissions often cap uploads at 1MB. Compress your documents to upload without errors.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Mobile Sharing via WhatsApp and Telegram</h3>
                <p className="text-slate-600">
                  Sending large PDFs over messaging apps is slow and sometimes blocked. Compressing to under 1MB ensures fast delivery and easy downloading on any device.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Scholarship and University Applications</h3>
                <p className="text-slate-600">
                  Many scholarship and admissions portals require transcripts, recommendation letters, and essays under 1MB. Compress without losing readability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF to 1MB</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into OmnisPDF.",
                "Click Compress PDF — extreme compression is applied automatically.",
                "Download your smaller PDF. If it is still over 1MB, try splitting the file first.",
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

        {/* Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Tips for Getting Under 1MB</h2>
              <p className="text-slate-600 mb-4">
                If your PDF is still over 1MB after compression, try these strategies:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Split first, then compress</strong> — break a large PDF into smaller sections, then compress each one.</li>
                <li>&#10003; <strong>Remove unnecessary pages</strong> — delete blank pages or pages that are not required for your submission.</li>
                <li>&#10003; <strong>Use Black & White</strong> — if color is not required, convert images to grayscale before compressing (this reduces size significantly).</li>
                <li>&#10003; <strong>Flatten the PDF</strong> — if the PDF has form fields or annotations, flatten them first to remove hidden data.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress to 5MB", desc: "For 5MB upload limits.", href: "/compress-pdf-to-5mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Split PDF", desc: "Split if still too large.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields and annotations.", href: "/flatten-pdf", icon: FileText },
                { name: "Rotate PDF", desc: "Fix page orientation.", href: "/rotate-pdf", icon: RotateCw },
                { name: "Compress PDF", desc: "Standard compression.", href: "/compress-pdf", icon: Compress },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I compress a PDF to 1MB?", a: "Upload your PDF to OmnisPDF and click Compress. The tool applies extreme compression to reduce image resolution and optimize internal structures, getting your file as close to 1MB as possible." },
                { q: "Can any PDF be compressed to under 1MB?", a: "Most PDFs under 10MB can be compressed to under 1MB. Very large or image-heavy files may not reach 1MB in a single pass. In that case, split the PDF first and compress each part separately." },
                { q: "Will my PDF still be readable after compressing to 1MB?", a: "Yes. Text remains sharp and fully readable. Images may lose some detail at extreme compression levels, but the document stays usable for most purposes." },
                { q: "Why would I need a PDF under 1MB?", a: "Many online forms, government portals, visa applications, and mobile messaging apps have strict size limits of 1MB. Compressing to 1MB ensures your document uploads without issues." },
                { q: "Can I compress a PDF to 1MB on my phone?", a: "Yes. OmnisPDF works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android." },
                { q: "What if my PDF is still over 1MB after compression?", a: "Try splitting the PDF into smaller parts with our Split PDF tool, then compress each part individually. You can also flatten the PDF or remove unnecessary pages to reduce size further." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Need to Compress Below 1MB?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Upload your PDF and get it under 1MB in seconds. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-to-1mb"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress to 1MB Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
