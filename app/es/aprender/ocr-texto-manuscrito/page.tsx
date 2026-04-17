import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Puede el OCR Leer Texto Manuscrito? (Que Esperar) | PDF.it",
  description: "Aprende sobre las limitaciones del OCR con la escritura a mano: que funciona, que no, y consejos para obtener mejores resultados de documentos manuscritos.",
  keywords: "ocr texto manuscrito, ocr escritura a mano, puede ocr leer manuscrito, documento manuscrito ocr",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Puede el OCR leer texto manuscrito?", "acceptedAnswer": { "@type": "Answer", "text": "OCR puede leer algo de texto manuscrito, pero la precisión varia. Letras de imprenta limpias en tinta oscura sobre papel blanco pueden alcanzar 70-85% de precisión. Escritura cursiva o desordenada tendrá menor precisión, frecuentemente por debajo del 50%." } },
  { "@type": "Question", "name": "Por qué la escritura a mano es más difícil para el OCR?", "acceptedAnswer": { "@type": "Answer", "text": "El texto impreso usa formas consistentes. La escritura a mano varia enormemente entre personas — formas, tamaños, espaciado e inclinacion son impredecibles." } },
  { "@type": "Question", "name": "Que tipo de escritura funciona mejor con OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Letras de imprenta limpias escritas en tinta oscura sobre papel blanco dan los mejores resultados. Mayusculas suelen ser más fáciles para OCR." } },
  { "@type": "Question", "name": "Puede el OCR leer escritura cursiva?", "acceptedAnswer": { "@type": "Answer", "text": "El OCR estándar tiene capacidad muy limitada para leer cursiva. Para documentos en cursiva, probablemente necesitaras reescribir manualmente." } },
  { "@type": "Question", "name": "Como mejorar la precisión OCR en manuscritos?", "acceptedAnswer": { "@type": "Answer", "text": "Usa tinta oscura, papel blanco, letras de imprenta, deja espacio entre letras, escanea a 400+ DPI y limpia el escaneo antes de OCR." } },
  { "@type": "Question", "name": "Debo usar OCR o reescribir documentos manuscritos?", "acceptedAnswer": { "@type": "Answer", "text": "Para imprenta limpia, OCR ahorra tiempo. Para cursiva o escritura desordenada, reescribir manualmente suele ser más rápido." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Hacer OCR a Texto Manuscrito", "description": "Obtiene los mejores resultados de OCR en documentos manuscritos en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Prepara un escaneo de alta calidad", "text": "Escanea a 400 DPI o más. Usa Limpieza de Escaneo de Teléfono para mejorar contraste si escaneaste con teléfono." },
  { "@type": "HowToStep", "name": "Ejecuta OCR con el idioma correcto", "text": "Sube al Escáner OCR de PDF.it, seleccióna el idioma y procesa el archivo." },
  { "@type": "HowToStep", "name": "Revisa y corrige el resultado", "text": "Descarga y revisa cuidadosamente el texto reconocido. Corrige errores manualmente." }
] }

export default function OCRTextoManuscritoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Puede el OCR Leer Texto Manuscrito? (Que Esperar)</h1>
          <p className="text-xl text-slate-300">OCR funciona muy bien con texto impreso, pero la escritura a mano es un desafio diferente. Aqui hay una mirada honesta a lo que OCR puede y no puede hacer con documentos manuscritos.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Prueba OCR en tu documento manuscrito con el Escáner OCR (Pro).</p></div>
          <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Escáner OCR <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">La Respuesta Honesta: Depende de la Escritura</h2>
            <p className="text-slate-600 mb-4">La tecnologia OCR ha logrado 95 a 99% de precisión en texto impreso. Pero el texto manuscrito es fundamentalmente más difícil porque cada persona escribe diferente.</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Letras de imprenta limpias — 70-85% de precisión.</strong> Si alguien escribio en letras claras y separadas con tinta oscura, OCR reconocera la mayoría del texto.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Escritura promedio — 40-65% de precisión.</strong> La escritura cotidiana de la mayoría de personas. Algunas palabras correctas, otras distorsionadas.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Escritura cursiva — por debajo del 40%.</strong> Las letras conectadas son extremadamente difíciles de segmentar para el OCR estándar.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Escritura desordenada — por debajo del 30%.</strong> Si no puedes leerla tu mismo, OCR tampoco podrá.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Por Que la Escritura a Mano es Tan Difícil para el OCR</h2>
            <div className="space-y-4">
              {[
                { title: "Formas de caracteres inconsistentes", desc: "Las fuentes impresas usan formas identicas. En escritura a mano, la misma persona escribe cada letra diferente dependiendo de la palabra, velocidad y estado de animo." },
                { title: "Letras conectadas y superpuestas", desc: "En cursiva, las letras se mezclan. OCR necesita determinar donde termina una letra y comienza la siguiente — extremadamente difícil con escritura a mano." },
                { title: "Espaciado y alineacion variable", desc: "El texto impreso tiene espaciado uniforme. La escritura a mano sube y baja, palabras espaciadas desigualmente, líneas raramente rectas." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Mejores Resultados de OCR en Manuscrito</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa tinta oscura sobre papel blanco.</strong> Tinta negra o azul oscuro sobre papel blanco limpio crea el mayor contraste.</li>
              <li>&#10003; <strong>Escanea a 400 DPI o más.</strong> La escritura a mano necesita más resolución. Ve nuestra guia de <Link href="/es/aprender/consejos-precision-ocr" className="text-[#14D8C4] hover:underline">Consejos de Precisión OCR</Link>.</li>
              <li>&#10003; <strong>Limpia el escaneo primero.</strong> Pasa los escaneos de teléfono por <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> antes del OCR.</li>
              <li>&#10003; <strong>Escribe en letras de imprenta.</strong> Si creas un documento que sera procesado por OCR, usa letras claras y separadas.</li>
              <li>&#10003; <strong>Deja espacio entre palabras.</strong> Escritura apretada con palabras juntas es mucho más difícil de segmentar.</li>
              <li>&#10003; <strong>Usa papel con líneas.</strong> Mantiene tu texto recto y uniformemente espaciado.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando Usar OCR vs. Cuando Reescribir Manualmente</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa OCR Cuando...</h3><p className="text-slate-600">La escritura es limpia y en imprenta. El documento es largo (10+ páginas). Solo necesitas una version buscable aproximada.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Reescribe Manualmente Cuando...</h3><p className="text-slate-600">La escritura es cursiva o desordenada. El documento es corto (1-3 páginas). La precisión es crítica (documentos legales, registros médicos).</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">El Enfoque Hibrido</h3><p className="text-slate-600">Para documentos con texto mixto impreso y manuscrito (como formularios llenados), ejecuta OCR para capturar las porciones impresas. Luego llena manualmente solo los campos manuscritos.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Elementos Manuscritos Que el OCR Maneja Bien</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Números.</strong> Los digitos manuscritos (0-9) tienen menos formas posibles, así que OCR los reconoce más confiablemente.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Texto en mayusculas de imprenta.</strong> Las letras mayusculas son más distintas entre si.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Campos de formulario.</strong> Entradas cortas en campos son más fáciles de reconocer porque el contexto ayuda.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Palabras aisladas.</strong> Palabras individuales con espacio claro son más fáciles que parrafos densos.</span></li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Prueba OCR en Tu Documento Manuscrito</h2>
          <p className="text-slate-300 mb-6">Sube tu documento manuscrito escaneado para ver que puede extraer el OCR. Para texto impreso, espera resultados casi perfectos.</p>
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
              { title: "OCR PDF en Movil (iPhone y Android)", href: "/es/aprender/ocr-pdf-en-movil" },
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
              { q: "Puede el OCR leer texto manuscrito?", a: "Puede leer algo de texto manuscrito, pero la precisión varia. Letras de imprenta limpias pueden alcanzar 70-85%. Cursiva o desordenada tendrá menor precisión." },
              { q: "Por qué la escritura a mano es más difícil para el OCR?", a: "El texto impreso usa formas consistentes. La escritura a mano varia enormemente entre personas." },
              { q: "Que tipo de escritura funciona mejor con OCR?", a: "Letras de imprenta limpias en tinta oscura sobre papel blanco dan los mejores resultados." },
              { q: "Puede el OCR leer escritura cursiva?", a: "El OCR estándar tiene capacidad muy limitada para leer cursiva. Probablemente necesitaras reescribir manualmente." },
              { q: "Como mejorar la precisión OCR en manuscritos?", a: "Usa tinta oscura, papel blanco, letras de imprenta, deja espacio, escanea a 400+ DPI y limpia antes de OCR." },
              { q: "Debo usar OCR o reescribir?", a: "Para imprenta limpia, OCR ahorra tiempo. Para cursiva o desordenada, reescribir manualmente suele ser más rápido." },
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
