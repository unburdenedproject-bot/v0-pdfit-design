import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileText, Zap, Shield, Upload , Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF a Google Docs — Abre PDFs en Google Docs | PDF.it",
  description: "Aprende como convertir un PDF a formato Google Docs. Convierte PDF a Word con PDF.it, sube a Google Drive y abre en Google Docs para editar y colaborar facilmente.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/pdf-a-google-docs",
    languages: { "en": "https://www.pdf.it.com/pdf-to-google-docs", "es": "https://www.pdf.it.com/es/pdf-a-google-docs", "pt-BR": "https://www.pdf.it.com/br/pdf-para-google-docs" },
  },
}

export default function PDFAGoogleDocsPage() {
  const faqs = [
    {
        "q": "Puedo abrir un PDF directamente en Google Docs?",
        "a": "Google Drive puede abrir PDFs, pero el formato a menudo se rompe. Para mejores resultados, convierte el PDF a DOCX primero usando PDF.it, luego sube el DOCX a Google Drive y abrelo con Google Docs. Esto preserva formato, tablas e imagenes mucho mejor."
    },
    {
        "q": "Por que deberia convertir a DOCX antes de subir a Google Docs?",
        "a": "Google Docs maneja archivos DOCX mucho mejor que PDFs. Cuando abres un PDF directamente, a menudo pierde diseno, fuentes y estructura de tablas. Convertir a DOCX primero preserva el formato."
    },
    {
        "q": "Este metodo es gratis?",
        "a": "La conversion de PDF a Word en PDF.it esta disponible para suscriptores Pro y Business. Una vez que tengas el archivo DOCX, subirlo a Google Drive y abrirlo en Google Docs es completamente gratis."
    },
    {
        "q": "Se preservara el formato en Google Docs?",
        "a": "Convertir PDF a DOCX con PDF.it preserva la mayoria del formato incluyendo fuentes, tablas, imagenes y diseno. Google Docs puede hacer ajustes menores al abrir el DOCX, pero el resultado es mucho mejor que abrir el PDF directamente."
    },
    {
        "q": "Puedo colaborar en el documento despues de convertir?",
        "a": "Si. Una vez que el DOCX se abre en Google Docs, puedes compartirlo, usar colaboracion en tiempo real, agregar comentarios, sugerir ediciones y rastrear cambios."
    },
    {
        "q": "Puedo hacer esto en un Chromebook?",
        "a": "Si. PDF.it funciona en cualquier navegador, incluyendo Chrome en Chromebooks. Convierte tu PDF a DOCX, descargalo, sube a Google Drive y abre en Google Docs — todo sin instalar ningun software."
    }
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a Google Docs</h1>
              <p className="text-xl text-slate-300 mb-8">Abre cualquier PDF en Google Docs con formato perfecto. Convierte a Word primero con PDF.it, luego sube a Google Drive para editar y colaborar facilmente.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Preserva el Formato</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Funciona en Cualquier Dispositivo</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Google Drive puede tecnicamente abrir PDFs, pero los resultados a menudo son decepcionantes — las tablas se rompen, las fuentes cambian y las imagenes se mueven. Al convertir primero a DOCX con PDF.it, obtienes un documento limpio y editable que Google Docs puede renderizar correctamente con formato, tablas e imagenes intactos.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Mejor formato que abrir PDFs directamente</li>
              <li className="flex items-center gap-2">✓ Tablas, imagenes y estructura de texto preservados</li>
              <li className="flex items-center gap-2">✓ Edicion y colaboracion completa en Google Docs</li>
              <li className="flex items-center gap-2">✓ Comparte y colabora en tiempo real con tu equipo</li>
            </ul>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <Link href="/es/pdf-a-word" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg">Paso 1: Convertir PDF a Word</Link>
            <p className="text-sm text-slate-500 mt-3">Luego sube el DOCX a Google Drive y abre con Google Docs</p>
          </div>
        </section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Edicion Colaborativa", desc: "Necesitas que varias personas editen un PDF? Convierte a formato Google Docs para que todo tu equipo pueda hacer cambios simultaneamente con colaboracion en tiempo real y comentarios." },
              { title: "Funciona en Chromebooks", desc: "Los Chromebooks ejecutan Google Docs nativamente pero no pueden instalar Word. Convierte tu PDF a DOCX con PDF.it, luego abre en Google Docs para edicion completa en ChromeOS." },
              { title: "Flujo de Trabajo en la Nube", desc: "Mantiene todos tus documentos en Google Drive. Convierte PDFs a formato Google Docs para que todo viva en un sistema organizado, buscable y basado en la nube." },
            ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
          </div></div>
        </section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Abrir un PDF en Google Docs</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Convierte PDF a Word", desc: "Usa PDF.it para convertir tu PDF a DOCX" },{ num: "2", title: "Sube a Google Drive", desc: "Sube el archivo DOCX a drive.google.com" },{ num: "3", title: "Abre con Google Docs", desc: "Haz doble clic en el archivo para editar" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a Word DOC" },{ name: "PDF a DOCX", href: "/es/pdf-a-docx", desc: "Convierte PDF a formato DOCX" },{ name: "PDF a Google Sheets", href: "/es/pdf-a-google-sheets", desc: "Tablas PDF a Google Sheets" },{ name: "Escaner OCR", href: "/es/ocr-pdf", desc: "Extrae texto de escaneos" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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
