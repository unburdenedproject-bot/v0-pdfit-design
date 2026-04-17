import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aprender — Guias, Consejos y Tutoriales de PDF | PDF.it",
  description:
    "Guias y tutoriales gratuitos para cada tarea con PDF. Aprende a comprimir, unir, dividir, convertir, proteger y optimizar archivos PDF — paso a paso.",
  alternates: {
    canonical: "https://pdf.it.com/es/aprender",
    languages: {
      en: "https://pdf.it.com/learn",
      es: "https://pdf.it.com/es/aprender",
      pt: "https://pdf.it.com/br/aprender",
    },
  },
}

const categories = [
  {
    name: "Comprimir PDF",
    articles: [
      { href: "/es/aprender/como-comprimir-un-pdf", title: "Como Comprimir un PDF (Reducir Tamaño Rápidamente)" },
      { href: "/es/aprender/comprimir-pdf-sin-perder-calidad", title: "Como Comprimir un PDF Sin Perder Calidad" },
      { href: "/es/aprender/comprimir-pdf-grande", title: "Como Comprimir un PDF Grande (50MB, 100MB o Mas)" },
      { href: "/es/aprender/comprimir-pdf-con-imágenes", title: "Comprimir un PDF con Imágenes (Fotos, Escaneos, Gráficos)" },
      { href: "/es/aprender/comprimir-pdf-para-imprimir", title: "Comprimir un PDF para Imprimir (Mantener Calidad de Impresión)" },
    ],
  },
  {
    name: "Unir y Dividir PDF",
    articles: [
      { href: "/es/aprender/como-unir-archivos-pdf", title: "Como Unir Archivos PDF" },
      { href: "/es/aprender/unir-pdfs-en-orden", title: "Unir PDFs en el Orden Correcto" },
      { href: "/es/aprender/unir-pdf-en-iphone", title: "Unir PDFs en iPhone" },
      { href: "/es/aprender/unir-pdfs-escaneados", title: "Unir PDFs Escaneados" },
      { href: "/es/aprender/combinar-pdfs-para-envio", title: "Combinar PDFs para Envios (Escuela, Visa, Portales)" },
      { href: "/es/aprender/como-dividir-pdf", title: "Como Dividir un PDF" },
      { href: "/es/aprender/dividir-pdf-en-paginas-individuales", title: "Dividir un PDF en Páginas Individuales" },
      { href: "/es/aprender/dividir-pdf-para-email", title: "Dividir un PDF para Email" },
      { href: "/es/aprender/dividir-pdf-en-movil", title: "Dividir un PDF en el Movil" },
      { href: "/es/aprender/extraer-paginas-de-pdf", title: "Extraer Páginas de un PDF" },
      { href: "/es/aprender/extraer-paginas-de-pdf-guia", title: "Extraer Páginas de un PDF — Guia Completa" },
    ],
  },
  {
    name: "Convertir PDF",
    articles: [
      { href: "/es/aprender/convertir-pdf-a-jpg", title: "Como Convertir PDF a JPG" },
      { href: "/es/aprender/convertir-pdf-a-png", title: "Como Convertir PDF a PNG" },
      { href: "/es/aprender/convertir-pdf-a-texto", title: "Convertir PDF a TXT (Texto Plano)" },
      { href: "/es/aprender/pdf-a-jpg-vs-png", title: "PDF a JPG vs PNG — Cual Elegir?" },
      { href: "/es/aprender/pdf-a-jpg-en-iphone", title: "PDF a JPG en iPhone" },
      { href: "/es/aprender/pdf-a-jpg-para-powerpoint", title: "PDF a JPG para PowerPoint" },
      { href: "/es/aprender/convertir-pdf-a-png-en-iphone", title: "Convertir PDF a PNG en iPhone" },
      { href: "/es/aprender/pdf-a-png-para-diseno", title: "PDF a PNG para Diseño" },
      { href: "/es/aprender/guardar-pagina-pdf-como-jpg", title: "Guardar una Página de PDF como JPG" },
      { href: "/es/aprender/guardar-pdf-como-png-en-mac", title: "Guardar PDF como PNG en Mac" },
      { href: "/es/aprender/por-que-pdf-a-jpg-se-ve-borroso", title: "Por Que PDF a JPG Se Ve Borroso (Y Como Soluciónarlo)" },
      { href: "/es/aprender/convertir-pdf-escaneado-a-texto", title: "Convertir PDF Escaneado a Texto (OCR)" },
      { href: "/es/aprender/extraer-texto-de-pdf-en-movil", title: "Extraer Texto de PDF en el Movil" },
      { href: "/es/aprender/copiar-texto-de-pdf-a-notas", title: "Copiar Texto de PDF a Notas" },
      { href: "/es/aprender/pdf-texto-ilegible-solución", title: "Texto del PDF Ilegible? Aqui la Solución" },
    ],
  },
  {
    name: "Word, Excel y PowerPoint a PDF",
    articles: [
      { href: "/es/aprender/convertir-word-a-pdf", title: "Convertir Word a PDF" },
      { href: "/es/aprender/convertir-excel-a-pdf", title: "Convertir Excel a PDF" },
      { href: "/es/aprender/convertir-ppt-a-pdf", title: "Convertir PowerPoint a PDF" },
      { href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf", title: "Convertir DOCX, XLSX y PPTX a PDF" },
      { href: "/es/aprender/convertir-curriculum-word-a-pdf", title: "Convertir Currículum de Word a PDF (Consejos ATS)" },
      { href: "/es/aprender/docx-a-pdf-mantener-formato", title: "DOCX a PDF Sin Problemas de Formato" },
      { href: "/es/aprender/word-a-pdf-errores-comunes-de-formato", title: "Word a PDF: Errores Comunes de Formato" },
      { href: "/es/aprender/word-a-pdf-en-iphone", title: "Word a PDF en iPhone" },
      { href: "/es/aprender/excel-a-pdf-ajustar-a-pagina", title: "Excel a PDF — Ajustar a Página" },
      { href: "/es/aprender/excel-a-pdf-columnas-cortadas", title: "Excel a PDF Corta las Columnas? Soluciónalo" },
      { href: "/es/aprender/excel-a-pdf-en-mac", title: "Excel a PDF en Mac" },
      { href: "/es/aprender/reporte-excel-a-pdf", title: "Exportar Reportes Mensuales: Excel a PDF" },
      { href: "/es/aprender/ppt-a-pdf-animaciones", title: "PowerPoint a PDF — Que Pasa con las Animaciones?" },
      { href: "/es/aprender/ppt-a-pdf-para-imprimir", title: "PowerPoint a PDF para Imprimir" },
      { href: "/es/aprender/ppt-a-pdf-en-iphone", title: "PowerPoint a PDF en iPhone" },
      { href: "/es/aprender/pptx-a-pdf-fuentes-faltantes", title: "PPTX a PDF: Fuentes Faltantes — Solución" },
      { href: "/es/aprender/office-a-pdf-convertidor", title: "Convertidor de Office a PDF" },
      { href: "/es/aprender/office-a-pdf-mantener-formato", title: "Office a PDF — Mantener Formato" },
      { href: "/es/aprender/office-a-pdf-en-movil", title: "Office a PDF en el Movil" },
      { href: "/es/aprender/mejor-formato-para-enviar-documentos", title: "Mejor Formato para Enviar Documentos (PDF vs DOCX)" },
    ],
  },
  {
    name: "Rotar y Organizar PDF",
    articles: [
      { href: "/es/aprender/como-rotar-pdf", title: "Como Rotar un PDF" },
      { href: "/es/aprender/rotar-pdf-en-iphone", title: "Rotar PDF en iPhone" },
      { href: "/es/aprender/rotar-pdf-escaneado", title: "Rotar un PDF Escaneado" },
      { href: "/es/aprender/arreglar-pdf-al-reves", title: "Arreglar un PDF al Reves" },
    ],
  },
  {
    name: "Proteger y Desbloquear PDF",
    articles: [
      { href: "/es/aprender/como-proteger-pdf-con-contraseña", title: "Como Proteger un PDF con Contraseña" },
      { href: "/es/aprender/mejores-prácticas-contraseña-pdf", title: "Mejores Prácticas de Contraseña para PDF" },
      { href: "/es/aprender/proteger-pdf-antes-de-enviar", title: "Proteger un PDF Antes de Enviar" },
      { href: "/es/aprender/proteger-pdf-en-movil", title: "Proteger un PDF en el Movil" },
      { href: "/es/aprender/como-desbloquear-pdf", title: "Como Desbloquear un PDF" },
      { href: "/es/aprender/desbloquear-pdf-contraseña-olvidada", title: "Desbloquear PDF — Contraseña Olvidada" },
      { href: "/es/aprender/desbloquear-pdf-para-imprimir", title: "Desbloquear PDF para Imprimir" },
      { href: "/es/aprender/desbloquear-pdf-en-movil", title: "Desbloquear PDF en el Movil" },
    ],
  },
  {
    name: "Marca de Agua en PDF",
    articles: [
      { href: "/es/aprender/como-agregar-marca-de-agua-a-pdf", title: "Como Agregar una Marca de Agua a un PDF" },
      { href: "/es/aprender/marca-de-agua-pdf-con-logo", title: "Marca de Agua en PDF con Logo" },
      { href: "/es/aprender/marca-de-agua-pdf-confidencial", title: "Marca de Agua en PDF: Confidencial" },
      { href: "/es/aprender/marca-de-agua-pdf-mejores-prácticas", title: "Marca de Agua en PDF: Mejores Prácticas" },
      { href: "/es/aprender/marca-de-agua-pdf-en-movil", title: "Marca de Agua en PDF en el Movil" },
    ],
  },
  {
    name: "OCR y Escaneo",
    articles: [
      { href: "/es/aprender/que-es-ocr", title: "Qué es OCR?" },
      { href: "/es/aprender/ocr-documento-escaneado", title: "OCR en un Documento Escaneado" },
      { href: "/es/aprender/ocr-pdf-a-texto-buscable", title: "OCR: PDF a Texto Buscable" },
      { href: "/es/aprender/ocr-pdf-en-movil", title: "OCR en PDF en el Movil" },
      { href: "/es/aprender/ocr-texto-manuscrito", title: "OCR de Texto Manuscrito" },
      { href: "/es/aprender/consejos-precision-ocr", title: "Consejos de Precisión para OCR" },
    ],
  },
  {
    name: "Códigos QR",
    articles: [
      { href: "/es/aprender/como-crear-codigo-qr", title: "Como Crear un Código QR" },
      { href: "/es/aprender/tipos-de-codigo-qr-explicados", title: "Tipos de Código QR Explicados" },
      { href: "/es/aprender/mejores-prácticas-codigo-qr", title: "Mejores Prácticas de Código QR" },
      { href: "/es/aprender/codigo-qr-para-pdf", title: "Código QR para PDF" },
      { href: "/es/aprender/codigo-qr-para-wifi", title: "Código QR para WiFi" },
      { href: "/es/aprender/codigo-qr-para-menu-de-restaurante", title: "Código QR para Menu de Restaurante" },
      { href: "/es/aprender/codigo-qr-para-tarjeta-de-presentacion", title: "Código QR para Tarjeta de Presentación" },
    ],
  },
]

export default function AprenderPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
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
                <BookOpen className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Aprender</h1>
              <p className="text-xl text-slate-300 mb-4">
                Guias y tutoriales gratuitos para cada tarea con PDF. Instrucciones paso a paso, consejos y mejores prácticas — sin necesidad de registrarse.
              </p>
              <p className="text-sm text-slate-400">{categories.reduce((sum, c) => sum + c.articles.length, 0)} artículos en {categories.length} categorias</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl font-black text-slate-900 mb-4">{category.name}</h2>
                  <div className="grid gap-2">
                    {category.articles.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/30 hover:bg-[#F0FDFA] transition-all group"
                      >
                        <span className="font-medium text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                      </Link>
                    ))}
                  </div>
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
