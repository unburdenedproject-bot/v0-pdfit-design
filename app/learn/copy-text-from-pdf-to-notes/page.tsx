import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Copy Text from a PDF into Notes or Docs (Cleanly) | PDF.it",
  description:
    "Learn why copying text from PDFs often breaks and how to get clean, usable text into your notes, Google Docs, or Word. Step-by-step guide with free tools.",
  keywords: "copy text from pdf, paste pdf text into notes, pdf text formatting broken, copy pdf to google docs, extract text from pdf cleanly",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does text from a PDF paste with weird formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs store text as positioned characters, not flowing paragraphs. When you copy-paste, your computer tries to reconstruct the reading order but often gets confused by columns, headers, footers, and line breaks. The result is jumbled text with random line breaks and merged words." }
    },
    {
      "@type": "Question",
      "name": "How do I copy text from a PDF without losing formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you want clean plain text, convert the PDF to TXT using PDF.it's PDF to TXT tool — it handles reading order and removes hidden formatting. If you need formatted text, use PDF to Word to get an editable document with styling intact." }
    },
    {
      "@type": "Question",
      "name": "Why can't I select text in my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "There are two common reasons: the PDF is a scanned image (not real text), or the PDF is security-locked to prevent text copying. For scanned PDFs, use an OCR tool. For locked PDFs, use Unlock PDF if you have the password." }
    },
    {
      "@type": "Question",
      "name": "How do I copy a table from a PDF into a spreadsheet?",
      "acceptedAnswer": { "@type": "Answer", "text": "Standard copy-paste almost never preserves table structure from PDFs. Convert the PDF to Excel using PDF.it's PDF to Excel tool, which reconstructs rows and columns. For simple tables, PDF to Word can also preserve the structure." }
    },
    {
      "@type": "Question",
      "name": "Does converting PDF to TXT keep paragraph breaks?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to TXT preserves basic line breaks and paragraph spacing, but it removes all other formatting. The result is clean, readable text that you can paste into any app without hidden formatting issues." }
    },
    {
      "@type": "Question",
      "name": "Can I copy text from a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but copy-paste on mobile is even more unreliable than on desktop. For the best results, upload your PDF to PDF.it's PDF to TXT tool in your mobile browser and download the clean text file." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Copy Clean Text from a PDF",
  "description": "Get clean, usable text from any PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's PDF to TXT tool and upload the PDF you want to extract text from."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to clean plain text",
      "text": "Click Convert. PDF.it extracts the text in the correct reading order, removing hidden formatting and layout artifacts."
    },
    {
      "@type": "HowToStep",
      "name": "Paste into your notes or docs",
      "text": "Download the TXT file and copy the text into your notes app, Google Docs, Word, or any other destination. The text will be clean and properly formatted."
    }
  ]
}

export default function CopyTextFromPdfToNotesPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to TXT</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Copy Text from a PDF into Notes or Docs (Cleanly)</h1>
              <p className="text-xl text-slate-300">
                You tried Ctrl+C, Ctrl+V and got a mess of broken lines, random spaces, and merged paragraphs. Here's why — and how to get clean text every time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need clean text right now? Skip the guide and extract it instantly.</p>
            </div>
            <Link
              href="/pdf-to-txt"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF to TXT Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why copy-paste breaks */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Copy-Paste from PDFs Is Almost Always Broken</h2>
              <p className="text-slate-600 mb-4">
                When you select text in a PDF viewer and paste it into Notes, Google Docs, or Word, the result often looks terrible. This isn't a bug in your PDF reader — it's a fundamental problem with how PDFs store text.
              </p>
              <p className="text-slate-600 mb-4">
                Unlike a Word document where text flows in paragraphs, a PDF positions each character (or group of characters) at exact coordinates on a page. Your PDF viewer has to <em>guess</em> the reading order by looking at positions. Here's what goes wrong:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Line breaks where they shouldn't be.</strong> PDFs store each line separately. When you paste, every visual line becomes a hard line break — so a paragraph turns into dozens of short lines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Columns get merged.</strong> Two-column layouts paste as alternating lines from each column, making the text unreadable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Headers and footers mix in.</strong> Page numbers, running headers, and footnotes appear in the middle of your text.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Hidden formatting carries over.</strong> When pasting into Google Docs or Word, invisible font styles, sizes, and colors from the PDF create inconsistent formatting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Special characters break.</strong> Ligatures (fi, fl), smart quotes, and em-dashes often paste as garbled characters or question marks.</span>
                </li>
              </ul>
            </section>

            {/* The clean way */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">The Clean Way: Convert PDF to TXT First</h2>
              <p className="text-slate-600 mb-4">
                Instead of fighting with copy-paste, convert the entire PDF to a clean TXT file using <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF.it's PDF to TXT tool</Link>. This approach gives you properly ordered text without hidden formatting:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Drag your file into the PDF to TXT tool. It handles multi-page documents, multi-column layouts, and mixed content automatically.",
                  },
                  {
                    title: "Download the clean TXT file",
                    desc: "The tool extracts text in the correct reading order with proper paragraph breaks. No hidden formatting, no random line breaks, no column mixing.",
                  },
                  {
                    title: "Paste into your destination",
                    desc: "Open the TXT file, select all the text, and paste it into your notes app, Google Docs, Word, or email. It will look clean every time.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Paste without formatting tip */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quick Fix: Paste Without Formatting</h2>
              <p className="text-slate-600 mb-4">
                If you're in a hurry and just need to paste a small section, use "Paste without formatting" to strip the hidden styles. This won't fix reading order issues, but it removes inconsistent fonts and sizes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Platform</th>
                      <th className="text-left py-3 px-4 font-bold">Shortcut</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Windows / Chrome / Docs</td>
                      <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-0.5 rounded">Ctrl + Shift + V</code></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Mac</td>
                      <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-0.5 rounded">Cmd + Shift + V</code></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Word (Windows)</td>
                      <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-0.5 rounded">Ctrl + Alt + V</code> then select "Unformatted Text"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                This helps with formatting but won't fix broken line breaks or column mixing. For a truly clean result, use <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link>.
              </p>
            </section>

            {/* When you need more than text */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When You Need More Than Just the Text</h2>
              <p className="text-slate-600 mb-4">
                Sometimes plain text isn't enough. Here's when to use a different tool:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Need to edit the document layout?</h3>
                  <p className="text-slate-600">
                    Use <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> to get an editable .docx file that preserves tables, images, headings, and formatting. You can then edit it in Word or Google Docs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Need to extract a table into a spreadsheet?</h3>
                  <p className="text-slate-600">
                    Use <Link href="/pdf-to-excel" className="text-orange-600 hover:underline">PDF to Excel</Link> to convert tables directly into spreadsheet format with rows and columns intact.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Can't select any text at all?</h3>
                  <p className="text-slate-600">
                    Your PDF is probably a scanned image. Use <Link href="/ocr-scanner" className="text-orange-600 hover:underline">OCR Scanner</Link> to convert the scanned pages into selectable, copyable text.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips for specific apps */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Specific Apps</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Docs</h3>
                  <p className="text-slate-600">
                    Google Docs can open PDFs directly (File &gt; Open), but the result is often messy. For clean text, convert to TXT first with <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link>, then paste into a new Doc.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Apple Notes / Notion / Obsidian</h3>
                  <p className="text-slate-600">
                    These apps accept plain text beautifully. Convert your PDF to TXT, then paste directly. The text will match your note's existing formatting instead of importing PDF styles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Microsoft Word</h3>
                  <p className="text-slate-600">
                    Word can open PDFs directly but often misinterprets layouts. For a cleaner conversion, use <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> which produces better results than Word's built-in converter.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Get Clean Text from Any PDF</h2>
            <p className="text-slate-300 mb-6">Stop fighting with copy-paste. Convert your PDF to clean text in seconds — free, no signup required.</p>
            <Link
              href="/pdf-to-txt"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> PDF to TXT Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert PDF to TXT: Extract Plain Text in Seconds", href: "/learn/convert-pdf-to-txt" },
                { title: "Why PDF-to-Text Output Looks Garbled (And How to Fix It)", href: "/learn/pdf-text-garbled-fix" },
                { title: "Convert Scanned PDF to Text: When You Need OCR", href: "/learn/convert-scanned-pdf-to-text" },
                { title: "Extract Text from PDF on iPhone/Android (Best Methods)", href: "/learn/extract-text-from-pdf-on-mobile" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
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
                { q: "Why does text from a PDF paste with weird formatting?", a: "PDFs store text as positioned characters, not flowing paragraphs. When you copy-paste, your computer tries to reconstruct the reading order but often gets confused by columns, headers, footers, and line breaks. The result is jumbled text with random line breaks and merged words." },
                { q: "How do I copy text from a PDF without losing formatting?", a: "If you want clean plain text, convert the PDF to TXT using PDF.it's PDF to TXT tool — it handles reading order and removes hidden formatting. If you need formatted text, use PDF to Word to get an editable document with styling intact." },
                { q: "Why can't I select text in my PDF?", a: "There are two common reasons: the PDF is a scanned image (not real text), or the PDF is security-locked to prevent text copying. For scanned PDFs, use an OCR tool. For locked PDFs, use Unlock PDF if you have the password." },
                { q: "How do I copy a table from a PDF into a spreadsheet?", a: "Standard copy-paste almost never preserves table structure from PDFs. Convert the PDF to Excel using PDF.it's PDF to Excel tool, which reconstructs rows and columns. For simple tables, PDF to Word can also preserve the structure." },
                { q: "Does converting PDF to TXT keep paragraph breaks?", a: "PDF to TXT preserves basic line breaks and paragraph spacing, but it removes all other formatting. The result is clean, readable text that you can paste into any app without hidden formatting issues." },
                { q: "Can I copy text from a PDF on my phone?", a: "Yes, but copy-paste on mobile is even more unreliable than on desktop. For the best results, upload your PDF to PDF.it's PDF to TXT tool in your mobile browser and download the clean text file." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
