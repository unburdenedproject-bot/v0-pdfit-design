import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, ArrowRight, BookOpen, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PDF.it Blog — PDF Tips, New Features & Product Updates",
  description:
    "News, updates, and tips from the PDF.it team. Learn about new features, PDF best practices, AI resume tools, table extraction, and product announcements.",
  openGraph: {
    title: "PDF.it Blog — PDF Tips, New Features & Product Updates",
    description: "News, updates, and tips from the PDF.it team. Learn about new features and PDF best practices.",
    url: "https://pdf.it.com/blog",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it Blog" }],
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
    slug: "protect-sensitive-documents",
    title: "How to Protect Sensitive Documents Before Sharing",
    excerpt: "Three layers of PDF security: password protection, permanent redaction, and watermarking. Learn when to use each to keep sensitive data safe.",
    date: "2025-03-20",
    category: "Security",
  },
  {
    slug: "scanned-pdf-searchable-ocr",
    title: "How to Make a Scanned PDF Searchable with OCR",
    excerpt: "Turn scanned documents into searchable, copyable PDFs using OCR. Works with receipts, contracts, old paperwork, and documents in 16+ languages.",
    date: "2025-02-12",
    category: "Guide",
  },
  {
    slug: "compress-pdf-email",
    title: "How to Compress a PDF for Email Attachments",
    excerpt: "Learn how to reduce PDF file size to fit Gmail, Outlook, and Yahoo attachment limits — step by step with compression tips.",
    date: "2024-10-05",
    category: "Guide",
  },
  {
    slug: "welcome-to-pdfit",
    title: "Welcome to PDF.it — PDF Tools Built for Professionals",
    excerpt: "We built PDF.it because professionals deserve better PDF tools. Here's our story and what makes us different.",
    date: "2024-01-15",
    category: "Announcement",
  },
  {
    slug: "table-extraction-excel",
    title: "New Feature: Extract Tables from PDFs to Excel with AI",
    excerpt: "Our new Table Extraction tool uses Google Document AI to detect and export tables from any PDF into clean, formatted Excel spreadsheets.",
    date: "2024-06-20",
    category: "Product",
  },
  {
    slug: "why-three-languages",
    title: "Why PDF.it Speaks English, Spanish, and Portuguese",
    excerpt: "Most PDF tools only work in English. We built PDF.it for professionals across the Americas and beyond — here's why multilingual matters.",
    date: "2024-03-10",
    category: "Company",
  },
]

const featured = posts[0]
const remaining = posts.slice(1)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0E0F1E]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0E0F1E] text-white pt-24 pb-16">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(10,74,92,0.5) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(30,111,217,0.3) 0%, transparent 60%)",
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.15) 0%, rgba(10,74,92,0.3) 100%)", border: "1px solid rgba(20,216,196,0.2)" }}>
                <BookOpen className="h-8 w-8 text-[#14D8C4]" style={{ filter: "drop-shadow(0 0 8px rgba(20,216,196,0.5))" }} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight">Blog</h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
                News, product updates, and practical tips for working with PDFs — from the PDF.it team.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: "rgba(20,216,196,0.1)", border: "1px solid rgba(20,216,196,0.25)", color: "#14D8C4" }}>
                {posts.length} articles
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="relative bg-[#0E0F1E] pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(30,111,217,0.3), rgba(232,129,58,0.2))" }}>
                <Link href={`/blog/${featured.slug}`} className="block group rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(20,216,196,0.1)", border: "1px solid rgba(20,216,196,0.3)", color: "#14D8C4" }}>
                      Featured
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(20,216,196,0.08)", border: "1px solid rgba(20,216,196,0.2)", color: "#14D8C4" }}>
                      {featured.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {featured.date}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-[#14D8C4] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 text-lg mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-1 text-[#14D8C4] font-semibold text-sm">
                    Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="relative bg-[#0E0F1E] pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {remaining.map((post) => (
                <div key={post.slug} className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.3), rgba(30,111,217,0.2), rgba(232,129,58,0.15))" }}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(20,216,196,0.08)", border: "1px solid rgba(20,216,196,0.2)", color: "#14D8C4" }}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-sm text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-black text-white mb-2 group-hover:text-[#14D8C4] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-[#14D8C4] font-semibold text-sm">
                      Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative overflow-hidden bg-[#0E0F1E] py-16">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(10,74,92,0.5) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(30,111,217,0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(232,129,58,0.2) 0%, transparent 50%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.3), rgba(30,111,217,0.2))" }}>
                <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
                  <h2 className="text-2xl font-black text-white mb-3">Stay Updated</h2>
                  <p className="text-slate-400 mb-6">
                    Get PDF tips, product updates, and best practices from the PDF.it team.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:brightness-110"
                    style={{ background: "linear-gradient(135deg, #14D8C4, #0A4A5C)" }}
                  >
                    Follow Our Blog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-slate-500 text-sm mt-4">We respect your inbox. No spam, ever.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Footer */}
        <section className="bg-[#0E0F1E] py-8 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
              <Shield className="h-4 w-4" />
              Your documents are never stored. Files deleted immediately after download.
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Script id="blog-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "PDF.it Blog",
          description: "News, updates, and tips from the PDF.it team. Learn about new features, PDF best practices, and product announcements.",
          url: "https://pdf.it.com/blog",
          publisher: {
            "@type": "Organization",
            name: "PDF.it",
            url: "https://pdf.it.com",
            logo: { "@type": "ImageObject", url: "https://pdf.it.com/og-logo.png" },
          },
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            url: `https://pdf.it.com/blog/${post.slug}`,
            author: { "@type": "Organization", name: "PDF.it" },
          })),
        })}
      </Script>
    </div>
  )
}
