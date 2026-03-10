import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Unlock a PDF for Printing (Remove Print Restrictions) | OmnisPDF",
  description:
    "Can't print a PDF? Learn how to remove print restrictions from a PDF file online. Step-by-step guide to unlocking PDFs for printing — fast, free, no software.",
  keywords: "unlock pdf for printing, pdf wont print, remove print restriction pdf, enable pdf printing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why can't I print my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Your PDF likely has a permissions restriction set by the creator that disables printing. This is done through PDF security settings and prevents all users from printing the document, even though they can view it on screen." }
    },
    {
      "@type": "Question",
      "name": "How do I remove print restrictions from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload the PDF to OmnisPDF's Unlock PDF tool. It will automatically detect and remove the print restriction. Download the unlocked file and print it normally from any PDF reader." }
    },
    {
      "@type": "Question",
      "name": "Do I need the password to unlock a PDF for printing?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the PDF only has permissions restrictions (you can view but not print), OmnisPDF can often remove the print restriction without needing a password. If the PDF requires a password to open, you'll need that password first." }
    },
    {
      "@type": "Question",
      "name": "Will the print quality change after unlocking?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Unlocking a PDF only removes the security restriction — it doesn't change the content, resolution, or quality. Your printed document will look exactly as the creator intended." }
    },
    {
      "@type": "Question",
      "name": "Can I unlock a PDF for printing on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in any mobile browser. Upload the PDF, unlock it, and download the printable version. You can then print it using your phone's built-in print feature or transfer it to a computer." }
    },
    {
      "@type": "Question",
      "name": "Is it legal to remove print restrictions from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you have legitimate access to the document and need to print it for personal, educational, or business use, removing the print restriction is legal. OmnisPDF is designed for users who need to print their own documents or files shared with them." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Unlock a PDF for Printing",
  "description": "Remove print restrictions from a PDF in 3 simple steps using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload the restricted PDF",
      "text": "Go to OmnisPDF's Unlock PDF tool and upload the PDF file that won't let you print."
    },
    {
      "@type": "HowToStep",
      "name": "Remove the print restriction",
      "text": "OmnisPDF automatically detects the print restriction and removes it. If the file has an open password, enter it when prompted."
    },
    {
      "@type": "HowToStep",
      "name": "Download and print",
      "text": "Download the unlocked PDF and open it in any PDF reader. You can now print it normally using Ctrl+P or File > Print."
    }
  ]
}

export default function UnlockPDFForPrintingPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Unlock PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unlock a PDF for Printing (Remove Print Restrictions)</h1>
              <p className="text-xl text-slate-300">
                Hit &quot;Print&quot; and nothing happened? Your PDF probably has a print restriction. Here&apos;s how to remove it in under a minute.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need to print right now? Skip the guide and unlock your PDF.</p>
            </div>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unlock PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why PDF won't print */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Your PDF Won&apos;t Print</h2>
              <p className="text-slate-600 mb-4">
                When you try to print a PDF and nothing happens — or the print option is grayed out — it&apos;s because the PDF creator added a permissions restriction. This is a security feature built into the PDF format that lets authors control what readers can do with the file.
              </p>
              <p className="text-slate-600 mb-4">
                Common symptoms of a print-restricted PDF:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Print button is grayed out</strong> in Adobe Reader, Chrome&apos;s PDF viewer, or Preview on Mac.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Error message appears</strong> saying &quot;Printing is not allowed&quot; or &quot;This document has restrictions that prevent printing.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Ctrl+P or Cmd+P does nothing</strong> when the PDF is open in your viewer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>You can view and scroll</strong> through the document normally, but any attempt to print fails.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                The good news: this is a software restriction, not a hardware problem. OmnisPDF can remove it in seconds.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Unlock a PDF for Printing (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload the restricted PDF",
                    desc: "Go to OmnisPDF's Unlock PDF tool and drag your file into the upload area. The tool accepts files up to 25MB for free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Let OmnisPDF remove the restriction",
                    desc: "OmnisPDF automatically detects the print restriction and removes it. If the PDF also requires a password to open (not just to print), you'll need to enter that password. Most print-restricted PDFs don't require an open password.",
                  },
                  {
                    title: "Download and print",
                    desc: "Download the unlocked PDF and open it in any PDF reader — Adobe Reader, Chrome, Preview, or any other app. Use Ctrl+P (Windows) or Cmd+P (Mac) to print normally. The print button will no longer be grayed out.",
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

            {/* Who needs this */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Who Needs to Unlock PDFs for Printing?</h2>
              <p className="text-slate-600 mb-4">
                Print restrictions are more common than you might think. Here are real-world scenarios where people run into this problem:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Students printing lecture notes.</strong> Professors sometimes distribute PDFs with print restrictions to discourage redistribution. If you need a physical copy for studying, unlock the PDF first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Employees printing reports.</strong> Company reports, HR documents, or training manuals may have print restrictions that make it impossible to hand out physical copies in meetings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>People printing government forms.</strong> Some government agencies distribute PDF forms that must be filled out and submitted on paper, but accidentally leave print restrictions enabled.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Anyone printing receipts or tickets.</strong> E-tickets, booking confirmations, and invoices sometimes come as print-restricted PDFs, making it impossible to produce a hard copy.</span>
                </li>
              </ul>
            </section>

            {/* Tips for printing after unlocking */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Printing Your Unlocked PDF</h2>
              <p className="text-slate-600 mb-4">
                Once you&apos;ve removed the print restriction, here are some tips to get the best print results:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Check the page size.</strong> Make sure your printer is set to the same page size as the PDF (usually A4 or Letter). Mismatched sizes can cut off content or add unwanted margins.</li>
                <li>✓ <strong>Use &quot;Fit to page&quot; in print settings.</strong> This ensures the entire page content prints without being cut off, even if the PDF dimensions don&apos;t exactly match your paper size.</li>
                <li>✓ <strong>Print a test page first.</strong> Before printing a 50-page document, print page 1 to check that everything looks correct.</li>
                <li>✓ <strong>Compress before printing large files.</strong> If the PDF is very large (50MB+), it may take a long time to send to the printer. Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce the file size first — this won&apos;t affect print quality.</li>
                <li>✓ <strong>Flatten forms before printing.</strong> If the PDF has form fields, use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to make sure all filled-in data prints correctly.</li>
              </ul>
            </section>

            {/* Alternative approaches */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other Ways to Handle Print-Restricted PDFs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert to an Image</h3>
                  <p className="text-slate-600">
                    If you only need to print a few pages, you can convert the PDF to images using <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link> or <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link>, then print the images. This works as a workaround but the quality may be slightly lower than printing the PDF directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert to Word</h3>
                  <p className="text-slate-600">
                    Another option is to convert the PDF to a Word document using <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> and print from Microsoft Word. This is useful if you also need to edit the content before printing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Ask the Sender for an Unlocked Version</h3>
                  <p className="text-slate-600">
                    If the PDF came from a colleague, client, or organization, you can ask them to resend the file without print restrictions. Many people add restrictions by default without realizing it.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Print Your PDF?</h2>
            <p className="text-slate-300 mb-6">Remove the print restriction and get your document printed in seconds — free, no signup required.</p>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Unlock className="h-5 w-5" /> Unlock PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Unlock a PDF Online (Remove Restrictions)", href: "/learn/how-to-unlock-pdf" },
                { title: "Forgot Your PDF Password? Here's What You Can Do", href: "/learn/unlock-pdf-forgot-password" },
                { title: "Unlock a PDF on Your Phone (iPhone & Android)", href: "/learn/unlock-pdf-on-mobile" },
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
                { q: "Why can't I print my PDF?", a: "Your PDF likely has a permissions restriction set by the creator that disables printing. This is done through PDF security settings and prevents all users from printing the document, even though they can view it on screen." },
                { q: "How do I remove print restrictions from a PDF?", a: "Upload the PDF to OmnisPDF's Unlock PDF tool. It will automatically detect and remove the print restriction. Download the unlocked file and print it normally from any PDF reader." },
                { q: "Do I need the password to unlock a PDF for printing?", a: "If the PDF only has permissions restrictions (you can view but not print), OmnisPDF can often remove the print restriction without needing a password. If the PDF requires a password to open, you'll need that password first." },
                { q: "Will the print quality change after unlocking?", a: "No. Unlocking a PDF only removes the security restriction — it doesn't change the content, resolution, or quality. Your printed document will look exactly as the creator intended." },
                { q: "Can I unlock a PDF for printing on my phone?", a: "Yes. OmnisPDF works in any mobile browser. Upload the PDF, unlock it, and download the printable version. You can then print it using your phone's built-in print feature or transfer it to a computer." },
                { q: "Is it legal to remove print restrictions from a PDF?", a: "If you have legitimate access to the document and need to print it for personal, educational, or business use, removing the print restriction is legal. OmnisPDF is designed for users who need to print their own documents or files shared with them." },
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
