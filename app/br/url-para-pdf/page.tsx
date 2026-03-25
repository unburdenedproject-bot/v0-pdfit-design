import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { UrlPdfInterface } from "@/components/url-pdf-interface"
import { Globe, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter URL para PDF Online — Salve Qualquer Pagina Web | PDF.it",
  description:
    "Converta qualquer pagina web em um PDF de alta qualidade. Digite uma URL e baixe um PDF perfeitamente formatado. Tamanho, orientacao e margens personalizaveis. Funcao Pro do PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/br/url-para-pdf",
    languages: {
      en: "https://pdf.it.com/url-to-pdf",
      es: "https://pdf.it.com/es/url-a-pdf",
      pt: "https://pdf.it.com/br/url-para-pdf",
    },
  },
}

export default function UrlParaPdfPageBr() {
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
                <Globe className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter URL para PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta qualquer pagina web em um PDF de alta qualidade. Cole a URL, personalize o layout e baixe um PDF perfeitamente formatado em segundos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Qualquer Pagina Publica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Layout Personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Download Instantaneo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Paginas web podem ser alteradas ou removidas a qualquer momento. Converter para PDF garante que voce tenha uma copia permanente e formatada do conteudo, acessivel mesmo sem internet. Perfeito para archivar artigos, guardar recibos ou compartilhar conteudo offline.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Converta qualquer pagina web publica para PDF</li>
              <li className="flex items-center gap-2">✓ Escolha tamanho de pagina, orientacao e margens</li>
              <li className="flex items-center gap-2">✓ Preserva texto, imagens e layout da pagina</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — funciona direto do navegador</li>
              <li className="flex items-center gap-2">✓ Perfeito para leitura offline, impressao e arquivo</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <UrlPdfInterface />

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
                { title: "Salve Artigos e Pesquisas", desc: "Capture artigos, documentacao e publicacoes de blog como PDFs. Construa uma biblioteca permanente que voce pode consultar mesmo quando a pagina original desaparecer." },
                { title: "Arquive Paginas Web Permanentemente", desc: "Preserve paginas importantes antes que mudem ou sejam removidas. Crie registros com data do conteudo web para conformidade, evidencia ou referencia pessoal." },
                { title: "Compartilhe Conteudo Offline", desc: "Converta paginas web para PDF e compartilhe com colegas ou clientes que nao tenham acesso a internet. PDFs funcionam em qualquer dispositivo sem navegador." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Converter URL para PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Digite a URL", desc: "Cole o endereco da pagina web" },
                { num: "2", title: "Escolha as opcoes", desc: "Tamanho de pagina, orientacao e margens" },
                { num: "3", title: "Baixe seu PDF", desc: "Obtenha um documento perfeitamente formatado" },
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
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta paginas PDF em imagens" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs em um" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extraia texto de escaneamentos" },
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
                { q: "Como converter uma URL para PDF?", a: "Cole a URL da pagina web no PDF.it, escolha o tamanho de pagina e orientacao desejados, e clique em Converter. O PDF sera gerado em segundos." },
                { q: "Posso personalizar o layout do PDF?", a: "Sim. Voce pode escolher o tamanho da pagina (A4, Letter, Legal), orientacao (retrato ou paisagem) e ajustar as margens." },
                { q: "Quais tipos de paginas web posso converter?", a: "Voce pode converter qualquer pagina web publica — artigos, blogs, documentacao, portfolios e mais. Paginas protegidas por login nao podem ser acessadas." },
                { q: "Meus dados ficam seguros?", a: "Sim. Todas as transferencias sao criptografadas com SSL e os arquivos gerados sao removidos apos sua sessao. Nao armazenamos nem compartilhamos seus documentos." },
                { q: "URL para PDF e gratuito?", a: "URL para PDF e uma funcao Pro do PDF.it, disponivel no plano Pro a $7,99/mes. O plano Pro inclui conversoes ilimitadas e todas as ferramentas avancadas." },
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
            { "@type": "Question", "name": "Como converter uma URL para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Cole a URL da pagina web no PDF.it, escolha o tamanho de pagina e orientacao desejados, e clique em Converter. O PDF sera gerado em segundos." } },
            { "@type": "Question", "name": "Posso personalizar o layout do PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode escolher o tamanho da pagina (A4, Letter, Legal), orientacao (retrato ou paisagem) e ajustar as margens." } },
            { "@type": "Question", "name": "Quais tipos de paginas web posso converter?", "acceptedAnswer": { "@type": "Answer", "text": "Voce pode converter qualquer pagina web publica — artigos, blogs, documentacao, portfolios e mais. Paginas protegidas por login nao podem ser acessadas." } },
            { "@type": "Question", "name": "Meus dados ficam seguros?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e os arquivos gerados sao removidos apos sua sessao. Nao armazenamos nem compartilhamos seus documentos." } },
            { "@type": "Question", "name": "URL para PDF e gratuito?", "acceptedAnswer": { "@type": "Answer", "text": "URL para PDF e uma funcao Pro do PDF.it, disponivel no plano Pro a $7,99/mes. O plano Pro inclui conversoes ilimitadas e todas as ferramentas avancadas." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
