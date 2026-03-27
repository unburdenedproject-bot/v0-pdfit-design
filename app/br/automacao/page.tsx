import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { WorkflowInterface } from "@/components/workflow-interface"
import { Repeat, Zap, Shield, Layers } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Automação de Fluxos PDF — Encadeie Ferramentas em Um Clique | PDF.it",
  description:
    "Automatize fluxos de trabalho PDF de múltiplas etapas com o PDF.it. Achate, comprima, adicione marca d'água, gire e proteja — tudo em um clique. Escolha fluxos pré-definidos ou crie fluxos personalizados de até 5 etapas.",
  alternates: {
    canonical: "https://pdf.it.com/br/automacao",
    languages: {
      en: "https://pdf.it.com/workflow-automation",
      es: "https://pdf.it.com/es/automatizacion",
      pt: "https://pdf.it.com/br/automacao",
    },
  },
}

export default function AutomacaoFluxosPagePt() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
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
                <Repeat className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Automação de Fluxos</h1>
              <p className="text-xl text-slate-300 mb-8">
                Encadeie múltiplas ferramentas PDF em um fluxo de trabalho automatizado. Achate, comprima, adicione marca d'água e proteja — tudo em um único clique.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Até 5 Etapas</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-[#14D8C4]" /><span>Fluxos Pré-definidos + Personalizados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Removidos Após a Sessão</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Pare de usar ferramentas PDF uma de cada vez. A Automação de Fluxos permite encadear múltiplas operações — achatar formulários, comprimir, adicionar marca d'água, girar e proteger com senha — em um único processo automatizado. Escolha entre fluxos pré-definidos ou crie o seu próprio com até 5 etapas.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Encadeie até 5 ferramentas PDF em um fluxo</li>
              <li className="flex items-center gap-2">✓ Opções de fluxos pré-definidos e personalizados</li>
              <li className="flex items-center gap-2">✓ Achate, comprima, marca d'água, gire, proteja</li>
              <li className="flex items-center gap-2">✓ Arquivos removidos após sua sessão</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <WorkflowInterface locale="br" />

        {/* Feature Blocks */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Fluxos Pré-definidos", desc: "Combinações comuns prontas para usar: achatar + comprimir, achatar + comprimir + marca d'água, e mais." },
                { title: "Fluxos Personalizados", desc: "Crie o seu próprio selecionando e ordenando até 5 etapas, cada uma configurável individualmente." },
                { title: "Processamento em Um Clique", desc: "Envie seu PDF, selecione seu fluxo e baixe o resultado — todas as etapas são executadas automaticamente." },
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

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Funciona</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Escolha seu fluxo", desc: "Selecione um pré-definido ou crie um personalizado" },
                { num: "2", title: "Envie seu PDF", desc: "Arraste e solte seu arquivo" },
                { num: "3", title: "Baixe o resultado", desc: "Todas as etapas são executadas automaticamente" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Extração de Tabelas", href: "/br/extracao-de-tabelas", desc: "Extraia tabelas de PDFs" },
                { name: "Comparar PDF", href: "/br/comparar-pdf", desc: "Compare dois arquivos PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Achate campos de formulário" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
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
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "O que é a Automação de Fluxos?", a: "Permite encadear várias ferramentas PDF em um único processo automatizado. Por exemplo, achatar formulários, comprimir o arquivo e adicionar uma marca d'água — tudo em um único clique em vez de três etapas separadas." },
                { q: "Quais ferramentas posso encadear?", a: "Você pode combinar: Achatar PDF, Comprimir PDF, Marca d'Água PDF, Girar PDF e Proteger com Senha. Pode usar até 5 etapas por fluxo de trabalho." },
                { q: "A Automação de Fluxos é grátis?", a: "A Automação de Fluxos está disponível no plano Business ($13,99/mês) e superiores. Inclui fluxos ilimitados junto com todas as outras ferramentas Business." },
                { q: "Posso criar fluxos personalizados?", a: "Sim. Você pode escolher entre fluxos pré-definidos ou criar seu próprio fluxo personalizado selecionando e ordenando até 5 etapas. Cada etapa pode ser configurada individualmente." },
                { q: "Quantas etapas posso encadear?", a: "Até 5 etapas por fluxo de trabalho. Cada etapa é executada em sequência no seu PDF." },
                { q: "Meu PDF é armazenado após o processamento?", a: "Não. Todos os arquivos são excluídos imediatamente após sua sessão. Nunca armazenamos seus documentos." },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <Script id="faq-schema-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "O que é a Automação de Fluxos?", "acceptedAnswer": { "@type": "Answer", "text": "A Automação de Fluxos permite encadear várias ferramentas PDF em um único processo automatizado. Por exemplo, achatar formulários, comprimir o arquivo e adicionar uma marca d'água — tudo em um único clique em vez de três etapas separadas." } },
            { "@type": "Question", "name": "Quais ferramentas posso encadear?", "acceptedAnswer": { "@type": "Answer", "text": "Você pode combinar: Achatar PDF, Comprimir PDF, Marca d'Água PDF, Girar PDF e Proteger com Senha. Pode usar até 5 etapas por fluxo de trabalho." } },
            { "@type": "Question", "name": "A Automação de Fluxos é grátis?", "acceptedAnswer": { "@type": "Answer", "text": "A Automação de Fluxos está disponível no plano Business ($13,99/mês) e superiores. Inclui fluxos ilimitados junto com todas as outras ferramentas Business." } },
            { "@type": "Question", "name": "Posso criar fluxos personalizados?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Você pode escolher entre fluxos pré-definidos ou criar seu próprio fluxo personalizado selecionando e ordenando até 5 etapas. Cada etapa pode ser configurada individualmente." } },
            { "@type": "Question", "name": "Quantas etapas posso encadear?", "acceptedAnswer": { "@type": "Answer", "text": "Até 5 etapas por fluxo de trabalho. Cada etapa é executada em sequência no seu PDF." } },
            { "@type": "Question", "name": "Meu PDF é armazenado após o processamento?", "acceptedAnswer": { "@type": "Answer", "text": "Não. Todos os arquivos são excluídos imediatamente após sua sessão. Nunca armazenamos seus documentos." } },
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
