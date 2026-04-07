import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Welcome to PDF.it — PDF Tools Built for Professionals | PDF.it Blog",
  description:
    "PDF.it launch announcement: discover why we built a trilingual PDF platform with 30+ tools, 4 pricing tiers, and enterprise features for legal, accounting, and business teams.",
}

export default function WelcomeToPDFitPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section className="text-white py-12 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#14D8C4]/20 text-[#14D8C4]/40 text-xs font-bold px-3 py-1 rounded-full">
                  Announcement
                </span>
                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  January 15, 2024
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black">
                Welcome to PDF.it — PDF Tools Built for Professionals
              </h1>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-3xl mx-auto">
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                We built PDF.it because we saw a gap. PDF tools existed, but they were either too expensive (Adobe),
                too limited (free tools), or English-only. We wanted something better — a platform that gives
                professionals real power over their documents without locking them into overpriced subscriptions or
                stripping away the features they actually need.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">What Makes PDF.it Different</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                There are hundreds of PDF tools on the internet. Most of them do the same basic things — merge, split,
                compress. PDF.it goes further in four key ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Trilingual from day one (EN/ES/PT).</strong> Every page, every tool, every FAQ — available in
                  English, Spanish, and Portuguese. We are targeting professionals across the Americas and beyond, not
                  just English-speaking markets.
                </li>
                <li>
                  <strong>4 flexible pricing tiers from Free to Enterprise.</strong> Start with 10 free conversions per
                  day. Scale up to Pro, Business, or Enterprise only when your workload demands it. No pressure, no
                  tricks.
                </li>
                <li>
                  <strong>Tools that professionals actually need.</strong> Table extraction to Excel, electronic
                  signatures, PDF redaction, workflow automation with preset templates, PDF comparison — these are the
                  tools that legal teams, accountants, and researchers ask for every day.
                </li>
                <li>
                  <strong>Privacy first.</strong> Your files are auto-deleted after processing. We do not store your
                  documents, we do not read them, and we do not sell your data. Period.
                </li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Who We Built This For</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                PDF.it was designed with real use cases in mind. We talked to professionals in different industries
                and built features around the problems they described:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Legal teams</strong> processing contracts, court filings, and case documents — who need
                  redaction, flattening, and watermarking in a single workflow.
                </li>
                <li>
                  <strong>Accountants</strong> extracting tables from financial reports and invoices — who are tired of
                  manually copying numbers into Excel.
                </li>
                <li>
                  <strong>Research labs</strong> finalizing papers, converting formats, and adding signatures to
                  submission forms.
                </li>
                <li>
                  <strong>Students</strong> converting assignments between formats, compressing files for email
                  submission, and scanning handwritten notes with OCR.
                </li>
                <li>
                  <strong>Small businesses</strong> managing documents daily — merging invoices, splitting reports,
                  protecting sensitive files with passwords.
                </li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">What&#39;s Available at Launch</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                PDF.it launches with a comprehensive toolkit that covers the full document lifecycle:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>30+ PDF tools — merge, split, compress, rotate, convert, protect, unlock, watermark, and more</li>
                <li>OCR scanning — turn scanned documents and images into searchable, editable text</li>
                <li>QR code generation — create QR codes directly from the platform</li>
                <li>Table extraction to Excel — powered by Google Document AI, with formatted output and styled headers</li>
                <li>Workflow automation — chain multiple tools together with reusable templates for repetitive tasks</li>
                <li>eSign — draw, type, or upload your signature and place it on any PDF</li>
                <li>PDF comparison — compare two documents side-by-side to spot differences instantly</li>
                <li>PDF redaction — permanently remove sensitive information from documents</li>
                <li>URL to PDF conversion — capture any public webpage as a clean PDF</li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Our Pricing Philosophy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We believe in transparent, fair pricing. Here is how it works:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Start free</strong> with 10 conversions per day. No credit card required. Use basic tools as
                  long as you want.
                </li>
                <li>
                  <strong>Upgrade only when you need more.</strong> Pro at $3.99/month unlocks unlimited conversions,
                  larger file sizes, and premium tools like OCR and PDF-to-Word.
                </li>
                <li>
                  <strong>No hidden fees, no surprise charges.</strong> What you see on the pricing page is what you
                  pay. Cancel anytime.
                </li>
                <li>
                  <strong>Enterprise at $49.99/month</strong> includes 2,000 table extraction pages per month,
                  industry-specific workflow templates, priority processing, and dedicated email support.
                </li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Get Started</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                PDF.it is live and ready to use. You can start with the free tier right now — no signup required for
                your first 3 conversions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Check out our{" "}
                <Link href="/pricing" className="text-[#14D8C4] font-semibold hover:underline">
                  pricing page
                </Link>{" "}
                to see which plan fits your needs, or head to the{" "}
                <Link href="/" className="text-[#14D8C4] font-semibold hover:underline">
                  homepage
                </Link>{" "}
                to explore all available tools.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We built PDF.it for you. We hope it saves you time, money, and frustration — every single day.
              </p>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#14D8C4] font-semibold hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
