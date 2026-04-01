import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Create a QR Code for WiFi (Guests Connect Instantly) | PDF.it",
  description:
    "Learn how to create a WiFi QR code so guests, customers, and visitors can connect to your network instantly by scanning — no typing passwords. Step-by-step guide.",
  keywords: "qr code wifi, wifi qr code generator, share wifi qr code, wifi password qr code",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does a WiFi QR code work?",
      "acceptedAnswer": { "@type": "Answer", "text": "A WiFi QR code encodes your network name (SSID), password, and encryption type. When someone scans it with their phone camera, the phone automatically connects to the WiFi network without the user needing to type anything." }
    },
    {
      "@type": "Question",
      "name": "Is sharing WiFi via QR code secure?",
      "acceptedAnswer": { "@type": "Answer", "text": "The QR code contains your WiFi password, so anyone who scans it gets access. This is fine for guest networks. For security-sensitive networks, create a separate guest WiFi network with its own password and QR code, keeping your main network private." }
    },
    {
      "@type": "Question",
      "name": "Does it work on both iPhone and Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. iPhones running iOS 11 or later and Android phones running Android 10 or later can scan WiFi QR codes with their built-in camera app and connect automatically. Older phones may need a third-party QR reader app." }
    },
    {
      "@type": "Question",
      "name": "What information do I need to create a WiFi QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "You need three things: your network name (SSID), your WiFi password, and the encryption type (usually WPA/WPA2 for modern routers). You can find all of this in your router settings or on the sticker on the bottom of your router." }
    },
    {
      "@type": "Question",
      "name": "Do I need to update the QR code if I change my WiFi password?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. WiFi QR codes are static — the password is encoded directly in the QR code pattern. If you change your WiFi password, you need to generate a new QR code and replace the old one." }
    },
    {
      "@type": "Question",
      "name": "Is this tool free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it's QR Code generator is a Pro feature at $3.99/month. Pro users get unlimited QR code generation including WiFi, URL, vCard, and all other types." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a WiFi QR Code",
  "description": "Let guests connect to your WiFi instantly by scanning a QR code. Create one in 3 steps with PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Gather your WiFi details",
      "text": "Find your network name (SSID), password, and encryption type (WPA/WPA2 or WEP). Check your router settings or the sticker on your router."
    },
    {
      "@type": "HowToStep",
      "name": "Generate the WiFi QR code",
      "text": "Open PDF.it's QR Code tool, select WiFi type, and enter your network name, password, and encryption type. Click Generate."
    },
    {
      "@type": "HowToStep",
      "name": "Print and display",
      "text": "Download the QR code and print it. Place it near the entrance, on the guest room nightstand, or by the cash register with the text 'Scan to Connect to WiFi'."
    }
  ]
}

export default function QRCodeForWiFiPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Create a QR Code for WiFi (Guests Connect Instantly)</h1>
              <p className="text-xl text-slate-300">
                Stop spelling out your WiFi password to every guest, customer, or Airbnb visitor. Create a WiFi QR code and they connect with a single scan — no typing required.
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
              <p className="text-slate-700 font-semibold">Know your WiFi details? Generate your QR code now.</p>
            </div>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Create WiFi QR Code <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why WiFi QR codes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Use a WiFi QR Code?</h2>
              <p className="text-slate-600 mb-4">
                Sharing WiFi the old-fashioned way is painful. You spell out the password letter by letter, the guest types it wrong, you repeat it, they try again. A WiFi QR code eliminates all of this friction:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Instant connection.</strong> Guests scan the QR code with their phone camera and connect to WiFi automatically. No typing, no mistakes, no frustration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Perfect for businesses.</strong> Cafes, restaurants, hotels, coworking spaces, and salons can display a WiFi QR code so customers connect without asking staff for the password.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Great for Airbnb hosts.</strong> Print the WiFi QR code and place it in the guest guide or on the nightstand. Guests connect the moment they arrive without messaging you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Works at home too.</strong> When friends and family visit, a framed WiFi QR code on the wall or fridge saves you from dictating passwords every time.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Create a WiFi QR Code (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Find your WiFi details",
                    desc: "You need three pieces of information: your network name (SSID — the name that appears in your WiFi list), your password, and the encryption type (WPA/WPA2 for most modern routers, or WEP for older ones). Check the sticker on the bottom of your router or your router's admin page.",
                  },
                  {
                    title: "Generate the QR code",
                    desc: "Open PDF.it's QR Code tool (Pro feature), select the WiFi type, and enter your SSID, password, and encryption type. If your network name has spaces or special characters, enter it exactly as it appears in your WiFi settings list.",
                  },
                  {
                    title: "Print and display",
                    desc: "Download the QR code as PNG or SVG. Print it and display it where guests can easily see and scan it — near the entrance, on a coffee table, at the front desk, or on the refrigerator. Add the text 'Scan to Connect to WiFi' so people know what it does.",
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

            {/* Where to display */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Where to Display Your WiFi QR Code</h2>
              <p className="text-slate-600 mb-4">
                The QR code needs to be visible and accessible in the place where people will want to connect. Here are the best spots for different settings:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Restaurants and Cafes</h3>
                  <p className="text-slate-600">
                    Place WiFi QR codes on table tents, next to the <Link href="/learn/qr-code-for-restaurant-menu" className="text-orange-600 hover:underline">menu QR code</Link>, or on a sign near the entrance. Some restaurants combine their menu and WiFi QR codes on the same card — two codes, clearly labeled.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hotels and Airbnbs</h3>
                  <p className="text-slate-600">
                    Print the QR code on a small card and place it on the nightstand, inside the welcome folder, or on the desk in the room. For Airbnbs, include it in your printed house guide along with other instructions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Offices and Coworking Spaces</h3>
                  <p className="text-slate-600">
                    Display it in the reception area, meeting rooms, and common areas. If you have separate networks for staff and visitors, create two QR codes and label them clearly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Home</h3>
                  <p className="text-slate-600">
                    Frame it and hang it in the living room or stick it on the fridge. You can also include it in a small sign near the guest bedroom. Some people even put it inside a decorative frame as a conversation piece.
                  </p>
                </div>
              </div>
            </section>

            {/* Security tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Security Tips for WiFi QR Codes</h2>
              <p className="text-slate-600 mb-4">
                A WiFi QR code contains your password in plain text (encoded in the QR pattern). Anyone who scans it gets your WiFi password. Here is how to stay secure:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use a guest network.</strong> Most modern routers support a separate guest network. Create one with its own password and make the QR code for that network only. Your main network stays private.</li>
                <li>&#10003; <strong>Change the guest password regularly.</strong> Especially for businesses. Update it monthly and generate a new QR code. PDF.it's <Link href="/qr-code" className="text-orange-600 hover:underline">QR Code tool</Link> makes this quick.</li>
                <li>&#10003; <strong>Limit guest network access.</strong> Configure your router to prevent guest network users from accessing devices on your main network (printers, NAS drives, smart home devices).</li>
                <li>&#10003; <strong>Set bandwidth limits.</strong> If you run a business, limit the guest network bandwidth so one person streaming 4K video does not slow down everyone else.</li>
                <li>&#10003; <strong>Do not post it publicly outside.</strong> Keep WiFi QR codes inside your premises where only actual guests and customers can scan them.</li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Troubleshooting: WiFi QR Code Not Working?</h2>
              <p className="text-slate-600 mb-4">
                If someone scans your WiFi QR code but cannot connect, check these common issues:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>SSID spelling.</strong> The network name in the QR code must match your router exactly — including capitalization, spaces, and special characters.</li>
                <li>&#10003; <strong>Password accuracy.</strong> Double-check the password. One wrong character and it will not work.</li>
                <li>&#10003; <strong>Encryption type.</strong> Make sure you selected the correct type (WPA/WPA2 vs WEP). Most modern routers use WPA2 or WPA3.</li>
                <li>&#10003; <strong>Phone compatibility.</strong> iPhones need iOS 11+ and Android phones need Android 10+ for automatic WiFi QR code connection. Older phones may recognize the QR code but not auto-connect.</li>
                <li>&#10003; <strong>QR code quality.</strong> If the printed QR code is too small, blurry, or damaged, the scanner may misread it. Follow our <Link href="/learn/qr-code-best-practices" className="text-orange-600 hover:underline">QR code best practices</Link> for reliable printing.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Create Your WiFi QR Code</h2>
            <p className="text-slate-300 mb-6">Let guests connect to your WiFi with a single scan. Pro feature — upgrade for unlimited QR codes and all PDF tools.</p>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Create WiFi QR Code
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
                { q: "How does a WiFi QR code work?", a: "A WiFi QR code encodes your network name (SSID), password, and encryption type. When someone scans it with their phone camera, the phone automatically connects to the WiFi network without the user needing to type anything." },
                { q: "Is sharing WiFi via QR code secure?", a: "The QR code contains your WiFi password, so anyone who scans it gets access. This is fine for guest networks. For security-sensitive networks, create a separate guest WiFi with its own password and QR code." },
                { q: "Does it work on both iPhone and Android?", a: "Yes. iPhones running iOS 11 or later and Android phones running Android 10 or later can scan WiFi QR codes with their built-in camera app and connect automatically." },
                { q: "What information do I need to create a WiFi QR code?", a: "You need three things: your network name (SSID), your WiFi password, and the encryption type (usually WPA/WPA2 for modern routers). Check your router settings or the sticker on your router." },
                { q: "Do I need to update the QR code if I change my WiFi password?", a: "Yes. WiFi QR codes are static — the password is encoded directly in the QR code pattern. If you change your WiFi password, you need to generate a new QR code." },
                { q: "Is this tool free?", a: "PDF.it's QR Code generator is a Pro feature at $3.99/month. Pro users get unlimited QR code generation including WiFi, URL, vCard, and all other types." },
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
