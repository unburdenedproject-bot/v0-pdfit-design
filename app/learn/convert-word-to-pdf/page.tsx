import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert Word to PDF Online (DOCX to PDF) | PDF.it",
  description:
    "Learn how to convert Word to PDF online in seconds. Step-by-step guide covering formatting preservation, free vs Pro options, and why PDF is the universal sharing format.",
  keywords: "convert word to pdf online, docx to pdf, word to pdf free, convert docx to pdf online, word document to pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert Word to PDF online for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your .docx or .doc file to PDF.it's Word to PDF tool, click Convert, and download the PDF. No signup required for your first 3 files — it takes about 10 seconds." }
    },
    {
      "@type": "Question",
      "name": "Will my formatting stay the same when I convert Word to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserves fonts, spacing, images, headers, footers, and page layout during conversion. For best results, use standard fonts like Arial, Calibri, or Times New Roman in your Word document." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple Word files to PDF at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pro users can batch-convert multiple .docx files to PDF in a single session. Free users can convert one file at a time." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between .doc and .docx?",
      "acceptedAnswer": { "@type": "Answer", "text": ".doc is the older Microsoft Word format (Word 97-2003). .docx is the modern format used since Word 2007. Both can be converted to PDF with PDF.it, but .docx files generally produce better results with more accurate formatting." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my Word document for conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it processes your file securely and deletes it from servers after conversion. Your document is never stored, shared, or used for any purpose beyond the conversion you requested." }
    },
    {
      "@type": "Question",
      "name": "Why should I convert Word to PDF instead of sharing the .docx file?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs look the same on every device and operating system. Word documents can shift formatting depending on the version of Word, installed fonts, and screen size. PDFs also prevent accidental edits, making them ideal for final versions of contracts, resumes, and reports." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Word to PDF Online",
  "description": "Convert your DOCX file to PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your Word document",
      "text": "Go to PDF.it's Word to PDF tool and upload your .docx or .doc file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Click Convert",
      "text": "Click the Convert to PDF button. PDF.it processes your file in seconds, preserving all formatting, images, and fonts."
    },
    {
      "@type": "HowToStep",
      "name": "Download your PDF",
      "text": "Download the converted PDF to your device. Open it to verify formatting looks correct before sharing."
    }
  ]
}

export default function ConvertWordToPDFPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Word to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Word to PDF Online (DOCX to PDF)</h1>
              <p className="text-xl text-slate-300">
                Need to send a Word document that looks exactly the same on every device? Convert it to PDF in seconds — free, online, no software to install.
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
              <p className="text-slate-700 font-semibold">Ready to convert? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/word-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Word to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert Word to PDF?</h2>
              <p className="text-slate-600 mb-4">
                Word documents are great for writing and editing. But the moment you need to <strong>share</strong> a document — with a client, employer, or government agency — PDF is the right format. Here's why:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Universal compatibility.</strong> PDFs open on every device, operating system, and browser without needing Microsoft Word installed. Your recipient sees exactly what you see.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>No accidental edits.</strong> PDFs prevent recipients from accidentally (or intentionally) changing your content. This matters for contracts, invoices, and resumes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Consistent formatting.</strong> Word files can look different depending on the viewer's version of Word, installed fonts, and screen size. PDFs lock the layout in place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Smaller file size.</strong> PDFs are often smaller than the original Word file, especially for image-heavy documents. If the PDF is still too large, you can <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">compress it further</Link>.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert Word to PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your Word document",
                    desc: "Go to the Word to PDF tool and drag your .docx or .doc file into the upload area, or click to browse. Free users can upload files up to 25MB — Pro users up to 200MB.",
                  },
                  {
                    title: "Click Convert to PDF",
                    desc: "PDF.it converts your document in seconds. Fonts, images, tables, headers, footers, and page breaks are all preserved in the output PDF.",
                  },
                  {
                    title: "Download and verify",
                    desc: "Download your PDF and open it to confirm everything looks correct. If you need to convert other Office files too, try our Office to PDF tool for Excel and PowerPoint files.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* Formatting tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Preserving Formatting</h2>
              <p className="text-slate-600 mb-4">
                Most Word-to-PDF conversions are seamless, but certain elements can shift if you're not careful. Follow these tips for a perfect conversion:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use standard fonts</strong> like Arial, Calibri, or Times New Roman. Decorative or custom fonts may not render correctly in the PDF.</li>
                <li>&#10003; <strong>Embed images properly.</strong> Make sure images are inserted (not linked) in your Word document. Linked images may not transfer to the PDF.</li>
                <li>&#10003; <strong>Check page breaks.</strong> Manual page breaks convert more reliably than relying on Word's automatic pagination.</li>
                <li>&#10003; <strong>Simplify headers and footers.</strong> Complex header/footer layouts with multiple columns can sometimes shift. Keep them simple for best results.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For a deeper dive into formatting issues, read our guide on <Link href="/learn/docx-to-pdf-keep-formatting" className="text-[#14D8C4] hover:underline">how to keep formatting when converting DOCX to PDF</Link>.
              </p>
            </section>

            {/* Free vs Pro */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Free vs. Pro: What's the Difference?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">Free</th>
                      <th className="text-left py-3 px-4 font-bold">Pro ($3.99/mo)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Conversions per day</td>
                      <td className="py-3 px-4">10 (3 without account)</td>
                      <td className="py-3 px-4">Unlimited</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Max file size</td>
                      <td className="py-3 px-4">25MB</td>
                      <td className="py-3 px-4">200MB</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Batch conversion</td>
                      <td className="py-3 px-4">One file at a time</td>
                      <td className="py-3 px-4">Multiple files at once</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Processing speed</td>
                      <td className="py-3 px-4">Standard</td>
                      <td className="py-3 px-4">Priority queue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Other Office formats */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Need to Convert Other Office Formats?</h2>
              <p className="text-slate-600 mb-4">
                Word isn't the only file type you might need to turn into a PDF. PDF.it handles the full Microsoft Office suite:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/excel-to-pdf" className="text-[#14D8C4] hover:underline">Excel to PDF</Link> — convert spreadsheets while preserving columns, rows, and charts.</li>
                <li>&#10003; <Link href="/powerpoint-to-pdf" className="text-[#14D8C4] hover:underline">PowerPoint to PDF</Link> — turn slide decks into shareable PDFs.</li>
                <li>&#10003; <Link href="/office-to-pdf" className="text-[#14D8C4] hover:underline">Office to PDF</Link> — a universal tool that accepts .docx, .xlsx, .pptx, and more.</li>
              </ul>
            </section>

            {/* After conversion */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Converting</h2>
              <p className="text-slate-600 mb-4">
                Once your Word document is a PDF, you might want to take a few extra steps before sharing:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Compress it</strong> with <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> if the file is too large for email or an upload portal.</li>
                <li>&#10003; <strong>Password-protect it</strong> using <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> if the document contains sensitive information like contracts or financial data.</li>
                <li>&#10003; <strong>Merge it</strong> with other PDFs using <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> if you need to combine multiple documents into one file.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your Word Document?</h2>
            <p className="text-slate-300 mb-6">Upload your .docx file and get a PDF in seconds — free, no signup required.</p>
            <Link
              href="/word-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Word to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "DOCX to PDF Without Formatting Issues (Fonts, Spacing, Images)", href: "/learn/docx-to-pdf-keep-formatting" },
                { title: "Word to PDF Formatting Changed? Fix These 7 Causes", href: "/learn/word-to-pdf-common-formatting-fixes" },
                { title: "Convert a Resume from Word to PDF (ATS-Friendly Tips)", href: "/learn/convert-resume-word-to-pdf" },
                { title: "Convert Word to PDF on iPhone (DOCX to PDF in Minutes)", href: "/learn/word-to-pdf-on-iphone" },
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
                { q: "How do I convert Word to PDF online for free?", a: "Upload your .docx or .doc file to PDF.it's Word to PDF tool, click Convert, and download the PDF. No signup required for your first 3 files — it takes about 10 seconds." },
                { q: "Will my formatting stay the same when I convert Word to PDF?", a: "PDF.it preserves fonts, spacing, images, headers, footers, and page layout during conversion. For best results, use standard fonts like Arial, Calibri, or Times New Roman in your Word document." },
                { q: "Can I convert multiple Word files to PDF at once?", a: "Yes. Pro users can batch-convert multiple .docx files to PDF in a single session. Free users can convert one file at a time." },
                { q: "What's the difference between .doc and .docx?", a: ".doc is the older Microsoft Word format (Word 97-2003). .docx is the modern format used since Word 2007. Both can be converted to PDF with PDF.it, but .docx files generally produce better results with more accurate formatting." },
                { q: "Is it safe to upload my Word document for conversion?", a: "Yes. PDF.it processes your file securely and deletes it from servers after conversion. Your document is never stored, shared, or used for any purpose beyond the conversion you requested." },
                { q: "Why should I convert Word to PDF instead of sharing the .docx file?", a: "PDFs look the same on every device and operating system. Word documents can shift formatting depending on the version of Word, installed fonts, and screen size. PDFs also prevent accidental edits, making them ideal for final versions of contracts, resumes, and reports." },
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
