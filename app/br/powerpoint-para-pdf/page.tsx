import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter PowerPoint para PDF Online — PPTX para PDF | PDF.it",
  description:
    "Converta PPT para PDF em segundos com o PDF.it. Transforme seus slides PPT/PPTX em um PDF limpo e facil de compartilhar — rapido, simples e direto do navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/powerpoint-para-pdf",
    languages: {
      en: "https://pdf.it.com/powerpoint-to-pdf",
      es: "https://pdf.it.com/es/powerpoint-a-pdf",
      pt: "https://pdf.it.com/br/powerpoint-para-pdf",
    },
  },
}

export default function PowerPointParaPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero Section */}
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
                <Presentation className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PPT para PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta PPT/PPTX para PDF com o PDF.it — ideal para compartilhar slides, enviar apresentacoes por e-mail e imprimir materiais.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Slides Preservados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>PPT e PPTX Suportados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use o conversor de PPT para PDF do PDF.it para transformar um PowerPoint (PPT/PPTX) em um PDF em segundos. Exporte seus slides para um formato facil de visualizar em qualquer lugar — perfeito para e-mail, impressao e envio para portais.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Converte PowerPoint para PDF online em segundos</li>
              <li className="flex items-center gap-2">✓ Suporta arquivos .ppt e .pptx</li>
              <li className="flex items-center gap-2">✓ Cria PDFs compartilhaveis e prontos para apresentar</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — funciona direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".ppt,.pptx"
          toolName="PowerPoint to PDF"
          outputFormat="PDF"
          processingMessage="Converting your presentation..."
          successMessage="Your PDF is ready!"
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
                { title: "Converta Slides PPTX em um PDF Compartilhavel", desc: "Os PDFs abrem de forma consistente em todos os dispositivos e nao exigem PowerPoint. Converta sua apresentacao para PDF para que qualquer pessoa possa ve-la em um navegador ou leitor de PDF." },
                { title: "Ideal para Imprimir e Distribuir", desc: "Precisa de uma versao impressa dos seus slides? Converta PPT para PDF para imprimir rapidamente, copias de revisao ou entregas de aulas e trabalho." },
                { title: "Mantenha o Design dos seus Slides", desc: "O PDF.it converte os slides em paginas PDF para que seu texto, imagens e graficos sejam faceis de ler e compartilhar. Nota: animacoes e transicoes se tornam estaticas no formato PDF." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Converter PPT para PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie sua apresentacao", desc: "Arraste ou clique para escolher um arquivo" },
                { num: "2", title: "Clique em Converter", desc: "O processamento leva apenas segundos" },
                { num: "3", title: "Baixe seu PDF", desc: "Obtenha um PDF pronto para compartilhar" },
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
                { name: "Word para PDF", href: "/br/word-para-pdf", desc: "Converta documentos Word para PDF" },
                { name: "Excel para PDF", href: "/br/excel-para-pdf", desc: "Converta planilhas para PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs em um" },
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
                { q: "O PDF.it pode converter tanto PPT quanto PPTX para PDF?", a: "Sim. O PDF.it suporta ambos os formatos de arquivo .ppt e .pptx." },
                { q: "O PDF mantem o design e a disposicao dos meus slides?", a: "Na maioria dos casos, sim. Slides muito complexos, fontes incomuns ou efeitos especiais podem renderizar ligeiramente diferente dependendo do arquivo fonte." },
                { q: "As animacoes e transicoes sao transferidas para o PDF?", a: "Nao. Um PDF e um formato estatico, entao as animacoes e transicoes nao sao reproduzidas — os slides sao exportados como paginas fixas." },
                { q: "Posso converter PowerPoint para PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie sua apresentacao e baixe o PDF." },
                { q: "E seguro enviar meu arquivo PowerPoint?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso converter?", a: "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
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
            { "@type": "Question", "name": "O PDF.it pode converter tanto PPT quanto PPTX para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it suporta ambos os formatos de arquivo .ppt e .pptx." } },
            { "@type": "Question", "name": "O PDF mantem o design e a disposicao dos meus slides?", "acceptedAnswer": { "@type": "Answer", "text": "Na maioria dos casos, sim. Slides muito complexos, fontes incomuns ou efeitos especiais podem renderizar ligeiramente diferente dependendo do arquivo fonte." } },
            { "@type": "Question", "name": "As animacoes e transicoes sao transferidas para o PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. Um PDF e um formato estatico, entao as animacoes e transicoes nao sao reproduzidas — os slides sao exportados como paginas fixas." } },
            { "@type": "Question", "name": "Posso converter PowerPoint para PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis — envie sua apresentacao e baixe o PDF." } },
            { "@type": "Question", "name": "E seguro enviar meu arquivo PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." } },
            { "@type": "Question", "name": "Qual e o tamanho maximo de arquivo que posso converter?", "acceptedAnswer": { "@type": "Answer", "text": "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
