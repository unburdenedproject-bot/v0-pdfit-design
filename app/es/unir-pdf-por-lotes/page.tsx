import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF por Lotes — Combina PDFs en Masa | PDF.it",
  description:
    "Une m\u00faltiples archivos PDF a la vez con PDF.it Pro. Sube docenas de PDFs y comb\u00ednalos en un solo documento en una sola operaci\u00f3n — r\u00e1pido y eficiente.",
  alternates: {
    canonical: "/es/unir-pdf-por-lotes",
    languages: {
      en: "/batch-merge-pdf",
      es: "/es/unir-pdf-por-lotes",
      pt: "/br/unir-pdf-em-lote",
    },
  },
}

export default function UnirPDFPorLotesPage() {
  const faqs = [
    { q: "\u00bfC\u00f3mo uno m\u00faltiples PDFs por lotes?", a: "Con PDF.it Pro, sube m\u00faltiples archivos PDF simult\u00e1neamente a la herramienta Unir PDF. Selecciona todos los archivos que quieras combinar, ord\u00e9nalos y \u00fanelos en un solo documento en una sola operaci\u00f3n." },
    { q: "\u00bfCu\u00e1ntos PDFs puedo unir por lotes?", a: "Los usuarios Pro pueden subir y unir docenas de archivos PDF en una sola operaci\u00f3n por lotes. No hay un l\u00edmite fijo de archivos \u2014 la principal restricci\u00f3n es el tama\u00f1o total, que puede ser de hasta 200MB por archivo para usuarios Pro, o hasta 1GB para usuarios Business." },
    { q: "\u00bfLa uni\u00f3n por lotes est\u00e1 disponible en el plan gratuito?", a: "Los usuarios gratuitos pueden unir archivos uno a la vez con archivos de hasta 25MB. El procesamiento por lotes \u2014 subir y unir m\u00faltiples archivos simult\u00e1neamente \u2014 es una funci\u00f3n Pro disponible por $3.99/mes." },
    { q: "\u00bfCu\u00e1l es el tama\u00f1o m\u00e1ximo de archivo para unir por lotes?", a: "Los usuarios Pro pueden subir archivos de hasta 200MB cada uno. Los usuarios Business pueden subir archivos de hasta 1GB cada uno. Los usuarios gratuitos est\u00e1n limitados a 25MB por archivo." },
    { q: "\u00bfPuedo elegir el orden de los PDFs unidos por lotes?", a: "S\u00ed. Cuando subes m\u00faltiples archivos para uni\u00f3n por lotes, puedes ordenarlos como prefieras antes de combinar. El PDF final seguir\u00e1 la secuencia que establezcas." },
    { q: "\u00bfLa uni\u00f3n por lotes afecta la calidad del PDF?", a: "No. La uni\u00f3n por lotes preserva la calidad original de todos tus archivos PDF. Texto, im\u00e1genes, formato, fuentes y elementos interactivos permanecen sin cambios en el resultado final." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Merge className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDF por Lotes</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina m&uacute;ltiples archivos PDF a la vez con PDF.it Pro. Sube docenas de documentos y &uacute;nelos en un solo PDF en una sola operaci&oacute;n — ahorra horas de trabajo manual.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Procesa M&#250;ltiples Archivos</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesi&#243;n</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Descarga como ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Cuando necesitas combinar docenas de archivos PDF en un solo documento, hacerlo uno a la vez es extremadamente lento. La funci&#243;n de uni&#243;n por lotes de PDF.it Pro te permite subir m&#250;ltiples archivos a la vez, ordenarlos y unirlos todos en una sola operaci&#243;n.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">&#10003; Sube y une m&#250;ltiples PDFs simult&#225;neamente</li>
              <li className="flex items-center gap-2">&#10003; Ordena archivos en cualquier secuencia antes de unir</li>
              <li className="flex items-center gap-2">&#10003; Archivos de hasta 200MB con Pro, 1GB con Business</li>
              <li className="flex items-center gap-2">&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Uniendo tus PDFs por lotes..."
          successMessage="&#161;Tus PDFs han sido combinados!"
          requiresPlan="pro"
        />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Ideal para Departamentos de Contabilidad", desc: "Contadores y tenedores de libros pueden combinar meses de facturas o recibos en un solo PDF para archivos o auditor\u00edas — sube todos tus archivos a la vez y une en segundos." },
                { title: "Perfecto para Equipos Legales", desc: "\u00bfArmando documentaci\u00f3n para un caso legal? Sube todos los documentos individuales y \u00fanelos en un solo expediente completo para presentaciones en juzgados." },
                { title: "Flujos de RR.HH. y Archivado", desc: "Ya sea que est\u00e9s combinando contratos de empleados, consolidando documentos de onboarding o archivando materiales de capacitaci\u00f3n, la uni\u00f3n por lotes elimina el trabajo repetitivo." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">C&#243;mo Unir PDFs por Lotes</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tus PDFs", desc: "Selecciona m\u00faltiples archivos a la vez" },
                { num: "2", title: "Ordena los archivos", desc: "Arrastra y suelta para reordenar" },
                { num: "3", title: "Une y descarga", desc: "Obt\u00e9n tu PDF combinado al instante" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa p\u00e1ginas" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tama\u00f1o" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige orientaci\u00f3n" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
