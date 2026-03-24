import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "DOCX to PDF Without Formatting Issues (Fonts, Spacing, Images) | PDF.it",
  description:
    "Fix formatting issues when converting DOCX to PDF. Learn how to prevent font substitution, spacing changes, and image shifts so your PDF looks exactly like your Word document.",
  keywords: "docx to pdf keep formatting, word to pdf formatting issues, docx to pdf fonts wrong, word to pdf spacing changes, preserve formatting word to pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my DOCX look different after converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common cause is font substitution. If the conversion tool doesn't have the same font installed, it replaces it with a similar font that may have different character widths and spacing. This causes text to reflow, changing line breaks and page layout." }
    },
    {
      "@type": "Question",
      "name": "How do I keep fonts the same when converting Word to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use standard system fonts like Arial, Calibri, or Times New Roman. These are available on virtually all systems and conversion tools. If you must use a custom font, embed it in the Word document before converting (File > Options > Save > Embed fonts in the file)." }
    },
    {
      "@type": "Question",
      "name": "Why are my images blurry in the converted PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Some conversion tools compress images aggressively to reduce file size. PDF.it preserves original image quality by default. If images were inserted at low resolution in Word, they'll be low resolution in the PDF too — replace them with higher-resolution versions before converting." }
    },
    {
      "@type": "Question",
      "name": "Can I convert DOCX to PDF without losing hyperlinks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it preserves clickable hyperlinks during conversion. Make sure links are properly formatted in Word (right-click > Hyperlink) rather than just pasted as plain text." }
    },
    {
      "@type": "Question",
      "name": "Why did my table formatting break in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Complex table layouts with merged cells, nested tables, or auto-fit columns are the most common source of formatting breaks. Simplify your tables where possible — use fixed column widths instead of auto-fit, and avoid deeply nested tables." }
    },
    {
      "@type": "Question",
      "name": "How do I check if my PDF matches the original Word document?",
      "acceptedAnswer": { "@type": "Answer", "text": "Open both files side by side and compare page by page. Pay special attention to the last line on each page (text reflow often pushes content to the next page), table alignments, and image positions. Check headers and footers separately." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert DOCX to PDF Without Formatting Issues",
  "description": "Preserve fonts, spacing, and images when converting Word to PDF using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepare your Word document",
      "text": "Use standard fonts, embed custom fonts, set fixed column widths in tables, and insert images at the resolution you want in the final PDF."
    },
    {
      "@type": "HowToStep",
      "name": "Convert with PDF.it",
      "text": "Upload your .docx file to PDF.it's Word to PDF tool and click Convert. The tool preserves formatting, fonts, and image quality."
    },
    {
      "@type": "HowToStep",
      "name": "Verify the output",
      "text": "Open the PDF and compare it page by page with your Word document. Check fonts, spacing, images, tables, and page breaks."
    }
  ]
}

export default function DocxToPdfKeepFormattingPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Word to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">DOCX to PDF Without Formatting Issues</h1>
              <p className="text-xl text-slate-300">
                Fonts look wrong, spacing shifted, images moved — sound familiar? Here's how to convert Word to PDF and keep your formatting exactly the way you designed it.
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

            {/* Why formatting breaks */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Formatting Breaks When You Convert Word to PDF</h2>
              <p className="text-slate-600 mb-4">
                Word documents are designed to be <strong>editable and flexible</strong>. They reflow text based on the viewer's screen, installed fonts, and Word version. PDFs, on the other hand, are <strong>fixed-layout</strong> — every element has an exact position on the page.
              </p>
              <p className="text-slate-600 mb-4">
                The conversion process has to translate a flexible document into a fixed one. When the conversion tool doesn't have the same fonts, or interprets spacing differently, things shift. The three most common problems are:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Font substitution</strong> — the tool replaces your font with a similar one that has different character widths, causing text to reflow across lines and pages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Spacing and margin changes</strong> — paragraph spacing, line height, and margins may be interpreted slightly differently by the conversion engine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Image and object shifts</strong> — floating images, text boxes, and shapes can move when the surrounding text reflows.</span>
                </li>
              </ul>
            </section>

            {/* Fix 1: Fonts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Fix 1: Prevent Font Substitution</h2>
              <p className="text-slate-600 mb-4">
                Font substitution is the number one cause of formatting issues. Here's how to prevent it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use standard fonts.</strong> Arial, Calibri, Times New Roman, Georgia, and Verdana are available on virtually every system. These convert perfectly every time.</li>
                <li>&#10003; <strong>Embed custom fonts.</strong> If you must use a non-standard font, embed it in your Word document: go to File &gt; Options &gt; Save &gt; check "Embed fonts in the file." This increases file size but guarantees the correct font is used.</li>
                <li>&#10003; <strong>Avoid decorative fonts for body text.</strong> Script fonts, handwritten fonts, and display fonts are more likely to cause issues. Use them sparingly (titles only) and stick to standard fonts for paragraphs.</li>
              </ul>
            </section>

            {/* Fix 2: Spacing */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Fix 2: Lock Down Spacing and Margins</h2>
              <p className="text-slate-600 mb-4">
                Word's default paragraph spacing is "contextual," meaning it adjusts based on surrounding content. This flexibility can cause surprises during conversion.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Set explicit line spacing.</strong> Instead of "Multiple" or "Auto," use exact values (e.g., 1.15 or 1.5). Go to Paragraph &gt; Line Spacing &gt; Exactly or At Least.</li>
                <li>&#10003; <strong>Use fixed paragraph spacing.</strong> Set specific "Before" and "After" spacing values in points rather than relying on Word's defaults.</li>
                <li>&#10003; <strong>Check margins.</strong> Make sure your margins are set explicitly in Page Layout &gt; Margins &gt; Custom Margins. Avoid "Narrow" or "Wide" presets if you need exact control.</li>
              </ul>
            </section>

            {/* Fix 3: Images */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Fix 3: Keep Images Where They Belong</h2>
              <p className="text-slate-600 mb-4">
                Images that float or wrap with text are the most likely to shift during conversion. Here's how to keep them in place:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use "In Line with Text" wrapping.</strong> This anchors the image to a specific position in the text flow. Right-click the image &gt; Wrap Text &gt; In Line with Text.</li>
                <li>&#10003; <strong>Anchor floating images.</strong> If you need text wrapping, lock the anchor position: right-click &gt; Size and Position &gt; Position tab &gt; check "Lock anchor."</li>
                <li>&#10003; <strong>Insert at the right resolution.</strong> Don't resize images by dragging handles in Word — this stores the full-size image and just displays it smaller. Resize images in an image editor before inserting.</li>
                <li>&#10003; <strong>Don't compress images in Word.</strong> Word's built-in compression can reduce quality unexpectedly. If you need a smaller file, convert to PDF first and then <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress the PDF</Link> instead.</li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">The Right Way to Convert (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Prepare your Word document",
                    desc: "Check fonts (use standard or embed custom ones), set explicit spacing, and anchor images. Review the document in Print Preview to see exactly how it will look.",
                  },
                  {
                    title: "Upload and convert with PDF.it",
                    desc: "Go to the Word to PDF tool and upload your .docx file. PDF.it's conversion engine handles fonts, spacing, and images accurately — click Convert and wait a few seconds.",
                  },
                  {
                    title: "Compare the output",
                    desc: "Open the PDF and compare it with your Word document page by page. Check the last line of each page (where text reflow is most visible), table alignments, and image positions.",
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

            {/* Common pitfalls */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Pitfalls to Avoid</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Don't use Word's "Save as PDF."</strong> Word's built-in export can produce inconsistent results depending on your Word version and operating system. A dedicated converter like <Link href="/word-to-pdf" className="text-orange-600 hover:underline">PDF.it's Word to PDF</Link> gives more reliable output.</li>
                <li>&#10003; <strong>Avoid "Print to PDF" on Windows.</strong> The Microsoft Print to PDF driver often changes margins and can drop hyperlinks. It's a last resort, not a first choice.</li>
                <li>&#10003; <strong>Don't mix Office formats.</strong> If your Word document has embedded Excel charts or PowerPoint slides, convert each element separately and use <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF</Link> for the best results.</li>
              </ul>
            </section>

            {/* Testing checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quick Verification Checklist</h2>
              <p className="text-slate-600 mb-4">
                After converting, open the PDF and check these items:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Fonts look correct (no unexpected substitutions)</li>
                <li>&#10003; Text doesn't overflow or get cut off at page edges</li>
                <li>&#10003; Images are in the right positions and at full quality</li>
                <li>&#10003; Tables are aligned and columns haven't shifted</li>
                <li>&#10003; Headers and footers appear on every page as expected</li>
                <li>&#10003; Hyperlinks are clickable</li>
                <li>&#10003; Page count matches the original document</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert DOCX to PDF — Formatting Preserved</h2>
            <p className="text-slate-300 mb-6">Upload your Word document and get a perfectly formatted PDF in seconds.</p>
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
                { title: "Word to PDF Formatting Changed? Fix These 7 Causes", href: "/learn/word-to-pdf-common-formatting-fixes" },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Why does my DOCX look different after converting to PDF?", a: "The most common cause is font substitution. If the conversion tool doesn't have the same font installed, it replaces it with a similar font that may have different character widths and spacing. This causes text to reflow, changing line breaks and page layout." },
                { q: "How do I keep fonts the same when converting Word to PDF?", a: "Use standard system fonts like Arial, Calibri, or Times New Roman. These are available on virtually all systems and conversion tools. If you must use a custom font, embed it in the Word document before converting (File > Options > Save > Embed fonts in the file)." },
                { q: "Why are my images blurry in the converted PDF?", a: "Some conversion tools compress images aggressively to reduce file size. PDF.it preserves original image quality by default. If images were inserted at low resolution in Word, they'll be low resolution in the PDF too — replace them with higher-resolution versions before converting." },
                { q: "Can I convert DOCX to PDF without losing hyperlinks?", a: "Yes. PDF.it preserves clickable hyperlinks during conversion. Make sure links are properly formatted in Word (right-click > Hyperlink) rather than just pasted as plain text." },
                { q: "Why did my table formatting break in the PDF?", a: "Complex table layouts with merged cells, nested tables, or auto-fit columns are the most common source of formatting breaks. Simplify your tables where possible — use fixed column widths instead of auto-fit, and avoid deeply nested tables." },
                { q: "How do I check if my PDF matches the original Word document?", a: "Open both files side by side and compare page by page. Pay special attention to the last line on each page (text reflow often pushes content to the next page), table alignments, and image positions. Check headers and footers separately." },
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
