import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Shield, Zap, Eye, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Eliminar Metadatos de PDF — Elimina Datos Ocultos | PDF.it",
  description: "Elimina metadatos ocultos de archivos PDF. Elimina nombres de autor, marcas de tiempo, datos GPS e info de software antes de compartir.",
  alternates: { canonical: "https://www.pdf.it.com/es/eliminar-metadatos-pdf", languages: { en: "/remove-metadata-pdf", es: "/es/eliminar-metadatos-pdf" } },
}

export default function EliminarMetadatosPDFPage() {
  const faqs = [
    {
        "q": "¿Qué son los metadatos de un PDF?",
        "a": "Los metadatos de un PDF son información oculta incrustada en el archivo, incluyendo el nombre del autor, fechas de creación y modificación, software usado para crear el PDF y a veces coordenadas GPS o nombres de empresa."
    },
    {
        "q": "¿Por qué debería eliminar los metadatos?",
        "a": "Los metadatos pueden revelar información privada como tu nombre, tu empresa, el software que usas o cuándo se creó un documento. Eliminarlos protege tu privacidad al compartir archivos públicamente."
    },
    {
        "q": "¿Qué metadatos suelen contener los PDFs?",
        "a": "Los campos comunes incluyen Título, Autor, Asunto, Palabras Clave, Creador, Productor, fecha de creación, fecha de modificación y a veces propiedades personalizadas."
    },
    {
        "q": "¿Es reversible eliminar metadatos del PDF?",
        "a": "No. Una vez eliminados y guardado el archivo, los metadatos originales no se pueden recuperar. Siempre guarda una copia de seguridad del original."
    },
    {
        "q": "¿Aplanar un PDF elimina los metadatos?",
        "a": "Aplanar elimina campos de formulario, anotaciones y capas, pero puede no eliminar todos los campos de metadatos. Para eliminación completa, usa una herramienta dedicada de redacción."
    },
    {
        "q": "¿Los metadatos del PDF pueden ser un riesgo de seguridad?",
        "a": "Sí. Los metadatos pueden exponer nombres de usuario internos, rutas de red, versiones de software e historial de revisiones. Los atacantes pueden usar esta información para ingeniería social."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Shield className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Eliminar Metadatos de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Elimina nombres de autor ocultos, marcas de tiempo, datos GPS e información de software de tus PDFs antes de compartir — protege tu privacidad.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Elimina Datos Ocultos</span></div>
              <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Protege tu Privacidad</span></div>
              <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Comparte de Forma Segura</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Cada PDF lleva metadatos ocultos — tu nombre, el software que usaste, cuándo creaste o editaste el archivo y a veces hasta coordenadas GPS. Antes de compartir documentos públicamente o con clientes, eliminar estos metadatos protege tu privacidad y previene filtraciones de datos no deseadas.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Elimina nombres de autor, info de empresa y nombres de usuario</li>
            <li className="flex items-center gap-2">✓ Elimina marcas de tiempo de creación y modificación</li>
            <li className="flex items-center gap-2">✓ Borra información de software y versión</li>
            <li className="flex items-center gap-2">✓ Protege contra ingeniería social y filtraciones de datos</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md text-center"><p className="text-slate-600 mb-6">Usa Aplanar PDF para eliminar campos de formulario y anotaciones, o Redacción de PDF para eliminación completa de metadatos y contenido.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es/aplanar-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Aplanar PDF (Gratis)</Link><Link href="/es/redactar-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Redacción PDF (Business)</Link></div></div></section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Riesgos de Privacidad de Metadatos", desc: "Cuando compartes un PDF, puedes estar compartiendo sin saberlo tu nombre completo, email, empresa, software y nombre de usuario. Esto puede usarse para ingeniería social o phishing." },
              { title: "Qué Metadatos Contienen los PDFs", desc: "Los PDFs almacenan Título, Autor, Asunto, Palabras Clave, aplicación Creadora, Productor, fecha de creación, fecha de modificación y a veces historial de revisiones y campos empresariales." },
              { title: "Cuándo Eliminar Metadatos del PDF", desc: "Elimina metadatos antes de compartir documentos públicamente, enviar archivos a clientes, publicar PDFs online o presentar ante tribunales. También es buena práctica para cumplimiento GDPR." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div></div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Eliminar Metadatos de un PDF</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
              { num: "2", title: "Aplana o redacta", desc: "Usa Aplanar PDF o Redacción PDF para eliminar datos" },
              { num: "3", title: "Descarga PDF limpio", desc: "Obtén tu archivo sin metadatos al instante" },
            ].map((step) => (
              <div key={step.num} className="flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Elimina capas y campos" },
              { name: "Redactar PDF", href: "/es/redactar-pdf", desc: "Redacta contenido (Business)" },
              { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Protege con contraseña" },
              { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" },
            ].map((tool) => (
              <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              </div>
            ))}
          </div>
        </div></section>

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
