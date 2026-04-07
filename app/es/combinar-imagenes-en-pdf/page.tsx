import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Images, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combinar Imagenes en PDF — Convierte Multiples Fotos a Un PDF | PDF.it",
  description:
    "Combina multiples imagenes en un solo PDF con PDF.it. Sube JPG, PNG u otras imagenes y crea un documento PDF — rapido, gratis y desde tu navegador.",
  alternates: {
    canonical: "/es/combinar-imagenes-en-pdf",
    languages: {
      en: "/combine-images-into-pdf",
      es: "/es/combinar-imagenes-en-pdf",
      pt: "/br/combinar-imagens-em-pdf",
    },
  },
}

export default function CombinarImagenesEnPDFPage() {
  const faqs = [
    { q: "¿Que formatos de imagen puedo combinar en un PDF?", a: "PDF.it soporta imagenes JPG, JPEG, PNG y WebP. Sube cualquier combinacion de estos formatos y todas se combinaran en un solo documento PDF." },
    { q: "¿Combinar imagenes en un PDF reduce la calidad de imagen?", a: "No. Tus imagenes se incrustan en el PDF a su resolucion original. La calidad de cada imagen permanece igual que el archivo original que subiste." },
    { q: "¿Cuantas imagenes puedo combinar en un PDF?", a: "Los usuarios gratuitos pueden combinar imagenes de una sola carga. Los usuarios Pro obtienen procesamiento por lotes para combinar grandes conjuntos de imagenes en un PDF sin limite practico de cantidad." },
    { q: "¿Puedo elegir el orden de las paginas de las imagenes en el PDF?", a: "Si. Las imagenes se agregan al PDF en el orden que las subes. Ordena tus archivos en la secuencia deseada antes de subir para controlar el orden de paginas." },
    { q: "¿Puedo combinar imagenes en un PDF desde mi celular?", a: "Si. PDF.it funciona en navegadores moviles — sube fotos de tu galeria en iPhone o Android y descarga el PDF combinado al instante." },
    { q: "¿Es gratis combinar imagenes en un PDF?", a: "Si. PDF.it te permite combinar imagenes en un PDF gratis sin registro. Los usuarios Pro obtienen funciones adicionales como procesamiento por lotes y limites de tamaño mas grandes." },
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
                <Images className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar Imagenes en PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Sube multiples fotos o imagenes y combinalas en un solo documento PDF. Perfecto para crear albumes de fotos, colecciones de recibos o paginas escaneadas organizadas.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>JPG, PNG, WebP Soportados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              ¿Necesitas convertir una carpeta de fotos en un solo documento? PDF.it combina multiples imagenes — JPG, PNG o WebP — en un PDF organizado. Cada imagen se convierte en su propia pagina, facilitando compartir, imprimir o archivar colecciones de fotos, recibos o documentos escaneados.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Soporta formatos JPG, PNG y WebP</li>
              <li className="flex items-center gap-2">✓ Calidad de imagen original preservada</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalacion — combina imagenes en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/jpeg", "image/png", "image/webp"]}
          acceptedExtensions=".jpg,.jpeg,.png,.webp"
          formatLabel="Imagenes"
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
                { title: "Crea Portafolios Fotograficos en PDF", desc: "En vez de adjuntar docenas de archivos de imagen, combinalos en un solo PDF. Los destinatarios reciben un documento unico y facil de ver que pueden recorrer, imprimir o guardar." },
                { title: "Combina Recibos en Un Documento", desc: "Informes de gastos, declaraciones de impuestos y solicitudes de reembolso frecuentemente requieren recibos en formato PDF. Sube las fotos de tus recibos y descarga un solo PDF organizado." },
                { title: "Organiza Imagenes Escaneadas en Paginas", desc: "Documentos escaneados, fotos de pizarra y notas manuscritas frecuentemente quedan como archivos individuales. Combinalos en un PDF limpio para archivar o enviar por email." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Combinar Imagenes en un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tus imagenes", desc: "Arrastra archivos JPG, PNG o WebP" },
                { num: "2", title: "Ordena las imagenes", desc: "Reorganiza antes de combinar" },
                { num: "3", title: "Descarga tu PDF", desc: "Obtén tu PDF combinado al instante" },
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
                { name: "JPG a PDF", href: "/es/jpg-a-pdf", desc: "Convierte JPG a PDF" },
                { name: "PNG a PDF", href: "/es/png-a-pdf", desc: "Convierte PNG a PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño de PDF" },
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
