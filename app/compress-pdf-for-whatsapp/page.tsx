import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF for WhatsApp — Share PDFs Easily | PDF.it",
  description:
    "Compress your PDF for fast WhatsApp sharing. Reduce file size so documents send and download quickly on mobile — free, browser-based, no signup required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF to send on WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it and click Compress. Extreme compression reduces image resolution and optimizes the file structure, making it much smaller and faster to send via WhatsApp." }
    },
    {
      "@type": "Question",
      "name": "What is WhatsApp's file size limit for PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp allows file attachments up to 100MB. However, large PDFs are slow to upload and download on mobile networks. Compressing your PDF ensures fast delivery even on slower connections." }
    },
    {
      "@type": "Question",
      "name": "Will the PDF still be readable after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Text remains sharp and fully readable. Images may lose some detail at extreme compression, but the document stays perfectly usable for sharing via WhatsApp." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF for WhatsApp on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser on iPhone or Android. Compress your PDF and share it directly to WhatsApp without installing any app." }
    },
    {
      "@type": "Question",
      "name": "Why is my PDF too large to send on WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs with scanned images, high-resolution graphics, or embedded fonts can be very large. Compression reduces these elements while keeping the document readable, making it much easier to share." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still too large after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try splitting the PDF into smaller parts with our Split PDF tool, then compress each part individually. You can also flatten the PDF or remove unnecessary pages to reduce size further." }
    }
  ]
}

export default function CompressPDFForWhatsAppPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF for WhatsApp</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduce your PDF size so it sends and downloads quickly on WhatsApp. Extreme compression makes sharing documents on mobile fast and effortless.
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
          processingMessage="Compressing your PDF for WhatsApp sharing..."
          successMessage="Your compressed PDF is ready to share!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Compress a PDF for WhatsApp?</h2>
            <p className="text-lg text-slate-600 mb-8">
              WhatsApp supports file attachments up to 100MB, but large PDFs are slow to send and download — especially on mobile data. Compressing your PDF before sharing ensures fast delivery, saves data, and makes it easy for the recipient to open the file on any device.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extreme compression for fast mobile sharing</li>
              <li>&#10003; Send documents, receipts, and contracts instantly</li>
              <li>&#10003; Text stays sharp and readable on any screen</li>
              <li>&#10003; Works on iPhone, Android, Mac, and Windows</li>
              <li>&#10003; No app installation — compress in your browser, then share</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Sending Documents to Clients</h3>
                <p className="text-slate-600">
                  Share proposals, invoices, and contracts with clients over WhatsApp without making them wait for a large download. Compressed PDFs arrive instantly and open smoothly on any phone.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Sharing Receipts and Invoices</h3>
                <p className="text-slate-600">
                  Quickly send purchase receipts, payment confirmations, and invoices via WhatsApp. Compression keeps the files small so they send in seconds, even on slow connections.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Sending Contracts for Review</h3>
                <p className="text-slate-600">
                  Need someone to review a contract on the go? Compress the PDF so it downloads instantly on their phone. They can read and respond without waiting for a large file to load.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Sharing School Assignments</h3>
                <p className="text-slate-600">
                  Students and teachers often share assignments, notes, and study materials over WhatsApp groups. Compressing PDFs ensures everyone can download them quickly without eating up mobile data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF for WhatsApp</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — extreme compression is applied automatically to minimize file size.",
                "Download your smaller PDF and share it on WhatsApp. If still too large, try splitting the file first, then compress each part.",
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
                { q: "How do I compress a PDF to send on WhatsApp?", a: "Upload your PDF to PDF.it and click Compress. Extreme compression reduces image resolution and optimizes the file structure, making it much smaller and faster to send via WhatsApp." },
                { q: "What is WhatsApp's file size limit for PDFs?", a: "WhatsApp allows file attachments up to 100MB. However, large PDFs are slow to upload and download on mobile networks. Compressing your PDF ensures fast delivery even on slower connections." },
                { q: "Will the PDF still be readable after compression?", a: "Yes. Text remains sharp and fully readable. Images may lose some detail at extreme compression, but the document stays perfectly usable for sharing via WhatsApp." },
                { q: "Can I compress a PDF for WhatsApp on my phone?", a: "Yes. PDF.it works in any mobile browser on iPhone or Android. Compress your PDF and share it directly to WhatsApp without installing any app." },
                { q: "Why is my PDF too large to send on WhatsApp?", a: "PDFs with scanned images, high-resolution graphics, or embedded fonts can be very large. Compression reduces these elements while keeping the document readable, making it much easier to share." },
                { q: "What if my PDF is still too large after compression?", a: "Try splitting the PDF into smaller parts with our Split PDF tool, then compress each part individually. You can also flatten the PDF or remove unnecessary pages to reduce size further." },
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
            <h2 className="text-2xl font-black mb-4">Ready to Share PDFs on WhatsApp?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Compress your PDF in seconds and share it instantly. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-for-whatsapp"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress for WhatsApp Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
