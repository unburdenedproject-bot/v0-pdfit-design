import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Word to PDF Formatting Changed? Fix These 7 Causes | PDF.it",
  description:
    "Word to PDF formatting changed? Learn the 7 most common causes — missing fonts, broken tables, margin shifts, blurry images — and how to fix each one before converting.",
  keywords: "word to pdf formatting changed, word to pdf formatting issues, docx to pdf format problems, word pdf formatting fix, word to pdf looks different",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my Word document look different after converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common causes are font substitution, different margin interpretation, and text reflow. When the conversion tool doesn't have the exact font you used, it substitutes a similar one with different character widths, causing text to shift across lines and pages." }
    },
    {
      "@type": "Question",
      "name": "How do I fix missing fonts when converting Word to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use standard fonts like Arial, Calibri, or Times New Roman which are available on all systems. If you need a custom font, embed it in your Word document: File > Options > Save > check 'Embed fonts in the file.' This ensures the font travels with the document." }
    },
    {
      "@type": "Question",
      "name": "Why do my tables break when I convert Word to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tables break because of auto-fit column widths, merged cells, and nested tables. Fix this by setting fixed column widths (Table Properties > Column > set specific width), avoiding deeply nested tables, and keeping table layouts simple." }
    },
    {
      "@type": "Question",
      "name": "Why are my images blurry or moved in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Images move when surrounding text reflows due to font changes. Blurriness happens when Word or the converter compresses images. Fix positioning by using 'In Line with Text' wrapping, and prevent blurriness by inserting high-resolution images and avoiding Word's built-in compression." }
    },
    {
      "@type": "Question",
      "name": "How do I prevent margin changes when converting Word to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Set explicit custom margins in Page Layout > Margins > Custom Margins instead of using presets. Avoid 'Mirror margins' unless you specifically need them for booklet printing, as some converters don't handle them well." }
    },
    {
      "@type": "Question",
      "name": "Can I get my hyperlinks to work in the converted PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Make sure hyperlinks are properly inserted using Word's hyperlink feature (Ctrl+K or right-click > Hyperlink) rather than pasted as plain text URLs. PDF.it preserves properly formatted hyperlinks during conversion." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix Word to PDF Formatting Issues",
  "description": "Fix the 7 most common formatting problems when converting Word to PDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identify the formatting issue",
      "text": "Compare your Word document and PDF side by side. Check fonts, tables, images, margins, headers/footers, hyperlinks, and page breaks to find what changed."
    },
    {
      "@type": "HowToStep",
      "name": "Apply the specific fix",
      "text": "Each issue has a targeted fix: embed fonts for font problems, set fixed widths for tables, anchor images, set explicit margins, simplify headers, format hyperlinks properly, or insert manual page breaks."
    },
    {
      "@type": "HowToStep",
      "name": "Re-convert and verify",
      "text": "Upload the corrected document to PDF.it's Word to PDF tool, convert it, and compare the output again to confirm the issue is resolved."
    }
  ]
}

export default function WordToPdfFormattingFixesPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Word to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Word to PDF Formatting Changed? Fix These 7 Causes</h1>
              <p className="text-xl text-slate-300">
                You converted your Word document to PDF and the formatting is wrong — fonts changed, tables broke, images moved. Here are the 7 most common causes and the exact fix for each one.
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
              <p className="text-slate-700 font-semibold">Need a reliable converter? PDF.it preserves formatting accurately.</p>
            </div>
            <Link
              href="/word-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Word to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Cause 1: Missing Fonts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Missing Fonts (Font Substitution)</h2>
              <p className="text-slate-600 mb-4">
                <strong>What happens:</strong> The PDF uses a different font than your Word document. Text looks thinner, thicker, or spaced differently. Lines break at different points, and content may overflow to extra pages.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Why it happens:</strong> The conversion tool doesn't have the exact font you used in Word. It substitutes a visually similar font, but "similar" isn't "identical" — character widths differ, causing text to reflow.
              </p>
              <p className="text-slate-600 mb-2"><strong>The fix:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Switch to standard fonts: Arial, Calibri, Times New Roman, Georgia, or Verdana.</li>
                <li>&#10003; Or embed your custom font: File &gt; Options &gt; Save &gt; "Embed fonts in the file."</li>
                <li>&#10003; Avoid using more than 2-3 fonts in a single document.</li>
              </ul>
            </section>

            {/* Cause 2: Broken Tables */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. Broken Tables</h2>
              <p className="text-slate-600 mb-4">
                <strong>What happens:</strong> Table columns shift, text wraps incorrectly inside cells, or tables split across pages in unexpected places.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Why it happens:</strong> Word uses auto-fit columns that adjust based on content and window size. The conversion engine calculates column widths differently, especially for tables with merged cells or nested tables.
              </p>
              <p className="text-slate-600 mb-2"><strong>The fix:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Set fixed column widths: right-click table &gt; Table Properties &gt; Column &gt; set a specific width in inches or centimeters.</li>
                <li>&#10003; Avoid nested tables (tables inside table cells).</li>
                <li>&#10003; Minimize merged cells — use simple grid layouts where possible.</li>
                <li>&#10003; If a table splits across pages badly, add a manual page break before it.</li>
              </ul>
            </section>

            {/* Cause 3: Header/Footer Shifts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Header and Footer Shifts</h2>
              <p className="text-slate-600 mb-4">
                <strong>What happens:</strong> Headers or footers appear in slightly different positions, overlap with body text, or disappear entirely on some pages.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Why it happens:</strong> Complex header/footer layouts with multiple columns, images, or tab stops are interpreted differently by conversion engines. Different-first-page and odd/even headers add complexity.
              </p>
              <p className="text-slate-600 mb-2"><strong>The fix:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Keep headers and footers simple — single line of text, one image (like a logo) at most.</li>
                <li>&#10003; Set explicit header/footer distances from the page edge in Page Layout &gt; Margins &gt; Layout tab.</li>
                <li>&#10003; If using page numbers, use Word's built-in page number feature rather than manual text.</li>
              </ul>
            </section>

            {/* Cause 4: Image Quality */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">4. Image Quality Loss</h2>
              <p className="text-slate-600 mb-4">
                <strong>What happens:</strong> Photos, charts, and graphics appear blurry, pixelated, or lower quality in the PDF than in the Word document.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Why it happens:</strong> Word may have compressed images when you inserted them (it does this by default), or the conversion tool applies its own compression. Resizing images by dragging handles in Word also degrades quality.
              </p>
              <p className="text-slate-600 mb-2"><strong>The fix:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Disable Word's auto-compression: File &gt; Options &gt; Advanced &gt; Image Size and Quality &gt; check "Do not compress images in file."</li>
                <li>&#10003; Insert images at the exact size you need — don't resize by dragging handles.</li>
                <li>&#10003; Use PDF.it for conversion — it preserves original image quality without aggressive compression.</li>
              </ul>
            </section>

            {/* Cause 5: Margin Changes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">5. Margin Changes</h2>
              <p className="text-slate-600 mb-4">
                <strong>What happens:</strong> Content appears shifted — more or less white space on the edges, text closer to the page border, or content cut off at the edges.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Why it happens:</strong> Word's margin presets ("Normal," "Narrow," "Wide") translate to specific values that some converters interpret slightly differently. Mirror margins for booklet printing are particularly problematic.
              </p>
              <p className="text-slate-600 mb-2"><strong>The fix:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Set custom margins with exact values: Page Layout &gt; Margins &gt; Custom Margins.</li>
                <li>&#10003; Use at least 0.5" (1.27cm) margins on all sides — smaller margins may be clipped by some PDF viewers.</li>
                <li>&#10003; Avoid mirror margins unless you specifically need them for double-sided printing.</li>
              </ul>
            </section>

            {/* Cause 6: Hyperlink Loss */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">6. Hyperlinks Not Working</h2>
              <p className="text-slate-600 mb-4">
                <strong>What happens:</strong> Links that were clickable in Word are no longer clickable in the PDF. They appear as blue underlined text but don't go anywhere when clicked.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Why it happens:</strong> The link was pasted as plain text rather than inserted as a proper hyperlink. Some converters (especially "Print to PDF" on Windows) strip hyperlinks entirely.
              </p>
              <p className="text-slate-600 mb-2"><strong>The fix:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Insert links properly: select text &gt; right-click &gt; Hyperlink (or Ctrl+K) &gt; paste URL.</li>
                <li>&#10003; Don't just paste URLs as text and rely on auto-linking.</li>
                <li>&#10003; Use <Link href="/word-to-pdf" className="text-orange-600 hover:underline">PDF.it's Word to PDF tool</Link> instead of "Print to PDF" — it preserves hyperlinks.</li>
              </ul>
            </section>

            {/* Cause 7: Page Breaks */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">7. Page Break Problems</h2>
              <p className="text-slate-600 mb-4">
                <strong>What happens:</strong> Content that was on page 3 in Word ends up on page 4 in the PDF. Or a heading appears alone at the bottom of a page with its content on the next page.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Why it happens:</strong> Word calculates page breaks dynamically based on fonts and spacing. If the converter uses slightly different fonts or spacing, text reflows and page breaks shift. "Keep with next" paragraph settings may not be honored.
              </p>
              <p className="text-slate-600 mb-2"><strong>The fix:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Insert manual page breaks (Ctrl+Enter) where you need pages to break — don't rely on Word's automatic breaks.</li>
                <li>&#10003; Use "Keep with next" paragraph formatting for headings: select heading &gt; Paragraph &gt; Line and Page Breaks &gt; "Keep with next."</li>
                <li>&#10003; After fixing font issues (Cause 1), page break problems usually resolve on their own.</li>
              </ul>
            </section>

            {/* Quick reference */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quick Reference: All 7 Fixes</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Problem</th>
                      <th className="text-left py-3 px-4 font-bold">Quick Fix</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Missing fonts</td>
                      <td className="py-3 px-4">Use standard fonts or embed custom ones</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Broken tables</td>
                      <td className="py-3 px-4">Set fixed column widths, avoid nesting</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Header/footer shifts</td>
                      <td className="py-3 px-4">Keep layouts simple, set explicit distances</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Blurry images</td>
                      <td className="py-3 px-4">Disable Word compression, insert at correct size</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Margin changes</td>
                      <td className="py-3 px-4">Set custom margins with exact values</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Dead hyperlinks</td>
                      <td className="py-3 px-4">Insert with Ctrl+K, don't paste as text</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Page break shifts</td>
                      <td className="py-3 px-4">Insert manual page breaks, fix fonts first</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Still having issues */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Still Having Formatting Issues?</h2>
              <p className="text-slate-600 mb-4">
                If you've tried the fixes above and your PDF still doesn't match your Word document, consider these additional steps:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten the PDF</strong> after conversion using <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to lock all elements in place and remove any interactive layers.</li>
                <li>&#10003; <strong>Try converting from a different Word version.</strong> Word 365 (online) sometimes produces different output than Word 2019 or 2016. Save the file, re-open it, and try converting again.</li>
                <li>&#10003; <strong>Simplify the document.</strong> The more complex your layout (multiple columns, text boxes, SmartArt, embedded objects), the more likely something will shift. Simplify where you can.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert Word to PDF — Formatting Intact</h2>
            <p className="text-slate-300 mb-6">PDF.it handles fonts, tables, images, and layout accurately. Try it free.</p>
            <Link
              href="/word-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Word to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert Word to PDF Online (DOCX to PDF)", href: "/learn/convert-word-to-pdf" },
                { title: "DOCX to PDF Without Formatting Issues (Fonts, Spacing, Images)", href: "/learn/docx-to-pdf-keep-formatting" },
                { title: "Convert a Resume from Word to PDF (ATS-Friendly Tips)", href: "/learn/convert-resume-word-to-pdf" },
                { title: "Convert Word to PDF on iPhone (DOCX to PDF in Minutes)", href: "/learn/word-to-pdf-on-iphone" },
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
                { q: "Why does my Word document look different after converting to PDF?", a: "The most common causes are font substitution, different margin interpretation, and text reflow. When the conversion tool doesn't have the exact font you used, it substitutes a similar one with different character widths, causing text to shift across lines and pages." },
                { q: "How do I fix missing fonts when converting Word to PDF?", a: "Use standard fonts like Arial, Calibri, or Times New Roman which are available on all systems. If you need a custom font, embed it in your Word document: File > Options > Save > check 'Embed fonts in the file.'" },
                { q: "Why do my tables break when I convert Word to PDF?", a: "Tables break because of auto-fit column widths, merged cells, and nested tables. Fix this by setting fixed column widths (Table Properties > Column > set specific width), avoiding deeply nested tables, and keeping table layouts simple." },
                { q: "Why are my images blurry or moved in the PDF?", a: "Images move when surrounding text reflows due to font changes. Blurriness happens when Word or the converter compresses images. Fix positioning by using 'In Line with Text' wrapping, and prevent blurriness by inserting high-resolution images and avoiding Word's built-in compression." },
                { q: "How do I prevent margin changes when converting Word to PDF?", a: "Set explicit custom margins in Page Layout > Margins > Custom Margins instead of using presets. Avoid 'Mirror margins' unless you specifically need them for booklet printing, as some converters don't handle them well." },
                { q: "Can I get my hyperlinks to work in the converted PDF?", a: "Yes. Make sure hyperlinks are properly inserted using Word's hyperlink feature (Ctrl+K or right-click > Hyperlink) rather than pasted as plain text URLs. PDF.it preserves properly formatted hyperlinks during conversion." },
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
