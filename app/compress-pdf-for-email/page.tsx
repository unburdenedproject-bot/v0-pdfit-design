import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF for Email — Reduce PDF Size for Attachments | PDF.it",
  description:
    "Compress PDF files for email attachments with PDF.it. Shrink PDFs to fit Gmail, Outlook, and Yahoo size limits — fast, browser-based, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, click Compress, and download a smaller file ready to attach to your email." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum email attachment size?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gmail allows 25MB, Outlook allows 20MB, and Yahoo Mail allows 25MB. PDF.it compresses your PDF to fit within these limits." }
    },
    {
      "@type": "Question",
      "name": "Will the PDF still look good after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it uses smart compression that keeps text sharp and pages readable. Image quality may be slightly reduced, but the document remains professional." }
    },
    {
      "@type": "Question",
      "name": "Can I compress multiple PDFs for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Upload multiple PDFs and PDF.it will compress each one individually. You can also merge them first using the Merge PDF tool." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF for email on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — compress and email PDFs directly from your iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still too large for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try using PDF.it's Split PDF tool to break the document into smaller parts, then compress and send each part separately." }
    }
  ]
}

export default function CompressPDFForEmailPage() {
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
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF for Email</h1>
              <p className="text-xl text-slate-300 mb-8">
                Shrink your PDF to fit email attachment limits. Works with Gmail, Outlook, Yahoo Mail, and any email provider — instant compression in your browser.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Smart Compression</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange-500" /><span>Email-Ready Size</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF for email..."
          successMessage="Your email-ready PDF is ready!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Email attachments have size limits — Gmail caps at 25MB, Outlook at 20MB. PDF.it compresses your PDF so it fits as an email attachment without losing readability. Upload, compress, download, and attach in seconds.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Compress PDFs to fit Gmail, Outlook, and Yahoo limits</li>
              <li>✓ Smart compression keeps documents professional</li>
              <li>✓ Great for contracts, invoices, reports, and forms</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — compress PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Email Limits */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Email Attachment Size Limits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { provider: "Gmail", limit: "25MB", color: "bg-red-50 border-red-200" },
                { provider: "Outlook", limit: "20MB", color: "bg-blue-50 border-blue-200" },
                { provider: "Yahoo Mail", limit: "25MB", color: "bg-purple-50 border-purple-200" },
              ].map((item) => (
                <div key={item.provider} className={`${item.color} border rounded-xl p-6 text-center`}>
                  <div className="text-lg font-bold text-slate-900">{item.provider}</div>
                  <div className="text-3xl font-black text-orange-600 mt-2">{item.limit}</div>
                  <div className="text-sm text-slate-500 mt-1">max attachment</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Send Contracts and Invoices Without Bouncing</h2>
              <p className="text-slate-600">
                Large contracts and invoices with signatures often exceed email limits. PDF.it compresses them to a sendable size while keeping every page crisp and professional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compress Reports and Presentations</h2>
              <p className="text-slate-600">
                Reports with charts, images, and graphs can be huge. PDF.it reduces file size so you can email them directly instead of using file-sharing links.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Works From Any Device</h2>
              <p className="text-slate-600">
                Need to send a compressed PDF from your phone? PDF.it works in mobile browsers — compress and email on the go.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF for Email</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — smart compression is applied automatically.",
                "Download the smaller PDF and attach it to your email.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Compress to 5MB", href: "/compress-pdf-to-5mb", desc: "Meet 5MB upload limits" },
                { name: "Compress to 2MB", href: "/compress-pdf-to-2mb", desc: "Strict size targets" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine before emailing" },
                { name: "Split PDF", href: "/split-pdf", desc: "Split if still too large" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I compress a PDF for email?", a: "Upload your PDF to PDF.it, click Compress, and download a smaller file ready to attach to your email." },
                { q: "What is the maximum email attachment size?", a: "Gmail allows 25MB, Outlook allows 20MB, and Yahoo Mail allows 25MB. PDF.it compresses your PDF to fit within these limits." },
                { q: "Will the PDF still look good after compression?", a: "Yes. PDF.it uses smart compression that keeps text sharp and pages readable. Image quality may be slightly reduced, but the document remains professional." },
                { q: "Can I compress multiple PDFs for email?", a: "Yes. Upload multiple PDFs and PDF.it will compress each one individually. You can also merge them first using the Merge PDF tool." },
                { q: "Can I compress a PDF for email on my phone?", a: "Yes. PDF.it works in mobile browsers — compress and email PDFs directly from your iPhone or Android." },
                { q: "What if my PDF is still too large for email?", a: "Try using PDF.it's Split PDF tool to break the document into smaller parts, then compress and send each part separately." },
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
