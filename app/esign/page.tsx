import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EsignInterface } from "@/components/esign-interface"
import { PenTool, Zap, Eye, Shield, FileText, Lock, Layers, Repeat, ArrowLeftRight, Merge } from "lucide-react"

export const metadata = {
  title: "eSign PDF Documents Online — Add Electronic Signatures to PDFs | OmnisPDF",
  description:
    "Sign PDF documents online with a visual editor. Draw, type, or upload your signature and place it anywhere on any page. Download your signed PDF instantly. OmnisPDF Business feature.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is eSign?",
      "acceptedAnswer": { "@type": "Answer", "text": "eSign lets you add electronic signatures to PDF documents. You can draw your signature, type your name in a signature font, or upload an image of your signature. Then place it anywhere on the document and download the signed PDF." }
    },
    {
      "@type": "Question",
      "name": "Is the signature embedded in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The signature is permanently embedded into the PDF as part of the document. It appears on the page and is included when the PDF is printed or shared." }
    },
    {
      "@type": "Question",
      "name": "Can I sign multiple pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can navigate through all pages of your PDF and place signatures on any page. You can also place multiple signatures on a single page if needed." }
    },
    {
      "@type": "Question",
      "name": "What signature options are available?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can draw your signature freehand using your mouse or trackpad, type your name and choose from different signature fonts, or upload an image of your handwritten signature." }
    },
    {
      "@type": "Question",
      "name": "Is eSign free?",
      "acceptedAnswer": { "@type": "Answer", "text": "eSign is available as a Business plan feature for $13.99/month. It includes the signature editor along with other Business tools like Workflow Automation, PDF Redaction, PDF Compare, and Table Extraction." }
    },
    {
      "@type": "Question",
      "name": "How do I add a signature to a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF, create your signature by drawing, typing, or uploading an image. Then click Place on PDF and click on the document where you want the signature to appear. When finished, click Apply Signatures to embed them and download the signed PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I remove a placed signature before applying?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Before you apply signatures, you can remove any placed signature from the list in the sidebar. Once you apply and download, the signatures are permanently embedded." }
    },
  ]
}

export default function EsignPage() {
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
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PenTool className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">eSign PDF Documents Online</h1>
              <p className="text-xl text-slate-300 mb-4">
                Add electronic signatures to any PDF document. Draw your signature, type your name in a signature font, or upload an image of your handwritten signature. Place it exactly where you need it and download the signed PDF instantly.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Sign contracts, agreements, forms, letters, and any other PDF document without printing, scanning, or mailing.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><PenTool className="h-4 w-4 text-indigo-400" /><span>Draw, Type, or Upload</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-400" /><span>Visual Placement</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Multi-Page Support</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* eSign Interface */}
        <EsignInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Upload Your PDF", desc: "Drag and drop your PDF into the upload area. The document opens in the signature editor so you can see every page." },
                { step: "2", title: "Create Your Signature", desc: "Draw your signature freehand, type your name and pick a font style, or upload an image of your handwritten signature." },
                { step: "3", title: "Place and Apply", desc: "Click Place on PDF, then click on the document where you want the signature. Apply all signatures and download your signed PDF." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use eSign */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Sign PDFs Online?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Signing documents no longer requires printing, signing by hand, scanning, and emailing back. With an online eSign tool, you can add your signature directly to the PDF in seconds and send it immediately.
              </p>
              <p className="text-slate-600 text-center">
                This saves time, reduces paper waste, and lets you sign documents from anywhere — whether you are at your desk, on the go, or working remotely.
              </p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Contracts and Agreements</h3>
                <p className="text-slate-600">
                  Sign business contracts, freelance agreements, vendor contracts, and partnership documents. Place your signature on the designated line and return the signed PDF without delays.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">HR and Employment Forms</h3>
                <p className="text-slate-600">
                  Sign offer letters, onboarding forms, NDAs, tax forms, and policy acknowledgments. New hires and managers can sign and return documents quickly without printing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Real Estate and Leases</h3>
                <p className="text-slate-600">
                  Sign rental agreements, lease renewals, property disclosures, and closing documents. Add your signature to every required page and send the completed PDF back to your agent or landlord.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">School and Government Forms</h3>
                <p className="text-slate-600">
                  Sign permission slips, enrollment forms, financial aid documents, government applications, and consent forms. Complete and return signed forms without visiting an office.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What is eSign?", a: "eSign lets you add electronic signatures to PDF documents. You can draw your signature, type your name in a signature font, or upload an image of your signature. Then place it anywhere on the document and download the signed PDF." },
                { q: "Is the signature embedded in the PDF?", a: "Yes. The signature is permanently embedded into the PDF as part of the document. It appears on the page and is included when the PDF is printed or shared." },
                { q: "Can I sign multiple pages?", a: "Yes. You can navigate through all pages of your PDF and place signatures on any page. You can also place multiple signatures on a single page if needed." },
                { q: "What signature options are available?", a: "You can draw your signature freehand using your mouse or trackpad, type your name and choose from different signature fonts, or upload an image of your handwritten signature." },
                { q: "Is eSign free?", a: "eSign is available as a Business plan feature for $13.99/month. It includes the signature editor along with other Business tools." },
                { q: "How do I add a signature to a PDF?", a: "Upload your PDF, create your signature by drawing, typing, or uploading an image. Click Place on PDF and click where you want the signature. When finished, click Apply Signatures to embed them and download the signed PDF." },
                { q: "Can I remove a placed signature before applying?", a: "Yes. Before you apply signatures, you can remove any placed signature from the sidebar list. Once applied and downloaded, the signatures are permanently embedded." },
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
            <h2 className="text-2xl font-black mb-4">Sign PDFs in Seconds</h2>
            <p className="text-slate-300 text-lg mb-8">
              Stop printing, scanning, and mailing documents just to add a signature. Upload your PDF, place your signature, and download the signed file — all from your browser.
            </p>
            <Link
              href="/esign"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Start Signing Now
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PDF Redaction", desc: "Permanently remove sensitive text and data from PDFs.", href: "/pdf-redaction", icon: Shield },
                { name: "Protect PDF", desc: "Add password protection to your documents.", href: "/protect-pdf", icon: Lock },
                { name: "Flatten PDF", desc: "Lock form fields and annotations into a flat PDF.", href: "/flatten-pdf", icon: Layers },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one file.", href: "/merge-pdf", icon: Merge },
                { name: "Workflow Automation", desc: "Chain multiple PDF tools into one automated workflow.", href: "/workflow-automation", icon: Repeat },
                { name: "PDF Compare", desc: "Compare two PDFs side-by-side and highlight differences.", href: "/pdf-compare", icon: ArrowLeftRight },
                { name: "Compress PDF", desc: "Reduce file size without losing quality.", href: "/compress-pdf", icon: FileText },
                { name: "Split PDF", desc: "Divide a PDF into separate files.", href: "/split-pdf", icon: FileText },
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
