import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image as ImageIcon, Zap, Shield, Upload, FileText, Merge, RotateCw, Scissors, Lock, ScanLine, Camera } from "lucide-react"

export const metadata = {
  title: "PNG to PDF — Convert PNG Images to PDF Online | PDF.it",
  description:
    "Convert PNG images to PDF documents online for free. Upload one or multiple images and get a professional PDF instantly. Preserves transparency and full quality.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a PNG to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PNG image to PDF.it, click Convert to PDF, and download the result. You can upload multiple PNG images at once and each will be converted to its own PDF file." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple PNG images to PDF at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Select multiple PNG files when uploading and each image will be converted to a separate PDF. You can download them individually or use the Download All as ZIP button to get them in a single archive." }
    },
    {
      "@type": "Question",
      "name": "Is the PNG to PDF converter free?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can convert several PNG images to PDF for free every day. For unlimited conversions, batch processing, and larger file support, upgrade to the Pro plan at $7.99/month." }
    },
    {
      "@type": "Question",
      "name": "Does the converter preserve PNG transparency?",
      "acceptedAnswer": { "@type": "Answer", "text": "The PNG image is embedded in the PDF as-is, preserving its full quality. However, PDF viewers typically render transparent areas as white since PDFs have a white page background by default." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size for PNG to PDF conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload PNG images up to 25MB each. Pro and Business subscribers can upload images up to 200MB each." }
    },
    {
      "@type": "Question",
      "name": "Why convert PNG to PDF instead of sharing the PNG directly?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF is the universal document format accepted by institutions, employers, and government portals. Converting PNG to PDF ensures consistent formatting, easier printing, and professional presentation across all devices." }
    },
  ]
}

export default function PngToPdfPage() {
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
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PNG to PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Convert PNG images to PDF documents. Upload one or multiple images and get a professional PDF instantly.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                No software to install. No signup required. Full quality preserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-orange-500" /><span>Multiple Images</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Conversion</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Lossless Quality</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/png"]}
          acceptedExtensions=".png"
          formatLabel="PNG"
        />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Upload PNG Images", desc: "Drag and drop your PNG files, or click to browse. You can select one or multiple images at once." },
                { step: "2", title: "Convert to PDF", desc: "Click the Convert button and each image is transformed into a high-quality PDF document in seconds." },
                { step: "3", title: "Download Your PDFs", desc: "Download each PDF individually, or grab them all at once as a ZIP file. Your original image quality is preserved." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Convert PNG to PDF */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Convert PNG to PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                PNG is great for screenshots, design exports, and images with transparency. But when you need to share, print, or submit documents professionally, PDF is the standard format that works everywhere.
              </p>
              <p className="text-slate-600 text-center">
                Converting PNG to PDF ensures your images look consistent on every device, are easy to print at full quality, and meet the requirements of applications that only accept PDF uploads.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Converting Screenshots to PDF</h3>
                <p className="text-slate-600">
                  Screenshots are typically saved as PNG files. Convert them to PDF for documentation, bug reports, or tutorials. PDFs are easier to email, annotate, and archive than loose image files.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Design Exports</h3>
                <p className="text-slate-600">
                  Designers often export mockups, wireframes, and UI designs as PNG images. Convert them to PDF for client presentations, print proofs, or portfolio submissions that look professional on any screen.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Web Graphics and Infographics</h3>
                <p className="text-slate-600">
                  Infographics, charts, and web graphics saved as PNG can be converted to PDF for printing, sharing in reports, or embedding in presentations. PDF preserves the crisp detail of your graphics.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Transparent Background Handling</h3>
                <p className="text-slate-600">
                  PNG supports transparency, which is useful for logos and graphics. When converted to PDF, transparent areas render on a white background by default, giving you a clean, print-ready document.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I convert a PNG to PDF?", a: "Upload your PNG image, click Convert to PDF, and download. You can upload multiple images and each will be converted to its own PDF." },
                { q: "Can I convert multiple PNG images at once?", a: "Yes. Select multiple PNG files and each will be converted to a separate PDF. Download them individually or as a ZIP archive." },
                { q: "Is the PNG to PDF converter free?", a: "You can convert several images for free daily. For unlimited conversions and larger files, upgrade to Pro at $7.99/month." },
                { q: "Does it preserve PNG transparency?", a: "The full image quality is preserved. Transparent areas appear as white in the PDF since PDFs have a white page background by default." },
                { q: "What is the maximum file size?", a: "Free users can upload up to 25MB per image. Pro and Business subscribers can upload up to 200MB per image." },
                { q: "Why convert PNG to PDF instead of sharing PNG?", a: "PDF is universally accepted by institutions and portals. It ensures consistent formatting, easier printing, and professional presentation across all devices." },
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
            <h2 className="text-2xl font-black mb-4">Convert Your PNG Images Now</h2>
            <p className="text-slate-300 text-lg mb-8">
              Fast, free, and secure. Turn any PNG image into a professional PDF in seconds.
            </p>
            <Link
              href="/png-to-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convert PNG to PDF
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "JPG to PDF", desc: "Convert JPG images to PDF.", href: "/jpg-to-pdf", icon: ImageIcon },
                { name: "PDF to PNG", desc: "Convert PDF pages to PNG images.", href: "/pdf-to-png", icon: FileText },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one.", href: "/merge-pdf", icon: Merge },
                { name: "Compress PDF", desc: "Reduce PDF file size.", href: "/compress-pdf", icon: FileText },
                { name: "Phone Scan Cleanup", desc: "Turn phone photos into clean PDFs.", href: "/phone-scan-cleanup", icon: Camera },
                { name: "OCR Scanner", desc: "Make scanned PDFs searchable.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Rotate PDF", desc: "Fix sideways or upside-down pages.", href: "/rotate-pdf", icon: RotateCw },
                { name: "Protect PDF", desc: "Add password protection.", href: "/protect-pdf", icon: Lock },
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
      </main>
      <Footer />
    </div>
  )
}
