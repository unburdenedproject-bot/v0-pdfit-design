import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Exportar reportes mensuales: Excel a PDF para email y compartir | PDF.it",
  description: "Aprende como convertir reportes de Excel a PDF para email y compartir. Cubre como establecer areas de impresion una vez, comprimir para email, agregar encabezados y pies de pagina, y crear presentaciones profesionales.",
  keywords: "exportar excel a pdf para email, reporte excel a pdf, reporte mensual pdf, excel a pdf adjunto email, compartir excel como pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como convierto un reporte de Excel a PDF para email?", "acceptedAnswer": { "@type": "Answer", "text": "Establece tu area de impresion en Excel para incluir solo los datos del reporte, ajusta el diseno de pagina, luego sube a la herramienta Excel a PDF de PDF.it. Despues de la conversion, usa Comprimir PDF para que el archivo quede bajo los limites de adjuntos de email (usualmente 20-25MB)." } },
  { "@type": "Question", "name": "Como configuro mi reporte Excel para convertirlo cada mes sin rehacer las configuraciones?", "acceptedAnswer": { "@type": "Answer", "text": "Establece tu area de impresion, orientacion de pagina, margenes y escalado una vez en tu plantilla de Excel. Guarda el archivo. Cada mes, actualiza los datos y convierte — todas tus configuraciones de impresion se conservan en el archivo guardado." } },
  { "@type": "Question", "name": "Puedo agregar encabezados y pies de pagina a mi reporte Excel antes de convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Ve a Insertar &gt; Encabezado y pie de pagina en Excel. Agrega el nombre de tu empresa, titulo del reporte, fecha o numeros de pagina. Estos aparecen en cada pagina del PDF convertido." } },
  { "@type": "Question", "name": "Como comprimo mi reporte Excel-a-PDF para email?", "acceptedAnswer": { "@type": "Answer", "text": "Despues de convertir a PDF, sube el archivo a la herramienta Comprimir PDF de PDF.it. Elige compresion Media para un buen balance de calidad y tamano. Para limites estrictos, usa Comprimir PDF para Email que optimiza especificamente para limites de adjuntos." } },
  { "@type": "Question", "name": "Debo proteger con contrasena mi reporte PDF de Excel?", "acceptedAnswer": { "@type": "Answer", "text": "Si el reporte contiene datos financieros sensibles, si. Usa la herramienta Proteger PDF de PDF.it para agregar una contrasena despues de convertir. Esto previene acceso no autorizado si el email se reenviae o el archivo se comparte accidentalmente." } },
  { "@type": "Question", "name": "Puedo unir multiples reportes Excel en un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Convierte cada reporte de Excel a PDF por separado, luego usa la herramienta Unir PDF de PDF.it para combinarlos en un solo documento. Esto es ideal para paquetes trimestrales que incluyen multiples reportes mensuales." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como exportar un reporte de Excel a PDF para email", "description": "Convierte tu reporte mensual de Excel a un PDF profesional listo para email en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Prepara tu reporte Excel", "text": "Establece el area de impresion para incluir solo los datos del reporte, agrega encabezados/pies de pagina (Insertar &gt; Encabezado y pie de pagina), y configura el diseno de pagina (horizontal, margenes estrechos, ajustar columnas a una pagina)." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Sube tu archivo Excel preparado a la herramienta Excel a PDF de PDF.it y haz clic en Convertir. El PDF conserva tu formato, encabezados, pies de pagina y configuraciones de diseno de pagina." },
  { "@type": "HowToStep", "name": "Comprime y envia", "text": "Si el PDF es muy grande para email, usa la herramienta Comprimir PDF de PDF.it para reducir el tamano del archivo. Luego adjunta a tu email y envia." }
] }

export default function ReporteExcelAPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Exportar reportes mensuales: Excel a PDF para email y compartir</h1>
          <p className="text-xl text-slate-300">Creas el mismo reporte cada mes en Excel. Aqui te mostramos como configurarlo una vez, convertir a un PDF profesional, comprimirlo para email y enviarlo — cada vez, en menos de un minuto.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Tienes un reporte listo? Conviertelo a PDF ahora.</p></div>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">El flujo de trabajo para reportes recurrentes</h2>
            <p className="text-slate-600 mb-4">Si envias el mismo tipo de reporte cada mes (ventas, gastos, KPIs, estado de proyecto), no deberias estar reconfigurando tus opciones de impresion cada vez. Este es el flujo de trabajo eficiente:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Configuralo una vez.</strong> Configura tu area de impresion, orientacion, margenes, escalado y encabezados/pies de pagina en tu plantilla de Excel. Guarda el archivo.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Actualiza datos mensualmente.</strong> Cada mes, abre la plantilla, actualiza los numeros y guarda. Todas tus configuraciones de impresion se conservan.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Convierte a PDF.</strong> Sube a la <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">herramienta Excel a PDF de PDF.it</Link>. El convertidor respeta tus configuraciones de impresion guardadas.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Comprime y envia.</strong> Si el PDF excede el limite de email, <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">comprimelo</Link> antes de adjuntarlo.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Configurando tu area de impresion (hazlo una vez)</h2>
            <div className="space-y-4">
              {[
                { title: "Selecciona el rango de tu reporte", desc: "Haz clic en la primera celda de tu reporte (usualmente A1) y arrastra hasta la ultima celda con datos. Si tu reporte tiene una fila de titulo y una fila de totales, incluye ambas. No incluyas columnas auxiliares o filas de apoyo usadas para calculos." },
                { title: "Establece el area de impresion", desc: "Ve a Diseno de pagina > Area de impresion > Establecer area de impresion. Una linea punteada aparece alrededor de tu rango seleccionado. Estos son ahora los unicos datos que apareceran en el PDF — todo lo que quede fuera se excluye." },
                { title: "Configura opciones de pagina", desc: "Establece Orientacion en Horizontal (para reportes anchos) o Vertical (para reportes estrechos). Establece Margenes en Estrecho. Establece Ajustar a > Ancho: 1 pagina. Estas configuraciones se guardan con el archivo." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de presentacion profesional</h2>
            <p className="text-slate-600 mb-4">Un reporte PDF bien formateado se ve mas profesional que un archivo Excel sin procesar. Asi es como hacer que tus reportes destaquen:</p>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Agrega encabezados y pies de pagina</h3><p className="text-slate-600">Ve a <strong>Insertar &gt; Encabezado y pie de pagina</strong> en Excel. Agrega el nombre de tu empresa en el encabezado, y la fecha mas numeros de pagina en el pie. Estos aparecen en cada pagina del PDF, dandole un aspecto pulido y profesional.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Incluye una fila de titulo del reporte</h3><p className="text-slate-600">Haz que la fila 1 sea una fila de titulo con el nombre del reporte y el rango de fechas (ej. "Reporte de Ventas Mensual — Febrero 2026"). Usa un tamano de fuente mas grande y formato en negrita. Esto hace que el PDF sea autoexplicativo cuando alguien lo abra meses despues.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa formato consistente</h3><p className="text-slate-600">Aplica formato de numeros a todas las celdas de datos (moneda, porcentajes, fechas). Usa colores alternados en filas para legibilidad. Pon en negrita tu fila de totales. Estos detalles se convierten limpiamente a PDF y hacen el reporte mas facil de escanear.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Congela los encabezados de columna</h3><p className="text-slate-600">En Excel, ve a <strong>Diseno de pagina &gt; Imprimir titulos &gt; Filas a repetir en la parte superior</strong> y selecciona tu fila de encabezado. Esto imprime los encabezados de columna en la parte superior de cada pagina del PDF — esencial para reportes de multiples paginas.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Comprimiendo tu reporte para email</h2>
            <p className="text-slate-600 mb-4">La mayoria de los proveedores de email limitan los adjuntos a 20-25MB. Si tu reporte PDF es mas grande (comun con graficos o imagenes), comprimelo antes de enviar:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> — optimizado especificamente para limites de adjuntos de email</li>
              <li>&#10003; La compresion media mantiene graficos y tablas legibles mientras reduce significativamente el tamano del archivo</li>
              <li>&#10003; Un reporte tipico de 5MB con graficos se comprime a 1-2MB — bien bajo el limite de email</li>
            </ul>
            <p className="text-slate-600 mt-4">Para reportes muy grandes, considera dividir el PDF en secciones usando <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> y enviar como multiples adjuntos.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Protegiendo reportes financieros sensibles</h2>
            <p className="text-slate-600 mb-4">Los reportes financieros a menudo contienen datos sensibles — numeros de ingresos, informacion salarial, margenes de ganancia. Antes de enviarlos por email, considera agregar proteccion:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Proteccion con contrasena</strong> — Usa <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> para agregar una contrasena. Comparte la contrasena por separado (mensaje de texto, llamada telefonica o un email diferente).</li>
              <li>&#10003; <strong>Acceso de solo lectura</strong> — Restringe permisos de edicion para que los destinatarios puedan ver pero no modificar el PDF.</li>
              <li>&#10003; <strong>Marca de agua</strong> — Agrega una marca de agua "Confidencial" para marcar el nivel de sensibilidad del documento.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Combinando multiples reportes en un PDF</h2>
            <p className="text-slate-600">Necesitas enviar un paquete trimestral con tres reportes mensuales? Convierte cada archivo Excel a PDF por separado, luego usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combinarlos en un solo documento. Tambien puedes agregar una portada o un indice como primera pagina. Esto crea un paquete profesional y consolidado que es mas facil de manejar para los destinatarios que multiples adjuntos.</p>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tu reporte?</h2>
          <p className="text-slate-300 mb-6">Sube tu reporte de Excel y obtiene un PDF profesional en segundos — gratis, sin registro.</p>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir Excel a PDF en linea (XLSX a PDF)", href: "/es/aprender/convertir-excel-a-pdf" },
              { title: "Excel a PDF corta columnas? Asi se soluciona", href: "/es/aprender/excel-a-pdf-columnas-cortadas" },
              { title: "Excel a PDF ajustar a pagina: mejores configuraciones", href: "/es/aprender/excel-a-pdf-ajustar-a-pagina" },
              { title: "Convertir Excel a PDF en Mac", href: "/es/aprender/excel-a-pdf-en-mac" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
