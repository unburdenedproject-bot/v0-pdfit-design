import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QrCodeInterface } from "@/components/qr-code-interface"
import { QrCode, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "QR Code Generator Online — Create & Download QR Codes | PDF.it",
  description: "Create QR codes instantly with PDF.it. Generate a QR code for any URL, text, email, or contact info — download as PNG for flyers, business cards, packaging, and more.",
  alternates: {
    languages: {
      en: "/tools/qr-code",
      es: "/es/codigo-qr",
      pt: "/br/codigo-qr",
    },
  },
}

export default function QRCodePage() {
  const faqs = [
    { q: "How do I create a QR code with PDF.it?", a: "Enter your URL or text, click Generate QR Code, then download the QR code image as PNG." },
    { q: "What can I put in a QR code?", a: "You can encode website links, plain text, email addresses, phone numbers, and more. The QR code stores the data so anyone scanning it gets instant access." },
    { q: "What size should a QR code be for printing?", a: "As a rule of thumb, keep QR codes at least 2cm \u00d7 2cm for close-range scanning (business cards) and larger for posters or signage. Always test-scan before printing." },
    { q: "Why isn't my QR code scanning?", a: "Common issues include low contrast, small size, or image blur. Make sure the QR code has strong contrast against its background and is large enough for the scanning distance." },
    { q: "Is the QR Code Generator free?", a: "QR Code Generator is a Pro feature, available on the PDF.it Pro plan at $7.99/month. Pro includes unlimited QR codes plus all other PDF tools." },
    { q: "Is my data stored when I generate a QR code?", a: "No. QR codes are generated and returned directly to your browser. We do not store the content you enter." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <QrCode className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">QR Code Generator Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Create QR codes instantly with PDF.it — generate a QR code for any URL, text, email, or contact info and download it as a high-quality PNG.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Instant Generation</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>No Data Stored</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Download as PNG</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use PDF.it's QR code generator to create a QR code for a website link, text, contact details, or Wi-Fi credentials. Generate a QR code instantly and download it for flyers, packaging, menus, business cards, presentations, and social media.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">&#10003; Generate QR codes for URLs, text, and email</li>
              <li className="flex items-center gap-2">&#10003; Download as PNG for print and web</li>
              <li className="flex items-center gap-2">&#10003; Works on desktop and mobile</li>
              <li className="flex items-center gap-2">&#10003; Fast creation with clean, scannable output</li>
            </ul>
          </div>
        </section>

        {/* QR Code Interface */}
        <QrCodeInterface />

        {/* Feature Blocks - 3 dark glassmorphism cards */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "QR Codes for Any Link", desc: "Turn any website or landing page into a QR code so people can scan and open the link instantly — ideal for marketing, events, and product packaging." },
                { title: "Text, Email & Phone QR Codes", desc: "Create QR codes that open an email draft, start a call, or display a message — useful for business cards, resumes, and signage." },
                { title: "Download for Print or Digital", desc: "Download a high-quality QR code image suitable for posters, menus, labels, and presentations. Always test-scan before printing." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - 3 horizontal steps */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Make a QR Code</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Enter URL or text", desc: "Type or paste the content you want to encode" },
                { num: "2", title: "Generate QR Code", desc: "Click Generate and get your code instantly" },
                { num: "3", title: "Download PNG", desc: "Save the QR code image and use it anywhere" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}>
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools - exactly 4, dark bg, metallic border */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to PNG", href: "/pdf-to-png", desc: "Export PDF pages as images" },
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages to JPG" },
                { name: "Watermark PDF", href: "/watermark-pdf", desc: "Brand your PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - dark wave-color bg, frosted glass cards */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}} />
      </main>
      <Footer />
    </div>
  )
}
