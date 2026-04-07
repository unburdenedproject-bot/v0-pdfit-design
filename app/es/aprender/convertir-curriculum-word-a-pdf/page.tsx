import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir curriculum de Word a PDF (consejos para ATS) | PDF.it",
  description:
    "Convierte tu curriculum de Word a PDF manteniendolo compatible con ATS. Aprende que fuentes, disenos y opciones de formato ayudan a que tu curriculum pase los sistemas de seguimiento de candidatos.",
  keywords: "convertir curriculum word a pdf, curriculum docx a pdf, curriculum pdf compatible ats, conversion curriculum pdf, formato curriculum word a pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Debo enviar mi curriculum como documento Word o PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF es la mejor opcion en casi todos los casos. Los PDFs preservan tu formato exactamente, se ven iguales en cualquier dispositivo y previenen ediciones accidentales. La unica excepcion es cuando una oferta de trabajo pide especificamente un archivo .docx; en ese caso, envia Word." }
    },
    {
      "@type": "Question",
      "name": "Pueden los sistemas ATS leer curriculos en PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Los sistemas ATS modernos (Greenhouse, Lever, Workday, Taleo) pueden leer curriculos en PDF tan bien como documentos de Word. La clave es usar un diseno simple de una columna con fuentes estandar y sin cuadros de texto, tablas o graficos que puedan confundir al parser." }
    },
    {
      "@type": "Question",
      "name": "Que fuentes debo usar para un curriculum compatible con ATS?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa fuentes estandar y ampliamente disponibles: Arial, Calibri, Times New Roman, Georgia, Helvetica o Garamond. Estas fuentes son reconocidas por todos los sistemas ATS y se convierten perfectamente a PDF sin problemas de sustitucion." }
    },
    {
      "@type": "Question",
      "name": "Convertir mi curriculum a PDF cambiara el formato?",
      "acceptedAnswer": { "@type": "Answer", "text": "No si sigues las mejores practicas: usa fuentes estandar, evita disenos complejos con cuadros de texto o tablas, y usa un convertidor confiable como PDF.it. El PDF convertido deberia verse identico a tu documento de Word." }
    },
    {
      "@type": "Question",
      "name": "Como reduzco el tamano de mi curriculum en PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "La mayoria de los curriculos basados en texto ya son pequenos (menos de 500KB). Si el tuyo es mas grande, generalmente por una foto o graficos, usa la herramienta Comprimir PDF de PDF.it para reducir el tamano manteniendo el texto nitido y legible." }
    },
    {
      "@type": "Question",
      "name": "Debo proteger con contrasena mi curriculum en PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Los PDFs protegidos con contrasena no pueden ser analizados por los sistemas ATS, lo que significa que tu curriculum no sera buscable por los reclutadores. Solo protege un curriculum si lo envias directamente a una persona especifica y no quieres que se reenvie." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como convertir un curriculum de Word a PDF",
  "description": "Convierte tu curriculum de Word a un PDF compatible con ATS en 3 pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepara tu curriculum en Word",
      "text": "Usa fuentes estandar, un diseno de una columna, encabezados de seccion claros, y evita cuadros de texto, tablas, encabezados/pies de pagina y graficos que los sistemas ATS no pueden analizar."
    },
    {
      "@type": "HowToStep",
      "name": "Convierte a PDF con PDF.it",
      "text": "Sube tu curriculum .docx a la herramienta Word a PDF de PDF.it y haz clic en Convertir. La herramienta preserva el formato, las fuentes y el diseno."
    },
    {
      "@type": "HowToStep",
      "name": "Verifica y prueba",
      "text": "Abre el PDF y confirma que se ve identico a tu documento de Word. Intenta seleccionar y copiar texto del PDF para asegurarte de que no sea una imagen plana; el ATS necesita texto seleccionable."
    }
  ]
}

export default function ConvertirCurriculumWordAPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word a PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir curriculum de Word a PDF (consejos para ATS)</h1>
              <p className="text-xl text-slate-300">
                Tu curriculum necesita verse excelente para los humanos Y ser legible por los sistemas de seguimiento de candidatos. Asi es como convertirlo de Word a PDF de la manera correcta.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para convertir tu curriculum? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/word-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Word a PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por que tu curriculum deberia ser un PDF</h2>
              <p className="text-slate-600 mb-4">
                Pasaste horas perfeccionando el diseno de tu curriculum en Word. Pero cuando un reclutador abre tu archivo .docx en una computadora diferente, las cosas pueden verse completamente distintas: las fuentes cambian, el espaciado se desplaza y tu diseno cuidadosamente elaborado se desmorona.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Consistencia de formato.</strong> Un PDF se ve exactamente igual en cualquier dispositivo, sistema operativo y tamano de pantalla. Tu curriculum se vera igual en la PC Windows del reclutador que en tu Mac.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Sin ediciones accidentales.</strong> Los documentos de Word pueden modificarse accidentalmente. Un PDF evita que alguien cambie tu contenido, fechas o informacion de contacto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Impresion profesional.</strong> Enviar un archivo .docx senala "trabajo en progreso". Un PDF senala "documento final y pulido". Pequeno detalle, gran impacto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Compatible con ATS.</strong> Los sistemas modernos de seguimiento de candidatos analizan PDFs igual de bien que archivos de Word, siempre que sigas unas pocas reglas simples (cubiertas a continuacion).</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que es un ATS (y por que importa)</h2>
              <p className="text-slate-600 mb-4">
                Un <strong>Sistema de Seguimiento de Candidatos (ATS)</strong> es un software que las empresas usan para gestionar solicitudes de empleo. Cuando envias tu curriculum en linea, pasa por el ATS antes de que cualquier humano lo vea. El ATS analiza tu curriculum, extrae informacion clave (nombre, informacion de contacto, experiencia laboral, habilidades) y la almacena en una base de datos con capacidad de busqueda.
              </p>
              <p className="text-slate-600 mb-4">
                Si tu curriculum usa formato complejo que el ATS no puede analizar, tu informacion se distorsiona o se pierde. Esto significa que un reclutador que busque "gestion de proyectos" no encontrara tu curriculum, incluso si tienes 10 anos de experiencia en gestion de proyectos, porque el ATS no pudo leerlo.
              </p>
              <p className="text-slate-600">
                La buena noticia: hacer que tu curriculum sea compatible con ATS es sencillo. Se trata principalmente de <strong>que evitar</strong>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Reglas de formato de curriculum compatible con ATS</h2>
              <p className="text-slate-600 mb-4">
                Sigue estas reglas en tu documento de Word <strong>antes</strong> de convertir a PDF:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Usa un diseno de una sola columna.</strong> Los disenos de multiples columnas, barras laterales y plantillas creativas pueden verse genial, pero los sistemas ATS leen de izquierda a derecha, de arriba a abajo. Dos columnas pueden hacer que el parser mezcle contenido de diferentes secciones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Usa fuentes estandar.</strong> Arial, Calibri, Times New Roman, Georgia o Garamond. Se convierten perfectamente a PDF y son reconocidas por todos los sistemas ATS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Evita cuadros de texto.</strong> El texto dentro de cuadros de texto a menudo es invisible para los parsers ATS. Usa parrafos normales con encabezados en negrita.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Evita tablas para diseno.</strong> Usar tablas para crear un aspecto de multiples columnas confunde a los sistemas ATS. Usa listas simples y parrafos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Usa encabezados de seccion estandar.</strong> "Experiencia Laboral", "Educacion", "Habilidades", "Certificaciones": los sistemas ATS buscan estas palabras clave exactas para categorizar tu informacion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">6.</span>
                  <span><strong>Sin imagenes ni graficos.</strong> Logos, iconos, fotos y graficos decorativos no pueden ser leidos por ATS. Tambien aumentan innecesariamente el tamano del archivo.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir tu curriculum (paso a paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Prepara tu curriculum en Word", desc: "Revisa tu curriculum contra las reglas ATS anteriores. Usa fuentes estandar, un diseno de una columna, y evita cuadros de texto, tablas y graficos. Asegurate de que todo el texto este en parrafos normales, no en encabezados/pies de pagina." },
                  { title: "Convierte con PDF.it", desc: "Ve a la herramienta Word a PDF y sube tu archivo .docx. PDF.it lo convierte en segundos, preservando tu formato, fuentes y diseno exactamente como fue disenado." },
                  { title: "Prueba el resultado", desc: "Abre el PDF e intenta seleccionar texto con tu cursor. Si puedes resaltar y copiar texto, el PDF es legible por ATS. Si el texto no se puede seleccionar, fue convertido como una imagen (que ATS no puede leer)." },
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Errores de curriculum en PDF que debes evitar</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>No protejas con contrasena tu curriculum PDF.</strong> Los sistemas ATS no pueden abrir archivos protegidos con contrasena. Tu curriculum sera rechazado antes de que alguien lo vea.</li>
                <li>&#10003; <strong>No acoplar tu curriculum PDF.</strong> El acoplamiento convierte el texto en imagenes, haciendolo ilegible para ATS. Solo acopia si envias directamente a una persona (no a traves de un ATS).</li>
                <li>&#10003; <strong>No escanees un curriculum impreso.</strong> Los PDFs escaneados son imagenes, no texto. ATS no puede leerlos. Siempre convierte desde el archivo digital de Word.</li>
                <li>&#10003; <strong>No comprimas en exceso.</strong> Si usas <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamano del archivo, usa compresion Ligera para mantener el texto nitido y seleccionable.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Mantener tu curriculum PDF pequeno</h2>
              <p className="text-slate-600 mb-4">
                La mayoria de los curriculos basados en texto pesan menos de 200KB como PDF, bien dentro de cualquier limite de carga. Si tu curriculum pesa mas de 1MB, generalmente es por:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Una foto de perfil (eliminala: la mayoria de los sistemas ATS no la muestran de todos modos)</li>
                <li>&#10003; Logos o graficos de alta resolucion (eliminalos para envios a ATS)</li>
                <li>&#10003; Fuentes personalizadas incrustadas (cambia a fuentes estandar para reducir el tamano)</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Si aun necesitas reducir el tamano del archivo, usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> con compresion Ligera para minimizar el tamano sin afectar la calidad del texto.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando enviar Word en lugar de PDF</h2>
              <p className="text-slate-600 mb-4">
                En casos raros, debes enviar el archivo .docx en su lugar:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>La oferta de trabajo dice explicitamente "enviar en formato Word".</strong> Algunos sistemas ATS mas antiguos o empresas especificas prefieren .docx. Sigue sus instrucciones.</li>
                <li>&#10003; <strong>Un reclutador pide una version en Word.</strong> Los reclutadores a veces quieren hacer cambios menores de formato antes de enviarlo a un cliente. Esto es comun en agencias de empleo.</li>
              </ul>
              <p className="text-slate-600 mt-4">En todos los demas casos, PDF es la opcion mas segura y profesional.</p>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convierte tu curriculum a PDF</h2>
            <p className="text-slate-300 mb-6">Sube tu curriculum de Word y obtiene un PDF compatible con ATS en segundos, gratis y sin registro.</p>
            <Link href="/es/word-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <FileText className="h-5 w-5" /> Word a PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "DOCX a PDF sin problemas de formato", href: "/es/aprender/docx-a-pdf-mantener-formato" },
                { title: "Word a PDF: errores comunes de formato y como solucionarlos", href: "/es/aprender/word-a-pdf-errores-comunes-de-formato" },
                { title: "Convertir DOCX, XLSX y PPTX a PDF: todos los formatos", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
                { title: "Office a PDF: como mantener el formato", href: "/es/aprender/office-a-pdf-mantener-formato" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Debo enviar mi curriculum como documento Word o PDF?", a: "PDF es la mejor opcion en casi todos los casos. Los PDFs preservan tu formato exactamente, se ven iguales en cualquier dispositivo y previenen ediciones accidentales. La unica excepcion es cuando una oferta de trabajo pide especificamente un archivo .docx." },
                { q: "Pueden los sistemas ATS leer curriculos en PDF?", a: "Si. Los sistemas ATS modernos (Greenhouse, Lever, Workday, Taleo) pueden leer curriculos en PDF igual de bien que documentos de Word. La clave es usar un diseno simple de una columna con fuentes estandar." },
                { q: "Que fuentes debo usar para un curriculum compatible con ATS?", a: "Usa fuentes estandar y ampliamente disponibles: Arial, Calibri, Times New Roman, Georgia, Helvetica o Garamond. Son reconocidas por todos los sistemas ATS y se convierten perfectamente a PDF." },
                { q: "Convertir mi curriculum a PDF cambiara el formato?", a: "No si sigues las mejores practicas: usa fuentes estandar, evita disenos complejos con cuadros de texto o tablas, y usa un convertidor confiable como PDF.it. El PDF convertido deberia verse identico a tu documento de Word." },
                { q: "Como reduzco el tamano de mi curriculum en PDF?", a: "La mayoria de los curriculos basados en texto ya son pequenos (menos de 500KB). Si el tuyo es mas grande, generalmente por una foto o graficos, usa la herramienta Comprimir PDF de PDF.it para reducir el tamano." },
                { q: "Debo proteger con contrasena mi curriculum en PDF?", a: "No. Los PDFs protegidos con contrasena no pueden ser analizados por los sistemas ATS, lo que significa que tu curriculum no sera buscable por los reclutadores." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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
