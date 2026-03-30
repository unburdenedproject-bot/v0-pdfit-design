"use client"

import { useState, useEffect } from "react"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PrecosPage() {
  const [billing, setBillingState] = useState<"monthly" | "annual">("monthly")

  useEffect(() => {
    const saved = localStorage.getItem("pricing_billing")
    if (saved === "annual") setBillingState("annual")
  }, [])

  const setBilling = (value: "monthly" | "annual") => {
    setBillingState(value)
    localStorage.setItem("pricing_billing", value)
  }

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero Section — dark cinematic */}
        <section className="relative text-white py-16 overflow-hidden" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(107,124,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(20,216,196,0.10) 0%, transparent 50%), #0E0F1E" }}>
          <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg"><filter id="pricingGrainBr"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#pricingGrainBr)" /></svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Escolha Seu Plano</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Comece gratis, atualize quando precisar de mais. Arquivos excluidos imediatamente — sua privacidade vem primeiro.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-white/10 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    billing === "monthly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Mensal
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    billing === "annual"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Anual
                  <span className="bg-[#14D8C4] text-[#0E0F1E] text-xs font-bold px-2 py-0.5 rounded-full">
                    Economize 2 meses
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards — continues dark background */}
        <section className="relative py-20 overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(107,124,255,0.08) 0%, transparent 60%), #0E0F1E" }}>
          <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg"><filter id="cardsGrainBr"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#cardsGrainBr)" /></svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Gratis */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(148,163,184,0.4), rgba(148,163,184,0.2), rgba(148,163,184,0.3))" }}>
                  <div className="rounded-[15px] p-8 flex flex-col w-full" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(148,163,184,0.06) 0%, transparent 70%), rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(148,163,184,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Gratis</h2>
                      <p className="text-sm text-slate-400 mb-4">Comece com ferramentas PDF essenciais</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-slate-400">$0</span>
                        <span className="text-lg text-slate-500">/mes</span>
                      </div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      {["10 conversoes por dia", "Arquivos ate 25MB", "Ferramentas PDF basicas (comprimir, unir, dividir, girar, converter)", "Processamento de arquivo unico", "Velocidade padrao"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-slate-400 flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href="/br/painel">Comecar Gratis</Link>
                    </Button>
                  </div>
                </div>

                {/* Pro — gold */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(214,179,106,0.5), rgba(20,216,196,0.3), rgba(214,179,106,0.3), rgba(214,179,106,0.4))" }}>
                  <div className="rounded-[15px] p-8 pt-10 flex flex-col w-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(214,179,106,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>Mais Popular</div>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Pro</h2>
                      <p className="text-sm text-slate-400 mb-4">Desbloqueie todas as ferramentas sem limites diarios</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-[#E0C27A]">{billing === "monthly" ? "$7.99" : "$79.90"}</span>
                        <span className="text-lg text-slate-400">{billing === "monthly" ? "/mes" : "/ano"}</span>
                      </div>
                      <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivale a $6.66/mes cobrado anualmente</p>}</div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      <p className="text-sm text-[#6B7CFF] font-medium">Tudo no Gratis, mais:</p>
                      {["Conversoes ilimitadas", "Arquivos ate 200MB", "Todas as ferramentas PDF (OCR, QR code, PDF para Word/Excel/PowerPoint)", "Gerador de Perguntas com IA", "Processamento em lote (varios arquivos)", "Velocidade de processamento prioritaria"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-[#E0C27A] flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href={billing === "monthly" ? "/upgrade" : "/upgrade?billing=annual"}>
                        {billing === "monthly" ? "Atualizar para Pro" : "Economize 2 Meses — Anual"}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Business — sapphire */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}>
                  <div className="rounded-[15px] p-8 pt-10 flex flex-col w-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Ideal para Equipes</div>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Business</h2>
                      <p className="text-sm text-slate-400 mb-4">Ferramentas avancadas para profissionais e equipes</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-[#6B7CFF]">{billing === "monthly" ? "$13.99" : "$139.90"}</span>
                        <span className="text-lg text-slate-400">{billing === "monthly" ? "/mes" : "/ano"}</span>
                      </div>
                      <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivale a $11.66/mes cobrado anualmente</p>}</div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      <p className="text-sm text-[#6B7CFF] font-medium">Tudo no Pro, mais:</p>
                      {["Arquivos ate 1GB", "Chat com PDF (perguntas com IA)", "Resumidor de PDF com IA", "Extracao Inteligente de Dados", "Traduzir PDF (13 idiomas)", "Extracao de tabelas para Excel (200 paginas/mes)", "Comparacao de PDFs (diferenca lado a lado)", "Assinatura eletronica de documentos", "Redacao de PDFs (remocao permanente)"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-[#6B7CFF] flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href={billing === "monthly" ? "/upgrade?plan=business" : "/upgrade?plan=business&billing=annual"}>
                        {billing === "monthly" ? "Atualizar para Business" : "Economize 2 Meses — Anual"}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Enterprise — platinum */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(192,197,206,0.4))" }}>
                  <div className="rounded-[15px] p-8 pt-10 flex flex-col w-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(192,197,206,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Melhor Valor</div>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Enterprise</h2>
                      <p className="text-sm text-slate-400 mb-4">Feito para escritorios de advocacia, contadores e laboratorios</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-[#C0C5CE]">{billing === "monthly" ? "$49.99" : "$499.90"}</span>
                        <span className="text-lg text-slate-400">{billing === "monthly" ? "/mes" : "/ano"}</span>
                      </div>
                      <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivale a $41.66/mes cobrado anualmente</p>}</div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      <p className="text-sm text-[#6B7CFF] font-medium">Tudo no Business, mais:</p>
                      {["Extracao de tabelas para Excel (2.000 paginas/mes)", "Fila de processamento prioritario", "Suporte dedicado por email (resposta em 24h)", "Acesso antecipado a novos recursos", "Modelos de fluxo de trabalho personalizados"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-[#C0C5CE] flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href={billing === "monthly" ? "/upgrade?plan=enterprise" : "/upgrade?plan=enterprise&billing=annual"}>
                        {billing === "monthly" ? "Atualizar para Enterprise" : "Economize 2 Meses — Anual"}
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Compare Todas as Funcoes</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-900 font-bold text-lg">Funcao</th>
                      <th className="text-center py-4 px-4 text-slate-500 font-bold text-lg">Gratis</th>
                      <th className="text-center py-4 px-4 text-[#E0C27A] font-bold text-lg">Pro</th>
                      <th className="text-center py-4 px-4 text-[#6B7CFF] font-bold text-lg">Business</th>
                      <th className="text-center py-4 px-4 text-[#C0C5CE] font-bold text-lg">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Conversoes por dia</td>
                      <td className="py-4 px-4 text-center text-slate-700">10</td>
                      <td className="py-4 px-4 text-center text-slate-700">Ilimitado</td>
                      <td className="py-4 px-4 text-center text-slate-700">Ilimitado</td>
                      <td className="py-4 px-4 text-center text-slate-700">Ilimitado</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Tamanho maximo de arquivo</td>
                      <td className="py-4 px-4 text-center text-slate-700">25MB</td>
                      <td className="py-4 px-4 text-center text-slate-700">200MB</td>
                      <td className="py-4 px-4 text-center text-slate-700">1GB</td>
                      <td className="py-4 px-4 text-center text-slate-700">1GB</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Ferramentas PDF basicas</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">PDF para Word/Excel/PowerPoint</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Scanner OCR</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Gerador de codigos QR</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Processamento em lote</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Automacao de fluxos</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Extracao de tabelas</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-700">200 paginas/mes</td>
                      <td className="py-4 px-4 text-center text-slate-700">2.000 paginas/mes</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Comparacao de PDFs</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Assinatura eletronica</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Redacao de PDFs</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Processamento prioritario</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Suporte dedicado</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Acesso antecipado</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pronto para comecar?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Comece com 10 conversoes gratis por dia. Sem cartao de credito.
              </p>
              <Button
                className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 text-lg rounded-xl"
                asChild
              >
                <Link href="/br">Experimentar Ferramentas Gratis</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
