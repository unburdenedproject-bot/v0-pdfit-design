import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Combine PDFs for Submissions (School, Visa, Job Portals) | PDF.it",
  description:
    "Learn how to combine multiple PDFs into one file for school, visa, and job portal submissions. Meet file size limits, flatten for compatibility, and protect sensitive documents.",
  keywords: "combine pdfs for submission, merge pdf for visa, combine pdf for job application, merge documents for upload",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I combine multiple PDFs into one for a submission?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload all your documents (ID, transcript, cover letter, etc.) to PDF.it's Merge PDF tool. Arrange them in the order required by the submission guidelines, click Merge, and download the combined file. If the file is too large, compress it afterward." }
    },
    {
      "@type": "Question",
      "name": "What order should I arrange documents for a submission?",
      "acceptedAnswer": { "@type": "Answer", "text": "Always follow the order specified in the submission guidelines. If no order is given, a common arrangement is: application form or cover letter first, then identification documents, then supporting documents (transcripts, certificates, letters), then any additional materials." }
    },
    {
      "@type": "Question",
      "name": "My combined PDF is too large for the upload portal. What do I do?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PDF.it's Compress PDF tool after merging. For strict limits like 2MB or 5MB, use the dedicated Compress to 2MB or Compress to 5MB tools. If compression isn't enough, try flattening the PDF first to remove form fields and annotations, then compress again." }
    },
    {
      "@type": "Question",
      "name": "Should I flatten my PDF before submitting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially if your PDF contains fillable form fields, signatures, or annotations. Flattening locks everything into place so the document looks the same on any device or PDF reader. It also reduces file size." }
    },
    {
      "@type": "Question",
      "name": "Can I password-protect my combined submission?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use PDF.it's Protect PDF tool to add a password after merging. However, only add a password if the submission guidelines allow it — some portals can't open password-protected files." }
    },
    {
      "@type": "Question",
      "name": "How do I combine PDFs for a visa application?",
      "acceptedAnswer": { "@type": "Answer", "text": "Follow the embassy's document checklist exactly. Typically: application form, passport copy, photos, financial documents (bank statements), and supporting letters. Merge them in that order, compress to meet any size limits, and flatten before uploading." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Combine PDFs for Submissions",
  "description": "Merge multiple documents into one PDF for school, visa, or job submissions using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Gather and prepare your documents",
      "text": "Collect all required documents as PDF files. Check the submission guidelines for the required order and file size limits. Scan any paper documents to PDF if needed."
    },
    {
      "@type": "HowToStep",
      "name": "Merge documents in the required order",
      "text": "Upload all PDFs to PDF.it's Merge tool, arrange them in the order specified by the submission guidelines, and click Merge to combine them into one file."
    },
    {
      "@type": "HowToStep",
      "name": "Compress, flatten, and verify",
      "text": "If the file exceeds the size limit, compress it. Flatten the PDF to lock form fields and annotations. Open the final file and scroll through every page to confirm everything is correct before submitting."
    }
  ]
}

export default function CombinePDFsForSubmissionPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Merge PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combine PDFs for Submissions (School, Visa, Job Portals)</h1>
              <p className="text-xl text-slate-300">
                Upload portals want one single PDF with all your documents. Here's how to assemble, combine, compress, and submit — without getting rejected for formatting or size issues.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to combine your documents? Go straight to the tool.</p>
            </div>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Merge PDFs Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Common submission requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Submission Requirements</h2>
              <p className="text-slate-600 mb-4">
                Whether you're applying for a job, a university program, or a visa, most submission portals share the same constraints:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Single file upload.</strong> Most portals only accept one PDF file — not multiple attachments. You need to combine all your documents into one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>File size limits.</strong> Common limits are 2MB, 5MB, 10MB, or 25MB. Government portals tend to have the strictest limits (often 2-5MB).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Specific document order.</strong> Many applications list the exact order they want documents in. Not following this order can result in delays or rejection.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>PDF format only.</strong> Most portals require PDF specifically (not Word, JPG, or PNG). Make sure all your documents are in PDF format before combining.</span>
                </li>
              </ul>
            </section>

            {/* Assembling documents */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Assemble Your Documents</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Collect all required documents as PDFs",
                    desc: "Gather every document listed in the submission requirements. If any documents are in Word format, convert them using Word to PDF. If you have paper documents, scan them to PDF using your phone or scanner.",
                  },
                  {
                    title: "Upload and arrange in the required order",
                    desc: "Upload all PDFs to PDF.it's Merge tool. Drag and drop them into the order specified by the submission guidelines. If no order is specified, use: application/cover letter first, then ID, then supporting documents.",
                  },
                  {
                    title: "Merge, compress, and verify",
                    desc: "Click Merge to combine. If the file exceeds the size limit, compress it. Open the merged PDF and scroll through every page to confirm all documents are present and in the right order.",
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

            {/* Meeting file size limits */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Meeting File Size Limits</h2>
              <p className="text-slate-600 mb-4">
                After merging, your combined PDF might be too large for the submission portal. Here's how to get it under the limit:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Compress the merged file</strong> using <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link>. Medium compression works for most portals.</li>
                <li>✓ <strong>For 2MB limits,</strong> use the dedicated <Link href="/compress-pdf-to-2mb" className="text-orange-600 hover:underline">Compress to 2MB</Link> tool which targets that specific size.</li>
                <li>✓ <strong>Flatten before compressing.</strong> Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to remove form fields and annotations, which reduces file size and makes compression more effective.</li>
                <li>✓ <strong>If compression isn't enough,</strong> check if scanned pages are the culprit. One scanned page can be 2-5MB. Re-scan at a lower resolution or use Phone Scan Cleanup to optimize.</li>
              </ul>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mt-4">
                <p className="text-slate-700 text-sm">
                  <strong>Pro tip:</strong> Many government and visa portals have a 2MB or 5MB limit. Always check the limit <em>before</em> scanning and assembling your documents. If the limit is very strict, scan at 150 DPI instead of 300 DPI to keep file sizes manageable.
                </p>
              </div>
            </section>

            {/* Flattening for compatibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Flattening Your PDF for Maximum Compatibility</h2>
              <p className="text-slate-600 mb-4">
                Flattening is one of the most overlooked steps when preparing submissions. Here's why it matters:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Locks form fields and signatures.</strong> If any of your documents have fillable fields or digital signatures, flattening ensures they display correctly on any device.</li>
                <li>✓ <strong>Prevents editing.</strong> Once flattened, text in form fields can't be accidentally modified by the recipient.</li>
                <li>✓ <strong>Reduces file size.</strong> Form fields, annotations, and layers add hidden data. Flattening removes these, making the file smaller.</li>
                <li>✓ <strong>Improves compatibility.</strong> Some older PDF readers don't display form fields or annotations correctly. A flattened PDF looks the same everywhere.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> after merging and before compressing for best results.
              </p>
            </section>

            {/* Protecting before submitting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Should You Password-Protect Your Submission?</h2>
              <p className="text-slate-600 mb-4">
                If your merged PDF contains sensitive information (passport copies, bank statements, medical records), you might want to add a password:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Use <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link></strong> to add a password to your merged file.</li>
                <li>✓ <strong>But check the submission requirements first.</strong> Many upload portals cannot open password-protected PDFs. If the portal doesn't mention password protection, don't add one.</li>
                <li>✓ <strong>For email submissions,</strong> password protection is more appropriate. Send the PDF in one email and the password in a separate message.</li>
              </ul>
            </section>

            {/* Scenario-specific tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips by Submission Type</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">University and School Submissions</h3>
                  <p className="text-slate-600">
                    Common order: application form, personal statement or essay, transcript, recommendation letters, ID or passport copy. Many universities have a 10MB limit. Use Medium compression after merging.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Visa and Immigration Applications</h3>
                  <p className="text-slate-600">
                    Follow the embassy checklist exactly. Typical order: completed application form, passport bio page, passport-size photo, financial documents (bank statements for 3-6 months), employment letter, hotel bookings, flight itinerary. Government portals often have very strict size limits (2-5MB).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Job Application Portals</h3>
                  <p className="text-slate-600">
                    Standard order: cover letter, resume/CV, portfolio or work samples, references, certifications. Most job portals accept up to 10-25MB. If the portal accepts multiple files, it's usually better to upload resume and cover letter separately.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Combine Your Documents?</h2>
            <p className="text-slate-300 mb-6">Upload all your files, merge them into one PDF, and submit with confidence — free, no signup required.</p>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Merge className="h-5 w-5" /> Merge PDFs Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Merge PDF Files Online (Combine PDFs into One)", href: "/learn/how-to-merge-pdf-files" },
                { title: "Merge PDFs in the Correct Order (No Page Mistakes)", href: "/learn/merge-pdfs-in-order" },
                { title: "How to Merge Scanned PDFs (And Keep Them Readable)", href: "/learn/merge-scanned-pdfs" },
                { title: "Merge PDF Files on iPhone (Fast Browser Method)", href: "/learn/merge-pdf-on-iphone" },
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
                { q: "How do I combine multiple PDFs into one for a submission?", a: "Upload all your documents (ID, transcript, cover letter, etc.) to PDF.it's Merge PDF tool. Arrange them in the order required by the submission guidelines, click Merge, and download the combined file. If the file is too large, compress it afterward." },
                { q: "What order should I arrange documents for a submission?", a: "Always follow the order specified in the submission guidelines. If no order is given, a common arrangement is: application form or cover letter first, then identification documents, then supporting documents (transcripts, certificates, letters), then any additional materials." },
                { q: "My combined PDF is too large for the upload portal. What do I do?", a: "Use PDF.it's Compress PDF tool after merging. For strict limits like 2MB or 5MB, use the dedicated Compress to 2MB or Compress to 5MB tools. If compression isn't enough, try flattening the PDF first to remove form fields and annotations, then compress again." },
                { q: "Should I flatten my PDF before submitting?", a: "Yes, especially if your PDF contains fillable form fields, signatures, or annotations. Flattening locks everything into place so the document looks the same on any device or PDF reader. It also reduces file size." },
                { q: "Can I password-protect my combined submission?", a: "Yes. Use PDF.it's Protect PDF tool to add a password after merging. However, only add a password if the submission guidelines allow it — some portals can't open password-protected files." },
                { q: "How do I combine PDFs for a visa application?", a: "Follow the embassy's document checklist exactly. Typically: application form, passport copy, photos, financial documents (bank statements), and supporting letters. Merge them in that order, compress to meet any size limits, and flatten before uploading." },
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
