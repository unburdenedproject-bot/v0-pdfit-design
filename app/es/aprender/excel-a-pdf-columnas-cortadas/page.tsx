import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Excel a PDF corta columnas? Asi se soluciona | OmnisPDF",
  description: "Soluciona columnas cortadas al convertir Excel a PDF. Aprende 5 soluciones probadas: ajustar area de impresion, usar modo horizontal, escalar a ajustar, reducir margenes y dividir hojas anchas.",
  keywords: "excel a pdf columnas cortadas, excel a pdf columnas faltantes, excel pdf problemas de formato, arreglar excel a pdf diseno",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que mi Excel a PDF corta columnas del lado derecho?", "acceptedAnswer": { "@type": "Answer", "text": "Excel usa por defecto orientacion vertical con margenes estandar, que solo cabe unas 8-10 columnas. Si tu hoja de calculo es mas ancha, las columnas extra se desbordan a una segunda pagina o se cortan. Cambiar a modo horizontal o ajustar el area de impresion lo soluciona." } },
  { "@type": "Question", "name": "Como establezco el area de impresion en Excel para evitar columnas cortadas?", "acceptedAnswer": { "@type": "Answer", "text": "Selecciona todas las celdas que quieres en tu PDF, luego ve a Diseno de pagina > Area de impresion > Establecer area de impresion. Esto le dice a Excel (y cualquier convertidor) exactamente que columnas y filas incluir." } },
  { "@type": "Question", "name": "El modo horizontal soluciona columnas cortadas en Excel a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Frecuentemente si. Horizontal te da aproximadamente 40% mas espacio horizontal. Ve a Diseno de pagina > Orientacion > Horizontal. Esto solo soluciona el problema para la mayoria de hojas de calculo con 10-15 columnas." } },
  { "@type": "Question", "name": "Que hace 'Ajustar todas las columnas en una pagina' en Excel?", "acceptedAnswer": { "@type": "Answer", "text": "Escala el ancho completo de tu hoja de calculo para que quepa en una sola pagina. Ve a Diseno de pagina > Ajustar a > Ancho: 1 pagina. Excel encoge todas las columnas proporcionalmente. Si el texto queda muy pequeno para leer, necesitaras dividir la hoja." } },
  { "@type": "Question", "name": "Puedo dividir una hoja Excel ancha en multiples PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Convierte tu archivo Excel a PDF usando OmnisPDF, luego usa la herramienta Dividir PDF para separar paginas. Alternativamente, en Excel, divide manualmente tus datos en dos hojas (columnas A-J en Hoja 1, columnas K-T en Hoja 2) antes de convertir." } },
  { "@type": "Question", "name": "Por que mis columnas se ven bien en Excel pero se cortan en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "La vista normal de Excel no muestra los limites de pagina. Cambia a vista Diseno de pagina (Vista > Diseno de pagina) o usa Vista previa de impresion (Ctrl+P) para ver exactamente donde caen los saltos de pagina." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como solucionar columnas cortadas al convertir Excel a PDF", "description": "Previene que las columnas se corten al convertir hojas de calculo Excel a PDF.", "step": [
  { "@type": "HowToStep", "name": "Establece area de impresion y cambia a horizontal", "text": "En Excel, selecciona todas las celdas que necesitas, ve a Diseno de pagina > Area de impresion > Establecer area de impresion. Luego cambia a orientacion Horizontal." },
  { "@type": "HowToStep", "name": "Escala para ajustar a un ancho de pagina", "text": "Ve a Diseno de pagina > Ajustar a y establece Ancho en 1 pagina. Esto encoge todas las columnas para que quepan en un ancho de pagina mientras las filas fluyen a paginas adicionales." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Sube tu archivo Excel preparado a la herramienta Excel a PDF de OmnisPDF y convierte. Todas las columnas ahora apareceran correctamente en el PDF." }
] }

export default function ExcelAPdfColumnasCortadasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Excel a PDF corta columnas? Asi se soluciona</h1>
          <p className="text-xl text-slate-300">Convertiste tu hoja de calculo a PDF y la mitad de las columnas faltan. Este es uno de los problemas mas comunes de Excel a PDF, y es facil de solucionar una vez que sabes donde buscar.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Solucionaste tu diseno? Convierte tu hoja de calculo ahora.</p></div>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que las columnas se cortan en primer lugar</h2>
            <p className="text-slate-600 mb-4">Cuando Excel convierte una hoja de calculo a PDF, trata cada pagina como una hoja de papel. Si tus datos son mas anchos que la pagina, las columnas extra se empujan a una nueva pagina o se eliminan silenciosamente.</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>El ancho de pagina es muy estrecho.</strong> Modo vertical en papel tamano carta solo cabe unas 8-10 columnas estandar. Si tienes 15 o 20 columnas, el resto se desborda.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>No se ha establecido area de impresion.</strong> Sin un area de impresion definida, Excel adivina que celdas incluir. A menudo incluye columnas vacias o pierde las columnas que necesitas.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Los margenes ocultos consumen espacio.</strong> Los margenes predeterminados en Excel (0.7" en cada lado) roban 1.4 pulgadas de ancho utilizable. Eso es suficiente para perder 2-3 columnas.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Los anchos de columna son desiguales.</strong> Una columna extra ancha (como "Notas" o "Descripcion") puede empujar todo lo demas fuera de la pagina.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">5 soluciones para columnas cortadas</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Solucion 1: Establece tu area de impresion</h3>
                <p className="text-slate-600 mb-2">Este es el paso mas importante y soluciona el problema en la mayoria de los casos.</p>
                <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                  <li>Selecciona todas las celdas que quieres en tu PDF (haz clic y arrastra desde la primera celda hasta la ultima)</li>
                  <li>Ve a <strong>Diseno de pagina &gt; Area de impresion &gt; Establecer area de impresion</strong></li>
                  <li>Verifica con <strong>Vista previa de impresion (Ctrl+P)</strong> que todas las columnas aparezcan</li>
                </ol>
                <p className="text-slate-600 mt-2">Una vez establecida el area de impresion, convierte usando la <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">herramienta Excel a PDF de OmnisPDF</Link>.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Solucion 2: Cambia a modo horizontal</h3>
                <p className="text-slate-600 mb-2">La orientacion horizontal te da aproximadamente 40% mas espacio horizontal, a menudo suficiente para que quepan esas columnas extra.</p>
                <p className="text-slate-700">Ve a <strong>Diseno de pagina &gt; Orientacion &gt; Horizontal</strong>. Para la mayoria de hojas de calculo con 10-15 columnas, esto solo resuelve el problema.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Solucion 3: Escala para ajustar a un ancho de pagina</h3>
                <p className="text-slate-600 mb-2">Esta es la funcion de escalado integrada de Excel que encoge todo proporcionalmente para que quepa en un ancho de pagina.</p>
                <p className="text-slate-700 mb-2">Ve a <strong>Diseno de pagina &gt; Ajustar a &gt; Ancho: 1 pagina</strong>. Deja Alto en "Automatico" para que las filas fluyan a multiples paginas.</p>
                <p className="text-slate-600"><strong>Advertencia:</strong> Si tienes mas de 30 columnas, el texto podria quedar muy pequeno para leer. En ese caso, usa la Solucion 5. Lee mas sobre escalado optimo en nuestra <Link href="/es/aprender/excel-a-pdf-ajustar-a-pagina" className="text-orange-600 hover:underline">guia de ajustar a pagina</Link>.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Solucion 4: Reduce los margenes</h3>
                <p className="text-slate-600 mb-2">Los margenes predeterminados son generosos. Reducirlos puede darte espacio suficiente para 2-3 columnas extra.</p>
                <p className="text-slate-700">Ve a <strong>Diseno de pagina &gt; Margenes &gt; Estrecho</strong> (establece margenes de 0.25"). Para maximo espacio, elige <strong>Margenes personalizados</strong> y establece todos los margenes en 0.2".</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Solucion 5: Divide hojas anchas en secciones</h3>
                <p className="text-slate-600 mb-2">Si tu hoja de calculo es genuinamente ancha (mas de 20 columnas), a veces el mejor enfoque es dividirla en dos secciones logicas.</p>
                <p className="text-slate-700 mb-2">Copia columnas A-J a una hoja y columnas K-T a otra. Convierte todo el libro: cada hoja se convierte en una pagina separada en el PDF.</p>
                <p className="text-slate-600">Despues de convertir, si necesitas reorganizar las paginas, usa <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para separar o reordenarlas.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Lista de verificacion previa a la conversion</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Area de impresion establecida</strong> para incluir todas las columnas y filas necesarias</li>
              <li>&#10003; <strong>Orientacion correcta</strong>: horizontal para hojas anchas, vertical para hojas altas</li>
              <li>&#10003; <strong>Sin celdas "###"</strong>: todas las columnas son lo suficientemente anchas para mostrar sus datos</li>
              <li>&#10003; <strong>Vista previa de impresion confirma</strong> que todas las columnas son visibles (Ctrl+P o Cmd+P)</li>
              <li>&#10003; <strong>Escala legible</strong>: el texto no se ha reducido por debajo de fuente de 8pt</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Sigues teniendo problemas?</h2>
            <p className="text-slate-600 mb-4">Si las columnas siguen cortandose despues de probar estas soluciones, el problema podria ser con la herramienta de conversion que estas usando.</p>
            <p className="text-slate-600">Intenta convertir con la <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">herramienta Excel a PDF de OmnisPDF</Link>: usa renderizado del lado del servidor que coincide de cerca con la salida propia de Excel. Tambien puedes probar nuestro <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">convertidor Office a PDF</Link> general.</p>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir sin columnas cortadas?</h2>
          <p className="text-slate-300 mb-6">Establece tu area de impresion, cambia a horizontal y convierte con OmnisPDF: todas las columnas incluidas.</p>
          <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir Excel a PDF en linea (XLSX a PDF)", href: "/es/aprender/convertir-excel-a-pdf" },
              { title: "Excel a PDF ajustar a pagina: mejores configuraciones", href: "/es/aprender/excel-a-pdf-ajustar-a-pagina" },
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
