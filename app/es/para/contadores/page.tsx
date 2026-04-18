import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import type { Metadata } from "next"
import { Calculator, Shield, FileSpreadsheet, Receipt, FileSearch, Archive, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Herramientas PDF para Contadores — Extraer Tablas, Procesar Facturas y Proteger Datos del Cliente | PDF.it",
  description:
    "Herramientas PDF creadas para equipos de contabilidad y teneduría de libros. Extrae tablas de estados de cuenta y facturas, convierte PDFs a Excel, comprime archivos y protege documentos del cliente. Los archivos se eliminan inmediatamente.",
  keywords: [
    "herramientas PDF para contadores",
    "estado de cuenta a Excel",
    "extracción de datos de facturas",
    "PDF a Excel para contadores",
    "extracción de tablas de PDF",
    "herramientas PDF para teneduría de libros",
    "herramientas PDF seguras para clientes",
    "herramientas PDF para documentos fiscales",
    "herramientas PDF para CPAs",
    "alternativa a Adobe Acrobat para contadores",
  ],
  openGraph: {
    title: "Herramientas PDF para Contadores — Extraer Tablas, Procesar Facturas y Proteger Datos del Cliente | PDF.it",
    description:
      "Extrae tablas de estados de cuenta y facturas, convierte PDFs a Excel, comprime archivos y protege documentos del cliente. Los archivos se eliminan inmediatamente.",
    url: "https://pdf.it.com/es/para/contadores",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it para Contadores" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herramientas PDF para Contadores — Extraer Tablas, Procesar Facturas y Proteger Datos del Cliente",
    description:
      "Extrae tablas de estados de cuenta y facturas, convierte PDFs a Excel y protege documentos del cliente. Los archivos se eliminan inmediatamente.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/es/para/contadores",
    languages: {
      en: "https://pdf.it.com/for/accountants",
      es: "https://pdf.it.com/es/para/contadores",
      pt: "https://pdf.it.com/br/para/contadores",
    },
  },
}

const faqs = [
  {
    q: "¿Qué tan precisa es la extracción de tablas en estados de cuenta bancarios?",
    a: "PDF.it usa por debajo el Form Parser de Google Document AI, que maneja con precisión estados de cuenta bancarios de varias columnas, estados de tarjeta de crédito y facturas de proveedores con tablas estructuradas. Para estados de cuenta escaneados, ejecuta primero OCR para que el texto sea legible por máquina y después extrae.",
  },
  {
    q: "¿Puedo extraer tablas de PDFs escaneados?",
    a: "Sí. Pasa primero el PDF escaneado por nuestro escáner OCR para añadir una capa de texto y luego ejecuta la extracción de tablas. El flujo combinado convierte estados de cuenta en papel, archivos históricos y facturas enviadas por fax en archivos XLSX.",
  },
  {
    q: "¿PDF.it almacena los documentos financieros del cliente?",
    a: "No. Los archivos se procesan en tiempo real y se eliminan en cuanto descargas el resultado. Todas las transferencias están cifradas con SSL. Nunca almacenamos, leemos, indexamos ni compartimos tus documentos — algo que importa cuando manejas formularios fiscales, estados de cuenta y declaraciones.",
  },
  {
    q: "¿Puedo proteger con contraseña las declaraciones fiscales antes de enviarlas a los clientes?",
    a: "Sí. Nuestra herramienta de encriptar PDF aplica encriptación AES-256 con la contraseña que elijas. Muchos contadores combinan la contraseña con los últimos cuatro dígitos del RFC del cliente o una frase compartida establecida durante el alta.",
  },
  {
    q: "¿Qué plan cubre los flujos de trabajo de contabilidad?",
    a: "Business es el plan adecuado para la mayoría de las firmas: 200 páginas/mes de extracción de tablas, archivos de 1GB, conversiones ilimitadas y firma electrónica para cartas de servicios. Las firmas de alto volumen o cualquiera que esté digitalizando archivos históricos deberían mirar Enterprise para 2,000 páginas/mes.",
  },
]

export default function ParaContadoresPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <HeaderEs />
      <main>
        {/* ── Hero ── */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Calculator className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Herramientas PDF Creadas para Equipos de Contabilidad</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae tablas de estados de cuenta bancarios, digitaliza facturas de proveedores, convierte PDFs a Excel y protege las declaraciones del cliente — todo sin salir de tu navegador. Los archivos se eliminan inmediatamente después de descargarlos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/es/registro"
                  className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Comenzar prueba gratis <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/es/precios"
                  className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Ver precios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Dónde los Equipos de Contabilidad Pierden Horas Cada Semana</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Una cantidad sorprendente de la semana de un contador se va en sacar números de PDFs — estados de cuenta bancarios, facturas de proveedores, reportes de gastos, formularios fiscales. PDF.it reduce ese trabajo a minutos en lugar de horas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Estados de cuenta atrapados en PDFs", desc: "El cierre de mes significa decenas de estados de cuenta para conciliar. Volver a tipear los montos en Excel es lento y propenso a errores." },
                { title: "Facturas que no se mapean limpiamente al ERP", desc: "Las facturas de proveedores llegan en diseños inconsistentes. Llevar las partidas a tu software contable requiere captura manual." },
                { title: "Archivos históricos escaneados", desc: "Años de estados de cuenta en papel guardados en archiveros necesitan volverse legibles por máquina antes de servir para auditorías o revisiones." },
                { title: "Paquetes grandes de declaraciones fiscales", desc: "Las declaraciones consolidadas con anexos y K-1 fácilmente superan los 50MB — demasiado grandes para los portales de clientes y los adjuntos de correo." },
                { title: "Cartas de servicios que quedan sin firmar", desc: "Imprimir, firmar, escanear y enviar por correo las cartas de servicios es un cuello de botella al inicio de cada temporada fiscal." },
                { title: "Datos del cliente que deben permanecer privados", desc: "RFC, CURP y saldos de cuenta no pueden enviarse por canales no seguros. La protección con contraseña en los PDFs salientes es innegociable." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Core Tools ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">Las Seis Herramientas que Toda Firma Usa</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Cada herramienta a continuación funciona en tu navegador. Sin plugins, sin instalaciones de escritorio, sin archivos cargados sentados en el servidor de un proveedor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FileSpreadsheet, title: "Extracción de Tablas a Excel", desc: "Extrae partidas de estados de cuenta bancarios, estados de tarjeta de crédito y facturas de proveedores directo a XLSX. Funciona tanto con PDFs digitales como escaneados.", href: "/es/extraccion-de-tablas", cta: "Extraer tablas" },
                { icon: FileSpreadsheet, title: "PDF a Excel", desc: "Convierte PDFs completos a XLSX en una sola pasada. Conserva la estructura de columnas, los encabezados y el formato de números cuando es posible.", href: "/es/pdf-a-excel", cta: "Convertir PDF a Excel" },
                { icon: Receipt, title: "Extracción Inteligente", desc: "Pide campos específicos — número de factura, fecha de vencimiento, total, nombre del proveedor — y obtén una salida JSON estructurada. Excelente para procesamiento por lotes de facturas.", href: "/es/extraccion-inteligente", cta: "Extraer datos" },
                { icon: FileSearch, title: "Escáner OCR", desc: "Convierte estados de cuenta escaneados y facturas enviadas por fax en texto buscable y extraíble. Un primer paso obligatorio antes de extraer tablas de escaneos.", href: "/es/escaner-ocr", cta: "Ejecutar OCR" },
                { icon: Lock, title: "Proteger con Contraseña y Firmar", desc: "Encriptación AES-256 en las declaraciones fiscales antes de enviarlas. Firma electrónica solo de sesión para cartas de servicios — sin biblioteca de firmas almacenada en el servidor.", href: "/es/encriptar-pdf", cta: "Proteger un PDF" },
                { icon: Archive, title: "Comprimir y Unir Archivos", desc: "Combina K-1, anexos y hojas de trabajo en un PDF limpio. Comprime paquetes grandes para que entren en los límites de carga de los portales del cliente.", href: "/es/comprimir-pdf", cta: "Comprimir un PDF" },
              ].map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <tool.icon className="h-6 w-6 text-[#14D8C4]" />
                      <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <Link href={tool.href} className="inline-flex items-center text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6]">
                      {tool.cta} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflows ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Cuatro Flujos de Trabajo Reales</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Estas son las secuencias que tenedores de libros, contadores y equipos internos de finanzas ejecutan en PDF.it durante el cierre, la auditoría y la temporada fiscal.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Conciliar un mes de estados de cuenta bancarios",
                  steps: [
                    "Sube cada estado de cuenta a /es/extraccion-de-tablas.",
                    "Deja que Document AI parsee las transacciones en filas estructuradas.",
                    "Descarga el XLSX e impórtalo a tu ERP, sistema contable o libro mayor.",
                    "El tiempo total de conciliación baja de horas de retipeo a minutos de revisión.",
                  ],
                },
                {
                  title: "Digitalizar una pila de facturas de proveedores",
                  steps: [
                    "Pasa cada factura por /es/extraccion-inteligente.",
                    "Solicita número de factura, fecha, proveedor, subtotal, impuesto y total como campos.",
                    "Obtén un JSON limpio que puedes pegar en tu sistema contable o de cuentas por pagar.",
                  ],
                },
                {
                  title: "Preparar una declaración fiscal consolidada para un cliente",
                  steps: [
                    "Une la declaración, los anexos y los K-1 en /es/unir-pdf.",
                    "Comprime el archivo combinado en /es/comprimir-pdf si excede el límite de tamaño del portal del cliente.",
                    "Protege con contraseña el PDF final en /es/encriptar-pdf antes de enviarlo.",
                  ],
                },
                {
                  title: "Digitalizar un archivo histórico en papel",
                  steps: [
                    "Escanea un lote de estados de cuenta antiguos a 300 DPI.",
                    "Pásalos por /es/escaner-ocr para que el texto sea extraíble.",
                    "Ejecuta los PDFs buscables a través de /es/extraccion-de-tablas para construir un Excel listo para auditoría.",
                  ],
                },
              ].map((w) => (
                <div key={w.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{w.title}</h3>
                  <ol className="space-y-2">
                    {w.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14D8C4]/15 text-[#0B9B8B] font-bold text-xs flex items-center justify-center">{i + 1}</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plan Pick ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">¿Qué Plan Conviene a una Firma de Contabilidad?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              La extracción de tablas es del nivel Business. Ahí es donde empiezan la mayoría de las firmas. Los despachos de alto volumen y quienes digitalizan archivos pasan a Enterprise por el tope de 2,000 páginas/mes.
            </p>
            <div
              className="rounded-xl p-[1px]"
              style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}
            >
              <div
                className="rounded-[11px] p-8"
                style={{
                  background: `
                    radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%),
                    radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%),
                    rgba(255, 255, 255, 0.07)
                  `,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">Business</h3>
                  <span className="text-[#6B7CFF] font-semibold">$13.99/mes</span>
                  <span className="text-slate-400 text-sm">— recomendado para contadores y tenedores de libros</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Extracción de tablas — 200 páginas/mes",
                    "Extracción inteligente para campos de facturas",
                    "PDF a Excel / Word / PowerPoint",
                    "Escáner OCR",
                    "Firma electrónica con firmas solo de sesión",
                    "Protección con contraseña y encriptación AES-256",
                    "Archivos de hasta 1GB",
                    "Conversiones ilimitadas y procesamiento por lotes",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/es/registro"
                    className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comenzar prueba gratis de 30 días
                  </Link>
                  <Link
                    href="/es/precios"
                    className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comparar todos los planes
                  </Link>
                </div>
                <p className="text-xs text-slate-400 mt-4">¿Concilias más de 200 páginas/mes? Enterprise desbloquea 2,000 páginas + cola de procesamiento prioritaria.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy & Compliance ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="rounded-xl p-8 bg-white border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-8 w-8 text-[#14D8C4] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Los Datos del Cliente Quedan Privados</h2>
                  <p className="text-slate-600 leading-relaxed">
                    PDF.it procesa tus archivos en tiempo real y los elimina en cuanto descargas el resultado. Nunca almacenamos, leemos, indexamos ni compartimos tus documentos. Todas las transferencias están cifradas con SSL. Las declaraciones fiscales y los estados de cuenta nunca se quedan en nuestros servidores.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Archivos eliminados inmediatamente después de descargarlos",
                  "Transferencias cifradas con SSL",
                  "Encriptación AES-256 en PDFs protegidos con contraseña",
                  "Sin bibliotecas reutilizables de firmas almacenadas en el servidor",
                  "Sin almacenamiento de archivos, jamás",
                  "Sin indexación, sin analítica sobre el contenido de los documentos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5 group">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-900">
                    <span>{f.q}</span>
                    <span className="text-[#14D8C4] text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">30 Días de Plan Business, Gratis</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Empieza con el nivel Business completo — extracción de tablas, extracción inteligente, firma electrónica, archivos de 1GB. Sin cargo durante 30 días. Cancela cuando quieras.
            </p>
            <Link
              href="/es/registro"
              className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              Comenzar prueba gratis <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
