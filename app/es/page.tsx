"use client"

import { useEffect } from "react"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { HeroSectionEs } from "@/components/hero-section-es"
import { FooterEs } from "@/components/footer-es"
import {
  Shield, Crown, Gift, Zap, Globe, Award, HelpCircle,
  FileText, FileSpreadsheet, Presentation, Image, Merge, Split, RotateCw,
  FileArchiveIcon as Compress, Lock, Unlock, Droplets, Scan, Camera, Mail,
  Type, QrCode, ImageDown, Layers, Upload, PenTool, ArrowLeftRight, Repeat, Target, FilePlus,
  MessageCircle, Sparkles, FileSearch, BookOpen,
} from "lucide-react"

function AIBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full bg-purple-600 text-white shadow-md shadow-purple-500/50">
      <Sparkles className="h-3.5 w-3.5" />
      AI-Powered
    </span>
  )
}

function TierBadge({ tier }: { tier: "FREE" | "PRO" | "BUSINESS" | "ENTERPRISE" }) {
  if (tier === "ENTERPRISE") {
    return (
      <span className="bg-slate-900 text-white border border-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
        Enterprise
      </span>
    )
  }
  if (tier === "BUSINESS") {
    return (
      <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
        Business
      </span>
    )
  }
  if (tier === "PRO") {
    return (
      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>
        Pro
      </span>
    )
  }
  return (
    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
      Gratis
    </span>
  )
}

const categories = [
  {
    name: "Convertir DESDE PDF",
    description: "Transforma tus PDFs en formatos editables",
    tools: [
      { name: "PDF a JPG", description: "Convierte páginas PDF en imágenes JPG de alta calidad.", icon: Image, href: "/es/pdf-a-jpg", tier: "FREE" as const },
      { name: "PDF a TXT", description: "Extrae el texto de un PDF.", icon: Type, href: "/es/pdf-a-texto", tier: "FREE" as const },
      { name: "PDF a PNG", description: "Convierte páginas PDF en imágenes PNG.", icon: Image, href: "/es/pdf-a-png", tier: "FREE" as const },
      { name: "PDF a Word", description: "Convierte PDF a un documento Word editable.", icon: FileText, href: "/es/pdf-a-word", tier: "PRO" as const },
      { name: "PDF a Excel", description: "Extrae tablas de PDF a una hoja de cálculo.", icon: FileSpreadsheet, href: "/es/pdf-a-excel", tier: "PRO" as const },
      { name: "PDF a PowerPoint", description: "Convierte páginas PDF en diapositivas.", icon: Presentation, href: "/es/pdf-a-powerpoint", tier: "PRO" as const },
      { name: "Extraer Imágenes", description: "Extrae fotos, logos y gráficos de un PDF.", icon: ImageDown, href: "/es/extraer-imagenes-de-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Convertir A PDF",
    description: "Crea PDFs desde cualquier formato",
    tools: [
      { name: "Word a PDF", description: "Convierte documentos Word a PDF al instante.", icon: FileText, href: "/es/word-a-pdf", tier: "PRO" as const },
      { name: "Excel a PDF", description: "Convierte hojas de cálculo a PDF.", icon: FileSpreadsheet, href: "/es/excel-a-pdf", tier: "PRO" as const },
      { name: "PowerPoint a PDF", description: "Convierte presentaciones a PDF.", icon: Presentation, href: "/es/powerpoint-a-pdf", tier: "PRO" as const },
      { name: "JPG a PDF", description: "Convierte imágenes JPG a documentos PDF.", icon: Image, href: "/es/jpg-a-pdf", tier: "FREE" as const },
      { name: "PNG a PDF", description: "Convierte imágenes PNG a documentos PDF.", icon: Image, href: "/es/png-a-pdf", tier: "FREE" as const },
      { name: "URL a PDF", description: "Convierte cualquier pagina web en un PDF.", icon: Globe, href: "/es/url-a-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Editar y Organizar",
    description: "Modifica y organiza tus documentos PDF",
    tools: [
      { name: "Unir PDF", description: "Combina varios PDFs en un solo archivo.", icon: Merge, href: "/es/unir-pdf", tier: "FREE" as const },
      { name: "Dividir PDF", description: "Divide un PDF en archivos separados.", icon: Split, href: "/es/dividir-pdf", tier: "FREE" as const },
      { name: "Rotar PDF", description: "Corrige la orientación de las páginas.", icon: RotateCw, href: "/es/rotar-pdf", tier: "FREE" as const },
      { name: "Aplanar PDF", description: "Bloquea campos y anotaciones en un PDF plano.", icon: Layers, href: "/es/aplanar-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Seguridad y Protección",
    description: "Protege y asegura tus documentos PDF",
    tools: [
      { name: "Proteger PDF", description: "Agrega contraseña a tu PDF.", icon: Lock, href: "/es/proteger-pdf", tier: "FREE" as const },
      { name: "Desbloquear PDF", description: "Quita restricciones de contraseña de un PDF.", icon: Unlock, href: "/es/desbloquear-pdf", tier: "FREE" as const },
      { name: "Marca de Agua", description: "Agrega marcas de agua de texto o imagen.", icon: Droplets, href: "/es/marca-de-agua-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Optimizar y Mejorar",
    description: "Mejora y optimiza tus archivos PDF",
    tools: [
      { name: "Comprimir PDF", description: "Reduce el tamaño con compresión Ligera, Media o Extrema.", icon: Compress, href: "/es/comprimir-pdf", tier: "FREE" as const },
      { name: "Comprimir para Email", description: "Reduce PDFs para adjuntar en Gmail, Outlook y Yahoo.", icon: Mail, href: "/es/comprimir-pdf-para-email", tier: "FREE" as const },
      { name: "PDF Listo para Subir", description: "Optimiza PDFs para cualquier portal de carga.", icon: Upload, href: "/es/pdf-listo-para-subir", tier: "FREE" as const },
      { name: "Escáner OCR", description: "Extrae texto de PDFs escaneados.", icon: Scan, href: "/es/escaner-ocr", tier: "PRO" as const },
      { name: "Limpiar Escaneo", description: "Convierte fotos de documentos en PDFs profesionales.", icon: Camera, href: "/es/limpiar-escaneo", tier: "FREE" as const },
    ],
  },
  {
    name: "Generar",
    description: "Crea recursos útiles al instante",
    tools: [
      { name: "Generador de QR", description: "Genera códigos QR desde cualquier URL o texto.", icon: QrCode, href: "/es/codigo-qr", tier: "PRO" as const },
      { name: "Optimiza Tu Curriculum", description: "Sube tu curriculum, recibe una puntuacion y la IA lo arregla.", icon: Target, href: "/es/optimizador-ats", tier: "PRO" as const, hasAI: true },
      { name: "Crear Curriculum", description: "Construye un curriculum profesional desde cero. Descarga en Word.", icon: FilePlus, href: "/es/crear-curriculum", tier: "PRO" as const, hasAI: true },
      { name: "Chat con PDF", description: "Haz preguntas y obtén respuestas con IA de cualquier documento PDF.", icon: MessageCircle, href: "/es/chat-con-pdf", tier: "BUSINESS" as const, hasAI: true },
      { name: "Extracción Inteligente", description: "Extrae automáticamente nombres, fechas, montos y datos clave de cualquier PDF.", icon: FileSearch, href: "/es/extraccion-inteligente", tier: "BUSINESS" as const, hasAI: true },
      { name: "Resumidor de PDF", description: "Resume documentos largos en segundos. Elige longitud e idioma.", icon: BookOpen, href: "/es/resumidor-pdf", tier: "BUSINESS" as const, hasAI: true },
    ],
  },
  {
    name: "Herramientas Business y Enterprise",
    description: "Herramientas avanzadas para profesionales, equipos, bufetes y laboratorios",
    tools: [
      { name: "Automatización", description: "Encadena varias herramientas PDF en un flujo automático.", icon: Repeat, href: "/es/automatizacion", tier: "BUSINESS" as const },
      { name: "Extracción de Tablas", description: "Extrae tablas de PDFs directamente a Excel.", icon: FileSpreadsheet, href: "/es/extraccion-de-tablas", tier: "BUSINESS" as const },
      { name: "Comparar PDF", description: "Compara dos PDFs lado a lado y resalta diferencias.", icon: ArrowLeftRight, href: "/es/comparar-pdf", tier: "BUSINESS" as const },
      { name: "Firma Electrónica", description: "Agrega firmas electrónicas legales a PDFs.", icon: PenTool, href: "/es/firma-electronica", tier: "BUSINESS" as const },
      { name: "Redacción PDF", description: "Elimina permanentemente texto sensible de PDFs.", icon: Shield, href: "/es/redaccion-pdf", tier: "BUSINESS" as const },
      { name: "Plantillas de Flujos", description: "Flujos predefinidos para documentos legales, contables y de laboratorio.", icon: Layers, href: "/es/automatizacion", tier: "ENTERPRISE" as const },
      { name: "Extracción de Alto Volumen", description: "Extrae hasta 2,000 páginas de tablas al mes a Excel.", icon: FileSpreadsheet, href: "/es/extraccion-de-tablas", tier: "ENTERPRISE" as const },
    ],
  },
]

export default function HomePageEs() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#tools") {
      setTimeout(() => {
        const toolsSection = document.getElementById("tools")
        if (toolsSection) {
          const headerHeight = 64
          const elementPosition = toolsSection.offsetTop
          const offsetPosition = elementPosition - headerHeight
          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <HeroSectionEs />

        {/* Tools Grid */}
        <section
          id="tools"
          className="scroll-mt-16 py-14"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 0% 50%, rgba(107,124,255,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-2 text-balance">
                Todas las Herramientas
              </h2>
              <p className="text-base text-slate-400 max-w-2xl mx-auto">
                Todo lo que necesitas para trabajar con PDFs en segundos.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="mb-3">
                    <h3 className="text-lg font-extrabold text-white">{category.name}</h3>
                    <p className="text-sm text-[#6B7CFF]">{category.description}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="rounded-xl p-[1px]"
                        style={{
                          background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                        }}
                      >
                        <Link
                          href={tool.href}
                          className="group flex flex-col items-center text-center rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full"
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
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200"
                            style={{
                              background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                              boxShadow: "0 0 20px rgba(20, 216, 196, 0.35), 0 4px 8px rgba(232,129,58,0.1)",
                            }}
                          >
                            <tool.icon className="h-5 w-5 text-[#14D8C4]" />
                          </div>
                          <div className="flex items-center gap-1.5 mb-1 flex-wrap justify-center">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#14D8C4] transition-colors">{tool.name}</h4>
                            <TierBadge tier={tool.tier} />
                          </div>
                          {tool.hasAI && <div className="mb-1"><AIBadge /></div>}
                          <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Pricing CTA */}
              <div className="max-w-2xl mx-auto my-10">
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.08), rgba(107,124,255,0.06), rgba(232,129,58,0.04))",
                    border: "1px solid rgba(20,216,196,0.15)",
                    boxShadow: "0 0 40px rgba(20,216,196,0.08), 0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <h3 className="text-xl font-black text-white mb-2 text-balance">
                    ¿Necesitas conversiones ilimitadas o archivos más grandes?
                  </h3>
                  <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
                    Pasa a Pro para conversiones ilimitadas, procesamiento por lotes y todas las herramientas — $7.99/mes. ¿Necesitas firma electrónica y automatización? Prueba Business a $13.99/mes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/es/precios"
                      className="inline-flex items-center justify-center gap-2 font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                        color: "#0E0F1E",
                        boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      <Crown className="h-4 w-4" />
                      Actualizar a Pro
                    </Link>
                    <Link
                      href="/es/precios"
                      className="inline-flex items-center justify-center gap-2 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      }}
                    >
                      Ver Planes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Shield, label: "Seguridad", value: "HTTPS", description: "Transferencia cifrada con TLS" },
                { icon: Zap, label: "Velocidad", value: "Rápido", description: "Segundos para la mayoría de archivos" },
                { icon: Globe, label: "Límite Gratis", value: "25MB", description: "200MB Pro · 1GB Business" },
                { icon: Gift, label: "Conversiones Gratis", value: "10/día", description: "Ilimitadas con Pro" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20,216,196,0.2)",
                    }}
                  >
                    <stat.icon className="h-5 w-5 text-[#14D8C4]" />
                  </div>
                  <div className="text-2xl font-black text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs font-semibold text-[#14D8C4]">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div
              className="rounded-2xl p-6 mb-12"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-black text-white">30+</div>
                  <div className="text-sm text-slate-400">Herramientas PDF en un solo lugar</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">3 Idiomas</div>
                  <div className="text-sm text-slate-400">Ingles, espanol, portugues</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">4 Planes</div>
                  <div className="text-sm text-slate-400">Gratis, Pro, Business, Enterprise</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Equipos legales</span>
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Profesionales contables</span>
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Laboratorios de investigacion</span>
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Estudiantes en todo el mundo</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-black text-white mb-2 text-balance">
                ¿Por Qué PDF.it?
              </h2>
              <p className="text-base text-slate-400 max-w-2xl mx-auto">
                Herramientas PDF online con funciones Pro cuando las necesites — convierte, comprime, une, divide y escanea en tu navegador.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Gift, title: "Gratis para Empezar", description: "10 conversiones gratis al día. Sin tarjeta de crédito." },
                { icon: Zap, title: "Procesamiento Rápido", description: "Convierte PDFs en segundos — sin instalar nada." },
                { icon: Crown, title: "Funciones Pro", description: "Conversiones ilimitadas, archivos más grandes y acceso a todas las herramientas." },
                { icon: Award, title: "Alta Calidad", description: "Diseñado para mantener texto claro, diseño limpio y formato intacto." },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(107,124,255,0.2)",
                    }}
                  >
                    <feature.icon className="h-5 w-5 text-[#14D8C4]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div
                className="rounded-2xl p-8 max-w-3xl mx-auto"
                style={{
                  background: "linear-gradient(135deg, rgba(20,216,196,0.08), rgba(107,124,255,0.06), rgba(232,129,58,0.04))",
                  border: "1px solid rgba(20,216,196,0.15)",
                  boxShadow: "0 0 40px rgba(20,216,196,0.08), 0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <h3 className="text-xl font-black text-white mb-2 text-balance">¿Listo para convertir tu primer archivo?</h3>
                <p className="text-slate-400 text-sm mb-5 max-w-xl mx-auto leading-relaxed">
                  10 conversiones gratis al día. Sin cuenta necesaria para herramientas gratuitas. Actualiza cuando quieras.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#tools"
                    className="font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                      color: "#0E0F1E",
                      boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    Empezar Gratis
                  </a>
                  <Link
                    href="/es/precios"
                    className="font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105 text-white"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    Ver Planes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-14"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 100%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 0% 50%, rgba(107,124,255,0.03) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 20%, rgba(232,129,58,0.02) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                    boxShadow: "0 0 24px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                    border: "1px solid rgba(20,216,196,0.2)",
                  }}
                >
                  <HelpCircle className="h-5 w-5 text-[#14D8C4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-2">
                  Preguntas Frecuentes
                </h2>
                <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Todo lo que necesitas saber sobre PDF.it. ¿No encuentras lo que buscas?{" "}
                  <a href="/es/contacto" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium underline">
                    Contáctanos
                  </a>.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { q: "¿PDF.it es gratis?", a: "Sí. PDF.it ofrece un plan gratuito con 10 conversiones al día y archivos hasta 25MB. No necesitas cuenta para las herramientas gratuitas. Actualiza a Pro ($7.99/mes) para conversiones ilimitadas, todas las herramientas y archivos hasta 200MB." },
                  { q: "¿Necesito crear una cuenta?", a: "No necesitas cuenta para usar las herramientas gratuitas — solo sube tu archivo y convierte. Se necesita cuenta para funciones Pro y administrar tu suscripción." },
                  { q: "¿Es seguro subir mis archivos?", a: "Sí. Todas las transferencias usan cifrado SSL/HTTPS. Los archivos se procesan de forma segura y se eliminan automáticamente cuando termina tu sesión. No almacenamos, revisamos ni compartimos tus documentos." },
                  { q: "¿Qué formatos de archivo soportan?", a: "PDF.it soporta PDF, JPG, PNG, TXT y formatos de Office (Word, Excel, PowerPoint). Las herramientas incluyen convertir, comprimir, unir, dividir, rotar, proteger, desbloquear, marca de agua y OCR." },
                  { q: "¿Cuál es el tamaño máximo de archivo?", a: "Las cuentas gratuitas pueden subir archivos hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." },
                  { q: "¿Qué incluye el plan Pro?", a: "Pro ($7.99/mes) incluye conversiones ilimitadas, todas las herramientas PDF (incluyendo OCR, Marca de Agua y Office a PDF), y archivos hasta 200MB. Business ($13.99/mes) agrega firma electrónica, automatización y más." },
                  { q: "¿Funciona en celular?", a: "Sí. PDF.it funciona en navegadores modernos incluyendo Chrome, Firefox, Safari y Edge en computadora, tablet y celular." },
                  { q: "¿Cómo puedo obtener ayuda?", a: "Visita nuestra página de Contacto o escríbenos a contact@pdf.it.com. Respondemos en menos de un día hábil." },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <h3 className="font-bold text-white mb-2 text-sm">{faq.q}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <div
                  className="rounded-2xl p-8"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.08), rgba(107,124,255,0.06), rgba(232,129,58,0.04))",
                    border: "1px solid rgba(20,216,196,0.15)",
                    boxShadow: "0 0 40px rgba(20,216,196,0.06), 0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">¿Aún tienes preguntas?</h3>
                  <p className="text-slate-400 text-xs mb-5 max-w-xl mx-auto leading-relaxed">
                    Nuestro equipo de soporte está aquí para ayudarte a aprovechar PDF.it al máximo.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="mailto:contact@pdf.it.com"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = "mailto:contact@pdf.it.com"
                      }}
                      className="inline-flex items-center justify-center px-6 py-2.5 font-bold rounded-xl text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                        color: "#0E0F1E",
                        boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      Escríbenos Directamente
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
