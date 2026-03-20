import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import type { Metadata } from "next"
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  Image,
  Merge,
  Split,
  RotateCw,
  FileArchiveIcon as Compress,
  Lock,
  Unlock,
  Droplets,
  Scan,
  Camera,
  Mail,
  Type,
  QrCode,
  ImageDown,
  Layers,
  Upload,
  PenTool,
  Shield,
  ArrowLeftRight,
  Repeat,
  ArrowRight,
  Search,
  Globe,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Todas las Herramientas PDF A–Z | OmnisPDF",
  description:
    "Explora todas las herramientas de OmnisPDF en orden alfabetico. Convierte, comprime, une, divide, protege y mas.",
  alternates: {
    canonical: "https://omnispdf.com/es/herramientas-a-z",
    languages: {
      en: "https://omnispdf.com/tools-a-z",
      es: "https://omnispdf.com/es/herramientas-a-z",
      pt: "https://omnispdf.com/br/ferramentas-a-z",
    },
  },
}

const tools = [
  { name: "Analizador ATS de Curriculum", description: "Analisis de curriculum con IA y puntuacion de compatibilidad ATS.", icon: Target, href: "/es/optimizador-ats", tier: "PRO" },
  { name: "Automatizacion de Flujos", description: "Encadena multiples herramientas PDF en un flujo automatizado.", icon: Repeat, href: "/es/automatizacion", tier: "BUSINESS" },
  { name: "Codigo QR", description: "Genera codigos QR desde cualquier URL o texto al instante.", icon: QrCode, href: "/es/codigo-qr", tier: "PRO" },
  { name: "Comparar PDF", description: "Compara dos PDFs lado a lado y resalta las diferencias.", icon: ArrowLeftRight, href: "/es/comparar-pdf", tier: "BUSINESS" },
  { name: "Comprimir PDF", description: "Reduce el tamano del archivo con compresion Ligera, Media o Extrema.", icon: Compress, href: "/es/comprimir-pdf", tier: "FREE" },
  { name: "Comprimir PDF para Email", description: "Reduce PDFs para cumplir los limites de Gmail, Outlook y Yahoo.", icon: Mail, href: "/es/comprimir-pdf-para-email", tier: "FREE" },
  { name: "Convertir Excel a PDF", description: "Convierte hojas de calculo en PDFs compartibles.", icon: FileSpreadsheet, href: "/es/excel-a-pdf", tier: "PRO" },
  { name: "Convertir JPG a PDF", description: "Convierte imagenes JPG a documentos PDF.", icon: Image, href: "/es/jpg-a-pdf", tier: "FREE" },
  { name: "Convertir PDF a Excel", description: "Extrae tablas de PDF a una hoja de calculo Excel.", icon: FileSpreadsheet, href: "/es/pdf-a-excel", tier: "PRO" },
  { name: "Convertir PDF a JPG", description: "Convierte paginas PDF a imagenes JPG de alta calidad.", icon: Image, href: "/es/pdf-a-jpg", tier: "FREE" },
  { name: "Convertir PDF a PNG", description: "Convierte paginas PDF a imagenes PNG.", icon: Image, href: "/es/pdf-a-png", tier: "FREE" },
  { name: "Convertir PDF a PowerPoint", description: "Convierte paginas PDF en diapositivas de PowerPoint.", icon: Presentation, href: "/es/pdf-a-powerpoint", tier: "PRO" },
  { name: "Convertir PDF a Texto", description: "Extrae texto plano de archivos PDF.", icon: Type, href: "/es/pdf-a-texto", tier: "FREE" },
  { name: "Convertir PDF a Word", description: "Convierte PDF a un documento Word editable.", icon: FileText, href: "/es/pdf-a-word", tier: "PRO" },
  { name: "Convertir PNG a PDF", description: "Convierte imagenes PNG a documentos PDF.", icon: Image, href: "/es/png-a-pdf", tier: "FREE" },
  { name: "Convertir PowerPoint a PDF", description: "Convierte presentaciones a formato PDF.", icon: Presentation, href: "/es/powerpoint-a-pdf", tier: "PRO" },
  { name: "Convertir Word a PDF", description: "Convierte documentos Word a PDF al instante.", icon: FileText, href: "/es/word-a-pdf", tier: "PRO" },
  { name: "Desbloquear PDF", description: "Elimina las restricciones de contrasena de un PDF.", icon: Unlock, href: "/es/desbloquear-pdf", tier: "FREE" },
  { name: "Dividir PDF", description: "Divide un PDF en archivos separados.", icon: Split, href: "/es/dividir-pdf", tier: "FREE" },
  { name: "Escanear OCR", description: "Extrae texto buscable de PDFs escaneados.", icon: Scan, href: "/es/escaner-ocr", tier: "PRO" },
  { name: "Extraccion de Tablas", description: "Extrae tablas de PDFs directamente a hojas de calculo Excel.", icon: FileSpreadsheet, href: "/es/extraccion-de-tablas", tier: "BUSINESS" },
  { name: "Extraer Imagenes", description: "Extrae fotos, logos y graficos de PDFs.", icon: ImageDown, href: "/es/extraer-imagenes-de-pdf", tier: "FREE" },
  { name: "Firma Electronica", description: "Agrega firmas electronicas legalmente vinculantes a PDFs.", icon: PenTool, href: "/es/firma-electronica", tier: "BUSINESS" },
  { name: "Limpiar Escaneo", description: "Convierte fotos de documentos del celular en PDFs limpios y profesionales.", icon: Camera, href: "/es/limpieza-escaneo", tier: "FREE" },
  { name: "Marca de Agua PDF", description: "Agrega marcas de agua de texto o imagen a PDFs.", icon: Droplets, href: "/es/marca-de-agua-pdf", tier: "PRO" },
  { name: "PDF Listo para Subir", description: "Arregla y optimiza PDFs para cualquier portal de carga en un clic.", icon: Upload, href: "/es/pdf-listo-para-subir", tier: "FREE" },
  { name: "Planar PDF", description: "Bloquea campos de formulario y anotaciones en un PDF plano.", icon: Layers, href: "/es/planar-pdf", tier: "FREE" },
  { name: "Proteger PDF", description: "Agrega proteccion con contrasena a tu PDF.", icon: Lock, href: "/es/proteger-pdf", tier: "FREE" },
  { name: "Redaccion PDF", description: "Elimina permanentemente texto y datos sensibles de PDFs.", icon: Shield, href: "/es/redaccion-pdf", tier: "BUSINESS" },
  { name: "Rotar PDF", description: "Corrige la orientacion de las paginas al instante.", icon: RotateCw, href: "/es/rotar-pdf", tier: "FREE" },
  { name: "Unir PDF", description: "Combina multiples PDFs en un solo archivo.", icon: Merge, href: "/es/unir-pdf", tier: "FREE" },
  { name: "URL a PDF", description: "Convierte cualquier pagina web publica en un documento PDF.", icon: Globe, href: "/es/url-a-pdf", tier: "PRO" },
]

function TierBadge({ tier }: { tier: string }) {
  if (tier === "ENTERPRISE") {
    return <span className="bg-slate-900 text-white border border-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Enterprise</span>
  }
  if (tier === "BUSINESS") {
    return <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Business</span>
  }
  if (tier === "PRO") {
    return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>Pro</span>
  }
  return <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Gratis</span>
}

export default function HerramientasAZPage() {
  const letters = [...new Set(tools.map((t) => t.name[0].toUpperCase()))].sort()
  const totalFree = tools.filter((t) => t.tier === "FREE").length
  const totalPro = tools.filter((t) => t.tier === "PRO").length
  const totalBusiness = tools.filter((t) => t.tier === "BUSINESS").length
  const totalEnterprise = tools.filter((t) => t.tier === "ENTERPRISE").length

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Search className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-slate-300">{tools.length} herramientas disponibles</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Herramientas PDF A–Z</h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
              Todas las herramientas en un solo lugar, en orden alfabetico. Haz clic en una letra para saltar.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalFree} Gratis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>{totalPro} Pro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalBusiness} Business</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-slate-900 text-white border border-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalEnterprise} Enterprise</span>
              </div>
            </div>
          </div>
        </section>

        <nav className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-0.5 py-3 justify-center">
              {letters.map((letter) => (
                <a key={letter} href={`#letter-${letter}`} className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-black text-slate-500 hover:bg-orange-500 hover:text-white transition-all duration-200">
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {letters.map((letter) => {
              const letterTools = tools.filter((t) => t.name[0].toUpperCase() === letter)
              return (
                <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">{letter}</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{letterTools.length} herramienta{letterTools.length !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {letterTools.map((tool) => {
                      const Icon = tool.icon
                      return (
                        <Link key={tool.href} href={tool.href} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group">
                          <div className="w-11 h-11 bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-orange-50 group-hover:to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 border border-slate-200 group-hover:border-orange-200">
                            <Icon className="h-5 w-5 text-slate-500 group-hover:text-orange-600 transition-colors duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{tool.name}</span>
                              <TierBadge tier={tool.tier} />
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-orange-500 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para empezar?</h2>
            <p className="text-slate-400 mb-6">Elige cualquier herramienta o comienza con las mas populares.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/es/comprimir-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Comprimir PDF <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/es/unir-pdf" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 transition-colors">
                Unir PDF <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
