import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF for Website — Optimize PDFs for Web | PDF.it",
  description:
    "Optimize PDFs for your website with smart compression. Reduce file size for faster page loads and better user experience — keeps quality high while shrinking downloads.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I optimize a PDF for my website?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it and click Compress. Recommended compression balances quality and file size, producing a PDF that loads quickly on web pages while keeping text and images looking good." }
    },
    {
      "@type": "Question",
      "name": "Will web-optimized PDFs look good when downloaded?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Recommended compression reduces file size while preserving visual quality. Text stays sharp, and images retain good detail — visitors can download and read the PDF without issues." }
    },
    {
      "@type": "Question",
      "name": "Why should I compress PDFs before hosting them on a website?",
      "acceptedAnswer": { "@type": "Answer", "text": "Large PDFs slow down page load times, hurt SEO rankings, and frustrate visitors on mobile devices. Compressing PDFs ensures faster downloads, lower bandwidth costs, and a better user experience." }
    },
    {
      "@type": "Question",
      "name": "Does PDF file size affect website SEO?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google considers page speed as a ranking factor. If a PDF takes too long to load, it can negatively affect your search rankings. Smaller PDFs load faster and contribute to better Core Web Vitals scores." }
    },
    {
      "@type": "Question",
      "name": "Can I compress multiple PDFs for my website at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro users can batch-compress multiple PDFs at once. Upload all your files, compress them together, and download everything as a ZIP — perfect for optimizing an entire library of website resources." }
    },
    {
      "@type": "Question",
      "name": "What compression level should I use for web PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Recommended compression is ideal for web use. It significantly reduces file size while keeping images and text looking professional. Use extreme compression only if you need the absolute smallest file and can accept some quality loss." }
    }
  ]
}

export default function CompressPDFForWebsitePage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF for Website</h1>
              <p className="text-xl text-slate-300 mb-8">
                Optimize your PDFs for web hosting. Recommended compression keeps quality high while reducing file size for faster page loads and a better visitor experience.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Smart Compression</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Optimizing your PDF for web..."
          successMessage="Your web-optimized PDF is ready!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Optimize PDFs for Your Website?</h2>
            <p className="text-lg text-slate-600 mb-8">
              PDFs hosted on your website are downloaded by visitors, indexed by search engines, and affect your page load speed. Large PDFs slow everything down — they increase bounce rates, hurt SEO, and cost more bandwidth. Compressing your PDFs before uploading them to your site keeps downloads fast and your visitors happy.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Recommended compression balances quality and file size</li>
              <li>&#10003; Faster downloads improve user experience and reduce bounce rates</li>
              <li>&#10003; Smaller files save bandwidth and hosting costs</li>
              <li>&#10003; Better page speed helps your SEO rankings</li>
              <li>&#10003; No installation — optimize PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Product Catalogs and Price Lists</h3>
                <p className="text-slate-600">
                  E-commerce sites and manufacturers often host product catalogs as downloadable PDFs. Compressing them ensures customers can download quickly without waiting, especially on mobile devices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Restaurant Menus</h3>
                <p className="text-slate-600">
                  Restaurants linking to PDF menus on their website need fast-loading files. A visitor on their phone should be able to view your menu in seconds, not wait for a large file to download.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Brochures and Marketing Materials</h3>
                <p className="text-slate-600">
                  Marketing brochures, case studies, and company profiles hosted for download should be optimized for web. Smaller files mean more completed downloads and better lead generation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Whitepapers and Downloadable Resources</h3>
                <p className="text-slate-600">
                  Whitepapers, ebooks, and guides used for content marketing should load quickly. Compressing these resources means visitors are more likely to complete the download and engage with your content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Optimize a PDF for Your Website</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Compress PDF — recommended compression is applied to balance quality and size.",
                "Download your optimized PDF and upload it to your website. Your visitors will enjoy faster downloads.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
                { name: "Compress to 1MB", desc: "For 1MB upload limits.", href: "/compress-pdf-to-1mb", icon: Compress },
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Split PDF", desc: "Break large PDFs into parts.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Flatten PDF", desc: "Remove form fields and annotations.", href: "/flatten-pdf", icon: FileText },
                { name: "Rotate PDF", desc: "Fix page orientation.", href: "/rotate-pdf", icon: RotateCw },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#14D8C4] to-[#0FBFB0] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#14D8C4] transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
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
                { q: "How do I optimize a PDF for my website?", a: "Upload your PDF to PDF.it and click Compress. Recommended compression balances quality and file size, producing a PDF that loads quickly on web pages while keeping text and images looking good." },
                { q: "Will web-optimized PDFs look good when downloaded?", a: "Yes. Recommended compression reduces file size while preserving visual quality. Text stays sharp, and images retain good detail — visitors can download and read the PDF without issues." },
                { q: "Why should I compress PDFs before hosting them on a website?", a: "Large PDFs slow down page load times, hurt SEO rankings, and frustrate visitors on mobile devices. Compressing PDFs ensures faster downloads, lower bandwidth costs, and a better user experience." },
                { q: "Does PDF file size affect website SEO?", a: "Yes. Google considers page speed as a ranking factor. If a PDF takes too long to load, it can negatively affect your search rankings. Smaller PDFs load faster and contribute to better Core Web Vitals scores." },
                { q: "Can I compress multiple PDFs for my website at once?", a: "Pro users can batch-compress multiple PDFs at once. Upload all your files, compress them together, and download everything as a ZIP — perfect for optimizing an entire library of website resources." },
                { q: "What compression level should I use for web PDFs?", a: "Recommended compression is ideal for web use. It significantly reduces file size while keeping images and text looking professional. Use extreme compression only if you need the absolute smallest file and can accept some quality loss." },
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
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Optimize Your Website PDFs</h2>
            <p className="text-slate-300 text-lg mb-8">
              Compress your PDFs for faster page loads and happier visitors. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-for-website"
              className="inline-block bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Optimize PDF for Web Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
