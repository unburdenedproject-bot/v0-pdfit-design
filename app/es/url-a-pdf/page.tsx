import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { UrlPdfInterface } from "@/components/url-pdf-interface"
import { Globe, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir URL a PDF Online — Guarda Cualquier Página Web | PDF.it",
  description:
    "Convierte cualquier página web en un PDF de alta calidad. Introduce una URL y descarga un PDF perfectamente formateado. Tamaño, orientación y margenes personalizables. Función Pro de PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/es/url-a-pdf",
    languages: {
      en: "https://pdf.it.com/url-to-pdf",
      es: "https://pdf.it.com/es/url-a-pdf",
      pt: "https://pdf.it.com/br/url-para-pdf",
    },
  },
}

export default function UrlAPdfPageEs() {
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
                <Globe className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir URL a PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte cualquier página web en un PDF de alta calidad. Introduce una URL, personaliza el layout y descarga un PDF perfectamente formateado en segundos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Cualquier Página Pública</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Layout Personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Descarga Instantanea</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Las páginas web pueden cambiar, desaparecer o requerir conexión a internet. Convertir una URL a PDF te permite guardar una copia permanente del contenido exactamente como aparece — con su diseño, imágenes y formato intactos. Perfecto para archivar artículos, guardar recibos o compartir contenido offline.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convierte cualquier página web pública a PDF</li>
              <li className="flex items-center gap-2">✓ Elige tamaño de página, orientación y margenes</li>
              <li className="flex items-center gap-2">✓ Preserva texto, imágenes y layout de la página</li>
              <li className="flex items-center gap-2">✓ Sin instalación — funciona desde tu navegador</li>
              <li className="flex items-center gap-2">✓ Perfecto para lectura offline, impresión y archivo</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <UrlPdfInterface />

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
                { title: "Archiva Artículos e Investigación", desc: "Captura artículos, documentación y publicaciones de blog como PDFs. Construye una biblioteca permanente que puedes consultar incluso cuando la página original desaparezca." },
                { title: "Preserva Páginas Web Permanentemente", desc: "Conserva páginas importantes antes de que cambien o sean eliminadas. Crea registros con fecha del contenido web para cumplimiento, evidencia o referencia personal." },
                { title: "Comparte Contenido Offline", desc: "Convierte páginas web a PDF y compartelas con colegas o clientes que no tengan acceso a internet. Los PDFs funcionan en cualquier dispositivo sin navegador." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir URL a PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Introduce la URL", desc: "Pega la dirección de la página web" },
                { num: "2", title: "Elige las opciones", desc: "Tamaño de página, orientación y margenes" },
                { num: "3", title: "Descarga tu PDF", desc: "Obtiene un documento perfectamente formateado" },
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
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte páginas PDF a imágenes" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del PDF" },
                { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Extrae texto de escaneados" },
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
                { q: "¿Que tipos de páginas web puedo convertir a PDF?", a: "Puedes convertir cualquier página web pública. Funciona con artículos, blogs, documentación y más. Las páginas que requieren inicio de sesión pueden no renderizarse completamente." },
                { q: "¿Puedo personalizar el tamaño y orientación del PDF?", a: "Si. Puedes elegir el tamaño de página (Carta, A4, Legal), la orientación (vertical u horizontal) y ajustar los margenes." },
                { q: "¿El PDF conserva el diseño original?", a: "PDF.it renderiza la página web como un navegador real y captura el diseño, imágenes, fuentes y colores con alta fidelidad." },
                { q: "¿Es seguro convertir páginas web a PDF?", a: "Si. Todas las transferencias están cifradas con SSL y los archivos se eliminan después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿URL a PDF es gratis?", a: "URL a PDF es una función Pro disponible por $3.99/mes. El plan Pro incluye OCR, generación de QR, procesamiento por lotes y todas las herramientas premium." },
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
            { "@type": "Question", "name": "¿Que tipos de páginas web puedo convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes convertir cualquier página web pública. Funciona con artículos, blogs, documentación y más. Las páginas que requieren inicio de sesión pueden no renderizarse completamente." } },
            { "@type": "Question", "name": "¿Puedo personalizar el tamaño y orientación del PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Puedes elegir el tamaño de página (Carta, A4, Legal), la orientación (vertical u horizontal) y ajustar los margenes." } },
            { "@type": "Question", "name": "¿El PDF conserva el diseño original?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it renderiza la página web como un navegador real y captura el diseño, imágenes, fuentes y colores con alta fidelidad." } },
            { "@type": "Question", "name": "¿Es seguro convertir páginas web a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Todas las transferencias están cifradas con SSL y los archivos se eliminan después de tu sesión. Nunca almacenamos ni compartimos tus documentos." } },
            { "@type": "Question", "name": "¿URL a PDF es gratis?", "acceptedAnswer": { "@type": "Answer", "text": "URL a PDF es una función Pro disponible por $3.99/mes. El plan Pro incluye OCR, generación de QR, procesamiento por lotes y todas las herramientas premium." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
