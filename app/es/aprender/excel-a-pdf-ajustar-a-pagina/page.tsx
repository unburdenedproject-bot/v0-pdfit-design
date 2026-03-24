import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Excel a PDF ajustar a pagina: mejores configuraciones de impresion | PDF.it",
  description: "Aprende las mejores configuraciones de impresion de Excel para ajustar tu hoja de calculo en una pagina antes de convertir a PDF. Cubre escalado, margenes, orientacion, area de impresion y vista previa.",
  keywords: "excel a pdf ajustar a pagina, excel ajustar a pagina, configuraciones impresion excel pdf, escalar excel ajustar pagina, diseno pagina excel pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como ajusto una hoja de calculo Excel a una pagina para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Ve a Diseno de pagina > Ajustar a. Establece Ancho en 1 pagina y Alto en 1 pagina. Esto escala toda tu hoja de calculo para que quepa en una sola pagina. Si el texto queda muy pequeno, establece solo Ancho en 1 pagina y deja Alto en Automatico." } },
  { "@type": "Question", "name": "Cual es la diferencia entre 'Ajustar hoja en una pagina' y 'Ajustar todas las columnas en una pagina'?", "acceptedAnswer": { "@type": "Answer", "text": "Ajustar hoja en una pagina reduce todo (ancho y alto) para que quepa en una sola pagina — ideal para conjuntos de datos pequenos. Ajustar todas las columnas en una pagina solo restringe el ancho, dejando que las filas fluyan a paginas adicionales — mejor para hojas de calculo largas." } },
  { "@type": "Question", "name": "Debo usar horizontal o vertical para Excel a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Usa horizontal para hojas de calculo con muchas columnas (mas de 8 columnas). Usa vertical para hojas con muchas filas pero pocas columnas. Revisa la Vista previa de impresion para ver cual se ve mejor antes de convertir." } },
  { "@type": "Question", "name": "Que margenes debo usar para la conversion de Excel a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Margenes estrechos (0.25 pulgadas) dan mas espacio para los datos. Para hojas muy anchas, usa Margenes personalizados y establece todos los lados en 0.2 pulgadas. Los margenes predeterminados (0.7 pulgadas) desperdician demasiado espacio para la mayoria de las hojas." } },
  { "@type": "Question", "name": "Como verifico si mi Excel cabe en la pagina antes de convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Usa Vista previa de impresion (Ctrl+P en Windows, Cmd+P en Mac) o cambia a vista Diseno de pagina (Vista &gt; Diseno de pagina). Ambas muestran exactamente como se vera tu hoja al imprimirse o convertirse a PDF, incluyendo saltos de pagina." } },
  { "@type": "Question", "name": "Por que mi Excel se reduce a texto diminuto cuando uso Ajustar a pagina?", "acceptedAnswer": { "@type": "Answer", "text": "Ajustar a pagina escala todo proporcionalmente. Si tu hoja tiene demasiadas columnas o filas, el texto queda muy pequeno. Solucionalo ajustando solo columnas a una pagina (no filas), reduciendo el numero de columnas o dividiendo la hoja en secciones." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como configurar las opciones de impresion de Excel para conversion a PDF", "description": "Configura tu hoja de calculo Excel para que se ajuste perfectamente a una pagina antes de convertir a PDF.", "step": [
  { "@type": "HowToStep", "name": "Establece area de impresion y orientacion", "text": "Selecciona tu rango de datos, ve a Diseno de pagina > Area de impresion > Establecer area de impresion. Luego elige Horizontal o Vertical en Diseno de pagina > Orientacion segun la forma de tus datos." },
  { "@type": "HowToStep", "name": "Configura escalado y margenes", "text": "Ve a Diseno de pagina > Ajustar a y establece Ancho en 1 pagina. Establece margenes en Estrecho (Diseno de pagina &gt; Margenes &gt; Estrecho). Verifica en Vista previa de impresion que el texto siga siendo legible." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Sube tu archivo Excel preparado a la herramienta Excel a PDF de PDF.it. El convertidor respeta tus configuraciones de impresion, produciendo un PDF limpio y correctamente ajustado." }
] }

export default function ExcelAPdfAjustarAPaginaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Excel a PDF ajustar a pagina: mejores configuraciones de impresion</h1>
          <p className="text-xl text-slate-300">Lograr que tu hoja de calculo de Excel se ajuste perfectamente en una pagina PDF depende de las configuraciones de impresion. Aqui tienes un recorrido completo de la pestana Diseno de pagina, opciones de escalado y ajustes de margenes que hacen la diferencia.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Configuraciones listas? Convierte tu hoja de calculo ahora.</p></div>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que importan las configuraciones de impresion para la conversion a PDF</h2>
            <p className="text-slate-600 mb-4">Cuando conviertes un archivo Excel a PDF — ya sea a traves de la exportacion integrada de Excel o una herramienta en linea como <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">PDF.it</Link> — el convertidor usa tus configuraciones de impresion para determinar como los datos se distribuyen en las paginas.</p>
            <p className="text-slate-600 mb-4">Si no has configurado estos ajustes, Excel usa valores predeterminados: orientacion vertical, margenes estandar, sin escalado. Para cualquier cosa mas alla de una tabla simple de 5 columnas, estos valores predeterminados producen PDFs con columnas cortadas, saltos de pagina incomodos o espacio en blanco desperdiciado.</p>
            <p className="text-slate-600">Tomar 60 segundos para ajustar tus configuraciones de Diseno de pagina antes de convertir te ahorra de rehacer la conversion multiples veces.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Recorrido de la pestana Diseno de pagina</h2>
            <div className="space-y-4">
              {[
                { title: "Paso 1: Establece tu area de impresion", desc: "Selecciona todas las celdas que deben aparecer en el PDF. Ve a Diseno de pagina > Area de impresion > Establecer area de impresion. Esta es la base — omite esto y el convertidor tiene que adivinar que celdas importan." },
                { title: "Paso 2: Elige la orientacion", desc: "Diseno de pagina > Orientacion. Usa Horizontal para hojas de calculo mas anchas que 8 columnas. Usa Vertical para conjuntos de datos estrechos y altos (2-5 columnas con muchas filas). En caso de duda, prueba horizontal primero." },
                { title: "Paso 3: Configura el escalado", desc: "Diseno de pagina > Ajustar a. Establece Ancho en '1 pagina' para asegurar que todas las columnas quepan. Deja Alto en 'Automatico' para que las filas fluyan naturalmente a paginas adicionales. Evita establecer tanto Ancho como Alto en 1 pagina a menos que tus datos sean pequenos." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo las opciones de escalado de Excel</h2>
            <p className="text-slate-600 mb-4">Excel ofrece tres enfoques de escalado en el dialogo de impresion. Esto es lo que hace cada uno y cuando usarlo:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Opcion</th>
                  <th className="text-left py-3 px-4 font-bold">Que hace</th>
                  <th className="text-left py-3 px-4 font-bold">Mejor para</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">Ajustar hoja en una pagina</td><td className="py-3 px-4">Reduce toda la hoja (ancho + alto) a una pagina</td><td className="py-3 px-4">Tablas pequenas de menos de 30 filas</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">Ajustar todas las columnas en una pagina</td><td className="py-3 px-4">Restringe el ancho a una pagina, las filas fluyen libremente</td><td className="py-3 px-4">La mayoria de hojas (recomendado)</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">Ajustar todas las filas en una pagina</td><td className="py-3 px-4">Restringe la altura a una pagina, las columnas fluyen libremente</td><td className="py-3 px-4">Raramente util — solo para datos estrechos y altos</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 mt-4">Para la mayoria de usuarios, <strong>"Ajustar todas las columnas en una pagina"</strong> es la opcion correcta. Mantiene el texto legible mientras asegura que no se corten columnas.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Configuraciones de margenes que te dan mas espacio</h2>
            <p className="text-slate-600 mb-4">Los margenes predeterminados (0.7" en cada lado) desperdician espacio valioso en la pagina. Para hojas con muchos datos, margenes mas estrechos hacen una gran diferencia:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Preajuste Estrecho</strong> (Diseno de pagina &gt; Margenes &gt; Estrecho) — establece margenes de 0.25" en todos los lados. Suficiente para la mayoria de los casos.</li>
              <li>&#10003; <strong>Margenes personalizados</strong> (Diseno de pagina &gt; Margenes &gt; Margenes personalizados) — establece 0.2" en todos los lados para maximo espacio de datos. Asegurate de tambien establecer los margenes de encabezado/pie de pagina en 0.15".</li>
              <li>&#10003; <strong>Centrar en pagina</strong> — en el dialogo de Margenes personalizados, marca "Horizontalmente" en Centrar en pagina. Esto evita que los datos se peguen al borde izquierdo.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Horizontal vs. Vertical: cuando usar cada uno</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Usa Horizontal cuando:</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>&#8226; Tu hoja de calculo tiene mas de 8 columnas</li>
                  <li>&#8226; Tienes columnas anchas (descripciones, direcciones, texto largo)</li>
                  <li>&#8226; Los datos son mas anchos que altos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Usa Vertical cuando:</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>&#8226; Tu hoja de calculo tiene 2-6 columnas estrechas</li>
                  <li>&#8226; Los datos son una lista larga (muchas filas, pocas columnas)</li>
                  <li>&#8226; Estas imprimiendo un reporte o registro de una sola columna</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-600 mt-4">No estas seguro? Prueba ambas en Vista previa de impresion y ve cual produce un resultado mas limpio. Siempre puedes verificar antes de convertir con <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">PDF.it</Link>.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Siempre revisa la Vista previa de impresion antes de convertir</h2>
            <p className="text-slate-600 mb-4">La Vista previa de impresion es el punto de verificacion final. Te muestra <em>exactamente</em> como se vera el PDF — saltos de pagina, margenes, escalado y todo.</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Windows:</strong> Presiona Ctrl+P para abrir Vista previa de impresion</li>
              <li>&#10003; <strong>Mac:</strong> Presiona Cmd+P para abrir Vista previa de impresion</li>
              <li>&#10003; <strong>Alternativa:</strong> Ve a Vista &gt; Diseno de pagina para una vista previa dentro de la hoja</li>
            </ul>
            <p className="text-slate-600 mt-4">Busca: todas las columnas visibles, texto legible (no diminuto), sin datos cortados en los bordes y saltos de pagina logicos. Si algo se ve mal, ajusta tus configuraciones y verifica de nuevo antes de subir al convertidor.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Despues de convertir: comprime si es necesario</h2>
            <p className="text-slate-600">Hojas de calculo grandes con graficos, imagenes o muchas paginas pueden producir PDFs grandes. Si necesitas enviar el archivo por email o subirlo a un portal con limites de tamano, usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> despues de convertir.</p>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tu hoja de calculo?</h2>
          <p className="text-slate-300 mb-6">Tus configuraciones de impresion estan listas. Sube y convierte — gratis, sin registro.</p>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir Excel a PDF en linea (XLSX a PDF)", href: "/es/aprender/convertir-excel-a-pdf" },
              { title: "Excel a PDF corta columnas? Asi se soluciona", href: "/es/aprender/excel-a-pdf-columnas-cortadas" },
              { title: "Exportar reportes mensuales: Excel a PDF para email", href: "/es/aprender/reporte-excel-a-pdf" },
              { title: "Convertir Excel a PDF en Mac", href: "/es/aprender/excel-a-pdf-en-mac" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
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
