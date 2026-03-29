import Link from "next/link"
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
  Crown,
  QrCode,
  ImageDown,
  Layers,
  Upload,
  PenTool,
  Shield,
  ArrowLeftRight,
  Repeat,
  Globe,
  Target,
  Sparkles,
  FilePlus,
  MessageCircle,
} from "lucide-react"

const categories = [
  {
    name: "Converter de PDF",
    description: "Transforme seus PDFs em formatos editaveis",
    tools: [
      { name: "PDF para JPG", description: "Converta paginas PDF em imagens JPG de alta qualidade.", icon: Image, href: "/br/pdf-para-jpg", tier: "FREE" as const },
      { name: "PDF para Texto", description: "Extraia texto simples de arquivos PDF.", icon: Type, href: "/br/pdf-para-texto", tier: "FREE" as const },
      { name: "PDF para PNG", description: "Converta paginas PDF em imagens PNG.", icon: Image, href: "/br/pdf-para-png", tier: "FREE" as const },
      { name: "PDF para Word", description: "Converta PDF em documento Word editavel.", icon: FileText, href: "/br/pdf-para-word", tier: "PRO" as const },
      { name: "PDF para Excel", description: "Extraia tabelas de PDF para planilhas Excel.", icon: FileSpreadsheet, href: "/br/pdf-para-excel", tier: "PRO" as const },
      { name: "PDF para PowerPoint", description: "Converta paginas PDF em slides de PowerPoint.", icon: Presentation, href: "/br/pdf-para-powerpoint", tier: "PRO" as const },
      { name: "Extrair Imagens", description: "Extraia fotos, logos e graficos de arquivos PDF.", icon: ImageDown, href: "/br/extrair-imagens-de-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Converter para PDF",
    description: "Crie PDFs a partir de qualquer formato de documento",
    tools: [
      { name: "Word para PDF", description: "Converta documentos Word para PDF instantaneamente.", icon: FileText, href: "/br/word-para-pdf", tier: "PRO" as const },
      { name: "Excel para PDF", description: "Converta planilhas em PDFs compartilhaveis.", icon: FileSpreadsheet, href: "/br/excel-para-pdf", tier: "PRO" as const },
      { name: "PowerPoint para PDF", description: "Converta apresentacoes para formato PDF.", icon: Presentation, href: "/br/powerpoint-para-pdf", tier: "PRO" as const },
      { name: "JPG para PDF", description: "Converta imagens JPG em documentos PDF.", icon: Image, href: "/br/jpg-para-pdf", tier: "FREE" as const },
      { name: "PNG para PDF", description: "Converta imagens PNG em documentos PDF.", icon: Image, href: "/br/png-para-pdf", tier: "FREE" as const },
      { name: "URL para PDF", description: "Converta qualquer pagina web em um documento PDF.", icon: Globe, href: "/br/url-para-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Editar e Organizar",
    description: "Modifique e organize seus documentos PDF",
    tools: [
      { name: "Unir PDF", description: "Combine varios PDFs em um unico arquivo.", icon: Merge, href: "/br/unir-pdf", tier: "FREE" as const },
      { name: "Dividir PDF", description: "Divida um PDF em arquivos separados.", icon: Split, href: "/br/dividir-pdf", tier: "FREE" as const },
      { name: "Girar PDF", description: "Corrija a orientacao das paginas instantaneamente.", icon: RotateCw, href: "/br/girar-pdf", tier: "FREE" as const },
      { name: "Achatar PDF", description: "Trave campos de formulario e anotacoes em um PDF plano.", icon: Layers, href: "/br/achatar-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Seguranca e Protecao",
    description: "Proteja e assegure seus documentos PDF",
    tools: [
      { name: "Proteger PDF", description: "Adicione protecao com senha ao seu PDF.", icon: Lock, href: "/br/proteger-pdf", tier: "FREE" as const },
      { name: "Desbloquear PDF", description: "Remova restricoes de senha de um PDF.", icon: Unlock, href: "/br/desbloquear-pdf", tier: "FREE" as const },
      { name: "Marca d'Agua PDF", description: "Adicione marcas d'agua de texto ou imagem a PDFs.", icon: Droplets, href: "/br/marca-dagua-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Otimizar e Melhorar",
    description: "Melhore e otimize seus arquivos PDF",
    tools: [
      { name: "Comprimir PDF", description: "Reduza o tamanho do arquivo com compressao Leve, Media ou Extrema.", icon: Compress, href: "/br/comprimir-pdf", tier: "FREE" as const },
      { name: "Comprimir para Email", description: "Reduza PDFs para cumprir os limites de anexo do Gmail, Outlook e Yahoo.", icon: Mail, href: "/br/comprimir-pdf-para-email", tier: "FREE" as const },
      { name: "PDF Pronto para Upload", description: "Corrija e otimize PDFs para qualquer portal de upload em um clique.", icon: Upload, href: "/br/pdf-pronto-para-upload", tier: "FREE" as const },
      { name: "Scanner OCR", description: "Extraia texto pesquisavel de PDFs digitalizados.", icon: Scan, href: "/br/scanner-ocr", tier: "PRO" as const },
      { name: "Limpeza de Digitalizacao", description: "Converta fotos de documentos em PDFs limpos e profissionais.", icon: Camera, href: "/br/limpeza-digitalizacao", tier: "FREE" as const },
    ],
  },
  {
    name: "Gerar e Ferramentas IA",
    description: "Ferramentas com inteligencia artificial para criar e otimizar documentos",
    tools: [
      { name: "Gerador de Codigo QR", description: "Gere codigos QR a partir de qualquer URL ou texto instantaneamente.", icon: QrCode, href: "/br/codigo-qr", tier: "PRO" as const },
      { name: "Otimize Seu Curriculo", description: "Envie seu curriculo, receba uma pontuacao e a IA corrige.", icon: Target, href: "/br/otimizador-ats", tier: "PRO" as const, hasAI: true },
      { name: "Criar Curriculo", description: "Construa um curriculo profissional do zero com IA. Baixe em Word.", icon: FilePlus, href: "/br/criar-curriculo", tier: "PRO" as const, hasAI: true },
      { name: "Chat com PDF", description: "Faca perguntas e obtenha respostas com IA de qualquer documento PDF.", icon: MessageCircle, href: "/br/chat-com-pdf", tier: "BUSINESS" as const, hasAI: true },
    ],
  },
  {
    name: "Ferramentas Business e Enterprise",
    description: "Ferramentas avancadas para profissionais, equipes, escritorios e laboratorios",
    tools: [
      { name: "Automacao de Fluxos", description: "Encadeie multiplas ferramentas PDF em um fluxo automatizado.", icon: Repeat, href: "/br/automacao", tier: "BUSINESS" as const },
      { name: "Extracao de Tabelas", description: "Extraia tabelas de PDFs diretamente para planilhas Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "BUSINESS" as const },
      { name: "Comparar PDF", description: "Compare dois PDFs lado a lado e destaque as diferencas.", icon: ArrowLeftRight, href: "/br/comparar-pdf", tier: "BUSINESS" as const },
      { name: "Assinatura Eletronica", description: "Adicione assinaturas eletronicas legalmente validas a PDFs.", icon: PenTool, href: "/br/assinatura-eletronica", tier: "BUSINESS" as const },
      { name: "Redacao de PDF", description: "Remova permanentemente texto e dados sensiveis de PDFs.", icon: Shield, href: "/br/redacao-pdf", tier: "BUSINESS" as const },
      { name: "Modelos de Fluxo", description: "Fluxos predefinidos para documentos juridicos, contabeis e de laboratorio.", icon: Layers, href: "/br/automacao", tier: "ENTERPRISE" as const },
      { name: "Extracao de Alto Volume", description: "Extraia ate 2.000 paginas de tabelas por mes para Excel.", icon: FileSpreadsheet, href: "/br/extracao-tabelas-alto-volume", tier: "ENTERPRISE" as const },
    ],
  },
]

const tierStyles: Record<string, { bg: string; color: string; border: string }> = {
  FREE: { bg: "rgba(148,163,184,0.15)", color: "#94A3B8", border: "rgba(148,163,184,0.3)" },
  PRO: { bg: "rgba(214,179,106,0.15)", color: "#E0C27A", border: "rgba(214,179,106,0.4)" },
  BUSINESS: { bg: "rgba(107,124,255,0.15)", color: "#6B7CFF", border: "rgba(107,124,255,0.4)" },
  ENTERPRISE: { bg: "rgba(14,165,233,0.15)", color: "#38BDF8", border: "rgba(14,165,233,0.4)" },
}

function TierBadge({ tier }: { tier: "FREE" | "PRO" | "BUSINESS" | "ENTERPRISE" }) {
  const s = tierStyles[tier] || tierStyles.FREE
  const labels: Record<string, string> = { FREE: "Gratis", PRO: "Pro", BUSINESS: "Business", ENTERPRISE: "Enterprise" }
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
    >
      {labels[tier] || "Gratis"}
    </span>
  )
}

function AIBadge() {
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
      style={{ background: "rgba(232,129,58,0.15)", color: "#E8813A", border: "1px solid rgba(232,129,58,0.4)" }}
    >
      AI
    </span>
  )
}

function PricingCTA() {
  return (
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
          Precisa de conversoes ilimitadas ou arquivos maiores?
        </h3>
        <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
          Atualize para Pro para conversoes ilimitadas e todas as ferramentas — $7.99/mes. Precisa de assinatura eletronica e automacao? Experimente Business por $13.99/mes. Escritorios e contadores escolhem Enterprise por $49.99/mes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/br/precos"
            className="inline-flex items-center justify-center gap-2 font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
              color: "#0E0F1E",
              boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Crown className="h-4 w-4" />
            Atualizar para Pro
          </Link>
          <Link
            href="/br/precos"
            className="inline-flex items-center justify-center gap-2 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            Ver Planos
          </Link>
        </div>
      </div>
    </div>
  )
}

export function FeaturesGridBr() {
  return (
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
            Todas as Ferramentas
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Tudo o que voce precisa para trabalhar com PDFs em segundos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-3">
                <h3 className="text-lg font-extrabold text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-[#6B7CFF]">
                  {category.description}
                </p>
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
                        <h4 className="text-sm font-bold text-white group-hover:text-[#14D8C4] transition-colors">
                          {tool.name}
                        </h4>
                        <TierBadge tier={tool.tier} />
                        {tool.hasAI && <AIBadge />}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {tool.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <PricingCTA />
        </div>
      </div>
    </section>
  )
}
