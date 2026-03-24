import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Rotar un PDF Online (90°, 180° o Personalizado) | PDF.it",
  description:
    "Aprende como rotar paginas de PDF en linea — rota paginas individuales, todas las paginas o angulos especificos como 90° y 180°. Gratis, sin software.",
  keywords: "rotar pdf online, rotar paginas pdf, girar pdf, rotar pdf 90 grados",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como puedo rotar un PDF en linea gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Rotar PDF de PDF.it, selecciona las paginas que quieres rotar, elige el angulo de rotacion (90°, 180° o 270°), haz clic en Rotar y descarga el archivo corregido. No se requiere registro para tus primeros 3 archivos." }
    },
    {
      "@type": "Question",
      "name": "Puedo rotar solo una pagina de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it te permite seleccionar paginas individuales para rotar mientras deja el resto del documento sin cambios. Esto es perfecto para corregir una sola pagina horizontal en un documento vertical." }
    },
    {
      "@type": "Question",
      "name": "Que angulos de rotacion estan disponibles?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it soporta rotacion de 90° en sentido horario, 90° en sentido antihorario (270°) y 180°. Puedes aplicar diferentes rotaciones a diferentes paginas en el mismo documento." }
    },
    {
      "@type": "Question",
      "name": "Rotar un PDF afectara la calidad del texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotar un PDF solo cambia los metadatos de orientacion de la pagina — no re-renderiza ni comprime el contenido. Tu texto, imagenes y formato permanecen exactamente iguales." }
    },
    {
      "@type": "Question",
      "name": "Puedo rotar un PDF protegido con contrasena?",
      "acceptedAnswer": { "@type": "Answer", "text": "Primero necesitas desbloquear el PDF. Usa la herramienta Desbloquear PDF de PDF.it para quitar la contrasena, luego rota las paginas. Puedes volver a agregar proteccion con contrasena despues usando la herramienta Proteger PDF." }
    },
    {
      "@type": "Question",
      "name": "Puedo rotar un PDF en mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador movil — Safari, Chrome o Firefox. Sube tu PDF, rota las paginas y descarga el archivo corregido directamente en tu telefono. No necesitas instalar ninguna app." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Rotar un PDF Online",
  "description": "Corrige la orientacion de las paginas de un PDF en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta Rotar PDF de PDF.it y sube el archivo que quieres corregir haciendo clic o arrastrandolo al area de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona paginas y angulo de rotacion",
      "text": "Elige que paginas rotar y selecciona el angulo — 90° en sentido horario, 90° en sentido antihorario o 180°. Puedes rotar todas las paginas a la vez o elegir algunas especificas."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF rotado",
      "text": "Haz clic en Rotar y descarga tu PDF corregido. El archivo mantiene su calidad original con las paginas ahora orientadas correctamente."
    }
  ]
}

export default function ComoRotarPDFPage() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Rotar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Rotar un PDF Online (90°, 180° o Personalizado)</h1>
              <p className="text-xl text-slate-300">
                Tienes un PDF con paginas de lado o al reves? Ya sea una sola pagina o el documento completo, aqui te mostramos como corregir la rotacion del PDF en segundos — sin necesidad de software.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para rotar? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Rotar PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why rotate PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que las Paginas de PDF Terminan Rotadas?</h2>
              <p className="text-slate-600 mb-4">
                Las paginas de PDF rotadas son mas comunes de lo que piensas. Estas son las causas mas frecuentes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Desajuste de orientacion del escaner.</strong> Cuando escaneas un documento en un angulo diferente al esperado, el escaner guarda la pagina de lado o al reves. Esto sucede frecuentemente con impresoras multifuncion de oficina.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Paginas horizontales en documentos verticales.</strong> Las hojas de calculo, graficos y tablas anchas a menudo se crean en modo horizontal pero se insertan en un PDF vertical sin rotar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Escaneos con camara del telefono.</strong> Tomar fotos de documentos con tu telefono puede resultar en paginas rotadas dependiendo de como sostenias el dispositivo. Herramientas como <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> pueden ayudar, pero aun puedes necesitar rotar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Errores de exportacion de PDF.</strong> Algunas aplicaciones exportan paginas con metadatos de rotacion incorrectos, causando que los visores las muestren de lado aunque el contenido fue creado correctamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Documentos combinados con orientaciones mixtas.</strong> Cuando <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">unes multiples PDFs</Link>, algunos archivos pueden tener diferentes orientaciones de pagina que necesitan correccion.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Rotar un PDF Online (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Ve a la herramienta Rotar PDF y arrastra tu archivo al area de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir archivos hasta 200MB.",
                  },
                  {
                    title: "Selecciona paginas y angulo de rotacion",
                    desc: "Elige si quieres rotar todas las paginas o solo algunas especificas. Luego selecciona tu rotacion: 90° en sentido horario, 90° en sentido antihorario o 180°. Puedes ver una vista previa de cada pagina para asegurarte de elegir la direccion correcta.",
                  },
                  {
                    title: "Descarga el PDF rotado",
                    desc: "Haz clic en Rotar y descarga tu documento corregido. La rotacion se guarda permanentemente en el archivo — cada visor de PDF mostrara las paginas correctamente de ahora en adelante.",
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

            {/* Rotating specific pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Rotar Paginas Individuales vs. Todas las Paginas</h2>
              <p className="text-slate-600 mb-4">
                A veces necesitas rotar solo una o dos paginas en un documento de varias paginas. Otras veces, el archivo completo necesita girarse. Aqui te mostramos como manejar ambos escenarios:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Rota todas las paginas</strong> cuando el documento completo fue escaneado en el angulo incorrecto. Este es el caso mas comun con PDFs escaneados — selecciona todas las paginas y aplica una sola rotacion.</li>
                <li>&#10003; <strong>Rota paginas individuales</strong> cuando solo ciertas paginas estan de lado. Esto sucede cuando un documento mezcla paginas de texto vertical con graficos o hojas de calculo horizontales.</li>
                <li>&#10003; <strong>Usa Dividir + Rotar + Unir</strong> para documentos complejos. Si necesitas diferentes rotaciones para diferentes secciones, <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">divide el PDF</Link> en grupos, rota cada grupo por separado, luego <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">unelos</Link> de nuevo.</li>
                <li>&#10003; <strong>Verifica el resultado</strong> abriendo el archivo descargado en cualquier visor de PDF. Desplazate por cada pagina para confirmar que la orientacion es correcta antes de enviarlo o compartirlo.</li>
              </ul>
            </section>

            {/* Common rotation angles */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo los Angulos de Rotacion</h2>
              <p className="text-slate-600 mb-4">
                La rotacion de PDF se mide en grados. Esto es lo que hace cada angulo:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">90° en Sentido Horario</h3>
                  <p className="text-slate-600">
                    Gira la pagina un cuarto de vuelta a la derecha. Usa esto cuando una pagina esta rotada a la izquierda (sentido antihorario) y necesitas llevarla a posicion vertical. Esta es la correccion mas comun para paginas horizontales que aparecen de lado.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">90° en Sentido Antihorario (270°)</h3>
                  <p className="text-slate-600">
                    Gira la pagina un cuarto de vuelta a la izquierda. Usa esto cuando una pagina esta rotada a la derecha y necesitas enderezarla. Menos comun, pero necesario cuando los escaneres rotan las paginas en la direccion opuesta.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">180°</h3>
                  <p className="text-slate-600">
                    Voltea la pagina completamente al reves. Usa esto cuando una pagina esta invertida — el texto que se lee de abajo hacia arriba necesita una rotacion de 180°. Comun con errores de escaneo a doble cara. Consulta nuestra guia dedicada sobre <Link href="/es/aprender/arreglar-pdf-al-reves" className="text-orange-600 hover:underline">como arreglar PDFs al reves</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips after rotating */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Hacer Despues de Rotar</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tus paginas estan correctamente orientadas, considera estos pasos adicionales para obtener el mejor resultado:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprime el archivo.</strong> Si el PDF rotado es demasiado grande para correo electronico o portales de carga, usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamano. Incluso puedes apuntar a tamanos especificos como <Link href="/es/comprimir-pdf-a-5mb" className="text-orange-600 hover:underline">5MB</Link> o <Link href="/es/comprimir-pdf-a-2mb" className="text-orange-600 hover:underline">2MB</Link>.</li>
                <li>&#10003; <strong>Ejecuta OCR en paginas escaneadas.</strong> Si el documento rotado es un escaneo sin texto seleccionable, usa <Link href="/es/escaner-ocr" className="text-orange-600 hover:underline">Escaner OCR</Link> para hacer el texto buscable y copiable.</li>
                <li>&#10003; <strong>Aplana el PDF.</strong> Si planeas enviar el archivo a un portal, <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">aplanalo</Link> para eliminar capas ocultas, campos de formulario o anotaciones que puedan causar problemas de compatibilidad.</li>
                <li>&#10003; <strong>Protege documentos sensibles.</strong> Agrega una contrasena usando <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> si el documento contiene informacion personal o confidencial.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Rotar Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y corrige la orientacion de las paginas en segundos — gratis, sin registro.</p>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Rotar PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Rotar un PDF en iPhone (Sin App)", href: "/es/aprender/rotar-pdf-en-iphone" },
                { title: "Arreglar un PDF al Reves (Rotar 180° al Instante)", href: "/es/aprender/arreglar-pdf-al-reves" },
                { title: "Rotar un PDF Escaneado (Corregir Orientacion Despues de Escanear)", href: "/es/aprender/rotar-pdf-escaneado" },
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
                { q: "Como puedo rotar un PDF en linea gratis?", a: "Sube tu PDF a la herramienta Rotar PDF de PDF.it, selecciona las paginas que quieres rotar, elige el angulo de rotacion (90°, 180° o 270°), haz clic en Rotar y descarga el archivo corregido. No se requiere registro para tus primeros 3 archivos." },
                { q: "Puedo rotar solo una pagina de un PDF?", a: "Si. PDF.it te permite seleccionar paginas individuales para rotar mientras deja el resto del documento sin cambios. Esto es perfecto para corregir una sola pagina horizontal en un documento vertical." },
                { q: "Que angulos de rotacion estan disponibles?", a: "PDF.it soporta rotacion de 90° en sentido horario, 90° en sentido antihorario (270°) y 180°. Puedes aplicar diferentes rotaciones a diferentes paginas en el mismo documento." },
                { q: "Rotar un PDF afectara la calidad del texto?", a: "No. Rotar un PDF solo cambia los metadatos de orientacion de la pagina — no re-renderiza ni comprime el contenido. Tu texto, imagenes y formato permanecen exactamente iguales." },
                { q: "Puedo rotar un PDF protegido con contrasena?", a: "Primero necesitas desbloquear el PDF. Usa la herramienta Desbloquear PDF de PDF.it para quitar la contrasena, luego rota las paginas. Puedes volver a agregar proteccion con contrasena despues usando la herramienta Proteger PDF." },
                { q: "Puedo rotar un PDF en mi telefono?", a: "Si. PDF.it funciona en cualquier navegador movil — Safari, Chrome o Firefox. Sube tu PDF, rota las paginas y descarga el archivo corregido directamente en tu telefono. No necesitas instalar ninguna app." },
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
