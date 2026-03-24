import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { UrlPdfInterface } from "@/components/url-pdf-interface"
import { Globe, Zap, Shield, FileText, Merge, Scan, Lock, Type } from "lucide-react"

export const metadata = {
  title: "Convertir URL a PDF Online — Guarda Cualquier Pagina Web | PDF.it",
  description:
    "Convierte cualquier pagina web en un PDF de alta calidad. Introduce una URL y descarga un PDF perfectamente formateado. Tamano, orientacion y margenes personalizables. Funcion Pro de PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/es/url-a-pdf",
    languages: {
      en: "https://pdf.it.com/url-to-pdf",
      es: "https://pdf.it.com/es/url-a-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Que tipos de paginas web puedo convertir a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes convertir cualquier pagina web publica introduciendo su URL. Funciona con articulos, blogs, paginas de documentacion, portafolios y mas. Las paginas que requieren inicio de sesion o estan detras de un paywall pueden no renderizarse completamente.",
      },
    },
    {
      "@type": "Question",
      name: "Puedo personalizar el tamano y orientacion del PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Puedes elegir el tamano de pagina (Carta, A4, Legal, etc.), la orientacion (vertical u horizontal) y ajustar los margenes antes de generar el PDF.",
      },
    },
    {
      "@type": "Question",
      name: "El PDF conserva el diseno original de la pagina web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF.it renderiza la pagina web como un navegador real y captura el diseno, imagenes, fuentes y colores. El resultado es un PDF de alta fidelidad que refleja la apariencia original de la pagina.",
      },
    },
    {
      "@type": "Question",
      name: "Es seguro convertir paginas web a PDF con PDF.it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Todas las transferencias estan cifradas con SSL y los archivos generados se eliminan automaticamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "Necesito instalar algo para usar esta herramienta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. PDF.it funciona completamente en tu navegador. Solo introduce la URL, personaliza las opciones y descarga el PDF — sin extensiones, sin software adicional.",
      },
    },
  ],
}

export default function UrlAPdfPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Convertir URL a PDF</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Convierte cualquier pagina web en un PDF de alta calidad. Introduce una URL, personaliza el tamano y la orientacion, y descarga un PDF perfectamente formateado en segundos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span>Cualquier Pagina</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Diseno Personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Descarga Instantanea</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* URL to PDF Interface */}
        <UrlPdfInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Introduce la URL", desc: "Pega la direccion de la pagina web que quieres convertir en el campo de URL." },
                { step: "2", title: "Personaliza las Opciones", desc: "Elige el tamano de pagina, la orientacion y los margenes segun tus necesidades." },
                { step: "3", title: "Descarga el PDF", desc: "Haz clic en Convertir y descarga tu PDF perfectamente formateado al instante." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por que Convertir Paginas Web a PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Las paginas web pueden cambiar, desaparecer o requerir conexion a internet para acceder. Convertir una URL a PDF te permite guardar una copia permanente del contenido exactamente como aparece — con su diseno, imagenes y formato intactos.
              </p>
              <p className="text-slate-600 text-center">
                Es perfecto para archivar articulos, guardar recibos en linea, documentar referencias de investigacion o compartir contenido web con personas que prefieren leer en formato PDF.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Archivar Articulos y Blogs</h3>
                <p className="text-slate-600">
                  Guarda articulos, noticias y publicaciones de blog como PDF antes de que cambien o desaparezcan. Conserva una copia fiel del contenido original para referencia futura.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recibos y Confirmaciones en Linea</h3>
                <p className="text-slate-600">
                  Convierte confirmaciones de compras, reservas y recibos de pago en PDF para tus registros financieros o declaraciones de impuestos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Investigacion y Documentacion</h3>
                <p className="text-slate-600">
                  Captura paginas de documentacion tecnica, tutoriales o referencias academicas como PDF para leer sin conexion o citar en tus proyectos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compartir Contenido Web</h3>
                <p className="text-slate-600">
                  Envia paginas web como archivos PDF a colegas, clientes o equipos que prefieren recibir documentos formateados en lugar de enlaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Que tipos de paginas web puedo convertir a PDF?",
                  a: "Puedes convertir cualquier pagina web publica introduciendo su URL. Funciona con articulos, blogs, paginas de documentacion, portafolios y mas. Las paginas que requieren inicio de sesion o estan detras de un paywall pueden no renderizarse completamente.",
                },
                {
                  q: "Puedo personalizar el tamano y orientacion del PDF?",
                  a: "Si. Puedes elegir el tamano de pagina (Carta, A4, Legal, etc.), la orientacion (vertical u horizontal) y ajustar los margenes antes de generar el PDF.",
                },
                {
                  q: "El PDF conserva el diseno original de la pagina web?",
                  a: "PDF.it renderiza la pagina web como un navegador real y captura el diseno, imagenes, fuentes y colores. El resultado es un PDF de alta fidelidad que refleja la apariencia original de la pagina.",
                },
                {
                  q: "Es seguro convertir paginas web a PDF con PDF.it?",
                  a: "Si. Todas las transferencias estan cifradas con SSL y los archivos generados se eliminan automaticamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "Necesito instalar algo para usar esta herramienta?",
                  a: "No. PDF.it funciona completamente en tu navegador. Solo introduce la URL, personaliza las opciones y descarga el PDF — sin extensiones, sin software adicional.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Guarda Cualquier Pagina Web como PDF</h2>
            <p className="text-slate-300 text-lg mb-8">
              Introduce una URL y obtiene un PDF de alta calidad en segundos. Personaliza el tamano, la orientacion y los margenes a tu gusto.
            </p>
            <Link
              href="/es/url-a-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convertir URL a PDF
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mas Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PDF a JPG", desc: "Convierte paginas de PDF a imagenes.", href: "/es/pdf-a-jpg", icon: FileText },
                { name: "Unir PDF", desc: "Combina varios PDFs en uno solo.", href: "/es/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Reduce el tamano sin perder calidad.", href: "/es/comprimir-pdf", icon: Zap },
                { name: "Escaner OCR", desc: "Extrae texto de PDFs escaneados.", href: "/es/escaner-ocr", icon: Scan },
                { name: "Word a PDF", desc: "Convierte documentos Word a PDF.", href: "/es/word-a-pdf", icon: Type },
                { name: "Proteger PDF", desc: "Agrega proteccion con contrasena.", href: "/es/proteger-pdf", icon: Lock },
                { name: "Dividir PDF", desc: "Separa paginas de un PDF.", href: "/es/dividir-pdf", icon: FileText },
                { name: "Aplanar PDF", desc: "Bloquea campos y anotaciones.", href: "/es/aplanar-pdf", icon: Shield },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
