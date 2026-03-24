import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Batch Merge PDFs — Combine Multiple Files at Once | PDF.it",
  description:
    "Batch merge multiple PDF files at once with PDF.it Pro. Upload dozens of PDFs and combine them into one document in a single operation — fast and efficient.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I batch merge multiple PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "With PDF.it Pro, upload multiple PDF files simultaneously to the Merge PDF tool. Select all the files you want to combine, arrange them in order, and merge them into a single document in one operation." }
    },
    {
      "@type": "Question",
      "name": "How many PDFs can I merge at once with batch processing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro users can upload and merge dozens of PDF files in a single batch operation. There is no fixed file count limit — the main constraint is the total file size, which can be up to 200MB per file for Pro users, or up to 1GB per file for Business users." }
    },
    {
      "@type": "Question",
      "name": "Is batch merge available on the free plan?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can merge files one at a time with files up to 25MB. Batch processing — uploading and merging multiple files simultaneously — is a Pro feature available for $7.99/month." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size for batch merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro users can upload files up to 200MB each. Business users can upload files up to 1GB each. Free users are limited to 25MB per file. For very large documents, consider compressing them first with PDF.it's Compress PDF tool." }
    },
    {
      "@type": "Question",
      "name": "Can I choose the order of merged PDFs in a batch?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. When you upload multiple files for batch merging, you can arrange them in your preferred order before combining. The final merged PDF will follow the sequence you set." }
    },
    {
      "@type": "Question",
      "name": "Does batch merging affect PDF quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Batch merging preserves the original quality of all your PDF files. Text, images, formatting, fonts, and interactive elements remain unchanged in the merged output." }
    }
  ]
}

export default function BatchMergePDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Batch Merge PDFs</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine multiple PDF files at once with PDF.it Pro. Upload dozens of documents and merge them into a single PDF in one operation — save hours of manual work.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Process Multiple Files</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Download as ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Upsell CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Batch Processing Requires Pro</h2>
            <p className="text-slate-600 mb-6">Free users can merge files one at a time. Upgrade to Pro for batch merging, larger files, and unlimited conversions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/merge-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Try Merge PDF Free
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
              When you need to combine dozens of PDF files into one document, doing it one at a time is painfully slow. PDF.it Pro's batch merge feature lets you upload multiple files at once, arrange them in order, and merge them all in a single operation.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Upload and merge multiple PDFs simultaneously</li>
              <li>&#10003; Arrange files in any order before merging</li>
              <li>&#10003; Files up to 200MB each with Pro, 1GB with Business</li>
              <li>&#10003; Per-file progress tracking and Download All as ZIP</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Merge Invoices and Receipts in Bulk</h2>
              <p className="text-slate-600">
                Accountants and bookkeepers often need to combine months of invoices or receipts into a single PDF for filing or audits. With batch merge, upload all your invoice PDFs at once and combine them into one organized document in seconds.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Reports and Presentations</h2>
              <p className="text-slate-600">
                Assembling a quarterly report from multiple departments? Upload all the individual reports and merge them into a single comprehensive document. Perfect for board presentations, project documentation, and multi-author reports.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Process Document Batches Efficiently</h2>
              <p className="text-slate-600">
                Whether you're combining contracts, consolidating research papers, or assembling training materials, batch merge eliminates the tedious process of merging files one by one. Upload everything at once and let PDF.it handle the rest.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Batch Merge PDFs</h2>
            <div className="space-y-4">
              {[
                "Open Merge PDF and select multiple files at once (Pro feature).",
                "Arrange the files in your preferred order.",
                "Click Merge and download your combined PDF.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs" },
                { name: "Split PDF", href: "/split-pdf", desc: "Separate pages" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix orientation" },
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
                { q: "How do I batch merge multiple PDFs at once?", a: "With PDF.it Pro, upload multiple PDF files simultaneously to the Merge PDF tool. Select all the files you want to combine, arrange them in order, and merge them into a single document in one operation." },
                { q: "How many PDFs can I merge at once with batch processing?", a: "Pro users can upload and merge dozens of PDF files in a single batch operation. There is no fixed file count limit — the main constraint is the total file size, which can be up to 200MB per file for Pro users, or up to 1GB per file for Business users." },
                { q: "Is batch merge available on the free plan?", a: "Free users can merge files one at a time with files up to 25MB. Batch processing — uploading and merging multiple files simultaneously — is a Pro feature available for $7.99/month." },
                { q: "What is the maximum file size for batch merging?", a: "Pro users can upload files up to 200MB each. Business users can upload files up to 1GB each. Free users are limited to 25MB per file. For very large documents, consider compressing them first with PDF.it's Compress PDF tool." },
                { q: "Can I choose the order of merged PDFs in a batch?", a: "Yes. When you upload multiple files for batch merging, you can arrange them in your preferred order before combining. The final merged PDF will follow the sequence you set." },
                { q: "Does batch merging affect PDF quality?", a: "No. Batch merging preserves the original quality of all your PDF files. Text, images, formatting, fonts, and interactive elements remain unchanged in the merged output." },
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
