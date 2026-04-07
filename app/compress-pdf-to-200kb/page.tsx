import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF for 200KB Upload Limits — Free Extreme Compression | PDF.it",
  description:
    "Apply extreme PDF compression to reduce file size for portals with 200KB limits. Maximum compression for passport submissions, ID uploads, signature files, and strict portals — fast, browser-based, free.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF for a 200KB upload limit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it and click Compress. The tool applies extreme compression to reduce image resolution and optimize internal structures, drastically reducing file size. Results depend on the content of your PDF." }
    },
    {
      "@type": "Question",
      "name": "Will my PDF definitely be under 200KB after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Extreme compression drastically reduces file size, but results depend on the PDF content. Single-page text documents compress very well. Multi-page or image-heavy files may need to be split first, then each part compressed separately." }
    },
    {
      "@type": "Question",
      "name": "Which portals require PDFs under 200KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Many passport photo submission portals, national ID upload systems, digital signature file uploads, and very strict government forms enforce a 200KB limit per file." }
    },
    {
      "@type": "Question",
      "name": "Will my PDF still be readable after compressing for 200KB limits?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Text remains sharp and fully readable. Images may lose noticeable detail at this level of compression, but the document stays usable for identification and submission purposes." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF for 200KB limits on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still over 200KB after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try splitting the PDF into individual pages with our Split PDF tool, then compress each page separately. You can also flatten the PDF, remove unnecessary pages, or convert images to grayscale to reduce size further." }
    }
  ]
}

export default function CompressPDFTo200KBPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF for 200KB Upload Limits</h1>
              <p className="text-xl text-slate-300 mb-8">
                Apply extreme compression to drastically reduce your PDF size for portals with 200KB limits. Perfect for passport photo submissions, ID uploads, signature files, and very strict portals.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Extreme Compression</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF for 200KB upload limits..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Compress a PDF for 200KB Limits?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Some platforms enforce a very tight 200KB file size limit. Passport photo portals, national ID submission systems, digital signature uploads, and strict government forms all require extremely small files. PDF.it applies extreme compression to drastically reduce your PDF size, helping you meet these demanding upload requirements.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extreme compression for maximum size reduction</li>
              <li>&#10003; Perfect for passport, ID, and signature file uploads</li>
              <li>&#10003; Text stays sharp and readable</li>
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Passport Photo Submissions</h3>
                <p className="text-slate-600">
                  Passport renewal and application portals often require photo uploads under 200KB. Compress your scanned passport photo PDF to meet these strict size requirements without losing clarity.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">National ID and Document Uploads</h3>
                <p className="text-slate-600">
                  National ID card uploads, driver license submissions, and other official identification portals frequently enforce a 200KB cap. Compress your scanned IDs to upload successfully.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Digital Signature Files</h3>
                <p className="text-slate-600">
                  Many platforms require signature files under 200KB for electronic document signing. Compress your scanned signature PDF to meet file size limits while keeping the signature legible.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Very Strict Government Portals</h3>
                <p className="text-slate-600">
                  Some government systems, especially in developing countries, enforce very low upload caps of 200KB per document. Compress your forms, certificates, and supporting documents to submit without errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF for 200KB Limits</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — extreme compression is applied automatically.",
                "Download your smaller PDF. If still over 200KB, try splitting into individual pages first, then compress each page.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Tips for Getting Under 200KB</h2>
              <p className="text-slate-600 mb-4">
                If your PDF is still over 200KB after compression, try these strategies:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Split into single pages</strong> — extract only the page you need and compress that single page.</li>
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
                { name: "Compress to 500KB", desc: "For 500KB upload limits.", href: "/compress-pdf-to-500kb", icon: Compress },
                { name: "Compress to 1MB", desc: "For 1MB upload limits.", href: "/compress-pdf-to-1mb", icon: Compress },
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Split PDF", desc: "Split if still too large.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields and annotations.", href: "/flatten-pdf", icon: FileText },
                { name: "Rotate PDF", desc: "Fix page orientation.", href: "/rotate-pdf", icon: RotateCw },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#14D8C4] to-[#0FBFB0] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#14D8C4] transition-colors mb-1">
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
                { q: "How do I compress a PDF for a 200KB upload limit?", a: "Upload your PDF to PDF.it and click Compress. The tool applies extreme compression to reduce image resolution and optimize internal structures, drastically reducing file size. Results depend on the content of your PDF." },
                { q: "Will my PDF definitely be under 200KB after compression?", a: "Extreme compression drastically reduces file size, but results depend on the PDF content. Single-page text documents compress very well. Multi-page or image-heavy files may need to be split first, then each part compressed separately." },
                { q: "Which portals require PDFs under 200KB?", a: "Many passport photo submission portals, national ID upload systems, digital signature file uploads, and very strict government forms enforce a 200KB limit per file." },
                { q: "Will my PDF still be readable after compressing for 200KB limits?", a: "Yes. Text remains sharp and fully readable. Images may lose noticeable detail at this level of compression, but the document stays usable for identification and submission purposes." },
                { q: "Can I compress a PDF for 200KB limits on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android." },
                { q: "What if my PDF is still over 200KB after compression?", a: "Try splitting the PDF into individual pages with our Split PDF tool, then compress each page separately. You can also flatten the PDF, remove unnecessary pages, or convert images to grayscale to reduce size further." },
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
            <h2 className="text-2xl font-black mb-4">Need Extreme PDF Compression?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Upload your PDF and apply maximum compression in seconds. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-to-200kb"
              className="inline-block bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress for 200KB Limits Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
