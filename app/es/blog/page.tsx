import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog — PDF.it",
  description: "Noticias, actualizaciones y consejos del equipo de PDF.it.",
}

const posts = [
  {
    slug: "/blog/welcome-to-omnispdf",
    title: "Bienvenido a PDF.it — Herramientas PDF para Profesionales",
    excerpt: "Creamos PDF.it porque los profesionales merecen mejores herramientas PDF. Nuestra historia y lo que nos hace diferentes.",
    date: "2026-04-01",
    category: "Anuncio",
  },
  {
    slug: "/blog/table-extraction-excel",
    title: "Nueva Funcion: Extrae Tablas de PDFs a Excel con IA",
    excerpt: "Nuestra nueva herramienta de Extraccion de Tablas usa Google Document AI para detectar y exportar tablas de cualquier PDF a hojas de calculo Excel.",
    date: "2026-04-01",
    category: "Producto",
  },
  {
    slug: "/blog/why-three-languages",
    title: "Por Que PDF.it Habla Ingles, Espanol y Portugues",
    excerpt: "La mayoria de herramientas PDF solo funcionan en ingles. Construimos PDF.it para profesionales en todo el mundo.",
    date: "2026-04-01",
    category: "Empresa",
  },
]

export default function BlogPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Blog</h1>
              <p className="text-xl text-slate-300">Noticias, actualizaciones y consejos del equipo de PDF.it.</p>
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
                  <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm">Leer mas <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
