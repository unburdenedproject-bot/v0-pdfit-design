import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { RedactionInterface } from "@/components/redaction-interface"
import { Shield, Eye, Lock, Zap, PenTool, ArrowLeftRight, Layers } from "lucide-react"

export const metadata = {
  title: "Redação de PDFs Online — Remova Informações Sensíveis Permanentemente | PDF.it",
  description:
    "Redija permanentemente texto sensível, CPFs, endereços e dados confidenciais de PDFs. Editor visual de redação — desenhe caixas diretamente sobre seu documento. Função Business do PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/br/redacao-pdf",
    languages: {
      en: "https://pdf.it.com/pdf-redaction",
      es: "https://pdf.it.com/es/redaccion-pdf",
      pt: "https://pdf.it.com/br/redacao-pdf",
    },
  },
}

export default function RedacaoPdfPagePt() {
  const faqs = [
    { q: "O que é a redação de PDF?", a: "A redação de PDF é o processo de remover permanentemente informações sensíveis de um PDF. Diferente de colocar uma caixa preta sobre o texto, a redação verdadeira remove o conteúdo subjacente para que não possa ser recuperado." },
    { q: "A redação é permanente?", a: "Sim. Após aplicar as redações, o conteúdo original é removido permanentemente do PDF. As áreas redigidas aparecem como caixas pretas sólidas e o texto oculto por baixo é eliminado." },
    { q: "Quais informações devo redigir?", a: "Qualquer informação sensível ou confidencial: CPFs, endereços, números de telefone, dados bancários, números de conta, informações médicas, detalhes de processos e outras informações de identificação pessoal." },
    { q: "Qual a diferença entre redação e cobrir texto com uma caixa preta?", a: "Uma simples caixa preta pode apenas ocultar o texto visualmente enquanto deixa o conteúdo original no arquivo. A redação adequada de PDF remove os dados reais por baixo, tornando-os inacessíveis para ferramentas de busca, cópia e extração." },
    { q: "Posso redigir múltiplas páginas?", a: "Sim. Você pode navegar pelo documento página por página e adicionar redações onde houver conteúdo sensível antes de aplicar todas as redações de uma vez." },
    { q: "A Redação de PDF é grátis?", a: "A Redação de PDF está disponível como função do plano Business por $13,99/mês. Inclui o editor visual de redação junto com outras ferramentas Business como Automação de Fluxos, Extração de Tabelas, Comparar PDF e Assinatura Eletrônica." },
    { q: "Como redijo um PDF?", a: "Envie seu PDF, desenhe caixas de redação pretas sobre as áreas que deseja remover, revise todas as páginas e clique em Aplicar Redação. Uma vez aplicada, o conteúdo sensível é removido permanentemente do documento." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* 1. Hero */}
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Redação de PDFs Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Remova permanentemente informações sensíveis de documentos PDF. Desenhe caixas de redação sobre conteúdo confidencial e, ao aplicar, o texto subjacente é removido do documento para que não possa ser selecionado, copiado, pesquisado ou recuperado.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Editor Visual</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-[#14D8C4]" /><span>Remoção Permanente</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Suporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              A redação adequada de PDF remove permanentemente informações sensíveis — não apenas as oculta visualmente. A ferramenta de redação do PDF.it permite desenhar caixas sobre conteúdo confidencial e, ao aplicar, o texto subjacente é removido do documento para que não possa ser selecionado, copiado, pesquisado ou recuperado.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Remova permanentemente os dados de texto subjacentes</li>
              <li className="flex items-center gap-2">✓ Editor visual — desenhe caixas de redação nas páginas</li>
              <li className="flex items-center gap-2">✓ Proteja CPFs, endereços, registros médicos, dados legais</li>
              <li className="flex items-center gap-2">✓ Redação multi-página com aplicação em um clique</li>
            </ul>
          </div>
        </section>

        {/* 3. Interface */}
        <RedactionInterface locale="br" />

        {/* 4. Feature Blocks */}
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
                { title: "Documentos Legais e Judiciais", desc: "Redija nomes de testemunhas, números de processo e assinaturas antes de arquivar. Proteja detalhes confidenciais e cumpra requisitos de privacidade para equipes jurídicas." },
                { title: "RH e Registros de Funcionários", desc: "Remova CPFs, salários e endereços antes de compartilhar registros com terceiros. Mantenha dados de funcionários privados ao enviar a auditores ou parceiros." },
                { title: "Saúde e Finanças", desc: "Redija informações de pacientes, contas bancárias e identificações fiscais para conformidade. Proteja registros médicos, detalhes de pagamento e informações comerciais confidenciais." },
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

        {/* 5. How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Redigir um PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Desenhe caixas de redação", desc: "Clique e arraste sobre as áreas sensíveis" },
                { num: "3", title: "Aplique e baixe", desc: "O conteúdo é removido permanentemente do PDF" },
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

        {/* 6. Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Assinatura Eletrônica", href: "/br/assinatura-eletronica", desc: "Adicione assinaturas eletrônicas a qualquer documento PDF." },
                { name: "Comparar PDF", href: "/br/comparar-pdf", desc: "Compare dois PDFs lado a lado e destaque diferenças." },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione proteção com senha aos seus documentos." },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Bloqueie campos de formulário e anotações em um PDF plano." },
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

        {/* 7. FAQ */}
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
              {faqs.map((faq, i) => (
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

        {/* 8. FAQ Schema */}
        <Script id="faq-schema-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
