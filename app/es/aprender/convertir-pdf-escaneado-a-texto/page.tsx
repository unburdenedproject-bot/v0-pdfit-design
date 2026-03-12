import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanLine, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PDF Escaneado a Texto: Cuando Necesitas OCR | OmnisPDF",
  description:
    "Aprende como convertir PDFs escaneados a texto editable usando OCR. Entiende cuando PDF a TXT funciona vs cuando necesitas OCR, mas consejos para mejorar la calidad del escaneo.",
  keywords: "convertir pdf escaneado a texto, pdf escaneado a texto, ocr pdf, pdf escaneado ocr, extraer texto de pdf escaneado",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puedo convertir un PDF escaneado a texto sin OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Los PDFs escaneados almacenan paginas como imagenes, no como texto. Las herramientas estandar de PDF a TXT solo pueden extraer datos de texto existentes, no pueden leer texto de imagenes. Necesitas OCR (Reconocimiento Optico de Caracteres) para convertir paginas escaneadas a texto editable." }
    },
    {
      "@type": "Question",
      "name": "Que tan preciso es el OCR en PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "El OCR moderno tiene 95-99% de precision en escaneos limpios con fuentes estandar. La precision disminuye con mala calidad de escaneo, escritura a mano, fuentes inusuales o texto muy pequeno. Puedes mejorar los resultados escaneando a 300 DPI o mas y asegurando buena iluminacion." }
    },
    {
      "@type": "Question",
      "name": "Cual es la diferencia entre un PDF escaneado y un PDF digital?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un PDF digital fue creado electronicamente (desde Word, Google Docs, etc.) y contiene datos de texto reales que puedes seleccionar y buscar. Un PDF escaneado es una fotografia de papel: cada pagina es una imagen sin datos de texto. Necesitas OCR para extraer texto de PDFs escaneados." }
    },
    {
      "@type": "Question",
      "name": "Como mejoro la precision del OCR en mis documentos escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Escanea a 300 DPI o mas, usa buena iluminacion (sin sombras), mantiene el documento plano y alineado, escanea en blanco y negro para documentos solo de texto, y limpia los escaneos de telefono usando herramientas de procesamiento de imagen antes del OCR." }
    },
    {
      "@type": "Question",
      "name": "Puedo hacer OCR a una foto de telefono de un documento?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si, pero las fotos de telefono suelen tener distorsion de perspectiva, sombras y menor resolucion que los escaneos de escaner plano. Usa la herramienta de Limpieza de Escaneo de Telefono de OmnisPDF primero para enderezar y mejorar la imagen, luego ejecuta OCR para mejores resultados." }
    },
    {
      "@type": "Question",
      "name": "El OCR es gratis en OmnisPDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "El Escaner OCR es una funcion Pro en OmnisPDF. Los usuarios gratuitos pueden probar PDF a TXT basico (que funciona en PDFs digitales). Para documentos escaneados que requieren OCR, una suscripcion Pro ($7.99/mes) desbloquea el Escaner OCR con conversiones ilimitadas." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Convertir un PDF Escaneado a Texto con OCR",
  "description": "Extrae texto editable de PDFs escaneados en 3 simples pasos usando el Escaner OCR de OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF escaneado",
      "text": "Ve al Escaner OCR de OmnisPDF y sube tu PDF escaneado. La herramienta acepta PDFs con cualquier numero de paginas escaneadas."
    },
    {
      "@type": "HowToStep",
      "name": "Ejecuta el procesamiento OCR",
      "text": "Haz clic en Iniciar OCR. La herramienta analiza cada imagen de pagina, reconoce caracteres de texto y los convierte en texto seleccionable y editable."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el texto resultante",
      "text": "Descarga el texto extraido. Puedes obtenerlo como un PDF buscable (texto superpuesto en las imagenes originales) o como texto plano para pegar en tus documentos."
    }
  ]
}

export default function ConvertirPdfEscaneadoATextoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a TXT</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF Escaneado a Texto: Cuando Necesitas OCR</h1>
              <p className="text-xl text-slate-300">
                Intentaste convertir tu PDF a texto y obtuviste un archivo vacio? Tu PDF probablemente esta escaneado. Aqui esta la diferencia entre PDFs digitales y escaneados, y como obtener texto de ambos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanLine className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Tienes un PDF escaneado? Extrae texto con OCR ahora mismo.</p>
            </div>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Escaner OCR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF Digital vs PDF Escaneado: Cual es la Diferencia?</h2>
              <p className="text-slate-600 mb-4">
                No todos los PDFs son iguales. Entender la diferencia entre PDFs digitales y escaneados es clave para extraer texto exitosamente.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Caracteristica</th>
                      <th className="text-left py-3 px-4 font-bold">PDF Digital</th>
                      <th className="text-left py-3 px-4 font-bold">PDF Escaneado</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Creado desde</td>
                      <td className="py-3 px-4">Word, Google Docs, exportacion de software</td>
                      <td className="py-3 px-4">Escaner, camara, maquina de fax</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Contiene</td>
                      <td className="py-3 px-4">Datos de texto reales (caracteres, fuentes)</td>
                      <td className="py-3 px-4">Imagenes de paginas (fotografias)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Texto seleccionable?</td>
                      <td className="py-3 px-4">Si — puedes resaltar palabras</td>
                      <td className="py-3 px-4">No — seleccionas toda la imagen</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Buscable?</td>
                      <td className="py-3 px-4">Si — Ctrl+F funciona</td>
                      <td className="py-3 px-4">No — la busqueda no encuentra nada</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Extraer texto con</td>
                      <td className="py-3 px-4">PDF a TXT (gratis)</td>
                      <td className="py-3 px-4">Escaner OCR (Pro)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                <strong>Prueba rapida:</strong> Abre tu PDF e intenta resaltar una sola palabra. Si las palabras individuales se resaltan, es digital — usa <Link href="/es/pdf-a-txt" className="text-orange-600 hover:underline">PDF a TXT</Link>. Si toda la pagina se selecciona como un bloque, o nada se resalta, es escaneado — necesitas OCR.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PDF a TXT Estandar Falla en Documentos Escaneados</h2>
              <p className="text-slate-600 mb-4">
                Las herramientas estandar de extraccion de texto como <Link href="/es/pdf-a-txt" className="text-orange-600 hover:underline">PDF a TXT</Link> leen los datos de texto incrustados en un archivo PDF. Buscan codigos de caracteres, fuentes y datos de posicionamiento.
              </p>
              <p className="text-slate-600 mb-4">
                En un PDF escaneado, no hay datos de texto — solo datos de imagen. Cada pagina es una imagen similar a JPEG o PNG del papel original. La herramienta no encuentra caracteres para extraer, asi que produce un archivo vacio o solo espacios en blanco.
              </p>
              <p className="text-slate-600">
                Esto no es una limitacion especifica de OmnisPDF — <em>ninguna</em> herramienta estandar de extraccion de texto puede leer texto de imagenes. Necesitas una tecnologia completamente diferente: OCR.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Es OCR y Como Funciona?</h2>
              <p className="text-slate-600 mb-4">
                OCR (Reconocimiento Optico de Caracteres) es una tecnologia que lee texto de imagenes. En lugar de buscar datos de texto en el archivo PDF, analiza la apariencia visual de cada pagina y reconoce formas de letras, palabras y oraciones.
              </p>
              <p className="text-slate-600 mb-4">
                Los motores OCR modernos (como el que usa OmnisPDF) pueden:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#x2713; Reconocer texto en mas de 100 idiomas</li>
                <li>&#x2713; Manejar diferentes fuentes, tamanos y estilos</li>
                <li>&#x2713; Procesar paginas rotadas o ligeramente torcidas</li>
                <li>&#x2713; Distinguir entre texto, imagenes y tablas</li>
                <li>&#x2713; Alcanzar 95-99% de precision en documentos bien escaneados</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Hacer OCR a un PDF Escaneado (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF escaneado", desc: "Ve a la herramienta Escaner OCR y arrastra tu PDF escaneado al area de carga. Los documentos escaneados de multiples paginas son totalmente soportados." },
                  { title: "Ejecuta el procesamiento OCR", desc: "Haz clic en Iniciar OCR. El motor analiza cada imagen de pagina, identifica regiones de texto y reconoce caracteres. El tiempo de procesamiento depende del numero de paginas: un documento de 10 paginas tipicamente toma 10-20 segundos." },
                  { title: "Descarga y usa el texto", desc: "Descarga el texto extraido como PDF buscable o archivo de texto plano. Copia el texto en tus notas, documentos o sistemas de datos. Revisa por errores de OCR, especialmente en escaneos de baja calidad." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Mejores Resultados de OCR</h2>
              <p className="text-slate-600 mb-4">La precision del OCR depende en gran medida de la calidad del escaneo. Asi es como obtener los mejores resultados:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Escanea a 300 DPI o mas.</strong> Los escaneos de baja resolucion (150 DPI o menos) producen texto borroso que el OCR tiene dificultad para leer. 300 DPI es el punto ideal para documentos de texto.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Usa buena iluminacion para escaneos de telefono.</strong> Sombras, iluminacion desigual y reflejos reducen la precision. Si escaneas con tu telefono, usa <Link href="/es/limpieza-escaneo-telefono" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> para mejorar la imagen antes del OCR.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Mantiene la pagina plana y recta.</strong> Las paginas curvadas (de lomos de libros) y los escaneos inclinados reducen la precision. Aplana el documento lo mas posible.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Escanea documentos de texto en blanco y negro.</strong> Para documentos solo de texto, el modo escala de grises o blanco y negro produce texto mas nitido con mejor contraste para OCR.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Limpia antes del OCR.</strong> Elimina manchas de cafe, marcas de dobleces y ruido de fondo si es posible. Una entrada mas limpia produce un resultado mas preciso.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando el OCR No Dara Resultados Perfectos</h2>
              <p className="text-slate-600 mb-4">El OCR es poderoso pero no infalible. Espera menor precision con:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Texto manuscrito</h3>
                  <p className="text-slate-600">El OCR funciona mejor en texto impreso. El reconocimiento de escritura a mano esta mejorando pero sigue siendo poco confiable, especialmente para escritura cursiva o desordenada.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fuentes muy pequenas o decorativas</h3>
                  <p className="text-slate-600">El texto diminuto (menor a 8pt) y las fuentes muy estilizadas o decorativas pueden confundir a los motores OCR. El texto de cuerpo estandar en fuentes comunes da los mejores resultados.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documentos danados o desvanecidos</h3>
                  <p className="text-slate-600">Documentos viejos, desvanecidos o danados por agua con bajo contraste entre texto y fondo produciran errores. Para documentos criticos, siempre revisa el resultado del OCR.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Extraer Texto de Tu PDF Escaneado?</h2>
            <p className="text-slate-300 mb-6">Sube tu documento escaneado y obtiene texto editable con OCR — rapido, preciso y en linea.</p>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <ScanLine className="h-5 w-5" /> Escaner OCR
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Que es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
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
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Puedo convertir un PDF escaneado a texto sin OCR?", a: "No. Los PDFs escaneados almacenan paginas como imagenes, no como texto. Las herramientas estandar de PDF a TXT solo pueden extraer datos de texto existentes. Necesitas OCR para convertir paginas escaneadas a texto editable." },
                { q: "Que tan preciso es el OCR en PDFs escaneados?", a: "El OCR moderno tiene 95-99% de precision en escaneos limpios con fuentes estandar. La precision disminuye con mala calidad de escaneo, escritura a mano, fuentes inusuales o texto muy pequeno." },
                { q: "Cual es la diferencia entre un PDF escaneado y un PDF digital?", a: "Un PDF digital fue creado electronicamente y contiene datos de texto reales que puedes seleccionar y buscar. Un PDF escaneado es una fotografia de papel: cada pagina es una imagen sin datos de texto." },
                { q: "Como mejoro la precision del OCR en mis documentos escaneados?", a: "Escanea a 300 DPI o mas, usa buena iluminacion, mantiene el documento plano y alineado, escanea en blanco y negro para documentos solo de texto, y limpia los escaneos de telefono antes del OCR." },
                { q: "Puedo hacer OCR a una foto de telefono de un documento?", a: "Si, pero las fotos de telefono suelen tener distorsion de perspectiva, sombras y menor resolucion. Usa la herramienta de Limpieza de Escaneo de Telefono primero para enderezar y mejorar la imagen." },
                { q: "El OCR es gratis en OmnisPDF?", a: "El Escaner OCR es una funcion Pro en OmnisPDF. Los usuarios gratuitos pueden probar PDF a TXT basico. Para documentos escaneados que requieren OCR, una suscripcion Pro ($7.99/mes) desbloquea el Escaner OCR con conversiones ilimitadas." },
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
