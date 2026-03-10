import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Merge PDFs on iPhone (Fast Browser Method) | OmnisPDF",
  description:
    "Learn how to merge PDFs on iPhone using Safari or Chrome — no app needed. Step-by-step guide to combining PDFs on your phone for free.",
  keywords: "merge pdf on iphone, combine pdfs iphone, merge pdf ios, merge pdf on phone free",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I merge PDFs on my iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works directly in Safari or Chrome on your iPhone. Go to omnispdf.com/merge-pdf, upload your files, arrange the order, and download the merged PDF — no app installation required." }
    },
    {
      "@type": "Question",
      "name": "Where do I find PDFs on my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs on iPhone are typically in the Files app (under 'On My iPhone' or iCloud Drive), in your email attachments, in messaging apps (WhatsApp, iMessage), or in the Downloads folder in Safari. Use the Files app to browse all locations." }
    },
    {
      "@type": "Question",
      "name": "How do I upload PDFs from my iPhone to OmnisPDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "When you tap the upload area on OmnisPDF, your iPhone will show a file picker. You can browse the Files app, recent downloads, iCloud Drive, or other cloud storage. Select the PDFs you want to merge and they'll upload automatically." }
    },
    {
      "@type": "Question",
      "name": "Where does the merged PDF download to on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "The merged PDF downloads to your iPhone's Downloads folder, accessible through the Files app. In Safari, you can also find recent downloads by tapping the download arrow icon in the address bar." }
    },
    {
      "@type": "Question",
      "name": "Can I share the merged PDF directly from my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After downloading, open the merged PDF from the Files app, tap the share button, and send it via email, AirDrop, WhatsApp, iMessage, or any other sharing option on your iPhone." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit when merging PDFs on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload files up to 25MB each. Pro users can upload files up to 200MB. If your merged file is too large, use OmnisPDF's Compress PDF tool to reduce the size before sharing." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Merge PDF Files on iPhone",
  "description": "Combine multiple PDFs into one file on your iPhone using Safari and OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open OmnisPDF in Safari",
      "text": "Open Safari on your iPhone and go to omnispdf.com/merge-pdf. Tap the upload area to open the file picker."
    },
    {
      "@type": "HowToStep",
      "name": "Upload and arrange your PDFs",
      "text": "Select the PDF files you want to merge from the Files app, iCloud Drive, or your Downloads folder. Arrange them in the correct order by dragging."
    },
    {
      "@type": "HowToStep",
      "name": "Merge and download",
      "text": "Tap Merge PDF and wait a few seconds. Download the merged file — it saves to your Downloads folder in the Files app. Share it via email, AirDrop, or any messaging app."
    }
  ]
}

export default function MergePDFOnIPhonePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Merge PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Merge PDF Files on iPhone (Fast Browser Method)</h1>
              <p className="text-xl text-slate-300">
                No app needed. Open Safari, upload your PDFs, combine them, and download the merged file — all in under a minute, right from your iPhone.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your iPhone right now? Go straight to the tool.</p>
            </div>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Merge PDFs Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why browser method */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Use a Browser Instead of an App?</h2>
              <p className="text-slate-600 mb-4">
                You could download a PDF app from the App Store, but there are good reasons to skip that:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>No installation needed.</strong> Most PDF apps are 50-200MB and require creating yet another account. OmnisPDF works instantly in Safari.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>No storage wasted.</strong> Your iPhone storage stays clean. The browser tool doesn't take up any space on your device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>No subscriptions traps.</strong> Many "free" PDF apps lock basic features behind weekly subscriptions. OmnisPDF lets you merge files for free with no hidden costs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Works on any device.</strong> The same tool works on your iPhone, iPad, Android phone, or computer — no switching between apps.</span>
                </li>
              </ul>
            </section>

            {/* Finding PDFs on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Where to Find Your PDFs on iPhone</h2>
              <p className="text-slate-600 mb-4">
                Before you can merge PDFs, you need to know where they are on your iPhone. Here are the most common locations:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Files app.</strong> Open the Files app and check "On My iPhone" and "iCloud Drive." This is the main place Apple stores downloaded documents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Safari Downloads.</strong> If you downloaded a PDF from a website, tap the download arrow icon (next to the address bar in Safari) to see recent downloads.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Email attachments.</strong> PDFs received via email can be saved to the Files app. Open the email, long-press the attachment, and tap "Save to Files."</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Messaging apps.</strong> PDFs shared via WhatsApp, iMessage, or Telegram are stored in those apps. Save them to the Files app first for easy access.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Cloud storage.</strong> Google Drive, Dropbox, and OneDrive files are accessible through the Files app if you've connected those services.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Merge PDFs on iPhone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open Safari and go to OmnisPDF",
                    desc: "Open Safari on your iPhone and navigate to omnispdf.com/merge-pdf. The page is fully mobile-optimized — it works perfectly on any iPhone screen size.",
                  },
                  {
                    title: "Upload your PDF files",
                    desc: "Tap the upload area. Your iPhone will show a file picker where you can browse the Files app, iCloud Drive, or recent downloads. Select all the PDFs you want to merge. You can upload them one at a time or select multiple files.",
                  },
                  {
                    title: "Arrange the files and tap Merge",
                    desc: "Drag the files into the correct order. The first file in the list becomes the first pages of the merged document. When the order is right, tap Merge PDF. The merged file will download to your Downloads folder in the Files app.",
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

            {/* Downloading and finding the merged file */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Finding Your Merged File After Download</h2>
              <p className="text-slate-600 mb-4">
                After tapping Download, your merged PDF is saved on your iPhone. Here's where to find it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Safari download indicator.</strong> Look for the blue download arrow icon next to the Safari address bar. Tap it to see your recent downloads and open the file.</li>
                <li>✓ <strong>Files app.</strong> Open the Files app and navigate to "On My iPhone" then "Downloads." Your merged PDF will be there.</li>
                <li>✓ <strong>iCloud Drive.</strong> If your Downloads folder syncs to iCloud, the file will also be accessible on your iPad, Mac, or icloud.com.</li>
              </ul>
            </section>

            {/* Sharing the merged file */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Sharing Your Merged PDF</h2>
              <p className="text-slate-600 mb-4">
                Once you have the merged file, sharing it from your iPhone is easy:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Email.</strong> Open the Files app, find your merged PDF, tap the share button, and select Mail. The PDF will be attached to a new email.</li>
                <li>✓ <strong>AirDrop.</strong> Use the share button to AirDrop the file to a nearby Mac, iPad, or another iPhone.</li>
                <li>✓ <strong>WhatsApp or iMessage.</strong> Share directly to any messaging app using the iOS share sheet.</li>
                <li>✓ <strong>Upload to a portal.</strong> If you need to submit the file to a website, open the portal in Safari and upload the merged PDF from your Downloads folder.</li>
              </ul>
            </section>

            {/* If the file is too large */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Merged File Too Large to Share?</h2>
              <p className="text-slate-600 mb-4">
                Email attachments and upload portals have size limits. If your merged PDF is too large:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Compress it.</strong> Go to <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> in Safari and upload the merged file. Compression can reduce the size by 50-80%.</li>
                <li>✓ <strong>Split if needed.</strong> If compression isn't enough, use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to break the document into smaller parts.</li>
                <li>✓ <strong>All from your iPhone.</strong> Every OmnisPDF tool works in Safari — you don't need to switch to a computer.</li>
              </ul>
            </section>

            {/* Tips for iPhone users */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">iPhone-Specific Tips</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Save Email Attachments First</h3>
                  <p className="text-slate-600">
                    If your PDFs are in email, save them to the Files app before merging. Open the email, long-press the PDF attachment, and tap "Save to Files." Choose a folder you'll remember (like Downloads). Then you can easily find them when uploading to OmnisPDF.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Landscape Mode for Better Control</h3>
                  <p className="text-slate-600">
                    When arranging files in the merge tool, turning your iPhone sideways gives you more screen space to see file names and drag them into the right order.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Check Your Work in the Files App</h3>
                  <p className="text-slate-600">
                    After downloading the merged PDF, open it in the Files app and scroll through every page. The iPhone's built-in PDF viewer shows a page thumbnail strip that makes it easy to verify the order is correct.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Merge PDFs on Your iPhone?</h2>
            <p className="text-slate-300 mb-6">Open the tool in Safari and combine your files in under a minute — free, no app needed.</p>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Merge className="h-5 w-5" /> Merge PDFs Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Merge PDF Files Online (Combine PDFs into One)", href: "/learn/how-to-merge-pdf-files" },
                { title: "Merge PDFs in the Correct Order (No Page Mistakes)", href: "/learn/merge-pdfs-in-order" },
                { title: "How to Merge Scanned PDFs (And Keep Them Readable)", href: "/learn/merge-scanned-pdfs" },
                { title: "Combine PDFs for Submissions (School, Visa, Job Portals)", href: "/learn/combine-pdfs-for-submission" },
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
                { q: "Can I merge PDFs on my iPhone without an app?", a: "Yes. OmnisPDF works directly in Safari or Chrome on your iPhone. Go to omnispdf.com/merge-pdf, upload your files, arrange the order, and download the merged PDF — no app installation required." },
                { q: "Where do I find PDFs on my iPhone?", a: "PDFs on iPhone are typically in the Files app (under 'On My iPhone' or iCloud Drive), in your email attachments, in messaging apps (WhatsApp, iMessage), or in the Downloads folder in Safari. Use the Files app to browse all locations." },
                { q: "How do I upload PDFs from my iPhone to OmnisPDF?", a: "When you tap the upload area on OmnisPDF, your iPhone will show a file picker. You can browse the Files app, recent downloads, iCloud Drive, or other cloud storage. Select the PDFs you want to merge and they'll upload automatically." },
                { q: "Where does the merged PDF download to on iPhone?", a: "The merged PDF downloads to your iPhone's Downloads folder, accessible through the Files app. In Safari, you can also find recent downloads by tapping the download arrow icon in the address bar." },
                { q: "Can I share the merged PDF directly from my iPhone?", a: "Yes. After downloading, open the merged PDF from the Files app, tap the share button, and send it via email, AirDrop, WhatsApp, iMessage, or any other sharing option on your iPhone." },
                { q: "Is there a file size limit when merging PDFs on iPhone?", a: "Free users can upload files up to 25MB each. Pro users can upload files up to 200MB. If your merged file is too large, use OmnisPDF's Compress PDF tool to reduce the size before sharing." },
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
