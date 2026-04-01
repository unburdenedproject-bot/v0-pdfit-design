import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "QR Code for Restaurant Menus (Create a Scannable Menu Link) | PDF.it",
  description:
    "Learn how to create a QR code for your restaurant menu. Link to a PDF menu or website so customers can scan and view your menu on their phone instantly.",
  keywords: "qr code restaurant menu, menu qr code, scannable menu, qr code for cafe menu",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I create a QR code for my restaurant menu?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your menu as a PDF to a hosting service or your website, copy the URL, then use PDF.it's QR Code tool to generate a QR code for that URL. Print the QR code on table tents, stickers, or signs." }
    },
    {
      "@type": "Question",
      "name": "Should I link to a PDF menu or a webpage?",
      "acceptedAnswer": { "@type": "Answer", "text": "A webpage is easier to update (change prices, add items) without reprinting QR codes. A PDF menu is simpler to create and looks exactly like your printed menu. Choose based on how often your menu changes." }
    },
    {
      "@type": "Question",
      "name": "How big should a menu QR code be?",
      "acceptedAnswer": { "@type": "Answer", "text": "At least 3cm x 3cm for table tents and stickers. For wall signs or posters, go larger. The scanning distance matters — customers should be able to scan from at least 30cm away in restaurant lighting." }
    },
    {
      "@type": "Question",
      "name": "Can customers scan the QR code without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All modern smartphones (iPhone and Android) can scan QR codes directly with their built-in camera app. No separate QR reader app is needed." }
    },
    {
      "@type": "Question",
      "name": "How do I update my menu without reprinting QR codes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use a URL shortener or redirect service. The QR code points to a short URL, and you change where that short URL redirects to whenever you update your menu. This way the QR code stays the same." }
    },
    {
      "@type": "Question",
      "name": "Is this a free tool?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it's QR Code generator is a Pro feature at $3.99/month. Pro includes unlimited QR codes plus all PDF tools — perfect for restaurants that also need to compress, convert, or manage PDF menus." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a QR Code for Your Restaurant Menu",
  "description": "Set up a scannable menu QR code for your restaurant in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Host your menu online",
      "text": "Upload your menu PDF to your website, Google Drive, or a file hosting service. Copy the public URL where customers can view the menu."
    },
    {
      "@type": "HowToStep",
      "name": "Generate the QR code",
      "text": "Open PDF.it's QR Code tool, select URL type, and paste your menu link. Customize colors to match your restaurant branding if desired."
    },
    {
      "@type": "HowToStep",
      "name": "Print and place on tables",
      "text": "Download the QR code as SVG for print quality. Add it to table tents, stickers, or signs with the text 'Scan for Menu'. Test it before bulk printing."
    }
  ]
}

export default function QRCodeForRestaurantMenuPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">QR Code for Restaurant Menus (Create a Scannable Menu Link)</h1>
              <p className="text-xl text-slate-300">
                Let customers scan a QR code at the table and view your full menu on their phone. No app downloads, no physical menus to clean or reprint. Here is how to set it up.
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
              <p className="text-slate-700 font-semibold">Ready to create your menu QR code? Go straight to the tool.</p>
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

            {/* Why use QR menus */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Restaurants Are Switching to QR Code Menus</h2>
              <p className="text-slate-600 mb-4">
                QR code menus exploded during the pandemic, but they are here to stay. Restaurants, cafes, bars, and food trucks are keeping them because the benefits go far beyond hygiene:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Instant updates.</strong> Change prices, add seasonal specials, or remove sold-out items without reprinting anything. Update the online menu and every QR code in your restaurant reflects the change immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Cost savings.</strong> Printed menus are expensive — especially when you have multiple pages, seasonal rotations, or frequent price changes. A QR code costs nothing to update.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Faster table turns.</strong> Customers can view the menu while waiting for a server. They spend less time deciding and more time ordering, which increases table turnover during peak hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Multilingual support.</strong> Link to a webpage with language options or host multiple PDF menus (English, Spanish, etc.) — customers choose their language after scanning.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Set Up a Menu QR Code (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Create or digitize your menu",
                    desc: "If you already have a PDF menu, you're ready. If your menu is only in print, photograph it or recreate it in Word/Google Docs and export as PDF. Use PDF.it's Word to PDF tool if needed. Make sure the text is readable on a phone screen.",
                  },
                  {
                    title: "Host your menu online",
                    desc: "Upload the PDF to your website, Google Drive (set sharing to 'Anyone with the link'), or a hosting service. Copy the public URL. If you use Google Drive, make sure the link opens the PDF directly, not the Drive interface.",
                  },
                  {
                    title: "Generate and print the QR code",
                    desc: "Open PDF.it's QR Code tool (Pro feature), paste your menu URL, and generate the code. Download as SVG for print. Print on table tents, acrylic stands, wall signs, or stickers. Add the text 'Scan for Menu' so customers know what to do.",
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

            {/* PDF vs webpage */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF Menu vs. Webpage Menu: Which Is Better?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDF Menu</h3>
                  <p className="text-slate-600">
                    Best for restaurants with a stable menu that does not change frequently. A PDF looks exactly like your printed menu, which is familiar and easy to read. You can create one in Word, Google Docs, or Canva and convert it to PDF. If the file is too large, use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce the size so it loads quickly on phones. You can also use <Link href="/compress-pdf-for-email" className="text-orange-600 hover:underline">Compress PDF for Email</Link> to make it lightweight.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Webpage Menu</h3>
                  <p className="text-slate-600">
                    Best for restaurants that update their menu frequently — daily specials, seasonal items, price changes. A webpage is easier to update (no file to re-upload) and can include photos, descriptions, and even online ordering. The downside is you need a website or a menu-building service.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Either way, the QR code works the same — it links to a URL. The only difference is whether that URL opens a PDF file or a webpage.
              </p>
            </section>

            {/* Placement tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Where to Place Your Menu QR Code</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Table tents.</strong> Small folded cards that stand on the table. Print the QR code on both sides so it is visible from any angle.</li>
                <li>&#10003; <strong>Acrylic stands.</strong> Clear acrylic holders with the QR code printed on a card inside. Professional looking and easy to clean.</li>
                <li>&#10003; <strong>Stickers on tables.</strong> Laminated stickers applied directly to the table surface. Durable and impossible to lose. Make sure they are large enough to scan.</li>
                <li>&#10003; <strong>Wall posters near the entrance.</strong> Let waiting customers browse the menu while they wait for a table.</li>
                <li>&#10003; <strong>Window decals.</strong> For takeout-focused restaurants, put a QR code on the window so passersby can scan and view your menu from outside.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For more tips on sizing and testing, see our <Link href="/learn/qr-code-best-practices" className="text-orange-600 hover:underline">QR Code Best Practices</Link> guide.
              </p>
            </section>

            {/* Keeping menu updated */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Update Your Menu Without Reprinting QR Codes</h2>
              <p className="text-slate-600 mb-4">
                The biggest mistake restaurants make is linking the QR code directly to a PDF file. When you update the menu, the URL changes and the old QR code breaks. Here is how to avoid that:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use a redirect URL.</strong> Services like Bitly or your own website's redirect feature let you point a permanent short URL to any destination. Change the destination anytime without touching the QR code.</li>
                <li>&#10003; <strong>Use your own website page.</strong> Create a /menu page on your website that always shows the current menu. The QR code links to yourrestaurant.com/menu, and you update that page whenever the menu changes.</li>
                <li>&#10003; <strong>Replace the file, not the link.</strong> If you host the PDF on Google Drive, you can replace the file without changing the sharing link. Upload the new PDF with the same name to the same folder.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Need to convert your updated menu from Word or PowerPoint to PDF? Use PDF.it's <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link> or <Link href="/powerpoint-to-pdf" className="text-orange-600 hover:underline">PowerPoint to PDF</Link> converter.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Create Your Restaurant Menu QR Code</h2>
            <p className="text-slate-300 mb-6">Generate a scannable QR code for your menu in seconds. Pro feature — includes all PDF tools for managing your menu files.</p>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Create Menu QR Code
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
                { title: "QR Code Best Practices (Size, Placement & Testing)", href: "/learn/qr-code-best-practices" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I create a QR code for my restaurant menu?", a: "Upload your menu as a PDF to a hosting service or your website, copy the URL, then use PDF.it's QR Code tool to generate a QR code for that URL. Print the QR code on table tents, stickers, or signs." },
                { q: "Should I link to a PDF menu or a webpage?", a: "A webpage is easier to update (change prices, add items) without reprinting QR codes. A PDF menu is simpler to create and looks exactly like your printed menu. Choose based on how often your menu changes." },
                { q: "How big should a menu QR code be?", a: "At least 3cm x 3cm for table tents and stickers. For wall signs or posters, go larger. The scanning distance matters — customers should be able to scan from at least 30cm away in restaurant lighting." },
                { q: "Can customers scan the QR code without an app?", a: "Yes. All modern smartphones (iPhone and Android) can scan QR codes directly with their built-in camera app. No separate QR reader app is needed." },
                { q: "How do I update my menu without reprinting QR codes?", a: "Use a URL shortener or redirect service. The QR code points to a short URL, and you change where that short URL redirects to whenever you update your menu. This way the QR code stays the same." },
                { q: "Is this a free tool?", a: "PDF.it's QR Code generator is a Pro feature at $3.99/month. Pro includes unlimited QR codes plus all PDF tools — perfect for restaurants that also need to compress, convert, or manage PDF menus." },
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
