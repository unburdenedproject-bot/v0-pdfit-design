import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert PDF to TXT: Extract Plain Text in Seconds | PDF.it",
  description:
    "Learn how to convert PDF to TXT and extract plain text from any PDF file. Step-by-step guide for data entry, coding, note-taking, and more — free, online, no software needed.",
  keywords: "convert pdf to txt, pdf to text, extract text from pdf, pdf to plain text, pdf to txt converter",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a PDF to TXT for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's PDF to TXT tool, click Convert, and download the plain text file. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Will I lose formatting when converting PDF to TXT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — TXT files contain only plain text with no formatting. Bold, italics, tables, images, and colors are all removed. If you need to keep formatting, use PDF to Word instead." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF to TXT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Standard PDF to TXT tools cannot extract text from scanned PDFs because the text is stored as an image. You need OCR (Optical Character Recognition) to convert scanned pages to text. PDF.it's OCR Scanner handles this." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between PDF to TXT and PDF to Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to TXT extracts only the raw text content — no formatting, no images, no tables. PDF to Word preserves formatting, layout, tables, and images in an editable document. Use TXT when you just need the text content; use Word when you need to edit the full document." }
    },
    {
      "@type": "Question",
      "name": "Why is my PDF to TXT output missing text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Missing text usually means the PDF is scanned (text stored as an image) or uses custom/embedded fonts that can't be decoded. Try the OCR Scanner for scanned PDFs, or PDF to Word for documents with unusual fonts." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a PDF to TXT on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser — upload your PDF, convert it to TXT, and download the text file directly on iPhone or Android. No app installation needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to TXT Online",
  "description": "Extract plain text from any PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's PDF to TXT tool and upload your file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to plain text",
      "text": "Click Convert. PDF.it extracts all readable text from your PDF and generates a clean TXT file."
    },
    {
      "@type": "HowToStep",
      "name": "Download your TXT file",
      "text": "Download the plain text file. Open it in any text editor, paste it into your notes app, or use it in your code or data workflow."
    }
  ]
}

export default function ConvertPdfToTxtPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to TXT</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to TXT: Extract Plain Text in Seconds</h1>
              <p className="text-xl text-slate-300">
                Need the raw text from a PDF — no formatting, no images, just words? Here's how to convert any PDF to a clean TXT file in seconds.
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
              <p className="text-slate-700 font-semibold">Ready to extract text? Skip the guide and go straight to the tool.</p>
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

            {/* When you need plain text */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When Do You Need Plain Text from a PDF?</h2>
              <p className="text-slate-600 mb-4">
                Converting a PDF to TXT strips away everything except the raw text content. This is useful in more situations than you might expect:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Data entry and spreadsheets.</strong> When you need to pull text from invoices, receipts, or forms into a database or spreadsheet, TXT gives you clean data without formatting clutter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Coding and development.</strong> Developers often need to extract text from documentation, API specs, or log files saved as PDFs. Plain text is the easiest format to parse programmatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Note-taking and research.</strong> Copying text from a PDF into notes apps (Notion, Google Keep, Apple Notes) works much better with clean TXT than with copy-pasted PDF content that carries hidden formatting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Accessibility.</strong> Plain text works with every screen reader and assistive technology. Converting academic papers or reports to TXT makes them accessible to everyone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Text analysis.</strong> Running word counts, searching for keywords, or feeding content into AI tools is simpler with plain text files.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert PDF to TXT (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the PDF to TXT tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Convert to plain text",
                    desc: "Click Convert. PDF.it reads all selectable text in your PDF and generates a clean .txt file. This takes just a few seconds for most documents.",
                  },
                  {
                    title: "Download and use your text",
                    desc: "Download the TXT file and open it in any text editor, paste it into your notes, or use it in your workflow. The text is clean and ready to use immediately.",
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

            {/* What gets lost */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Gets Lost When You Convert PDF to TXT</h2>
              <p className="text-slate-600 mb-4">
                TXT is the simplest file format — it holds only characters and line breaks. When you convert a PDF to TXT, here's what is intentionally removed:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#x2717; <strong>All formatting</strong> — bold, italics, underlines, font sizes, and colors disappear.</li>
                <li>&#x2717; <strong>Images and graphics</strong> — photos, charts, logos, and diagrams are removed. Use <Link href="/extract-images-from-pdf" className="text-orange-600 hover:underline">Extract Images</Link> if you need those separately.</li>
                <li>&#x2717; <strong>Tables and layout</strong> — table structures collapse into plain text lines. Column alignment is lost.</li>
                <li>&#x2717; <strong>Headers and footers</strong> — page numbers, running headers, and footers may appear inline with the main text.</li>
                <li>&#x2717; <strong>Hyperlinks</strong> — clickable links become plain text (the URL text stays, but it's no longer clickable).</li>
              </ul>
              <p className="text-slate-600 mt-4">
                If you need to keep formatting, consider using <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> instead — it preserves layout, tables, and styling in an editable document.
              </p>
            </section>

            {/* PDF to TXT vs PDF to Word */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF to TXT vs PDF to Word: Which Should You Use?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">PDF to TXT</th>
                      <th className="text-left py-3 px-4 font-bold">PDF to Word</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Output</td>
                      <td className="py-3 px-4">Plain text only</td>
                      <td className="py-3 px-4">Formatted .docx document</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Keeps formatting</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">Yes (bold, tables, images)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Best for</td>
                      <td className="py-3 px-4">Data extraction, coding, notes</td>
                      <td className="py-3 px-4">Editing documents, reports</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">File size</td>
                      <td className="py-3 px-4">Tiny (KB)</td>
                      <td className="py-3 px-4">Larger (preserves media)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Tier</td>
                      <td className="py-3 px-4">Free</td>
                      <td className="py-3 px-4">Pro</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* When TXT won't work */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When PDF to TXT Won't Work (And What to Do Instead)</h2>
              <p className="text-slate-600 mb-4">
                PDF to TXT extracts <em>selectable</em> text — text you can highlight and copy in a PDF viewer. It does not work on:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Scanned PDFs</h3>
                  <p className="text-slate-600">
                    If your PDF is a scan (photos of paper pages), there's no selectable text to extract. You need <Link href="/ocr-scanner" className="text-orange-600 hover:underline">OCR (Optical Character Recognition)</Link> to read the text from the images. PDF.it's OCR Scanner handles this automatically.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Password-Protected PDFs</h3>
                  <p className="text-slate-600">
                    Some PDFs restrict text copying. If your PDF is protected, use <Link href="/unlock-pdf" className="text-orange-600 hover:underline">Unlock PDF</Link> first (you'll need the password), then convert to TXT.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDFs with Custom Fonts</h3>
                  <p className="text-slate-600">
                    Some PDFs use encoded or custom fonts that produce garbled text when extracted. If your output looks like gibberish, try <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> which handles font encoding differently, or use OCR as a fallback.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Extract Text from Your PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and get clean plain text in seconds — free, no signup required.</p>
            <Link
              href="/pdf-to-txt"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Convert PDF to TXT Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Copy Text from a PDF into Notes or Docs (Cleanly)", href: "/learn/copy-text-from-pdf-to-notes" },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I convert a PDF to TXT for free?", a: "Upload your PDF to PDF.it's PDF to TXT tool, click Convert, and download the plain text file. No signup required for your first 3 files." },
                { q: "Will I lose formatting when converting PDF to TXT?", a: "Yes — TXT files contain only plain text with no formatting. Bold, italics, tables, images, and colors are all removed. If you need to keep formatting, use PDF to Word instead." },
                { q: "Can I convert a scanned PDF to TXT?", a: "Standard PDF to TXT tools cannot extract text from scanned PDFs because the text is stored as an image. You need OCR (Optical Character Recognition) to convert scanned pages to text. PDF.it's OCR Scanner handles this." },
                { q: "What is the difference between PDF to TXT and PDF to Word?", a: "PDF to TXT extracts only the raw text content — no formatting, no images, no tables. PDF to Word preserves formatting, layout, tables, and images in an editable document. Use TXT when you just need the text; use Word when you need to edit the full document." },
                { q: "Why is my PDF to TXT output missing text?", a: "Missing text usually means the PDF is scanned (text stored as an image) or uses custom/embedded fonts that can't be decoded. Try the OCR Scanner for scanned PDFs, or PDF to Word for documents with unusual fonts." },
                { q: "Can I convert a PDF to TXT on my phone?", a: "Yes. PDF.it works in any mobile browser — upload your PDF, convert it to TXT, and download the text file directly on iPhone or Android. No app installation needed." },
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
