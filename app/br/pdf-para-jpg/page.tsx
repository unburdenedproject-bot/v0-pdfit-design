import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter PDF para JPG Online — Gratis e Sem Cadastro | PDF.it",
  description:
    "Converta PDF para JPG em segundos com o PDF.it. Exporte cada pagina como imagem JPEG de alta qualidade e baixe na hora — sem instalar nada.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-jpg",
    languages: {
      en: "https://pdf.it.com/pdf-to-jpg",
      es: "https://pdf.it.com/es/pdf-a-jpg",
      pt: "https://pdf.it.com/br/pdf-para-jpg",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso converter um PDF de varias paginas para JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it converte cada pagina do PDF em uma imagem JPG individual que voce pode baixar separadamente.",
      },
    },
    {
      "@type": "Question",
      name: "Converter PDF para JPG reduz a qualidade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A qualidade depende do PDF original. PDFs de alta resolucao produzem JPGs nitidos; escaneamentos de baixa resolucao podem ficar mais suaves.",
      },
    },
    {
      "@type": "Question",
      name: "Qual e a diferenca entre JPG e PNG para paginas de PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG geralmente cria arquivos menores e e ideal para compartilhar. PNG e melhor para texto muito nitido e graficos. Experimente nossa ferramenta PDF para PNG se precisar de saida sem perda.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona no iPhone e Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it funciona em navegadores moveis — envie seu PDF, converta e baixe suas imagens JPG.",
      },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Os arquivos sao transferidos por HTTPS e eliminados automaticamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "O PDF.it adiciona marcas d'agua?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. O PDF.it nao adiciona marcas d'agua aos seus arquivos JPG convertidos.",
      },
    },
  ],
}

export default function PDFparaJPGPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                <ImageIcon className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para JPG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta um PDF em imagens JPG nitidas em segundos com o PDF.it — rapido, simples e direto do seu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Alta Resolucao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Download em ZIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use o conversor de PDF para JPG do PDF.it para exportar as paginas do seu PDF como imagens JPEG de alta qualidade. Envie seu arquivo, converta em segundos e baixe cada pagina como imagem individual — perfeito para compartilhar, apresentacoes, pre-visualizacoes e e-mails.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Converte paginas completas de PDF em imagens JPG</li>
              <li className="flex items-center gap-2">✓ Resultado nitido e legivel para texto, graficos e diagramas</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — funciona direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to JPG"
          outputFormat="JPG"
          processingMessage="Converting your PDF to images..."
          successMessage="Your images are ready!"
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
                { title: "Converta Paginas de PDF em Imagens JPG", desc: "Transforme cada pagina do seu PDF em uma imagem JPG. Cada pagina se torna um arquivo independente que voce pode usar em apresentacoes, e-mails, documentos ou redes sociais." },
                { title: "Mantem os Layouts Limpos e Claros", desc: "O PDF.it preserva o layout da pagina para que seu conteudo fique legivel e profissional apos a conversao." },
                { title: "Download Instantaneo", desc: "Baixe seus JPGs imediatamente apos a conversao. Todas as paginas sao empacotadas em um arquivo ZIP para download com um unico clique." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para JPG</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Clique em Converter", desc: "O processamento leva apenas alguns segundos" },
                { num: "3", title: "Baixe seus JPGs", desc: "Todas as paginas em um unico arquivo ZIP" },
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
                { name: "PDF para PNG", href: "/br/pdf-para-png", desc: "Imagens sem perda de qualidade" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho antes de converter" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Converta apenas as paginas necessarias" },
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
            <h2 className="text-2xl font-black text-white mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Posso converter um PDF de varias paginas para JPG?", a: "Sim. O PDF.it converte cada pagina do PDF em uma imagem JPG individual que voce pode baixar separadamente." },
                { q: "Converter PDF para JPG reduz a qualidade?", a: "A qualidade depende do PDF original. PDFs de alta resolucao produzem JPGs nitidos; escaneamentos de baixa resolucao podem ficar mais suaves." },
                { q: "Qual e a diferenca entre JPG e PNG para paginas de PDF?", a: "JPG geralmente cria arquivos menores e e ideal para compartilhar. PNG e melhor para texto muito nitido e graficos. Experimente nossa ferramenta PDF para PNG se precisar de saida sem perda." },
                { q: "Funciona no iPhone e Android?", a: "Sim. O PDF.it funciona em navegadores moveis — envie seu PDF, converta e baixe suas imagens JPG." },
                { q: "E seguro enviar meu PDF?", a: "Sim. Os arquivos sao transferidos por HTTPS e eliminados automaticamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "O PDF.it adiciona marcas d'agua?", a: "Nao. O PDF.it nao adiciona marcas d'agua aos seus arquivos JPG convertidos." },
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
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
