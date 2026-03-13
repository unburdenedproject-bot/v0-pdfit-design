import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WatermarkPdfInterface } from "@/components/watermark-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Droplets, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Add Watermark to PDF — Text & Image Watermarks | OmnisPDF",
  description:
    "Add a watermark to a PDF with OmnisPDF. Apply text or image watermarks like CONFIDENTIAL, set opacity, and download instantly.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I add a text watermark like CONFIDENTIAL or DRAFT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF can apply a text watermark across your PDF pages to clearly label document status." }
    },
    {
      "@type": "Question",
      "name": "Can I add a logo watermark to a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Upload an image and place it as a watermark on your PDF pages." }
    },
    {
      "@type": "Question",
      "name": "Will the watermark appear on every page?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The watermark is applied to all pages of the PDF by default." }
    },
    {
      "@type": "Question",
      "name": "Will watermarking affect the rest of my PDF content?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Adding a watermark only overlays the selected text or image onto your pages. All existing content remains untouched." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can watermark?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function WatermarkPDFPage() {
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
                <Droplets className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Add a Watermark to a PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Add a text or image watermark with OmnisPDF — mark PDFs as CONFIDENTIAL, DRAFT, or add your logo for branding and protection.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Text & Image Watermarks</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Instant Download</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Watermark Interface */}
        <WatermarkPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use OmnisPDF's Watermark PDF tool to add a watermark to a PDF in seconds. Apply a text watermark (CONFIDENTIAL, DRAFT, SAMPLE) or an image watermark, customize placement and transparency, and download a clean watermarked PDF ready to share.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Add text or image watermarks to PDFs</li>
              <li>✓ Mark documents as Confidential, Draft, or Internal Use</li>
              <li>✓ Add logo watermarks for branding</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — watermark PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Add Text Watermarks (CONFIDENTIAL, DRAFT, SAMPLE)</h2>
              <p className="text-slate-600">
                Insert a clear text watermark across your PDF pages to communicate document status and reduce accidental sharing of sensitive versions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Add an Image or Logo Watermark</h2>
              <p className="text-slate-600">
                Upload a logo or stamp image and place it on your PDF to brand proposals, invoices, and marketing documents.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Customize Placement, Opacity, and Rotation</h2>
              <p className="text-slate-600">
                Control how your watermark looks — keep it visible without blocking content by adjusting transparency, size, angle, and position.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Watermark a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to OmnisPDF.",
                "Choose Text or Image watermark.",
                "Customize settings: opacity, size, position, rotation.",
                "Click Add Watermark and download your watermarked PDF.",
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
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size after watermarking" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine watermarked docs" },
                { name: "Split PDF", href: "/split-pdf", desc: "Watermark only sections" },
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
                {
                  q: "Can I add a text watermark like CONFIDENTIAL or DRAFT?",
                  a: "Yes. OmnisPDF can apply a text watermark across your PDF pages to clearly label document status.",
                },
                {
                  q: "Can I add a logo watermark to a PDF?",
                  a: "Yes. Upload an image and place it as a watermark on your PDF pages.",
                },
                {
                  q: "Will the watermark appear on every page?",
                  a: "Yes. The watermark is applied to all pages of the PDF by default.",
                },
                {
                  q: "Will watermarking affect the rest of my PDF content?",
                  a: "No. Adding a watermark only overlays the selected text or image onto your pages. All existing content remains untouched.",
                },
                {
                  q: "Is it safe to upload my PDF?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can watermark?",
                  a: "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB.",
                },
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
