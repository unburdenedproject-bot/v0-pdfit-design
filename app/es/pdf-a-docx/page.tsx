import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Convertir PDF a DOCX — PDF a Documento Word | PDF.it",
  description: "Convierte PDF a DOCX en línea con PDF.it. Transforma cualquier PDF en un archivo Word .docx editable — preserva formato, tablas e imágenes. Rápido, seguro, sin instalación.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/pdf-a-docx",
    languages: { "en": "https://www.pdf.it.com/pdf-to-docx", "es": "https://www.pdf.it.com/es/pdf-a-docx", "pt-BR": "https://www.pdf.it.com/br/pdf-para-docx" },
  },
}

export default function PDFADocxPage() {
  const faqs = [
    { q: "Cual es la diferencia entre DOCX y DOC?", a: "DOCX es el formato moderno de Word introducido con Microsoft Office 2007. Usa compresión basada en XML, haciendo archivos más pequeños y compatibles que el viejo formato DOC. PDF.it convierte PDFs a DOCX para máxima compatibilidad con procesadores de texto modernos." },
    { q: "Como convierto un PDF a DOCX?", a: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga tu archivo DOCX editable. La conversión preserva diseño, fuentes, tablas e imágenes lo más fielmente posible." },
    { q: "Puedo editar el archivo DOCX después de la conversión?", a: "Si. El archivo DOCX es completamente editable en Microsoft Word, Google Docs, LibreOffice Writer, Apple Pages y cualquier procesador de texto que soporte el formato DOCX." },
    { q: "Se preservaran las tablas e imágenes en el DOCX?", a: "PDF.it preserva tablas, imágenes, encabezados, pies de página y formato de texto durante la conversión. Diseños complejos con elementos superpuestos pueden requerir ajustes menores después de la conversión." },
    { q: "El convertidor de PDF a DOCX es gratis?", a: "La conversión de PDF a DOCX está disponible para suscriptores Pro y Business. Las cuentas gratuitas pueden usar herramientas básicas de PDF, mientras que Pro desbloquea conversiónes avanzadas incluyendo PDF a DOCX, XLSX y PPTX." },
    { q: "Puedo convertir un PDF escaneado a DOCX?", a: "Los PDFs escaneados contienen imágenes de texto en lugar de texto real. Usa primero la herramienta Escáner OCR de PDF.it para extraer el texto, luego convierte el resultado a DOCX para editar." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileText className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a DOCX</h1>
              <p className="text-xl text-slate-300 mb-8">Transforma cualquier PDF en un archivo DOCX editable — el formato moderno de Microsoft Word. Preserva formato, tablas e imágenes.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Ultrarápido</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Calidad Perfecta</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">DOCX es el formato moderno de documentos Word usado por Microsoft Word, Google Docs y LibreOffice. A diferencia del viejo formato DOC, los archivos DOCX son más pequeños, seguros y universalmente compatibles. Cuando conviertes un PDF a DOCX con PDF.it, obtienes un documento completamente editable que abre en cualquier procesador de texto moderno — listo para editar, comentar y colaborar.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convierte PDF a formato DOCX editable en línea</li>
              <li className="flex items-center gap-2">✓ Preserva diseño, fuentes, tablas e imágenes</li>
              <li className="flex items-center gap-2">✓ Abre en Word, Google Docs y LibreOffice</li>
              <li className="flex items-center gap-2">✓ Sin instalación — convierte PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="PDF to Word" outputFormat="DOCX" processingMessage="Convirtiendo tu PDF a DOCX..." successMessage="Tu archivo DOCX esta listo!" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Edita Contratos y Propuestas", desc: "Convierte contratos PDF a DOCX para hacer ediciónes, agregar comentarios, rastrear cambios y enviar revisiones limpias — todo en Microsoft Word o Google Docs." },
              { title: "Actualiza Curriculos e Informes", desc: "Necesitas actualizar un curriculo o informe pero solo tienes el PDF? Convierte a DOCX y edita al instante sin empezar desde cero." },
              { title: "Colabora en Tiempo Real", desc: "Convierte PDFs a DOCX para habilitar colaboracion en tiempo real. Comparte via Google Docs o OneDrive para edición en equipo con seguimiento de cambios." },
            ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
          </div></div>
        </section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a DOCX</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir" },{ num: "2", title: "Haz clic en Convertir", desc: "Tu PDF se transforma en DOCX editable" },{ num: "3", title: "Descarga tu DOCX", desc: "Abre en Word, Google Docs o cualquier editor" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a Word DOC" },{ name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Extrae tablas a hoja de cálculo" },{ name: "Escáner OCR", href: "/es/ocr-pdf", desc: "Extrae texto de escaneos" },{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del PDF" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2><div className="space-y-4">
          {faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}
        </div></div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}
