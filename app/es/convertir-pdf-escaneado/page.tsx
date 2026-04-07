import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PDF Escaneado a Texto Buscable — OCR Online | PDF.it",
  description: "Convierte PDFs escaneados en documentos buscables y editables con la tecnología OCR de PDF.it. Transforma PDFs basados en imagen en texto que puedes copiar y buscar.",
  alternates: { canonical: "https://www.pdf.it.com/es/convertir-pdf-escaneado", languages: { en: "/convert-scanned-pdf", es: "/es/convertir-pdf-escaneado" } },
}

export default function ConvertirPDFEscaneadoPage() {
  const faqs = [
    {
        "q": "¿Cómo convierto un PDF escaneado a texto buscable?",
        "a": "Sube tu PDF escaneado a PDF.it, selecciona el idioma del documento y haz clic en Ejecutar OCR. El motor OCR de PDF.it lee el texto de las imágenes escaneadas y produce un PDF buscable y copiable."
    },
    {
        "q": "¿Cuál es la calidad de la conversión OCR?",
        "a": "La calidad de conversión depende de la resolución y claridad del escaneo. Escaneos de alta resolución y bien iluminados producen excelentes resultados. Escaneos de baja calidad, texto manuscrito o fuentes inusuales pueden reducir la precisión."
    },
    {
        "q": "¿Puedo convertir el PDF escaneado a un documento Word editable?",
        "a": "Sí. Primero, usa el OCR de PDF.it para hacer tu PDF escaneado buscable. Luego usa la herramienta PDF a Word para convertirlo en un documento Word editable que puedes modificar libremente."
    },
    {
        "q": "¿Puedo convertir por lotes múltiples PDFs escaneados?",
        "a": "La conversión OCR por lotes está disponible para suscriptores Pro. Sube múltiples PDFs escaneados a la vez y conviértelos todos a documentos buscables con un solo clic."
    },
    {
        "q": "¿El OCR funciona con documentos manuscritos?",
        "a": "El OCR funciona mejor con texto impreso. Documentos manuscritos pueden producir resultados limitados o imprecisos dependiendo de la claridad de la escritura. Escritura manuscrita limpia puede funcionar, pero la cursiva generalmente no es soportada."
    },
    {
        "q": "¿Puedo convertir un PDF escaneado desde mi celular?",
        "a": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF escaneado, ejecuta la conversión OCR y descarga el resultado buscable en iPhone o Android."
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
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF Escaneado a Texto Buscable</h1>
            <p className="text-xl text-slate-300 mb-8">Transforma PDFs basados en imagen en documentos buscables y editables con tecnología OCR. Convierte escaneos antiguos, fotos y PDFs archivados en texto que puedes copiar, buscar y reutilizar.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Motor OCR Avanzado</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Resultado Buscable</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Los PDFs escaneados parecen documentos regulares, pero en realidad son imágenes — no puedes seleccionar, buscar ni copiar ningún texto. El OCR de PDF.it convierte estos PDFs basados en imagen en documentos completamente buscables y copiables con los que puedes trabajar.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Convierte PDFs escaneados en texto buscable y seleccionable</li>
            <li className="flex items-center gap-2">✓ Soporte multiidioma para documentos internacionales</li>
            <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            <li className="flex items-center gap-2">✓ Sin instalación — convierte escaneos en tu navegador</li>
          </ul>
        </div></section>

        <OcrPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Busca Archivos Antiguos al Instante", desc: "Convierte documentos escaneados en documentos buscables para que puedas encontrar información específica con Ctrl+F en lugar de desplazarte por cientos de páginas manualmente." },
              { title: "Haz Documentos Accesibles", desc: "Los PDFs escaneados no son accesibles para lectores de pantalla ni herramientas de texto a voz. El OCR agrega una capa de texto, haciendo tus documentos accesibles para personas con discapacidad visual." },
              { title: "Prepara Escaneos para Edición", desc: "¿Quieres editar un documento escaneado? Primero conviértelo con OCR para hacer el texto seleccionable, luego usa PDF a Word para crear un documento editable que puedes modificar libremente." },
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
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Convertir un PDF Escaneado</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Sube tu PDF escaneado", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
              { num: "2", title: "Selecciona idioma y ejecuta OCR", desc: "Elige el idioma del documento para mejores resultados" },
              { num: "3", title: "Descarga tu PDF buscable", desc: "O convierte más a Word o TXT" },
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
              { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a Word editable" },
              { name: "PDF a TXT", href: "/es/pdf-a-txt", desc: "Extrae texto de PDFs" },
              { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño de PDF escaneado" },
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
