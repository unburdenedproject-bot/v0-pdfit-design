import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "DOCX a PDF sin problemas de formato (fuentes, espaciado, imagenes) | PDF.it",
  description:
    "Soluciona problemas de formato al convertir DOCX a PDF. Aprende a evitar la sustitucion de fuentes, cambios de espaciado y desplazamiento de imagenes para que tu PDF luzca exactamente como tu documento de Word.",
  keywords: "docx a pdf mantener formato, word a pdf problemas de formato, docx a pdf fuentes incorrectas, word a pdf cambios de espaciado, preservar formato word a pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Por que mi DOCX se ve diferente despues de convertirlo a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "La causa mas comun es la sustitucion de fuentes. Si la herramienta de conversion no tiene la misma fuente instalada, la reemplaza con una similar que puede tener anchos de caracteres y espaciado diferentes. Esto hace que el texto se redistribuya, cambiando los saltos de linea y el diseno de la pagina." }
    },
    {
      "@type": "Question",
      "name": "Como mantengo las fuentes iguales al convertir Word a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa fuentes estandar del sistema como Arial, Calibri o Times New Roman. Estas estan disponibles en practicamente todos los sistemas y herramientas de conversion. Si debes usar una fuente personalizada, incrustala en el documento de Word antes de convertir (Archivo > Opciones > Guardar > Incrustar fuentes en el archivo)." }
    },
    {
      "@type": "Question",
      "name": "Por que mis imagenes se ven borrosas en el PDF convertido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Algunas herramientas de conversion comprimen las imagenes agresivamente para reducir el tamano del archivo. PDF.it preserva la calidad original de las imagenes por defecto. Si las imagenes se insertaron a baja resolucion en Word, tendran baja resolucion en el PDF tambien: reemplazalas con versiones de mayor resolucion antes de convertir." }
    },
    {
      "@type": "Question",
      "name": "Puedo convertir DOCX a PDF sin perder los hipervinculos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it preserva los hipervinculos clicables durante la conversion. Asegurate de que los enlaces esten correctamente formateados en Word (clic derecho > Hipervinculo) en lugar de simplemente pegados como texto plano." }
    },
    {
      "@type": "Question",
      "name": "Por que se rompio el formato de mi tabla en el PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los disenos de tablas complejos con celdas combinadas, tablas anidadas o columnas de ajuste automatico son la fuente mas comun de problemas de formato. Simplifica tus tablas cuando sea posible: usa anchos de columna fijos en lugar de ajuste automatico y evita las tablas profundamente anidadas." }
    },
    {
      "@type": "Question",
      "name": "Como verifico si mi PDF coincide con el documento original de Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "Abre ambos archivos lado a lado y compara pagina por pagina. Presta especial atencion a la ultima linea de cada pagina (la redistribucion del texto a menudo empuja contenido a la siguiente pagina), alineaciones de tablas y posiciones de imagenes. Revisa encabezados y pies de pagina por separado." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como convertir DOCX a PDF sin problemas de formato",
  "description": "Preserva fuentes, espaciado e imagenes al convertir Word a PDF usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepara tu documento de Word",
      "text": "Usa fuentes estandar, incrusta fuentes personalizadas, establece anchos de columna fijos en tablas e inserta imagenes a la resolucion que deseas en el PDF final."
    },
    {
      "@type": "HowToStep",
      "name": "Convierte con PDF.it",
      "text": "Sube tu archivo .docx a la herramienta Word a PDF de PDF.it y haz clic en Convertir. La herramienta preserva el formato, las fuentes y la calidad de las imagenes."
    },
    {
      "@type": "HowToStep",
      "name": "Verifica el resultado",
      "text": "Abre el PDF y comparalo pagina por pagina con tu documento de Word. Revisa fuentes, espaciado, imagenes, tablas y saltos de pagina."
    }
  ]
}

export default function DocxAPdfMantenerFormatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word a PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">DOCX a PDF sin problemas de formato</h1>
              <p className="text-xl text-slate-300">
                Las fuentes se ven mal, el espaciado cambio, las imagenes se movieron... te suena familiar? Asi es como puedes convertir Word a PDF y mantener tu formato exactamente como lo disenaste.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para convertir? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/word-a-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Word a PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por que se rompe el formato al convertir Word a PDF</h2>
              <p className="text-slate-600 mb-4">
                Los documentos de Word estan disenados para ser <strong>editables y flexibles</strong>. Redistribuyen el texto segun la pantalla del visor, las fuentes instaladas y la version de Word. Los PDFs, por otro lado, tienen un <strong>diseno fijo</strong>: cada elemento tiene una posicion exacta en la pagina.
              </p>
              <p className="text-slate-600 mb-4">
                El proceso de conversion tiene que traducir un documento flexible a uno fijo. Cuando la herramienta de conversion no tiene las mismas fuentes, o interpreta el espaciado de manera diferente, las cosas se desplazan. Los tres problemas mas comunes son:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Sustitucion de fuentes</strong>: la herramienta reemplaza tu fuente con una similar que tiene anchos de caracteres diferentes, causando que el texto se redistribuya en lineas y paginas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Cambios de espaciado y margenes</strong>: el espaciado de parrafos, la altura de linea y los margenes pueden interpretarse ligeramente diferente por el motor de conversion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Desplazamiento de imagenes y objetos</strong>: las imagenes flotantes, cuadros de texto y formas pueden moverse cuando el texto circundante se redistribuye.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Solucion 1: Prevenir la sustitucion de fuentes</h2>
              <p className="text-slate-600 mb-4">
                La sustitucion de fuentes es la causa numero uno de problemas de formato. Asi es como prevenirla:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa fuentes estandar.</strong> Arial, Calibri, Times New Roman, Georgia y Verdana estan disponibles en practicamente todos los sistemas. Se convierten perfectamente siempre.</li>
                <li>&#10003; <strong>Incrusta fuentes personalizadas.</strong> Si debes usar una fuente no estandar, incrustala en tu documento de Word: ve a Archivo &gt; Opciones &gt; Guardar &gt; marca "Incrustar fuentes en el archivo". Esto aumenta el tamano del archivo pero garantiza que se use la fuente correcta.</li>
                <li>&#10003; <strong>Evita fuentes decorativas para texto del cuerpo.</strong> Las fuentes script, manuscritas y de exhibicion son mas propensas a causar problemas. Usalas con moderacion (solo titulos) y usa fuentes estandar para parrafos.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Solucion 2: Fijar espaciado y margenes</h2>
              <p className="text-slate-600 mb-4">
                El espaciado de parrafos predeterminado de Word es "contextual", lo que significa que se ajusta segun el contenido circundante. Esta flexibilidad puede causar sorpresas durante la conversion.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Establece interlineado explicito.</strong> En lugar de "Multiple" o "Auto", usa valores exactos (por ejemplo, 1.15 o 1.5). Ve a Parrafo &gt; Interlineado &gt; Exacto o Minimo.</li>
                <li>&#10003; <strong>Usa espaciado de parrafo fijo.</strong> Establece valores especificos de espaciado "Antes" y "Despues" en puntos en lugar de depender de los valores predeterminados de Word.</li>
                <li>&#10003; <strong>Revisa los margenes.</strong> Asegurate de que tus margenes esten establecidos explicitamente en Diseno de pagina &gt; Margenes &gt; Margenes personalizados. Evita los preajustes "Estrecho" o "Ancho" si necesitas control exacto.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Solucion 3: Mantener las imagenes en su lugar</h2>
              <p className="text-slate-600 mb-4">
                Las imagenes que flotan o se ajustan con el texto son las mas propensas a desplazarse durante la conversion. Asi es como mantenerlas en su lugar:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa ajuste "En linea con el texto".</strong> Esto ancla la imagen a una posicion especifica en el flujo del texto. Clic derecho en la imagen &gt; Ajustar texto &gt; En linea con el texto.</li>
                <li>&#10003; <strong>Ancla imagenes flotantes.</strong> Si necesitas ajuste de texto, bloquea la posicion del ancla: clic derecho &gt; Tamano y posicion &gt; pestana Posicion &gt; marca "Bloquear ancla".</li>
                <li>&#10003; <strong>Inserta a la resolucion correcta.</strong> No redimensiones imagenes arrastrando los controladores en Word: esto almacena la imagen a tamano completo y solo la muestra mas pequena. Redimensiona las imagenes en un editor de imagenes antes de insertar.</li>
                <li>&#10003; <strong>No comprimas imagenes en Word.</strong> La compresion integrada de Word puede reducir la calidad inesperadamente. Si necesitas un archivo mas pequeno, convierte a PDF primero y luego <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">comprime el PDF</Link>.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">La forma correcta de convertir (paso a paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Prepara tu documento de Word",
                    desc: "Revisa las fuentes (usa estandar o incrusta personalizadas), establece espaciado explicito y ancla las imagenes. Revisa el documento en Vista previa de impresion para ver exactamente como se vera.",
                  },
                  {
                    title: "Sube y convierte con PDF.it",
                    desc: "Ve a la herramienta Word a PDF y sube tu archivo .docx. El motor de conversion de PDF.it maneja fuentes, espaciado e imagenes con precision: haz clic en Convertir y espera unos segundos.",
                  },
                  {
                    title: "Compara el resultado",
                    desc: "Abre el PDF y comparalo con tu documento de Word pagina por pagina. Revisa la ultima linea de cada pagina (donde la redistribucion del texto es mas visible), alineaciones de tablas y posiciones de imagenes.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Errores comunes a evitar</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>No uses "Guardar como PDF" de Word.</strong> La exportacion integrada de Word puede producir resultados inconsistentes dependiendo de tu version de Word y sistema operativo. Un convertidor dedicado como <Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">Word a PDF de PDF.it</Link> da resultados mas confiables.</li>
                <li>&#10003; <strong>Evita "Imprimir a PDF" en Windows.</strong> El controlador Microsoft Print to PDF a menudo cambia los margenes y puede eliminar hipervinculos. Es un ultimo recurso, no una primera opcion.</li>
                <li>&#10003; <strong>No mezcles formatos de Office.</strong> Si tu documento de Word tiene graficos de Excel o diapositivas de PowerPoint incrustados, convierte cada elemento por separado y usa <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">Office a PDF</Link> para mejores resultados.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Lista de verificacion rapida</h2>
              <p className="text-slate-600 mb-4">
                Despues de convertir, abre el PDF y verifica estos elementos:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Las fuentes se ven correctas (sin sustituciones inesperadas)</li>
                <li>&#10003; El texto no se desborda ni se corta en los bordes de la pagina</li>
                <li>&#10003; Las imagenes estan en las posiciones correctas y a calidad completa</li>
                <li>&#10003; Las tablas estan alineadas y las columnas no se han desplazado</li>
                <li>&#10003; Los encabezados y pies de pagina aparecen en cada pagina como se esperaba</li>
                <li>&#10003; Los hipervinculos son clicables</li>
                <li>&#10003; El numero de paginas coincide con el documento original</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convierte DOCX a PDF: formato preservado</h2>
            <p className="text-slate-300 mb-6">Sube tu documento de Word y obtiene un PDF perfectamente formateado en segundos.</p>
            <Link
              href="/es/word-a-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Word a PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Convertir curriculum de Word a PDF (consejos para ATS)", href: "/es/aprender/convertir-curriculum-word-a-pdf" },
                { title: "Word a PDF: errores comunes de formato y como solucionarlos", href: "/es/aprender/word-a-pdf-errores-comunes-de-formato" },
                { title: "Convertir DOCX, XLSX y PPTX a PDF: todos los formatos de Office", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
                { title: "Office a PDF: como mantener el formato", href: "/es/aprender/office-a-pdf-mantener-formato" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Por que mi DOCX se ve diferente despues de convertirlo a PDF?", a: "La causa mas comun es la sustitucion de fuentes. Si la herramienta de conversion no tiene la misma fuente instalada, la reemplaza con una similar que puede tener anchos de caracteres y espaciado diferentes. Esto hace que el texto se redistribuya, cambiando los saltos de linea y el diseno de la pagina." },
                { q: "Como mantengo las fuentes iguales al convertir Word a PDF?", a: "Usa fuentes estandar del sistema como Arial, Calibri o Times New Roman. Estas estan disponibles en practicamente todos los sistemas y herramientas de conversion. Si debes usar una fuente personalizada, incrustala en el documento de Word antes de convertir (Archivo > Opciones > Guardar > Incrustar fuentes en el archivo)." },
                { q: "Por que mis imagenes se ven borrosas en el PDF convertido?", a: "Algunas herramientas de conversion comprimen las imagenes agresivamente para reducir el tamano del archivo. PDF.it preserva la calidad original de las imagenes por defecto. Si las imagenes se insertaron a baja resolucion en Word, tendran baja resolucion en el PDF tambien." },
                { q: "Puedo convertir DOCX a PDF sin perder los hipervinculos?", a: "Si. PDF.it preserva los hipervinculos clicables durante la conversion. Asegurate de que los enlaces esten correctamente formateados en Word (clic derecho > Hipervinculo) en lugar de simplemente pegados como texto plano." },
                { q: "Por que se rompio el formato de mi tabla en el PDF?", a: "Los disenos de tablas complejos con celdas combinadas, tablas anidadas o columnas de ajuste automatico son la fuente mas comun de problemas de formato. Simplifica tus tablas cuando sea posible: usa anchos de columna fijos en lugar de ajuste automatico y evita las tablas profundamente anidadas." },
                { q: "Como verifico si mi PDF coincide con el documento original de Word?", a: "Abre ambos archivos lado a lado y compara pagina por pagina. Presta especial atencion a la ultima linea de cada pagina (la redistribucion del texto a menudo empuja contenido a la siguiente pagina), alineaciones de tablas y posiciones de imagenes." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
