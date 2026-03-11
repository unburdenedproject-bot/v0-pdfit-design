import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "QR Code Best Practices (Size, Placement & Testing) | OmnisPDF",
  description:
    "Learn QR code best practices for size, contrast, placement, error correction, and testing. Make sure your QR codes scan reliably every time with these essential tips.",
  keywords: "qr code best practices, qr code size, qr code placement, qr code design tips",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum size for a QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "The absolute minimum is 2cm x 2cm (0.8 x 0.8 inches) for close-range scanning like business cards. For posters and signs scanned from a distance, use the 10:1 rule — the QR code should be 1/10th of the expected scanning distance. A sign scanned from 1 meter away needs a 10cm QR code." }
    },
    {
      "@type": "Question",
      "name": "What colors work best for QR codes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dark foreground on light background. Black on white is the gold standard. You can use colors, but maintain at least 70% contrast between foreground and background. Never use light foreground on dark background — most scanners struggle with inverted QR codes." }
    },
    {
      "@type": "Question",
      "name": "How much white space does a QR code need?",
      "acceptedAnswer": { "@type": "Answer", "text": "A QR code needs a 'quiet zone' of at least 4 modules (the small squares that make up the code) on all sides. In practical terms, leave about 3-5mm of blank space around the QR code. This helps scanners distinguish the code from surrounding design elements." }
    },
    {
      "@type": "Question",
      "name": "What is error correction in QR codes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Error correction allows a QR code to remain scannable even if part of it is damaged or obscured. There are four levels: L (7%), M (15%), Q (25%), and H (30%). Higher error correction means the code can withstand more damage but also makes it denser and harder to scan at small sizes." }
    },
    {
      "@type": "Question",
      "name": "How should I test a QR code before printing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Test with at least 3 different phones (iPhone and Android), in different lighting conditions (bright and dim), and from the expected scanning distance. Print a test copy first before doing a bulk print run. Check that the destination URL loads correctly." }
    },
    {
      "@type": "Question",
      "name": "Can I add a logo inside a QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but only if you use high error correction (level H, 30%). The logo covers some of the QR code data, and error correction compensates. Keep the logo small — no more than 10-15% of the QR code area — and always test thoroughly." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a Reliable QR Code",
  "description": "Follow these 3 steps to create a QR code that scans perfectly every time using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Keep data minimal and use high contrast",
      "text": "Use short URLs to keep the QR code simple. Choose dark foreground on light background with at least 70% contrast ratio."
    },
    {
      "@type": "HowToStep",
      "name": "Size appropriately for scanning distance",
      "text": "Use the 10:1 rule — the QR code width should be at least 1/10th of the expected scanning distance. Minimum 2cm for close-range scanning."
    },
    {
      "@type": "HowToStep",
      "name": "Test before distributing",
      "text": "Scan with multiple phones in different lighting conditions. Print a test copy and scan from the expected distance. Verify the destination loads correctly."
    }
  ]
}

export default function QRCodeBestPracticesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / QR Code</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">QR Code Best Practices (Size, Placement & Testing)</h1>
              <p className="text-xl text-slate-300">
                A QR code that does not scan is worse than no QR code at all. Follow these best practices to make sure your QR codes work perfectly every time — in print, on screen, and in any lighting condition.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <QrCode className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need to create a QR code? Use our generator tool.</p>
            </div>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Create QR Code <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Size guidelines */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Size: How Big Should Your QR Code Be?</h2>
              <p className="text-slate-600 mb-4">
                The most common reason QR codes fail is that they are too small. A tiny QR code on a poster across the room is impossible to scan. Use these guidelines:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>The 10:1 rule.</strong> The QR code should be at least 1/10th of the expected scanning distance. If someone will scan from 1 meter away, the QR code needs to be at least 10cm wide. From 30cm (a table), at least 3cm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Business cards:</strong> Minimum 2cm x 2cm. Ideally 2.5cm. See our <Link href="/learn/qr-code-for-business-card" className="text-orange-600 hover:underline">business card QR code guide</Link> for placement tips.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Table tents and stickers:</strong> At least 3cm x 3cm. Restaurant <Link href="/learn/qr-code-for-restaurant-menu" className="text-orange-600 hover:underline">menu QR codes</Link> should be easy to scan even in dim lighting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Posters and billboards:</strong> Scale up significantly. A poster on a wall should have a QR code at least 15-20cm wide. Billboards need even larger codes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Digital screens:</strong> On websites and presentations, make sure the QR code is at least 200x200 pixels. On phones, it needs to be large enough for another phone's camera to read it.</span>
                </li>
              </ul>
            </section>

            {/* Contrast and color */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Contrast and Color: What Works and What Fails</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Dark on light is the rule",
                    desc: "QR code scanners look for dark modules on a light background. Black on white is the most reliable combination. You can use brand colors, but maintain at least 70% contrast between the foreground and background.",
                  },
                  {
                    title: "Never invert colors",
                    desc: "Light foreground on dark background (white QR code on black background) fails on many scanners. If your design has a dark background, place the QR code inside a white box with padding.",
                  },
                  {
                    title: "Avoid gradients and patterns",
                    desc: "The background behind the QR code must be solid and uniform. Gradients, textures, and photographic backgrounds make scanning unreliable. If your design has a busy background, add a white rectangle behind the QR code.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Placement */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Placement: Where to Put Your QR Code</h2>
              <p className="text-slate-600 mb-4">
                Even a perfectly designed QR code is useless if people cannot reach it with their phone camera. Follow these placement guidelines:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Eye to chest level.</strong> On walls and signs, place QR codes between 1 and 1.5 meters from the ground. Above head height or below knee level makes scanning awkward.</li>
                <li>&#10003; <strong>Flat surfaces.</strong> QR codes on curved surfaces (bottles, pillars) distort and become harder to scan. If you must use a curved surface, increase the QR code size to compensate.</li>
                <li>&#10003; <strong>Well-lit areas.</strong> Phone cameras need light to read QR codes. Avoid placing them in dark corners, under tables, or in areas with heavy shadows.</li>
                <li>&#10003; <strong>Away from reflective materials.</strong> Glossy lamination, glass, and metallic surfaces create glare that interferes with scanning. Use matte finishes when possible.</li>
                <li>&#10003; <strong>Add a call to action.</strong> Always include text like "Scan for Menu," "Scan to Save Contact," or "Scan for Details." People need to know what to expect before they point their camera.</li>
              </ul>
            </section>

            {/* Error correction */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Error Correction: Building in Redundancy</h2>
              <p className="text-slate-600 mb-4">
                QR codes have built-in error correction that allows them to remain scannable even when partially damaged. There are four levels:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Level L (Low) - 7% Recovery</h3>
                  <p className="text-slate-600">
                    The code can withstand 7% damage. Produces the simplest, smallest QR code. Best for digital use where the code won't get damaged — websites, emails, and app screens.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Level M (Medium) - 15% Recovery</h3>
                  <p className="text-slate-600">
                    The default for most generators. Good balance between density and reliability. Works for most print applications — flyers, brochures, and product packaging.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Level Q (Quartile) - 25% Recovery</h3>
                  <p className="text-slate-600">
                    Better for outdoor or high-wear environments where the QR code might get scratched, stained, or partially covered. Use for outdoor signs, vehicle wraps, and stickers in high-traffic areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Level H (High) - 30% Recovery</h3>
                  <p className="text-slate-600">
                    Maximum redundancy. Required if you want to overlay a logo on the QR code — the logo covers some modules, and error correction compensates. The trade-off is a denser, more complex code that needs to be printed larger.
                  </p>
                </div>
              </div>
            </section>

            {/* Testing checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Testing Checklist Before You Print</h2>
              <p className="text-slate-600 mb-4">
                Never skip testing. Print one sample and verify everything works before doing a bulk run. Here is your checklist:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Scan with an iPhone.</strong> Use the built-in camera app (no third-party QR app).</li>
                <li>&#10003; <strong>Scan with an Android phone.</strong> Use the default camera or Google Lens.</li>
                <li>&#10003; <strong>Scan in bright light.</strong> Test in normal indoor lighting.</li>
                <li>&#10003; <strong>Scan in dim light.</strong> Test in the actual environment — a dimly lit restaurant, a dark trade show booth, etc.</li>
                <li>&#10003; <strong>Scan from the expected distance.</strong> Stand as far away as a real person would and try to scan.</li>
                <li>&#10003; <strong>Verify the destination.</strong> Make sure the URL loads correctly, the <Link href="/learn/qr-code-for-pdf" className="text-orange-600 hover:underline">PDF opens</Link>, or the vCard saves properly.</li>
                <li>&#10003; <strong>Check the printed quality.</strong> Make sure the printer did not blur or distort the QR code modules. Inkjet printers at low resolution can make QR codes unscannable.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Create a Reliable QR Code</h2>
            <p className="text-slate-300 mb-6">Generate QR codes with the right settings for your use case. Pro feature — upgrade for unlimited QR codes and all PDF tools.</p>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Create QR Code Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Create a QR Code Online (Free Generator)", href: "/learn/how-to-create-qr-code" },
                { title: "QR Code for Business Cards (Link to Your Website or vCard)", href: "/learn/qr-code-for-business-card" },
                { title: "QR Code for Restaurant Menus (Create a Scannable Menu Link)", href: "/learn/qr-code-for-restaurant-menu" },
                { title: "Create a QR Code That Links to a PDF Document", href: "/learn/qr-code-for-pdf" },
                { title: "QR Code Types Explained (URL, Text, WiFi, vCard & More)", href: "/learn/qr-code-types-explained" },
                { title: "Create a QR Code for WiFi (Guests Connect Instantly)", href: "/learn/qr-code-for-wifi" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
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
                { q: "What is the minimum size for a QR code?", a: "The absolute minimum is 2cm x 2cm (0.8 x 0.8 inches) for close-range scanning like business cards. For posters and signs scanned from a distance, use the 10:1 rule — the QR code should be 1/10th of the expected scanning distance." },
                { q: "What colors work best for QR codes?", a: "Dark foreground on light background. Black on white is the gold standard. You can use colors, but maintain at least 70% contrast between foreground and background. Never use light foreground on dark background." },
                { q: "How much white space does a QR code need?", a: "A QR code needs a 'quiet zone' of at least 4 modules on all sides. In practical terms, leave about 3-5mm of blank space around the QR code." },
                { q: "What is error correction in QR codes?", a: "Error correction allows a QR code to remain scannable even if part of it is damaged. There are four levels: L (7%), M (15%), Q (25%), and H (30%). Higher correction means more resilience but a denser code." },
                { q: "How should I test a QR code before printing?", a: "Test with at least 3 different phones (iPhone and Android), in different lighting conditions, and from the expected scanning distance. Print a test copy first before doing a bulk print run." },
                { q: "Can I add a logo inside a QR code?", a: "Yes, but only with high error correction (level H, 30%). Keep the logo small — no more than 10-15% of the QR code area — and always test thoroughly after adding it." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
