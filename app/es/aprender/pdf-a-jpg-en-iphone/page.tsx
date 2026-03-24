import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PDF a JPG en iPhone (Sin Apps) | PDF.it",
  description: "Aprende como convertir PDF a JPG en iPhone usando solo Safari — sin apps que descargar. Guia paso a paso para guardar paginas PDF como imagenes en tu app de Fotos.",
  keywords: "convertir pdf a jpg iphone, pdf a jpg ios, pdf a imagen iphone, guardar pdf como jpg iphone",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Puedo convertir PDF a JPG en iPhone sin una app?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Abre PDF.it.com en Safari en tu iPhone, sube tu PDF y conviertelo a JPG. Las imagenes se descargan directamente a tu telefono — no necesitas instalar ninguna app." } },
  { "@type": "Question", "name": "Donde se guardan los JPGs convertidos en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Los archivos JPG descargados van a tu app Archivos por defecto (en la carpeta Descargas). Desde ahi, puedes abrir la imagen y tocar el boton compartir para guardarla en tu app de Fotos." } },
  { "@type": "Question", "name": "Puedo convertir PDF a JPG en iPad tambien?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El mismo proceso funciona en iPad usando Safari. Abre PDF.it.com, sube tu PDF, convierte y descarga. Los iPads facilitan esto gracias a la pantalla mas grande." } },
  { "@type": "Question", "name": "Como comparto un JPG convertido desde mi iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Despues de descargar el JPG, abrelo en Archivos o Fotos y toca el boton compartir. Puedes enviarlo por iMessage, WhatsApp, email, AirDrop o cualquier otra opcion disponible en tu iPhone." } },
  { "@type": "Question", "name": "Hay un limite de tamano de archivo para convertir en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden convertir PDFs de hasta 25MB. Los usuarios Pro pueden manejar archivos de hasta 200MB. La mayoria de PDFs que la gente convierte en sus telefonos estan muy por debajo de 25MB." } },
  { "@type": "Question", "name": "Puedo convertir multiples paginas PDF a JPGs en iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Cuando conviertes un PDF de varias paginas, cada pagina se convierte en un JPG separado. Puedes descargarlos todos como archivo ZIP y luego descomprimirlo en tu app Archivos." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Convertir PDF a JPG en iPhone", "description": "Convierte paginas PDF a imagenes JPG en tu iPhone usando Safari — sin apps necesarias.", "step": [
  { "@type": "HowToStep", "name": "Abre PDF.it en Safari", "text": "En tu iPhone, abre Safari y ve a pdf.it.com/pdf-to-jpg. La herramienta funciona directamente en tu navegador movil." },
  { "@type": "HowToStep", "name": "Sube tu PDF", "text": "Toca el area de carga y selecciona tu PDF desde Archivos, iCloud Drive o cualquier otra ubicacion en tu iPhone." },
  { "@type": "HowToStep", "name": "Convierte y descarga", "text": "Toca Convertir. Una vez listo, descarga las imagenes JPG. Se guardan en tu app Archivos, y puedes moverlas a Fotos desde ahi." }
] }

export default function PdfAJpgEnIphonePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a JPG</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a JPG en iPhone (Sin Apps)</h1>
          <p className="text-xl text-slate-300">Tu iPhone no tiene una forma integrada de convertir PDFs a imagenes. Aqui te explicamos como hacerlo en Safari en menos de un minuto — sin descargas de la App Store.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><ImageIcon className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Estas en tu iPhone ahora? Abre la herramienta directamente.</p></div>
          <Link href="/es/pdf-a-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Herramienta PDF a JPG <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que los iPhones No Pueden Convertir PDFs a JPG de Forma Nativa</h2>
            <p className="text-slate-600 mb-4">iOS puede <em>ver</em> PDFs en Archivos y Safari, pero Apple no ha incluido una forma de convertir paginas PDF a imagenes. La app Atajos puede hacerlo con un flujo personalizado, pero es complicado de configurar y los resultados suelen ser de baja calidad.</p>
            <p className="text-slate-600 mb-4">La solucion mas rapida es usar una herramienta basada en web en Safari. Funciona exactamente como un convertidor de escritorio, pero directamente en tu telefono. Sin descargas, sin registros, sin almacenamiento usado.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Paso a Paso: Convertir PDF a JPG en iPhone</h2>
            <div className="space-y-4">
              {[
                { title: "Abre Safari y ve a PDF.it", desc: "Abre Safari en tu iPhone y navega a pdf.it.com/pdf-to-jpg. La herramienta esta completamente optimizada para moviles y funciona en cualquier iPhone con iOS 14 o posterior." },
                { title: "Sube tu PDF", desc: "Toca el area de carga. Tu iPhone mostrara opciones para elegir desde: Archivos, iCloud Drive, Fotos (para PDFs escaneados) o Explorar. Busca y selecciona el PDF que quieres convertir." },
                { title: "Convierte y descarga tus JPGs", desc: "Toca el boton Convertir. Una vez que termine el procesamiento, toca Descargar. Las imagenes JPG se guardan en tu carpeta Descargas en la app Archivos. Para PDFs de varias paginas, obtendras un archivo ZIP con todas las imagenes." },
              ].map((step, i) => (<div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div><div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div></div>))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como Guardar el JPG en Tu App de Fotos</h2>
            <p className="text-slate-600 mb-4">Por defecto, Safari guarda las descargas en la app Archivos. Si quieres el JPG en tu biblioteca de Fotos (carrete), sigue estos pasos adicionales:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span>Abre la app <strong>Archivos</strong> en tu iPhone.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span>Ve a <strong>En Mi iPhone &gt; Descargas</strong> (o revisa iCloud Drive &gt; Descargas).</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span>Busca el archivo JPG y <strong>manten presionado</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span>Toca <strong>Compartir</strong>, luego toca <strong>Guardar Imagen</strong>. El JPG ahora esta en tu app de Fotos.</span></li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Casos de Uso Comunes en iPhone</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Compartir una Pagina de Documento en WhatsApp o iMessage</h3><p className="text-slate-600">Enviar un PDF en una app de mensajeria a menudo no muestra previsualizacion — el destinatario tiene que descargar y abrirlo por separado. Convierte la pagina a JPG primero, y se muestra como imagen en linea que todos pueden ver inmediatamente.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Publicar un Certificado o Documento en Redes Sociales</h3><p className="text-slate-600">Instagram, Facebook y LinkedIn no aceptan cargas de PDF. Convierte tu certificado, diploma o logro a JPG y publicalo como imagen regular.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Guardar un Recibo o Factura en Fotos</h3><p className="text-slate-600">Muchos recibos llegan como adjuntos de email en PDF. Convertir a JPG y guardar en Fotos los hace faciles de encontrar despues — sin buscar en email o Archivos.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Subir a un Formulario que Solo Acepta Imagenes</h3><p className="text-slate-600">Algunos formularios en linea, sistemas de verificacion de identidad y portales de carga requieren JPG o PNG — no aceptan PDF. Convierte en tu iPhone y sube la imagen directamente.</p></div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Mejores Resultados en iPhone</h2>
            <ul className="space-y-2 text-slate-700">
              <li>- <strong>Usa Wi-Fi</strong> para PDFs mas grandes. Convertir un PDF de 20 paginas sube el archivo y descarga multiples JPGs — Wi-Fi es mas rapido y no consume tus datos.</li>
              <li>- <strong>Usa Safari, no Chrome.</strong> Safari maneja las descargas mejor en iOS. Chrome a veces tiene problemas al guardar archivos en iPhones.</li>
              <li>- <strong>Solo necesitas una pagina?</strong> Si solo necesitas una pagina como JPG, no tienes que convertir todo el PDF. Consulta nuestra guia: <Link href="/es/aprender/guardar-pagina-pdf-como-jpg" className="text-orange-600 hover:underline">Guardar Una Pagina PDF como JPG</Link>.</li>
              <li>- <strong>Elige PNG para documentos de texto.</strong> Si el PDF es mayormente texto y necesitas que se vea nitido, usa <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PDF a PNG</Link> en su lugar.</li>
              <li>- <strong>Comprime primero si el PDF es enorme.</strong> Si tu PDF supera los 25MB, <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">comprimelo primero</Link> para que este bajo el limite.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Convierte PDF a JPG en Tu iPhone</h2>
          <p className="text-slate-300 mb-6">Abre la herramienta en Safari, sube tu PDF y obten imagenes JPG en segundos. Sin app necesaria.</p>
          <Link href="/es/pdf-a-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><ImageIcon className="h-5 w-5" /> Herramienta PDF a JPG</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como Convertir PDF a JPG en Linea (Rapido y Alta Calidad)", href: "/es/aprender/convertir-pdf-a-jpg" },
              { title: "Como Guardar una Pagina de PDF como JPG", href: "/es/aprender/guardar-pagina-pdf-como-jpg" },
              { title: "Convertir PDF a JPG para PowerPoint (Mejores Configuraciones)", href: "/es/aprender/pdf-a-jpg-para-powerpoint" },
              { title: "Por Que Tu PDF a JPG Se Ve Borroso (Y Como Solucionarlo)", href: "/es/aprender/por-que-pdf-a-jpg-se-ve-borroso" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "Puedo convertir PDF a JPG en iPhone sin una app?", a: "Si. Abre PDF.it.com en Safari en tu iPhone, sube tu PDF y conviertelo a JPG. Las imagenes se descargan directamente a tu telefono — no necesitas instalar ninguna app." },
              { q: "Donde se guardan los JPGs convertidos en iPhone?", a: "Los archivos JPG descargados van a tu app Archivos por defecto (en la carpeta Descargas). Desde ahi, puedes abrir la imagen y tocar el boton compartir para guardarla en tu app de Fotos." },
              { q: "Puedo convertir PDF a JPG en iPad tambien?", a: "Si. El mismo proceso funciona en iPad usando Safari. Abre PDF.it.com, sube tu PDF, convierte y descarga." },
              { q: "Como comparto un JPG convertido desde mi iPhone?", a: "Despues de descargar el JPG, abrelo en Archivos o Fotos y toca el boton compartir. Puedes enviarlo por iMessage, WhatsApp, email, AirDrop o cualquier otra opcion." },
              { q: "Hay un limite de tamano de archivo para convertir en iPhone?", a: "Los usuarios gratuitos pueden convertir PDFs de hasta 25MB. Los usuarios Pro pueden manejar archivos de hasta 200MB." },
              { q: "Puedo convertir multiples paginas PDF a JPGs en iPhone?", a: "Si. Cuando conviertes un PDF de varias paginas, cada pagina se convierte en un JPG separado. Puedes descargarlos todos como archivo ZIP." },
            ].map((faq, i) => (<div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
