import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF Without Losing Quality — Smart Compression | PDF.it",
  description:
    "Compress PDF files without losing quality. Smart compression optimizes internal structures, subsets fonts, and lightly compresses images while preserving readability — fast, browser-based, free.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does PDF.it compress without losing quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Smart compression optimizes internal PDF structures, removes duplicate objects, subsets embedded fonts, and applies light image compression. This reduces file size while preserving visual quality and readability." }
    },
    {
      "@type": "Question",
      "name": "Will images look different after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "With recommended compression, images are lightly optimized. The difference is virtually unnoticeable for most documents. Text, charts, and diagrams remain crisp and sharp." }
    },
    {
      "@type": "Question",
      "name": "How much smaller will my PDF be?",
      "acceptedAnswer": { "@type": "Answer", "text": "Results depend on your PDF content. Documents with embedded fonts and unoptimized structures typically see 20-50% size reduction. Files that are already optimized may see smaller reductions." }
    },
    {
      "@type": "Question",
      "name": "Is this different from extreme compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Extreme compression aggressively reduces image resolution for maximum size reduction. Recommended compression prioritizes quality preservation, applying gentler optimization that keeps your document looking professional." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF without losing quality on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your PDF, compress with smart settings, and download the optimized file directly on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "What types of PDFs benefit most from quality-preserving compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Professional reports, client presentations, portfolios, and legal documents benefit most — any document where visual quality matters. Smart compression reduces size without compromising the professional appearance." }
    }
  ]
}

export default function CompressPDFWithoutLosingQualityPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF Without Losing Quality</h1>
              <p className="text-xl text-slate-300 mb-8">
                Smart compression optimizes internal PDF structures, subsets fonts, and lightly compresses images — reducing file size while preserving readability and visual quality.
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
          processingMessage="Applying smart compression to your PDF..."
          successMessage="Your optimized PDF is ready!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">How Does Quality-Preserving Compression Work?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Not all compression is the same. Smart compression focuses on optimizing the internal structure of your PDF — removing duplicate objects, subsetting embedded fonts, and applying light image optimization. The result is a noticeably smaller file that looks virtually identical to the original.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Optimizes internal PDF structures and removes redundancies</li>
              <li>&#10003; Subsets fonts to remove unused characters</li>
              <li>&#10003; Light image compression preserves visual quality</li>
              <li>&#10003; Text, charts, and diagrams remain crisp and sharp</li>
              <li>&#10003; No installation — works in any browser on any device</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Professional Reports</h3>
                <p className="text-slate-600">
                  Annual reports, financial summaries, and business analyses need to look polished. Smart compression reduces file size for easy sharing while keeping charts, graphs, and formatting pristine.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Client Presentations</h3>
                <p className="text-slate-600">
                  Presentations exported as PDFs often contain high-quality images and branded graphics. Compress them for email delivery without compromising the professional appearance your clients expect.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portfolios and Design Work</h3>
                <p className="text-slate-600">
                  Creative portfolios rely on image quality to make an impression. Quality-preserving compression lets you share your work via email or upload portals without degrading your designs.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Legal Documents</h3>
                <p className="text-slate-600">
                  Contracts, agreements, and legal filings must remain fully readable. Smart compression optimizes file size while ensuring every word, signature, and stamp stays sharp and legible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress PDF Without Losing Quality</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — smart compression is applied to optimize your file while preserving quality.",
                "Download your optimized PDF. If you need even smaller files, try extreme compression — but note it may reduce image detail.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Compress PDF", desc: "Standard compression.", href: "/compress-pdf", icon: Compress },
                { name: "Compress to 1MB", desc: "For 1MB upload limits.", href: "/compress-pdf-to-1mb", icon: Compress },
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Split PDF", desc: "Split large documents.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields.", href: "/flatten-pdf", icon: FileText },
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How does PDF.it compress without losing quality?", a: "Smart compression optimizes internal PDF structures, removes duplicate objects, subsets embedded fonts, and applies light image compression. This reduces file size while preserving visual quality and readability." },
                { q: "Will images look different after compression?", a: "With recommended compression, images are lightly optimized. The difference is virtually unnoticeable for most documents. Text, charts, and diagrams remain crisp and sharp." },
                { q: "How much smaller will my PDF be?", a: "Results depend on your PDF content. Documents with embedded fonts and unoptimized structures typically see 20-50% size reduction. Files that are already optimized may see smaller reductions." },
                { q: "Is this different from extreme compression?", a: "Yes. Extreme compression aggressively reduces image resolution for maximum size reduction. Recommended compression prioritizes quality preservation, applying gentler optimization that keeps your document looking professional." },
                { q: "Can I compress a PDF without losing quality on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your PDF, compress with smart settings, and download the optimized file directly on iPhone or Android." },
                { q: "What types of PDFs benefit most from quality-preserving compression?", a: "Professional reports, client presentations, portfolios, and legal documents benefit most — any document where visual quality matters. Smart compression reduces size without compromising the professional appearance." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Compress Your PDF — Keep the Quality</h2>
            <p className="text-slate-300 text-lg mb-8">
              Smart compression reduces file size without sacrificing readability. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-without-losing-quality"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress Without Losing Quality
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
