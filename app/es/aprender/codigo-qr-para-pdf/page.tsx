import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Crear un Codigo QR que Enlace a un Documento PDF | PDF.it",
  description:
    "Aprende como crear un codigo QR que abra un documento PDF. Guia paso a paso cubriendo opciones de alojamiento, consejos de tamano de archivo y mejores practicas para compartir PDFs via codigo QR.",
  keywords: "codigo qr para pdf, codigo qr enlace a pdf, compartir pdf con codigo qr, generador codigo qr pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puede un codigo QR enlazar directamente a un archivo PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Un codigo QR puede enlazar a cualquier URL, incluyendo un enlace directo a un archivo PDF alojado en linea. Cuando alguien escanea el codigo QR, el navegador de su telefono abre el PDF automaticamente." }
    },
    {
      "@type": "Question",
      "name": "Donde debo alojar el PDF para mi codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes alojarlo en tu propio sitio web, Google Drive (con compartir publico habilitado), Dropbox o cualquier servicio de alojamiento de archivos que te de una URL publica. Asegurate de que el enlace no requiera inicio de sesion para acceder." }
    },
    {
      "@type": "Question",
      "name": "Que tan grande puede ser el PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No hay limite tecnico del lado del codigo QR — solo almacena la URL, no el archivo. Sin embargo, manten tu PDF por debajo de 5MB para que cargue rapidamente en dispositivos moviles. Usa la herramienta Comprimir PDF de PDF.it para reducir archivos grandes." }
    },
    {
      "@type": "Question",
      "name": "El codigo QR seguira funcionando si actualizo el PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si reemplazas el archivo en la misma URL, si. Si la URL cambia (nueva subida con un enlace diferente), el codigo QR dejara de funcionar. Usa una URL de redireccion o reemplaza el archivo en su lugar para evitar esto." }
    },
    {
      "@type": "Question",
      "name": "Puedo proteger con contrasena el PDF detras del codigo QR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si, pero la persona que escanee necesitara ingresar la contrasena para abrir el PDF. Usa la herramienta Proteger PDF de PDF.it para agregar una contrasena. Comparte la contrasena por separado — no la pongas junto al codigo QR." }
    },
    {
      "@type": "Question",
      "name": "La herramienta de Codigo QR es gratuita?",
      "acceptedAnswer": { "@type": "Answer", "text": "El generador de Codigo QR de PDF.it es una funcion Pro ($7.99/mes). Pro incluye codigos QR ilimitados, compresion de PDF, herramientas de conversion y mas." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Crear un Codigo QR que Enlace a un PDF",
  "description": "Comparte cualquier documento PDF via codigo QR en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Aloja tu PDF en linea",
      "text": "Sube tu PDF a tu sitio web, Google Drive o un servicio de alojamiento de archivos. Copia la URL publica que abre o descarga el PDF directamente."
    },
    {
      "@type": "HowToStep",
      "name": "Genera el codigo QR",
      "text": "Abre la herramienta de Codigo QR de PDF.it, selecciona tipo URL y pega el enlace a tu PDF. Genera el codigo QR."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga y comparte",
      "text": "Descarga el codigo QR como PNG para uso digital o SVG para impresion. Pruebalo con tu telefono para asegurarte de que el PDF se abra correctamente."
    }
  ]
}

export default function CodigoQRParaPDFPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Crear un Codigo QR que Enlace a un Documento PDF</h1>
              <p className="text-xl text-slate-300">
                Necesitas compartir un PDF con un simple escaneo? Ya sea un folleto, manual, menu o volante — aqui te explicamos como crear un codigo QR que abra tu PDF al instante en cualquier telefono.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <QrCode className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Tienes la URL de tu PDF lista? Genera un codigo QR ahora.</p>
            </div>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Crear Codigo QR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why QR code for PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Compartir un PDF con un Codigo QR?</h2>
              <p className="text-slate-600 mb-4">
                Los codigos QR conectan lo fisico con lo digital. En lugar de decirle a alguien que "vaya a nuestro sitio web y busque el PDF en la seccion de recursos," imprimes un codigo QR en un poster, volante o empaque de producto y lo escanean para obtener el documento al instante. Los casos de uso comunes incluyen:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Manuales de producto.</strong> Imprime un codigo QR en el empaque del producto que enlace al manual PDF completo. Los clientes obtienen la version mas reciente sin que tu envies folletos gruesos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Folletos de eventos.</strong> Los organizadores de conferencias imprimen codigos QR en letreros que enlazan al programa completo del evento, biografias de ponentes o materiales de las sesiones como PDFs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Menus de restaurante.</strong> Enlaza a un <Link href="/es/aprender/codigo-qr-para-menu-de-restaurante" className="text-orange-600 hover:underline">menu PDF</Link> desde un codigo QR en la mesa. Actualiza el PDF en cualquier momento sin reimprimir el codigo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Volantes inmobiliarios.</strong> Imprime un codigo QR en un volante de propiedad que abra los detalles completos, planos y fotos como PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Materiales educativos.</strong> Profesores y catedraticos imprimen codigos QR en hojas de trabajo que enlazan a lecturas complementarias en PDF o claves de respuestas.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear un Codigo QR para PDF (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Prepara y optimiza tu PDF",
                    desc: "Antes de alojar, asegurate de que tu PDF este optimizado para visualizacion movil. Comprime archivos grandes usando la herramienta Comprimir PDF de PDF.it — apunta a menos de 5MB para que cargue rapidamente en conexiones de telefono. Aplana el PDF si tiene campos de formulario o capas innecesarias.",
                  },
                  {
                    title: "Sube y obtiene una URL publica",
                    desc: "Aloja el PDF donde cualquiera pueda acceder sin iniciar sesion. Opciones: tu sitio web (sube a /archivos/menu.pdf), Google Drive (Compartir > Cualquiera con el enlace > Lector), Dropbox (crea un enlace compartido) o cualquier alojamiento de archivos. Copia la URL directa.",
                  },
                  {
                    title: "Genera el codigo QR y pruebalo",
                    desc: "Abre la herramienta de Codigo QR de PDF.it (funcion Pro), selecciona URL, pega tu enlace al PDF y genera. Descarga como SVG para impresion o PNG para digital. Siempre escanea el codigo QR con tu telefono para verificar que el PDF se abra correctamente antes de distribuirlo.",
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

            {/* Hosting options */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Donde Alojar Tu PDF (Opciones de Alojamiento Comparadas)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Tu Propio Sitio Web</h3>
                  <p className="text-slate-600">
                    La mejor opcion para confiabilidad. Sube el PDF a tu servidor web y enlaza directamente a el. Tu controlas la URL, puedes actualizar el archivo en cualquier momento y no hay restricciones de terceros. La URL permanece permanente mientras mantengas el archivo en la misma ubicacion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Drive</h3>
                  <p className="text-slate-600">
                    Gratis y facil. Sube tu PDF, haz clic en Compartir, configura el acceso a "Cualquiera con el enlace" y copia el enlace. La desventaja: los enlaces de Google Drive a veces muestran una pagina de vista previa en lugar de abrir el PDF directamente. Puedes modificar la URL para forzar una descarga directa.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Dropbox</h3>
                  <p className="text-slate-600">
                    Similar a Google Drive. Crea un enlace compartido para el PDF. Los enlaces de Dropbox muestran una pagina de vista previa por defecto, pero puedes cambiar el parametro de URL de dl=0 a dl=1 para forzar una descarga directa.
                  </p>
                </div>
              </div>
            </section>

            {/* File size tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Optimizando el Tamano del Archivo PDF para Movil</h2>
              <p className="text-slate-600 mb-4">
                Las personas que escanean codigos QR estan en sus telefonos, a menudo con datos moviles. Un PDF de 50MB tardara una eternidad en cargar y la mayoria se dara por vencida. Asi es como mantener tu PDF ligero:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprime primero.</strong> Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamano del archivo. La mayoria de los PDFs pueden comprimirse un 50-80% sin perdida visible de calidad.</li>
                <li>&#10003; <strong>Apunta a un tamano especifico.</strong> Usa <Link href="/es/comprimir-pdf-a-5mb" className="text-orange-600 hover:underline">Comprimir a 5MB</Link> para limites de tamano garantizados.</li>
                <li>&#10003; <strong>Aplana capas.</strong> Si tu PDF tiene campos de formulario, anotaciones o capas de transparencia, <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">aplanalo</Link> para eliminar datos innecesarios.</li>
                <li>&#10003; <strong>Reduce la resolucion de imagenes.</strong> Los PDFs con imagenes de alta resolucion son los principales culpables. La compresion maneja esto automaticamente, pero tambien puedes reducir la calidad de imagen manualmente antes de crear el PDF.</li>
                <li>&#10003; <strong>Divide si es necesario.</strong> Si tu PDF es muy largo, considera usar <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para separarlo en secciones y enlazar solo la parte relevante.</li>
              </ul>
            </section>

            {/* Updating the PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Actualizar el PDF Sin Romper el Codigo QR</h2>
              <p className="text-slate-600 mb-4">
                Este es el error mas comun: actualizas tu PDF, lo subes como un nuevo archivo, obtienes una nueva URL, y de repente los codigos QR que ya imprimiste apuntan a la version antigua. Aqui hay tres estrategias para evitar esto:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Reemplaza el archivo en la misma URL.</strong> Si alojas en tu propio sitio web, simplemente sobrescribe el archivo antiguo con el nuevo en la misma ruta. La URL sigue siendo la misma, el codigo QR sigue funcionando.</li>
                <li>&#10003; <strong>Usa una URL de redireccion.</strong> Crea una URL corta (Bitly, redireccion de tu propio dominio) que apunte al PDF. Cuando actualices el PDF, cambia a donde redirige la URL corta. El codigo QR siempre apunta a la URL corta.</li>
                <li>&#10003; <strong>Usa una pagina /documentos.</strong> Crea una pagina en tu sitio web que siempre enlace a la version mas reciente del PDF. El codigo QR enlaza a la pagina, no al archivo directamente.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crea un Codigo QR para Tu PDF</h2>
            <p className="text-slate-300 mb-6">Enlaza cualquier documento PDF a un codigo QR escaneable en segundos. Funcion Pro — actualiza para codigos QR ilimitados y todas las herramientas PDF.</p>
            <Link
              href="/es/codigo-qr"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <QrCode className="h-5 w-5" /> Crear Codigo QR para PDF
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Crear un Codigo QR en Linea (Generador Gratuito)", href: "/es/aprender/como-crear-codigo-qr" },
                { title: "Codigo QR para Tarjetas de Presentacion (Enlaza a Tu Sitio Web o vCard)", href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion" },
                { title: "Codigo QR para Menus de Restaurante (Crea un Enlace Escaneable)", href: "/es/aprender/codigo-qr-para-menu-de-restaurante" },
                { title: "Mejores Practicas de Codigo QR (Tamano, Ubicacion y Pruebas)", href: "/es/aprender/mejores-practicas-codigo-qr" },
                { title: "Tipos de Codigo QR Explicados (URL, Texto, WiFi, vCard y Mas)", href: "/es/aprender/tipos-de-codigo-qr-explicados" },
                { title: "Crear un Codigo QR para WiFi (Los Invitados se Conectan al Instante)", href: "/es/aprender/codigo-qr-para-wifi" },
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
                { q: "Puede un codigo QR enlazar directamente a un archivo PDF?", a: "Si. Un codigo QR puede enlazar a cualquier URL, incluyendo un enlace directo a un archivo PDF alojado en linea. Cuando alguien escanea el codigo QR, el navegador de su telefono abre el PDF automaticamente." },
                { q: "Donde debo alojar el PDF para mi codigo QR?", a: "Puedes alojarlo en tu propio sitio web, Google Drive (con compartir publico habilitado), Dropbox o cualquier servicio de alojamiento de archivos que te de una URL publica. Asegurate de que el enlace no requiera inicio de sesion." },
                { q: "Que tan grande puede ser el PDF?", a: "No hay limite tecnico del lado del codigo QR — solo almacena la URL, no el archivo. Sin embargo, manten tu PDF por debajo de 5MB para que cargue rapidamente en dispositivos moviles. Usa la herramienta Comprimir PDF de PDF.it para reducir archivos grandes." },
                { q: "El codigo QR seguira funcionando si actualizo el PDF?", a: "Si reemplazas el archivo en la misma URL, si. Si la URL cambia (nueva subida con un enlace diferente), el codigo QR dejara de funcionar. Usa una URL de redireccion o reemplaza el archivo en su lugar." },
                { q: "Puedo proteger con contrasena el PDF detras del codigo QR?", a: "Si, pero la persona que escanee necesitara ingresar la contrasena para abrir el PDF. Usa la herramienta Proteger PDF de PDF.it para agregar una contrasena. Comparte la contrasena por separado." },
                { q: "La herramienta de Codigo QR es gratuita?", a: "El generador de Codigo QR de PDF.it es una funcion Pro ($7.99/mes). Pro incluye codigos QR ilimitados, compresion de PDF, herramientas de conversion y mas." },
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
