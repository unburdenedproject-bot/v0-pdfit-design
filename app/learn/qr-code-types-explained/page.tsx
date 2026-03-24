import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "QR Code Types Explained (URL, Text, WiFi, vCard & More) | PDF.it",
  description:
    "Learn about the different types of QR codes — URL, plain text, WiFi, vCard, email, phone, and SMS. Understand when to use each type and how they work.",
  keywords: "qr code types, types of qr codes, qr code formats, qr code url vs text",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the main types of QR codes?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common types are URL (opens a website), plain text (displays a message), WiFi (connects to a network), vCard (saves contact info), email (opens a pre-filled email), phone (initiates a call), and SMS (opens a pre-filled text message)." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a static and dynamic QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "A static QR code has data encoded directly in its pattern — once created, it cannot be changed. A dynamic QR code points to a redirect URL that can be updated anytime. PDF.it generates static QR codes, which never expire and work offline." }
    },
    {
      "@type": "Question",
      "name": "Which QR code type is most common?",
      "acceptedAnswer": { "@type": "Answer", "text": "URL QR codes are by far the most common. They link to websites, landing pages, social media profiles, online menus, documents, and any other web content." }
    },
    {
      "@type": "Question",
      "name": "Can one QR code contain multiple types of data?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Each QR code encodes one type of data. However, you can create a URL QR code that links to a webpage containing multiple pieces of information — links, contact details, menus, and files all on one page." }
    },
    {
      "@type": "Question",
      "name": "Do all phones support all QR code types?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most modern smartphones support URL, text, WiFi, and vCard QR codes natively through their built-in camera. Some older phones may not support automatic WiFi connection or vCard saving and will just display the raw encoded text." }
    },
    {
      "@type": "Question",
      "name": "Is the QR Code generator free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it's QR Code tool is a Pro feature at $7.99/month. Pro users get unlimited generation of all QR code types plus access to all premium PDF tools." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Choose the Right QR Code Type",
  "description": "Select and create the right QR code type for your needs in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identify your goal",
      "text": "Determine what you want to happen when someone scans: open a website (URL), save contact info (vCard), connect to WiFi, or display text."
    },
    {
      "@type": "HowToStep",
      "name": "Select the matching type",
      "text": "Open PDF.it's QR Code tool and select the type that matches your goal. Enter the required data — URL, contact details, WiFi credentials, or text."
    },
    {
      "@type": "HowToStep",
      "name": "Generate and test",
      "text": "Click Generate and download your QR code. Test with your phone to confirm it triggers the correct action — opening the right page, saving the contact, or connecting to WiFi."
    }
  ]
}

export default function QRCodeTypesExplainedPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">QR Code Types Explained (URL, Text, WiFi, vCard & More)</h1>
              <p className="text-xl text-slate-300">
                Not all QR codes are the same. The type you choose determines what happens when someone scans it — opening a website, saving a contact, connecting to WiFi, or displaying a message. Here is a complete guide to every type.
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
              <p className="text-slate-700 font-semibold">Know which type you need? Create your QR code now.</p>
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

            {/* URL QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">URL QR Codes (The Most Common Type)</h2>
              <p className="text-slate-600 mb-4">
                A URL QR code opens a website or webpage when scanned. This is the most widely used type of QR code and covers the majority of use cases:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Website links.</strong> Link to your homepage, landing page, product page, or any URL. The scanner's phone opens the page in their default browser.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Social media profiles.</strong> Link to your Instagram, LinkedIn, Twitter, or YouTube channel. Great for <Link href="/learn/qr-code-for-business-card" className="text-orange-600 hover:underline">business cards</Link> and marketing materials.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>PDF documents.</strong> Link to a <Link href="/learn/qr-code-for-pdf" className="text-orange-600 hover:underline">hosted PDF file</Link> — menus, brochures, manuals, or flyers. The PDF opens directly in the phone's browser.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>App download links.</strong> Link to your app on the App Store or Google Play. Users scan and go directly to the download page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Google Maps locations.</strong> Share a Google Maps link so people can get directions to your business, event venue, or meeting point.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Best practice:</strong> Keep URLs short. Long URLs create denser QR codes that are harder to scan at small sizes. Use a URL shortener if needed. Learn more in our <Link href="/learn/how-to-create-qr-code" className="text-orange-600 hover:underline">how to create a QR code</Link> guide.
              </p>
            </section>

            {/* vCard QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">vCard QR Codes (Save Contact Info Instantly)</h2>
              <p className="text-slate-600 mb-4">
                A vCard QR code encodes contact information — name, phone number, email, company, job title, and address. When someone scans it, their phone prompts them to save the contact directly to their address book.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">What Data Can a vCard Include?</h3>
                  <p className="text-slate-600">
                    Full name, phone number (mobile, work, home), email address, company name, job title, website URL, physical address, and even a note. The more data you include, the denser the QR code becomes, so include only what is essential.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Best Use Cases</h3>
                  <p className="text-slate-600">
                    Business cards are the most common use case. Instead of hoping someone manually types your phone number from a card, they scan and save. Also great for conference badges, name tags, and networking events. Read our full guide on <Link href="/learn/qr-code-for-business-card" className="text-orange-600 hover:underline">QR codes for business cards</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* WiFi QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">WiFi QR Codes (Connect Without Typing Passwords)</h2>
              <p className="text-slate-600 mb-4">
                A WiFi QR code encodes your network name (SSID), password, and encryption type. When scanned, the phone automatically connects to the WiFi network — no manual password entry needed.
              </p>
              <p className="text-slate-600 mb-4">
                This type is perfect for restaurants, cafes, hotels, Airbnbs, offices, and homes. Instead of writing the WiFi password on a chalkboard or repeating it to every guest, display a QR code and let people connect with a scan.
              </p>
              <p className="text-slate-600">
                <strong>Important:</strong> The password is encoded in the QR code, so use a guest network for public spaces. Read our detailed guide on <Link href="/learn/qr-code-for-wifi" className="text-orange-600 hover:underline">creating WiFi QR codes</Link> for security tips and setup instructions.
              </p>
            </section>

            {/* Text, Email, Phone, SMS */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Text, Email, Phone & SMS QR Codes</h2>
              <p className="text-slate-600 mb-4">
                These types are less common but useful in specific situations:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Plain Text</h3>
                  <p className="text-slate-600">
                    Displays a text message on screen when scanned. No internet connection required — the text is stored in the QR code itself. Use cases: product serial numbers, short instructions, promotional codes, or messages. The downside is that text QR codes cannot be updated after creation and the data length is limited.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600">
                    Opens the scanner's email app with a pre-filled recipient, subject line, and optionally body text. Great for feedback collection — print a QR code on receipts or packaging that opens a pre-addressed "How was your experience?" email.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Phone Number</h3>
                  <p className="text-slate-600">
                    Initiates a phone call to a pre-set number when scanned. Useful for customer service lines, emergency contacts, or "Call us" signs. The phone shows the number and asks for confirmation before dialing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">SMS</h3>
                  <p className="text-slate-600">
                    Opens the messaging app with a pre-filled phone number and optionally a message. Used for opt-in marketing ("Scan to text JOIN to 12345") or customer support text lines.
                  </p>
                </div>
              </div>
            </section>

            {/* Static vs Dynamic */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Static vs. Dynamic QR Codes</h2>
              <p className="text-slate-600 mb-4">
                Beyond the data type, QR codes are also categorized as static or dynamic:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Static QR codes</strong> encode data directly in the QR pattern. Once created, the data cannot be changed. They work forever, do not require internet to decode (except URL types that link to a website), and are completely free to use. PDF.it generates static QR codes.</li>
                <li>&#10003; <strong>Dynamic QR codes</strong> encode a redirect URL that points to a server. The server owner can change where the redirect goes anytime. This lets you update the destination without reprinting the QR code. The downside: they require a third-party service (often paid) and stop working if that service goes down.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For most use cases, static QR codes are the better choice. They are simpler, more reliable, and do not depend on any third-party service. If you need the ability to update, use a URL shortener (like Bitly) as your own redirect layer — the QR code points to the short URL, and you change where it redirects.
              </p>
            </section>

            {/* Choosing the right type */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Choose the Right QR Code Type</h2>
              <p className="text-slate-600 mb-4">
                Match your goal to the right type:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Want people to visit a website?</strong> Use URL type.</li>
                <li>&#10003; <strong>Want people to save your contact info?</strong> Use vCard type. Best for <Link href="/learn/qr-code-for-business-card" className="text-orange-600 hover:underline">business cards</Link>.</li>
                <li>&#10003; <strong>Want people to connect to WiFi?</strong> Use <Link href="/learn/qr-code-for-wifi" className="text-orange-600 hover:underline">WiFi type</Link>.</li>
                <li>&#10003; <strong>Want to share a PDF?</strong> Use URL type linking to a <Link href="/learn/qr-code-for-pdf" className="text-orange-600 hover:underline">hosted PDF</Link>.</li>
                <li>&#10003; <strong>Want people to call you?</strong> Use Phone type.</li>
                <li>&#10003; <strong>Want to display a code or message?</strong> Use Text type.</li>
                <li>&#10003; <strong>Want feedback via email?</strong> Use Email type.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                No matter which type you choose, follow our <Link href="/learn/qr-code-best-practices" className="text-orange-600 hover:underline">QR code best practices</Link> for sizing, contrast, and testing to ensure reliable scanning.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Create Any Type of QR Code</h2>
            <p className="text-slate-300 mb-6">Generate URL, vCard, WiFi, text, and more QR code types in seconds. Pro feature — upgrade for unlimited QR codes.</p>
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
                { title: "QR Code Best Practices (Size, Placement & Testing)", href: "/learn/qr-code-best-practices" },
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
                { q: "What are the main types of QR codes?", a: "The most common types are URL (opens a website), plain text (displays a message), WiFi (connects to a network), vCard (saves contact info), email (opens a pre-filled email), phone (initiates a call), and SMS (opens a pre-filled text message)." },
                { q: "What is the difference between a static and dynamic QR code?", a: "A static QR code has data encoded directly in its pattern — once created, it cannot be changed. A dynamic QR code points to a redirect URL that can be updated anytime. PDF.it generates static QR codes, which never expire and work offline." },
                { q: "Which QR code type is most common?", a: "URL QR codes are by far the most common. They link to websites, landing pages, social media profiles, online menus, documents, and any other web content." },
                { q: "Can one QR code contain multiple types of data?", a: "No. Each QR code encodes one type of data. However, you can create a URL QR code that links to a webpage containing multiple pieces of information." },
                { q: "Do all phones support all QR code types?", a: "Most modern smartphones support URL, text, WiFi, and vCard QR codes natively through their built-in camera. Some older phones may not support automatic WiFi connection or vCard saving." },
                { q: "Is the QR Code generator free?", a: "PDF.it's QR Code tool is a Pro feature at $7.99/month. Pro users get unlimited generation of all QR code types plus access to all premium PDF tools." },
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
