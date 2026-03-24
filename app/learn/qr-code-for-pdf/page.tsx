import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Create a QR Code That Links to a PDF Document | PDF.it",
  description:
    "Learn how to create a QR code that opens a PDF document. Step-by-step guide covering hosting options, file size tips, and best practices for sharing PDFs via QR code.",
  keywords: "qr code for pdf, qr code link to pdf, share pdf with qr code, pdf qr code generator",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a QR code link directly to a PDF file?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. A QR code can link to any URL, including a direct link to a PDF file hosted online. When someone scans the QR code, their phone browser opens the PDF automatically." }
    },
    {
      "@type": "Question",
      "name": "Where should I host the PDF for my QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can host it on your own website, Google Drive (with public sharing enabled), Dropbox, or any file hosting service that gives you a public URL. Make sure the link doesn't require a login to access." }
    },
    {
      "@type": "Question",
      "name": "How large can the PDF be?",
      "acceptedAnswer": { "@type": "Answer", "text": "There's no technical limit from the QR code side — it only stores the URL, not the file. However, keep your PDF under 5MB so it loads quickly on mobile devices. Use PDF.it's Compress PDF tool to reduce large files." }
    },
    {
      "@type": "Question",
      "name": "Will the QR code still work if I update the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you replace the file at the same URL, yes. If the URL changes (new upload with a different link), the QR code will break. Use a redirect URL or replace the file in-place to avoid this." }
    },
    {
      "@type": "Question",
      "name": "Can I password-protect the PDF behind the QR code?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but the person scanning will need to enter the password to open the PDF. Use PDF.it's Protect PDF tool to add a password. Share the password separately — don't put it next to the QR code." }
    },
    {
      "@type": "Question",
      "name": "Is the QR Code tool free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it's QR Code generator is a Pro feature ($7.99/month). Pro includes unlimited QR codes, PDF compression, conversion tools, and more." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a QR Code That Links to a PDF",
  "description": "Share any PDF document via QR code in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Host your PDF online",
      "text": "Upload your PDF to your website, Google Drive, or a file hosting service. Copy the public URL that directly opens or downloads the PDF."
    },
    {
      "@type": "HowToStep",
      "name": "Generate the QR code",
      "text": "Open PDF.it's QR Code tool, select URL type, and paste the link to your PDF. Generate the QR code."
    },
    {
      "@type": "HowToStep",
      "name": "Download and share",
      "text": "Download the QR code as PNG for digital use or SVG for print. Test it with your phone to make sure the PDF opens correctly."
    }
  ]
}

export default function QRCodeForPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Create a QR Code That Links to a PDF Document</h1>
              <p className="text-xl text-slate-300">
                Need to share a PDF with a simple scan? Whether it is a brochure, manual, menu, or flyer — here is how to create a QR code that opens your PDF instantly on any phone.
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
              <p className="text-slate-700 font-semibold">Have your PDF URL ready? Generate a QR code now.</p>
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

            {/* Why QR code for PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Share a PDF with a QR Code?</h2>
              <p className="text-slate-600 mb-4">
                QR codes bridge the gap between physical and digital. Instead of telling someone to "go to our website and look for the PDF in the resources section," you print a QR code on a poster, flyer, or product packaging and they scan it to get the document instantly. Common use cases include:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Product manuals.</strong> Print a QR code on the product packaging that links to the full PDF manual. Customers get the latest version without you shipping thick booklets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Event brochures.</strong> Conference organizers print QR codes on signs that link to the full event schedule, speaker bios, or session handouts as PDFs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Restaurant menus.</strong> Link to a <Link href="/learn/qr-code-for-restaurant-menu" className="text-orange-600 hover:underline">PDF menu</Link> from a table QR code. Update the PDF anytime without reprinting the code.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Real estate flyers.</strong> Print a QR code on a property listing flyer that opens the full property details, floor plans, and photos as a PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Educational materials.</strong> Teachers and professors print QR codes on worksheets that link to supplementary PDF readings or answer keys.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Create a PDF QR Code (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Prepare and optimize your PDF",
                    desc: "Before hosting, make sure your PDF is optimized for mobile viewing. Compress large files using PDF.it's Compress PDF tool — aim for under 5MB so it loads quickly on phone connections. Flatten the PDF if it has unnecessary form fields or layers.",
                  },
                  {
                    title: "Upload and get a public URL",
                    desc: "Host the PDF where anyone can access it without logging in. Options: your website (upload to /files/menu.pdf), Google Drive (Share > Anyone with the link > Viewer), Dropbox (create a shared link), or any file hosting. Copy the direct URL.",
                  },
                  {
                    title: "Generate the QR code and test it",
                    desc: "Open PDF.it's QR Code tool (Pro feature), select URL, paste your PDF link, and generate. Download as SVG for print or PNG for digital. Always scan the QR code with your phone to verify the PDF opens correctly before distributing.",
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

            {/* Hosting options */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Where to Host Your PDF (Hosting Options Compared)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Your Own Website</h3>
                  <p className="text-slate-600">
                    Best option for reliability. Upload the PDF to your web server and link directly to it. You control the URL, can update the file anytime, and there are no third-party restrictions. The URL stays permanent as long as you keep the file in the same location.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Drive</h3>
                  <p className="text-slate-600">
                    Free and easy. Upload your PDF, click Share, set access to "Anyone with the link," and copy the link. The downside: Google Drive links sometimes show a preview page instead of opening the PDF directly. You can modify the URL to force a direct download.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Dropbox</h3>
                  <p className="text-slate-600">
                    Similar to Google Drive. Create a shared link for the PDF. Dropbox links show a preview page by default, but you can change the URL parameter from dl=0 to dl=1 to force a direct download.
                  </p>
                </div>
              </div>
            </section>

            {/* File size tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Optimizing PDF File Size for Mobile</h2>
              <p className="text-slate-600 mb-4">
                People scanning QR codes are on their phones, often on mobile data. A 50MB PDF will take forever to load and most people will give up. Here is how to keep your PDF lean:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Compress first.</strong> Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce file size. Most PDFs can be compressed by 50-80% without visible quality loss.</li>
                <li>&#10003; <strong>Target a specific size.</strong> Use <Link href="/compress-pdf-to-5mb" className="text-orange-600 hover:underline">Compress to 5MB</Link> or <Link href="/compress-pdf-to-2mb" className="text-orange-600 hover:underline">Compress to 2MB</Link> for guaranteed size limits.</li>
                <li>&#10003; <strong>Flatten layers.</strong> If your PDF has form fields, annotations, or transparency layers, <Link href="/flatten-pdf" className="text-orange-600 hover:underline">flatten it</Link> to remove unnecessary data.</li>
                <li>&#10003; <strong>Reduce image resolution.</strong> PDFs with high-resolution images are the biggest culprits. Compression handles this automatically, but you can also reduce image quality manually before creating the PDF.</li>
                <li>&#10003; <strong>Split if necessary.</strong> If your PDF is very long, consider using <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to break it into sections and link to only the relevant part.</li>
              </ul>
            </section>

            {/* Updating the PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Update the PDF Without Breaking the QR Code</h2>
              <p className="text-slate-600 mb-4">
                This is the most common mistake: you update your PDF, upload it as a new file, get a new URL, and suddenly the QR codes you already printed point to the old version. Here are three strategies to avoid this:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Replace the file at the same URL.</strong> If you host on your own website, simply overwrite the old file with the new one at the same path. The URL stays the same, the QR code still works.</li>
                <li>&#10003; <strong>Use a redirect URL.</strong> Create a short URL (Bitly, your own domain redirect) that points to the PDF. When you update the PDF, change where the short URL redirects. The QR code always points to the short URL.</li>
                <li>&#10003; <strong>Use a /documents page.</strong> Create a page on your website that always links to the latest version of the PDF. The QR code links to the page, not the file directly.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Create a QR Code for Your PDF</h2>
            <p className="text-slate-300 mb-6">Link any PDF document to a scannable QR code in seconds. Pro feature — upgrade for unlimited QR codes and all PDF tools.</p>
            <Link
              href="/qr-code"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Create PDF QR Code
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
                { title: "QR Code Best Practices (Size, Placement & Testing)", href: "/learn/qr-code-best-practices" },
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
                { q: "Can a QR code link directly to a PDF file?", a: "Yes. A QR code can link to any URL, including a direct link to a PDF file hosted online. When someone scans the QR code, their phone browser opens the PDF automatically." },
                { q: "Where should I host the PDF for my QR code?", a: "You can host it on your own website, Google Drive (with public sharing enabled), Dropbox, or any file hosting service that gives you a public URL. Make sure the link doesn't require a login to access." },
                { q: "How large can the PDF be?", a: "There's no technical limit from the QR code side — it only stores the URL, not the file. However, keep your PDF under 5MB so it loads quickly on mobile devices. Use PDF.it's Compress PDF tool to reduce large files." },
                { q: "Will the QR code still work if I update the PDF?", a: "If you replace the file at the same URL, yes. If the URL changes (new upload with a different link), the QR code will break. Use a redirect URL or replace the file in-place to avoid this." },
                { q: "Can I password-protect the PDF behind the QR code?", a: "Yes, but the person scanning will need to enter the password to open the PDF. Use PDF.it's Protect PDF tool to add a password. Share the password separately — don't put it next to the QR code." },
                { q: "Is the QR Code tool free?", a: "PDF.it's QR Code generator is a Pro feature ($7.99/month). Pro includes unlimited QR codes, PDF compression, conversion tools, and more." },
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
