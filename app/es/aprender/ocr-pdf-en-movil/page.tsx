import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR un PDF en Tu Teléfono (iPhone y Android) | PDF.it",
  description: "Aprende como ejecutar OCR en un PDF desde tu teléfono. Sin app necesaria — usa PDF.it en Safari o Chrome en iPhone y Android para hacer PDFs escaneados buscables.",
  keywords: "ocr pdf en teléfono, ocr pdf iphone, escanear documento ocr android, ocr pdf móvil",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Puedo ejecutar OCR en mi iPhone sin una app?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El Escáner OCR de PDF.it funciona en Safari, Chrome o cualquier navegador móvil en iPhone. Sube tu PDF escaneado, seleccióna el idioma, ejecuta OCR y descarga la version buscable — todo sin instalar ninguna app." } },
  { "@type": "Question", "name": "Funciona el OCR en teléfonos Android?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en Android en Chrome, Firefox o cualquier otro navegador móvil. El proceso es el mismo — sube tu PDF, ejecuta OCR y descarga el resultado buscable." } },
  { "@type": "Question", "name": "Puedo escanear un documento con la camara de mi teléfono y hacerle OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Usa el escáner integrado de tu teléfono (Notas en iPhone, Google Drive en Android) para capturar el documento como PDF, luego subelo al Escáner OCR de PDF.it." } },
  { "@type": "Question", "name": "Que tamaño de archivo puedo hacer OCR en móvil?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro de PDF.it pueden procesar PDFs hasta 200MB en cualquier dispositivo, incluyendo móvil." } },
  { "@type": "Question", "name": "El OCR en móvil sera más lento que en computadora?", "acceptedAnswer": { "@type": "Answer", "text": "No. El procesamiento OCR ocurre en los servidores de PDF.it, no en tu dispositivo. La velocidad es la misma ya sea que uses teléfono, tableta o computadora." } },
  { "@type": "Question", "name": "El OCR en móvil es una función gratuita?", "acceptedAnswer": { "@type": "Answer", "text": "El Escáner OCR es una función Pro en PDF.it, disponible por $3.99/mes. Esto aplica tanto para uso móvil como de escritorio." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Hacer OCR a un PDF en Tu Teléfono", "description": "Haz un PDF escaneado buscable desde tu iPhone o Android en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Abre PDF.it en tu navegador móvil", "text": "Ve a pdf.it.com/ocr-scanner en Safari (iPhone) o Chrome (Android). No necesitas instalar ninguna app." },
  { "@type": "HowToStep", "name": "Sube tu PDF escaneado y ejecuta OCR", "text": "Toca el area de carga, seleccióna tu PDF escaneado, elige el idioma del documento y toca el boton OCR." },
  { "@type": "HowToStep", "name": "Descarga el PDF buscable", "text": "Una vez que termine el procesamiento, descarga tu PDF buscable. Ahora puedes buscar texto, copiar contenido y compartir el documento mejorado." }
] }

export default function OCRPDFEnMovilPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR un PDF en Tu Teléfono (iPhone y Android)</h1>
          <p className="text-xl text-slate-300">Sin computadora? Sin problema. Puedes escanear un documento con la camara de tu teléfono y ejecutar OCR directamente desde tu navegador — sin app necesaria.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Abre el Escáner OCR en tu teléfono ahora mismo (función Pro).</p></div>
          <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Escáner OCR <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que OCR en Tu Teléfono?</h2>
            <p className="text-slate-600 mb-4">No siempre estas cerca de una computadora — pero casi siempre tienes tu teléfono. Estas son las situaciones más comunes donde el OCR móvil salva el día:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Captura de documentos en movimiento.</strong> Recibes un documento impreso en una reunion, lo escaneas con la camara de tu teléfono y le haces OCR inmediatamente.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Recibos y gastos.</strong> Fotografías un recibo en un restaurante o tienda, lo conviertes a PDF y ejecutas OCR para extraer montos y fechas.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Extracción rápida de texto.</strong> Necesitas copiar un parrafo de una página impresa a un mensaje de texto o correo? Escanea, OCR, copia y pega — todo desde tu teléfono.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Documentos de viaje.</strong> Escanea pases de abordar, confirmaciones de hotel o documentos de visa mientras viajas y hazlos buscables.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Notas de estudiantes y libros de texto.</strong> Fotografías páginas de libros o materiales de clase y les haces OCR para buscar términos específicos al estudiar.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como Hacer OCR a un PDF en Tu Teléfono (Paso a Paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Escanea o seleccióna tu documento", desc: "Usa el escáner integrado de tu teléfono (Notas en iPhone, Google Drive en Android) para capturar un PDF limpio. O seleccióna un PDF escaneado existente de tu app de Archivos. Para mejores resultados, pasa el escaneo por Limpieza de Escaneo de Teléfono primero." },
                { title: "Abre el Escáner OCR de PDF.it", desc: "Ve a pdf.it.com/ocr-scanner en Safari (iPhone) o Chrome (Android). Toca el area de carga y seleccióna tu PDF. Elige el idioma del documento del menu desplegable." },
                { title: "Procesa y descarga", desc: "Toca el boton OCR. El procesamiento ocurre en los servidores de PDF.it, así qué es rápido sin importar tu modelo de teléfono. Cuando termine, toca Descargar para guardar el PDF buscable en tu dispositivo." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de OCR para Usuarios de iPhone</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Escanea con la App de Notas</h3><p className="text-slate-600">Abre Notas, crea una nueva nota, toca el icono de camara y seleccióna &quot;Escanear Documentos.&quot; El escáner integrado detecta automáticamente bordes de página, corrige perspectiva y guarda como PDF limpio.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Guarda en Archivos para Fácil Carga</h3><p className="text-slate-600">Después de escanear en Notas, comparte el escaneo y guardalo en Archivos. Cuando abras el Escáner OCR de PDF.it en Safari, puedes navegar Archivos directamente para selecciónar tu PDF.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa Safari para Mejor Compatibilidad</h3><p className="text-slate-600">Aunque PDF.it funciona en cualquier navegador, Safari es el predeterminado en iPhone y ofrece la experiencia de carga de archivos más fluida.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de OCR para Usuarios de Android</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Escanea con Google Drive</h3><p className="text-slate-600">Abre Google Drive, toca el boton + y seleccióna &quot;Escanear.&quot; El escáner de Google Drive tiene excelente detección de bordes y mejora automática de imagen.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa Chrome para Cargas de Archivos</h3><p className="text-slate-600">Chrome en Android maneja cargas de archivos de forma confiable. Cuando toques el area de carga en PDF.it, puedes navegar tu carpeta de Descargas o Google Drive.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Revisa tus Descargas</h3><p className="text-slate-600">Después del procesamiento OCR, el PDF buscable se descarga a tu carpeta de Descargas por defecto. Puedes compartirlo via correo, WhatsApp o cualquier otra app directamente.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Mejores Resultados de OCR en Movil</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa Limpieza de Escaneo de Teléfono primero.</strong> Antes de ejecutar OCR, sube tu escaneo de teléfono a <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> de PDF.it.</li>
              <li>&#10003; <strong>Escanea con buena iluminacion.</strong> Luz natural funciona mejor. Evita escanear bajo luces fluorescentes y nunca uses flash.</li>
              <li>&#10003; <strong>Sostiene el teléfono directamente arriba.</strong> Fotografiar en ángulo crea distorsion de perspectiva que reduce la precisión del OCR.</li>
              <li>&#10003; <strong>Usa las apps de escáner integradas.</strong> Notas (iPhone) y Google Drive (Android) tienen modos de escaneo que recortan, enderezan y mejoran automáticamente.</li>
              <li>&#10003; <strong>Selecciona el idioma correcto.</strong> Esto es igual de importante en móvil. Siempre configura el idioma correcto. Para más consejos, ve nuestra guia de <Link href="/es/aprender/consejos-precision-ocr" className="text-[#14D8C4] hover:underline">Consejos de Precisión OCR</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">OCR Cualquier PDF Desde Tu Teléfono</h2>
          <p className="text-slate-300 mb-6">Abre PDF.it en tu navegador móvil, sube un PDF escaneado y obtiene una version buscable en segundos. Sin app necesaria.</p>
          <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Probar Escáner OCR (Pro)</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Qué es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
              { title: "OCR PDF a Texto Buscable", href: "/es/aprender/ocr-pdf-a-texto-buscable" },
              { title: "OCR Documento Escaneado (Paso a Paso)", href: "/es/aprender/ocr-documento-escaneado" },
              { title: "Consejos de Precisión OCR", href: "/es/aprender/consejos-precision-ocr" },
              { title: "Puede el OCR Leer Texto Manuscrito?", href: "/es/aprender/ocr-texto-manuscrito" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "Puedo ejecutar OCR en mi iPhone sin una app?", a: "Si. El Escáner OCR de PDF.it funciona en Safari, Chrome o cualquier navegador móvil. Sube tu PDF, ejecuta OCR y descarga — todo sin instalar apps." },
              { q: "Funciona el OCR en teléfonos Android?", a: "Si. PDF.it funciona en Android en Chrome, Firefox o cualquier navegador. El proceso es el mismo." },
              { q: "Puedo escanear un documento con mi teléfono y hacerle OCR?", a: "Si. Usa el escáner integrado de tu teléfono (Notas en iPhone, Google Drive en Android) para capturar como PDF, luego sube al Escáner OCR." },
              { q: "Que tamaño de archivo puedo hacer OCR en móvil?", a: "Los usuarios Pro pueden procesar PDFs hasta 200MB en cualquier dispositivo, incluyendo móvil." },
              { q: "El OCR en móvil es más lento que en computadora?", a: "No. El procesamiento ocurre en los servidores de PDF.it. La velocidad es la misma en cualquier dispositivo." },
              { q: "El OCR en móvil es gratuito?", a: "El Escáner OCR es una función Pro en PDF.it, disponible por $3.99/mes. Aplica tanto para uso móvil como de escritorio." },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
