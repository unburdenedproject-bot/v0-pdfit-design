import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF for Upload Portals — Reduce PDF Size | PDF.it",
  description:
    "Compress your PDF to meet upload portal size limits. Extreme compression for government forms, university admissions, job applications, and insurance claims — free and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF for an upload portal?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it and click Compress. Extreme compression reduces image resolution and optimizes the file structure, drastically reducing file size to help meet portal upload limits." }
    },
    {
      "@type": "Question",
      "name": "Will my compressed PDF be accepted by government portals?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it produces standard PDF files that are accepted by all major portals. Text remains sharp and readable, and the file structure stays valid for any system that accepts PDFs." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF to meet a specific size limit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Extreme compression drastically reduces file size, but the exact result depends on your PDF content. Text-heavy documents compress very well. If the file is still too large, try splitting it into parts and compressing each one." }
    },
    {
      "@type": "Question",
      "name": "Will the document quality be affected?",
      "acceptedAnswer": { "@type": "Answer", "text": "Text stays sharp and fully readable. Images may lose some detail at extreme compression levels, but the document remains usable for submissions and uploads." }
    },
    {
      "@type": "Question",
      "name": "Can I compress PDFs for upload on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android — no app installation needed." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still too large after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try splitting the PDF into smaller sections with our Split PDF tool, then compress each part separately. You can also flatten the PDF or remove unnecessary pages before compressing." }
    }
  ]
}

export default function CompressPDFForUploadPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF for Upload Portals</h1>
              <p className="text-xl text-slate-300 mb-8">
                Many upload portals have strict file size limits. Apply extreme compression to drastically reduce your PDF size for government forms, university admissions, job boards, and more.
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
          processingMessage="Compressing your PDF for upload..."
          successMessage="Your compressed PDF is ready to upload!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Compress a PDF for Upload Portals?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Government websites, university admissions systems, job application portals, and insurance claim forms often enforce strict file size limits — sometimes as low as 1MB or 2MB. If your PDF exceeds the limit, the upload fails. PDF.it applies extreme compression to drastically reduce your file size, helping you submit your documents without issues.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extreme compression for maximum size reduction</li>
              <li>&#10003; Produces standard PDFs accepted by all portals</li>
              <li>&#10003; Text stays sharp and readable for official submissions</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — compress PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Job Applications</h3>
                <p className="text-slate-600">
                  Many job boards and applicant tracking systems limit resume and cover letter uploads to a few megabytes. Compress your application documents so they upload without errors on LinkedIn, Indeed, Workday, and other platforms.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">University Admissions</h3>
                <p className="text-slate-600">
                  College and graduate school application portals often require transcripts, recommendation letters, and personal statements under strict size limits. Compress your documents to meet these requirements without losing readability.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Insurance Claims</h3>
                <p className="text-slate-600">
                  Insurance portals frequently cap document uploads at small sizes. Compress scanned receipts, medical records, and claim forms so they upload successfully to your provider's system.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Government Filings</h3>
                <p className="text-slate-600">
                  Tax filings, permit applications, visa forms, and regulatory submissions often have strict upload limits. Compress your PDFs to meet government portal requirements and avoid submission errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF for Upload Portals</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — extreme compression is applied automatically to minimize file size.",
                "Download your smaller PDF and upload it to the portal. If still too large, try splitting the file first, then compress each part.",
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Compress PDF", desc: "Standard compression.", href: "/compress-pdf", icon: Compress },
                { name: "Compress to 1MB", desc: "For 1MB upload limits.", href: "/compress-pdf-to-1mb", icon: Compress },
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress to 5MB", desc: "For 5MB upload limits.", href: "/compress-pdf-to-5mb", icon: Compress },
                { name: "Split PDF", desc: "Split if still too large.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields and annotations.", href: "/flatten-pdf", icon: FileText },
                { name: "Rotate PDF", desc: "Fix page orientation.", href: "/rotate-pdf", icon: RotateCw },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I compress a PDF for an upload portal?", a: "Upload your PDF to PDF.it and click Compress. Extreme compression reduces image resolution and optimizes the file structure, drastically reducing file size to help meet portal upload limits." },
                { q: "Will my compressed PDF be accepted by government portals?", a: "Yes. PDF.it produces standard PDF files that are accepted by all major portals. Text remains sharp and readable, and the file structure stays valid for any system that accepts PDFs." },
                { q: "Can I compress a PDF to meet a specific size limit?", a: "Extreme compression drastically reduces file size, but the exact result depends on your PDF content. Text-heavy documents compress very well. If the file is still too large, try splitting it into parts and compressing each one." },
                { q: "Will the document quality be affected?", a: "Text stays sharp and fully readable. Images may lose some detail at extreme compression levels, but the document remains usable for submissions and uploads." },
                { q: "Can I compress PDFs for upload on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android — no app installation needed." },
                { q: "What if my PDF is still too large after compression?", a: "Try splitting the PDF into smaller sections with our Split PDF tool, then compress each part separately. You can also flatten the PDF or remove unnecessary pages before compressing." },
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
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Need to Shrink a PDF for Upload?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Compress your PDF in seconds and upload it without size errors. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-for-upload"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress for Upload Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
