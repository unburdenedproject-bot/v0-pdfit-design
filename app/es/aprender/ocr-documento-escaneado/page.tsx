import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Hacer OCR a un Documento Escaneado (Paso a Paso) | OmnisPDF",
  description: "Aprende como ejecutar OCR en documentos escaneados como recibos, contratos y documentos antiguos. Guia paso a paso para digitalizar PDFs escaneados en texto buscable y copiable.",
  keywords: "ocr documento escaneado, escanear y ocr, ocr pdf escaneado, digitalizar documento escaneado",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Que tipos de documentos escaneados puede procesar el OCR?", "acceptedAnswer": { "@type": "Answer", "text": "OCR puede procesar virtualmente cualquier documento escaneado: contratos, recibos, facturas, documentos legales, libros viejos, cartas, formularios y documentos de identificacion. Mientras el texto sea impreso (no manuscrito) y el escaneo sea razonablemente claro, OCR lo reconocera." } },
  { "@type": "Question", "name": "Necesito un escaner para usar OCR?", "acceptedAnswer": { "@type": "Answer", "text": "No. Puedes usar la camara de tu telefono para fotografiar un documento, guardarlo como PDF y luego ejecutar OCR. Para mejores resultados con documentos escaneados por telefono, usa la herramienta Limpieza de Escaneo de Telefono de OmnisPDF primero." } },
  { "@type": "Question", "name": "Cuanto tarda el procesamiento OCR?", "acceptedAnswer": { "@type": "Answer", "text": "La mayoria de documentos se procesan en unos segundos a menos de un minuto. Documentos mas largos (50+ paginas) o archivos muy grandes pueden tomar un par de minutos. Los usuarios Pro de OmnisPDF obtienen procesamiento prioritario." } },
  { "@type": "Question", "name": "Puede el OCR manejar documentos viejos o desvanecidos?", "acceptedAnswer": { "@type": "Answer", "text": "OCR puede manejar texto moderadamente desvanecido, pero documentos muy desvanecidos o danados pueden producir menor precision. Mejorar el contraste del escaneo antes de ejecutar OCR ayuda significativamente." } },
  { "@type": "Question", "name": "Se preserva el escaneo original despues del OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Si. OCR agrega una capa de texto invisible sobre tu escaneo original. La apariencia visual de cada pagina permanece exactamente igual — solo cambia la capacidad de busqueda." } },
  { "@type": "Question", "name": "Puedo hacer OCR a un documento en espanol u otro idioma?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El Escaner OCR de OmnisPDF soporta docenas de idiomas incluyendo espanol, frances, aleman, portugues, italiano y muchos mas. Selecciona el idioma correcto antes de procesar para la mejor precision." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Hacer OCR a un Documento Escaneado", "description": "Digitaliza un documento escaneado en texto buscable en 3 pasos usando el Escaner OCR de OmnisPDF.", "step": [
  { "@type": "HowToStep", "name": "Escanea o sube tu documento", "text": "Escanea tu documento usando un escaner o camara de telefono. Guardalo como PDF, luego subelo a la herramienta Escaner OCR de OmnisPDF." },
  { "@type": "HowToStep", "name": "Selecciona el idioma y ejecuta OCR", "text": "Elige el idioma del texto en tu documento y haz clic en el boton OCR para iniciar el reconocimiento." },
  { "@type": "HowToStep", "name": "Descarga el documento digitalizado", "text": "Descarga tu PDF buscable. Ahora puedes encontrar texto, copiar contenido y convertir el documento a Word, Excel o texto plano." }
] }

export default function OCRDocumentoEscaneadoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Hacer OCR a un Documento Escaneado (Paso a Paso)</h1>
            <p className="text-xl text-slate-300">Recibos escaneados, contratos, documentos antiguos y documentos de identificacion son solo imagenes dentro de un PDF. Aqui esta como ejecutar OCR y convertirlos en texto real y buscable.</p>
          </div></div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Listo para digitalizar tu documento escaneado? Prueba el Escaner OCR (Pro).</p>
            </div>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Escaner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Tipos de Documentos Escaneados Puedes OCR?</h2>
              <p className="text-slate-600 mb-4">OCR funciona en cualquier documento donde el texto fue impreso (escrito a maquina, no a mano). Estos son los tipos mas comunes de documentos escaneados en los que se ejecuta OCR:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Contratos y acuerdos.</strong> Los documentos legales escaneados necesitan ser buscables para que puedas encontrar clausulas, fechas o nombres especificos sin leer 30 paginas manualmente.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Recibos y facturas.</strong> El seguimiento de gastos y la preparacion de impuestos requieren extraer montos, fechas y nombres de proveedores de recibos escaneados.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Informes antiguos y documentos academicos.</strong> Investigadores y empresas digitalizan documentos archivados para que puedan ser buscados y referenciados eficientemente.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Documentos gubernamentales y de identificacion.</strong> Pasaportes, licencias de conducir y formularios gubernamentales frecuentemente necesitan ser escaneados y hacerse buscables para solicitudes y cumplimiento.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Registros medicos.</strong> Los proveedores de salud escanean documentos de pacientes que necesitan ser indexados y buscables dentro de sistemas de registros de salud electronicos.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Hacer OCR a un Documento Escaneado (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Escanea o fotografiael documento", desc: "Usa un escaner plano (configurado a 300 DPI para mejores resultados) o la camara de tu telefono. Guarda el escaneo como PDF. Si usaste tu telefono, pasa el archivo por Limpieza de Escaneo de Telefono primero para mejorar el contraste y enderezar la imagen." },
                  { title: "Sube al Escaner OCR de OmnisPDF", desc: "Abre la herramienta Escaner OCR (funcion Pro) y sube tu PDF escaneado. Selecciona el idioma del documento — esto es importante para la precision, especialmente para documentos que no estan en ingles." },
                  { title: "Descarga y verifica tu PDF buscable", desc: "Descarga el archivo procesado. Abrelo y prueba Ctrl+F para buscar una palabra que sabes esta en el documento. Si el texto se encuentra, OCR funciono correctamente. La apariencia visual permanece identica a tu escaneo original." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preparando Tu Escaneo para Mejores Resultados OCR</h2>
              <p className="text-slate-600 mb-4">La calidad de tu escaneo afecta directamente la precision del OCR. Estas son las cosas de mayor impacto que puedes hacer antes de ejecutar OCR:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Escanea a 300 DPI o mas.</strong> Resoluciones menores producen caracteres borrosos que el OCR tiene dificultad para reconocer. 300 DPI es el punto ideal para documentos de texto.</li>
                <li>&#10003; <strong>Usa buena iluminacion.</strong> Sombras desiguales a traves de la pagina causan errores de OCR. Los escaneres planos dan la iluminacion mas consistente.</li>
                <li>&#10003; <strong>Endereza el documento.</strong> Texto torcido o rotado reduce la precision. Usa <Link href="/es/rotar-pdf" className="text-orange-600 hover:underline">Rotar PDF</Link> para corregir la orientacion antes del OCR.</li>
                <li>&#10003; <strong>Aumenta el contraste.</strong> Texto desvanecido en una pagina amarillenta es dificil para el OCR. Si el original esta desvanecido, aumenta el contraste en la configuracion de tu escaner.</li>
                <li>&#10003; <strong>Elimina ruido de fondo.</strong> Manchas, marcas de cafe, sellos sobre texto y paginas arrugadas reducen la precision del OCR. Escanea la copia mas limpia disponible.</li>
              </ul>
              <p className="text-slate-600 mt-4">Para una guia mas detallada, lee nuestra guia completa de <Link href="/es/aprender/consejos-precision-ocr" className="text-orange-600 hover:underline">Consejos de Precision OCR</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Hacer Despues de Ejecutar OCR</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Convertir a Word o Excel</h3><p className="text-slate-600">Ahora que tu documento tiene una capa de texto, convertir a otros formatos da mucho mejores resultados. Usa <Link href="/es/pdf-a-txt" className="text-orange-600 hover:underline">PDF a TXT</Link> para documentos editables o extrae datos tabulares como facturas y estados financieros.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Extraer Texto Plano</h3><p className="text-slate-600">Necesitas solo el texto sin formato? Usa <Link href="/es/pdf-a-txt" className="text-orange-600 hover:underline">PDF a TXT</Link> para extraer todo el contenido de texto de tu PDF buscable. Esto es util para analisis de datos, traduccion o alimentar texto a otro software.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Comprimir el Resultado</h3><p className="text-slate-600">El procesamiento OCR a veces puede aumentar ligeramente el tamano del archivo debido a la capa de texto agregada. Si necesitas enviar el documento por correo o subirlo a un portal con limites de tamano, usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link>.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Proteger Documentos Sensibles</h3><p className="text-slate-600">Si tu documento escaneado contiene informacion sensible (contratos, registros financieros, copias de identificacion), considera agregar proteccion con contrasena despues del OCR usando <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link>.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Escaneando Documentos con Tu Telefono</h2>
              <p className="text-slate-600 mb-4">No necesitas un escaner plano para digitalizar documentos. La mayoria de telefonos modernos toman fotos suficientemente buenas para OCR — especialmente si sigues algunas guias:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Sostiene tu telefono directamente sobre el documento (no en angulo) para minimizar la distorsion.</li>
                <li>&#10003; Usa iluminacion natural y uniforme. Evita el flash, que crea puntos brillantes y reflejos.</li>
                <li>&#10003; Coloca el documento en una superficie oscura y contrastante para que los bordes esten claramente definidos.</li>
                <li>&#10003; Usa el escaner de documentos integrado de tu telefono (Notas en iPhone, Google Drive en Android) para recorte automatico y correccion de perspectiva.</li>
                <li>&#10003; Pasa el resultado por la herramienta <Link href="/es/limpieza-escaneo-telefono" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> de OmnisPDF antes del OCR para mejorar automaticamente el contraste y enderezar la imagen.</li>
              </ul>
              <p className="text-slate-600 mt-4">Para mas sobre usar OCR en dispositivos moviles, ve nuestra guia sobre <Link href="/es/aprender/ocr-pdf-en-movil" className="text-orange-600 hover:underline">OCR un PDF en Tu Telefono</Link>.</p>
            </section>
          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Digitaliza Tus Documentos Escaneados</h2>
            <p className="text-slate-300 mb-6">Sube cualquier PDF escaneado y conviertelo en un documento buscable, copiable y convertible en segundos.</p>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Probar Escaner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Que es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
                { title: "OCR PDF a Texto Buscable", href: "/es/aprender/ocr-pdf-a-texto-buscable" },
                { title: "Consejos de Precision OCR", href: "/es/aprender/consejos-precision-ocr" },
                { title: "OCR PDF en Movil (iPhone y Android)", href: "/es/aprender/ocr-pdf-en-movil" },
                { title: "Puede el OCR Leer Texto Manuscrito?", href: "/es/aprender/ocr-texto-manuscrito" },
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
                { q: "Que tipos de documentos escaneados puede procesar el OCR?", a: "OCR puede procesar virtualmente cualquier documento escaneado: contratos, recibos, facturas, documentos legales, libros viejos, cartas, formularios y documentos de identificacion. Mientras el texto sea impreso y el escaneo sea claro, OCR lo reconocera." },
                { q: "Necesito un escaner para usar OCR?", a: "No. Puedes usar la camara de tu telefono para fotografiar un documento, guardarlo como PDF y luego ejecutar OCR. Para mejores resultados, usa la herramienta Limpieza de Escaneo de Telefono de OmnisPDF primero." },
                { q: "Cuanto tarda el procesamiento OCR?", a: "La mayoria de documentos se procesan en segundos a menos de un minuto. Documentos largos (50+ paginas) pueden tomar un par de minutos. Los usuarios Pro obtienen procesamiento prioritario." },
                { q: "Puede el OCR manejar documentos viejos o desvanecidos?", a: "OCR puede manejar texto moderadamente desvanecido, pero documentos muy danados pueden producir menor precision. Mejorar el contraste antes de ejecutar OCR ayuda significativamente." },
                { q: "Se preserva el escaneo original despues del OCR?", a: "Si. OCR agrega una capa de texto invisible sobre tu escaneo original. La apariencia visual permanece exactamente igual — solo cambia la capacidad de busqueda." },
                { q: "Puedo hacer OCR a un documento en espanol u otro idioma?", a: "Si. El Escaner OCR de OmnisPDF soporta docenas de idiomas incluyendo espanol, frances, aleman, portugues, italiano y muchos mas." },
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
