import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanLine, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PDF Escaneado a Texto: Cuando Necesitas OCR | PDF.it",
  description:
    "Aprende como convertir PDFs escaneados a texto editable usando OCR. Entiende cuando PDF a TXT funciona vs cuando necesitas OCR, más consejos para mejorar la calidad del escaneo.",
  keywords: "convertir pdf escaneado a texto, pdf escaneado a texto, ocr pdf, pdf escaneado ocr, extraer texto de pdf escaneado",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puedo convertir un PDF escaneado a texto sin OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Los PDFs escaneados almacenan páginas como imágenes, no como texto. Las herramientas estándar de PDF a TXT solo pueden extraer datos de texto existentes, no pueden leer texto de imágenes. Necesitas OCR (Reconocimiento Optico de Caracteres) para convertir páginas escaneadas a texto editable." }
    },
    {
      "@type": "Question",
      "name": "Que tan preciso es el OCR en PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "El OCR moderno tiene 95-99% de precisión en escaneos limpios con fuentes estándar. La precisión disminuye con mala calidad de escaneo, escritura a mano, fuentes inusuales o texto muy pequeño. Puedes mejorar los resultados escaneando a 300 DPI o más y asegurando buena iluminacion." }
    },
    {
      "@type": "Question",
      "name": "Cual es la diferencia entre un PDF escaneado y un PDF digital?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un PDF digital fue creado electrónicamente (desde Word, Google Docs, etc.) y contiene datos de texto reales que puedes selecciónar y buscar. Un PDF escaneado es una fotografia de papel: cada página es una imagen sin datos de texto. Necesitas OCR para extraer texto de PDFs escaneados." }
    },
    {
      "@type": "Question",
      "name": "Como mejoro la precisión del OCR en mis documentos escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Escanea a 300 DPI o más, usa buena iluminacion (sin sombras), mantiene el documento plano y alineado, escanea en blanco y negro para documentos solo de texto, y limpia los escaneos de teléfono usando herramientas de procesamiento de imagen antes del OCR." }
    },
    {
      "@type": "Question",
      "name": "Puedo hacer OCR a una foto de teléfono de un documento?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si, pero las fotos de teléfono suelen tener distorsion de perspectiva, sombras y menor resolución que los escaneos de escáner plano. Usa la herramienta de Limpieza de Escaneo de Teléfono de PDF.it primero para enderezar y mejorar la imagen, luego ejecuta OCR para mejores resultados." }
    },
    {
      "@type": "Question",
      "name": "El OCR es gratis en PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "El Escáner OCR es una función Pro en PDF.it. Los usuarios gratuitos pueden probar PDF a TXT básico (que funciona en PDFs digitales). Para documentos escaneados que requieren OCR, una suscripción Pro ($3.99/mes) desbloquea el Escáner OCR con conversiónes ilimitadas." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Convertir un PDF Escaneado a Texto con OCR",
  "description": "Extrae texto editable de PDFs escaneados en 3 simples pasos usando el Escáner OCR de PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF escaneado",
      "text": "Ve al Escáner OCR de PDF.it y sube tu PDF escaneado. La herramienta acepta PDFs con cualquier número de páginas escaneadas."
    },
    {
      "@type": "HowToStep",
      "name": "Ejecuta el procesamiento OCR",
      "text": "Haz clic en Iniciar OCR. La herramienta analiza cada imagen de página, reconoce caracteres de texto y los convierte en texto selecciónable y editable."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el texto resultante",
      "text": "Descarga el texto extraido. Puedes obtenerlo como un PDF buscable (texto superpuesto en las imágenes originales) o como texto plano para pegar en tus documentos."
    }
  ]
}

export default function ConvertirPdfEscaneadoATextoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a TXT</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF Escaneado a Texto: Cuando Necesitas OCR</h1>
              <p className="text-xl text-slate-300">
                Intentaste convertir tu PDF a texto y obtuviste un archivo vacio? Tu PDF probablemente esta escaneado. Aqui esta la diferencia entre PDFs digitales y escaneados, y como obtener texto de ambos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanLine className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Tienes un PDF escaneado? Extrae texto con OCR ahora mismo.</p>
            </div>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Escáner OCR <ArrowRight className="h-4 w-4" />
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
                      <td className="py-3 px-4">Word, Google Docs, exportación de software</td>
                      <td className="py-3 px-4">Escáner, camara, maquina de fax</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Contiene</td>
                      <td className="py-3 px-4">Datos de texto reales (caracteres, fuentes)</td>
                      <td className="py-3 px-4">Imágenes de páginas (fotografías)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Texto selecciónable?</td>
                      <td className="py-3 px-4">Si — puedes resaltar palabras</td>
                      <td className="py-3 px-4">No — selecciónas toda la imagen</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Buscable?</td>
                      <td className="py-3 px-4">Si — Ctrl+F funciona</td>
                      <td className="py-3 px-4">No — la búsqueda no encuentra nada</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Extraer texto con</td>
                      <td className="py-3 px-4">PDF a TXT (gratis)</td>
                      <td className="py-3 px-4">Escáner OCR (Pro)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                <strong>Prueba rápida:</strong> Abre tu PDF e intenta resaltar una sola palabra. Si las palabras individuales se resaltan, es digital — usa <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">PDF a TXT</Link>. Si toda la página se seleccióna como un bloque, o nada se resalta, es escaneado — necesitas OCR.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PDF a TXT Estándar Falla en Documentos Escaneados</h2>
              <p className="text-slate-600 mb-4">
                Las herramientas estándar de extracción de texto como <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">PDF a TXT</Link> leen los datos de texto incrustados en un archivo PDF. Buscan códigos de caracteres, fuentes y datos de posicionamiento.
              </p>
              <p className="text-slate-600 mb-4">
                En un PDF escaneado, no hay datos de texto — solo datos de imagen. Cada página es una imagen similar a JPEG o PNG del papel original. La herramienta no encuentra caracteres para extraer, así que produce un archivo vacio o solo espacios en blanco.
              </p>
              <p className="text-slate-600">
                Esto no es una limitacion específica de PDF.it — <em>ninguna</em> herramienta estándar de extracción de texto puede leer texto de imágenes. Necesitas una tecnologia completamente diferente: OCR.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Es OCR y Como Funciona?</h2>
              <p className="text-slate-600 mb-4">
                OCR (Reconocimiento Optico de Caracteres) es una tecnologia que lee texto de imágenes. En lugar de buscar datos de texto en el archivo PDF, analiza la apariencia visual de cada página y reconoce formas de letras, palabras y oraciones.
              </p>
              <p className="text-slate-600 mb-4">
                Los motores OCR modernos (como el que usa PDF.it) pueden:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#x2713; Reconocer texto en más de 100 idiomas</li>
                <li>&#x2713; Manejar diferentes fuentes, tamaños y estilos</li>
                <li>&#x2713; Procesar páginas rotadas o ligeramente torcidas</li>
                <li>&#x2713; Distinguir entre texto, imágenes y tablas</li>
                <li>&#x2713; Alcanzar 95-99% de precisión en documentos bien escaneados</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Hacer OCR a un PDF Escaneado (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF escaneado", desc: "Ve a la herramienta Escáner OCR y arrastra tu PDF escaneado al area de carga. Los documentos escaneados de múltiples páginas son totalmente soportados." },
                  { title: "Ejecuta el procesamiento OCR", desc: "Haz clic en Iniciar OCR. El motor analiza cada imagen de página, identifica regiones de texto y reconoce caracteres. El tiempo de procesamiento depende del número de páginas: un documento de 10 páginas tipicamente toma 10-20 segundos." },
                  { title: "Descarga y usa el texto", desc: "Descarga el texto extraido como PDF buscable o archivo de texto plano. Copia el texto en tus notas, documentos o sistemas de datos. Revisa por errores de OCR, especialmente en escaneos de baja calidad." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
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
              <p className="text-slate-600 mb-4">La precisión del OCR depende en gran medida de la calidad del escaneo. Asi es como obtener los mejores resultados:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Escanea a 300 DPI o más.</strong> Los escaneos de baja resolución (150 DPI o menos) producen texto borroso que el OCR tiene dificultad para leer. 300 DPI es el punto ideal para documentos de texto.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Usa buena iluminacion para escaneos de teléfono.</strong> Sombras, iluminacion desigual y reflejos reducen la precisión. Si escaneas con tu teléfono, usa <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> para mejorar la imagen antes del OCR.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Mantiene la página plana y recta.</strong> Las páginas curvadas (de lomos de libros) y los escaneos inclinados reducen la precisión. Aplana el documento lo más posible.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Escanea documentos de texto en blanco y negro.</strong> Para documentos solo de texto, el modo escala de grises o blanco y negro produce texto más nitido con mejor contraste para OCR.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Limpia antes del OCR.</strong> Elimina manchas de cafe, marcas de dobleces y ruido de fondo si es posible. Una entrada más limpia produce un resultado más preciso.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando el OCR No Dara Resultados Perfectos</h2>
              <p className="text-slate-600 mb-4">El OCR es poderoso pero no infalible. Espera menor precisión con:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Texto manuscrito</h3>
                  <p className="text-slate-600">El OCR funciona mejor en texto impreso. El reconocimiento de escritura a mano esta mejorando pero sigue siendo poco confiable, especialmente para escritura cursiva o desordenada.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fuentes muy pequeñas o decorativas</h3>
                  <p className="text-slate-600">El texto diminuto (menor a 8pt) y las fuentes muy estilizadas o decorativas pueden confundir a los motores OCR. El texto de cuerpo estándar en fuentes comunes da los mejores resultados.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documentos danados o desvanecidos</h3>
                  <p className="text-slate-600">Documentos viejos, desvanecidos o danados por agua con bajo contraste entre texto y fondo produciran errores. Para documentos criticos, siempre revisa el resultado del OCR.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Extraer Texto de Tu PDF Escaneado?</h2>
            <p className="text-slate-300 mb-6">Sube tu documento escaneado y obtiene texto editable con OCR — rápido, preciso y en línea.</p>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <ScanLine className="h-5 w-5" /> Escáner OCR
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Qué es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
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
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Puedo convertir un PDF escaneado a texto sin OCR?", a: "No. Los PDFs escaneados almacenan páginas como imágenes, no como texto. Las herramientas estándar de PDF a TXT solo pueden extraer datos de texto existentes. Necesitas OCR para convertir páginas escaneadas a texto editable." },
                { q: "Que tan preciso es el OCR en PDFs escaneados?", a: "El OCR moderno tiene 95-99% de precisión en escaneos limpios con fuentes estándar. La precisión disminuye con mala calidad de escaneo, escritura a mano, fuentes inusuales o texto muy pequeño." },
                { q: "Cual es la diferencia entre un PDF escaneado y un PDF digital?", a: "Un PDF digital fue creado electrónicamente y contiene datos de texto reales que puedes selecciónar y buscar. Un PDF escaneado es una fotografia de papel: cada página es una imagen sin datos de texto." },
                { q: "Como mejoro la precisión del OCR en mis documentos escaneados?", a: "Escanea a 300 DPI o más, usa buena iluminacion, mantiene el documento plano y alineado, escanea en blanco y negro para documentos solo de texto, y limpia los escaneos de teléfono antes del OCR." },
                { q: "Puedo hacer OCR a una foto de teléfono de un documento?", a: "Si, pero las fotos de teléfono suelen tener distorsion de perspectiva, sombras y menor resolución. Usa la herramienta de Limpieza de Escaneo de Teléfono primero para enderezar y mejorar la imagen." },
                { q: "El OCR es gratis en PDF.it?", a: "El Escáner OCR es una función Pro en PDF.it. Los usuarios gratuitos pueden probar PDF a TXT básico. Para documentos escaneados que requieren OCR, una suscripción Pro ($3.99/mes) desbloquea el Escáner OCR con conversiónes ilimitadas." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
