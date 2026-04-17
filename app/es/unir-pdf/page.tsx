import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF Online — Combinar Archivos PDF en Uno | PDF.it",
  description:
    "Une archivos PDF en un solo documento con PDF.it. Combina PDFs online, reordena páginas y descarga un único PDF — rápido y sencillo.",
  alternates: {
    canonical: "https://pdf.it.com/es/unir-pdf",
    languages: {
      en: "https://pdf.it.com/merge-pdf",
      es: "https://pdf.it.com/es/unir-pdf",
      pt: "https://pdf.it.com/br/unir-pdf",
    },
  },
}

export default function UnirPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero Section */}
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Archivos PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina varios PDFs en un solo archivo con PDF.it. Sube, reordena, une y descarga — rápido, limpio y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Archivos Ilimitados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Archivos Eliminados Tras la Sesión</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Sin Registro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Usa la herramienta Unir PDF de PDF.it para combinar PDFs en un solo archivo en segundos. Sube varios documentos PDF, ordenalos correctamente y descarga un único PDF unido — perfecto para entregas, contratos, facturas e informes.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Une varios archivos PDF en un solo PDF</li>
              <li className="flex items-center gap-2">✓ Reordena archivos antes de unir para la secuencia correcta</li>
              <li className="flex items-center gap-2">✓ Ideal para informes, recibos, facturas y formularios</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalación — une PDFs directamente en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Merging your PDF files..."
          successMessage="Your merged PDF is ready!"
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
                { title: "Combina PDFs en un Solo Documento", desc: "Une PDFs en un solo archivo para compartir. Ideal para enviar un adjunto en vez de muchos, o entregar un paquete completo a escuelas, bancos o empleadores." },
                { title: "Reordena Archivos PDF Antes de Unir", desc: "Sube tus archivos y ordenalos en el orden exacto que quieras. PDF.it los une en la secuencia que tu elijas." },
                { title: "Une PDFs para Imprimir y Compartir", desc: "Crea un solo PDF limpio para imprimir, enviar por email, archivar o subir — sin manejar múltiples archivos." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Unir PDFs</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tus PDFs", desc: "Arrastra o haz clic para elegir archivos" },
                { num: "2", title: "Reordena y une", desc: "Organiza los archivos y haz clic en Unir" },
                { num: "3", title: "Descarga tu PDF", desc: "Obtiene un archivo combinado al instante" },
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
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide un PDF en partes" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño después de unir" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega protección con contraseña" },
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
              {[
                { q: "¿Como uno varios archivos PDF en uno solo?", a: "Sube tus PDFs a PDF.it, reordenalos como necesites y haz clic en Unir PDFs para descargar un solo archivo combinado." },
                { q: "¿Puedo reordenar los PDFs antes de unirlos?", a: "Si. Sube tus archivos y ordenalos en la secuencia correcta — PDF.it los une en ese orden." },
                { q: "¿Puedo unir PDFs desde mi celular?", a: "Si. PDF.it funciona en navegadores móviles — sube, une y descarga desde tu iPhone o Android." },
                { q: "¿Puedo unir PDFs protegidos con contraseña?", a: "Los PDFs protegidos con contraseña necesitan ser desbloqueados antes de unirlos. Usa nuestra herramienta Desbloquear PDF primero." },
                { q: "¿Es seguro subir mis PDFs?", a: "Si. Todas las transferencias están cifradas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamaño máximo de archivo para unir?", a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB cada uno. Las cuentas Pro pueden subir archivos de hasta 200MB. Las cuentas Business pueden subir archivos de hasta 1GB." },
              ].map((faq, i) => (
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
          "mainEntity": [
            { "@type": "Question", "name": "¿Como uno varios archivos PDF en uno solo?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tus PDFs a PDF.it, reordenalos como necesites y haz clic en Unir PDFs para descargar un solo archivo combinado." } },
            { "@type": "Question", "name": "¿Puedo reordenar los PDFs antes de unirlos?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Sube tus archivos y ordenalos en la secuencia correcta — PDF.it los une en ese orden." } },
            { "@type": "Question", "name": "¿Puedo unir PDFs desde mi celular?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en navegadores móviles — sube, une y descarga desde tu iPhone o Android." } },
            { "@type": "Question", "name": "¿Puedo unir PDFs protegidos con contraseña?", "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs protegidos con contraseña necesitan ser desbloqueados antes de unirlos. Usa nuestra herramienta Desbloquear PDF primero." } },
            { "@type": "Question", "name": "¿Es seguro subir mis PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Todas las transferencias están cifradas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." } },
            { "@type": "Question", "name": "¿Cual es el tamaño máximo de archivo para unir?", "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB cada uno. Las cuentas Pro pueden subir archivos de hasta 200MB. Las cuentas Business pueden subir archivos de hasta 1GB." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
