import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF for 100KB Upload Limits — Free Extreme Compression | PDF.it",
  description:
    "Apply extreme PDF compression to reduce file size for portals with 100KB limits. Maximum compression for email signatures, micro-attachments, badge photos, and mobile-optimized documents — fast, browser-based, free.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF for a 100KB upload limit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it and click Compress. The tool applies extreme compression to reduce image resolution and optimize internal structures, drastically reducing file size. Results depend on the content of your PDF." }
    },
    {
      "@type": "Question",
      "name": "Will my PDF definitely be under 100KB after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Extreme compression drastically reduces file size, but results depend on the PDF content. Simple single-page text documents can often reach under 100KB. Image-heavy or multi-page files will likely need to be split into individual pages first, then each page compressed separately." }
    },
    {
      "@type": "Question",
      "name": "What types of files can realistically be compressed to 100KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Single-page documents with mostly text, simple signatures, badge-sized photos, and small forms can often be compressed to under 100KB. Multi-page documents or files with high-resolution images will need to be split first." }
    },
    {
      "@type": "Question",
      "name": "Will my PDF still be readable after compressing for 100KB limits?",
      "acceptedAnswer": { "@type": "Answer", "text": "Text remains sharp and readable. Images will lose noticeable detail at this extreme compression level, but for signatures, badges, and simple documents, the result is still usable." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF for 100KB limits on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still over 100KB after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Split the PDF into individual pages with our Split PDF tool, then compress each page separately. For best results, keep only the single page you need, flatten the PDF, and convert images to grayscale before compressing." }
    }
  ]
}

export default function CompressPDFTo100KBPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF for 100KB Upload Limits</h1>
              <p className="text-xl text-slate-300 mb-8">
                Apply extreme compression to drastically reduce your PDF size for portals with 100KB limits. Perfect for email signatures, micro-attachments, badge photo uploads, and mobile-optimized documents.
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
          processingMessage="Compressing your PDF for 100KB upload limits..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Compress a PDF for 100KB Limits?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Some platforms enforce an extremely tight 100KB file size limit. Email signature attachments, badge photo uploads, micro-attachment fields, and certain mobile-optimized forms all require very small files. PDF.it applies extreme compression to drastically reduce your PDF size, helping you meet these demanding upload requirements.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extreme compression for maximum size reduction</li>
              <li>&#10003; Perfect for email signatures, badges, and micro-attachments</li>
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Email Signature Attachments</h3>
                <p className="text-slate-600">
                  Corporate email systems often limit signature file attachments to 100KB or less. Compress your logo, vCard, or brochure PDF to fit within email signature size restrictions without slowing down email delivery.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Micro-Attachments for Online Forms</h3>
                <p className="text-slate-600">
                  Some online forms and ticketing systems only allow very small file attachments under 100KB. Compress your supporting documents to attach them to help desk tickets, feedback forms, or registration fields.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Mobile-Optimized Documents</h3>
                <p className="text-slate-600">
                  Sending PDFs over slow mobile connections or to devices with limited storage benefits from extreme compression. Reduce your file to under 100KB for instant loading and minimal data usage.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Badge and ID Photo Uploads</h3>
                <p className="text-slate-600">
                  Employee badge systems, event registration portals, and membership card platforms often require photo uploads under 100KB. Compress your badge photo PDF to meet these strict size limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF for 100KB Limits</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — extreme compression is applied automatically.",
                "Download your smaller PDF. If still over 100KB, try splitting into a single page first, then compress that page.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-3">Tips for Getting Under 100KB</h2>
              <p className="text-slate-600 mb-4">
                Getting under 100KB requires aggressive optimization. Try these strategies:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use only one page</strong> — extract the single page you need with our Split PDF tool, then compress just that page.</li>
                <li>&#10003; <strong>Remove unnecessary content</strong> — delete any pages, images, or elements that are not strictly required.</li>
                <li>&#10003; <strong>Use Black & White</strong> — convert images to grayscale before compressing. Color data takes up significant space.</li>
                <li>&#10003; <strong>Flatten the PDF</strong> — if the PDF has form fields, annotations, or layers, flatten them first to remove hidden data.</li>
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
                { name: "Compress to 200KB", desc: "For 200KB upload limits.", href: "/compress-pdf-to-200kb", icon: Compress },
                { name: "Compress to 500KB", desc: "For 500KB upload limits.", href: "/compress-pdf-to-500kb", icon: Compress },
                { name: "Compress to 1MB", desc: "For 1MB upload limits.", href: "/compress-pdf-to-1mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I compress a PDF for a 100KB upload limit?", a: "Upload your PDF to PDF.it and click Compress. The tool applies extreme compression to reduce image resolution and optimize internal structures, drastically reducing file size. Results depend on the content of your PDF." },
                { q: "Will my PDF definitely be under 100KB after compression?", a: "Extreme compression drastically reduces file size, but results depend on the PDF content. Simple single-page text documents can often reach under 100KB. Image-heavy or multi-page files will likely need to be split into individual pages first, then each page compressed separately." },
                { q: "What types of files can realistically be compressed to 100KB?", a: "Single-page documents with mostly text, simple signatures, badge-sized photos, and small forms can often be compressed to under 100KB. Multi-page documents or files with high-resolution images will need to be split first." },
                { q: "Will my PDF still be readable after compressing for 100KB limits?", a: "Text remains sharp and readable. Images will lose noticeable detail at this extreme compression level, but for signatures, badges, and simple documents, the result is still usable." },
                { q: "Can I compress a PDF for 100KB limits on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and download the smaller file directly on iPhone or Android." },
                { q: "What if my PDF is still over 100KB after compression?", a: "Split the PDF into individual pages with our Split PDF tool, then compress each page separately. For best results, keep only the single page you need, flatten the PDF, and convert images to grayscale before compressing." },
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
              href="/compress-pdf-to-100kb"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress for 100KB Limits Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
