import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { PhoneScanCleanupInterface } from "@/components/phone-scan-cleanup-interface"
import { Camera, Zap, Shield, ScanLine } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Limpiar Escaneo de Celular — Convierte Fotos en PDFs Limpios | PDF.it",
  description: "Sube una foto de un documento tomada con tu celular y obtén un PDF limpio y profesional. Endereza, elimina sombras y mejora el contraste. Blanco y negro o limpieza a color. Herramienta online gratis.",
  alternates: {
    canonical: "/es/limpiar-escaneo",
    languages: {
      en: "/phone-scan-cleanup",
      es: "/es/limpiar-escaneo",
      pt: "/br/limpeza-digitalizacao",
    },
  },
}

export default function LimpiarEscaneoPage() {
  const faqs = [
    { q: "¿Qué es Limpiar Escaneo de Celular?", a: "Toma fotos de documentos capturadas con la cámara de tu celular y las transforma en PDFs limpios y profesionales. Elimina sombras, corrige la iluminación y mejora la nitidez del texto para resultados con calidad de escáner." },
    { q: "¿Qué formatos de imagen se admiten?", a: "JPG, PNG y WEBP. Estos son los formatos estándar que usan las cámaras de celulares tanto en iPhone como en Android." },
    { q: "¿Cuál es la diferencia entre Blanco y Negro y Limpieza a Color?", a: "Blanco y Negro convierte a texto negro nítido sobre fondo blanco, como un escáner. Limpieza a Color mantiene los colores mientras elimina sombras y mejora el contraste." },
    { q: "¿Es gratis Limpiar Escaneo de Celular?", a: "Puedes limpiar algunos escaneos gratis. Para uso ilimitado, actualiza al plan Pro por $3.99/mes." },
    { q: "¿Funciona con cualquier cámara de celular?", a: "Sí. Funciona con fotos de cualquier celular — iPhone, Samsung, Google Pixel o cualquier dispositivo Android." },
    { q: "¿Puedo hacer el texto buscable?", a: "Esta herramienta crea un PDF limpio a partir de tu foto. Para hacer el texto buscable, pasa el resultado por nuestra herramienta Escáner OCR." },
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
                <Camera className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Limpiar Escaneo de Celular</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte fotos de documentos tomadas con tu celular en PDFs limpios y profesionales. Elimina sombras, corrige la iluminación, mejora el texto — sin escáner ni app.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ScanLine className="h-4 w-4 text-[#14D8C4]" /><span>Eliminar Sombras</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Contraste Automático</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>PDF Instantáneo</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Las fotos de documentos tomadas con el celular tienen sombras, iluminación desigual y texto deslavado. Limpiar Escaneo de Celular transforma fotos desordenadas en PDFs limpios y de alto contraste que parecen salidos de un escáner profesional. Perfecto para contratos, recibos, notas y copias de identificación.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Elimina sombras y corrige iluminación desigual</li>
              <li className="flex items-center gap-2">✓ Modos Blanco y Negro o Limpieza a Color</li>
              <li className="flex items-center gap-2">✓ Funciona con cualquier cámara de celular</li>
              <li className="flex items-center gap-2">✓ Sin instalación — limpia escaneos en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Tool Interface */}
        <PhoneScanCleanupInterface />

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
                { title: "Contratos y Documentos Legales", desc: "Toma una foto de un contrato firmado y obtén un PDF profesional en lugar de una foto oscura y con sombras. Listo para enviar por email o archivar." },
                { title: "Recibos e Informes de Gastos", desc: "Captura recibos con tu celular para informes de gastos. Limpieza a Color preserva logos y colores mientras elimina sombras y reflejos." },
                { title: "Notas, Pizarras e Identificaciones", desc: "Convierte notas escritas a mano, sesiones de pizarra o copias de identificación en PDFs limpios y legibles. El modo Blanco y Negro hace que el texto resalte." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Limpiar un Escaneo de Celular</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu foto", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
                { num: "2", title: "Elige el modo de limpieza", desc: "Blanco y Negro o Limpieza a Color" },
                { num: "3", title: "Descarga tu PDF", desc: "Obtén tu PDF limpio al instante" },
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
                { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Haz PDFs escaneados buscables" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige páginas de lado" },
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
