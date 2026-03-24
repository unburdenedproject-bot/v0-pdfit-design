import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhoneScanCleanupInterface } from "@/components/phone-scan-cleanup-interface"
import { Camera, Zap, Shield, ScanLine, FileText, Merge, RotateCw, Scissors, Lock } from "lucide-react"

export const metadata = {
  title: "Phone Scan Cleanup — Turn Phone Photos into Clean PDFs | PDF.it",
  description:
    "Upload a phone photo of a document and get a clean, professional PDF. Auto-straighten, remove shadows, boost contrast. Black & white or color cleanup. Free online tool.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Phone Scan Cleanup?",
      "acceptedAnswer": { "@type": "Answer", "text": "Phone Scan Cleanup takes photos of documents captured with your phone camera and transforms them into clean, professional-looking PDFs. It removes shadows, corrects uneven lighting, straightens the image, and sharpens text for a scanner-quality result." }
    },
    {
      "@type": "Question",
      "name": "What image formats are supported?",
      "acceptedAnswer": { "@type": "Answer", "text": "JPG, PNG, and WEBP images are supported. These are the standard formats used by phone cameras on both iPhone and Android devices." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Black & White and Color Cleanup?",
      "acceptedAnswer": { "@type": "Answer", "text": "Black & White mode converts the image to crisp black text on a pure white background, like a professional scanner. It is best for text documents, contracts, and forms. Color Cleanup keeps the original colors while removing shadows and boosting contrast, ideal for receipts, color forms, and documents with logos." }
    },
    {
      "@type": "Question",
      "name": "Is Phone Scan Cleanup free?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can clean up a few scans for free. For unlimited usage, upgrade to the Pro plan at $7.99/month which includes all PDF tools, batch processing, and larger file support." }
    },
    {
      "@type": "Question",
      "name": "Does it work with any phone camera?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. It works with photos from any phone camera, including iPhone, Samsung, Google Pixel, and any Android device. Just take a photo of your document, upload it, and the tool handles the rest." }
    },
    {
      "@type": "Question",
      "name": "Can I make the text searchable after cleanup?",
      "acceptedAnswer": { "@type": "Answer", "text": "Phone Scan Cleanup creates a clean PDF from your photo. To make the text searchable and copyable, run the result through our OCR Scanner tool, which extracts text from scanned documents." }
    },
  ]
}

export default function PhoneScanCleanupPage() {
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
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Phone Scan Cleanup</h1>
              <p className="text-xl text-slate-300 mb-4">
                Turn phone photos of documents into clean, professional PDFs. Remove shadows, fix lighting, sharpen text, and get scanner-quality results from any phone camera.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                No scanner needed. No app to install. Just upload and download.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ScanLine className="h-4 w-4 text-orange-500" /><span>Shadow Removal</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Auto Contrast</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Instant PDF Output</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <PhoneScanCleanupInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Take a Photo", desc: "Use your phone camera to photograph any document — contracts, receipts, notes, forms. No special app needed." },
                { step: "2", title: "Upload & Choose Mode", desc: "Upload the photo and select Black & White for text documents or Color Cleanup for receipts and forms with color." },
                { step: "3", title: "Download Clean PDF", desc: "Get a professional, shadow-free PDF with crisp text and even lighting. Ready to share, print, or archive." },
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

        {/* Why Use This Tool */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Clean Up Phone Scans?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Phone photos of documents have shadows, uneven lighting, skewed angles, and washed-out text. Sending these directly looks unprofessional and can be hard to read.
              </p>
              <p className="text-slate-600 text-center">
                Phone Scan Cleanup transforms messy photos into clean, high-contrast PDFs that look like they came from a professional scanner. Perfect for submitting documents, archiving paperwork, or sharing with colleagues.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Contracts & Legal Documents</h3>
                <p className="text-slate-600">
                  Need to send a signed contract but only have a phone? Snap a photo, clean it up, and send a professional PDF instead of a dark, shadowy photo.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Receipts & Expense Reports</h3>
                <p className="text-slate-600">
                  Capture receipts with your phone for expense reports. Color Cleanup mode preserves logos and colors while removing the shadows and glare from your photo.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Notes & Whiteboards</h3>
                <p className="text-slate-600">
                  Photograph handwritten notes or whiteboard sessions and convert them to clean, readable PDFs. Black & White mode makes handwriting stand out clearly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">ID & Passport Copies</h3>
                <p className="text-slate-600">
                  Create clean copies of IDs, passports, or driver&apos;s licenses for applications and registrations. The cleanup ensures all text is legible.
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
                { q: "What is Phone Scan Cleanup?", a: "It takes photos of documents from your phone camera and transforms them into clean, professional PDFs. It removes shadows, fixes lighting, and sharpens text for scanner-quality results." },
                { q: "What image formats are supported?", a: "JPG, PNG, and WEBP. These are the standard formats used by phone cameras on both iPhone and Android." },
                { q: "What is the difference between Black & White and Color Cleanup?", a: "Black & White converts to crisp black text on white background, like a scanner. Color Cleanup keeps colors while removing shadows and boosting contrast." },
                { q: "Is Phone Scan Cleanup free?", a: "You can clean up a few scans for free. For unlimited usage, upgrade to the Pro plan at $7.99/month." },
                { q: "Does it work with any phone camera?", a: "Yes. It works with photos from any phone — iPhone, Samsung, Google Pixel, or any Android device." },
                { q: "Can I make the text searchable?", a: "This tool creates a clean PDF from your photo. To make text searchable, run the result through our OCR Scanner tool." },
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
            <h2 className="text-2xl font-black mb-4">Ditch the Scanner</h2>
            <p className="text-slate-300 text-lg mb-8">
              Your phone camera is all you need. Upload a photo and get a professional PDF in seconds.
            </p>
            <Link
              href="/phone-scan-cleanup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Clean Up a Scan Now
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "OCR Scanner", desc: "Make scanned PDFs searchable.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Compress PDF", desc: "Reduce file size without losing quality.", href: "/compress-pdf", icon: FileText },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one.", href: "/merge-pdf", icon: Merge },
                { name: "Rotate PDF", desc: "Fix sideways or upside-down pages.", href: "/rotate-pdf", icon: RotateCw },
                { name: "Split PDF", desc: "Divide a PDF into separate files.", href: "/split-pdf", icon: Scissors },
                { name: "Protect PDF", desc: "Add password protection.", href: "/protect-pdf", icon: Lock },
                { name: "Flatten PDF", desc: "Flatten form fields and annotations.", href: "/flatten-pdf", icon: FileText },
                { name: "PDF to JPG", desc: "Convert PDF pages to images.", href: "/pdf-to-jpg", icon: FileText },
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
