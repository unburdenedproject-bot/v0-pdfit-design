import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { EsignInterface } from "@/components/esign-interface"
import { PenTool, Eye, Zap, Shield, ArrowLeftRight, Lock, Layers } from "lucide-react"

export const metadata = {
  title: "Firma Electrónica de PDFs en Línea — Agrega Firmas a Documentos PDF | PDF.it",
  description:
    "Firma documentos PDF en línea con PDF.it. Dibuja, escribe o sube tu firma, colócala en cualquier página y descarga tu PDF firmado al instante. Sin imprimir ni escanear.",
  alternates: {
    canonical: "https://pdf.it.com/es/firma-electrónica",
    languages: {
      en: "https://pdf.it.com/esign",
      es: "https://pdf.it.com/es/firma-electrónica",
      pt: "https://pdf.it.com/br/assinatura-eletronica",
    },
  },
}

export default function EsignPageEs() {
  const faqs = [
    { q: "¿Qué es la Firma Electrónica?", a: "La Firma Electrónica te permite agregar firmas electrónicas a documentos PDF. Puedes dibujar tu firma, escribir tu nombre en una fuente de firma, o subir una imagen de tu firma. Luego colócala en cualquier parte del documento y descarga el PDF firmado." },
    { q: "¿La firma queda incrustada en el PDF?", a: "Sí. La firma se incrusta permanentemente en el PDF como parte del documento. Aparece en la página y se incluye cuando el PDF se imprime o comparte." },
    { q: "¿Puedo firmar múltiples páginas?", a: "Sí. Puedes navegar por todas las páginas de tu PDF y colocar firmas en cualquier página. También puedes colocar múltiples firmas en una sola página." },
    { q: "¿Qué opciones de firma están disponibles?", a: "Puedes dibujar tu firma a mano alzada usando el mouse o trackpad, escribir tu nombre y elegir entre diferentes fuentes de firma, o subir una imagen de tu firma manuscrita." },
    { q: "¿La Firma Electrónica es gratis?", a: "La Firma Electrónica está disponible como función del plan Business por $13.99/mes. Incluye el editor de firmas junto con otras herramientas Business como Automatización de Flujos, Redacción de PDF, Comparar PDF y Extracción de Tablas." },
    { q: "¿Cómo agrego una firma a un PDF?", a: "Sube tu PDF, crea tu firma dibujando, escribiendo o subiendo una imagen. Haz clic en Colocar en PDF y luego en el lugar donde quieres la firma. Cuando termines, haz clic en Aplicar firmas para incrustarlas y descargar el PDF firmado." },
    { q: "¿Puedo quitar una firma colocada antes de aplicar?", a: "Sí. Antes de aplicar las firmas, puedes quitar cualquier firma colocada desde la lista lateral. Una vez aplicadas y descargadas, las firmas quedan incrustadas permanentemente." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* 1. Hero */}
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
                <PenTool className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Firma Electrónica de PDFs en Línea</h1>
              <p className="text-xl text-slate-300 mb-8">
                Agrega firmas electrónicas a cualquier documento PDF. Dibuja tu firma, escribe tu nombre en una fuente de firma, o sube una imagen de tu firma manuscrita. Colócala exactamente donde la necesites y descarga el PDF firmado al instante.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><PenTool className="h-4 w-4 text-[#14D8C4]" /><span>Dibuja / Escribe / Sube</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Colocación Visual</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Soporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Firmar documentos ya no requiere imprimir, firmar a mano, escanear y enviar por correo. Con la Firma Electrónica de PDF.it, agrega tu firma directamente a cualquier PDF en segundos — dibuja a mano alzada, escribe tu nombre o sube una imagen de tu firma. Colócala en cualquier página y descarga el PDF firmado al instante.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Dibuja, escribe o sube tu firma</li>
              <li className="flex items-center gap-2">✓ Colócala en cualquier página con el editor visual</li>
              <li className="flex items-center gap-2">✓ Firmas incrustadas permanentemente en el PDF</li>
              <li className="flex items-center gap-2">✓ Sin necesidad de imprimir o escanear</li>
            </ul>
          </div>
        </section>

        {/* 3. Interface */}
        <EsignInterface locale="es" />

        {/* 4. Feature Blocks */}
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
                { title: "Contratos y Acuerdos", desc: "Firma contratos comerciales, acuerdos de freelance y contratos con proveedores sin demoras. Coloca tu firma en la línea designada y devuelve el PDF firmado al instante." },
                { title: "Recursos Humanos y Empleo", desc: "Firma cartas de oferta, acuerdos de confidencialidad, formularios fiscales y documentos de incorporación. Nuevos empleados y gerentes pueden firmar y devolver documentos rápidamente." },
                { title: "Bienes Raíces, Escuela y Gobierno", desc: "Firma arrendamientos, permisos, formularios de inscripción y solicitudes gubernamentales sin visitar una oficina. Completa y devuelve formularios firmados desde cualquier lugar." },
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

        {/* 5. How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Firmar un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
                { num: "2", title: "Crea tu firma", desc: "Dibuja, escribe o sube tu firma" },
                { num: "3", title: "Coloca y descarga", desc: "Haz clic donde quieras colocarla y aplica" },
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

        {/* 6. Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Redacción PDF", href: "/es/redaccion-pdf", desc: "Elimina permanentemente texto sensible de PDFs." },
                { name: "Comparar PDF", href: "/es/comparar-pdf", desc: "Compara dos PDFs lado a lado y resalta diferencias." },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega protección con contraseña a tus documentos." },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea campos de formulario y anotaciones en un PDF plano." },
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

        {/* 7. FAQ */}
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

        {/* 8. FAQ Schema */}
        <Script id="faq-schema-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
