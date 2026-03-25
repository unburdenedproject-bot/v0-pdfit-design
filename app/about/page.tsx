import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Heart, Target, Crown, Gift, FileText, Building, GraduationCap, Briefcase, Shield, Workflow, ScanText } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About PDF.it — Free, Pro, Business & Enterprise PDF Tools",
  description:
    "Learn about PDF.it PDF tools, pricing tiers, and features. Compare Free, Pro, Business, and Enterprise plans for PDF conversion, OCR, eSign, redaction, workflow automation, and table extraction.",
  keywords: [
    "about PDF.it",
    "PDF tools",
    "free PDF tools",
    "PDF converter",
    "compress PDF",
    "merge PDF",
    "split PDF",
    "OCR PDF",
    "PDF redaction",
    "eSign PDF",
    "workflow automation",
    "table extraction",
    "Pro PDF tools",
    "Business PDF tools",
    "Enterprise PDF tools",
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF.it Plans: Free, Pro, Business & Enterprise PDF Tools</h1>
              <p className="text-xl text-slate-300">
                Browser-based PDF tools for conversion, compression, OCR, eSign, redaction, workflow automation, and enterprise document processing.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-6">
              PDF.it helps individuals, students, legal teams, accountants, operations teams, and growing businesses work with PDF files directly in the browser. You can convert PDF to Word, Excel, JPG, PNG, and TXT, compress PDF files for email and upload limits, merge and split PDF documents, run OCR on scanned PDFs, add eSignatures, redact sensitive content, automate workflows, and extract tables to Excel.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Our pricing is designed to scale with your workflow. The Free plan covers essential PDF tools, Pro unlocks advanced conversion and AI-powered utilities, Business adds team-grade document workflows, and Enterprise adds higher-volume processing, custom workflow templates, and premium support for demanding document operations.
            </p>

            {/* What you can do */}
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-4">What you can do with PDF.it</h2>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Convert PDFs to Word, Excel, JPG/PNG, TXT, and more</li>
                <li>✓ Compress PDFs to reduce file size for email and uploads</li>
                <li>✓ Merge and split PDFs for submissions and document packets</li>
                <li>✓ Run OCR to make scanned PDFs searchable</li>
                <li>✓ Protect, watermark, sign, compare, and redact PDFs for safer sharing</li>
                <li>✓ Automate recurring PDF workflows and extract tables to Excel</li>
              </ul>
            </div>

            {/* Tier Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compare PDF.it Plans</h2>
              <p className="text-slate-600 mb-6">
                PDF.it offers four pricing tiers so you can start with free PDF tools and upgrade only when your document volume, file size, compliance, or workflow complexity increases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Free Plan</h3>
                </div>
                <p className="text-green-900 font-medium text-sm mb-4">Best for occasional PDF conversion, compression, merging, splitting, and everyday document tasks.</p>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• 10 conversions per day</li>
                  <li>• Essential PDF tools</li>
                  <li>• Files up to 25MB</li>
                  <li>• No login required for free tools</li>
                  <li>• Best for students, personal use, and light office work</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Pro — $7.99/month</h3>
                </div>
                <p className="text-orange-900 font-medium text-sm mb-4">Best for freelancers, job seekers, and professionals who need advanced PDF conversion and higher usage limits.</p>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Unlimited conversions</li>
                  <li>• All PDF tools</li>
                  <li>• Files up to 200MB</li>
                  <li>• OCR, watermarking, and Office to PDF tools</li>
                  <li>• ATS Resume Optimizer, Resume Builder, URL to PDF, QR Code Generator</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">Business — $13.99/month</h3>
                </div>
                <p className="text-indigo-900 font-medium text-sm mb-4">Best for teams that handle contracts, invoices, reports, scanned documents, and repeatable document workflows.</p>
                <ul className="space-y-2 text-indigo-800 text-sm">
                  <li>• Everything in Pro</li>
                  <li>• Files up to 1GB</li>
                  <li>• Workflow automation</li>
                  <li>• Table extraction, PDF comparison, eSign, redaction</li>
                  <li>• Built for operations, finance, HR, and document-heavy teams</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-amber-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold text-white">Enterprise — $49.99/month</h3>
                </div>
                <p className="text-slate-200 font-medium text-sm mb-4">Best for law firms, accountants, labs, and organizations that need higher-volume extraction, priority handling, and premium workflow support.</p>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li>• Everything in Business</li>
                  <li>• Table extraction to Excel: 2,000 pages per month</li>
                  <li>• Custom workflow templates</li>
                  <li>• Priority processing queue</li>
                  <li>• Dedicated email support with 24-hour response time</li>
                </ul>
              </div>
            </div>

            {/* Plan descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ScanText className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Advanced PDF Conversion</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  PDF.it covers common PDF workflows like PDF to Word, PDF to Excel, PDF to PowerPoint, Word to PDF, Excel to PDF, JPG to PDF, PNG to PDF, URL to PDF, and OCR for scanned documents. This makes the platform useful for document cleanup, editing, sharing, and archiving.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Business Workflow Tools</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Business and Enterprise plans add workflow automation, table extraction, PDF comparison, eSign, and PDF redaction. These features are designed for legal documents, contracts, invoice processing, compliance workflows, audit support, and recurring PDF operations.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Enterprise-Grade Capacity</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enterprise includes higher monthly table extraction limits, custom workflow templates, faster queue priority, and dedicated support. It is built for firms and teams that need reliable browser-based PDF processing without adding desktop software to every workstation.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h2>
              <div className="bg-[#191B4D] border border-[#252A6A] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    To provide reliable, browser-based PDF tools that work quickly and simply - no installs, no plugins, no technical expertise required. We want PDF conversion, OCR, redaction, eSign, table extraction, and workflow automation to be easy to access for individuals and teams alike.
                  </p>
                </div>
              </div>
            </div>

            {/* Built for real workflows */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Built for Real Workflows</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-7 w-7 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-900">Students & Researchers</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Convert papers, extract tables, compress large documents</li>
                    <li>• Split multi-chapter PDFs into separate files</li>
                    <li>• OCR scanned lecture notes and textbooks</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-7 w-7 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Businesses</h3>
                  </div>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Process invoices, contracts, onboarding packets, and reports</li>
                    <li>• Combine PDFs for submissions and client deliverables</li>
                    <li>• Run OCR, eSign, redaction, and workflow automation</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-7 w-7 text-purple-600" />
                    <h3 className="text-lg font-bold text-purple-900">Freelancers</h3>
                  </div>
                  <ul className="space-y-2 text-purple-800 text-sm">
                    <li>• Prep client deliverables</li>
                    <li>• Watermark and password-protect files</li>
                    <li>• Compress portfolios for sharing</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-7 w-7 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-900">Personal Use</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li>• Forms, organization, and sharing</li>
                    <li>• Convert and compress everyday documents</li>
                    <li>• Protect personal files with passwords</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Which PDF.it Plan Should You Choose?</h2>
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="space-y-4 text-slate-600">
                  <p>
                    Choose <strong>Free</strong> if you need a reliable online PDF converter, PDF compressor, PDF merger, PDF splitter, or password protection tool for everyday files.
                  </p>
                  <p>
                    Choose <strong>Pro</strong> if you need more advanced PDF tools like OCR, Office-to-PDF conversion, AI resume tools, larger file uploads, and unlimited usage.
                  </p>
                  <p>
                    Choose <strong>Business</strong> if your team handles contracts, invoices, scanned records, comparisons, signatures, or repeatable PDF workflows.
                  </p>
                  <p>
                    Choose <strong>Enterprise</strong> if you need premium support, workflow templates, high-volume table extraction, and a stronger operational setup for legal, accounting, finance, lab, or compliance-heavy work.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-[#191B4D] rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Start converting for free
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  No account needed for free tools. Upgrade when you need unlimited access, larger files, OCR, eSign, redaction, table extraction, workflow automation, or Enterprise support.
                </p>
                <Link href="/#tools">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                    Start Converting Free →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
