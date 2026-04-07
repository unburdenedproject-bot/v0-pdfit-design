import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF em Lote — Divida Varios PDFs de Uma Vez | PDF.it",
  description:
    "Divida varios PDFs em lote com PDF.it Pro. Processamento em lote para dividir multiplos documentos de uma so vez — rapido e online.",
  alternates: {
    canonical: "https://pdf.it.com/br/dividir-pdf-em-lote",
    languages: {
      en: "https://pdf.it.com/batch-split-pdf",
      es: "https://pdf.it.com/es/dividir-pdf-por-lotes",
      pt: "https://pdf.it.com/br/dividir-pdf-em-lote",
    },
  },
}

export default function DividirPdfEmLotePage() {
  const faqs = [
    { q: "Como divido varios PDFs de uma vez?", a: "Com o PDF.it Pro, envie varios arquivos PDF para a ferramenta Dividir PDF simultaneamente. Cada arquivo e processado em paralelo — dividido em paginas individuais ou intervalos personalizados — e voce pode baixar todos os resultados como um arquivo ZIP." },
    { q: "Quantos PDFs posso dividir de uma vez?", a: "Usuarios Pro podem enviar e dividir dezenas de arquivos PDF em uma unica operacao em lote. Cada arquivo pode ter ate 200MB com Pro, ou ate 1GB com Business. Nao ha limite fixo de quantidade de arquivos." },
    { q: "A divisao em lote esta disponivel no plano gratuito?", a: "Usuarios gratuitos podem dividir um arquivo por vez com ate 25MB. O processamento em lote — dividir multiplos arquivos simultaneamente — e um recurso Pro disponivel por $3.99/mes." },
    { q: "Posso extrair paginas especificas de varios PDFs em lote?", a: "Sim. Com a divisao em lote, voce pode configurar intervalos de paginas para cada arquivo. Extraia paginas especificas, divida em paginas individuais ou divida por intervalos personalizados — tudo processado simultaneamente." },
    { q: "Como baixo os resultados da divisao em lote?", a: "Apos a divisao em lote, voce pode baixar resultados individuais ou usar o botao Baixar Tudo para obter tudo em um unico arquivo ZIP. Cada arquivo dividido e claramente identificado." },
    { q: "A divisao em lote afeta a qualidade do PDF?", a: "Nao. Dividir PDFs nao altera o conteudo. Cada pagina extraida mantem sua qualidade original — texto, imagens, formatacao e fontes incorporadas permanecem inalterados." },
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
                <Split className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF em Lote</h1>
              <p className="text-xl text-slate-300 mb-8">
                Divida multiplos arquivos PDF de uma vez com o PDF.it Pro. Processe dezenas de documentos simultaneamente — extraia paginas, divida por intervalo e baixe os resultados em lote.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Processar Varios Arquivos</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Apagados Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Baixar como ZIP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Dividir PDFs um por um e tedioso quando voce tem uma pilha de documentos para processar. O recurso de divisao em lote do PDF.it Pro permite enviar varios arquivos de uma vez, configurar as opcoes de divisao para cada um e processa-los todos simultaneamente.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Divida multiplos PDFs simultaneamente</li>
              <li className="flex items-center gap-2">✓ Extraia paginas especificas ou divida em paginas individuais</li>
              <li className="flex items-center gap-2">✓ Arquivos de ate 200MB cada com Pro</li>
              <li className="flex items-center gap-2">✓ Baixe todos os resultados como ZIP</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Dividir PDF"
          outputFormat="PDF"
          processingMessage="Dividindo seus PDFs..."
          successMessage="Seus PDFs divididos estao prontos!"
          requiresPlan="pro"
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
                { title: "Divida Faturas e Extratos em Massa", desc: "Equipes financeiras frequentemente recebem faturas ou extratos de varias paginas que precisam ser separados. A divisao em lote permite processar uma pasta inteira de PDFs de uma vez." },
                { title: "Extraia Paginas de Varios Documentos", desc: "Precisa da primeira pagina de 50 contratos diferentes? A divisao em lote permite aplicar as mesmas regras de extracao a varios arquivos simultaneamente." },
                { title: "Processe Documentos Juridicos", desc: "Escritorios de advocacia podem dividir grandes pacotes de documentos em arquivamentos individuais. Envie um lote, divida por intervalos de paginas e baixe resultados organizados como ZIP." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Dividir PDFs em Lote</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie varios PDFs", desc: "Selecione todos os arquivos para dividir (Pro)" },
                { num: "2", title: "Configure a divisao", desc: "Por pagina, por intervalo ou individuais" },
                { num: "3", title: "Baixe como ZIP", desc: "Obtenha todos os resultados em um download" },
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Dividir arquivos individuais" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combinar PDFs" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduzir tamanho" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrigir orientacao" },
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

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
