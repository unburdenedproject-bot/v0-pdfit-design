import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Best Format to Send Documents (PDF vs DOCX vs Other) | PDF.it",
  description:
    "PDF vs DOCX — which format should you use to send documents? Learn why PDF is the best choice for email, job applications, invoices, and professional sharing.",
  keywords: "best format to send documents, pdf vs docx, send documents as pdf, document format for email, best file format for sharing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is PDF or DOCX better for sending documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF is better for sending final documents because it preserves formatting across all devices, cannot be accidentally edited, and looks professional. DOCX is better when you need the recipient to make edits." }
    },
    {
      "@type": "Question",
      "name": "Why do employers prefer PDF resumes?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF resumes look the same on every screen, do not shift formatting based on the reader's software or fonts, and appear more polished and professional than editable Word files." }
    },
    {
      "@type": "Question",
      "name": "Can I convert my documents to PDF for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you convert Word, Excel, and PowerPoint files to PDF for free — up to 10 conversions per day with files up to 25MB." }
    },
    {
      "@type": "Question",
      "name": "What format should I use for invoices?",
      "acceptedAnswer": { "@type": "Answer", "text": "Always send invoices as PDF. This prevents the recipient from modifying amounts or terms, preserves your branding and layout, and looks professional." }
    },
    {
      "@type": "Question",
      "name": "Should I send documents as PDF or Google Docs link?",
      "acceptedAnswer": { "@type": "Answer", "text": "For final documents, PDF is better — it does not require internet access or a Google account to view. Google Docs links are better for collaborative editing where multiple people need to make changes." }
    },
    {
      "@type": "Question",
      "name": "How do I make sure my PDF looks right before sending?",
      "acceptedAnswer": { "@type": "Answer", "text": "After converting to PDF, open the file and check every page for formatting issues. Use PDF.it's flatten tool to remove form fields or layers that might display differently on other devices." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Send Documents in the Best Format",
  "description": "Convert your documents to PDF for professional sharing in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose PDF as your format",
      "text": "For any document you are sending as a final version — resumes, invoices, reports, contracts — PDF is the best choice because it preserves formatting universally."
    },
    {
      "@type": "HowToStep",
      "name": "Convert your file to PDF",
      "text": "Upload your Word, Excel, or PowerPoint file to PDF.it's Office to PDF converter. The tool preserves your formatting, fonts, and images automatically."
    },
    {
      "@type": "HowToStep",
      "name": "Review and send",
      "text": "Open the PDF to verify formatting, then send it via email or upload it to the required portal. Compress the PDF first if it exceeds email size limits."
    }
  ]
}

export default function BestFormatToSendDocumentsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Best Format to Send Documents (PDF vs DOCX vs Other)</h1>
              <p className="text-xl text-slate-300">
                You finished writing your document. Now you need to send it. Should you attach the .docx file, export as PDF, or share a link? Here is when to use each format — and why PDF wins in most situations.
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
              <p className="text-slate-700 font-semibold">Need to convert a document to PDF right now?</p>
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

            {/* PDF vs DOCX */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF vs. DOCX: The Key Differences</h2>
              <p className="text-slate-600 mb-4">
                Understanding the difference between these two formats helps you pick the right one every time:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>PDF is a display format.</strong> It shows the document exactly as the author intended — same fonts, same layout, same spacing — on every device, operating system, and screen size.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>DOCX is an editing format.</strong> It is designed for writing and revising. The document may look different depending on the reader&#39;s installed fonts, Word version, and screen resolution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>PDF cannot be accidentally edited.</strong> When you send a DOCX, the recipient might accidentally change text, delete a section, or reformat a paragraph. PDFs prevent this.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>PDF opens everywhere.</strong> Every phone, tablet, and computer can open PDFs natively. DOCX requires Microsoft Word, Google Docs, or a compatible app.</span>
                </li>
              </ul>
            </section>

            {/* When to use PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">When to Send as PDF (Almost Always)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Resumes and cover letters",
                    desc: "Employers expect PDF. It ensures your carefully designed layout, margins, and typography look perfect on any HR software or screen. Convert your Word resume using the Word to PDF tool.",
                  },
                  {
                    title: "Invoices and contracts",
                    desc: "PDF prevents recipients from modifying amounts, dates, or terms. It also preserves your company branding — logos, colors, and fonts render exactly as designed.",
                  },
                  {
                    title: "Reports and proposals",
                    desc: "When sharing with clients or stakeholders, PDF ensures charts, tables, and images stay in place. No risk of a graph shifting to the next page on their screen.",
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

            {/* When DOCX is OK */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When DOCX (or Other Editable Formats) Are Better</h2>
              <p className="text-slate-600 mb-4">
                There are a few situations where sending the editable file makes more sense:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Collaborative editing.</strong> If your colleague needs to add comments, track changes, or rewrite sections, DOCX is the right format. Google Docs links work even better for real-time collaboration.</li>
                <li>&#10003; <strong>Templates.</strong> If you are sharing a template that others will fill in (like a form or a brief), send it as DOCX so they can type directly into the fields.</li>
                <li>&#10003; <strong>When explicitly requested.</strong> Some job applications or government forms specifically ask for .docx. Follow their instructions, even though PDF is usually superior.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For everything else — final versions, formal submissions, client deliverables — convert to PDF first. You can use PDF.it&#39;s <Link href="/word-to-pdf" className="text-[#14D8C4] hover:underline">Word to PDF</Link>, <Link href="/excel-to-pdf" className="text-[#14D8C4] hover:underline">Excel to PDF</Link>, or <Link href="/powerpoint-to-pdf" className="text-[#14D8C4] hover:underline">PowerPoint to PDF</Link> tools.
              </p>
            </section>

            {/* Other formats */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What About Other Formats?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Docs Links</h3>
                  <p className="text-slate-600">
                    Sharing a Google Docs link is convenient for collaboration, but risky for final documents. The recipient needs internet access and a Google account. Links can also be accidentally set to &quot;anyone can edit,&quot; allowing unintended changes. For final versions, export as PDF instead.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Plain Text (.txt)</h3>
                  <p className="text-slate-600">
                    Plain text files have zero formatting — no bold, no images, no tables. They are useful for code, logs, or quick notes, but never for professional documents. If you need to extract text from a PDF, use PDF.it&#39;s <Link href="/pdf-to-txt" className="text-[#14D8C4] hover:underline">PDF to TXT</Link> tool.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Image Formats (JPG, PNG)</h3>
                  <p className="text-slate-600">
                    Some people take screenshots of documents and send them as images. This makes text unsearchable and unselectable, and the quality is often poor. Always send the actual PDF instead. If you need images from a PDF, use <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF to JPG</Link> or <Link href="/extract-images-from-pdf" className="text-[#14D8C4] hover:underline">Extract Images from PDF</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Making PDFs email-ready */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Making Your PDF Email-Ready</h2>
              <p className="text-slate-600 mb-4">
                Even after choosing PDF as your format, there are a few extra steps to make sure it arrives perfectly:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Check the file size.</strong> Most email providers limit attachments to 25MB. If your PDF is too large, use <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress PDF for Email</Link> to shrink it.</li>
                <li>&#10003; <strong>Flatten the PDF.</strong> If your document has form fields, layers, or annotations, <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">flatten it</Link> to make sure everything displays correctly on the recipient&#39;s device.</li>
                <li>&#10003; <strong>Name the file clearly.</strong> Use a descriptive filename like &quot;John-Smith-Resume-2026.pdf&quot; instead of &quot;Document1.pdf&quot;. This helps the recipient find your file later.</li>
                <li>&#10003; <strong>Password-protect sensitive documents.</strong> Use <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> to add a password if the document contains financial or personal information.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert Your Documents to PDF</h2>
            <p className="text-slate-300 mb-6">Upload any Office file and get a professionally formatted PDF in seconds — free, no signup required.</p>
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
                { title: "Convert DOCX, XLSX & PPTX to PDF — All Office Formats", href: "/learn/convert-docx-xlsx-pptx-to-pdf" },
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
                { q: "Is PDF or DOCX better for sending documents?", a: "PDF is better for sending final documents because it preserves formatting across all devices, cannot be accidentally edited, and looks professional. DOCX is better when you need the recipient to make edits." },
                { q: "Why do employers prefer PDF resumes?", a: "PDF resumes look the same on every screen, do not shift formatting based on the reader's software or fonts, and appear more polished and professional than editable Word files." },
                { q: "Can I convert my documents to PDF for free?", a: "Yes. PDF.it lets you convert Word, Excel, and PowerPoint files to PDF for free — up to 10 conversions per day with files up to 25MB." },
                { q: "What format should I use for invoices?", a: "Always send invoices as PDF. This prevents the recipient from modifying amounts or terms, preserves your branding and layout, and looks professional." },
                { q: "Should I send documents as PDF or Google Docs link?", a: "For final documents, PDF is better — it does not require internet access or a Google account to view. Google Docs links are better for collaborative editing where multiple people need to make changes." },
                { q: "How do I make sure my PDF looks right before sending?", a: "After converting to PDF, open the file and check every page for formatting issues. Use PDF.it's flatten tool to remove form fields or layers that might display differently on other devices." },
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
