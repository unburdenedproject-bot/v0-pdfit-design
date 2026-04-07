import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Word a PDF: el formato cambio? Soluciona estas 7 causas | PDF.it",
  description:
    "El formato de Word a PDF cambio? Aprende las 7 causas mas comunes: fuentes faltantes, tablas rotas, margenes desplazados, imagenes borrosas, y como solucionar cada una antes de convertir.",
  keywords: "word a pdf formato cambio, word a pdf problemas de formato, docx a pdf problemas de formato, word pdf solucion formato, word a pdf se ve diferente",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Por que mi documento de Word se ve diferente despues de convertirlo a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las causas mas comunes son la sustitucion de fuentes, interpretacion diferente de margenes y redistribucion de texto. Cuando la herramienta de conversion no tiene la fuente exacta que usaste, sustituye una similar con anchos de caracteres diferentes, causando que el texto se desplace." } },
    { "@type": "Question", "name": "Como soluciono fuentes faltantes al convertir Word a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Usa fuentes estandar como Arial, Calibri o Times New Roman que estan disponibles en todos los sistemas. Si necesitas una fuente personalizada, incrustala en tu documento de Word: Archivo > Opciones > Guardar > marca 'Incrustar fuentes en el archivo'." } },
    { "@type": "Question", "name": "Por que mis tablas se rompen al convertir Word a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las tablas se rompen por anchos de columna de ajuste automatico, celdas combinadas y tablas anidadas. Soluciona esto estableciendo anchos de columna fijos (Propiedades de tabla > Columna > ancho especifico), evitando tablas profundamente anidadas y manteniendo disenos de tabla simples." } },
    { "@type": "Question", "name": "Por que mis imagenes estan borrosas o se movieron en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las imagenes se mueven cuando el texto circundante se redistribuye por cambios de fuente. La borrosidad ocurre cuando Word o el convertidor comprime las imagenes. Soluciona el posicionamiento usando ajuste 'En linea con el texto' y previene la borrosidad insertando imagenes de alta resolucion." } },
    { "@type": "Question", "name": "Como prevengo cambios de margenes al convertir Word a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Establece margenes personalizados explicitos en Diseno de pagina > Margenes > Margenes personalizados en lugar de usar preajustes. Evita 'Margenes espejo' a menos que especificamente los necesites para impresion de folletos." } },
    { "@type": "Question", "name": "Puedo hacer que mis hipervinculos funcionen en el PDF convertido?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Asegurate de que los hipervinculos esten correctamente insertados usando la funcion de hipervinculo de Word (Ctrl+K o clic derecho > Hipervinculo) en lugar de pegarlos como texto plano. PDF.it preserva los hipervinculos correctamente formateados durante la conversion." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como solucionar problemas de formato de Word a PDF",
  "description": "Soluciona los 7 problemas de formato mas comunes al convertir Word a PDF.",
  "step": [
    { "@type": "HowToStep", "name": "Identifica el problema de formato", "text": "Compara tu documento de Word y PDF lado a lado. Revisa fuentes, tablas, imagenes, margenes, encabezados/pies de pagina, hipervinculos y saltos de pagina para encontrar lo que cambio." },
    { "@type": "HowToStep", "name": "Aplica la solucion especifica", "text": "Cada problema tiene una solucion especifica: incrusta fuentes para problemas de fuentes, establece anchos fijos para tablas, ancla imagenes, establece margenes explicitos, simplifica encabezados, formatea hipervinculos correctamente o inserta saltos de pagina manuales." },
    { "@type": "HowToStep", "name": "Reconvierte y verifica", "text": "Sube el documento corregido a la herramienta Word a PDF de PDF.it, conviertelo y compara el resultado de nuevo para confirmar que el problema esta resuelto." }
  ]
}

export default function WordAPdfErroresComunesDeFormatoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word a PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Word a PDF: el formato cambio? Soluciona estas 7 causas</h1>
            <p className="text-xl text-slate-300">Convertiste tu documento de Word a PDF y el formato esta mal: las fuentes cambiaron, las tablas se rompieron, las imagenes se movieron. Aqui estan las 7 causas mas comunes y la solucion exacta para cada una.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Necesitas un convertidor confiable? PDF.it preserva el formato con precision.</p>
            </div>
            <Link href="/es/word-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Word a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Fuentes faltantes (sustitucion de fuentes)</h2>
              <p className="text-slate-600 mb-4"><strong>Que sucede:</strong> El PDF usa una fuente diferente a tu documento de Word. El texto se ve mas fino, mas grueso o con espaciado diferente. Las lineas se rompen en diferentes puntos y el contenido puede desbordarse a paginas adicionales.</p>
              <p className="text-slate-600 mb-4"><strong>Por que sucede:</strong> La herramienta de conversion no tiene la fuente exacta que usaste en Word. Sustituye una fuente visualmente similar, pero "similar" no es "identica": los anchos de caracteres difieren, causando redistribucion del texto.</p>
              <p className="text-slate-600 mb-2"><strong>La solucion:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Cambia a fuentes estandar: Arial, Calibri, Times New Roman, Georgia o Verdana.</li>
                <li>&#10003; O incrusta tu fuente personalizada: Archivo &gt; Opciones &gt; Guardar &gt; "Incrustar fuentes en el archivo".</li>
                <li>&#10003; Evita usar mas de 2-3 fuentes en un solo documento.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. Tablas rotas</h2>
              <p className="text-slate-600 mb-4"><strong>Que sucede:</strong> Las columnas de tabla se desplazan, el texto se ajusta incorrectamente dentro de las celdas o las tablas se dividen entre paginas en lugares inesperados.</p>
              <p className="text-slate-600 mb-4"><strong>Por que sucede:</strong> Word usa columnas de ajuste automatico que se ajustan segun el contenido y el tamano de la ventana. El motor de conversion calcula los anchos de columna de manera diferente.</p>
              <p className="text-slate-600 mb-2"><strong>La solucion:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Establece anchos de columna fijos: clic derecho en tabla &gt; Propiedades de tabla &gt; Columna &gt; establece un ancho especifico.</li>
                <li>&#10003; Evita tablas anidadas (tablas dentro de celdas de tabla).</li>
                <li>&#10003; Minimiza las celdas combinadas: usa disenos de cuadricula simples cuando sea posible.</li>
                <li>&#10003; Si una tabla se divide mal entre paginas, agrega un salto de pagina manual antes de ella.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Desplazamiento de encabezados y pies de pagina</h2>
              <p className="text-slate-600 mb-4"><strong>Que sucede:</strong> Los encabezados o pies de pagina aparecen en posiciones ligeramente diferentes, se superponen con el texto del cuerpo o desaparecen por completo en algunas paginas.</p>
              <p className="text-slate-600 mb-2"><strong>La solucion:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Manten encabezados y pies de pagina simples: una sola linea de texto, una imagen (como un logo) como maximo.</li>
                <li>&#10003; Establece distancias explicitas de encabezado/pie de pagina desde el borde de la pagina en Diseno de pagina &gt; Margenes &gt; pestana Diseno.</li>
                <li>&#10003; Si usas numeros de pagina, usa la funcion de numeros de pagina integrada de Word en lugar de texto manual.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">4. Perdida de calidad de imagen</h2>
              <p className="text-slate-600 mb-4"><strong>Que sucede:</strong> Fotos, graficos y elementos graficos aparecen borrosos, pixelados o de menor calidad en el PDF que en el documento de Word.</p>
              <p className="text-slate-600 mb-2"><strong>La solucion:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Desactiva la compresion automatica de Word: Archivo &gt; Opciones &gt; Avanzado &gt; Tamano y calidad de imagen &gt; marca "No comprimir imagenes en el archivo".</li>
                <li>&#10003; Inserta imagenes al tamano exacto que necesitas: no redimensiones arrastrando los controladores.</li>
                <li>&#10003; Usa PDF.it para la conversion: preserva la calidad original de las imagenes sin compresion agresiva.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">5. Cambios de margenes</h2>
              <p className="text-slate-600 mb-4"><strong>Que sucede:</strong> El contenido aparece desplazado: mas o menos espacio en blanco en los bordes, texto mas cerca del borde de la pagina o contenido cortado en los bordes.</p>
              <p className="text-slate-600 mb-2"><strong>La solucion:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Establece margenes personalizados con valores exactos: Diseno de pagina &gt; Margenes &gt; Margenes personalizados.</li>
                <li>&#10003; Usa al menos 0.5" (1.27cm) de margenes en todos los lados.</li>
                <li>&#10003; Evita margenes espejo a menos que los necesites para impresion a doble cara.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">6. Hipervinculos que no funcionan</h2>
              <p className="text-slate-600 mb-4"><strong>Que sucede:</strong> Los enlaces que eran clicables en Word ya no lo son en el PDF.</p>
              <p className="text-slate-600 mb-2"><strong>La solucion:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Inserta enlaces correctamente: selecciona texto &gt; clic derecho &gt; Hipervinculo (o Ctrl+K) &gt; pega la URL.</li>
                <li>&#10003; No pegues URLs como texto y dependas del enlace automatico.</li>
                <li>&#10003; Usa la <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">herramienta Word a PDF de PDF.it</Link> en lugar de "Imprimir a PDF": preserva los hipervinculos.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">7. Problemas de saltos de pagina</h2>
              <p className="text-slate-600 mb-4"><strong>Que sucede:</strong> Contenido que estaba en la pagina 3 en Word termina en la pagina 4 en el PDF. O un titulo aparece solo al final de una pagina con su contenido en la siguiente.</p>
              <p className="text-slate-600 mb-2"><strong>La solucion:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Inserta saltos de pagina manuales (Ctrl+Enter) donde necesites que las paginas se rompan.</li>
                <li>&#10003; Usa formato de parrafo "Mantener con siguiente" para titulos: selecciona titulo &gt; Parrafo &gt; Lineas y saltos de pagina &gt; "Mantener con siguiente".</li>
                <li>&#10003; Despues de solucionar problemas de fuentes (Causa 1), los problemas de saltos de pagina generalmente se resuelven solos.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Referencia rapida: las 7 soluciones</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Problema</th><th className="text-left py-3 px-4 font-bold">Solucion rapida</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Fuentes faltantes</td><td className="py-3 px-4">Usa fuentes estandar o incrusta las personalizadas</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Tablas rotas</td><td className="py-3 px-4">Establece anchos de columna fijos, evita anidamiento</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Encabezados/pies desplazados</td><td className="py-3 px-4">Manten disenos simples, establece distancias explicitas</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Imagenes borrosas</td><td className="py-3 px-4">Desactiva compresion de Word, inserta al tamano correcto</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Cambios de margenes</td><td className="py-3 px-4">Establece margenes personalizados con valores exactos</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Hipervinculos muertos</td><td className="py-3 px-4">Inserta con Ctrl+K, no pegues como texto</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Saltos de pagina desplazados</td><td className="py-3 px-4">Inserta saltos de pagina manuales, arregla fuentes primero</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Sigues teniendo problemas de formato?</h2>
              <p className="text-slate-600 mb-4">Si has probado las soluciones anteriores y tu PDF aun no coincide con tu documento de Word, considera estos pasos adicionales:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Intenta convertir desde una version diferente de Word.</strong> Word 365 (en linea) a veces produce resultados diferentes a Word 2019 o 2016.</li>
                <li>&#10003; <strong>Simplifica el documento.</strong> Cuanto mas complejo sea tu diseno (multiples columnas, cuadros de texto, SmartArt, objetos incrustados), mas probable es que algo se desplace. Simplifica donde puedas.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convierte Word a PDF: formato intacto</h2>
            <p className="text-slate-300 mb-6">PDF.it maneja fuentes, tablas, imagenes y diseno con precision. Pruebalo gratis.</p>
            <Link href="/es/word-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Word a PDF Ahora</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "DOCX a PDF sin problemas de formato", href: "/es/aprender/docx-a-pdf-mantener-formato" },
                { title: "Convertir curriculum de Word a PDF (consejos para ATS)", href: "/es/aprender/convertir-curriculum-word-a-pdf" },
                { title: "Office a PDF: como mantener el formato", href: "/es/aprender/office-a-pdf-mantener-formato" },
                { title: "Convertir DOCX, XLSX y PPTX a PDF", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Por que mi documento de Word se ve diferente despues de convertirlo a PDF?", a: "Las causas mas comunes son la sustitucion de fuentes, interpretacion diferente de margenes y redistribucion de texto. Cuando la herramienta de conversion no tiene la fuente exacta que usaste, sustituye una similar con anchos de caracteres diferentes." },
                { q: "Como soluciono fuentes faltantes al convertir Word a PDF?", a: "Usa fuentes estandar como Arial, Calibri o Times New Roman. Si necesitas una fuente personalizada, incrustala en tu documento de Word: Archivo > Opciones > Guardar > 'Incrustar fuentes en el archivo'." },
                { q: "Por que mis tablas se rompen al convertir Word a PDF?", a: "Las tablas se rompen por anchos de columna de ajuste automatico, celdas combinadas y tablas anidadas. Soluciona esto estableciendo anchos de columna fijos, evitando tablas anidadas y manteniendo disenos simples." },
                { q: "Por que mis imagenes estan borrosas o se movieron en el PDF?", a: "Las imagenes se mueven cuando el texto circundante se redistribuye por cambios de fuente. La borrosidad ocurre cuando Word o el convertidor comprime las imagenes. Usa ajuste 'En linea con el texto' e inserta imagenes de alta resolucion." },
                { q: "Como prevengo cambios de margenes al convertir Word a PDF?", a: "Establece margenes personalizados explicitos en Diseno de pagina > Margenes > Margenes personalizados en lugar de usar preajustes." },
                { q: "Puedo hacer que mis hipervinculos funcionen en el PDF convertido?", a: "Si. Asegurate de que los hipervinculos esten correctamente insertados usando la funcion de hipervinculo de Word (Ctrl+K o clic derecho > Hipervinculo). PDF.it preserva los hipervinculos correctamente formateados." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
