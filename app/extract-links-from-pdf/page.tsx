import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Link2, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Links from PDF — Find All URLs in a PDF | PDF.it",
  description:
    "Find and extract all hyperlinks and URLs from PDF documents. PDF.it helps you pull text content including embedded links from any PDF.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract links from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Convert your PDF to text using PDF.it's PDF to TXT tool. The extracted text will contain all visible URLs from the document. You can then search through the text for http://, https://, or www. patterns to find every link." }
    },
    {
      "@type": "Question",
      "name": "Can I extract hyperlinks that are hidden behind text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Clickable hyperlinks embedded behind anchor text (like 'click here') require examining the PDF's link annotations. Converting to Word format preserves these hyperlinks, allowing you to see and click the actual URLs behind the text." }
    },
    {
      "@type": "Question",
      "name": "How do I extract links from a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs are images, so links aren't clickable or embedded as text. Use PDF.it's OCR Scanner first to convert the scanned pages to selectable text, then extract the text to find any URLs printed in the document." }
    },
    {
      "@type": "Question",
      "name": "Can I extract all links from a PDF at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Convert the entire PDF to text, then search for URL patterns. This captures all visible URLs throughout the document in one step. For hyperlinks behind anchor text, convert to Word first." }
    },
    {
      "@type": "Question",
      "name": "Why would I need to extract links from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Common reasons include auditing references in research papers, checking for broken links in documentation, compiling resource lists from reports, verifying citations, and migrating content from PDFs to websites or databases." }
    },
    {
      "@type": "Question",
      "name": "What types of links can be found in PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs can contain visible URL text (printed on the page), clickable hyperlinks behind anchor text, email mailto links, internal document links (jumping to other pages), and links to external files. The extraction method depends on the link type." }
    }
  ]
}

export default function ExtractLinksFromPDFPage() {
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
                <Link2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Links from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Find and extract all hyperlinks and URLs embedded in PDF documents. Pull every reference, citation, and resource link from research papers, reports, and documentation.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Find All URLs Instantly</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Installation Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Extract Content from PDFs</h2>
            <p className="text-slate-600 mb-6">Convert your PDF to text to find all URLs and links embedded in the document. Works with any PDF that contains selectable text.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pdf-to-txt" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">PDF to TXT (Free)</Link>
              <Link href="/extract-text-from-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Extract Text</Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDFs often contain dozens or even hundreds of links — references in academic papers, resource URLs in reports, and hyperlinks in documentation. Extracting these links manually is tedious. PDF.it helps you pull all text content from PDFs, making it easy to find and compile every URL in your document.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extract visible URLs printed in PDF text</li>
              <li>✓ Convert to Word to preserve clickable hyperlinks</li>
              <li>✓ Use OCR for scanned documents with printed URLs</li>
              <li>✓ Works with research papers, reports, ebooks, and manuals</li>
              <li>✓ No installation — extract links directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Find URLs in Research Papers and Reports</h2>
              <p className="text-slate-600">
                Academic papers and industry reports are packed with references to external sources. Instead of clicking through each footnote, convert the PDF to text and search for all URLs at once. This is especially useful for literature reviews, fact-checking, and building resource lists.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract References and Citations</h2>
              <p className="text-slate-600">
                Many PDF documents include bibliography sections with URLs to cited works. By extracting the full text, you can quickly compile a list of all referenced links for further reading, verification, or inclusion in your own research.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Audit Document Links for Quality Control</h2>
              <p className="text-slate-600">
                Before publishing or distributing a PDF, verify that all links are correct and active. Extract every URL from your document, then check each one for broken links, redirects, or outdated references. This is essential for maintaining professional documentation.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Extract Links from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to PDF.it's PDF to TXT converter.",
                "Download the extracted text file with all document content.",
                "Search the text for URLs (http://, https://, www.) to find all links.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract all text content" },
                { name: "Extract Text", href: "/extract-text-from-pdf", desc: "Pull text from PDFs" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Text from scanned PDFs" },
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Preserve hyperlinks" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "How do I extract links from a PDF?", a: "Convert your PDF to text using PDF.it's PDF to TXT tool. The extracted text will contain all visible URLs from the document. You can then search through the text for http://, https://, or www. patterns to find every link." },
                { q: "Can I extract hyperlinks that are hidden behind text?", a: "Clickable hyperlinks embedded behind anchor text (like 'click here') require examining the PDF's link annotations. Converting to Word format preserves these hyperlinks, allowing you to see and click the actual URLs behind the text." },
                { q: "How do I extract links from a scanned PDF?", a: "Scanned PDFs are images, so links aren't clickable or embedded as text. Use PDF.it's OCR Scanner first to convert the scanned pages to selectable text, then extract the text to find any URLs printed in the document." },
                { q: "Can I extract all links from a PDF at once?", a: "Yes. Convert the entire PDF to text, then search for URL patterns. This captures all visible URLs throughout the document in one step. For hyperlinks behind anchor text, convert to Word first." },
                { q: "Why would I need to extract links from a PDF?", a: "Common reasons include auditing references in research papers, checking for broken links in documentation, compiling resource lists from reports, verifying citations, and migrating content from PDFs to websites or databases." },
                { q: "What types of links can be found in PDFs?", a: "PDFs can contain visible URL text (printed on the page), clickable hyperlinks behind anchor text, email mailto links, internal document links (jumping to other pages), and links to external files. The extraction method depends on the link type." },
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
