import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress PDF Images — Reduce Image-Heavy PDF Size | PDF.it",
  description:
    "Compress image-heavy PDFs with extreme compression to dramatically reduce file size. Perfect for photo portfolios, product catalogs, real estate listings, and marketing materials — fast, browser-based, free.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are image-heavy PDFs so large?",
      "acceptedAnswer": { "@type": "Answer", "text": "Images are the largest component in most PDFs. High-resolution photos, graphics, and illustrations can make a PDF many times larger than a text-only document. Compression targets these embedded images for the biggest size reduction." }
    },
    {
      "@type": "Question",
      "name": "How much can image compression reduce my PDF size?",
      "acceptedAnswer": { "@type": "Answer", "text": "Results depend on the number, resolution, and type of images in your PDF. Image-heavy documents typically see significant reductions — often 50-80% — though exact results vary by document." }
    },
    {
      "@type": "Question",
      "name": "Will my images still look good after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Extreme compression reduces image resolution to achieve maximum size reduction. Images remain clear enough for on-screen viewing and most print purposes, but fine details may be softened. For quality-critical work, try recommended compression instead." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF with hundreds of images?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it processes all embedded images in your PDF regardless of how many there are. Documents with many images typically see the largest file size reductions." }
    },
    {
      "@type": "Question",
      "name": "Does compression affect text in my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Text in PDFs is stored as vector data, not images. Compression targets the embedded images while leaving text, fonts, and formatting completely untouched and sharp." }
    },
    {
      "@type": "Question",
      "name": "What if my image-heavy PDF is still too large after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try splitting the PDF into smaller sections with our Split PDF tool, then compress each part individually. You can also extract only the pages you need before compressing." }
    }
  ]
}

export default function CompressPDFImagesPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress PDF Images</h1>
              <p className="text-xl text-slate-300 mb-8">
                Image-heavy PDFs — photos, catalogs, presentations — are often the largest files you deal with. Extreme compression targets embedded images for maximum size reduction, making your files easier to share and upload.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Extreme Image Compression</span></div>
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
          processingMessage="Compressing images in your PDF..."
          successMessage="Your compressed PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Focus on Image Compression in PDFs?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Images are almost always the largest component in a PDF. A single high-resolution photo can add several megabytes. When your PDF contains dozens or hundreds of images — product photos, illustrations, charts — the file size can balloon to 50MB or more. PDF.it's extreme compression targets these embedded images for the most dramatic size reduction possible.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Targets embedded images for maximum size reduction</li>
              <li>&#10003; Processes all images in your PDF at once</li>
              <li>&#10003; Text and formatting remain untouched and sharp</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — compress in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Photo Portfolios</h3>
                <p className="text-slate-600">
                  Photography portfolios exported as PDFs can easily exceed 100MB. Compress the embedded images to create a shareable version that downloads quickly while still showcasing your work.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Product Catalogs</h3>
                <p className="text-slate-600">
                  E-commerce catalogs with product photos on every page create massive PDFs. Compress images to make your catalog easy to email, download from your website, or share with distributors.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Real Estate Listings</h3>
                <p className="text-slate-600">
                  Property brochures packed with interior and exterior photos can be very large. Compress the images so agents can quickly share listings via email or upload to MLS portals.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Marketing Materials</h3>
                <p className="text-slate-600">
                  Brochures, flyers, and pitch decks loaded with graphics and photos need to be shareable. Compress images to reduce file size for email campaigns, social sharing, and website downloads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress PDF Images</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your image-heavy PDF into PDF.it.",
                "Click Compress PDF — extreme compression targets all embedded images automatically.",
                "Download your smaller PDF. If still too large, try splitting the file first, then compress each part.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Compress PDF", desc: "Standard compression.", href: "/compress-pdf", icon: Compress },
                { name: "Compress to 5MB", desc: "For 5MB upload limits.", href: "/compress-pdf-to-5mb", icon: Compress },
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "Extract Images", desc: "Pull images from PDFs.", href: "/extract-images-from-pdf", icon: FileText },
                { name: "Split PDF", desc: "Split if still too large.", href: "/split-pdf", icon: Scissors },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
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
                { q: "Why are image-heavy PDFs so large?", a: "Images are the largest component in most PDFs. High-resolution photos, graphics, and illustrations can make a PDF many times larger than a text-only document. Compression targets these embedded images for the biggest size reduction." },
                { q: "How much can image compression reduce my PDF size?", a: "Results depend on the number, resolution, and type of images in your PDF. Image-heavy documents typically see significant reductions — often 50-80% — though exact results vary by document." },
                { q: "Will my images still look good after compression?", a: "Extreme compression reduces image resolution to achieve maximum size reduction. Images remain clear enough for on-screen viewing and most print purposes, but fine details may be softened. For quality-critical work, try recommended compression instead." },
                { q: "Can I compress a PDF with hundreds of images?", a: "Yes. PDF.it processes all embedded images in your PDF regardless of how many there are. Documents with many images typically see the largest file size reductions." },
                { q: "Does compression affect text in my PDF?", a: "No. Text in PDFs is stored as vector data, not images. Compression targets the embedded images while leaving text, fonts, and formatting completely untouched and sharp." },
                { q: "What if my image-heavy PDF is still too large after compression?", a: "Try splitting the PDF into smaller sections with our Split PDF tool, then compress each part individually. You can also extract only the pages you need before compressing." },
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
            <h2 className="text-2xl font-black mb-4">Compress Your Image-Heavy PDFs</h2>
            <p className="text-slate-300 text-lg mb-8">
              Reduce oversized PDFs packed with images in seconds. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-pdf-images"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress PDF Images Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
