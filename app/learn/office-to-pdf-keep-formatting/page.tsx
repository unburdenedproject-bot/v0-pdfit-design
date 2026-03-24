import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Keep Formatting When Converting Office to PDF | PDF.it",
  description:
    "Fix formatting issues when converting Word, Excel, or PowerPoint to PDF. Learn how to preserve fonts, layout, images, and tables so your PDF looks exactly like the original.",
  keywords: "office to pdf keep formatting, word to pdf formatting issues, preserve formatting pdf, convert to pdf without losing formatting",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my Word document look different after converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common cause is non-standard fonts. If the converter does not have the same font installed, it substitutes a similar one — which changes spacing, line breaks, and page layout. Use standard fonts or embed your fonts before converting." }
    },
    {
      "@type": "Question",
      "name": "How do I fix table formatting issues in Excel to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Set the print area in Excel before converting, switch to landscape orientation for wide tables, and use 'Fit Sheet on One Page' in Page Layout settings. This ensures columns are not cut off in the PDF." }
    },
    {
      "@type": "Question",
      "name": "Do images get compressed when converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Some converters compress images during conversion. PDF.it preserves image quality by default. If you need a smaller file afterward, use the Compress PDF tool to reduce size without affecting readability." }
    },
    {
      "@type": "Question",
      "name": "Will my PowerPoint animations show in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF is a static format, so animations and slide transitions are not preserved. Each slide becomes one page in the PDF with all visible elements shown in their final state." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Office files to PDF without losing hyperlinks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it preserves clickable hyperlinks during conversion. Links to websites, email addresses, and bookmarks within the document remain functional in the PDF." }
    },
    {
      "@type": "Question",
      "name": "What fonts should I use to avoid formatting issues?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use standard fonts like Arial, Calibri, Times New Roman, Verdana, or Helvetica. These are available on virtually every system and will render correctly in any PDF converter." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Keep Formatting When Converting Office to PDF",
  "description": "Preserve your document's layout, fonts, and images when converting to PDF in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepare your document",
      "text": "Use standard fonts, set proper margins, and define print areas (for Excel). Accept or reject tracked changes in Word documents."
    },
    {
      "@type": "HowToStep",
      "name": "Convert with PDF.it",
      "text": "Upload your file to PDF.it's Office to PDF tool. The converter preserves formatting, fonts, images, and layout automatically."
    },
    {
      "@type": "HowToStep",
      "name": "Verify the result",
      "text": "Open the PDF and check every page. Confirm that fonts, images, tables, and page breaks look correct before sharing or submitting."
    }
  ]
}

export default function OfficeToQdfKeepFormattingPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Office to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Keep Formatting When Converting Office to PDF</h1>
              <p className="text-xl text-slate-300">
                Fonts changing, tables shifting, images disappearing — formatting issues are the most frustrating part of converting Office files to PDF. Here is how to prevent every common problem.
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
              <p className="text-slate-700 font-semibold">Ready to convert? Our tool preserves formatting automatically.</p>
            </div>
            <Link
              href="/office-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Common formatting issues */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Formatting Issues (And Why They Happen)</h2>
              <p className="text-slate-600 mb-4">
                Most formatting problems during conversion fall into a few predictable categories. Understanding the root cause makes them easy to fix:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Font substitution.</strong> If your document uses a font the converter does not have, it swaps in a similar font. This changes letter spacing, line breaks, and sometimes pushes content to the next page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Margin and page size differences.</strong> If your document was designed for A4 paper but the converter defaults to Letter size (or vice versa), content near the edges can get cut off or shifted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Image displacement.</strong> Images anchored to text may shift when line spacing changes due to font substitution. Images set to &quot;in line with text&quot; are more stable than floating images.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Table overflow.</strong> Wide Excel tables can extend beyond the PDF page width, cutting off columns on the right side.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Special characters missing.</strong> Symbols, emojis, or characters from non-Latin scripts may not render if the font does not support them.</span>
                </li>
              </ul>
            </section>

            {/* How to fix: step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Prevent Formatting Issues (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Use standard, widely available fonts",
                    desc: "Stick to Arial, Calibri, Times New Roman, Verdana, or Helvetica. These fonts are available on every operating system and every PDF converter. Avoid decorative or custom-installed fonts for critical documents.",
                  },
                  {
                    title: "Prepare your document before converting",
                    desc: "In Word: accept tracked changes and remove comments. In Excel: set the print area and choose landscape for wide tables. In PowerPoint: check that no text overflows beyond slide boundaries.",
                  },
                  {
                    title: "Convert and verify the result",
                    desc: "Upload to PDF.it's Office to PDF tool, download the PDF, and open it to check every page. Look for shifted images, missing fonts, cut-off tables, and incorrect page breaks.",
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

            {/* Word-specific tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Word to PDF: Formatting Tips</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Embed Fonts in Your Document</h3>
                  <p className="text-slate-600">
                    In Microsoft Word, go to File &gt; Options &gt; Save and check &quot;Embed fonts in the file.&quot; This bundles your fonts into the document so the converter can use them exactly as intended. This increases file size slightly but eliminates font substitution problems.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Set Images to &quot;In Line with Text&quot;</h3>
                  <p className="text-slate-600">
                    Floating images (set to &quot;square,&quot; &quot;tight,&quot; or &quot;behind text&quot; wrapping) are the most likely to shift during conversion. Right-click each image, choose &quot;Wrap Text,&quot; and select &quot;In Line with Text&quot; for maximum stability. Use the <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link> tool for the most reliable conversion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Remove Tracked Changes and Comments</h3>
                  <p className="text-slate-600">
                    Tracked changes and comments can appear unexpectedly in the PDF if they are not resolved. Go to Review &gt; Accept All Changes, then delete all comments before converting.
                  </p>
                </div>
              </div>
            </section>

            {/* Excel-specific tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Excel to PDF: Formatting Tips</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Set the print area.</strong> Select the cells you want in the PDF, then go to Page Layout &gt; Print Area &gt; Set Print Area. This prevents extra blank columns from appearing in the PDF.</li>
                <li>&#10003; <strong>Use landscape orientation</strong> for wide spreadsheets. Go to Page Layout &gt; Orientation &gt; Landscape.</li>
                <li>&#10003; <strong>Fit to one page.</strong> In Page Setup, set Width to &quot;1 page&quot; to prevent columns from being cut off. Be careful with very wide sheets — the text may become too small to read.</li>
                <li>&#10003; <strong>Check Print Preview first.</strong> Before converting, use File &gt; Print Preview to see exactly how your spreadsheet will look as a PDF. Fix any issues in the spreadsheet before uploading to <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">Excel to PDF</Link>.</li>
              </ul>
            </section>

            {/* PowerPoint-specific tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PowerPoint to PDF: Formatting Tips</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Check text overflow.</strong> Text that extends beyond the slide boundary in PowerPoint may get clipped in the PDF. Make sure all text fits within the visible area of each slide.</li>
                <li>&#10003; <strong>Understand what does not transfer.</strong> Animations, slide transitions, embedded videos, and audio will not appear in the PDF. Each slide becomes a static page showing all elements in their final position.</li>
                <li>&#10003; <strong>Use standard slide sizes.</strong> If you used a custom slide size, the PDF pages will match that size. Standard 16:9 or 4:3 slides convert most reliably with the <Link href="/powerpoint-to-pdf" className="text-orange-600 hover:underline">PowerPoint to PDF</Link> tool.</li>
                <li>&#10003; <strong>Embed fonts in PowerPoint.</strong> Just like Word, go to File &gt; Options &gt; Save &gt; &quot;Embed fonts in the file&quot; to prevent font substitution.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert Without Losing Formatting</h2>
            <p className="text-slate-300 mb-6">PDF.it preserves fonts, images, and layout automatically. Upload your Office file and get a pixel-perfect PDF.</p>
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
                { title: "Office to PDF Converter: DOCX, XLSX, PPTX to PDF", href: "/learn/office-to-pdf-converter" },
                { title: "Convert DOCX, XLSX & PPTX to PDF — All Office Formats", href: "/learn/convert-docx-xlsx-pptx-to-pdf" },
                { title: "Best Format to Send Documents (PDF vs DOCX vs Other)", href: "/learn/best-format-to-send-documents" },
                { title: "Convert Office Files to PDF on Mobile (iPhone & Android)", href: "/learn/office-to-pdf-on-mobile" },
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
                { q: "Why does my Word document look different after converting to PDF?", a: "The most common cause is non-standard fonts. If the converter does not have the same font installed, it substitutes a similar one — which changes spacing, line breaks, and sometimes pushes content to the next page." },
                { q: "How do I fix table formatting issues in Excel to PDF?", a: "Set the print area in Excel before converting, switch to landscape orientation for wide tables, and use 'Fit Sheet on One Page' in Page Layout settings. This ensures columns are not cut off in the PDF." },
                { q: "Do images get compressed when converting to PDF?", a: "Some converters compress images during conversion. PDF.it preserves image quality by default. If you need a smaller file afterward, use the Compress PDF tool to reduce size without affecting readability." },
                { q: "Will my PowerPoint animations show in the PDF?", a: "No. PDF is a static format, so animations and slide transitions are not preserved. Each slide becomes one page in the PDF with all visible elements shown in their final state." },
                { q: "Can I convert Office files to PDF without losing hyperlinks?", a: "Yes. PDF.it preserves clickable hyperlinks during conversion. Links to websites, email addresses, and bookmarks within the document remain functional in the PDF." },
                { q: "What fonts should I use to avoid formatting issues?", a: "Use standard fonts like Arial, Calibri, Times New Roman, Verdana, or Helvetica. These are available on virtually every system and will render correctly in any PDF converter." },
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
