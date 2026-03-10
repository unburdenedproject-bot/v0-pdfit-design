import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF Fast — Instant Online PDF Compression | OmnisPDF",
  description:
    "Compress PDF files instantly online. No software to install, no accounts to create. Upload, compress, download — done in seconds. Fast, browser-based, free.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast is OmnisPDF compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most PDFs are compressed in just a few seconds. Processing time depends on file size and complexity, but typical documents are ready for download almost immediately after clicking Compress." }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account to compress a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. You can compress PDFs immediately without signing up or logging in. Just upload your file, click Compress, and download the result. Free users get up to 10 compressions per day." }
    },
    {
      "@type": "Question",
      "name": "Do I need to install any software?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. OmnisPDF runs entirely in your browser. There is nothing to download or install. It works on any device — Mac, Windows, iPhone, Android, Linux, Chromebook." }
    },
    {
      "@type": "Question",
      "name": "Is my PDF safe when I compress it online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your files are processed securely and automatically deleted after your session ends. OmnisPDF does not store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "How much will my PDF be compressed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Results depend on the content of your PDF. Documents with images and unoptimized structures typically see significant size reductions. Already-optimized PDFs may see smaller reductions." }
    },
    {
      "@type": "Question",
      "name": "Can I compress PDFs on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in any mobile browser — Safari, Chrome, Firefox, or Samsung Internet. Upload from your camera roll or file manager, compress, and download the smaller file instantly." }
    }
  ]
}

export default function CompressPDFFastPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF Fast</h1>
              <p className="text-xl text-slate-300 mb-8">
                No software to install, no accounts to create. Upload your PDF, click Compress, and download the smaller file — done in seconds. Works on any device, any browser.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Compression</span></div>
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
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Use OmnisPDF for Fast Compression?</h2>
            <p className="text-lg text-slate-600 mb-8">
              When you need a smaller PDF right now, the last thing you want is to download software, create an account, or wait in a queue. OmnisPDF is a browser-based tool that compresses your PDF in seconds — no installation, no signup, no friction. Just upload, compress, and download.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compress PDFs in seconds — no waiting</li>
              <li>&#10003; No software to install or update</li>
              <li>&#10003; No account required for basic compression</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; Files are automatically deleted after your session</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Last-Minute Email Attachments</h3>
                <p className="text-slate-600">
                  Your PDF is too large to attach and the email needs to go out now. Compress it in seconds and attach the smaller version — no need to install anything or create an account.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Quick File Sharing</h3>
                <p className="text-slate-600">
                  Need to share a PDF via Slack, Teams, or a messaging app? Compress it quickly so it uploads and downloads faster for everyone involved.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Deadline Submissions</h3>
                <p className="text-slate-600">
                  Upload portals timing out because your file is too big? Compress your PDF in seconds to meet the deadline without scrambling for desktop software.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">On-the-Go Compression</h3>
                <p className="text-slate-600">
                  Away from your computer? Compress PDFs directly from your phone or tablet using any mobile browser. No app download needed — just open OmnisPDF and go.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF Fast</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into OmnisPDF — it takes just a second.",
                "Click Compress PDF — your file is processed in seconds.",
                "Download your smaller PDF instantly. If you need even more compression, try extreme mode or split the file first.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Compress PDF", desc: "Standard compression.", href: "/compress-pdf", icon: Compress },
                { name: "Compress to 1MB", desc: "For 1MB upload limits.", href: "/compress-pdf-to-1mb", icon: Compress },
                { name: "Compress to 5MB", desc: "For 5MB upload limits.", href: "/compress-pdf-to-5mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Split PDF", desc: "Split large documents.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields.", href: "/flatten-pdf", icon: FileText },
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How fast is OmnisPDF compression?", a: "Most PDFs are compressed in just a few seconds. Processing time depends on file size and complexity, but typical documents are ready for download almost immediately after clicking Compress." },
                { q: "Do I need to create an account to compress a PDF?", a: "No. You can compress PDFs immediately without signing up or logging in. Just upload your file, click Compress, and download the result. Free users get up to 10 compressions per day." },
                { q: "Do I need to install any software?", a: "No. OmnisPDF runs entirely in your browser. There is nothing to download or install. It works on any device — Mac, Windows, iPhone, Android, Linux, Chromebook." },
                { q: "Is my PDF safe when I compress it online?", a: "Yes. Your files are processed securely and automatically deleted after your session ends. OmnisPDF does not store or share your documents." },
                { q: "How much will my PDF be compressed?", a: "Results depend on the content of your PDF. Documents with images and unoptimized structures typically see significant size reductions. Already-optimized PDFs may see smaller reductions." },
                { q: "Can I compress PDFs on my phone?", a: "Yes. OmnisPDF works in any mobile browser — Safari, Chrome, Firefox, or Samsung Internet. Upload from your camera roll or file manager, compress, and download the smaller file instantly." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
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
            <h2 className="text-2xl font-black mb-4">Need to Compress a PDF Right Now?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Upload, compress, download — done in seconds. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-fast"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress PDF Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
