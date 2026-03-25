import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Calendar, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog do PDF.it — Dicas PDF, Novos Recursos e Atualizacoes",
  description:
    "Noticias, atualizacoes e dicas da equipe PDF.it. Aprenda sobre novos recursos, melhores praticas PDF, ferramentas de curriculo com IA e extracao de tabelas.",
  keywords: [
    "blog PDF.it",
    "dicas PDF",
    "ferramentas PDF atualizacoes",
    "comprimir PDF dicas",
    "unir PDF guia",
    "otimizador ATS curriculo",
    "extracao de tabelas PDF",
    "assinatura eletronica documentos",
    "melhores praticas PDF",
  ],
  openGraph: {
    title: "Blog do PDF.it — Dicas PDF, Novos Recursos e Atualizacoes",
    description: "Noticias, atualizacoes e dicas da equipe PDF.it. Novos recursos e melhores praticas PDF.",
    url: "https://pdf.it.com/br/blog",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1200, height: 630, alt: "Blog do PDF.it" }],
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
    slug: "/blog/welcome-to-pdfit",
    title: "Bem-vindo ao PDF.it — Ferramentas PDF para Profissionais",
    excerpt: "Criamos o PDF.it porque profissionais merecem ferramentas PDF melhores. Nossa historia e o que nos torna diferentes.",
    date: "2026-04-01",
    category: "Anuncio",
  },
  {
    slug: "/blog/table-extraction-excel",
    title: "Novo Recurso: Extraia Tabelas de PDFs para Excel com IA",
    excerpt: "Nossa nova ferramenta de Extracao de Tabelas usa Google Document AI para detectar e exportar tabelas de qualquer PDF para planilhas Excel.",
    date: "2026-04-01",
    category: "Produto",
  },
  {
    slug: "/blog/why-three-languages",
    title: "Por Que o PDF.it Fala Ingles, Espanhol e Portugues",
    excerpt: "A maioria das ferramentas PDF so funciona em ingles. Construimos o PDF.it para profissionais em todo o mundo.",
    date: "2026-04-01",
    category: "Empresa",
  },
]

export default function BlogPageBr() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Blog</h1>
              <p className="text-xl text-slate-300">Noticias, atualizacoes e dicas da equipe PDF.it.</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              {posts.map((post) => (
                <Link key={post.slug} href={post.slug} className="block group bg-white rounded-2xl border border-slate-200 p-8 hover:border-orange-300 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center gap-1.5 text-sm text-slate-400"><Calendar className="h-3.5 w-3.5" />{post.date}</div>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{post.title}</h2>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm">Ler mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
