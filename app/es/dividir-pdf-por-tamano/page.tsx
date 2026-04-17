import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF Grande en Archivos Pequeños — Reduce el Tamaño | PDF.it",
  description:
    "Divide un PDF grande en archivos más pequeños con PDF.it. Separa PDFs pesados en partes manejables para email, cargas y compartir — rápido, gratis y en tu navegador.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/dividir-pdf-por-tamaño",
    languages: { en: "/split-pdf-by-size", es: "/es/dividir-pdf-por-tamaño" },
  },
}

export default function DividirPDFPorTamanoPage() {
  const faqs = [
    { q: "¿Cómo divido un PDF grande en archivos más pequeños?", a: "Sube tu PDF a PDF.it e ingresa rangos de páginas para dividirlo en partes iguales. Por ejemplo, divide un PDF de 20 páginas en cuatro archivos de 5 páginas ingresando los rangos 1-5, 6-10, 11-15 y 16-20. Descarga cada parte por separado." },
    { q: "¿Puedo dividir un PDF para cumplir con límites de adjuntos en email?", a: "Sí. La mayoría de proveedores de email limitan adjuntos a 25MB. Divide tu PDF grande en partes más pequeñas por rango de páginas, luego adjunta cada parte en emails separados o comprime cada parte con la herramienta Comprimir para Email de PDF.it." },
    { q: "¿Qué tan pequeñas pueden ser las partes divididas?", a: "Cada parte puede ser tan pequeña como una sola página. El tamaño de archivo de cada parte depende del contenido — las páginas con imágenes serán más grandes que las de solo texto." },
    { q: "¿Dividir un PDF reduce la calidad?", a: "No. La división solo separa las páginas en archivos diferentes. El contenido, imágenes y formato permanecen exactamente iguales al documento original." },
    { q: "¿Puedo dividir un PDF para portales de carga con límites de tamaño?", a: "Sí. Muchos portales tienen límites de 5MB o 10MB. Divide tu PDF en secciones más pequeñas, luego usa las herramientas de compresión de PDF.it en cada parte para asegurarte de que cumplan el requisito de tamaño." },
    { q: "¿Puedo recombinar los archivos divididos después?", a: "Por supuesto. Usa la herramienta Unir PDF de PDF.it para combinar los archivos divididos de vuelta en un solo documento cuando necesites la versión completa." },
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
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Split className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF Grande en Archivos Más Pequeños</h1>
              <p className="text-xl text-slate-300 mb-8">Separa PDFs pesados en archivos más pequeños y manejables que cumplan con límites de email, portales de carga y plataformas para compartir. Divide por rangos de páginas — rápido, gratis y en tu navegador.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Divide en Partes Pequeñas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">¿Tienes un PDF demasiado grande para enviar por email, subir o compartir? PDF.it te permite dividirlo en archivos más pequeños selecciónando rangos de páginas. Por ejemplo, divide un PDF de 20 páginas en cuatro archivos de 5 páginas — cada uno lo suficientemente pequeño para adjuntar en un email o subir a un portal con límites estrictos.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Divide PDFs pesados en partes aptas para email</li>
              <li className="flex items-center gap-2">✓ Crea secciones de tamaño igual por rangos de páginas</li>
              <li className="flex items-center gap-2">✓ Calidad original preservada — sin recompresión</li>
              <li className="flex items-center gap-2">✓ Sin instalación — divide PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        <SplitPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Divide PDFs para Adjuntar por Email", desc: "La mayoría de proveedores de email limitan adjuntos a 25MB. Divide tu PDF en partes más pequeñas por rango de páginas y envía cada parte por separado. Combina con compresión para archivos aún más pequeños." },
                { title: "Cumple Límites de Portales de Carga", desc: "Portales gubernamentales, solicitudes de empleo y envíos universitarios suelen tener límites estrictos de tamaño. Divide tu PDF en secciones que cumplan esos límites." },
                { title: "Comparte Documentos Grandes en Partes", desc: "¿Necesitas compartir un reporte de 100 páginas por apps de mensajería? Divídelo en secciones lógicas para que los destinatarios descarguen y lean las partes que necesitan." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Dividir un PDF Grande en Archivos Más Pequeños</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF grande", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
                { num: "2", title: "Ingresa rangos de páginas", desc: "Crea partes iguales (ej. 1-5, 6-10)" },
                { num: "3", title: "Descarga tus archivos", desc: "Obtén cada PDF más pequeño al instante" },
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
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Comprimir para Email", href: "/es/comprimir-pdf-para-email", desc: "PDFs listos para email" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "División general de PDF" },
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
