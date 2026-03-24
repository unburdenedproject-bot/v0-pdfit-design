import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Mejor Formato para Enviar Documentos (PDF vs DOCX vs Otros) | PDF.it",
  description:
    "PDF vs DOCX: cual formato debes usar para enviar documentos? Descubre por que PDF es la mejor opcion para correos, solicitudes de empleo, facturas y uso profesional.",
  keywords: "mejor formato para enviar documentos, pdf vs docx, enviar documentos como pdf, formato de documento para email, mejor formato de archivo para compartir",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Es mejor PDF o DOCX para enviar documentos?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF es mejor para enviar documentos finales porque preserva el formato en todos los dispositivos, no puede ser editado accidentalmente y se ve profesional. DOCX es mejor cuando necesitas que el destinatario haga ediciones." }
    },
    {
      "@type": "Question",
      "name": "Por que los empleadores prefieren curriculos en PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los curriculos en PDF se ven igual en cualquier pantalla, no cambian de formato segun el software o fuentes del lector, y lucen mas pulidos y profesionales que los archivos editables de Word." }
    },
    {
      "@type": "Question",
      "name": "Puedo convertir mis documentos a PDF gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it te permite convertir archivos de Word, Excel y PowerPoint a PDF gratis, hasta 10 conversiones por dia con archivos de hasta 25MB." }
    },
    {
      "@type": "Question",
      "name": "Que formato debo usar para facturas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Siempre envia facturas como PDF. Esto evita que el destinatario modifique montos o terminos, preserva tu marca y diseno, y se ve profesional." }
    },
    {
      "@type": "Question",
      "name": "Debo enviar documentos como PDF o como enlace de Google Docs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para documentos finales, PDF es mejor ya que no requiere acceso a internet ni una cuenta de Google para ver. Los enlaces de Google Docs son mejores para edicion colaborativa donde varias personas necesitan hacer cambios." }
    },
    {
      "@type": "Question",
      "name": "Como me aseguro de que mi PDF se vea bien antes de enviarlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Despues de convertir a PDF, abre el archivo y revisa cada pagina por problemas de formato. Usa la herramienta de aplanar de PDF.it para eliminar campos de formulario o capas que podrian mostrarse diferente en otros dispositivos." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Enviar Documentos en el Mejor Formato",
  "description": "Convierte tus documentos a PDF para compartir profesionalmente en 3 simples pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Elige PDF como tu formato",
      "text": "Para cualquier documento que envies como version final — curriculos, facturas, informes, contratos — PDF es la mejor opcion porque preserva el formato universalmente."
    },
    {
      "@type": "HowToStep",
      "name": "Convierte tu archivo a PDF",
      "text": "Sube tu archivo de Word, Excel o PowerPoint al convertidor de Office a PDF de PDF.it. La herramienta preserva tu formato, fuentes e imagenes automaticamente."
    },
    {
      "@type": "HowToStep",
      "name": "Revisa y envia",
      "text": "Abre el PDF para verificar el formato, luego envialo por correo electronico o subelo al portal requerido. Comprime el PDF primero si excede los limites de tamano del correo."
    }
  ]
}

export default function MejorFormatoParaEnviarDocumentosPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office a PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Mejor Formato para Enviar Documentos (PDF vs DOCX vs Otros)</h1>
              <p className="text-xl text-slate-300">
                Terminaste de escribir tu documento. Ahora necesitas enviarlo. Debes adjuntar el archivo .docx, exportar como PDF o compartir un enlace? Aqui te explicamos cuando usar cada formato y por que PDF gana en la mayoria de situaciones.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Necesitas convertir un documento a PDF ahora mismo?</p>
            </div>
            <Link
              href="/es/office-a-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convertir a PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF vs. DOCX: Las Diferencias Clave</h2>
              <p className="text-slate-600 mb-4">
                Entender la diferencia entre estos dos formatos te ayuda a elegir el correcto cada vez:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>PDF es un formato de visualizacion.</strong> Muestra el documento exactamente como el autor lo diseno — mismas fuentes, mismo diseno, mismo espaciado — en cada dispositivo, sistema operativo y tamano de pantalla.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>DOCX es un formato de edicion.</strong> Esta disenado para escribir y revisar. El documento puede verse diferente dependiendo de las fuentes instaladas, la version de Word y la resolucion de pantalla del lector.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>PDF no puede ser editado accidentalmente.</strong> Cuando envias un DOCX, el destinatario podria cambiar texto, eliminar una seccion o reformatear un parrafo por accidente. Los PDFs previenen esto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>PDF se abre en todas partes.</strong> Cada telefono, tableta y computadora puede abrir PDFs nativamente. DOCX requiere Microsoft Word, Google Docs o una aplicacion compatible.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cuando Enviar como PDF (Casi Siempre)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Curriculos y cartas de presentacion",
                    desc: "Los empleadores esperan PDF. Asegura que tu diseno, margenes y tipografia cuidadosamente elaborados se vean perfectos en cualquier software de recursos humanos o pantalla. Convierte tu curriculo de Word usando la herramienta Word a PDF.",
                  },
                  {
                    title: "Facturas y contratos",
                    desc: "PDF evita que los destinatarios modifiquen montos, fechas o terminos. Tambien preserva la marca de tu empresa — logos, colores y fuentes se renderizan exactamente como fueron disenados.",
                  },
                  {
                    title: "Informes y propuestas",
                    desc: "Al compartir con clientes o partes interesadas, PDF asegura que graficos, tablas e imagenes se mantengan en su lugar. Sin riesgo de que un grafico se mueva a la siguiente pagina en su pantalla.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando DOCX (u Otros Formatos Editables) Son Mejores</h2>
              <p className="text-slate-600 mb-4">
                Hay algunas situaciones donde enviar el archivo editable tiene mas sentido:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Edicion colaborativa.</strong> Si tu colega necesita agregar comentarios, rastrear cambios o reescribir secciones, DOCX es el formato correcto. Los enlaces de Google Docs funcionan aun mejor para colaboracion en tiempo real.</li>
                <li>&#10003; <strong>Plantillas.</strong> Si estas compartiendo una plantilla que otros llenaran (como un formulario o un brief), enviala como DOCX para que puedan escribir directamente en los campos.</li>
                <li>&#10003; <strong>Cuando se solicita especificamente.</strong> Algunas solicitudes de empleo o formularios gubernamentales piden especificamente .docx. Sigue sus instrucciones, aunque PDF suele ser superior.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para todo lo demas — versiones finales, envios formales, entregables a clientes — convierte a PDF primero. Puedes usar las herramientas de PDF.it: <Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">Word a PDF</Link>, <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">Excel a PDF</Link>, o <Link href="/es/powerpoint-a-pdf" className="text-orange-600 hover:underline">PowerPoint a PDF</Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Hay de Otros Formatos?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Enlaces de Google Docs</h3>
                  <p className="text-slate-600">
                    Compartir un enlace de Google Docs es conveniente para colaboracion, pero riesgoso para documentos finales. El destinatario necesita acceso a internet y una cuenta de Google. Los enlaces tambien pueden configurarse accidentalmente como &quot;cualquiera puede editar,&quot; permitiendo cambios no deseados. Para versiones finales, exporta como PDF.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Texto Plano (.txt)</h3>
                  <p className="text-slate-600">
                    Los archivos de texto plano no tienen formato — sin negritas, sin imagenes, sin tablas. Son utiles para codigo, registros o notas rapidas, pero nunca para documentos profesionales. Si necesitas extraer texto de un PDF, usa la herramienta <Link href="/es/pdf-a-texto" className="text-orange-600 hover:underline">PDF a TXT</Link> de PDF.it.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Formatos de Imagen (JPG, PNG)</h3>
                  <p className="text-slate-600">
                    Algunas personas toman capturas de pantalla de documentos y las envian como imagenes. Esto hace que el texto no sea buscable ni seleccionable, y la calidad suele ser pobre. Siempre envia el PDF real. Si necesitas imagenes de un PDF, usa <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">PDF a JPG</Link> o <Link href="/es/extraer-imagenes-de-pdf" className="text-orange-600 hover:underline">Extraer Imagenes de PDF</Link>.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preparando Tu PDF para Email</h2>
              <p className="text-slate-600 mb-4">
                Incluso despues de elegir PDF como formato, hay algunos pasos adicionales para asegurar que llegue perfectamente:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Verifica el tamano del archivo.</strong> La mayoria de proveedores de correo limitan adjuntos a 25MB. Si tu PDF es muy grande, usa <Link href="/es/comprimir-pdf-para-email" className="text-orange-600 hover:underline">Comprimir PDF para Email</Link> para reducirlo.</li>
                <li>&#10003; <strong>Aplana el PDF.</strong> Si tu documento tiene campos de formulario, capas o anotaciones, <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">aplanalo</Link> para asegurar que todo se muestre correctamente en el dispositivo del destinatario.</li>
                <li>&#10003; <strong>Nombra el archivo claramente.</strong> Usa un nombre descriptivo como &quot;Juan-Perez-Curriculo-2026.pdf&quot; en lugar de &quot;Documento1.pdf&quot;. Esto ayuda al destinatario a encontrar tu archivo despues.</li>
                <li>&#10003; <strong>Protege documentos sensibles con contrasena.</strong> Usa <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> para agregar una contrasena si el documento contiene informacion financiera o personal.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convierte Tus Documentos a PDF</h2>
            <p className="text-slate-300 mb-6">Sube cualquier archivo de Office y obtiene un PDF con formato profesional en segundos — gratis, sin registro.</p>
            <Link
              href="/es/office-a-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Convertir a PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Convertir PDF Escaneado a Texto: Cuando Necesitas OCR", href: "/es/aprender/convertir-pdf-escaneado-a-texto" },
                { title: "Que es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
                { title: "Como Crear un Codigo QR en Linea", href: "/es/aprender/como-crear-codigo-qr" },
                { title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)", href: "/es/aprender/mejores-practicas-codigo-qr" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Es mejor PDF o DOCX para enviar documentos?", a: "PDF es mejor para enviar documentos finales porque preserva el formato en todos los dispositivos, no puede ser editado accidentalmente y se ve profesional. DOCX es mejor cuando necesitas que el destinatario haga ediciones." },
                { q: "Por que los empleadores prefieren curriculos en PDF?", a: "Los curriculos en PDF se ven igual en cualquier pantalla, no cambian de formato segun el software o fuentes del lector, y lucen mas pulidos y profesionales que los archivos editables de Word." },
                { q: "Puedo convertir mis documentos a PDF gratis?", a: "Si. PDF.it te permite convertir archivos de Word, Excel y PowerPoint a PDF gratis, hasta 10 conversiones por dia con archivos de hasta 25MB." },
                { q: "Que formato debo usar para facturas?", a: "Siempre envia facturas como PDF. Esto evita que el destinatario modifique montos o terminos, preserva tu marca y diseno, y se ve profesional." },
                { q: "Debo enviar documentos como PDF o como enlace de Google Docs?", a: "Para documentos finales, PDF es mejor ya que no requiere acceso a internet ni una cuenta de Google para ver. Los enlaces de Google Docs son mejores para edicion colaborativa donde varias personas necesitan hacer cambios." },
                { q: "Como me aseguro de que mi PDF se vea bien antes de enviarlo?", a: "Despues de convertir a PDF, abre el archivo y revisa cada pagina por problemas de formato. Usa la herramienta de aplanar de PDF.it para eliminar campos de formulario o capas que podrian mostrarse diferente en otros dispositivos." },
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
