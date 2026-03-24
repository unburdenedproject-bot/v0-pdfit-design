import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Zap, Settings, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Edit PDF Metadata Online — Change Title, Author & Properties | PDF.it",
  description:
    "Edit PDF metadata with PDF.it. Change the title, author, subject, and other document properties before sharing or publishing — fast and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in PDF metadata?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF metadata includes the document title, author name, subject, keywords, creator application, producer, creation date, and modification date. Some PDFs also contain custom fields added by enterprise document management systems." }
    },
    {
      "@type": "Question",
      "name": "Why would I want to edit PDF metadata?",
      "acceptedAnswer": { "@type": "Answer", "text": "Editing metadata lets you set a professional document title, correct the author name, add keywords for searchability, or update properties before publishing or sharing. It is especially important for SEO when PDFs are indexed by search engines." }
    },
    {
      "@type": "Question",
      "name": "Does PDF metadata affect SEO?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Search engines can read PDF metadata. A well-written title and relevant keywords help your PDF rank better in search results. Google often uses the PDF title field as the page title in search listings." }
    },
    {
      "@type": "Question",
      "name": "Can I change the author name on a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF metadata editing tools let you change the author field to any name or remove it entirely. This is useful when rebranding documents or preparing files for public distribution." }
    },
    {
      "@type": "Question",
      "name": "How does editing PDF metadata differ from editing PDF content?",
      "acceptedAnswer": { "@type": "Answer", "text": "Metadata editing changes only the document properties (title, author, dates, keywords) — it does not alter the visible text, images, or layout of the PDF pages themselves." }
    },
    {
      "@type": "Question",
      "name": "Does PDF.it support PDF metadata editing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Direct metadata editing is coming soon. In the meantime, you can use Flatten PDF to clean up form fields and annotations, or Protect PDF to secure your document properties before sharing." }
    }
  ]
}

export default function EditPDFMetadataPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Edit PDF Metadata Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Change the title, author, subject, and other document properties of your PDFs before sharing or publishing.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Update Properties</span></div>
                <div className="flex items-center gap-2"><Settings className="h-4 w-4 text-orange-500" /><span>Professional Documents</span></div>
                <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-orange-500" /><span>Better SEO</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDF metadata controls how your document is identified by operating systems, search engines, and document management tools. Editing these properties lets you set a clear title, correct the author, add relevant keywords, and ensure your PDFs look professional when shared or published online.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Set a professional document title for search engines and file browsers</li>
              <li>&#10003; Update or remove the author and company name</li>
              <li>&#10003; Add keywords to improve searchability</li>
              <li>&#10003; Correct the subject and description fields</li>
              <li>&#10003; Prepare documents for publishing and distribution</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Manage Your PDF Properties</h2>
            <p className="text-slate-600 mb-6">While direct metadata editing is coming soon, you can use Flatten PDF to clean up annotations or Protect PDF to secure your document properties.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/flatten-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Flatten PDF
              </Link>
              <Link href="/protect-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Protect PDF
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Why PDF Metadata Matters</h2>
              <p className="text-slate-600">
                When someone opens your PDF in a file browser, the title metadata is what they see — not the filename. Search engines like Google use the title and keywords to rank your PDF in results. Incorrect or missing metadata makes your document look unprofessional and harder to find.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">What Properties Can You Change?</h2>
              <p className="text-slate-600">
                The most commonly edited metadata fields are Title (displayed in browser tabs and search results), Author (who created or owns the document), Subject (a brief description), and Keywords (search terms). You can also modify the creation and modification dates, though this is less common.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Professional Document Preparation</h2>
              <p className="text-slate-600">
                Before distributing reports, whitepapers, proposals, or legal documents, review the metadata. Ensure the title matches the document heading, the author reflects the correct person or organization, and irrelevant keywords or outdated properties are removed. This small step makes a big difference in how your documents are perceived.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Edit PDF Metadata</h2>
            <div className="space-y-4">
              {[
                "Open your PDF in a metadata editing tool or PDF editor.",
                "Locate the Document Properties or Metadata panel.",
                "Update the Title, Author, Subject, and Keywords fields as needed.",
                "Save the PDF with the updated metadata and share it.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Remove layers & fields" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Password-protect PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "PDF Redaction", href: "/pdf-redaction", desc: "Redact content (Business)" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
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
                { q: "What is included in PDF metadata?", a: "PDF metadata includes the document title, author name, subject, keywords, creator application, producer, creation date, and modification date. Some PDFs also contain custom fields added by enterprise document management systems." },
                { q: "Why would I want to edit PDF metadata?", a: "Editing metadata lets you set a professional document title, correct the author name, add keywords for searchability, or update properties before publishing or sharing. It is especially important for SEO when PDFs are indexed by search engines." },
                { q: "Does PDF metadata affect SEO?", a: "Yes. Search engines can read PDF metadata. A well-written title and relevant keywords help your PDF rank better in search results. Google often uses the PDF title field as the page title in search listings." },
                { q: "Can I change the author name on a PDF?", a: "Yes. PDF metadata editing tools let you change the author field to any name or remove it entirely. This is useful when rebranding documents or preparing files for public distribution." },
                { q: "How does editing PDF metadata differ from editing PDF content?", a: "Metadata editing changes only the document properties (title, author, dates, keywords) — it does not alter the visible text, images, or layout of the PDF pages themselves." },
                { q: "Does PDF.it support PDF metadata editing?", a: "Direct metadata editing is coming soon. In the meantime, you can use Flatten PDF to clean up form fields and annotations, or Protect PDF to secure your document properties before sharing." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
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
