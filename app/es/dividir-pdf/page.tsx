import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF Online — Separar Páginas de un PDF | PDF.it",
  description:
    "Divide un PDF en páginas separadas o PDFs más pequeños con PDF.it. Extrae páginas por rango y descarga al instante — rápido, sencillo y online.",
  alternates: {
    canonical: "https://pdf.it.com/es/dividir-pdf",
    languages: {
      en: "https://pdf.it.com/split-pdf",
      es: "https://pdf.it.com/es/dividir-pdf",
      pt: "https://pdf.it.com/br/dividir-pdf",
    },
  },
}

export default function DividirPDFPage() {
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
                <Scissors className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Divide un PDF en archivos más pequeños con PDF.it. Extrae páginas específicas, divide por rangos y descarga PDFs limpios al instante.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Rangos de Páginas Personalizados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Usa la herramienta Dividir PDF de PDF.it para extraer páginas de un PDF o dividir un PDF grande en archivos más pequeños. Elige un rango de páginas, divide por páginas individuales y descarga los PDFs que necesitas — perfecto para compartir, subir y enviar por email.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Divide páginas de PDF en archivos separados</li>
              <li className="flex items-center gap-2">✓ Extrae un rango de páginas en un nuevo PDF</li>
              <li className="flex items-center gap-2">✓ Crea PDFs más pequeños para email, portales y para imprimir</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalación — divide PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <SplitPdfInterface />

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
                { title: "Extrae Páginas de un PDF", desc: "¿Necesitas solo una parte de un documento? PDF.it te permite sacar las páginas que quieras y guardarlas como un nuevo PDF — ideal para formularios, contratos y estados de cuenta." },
                { title: "Divide un PDF en Páginas Individuales", desc: "Convierte un PDF en muchos PDFs — un archivo por página — para que puedas subir, compartir u organizar páginas individualmente." },
                { title: "Divide PDFs Grandes para Compartir", desc: "Muchos sistemas de email y portales limitan el tamaño de subida. Dividir te ayuda a cumplir con los límites y enviar solo lo necesario." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Dividir un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra o haz clic para elegir un archivo" },
                { num: "2", title: "Elige las páginas", desc: "Selecciona rangos o páginas individuales" },
                { num: "3", title: "Descarga tus PDFs", desc: "Obtiene los archivos divididos al instante" },
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs después de dividir" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño antes de dividir" },
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
                { q: "¿Como divido un PDF en varios archivos?", a: "Sube tu PDF a PDF.it, elige las páginas o rangos que quieras y haz clic en Dividir PDF para descargar los nuevos archivos." },
                { q: "¿Puedo extraer solo ciertas páginas de un PDF?", a: "Si. Selecciona los números de página o un rango de páginas y PDF.it creara un nuevo PDF que contenga solo esas páginas." },
                { q: "¿Puedo dividir un PDF desde mi celular?", a: "Si. PDF.it funciona en navegadores móviles — sube, seleccióna páginas, divide y descarga." },
                { q: "¿Puedo dividir PDFs protegidos con contraseña?", a: "Necesitas desbloquear el PDF antes de dividirlo. Usa nuestra herramienta Desbloquear PDF primero." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Todas las transferencias están cifradas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamaño máximo de PDF que puedo dividir?", a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." },
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
            { "@type": "Question", "name": "¿Como divido un PDF en varios archivos?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, elige las páginas o rangos que quieras y haz clic en Dividir PDF para descargar los nuevos archivos." } },
            { "@type": "Question", "name": "¿Puedo extraer solo ciertas páginas de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Selecciona los números de página o un rango de páginas y PDF.it creara un nuevo PDF que contenga solo esas páginas." } },
            { "@type": "Question", "name": "¿Puedo dividir un PDF desde mi celular?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en navegadores móviles — sube, seleccióna páginas, divide y descarga." } },
            { "@type": "Question", "name": "¿Puedo dividir PDFs protegidos con contraseña?", "acceptedAnswer": { "@type": "Answer", "text": "Necesitas desbloquear el PDF antes de dividirlo. Usa nuestra herramienta Desbloquear PDF primero." } },
            { "@type": "Question", "name": "¿Es seguro subir mi PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Todas las transferencias están cifradas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." } },
            { "@type": "Question", "name": "¿Cual es el tamaño máximo de PDF que puedo dividir?", "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
