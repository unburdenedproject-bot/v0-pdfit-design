import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Heart, Target, Crown, Gift, FileText, Building, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About OmnisPDF — Free PDF Tools & Pro Features",
  description:
    "OmnisPDF helps you convert, compress, merge, split, OCR, and secure PDFs in your browser. Start free, upgrade to Pro when you need more.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Free PDF Tools & Pro Features</h1>
              <p className="text-xl text-slate-300">
                Start with free PDF conversion tools, then upgrade when you need larger files and advanced workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-6">
              OmnisPDF helps you convert, compress, merge, split, OCR, and secure PDFs directly in your browser. Use the free tier for everyday tasks, and switch to Pro when you need higher limits and advanced workflows.
            </p>

            {/* What you can do */}
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-4">What you can do with OmnisPDF</h2>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Convert PDFs to Word, Excel, JPG/PNG, TXT, and more</li>
                <li>✓ Compress PDFs to reduce file size for email and uploads</li>
                <li>✓ Merge and split PDFs for submissions and document packets</li>
                <li>✓ Run OCR to make scanned PDFs searchable</li>
                <li>✓ Protect and watermark PDFs for safer sharing</li>
              </ul>
            </div>

            {/* Free vs Pro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Free Plan</h3>
                </div>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• 10 conversions per day</li>
                  <li>• Essential PDF tools</li>
                  <li>• Files up to 25MB</li>
                  <li>• No login required for free tools</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Pro — $7.99/month</h3>
                </div>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Unlimited conversions</li>
                  <li>• All PDF tools</li>
                  <li>• Files up to 200MB</li>
                  <li>• OCR, Watermark, Word/Excel/PPT to PDF</li>
                </ul>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h2>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-slate-800 text-lg leading-relaxed">
                    To provide reliable, browser-based PDF tools that work quickly and simply — no installs, no plugins, no technical expertise required.
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
                    <li>• Process invoices and contracts</li>
                    <li>• Combine PDFs for submissions</li>
                    <li>• Run OCR on scanned documents</li>
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

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Start converting for free
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  No account needed for free tools. Upgrade to Pro when you need unlimited access and advanced features.
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
