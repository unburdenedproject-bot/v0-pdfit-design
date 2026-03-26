import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
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
  title: "Todas as Ferramentas PDF A–Z | PDF.it",
  description:
    "Explore todas as ferramentas do PDF.it em ordem alfabetica. Converta, comprima, una, divida, proteja e mais.",
  alternates: {
    canonical: "https://pdf.it.com/br/ferramentas-a-z",
    languages: {
      en: "https://pdf.it.com/tools-a-z",
      es: "https://pdf.it.com/es/herramientas-a-z",
      pt: "https://pdf.it.com/br/ferramentas-a-z",
    },
  },
}

const tools = [
  { name: "Achatar PDF", description: "Trava campos de formulario e anotacoes em um PDF plano.", icon: Layers, href: "/br/achatar-pdf", tier: "FREE" },
  { name: "Analisador ATS de Curriculo", description: "Analise de curriculo com IA e pontuacao de compatibilidade ATS.", icon: Target, href: "/br/otimizador-ats", tier: "PRO" },
  { name: "Assinatura Eletronica", description: "Adicione assinaturas eletronicas legalmente vinculantes a PDFs.", icon: PenTool, href: "/br/assinatura-eletronica", tier: "BUSINESS" },
  { name: "Automacao de Fluxos", description: "Encadeie multiplas ferramentas PDF em um fluxo automatizado.", icon: Repeat, href: "/br/automacao", tier: "BUSINESS" },
  { name: "Codigo QR", description: "Gere codigos QR a partir de qualquer URL ou texto instantaneamente.", icon: QrCode, href: "/br/codigo-qr", tier: "PRO" },
  { name: "Comparar PDF", description: "Compare dois PDFs lado a lado e destaque as diferencas.", icon: ArrowLeftRight, href: "/br/comparar-pdf", tier: "BUSINESS" },
  { name: "Comprimir PDF", description: "Reduza o tamanho do arquivo com compressao Leve, Media ou Extrema.", icon: Compress, href: "/br/comprimir-pdf", tier: "FREE" },
  { name: "Comprimir PDF para Email", description: "Reduza PDFs para caber nos limites do Gmail, Outlook e Yahoo.", icon: Mail, href: "/br/comprimir-pdf-para-email", tier: "FREE" },
  { name: "Converter Excel para PDF", description: "Transforme planilhas em PDFs compartilhaveis.", icon: FileSpreadsheet, href: "/br/excel-para-pdf", tier: "PRO" },
  { name: "Converter JPG para PDF", description: "Converta imagens JPG em documentos PDF.", icon: Image, href: "/br/jpg-para-pdf", tier: "FREE" },
  { name: "Converter PDF para Excel", description: "Extraia tabelas de PDF para uma planilha Excel.", icon: FileSpreadsheet, href: "/br/pdf-para-excel", tier: "PRO" },
  { name: "Converter PDF para JPG", description: "Converta paginas PDF em imagens JPG de alta qualidade.", icon: Image, href: "/br/pdf-para-jpg", tier: "FREE" },
  { name: "Converter PDF para PNG", description: "Converta paginas PDF em imagens PNG.", icon: Image, href: "/br/pdf-para-png", tier: "FREE" },
  { name: "Converter PDF para PowerPoint", description: "Converta paginas PDF em slides de PowerPoint.", icon: Presentation, href: "/br/pdf-para-powerpoint", tier: "PRO" },
  { name: "Converter PDF para Texto", description: "Extraia texto puro de arquivos PDF.", icon: Type, href: "/br/pdf-para-texto", tier: "FREE" },
  { name: "Converter PDF para Word", description: "Converta PDF em um documento Word editavel.", icon: FileText, href: "/br/pdf-para-word", tier: "PRO" },
  { name: "Converter PNG para PDF", description: "Converta imagens PNG em documentos PDF.", icon: Image, href: "/br/png-para-pdf", tier: "FREE" },
  { name: "Converter PowerPoint para PDF", description: "Converta apresentacoes para formato PDF.", icon: Presentation, href: "/br/powerpoint-para-pdf", tier: "PRO" },
  { name: "Converter Word para PDF", description: "Converta documentos Word para PDF instantaneamente.", icon: FileText, href: "/br/word-para-pdf", tier: "PRO" },
  { name: "Desbloquear PDF", description: "Remova restricoes de senha de um PDF.", icon: Unlock, href: "/br/desbloquear-pdf", tier: "FREE" },
  { name: "Dividir PDF", description: "Divida um PDF em arquivos separados.", icon: Split, href: "/br/dividir-pdf", tier: "FREE" },
  { name: "Extracao de Tabelas", description: "Extraia tabelas de PDFs diretamente para planilhas Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "BUSINESS" },
  { name: "Extracao de Alto Volume", description: "Extraia ate 2.000 paginas de tabelas por mes para Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "ENTERPRISE" },
  { name: "Extrair Imagens", description: "Extraia fotos, logos e graficos de PDFs.", icon: ImageDown, href: "/br/extrair-imagens-de-pdf", tier: "FREE" },
  { name: "Girar PDF", description: "Corrija a orientacao das paginas instantaneamente.", icon: RotateCw, href: "/br/girar-pdf", tier: "FREE" },
  { name: "Limpeza de Digitalizacao", description: "Transforme fotos de documentos do celular em PDFs limpos e profissionais.", icon: Camera, href: "/br/limpeza-digitalizacao", tier: "FREE" },
  { name: "Marca d'Agua PDF", description: "Adicione marcas d'agua de texto ou imagem a PDFs.", icon: Droplets, href: "/br/marca-dagua-pdf", tier: "PRO" },
  { name: "PDF Pronto para Upload", description: "Corrija e otimize PDFs para qualquer portal de upload em um clique.", icon: Upload, href: "/br/pdf-pronto-para-upload", tier: "FREE" },
  { name: "Proteger PDF", description: "Adicione protecao com senha ao seu PDF.", icon: Lock, href: "/br/proteger-pdf", tier: "FREE" },
  { name: "Redacao PDF", description: "Remova permanentemente texto e dados sensiveis de PDFs.", icon: Shield, href: "/br/redacao-pdf", tier: "BUSINESS" },
  { name: "Scanner OCR", description: "Extraia texto pesquisavel de PDFs digitalizados.", icon: Scan, href: "/br/scanner-ocr", tier: "PRO" },
  { name: "Unir PDF", description: "Combine multiplos PDFs em um unico arquivo.", icon: Merge, href: "/br/unir-pdf", tier: "FREE" },
  { name: "URL para PDF", description: "Converta qualquer pagina web publica em um documento PDF.", icon: Globe, href: "/br/url-para-pdf", tier: "PRO" },
  { name: "Modelos de Fluxo", description: "Fluxos predefinidos para documentos juridicos, contabeis e de laboratorio.", icon: Layers, href: "/br/automacao", tier: "ENTERPRISE" },
]

const tierColors: Record<string, { badge: string; border: string; glow: string; check: string }> = {
  FREE: { badge: "rgba(148,163,184,0.15)", border: "rgba(148,163,184,0.3)", glow: "rgba(148,163,184,0.15)", check: "#94A3B8" },
  PRO: { badge: "rgba(214,179,106,0.15)", border: "rgba(214,179,106,0.4)", glow: "rgba(214,179,106,0.25)", check: "#E0C27A" },
  BUSINESS: { badge: "rgba(107,124,255,0.15)", border: "rgba(107,124,255,0.4)", glow: "rgba(107,124,255,0.3)", check: "#6B7CFF" },
  ENTERPRISE: { badge: "rgba(192,197,206,0.15)", border: "rgba(192,197,206,0.4)", glow: "rgba(192,197,206,0.25)", check: "#C0C5CE" },
}

function TierBadge({ tier }: { tier: string }) {
  const c = tierColors[tier] || tierColors.FREE
  const labels: Record<string, string> = { FREE: "Gratis", PRO: "Pro", BUSINESS: "Business", ENTERPRISE: "Enterprise" }
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap"
      style={{ background: c.badge, color: c.check, border: `1px solid ${c.border}` }}
    >
      {labels[tier] || "Gratis"}
    </span>
  )
}

export default function FerramentasAZPage() {
  const letters = [...new Set(tools.map((t) => t.name[0].toUpperCase()))].sort()
  const totalFree = tools.filter((t) => t.tier === "FREE").length
  const totalPro = tools.filter((t) => t.tier === "PRO").length
  const totalBusiness = tools.filter((t) => t.tier === "BUSINESS").length
  const totalEnterprise = tools.filter((t) => t.tier === "ENTERPRISE").length

  return (
    <div className="min-h-screen" style={{ background: "#0E0F1E" }}>
      <HeaderBr />
      <main>
        {/* Hero */}
        <section
          className="text-white py-20 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          {/* Grain */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="azGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#azGrain)" />
          </svg>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "rgba(20,216,196,0.08)",
                border: "1px solid rgba(20,216,196,0.25)",
                boxShadow: "0 0 12px rgba(20,216,196,0.1)",
              }}
            >
              <Search className="h-4 w-4 text-[#14D8C4]" />
              <span className="text-sm font-medium text-slate-300">{tools.length} ferramentas disponiveis</span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-black mb-4"
              style={{ letterSpacing: "-1.5px" }}
            >
              Ferramentas PDF{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #14D8C4, #6B7CFF, #E8813A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A–Z
              </span>
            </h1>
            <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "rgba(165,180,252,0.7)" }}>
              Todas as ferramentas em um so lugar, em ordem alfabetica. Clique em uma letra para pular.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                { label: `${totalFree} Gratis`, color: "#94A3B8" },
                { label: `${totalPro} Pro`, color: "#E0C27A" },
                { label: `${totalBusiness} Business`, color: "#6B7CFF" },
                { label: `${totalEnterprise} Enterprise`, color: "#C0C5CE" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="rounded-lg px-4 py-2"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${pill.color}30`,
                    boxShadow: `0 0 12px ${pill.color}10`,
                  }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: pill.color }}>
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky letter nav */}
        <nav
          className="sticky top-16 z-10"
          style={{
            background: "rgba(14,15,30,0.9)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-0.5 py-3 justify-center">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-black transition-all duration-200"
                  style={{ color: "rgba(165,180,252,0.5)" }}
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Tool listing */}
        <section
          className="py-14"
          style={{
            background: `
              radial-gradient(ellipse 60% 30% at 50% 0%, rgba(20,216,196,0.03) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 50%, rgba(107,124,255,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {letters.map((letter) => {
              const letterTools = tools.filter((t) => t.name[0].toUpperCase() === letter)
              return (
                <div key={letter} id={`letter-${letter}`} className="mb-14 scroll-mt-32">
                  {/* Letter header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(20,216,196,0.15), rgba(107,124,255,0.1))",
                        border: "1px solid rgba(20,216,196,0.2)",
                        color: "#14D8C4",
                        boxShadow: "0 0 16px rgba(20,216,196,0.12)",
                      }}
                    >
                      {letter}
                    </div>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(20,216,196,0.2), transparent)" }} />
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#6B7CFF" }}>
                      {letterTools.length} ferramenta{letterTools.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Tool cards */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {letterTools.map((tool) => {
                      const Icon = tool.icon
                      const tc = tierColors[tool.tier] || tierColors.FREE
                      return (
                        <div
                          key={tool.href + tool.tier}
                          className="rounded-2xl p-[1px]"
                          style={{
                            background: `linear-gradient(135deg, ${tc.border}, rgba(20,216,196,0.2), ${tc.border})`,
                          }}
                        >
                          <Link
                            href={tool.href}
                            className="flex items-start gap-4 rounded-[15px] p-5 transition-all duration-300 group tool-card-hover"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              backdropFilter: "blur(12px)",
                              WebkitBackdropFilter: "blur(12px)",
                            }}
                          >
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{
                                background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                                boxShadow: `0 0 20px ${tc.glow}`,
                              }}
                            >
                              <Icon className="h-5 w-5" style={{ color: tc.check }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-white group-hover:text-[#14D8C4] transition-colors">{tool.name}</span>
                                <TierBadge tier={tool.tier} />
                              </div>
                              <p className="text-sm text-slate-400 leading-relaxed">{tool.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-[#14D8C4] flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 relative overflow-hidden">
          <div
            className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center relative z-10"
          >
            <div
              className="rounded-2xl p-10"
              style={{
                background: "linear-gradient(135deg, rgba(20,216,196,0.08), rgba(107,124,255,0.06), rgba(232,129,58,0.04))",
                border: "1px solid rgba(20,216,196,0.15)",
                boxShadow: "0 0 50px rgba(20,216,196,0.08), 0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <h2 className="text-2xl font-black text-white mb-3">Pronto para comecar?</h2>
              <p className="text-slate-400 mb-8">Escolha qualquer ferramenta ou comece pelas mais populares.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/br/comprimir-pdf"
                  className="cta-primary inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                    color: "#0E0F1E",
                    boxShadow: "0 0 24px rgba(20,216,196,0.45), 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  Comprimir PDF <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/br/unir-pdf"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  Unir PDF <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
