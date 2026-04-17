import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileText, Zap, Settings, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Editar Metadatos de PDF Online — Cambia Título, Autor y Propiedades | PDF.it",
  description:
    "Edita los metadatos de tu PDF con PDF.it. Cambia el título, autor, asunto y otras propiedades del documento antes de compartir o publicar — rápido y en tu navegador.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/editar-metadatos-pdf",
    languages: { en: "/edit-pdf-metadata", es: "/es/editar-metadatos-pdf" },
  },
}

export default function EditarMetadatosPDFPage() {
  const faqs = [
    { q: "¿Qué incluyen los metadatos de un PDF?", a: "Los metadatos de un PDF incluyen el título del documento, nombre del autor, asunto, palabras clave, aplicación creadora, productor, fecha de creación y fecha de modificación. Algunos PDFs también contienen campos personalizados añadidos por sistemas de gestión documental empresariales." },
    { q: "¿Por qué querría editar los metadatos de un PDF?", a: "Editar metadatos te permite establecer un título profesional, corregir el nombre del autor, agregar palabras clave para búsquedas o actualizar propiedades antes de publicar o compartir. Es especialmente importante para SEO cuando los PDFs son indexados por motores de búsqueda." },
    { q: "¿Los metadatos del PDF afectan el SEO?", a: "Sí. Los motores de búsqueda pueden leer los metadatos del PDF. Un título bien escrito y palabras clave relevantes ayudan a que tu PDF posicione mejor en resultados de búsqueda. Google frecuentemente usa el campo de título del PDF como título de la página en los listados de búsqueda." },
    { q: "¿Puedo cambiar el nombre del autor en un PDF?", a: "Sí. Las herramientas de edición de metadatos de PDF te permiten cambiar el campo de autor a cualquier nombre o eliminarlo por completo. Esto es útil al cambiar la marca de documentos o preparar archivos para distribución pública." },
    { q: "¿En qué se diferencia editar metadatos de editar contenido del PDF?", a: "La edición de metadatos cambia solo las propiedades del documento (título, autor, fechas, palabras clave) — no altera el texto visible, las imágenes ni el diseño de las páginas del PDF." },
    { q: "¿PDF.it soporta la edición de metadatos?", a: "La edición directa de metadatos estará disponible pronto. Mientras tanto, puedes usar Aplanar PDF para limpiar campos de formulario y anotaciones, o Proteger PDF para asegurar las propiedades de tu documento antes de compartir." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileText className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Editar Metadatos de PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">Cambia el título, autor, asunto y otras propiedades de tu PDF antes de compartir o publicar.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Actualiza Propiedades</span></div>
                <div className="flex items-center gap-2"><Settings className="h-4 w-4 text-[#14D8C4]" /><span>Documentos Profesionales</span></div>
                <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#14D8C4]" /><span>Mejor SEO</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Los metadatos del PDF controlan cómo tu documento es identificado por sistemas operativos, motores de búsqueda y herramientas de gestión documental. Editar estas propiedades te permite establecer un título claro, corregir el autor, agregar palabras clave relevantes y asegurar que tus PDFs se vean profesionales al compartirlos o publicarlos online.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Establece un título profesional para SEO</li>
              <li className="flex items-center gap-2">✓ Actualiza o elimina el autor y nombre de empresa</li>
              <li className="flex items-center gap-2">✓ Agrega palabras clave para mejorar la búsqueda</li>
              <li className="flex items-center gap-2">✓ Prepara documentos para publicación y distribución</li>
            </ul>
          </div>
        </section>

        {/* Tool Links */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md text-center">
            <p className="text-slate-600 mb-6">La edición directa de metadatos estará disponible pronto. Mientras tanto, usa estas herramientas para gestionar las propiedades de tu PDF:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/aplanar-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Aplanar PDF</Link>
              <Link href="/es/proteger-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Proteger PDF</Link>
            </div>
          </div>
        </section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Por Qué Importan los Metadatos", desc: "Cuando alguien abre tu PDF, el título del metadato es lo que ve — no el nombre del archivo. Los motores de búsqueda usan el título y palabras clave para posicionar tu PDF. Metadatos faltantes hacen que los documentos se vean poco profesionales." },
                { title: "¿Qué Propiedades Puedes Cambiar?", desc: "Los campos más comúnmente editados son Título (mostrado en pestañas del navegador y resultados de búsqueda), Autor, Asunto y Palabras Clave. También puedes modificar fechas de creación y modificación." },
                { title: "Preparación Profesional de Documentos", desc: "Antes de distribuir reportes, whitepapers o propuestas, revisa los metadatos. Asegúrate de que el título coincida con el encabezado, el autor refleje la persona correcta y las propiedades irrelevantes sean eliminadas." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Editar Metadatos de un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Abre tu PDF", desc: "Usa una herramienta de edición de metadatos o editor PDF" },
                { num: "2", title: "Actualiza las propiedades", desc: "Cambia Título, Autor, Asunto y Palabras Clave" },
                { num: "3", title: "Guarda y comparte", desc: "Descarga con metadatos actualizados" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Elimina capas y campos" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Protege con contraseña" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" },
                { name: "Redactar PDF", href: "/es/redactar-pdf", desc: "Redacta contenido (Business)" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}
