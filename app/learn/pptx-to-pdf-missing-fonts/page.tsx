import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Type, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PPTX to PDF Missing Fonts? Fix Font Embedding and Substitutions | PDF.it",
  description:
    "Fix missing fonts when converting PowerPoint to PDF. Learn why fonts get substituted, how to embed fonts in PPTX, and which safe fonts always convert correctly.",
  keywords: "pptx to pdf missing fonts, powerpoint to pdf font problems, embed fonts in powerpoint, font substitution pdf, pptx fonts not showing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are fonts missing when I convert PPTX to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fonts go missing because they are installed on your computer but not embedded in the PowerPoint file. When the file is converted on a different system (or online), that system doesn't have your fonts installed, so it substitutes a default font like Arial or Calibri." }
    },
    {
      "@type": "Question",
      "name": "How do I embed fonts in PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Go to File > Options > Save. Check 'Embed fonts in the file' and select 'Embed all characters.' This includes the font data inside the PPTX file so it converts correctly on any system. Note: some fonts have licensing restrictions that prevent embedding." }
    },
    {
      "@type": "Question",
      "name": "Which fonts are safe to use for PDF conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fonts that are pre-installed on most systems convert reliably: Arial, Calibri, Times New Roman, Verdana, Georgia, Tahoma, Trebuchet MS, Segoe UI, and Helvetica. Google Fonts like Open Sans, Roboto, and Lato are also widely available." }
    },
    {
      "@type": "Question",
      "name": "Can I fix font issues after converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "It's difficult to fix fonts in an existing PDF. The best approach is to fix the fonts in PowerPoint first (embed them or switch to safe fonts), then reconvert to PDF. If you only have the PDF, you can convert it back to PowerPoint, fix the fonts, and reconvert." }
    },
    {
      "@type": "Question",
      "name": "Why does my PDF look different from my PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common cause is font substitution — a different font is used because the original wasn't available during conversion. This can change text spacing, line breaks, and overall layout. Embedding fonts before conversion prevents this." }
    },
    {
      "@type": "Question",
      "name": "Do Google Fonts work when converting PPTX to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Google Fonts (Open Sans, Roboto, Lato, Montserrat, etc.) work well if they're installed on your system and embedded in the PPTX. Since they're free and widely available, they're a good alternative to custom fonts that may have embedding restrictions." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix Missing Fonts When Converting PPTX to PDF",
  "description": "Prevent font substitution and get perfect PDF output from your PowerPoint presentations.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Embed fonts in your PowerPoint file",
      "text": "Open your PPTX in PowerPoint. Go to File > Options > Save. Check 'Embed fonts in the file' and select 'Embed all characters.' Save the file."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Upload your PPTX (with embedded fonts) to PDF.it's PowerPoint to PDF tool and click Convert. The embedded fonts ensure correct rendering."
    },
    {
      "@type": "HowToStep",
      "name": "Check the output",
      "text": "Open the PDF and compare it to your original PowerPoint. Check headings, body text, and any decorative fonts. If a font still looks wrong, it may have licensing restrictions — switch to a safe alternative and reconvert."
    }
  ]
}

export default function PPTXToPDFMissingFontsPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PowerPoint to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PPTX to PDF Missing Fonts? Fix Font Embedding and Substitutions</h1>
              <p className="text-xl text-slate-300">
                Your PowerPoint looks perfect on your computer, but the PDF output has wrong fonts, broken spacing, or garbled text. Here's why it happens and how to fix it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Type className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Fonts embedded and ready? Convert your file now.</p>
            </div>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PPT to PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why fonts go missing */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Do Fonts Go Missing in PDF?</h2>
              <p className="text-slate-600 mb-4">
                When you use a font in PowerPoint, the software references a font file installed on <strong>your</strong> computer. But that font file is not automatically included in the PPTX. When the file is opened or converted on a different system, the font might not exist there.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Custom fonts not embedded.</strong> Decorative, brand, or purchased fonts are only on your machine. Without embedding, they won't travel with the file.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>System-specific fonts.</strong> Some fonts exist only on Windows (e.g., Segoe UI) or only on Mac (e.g., San Francisco). Cross-platform conversions can trigger substitutions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Online conversion tools.</strong> When you upload a PPTX to an online converter (including PDF.it), the server may not have your custom fonts. Embedding solves this.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Font licensing restrictions.</strong> Some commercial fonts block embedding due to their license terms. PowerPoint won't include them even if you check the embed option.</span>
                </li>
              </ul>
            </section>

            {/* How to embed fonts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Embed Fonts in PowerPoint (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open your presentation in PowerPoint",
                    desc: "Open the PPTX file on the computer where it looks correct (where all fonts are installed and display properly).",
                  },
                  {
                    title: "Enable font embedding",
                    desc: "Go to File > Options > Save. Check 'Embed fonts in the file.' Select 'Embed all characters (best for editing by other people)' for complete embedding. Click OK.",
                  },
                  {
                    title: "Save and convert",
                    desc: "Save the file. The PPTX will now be larger (font data is included). Upload it to PDF.it's PowerPoint to PDF tool — the embedded fonts will render correctly during conversion.",
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
              <p className="text-slate-500 text-sm mt-4">
                <strong>Note for Mac users:</strong> PowerPoint for Mac does not support font embedding. Use PowerPoint on Windows, or switch to web-safe fonts before converting.
              </p>
            </section>

            {/* Safe fonts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Safe Fonts That Always Convert Correctly</h2>
              <p className="text-slate-600 mb-4">
                If embedding is not an option (or you want to avoid the hassle), use fonts that are pre-installed on virtually every system:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Font Name</th>
                      <th className="text-left py-3 px-4 font-bold">Style</th>
                      <th className="text-left py-3 px-4 font-bold">Available On</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Arial</td>
                      <td className="py-3 px-4">Sans-serif, clean</td>
                      <td className="py-3 px-4">Windows, Mac, Linux</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Calibri</td>
                      <td className="py-3 px-4">Sans-serif, modern (Office default)</td>
                      <td className="py-3 px-4">Windows, Mac (with Office)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Times New Roman</td>
                      <td className="py-3 px-4">Serif, traditional</td>
                      <td className="py-3 px-4">Windows, Mac, Linux</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Verdana</td>
                      <td className="py-3 px-4">Sans-serif, screen-optimized</td>
                      <td className="py-3 px-4">Windows, Mac, Linux</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Georgia</td>
                      <td className="py-3 px-4">Serif, elegant</td>
                      <td className="py-3 px-4">Windows, Mac, Linux</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Tahoma</td>
                      <td className="py-3 px-4">Sans-serif, compact</td>
                      <td className="py-3 px-4">Windows, Mac</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                <strong>Google Fonts</strong> like Open Sans, Roboto, Lato, and Montserrat are also excellent choices. They're free, widely available, and allow embedding.
              </p>
            </section>

            {/* Checking the output */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Check Your PDF for Font Issues</h2>
              <p className="text-slate-600 mb-4">
                After converting, always review the output. Here's what to look for:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Compare side by side.</strong> Open the PDF and the PowerPoint next to each other. Look for differences in text appearance, spacing, and line breaks.</li>
                <li>&#10003; <strong>Check headings first.</strong> Decorative heading fonts are the most common culprits. If your heading font was substituted, the entire slide layout may shift.</li>
                <li>&#10003; <strong>Look for text overflow.</strong> Substituted fonts often have different character widths. Text that fit in a text box in PowerPoint may overflow or wrap differently in the PDF.</li>
                <li>&#10003; <strong>Zoom to 200%+.</strong> At higher zoom levels, you can spot subtle differences in letter shapes that confirm a font substitution.</li>
              </ul>
            </section>

            {/* What if you can't embed */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What If a Font Can't Be Embedded?</h2>
              <p className="text-slate-600 mb-4">
                Some fonts have licensing restrictions that block embedding. If PowerPoint won't embed a font, you have a few options:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Replace with a similar safe font.</strong> Find a visually similar font from the safe list above. Use PowerPoint's "Replace Fonts" feature (Home &gt; Replace &gt; Replace Fonts) to swap throughout the deck.</li>
                <li>&#10003; <strong>Convert to outlines.</strong> In PowerPoint, you can convert text to shapes (right-click text box &gt; Save as Picture, or use a plugin). This turns text into vector graphics that look identical regardless of fonts.</li>
                <li>&#10003; <strong>Export directly from PowerPoint.</strong> Use File &gt; Save As &gt; PDF to create the PDF locally where all fonts are available. Then verify the output.</li>
              </ul>
            </section>

            {/* Word and other Office formats */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Font Issues in Other Office Formats</h2>
              <p className="text-slate-600 mb-4">
                The same font embedding principles apply to other Microsoft Office files:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link> — Embed fonts in Word the same way (File &gt; Options &gt; Save).</li>
                <li>&#10003; <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF</Link> — Our universal converter handles Word, Excel, and PowerPoint files.</li>
                <li>&#10003; <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">Excel to PDF</Link> — Excel has fewer font issues since spreadsheets typically use standard fonts.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Fonts Fixed? Convert Your PowerPoint Now</h2>
            <p className="text-slate-300 mb-6">Embed your fonts, upload the PPTX, and get a perfect PDF in seconds.</p>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Type className="h-5 w-5" /> Convert PPT to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert PowerPoint to PDF Online (PPTX to PDF)", href: "/learn/convert-ppt-to-pdf" },
                { title: "PPT to PDF for Printing: Best Layout + Quality Tips", href: "/learn/ppt-to-pdf-for-printing" },
                { title: "Do PowerPoint Animations Work in PDF? What Converts (and What Doesn't)", href: "/learn/ppt-to-pdf-animations" },
                { title: "Convert PPT to PDF on iPhone (Fast Method)", href: "/learn/ppt-to-pdf-on-iphone" },
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
                { q: "Why are fonts missing when I convert PPTX to PDF?", a: "Fonts go missing because they are installed on your computer but not embedded in the PowerPoint file. When the file is converted on a different system, it substitutes a default font like Arial or Calibri." },
                { q: "How do I embed fonts in PowerPoint?", a: "Go to File > Options > Save. Check 'Embed fonts in the file' and select 'Embed all characters.' This includes the font data inside the PPTX so it converts correctly on any system. Some fonts have licensing restrictions that prevent embedding." },
                { q: "Which fonts are safe to use for PDF conversion?", a: "Fonts pre-installed on most systems convert reliably: Arial, Calibri, Times New Roman, Verdana, Georgia, Tahoma, Trebuchet MS, Segoe UI, and Helvetica. Google Fonts like Open Sans, Roboto, and Lato are also widely available." },
                { q: "Can I fix font issues after converting to PDF?", a: "It's difficult to fix fonts in an existing PDF. The best approach is to fix the fonts in PowerPoint first (embed them or switch to safe fonts), then reconvert to PDF." },
                { q: "Why does my PDF look different from my PowerPoint?", a: "The most common cause is font substitution — a different font is used because the original wasn't available during conversion. This can change text spacing, line breaks, and overall layout. Embedding fonts before conversion prevents this." },
                { q: "Do Google Fonts work when converting PPTX to PDF?", a: "Google Fonts (Open Sans, Roboto, Lato, Montserrat, etc.) work well if they're installed on your system and embedded in the PPTX. Since they're free and widely available, they're a good alternative to commercial fonts." },
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
