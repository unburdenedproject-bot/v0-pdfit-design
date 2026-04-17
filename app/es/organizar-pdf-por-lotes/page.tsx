import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Organizar PDFs por Lotes — Procesa Múltiples Archivos a la Vez | PDF.it",
  description: "Organiza múltiples archivos PDF por lotes con PDF.it Pro. Une, divide, rota y comprime PDFs en masa — ahorra tiempo con procesamiento por lotes.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/organizar-pdf-por-lotes",
    languages: { "en": "https://www.pdf.it.com/batch-organize-pdf", "es": "https://www.pdf.it.com/es/organizar-pdf-por-lotes", "pt-BR": "https://www.pdf.it.com/br/organizar-pdf-em-lote" },
  },
}

export default function OrganizarPDFPorLotesPage() {
  const faqs = [
    { q: "Que significa organizar PDFs por lotes?", a: "Organizar por lotes significa procesar múltiples archivos PDF a la vez — unir, dividir, rotar o comprimir en masa en lugar de uno por uno. PDF.it Pro te permite subir múltiples archivos y aplicar operaciones a todos simultaneamente." },
    { q: "Que operaciones puedo realizar por lotes?", a: "Con PDF.it Pro puedes unir, dividir, rotar y comprimir por lotes. Todas las operaciones soportan subida multiple y descarga todo como ZIP." },
    { q: "El procesamiento por lotes está disponible en el plan gratuito?", a: "Los usuarios gratuitos pueden procesar un archivo a la vez con archivos de hasta 25MB. El procesamiento por lotes es una función Pro disponible por $3.99/mes, que incluye archivos de hasta 200MB y conversiónes ilimitadas." },
    { q: "Cuantos archivos puedo procesar a la vez?", a: "Los usuarios Pro pueden subir y procesar docenas de archivos en un solo lote. No hay límite fijo — la restricción principal es el límite de tamaño por archivo (200MB para Pro, 1GB para Business)." },
    { q: "Puedo automatizar flujos de trabajo PDF con PDF.it?", a: "Si. Los usuarios del plan Business ($13.99/mes) tienen acceso a Automatización de Flujos de Trabajo, que permite encadenar múltiples operaciones — por ejemplo, dividir PDFs, comprimir cada parte y luego unir páginas selecciónadas." },
    { q: "Mis archivos están seguros durante el procesamiento por lotes?", a: "Si. Todos los archivos se procesan de forma segura y se eliminan automáticamente al terminar tu sesión. PDF.it no almacena ni comparte tus documentos." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Layers className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Organizar PDFs por Lotes</h1>
              <p className="text-xl text-slate-300 mb-8">Procesa múltiples archivos PDF a la vez con PDF.it Pro. Une, divide, rota y comprime PDFs en masa — ahorra horas de trabajo repetitivo con procesamiento por lotes.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Múltiples Operaciones</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Descargar como ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Administrar una gran biblioteca de archivos PDF consume mucho tiempo cuando solo puedes procesar uno a la vez. PDF.it Pro te da procesamiento por lotes en todas las herramientas principales — sube múltiples archivos, aplica operaciones en masa y descarga todo como ZIP.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Une, divide, rota y comprime PDFs por lotes</li>
              <li className="flex items-center gap-2">✓ Sube múltiples archivos simultaneamente</li>
              <li className="flex items-center gap-2">✓ Archivos de hasta 200MB cada uno con Pro</li>
              <li className="flex items-center gap-2">✓ Descarga todos los resultados como archivo ZIP</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Organize PDF" outputFormat="PDF" processingMessage="Organizando tus PDFs..." successMessage="Tus PDFs organizados están listos!" requiresPlan="pro" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Organiza Bibliotecas de Documentos", desc: "Sube todo tu lote de PDFs que necesitan union, división o compresión. PDF.it procesa todo en paralelo — sin más clics archivo por archivo." },
                { title: "Procesa Archivos de Oficina en Masa", desc: "Departamentos de RRHH, equipos legales y contables que manejan grandes volumenes de documentos pueden ahorrar horas cada semana con procesamiento por lotes." },
                { title: "Automatiza Flujos de Trabajo PDF", desc: "Los usuarios del plan Business pueden encadenar múltiples operaciones — dividir, comprimir y luego unir — todo en un flujo automatizado para tareas recurrentes." },
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

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Organizar PDFs por Lotes</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Elige tu herramienta", desc: "Unir, Dividir, Rotar o Comprimir" },
                { num: "2", title: "Sube múltiples archivos", desc: "Selecciona todos los archivos a procesar" },
                { num: "3", title: "Descarga como ZIP", desc: "Obtiene todos los resultados en una descarga" },
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

        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" },
                { name: "Automatización", href: "/es/automatización-flujos", desc: "Encadena operaciones" },
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

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}
