import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Batch Organize PDFs — Process Multiple Files at Once | OmnisPDF",
  description:
    "Batch organize multiple PDF files with OmnisPDF Pro. Merge, split, rotate, and compress PDFs in bulk — save time with batch processing.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does batch organize PDFs mean?",
      "acceptedAnswer": { "@type": "Answer", "text": "Batch organizing means processing multiple PDF files at once — merging, splitting, rotating, or compressing them in bulk instead of one at a time. OmnisPDF Pro lets you upload multiple files and apply operations to all of them simultaneously." }
    },
    {
      "@type": "Question",
      "name": "What operations can I perform in batch?",
      "acceptedAnswer": { "@type": "Answer", "text": "With OmnisPDF Pro, you can batch merge (combine multiple PDFs), batch split (separate multiple PDFs into pages), batch rotate (fix orientation on multiple files), and batch compress (reduce file sizes in bulk). All operations support multi-file upload and Download All as ZIP." }
    },
    {
      "@type": "Question",
      "name": "Is batch processing available on the free plan?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can process one file at a time with files up to 25MB. Batch processing — working with multiple files simultaneously — is a Pro feature available for $7.99/month, which also includes files up to 200MB and unlimited conversions." }
    },
    {
      "@type": "Question",
      "name": "How many files can I process at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro users can upload and process dozens of files in a single batch. There is no fixed file count limit — the main constraint is the per-file size limit (200MB for Pro, 1GB for Business). All files are processed in parallel for maximum speed." }
    },
    {
      "@type": "Question",
      "name": "Can I automate PDF workflows with OmnisPDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Business plan users ($13.99/month) get access to Workflow Automation, which lets you chain multiple operations together — for example, split PDFs, then compress each part, then merge selected pages. Visit the Workflow Automation page to learn more." }
    },
    {
      "@type": "Question",
      "name": "Are my files secure during batch processing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All files are processed securely and deleted automatically after your session ends. OmnisPDF does not store or share your documents. Processing happens in isolated sessions for each user." }
    }
  ]
}

export default function BatchOrganizePDFPage() {
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
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Batch Organize PDFs</h1>
              <p className="text-xl text-slate-300 mb-8">
                Process multiple PDF files at once with OmnisPDF Pro. Merge, split, rotate, and compress PDFs in bulk — save hours of repetitive work with batch processing.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Multiple Operations</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Download as ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Upsell CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Batch Processing Requires Pro</h2>
            <p className="text-slate-600 mb-6">Free users can process files one at a time. Upgrade to Pro for batch processing, larger files, and unlimited conversions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/merge-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Try Free Tools
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Managing a large library of PDF files is time-consuming when you can only process one at a time. OmnisPDF Pro gives you batch processing across all major tools — upload multiple files, apply operations in bulk, and download everything as a ZIP.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Batch merge, split, rotate, and compress PDFs</li>
              <li>&#10003; Upload multiple files simultaneously</li>
              <li>&#10003; Files up to 200MB each with Pro</li>
              <li>&#10003; Per-file progress tracking and Download All as ZIP</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organize Document Libraries</h2>
              <p className="text-slate-600">
                When your document folder is overflowing with PDFs that need merging, splitting, or compressing, batch processing is the answer. Upload your entire batch, choose the operation, and let OmnisPDF process everything in parallel — no more clicking through files one by one.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Process Office Files in Bulk</h2>
              <p className="text-slate-600">
                Teams that handle large volumes of documents — HR departments processing applications, legal teams organizing case files, accounting teams managing invoices — can save hours every week with batch PDF processing. Upload, process, and download in minutes instead of hours.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Automate PDF Workflows</h2>
              <p className="text-slate-600">
                For even more power, Business plan users can access Workflow Automation to chain multiple operations together. Split a batch of PDFs, compress each result, then merge selected pages — all in a single automated workflow. Perfect for recurring document processing tasks.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Batch Organize PDFs</h2>
            <div className="space-y-4">
              {[
                "Choose your tool — Merge, Split, Rotate, or Compress PDF.",
                "Upload multiple files at once (Pro feature — free users process one file at a time).",
                "Click process and download all results as a ZIP file.",
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs" },
                { name: "Split PDF", href: "/split-pdf", desc: "Separate pages" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Workflow Automation", href: "/workflow-automation", desc: "Chain operations" },
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What does batch organize PDFs mean?", a: "Batch organizing means processing multiple PDF files at once — merging, splitting, rotating, or compressing them in bulk instead of one at a time. OmnisPDF Pro lets you upload multiple files and apply operations to all of them simultaneously." },
                { q: "What operations can I perform in batch?", a: "With OmnisPDF Pro, you can batch merge (combine multiple PDFs), batch split (separate multiple PDFs into pages), batch rotate (fix orientation on multiple files), and batch compress (reduce file sizes in bulk). All operations support multi-file upload and Download All as ZIP." },
                { q: "Is batch processing available on the free plan?", a: "Free users can process one file at a time with files up to 25MB. Batch processing — working with multiple files simultaneously — is a Pro feature available for $7.99/month, which also includes files up to 200MB and unlimited conversions." },
                { q: "How many files can I process at once?", a: "Pro users can upload and process dozens of files in a single batch. There is no fixed file count limit — the main constraint is the per-file size limit (200MB for Pro, 1GB for Business). All files are processed in parallel for maximum speed." },
                { q: "Can I automate PDF workflows with OmnisPDF?", a: "Yes. Business plan users ($13.99/month) get access to Workflow Automation, which lets you chain multiple operations together — for example, split PDFs, then compress each part, then merge selected pages. Visit the Workflow Automation page to learn more." },
                { q: "Are my files secure during batch processing?", a: "Yes. All files are processed securely and deleted automatically after your session ends. OmnisPDF does not store or share your documents. Processing happens in isolated sessions for each user." },
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
