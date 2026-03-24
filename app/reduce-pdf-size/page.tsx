import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reduce PDF Size Online — Free PDF File Size Reducer | PDF.it",
  description:
    "Reduce PDF file size online for free. Choose your compression level — light, medium, or extreme — to balance quality and size. Fast, browser-based, no installation required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I reduce the size of a PDF file?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, choose your preferred compression level (light, medium, or extreme), and click Compress. Your reduced-size PDF will be ready to download in seconds." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between light, medium, and extreme compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Light compression optimizes PDF structures with minimal image changes — best for quality-sensitive documents. Medium (recommended) balances size reduction and quality. Extreme compression maximizes size reduction by aggressively compressing images — best when you need the smallest possible file." }
    },
    {
      "@type": "Question",
      "name": "How much will my PDF be reduced?",
      "acceptedAnswer": { "@type": "Answer", "text": "Results depend on your PDF content and the compression level you choose. Text-heavy PDFs may see 20-40% reduction. Image-heavy PDFs with extreme compression can see 50-80% reduction. Every document is different." }
    },
    {
      "@type": "Question",
      "name": "Is reducing PDF size free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free users can reduce up to 10 PDFs per day with files up to 25MB. Pro users get unlimited compressions with files up to 200MB and batch processing." }
    },
    {
      "@type": "Question",
      "name": "Will reducing PDF size affect the quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on the compression level. Light compression preserves nearly all quality. Medium compression slightly reduces image detail. Extreme compression noticeably reduces image resolution for maximum size savings. Text always remains sharp regardless of level." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still too large after reducing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try a higher compression level, or split the PDF into smaller sections with our Split PDF tool and compress each part. You can also flatten the PDF or remove unnecessary pages to reduce size further." }
    }
  ]
}

export default function ReducePDFSizePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reduce PDF Size Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Choose your compression level based on your needs — light for quality preservation, medium for a balanced approach, or extreme for maximum size reduction. Upload, reduce, download — all in your browser.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Choose Your Compression Level</span></div>
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
          processingMessage="Reducing your PDF size..."
          successMessage="Your smaller PDF is ready!"
          showCompressionSelector
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">How Does PDF Size Reduction Work?</h2>
            <p className="text-lg text-slate-600 mb-8">
              PDFs can be large for many reasons — high-resolution images, embedded fonts, unoptimized internal structures, or hidden metadata. PDF.it analyzes your document and applies compression based on the level you choose, targeting the biggest sources of bloat to reduce file size effectively.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Three compression levels: light, medium (recommended), and extreme</li>
              <li>&#10003; Optimizes images, fonts, and internal PDF structures</li>
              <li>&#10003; Text always remains sharp and readable</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — reduce PDF size in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Email Attachments</h3>
                <p className="text-slate-600">
                  Most email providers limit attachments to 10-25MB. Reduce your PDF size so it fits within email limits and downloads quickly for your recipients.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Upload Portals</h3>
                <p className="text-slate-600">
                  Job applications, government forms, insurance claims, and university submissions often have strict file size limits. Reduce your PDF to meet upload requirements.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Cloud Storage</h3>
                <p className="text-slate-600">
                  Save space on Google Drive, Dropbox, OneDrive, or iCloud by reducing the size of your archived PDFs. Smaller files also sync faster across devices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Mobile Sharing</h3>
                <p className="text-slate-600">
                  Sharing PDFs via WhatsApp, Telegram, or iMessage is faster and more reliable with smaller files. Reduce your PDF size so it sends instantly on any network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Reduce PDF Size</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Choose your compression level — light, medium, or extreme — then click Compress PDF.",
                "Download your reduced PDF. If still too large, try a higher compression level or split the file first.",
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
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress to 5MB", desc: "For 5MB upload limits.", href: "/compress-pdf-to-5mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Split PDF", desc: "Split large documents.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields.", href: "/flatten-pdf", icon: FileText },
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
                { q: "How do I reduce the size of a PDF file?", a: "Upload your PDF to PDF.it, choose your preferred compression level (light, medium, or extreme), and click Compress. Your reduced-size PDF will be ready to download in seconds." },
                { q: "What is the difference between light, medium, and extreme compression?", a: "Light compression optimizes PDF structures with minimal image changes — best for quality-sensitive documents. Medium (recommended) balances size reduction and quality. Extreme compression maximizes size reduction by aggressively compressing images — best when you need the smallest possible file." },
                { q: "How much will my PDF be reduced?", a: "Results depend on your PDF content and the compression level you choose. Text-heavy PDFs may see 20-40% reduction. Image-heavy PDFs with extreme compression can see 50-80% reduction. Every document is different." },
                { q: "Is reducing PDF size free?", a: "Yes. Free users can reduce up to 10 PDFs per day with files up to 25MB. Pro users get unlimited compressions with files up to 200MB and batch processing." },
                { q: "Will reducing PDF size affect the quality?", a: "It depends on the compression level. Light compression preserves nearly all quality. Medium compression slightly reduces image detail. Extreme compression noticeably reduces image resolution for maximum size savings. Text always remains sharp regardless of level." },
                { q: "What if my PDF is still too large after reducing?", a: "Try a higher compression level, or split the PDF into smaller sections with our Split PDF tool and compress each part. You can also flatten the PDF or remove unnecessary pages to reduce size further." },
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
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Reduce Your PDF Size Now</h2>
            <p className="text-slate-300 text-lg mb-8">
              Choose your compression level and reduce your PDF in seconds. No signup, no installation, no waiting.
            </p>
            <Link
              href="/reduce-pdf-size"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Reduce PDF Size
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
