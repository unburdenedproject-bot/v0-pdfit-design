import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { EsignInterface } from "@/components/esign-interface"
import { PenTool, Eye, Zap, Shield, ArrowLeftRight, Lock, Layers } from "lucide-react"

export const metadata = {
  title: "Assinatura Eletrônica de PDFs Online — Adicione Assinaturas a Documentos PDF | PDF.it",
  description:
    "Assine documentos PDF online com o PDF.it. Desenhe, digite ou envie sua assinatura, posicione-a em qualquer página e baixe seu PDF assinado instantaneamente. Sem imprimir ou escanear.",
  alternates: {
    canonical: "https://pdf.it.com/br/assinatura-eletronica",
    languages: {
      en: "https://pdf.it.com/esign",
      es: "https://pdf.it.com/es/firma-electronica",
      pt: "https://pdf.it.com/br/assinatura-eletronica",
    },
  },
}

export default function AssinaturaEletronicaPagePt() {
  const faqs = [
    { q: "O que é a Assinatura Eletrônica?", a: "A Assinatura Eletrônica permite adicionar assinaturas eletrônicas a documentos PDF. Você pode desenhar sua assinatura, digitar seu nome em uma fonte de assinatura, ou enviar uma imagem da sua assinatura. Depois posicione-a em qualquer parte do documento e baixe o PDF assinado." },
    { q: "A assinatura fica incorporada no PDF?", a: "Sim. A assinatura é incorporada permanentemente no PDF como parte do documento. Aparece na página e é incluída quando o PDF é impresso ou compartilhado." },
    { q: "Posso assinar múltiplas páginas?", a: "Sim. Você pode navegar por todas as páginas do seu PDF e colocar assinaturas em qualquer página. Também pode colocar múltiplas assinaturas em uma única página." },
    { q: "Quais opções de assinatura estão disponíveis?", a: "Você pode desenhar sua assinatura à mão livre usando o mouse ou trackpad, digitar seu nome e escolher entre diferentes fontes de assinatura, ou enviar uma imagem da sua assinatura manuscrita." },
    { q: "A Assinatura Eletrônica é grátis?", a: "A Assinatura Eletrônica está disponível como função do plano Business por $13,99/mês. Inclui o editor de assinaturas junto com outras ferramentas Business como Automação de Fluxos, Redação de PDF, Comparar PDF e Extração de Tabelas." },
    { q: "Como adiciono uma assinatura a um PDF?", a: "Envie seu PDF, crie sua assinatura desenhando, digitando ou enviando uma imagem. Clique em Posicionar no PDF e depois no local onde deseja a assinatura. Quando terminar, clique em Aplicar assinaturas para incorporá-las e baixar o PDF assinado." },
    { q: "Posso remover uma assinatura posicionada antes de aplicar?", a: "Sim. Antes de aplicar as assinaturas, você pode remover qualquer assinatura posicionada pela lista lateral. Depois de aplicar e baixar, as assinaturas ficam incorporadas permanentemente." },
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
                <PenTool className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Assinatura Eletrônica de PDFs Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Adicione assinaturas eletrônicas a qualquer documento PDF. Desenhe sua assinatura, digite seu nome em uma fonte de assinatura, ou envie uma imagem da sua assinatura manuscrita. Posicione-a exatamente onde precisa e baixe o PDF assinado instantaneamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><PenTool className="h-4 w-4 text-[#14D8C4]" /><span>Desenhe / Digite / Envie</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Posicionamento Visual</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Suporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Assinar documentos não requer mais imprimir, assinar à mão, escanear e enviar pelo correio. Com a Assinatura Eletrônica do PDF.it, adicione sua assinatura diretamente a qualquer PDF em segundos — desenhe à mão livre, digite seu nome ou envie uma imagem da sua assinatura. Posicione-a em qualquer página e baixe o PDF assinado instantaneamente.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Desenhe, digite ou envie sua assinatura</li>
              <li className="flex items-center gap-2">✓ Posicione em qualquer página com o editor visual</li>
              <li className="flex items-center gap-2">✓ Assinaturas incorporadas permanentemente no PDF</li>
              <li className="flex items-center gap-2">✓ Sem necessidade de imprimir ou escanear</li>
            </ul>
          </div>
        </section>

        {/* 3. Interface */}
        <EsignInterface locale="br" />

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
                { title: "Contratos e Acordos", desc: "Assine contratos comerciais, acordos de freelancer e contratos com fornecedores sem atrasos. Posicione sua assinatura na linha designada e devolva o PDF assinado instantaneamente." },
                { title: "RH e Emprego", desc: "Assine cartas de oferta, acordos de confidencialidade, formulários fiscais e documentos de integração. Novos funcionários e gestores podem assinar e devolver documentos rapidamente." },
                { title: "Imóveis, Escola e Governo", desc: "Assine contratos de aluguel, autorizações, formulários de matrícula e solicitações governamentais sem visitar um escritório. Complete e devolva formulários assinados de qualquer lugar." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Assinar um PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Crie sua assinatura", desc: "Desenhe, digite ou envie sua assinatura" },
                { num: "3", title: "Posicione e baixe", desc: "Clique onde deseja posicioná-la e aplique" },
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
                { name: "Redação PDF", href: "/br/redacao-pdf", desc: "Remova permanentemente texto sensível de PDFs." },
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
