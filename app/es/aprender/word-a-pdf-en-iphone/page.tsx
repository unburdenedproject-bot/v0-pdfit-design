import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir Word a PDF en iPhone (DOCX a PDF en Minutos) | PDF.it",
  description:
    "Aprende a convertir Word a PDF en iPhone usando Safari y PDF.it. Sin necesidad de app — abre tu DOCX desde correo o Archivos, conviértelo y comparte el PDF en minutos.",
  keywords: "word a pdf iphone, convertir docx a pdf iphone, word a pdf en telefono, docx a pdf movil, convertir documento word iphone",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo convertir Word a PDF en iPhone sin una app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona directamente en Safari (o cualquier navegador de iPhone). Ve a pdf.it.com/word-to-pdf, sube tu archivo .docx y descarga el PDF convertido. No necesitas instalar ninguna aplicación." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo abro un archivo DOCX en mi iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes abrir archivos DOCX usando la app Archivos, desde adjuntos de correo electrónico (mantén presionado > Compartir), o desde apps de almacenamiento en la nube como Google Drive, Dropbox o OneDrive. También puedes abrirlos directamente en la app Microsoft Word si la tienes instalada." }
    },
    {
      "@type": "Question",
      "name": "¿El PDF mantendrá el mismo formato que mi documento Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it preserva fuentes, imágenes, tablas y diseño durante la conversión. Para mejores resultados, asegúrate de que tu documento Word use fuentes estándar como Arial o Calibri, que se convierten de forma confiable en todos los dispositivos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir Word a PDF usando la app Archivos en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "La app Archivos puede abrir archivos DOCX para visualización pero no tiene un convertidor PDF integrado. Puedes usar el truco del menú Imprimir (compartir > Imprimir > pellizcar para hacer zoom en la vista previa > compartir como PDF), pero esto a menudo cambia márgenes y elimina hipervínculos. PDF.it da una conversión más precisa." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo comparto el PDF convertido desde mi iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Después de descargar el PDF de PDF.it, toca el ícono de compartir para enviarlo por correo electrónico, iMessage, AirDrop, WhatsApp o cualquier otra app. También puedes guardarlo en la app Archivos o subirlo a almacenamiento en la nube." }
    },
    {
      "@type": "Question",
      "name": "¿Hay un límite de tamaño de archivo para convertir en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir archivos de hasta 25MB. Los usuarios Pro pueden subir hasta 200MB. La mayoría de los documentos Word están muy por debajo de 25MB, así que el nivel gratuito funciona para la gran mayoría de las conversiones." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir Word a PDF en iPhone",
  "description": "Convierte un archivo DOCX a PDF en tu iPhone usando Safari y PDF.it — sin necesidad de app.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abre PDF.it en Safari",
      "text": "Abre Safari en tu iPhone y ve a pdf.it.com/word-to-pdf. Toca el área de carga para buscar tu archivo .docx."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona y sube tu archivo Word",
      "text": "Navega a tu archivo en la app Archivos, adjunto de correo o almacenamiento en la nube. Selecciona el archivo .docx — se subirá automáticamente."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga y comparte el PDF",
      "text": "Toca Convertir a PDF, espera unos segundos, luego toca Descargar. Usa el botón de compartir para enviar el PDF por correo, iMessage, AirDrop o guardarlo en Archivos."
    }
  ]
}

export default function WordAPdfEnIphonePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word a PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Word a PDF en iPhone</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas convertir un documento Word a PDF directamente desde tu iPhone? Sin necesidad de app — solo Safari, tu archivo y 60 segundos.
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
              <p className="text-slate-700 font-semibold">¿Listo para convertir? Abre este enlace en tu iPhone.</p>
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

            {/* Why on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando Necesitas Convertir Sobre la Marcha</h2>
              <p className="text-slate-600 mb-4">
                Estás lejos de tu computadora y alguien te envía un documento Word que necesita ser PDF — un contrato para firmar, un currículo para enviar, un informe para compartir. O tal vez escribiste algo en la app de Word en tu teléfono y necesitas guardarlo como PDF antes de enviarlo.
              </p>
              <p className="text-slate-600 mb-4">
                El iPhone no tiene un convertidor integrado de Word a PDF. La app Archivos puede <em>abrir</em> archivos .docx, pero no puede <em>convertirlos</em> a PDF de forma confiable con formato preciso. Y descargar una app dedicada solo para una conversión parece excesivo.
              </p>
              <p className="text-slate-600">
                Ahí es donde entra PDF.it. Funciona completamente en tu navegador — sin app que instalar, sin cuenta necesaria para tus primeras conversiones.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Convertir Word a PDF en iPhone (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre PDF.it en Safari",
                    desc: "Abre Safari y ve a pdf.it.com/word-to-pdf. La página está completamente optimizada para móvil — funciona exactamente como la versión de escritorio, solo adaptada al tamaño de tu pantalla.",
                  },
                  {
                    title: "Sube tu archivo Word",
                    desc: "Toca el área de carga. iOS te mostrará opciones: elige \"Explorar\" para encontrar tu archivo en la app Archivos, o navega a una ubicación de almacenamiento en la nube (iCloud Drive, Google Drive, Dropbox). Selecciona tu archivo .docx y se subirá automáticamente.",
                  },
                  {
                    title: "Convierte y descarga",
                    desc: "Toca Convertir a PDF. En unos segundos, aparecerá el botón de descarga. Tócalo para guardar el PDF en tu iPhone. iOS puede preguntar dónde guardarlo — elige la app Archivos o una carpeta específica.",
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

            {/* Finding your file */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dónde Encontrar Tu Archivo Word en iPhone</h2>
              <p className="text-slate-600 mb-4">
                ¿No sabes dónde está tu archivo .docx? Estos son los lugares más comunes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Adjunto de correo electrónico.</strong> Abre el correo con el archivo Word, mantén presionado el adjunto, luego toca "Compartir" y elige "Guardar en Archivos". Ahora puedes encontrarlo en la app Archivos al subir a PDF.it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>App Archivos.</strong> Abre la app Archivos y revisa "En mi iPhone", "iCloud Drive" o cualquier almacenamiento en la nube conectado. Si alguien te envió el archivo por AirDrop o Mensajes, generalmente está en la carpeta Descargas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Apps de almacenamiento en la nube.</strong> Si el archivo está en Google Drive, Dropbox o OneDrive, puedes acceder directamente desde el selector de archivos de iOS al subir a PDF.it — estos servicios se integran con la app Archivos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>App Microsoft Word.</strong> Si creaste el documento en la app de Word, ábrelo ahí, toca Compartir y elige "Guardar en Archivos" para hacerlo accesible para la carga.</span>
                </li>
              </ul>
            </section>

            {/* Sharing the PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cómo Compartir el PDF Convertido</h2>
              <p className="text-slate-600 mb-4">
                Una vez que hayas descargado el PDF, compartirlo es sencillo:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Correo electrónico:</strong> Abre Mail o Gmail, crea un nuevo mensaje, toca el ícono de adjuntar y selecciona tu PDF desde la app Archivos.</li>
                <li>&#10003; <strong>iMessage:</strong> Abre Mensajes, toca el botón +, elige el PDF desde Archivos y envía.</li>
                <li>&#10003; <strong>AirDrop:</strong> Abre el PDF en Archivos, toca Compartir y selecciona el dispositivo Apple cercano.</li>
                <li>&#10003; <strong>WhatsApp / Slack / Teams:</strong> Usa el botón de adjuntar en cualquier app de mensajería y busca tu PDF.</li>
                <li>&#10003; <strong>Portal de carga:</strong> Si necesitas subir el PDF a un sitio web (como una solicitud de empleo), abre el sitio en Safari, toca el botón de subir y selecciona tu PDF desde Archivos.</li>
              </ul>
            </section>

            {/* Print to PDF trick */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">El Truco de "Imprimir a PDF" (Y Por Qué No Es Ideal)</h2>
              <p className="text-slate-600 mb-4">
                Quizás hayas escuchado sobre convertir a PDF usando el menú de imprimir del iPhone: abre el archivo, toca Compartir &gt; Imprimir, luego pellizca para hacer zoom en la vista previa de impresión para crear un PDF.
              </p>
              <p className="text-slate-600 mb-4">
                Esto funciona en un apuro, pero tiene desventajas reales:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Los márgenes cambian.</strong> El diseño de impresión a menudo agrega márgenes diferentes a los de tu documento original.</li>
                <li>&#10003; <strong>Los hipervínculos se pierden.</strong> Todos los enlaces clicables se convierten en texto plano.</li>
                <li>&#10003; <strong>La calidad de fuente baja.</strong> El texto puede verse ligeramente borroso comparado con una conversión adecuada.</li>
                <li>&#10003; <strong>Los metadatos se pierden.</strong> Las propiedades del documento como título, autor y palabras clave se eliminan.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para una nota interna rápida, el truco de imprimir está bien. Para cualquier cosa profesional — currículos, contratos, entregables para clientes — usa el <Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">convertidor Word a PDF de PDF.it</Link> para resultados precisos.
              </p>
            </section>

            {/* Other things you can do */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Otras Cosas Que Puedes Hacer en iPhone</h2>
              <p className="text-slate-600 mb-4">
                Todas las herramientas de PDF.it funcionan en Safari móvil, así que puedes manejar todo tu flujo de trabajo PDF desde tu teléfono:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> — reduce el tamaño del archivo si el PDF es demasiado grande para enviar por correo o subir.</li>
                <li>&#10003; <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">Office a PDF</Link> — convierte hojas de cálculo de Excel y presentaciones de PowerPoint también.</li>
                <li>&#10003; <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> — combina múltiples PDFs en un solo documento.</li>
                <li>&#10003; <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> — agrega una contraseña a documentos sensibles antes de compartir.</li>
              </ul>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para los Mejores Resultados en iPhone</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa Safari.</strong> Aunque Chrome y Firefox también funcionan, Safari se integra mejor con el selector de archivos de iOS y el sistema de descargas.</li>
                <li>&#10003; <strong>Verifica tu WiFi.</strong> Subir y descargar con una conexión fuerte es más rápido y confiable que los datos móviles para archivos más grandes.</li>
                <li>&#10003; <strong>Guarda en Archivos, no en Fotos.</strong> Cuando iOS pregunte dónde guardar el PDF, elige la app Archivos — los PDFs guardados en Fotos pueden ser más difíciles de encontrar y compartir.</li>
                <li>&#10003; <strong>Verifica antes de enviar.</strong> Abre el PDF descargado en la app Archivos para confirmar que el formato se vea correcto antes de compartir con alguien.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convierte Word a PDF en Tu iPhone</h2>
            <p className="text-slate-300 mb-6">Abre este enlace en Safari en tu iPhone — sube, convierte y comparte en menos de un minuto.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Convertir Word a PDF en Línea (DOCX a PDF)", href: "/es/aprender/convertir-word-a-pdf" },
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
                { q: "¿Puedo convertir Word a PDF en iPhone sin una app?", a: "Sí. PDF.it funciona directamente en Safari (o cualquier navegador de iPhone). Ve a pdf.it.com/word-to-pdf, sube tu archivo .docx y descarga el PDF convertido. No necesitas instalar ninguna aplicación." },
                { q: "¿Cómo abro un archivo DOCX en mi iPhone?", a: "Puedes abrir archivos DOCX usando la app Archivos, desde adjuntos de correo electrónico (mantén presionado > Compartir), o desde apps de almacenamiento en la nube como Google Drive, Dropbox o OneDrive. También puedes abrirlos directamente en la app Microsoft Word si la tienes instalada." },
                { q: "¿El PDF mantendrá el mismo formato que mi documento Word?", a: "Sí. PDF.it preserva fuentes, imágenes, tablas y diseño durante la conversión. Para mejores resultados, asegúrate de que tu documento Word use fuentes estándar como Arial o Calibri, que se convierten de forma confiable en todos los dispositivos." },
                { q: "¿Puedo convertir Word a PDF usando la app Archivos en iPhone?", a: "La app Archivos puede abrir archivos DOCX para visualización pero no tiene un convertidor PDF integrado. Puedes usar el truco del menú Imprimir (compartir > Imprimir > pellizcar para hacer zoom en la vista previa > compartir como PDF), pero esto a menudo cambia márgenes y elimina hipervínculos. PDF.it da una conversión más precisa." },
                { q: "¿Cómo comparto el PDF convertido desde mi iPhone?", a: "Después de descargar el PDF de PDF.it, toca el ícono de compartir para enviarlo por correo electrónico, iMessage, AirDrop, WhatsApp o cualquier otra app. También puedes guardarlo en la app Archivos o subirlo a almacenamiento en la nube." },
                { q: "¿Hay un límite de tamaño de archivo para convertir en iPhone?", a: "Los usuarios gratuitos pueden subir archivos de hasta 25MB. Los usuarios Pro pueden subir hasta 200MB. La mayoría de los documentos Word están muy por debajo de 25MB, así que el nivel gratuito funciona para la gran mayoría de las conversiones." },
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
