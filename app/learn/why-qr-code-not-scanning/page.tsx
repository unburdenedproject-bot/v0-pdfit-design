import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Why Your QR Code Won't Scan (Fix Contrast, Size, and Blur) | PDF.it",
  description:
    "QR code not scanning? Fix the 8 most common causes: low contrast, wrong size, missing quiet zone, blur, damaged print, inverted colors, broken URL, and URL too long.",
  keywords: "qr code not scanning, qr code won't scan, fix qr code, qr code scan issues, qr code troubleshooting",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is my QR code not scanning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common causes are low contrast between the foreground and background, a code that is too small for the scanning distance, a missing or too-narrow quiet zone (white border), blur from a low-resolution print, inverted colors (light on dark), or a broken destination URL. Check each of these in order and re-generate a corrected QR code using PDF.it's QR Code tool."
      }
    },
    {
      "@type": "Question",
      "name": "Does inverting a QR code (white on black) break scanning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most QR code scanners expect dark modules on a light background. Inverting the colors — white code on a dark background — causes many phone cameras and scanner apps to fail. If your design has a dark background, place the QR code inside a solid white box with at least 4 modules of padding on each side."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum size for a QR code to scan reliably?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum is 2cm x 2cm (about 0.8 x 0.8 inches) for close-range scanning like business cards. For larger formats, use the 10:1 rule: the QR code should be at least 1/10th as wide as the expected scanning distance. Scanned from 1 meter away? Make it at least 10cm wide."
      }
    },
    {
      "@type": "Question",
      "name": "What is a quiet zone and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The quiet zone is the blank margin around the outside of a QR code. It needs to be at least 4 modules wide (the small squares that make up the code pattern) on all four sides. Without it, scanners cannot find the edges of the code and will fail to read it. In practical terms, leave 3–5mm of empty space around the QR code — never let other design elements touch its border."
      }
    },
    {
      "@type": "Question",
      "name": "Can a damaged or dirty QR code still scan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the error correction level set when the code was created. Level H (30% recovery) can tolerate significant damage or dirt and still scan. Levels L and M offer only 7–15% recovery, so even minor damage or smudging may cause a failure. For printed materials in high-wear environments, always generate QR codes at Level Q or H."
      }
    },
    {
      "@type": "Question",
      "name": "My QR code scans but shows an error — what does that mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The code itself is fine but the destination URL is broken. This happens when the URL was mistyped at creation time, the destination page was deleted or moved, or a URL shortener expired. The fix is to check the URL, update the destination if needed, and generate a new QR code with the correct link."
      }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix a QR Code That Won't Scan",
  "description": "Diagnose and fix the most common QR code scanning failures in 3 steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identify the root cause",
      "text": "Check contrast first — the foreground must be dark on a light background. Then check size using the 10:1 rule (code width should be 1/10th of scanning distance, minimum 2cm). Finally check that a quiet zone of at least 4 modules exists on all sides."
    },
    {
      "@type": "HowToStep",
      "name": "Verify the destination URL",
      "text": "Scan the QR code and check whether it opens a URL error or a real page. If the URL is broken, mistyped, or the destination was deleted, you need to generate a new QR code with the corrected link."
    },
    {
      "@type": "HowToStep",
      "name": "Re-generate with corrected settings",
      "text": "Go to PDF.it's QR Code tool, enter the correct URL or data, set error correction to Level Q or H for printed materials, ensure the foreground is dark and background is light, and download as SVG for print or PNG for digital use. Test with two different phones before distributing."
    }
  ]
}

const steps = [
  {
    title: "Identify the root cause",
    desc: "Check contrast first — the foreground must be dark on a light background. Then check size using the 10:1 rule (code width should be 1/10th of scanning distance, minimum 2cm). Finally check that a quiet zone of at least 4 modules exists on all sides.",
  },
  {
    title: "Verify the destination URL",
    desc: "Scan the QR code and check whether it opens a URL error or a real page. If the URL is broken, mistyped, or the destination was deleted, you need to generate a new QR code with the corrected link.",
  },
  {
    title: "Re-generate with corrected settings",
    desc: "Go to PDF.it's QR Code tool, enter the correct URL or data, set error correction to Level Q or H for printed materials, ensure the foreground is dark and background is light, and download as SVG for print or PNG for digital use. Test with two different phones before distributing.",
  },
]

const faqs = [
  {
    q: "Why is my QR code not scanning?",
    a: "The most common causes are low contrast between the foreground and background, a code that is too small for the scanning distance, a missing or too-narrow quiet zone (white border), blur from a low-resolution print, inverted colors (light on dark), or a broken destination URL. Check each of these in order and re-generate a corrected QR code using PDF.it's QR Code tool.",
  },
  {
    q: "Does inverting a QR code (white on black) break scanning?",
    a: "Yes. Most QR code scanners expect dark modules on a light background. Inverting the colors — white code on a dark background — causes many phone cameras and scanner apps to fail. If your design has a dark background, place the QR code inside a solid white box with at least 4 modules of padding on each side.",
  },
  {
    q: "What is the minimum size for a QR code to scan reliably?",
    a: "The minimum is 2cm x 2cm (about 0.8 x 0.8 inches) for close-range scanning like business cards. For larger formats, use the 10:1 rule: the QR code should be at least 1/10th as wide as the expected scanning distance. Scanned from 1 meter away? Make it at least 10cm wide.",
  },
  {
    q: "What is a quiet zone and why does it matter?",
    a: "The quiet zone is the blank margin around the outside of a QR code. It needs to be at least 4 modules wide (the small squares that make up the code pattern) on all four sides. Without it, scanners cannot find the edges of the code and will fail to read it. In practical terms, leave 3–5mm of empty space around the QR code — never let other design elements touch its border.",
  },
  {
    q: "Can a damaged or dirty QR code still scan?",
    a: "It depends on the error correction level set when the code was created. Level H (30% recovery) can tolerate significant damage or dirt and still scan. Levels L and M offer only 7–15% recovery, so even minor damage or smudging may cause a failure. For printed materials in high-wear environments, always generate QR codes at Level Q or H.",
  },
  {
    q: "My QR code scans but shows an error — what does that mean?",
    a: "The code itself is fine but the destination URL is broken. This happens when the URL was mistyped at creation time, the destination page was deleted or moved, or a URL shortener expired. The fix is to check the URL, update the destination if needed, and generate a new QR code with the correct link.",
  },
]

export default function WhyQRCodeNotScanningPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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

        {/* 1 — Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(107,124,255,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / QR Code</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">
                Why Your QR Code Won't Scan (Fix Contrast, Size, and Blur)
              </h1>
              <p className="text-xl text-slate-300">
                A QR code not scanning is almost always fixable. This guide covers every common cause — contrast, size, quiet zone, blur, damaged print, inverted colors, broken URLs, and URL length — and shows you exactly how to correct each one.
              </p>
            </div>
          </div>
        </section>

        {/* 2 — Inline CTA */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <QrCode className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">
                Need to re-generate with the right settings? Use PDF.it's QR Code tool. <span className="text-slate-500 font-normal text-sm">(Pro feature)</span>
              </p>
            </div>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Create QR Code <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* 3 — What Is X */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why QR Codes Stop Scanning</h2>
              <p className="text-slate-600 mb-4">
                A QR code is a matrix of dark and light modules arranged in a specific pattern. Scanners decode that pattern by detecting where dark modules begin and end. Anything that blurs that distinction — low contrast, physical damage, incorrect colors, too-small a print — makes the scanner's job impossible.
              </p>
              <p className="text-slate-600 mb-4">
                The good news: every scanning failure has a fixable cause. The most common ones break down into eight categories:
              </p>
              <ol className="space-y-2 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Low contrast</strong> — foreground and background colors are too similar for a camera to distinguish modules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Too small</strong> — the code is printed smaller than the 2cm minimum, or smaller than 1/10th of the scanning distance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>No quiet zone</strong> — design elements crowd the border of the code, removing the required blank margin.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Blur or pixelation</strong> — low-resolution print, inkjet at low DPI, or exporting at 72 PPI instead of 300 PPI for print.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Inverted colors</strong> — light modules on a dark background, which most phone cameras cannot read reliably.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">6.</span>
                  <span><strong>Physical damage</strong> — scratches, creases, ink smears, or water damage that exceed the error correction level baked into the code.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">7.</span>
                  <span><strong>Broken destination URL</strong> — the code scans fine but the linked page returns a 404 or the URL was mistyped at creation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">8.</span>
                  <span><strong>URL too long</strong> — very long URLs create extremely dense codes that become hard to scan, especially at small sizes.</span>
                </li>
              </ol>
              <p className="text-slate-600 mt-4">
                See our full guide to <Link href="/learn/qr-code-best-practices" className="text-[#14D8C4] hover:underline">QR code best practices</Link> for size, placement, and testing rules that prevent these problems from the start.
              </p>
            </section>

            {/* 4 — How To (Step by Step) */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Fix a QR Code That Won't Scan</h2>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* 5 — Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Error Correction Levels Compared</h2>
              <p className="text-slate-600 mb-4">
                Error correction is the most important setting for printed QR codes. It determines how much of the code can be damaged, dirty, or obscured before scanning fails.
              </p>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left px-4 py-3 font-bold">Level</th>
                      <th className="text-left px-4 py-3 font-bold">Recovery</th>
                      <th className="text-left px-4 py-3 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">L (Low)</td>
                      <td className="px-4 py-3 text-slate-600">7% damage</td>
                      <td className="px-4 py-3 text-slate-600">Digital-only use (screens, emails) — no physical wear</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">M (Medium)</td>
                      <td className="px-4 py-3 text-slate-600">15% damage</td>
                      <td className="px-4 py-3 text-slate-600">Standard print (flyers, brochures, business cards)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Q (Quartile)</td>
                      <td className="px-4 py-3 text-slate-600">25% damage</td>
                      <td className="px-4 py-3 text-slate-600">Outdoor signs, stickers, high-wear environments</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">H (High)</td>
                      <td className="px-4 py-3 text-slate-600">30% damage</td>
                      <td className="px-4 py-3 text-slate-600">Logo overlay, product packaging, maximum durability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                Higher error correction creates a denser code. If you use Level H, print the code larger than usual — at least 3cm x 3cm for close-range scanning — to keep the modules readable.
              </p>
            </section>

            {/* 6 — Extra Techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">More Ways to Improve Scan Reliability</h2>
              <ul className="space-y-3 text-slate-700">
                <li>
                  &#10003; <strong>Use SVG for print, not PNG at 72 PPI.</strong> When you <Link href="/learn/how-to-create-qr-code" className="text-[#14D8C4] hover:underline">create your QR code</Link>, download it as SVG for any printed material. SVG is a vector format — it scales to any size without pixelation, so your modules stay sharp at 300 DPI and above.
                </li>
                <li>
                  &#10003; <strong>Shorten your URL before encoding.</strong> Long URLs produce high-density codes that are harder to scan at small sizes. Use a shorter URL or a URL shortener to reduce the amount of data encoded. Less data means a simpler pattern and faster scanning.
                </li>
                <li>
                  &#10003; <strong>Add a white box on dark backgrounds.</strong> If your design has a dark background, never place the QR code directly on it. Instead, place the code inside a solid white rectangle with at least 4 modules of padding. See our guide to <Link href="/learn/qr-code-types-explained" className="text-[#14D8C4] hover:underline">QR code types</Link> for design considerations per format.
                </li>
                <li>
                  &#10003; <strong>Avoid reflective laminates and curved surfaces.</strong> Glossy lamination creates glare that washes out the dark modules. Curved surfaces (bottles, pillars) distort the module grid. Use matte finishes for laminated prints and increase the code size on curved surfaces to compensate for distortion.
                </li>
              </ul>
            </section>

            {/* 7 — Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Troubleshooting Specific Scanning Problems</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Phone camera focuses but never reads the code</h3>
                  <p className="text-slate-600">
                    This is almost always a contrast or size problem. The camera can detect something square but cannot decode the pattern. Check that the foreground is at least 70% darker than the background — brand colors that look different to the eye can still be too similar for a camera sensor. If the code is under 2cm, it is too small. Re-generate at a larger size with a simple black-on-white color scheme. Use the <Link href="/learn/qr-code-best-practices" className="text-[#14D8C4] hover:underline">QR code size guide</Link> to match dimensions to your expected scanning distance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">QR code scans on one phone but not another</h3>
                  <p className="text-slate-600">
                    Different phones have different camera algorithms. Older Android phones with lower-resolution cameras struggle with dense, low-contrast, or small codes. The fix is to lower the data density (shorten the URL), increase contrast, print larger, or increase the error correction level to H. Always test with at least two phones — an iPhone and a mid-range Android — before printing at scale.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Code scans correctly but opens a broken page</h3>
                  <p className="text-slate-600">
                    The QR code is working — the problem is the destination. Open the URL manually in a browser to confirm what is happening. If the page returns a 404, the URL was deleted or moved after the code was printed. If you see a redirect loop or a parked domain, the URL shortener service expired. The only fix is to generate a new QR code with the correct, working URL. Before printing, always verify the destination loads correctly on a separate device.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* 8 — Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Re-Generate Your QR Code With the Right Settings</h2>
            <p className="text-slate-300 mb-6">
              Fix contrast, size, error correction, and color in one place. PDF.it's QR Code tool gives you full control over every setting that affects scan reliability.
            </p>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Create QR Code Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 9 — Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "QR Code Best Practices (Size, Placement & Testing)", href: "/learn/qr-code-best-practices" },
                { title: "How to Create a QR Code Online (Free Generator)", href: "/learn/how-to-create-qr-code" },
                { title: "QR Code Types Explained (URL, Text, WiFi, vCard & More)", href: "/learn/qr-code-types-explained" },
                { title: "Create a QR Code That Links to a PDF Document", href: "/learn/qr-code-for-pdf" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">
                    {article.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 10 — FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
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
