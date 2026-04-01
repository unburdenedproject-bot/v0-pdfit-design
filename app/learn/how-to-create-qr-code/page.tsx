import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Create a QR Code Online (Free Generator) | PDF.it",
  description:
    "Learn how to create a QR code online for URLs, text, WiFi, and contact info. Step-by-step guide to generating QR codes instantly with PDF.it's free QR code tool.",
  keywords: "create qr code, qr code generator, make qr code online, free qr code",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I create a QR code online for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Go to PDF.it's QR Code generator, enter your URL, text, or other data, customize the style if needed, and download your QR code as a PNG or SVG image. Free users get up to 10 QR codes per day." }
    },
    {
      "@type": "Question",
      "name": "What types of QR codes can I create?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can create QR codes for URLs, plain text, WiFi credentials, vCard contact info, email addresses, phone numbers, and more. Each type encodes different data that phones and scanners can read." }
    },
    {
      "@type": "Question",
      "name": "Do QR codes expire?",
      "acceptedAnswer": { "@type": "Answer", "text": "Static QR codes never expire — the data is encoded directly in the pattern. However, if your QR code links to a URL and that URL goes down, the QR code will still work but the destination won't load." }
    },
    {
      "@type": "Question",
      "name": "Can I customize the color of my QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it's QR Code tool lets you change foreground and background colors. Just make sure there's enough contrast between them — dark foreground on light background works best for reliable scanning." }
    },
    {
      "@type": "Question",
      "name": "What file format should I download my QR code in?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PNG for digital use (websites, emails, social media). Use SVG if you need to print the QR code at large sizes without losing quality — SVG scales infinitely without pixelation." }
    },
    {
      "@type": "Question",
      "name": "Is the QR Code tool free on PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "The QR Code generator is a Pro feature on PDF.it. Pro users ($3.99/month) get unlimited QR code generation along with all other premium PDF tools." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a QR Code Online",
  "description": "Generate a QR code for any URL, text, or data in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose your QR code type",
      "text": "Go to PDF.it's QR Code tool and select the type of QR code you want — URL, text, WiFi, vCard, or other supported formats."
    },
    {
      "@type": "HowToStep",
      "name": "Enter your data",
      "text": "Type or paste the URL, text, WiFi credentials, or contact information you want to encode in your QR code."
    },
    {
      "@type": "HowToStep",
      "name": "Download your QR code",
      "text": "Click Generate and download your QR code as a PNG or SVG file. Test it with your phone camera before printing or sharing."
    }
  ]
}

export default function HowToCreateQRCodePage() {
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
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / QR Code</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Create a QR Code Online (Free Generator)</h1>
              <p className="text-xl text-slate-300">
                QR codes are everywhere — menus, business cards, event tickets, product packaging. Here is how to create your own QR code in seconds for any purpose.
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
              <p className="text-slate-700 font-semibold">Ready to generate? Skip the guide and go straight to the tool.</p>
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

            {/* What is a QR code */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Is a QR Code and Why Do You Need One?</h2>
              <p className="text-slate-600 mb-4">
                A QR code (Quick Response code) is a two-dimensional barcode that stores data — a URL, text, contact details, or WiFi credentials. When someone scans it with their phone camera, the data is instantly decoded. No typing, no searching, no mistakes.
              </p>
              <p className="text-slate-600 mb-4">
                QR codes are used everywhere today. Restaurants use them for digital menus. Businesses put them on cards and flyers. Event organizers use them for ticketing. Marketers embed them in print ads to bridge physical and digital experiences.
              </p>
              <p className="text-slate-600">
                The best part? Creating a QR code takes less than 30 seconds with the right tool. PDF.it's <Link href="/qr-code" className="text-orange-600 hover:underline">QR Code generator</Link> (Pro feature) lets you create QR codes for URLs, text, WiFi, vCards, and more — then download them as high-quality PNG or SVG files ready for print or digital use.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Create a QR Code (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Choose your QR code type",
                    desc: "Open the QR Code tool and select what kind of data you want to encode. URL is the most common — it sends scanners directly to a website. You can also choose text, WiFi, vCard (contact info), email, or phone number.",
                  },
                  {
                    title: "Enter your data and customize",
                    desc: "Type or paste your URL, WiFi password, or contact details. Optionally adjust colors and size. Keep the foreground dark and background light for best scanning reliability.",
                  },
                  {
                    title: "Generate and download",
                    desc: "Click Generate to create your QR code. Download it as PNG for digital use or SVG for print. Always test the QR code with your phone camera before distributing it.",
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

            {/* Common use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common QR Code Use Cases</h2>
              <p className="text-slate-600 mb-4">
                QR codes are incredibly versatile. Here are the most popular ways people use them:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Website links.</strong> The most common use case. Encode any URL so people can visit your site, landing page, or social media profile by scanning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>WiFi access.</strong> Create a <Link href="/learn/qr-code-for-wifi" className="text-orange-600 hover:underline">WiFi QR code</Link> so guests connect to your network instantly without typing passwords.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Business cards.</strong> Add a QR code to your <Link href="/learn/qr-code-for-business-card" className="text-orange-600 hover:underline">business card</Link> that links to your website, LinkedIn profile, or vCard with all your contact details.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Restaurant menus.</strong> Replace physical menus with a <Link href="/learn/qr-code-for-restaurant-menu" className="text-orange-600 hover:underline">scannable QR code</Link> that opens your menu as a PDF or webpage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>PDF documents.</strong> Share a <Link href="/learn/qr-code-for-pdf" className="text-orange-600 hover:underline">QR code that links to a PDF</Link> — perfect for brochures, manuals, and flyers.</span>
                </li>
              </ul>
            </section>

            {/* Tips for better QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Creating Better QR Codes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Keep the Data Short</h3>
                  <p className="text-slate-600">
                    The more data a QR code contains, the denser and harder to scan it becomes. For URLs, use a short link when possible. For text, keep it concise. If you need to share a large document, host it online and link to the URL instead of encoding the content directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use High Contrast Colors</h3>
                  <p className="text-slate-600">
                    Dark modules on a light background scan most reliably. Black on white is the gold standard. If you customize colors, always test with multiple phones. Avoid light-on-light or dark-on-dark combinations. Check out our <Link href="/learn/qr-code-best-practices" className="text-orange-600 hover:underline">QR code best practices guide</Link> for more design tips.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Always Test Before Printing</h3>
                  <p className="text-slate-600">
                    Scan your QR code with at least two different phones before printing it on 500 business cards or a restaurant table tent. Test in different lighting conditions and from different distances. A QR code that does not scan is worse than no QR code at all.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Choose the Right File Format</h3>
                  <p className="text-slate-600">
                    Download PNG for screens and digital media. Download SVG for print materials — SVG is a vector format that scales to any size without pixelation. If you need to convert your QR code image later, PDF.it also offers tools like <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link> and <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* QR code types overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Understanding QR Code Types</h2>
              <p className="text-slate-600 mb-4">
                Not all QR codes are the same. The type you choose determines what happens when someone scans it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>URL QR codes</strong> open a website or webpage in the scanner's browser.</li>
                <li>&#10003; <strong>Text QR codes</strong> display a plain text message on screen.</li>
                <li>&#10003; <strong>WiFi QR codes</strong> automatically connect the scanner to a WiFi network.</li>
                <li>&#10003; <strong>vCard QR codes</strong> add a contact to the scanner's phone with name, email, phone, and address.</li>
                <li>&#10003; <strong>Email QR codes</strong> open a pre-filled email draft with a recipient and subject line.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Learn more about each type in our detailed guide: <Link href="/learn/qr-code-types-explained" className="text-orange-600 hover:underline">QR Code Types Explained</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Create Your QR Code?</h2>
            <p className="text-slate-300 mb-6">Generate a QR code for any URL, text, or data in seconds. Pro feature — upgrade to unlock unlimited QR codes.</p>
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
                { title: "QR Code for Business Cards (Link to Your Website or vCard)", href: "/learn/qr-code-for-business-card" },
                { title: "QR Code for Restaurant Menus (Create a Scannable Menu Link)", href: "/learn/qr-code-for-restaurant-menu" },
                { title: "Create a QR Code That Links to a PDF Document", href: "/learn/qr-code-for-pdf" },
                { title: "QR Code Best Practices (Size, Placement & Testing)", href: "/learn/qr-code-best-practices" },
                { title: "Create a QR Code for WiFi (Guests Connect Instantly)", href: "/learn/qr-code-for-wifi" },
                { title: "QR Code Types Explained (URL, Text, WiFi, vCard & More)", href: "/learn/qr-code-types-explained" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I create a QR code online for free?", a: "Go to PDF.it's QR Code generator, enter your URL, text, or other data, customize the style if needed, and download your QR code as a PNG or SVG image. Free users get up to 10 QR codes per day." },
                { q: "What types of QR codes can I create?", a: "You can create QR codes for URLs, plain text, WiFi credentials, vCard contact info, email addresses, phone numbers, and more. Each type encodes different data that phones and scanners can read." },
                { q: "Do QR codes expire?", a: "Static QR codes never expire — the data is encoded directly in the pattern. However, if your QR code links to a URL and that URL goes down, the QR code will still work but the destination won't load." },
                { q: "Can I customize the color of my QR code?", a: "Yes. PDF.it's QR Code tool lets you change foreground and background colors. Just make sure there's enough contrast between them — dark foreground on light background works best for reliable scanning." },
                { q: "What file format should I download my QR code in?", a: "Use PNG for digital use (websites, emails, social media). Use SVG if you need to print the QR code at large sizes without losing quality — SVG scales infinitely without pixelation." },
                { q: "Is the QR Code tool free on PDF.it?", a: "The QR Code generator is a Pro feature on PDF.it. Pro users ($3.99/month) get unlimited QR code generation along with all other premium PDF tools." },
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
