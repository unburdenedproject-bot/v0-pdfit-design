import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Escanear PDF a Texto — OCR para Documentos Escaneados | PDF.it",
  description: "Convierte PDFs escaneados a texto buscable y copiable con el OCR de PDF.it. Extrae texto de escaneos, fotos y PDFs basados en imagen — rápido y en tu navegador.",
  alternates: { canonical: "https://www.pdf.it.com/es/escanear-pdf-a-texto", languages: { en: "/scan-pdf-to-text", es: "/es/escanear-pdf-a-texto" } },
}

export default function EscanearPDFATextoPage() {
  const faqs = [
    {
        "q": "¿Cómo funciona el OCR en PDFs escaneados?",
        "a": "El OCR (Reconocimiento Óptico de Caracteres) analiza las imágenes en tu PDF escaneado e identifica letras, palabras y párrafos. PDF.it los convierte en texto selecciónable, buscable y copiable."
    },
    {
        "q": "¿Qué tan preciso es el OCR en documentos escaneados?",
        "a": "La precisión del OCR depende de la calidad del escaneo. Escaneos claros y de alta resolución generalmente producen resultados muy precisos. Escaneos borrosos, inclinados o de bajo contraste pueden tener errores que necesitan revisión manual."
    },
    {
        "q": "¿Qué idiomas soporta el OCR?",
        "a": "El OCR de PDF.it soporta múltiples idiomas incluyendo inglés, español, francés, alemán, portugués, italiano y muchos más. Selecciona el idioma de tu documento antes de procesar para mejores resultados."
    },
    {
        "q": "¿Cuál es la diferencia entre un PDF escaneado y un PDF digital?",
        "a": "Un PDF digital contiene datos de texto reales que se pueden selecciónar y copiar. Un PDF escaneado es esencialmente una imagen de un documento — el texto es parte de la imagen y no se puede selecciónar sin procesamiento OCR."
    },
    {
        "q": "¿Es gratis el escáner OCR?",
        "a": "El Escáner OCR es una función Pro. Los usuarios gratuitos pueden probarlo con uso limitado. Los suscriptores Pro obtienen procesamiento OCR ilimitado con velocidad prioritaria."
    },
    {
        "q": "¿Puedo escanear un PDF a texto desde mi celular?",
        "a": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF escaneado, ejecuta OCR y obtén texto buscable en iPhone o Android."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Scan className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Escanear PDF a Texto</h1>
            <p className="text-xl text-slate-300 mb-8">Convierte PDFs escaneados en texto buscable y copiable usando OCR. Extrae texto de escaneos, fotos y PDFs basados en imagen — rápido y en tu navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Motor OCR Potente</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Resultado Buscable</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Los PDFs escaneados son solo imágenes — no puedes selecciónar, buscar ni copiar el texto. La tecnología OCR de PDF.it lee el texto en tus documentos escaneados y lo convierte en texto buscable, copiable y editable. Soporte para múltiples idiomas incluido.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Convierte PDFs escaneados en texto buscable</li>
            <li className="flex items-center gap-2">✓ OCR lee texto de imágenes, fotos y escaneos</li>
            <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            <li className="flex items-center gap-2">✓ Sin instalación — ejecuta OCR en tu navegador</li>
          </ul>
        </div></section>

        <OcrPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Digitaliza Documentos en Papel", desc: "Contratos escaneados, recibos, cartas y formularios están atrapados como imágenes. El OCR de PDF.it lee el texto de estos escaneos y lo hace selecciónable y copiable — convirtiendo papel en datos digitales." },
              { title: "Haz PDFs Escaneados Buscables", desc: "Después del procesamiento OCR, tu PDF escaneado se vuelve buscable. Usa Ctrl+F para encontrar palabras, nombres, fechas o cantidades específicas en documentos que antes eran solo imágenes estáticas." },
              { title: "Extrae Datos de Documentos Antiguos", desc: "¿Tienes años de facturas, registros o correspondencia escaneada? Ejecuta OCR para extraer el texto, luego cópialo en hojas de cálculo, bases de datos o sistemas de gestión documental modernos." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div></div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Escanear un PDF a Texto</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Sube tu PDF escaneado", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
              { num: "2", title: "Selecciona idioma y ejecuta OCR", desc: "Elige el idioma del documento para mejores resultados" },
              { num: "3", title: "Descarga PDF buscable", desc: "Obtén tu archivo con texto buscable al instante" },
            ].map((step) => (
              <div key={step.num} className="flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Procesamiento OCR completo" },
              { name: "PDF a TXT", href: "/es/pdf-a-txt", desc: "Extrae texto de PDFs digitales" },
              { name: "Extraer Texto", href: "/es/extraer-texto-de-pdf", desc: "Copia texto de cualquier PDF" },
              { name: "Limpiar Escaneo", href: "/es/limpiar-escaneo-celular", desc: "Limpia escaneos de celular" },
            ].map((tool) => (
              <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              </div>
            ))}
          </div>
        </div></section>

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
