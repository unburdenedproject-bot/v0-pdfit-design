import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Páginas de PDF Online — Extrae Páginas Específicas | PDF.it",
  description: "Extrae páginas específicas de un PDF con PDF.it. Selecciona números de página o rangos, luego descarga un nuevo PDF con solo las páginas que necesitas — rápido, gratis y en tu navegador.",
  alternates: { canonical: "https://www.pdf.it.com/es/extraer-paginas-de-pdf", languages: { en: "/extract-pages-from-pdf", es: "/es/extraer-paginas-de-pdf" } },
}

export default function ExtraerPaginasDePDFPage() {
  const faqs = [
    {
        "q": "¿Cómo extraigo páginas específicas de un PDF?",
        "a": "Sube tu PDF a PDF.it, ingresa los números de página o rangos que deseas (ej. 1, 3, 5-10), luego haz clic en Extraer Páginas. Un nuevo PDF con solo las páginas selecciónadas estará listo para descargar."
    },
    {
        "q": "¿Puedo extraer un rango de páginas de un PDF?",
        "a": "Sí. Ingresa un rango como 5-15 y PDF.it creará un nuevo PDF que contiene solo esas páginas. También puedes combinar páginas individuales y rangos, como 1, 3, 7-12."
    },
    {
        "q": "¿Extraer páginas cambia mi PDF original?",
        "a": "No. Tu PDF original nunca se modifica. PDF.it crea un PDF completamente nuevo con solo las páginas que selecciónaste. El original permanece exactamente como estaba."
    },
    {
        "q": "¿Puedo extraer páginas de un PDF desde mi celular?",
        "a": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, seleccióna páginas y descarga el PDF extraído en iPhone o Android."
    },
    {
        "q": "¿Es gratis extraer páginas de un PDF?",
        "a": "Sí. Las cuentas gratuitas pueden extraer páginas de PDFs de hasta 25MB con hasta 10 conversiónes por día. Las cuentas Pro obtienen extracciones ilimitadas y archivos de hasta 200MB."
    },
    {
        "q": "¿Puedo extraer páginas de un PDF protegido con contraseña?",
        "a": "Necesitarás desbloquear el PDF primero. Usa la herramienta Desbloquear PDF de PDF.it para eliminar la contraseña, luego extrae las páginas que necesitas."
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
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Split className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Páginas de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Extrae páginas específicas de cualquier PDF con PDF.it. Selecciona números de página o rangos, luego descarga un nuevo PDF con solo las páginas que necesitas — rápido, gratis y en tu navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Selecciona Cualquier Página o Rango</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">¿Necesitas solo unas páginas de un PDF largo? PDF.it te permite extraer páginas específicas o rangos de páginas en un PDF completamente nuevo. Perfecto para extraer capítulos de un libro de texto, aislar páginas de un contrato o crear un resumen de un reporte.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Extrae páginas individuales o rangos de páginas</li>
            <li className="flex items-center gap-2">✓ El PDF original permanece sin cambios</li>
            <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            <li className="flex items-center gap-2">✓ Sin instalación — extrae páginas en tu navegador</li>
          </ul>
        </div></section>

        <SplitPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Extrae Capítulos y Secciones", desc: "¿Trabajas con un libro largo, manual o reporte? Extrae solo los capítulos o secciones que necesitas en un PDF separado. Comparte partes específicas sin enviar el documento completo." },
              { title: "Elimina Páginas No Deseadas", desc: "Extrae solo las páginas que quieres conservar y deja el resto atrás. La forma más fácil de eliminar portadas, páginas en blanco o apéndices sin editar el original." },
              { title: "Crea Resúmenes y Destacados", desc: "Extrae las páginas más importantes de un documento largo para crear un PDF de resumen rápido. Ideal para presentaciones, briefings ejecutivos o material de estudio." },
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
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Páginas de un PDF</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
              { num: "2", title: "Selecciona páginas", desc: "Ingresa números de página o rangos (ej. 1, 3, 5-10)" },
              { num: "3", title: "Descarga tu PDF", desc: "Obtén un nuevo PDF con solo las páginas que elegiste" },
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
              { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide en múltiples PDFs" },
              { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs juntos" },
              { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación de páginas" },
              { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
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
