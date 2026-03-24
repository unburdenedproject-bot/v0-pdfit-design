import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF for Attachment — Shrink PDFs for Sending | PDF.it",
  description:
    "Compress your PDF for attaching to emails, support tickets, forms, and messages. Recommended compression keeps quality high while reducing file size — free and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF for an attachment?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it and click Compress. Recommended compression reduces the file size while keeping text and images looking good, so your attachment uploads quickly and is easy to open." }
    },
    {
      "@type": "Question",
      "name": "Why do my PDF attachments get rejected?",
      "acceptedAnswer": { "@type": "Answer", "text": "Many systems have file size limits for attachments — email providers, support ticket platforms, CRMs, and project management tools all enforce caps. Compressing your PDF reduces its size so it fits within these limits." }
    },
    {
      "@type": "Question",
      "name": "Will the compressed PDF still look professional?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Recommended compression preserves visual quality. Text stays sharp and clear, and images retain good detail. The document will look professional when the recipient opens it." }
    },
    {
      "@type": "Question",
      "name": "What file size limits do common platforms have?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gmail allows 25MB attachments, Outlook allows 20MB, Zendesk and Freshdesk typically cap at 20-50MB, and many CRMs have limits between 10-25MB. Compressing your PDF helps ensure it fits within any of these limits." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF attachment on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and attach the smaller file — all from your iPhone or Android device without installing an app." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF is still too large after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try splitting the PDF into smaller parts with our Split PDF tool, then compress and attach each part separately. You can also flatten the PDF or remove unnecessary pages before compressing." }
    }
  ]
}

export default function CompressPDFForAttachmentPage() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF for Attachments</h1>
              <p className="text-xl text-slate-300 mb-8">
                Shrink your PDFs so they attach quickly to emails, support tickets, forms, and messages. Recommended compression keeps quality high while reducing file size.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Smart Compression</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF for attachment..."
          successMessage="Your compressed PDF is ready to attach!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Compress PDFs for Attachments?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you are attaching a PDF to an email, a support ticket, a CRM record, or a project management tool — smaller files upload faster and are less likely to get rejected. Many platforms enforce strict size limits on attachments. Compressing your PDF ensures it goes through smoothly every time.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Recommended compression preserves quality while reducing size</li>
              <li>&#10003; Smaller files upload faster to any platform</li>
              <li>&#10003; Avoid attachment rejections from size limits</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — compress PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Support Tickets</h3>
                <p className="text-slate-600">
                  Helpdesk platforms like Zendesk, Freshdesk, and Intercom have attachment size limits. Compress your PDFs before attaching them to support tickets so your documentation uploads without issues.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">CRM Attachments</h3>
                <p className="text-slate-600">
                  Attaching contracts, proposals, and reports to CRM records in Salesforce, HubSpot, or Pipedrive? Compressed PDFs upload faster and keep your CRM storage lean and organized.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Project Management Tools</h3>
                <p className="text-slate-600">
                  Tools like Jira, Asana, Trello, and Monday.com let you attach files to tasks and comments. Smaller PDFs mean faster uploads and a smoother experience for your entire team.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">HR Document Submissions</h3>
                <p className="text-slate-600">
                  Submitting onboarding paperwork, tax forms, or policy documents through HR platforms? Compress your PDFs to meet upload limits and ensure your documents are received without delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a PDF for Attachments</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — recommended compression is applied to reduce size while preserving quality.",
                "Download your smaller PDF and attach it. If still too large, try splitting the file first, then compress each part.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Compress PDF", desc: "Standard compression.", href: "/compress-pdf", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress to 5MB", desc: "For 5MB upload limits.", href: "/compress-pdf-to-5mb", icon: Compress },
                { name: "Split PDF", desc: "Split if still too large.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields and annotations.", href: "/flatten-pdf", icon: FileText },
                { name: "Rotate PDF", desc: "Fix page orientation.", href: "/rotate-pdf", icon: RotateCw },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
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
                { q: "How do I compress a PDF for an attachment?", a: "Upload your PDF to PDF.it and click Compress. Recommended compression reduces the file size while keeping text and images looking good, so your attachment uploads quickly and is easy to open." },
                { q: "Why do my PDF attachments get rejected?", a: "Many systems have file size limits for attachments — email providers, support ticket platforms, CRMs, and project management tools all enforce caps. Compressing your PDF reduces its size so it fits within these limits." },
                { q: "Will the compressed PDF still look professional?", a: "Yes. Recommended compression preserves visual quality. Text stays sharp and clear, and images retain good detail. The document will look professional when the recipient opens it." },
                { q: "What file size limits do common platforms have?", a: "Gmail allows 25MB attachments, Outlook allows 20MB, Zendesk and Freshdesk typically cap at 20-50MB, and many CRMs have limits between 10-25MB. Compressing your PDF helps ensure it fits within any of these limits." },
                { q: "Can I compress a PDF attachment on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your PDF, compress it, and attach the smaller file — all from your iPhone or Android device without installing an app." },
                { q: "What if my PDF is still too large after compression?", a: "Try splitting the PDF into smaller parts with our Split PDF tool, then compress and attach each part separately. You can also flatten the PDF or remove unnecessary pages before compressing." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Need to Shrink a PDF for Attachment?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Compress your PDF in seconds so it attaches smoothly anywhere. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-for-attachment"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress for Attachment Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
