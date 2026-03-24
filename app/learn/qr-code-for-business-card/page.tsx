import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "QR Code for Business Cards (Link to Your Website or vCard) | PDF.it",
  description:
    "Learn how to add a QR code to your business card that links to your website, LinkedIn, or vCard contact info. Generate business card QR codes with PDF.it.",
  keywords: "qr code business card, qr code for contact info, business card qr code generator, vcard qr code",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should a business card QR code link to?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common options are your website, LinkedIn profile, or a vCard file that saves your contact info directly to someone's phone. Choose based on your goal — website for portfolio or sales, vCard for networking." }
    },
    {
      "@type": "Question",
      "name": "What is a vCard QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "A vCard QR code encodes your contact details (name, phone, email, company, address) so that when scanned, the person's phone prompts them to save you as a contact. It's the most practical QR code type for business cards." }
    },
    {
      "@type": "Question",
      "name": "How big should a QR code be on a business card?",
      "acceptedAnswer": { "@type": "Answer", "text": "At least 2cm x 2cm (about 0.8 x 0.8 inches). Smaller QR codes are harder for phone cameras to read, especially in low light. If your card design allows it, go bigger — 2.5cm is ideal." }
    },
    {
      "@type": "Question",
      "name": "Where should I place the QR code on my business card?",
      "acceptedAnswer": { "@type": "Answer", "text": "Place it on the back of the card to keep the front clean and professional. If it goes on the front, put it in a corner with enough white space around it. Never let text or graphics overlap the QR code." }
    },
    {
      "@type": "Question",
      "name": "Can I update the QR code destination later?",
      "acceptedAnswer": { "@type": "Answer", "text": "Static QR codes cannot be updated — the URL or data is baked into the pattern. If you think you might change your website URL, use a short link service that lets you redirect the destination without changing the QR code." }
    },
    {
      "@type": "Question",
      "name": "Is the QR Code generator a Pro feature?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it's QR Code tool is a Pro feature available at $7.99/month. Pro users get unlimited QR code generation plus all premium PDF tools." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a QR Code for Your Business Card",
  "description": "Generate a professional QR code for your business card in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose vCard or URL type",
      "text": "Open PDF.it's QR Code tool and select either vCard (to encode your full contact info) or URL (to link to your website or LinkedIn profile)."
    },
    {
      "@type": "HowToStep",
      "name": "Enter your details",
      "text": "Fill in your name, phone, email, and company for vCard — or paste your website URL. Keep the data concise to ensure the QR code stays scannable."
    },
    {
      "@type": "HowToStep",
      "name": "Download and add to your card design",
      "text": "Download the QR code as SVG for print quality. Import it into your business card design tool and place it with adequate white space around it."
    }
  ]
}

export default function QRCodeForBusinessCardPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / QR Code</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">QR Code for Business Cards (Link to Your Website or vCard)</h1>
              <p className="text-xl text-slate-300">
                A QR code on your business card bridges the physical and digital world. One scan and your new contact has your website, LinkedIn, or full contact details saved on their phone.
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
              <p className="text-slate-700 font-semibold">Ready to create your business card QR code? Go straight to the tool.</p>
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

            {/* Why add QR to business card */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Add a QR Code to Your Business Card?</h2>
              <p className="text-slate-600 mb-4">
                Business cards have a problem: people collect them at events and conferences, toss them in a drawer, and never look at them again. A QR code solves this by making it effortless for someone to save your contact info or visit your website the moment they receive your card.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Instant contact saving.</strong> A vCard QR code lets people save your name, email, phone, and company to their contacts with a single scan. No manual typing, no typos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Drive website traffic.</strong> Link to your portfolio, online store, or company website. People are far more likely to visit when they can scan rather than type a URL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Professional impression.</strong> A QR code signals that you are tech-savvy and thoughtful about making things easy for your contacts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Space efficiency.</strong> Instead of cramming your LinkedIn URL, website, and social handles on a tiny card, put them all behind a single QR code.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Create a Business Card QR Code (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Decide what to link to",
                    desc: "Choose between a vCard (saves your full contact info to the scanner's phone), your website URL, your LinkedIn profile, or a landing page with all your links. vCard is best for networking; URL is best for driving traffic.",
                  },
                  {
                    title: "Generate the QR code",
                    desc: "Open PDF.it's QR Code tool (Pro feature), select your type, and enter your data. For vCard, fill in your name, title, company, phone, email, and address. For URL, paste your link. Keep data minimal for a cleaner, more scannable code.",
                  },
                  {
                    title: "Download as SVG and add to your card",
                    desc: "Download the QR code as an SVG file — this vector format prints at any size without pixelation. Import it into your business card design in Canva, Illustrator, or whatever tool you use. Place it with at least 3mm of white space on all sides.",
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

            {/* vCard vs URL */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">vCard QR Code vs. URL QR Code: Which One?</h2>
              <p className="text-slate-600 mb-4">
                This is the most important decision when adding a QR code to your business card. Here is how to choose:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Choose vCard If...</h3>
                  <p className="text-slate-600">
                    Your primary goal is networking. vCard QR codes save your name, phone number, email, company name, job title, and even your address directly to the scanner's phone contacts. This is the most practical option for conferences, trade shows, and networking events where people meet dozens of contacts and need to save info quickly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Choose URL If...</h3>
                  <p className="text-slate-600">
                    You want to drive traffic to your website, portfolio, or a landing page. This works well for freelancers, designers, and salespeople who want prospects to see their work or offerings. You can also link to a "link in bio" page that contains all your social profiles in one place.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Learn more about the different types in our <Link href="/learn/qr-code-types-explained" className="text-orange-600 hover:underline">QR Code Types Explained</Link> guide.
              </p>
            </section>

            {/* Design tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Design Tips for Business Card QR Codes</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Minimum size: 2cm x 2cm.</strong> Anything smaller becomes unreliable to scan, especially in dim lighting. Aim for 2.5cm if your card layout allows it.</li>
                <li>&#10003; <strong>Use high contrast.</strong> Dark QR code on a light background. Black on white is safest. Avoid placing QR codes on busy or dark backgrounds.</li>
                <li>&#10003; <strong>Leave white space.</strong> The QR code needs a "quiet zone" — at least 3mm of blank space around all sides. This helps scanners distinguish the code from surrounding design elements.</li>
                <li>&#10003; <strong>Back of the card is ideal.</strong> Keep the front clean with your name, title, and key info. The QR code on the back gets its own space and attention.</li>
                <li>&#10003; <strong>Add a call to action.</strong> Print "Scan to save my contact" or "Scan for my portfolio" next to the QR code so people know what to expect.</li>
                <li>&#10003; <strong>Test before bulk printing.</strong> Print one card and scan the QR code with at least two different phones. Check our <Link href="/learn/qr-code-best-practices" className="text-orange-600 hover:underline">QR code best practices</Link> for more tips.</li>
              </ul>
            </section>

            {/* Printing considerations */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Printing and File Format Considerations</h2>
              <p className="text-slate-600 mb-4">
                The file format you download matters for print quality. Here is what to use:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>SVG for print.</strong> SVG is a vector format that scales perfectly to any size. Use this when sending your card design to a printer. It will stay crisp at any resolution.</li>
                <li>&#10003; <strong>PNG for digital.</strong> Use PNG if you are sharing your QR code digitally — in email signatures, on websites, or in presentations.</li>
                <li>&#10003; <strong>Avoid JPEG.</strong> JPEG compression can blur the fine details of QR codes, making them harder to scan. Stick to PNG or SVG.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                If you need to embed your QR code into a PDF version of your card, you can use <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link> or design your card and convert it. Need to compress the final file? Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to keep it email-friendly.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Create Your Business Card QR Code</h2>
            <p className="text-slate-300 mb-6">Generate a vCard or URL QR code in seconds. Pro feature — upgrade for unlimited QR codes and all premium tools.</p>
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
                { title: "QR Code Best Practices (Size, Placement & Testing)", href: "/learn/qr-code-best-practices" },
                { title: "QR Code Types Explained (URL, Text, WiFi, vCard & More)", href: "/learn/qr-code-types-explained" },
                { title: "Create a QR Code That Links to a PDF Document", href: "/learn/qr-code-for-pdf" },
                { title: "QR Code for Restaurant Menus (Create a Scannable Menu Link)", href: "/learn/qr-code-for-restaurant-menu" },
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
                { q: "What should a business card QR code link to?", a: "The most common options are your website, LinkedIn profile, or a vCard file that saves your contact info directly to someone's phone. Choose based on your goal — website for portfolio or sales, vCard for networking." },
                { q: "What is a vCard QR code?", a: "A vCard QR code encodes your contact details (name, phone, email, company, address) so that when scanned, the person's phone prompts them to save you as a contact. It's the most practical QR code type for business cards." },
                { q: "How big should a QR code be on a business card?", a: "At least 2cm x 2cm (about 0.8 x 0.8 inches). Smaller QR codes are harder for phone cameras to read, especially in low light. If your card design allows it, go bigger — 2.5cm is ideal." },
                { q: "Where should I place the QR code on my business card?", a: "Place it on the back of the card to keep the front clean and professional. If it goes on the front, put it in a corner with enough white space around it. Never let text or graphics overlap the QR code." },
                { q: "Can I update the QR code destination later?", a: "Static QR codes cannot be updated — the URL or data is baked into the pattern. If you think you might change your website URL, use a short link service that lets you redirect the destination without changing the QR code." },
                { q: "Is the QR Code generator a Pro feature?", a: "Yes. PDF.it's QR Code tool is a Pro feature available at $7.99/month. Pro users get unlimited QR code generation plus all premium PDF tools." },
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
