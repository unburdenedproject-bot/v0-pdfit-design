import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Split Large PDF into Smaller Files — Free Online Tool | OmnisPDF",
  description:
    "Split a large PDF into smaller, more manageable files with OmnisPDF. Break oversized PDFs into parts for email, uploads, and sharing — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the maximum file size I can split with OmnisPDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can split PDFs up to 25MB. Pro users can split files up to 200MB — perfect for oversized scans, textbooks, and large reports." }
    },
    {
      "@type": "Question",
      "name": "How many parts can I split a PDF into?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can split a PDF into as many parts as you need — by page range, individual pages, or evenly divided sections. There is no limit on the number of output files." }
    },
    {
      "@type": "Question",
      "name": "Does splitting a PDF reduce the quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting extracts pages from the original PDF without re-encoding. Text, images, and formatting remain exactly as they were in the original file." }
    },
    {
      "@type": "Question",
      "name": "Can I split a 100+ page PDF into smaller chapters?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use page ranges to split a large document into chapters or sections. For example, split pages 1-25, 26-50, and 51-100 into three separate files." }
    },
    {
      "@type": "Question",
      "name": "Can I split a large PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in mobile browsers — upload, split, and download on iPhone or Android. No app installation required." }
    },
    {
      "@type": "Question",
      "name": "How do I split a PDF to send by email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your large PDF, split it into smaller parts that fit under your email provider's attachment limit (usually 25MB), and attach each part to your email. You can also compress each part after splitting for even smaller files." }
    }
  ]
}

export default function SplitLargePDFPage() {
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
                <Split className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Split Large PDF into Smaller Files</h1>
              <p className="text-xl text-slate-300 mb-8">
                Break oversized PDFs into smaller, more manageable files. Perfect for emailing large documents, meeting upload limits, or splitting textbooks into chapters.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Split by Page Range</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <SplitPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Large PDFs — 100+ page reports, oversized scans, textbooks, and manuals — are difficult to email, upload, and share. OmnisPDF splits them into smaller files by page range or individual pages, so each part fits within size limits and is easy to handle.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Split PDFs with 100+ pages into manageable parts</li>
              <li>&#10003; Choose custom page ranges or split evenly</li>
              <li>&#10003; No quality loss — pages are extracted, not re-encoded</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — split PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Split Large PDFs for Email Attachments</h2>
              <p className="text-slate-600">
                Most email providers limit attachments to 25MB. If your PDF is too large to attach, split it into smaller parts and send each one separately. Combine with OmnisPDF's compression tool for even smaller files.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Break Up Files for Upload Portals</h2>
              <p className="text-slate-600">
                Government portals, HR systems, and submission platforms often have strict file size limits. Split your oversized PDF into parts that meet the portal's requirements — no content is lost, and each part retains full quality.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Split Textbooks, Manuals, and Long Reports</h2>
              <p className="text-slate-600">
                Working with a 500-page textbook or a lengthy compliance manual? Split it into chapters or sections for easier reading, sharing with team members, or printing specific parts without handling the entire document.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Split a Large PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your large PDF into OmnisPDF.",
                "Choose your split method — by page range, individual pages, or equal parts.",
                "Click Split PDF and download your smaller files.",
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
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs into one" },
                { name: "Split PDF", href: "/split-pdf", desc: "Standard split tool" },
                { name: "Compress for Email", href: "/compress-pdf-for-email", desc: "Email-ready PDFs" },
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
                { q: "What is the maximum file size I can split with OmnisPDF?", a: "Free users can split PDFs up to 25MB. Pro users can split files up to 200MB — perfect for oversized scans, textbooks, and large reports." },
                { q: "How many parts can I split a PDF into?", a: "You can split a PDF into as many parts as you need — by page range, individual pages, or evenly divided sections. There is no limit on the number of output files." },
                { q: "Does splitting a PDF reduce the quality?", a: "No. Splitting extracts pages from the original PDF without re-encoding. Text, images, and formatting remain exactly as they were in the original file." },
                { q: "Can I split a 100+ page PDF into smaller chapters?", a: "Yes. Use page ranges to split a large document into chapters or sections. For example, split pages 1-25, 26-50, and 51-100 into three separate files." },
                { q: "Can I split a large PDF on my phone?", a: "Yes. OmnisPDF works in mobile browsers — upload, split, and download on iPhone or Android. No app installation required." },
                { q: "How do I split a PDF to send by email?", a: "Upload your large PDF, split it into smaller parts that fit under your email provider's attachment limit (usually 25MB), and attach each part to your email. You can also compress each part after splitting for even smaller files." },
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
