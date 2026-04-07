import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert DOCX, XLSX & PPTX to PDF — All Office Formats | PDF.it",
  description:
    "Learn how to convert any Microsoft Office file — Word, Excel, or PowerPoint — to PDF in one tool. Keep formatting, reduce file size, and share with confidence.",
  keywords: "convert docx to pdf, xlsx to pdf, pptx to pdf, office to pdf converter, word to pdf, excel to pdf, powerpoint to pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert DOCX, XLSX, and PPTX files to PDF in one tool?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it's Office to PDF tool accepts Word, Excel, and PowerPoint files all in one place. Upload any .docx, .xlsx, or .pptx file and get a PDF back in seconds." }
    },
    {
      "@type": "Question",
      "name": "Does converting Office files to PDF change the formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserves fonts, images, tables, and layout during conversion. For best results, use standard fonts and avoid complex macros in your original file." }
    },
    {
      "@type": "Question",
      "name": "Is it free to convert Office files to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free users get 10 conversions per day with files up to 25MB. Pro users get unlimited conversions with files up to 200MB and batch processing." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple Office files to PDF at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro users can batch-convert multiple Office files to PDF in a single operation. Free users can convert one file at a time." }
    },
    {
      "@type": "Question",
      "name": "What Office file formats does PDF.it support?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it supports .docx (Word), .xlsx (Excel), .pptx (PowerPoint), and legacy formats like .doc, .xls, and .ppt through the Office to PDF converter." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Office files to PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your Office file, convert it, and download the PDF — no app installation needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert DOCX, XLSX & PPTX to PDF",
  "description": "Convert any Microsoft Office file to PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your Office file",
      "text": "Go to PDF.it's Office to PDF tool and upload your .docx, .xlsx, or .pptx file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Click Convert and PDF.it will process your file, preserving all formatting, images, and layout."
    },
    {
      "@type": "HowToStep",
      "name": "Download your PDF",
      "text": "Download your converted PDF. If the file is too large, use the Compress PDF tool to reduce its size before sharing."
    }
  ]
}

export default function ConvertDocxXlsxPptxToPdfPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Office to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert DOCX, XLSX & PPTX to PDF — All Office Formats</h1>
              <p className="text-xl text-slate-300">
                Stop juggling three different converters. Whether you have a Word document, an Excel spreadsheet, or a PowerPoint deck, PDF.it turns any Office file into a clean PDF in seconds.
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
              href="/office-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert Office to PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert Office Files to PDF?</h2>
              <p className="text-slate-600 mb-4">
                Microsoft Office files are great for editing, but they are not ideal for sharing. Here is why PDF is the better choice when your document leaves your computer:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Universal compatibility.</strong> Anyone can open a PDF regardless of their device or software. Not everyone has Microsoft Office installed, but every device can read PDFs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Formatting stays intact.</strong> A Word document that looks perfect on your screen can shift fonts, margins, and images on someone else&#39;s computer. PDFs look the same everywhere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Professional appearance.</strong> Sending a polished PDF instead of an editable .docx signals attention to detail — especially for resumes, proposals, and invoices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Smaller file sizes.</strong> PDFs are often smaller than their Office counterparts, making them easier to email. You can <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">compress the PDF further</Link> if needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Security.</strong> PDFs can be <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">password-protected</Link> to prevent unauthorized editing or viewing.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert Any Office File to PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your Office file",
                    desc: "Go to PDF.it's Office to PDF tool and drag your .docx, .xlsx, or .pptx file into the upload area. Files up to 25MB are free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Click Convert",
                    desc: "PDF.it detects the file type automatically and converts it to PDF while preserving your formatting, images, charts, and tables.",
                  },
                  {
                    title: "Download your PDF",
                    desc: "Your PDF is ready in seconds. Download it directly or compress it afterward if you need a smaller file for email or uploading to a portal.",
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

            {/* Format-specific tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Each Office Format</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Word (.docx) to PDF</h3>
                  <p className="text-slate-600">
                    Word documents usually convert cleanly. Watch out for custom fonts that may not be embedded — stick to standard fonts like Arial, Times New Roman, or Calibri for best results. If your document has tracked changes, accept or reject them before converting. Use the dedicated <Link href="/word-to-pdf" className="text-[#14D8C4] hover:underline">Word to PDF</Link> tool for advanced options.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Excel (.xlsx) to PDF</h3>
                  <p className="text-slate-600">
                    Spreadsheets can be tricky because wide tables may get cut off. Before converting, set your print area in Excel and choose landscape orientation for wide sheets. The <Link href="/excel-to-pdf" className="text-[#14D8C4] hover:underline">Excel to PDF</Link> tool handles this automatically when possible.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PowerPoint (.pptx) to PDF</h3>
                  <p className="text-slate-600">
                    Presentations convert with one slide per page by default. Animations and transitions will not appear in the PDF, but all text, images, and charts are preserved. Use the <Link href="/powerpoint-to-pdf" className="text-[#14D8C4] hover:underline">PowerPoint to PDF</Link> tool for the best results.
                  </p>
                </div>
              </div>
            </section>

            {/* One tool vs three */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">One Converter vs. Three Separate Tools</h2>
              <p className="text-slate-600 mb-4">
                Many websites force you to use a different tool for each file type — one for Word, another for Excel, and a third for PowerPoint. That means uploading to three different pages and learning three different interfaces.
              </p>
              <p className="text-slate-600 mb-4">
                PDF.it&#39;s <Link href="/office-to-pdf" className="text-[#14D8C4] hover:underline">Office to PDF</Link> tool handles all three formats in one place. Upload any combination of .docx, .xlsx, and .pptx files and convert them all at once. Pro users can even batch-convert multiple files simultaneously.
              </p>
              <p className="text-slate-600">
                Of course, if you only work with one format, you can also use the dedicated converters: <Link href="/word-to-pdf" className="text-[#14D8C4] hover:underline">Word to PDF</Link>, <Link href="/excel-to-pdf" className="text-[#14D8C4] hover:underline">Excel to PDF</Link>, or <Link href="/powerpoint-to-pdf" className="text-[#14D8C4] hover:underline">PowerPoint to PDF</Link>.
              </p>
            </section>

            {/* After converting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Converting</h2>
              <p className="text-slate-600 mb-4">
                Once your Office files are PDFs, you might need a few extra steps depending on your use case:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Merge multiple PDFs</strong> into one document using <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> — great for combining a cover letter, resume, and portfolio.</li>
                <li>&#10003; <strong>Compress the PDF</strong> if it is too large for email. Use <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress PDF for Email</Link> to get it under the typical 25MB limit.</li>
                <li>&#10003; <strong>Add password protection</strong> with <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> if the document contains sensitive data.</li>
                <li>&#10003; <strong>Add a watermark</strong> using <Link href="/watermark-pdf" className="text-[#14D8C4] hover:underline">Watermark PDF</Link> to mark drafts or confidential documents.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your Office Files?</h2>
            <p className="text-slate-300 mb-6">Upload any Word, Excel, or PowerPoint file and get a perfect PDF in seconds — free, no signup required.</p>
            <Link
              href="/office-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Convert to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Office to PDF Converter: DOCX, XLSX, PPTX to PDF", href: "/learn/office-to-pdf-converter" },
                { title: "Best Format to Send Documents (PDF vs DOCX vs Other)", href: "/learn/best-format-to-send-documents" },
                { title: "How to Keep Formatting When Converting Office to PDF", href: "/learn/office-to-pdf-keep-formatting" },
                { title: "Convert Office Files to PDF on Mobile (iPhone & Android)", href: "/learn/office-to-pdf-on-mobile" },
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
                { q: "Can I convert DOCX, XLSX, and PPTX files to PDF in one tool?", a: "Yes. PDF.it's Office to PDF tool accepts Word, Excel, and PowerPoint files all in one place. Upload any .docx, .xlsx, or .pptx file and get a PDF back in seconds." },
                { q: "Does converting Office files to PDF change the formatting?", a: "PDF.it preserves fonts, images, tables, and layout during conversion. For best results, use standard fonts and avoid complex macros in your original file." },
                { q: "Is it free to convert Office files to PDF?", a: "Yes. Free users get 10 conversions per day with files up to 25MB. Pro users get unlimited conversions with files up to 200MB and batch processing." },
                { q: "Can I convert multiple Office files to PDF at once?", a: "Pro users can batch-convert multiple Office files to PDF in a single operation. Free users can convert one file at a time." },
                { q: "What Office file formats does PDF.it support?", a: "PDF.it supports .docx (Word), .xlsx (Excel), .pptx (PowerPoint), and legacy formats like .doc, .xls, and .ppt through the Office to PDF converter." },
                { q: "Can I convert Office files to PDF on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your Office file, convert it, and download the PDF — no app installation needed." },
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
