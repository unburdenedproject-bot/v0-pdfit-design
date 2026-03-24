import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Consejos de Precision OCR (Mejores Resultados de Reconocimiento de Texto) | PDF.it",
  description:
    "Aprende como mejorar la precision del OCR con mejor calidad de escaneo, resolucion, contraste y configuracion de idioma. Obtiene reconocimiento de texto mas limpio en PDFs escaneados.",
  keywords: "precision ocr, mejorar resultados ocr, consejos calidad ocr, mejor reconocimiento de texto",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "A que resolucion debo escanear para OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Escanea a 300 DPI para documentos de texto estandar. Para documentos con fuentes pequenas (menores a 10pt), escanea a 400-600 DPI. Escanear por debajo de 200 DPI producira resultados OCR notablemente peores." }
    },
    {
      "@type": "Question",
      "name": "El color vs. escala de grises afecta la precision del OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para documentos solo de texto, los escaneos en escala de grises o blanco y negro a menudo producen mejores resultados OCR porque hay mas contraste entre el texto y el fondo. Los escaneos en color son mejores cuando el documento tiene texto o fondos de colores que afectan la legibilidad." }
    },
    {
      "@type": "Question",
      "name": "Por que mi resultado OCR esta lleno de errores?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las causas comunes incluyen baja resolucion de escaneo (menos de 200 DPI), paginas torcidas o rotadas, mala iluminacion que causa sombras, bajo contraste entre texto y fondo, o seleccionar el idioma incorrecto en la configuracion OCR. Corrige estos problemas y vuelve a ejecutar el OCR." }
    },
    {
      "@type": "Question",
      "name": "Puedo mejorar los resultados OCR de un documento que ya escanee?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Puedes mejorar un escaneo existente ajustando el contraste, enderezando paginas torcidas y eliminando ruido usando software de edicion de imagenes o la herramienta de Limpieza de Escaneo de PDF.it. Luego vuelve a ejecutar el OCR en la version mejorada." }
    },
    {
      "@type": "Question",
      "name": "El tipo de fuente afecta la precision del OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Fuentes estandar como Arial, Times New Roman y Calibri producen la mayor precision OCR. Las fuentes decorativas, cursivas o muy delgadas son mas dificiles de reconocer. El texto manuscrito es el mas desafiante — consulta nuestra guia sobre OCR y escritura a mano." }
    },
    {
      "@type": "Question",
      "name": "Que tan preciso es el OCR moderno?",
      "acceptedAnswer": { "@type": "Answer", "text": "En escaneos limpios y de alta resolucion con texto impreso estandar, el OCR moderno alcanza una precision del 95-99% por caracter. Esto significa que en una pagina de 2,000 caracteres, podrias ver 20-100 que necesitan correccion. La precision disminuye con mala calidad de escaneo, fuentes inusuales o disenos complejos." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Mejorar la Precision del OCR",
  "description": "Obtiene mejores resultados de reconocimiento de texto OCR en 3 pasos optimizando la calidad de escaneo y configuracion.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Optimiza la calidad de tu escaneo",
      "text": "Escanea a 300 DPI o mas, usa iluminacion uniforme y asegurate de que el documento este plano y recto. Para escaneos con telefono, usa la herramienta de Limpieza de Escaneo."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona el idioma correcto",
      "text": "En la herramienta Escaner OCR, elige el idioma que coincida con tu documento. Esto asegura que el motor use el conjunto de caracteres y diccionario correctos para el reconocimiento."
    },
    {
      "@type": "HowToStep",
      "name": "Revisa y verifica el resultado",
      "text": "Despues del procesamiento OCR, busca algunas palabras clave en el PDF para verificar la precision. Para documentos criticos, revisa secciones importantes como nombres, fechas y numeros."
    }
  ]
}

export default function ConsejoPrecisionOCRPage() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Consejos de Precision OCR (Mejores Resultados de Reconocimiento de Texto)</h1>
              <p className="text-xl text-slate-300">
                El OCR no es magia — la calidad de tus resultados depende de la calidad del escaneo, la configuracion y la preparacion. Aqui estan los consejos probados para obtener el reconocimiento de texto mas preciso de tus PDFs escaneados.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Aplica estos consejos y prueba el Escaner OCR de PDF.it (Pro).</p>
            </div>
            <Link
              href="/es/escaner-ocr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Escaner OCR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Escanea a la Resolucion Correcta (Los DPI Importan)</h2>
              <p className="text-slate-600 mb-4">
                La resolucion es el factor mas importante en la precision del OCR. Los DPI (puntos por pulgada) determinan cuanto detalle captura tu escaner. Esto es a lo que debes apuntar:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>300 DPI — el estandar.</strong> Esta es la resolucion recomendada para la mayoria de los documentos de texto. Proporciona suficiente detalle para que el OCR reconozca caracteres con precision sin crear archivos innecesariamente grandes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>400-600 DPI — para texto pequeno.</strong> Si tu documento tiene notas al pie, letra pequena o texto menor a 10 puntos, aumenta la resolucion. El detalle extra ayuda al OCR a distinguir entre caracteres similares como &apos;l&apos; y &apos;1&apos;, o &apos;O&apos; y &apos;0&apos;.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Menos de 200 DPI — evita esto.</strong> Los escaneos de baja resolucion producen caracteres borrosos que el OCR no puede reconocer de manera confiable. Si recibes un escaneo de baja resolucion de alguien mas, hay mejora limitada posible sin volver a escanear.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Mas de 600 DPI — rendimientos decrecientes.</strong> Escanear por encima de 600 DPI crea archivos mucho mas grandes pero no mejora significativamente la precision del OCR para texto impreso estandar. Ahorra espacio de almacenamiento y tiempo de procesamiento manteniendote en 300-600 DPI.</span>
                </li>
              </ul>
            </section>

            {/* Lighting and contrast */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Optimiza la Iluminacion y el Contraste</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Usa iluminacion uniforme y consistente",
                    desc: "La iluminacion desigual crea sombras en la pagina que confunden al OCR. Los escaneres de cama plana proporcionan la mejor iluminacion. Para escaneos con telefono, usa luz natural del dia y posiciona el documento plano bajo iluminacion uniforme — sin lamparas de escritorio creando sombras diagonales.",
                  },
                  {
                    title: "Maximiza el contraste texto-fondo",
                    desc: "El texto negro sobre papel blanco da los mejores resultados OCR. Si tu documento tiene texto gris claro, un fondo de color o una pagina amarillenta, aumenta el contraste en la configuracion de tu escaner. Mayor contraste hace que los bordes de los caracteres sean mas nitidos y faciles de reconocer.",
                  },
                  {
                    title: "Limpia los escaneos de telefono primero",
                    desc: "Las camaras de telefono introducen distorsion de perspectiva, sombras y exposicion desigual. Antes de ejecutar el OCR, usa la herramienta de Limpieza de Escaneo de PDF.it para corregir automaticamente estos problemas. La version limpia producira resultados OCR significativamente mejores.",
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

            {/* Page orientation */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Corrige la Orientacion y la Inclinacion de la Pagina</h2>
              <p className="text-slate-600 mb-4">
                Los motores OCR esperan que el texto vaya en lineas horizontales rectas. Cuando una pagina esta torcida (ligeramente rotada) o al reves, la precision cae drasticamente. Asi es como corregir problemas comunes de orientacion:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Endereza paginas torcidas.</strong> Incluso una inclinacion de 2-3 grados puede causar errores OCR. Si tu escaneo se ve ligeramente inclinado, usa <Link href="/es/rotar-pdf" className="text-orange-600 hover:underline">Rotar PDF</Link> para corregir la orientacion antes de ejecutar el OCR.</li>
                <li>&#10003; <strong>Corrige paginas al reves.</strong> Si alguna pagina de tu PDF esta rotada 180 grados, el OCR fallara completamente o producira texto sin sentido. Rotalas al derecho primero.</li>
                <li>&#10003; <strong>Maneja orientaciones mixtas.</strong> Algunos documentos mezclan paginas verticales y horizontales. Asegurate de que cada pagina este orientada para que el texto se lea de izquierda a derecha, de arriba a abajo antes de procesar.</li>
                <li>&#10003; <strong>Usa la Limpieza de Escaneo para correccion automatica.</strong> La herramienta de <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo</Link> detecta y corrige automaticamente la inclinacion en documentos capturados con telefono, ahorrandote el esfuerzo manual.</li>
              </ul>
            </section>

            {/* Language selection */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Selecciona el Idioma Correcto</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Por Que Importa la Seleccion de Idioma</h3>
                  <p className="text-slate-600">
                    Los motores OCR usan modelos especificos de idioma que incluyen conjuntos de caracteres, diccionarios y reglas gramaticales. Cuando le dices a la herramienta OCR que tu documento esta en espanol, sabe buscar el alfabeto latino y usa un diccionario en espanol para resolver caracteres ambiguos. Configurar el idioma incorrecto obliga al motor a usar el conjunto de caracteres equivocado, lo que puede causar errores generalizados.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documentos Multilingues</h3>
                  <p className="text-slate-600">
                    Si tu documento contiene texto en multiples idiomas (por ejemplo, un documento en espanol con nombres en ingles o terminos legales en frances), selecciona el idioma principal. El motor OCR manejara palabras ocasionales de otros idiomas basados en latin razonablemente bien. Para documentos que estan aproximadamente mitad en cada idioma, puede que necesites ejecutar el OCR dos veces con diferentes configuraciones de idioma.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Escrituras No Latinas</h3>
                  <p className="text-slate-600">
                    Los documentos en chino, japones, coreano, arabe, hindi u otras escrituras no latinas requieren seleccionar el idioma especifico. Los modelos de reconocimiento de caracteres para estos idiomas son completamente diferentes de los modelos basados en latin, y usar el incorrecto producira resultados sin sentido.
                  </p>
                </div>
              </div>
            </section>

            {/* Document preparation */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Prepara Tu Documento Antes de Escanear</h2>
              <p className="text-slate-600 mb-4">
                Unos minutos de preparacion antes de escanear pueden ahorrarte horas de correccion manual despues del OCR. Estos son los pasos de mayor impacto:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana la pagina.</strong> Las arrugas, pliegues y bordes curvados crean sombras y distorsion. Coloca el documento plano y usa un libro o vidrio para mantenerlo presionado si es necesario.</li>
                <li>&#10003; <strong>Limpia el vidrio del escaner.</strong> El polvo, manchas y huellas dactilares en el vidrio del escaner aparecen como ruido en el escaneo y pueden ser confundidos con caracteres o puntuacion por el motor OCR.</li>
                <li>&#10003; <strong>Usa la mejor copia disponible.</strong> Si tienes acceso a multiples copias de un documento (original, fotocopia, fax), siempre escanea la que tenga el texto mas nitido y oscuro.</li>
                <li>&#10003; <strong>Quita grapas y clips.</strong> Estos crean sombras y pueden causar que la pagina se asiente de manera desigual en el escaner, produciendo escaneos torcidos.</li>
                <li>&#10003; <strong>Considera el formato de salida.</strong> Si necesitas extraer datos a una hoja de calculo despues del OCR, usa <Link href="/es/pdf-a-excel" className="text-orange-600 hover:underline">PDF a Excel</Link>. Para texto editable, usa <Link href="/es/pdf-a-word" className="text-orange-600 hover:underline">PDF a Word</Link>. Para texto sin formato, usa <Link href="/es/pdf-a-texto" className="text-orange-600 hover:underline">PDF a TXT</Link>.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Obtener Resultados OCR Precisos?</h2>
            <p className="text-slate-300 mb-6">Aplica estos consejos y sube tu PDF escaneado al Escaner OCR de PDF.it para el mejor reconocimiento de texto posible.</p>
            <Link
              href="/es/escaner-ocr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ScanText className="h-5 w-5" /> Probar Escaner OCR (Pro)
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Que es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
                { title: "OCR a PDF para Hacerlo Buscable (Buscar Texto en PDFs Escaneados)", href: "/es/aprender/ocr-pdf-a-texto-buscable" },
                { title: "Como Hacer OCR a un Documento Escaneado (Paso a Paso)", href: "/es/aprender/ocr-documento-escaneado" },
                { title: "OCR a PDF en Tu Telefono (iPhone y Android)", href: "/es/aprender/ocr-pdf-en-movil" },
                { title: "Puede el OCR Leer Texto Manuscrito? (Que Esperar)", href: "/es/aprender/ocr-texto-manuscrito" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "A que resolucion debo escanear para OCR?", a: "Escanea a 300 DPI para documentos de texto estandar. Para documentos con fuentes pequenas (menores a 10pt), escanea a 400-600 DPI. Escanear por debajo de 200 DPI producira resultados OCR notablemente peores." },
                { q: "El color vs. escala de grises afecta la precision del OCR?", a: "Para documentos solo de texto, los escaneos en escala de grises o blanco y negro a menudo producen mejores resultados OCR porque hay mas contraste entre el texto y el fondo. Los escaneos en color son mejores cuando el documento tiene texto o fondos de colores que afectan la legibilidad." },
                { q: "Por que mi resultado OCR esta lleno de errores?", a: "Las causas comunes incluyen baja resolucion de escaneo (menos de 200 DPI), paginas torcidas o rotadas, mala iluminacion que causa sombras, bajo contraste entre texto y fondo, o seleccionar el idioma incorrecto en la configuracion OCR." },
                { q: "Puedo mejorar los resultados OCR de un documento ya escaneado?", a: "Si. Puedes mejorar un escaneo existente ajustando el contraste, enderezando paginas torcidas y eliminando ruido usando software de edicion de imagenes o la herramienta de Limpieza de Escaneo de PDF.it. Luego vuelve a ejecutar el OCR." },
                { q: "El tipo de fuente afecta la precision del OCR?", a: "Si. Fuentes estandar como Arial, Times New Roman y Calibri producen la mayor precision OCR. Las fuentes decorativas, cursivas o muy delgadas son mas dificiles de reconocer. El texto manuscrito es el mas desafiante — consulta nuestra guia sobre OCR y escritura a mano." },
                { q: "Que tan preciso es el OCR moderno?", a: "En escaneos limpios y de alta resolucion con texto impreso estandar, el OCR moderno alcanza una precision del 95-99% por caracter. Esto significa que en una pagina de 2,000 caracteres, podrias ver 20-100 que necesitan correccion." },
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
