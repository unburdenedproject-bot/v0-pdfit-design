import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PenTool } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "eSign Documents — Coming Soon | OmnisPDF",
  description: "Add legally binding electronic signatures to PDFs. Coming soon to OmnisPDF Business.",
}

export default function EsignPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PenTool className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Coming Soon
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">eSign Documents</h1>
              <p className="text-xl text-slate-300 mb-8">
                Add legally binding electronic signatures to PDFs. This tool is part of the OmnisPDF Business plan and is currently under development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors"
                >
                  View Business Plan
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all border border-white/20"
                >
                  Back to Tools
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
