import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PdfCompareInterface } from "@/components/pdf-compare-interface"
import { ArrowLeftRight, Eye, Layers, Zap, Shield, Lock, PenTool, FileText, Merge, Repeat } from "lucide-react"

export const metadata = {
  title: "Compare PDFs Online — Side-by-Side Difference Viewer | OmnisPDF",
  description:
    "Compare two PDF documents side-by-side and see exactly what changed. Visual diff highlights differences in red. Overlay and side-by-side views. OmnisPDF Business feature.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does PDF Compare work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload two PDFs — an original and a modified version. The tool renders each page and compares them pixel by pixel. Differences are highlighted in red so you can see exactly what changed between the two documents." }
    },
    {
      "@type": "Question",
      "name": "What view modes are available?",
      "acceptedAnswer": { "@type": "Answer", "text": "Three view modes: Side by Side shows both documents next to each other, Overlay blends them together with transparency, and Differences highlights changed areas in red against a dimmed background." }
    },
    {
      "@type": "Question",
      "name": "Can I compare PDFs with different page counts?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. If one PDF has more pages than the other, the tool compares pages that exist in both documents and marks extra pages as 100% different." }
    },
    {
      "@type": "Question",
      "name": "Does PDF Compare detect text changes?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF Compare performs a visual pixel-by-pixel comparison. It detects any visible change on the page including text edits, moved elements, added or removed content, image changes, and formatting differences." }
    },
    {
      "@type": "Question",
      "name": "Is PDF Compare free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF Compare is available as a Business plan feature for $13.99/month. It includes the comparison tool along with other Business tools like Workflow Automation, PDF Redaction, eSign, and Table Extraction." }
    },
    {
      "@type": "Question",
      "name": "Can I download a comparison report?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Click the Report button to download a text summary showing the difference percentage for each page, categorized as Identical, Minor changes, Moderate changes, or Major changes." }
    },
  ]
}

export default function PdfComparePage() {
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
                <ArrowLeftRight className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compare PDFs Online</h1>
              <p className="text-xl text-slate-300 mb-4">
                Upload two PDF documents and see exactly what changed between them. Compare contracts, proposals, reports, and any document revision with a visual side-by-side viewer that highlights every difference.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Catch edits, additions, removals, and formatting changes instantly — no manual reading required.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-indigo-400" /><span>Side by Side</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-indigo-400" /><span>Overlay View</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-400" /><span>Diff Highlighting</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Interface */}
        <PdfCompareInterface locale="en" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Upload Two PDFs", desc: "Upload the original document and the modified version. Each PDF is rendered page by page for comparison." },
                { step: "2", title: "Choose a View Mode", desc: "Switch between Side by Side, Overlay, and Differences view. Each mode shows changes in a different way to help you review edits." },
                { step: "3", title: "Review and Report", desc: "Navigate through pages, see difference percentages, and download a summary report showing what changed on each page." },
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

        {/* Why Compare PDFs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Compare PDFs?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                When you receive a revised contract, updated report, or edited proposal, you need to know exactly what changed. Reading through the entire document manually is slow and error-prone.
              </p>
              <p className="text-slate-600 text-center">
                PDF Compare shows you every difference at a glance — changed text, moved elements, added or removed content — so you can review revisions confidently and catch unexpected edits before signing or approving.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Contract Revisions</h3>
                <p className="text-slate-600">
                  Compare original and revised contracts to catch changes in terms, pricing, dates, and legal language. Make sure nothing was added or removed without your knowledge before signing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Report Updates</h3>
                <p className="text-slate-600">
                  Compare different versions of financial reports, project updates, or compliance documents. See which data points, charts, or sections changed between drafts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Design and Layout Review</h3>
                <p className="text-slate-600">
                  Compare PDF proofs, brochures, or marketing materials to check for layout shifts, font changes, image swaps, and other visual differences between revisions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Legal and Compliance Documents</h3>
                <p className="text-slate-600">
                  Review policy updates, regulatory filings, and legal agreements to ensure only authorized changes were made. The visual diff makes it easy to spot unauthorized edits.
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
                { q: "How does PDF Compare work?", a: "Upload two PDFs — an original and a modified version. The tool renders each page and compares them pixel by pixel. Differences are highlighted in red so you can see exactly what changed." },
                { q: "What view modes are available?", a: "Three view modes: Side by Side shows both documents next to each other, Overlay blends them with transparency, and Differences highlights changed areas in red against a dimmed background." },
                { q: "Can I compare PDFs with different page counts?", a: "Yes. The tool compares pages that exist in both documents and marks extra pages as 100% different." },
                { q: "Does PDF Compare detect text changes?", a: "PDF Compare performs a visual pixel-by-pixel comparison. It detects any visible change including text edits, moved elements, added or removed content, image changes, and formatting differences." },
                { q: "Is PDF Compare free?", a: "PDF Compare is available as a Business plan feature for $13.99/month. It includes the comparison tool along with other Business tools." },
                { q: "Can I download a comparison report?", a: "Yes. Click the Report button to download a text summary showing the difference percentage for each page, categorized as Identical, Minor changes, Moderate changes, or Major changes." },
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
            <h2 className="text-2xl font-black mb-4">Never Miss a Change Again</h2>
            <p className="text-slate-300 text-lg mb-8">
              Compare any two PDFs and see exactly what was added, removed, or modified. Review contract revisions, report updates, and document edits with confidence.
            </p>
            <Link
              href="/pdf-compare"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Start Comparing Now
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
                { name: "eSign Documents", desc: "Add electronic signatures to PDFs.", href: "/esign", icon: PenTool },
                { name: "Protect PDF", desc: "Add password protection to your documents.", href: "/protect-pdf", icon: Lock },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one file.", href: "/merge-pdf", icon: Merge },
                { name: "Workflow Automation", desc: "Chain multiple PDF tools into one workflow.", href: "/workflow-automation", icon: Repeat },
                { name: "Compress PDF", desc: "Reduce file size without losing quality.", href: "/compress-pdf", icon: FileText },
                { name: "Split PDF", desc: "Divide a PDF into separate files.", href: "/split-pdf", icon: FileText },
                { name: "PDF to JPG", desc: "Convert PDF pages to JPG images.", href: "/pdf-to-jpg", icon: FileText },
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
