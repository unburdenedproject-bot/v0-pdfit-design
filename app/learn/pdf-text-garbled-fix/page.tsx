import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Why PDF-to-Text Output Looks Garbled (And How to Fix It) | PDF.it",
  description:
    "Getting gibberish, strange characters, or blank output when converting PDF to text? Learn the 5 most common causes and how to fix each one — step-by-step guide.",
  keywords: "pdf to text garbled, pdf text gibberish, pdf copy paste weird characters, pdf text extraction broken, fix garbled pdf text",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my PDF to text output look like random characters?",
      "acceptedAnswer": { "@type": "Answer", "text": "This usually happens because the PDF uses custom font encoding. The PDF maps characters to custom glyph IDs instead of standard Unicode, so text extraction tools read the glyph IDs and output meaningless characters. Try PDF to Word or OCR as alternatives." }
    },
    {
      "@type": "Question",
      "name": "Why is my PDF to text output completely blank?",
      "acceptedAnswer": { "@type": "Answer", "text": "A blank output means the PDF has no selectable text — it's likely a scanned document where each page is an image. Use an OCR tool to read the text from the scanned images." }
    },
    {
      "@type": "Question",
      "name": "Can OCR fix garbled PDF text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OCR reads text visually from the page image, bypassing font encoding issues entirely. If standard text extraction gives you garbled output, OCR is often the best fallback — it reads what the page looks like, not how the text is encoded." }
    },
    {
      "@type": "Question",
      "name": "Why do some PDFs extract text perfectly but others don't?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on how the PDF was created. PDFs made from Word, Google Docs, or modern software use standard text encoding and extract cleanly. PDFs created by older scanners, design software (InDesign, Illustrator), or certain printer drivers may use custom encoding that causes garbled output." }
    },
    {
      "@type": "Question",
      "name": "How do I know if my PDF is scanned or digital?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try selecting text in your PDF viewer. If you can highlight individual words, it's digital (text-based). If you can only select the entire page as a block or can't select anything, it's a scanned image. You can also zoom in — scanned pages look pixelated at high zoom." }
    },
    {
      "@type": "Question",
      "name": "Does unlocking a password-protected PDF fix garbled text?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the PDF has copy restrictions (you can view but not select text), unlocking it will allow text extraction. But if the garbled output is caused by font encoding issues, unlocking won't fix it — you'll need to use OCR or PDF to Word instead." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix Garbled PDF to Text Output",
  "description": "Fix garbled or broken PDF text extraction in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identify the cause",
      "text": "Try selecting text in your PDF viewer. If you can't select text, it's scanned. If selected text looks normal but pastes as gibberish, it's a font encoding issue. If the PDF asks for a password, it's protected."
    },
    {
      "@type": "HowToStep",
      "name": "Choose the right tool",
      "text": "For scanned PDFs, use OCR Scanner. For font encoding issues, try PDF to Word. For protected PDFs, use Unlock PDF first. For digital PDFs that extract cleanly, use PDF to TXT."
    },
    {
      "@type": "HowToStep",
      "name": "Extract the text",
      "text": "Upload your PDF to the appropriate PDF.it tool, process it, and download the clean output. Verify the text is correct before using it."
    }
  ]
}

export default function PdfTextGarbledFixPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to TXT</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Why PDF-to-Text Output Looks Garbled (And How to Fix It)</h1>
              <p className="text-xl text-slate-300">
                You converted your PDF to text and got a mess of strange symbols, blank pages, or unreadable characters. Here's what went wrong and exactly how to fix it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Try extracting text with PDF.it — it handles most encoding issues.</p>
            </div>
            <Link
              href="/pdf-to-txt"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF to TXT Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Symptoms */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Does "Garbled" PDF Text Look Like?</h2>
              <p className="text-slate-600 mb-4">
                Garbled text from PDF extraction can take several forms. Recognizing the pattern helps you diagnose the cause:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Random symbols and squares.</strong> Text like "&#x25A1;&#x25A1;&#x25A1;" or "&#xFFFD;&#xFFFD;&#xFFFD;" — this indicates a font encoding problem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Wrong letters.</strong> Real words but with incorrect characters — "Hfmmp Xpsme" instead of "Hello World" — caused by custom character mapping.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Completely blank output.</strong> The TXT file is empty or contains only whitespace — typical of scanned PDFs with no embedded text.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Jumbled word order.</strong> Words appear but in the wrong sequence — caused by complex layouts, text boxes, or columns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Missing sections.</strong> Some text extracts fine but other parts are missing — usually a mix of digital text and embedded images.</span>
                </li>
              </ul>
            </section>

            {/* Cause 1: Scanned PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cause 1: The PDF Is Scanned (No Real Text)</h2>
              <p className="text-slate-600 mb-4">
                <strong>The problem:</strong> Scanned PDFs are photographs of paper. Each page is an image — there is no text data for extraction tools to read. When you run PDF to TXT on a scanned file, you get a blank or near-blank result.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>How to check:</strong> Open the PDF and try to select a single word with your cursor. If you can only select the entire page as a block (or nothing at all), it's scanned.
              </p>
              <p className="text-slate-600">
                <strong>The fix:</strong> Use <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR (Optical Character Recognition)</Link>. OCR reads text visually from the page image and converts it to selectable, editable text. PDF.it's OCR Scanner handles this automatically — upload your scanned PDF, and it returns the extracted text.
              </p>
            </section>

            {/* Cause 2: Custom fonts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cause 2: Custom or Embedded Font Encoding</h2>
              <p className="text-slate-600 mb-4">
                <strong>The problem:</strong> Some PDFs — especially those from design software (InDesign, Illustrator), older government systems, or academic publishers — use custom font encoding. Instead of standard Unicode, they map characters to private glyph IDs. The text <em>looks</em> right in the PDF viewer (which has the font data), but extraction tools read the raw glyph IDs and output gibberish.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>How to check:</strong> If text looks perfect in your PDF viewer but becomes garbled when you copy-paste or convert to TXT, it's almost certainly a font encoding issue.
              </p>
              <p className="text-slate-600">
                <strong>The fix:</strong> Try <Link href="/pdf-to-word" className="text-[#14D8C4] hover:underline">PDF to Word</Link>, which uses a different extraction method that can sometimes decode custom fonts. If that doesn't work, use <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR</Link> as a fallback — OCR reads the visual appearance and bypasses encoding entirely.
              </p>
            </section>

            {/* Cause 3: Protected PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cause 3: The PDF Is Password-Protected</h2>
              <p className="text-slate-600 mb-4">
                <strong>The problem:</strong> PDF security settings can restrict text copying without preventing viewing. You can open and read the PDF, but selecting and extracting text is blocked by the permissions password.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>How to check:</strong> Look for a lock icon in your PDF viewer, or try selecting text — if the cursor changes but nothing highlights, copy restrictions are active.
              </p>
              <p className="text-slate-600">
                <strong>The fix:</strong> Use <Link href="/unlock-pdf" className="text-[#14D8C4] hover:underline">Unlock PDF</Link> to remove restrictions (you'll need the owner password if one was set), then convert to TXT normally with <Link href="/pdf-to-txt" className="text-[#14D8C4] hover:underline">PDF to TXT</Link>.
              </p>
            </section>

            {/* Cause 4: Complex layouts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cause 4: Complex Layouts (Columns, Text Boxes, Tables)</h2>
              <p className="text-slate-600 mb-4">
                <strong>The problem:</strong> PDFs with multi-column layouts, floating text boxes, sidebars, or tables cause text extraction tools to guess the reading order wrong. The result is words in a jumbled sequence.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>The fix:</strong> PDF.it's <Link href="/pdf-to-txt" className="text-[#14D8C4] hover:underline">PDF to TXT tool</Link> handles most multi-column layouts correctly. If the layout is extremely complex (like magazine pages), try <Link href="/pdf-to-word" className="text-[#14D8C4] hover:underline">PDF to Word</Link> which preserves the visual structure, making it easier to identify and reorganize sections.
              </p>
            </section>

            {/* Cause 5: Mixed content */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cause 5: Mixed Content (Partly Scanned, Partly Digital)</h2>
              <p className="text-slate-600 mb-4">
                <strong>The problem:</strong> Some PDFs contain a mix of digital text (typed) and scanned images (photographed pages). Text extraction works on the digital pages but returns nothing from the scanned pages.
              </p>
              <p className="text-slate-600">
                <strong>The fix:</strong> Run the entire document through <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR Scanner</Link>. It processes all pages — for digital pages, it uses the existing text; for scanned pages, it reads the text from the image. You get complete text from the entire document.
              </p>
            </section>

            {/* Decision tree */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quick Decision Guide: Which Tool Should You Use?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Symptom</th>
                      <th className="text-left py-3 px-4 font-bold">Likely Cause</th>
                      <th className="text-left py-3 px-4 font-bold">Use This Tool</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Blank output</td>
                      <td className="py-3 px-4">Scanned PDF</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/ocr-scanner" className="hover:underline">OCR Scanner</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Random symbols / gibberish</td>
                      <td className="py-3 px-4">Font encoding</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/pdf-to-word" className="hover:underline">PDF to Word</Link> or <Link href="/ocr-scanner" className="hover:underline">OCR</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Can't select text</td>
                      <td className="py-3 px-4">Protected PDF</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/unlock-pdf" className="hover:underline">Unlock PDF</Link> then <Link href="/pdf-to-txt" className="hover:underline">PDF to TXT</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Words in wrong order</td>
                      <td className="py-3 px-4">Complex layout</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/pdf-to-txt" className="hover:underline">PDF to TXT</Link> or <Link href="/pdf-to-word" className="hover:underline">PDF to Word</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Some pages missing text</td>
                      <td className="py-3 px-4">Mixed content</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/ocr-scanner" className="hover:underline">OCR Scanner</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Fix Your Garbled PDF Text</h2>
            <p className="text-slate-300 mb-6">Try PDF.it's extraction tools — they handle encoding issues, scanned pages, and complex layouts automatically.</p>
            <Link
              href="/pdf-to-txt"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> PDF to TXT Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert PDF to TXT: Extract Plain Text in Seconds", href: "/learn/convert-pdf-to-txt" },
                { title: "How to Copy Text from a PDF into Notes or Docs (Cleanly)", href: "/learn/copy-text-from-pdf-to-notes" },
                { title: "Convert Scanned PDF to Text: When You Need OCR", href: "/learn/convert-scanned-pdf-to-text" },
                { title: "Extract Text from PDF on iPhone/Android (Best Methods)", href: "/learn/extract-text-from-pdf-on-mobile" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
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
                { q: "Why does my PDF to text output look like random characters?", a: "This usually happens because the PDF uses custom font encoding. The PDF maps characters to custom glyph IDs instead of standard Unicode, so text extraction tools read the glyph IDs and output meaningless characters. Try PDF to Word or OCR as alternatives." },
                { q: "Why is my PDF to text output completely blank?", a: "A blank output means the PDF has no selectable text — it's likely a scanned document where each page is an image. Use an OCR tool to read the text from the scanned images." },
                { q: "Can OCR fix garbled PDF text?", a: "Yes. OCR reads text visually from the page image, bypassing font encoding issues entirely. If standard text extraction gives you garbled output, OCR is often the best fallback — it reads what the page looks like, not how the text is encoded." },
                { q: "Why do some PDFs extract text perfectly but others don't?", a: "It depends on how the PDF was created. PDFs made from Word, Google Docs, or modern software use standard text encoding and extract cleanly. PDFs created by older scanners, design software, or certain printer drivers may use custom encoding that causes garbled output." },
                { q: "How do I know if my PDF is scanned or digital?", a: "Try selecting text in your PDF viewer. If you can highlight individual words, it's digital (text-based). If you can only select the entire page as a block or can't select anything, it's a scanned image. You can also zoom in — scanned pages look pixelated at high zoom." },
                { q: "Does unlocking a password-protected PDF fix garbled text?", a: "If the PDF has copy restrictions (you can view but not select text), unlocking it will allow text extraction. But if the garbled output is caused by font encoding issues, unlocking won't fix it — you'll need to use OCR or PDF to Word instead." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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
