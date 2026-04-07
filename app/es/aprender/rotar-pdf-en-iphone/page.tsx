import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Rotar un PDF en iPhone (Sin App) | PDF.it",
  description:
    "Aprende como rotar paginas de PDF en tu iPhone usando Safari — sin necesidad de descargar una app. Corrige PDFs de lado o al reves directamente desde tu telefono en segundos.",
  keywords: "rotar pdf iphone, rotar pdf en telefono, girar pdf iphone, rotar pdf ios",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puedo rotar un PDF en mi iPhone sin una app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona directamente en Safari o cualquier navegador de iPhone. Sube tu PDF, selecciona el angulo de rotacion y descarga el archivo corregido — no necesitas instalar ninguna app." }
    },
    {
      "@type": "Question",
      "name": "Rotar un PDF en iPhone reduce la calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La rotacion solo cambia los metadatos de orientacion de la pagina. Tu texto, imagenes y formato permanecen exactamente iguales a su calidad original." }
    },
    {
      "@type": "Question",
      "name": "Puedo rotar solo una pagina en mi iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it te permite seleccionar paginas individuales para rotar. Puedes corregir solo una pagina de lado mientras dejas el resto de tu documento sin tocar." }
    },
    {
      "@type": "Question",
      "name": "Donde se guarda el PDF rotado en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cuando tocas Descargar, Safari guarda el archivo en tu carpeta Descargas en la app Archivos. Tambien puedes elegir guardarlo en iCloud Drive, Google Drive o compartirlo directamente por correo electronico o Mensajes." }
    },
    {
      "@type": "Question",
      "name": "Esto funciona en iPad tambien?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier dispositivo con navegador web — iPhone, iPad, telefonos Android, tablets y computadoras de escritorio. La experiencia es la misma en todos los dispositivos." }
    },
    {
      "@type": "Question",
      "name": "Hay un limite de tamano de archivo en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden rotar PDFs de hasta 25MB. Los usuarios Pro obtienen un limite de 200MB. La mayoria de los documentos que manejas en un telefono estan muy por debajo de 25MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Rotar un PDF en iPhone",
  "description": "Corrige paginas de PDF rotadas en tu iPhone en 3 simples pasos usando PDF.it en Safari.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abre PDF.it en Safari",
      "text": "Abre Safari en tu iPhone y ve a pdf.it.com/rotate-pdf. Toca el area de carga para seleccionar tu PDF de Archivos, iCloud u otra ubicacion."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona paginas y rotacion",
      "text": "Elige que paginas rotar y toca el angulo de rotacion — 90° en sentido horario, 90° en sentido antihorario o 180°. Previsualiza cada pagina para confirmar la direccion."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF rotado",
      "text": "Toca Rotar y luego Descargar. El PDF corregido se guarda en la carpeta Descargas de tu iPhone en la app Archivos."
    }
  ]
}

export default function RotarPDFEnIPhonePage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Rotar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Rotar un PDF en iPhone (Sin App)</h1>
              <p className="text-xl text-slate-300">
                Tienes un PDF de lado en tu telefono? No necesitas descargar una app ni transferir el archivo a una computadora. Aqui te mostramos como rotar paginas de PDF directamente en Safari en menos de 30 segundos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Estas en tu iPhone ahora? Ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Rotar PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que los PDFs Aparecen de Lado en iPhone?</h2>
              <p className="text-slate-600 mb-4">
                Hay varias razones por las que podrías abrir un PDF en tu iPhone y encontrar las paginas rotadas incorrectamente:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Documentos escaneados.</strong> Si alguien escaneo un documento y coloco el papel en el angulo incorrecto, el PDF resultante tiene paginas rotadas. Esto es extremadamente comun con recibos, contratos y formularios gubernamentales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Escaneos con camara del telefono.</strong> Usar la camara de tu iPhone o una app de escaneo puede producir paginas rotadas si no sostenias el telefono perfectamente recto. <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Telefono</Link> puede corregir el contraste y la calidad, pero aun puedes necesitar rotar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Adjuntos de correo electronico.</strong> Los PDFs recibidos como adjuntos de correo a veces se muestran de lado en la app Mail de iPhone o la vista previa de Archivos, aunque se vean bien en una computadora.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Paginas con orientacion mixta.</strong> Un documento que combina paginas de texto vertical con graficos o tablas horizontales tendra algunas paginas que aparecen de lado al desplazarte en tu telefono.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Rotar un PDF en iPhone (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre PDF.it en Safari",
                    desc: "Abre Safari en tu iPhone y navega a pdf.it.com/rotate-pdf. Toca el area de carga y selecciona tu PDF desde tu app Archivos, iCloud Drive, adjunto de correo o cualquier otra ubicacion en tu dispositivo.",
                  },
                  {
                    title: "Selecciona el angulo de rotacion",
                    desc: "Elige que paginas rotar — todas las paginas o solo algunas especificas. Luego toca la direccion de rotacion: 90° en sentido horario, 90° en sentido antihorario o 180°. La vista previa de la pagina te ayuda a confirmar el angulo correcto.",
                  },
                  {
                    title: "Descarga el PDF corregido",
                    desc: "Toca Rotar, luego toca Descargar. Safari guarda el archivo en tu carpeta Descargas en la app Archivos. Desde ahi, puedes compartirlo por correo electronico, Mensajes, AirDrop o guardarlo en iCloud Drive.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Rotar PDFs en iPhone</h2>
              <p className="text-slate-600 mb-4">
                Trabajar con PDFs en una pantalla pequena puede ser complicado. Aqui tienes algunos consejos para facilitarlo:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Gira tu telefono a horizontal</strong> para una mejor vista de las miniaturas de paginas al seleccionar cuales paginas rotar.</li>
                <li>&#10003; <strong>Usa la app Archivos</strong> para encontrar tu PDF antes de subirlo. Si el PDF esta en un correo electronico, guardalo en Archivos primero presionando prolongadamente el adjunto y seleccionando Guardar en Archivos.</li>
                <li>&#10003; <strong>Agrega la herramienta a tu pantalla de inicio</strong> tocando el icono de compartir y seleccionando Agregar a Pantalla de Inicio. Esto pone un acceso directo en tu pantalla de inicio para acceder a PDF.it instantaneamente la proxima vez.</li>
                <li>&#10003; <strong>Funciona en cualquier navegador de iPhone</strong> — Safari, Chrome, Firefox o Edge. PDF.it es una herramienta web, asi que no hay nada que instalar o actualizar.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Otras Tareas de PDF que Puedes Hacer en iPhone</h2>
              <p className="text-slate-600 mb-4">
                Ya que estas manejando PDFs en tu telefono, aqui hay otras tareas comunes que puedes hacer con PDF.it sin salir de Safari:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprimir para Correo Electronico</h3>
                  <p className="text-slate-600">
                    Necesitas enviar el PDF por correo pero es muy grande? Usa <Link href="/es/comprimir-pdf-para-email" className="text-[#14D8C4] hover:underline">Comprimir PDF para Email</Link> para reducirlo por debajo del limite de adjuntos. Funciona genial en iPhone — comprime y envia sin tocar una computadora.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Unir Documentos</h3>
                  <p className="text-slate-600">
                    Recibiste multiples PDFs que necesitan combinarse en uno? Usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para combinarlos directamente en tu telefono. Perfecto para solicitudes de empleo o entregas escolares sobre la marcha.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convertir Fotos a PDF</h3>
                  <p className="text-slate-600">
                    Tomaste fotos de un documento con tu iPhone? Convierte imagenes a PDF usando <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">nuestras herramientas de conversion</Link> o limpia las fotos con <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Telefono</Link> para resultados con aspecto profesional.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que No Necesitas una App de PDF</h2>
              <p className="text-slate-600 mb-4">
                La App Store tiene docenas de apps de edicion de PDF, pero la mayoria tienen desventajas significativas:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Sin espacio de almacenamiento desperdiciado.</strong> Las apps de PDF pueden ocupar 100-300MB de almacenamiento del iPhone. PDF.it funciona en tu navegador sin ocupar espacio.</li>
                <li>&#10003; <strong>Sin suscripciones que gestionar.</strong> Muchas apps de PDF cobran mensualmente por funciones basicas como la rotacion. PDF.it te permite rotar PDFs gratis.</li>
                <li>&#10003; <strong>Sin cuenta requerida.</strong> Comienza a rotar inmediatamente — tus primeros 3 archivos no necesitan registro.</li>
                <li>&#10003; <strong>Siempre actualizado.</strong> Las herramientas web se actualizan automaticamente. Sin esperar actualizaciones de la App Store ni lidiar con problemas de compatibilidad despues de actualizar iOS.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Rotar Tu PDF en iPhone?</h2>
            <p className="text-slate-300 mb-6">Abre esta pagina en tu iPhone, toca el boton de abajo y corrige tu PDF en segundos.</p>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Rotar PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Rotar un PDF Online (90°, 180° o Personalizado)", href: "/es/aprender/como-rotar-pdf" },
                { title: "Arreglar un PDF al Reves (Rotar 180° al Instante)", href: "/es/aprender/arreglar-pdf-al-reves" },
                { title: "Rotar un PDF Escaneado (Corregir Orientacion Despues de Escanear)", href: "/es/aprender/rotar-pdf-escaneado" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Puedo rotar un PDF en mi iPhone sin una app?", a: "Si. PDF.it funciona directamente en Safari o cualquier navegador de iPhone. Sube tu PDF, selecciona el angulo de rotacion y descarga el archivo corregido — no necesitas instalar ninguna app." },
                { q: "Rotar un PDF en iPhone reduce la calidad?", a: "No. La rotacion solo cambia los metadatos de orientacion de la pagina. Tu texto, imagenes y formato permanecen exactamente iguales a su calidad original." },
                { q: "Puedo rotar solo una pagina en mi iPhone?", a: "Si. PDF.it te permite seleccionar paginas individuales para rotar. Puedes corregir solo una pagina de lado mientras dejas el resto de tu documento sin tocar." },
                { q: "Donde se guarda el PDF rotado en iPhone?", a: "Cuando tocas Descargar, Safari guarda el archivo en tu carpeta Descargas en la app Archivos. Tambien puedes elegir guardarlo en iCloud Drive, Google Drive o compartirlo directamente por correo electronico o Mensajes." },
                { q: "Esto funciona en iPad tambien?", a: "Si. PDF.it funciona en cualquier dispositivo con navegador web — iPhone, iPad, telefonos Android, tablets y computadoras de escritorio. La experiencia es la misma en todos los dispositivos." },
                { q: "Hay un limite de tamano de archivo en iPhone?", a: "Los usuarios gratuitos pueden rotar PDFs de hasta 25MB. Los usuarios Pro obtienen un limite de 200MB. La mayoria de los documentos que manejas en un telefono estan muy por debajo de 25MB." },
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
