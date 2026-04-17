import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Exportar reportes mensuales: Excel a PDF para email y compartir | PDF.it",
  description: "Aprende como convertir reportes de Excel a PDF para email y compartir. Cubre como establecer areas de impresión una vez, comprimir para email, agregar encabezados y pies de página, y crear presentaciones profesionales.",
  keywords: "exportar excel a pdf para email, reporte excel a pdf, reporte mensual pdf, excel a pdf adjunto email, compartir excel como pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como convierto un reporte de Excel a PDF para email?", "acceptedAnswer": { "@type": "Answer", "text": "Establece tu area de impresión en Excel para incluir solo los datos del reporte, ajusta el diseño de página, luego sube a la herramienta Excel a PDF de PDF.it. Después de la conversión, usa Comprimir PDF para que el archivo quede bajo los límites de adjuntos de email (usualmente 20-25MB)." } },
  { "@type": "Question", "name": "Como configuro mi reporte Excel para convertirlo cada mes sin rehacer las configuraciónes?", "acceptedAnswer": { "@type": "Answer", "text": "Establece tu area de impresión, orientación de página, margenes y escalado una vez en tu plantilla de Excel. Guarda el archivo. Cada mes, actualiza los datos y convierte — todas tus configuraciónes de impresión se conservan en el archivo guardado." } },
  { "@type": "Question", "name": "Puedo agregar encabezados y pies de página a mi reporte Excel antes de convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Ve a Insertar &gt; Encabezado y pie de página en Excel. Agrega el nombre de tu empresa, título del reporte, fecha o números de página. Estos aparecen en cada página del PDF convertido." } },
  { "@type": "Question", "name": "Como comprimo mi reporte Excel-a-PDF para email?", "acceptedAnswer": { "@type": "Answer", "text": "Después de convertir a PDF, sube el archivo a la herramienta Comprimir PDF de PDF.it. Elige compresión Media para un buen balance de calidad y tamaño. Para límites estrictos, usa Comprimir PDF para Email que optimiza específicamente para límites de adjuntos." } },
  { "@type": "Question", "name": "Debo proteger con contraseña mi reporte PDF de Excel?", "acceptedAnswer": { "@type": "Answer", "text": "Si el reporte contiene datos financieros sensibles, si. Usa la herramienta Proteger PDF de PDF.it para agregar una contraseña después de convertir. Esto previene acceso no autorizado si el email se reenviae o el archivo se comparte accidentalmente." } },
  { "@type": "Question", "name": "Puedo unir múltiples reportes Excel en un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Convierte cada reporte de Excel a PDF por separado, luego usa la herramienta Unir PDF de PDF.it para combinarlos en un solo documento. Esto es ideal para paquetes trimestrales que incluyen múltiples reportes mensuales." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como exportar un reporte de Excel a PDF para email", "description": "Convierte tu reporte mensual de Excel a un PDF profesional listo para email en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Prepara tu reporte Excel", "text": "Establece el area de impresión para incluir solo los datos del reporte, agrega encabezados/pies de página (Insertar &gt; Encabezado y pie de página), y configura el diseño de página (horizontal, margenes estrechos, ajustar columnas a una página)." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Sube tu archivo Excel preparado a la herramienta Excel a PDF de PDF.it y haz clic en Convertir. El PDF conserva tu formato, encabezados, pies de página y configuraciónes de diseño de página." },
  { "@type": "HowToStep", "name": "Comprime y envia", "text": "Si el PDF es muy grande para email, usa la herramienta Comprimir PDF de PDF.it para reducir el tamaño del archivo. Luego adjunta a tu email y envia." }
] }

export default function ReporteExcelAPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Exportar reportes mensuales: Excel a PDF para email y compartir</h1>
          <p className="text-xl text-slate-300">Creas el mismo reporte cada mes en Excel. Aqui te mostramos como configurarlo una vez, convertir a un PDF profesional, comprimirlo para email y enviarlo — cada vez, en menos de un minuto.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Tienes un reporte listo? Conviertelo a PDF ahora.</p></div>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">El flujo de trabajo para reportes recurrentes</h2>
            <p className="text-slate-600 mb-4">Si envias el mismo tipo de reporte cada mes (ventas, gastos, KPIs, estado de proyecto), no deberias estar reconfigurando tus opciones de impresión cada vez. Este es el flujo de trabajo eficiente:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Configuralo una vez.</strong> Configura tu area de impresión, orientación, margenes, escalado y encabezados/pies de página en tu plantilla de Excel. Guarda el archivo.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Actualiza datos mensualmente.</strong> Cada mes, abre la plantilla, actualiza los números y guarda. Todas tus configuraciónes de impresión se conservan.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Convierte a PDF.</strong> Sube a la <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">herramienta Excel a PDF de PDF.it</Link>. El convertidor respeta tus configuraciónes de impresión guardadas.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Comprime y envia.</strong> Si el PDF excede el límite de email, <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimelo</Link> antes de adjuntarlo.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Configurando tu area de impresión (hazlo una vez)</h2>
            <div className="space-y-4">
              {[
                { title: "Selecciona el rango de tu reporte", desc: "Haz clic en la primera celda de tu reporte (usualmente A1) y arrastra hasta la última celda con datos. Si tu reporte tiene una fila de título y una fila de totales, incluye ambas. No incluyas columnas auxiliares o filas de apoyo usadas para cálculos." },
                { title: "Establece el area de impresión", desc: "Ve a Diseño de página > Area de impresión > Establecer area de impresión. Una línea punteada aparece alrededor de tu rango selecciónado. Estos son ahora los únicos datos que apareceran en el PDF — todo lo que quede fuera se excluye." },
                { title: "Configura opciones de página", desc: "Establece Orientación en Horizontal (para reportes anchos) o Vertical (para reportes estrechos). Establece Margenes en Estrecho. Establece Ajustar a > Ancho: 1 página. Estas configuraciónes se guardan con el archivo." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de presentación profesional</h2>
            <p className="text-slate-600 mb-4">Un reporte PDF bien formateado se ve más profesional que un archivo Excel sin procesar. Asi es como hacer que tus reportes destaquen:</p>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Agrega encabezados y pies de página</h3><p className="text-slate-600">Ve a <strong>Insertar &gt; Encabezado y pie de página</strong> en Excel. Agrega el nombre de tu empresa en el encabezado, y la fecha más números de página en el pie. Estos aparecen en cada página del PDF, dandole un aspecto pulido y profesional.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Incluye una fila de título del reporte</h3><p className="text-slate-600">Haz que la fila 1 sea una fila de título con el nombre del reporte y el rango de fechas (ej. "Reporte de Ventas Mensual — Febrero 2026"). Usa un tamaño de fuente más grande y formato en negrita. Esto hace que el PDF sea autoexplicativo cuando alguien lo abra meses después.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Usa formato consistente</h3><p className="text-slate-600">Aplica formato de números a todas las celdas de datos (moneda, porcentajes, fechas). Usa colores alternados en filas para legibilidad. Pon en negrita tu fila de totales. Estos detalles se convierten limpiamente a PDF y hacen el reporte más fácil de escanear.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Congela los encabezados de columna</h3><p className="text-slate-600">En Excel, ve a <strong>Diseño de página &gt; Imprimir títulos &gt; Filas a repetir en la parte superior</strong> y seleccióna tu fila de encabezado. Esto imprime los encabezados de columna en la parte superior de cada página del PDF — esencial para reportes de múltiples páginas.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Comprimiendo tu reporte para email</h2>
            <p className="text-slate-600 mb-4">La mayoría de los proveedores de email limitan los adjuntos a 20-25MB. Si tu reporte PDF es más grande (común con gráficos o imágenes), comprimelo antes de enviar:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> — optimizado específicamente para límites de adjuntos de email</li>
              <li>&#10003; La compresión media mantiene gráficos y tablas legibles mientras reduce significativamente el tamaño del archivo</li>
              <li>&#10003; Un reporte típico de 5MB con gráficos se comprime a 1-2MB — bien bajo el límite de email</li>
            </ul>
            <p className="text-slate-600 mt-4">Para reportes muy grandes, considera dividir el PDF en secciones usando <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> y enviar como múltiples adjuntos.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Protegiendo reportes financieros sensibles</h2>
            <p className="text-slate-600 mb-4">Los reportes financieros a menudo contienen datos sensibles — números de ingresos, información salarial, margenes de ganancia. Antes de enviarlos por email, considera agregar protección:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Protección con contraseña</strong> — Usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para agregar una contraseña. Comparte la contraseña por separado (mensaje de texto, llamada telefonica o un email diferente).</li>
              <li>&#10003; <strong>Acceso de solo lectura</strong> — Restringe permisos de edición para que los destinatarios puedan ver pero no modificar el PDF.</li>
              <li>&#10003; <strong>Marca de agua</strong> — Agrega una marca de agua "Confidencial" para marcar el nivel de sensibilidad del documento.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Combinando múltiples reportes en un PDF</h2>
            <p className="text-slate-600">Necesitas enviar un paquete trimestral con tres reportes mensuales? Convierte cada archivo Excel a PDF por separado, luego usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para combinarlos en un solo documento. También puedes agregar una portada o un índice como primera página. Esto crea un paquete profesional y consolidado qué es más fácil de manejar para los destinatarios que múltiples adjuntos.</p>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tu reporte?</h2>
          <p className="text-slate-300 mb-6">Sube tu reporte de Excel y obtiene un PDF profesional en segundos — gratis, sin registro.</p>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir Excel a PDF en línea (XLSX a PDF)", href: "/es/aprender/convertir-excel-a-pdf" },
              { title: "Excel a PDF corta columnas? Asi se solucióna", href: "/es/aprender/excel-a-pdf-columnas-cortadas" },
              { title: "Excel a PDF ajustar a página: mejores configuraciónes", href: "/es/aprender/excel-a-pdf-ajustar-a-pagina" },
              { title: "Convertir Excel a PDF en Mac", href: "/es/aprender/excel-a-pdf-en-mac" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
