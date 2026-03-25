import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PDF.it Blog — PDF Tips, New Features & Product Updates",
  description:
    "News, updates, and tips from the PDF.it team. Learn about new features, PDF best practices, AI resume tools, table extraction, and product announcements.",
  keywords: [
    "PDF.it blog",
    "PDF tips",
    "PDF tools updates",
    "compress PDF tips",
    "merge PDF guide",
    "AI resume optimizer",
    "table extraction PDF",
    "eSign documents",
    "PDF best practices",
  ],
  openGraph: {
    title: "PDF.it Blog — PDF Tips, New Features & Product Updates",
    description: "News, updates, and tips from the PDF.it team. Learn about new features and PDF best practices.",
    url: "https://pdf.it.com/blog",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1200, height: 630, alt: "PDF.it Blog" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF.it Blog — PDF Tips, New Features & Product Updates",
    description: "News, updates, and tips from the PDF.it team.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/blog",
    languages: {
      en: "https://pdf.it.com/blog",
      es: "https://pdf.it.com/es/blog",
      pt: "https://pdf.it.com/br/blog",
    },
  },
}

const posts = [
  {
    slug: "welcome-to-pdfit",
    title: "Welcome to PDF.it — PDF Tools Built for Professionals",
    excerpt: "We built PDF.it because professionals deserve better PDF tools. Here's our story and what makes us different.",
    date: "2026-04-01",
    category: "Announcement",
  },
  {
    slug: "table-extraction-excel",
    title: "New Feature: Extract Tables from PDFs to Excel with AI",
    excerpt: "Our new Table Extraction tool uses Google Document AI to detect and export tables from any PDF into clean, formatted Excel spreadsheets.",
    date: "2026-04-01",
    category: "Product",
  },
  {
    slug: "why-three-languages",
    title: "Why PDF.it Speaks English, Spanish, and Portuguese",
    excerpt: "Most PDF tools only work in English. We built PDF.it for professionals across the Americas and beyond — here's why multilingual matters.",
    date: "2026-04-01",
    category: "Company",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Blog</h1>
              <p className="text-xl text-slate-300">
                News, updates, and tips from the PDF.it team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group bg-white rounded-2xl border border-slate-200 p-8 hover:border-orange-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm">
                    Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
