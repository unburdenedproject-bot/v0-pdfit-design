import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UrlPdfInterface } from "@/components/url-pdf-interface"
import { Globe, Zap, Shield, FileText, Merge, Scan, Lock, Type } from "lucide-react"

export const metadata = {
  title: "Convert URL to PDF Online — Save Any Webpage as PDF | PDF.it",
  description:
    "Convert any webpage to a high-quality PDF. Enter a URL and download a perfectly formatted PDF. Supports custom page size, orientation, and margins. PDF.it Pro feature.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a URL to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Paste the webpage URL into PDF.it, choose your page size, orientation, and margin settings, then click Convert. Your PDF will be ready to download in seconds." }
    },
    {
      "@type": "Question",
      "name": "Can I convert any website to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can convert most publicly accessible webpages to PDF. Pages that require login or have heavy JavaScript rendering may not convert perfectly. Static content pages, articles, and blog posts convert best." }
    },
    {
      "@type": "Question",
      "name": "Will the PDF keep the original formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it captures the webpage layout, images, and text formatting as closely as possible. You can customize the page size, orientation, and margins to get the best result for your specific page." }
    },
    {
      "@type": "Question",
      "name": "Is URL to PDF free?",
      "acceptedAnswer": { "@type": "Answer", "text": "URL to PDF is a Pro feature available for $7.99/month. Pro accounts also include OCR, QR code generation, batch processing, and all other premium PDF tools." }
    },
    {
      "@type": "Question",
      "name": "Can I save a webpage as PDF for offline reading?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Converting a URL to PDF creates a permanent, offline copy of the webpage. You can read it anytime without an internet connection, share it as a file, or print it." }
    }
  ]
}

export default function UrlToPdfPage() {
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
                <Globe className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Pro
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert URL to PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Save any webpage as a high-quality PDF. Enter a URL, customize the layout, and download a perfectly formatted document in seconds.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-orange-500" /><span>Any Webpage</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Custom Layout</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Instant Download</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* URL to PDF Interface */}
        <UrlPdfInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Enter URL", desc: "Paste the webpage address you want to convert. PDF.it fetches the page content, images, and layout automatically." },
                { step: "2", title: "Choose Settings", desc: "Select your preferred page size (A4, Letter, Legal), orientation (portrait or landscape), and margin settings for the perfect layout." },
                { step: "3", title: "Download PDF", desc: "Click Convert and your PDF is generated in seconds. Download the file and use it offline, share it, or archive it for later." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Convert URLs to PDF */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Convert URLs to PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Web content changes or disappears all the time. Converting a webpage to PDF creates a permanent snapshot that preserves the text, images, and layout exactly as they appeared. Whether you are saving research, archiving important pages, or collecting reference material, a PDF ensures the content is always available.
              </p>
              <p className="text-slate-600 text-center">
                PDFs are also ideal for offline reading, sharing with colleagues who may not have access to the original page, and printing web content with proper formatting. Instead of relying on bookmarks that may break, save the actual content as a portable document you control.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Save Articles & Research</h3>
                <p className="text-slate-600">
                  Capture online articles, academic papers, blog posts, and documentation as PDFs. Build a permanent research library that you can search, annotate, and reference anytime — even when the original page goes offline.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Archive Webpages</h3>
                <p className="text-slate-600">
                  Preserve important webpages before they change or get taken down. Legal teams, journalists, and researchers use URL-to-PDF conversion to create timestamped records of web content for compliance and evidence.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Share Content Offline</h3>
                <p className="text-slate-600">
                  Convert webpages to PDF and share them with teammates, clients, or students who may not have internet access. PDFs work on any device without a browser, making them perfect for presentations, training materials, and handouts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Create Reports from Dashboards</h3>
                <p className="text-slate-600">
                  Turn web-based dashboards, analytics pages, and data visualizations into clean PDF reports. Share snapshots of live data with stakeholders who need a static, printable version of your metrics and charts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I convert a URL to PDF?", a: "Paste the webpage URL into PDF.it, choose your page size, orientation, and margin settings, then click Convert. Your PDF will be ready to download in seconds." },
                { q: "Can I convert any website to PDF?", a: "You can convert most publicly accessible webpages to PDF. Pages that require login or have heavy JavaScript rendering may not convert perfectly. Static content pages, articles, and blog posts convert best." },
                { q: "Will the PDF keep the original formatting?", a: "PDF.it captures the webpage layout, images, and text formatting as closely as possible. You can customize the page size, orientation, and margins to get the best result for your specific page." },
                { q: "Is URL to PDF free?", a: "URL to PDF is a Pro feature available for $7.99/month. Pro accounts also include OCR, QR code generation, batch processing, and all other premium PDF tools." },
                { q: "Can I save a webpage as PDF for offline reading?", a: "Yes. Converting a URL to PDF creates a permanent, offline copy of the webpage. You can read it anytime without an internet connection, share it as a file, or print it." },
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
            <h2 className="text-2xl font-black mb-4">Save Any Webpage as PDF</h2>
            <p className="text-slate-300 text-lg mb-8">
              Stop losing web content to broken links and page updates. Convert any URL to a high-quality PDF you can read, share, and archive forever.
            </p>
            <Link
              href="/url-to-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convert a URL Now
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PDF to JPG", desc: "Convert PDF pages to JPG images.", href: "/pdf-to-jpg", icon: FileText },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one file.", href: "/merge-pdf", icon: Merge },
                { name: "Compress PDF", desc: "Reduce file size without losing quality.", href: "/compress-pdf", icon: Zap },
                { name: "OCR Scanner", desc: "Extract text from scanned documents.", href: "/ocr-scanner", icon: Scan },
                { name: "Word to PDF", desc: "Convert Word documents to PDF.", href: "/tools/word-to-pdf", icon: Type },
                { name: "Protect PDF", desc: "Add password protection to your documents.", href: "/protect-pdf", icon: Lock },
                { name: "Split PDF", desc: "Divide a PDF into separate files.", href: "/split-pdf", icon: FileText },
                { name: "Flatten PDF", desc: "Lock form fields and annotations into a flat PDF.", href: "/flatten-pdf", icon: FileText },
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
      </main>
      <Footer />
    </div>
  )
}
