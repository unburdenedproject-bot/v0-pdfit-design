import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Achatar PDF Online — Bloquear Formulários e Anotações | PDF.it",
  description:
    "Achate arquivos PDF com o PDF.it. Bloqueie campos de formulário, anotações e camadas em um PDF plano e não editável — rápido, pelo navegador, sem cadastro.",
  alternates: {
    languages: {
      en: "/flatten-pdf",
      es: "/es/aplanar-pdf",
      pt: "/br/achatar-pdf",
    },
  },
}

export default function AchatarPDFPage() {
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
                <Layers className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Achatar PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Bloqueie campos de formulário, anotações e camadas em um PDF plano e não editável. Perfeito para envios, arquivamento e compartilhamento de documentos finais.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Achatamento Instantâneo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Arquivos Removidos Após a Sessão</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Sem Cadastro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Achatar um PDF mescla todos os campos de formulário, anotações, comentários e camadas interativas na própria página. O resultado é um PDF limpo e estático que é exibido de forma consistente em todos os dispositivos e visualizadores — sem dados faltando nem campos em branco.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Bloqueie campos de formulário preenchidos para que não possam ser editados</li>
              <li className="flex items-center gap-2">✓ Mescle anotações e comentários na página</li>
              <li className="flex items-center gap-2">✓ Corrija campos em branco que aparecem em alguns visualizadores PDF</li>
              <li className="flex items-center gap-2">✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Flatten PDF"
          outputFormat="PDF"
          processingMessage="Flattening your PDF..."
          successMessage="Your flattened PDF is ready!"
        />

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
                { title: "Envie Formulários Sem Campos em Branco", desc: "Preencheu um formulário PDF mas o destinatário vê campos vazios? Achatar bloqueia tudo no lugar para que seja exibido corretamente em qualquer lugar." },
                { title: "Finalize Documentos Assinados", desc: "Após assinar um PDF, achate-o para evitar mais edições. Assinaturas, dados de formulário e anotações se tornam partes permanentes do documento." },
                { title: "Arquive PDFs a Longo Prazo", desc: "PDFs achatados são ideais para arquivamento. O conteúdo fica bloqueado e será exibido de forma consistente ao longo dos anos em qualquer visualizador." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Achatar um PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Clique em Achatar", desc: "O processo leva apenas alguns segundos" },
                { num: "3", title: "Baixe seu PDF", desc: "Receba seu arquivo achatado na hora" },
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
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adiciona senha" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduz o tamanho do arquivo" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combina vários PDFs" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converte páginas em imagens" },
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
                { q: "O que significa achatar um PDF?", a: "Achatar um PDF mescla todos os elementos interativos — campos de formulário, anotações, comentários e camadas — no conteúdo da página. O resultado é um PDF estático e não editável que aparece igual em qualquer lugar." },
                { q: "Quando devo achatar um PDF?", a: "Achate um PDF antes de enviar formulários, compartilhar documentos assinados, arquivar registros, ou quando o destinatário vê campos em branco. Achatar garante que o conteúdo fique bloqueado e visível." },
                { q: "Achatar vai mudar a aparência do meu PDF?", a: "Não. A aparência visual permanece igual. Achatar apenas remove a capacidade de editar campos de formulário, anotações e elementos interativos." },
                { q: "Posso achatar um PDF com campos de formulário preenchidos?", a: "Sim. Todos os dados inseridos são preservados e se tornam parte do conteúdo da página. Os campos simplesmente deixam de ser editáveis." },
                { q: "Posso achatar um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie, achate e baixe do seu iPhone ou Android." },
                { q: "É grátis achatar um PDF?", a: "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm uso ilimitado." },
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

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "O que significa achatar um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Achatar um PDF mescla todos os elementos interativos — campos de formulário, anotações, comentários e camadas — no conteúdo da página. O resultado é um PDF estático e não editável que aparece igual em qualquer lugar." } },
            { "@type": "Question", "name": "Quando devo achatar um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Achate um PDF antes de enviar formulários, compartilhar documentos assinados, arquivar registros, ou quando o destinatário vê campos em branco. Achatar garante que o conteúdo fique bloqueado e visível." } },
            { "@type": "Question", "name": "Achatar vai mudar a aparência do meu PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Não. A aparência visual permanece igual. Achatar apenas remove a capacidade de editar campos de formulário, anotações e elementos interativos." } },
            { "@type": "Question", "name": "Posso achatar um PDF com campos de formulário preenchidos?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os dados inseridos são preservados e se tornam parte do conteúdo da página. Os campos simplesmente deixam de ser editáveis." } },
            { "@type": "Question", "name": "Posso achatar um PDF pelo celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie, achate e baixe do seu iPhone ou Android." } },
            { "@type": "Question", "name": "É grátis achatar um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm uso ilimitado." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
