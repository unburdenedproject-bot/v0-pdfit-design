import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import type { Metadata } from "next"
import { Shield, FileOutput, Lock, Zap, GraduationCap, Building, Briefcase, Scale, BookOpen, Home } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sobre o PDF.it — Ferramentas PDF Online com Privacidade para Equipes e Individuos",
  description:
    "O PDF.it e uma plataforma PDF no navegador. Converta, comprima, assine, redija e automatize PDFs — os arquivos sao excluidos imediatamente apos o download. Planos Gratis, Pro, Business e Enterprise disponiveis.",
  keywords: ["PDF para profissionais", "PDF para advogados", "PDF para contadores", "PDF para estudantes", "PDF para freelancers", "PDF para professores", "PDF para imobiliarias", "PDF para recursos humanos", "PDF para saude", "PDF para pequenas empresas", "alternativa ao iLovePDF", "alternativa ao SmallPDF", "alternativa ao Adobe Acrobat", "ferramentas PDF seguras", "PDF sem cadastro", "PDF com privacidade"],
  openGraph: {
    title: "Sobre o PDF.it — Ferramentas PDF Online com Privacidade para Equipes e Individuos",
    description:
      "O PDF.it e uma plataforma PDF no navegador. Converta, comprima, assine, redija e automatize PDFs — os arquivos sao excluidos imediatamente apos o download.",
    url: "https://pdf.it.com/br/sobre",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1200, height: 630, alt: "PDF.it — Sobre" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre o PDF.it — Ferramentas PDF Online com Privacidade para Equipes e Individuos",
    description:
      "O PDF.it e uma plataforma PDF no navegador. Converta, comprima, assine, redija e automatize PDFs — os arquivos sao excluidos imediatamente apos o download.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/br/sobre",
    languages: {
      en: "https://pdf.it.com/about",
      es: "https://pdf.it.com/es/acerca",
      pt: "https://pdf.it.com/br/sobre",
    },
  },
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* ── 1. Hero ── */}
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
                <Shield className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Sobre o PDF.it — Feito para Profissionais, Escolhido por Profissionais</h1>
              <p className="text-xl text-slate-300">
                O PDF.it e uma plataforma PDF no navegador criada para pessoas, equipes e organizacoes. Converta, comprima, assine, redija e automatize — seus arquivos sao processados e excluidos imediatamente. Nunca armazenamos seus documentos.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Missao + Privacidade ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              O PDF.it oferece um conjunto completo de ferramentas PDF que funcionam diretamente no navegador. Converta documentos, comprima arquivos, adicione assinaturas eletronicas, redija dados sensiveis, extraia tabelas e automatize fluxos recorrentes — tudo sem instalar software. A privacidade esta integrada em cada etapa: seus arquivos sao processados em tempo real e excluidos assim que voce baixa o resultado.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Arquivos excluidos imediatamente apos o download</li>
              <li className="flex items-center gap-2">✓ Transferencias criptografadas com SSL</li>
              <li className="flex items-center gap-2">✓ Sem armazenamento de arquivos — nunca</li>
              <li className="flex items-center gap-2">✓ Sem necessidade de conta para ferramentas gratuitas</li>
            </ul>
          </div>
        </section>

        {/* ── 3. O que voce pode fazer ── */}
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-8 text-center">O que voce pode fazer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Converter e comprimir",
                  desc: "Converta PDFs para Word, Excel, JPG, PNG, TXT e muito mais. Comprima arquivos para email e limites de upload. Una, divida, gire e achate — tudo no seu navegador.",
                },
                {
                  title: "Assinar, proteger e redigir",
                  desc: "Adicione assinaturas eletronicas, proteja documentos com senha e redija informacoes sensiveis de forma permanente. Adicione marcas d'agua aos seus PDFs para branding e controle documental.",
                },
                {
                  title: "Automatizar e extrair",
                  desc: "Encadeie multiplas ferramentas PDF em fluxos automatizados. Extraia tabelas de PDFs para planilhas Excel. Execute OCR para tornar documentos digitalizados pesquisaveis.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
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
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Planos ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Planos que crescem com voce</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Comece gratis e faca upgrade apenas quando crescer seu volume documental, o tamanho dos arquivos ou a complexidade dos seus fluxos.
            </p>

            <div
              className="rounded-2xl p-8"
              style={{
                background: `
                  radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
                  #0E0F1E
                `,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Gratis */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(148,163,184,0.4), rgba(148,163,184,0.2), rgba(148,163,184,0.3))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(148,163,184,0.06) 0%, transparent 70%), rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(148,163,184,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-1">Gratis</h3>
                    <p className="text-slate-400 font-semibold text-sm mb-4">$0/mes</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>10 conversoes por dia</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Arquivos ate 25MB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Ferramentas PDF basicas (comprimir, unir, dividir, girar, converter)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Processamento de um unico arquivo</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Velocidade padrao</span></li>
                    </ul>
                  </div>
                </div>

                {/* Pro — dourado */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(214,179,106,0.5), rgba(20,216,196,0.3), rgba(214,179,106,0.3), rgba(214,179,106,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(214,179,106,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>Mais Popular</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Pro</h3>
                    <p className="text-[#E0C27A] font-semibold text-sm mb-4">$3.99/mes</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Tudo no Gratis, mais:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Conversoes ilimitadas</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Arquivos ate 200MB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Todas as ferramentas PDF (OCR, codigo QR, PDF para Word/Excel/PowerPoint)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Processamento em lote (multiplos arquivos de uma vez)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Velocidade de processamento prioritaria</span></li>
                    </ul>
                  </div>
                </div>

                {/* Business — safira */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Ideal para Equipes</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Business</h3>
                    <p className="text-[#6B7CFF] font-semibold text-sm mb-4">$13.99/mes</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Tudo no Pro, mais:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Arquivos ate 1GB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Extracao de tabelas para Excel (200 paginas/mes)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Comparacao de PDF (diferenca lado a lado)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Assinatura eletronica de documentos</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Redacao de PDF (remocao permanente)</span></li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise — platina */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(192,197,206,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(192,197,206,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Melhor Valor</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Enterprise</h3>
                    <p className="text-[#C0C5CE] font-semibold text-sm mb-4">$49.99/mes</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Tudo no Business, mais:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Extracao de tabelas para Excel (2.000 paginas/mes)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Automacao de fluxos de trabalho</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Modelos de fluxo personalizados</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Fila de processamento prioritario</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Suporte por email dedicado (resposta em 24h)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Feito para ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Projetado para fluxos de trabalho reais</h2>

            <div
              className="rounded-2xl p-8"
              style={{
                background: `
                  radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
                  #0E0F1E
                `,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: GraduationCap,
                    title: "PDF para Estudantes e Pesquisadores",
                    desc: "Converta trabalhos, extraia tabelas, comprima documentos grandes e execute OCR em anotacoes digitalizadas. A ferramenta PDF ideal para estudantes de todos os niveis.",
                  },
                  {
                    icon: Building,
                    title: "PDF para Profissionais e Equipes",
                    desc: "Processe faturas, contratos e pacotes de onboarding. Use assinatura eletronica, redacao e automacao de fluxos — feito para profissionais que lidam com documentos diariamente.",
                  },
                  {
                    icon: Briefcase,
                    title: "PDF para Freelancers e Candidatos",
                    desc: "Prepare entregaveis, crie curriculos, adicione marcas d'agua e proteja arquivos com senha. Escolhido por freelancers que precisam de ferramentas PDF rapidas e confiaveis.",
                  },
                  {
                    icon: Scale,
                    title: "PDF para Advogados e Contadores",
                    desc: "Redija dados sensiveis, extraia tabelas de compliance e automatize fluxos documentais. Projetado para advogados, contadores e equipes que exigem precisao.",
                  },
                  {
                    icon: BookOpen,
                    title: "PDF para Professores e Educadores",
                    desc: "Converta planos de aula, comprima materiais para email, una documentos de curso e torne digitalizacoes pesquisaveis com OCR. Uma alternativa melhor ao iLovePDF e SmallPDF para educadores.",
                  },
                  {
                    icon: Home,
                    title: "PDF para RH e Imobiliarias",
                    desc: "Processe documentos de onboarding, assine contratos online sem cadastro, processe contratos de locacao em lote e extraia dados de formularios. Ferramentas PDF seguras sem armazenamento — feitas para pequenas empresas em recursos humanos, imobiliarias e saude.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
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
                        <card.icon className="h-6 w-6 text-[#14D8C4]" />
                        <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Compromisso com a privacidade ── */}
        <section
          className="py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 100%, rgba(10,74,92,0.35) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 70% 0%, rgba(30,111,217,0.20) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 90% 80%, rgba(232,129,58,0.10) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="privacyGrainBr"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#privacyGrainBr)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
            <div
              className="rounded-xl p-[1px]"
              style={{
                background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
              }}
            >
              <div
                className="rounded-[11px] p-8 md:p-10 text-center"
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
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                    boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                  }}
                >
                  <Shield className="h-8 w-8 text-[#14D8C4]" />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">Seus documentos sao da sua conta</h2>
                <p className="text-slate-400 leading-relaxed">
                  O PDF.it processa seus arquivos em tempo real e os exclui assim que voce baixa o resultado. Nunca armazenamos, lemos, indexamos ou compartilhamos seus documentos. Todas as transferencias sao criptografadas com SSL. Sua privacidade nao e um recurso — e a base sobre a qual construimos esta plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Comece a converter gratis</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Sem necessidade de conta para ferramentas gratuitas. Faca upgrade quando precisar de acesso ilimitado, arquivos maiores ou fluxos avancados.
            </p>
            <Link href="/br#tools">
              <button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                Comecar gratis
              </button>
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
