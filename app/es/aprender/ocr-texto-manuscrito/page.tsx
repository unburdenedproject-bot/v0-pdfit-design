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
  { "@type": "Question", "name": "Puede el OCR leer texto manuscrito?", "acceptedAnswer": { "@type": "Answer", "text": "OCR puede leer algo de texto manuscrito, pero la precision varia. Letras de imprenta limpias en tinta oscura sobre papel blanco pueden alcanzar 70-85% de precision. Escritura cursiva o desordenada tendra menor precision, frecuentemente por debajo del 50%." } },
  { "@type": "Question", "name": "Por que la escritura a mano es mas dificil para el OCR?", "acceptedAnswer": { "@type": "Answer", "text": "El texto impreso usa formas consistentes. La escritura a mano varia enormemente entre personas — formas, tamanos, espaciado e inclinacion son impredecibles." } },
  { "@type": "Question", "name": "Que tipo de escritura funciona mejor con OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Letras de imprenta limpias escritas en tinta oscura sobre papel blanco dan los mejores resultados. Mayusculas suelen ser mas faciles para OCR." } },
  { "@type": "Question", "name": "Puede el OCR leer escritura cursiva?", "acceptedAnswer": { "@type": "Answer", "text": "El OCR estandar tiene capacidad muy limitada para leer cursiva. Para documentos en cursiva, probablemente necesitaras reescribir manualmente." } },
  { "@type": "Question", "name": "Como mejorar la precision OCR en manuscritos?", "acceptedAnswer": { "@type": "Answer", "text": "Usa tinta oscura, papel blanco, letras de imprenta, deja espacio entre letras, escanea a 400+ DPI y limpia el escaneo antes de OCR." } },
  { "@type": "Question", "name": "Debo usar OCR o reescribir documentos manuscritos?", "acceptedAnswer": { "@type": "Answer", "text": "Para imprenta limpia, OCR ahorra tiempo. Para cursiva o escritura desordenada, reescribir manualmente suele ser mas rapido." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Hacer OCR a Texto Manuscrito", "description": "Obtiene los mejores resultados de OCR en documentos manuscritos en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Prepara un escaneo de alta calidad", "text": "Escanea a 400 DPI o mas. Usa Limpieza de Escaneo de Telefono para mejorar contraste si escaneaste con telefono." },
  { "@type": "HowToStep", "name": "Ejecuta OCR con el idioma correcto", "text": "Sube al Escaner OCR de PDF.it, selecciona el idioma y procesa el archivo." },
  { "@type": "HowToStep", "name": "Revisa y corrige el resultado", "text": "Descarga y revisa cuidadosamente el texto reconocido. Corrige errores manualmente." }
] }

export default function OCRTextoManuscritoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Puede el OCR Leer Texto Manuscrito? (Que Esperar)</h1>
          <p className="text-xl text-slate-300">OCR funciona muy bien con texto impreso, pero la escritura a mano es un desafio diferente. Aqui hay una mirada honesta a lo que OCR puede y no puede hacer con documentos manuscritos.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Prueba OCR en tu documento manuscrito con el Escaner OCR (Pro).</p></div>
          <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Escaner OCR <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">La Respuesta Honesta: Depende de la Escritura</h2>
            <p className="text-slate-600 mb-4">La tecnologia OCR ha logrado 95 a 99% de precision en texto impreso. Pero el texto manuscrito es fundamentalmente mas dificil porque cada persona escribe diferente.</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Letras de imprenta limpias — 70-85% de precision.</strong> Si alguien escribio en letras claras y separadas con tinta oscura, OCR reconocera la mayoria del texto.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Escritura promedio — 40-65% de precision.</strong> La escritura cotidiana de la mayoria de personas. Algunas palabras correctas, otras distorsionadas.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Escritura cursiva — por debajo del 40%.</strong> Las letras conectadas son extremadamente dificiles de segmentar para el OCR estandar.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Escritura desordenada — por debajo del 30%.</strong> Si no puedes leerla tu mismo, OCR tampoco podra.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Por Que la Escritura a Mano es Tan Dificil para el OCR</h2>
            <div className="space-y-4">
              {[
                { title: "Formas de caracteres inconsistentes", desc: "Las fuentes impresas usan formas identicas. En escritura a mano, la misma persona escribe cada letra diferente dependiendo de la palabra, velocidad y estado de animo." },
                { title: "Letras conectadas y superpuestas", desc: "En cursiva, las letras se mezclan. OCR necesita determinar donde termina una letra y comienza la siguiente — extremadamente dificil con escritura a mano." },
                { title: "Espaciado y alineacion variable", desc: "El texto impreso tiene espaciado uniforme. La escritura a mano sube y baja, palabras espaciadas desigualmente, lineas raramente rectas." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Mejores Resultados de OCR en Manuscrito</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa tinta oscura sobre papel blanco.</strong> Tinta negra o azul oscuro sobre papel blanco limpio crea el mayor contraste.</li>
              <li>&#10003; <strong>Escanea a 400 DPI o mas.</strong> La escritura a mano necesita mas resolucion. Ve nuestra guia de <Link href="/es/aprender/consejos-precision-ocr" className="text-orange-600 hover:underline">Consejos de Precision OCR</Link>.</li>
              <li>&#10003; <strong>Limpia el escaneo primero.</strong> Pasa los escaneos de telefono por <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> antes del OCR.</li>
              <li>&#10003; <strong>Escribe en letras de imprenta.</strong> Si creas un documento que sera procesado por OCR, usa letras claras y separadas.</li>
              <li>&#10003; <strong>Deja espacio entre palabras.</strong> Escritura apretada con palabras juntas es mucho mas dificil de segmentar.</li>
              <li>&#10003; <strong>Usa papel con lineas.</strong> Mantiene tu texto recto y uniformemente espaciado.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando Usar OCR vs. Cuando Reescribir Manualmente</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa OCR Cuando...</h3><p className="text-slate-600">La escritura es limpia y en imprenta. El documento es largo (10+ paginas). Solo necesitas una version buscable aproximada.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Reescribe Manualmente Cuando...</h3><p className="text-slate-600">La escritura es cursiva o desordenada. El documento es corto (1-3 paginas). La precision es critica (documentos legales, registros medicos).</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">El Enfoque Hibrido</h3><p className="text-slate-600">Para documentos con texto mixto impreso y manuscrito (como formularios llenados), ejecuta OCR para capturar las porciones impresas. Luego llena manualmente solo los campos manuscritos.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Elementos Manuscritos Que el OCR Maneja Bien</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Numeros.</strong> Los digitos manuscritos (0-9) tienen menos formas posibles, asi que OCR los reconoce mas confiablemente.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Texto en mayusculas de imprenta.</strong> Las letras mayusculas son mas distintas entre si.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Campos de formulario.</strong> Entradas cortas en campos son mas faciles de reconocer porque el contexto ayuda.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Palabras aisladas.</strong> Palabras individuales con espacio claro son mas faciles que parrafos densos.</span></li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Prueba OCR en Tu Documento Manuscrito</h2>
          <p className="text-slate-300 mb-6">Sube tu documento manuscrito escaneado para ver que puede extraer el OCR. Para texto impreso, espera resultados casi perfectos.</p>
          <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Probar Escaner OCR (Pro)</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Que es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
              { title: "OCR PDF a Texto Buscable", href: "/es/aprender/ocr-pdf-a-texto-buscable" },
              { title: "OCR Documento Escaneado (Paso a Paso)", href: "/es/aprender/ocr-documento-escaneado" },
              { title: "Consejos de Precision OCR", href: "/es/aprender/consejos-precision-ocr" },
              { title: "OCR PDF en Movil (iPhone y Android)", href: "/es/aprender/ocr-pdf-en-movil" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "Puede el OCR leer texto manuscrito?", a: "Puede leer algo de texto manuscrito, pero la precision varia. Letras de imprenta limpias pueden alcanzar 70-85%. Cursiva o desordenada tendra menor precision." },
              { q: "Por que la escritura a mano es mas dificil para el OCR?", a: "El texto impreso usa formas consistentes. La escritura a mano varia enormemente entre personas." },
              { q: "Que tipo de escritura funciona mejor con OCR?", a: "Letras de imprenta limpias en tinta oscura sobre papel blanco dan los mejores resultados." },
              { q: "Puede el OCR leer escritura cursiva?", a: "El OCR estandar tiene capacidad muy limitada para leer cursiva. Probablemente necesitaras reescribir manualmente." },
              { q: "Como mejorar la precision OCR en manuscritos?", a: "Usa tinta oscura, papel blanco, letras de imprenta, deja espacio, escanea a 400+ DPI y limpia antes de OCR." },
              { q: "Debo usar OCR o reescribir?", a: "Para imprenta limpia, OCR ahorra tiempo. Para cursiva o desordenada, reescribir manualmente suele ser mas rapido." },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
