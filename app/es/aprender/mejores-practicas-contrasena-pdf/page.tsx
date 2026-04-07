import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Mejores Practicas de Contrasena para PDF (Contrasenas Fuertes y Permisos) | PDF.it",
  description: "Aprende como elegir contrasenas fuertes para tus PDFs, establecer los permisos correctos y evitar errores comunes de seguridad. Una guia completa de seguridad de contrasenas para PDF.",
  keywords: "mejores practicas contrasena pdf, contrasena fuerte pdf, permisos pdf, configuracion seguridad pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Que hace una contrasena de PDF fuerte?", "acceptedAnswer": { "@type": "Answer", "text": "Una contrasena de PDF fuerte tiene al menos 12 caracteres, combina letras mayusculas y minusculas, numeros y caracteres especiales, y evita palabras del diccionario o informacion personal como cumpleanos." } },
  { "@type": "Question", "name": "Debo usar la misma contrasena para todos mis PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "No. Usar la misma contrasena para cada PDF significa que si una contrasena es comprometida, todos tus documentos quedan expuestos. Usa una contrasena unica para cada documento sensible y guardalas en un gestor de contrasenas." } },
  { "@type": "Question", "name": "Que permisos de PDF puedo restringir?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes restringir la impresion, copia de texto, edicion de contenido, extraccion de paginas, agregar anotaciones y rellenar formularios. PDF.it te permite establecer todos estos permisos cuando proteges un PDF." } },
  { "@type": "Question", "name": "La encriptacion de 128 bits es suficiente para la seguridad del PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si, la encriptacion AES de 128 bits es suficientemente fuerte para la mayoria de documentos de negocio y personales. Para archivos altamente confidenciales como contratos legales o registros medicos, AES de 256 bits proporciona una capa extra de seguridad." } },
  { "@type": "Question", "name": "Alguien puede eludir los permisos del PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las contrasenas de permisos son menos seguras que las contrasenas de apertura — algunas herramientas pueden eludirlas. Para maxima seguridad, siempre establece una contrasena de apertura ademas de las restricciones de permisos." } },
  { "@type": "Question", "name": "Como debo compartir la contrasena con el destinatario?", "acceptedAnswer": { "@type": "Answer", "text": "Nunca envies la contrasena en el mismo correo que el PDF. Comparte la contrasena por un canal diferente — un mensaje de texto, llamada o app de mensajeria segura. Asi, incluso si el correo es interceptado, el archivo permanece bloqueado." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Establecer Contrasenas y Permisos Fuertes para PDF", "description": "Asegura tus PDFs con contrasenas fuertes y la configuracion de permisos correcta en 3 pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Elige una contrasena fuerte", "text": "Crea una contrasena de al menos 12 caracteres con una mezcla de mayusculas, minusculas, numeros y caracteres especiales. Evita palabras del diccionario y detalles personales." },
  { "@type": "HowToStep", "name": "Establece los permisos correctos", "text": "Decide que debe poder hacer el destinatario — solo ver, imprimir o editar. Establece una contrasena de permisos para restringir acciones como copiar, imprimir o modificar el documento." },
  { "@type": "HowToStep", "name": "Aplica la encriptacion y descarga", "text": "Sube tu PDF a la herramienta Proteger PDF de PDF.it, ingresa tu contrasena y permisos, selecciona encriptacion AES de 256 bits y descarga el archivo asegurado." }
] }

export default function MejoresPracticasContrasenaPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Mejores Practicas de Contrasena para PDF (Contrasenas Fuertes y Permisos)</h1>
          <p className="text-xl text-slate-300">Una contrasena debil es casi tan mala como no tener contrasena. Aprende como elegir contrasenas fuertes, establecer los permisos correctos y evitar los errores de seguridad de PDF mas comunes.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Shield className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para asegurar tu PDF? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Tu Contrasena de PDF Importa Mas de Lo Que Piensas</h2>
            <p className="text-slate-600 mb-4">La mayoria de las personas eligen una contrasena en dos segundos — el nombre de su mascota, un cumpleanos o el clasico "1234". El problema es que las herramientas automatizadas pueden adivinar estas contrasenas en minutos. Un PDF con una contrasena debil te da una falsa sensacion de seguridad mientras deja tus datos expuestos.</p>
            <p className="text-slate-600 mb-4">Segun investigaciones de seguridad, las 10 contrasenas mas comunes representan un porcentaje significativo de todas las brechas. Si tu PDF contiene contratos, datos financieros, registros medicos o informacion de empleados, una contrasena debil es un riesgo — no una proteccion.</p>
            <p className="text-slate-600">La buena noticia es que crear una contrasena fuerte para PDF solo toma unos segundos adicionales. Aqui esta todo lo que necesitas saber.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como Crear una Contrasena Fuerte para PDF</h2>
            <div className="space-y-4">
              {[
                { title: "Usa al menos 12 caracteres", desc: "Cada caracter adicional hace tu contrasena exponencialmente mas dificil de descifrar. Una contrasena de 8 caracteres puede ser forzada en horas. Una de 12 caracteres toma anos. Apunta a 12 a 16 caracteres minimo." },
                { title: "Mezcla tipos de caracteres", desc: "Combina letras mayusculas (A-Z), minusculas (a-z), numeros (0-9) y caracteres especiales (!@#$%^&*). Una contrasena como 'Tr4v3l$afe!2024' es mucho mas fuerte que 'travelsafe2024'." },
                { title: "Evita informacion personal", desc: "Nunca uses tu nombre, cumpleanos, nombre de empresa o el tema del documento como contrasena. Los atacantes que te conocen (o pueden encontrar informacion sobre ti en linea) probaran estos primero." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#F0FDFA] border border-[#14D8C4]/20 rounded-xl p-5">
              <p className="text-slate-700 text-sm"><strong>Consejo pro:</strong> Usa una frase de paso en lugar de una sola palabra. Por ejemplo, "CafeAzul$Lluvia42!" es facil de recordar pero extremadamente dificil de descifrar. Mejor aun, usa un gestor de contrasenas para generar y almacenar contrasenas aleatorias.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Establecer los Permisos Correctos de PDF</h2>
            <p className="text-slate-600 mb-4">Mas alla de bloquear un archivo con contrasena, puedes controlar exactamente lo que las personas pueden hacer con tu PDF. La herramienta <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> de PDF.it te permite restringir las siguientes acciones:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Sin impresion.</strong> Evita que el destinatario imprima el documento. Util para borradores de informes, memorandos confidenciales y materiales compartidos solo para revision.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Sin copiar texto.</strong> Bloquea la seleccion de texto y copiar-pegar. Esto protege propiedad intelectual, lenguaje legal y contenido original de ser copiado.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Sin edicion.</strong> Evita modificaciones al contenido del documento. Esencial para contratos finalizados y registros oficiales.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Sin extraccion de paginas.</strong> Evita que los usuarios saquen paginas individuales del documento usando herramientas PDF.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Sin anotaciones.</strong> Evita agregar comentarios, resaltados o notas adhesivas. Usa esto cuando quieras que el documento permanezca limpio y sin modificaciones.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Errores Comunes de Contrasena de PDF a Evitar</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Enviar la Contrasena en el Mismo Correo</h3><p className="text-slate-600">Esto anula completamente el proposito de la encriptacion. Si alguien intercepta tu correo, obtiene tanto el archivo como la contrasena. Siempre comparte la contrasena por un canal separado — mensaje de texto, llamada telefonica o una app de mensajeria segura como Signal.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Reutilizar la Misma Contrasena para Cada PDF</h3><p className="text-slate-600">Si una contrasena es comprometida, cada documento que use esa contrasena queda expuesto. Usa contrasenas unicas para cada documento sensible. Un gestor de contrasenas lo hace facil.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Depender Solo de Permisos Sin Contrasena de Apertura</h3><p className="text-slate-600">Una contrasena de solo permisos puede ser eludida por algunas herramientas PDF. Para documentos realmente sensibles, siempre establece una contrasena de apertura (requerida para ver el archivo) ademas de cualquier restriccion de permisos. Aprende como en nuestra <Link href="/es/aprender/como-proteger-pdf-con-contrasena" className="text-[#14D8C4] hover:underline">guia paso a paso de proteccion</Link>.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Olvidar Aplanar Antes de Proteger</h3><p className="text-slate-600">Los PDFs con campos de formulario, comentarios o capas pueden contener datos ocultos que una contrasena sola no puede proteger. <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplana tu PDF</Link> antes de agregar una contrasena para asegurar que todo el contenido este integrado en las paginas y nada pueda extraerse por separado.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que Nivel de Encriptacion Deberias Usar?</h2>
            <p className="text-slate-600 mb-4">PDF.it ofrece multiples niveles de encriptacion. Aqui tienes una guia practica para elegir el correcto:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>AES de 128 bits:</strong> Rapido, ampliamente compatible, suficientemente fuerte para la mayoria de documentos de negocio. Usa esto para informes internos, correspondencia general y archivos cotidianos.</li>
              <li>&#10003; <strong>AES de 256 bits:</strong> Maxima seguridad. Usa esto para contratos legales, registros financieros, datos medicos, documentos gubernamentales y cualquier cosa con requisitos de cumplimiento normativo.</li>
            </ul>
            <p className="text-slate-600 mt-4">Si no estas seguro, elige AES de 256 bits. La diferencia en tiempo de procesamiento es insignificante y obtienes la proteccion mas fuerte disponible. Despues de proteger tu PDF, tambien puedes <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimirlo</Link> si el archivo es muy grande para enviar por correo.</p>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Asegura Tu PDF con una Contrasena Fuerte</h2>
          <p className="text-slate-300 mb-6">Sube tu archivo, establece una contrasena fuerte y permisos, y descarga el PDF protegido en segundos.</p>
          <Link href="/es/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Shield className="h-5 w-5" /> Proteger PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como Proteger un PDF con Contrasena Online (Paso a Paso)", href: "/es/aprender/como-proteger-pdf-con-contrasena" },
              { title: "Como Proteger un PDF Antes de Enviar por Correo", href: "/es/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Proteger un PDF con Contrasena en Tu Telefono (iPhone y Android)", href: "/es/aprender/proteger-pdf-en-movil" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "Que hace una contrasena de PDF fuerte?", a: "Una contrasena de PDF fuerte tiene al menos 12 caracteres, combina letras mayusculas y minusculas, numeros y caracteres especiales, y evita palabras del diccionario o informacion personal como cumpleanos." },
              { q: "Debo usar la misma contrasena para todos mis PDFs?", a: "No. Usar la misma contrasena para cada PDF significa que si una contrasena es comprometida, todos tus documentos quedan expuestos. Usa una contrasena unica para cada documento sensible y guardalas en un gestor de contrasenas." },
              { q: "Que permisos de PDF puedo restringir?", a: "Puedes restringir la impresion, copia de texto, edicion de contenido, extraccion de paginas, agregar anotaciones y rellenar formularios. PDF.it te permite establecer todos estos permisos cuando proteges un PDF." },
              { q: "La encriptacion de 128 bits es suficiente para la seguridad del PDF?", a: "Si, la encriptacion AES de 128 bits es suficientemente fuerte para la mayoria de documentos de negocio y personales. Para archivos altamente confidenciales como contratos legales o registros medicos, AES de 256 bits proporciona una capa extra de seguridad." },
              { q: "Alguien puede eludir los permisos del PDF?", a: "Las contrasenas de permisos son menos seguras que las contrasenas de apertura — algunas herramientas pueden eludirlas. Para maxima seguridad, siempre establece una contrasena de apertura ademas de las restricciones de permisos." },
              { q: "Como debo compartir la contrasena con el destinatario?", a: "Nunca envies la contrasena en el mismo correo que el PDF. Comparte la contrasena por un canal diferente — un mensaje de texto, llamada o app de mensajeria segura. Asi, incluso si el correo es interceptado, el archivo permanece bloqueado." },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
