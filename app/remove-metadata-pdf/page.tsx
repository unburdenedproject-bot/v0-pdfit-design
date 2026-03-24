import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Zap, Eye, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remove Metadata from PDF — Strip Hidden Data from PDFs | PDF.it",
  description:
    "Remove hidden metadata from PDF files with PDF.it. Strip author names, timestamps, GPS data, and software info before sharing — protect your privacy.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PDF metadata?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF metadata is hidden information embedded in the file, including the author's name, creation and modification dates, software used to create the PDF, and sometimes GPS coordinates or company names. This data is not visible on the pages but can be viewed in document properties." }
    },
    {
      "@type": "Question",
      "name": "Why should I remove metadata from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Metadata can reveal private information like your name, your company, the software you use, or when a document was created or edited. Removing it protects your privacy and prevents unintended data leaks when sharing files publicly." }
    },
    {
      "@type": "Question",
      "name": "What metadata do PDFs typically contain?",
      "acceptedAnswer": { "@type": "Answer", "text": "Common PDF metadata fields include Title, Author, Subject, Keywords, Creator (the application that made it), Producer (the PDF library used), creation date, modification date, and sometimes custom properties added by enterprise software." }
    },
    {
      "@type": "Question",
      "name": "Is removing PDF metadata reversible?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Once metadata is removed and the file is saved, the original metadata cannot be recovered from the cleaned file. Always keep a backup of the original if you might need the metadata later." }
    },
    {
      "@type": "Question",
      "name": "Does flattening a PDF remove metadata?",
      "acceptedAnswer": { "@type": "Answer", "text": "Flattening a PDF removes form fields, annotations, and layers, but may not remove all metadata fields. For thorough metadata removal, use a dedicated metadata stripping or redaction tool." }
    },
    {
      "@type": "Question",
      "name": "Can PDF metadata pose a security risk?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Metadata can expose internal usernames, network paths, software versions, and revision history. Attackers can use this information for social engineering or to identify software vulnerabilities." }
    }
  ]
}

export default function RemoveMetadataPDFPage() {
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
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remove Metadata from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Strip hidden author names, timestamps, GPS data, and software information from your PDFs before sharing — protect your privacy.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Strip Hidden Data</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-orange-500" /><span>Protect Your Privacy</span></div>
                <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-orange-500" /><span>Share Files Safely</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Every PDF carries hidden metadata — your name, the software you used, when you created or edited the file, and sometimes even GPS coordinates. Before sharing documents publicly or with clients, stripping this metadata protects your privacy and prevents unintended data leaks.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Remove author names, company info, and usernames</li>
              <li>&#10003; Strip creation and modification timestamps</li>
              <li>&#10003; Delete software and version information</li>
              <li>&#10003; Remove GPS coordinates and location data</li>
              <li>&#10003; Protect against social engineering and data leaks</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Clean Up Your PDFs</h2>
            <p className="text-slate-600 mb-6">Use Flatten PDF to remove form fields and annotations, or PDF Redaction for thorough metadata and content removal.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/flatten-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Flatten PDF (Free)
              </Link>
              <Link href="/pdf-redaction" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                PDF Redaction (Business)
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Privacy Risks of PDF Metadata</h2>
              <p className="text-slate-600">
                When you share a PDF, you may unknowingly share your full name, email address, company name, the software you used, and even your computer's username or network path. This information can be used for social engineering, phishing attacks, or simply to learn more about you than you intended to reveal.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">What Metadata Do PDFs Contain?</h2>
              <p className="text-slate-600">
                PDF files typically store a Title, Author, Subject, Keywords, Creator application (like Microsoft Word or Adobe InDesign), Producer (the PDF library used), creation date, modification date, and sometimes custom fields added by enterprise document management systems. Some PDFs also contain revision history and editing timestamps.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">When to Strip PDF Metadata</h2>
              <p className="text-slate-600">
                Remove metadata before sharing documents publicly, submitting files to clients or vendors, posting PDFs online, filing documents with courts or agencies, or anytime you want to prevent recipients from seeing who created or edited the file. It is also good practice for GDPR compliance when handling personal data.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Remove Metadata from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to PDF.it.",
                "Use Flatten PDF to remove form fields, annotations, and layers.",
                "For thorough metadata removal, use PDF Redaction (Business plan) to strip all hidden data.",
                "Download your cleaned PDF, ready to share safely.",
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
                { name: "PDF Redaction", href: "/pdf-redaction", desc: "Redact content (Business)" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Password-protect PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
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
                { q: "What is PDF metadata?", a: "PDF metadata is hidden information embedded in the file, including the author's name, creation and modification dates, software used to create the PDF, and sometimes GPS coordinates or company names. This data is not visible on the pages but can be viewed in document properties." },
                { q: "Why should I remove metadata from a PDF?", a: "Metadata can reveal private information like your name, your company, the software you use, or when a document was created or edited. Removing it protects your privacy and prevents unintended data leaks when sharing files publicly." },
                { q: "What metadata do PDFs typically contain?", a: "Common PDF metadata fields include Title, Author, Subject, Keywords, Creator (the application that made it), Producer (the PDF library used), creation date, modification date, and sometimes custom properties added by enterprise software." },
                { q: "Is removing PDF metadata reversible?", a: "No. Once metadata is removed and the file is saved, the original metadata cannot be recovered from the cleaned file. Always keep a backup of the original if you might need the metadata later." },
                { q: "Does flattening a PDF remove metadata?", a: "Flattening a PDF removes form fields, annotations, and layers, but may not remove all metadata fields. For thorough metadata removal, use a dedicated metadata stripping or redaction tool." },
                { q: "Can PDF metadata pose a security risk?", a: "Yes. Metadata can expose internal usernames, network paths, software versions, and revision history. Attackers can use this information for social engineering or to identify software vulnerabilities." },
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
