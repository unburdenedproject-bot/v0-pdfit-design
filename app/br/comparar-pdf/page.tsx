import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { PdfCompareInterface } from "@/components/pdf-compare-interface"
import { ArrowLeftRight, Eye, Layers } from "lucide-react"

export const metadata = {
  title: "Comparar PDFs Online — Visualizador de Diferenças Lado a Lado | PDF.it",
  description:
    "Compare dois documentos PDF lado a lado e veja exatamente o que mudou. Destaque visual de diferenças em vermelho. Vistas sobrepostas e lado a lado. Função Business do PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/br/comparar-pdf",
    languages: {
      en: "https://pdf.it.com/pdf-compare",
      es: "https://pdf.it.com/es/comparar-pdf",
      pt: "https://pdf.it.com/br/comparar-pdf",
    },
  },
}

export default function PdfComparePagePt() {
  const faqs = [
    { q: "Como funciona o Comparar PDF?", a: "Envie dois PDFs — um original e uma versão modificada. A ferramenta renderiza cada página e as compara pixel por pixel. As diferenças são destacadas em vermelho para que você possa ver exatamente o que mudou entre os dois documentos." },
    { q: "Quais modos de visualização estão disponíveis?", a: "Três modos de visualização: Lado a Lado mostra ambos os documentos um ao lado do outro, Sobreposição os mescla com transparência, e Diferenças destaca as áreas alteradas em vermelho contra um fundo atenuado." },
    { q: "Posso comparar PDFs com número diferente de páginas?", a: "Sim. Se um PDF tem mais páginas que o outro, a ferramenta compara as páginas que existem em ambos os documentos e marca as páginas extras como 100% diferentes." },
    { q: "O Comparar PDF detecta mudanças de texto?", a: "O Comparar PDF realiza uma comparação visual pixel por pixel. Detecta qualquer mudança visível na página incluindo edições de texto, elementos movidos, conteúdo adicionado ou removido, mudanças de imagem e diferenças de formatação." },
    { q: "O Comparar PDF é grátis?", a: "Comparar PDF está disponível como função do plano Business por $13,99/mês. Inclui a ferramenta de comparação junto com outras ferramentas Business como Automação de Fluxos, Redação de PDF, Assinatura Eletrônica e Extração de Tabelas." },
    { q: "Posso baixar um relatório de comparação?", a: "Sim. Clique no botão Relatório para baixar um resumo de texto mostrando a porcentagem de diferença para cada página, categorizado como Idêntico, Mudanças menores, Mudanças moderadas ou Mudanças maiores." },
  ]

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
                <ArrowLeftRight className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comparar PDFs Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Envie dois documentos PDF e veja exatamente o que mudou entre eles. Compare contratos, propostas, relatórios e qualquer revisão de documento com um visualizador visual lado a lado que destaca cada diferença.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-[#14D8C4]" /><span>Lado a Lado</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-[#14D8C4]" /><span>Vista Sobreposta</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Destaque de Diferenças</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Quando você recebe um contrato revisado, um relatório atualizado ou uma proposta editada, precisa saber exatamente o que mudou. Comparar PDF envia dois documentos, renderiza cada página e os compara pixel por pixel — destacando cada diferença em vermelho para que você possa revisar mudanças com confiança.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Comparação visual pixel por pixel</li>
              <li className="flex items-center gap-2">✓ Vistas lado a lado, sobreposta e de diferenças</li>
              <li className="flex items-center gap-2">✓ Relatório de comparação para download</li>
              <li className="flex items-center gap-2">✓ Funciona em qualquer dispositivo — pelo navegador</li>
            </ul>
          </div>
        </section>

        {/* Interface */}
        <PdfCompareInterface locale="br" />

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
                { title: "Revisões de Contratos e Legais", desc: "Compare contratos originais e revisados para detectar mudanças em termos, preços, datas e linguagem jurídica antes de assinar." },
                { title: "Atualizações de Relatórios e Dados", desc: "Compare relatórios financeiros, atualizações de projetos ou documentos de conformidade para ver quais dados, gráficos ou seções mudaram entre rascunhos." },
                { title: "Revisão de Design e Layout", desc: "Compare provas de PDF, folhetos ou materiais de marketing para verificar mudanças de design, fontes, imagens e diferenças visuais." },
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
                { num: "1", title: "Envie dois PDFs", desc: "Versão original e modificada" },
                { num: "2", title: "Escolha o modo de vista", desc: "Lado a lado, sobreposição ou diferenças" },
                { num: "3", title: "Revise e baixe", desc: "Veja as diferenças e obtenha um relatório" },
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
                { name: "Redação PDF", href: "/br/redacao-pdf", desc: "Remova permanentemente texto sensível de PDFs." },
                { name: "Assinatura Eletrônica", href: "/br/assinatura-eletronica", desc: "Adicione assinaturas eletrônicas a PDFs." },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione proteção com senha aos seus documentos." },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine vários PDFs em um só arquivo." },
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

        {/* FAQ Schema */}
        <Script id="faq-schema-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a },
          })),
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
