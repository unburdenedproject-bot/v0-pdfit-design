import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PNG a PDF — Convierte Imágenes PNG a PDF en Línea | PDF.it",
  description:
    "Convierte imágenes PNG a documentos PDF en línea gratis. Sube una o varias imágenes y obten un PDF profesional al instante. Sin software que instalar.",
  alternates: {
    canonical: "https://pdf.it.com/es/png-a-pdf",
    languages: {
      en: "https://pdf.it.com/png-to-pdf",
      es: "https://pdf.it.com/es/png-a-pdf",
      pt: "https://pdf.it.com/br/png-para-pdf",
    },
  },
}

export default function PngToPdfPageEs() {
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
                <ImageIcon className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PNG a PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte imágenes PNG a documentos PDF profesionales — sube una o varias imágenes y descarga al instante. Calidad completa preservada.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Múltiples Imágenes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Calidad Completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Conversión Instantanea</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Convierte tus imágenes PNG a PDF con PDF.it. PNG es ideal para capturas de pantalla, exportaciones de diseño e imágenes con transparencia — pero cuando necesitas compartir, imprimir o enviar documentos profesionalmente, PDF es el formato estándar que funciona en todas partes.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convierte una o varias imágenes PNG a PDF</li>
              <li className="flex items-center gap-2">✓ Calidad y resolución completa preservada</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalación — funciona desde tu navegador</li>
              <li className="flex items-center gap-2">✓ Areas transparentes se renderizan como blanco en el PDF</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/png"]}
          acceptedExtensions=".png"
          formatLabel="PNG"
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
                { title: "Capturas de Pantalla y Diseños", desc: "Las capturas de pantalla y mockups de diseño suelen guardarse como PNG. Conviertelos a PDF para documentación, reportes de errores, presentaciones o portafolios." },
                { title: "Envia Documentos Profesionalmente", desc: "Muchos portales e instituciones requieren formato PDF. Convierte tus imágenes PNG de certificados, formularios o documentos escaneados en PDFs para enviarlos fácilmente." },
                { title: "Listo para Imprimir desde Cualquier PNG", desc: "PDF garantiza formato consistente en todos los dispositivos e impresoras. Convierte infografias, gráficos y material web a PDF para impresión limpia y profesional." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir PNG a PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tus imágenes PNG", desc: "Arrastra o haz clic para elegir archivos" },
                { num: "2", title: "Haz clic en Convertir", desc: "Cada imagen se convierte en PDF en segundos" },
                { num: "3", title: "Descarga tus PDFs", desc: "Obtenlos individualmente o como ZIP" },
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
                { name: "JPG a PDF", href: "/es/jpg-a-pdf", desc: "Convierte imágenes JPG a PDF" },
                { name: "PDF a PNG", href: "/es/pdf-a-png", desc: "Convierte páginas PDF a imágenes" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del PDF" },
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
                { q: "¿Como convierto un PNG a PDF?", a: "Sube tu imagen PNG, haz clic en Convertir a PDF y descarga. Puedes subir varias imágenes y cada una se convertira en su propio PDF." },
                { q: "¿Puedo convertir varias imágenes PNG a la vez?", a: "Si. Selecciona varios archivos PNG y cada uno se convertira en un PDF separado. Descargalos individualmente o como un archivo ZIP." },
                { q: "¿Se mantiene la transparencia?", a: "Las imágenes PNG con fondo transparente se convierten a PDF con fondo blanco, ya que PDF no soporta transparencia de la misma manera que PNG." },
                { q: "¿La conversión reduce la calidad?", a: "No. PDF.it preserva la resolución y calidad completa de tu imagen PNG en el PDF resultante." },
                { q: "¿Es seguro subir mis imágenes?", a: "Si. Todas las transferencias están cifradas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamaño máximo de archivo?", a: "Los usuarios gratuitos pueden subir hasta 25MB por imagen. Los suscriptores Pro y Business pueden subir hasta 200MB por imagen." },
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
            { "@type": "Question", "name": "¿Como convierto un PNG a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu imagen PNG, haz clic en Convertir a PDF y descarga. Puedes subir varias imágenes y cada una se convertira en su propio PDF." } },
            { "@type": "Question", "name": "¿Puedo convertir varias imágenes PNG a la vez?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Selecciona varios archivos PNG y cada uno se convertira en un PDF separado. Descargalos individualmente o como un archivo ZIP." } },
            { "@type": "Question", "name": "¿Se mantiene la transparencia?", "acceptedAnswer": { "@type": "Answer", "text": "Las imágenes PNG con fondo transparente se convierten a PDF con fondo blanco, ya que PDF no soporta transparencia de la misma manera que PNG." } },
            { "@type": "Question", "name": "¿La conversión reduce la calidad?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it preserva la resolución y calidad completa de tu imagen PNG en el PDF resultante." } },
            { "@type": "Question", "name": "¿Es seguro subir mis imágenes?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Todas las transferencias están cifradas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." } },
            { "@type": "Question", "name": "¿Cual es el tamaño máximo de archivo?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir hasta 25MB por imagen. Los suscriptores Pro y Business pueden subir hasta 200MB por imagen." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
