import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert a Resume from Word to PDF (ATS-Friendly Tips) | PDF.it",
  description:
    "Convert your resume from Word to PDF while keeping it ATS-friendly. Learn which fonts, layouts, and formatting choices help your resume pass applicant tracking systems.",
  keywords: "convert resume word to pdf, resume docx to pdf, ats friendly resume pdf, resume pdf conversion, word resume to pdf format",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I submit my resume as a Word document or PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF is the better choice in almost every case. PDFs preserve your formatting exactly, look the same on every device, and prevent accidental edits. The only exception is when a job posting specifically asks for a .docx file — in that case, submit Word." }
    },
    {
      "@type": "Question",
      "name": "Can ATS systems read PDF resumes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Modern ATS systems (Greenhouse, Lever, Workday, Taleo) can read PDF resumes just as well as Word documents. The key is using a simple, single-column layout with standard fonts and no text boxes, tables, or graphics that could confuse the parser." }
    },
    {
      "@type": "Question",
      "name": "What fonts should I use for an ATS-friendly resume?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use standard, widely available fonts: Arial, Calibri, Times New Roman, Georgia, Helvetica, or Garamond. These fonts are recognized by all ATS systems and convert perfectly to PDF without substitution issues." }
    },
    {
      "@type": "Question",
      "name": "Will converting my resume to PDF change the formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Not if you follow best practices: use standard fonts, avoid complex layouts with text boxes or tables, and use a reliable converter like PDF.it. The converted PDF should look identical to your Word document." }
    },
    {
      "@type": "Question",
      "name": "How do I reduce my resume PDF file size?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most text-based resumes are already small (under 500KB). If yours is larger — usually because of a photo or graphics — use PDF.it's Compress PDF tool to reduce the file size while keeping text sharp and readable." }
    },
    {
      "@type": "Question",
      "name": "Should I password-protect my resume PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Password-protected PDFs cannot be parsed by ATS systems, which means your resume won't be searchable by recruiters. Only protect a resume if you're sending it directly to a specific person and don't want it forwarded." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert a Resume from Word to PDF",
  "description": "Convert your Word resume to an ATS-friendly PDF in 3 steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepare your resume in Word",
      "text": "Use standard fonts, a single-column layout, clear section headings, and avoid text boxes, tables, headers/footers, and graphics that ATS systems can't parse."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF with PDF.it",
      "text": "Upload your .docx resume to PDF.it's Word to PDF tool and click Convert. The tool preserves formatting, fonts, and layout."
    },
    {
      "@type": "HowToStep",
      "name": "Verify and test",
      "text": "Open the PDF and confirm it looks identical to your Word document. Try selecting and copying text from the PDF to make sure it's not a flat image — ATS needs selectable text."
    }
  ]
}

export default function ConvertResumeWordToPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert a Resume from Word to PDF (ATS-Friendly Tips)</h1>
              <p className="text-xl text-slate-300">
                Your resume needs to look great to humans AND be readable by applicant tracking systems. Here's how to convert it from Word to PDF the right way.
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
              <p className="text-slate-700 font-semibold">Ready to convert your resume? Skip the guide and go straight to the tool.</p>
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

            {/* Why PDF for resumes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Your Resume Should Be a PDF</h2>
              <p className="text-slate-600 mb-4">
                You spent hours perfecting your resume layout in Word. But when a recruiter opens your .docx file on a different computer, things can look completely different — fonts change, spacing shifts, and your carefully designed layout falls apart.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Formatting consistency.</strong> A PDF looks exactly the same on every device, operating system, and screen size. Your resume will look the same on a recruiter's Windows PC as it does on your Mac.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>No accidental edits.</strong> Word documents can be accidentally modified. A PDF prevents anyone from changing your content, dates, or contact information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Professional impression.</strong> Sending a .docx file signals "work in progress." A PDF signals "final, polished document." Small detail, big impact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>ATS compatible.</strong> Modern applicant tracking systems parse PDFs just as well as Word files — as long as you follow a few simple rules (covered below).</span>
                </li>
              </ul>
            </section>

            {/* What is ATS */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Is an ATS (and Why It Matters)</h2>
              <p className="text-slate-600 mb-4">
                An <strong>Applicant Tracking System (ATS)</strong> is software that companies use to manage job applications. When you submit your resume online, it goes through the ATS before any human sees it. The ATS parses your resume, extracts key information (name, contact info, work experience, skills), and stores it in a searchable database.
              </p>
              <p className="text-slate-600 mb-4">
                If your resume uses complex formatting that the ATS can't parse, your information gets garbled or lost. This means a recruiter searching for "project management" won't find your resume — even if you have 10 years of project management experience — because the ATS couldn't read it.
              </p>
              <p className="text-slate-600">
                The good news: making your resume ATS-friendly is simple. It's mostly about <strong>what to avoid</strong>.
              </p>
            </section>

            {/* ATS-friendly formatting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">ATS-Friendly Resume Formatting Rules</h2>
              <p className="text-slate-600 mb-4">
                Follow these rules in your Word document <strong>before</strong> converting to PDF:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Use a single-column layout.</strong> Multi-column layouts, sidebar designs, and creative templates may look great, but ATS systems read left-to-right, top-to-bottom. Two columns can cause the parser to mix content from different sections.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Use standard fonts.</strong> Arial, Calibri, Times New Roman, Georgia, or Garamond. These convert perfectly to PDF and are recognized by all ATS systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Avoid text boxes.</strong> Text inside text boxes is often invisible to ATS parsers. Use normal paragraphs with bold headings instead.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Avoid tables for layout.</strong> Using tables to create a multi-column look (like skills on the left, details on the right) confuses ATS systems. Use simple lists and paragraphs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Use standard section headings.</strong> "Work Experience," "Education," "Skills," "Certifications" — ATS systems look for these exact keywords to categorize your information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">6.</span>
                  <span><strong>No images or graphics.</strong> Logos, icons, headshot photos, and decorative graphics can't be read by ATS. They also increase file size unnecessarily.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert Your Resume (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Prepare your Word resume",
                    desc: "Check your resume against the ATS rules above. Use standard fonts, a single-column layout, and avoid text boxes, tables, and graphics. Make sure all text is in normal paragraphs, not headers/footers.",
                  },
                  {
                    title: "Convert with PDF.it",
                    desc: "Go to the Word to PDF tool and upload your .docx file. PDF.it converts it in seconds, preserving your formatting, fonts, and layout exactly as designed.",
                  },
                  {
                    title: "Test the output",
                    desc: "Open the PDF and try selecting text with your cursor — if you can highlight and copy text, the PDF is ATS-readable. If text can't be selected, it was converted as an image (which ATS can't read).",
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

            {/* Common mistakes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Resume PDF Mistakes to Avoid</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Don't password-protect your resume PDF.</strong> ATS systems can't open password-protected files. Your resume will be rejected before anyone sees it.</li>
                <li>&#10003; <strong>Don't flatten your resume PDF.</strong> <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flattening</Link> converts text to images, making it unreadable by ATS. Only flatten if you're sending directly to a person (not through an ATS).</li>
                <li>&#10003; <strong>Don't scan a printed resume.</strong> Scanned PDFs are images, not text. ATS can't read them. Always convert from the digital Word file.</li>
                <li>&#10003; <strong>Don't over-compress.</strong> If you use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to reduce file size, stick with Light compression to keep text sharp and selectable.</li>
              </ul>
            </section>

            {/* File size */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Keeping Your Resume PDF Small</h2>
              <p className="text-slate-600 mb-4">
                Most text-based resumes are under 200KB as a PDF — well within any upload limit. If your resume is larger than 1MB, it's usually because of:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; A headshot photo (remove it — most ATS systems don't display it anyway)</li>
                <li>&#10003; High-resolution logos or graphics (remove them for ATS submissions)</li>
                <li>&#10003; Embedded custom fonts (switch to standard fonts to reduce size)</li>
              </ul>
              <p className="text-slate-600 mt-4">
                If you still need to reduce the file size, use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> with Light compression to minimize size without affecting text quality.
              </p>
            </section>

            {/* When to use Word */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When to Submit Word Instead of PDF</h2>
              <p className="text-slate-600 mb-4">
                In rare cases, you should submit the .docx file instead:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>The job posting explicitly says "submit in Word format."</strong> Some older ATS systems or specific companies prefer .docx. Follow their instructions.</li>
                <li>&#10003; <strong>A recruiter asks for a Word version.</strong> Recruiters sometimes want to make minor formatting changes before submitting to a client. This is common in staffing agencies.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                In every other case, PDF is the safer, more professional choice.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert Your Resume to PDF</h2>
            <p className="text-slate-300 mb-6">Upload your Word resume and get an ATS-friendly PDF in seconds — free, no signup required.</p>
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
                { title: "Convert Word to PDF Online (DOCX to PDF)", href: "/learn/convert-word-to-pdf" },
                { title: "DOCX to PDF Without Formatting Issues (Fonts, Spacing, Images)", href: "/learn/docx-to-pdf-keep-formatting" },
                { title: "Word to PDF Formatting Changed? Fix These 7 Causes", href: "/learn/word-to-pdf-common-formatting-fixes" },
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
                { q: "Should I submit my resume as a Word document or PDF?", a: "PDF is the better choice in almost every case. PDFs preserve your formatting exactly, look the same on every device, and prevent accidental edits. The only exception is when a job posting specifically asks for a .docx file — in that case, submit Word." },
                { q: "Can ATS systems read PDF resumes?", a: "Yes. Modern ATS systems (Greenhouse, Lever, Workday, Taleo) can read PDF resumes just as well as Word documents. The key is using a simple, single-column layout with standard fonts and no text boxes, tables, or graphics that could confuse the parser." },
                { q: "What fonts should I use for an ATS-friendly resume?", a: "Use standard, widely available fonts: Arial, Calibri, Times New Roman, Georgia, Helvetica, or Garamond. These fonts are recognized by all ATS systems and convert perfectly to PDF without substitution issues." },
                { q: "Will converting my resume to PDF change the formatting?", a: "Not if you follow best practices: use standard fonts, avoid complex layouts with text boxes or tables, and use a reliable converter like PDF.it. The converted PDF should look identical to your Word document." },
                { q: "How do I reduce my resume PDF file size?", a: "Most text-based resumes are already small (under 500KB). If yours is larger — usually because of a photo or graphics — use PDF.it's Compress PDF tool to reduce the file size while keeping text sharp and readable." },
                { q: "Should I password-protect my resume PDF?", a: "No. Password-protected PDFs cannot be parsed by ATS systems, which means your resume won't be searchable by recruiters. Only protect a resume if you're sending it directly to a specific person and don't want it forwarded." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
