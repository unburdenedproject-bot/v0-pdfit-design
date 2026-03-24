import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Office to PDF Converter: DOCX, XLSX, PPTX to PDF | PDF.it",
  description:
    "Convert Word, Excel, and PowerPoint files to PDF in one place. Learn when to use the all-in-one Office to PDF converter vs individual tools, supported formats, and quality tips.",
  keywords: "office to pdf converter, convert office to pdf, docx to pdf, xlsx to pdf, pptx to pdf, office files to pdf online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Office formats can I convert to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it supports DOCX (Word), XLSX (Excel), PPTX (PowerPoint), DOC, XLS, PPT, and other common Microsoft Office formats. Upload any Office file and get a PDF back in seconds." }
    },
    {
      "@type": "Question",
      "name": "Is the Office to PDF converter free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can convert up to 10 files per day for free (3 without an account, then sign up for more). Pro users get unlimited conversions and larger file size limits." }
    },
    {
      "@type": "Question",
      "name": "Will my formatting be preserved when converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "In most cases, yes. PDF.it uses a high-fidelity conversion engine that preserves fonts, tables, images, and layout. If you notice issues, check that your fonts are standard system fonts and your margins are set correctly before converting." }
    },
    {
      "@type": "Question",
      "name": "Should I use the all-in-one converter or individual tools?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use the all-in-one Office to PDF tool when you have mixed file types (Word + Excel + PowerPoint) to convert in one batch. Use individual tools (Word to PDF, Excel to PDF, etc.) when you need format-specific settings like Excel page fitting or PowerPoint slide orientation." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple Office files to PDF at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pro users can batch-convert multiple Office files in a single upload. Each file is converted independently and you can download them all as a ZIP file." }
    },
    {
      "@type": "Question",
      "name": "Do I need Microsoft Office installed to convert files?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it is a fully online tool — everything runs in the cloud. You don't need Office, LibreOffice, or any software installed. Just upload your file from any browser." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Office Files to PDF Online",
  "description": "Convert any Microsoft Office document to PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your Office file",
      "text": "Go to PDF.it's Office to PDF tool and upload your Word, Excel, or PowerPoint file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Click Convert to PDF. PDF.it processes the file in the cloud, preserving your original formatting, fonts, and layout."
    },
    {
      "@type": "HowToStep",
      "name": "Download your PDF",
      "text": "Once the conversion is complete, download your PDF. You can also compress it, merge it with other PDFs, or add password protection."
    }
  ]
}

export default function OfficeToPDFConverterPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Office to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Office to PDF Converter: DOCX, XLSX, PPTX to PDF</h1>
              <p className="text-xl text-slate-300">
                Convert any Microsoft Office file to PDF — Word documents, Excel spreadsheets, and PowerPoint presentations — all from one tool, no software required.
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
              <p className="text-slate-700 font-semibold">Ready to convert? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/office-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Office to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* What is Office to PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Is an Office to PDF Converter?</h2>
              <p className="text-slate-600 mb-4">
                An Office to PDF converter takes Microsoft Office files — <strong>DOCX, XLSX, PPTX</strong> (and their older counterparts DOC, XLS, PPT) — and turns them into universally readable PDF documents. PDFs look the same on every device and can't be accidentally edited, which makes them the standard for sharing final versions of documents.
              </p>
              <p className="text-slate-600">
                PDF.it's <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF converter</Link> handles all three formats in one place. Upload a Word doc, an Excel spreadsheet, or a PowerPoint deck — you get a properly formatted PDF back in seconds.
              </p>
            </section>

            {/* Supported formats */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Supported Formats</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Application</th>
                      <th className="text-left py-3 px-4 font-bold">Formats Accepted</th>
                      <th className="text-left py-3 px-4 font-bold">Dedicated Tool</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Microsoft Word</td>
                      <td className="py-3 px-4">.docx, .doc</td>
                      <td className="py-3 px-4"><Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Microsoft Excel</td>
                      <td className="py-3 px-4">.xlsx, .xls</td>
                      <td className="py-3 px-4"><Link href="/excel-to-pdf" className="text-orange-600 hover:underline">Excel to PDF</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Microsoft PowerPoint</td>
                      <td className="py-3 px-4">.pptx, .ppt</td>
                      <td className="py-3 px-4"><Link href="/powerpoint-to-pdf" className="text-orange-600 hover:underline">PowerPoint to PDF</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* All-in-one vs individual tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">All-in-One Converter vs. Individual Tools</h2>
              <p className="text-slate-600 mb-4">
                PDF.it offers both a unified <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF</Link> tool and separate tools for each format. Here's when to use which:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Use the all-in-one converter</strong> when you have a mix of Word, Excel, and PowerPoint files to convert in a single batch. One upload, multiple formats, all converted at once.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Use <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link></strong> when you need specific Word formatting options or want to fine-tune margins and layout.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Use <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">Excel to PDF</Link></strong> when you need to control page fitting, column widths, or landscape orientation for wide spreadsheets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Use <Link href="/powerpoint-to-pdf" className="text-orange-600 hover:underline">PowerPoint to PDF</Link></strong> when you want control over slide layout, handout formatting, or notes pages.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert Office Files to PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your Office file",
                    desc: "Go to the Office to PDF tool and drag your file into the upload area, or click to browse. Accepts .docx, .xlsx, .pptx and their older equivalents. Free users can upload files up to 25MB.",
                  },
                  {
                    title: "Convert to PDF",
                    desc: "Click Convert to PDF. The conversion runs in the cloud — no software needed. Your formatting, fonts, images, and layout are preserved automatically.",
                  },
                  {
                    title: "Download your PDF",
                    desc: "Download the converted PDF. From here you can compress it, merge it with other files, add a password, or share it — all within PDF.it.",
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

            {/* Quality tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for High-Quality Conversions</h2>
              <p className="text-slate-600 mb-4">
                Most Office-to-PDF conversions work perfectly the first time. But if you need pixel-perfect results, follow these tips:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Use standard fonts.</strong> Arial, Calibri, Times New Roman, and other system fonts convert flawlessly. Custom or decorative fonts may be substituted.</li>
                <li>✓ <strong>Check margins before converting.</strong> Narrow margins in Word sometimes cause text to clip in the PDF. Set margins to "Normal" (1 inch) if you see issues.</li>
                <li>✓ <strong>Save your file before uploading.</strong> Make sure all changes are saved in the latest .docx/.xlsx/.pptx format — older formats (.doc, .xls) may have slight rendering differences.</li>
                <li>✓ <strong>For Excel, set the print area.</strong> Excel PDFs use the print area to determine what appears on each page. Set this in Page Layout before converting.</li>
              </ul>
            </section>

            {/* Why convert to PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert Office Files to PDF?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Universal Compatibility</h3>
                  <p className="text-slate-600">
                    Not everyone has Microsoft Office. PDFs open on any device, any operating system, in any browser. Your recipient sees exactly what you see — no missing fonts, no shifted layout.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Prevent Accidental Edits</h3>
                  <p className="text-slate-600">
                    Sending a Word document invites edits. PDFs are read-only by default, making them ideal for contracts, proposals, and final reports. For extra security, you can <Link href="/protect-pdf" className="text-orange-600 hover:underline">add a password</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Smaller File Sizes</h3>
                  <p className="text-slate-600">
                    PDF conversion often reduces file size compared to the original Office file, especially for image-heavy documents. If the PDF is still large, run it through <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> for further reduction.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your Office Files?</h2>
            <p className="text-slate-300 mb-6">Upload any Word, Excel, or PowerPoint file and get a perfect PDF in seconds — free, no signup required.</p>
            <Link
              href="/office-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Convert to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert DOCX, XLSX, PPTX to PDF (One Workflow)", href: "/learn/convert-docx-xlsx-pptx-to-pdf" },
                { title: "Should You Send Word/Excel or PDF? Pros, Cons, and When to Convert", href: "/learn/best-format-to-send-documents" },
                { title: "Office to PDF Without Layout Shifts (Common Fixes)", href: "/learn/office-to-pdf-keep-formatting" },
                { title: "Convert Office Files to PDF on Mobile (iPhone/Android)", href: "/learn/office-to-pdf-on-mobile" },
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
                { q: "What Office formats can I convert to PDF?", a: "PDF.it supports DOCX (Word), XLSX (Excel), PPTX (PowerPoint), DOC, XLS, PPT, and other common Microsoft Office formats. Upload any Office file and get a PDF back in seconds." },
                { q: "Is the Office to PDF converter free?", a: "Yes. You can convert up to 10 files per day for free (3 without an account, then sign up for more). Pro users get unlimited conversions and larger file size limits." },
                { q: "Will my formatting be preserved when converting to PDF?", a: "In most cases, yes. PDF.it uses a high-fidelity conversion engine that preserves fonts, tables, images, and layout. If you notice issues, check that your fonts are standard system fonts and your margins are set correctly." },
                { q: "Should I use the all-in-one converter or individual tools?", a: "Use the all-in-one Office to PDF tool when you have mixed file types to convert in one batch. Use individual tools when you need format-specific settings like Excel page fitting or PowerPoint slide orientation." },
                { q: "Can I convert multiple Office files to PDF at once?", a: "Yes. Pro users can batch-convert multiple Office files in a single upload. Each file is converted independently and you can download them all as a ZIP file." },
                { q: "Do I need Microsoft Office installed to convert files?", a: "No. PDF.it is a fully online tool — everything runs in the cloud. You don't need Office, LibreOffice, or any software installed. Just upload your file from any browser." },
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
