import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF to 5MB Online — Free PDF Size Reducer | OmnisPDF",
  description:
    "Compress PDF files to under 5MB with OmnisPDF. Reduce PDF size for uploads, portals, and submissions — fast, browser-based, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF to 5MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF, click Compress, and download the reduced file. OmnisPDF uses extreme compression to get your file as small as possible." }
    },
    {
      "@type": "Question",
      "name": "Can I guarantee my PDF will be under 5MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF applies maximum compression to shrink your file as much as possible. Most PDFs under 20MB will compress to under 5MB. Very image-heavy files may need to be split first." }
    },
    {
      "@type": "Question",
      "name": "Will the text still be readable after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Text remains sharp and readable. Image quality may be slightly reduced, but pages stay usable." }
    },
    {
      "@type": "Question",
      "name": "Why do upload portals have a 5MB limit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Many government, university, and job application portals set a 5MB limit to manage storage and bandwidth. Compressing your PDF ensures it meets these requirements." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF to 5MB on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in mobile browsers — upload, compress, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still over 5MB after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the file is still too large, try splitting it into smaller parts using OmnisPDF's Split PDF tool, then compress each part individually." }
    }
  ]
}

export default function CompressPDFTo5MBPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF to 5MB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduce your PDF to under 5MB for upload portals, applications, and submissions. Maximum compression, browser-based, instant results.
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
          processingMessage="Compressing your PDF to under 5MB..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Need to upload a PDF but the portal says "file too large"? OmnisPDF compresses your PDF with maximum strength to get it under 5MB — perfect for government forms, university submissions, job applications, and any site with a 5MB upload limit.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extreme compression to shrink PDFs under 5MB</li>
              <li>✓ Perfect for upload portals with size limits</li>
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
              <h2 className="text-2xl font-black text-slate-900 mb-3">Meet Upload Portal Size Limits</h2>
              <p className="text-slate-600">
                Government portals, university applications, and job sites often cap uploads at 5MB. OmnisPDF applies maximum compression so your PDF fits without splitting or removing pages.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compress Scanned Documents and Forms</h2>
              <p className="text-slate-600">
                Scanned PDFs are often 10-30MB. OmnisPDF's extreme compression mode reduces image data aggressively to bring the file under 5MB while keeping text readable.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Still Too Large? Split Then Compress</h2>
              <p className="text-slate-600">
                If your PDF is still over 5MB after compression, use OmnisPDF's Split PDF tool to break it into smaller parts, then compress each one individually.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF to 5MB</h2>
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
                { name: "Compress to 2MB", href: "/compress-pdf-to-2mb", desc: "Even smaller compression" },
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
                { q: "How do I compress a PDF to 5MB?", a: "Upload your PDF to OmnisPDF, click Compress, and download the reduced file. OmnisPDF uses extreme compression to get your file as small as possible." },
                { q: "Can I guarantee my PDF will be under 5MB?", a: "OmnisPDF applies maximum compression to shrink your file as much as possible. Most PDFs under 20MB will compress to under 5MB. Very image-heavy files may need to be split first." },
                { q: "Will the text still be readable after compression?", a: "Yes. Text remains sharp and readable. Image quality may be slightly reduced, but pages stay usable." },
                { q: "Why do upload portals have a 5MB limit?", a: "Many government, university, and job application portals set a 5MB limit to manage storage and bandwidth. Compressing your PDF ensures it meets these requirements." },
                { q: "Can I compress a PDF to 5MB on my phone?", a: "Yes. OmnisPDF works in mobile browsers — upload, compress, and download on iPhone or Android." },
                { q: "What if my PDF is still over 5MB after compression?", a: "If the file is still too large, try splitting it into smaller parts using OmnisPDF's Split PDF tool, then compress each part individually." },
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
