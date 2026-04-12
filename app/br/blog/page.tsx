import Link from "next/link"
import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Calendar, ArrowRight, BookOpen, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog do PDF.it — Dicas PDF, Novos Recursos e Atualizacoes",
  description:
    "Noticias, atualizacoes e dicas da equipe PDF.it. Aprenda sobre novos recursos, melhores praticas PDF, ferramentas de curriculo com IA e extracao de tabelas.",
  openGraph: {
    title: "Blog do PDF.it — Dicas PDF, Novos Recursos e Atualizacoes",
    description: "Noticias, atualizacoes e dicas da equipe PDF.it. Novos recursos e melhores praticas PDF.",
    url: "https://pdf.it.com/br/blog",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "Blog do PDF.it" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog do PDF.it — Dicas PDF, Novos Recursos e Atualizacoes",
    description: "Noticias, atualizacoes e dicas da equipe PDF.it.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/br/blog",
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
    title: "Como Proteger Documentos Sensiveis Antes de Compartilhar",
    excerpt: "Tres camadas de seguranca PDF: protecao com senha, redacao permanente e marca d'agua. Aprenda quando usar cada uma.",
    date: "2025-03-20",
    category: "Seguranca",
  },
  {
    slug: "scanned-pdf-searchable-ocr",
    title: "Como Tornar um PDF Escaneado Pesquisavel com OCR",
    excerpt: "Transforme documentos escaneados em PDFs pesquisaveis e copiaveis usando OCR. Funciona com recibos, contratos e documentos em 16+ idiomas.",
    date: "2025-02-12",
    category: "Guia",
  },
  {
    slug: "compress-pdf-email",
    title: "Como Comprimir um PDF para Anexos de Email",
    excerpt: "Aprenda a reduzir o tamanho de arquivos PDF para caber nos limites do Gmail, Outlook e Yahoo — passo a passo.",
    date: "2024-10-05",
    category: "Guia",
  },
  {
    slug: "welcome-to-pdfit",
    title: "Bem-vindo ao PDF.it — Ferramentas PDF para Profissionais",
    excerpt: "Criamos o PDF.it porque profissionais merecem ferramentas PDF melhores. Nossa historia e o que nos torna diferentes.",
    date: "2024-01-15",
    category: "Anuncio",
  },
  {
    slug: "table-extraction-excel",
    title: "Novo Recurso: Extraia Tabelas de PDFs para Excel com IA",
    excerpt: "Nossa nova ferramenta de Extracao de Tabelas usa Google Document AI para detectar e exportar tabelas de qualquer PDF para planilhas Excel.",
    date: "2024-06-20",
    category: "Produto",
  },
  {
    slug: "why-three-languages",
    title: "Por Que o PDF.it Fala Ingles, Espanhol e Portugues",
    excerpt: "A maioria das ferramentas PDF so funciona em ingles. Construimos o PDF.it para profissionais em todo o mundo.",
    date: "2024-03-10",
    category: "Empresa",
  },
]

const featured = posts[0]
const remaining = posts.slice(1)

export default function BlogPageBr() {
  return (
    <div className="min-h-screen bg-[#0E0F1E]">
      <HeaderBr />
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
            <filter id="grain-br">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-br)" />
          </svg>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.15) 0%, rgba(10,74,92,0.3) 100%)", border: "1px solid rgba(20,216,196,0.2)" }}>
                <BookOpen className="h-8 w-8 text-[#14D8C4]" style={{ filter: "drop-shadow(0 0 8px rgba(20,216,196,0.5))" }} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight">Blog</h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
                Noticias, atualizacoes de produto e dicas praticas para trabalhar com PDFs — da equipe PDF.it.
              </p>
              <a href="#articles" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-[#14D8C4]/20" style={{ background: "rgba(20,216,196,0.1)", border: "1px solid rgba(20,216,196,0.25)", color: "#14D8C4" }}>
                Ver os {posts.length} artigos
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
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
                      Destaque
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(20,216,196,0.08)", border: "1px solid rgba(20,216,196,0.2)", color: "#14D8C4" }}>
                      {featured.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {featured.date}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-[#14D8C4] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 text-lg mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-1 text-[#14D8C4] font-semibold text-sm">
                    Ler mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section id="articles" className="relative bg-[#0E0F1E] pb-20 scroll-mt-20">
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
                      <div className="flex items-center gap-1.5 text-sm text-slate-500">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                    </div>
                    <h2 className="text-xl font-black text-white mb-2 group-hover:text-[#14D8C4] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-[#14D8C4] font-semibold text-sm">
                      Ler mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
                  <NewsletterSignup locale="br" />
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
              Seus documentos nunca sao armazenados. Arquivos excluidos imediatamente apos o download.
            </div>
          </div>
        </section>
      </main>
      <FooterBr />

      <Script id="blog-schema-br" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog do PDF.it",
          description: "Noticias, atualizacoes e dicas da equipe PDF.it. Novos recursos e melhores praticas PDF.",
          url: "https://pdf.it.com/br/blog",
          inLanguage: "pt-BR",
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
