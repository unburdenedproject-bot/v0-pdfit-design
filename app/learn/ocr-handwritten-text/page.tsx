import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Can OCR Read Handwritten Text? (What to Expect) | PDF.it",
  description:
    "Learn about OCR limitations with handwriting — what works, what doesn't, and tips for getting better results from handwritten documents. Honest expectations for handwriting OCR.",
  keywords: "ocr handwritten text, ocr handwriting, can ocr read handwriting, handwritten document ocr",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can OCR read handwritten text?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR can read some handwritten text, but accuracy varies widely. Neat, consistent block letters in dark ink on white paper may achieve 70-85% accuracy. Cursive, messy handwriting, or light pencil writing will produce much lower accuracy — often below 50%." }
    },
    {
      "@type": "Question",
      "name": "Why is handwriting harder for OCR than printed text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Printed text uses consistent, standardized character shapes that OCR engines are trained to recognize. Handwriting varies enormously between people — letter shapes, sizes, spacing, slant, and connections between letters are all unpredictable, making recognition much harder." }
    },
    {
      "@type": "Question",
      "name": "What type of handwriting works best with OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Neat block letters (non-cursive, separated characters) written in dark ink on clean white paper give the best results. All-caps writing is often easier for OCR than mixed-case because capital letters have more distinct shapes." }
    },
    {
      "@type": "Question",
      "name": "Can OCR read cursive handwriting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Standard OCR has very limited ability to read cursive. Connected letters are extremely difficult for OCR to segment and recognize. For cursive documents, you will likely need to retype the content manually or use specialized handwriting recognition software." }
    },
    {
      "@type": "Question",
      "name": "How can I improve OCR accuracy on handwritten documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use dark ink (not pencil), write on clean white paper, use block letters instead of cursive, leave space between letters, scan at 400+ DPI, and clean up the scan using Phone Scan Cleanup before running OCR. Even with these optimizations, expect some errors that need manual correction." }
    },
    {
      "@type": "Question",
      "name": "Should I use OCR or retype handwritten documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "For neat block-letter handwriting, OCR can save time even if you need to correct 15-30% of the output. For cursive or messy handwriting, manual retyping is usually faster and more accurate than trying to fix a heavily garbled OCR output." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to OCR Handwritten Text",
  "description": "Get the best possible OCR results from handwritten documents in 3 steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepare a high-quality scan",
      "text": "Scan the handwritten document at 400 DPI or higher. Use Phone Scan Cleanup to improve contrast and remove shadows if you scanned with a phone camera."
    },
    {
      "@type": "HowToStep",
      "name": "Run OCR with the correct language",
      "text": "Upload to PDF.it's OCR Scanner, select the document language, and process the file. The OCR engine will attempt to recognize handwritten characters."
    },
    {
      "@type": "HowToStep",
      "name": "Review and correct the output",
      "text": "Download the result and carefully review the recognized text. Manually correct any errors, paying special attention to names, numbers, and words that look similar to other words."
    }
  ]
}

export default function OCRHandwrittenTextPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Can OCR Read Handwritten Text? (What to Expect)</h1>
              <p className="text-xl text-slate-300">
                OCR works great on printed text, but handwriting is a different challenge. Here is an honest look at what OCR can and cannot do with handwritten documents — and tips for getting the best results.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Try OCR on your handwritten document with OCR Scanner (Pro).</p>
            </div>
            <Link
              href="/ocr-scanner"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              OCR Scanner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* The honest answer */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The Honest Answer: It Depends on the Handwriting</h2>
              <p className="text-slate-600 mb-4">
                OCR technology has gotten remarkably good at reading printed text — 95 to 99% accuracy on clean scans. But handwritten text is fundamentally harder because every person writes differently. The same letter &quot;a&quot; can look completely different from one person to another.
              </p>
              <p className="text-slate-600 mb-4">
                Here is a realistic breakdown of what to expect:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Neat block letters — 70-85% accuracy.</strong> If someone wrote in clear, separated capital or lowercase letters with dark ink, OCR will recognize most of the text. You will still need to correct some characters, but the result is usable as a starting point.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Average handwriting — 40-65% accuracy.</strong> Most people&apos;s everyday handwriting falls here. Some words will be recognized correctly, others will be garbled. Numbers and short words tend to be more accurate than long words.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Cursive handwriting — below 40% accuracy.</strong> Connected letters are extremely hard for standard OCR to segment. The output will have so many errors that manual retyping is usually faster than correcting the OCR result.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Messy or rushed handwriting — below 30%.</strong> If you cannot read the handwriting yourself, OCR will not be able to either. Scratchy, overlapping, or very small handwriting produces mostly unusable results.</span>
                </li>
              </ul>
            </section>

            {/* Why handwriting is hard */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Why Handwriting Is So Hard for OCR</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Inconsistent character shapes",
                    desc: "Printed fonts use identical shapes for each letter every time. In handwriting, the same person writes the letter 'r' differently depending on the word, their speed, and their mood. OCR engines trained on standard fonts struggle with this variation.",
                  },
                  {
                    title: "Connected and overlapping letters",
                    desc: "In cursive and semi-connected handwriting, letters blend into each other. OCR needs to figure out where one letter ends and the next begins — a task that is trivial for printed text but extremely difficult with handwriting.",
                  },
                  {
                    title: "Variable spacing and alignment",
                    desc: "Printed text has uniform letter spacing and straight baselines. Handwriting drifts up and down, words are spaced unevenly, and lines are rarely straight. This makes it harder for OCR to identify word and line boundaries.",
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

            {/* Tips for better results */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Better Handwriting OCR Results</h2>
              <p className="text-slate-600 mb-4">
                If you need to OCR a handwritten document, these steps will give you the best possible accuracy:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use dark ink on white paper.</strong> Black or dark blue ink on clean white paper creates the highest contrast. Pencil, light-colored ink, or colored paper all reduce accuracy significantly.</li>
                <li>&#10003; <strong>Scan at 400 DPI or higher.</strong> Handwriting needs more resolution than printed text because the character shapes are less defined. 400-600 DPI gives OCR more pixels to work with. See our full <Link href="/learn/ocr-accuracy-tips" className="text-[#14D8C4] hover:underline">OCR Accuracy Tips</Link> guide.</li>
                <li>&#10003; <strong>Clean up the scan first.</strong> Run phone scans through <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> to remove shadows, improve contrast, and straighten the image before OCR.</li>
                <li>&#10003; <strong>Write in block letters if possible.</strong> If you are creating a document that will be OCR-processed later, write in clear, separated block letters rather than cursive. All-caps tends to produce the best results.</li>
                <li>&#10003; <strong>Leave space between words.</strong> Cramped handwriting with words running together is much harder for OCR to segment. Clear word spacing helps enormously.</li>
                <li>&#10003; <strong>Use lined paper.</strong> Writing on lined paper keeps your text straight and evenly spaced, both of which improve OCR accuracy.</li>
              </ul>
            </section>

            {/* When to OCR vs retype */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When to Use OCR vs. When to Retype Manually</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use OCR When...</h3>
                  <p className="text-slate-600">
                    The handwriting is neat and in block letters. The document is long (10+ pages) and retyping would take hours. You just need a rough searchable version and perfection is not required. Or you plan to review and correct the output anyway — OCR gives you a starting point that is faster than typing from scratch.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Retype Manually When...</h3>
                  <p className="text-slate-600">
                    The handwriting is cursive or very messy. The document is short (1-3 pages) and retyping takes less than 15 minutes. Accuracy is critical (legal documents, medical records, financial data). Or you have already tried OCR and the error rate is so high that correcting the output takes longer than retyping.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">The Hybrid Approach</h3>
                  <p className="text-slate-600">
                    For documents with mixed printed and handwritten text (like filled-in forms), run OCR to capture the printed portions accurately. Then manually fill in just the handwritten fields. This is often the fastest approach for forms, applications, and questionnaires.
                  </p>
                </div>
              </div>
            </section>

            {/* What works well */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Handwritten Elements That OCR Handles Well</h2>
              <p className="text-slate-600 mb-4">
                Even though general handwriting recognition is limited, certain types of handwritten content work better than others:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Numbers.</strong> Handwritten digits (0-9) have fewer possible shapes than letters, so OCR recognizes them more reliably. This makes OCR useful for handwritten receipts, phone numbers, and dates — though you should still verify the results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>All-caps block text.</strong> Capital letters are more distinct from each other than lowercase letters. A handwritten &quot;A&quot; looks quite different from a &quot;B&quot;, while lowercase &quot;a&quot;, &quot;o&quot;, and &quot;e&quot; can look very similar in handwriting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Form fields.</strong> Short handwritten entries in form fields (names, addresses, dates) are often easier to recognize because the context helps. If OCR knows a field is a date, it can narrow down the possible characters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Isolated words.</strong> Single words with clear spacing around them are easier to recognize than dense paragraphs of handwriting. Labels, headings, and annotations tend to work better than full pages of handwritten text.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                For printed documents that just need basic OCR, the <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR Scanner</Link> (Pro) delivers excellent results. You can also extract text directly using <Link href="/pdf-to-txt" className="text-[#14D8C4] hover:underline">PDF to TXT</Link> or convert to an editable format with <Link href="/pdf-to-word" className="text-[#14D8C4] hover:underline">PDF to Word</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Try OCR on Your Handwritten Document</h2>
            <p className="text-slate-300 mb-6">Upload your scanned handwritten document to see what OCR can extract. For printed text, expect near-perfect results every time.</p>
            <Link
              href="/ocr-scanner"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ScanText className="h-5 w-5" /> Try OCR Scanner (Pro)
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "What Is OCR? (Optical Character Recognition Explained)", href: "/learn/what-is-ocr" },
                { title: "OCR a PDF to Make It Searchable (Find Text in Scanned PDFs)", href: "/learn/ocr-pdf-to-searchable-text" },
                { title: "How to OCR a Scanned Document (Step-by-Step)", href: "/learn/ocr-scanned-document" },
                { title: "OCR Accuracy Tips (Get Better Text Recognition Results)", href: "/learn/ocr-accuracy-tips" },
                { title: "OCR a PDF on Your Phone (iPhone & Android)", href: "/learn/ocr-pdf-on-mobile" },
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
                { q: "Can OCR read handwritten text?", a: "OCR can read some handwritten text, but accuracy varies widely. Neat, consistent block letters in dark ink on white paper may achieve 70-85% accuracy. Cursive, messy handwriting, or light pencil writing will produce much lower accuracy — often below 50%." },
                { q: "Why is handwriting harder for OCR than printed text?", a: "Printed text uses consistent, standardized character shapes that OCR engines are trained to recognize. Handwriting varies enormously between people — letter shapes, sizes, spacing, slant, and connections between letters are all unpredictable, making recognition much harder." },
                { q: "What type of handwriting works best with OCR?", a: "Neat block letters (non-cursive, separated characters) written in dark ink on clean white paper give the best results. All-caps writing is often easier for OCR than mixed-case because capital letters have more distinct shapes." },
                { q: "Can OCR read cursive handwriting?", a: "Standard OCR has very limited ability to read cursive. Connected letters are extremely difficult for OCR to segment and recognize. For cursive documents, you will likely need to retype the content manually or use specialized handwriting recognition software." },
                { q: "How can I improve OCR accuracy on handwritten documents?", a: "Use dark ink (not pencil), write on clean white paper, use block letters instead of cursive, leave space between letters, scan at 400+ DPI, and clean up the scan using Phone Scan Cleanup before running OCR. Even with these optimizations, expect some errors that need manual correction." },
                { q: "Should I use OCR or retype handwritten documents?", a: "For neat block-letter handwriting, OCR can save time even if you need to correct 15-30% of the output. For cursive or messy handwriting, manual retyping is usually faster and more accurate than trying to fix a heavily garbled OCR output." },
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
