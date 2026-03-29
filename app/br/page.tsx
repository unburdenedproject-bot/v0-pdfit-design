"use client"

import { useEffect } from "react"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { HeroSectionBr } from "@/components/hero-section-br"
import { FooterBr } from "@/components/footer-br"
import {
  Shield, Crown, Gift, Zap, Globe, Award, HelpCircle,
  FileText, FileSpreadsheet, Presentation, Image, Merge, Split, RotateCw,
  FileArchiveIcon as Compress, Lock, Unlock, Droplets, Scan, Camera, Mail,
  Type, QrCode, ImageDown, Layers, Upload, PenTool, ArrowLeftRight, Repeat, Target, FilePlus,
  MessageCircle, Sparkles, FileSearch, BookOpen, HelpCircle,
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
    name: "Converter de PDF",
    description: "Transforme seus PDFs em formatos editaveis",
    tools: [
      { name: "PDF para JPG", description: "Converta paginas PDF em imagens JPG de alta qualidade.", icon: Image, href: "/br/pdf-para-jpg", tier: "FREE" as const },
      { name: "PDF para Texto", description: "Extraia o texto de um PDF.", icon: Type, href: "/br/pdf-para-texto", tier: "FREE" as const },
      { name: "PDF para PNG", description: "Converta paginas PDF em imagens PNG.", icon: Image, href: "/br/pdf-para-png", tier: "FREE" as const },
      { name: "PDF para Word", description: "Converta PDF em documento Word editavel.", icon: FileText, href: "/br/pdf-para-word", tier: "PRO" as const },
      { name: "PDF para Excel", description: "Extraia tabelas de PDF para planilha.", icon: FileSpreadsheet, href: "/br/pdf-para-excel", tier: "PRO" as const },
      { name: "PDF para PowerPoint", description: "Converta paginas PDF em slides.", icon: Presentation, href: "/br/pdf-para-powerpoint", tier: "PRO" as const },
      { name: "Extrair Imagens", description: "Extraia fotos, logos e graficos de um PDF.", icon: ImageDown, href: "/br/extrair-imagens-de-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Converter para PDF",
    description: "Crie PDFs a partir de qualquer formato",
    tools: [
      { name: "Word para PDF", description: "Converta documentos Word para PDF instantaneamente.", icon: FileText, href: "/br/word-para-pdf", tier: "PRO" as const },
      { name: "Excel para PDF", description: "Converta planilhas para PDF.", icon: FileSpreadsheet, href: "/br/excel-para-pdf", tier: "PRO" as const },
      { name: "PowerPoint para PDF", description: "Converta apresentacoes para PDF.", icon: Presentation, href: "/br/powerpoint-para-pdf", tier: "PRO" as const },
      { name: "JPG para PDF", description: "Converta imagens JPG em documentos PDF.", icon: Image, href: "/br/jpg-para-pdf", tier: "FREE" as const },
      { name: "PNG para PDF", description: "Converta imagens PNG em documentos PDF.", icon: Image, href: "/br/png-para-pdf", tier: "FREE" as const },
      { name: "URL para PDF", description: "Converta qualquer pagina web em um PDF.", icon: Globe, href: "/br/url-para-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Organizar PDF",
    description: "Modifique e organize seus documentos PDF",
    tools: [
      { name: "Unir PDF", description: "Combine varios PDFs em um unico arquivo.", icon: Merge, href: "/br/unir-pdf", tier: "FREE" as const },
      { name: "Dividir PDF", description: "Divida um PDF em arquivos separados.", icon: Split, href: "/br/dividir-pdf", tier: "FREE" as const },
      { name: "Girar PDF", description: "Corrija a orientacao das paginas.", icon: RotateCw, href: "/br/girar-pdf", tier: "FREE" as const },
      { name: "Achatar PDF", description: "Trave campos e anotacoes em um PDF plano.", icon: Layers, href: "/br/achatar-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Seguranca",
    description: "Proteja e assegure seus documentos PDF",
    tools: [
      { name: "Proteger PDF", description: "Adicione senha ao seu PDF.", icon: Lock, href: "/br/proteger-pdf", tier: "FREE" as const },
      { name: "Desbloquear PDF", description: "Remova restricoes de senha de um PDF.", icon: Unlock, href: "/br/desbloquear-pdf", tier: "FREE" as const },
      { name: "Marca d'Agua", description: "Adicione marcas d'agua de texto ou imagem.", icon: Droplets, href: "/br/marca-dagua-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Comprimir",
    description: "Otimize e reduza seus arquivos PDF",
    tools: [
      { name: "Comprimir PDF", description: "Reduza o tamanho com compressao Leve, Media ou Extrema.", icon: Compress, href: "/br/comprimir-pdf", tier: "FREE" as const },
      { name: "Comprimir para Email", description: "Reduza PDFs para anexar no Gmail, Outlook e Yahoo.", icon: Mail, href: "/br/comprimir-pdf-para-email", tier: "FREE" as const },
      { name: "PDF Pronto para Upload", description: "Otimize PDFs para qualquer portal de upload.", icon: Upload, href: "/br/pdf-pronto-para-upload", tier: "FREE" as const },
    ],
  },
  {
    name: "Digitalizar",
    description: "Digitalize e melhore seus documentos",
    tools: [
      { name: "Scanner OCR", description: "Extraia texto de PDFs digitalizados.", icon: Scan, href: "/br/scanner-ocr", tier: "PRO" as const },
      { name: "Limpeza de Digitalizacao", description: "Converta fotos de documentos em PDFs profissionais.", icon: Camera, href: "/br/limpeza-digitalizacao", tier: "FREE" as const },
      { name: "Codigo QR", description: "Gere codigos QR a partir de qualquer URL ou texto.", icon: QrCode, href: "/br/codigo-qr", tier: "PRO" as const },
      { name: "Otimize Seu Curriculo", description: "Envie seu curriculo, receba uma pontuacao e a IA corrige.", icon: Target, href: "/br/otimizador-ats", tier: "PRO" as const, hasAI: true },
      { name: "Criar Curriculo", description: "Construa um curriculo profissional do zero. Baixe em Word.", icon: FilePlus, href: "/br/criar-curriculo", tier: "PRO" as const, hasAI: true },
      { name: "Chat com PDF", description: "Faca perguntas e obtenha respostas com IA de qualquer documento PDF.", icon: MessageCircle, href: "/br/chat-com-pdf", tier: "BUSINESS" as const, hasAI: true },
      { name: "Extracao Inteligente", description: "Extraia automaticamente nomes, datas, valores e dados chave de qualquer PDF.", icon: FileSearch, href: "/br/extracao-inteligente", tier: "BUSINESS" as const, hasAI: true },
      { name: "Resumidor de PDF", description: "Resuma documentos longos em segundos. Escolha tamanho e idioma.", icon: BookOpen, href: "/br/resumidor-pdf", tier: "BUSINESS" as const, hasAI: true },
      { name: "Gerador de Perguntas", description: "Gere perguntas de estudo de qualquer PDF. Multipla escolha, resposta curta e verdadeiro/falso.", icon: HelpCircle, href: "/br/gerador-perguntas", tier: "PRO" as const, hasAI: true },
    ],
  },
  {
    name: "Business e Enterprise",
    description: "Ferramentas avancadas para profissionais, equipes, escritorios e laboratorios",
    tools: [
      { name: "Automacao", description: "Encadeie varias ferramentas PDF em um fluxo automatico.", icon: Repeat, href: "/br/automacao", tier: "BUSINESS" as const },
      { name: "Extracao de Tabelas", description: "Extraia tabelas de PDFs diretamente para Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "BUSINESS" as const },
      { name: "Comparar PDF", description: "Compare dois PDFs lado a lado e destaque diferencas.", icon: ArrowLeftRight, href: "/br/comparar-pdf", tier: "BUSINESS" as const },
      { name: "Assinatura Eletronica", description: "Adicione assinaturas eletronicas legais a PDFs.", icon: PenTool, href: "/br/assinatura-eletronica", tier: "BUSINESS" as const },
      { name: "Redacao de PDF", description: "Remova permanentemente texto sensivel de PDFs.", icon: Shield, href: "/br/redacao-pdf", tier: "BUSINESS" as const },
      { name: "Modelos de Fluxo", description: "Fluxos predefinidos para documentos juridicos, contabeis e de laboratorio.", icon: Layers, href: "/br/automacao", tier: "ENTERPRISE" as const },
      { name: "Extracao de Alto Volume", description: "Extraia ate 2.000 paginas de tabelas por mes para Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "ENTERPRISE" as const },
    ],
  },
]

export default function HomePagePt() {
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
      <HeaderBr />
      <main>
        <HeroSectionBr />

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
                    Precisa de conversoes ilimitadas ou arquivos maiores?
                  </h3>
                  <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
                    Atualize para Pro para conversoes ilimitadas, processamento em lote e todas as ferramentas — $7.99/mes. Precisa de assinatura eletronica e automacao? Experimente Business por $13.99/mes.
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
                { icon: Shield, label: "Seguranca", value: "HTTPS", description: "Transferencia criptografada com TLS" },
                { icon: Zap, label: "Velocidade", value: "Rapido", description: "Segundos para a maioria dos arquivos" },
                { icon: Globe, label: "Limite Gratis", value: "25MB", description: "200MB Pro · 1GB Business" },
                { icon: Gift, label: "Conversoes Gratis", value: "10/dia", description: "Ilimitadas com Pro" },
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
                  <div className="text-sm text-slate-400">Ferramentas PDF em um so lugar</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">3 Idiomas</div>
                  <div className="text-sm text-slate-400">Ingles, espanhol, portugues</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">4 Planos</div>
                  <div className="text-sm text-slate-400">Gratis, Pro, Business, Enterprise</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Equipes juridicas</span>
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Profissionais contabeis</span>
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Laboratorios de pesquisa</span>
                <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Estudantes em todo o mundo</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-black text-white mb-2 text-balance">
                Por Que PDF.it?
              </h2>
              <p className="text-base text-slate-400 max-w-2xl mx-auto">
                Ferramentas PDF online com funcoes Pro quando voce precisar — converta, comprima, una, divida e digitalize no seu navegador.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Gift, title: "Gratis para Comecar", description: "10 conversoes gratis por dia. Sem cartao de credito." },
                { icon: Zap, title: "Processamento Rapido", description: "Converta PDFs em segundos — sem instalar nada." },
                { icon: Crown, title: "Funcoes Pro", description: "Conversoes ilimitadas, arquivos maiores e acesso a todas as ferramentas." },
                { icon: Award, title: "Alta Qualidade", description: "Projetado para manter texto claro, layout limpo e formatacao intacta." },
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
                <h3 className="text-xl font-black text-white mb-2 text-balance">Pronto para converter seu primeiro arquivo?</h3>
                <p className="text-slate-400 text-sm mb-5 max-w-xl mx-auto leading-relaxed">
                  10 conversoes gratis por dia. Sem conta necessaria para ferramentas gratuitas. Atualize quando quiser.
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
                    Comecar Gratis
                  </a>
                  <Link
                    href="/br/precos"
                    className="font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105 text-white"
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
                  Perguntas Frequentes
                </h2>
                <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Tudo o que voce precisa saber sobre o PDF.it. Nao encontrou o que procura?{" "}
                  <a href="/br/contato" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium underline">
                    Fale conosco
                  </a>.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { q: "O PDF.it e gratis?", a: "Sim. O PDF.it oferece um plano gratuito com 10 conversoes por dia e arquivos ate 25MB. Nao precisa de conta para ferramentas gratuitas. Atualize para Pro ($7.99/mes) para conversoes ilimitadas, todas as ferramentas e arquivos ate 200MB." },
                  { q: "Preciso criar uma conta?", a: "Nao precisa de conta para usar as ferramentas gratuitas — basta enviar seu arquivo e converter. Conta e necessaria para funcoes Pro e gerenciar sua assinatura." },
                  { q: "E seguro enviar meus arquivos?", a: "Sim. Todas as transferencias usam criptografia SSL/HTTPS. Os arquivos sao processados de forma segura e removidos automaticamente quando sua sessao termina. Nao armazenamos, revisamos ou compartilhamos seus documentos." },
                  { q: "Quais formatos de arquivo sao suportados?", a: "O PDF.it suporta PDF, JPG, PNG, TXT e formatos Office (Word, Excel, PowerPoint). As ferramentas incluem converter, comprimir, unir, dividir, girar, proteger, desbloquear, marca d'agua e OCR." },
                  { q: "Qual e o tamanho maximo de arquivo?", a: "Contas gratuitas podem enviar arquivos ate 25MB. Contas Pro podem enviar ate 200MB. Contas Business podem enviar ate 1GB." },
                  { q: "O que inclui o plano Pro?", a: "Pro ($7.99/mes) inclui conversoes ilimitadas, todas as ferramentas PDF (incluindo OCR, Marca d'Agua e Office para PDF), e arquivos ate 200MB. Business ($13.99/mes) adiciona assinatura eletronica, automacao e mais." },
                  { q: "Funciona no celular?", a: "Sim. O PDF.it funciona em navegadores modernos incluindo Chrome, Firefox, Safari e Edge em computador, tablet e celular." },
                  { q: "Como posso obter ajuda?", a: "Visite nossa pagina de Contato ou escreva para suporte@pdf.it.com. Respondemos em menos de um dia util." },
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
                  <h3 className="text-lg font-bold text-white mb-2">Ainda tem perguntas?</h3>
                  <p className="text-slate-400 text-xs mb-5 max-w-xl mx-auto leading-relaxed">
                    Nossa equipe de suporte esta aqui para ajudar voce a aproveitar o PDF.it ao maximo.
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
                      Escreva para Nos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
