import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Split a PDF on Your Phone (iPhone & Android) | PDF.it",
  description:
    "Learn how to split a PDF on your phone using just your browser. Works on iPhone and Android — no app download needed. Free, fast, and easy step-by-step guide.",
  keywords: "split pdf on phone, split pdf iphone, split pdf android, split pdf mobile free",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I split a PDF on my phone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works entirely in your phone's browser — Safari on iPhone, Chrome on Android, or any other mobile browser. No app installation needed." }
    },
    {
      "@type": "Question",
      "name": "How do I split a PDF on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Open Safari, go to pdf.it.com/split-pdf, tap to upload your PDF from Files or iCloud Drive, select the pages you want, and download the split files." }
    },
    {
      "@type": "Question",
      "name": "How do I split a PDF on Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Open Chrome or your preferred browser, go to pdf.it.com/split-pdf, tap to upload your PDF from your device storage or Google Drive, select pages, and download." }
    },
    {
      "@type": "Question",
      "name": "Is it free to split a PDF on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it offers free PDF splitting with files up to 25MB. You get 3 free operations without an account, and 10 per day with a free account." }
    },
    {
      "@type": "Question",
      "name": "Where does the split PDF download to on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "On iPhone, split files download to your Files app (usually in the Downloads folder). On Android, files go to your Downloads folder, accessible through the Files app or notification tray." }
    },
    {
      "@type": "Question",
      "name": "Can I split a large PDF on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free users can split PDFs up to 25MB on mobile. Pro users can handle files up to 200MB. The processing happens on PDF.it's servers, so your phone's storage and speed don't affect the result." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Split a PDF on Your Phone",
  "description": "Split a PDF into separate files on iPhone or Android in 3 simple steps using PDF.it in your mobile browser.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in your mobile browser",
      "text": "Open Safari (iPhone) or Chrome (Android) and go to pdf.it.com/split-pdf. The tool works the same way on mobile as on desktop."
    },
    {
      "@type": "HowToStep",
      "name": "Upload and select pages",
      "text": "Tap the upload area to select a PDF from your phone. Choose pages from Files, iCloud Drive, Google Drive, or your device storage. Then select which pages to extract or how to split."
    },
    {
      "@type": "HowToStep",
      "name": "Download the split files",
      "text": "Tap Split PDF and download the result. Files save to your Downloads folder where you can share them via email, messaging apps, or cloud storage."
    }
  ]
}

export default function SplitPDFOnMobilePage() {
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Split PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Split a PDF on Your Phone (iPhone & Android)</h1>
              <p className="text-xl text-slate-300">
                Need to split a PDF but only have your phone? No problem. PDF.it works right in your mobile browser — no app download, no account required.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your phone right now? Open the tool directly.</p>
            </div>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Split PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why split on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When You Need to Split a PDF on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                You are away from your computer, but you need to split a PDF right now. Common mobile scenarios include:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Forwarding a specific page from an email attachment.</strong> Your boss emails a 20-page report and asks you to forward just page 5 to a client. Split it on your phone and reply in seconds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Uploading a document to a mobile form.</strong> A government portal or insurance app asks for a single page from your multi-page document. Extract just that page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Sending a file via WhatsApp or Telegram.</strong> Messaging apps have file size limits. Split a large PDF into smaller parts so you can share them through chat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Quick edits while traveling.</strong> You are at the airport and need to submit only certain pages of a contract before your flight. Your phone is all you have.</span>
                </li>
              </ul>
            </section>

            {/* Step by step - iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Split a PDF on iPhone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open Safari and go to pdf.it.com/split-pdf",
                    desc: "Type pdf.it.com/split-pdf in Safari's address bar. The page loads with the same full-featured split tool you would see on a computer. No app needed.",
                  },
                  {
                    title: "Tap to upload your PDF",
                    desc: "Tap the upload area. iOS will let you choose from Files, iCloud Drive, or recent downloads. Find your PDF and tap to upload it. You'll see a page preview once it's loaded.",
                  },
                  {
                    title: "Select pages and download",
                    desc: "Choose the pages or page ranges you want to keep. Tap Split PDF. The result downloads to your Files app (Downloads folder). You can then share it via Mail, AirDrop, Messages, or any other app.",
                  },
                ].map((step, i) => (
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

            {/* Step by step - Android */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Split a PDF on Android (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open Chrome and go to pdf.it.com/split-pdf",
                    desc: "Open Chrome (or your preferred browser) and navigate to pdf.it.com/split-pdf. The tool loads instantly — no app download or Google Play Store visit required.",
                  },
                  {
                    title: "Tap to upload your PDF",
                    desc: "Tap the upload area. Android will show options to browse your device storage, Google Drive, or recent files. Select your PDF and wait for it to upload.",
                  },
                  {
                    title: "Select pages and download",
                    desc: "Choose which pages to extract or how to split the file. Tap Split PDF. The file downloads to your Downloads folder. Check the notification tray for the download confirmation, then open or share the file.",
                  },
                ].map((step, i) => (
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

            {/* Tips for mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Splitting PDFs on Mobile</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use a stable connection.</strong> Upload and download work best on Wi-Fi. Cellular data works too, but large files may take longer on slower connections.</li>
                <li>&#10003; <strong>Check your Downloads folder.</strong> On iPhone, files go to the Files app. On Android, check your Downloads folder or notification tray.</li>
                <li>&#10003; <strong>Bookmark the tool.</strong> Add pdf.it.com/split-pdf to your home screen for instant access. On iPhone, tap Share then &quot;Add to Home Screen.&quot; On Android, tap the browser menu and &quot;Add to Home screen.&quot;</li>
                <li>&#10003; <strong>Compress if still too large.</strong> After splitting, if individual parts are still big, use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> from your phone to shrink them further.</li>
                <li>&#10003; <strong>Works with cloud storage.</strong> You can upload PDFs directly from iCloud Drive, Google Drive, Dropbox, or OneDrive — no need to download to your phone first.</li>
              </ul>
            </section>

            {/* Other mobile tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other PDF Tools You Can Use on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                PDF.it is fully mobile-friendly. Every tool works in your phone's browser, just like the split tool. Here are some you might need after splitting:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Merge split files back together</h3>
                  <p className="text-slate-600">
                    Need to recombine PDF parts? Use <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> to join multiple files into one — works great on mobile for reassembling documents.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress for sharing</h3>
                  <p className="text-slate-600">
                    Before sharing via WhatsApp or email, use <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress PDF for Email</Link> to make sure your file is small enough to send.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert pages to images</h3>
                  <p className="text-slate-600">
                    Need to share a page as a photo? Convert it to <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">JPG</Link> or <Link href="/pdf-to-png" className="text-[#14D8C4] hover:underline">PNG</Link> directly from your phone — much easier to share in messaging apps than a PDF.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fix rotated pages</h3>
                  <p className="text-slate-600">
                    Scanned PDFs often have pages rotated sideways. Use <Link href="/rotate-pdf" className="text-[#14D8C4] hover:underline">Rotate PDF</Link> on your phone to fix the orientation before sharing.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Split a PDF Right from Your Phone</h2>
            <p className="text-slate-300 mb-6">Works on iPhone and Android — no app needed, no signup required.</p>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Scissors className="h-5 w-5" /> Split PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Split a PDF (Step-by-Step Guide)", href: "/learn/how-to-split-pdf" },
                { title: "How to Extract Pages from a PDF (Keep Only What You Need)", href: "/learn/extract-pages-from-pdf-guide" },
                { title: "Split a PDF for Email (Under Attachment Size Limits)", href: "/learn/split-pdf-for-email" },
                { title: "Split a PDF into Individual Pages (One Page per File)", href: "/learn/split-pdf-into-individual-pages" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
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
                { q: "Can I split a PDF on my phone without an app?", a: "Yes. PDF.it works entirely in your phone's browser — Safari on iPhone, Chrome on Android, or any other mobile browser. No app installation needed." },
                { q: "How do I split a PDF on iPhone?", a: "Open Safari, go to pdf.it.com/split-pdf, tap to upload your PDF from Files or iCloud Drive, select the pages you want, and download the split files." },
                { q: "How do I split a PDF on Android?", a: "Open Chrome or your preferred browser, go to pdf.it.com/split-pdf, tap to upload your PDF from your device storage or Google Drive, select pages, and download." },
                { q: "Is it free to split a PDF on mobile?", a: "Yes. PDF.it offers free PDF splitting with files up to 25MB. You get 3 free operations without an account, and 10 per day with a free account." },
                { q: "Where does the split PDF download to on my phone?", a: "On iPhone, split files download to your Files app (usually in the Downloads folder). On Android, files go to your Downloads folder, accessible through the Files app or notification tray." },
                { q: "Can I split a large PDF on mobile?", a: "Yes. Free users can split PDFs up to 25MB on mobile. Pro users can handle files up to 200MB. The processing happens on PDF.it's servers, so your phone's storage and speed don't affect the result." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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
