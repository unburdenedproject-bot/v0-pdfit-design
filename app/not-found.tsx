import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileQuestion, Home, Mail, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <FileQuestion className="h-12 w-12 text-orange-600" />
              </div>

              <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Page Not Found</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL
                might be incorrect.
              </p>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
                <Link
                  href="/tools"
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Search className="h-4 w-4" />
                  Browse Tools
                </Link>
                <a
                  href="mailto:contact@pdf.it.com"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-slate-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Get Help
                </a>
              </div>

              {/* Popular Tools */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Popular PDF Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/pdf-to-word" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                    PDF to Word
                  </Link>
                  <Link href="/pdf-to-excel" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                    PDF to Excel
                  </Link>
                  <Link href="/compress-pdf" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                    Compress PDF
                  </Link>
                  <Link href="/merge-pdf" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                    Merge PDF
                  </Link>
                </div>
              </div>

              {/* Contact Support */}
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 mb-3">
                  <strong>Need help?</strong> Our support team is here to assist you.
                </p>
                <p className="text-blue-700">
                  Contact us at{" "}
                  <a
                    href="mailto:contact@pdf.it.com"
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    contact@pdf.it.com
                  </a>{" "}
                  and we'll help you find what you're looking for.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
