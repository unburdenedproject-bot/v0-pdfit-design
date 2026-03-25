import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PNG para PDF — Converta Imagens PNG para PDF Online | PDF.it",
  description:
    "Converta imagens PNG para documentos PDF online gratis. Envie uma ou varias imagens e obtenha um PDF profissional na hora. Sem software para instalar.",
  alternates: {
    canonical: "https://pdf.it.com/br/png-para-pdf",
    languages: {
      en: "https://pdf.it.com/png-to-pdf",
      es: "https://pdf.it.com/es/png-a-pdf",
      pt: "https://pdf.it.com/br/png-para-pdf",
    },
  },
}

export default function PngParaPdfPage() {
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
                <ImageIcon className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PNG para PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta imagens PNG para documentos PDF profissionais — envie uma ou varias imagens e baixe na hora. Qualidade total preservada.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Multiplas Imagens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Qualidade Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Conversao Instantanea</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Converta suas imagens PNG para PDF com o PDF.it. PNG e ideal para capturas de tela, exportacoes de design e imagens com transparencia — mas quando voce precisa compartilhar, imprimir ou enviar documentos profissionalmente, PDF e o formato padrao que funciona em qualquer lugar.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Converte uma ou varias imagens PNG para PDF</li>
              <li className="flex items-center gap-2">✓ Qualidade e resolucao completa preservada</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — funciona direto do navegador</li>
              <li className="flex items-center gap-2">✓ Areas transparentes aparecem como branco no PDF</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/png"]}
          acceptedExtensions=".png"
          formatLabel="PNG"
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
                { title: "Capturas de Tela e Exportacoes de Design", desc: "Capturas de tela e mockups de design geralmente sao salvos como PNG. Converta-os para PDF para documentacao, relatorios de bugs, apresentacoes ou portfolios." },
                { title: "Envie Documentos Profissionalmente", desc: "Muitos portais e instituicoes exigem formato PDF. Converta suas imagens PNG de certificados, formularios ou documentos escaneados em PDFs para envia-los facilmente." },
                { title: "Pronto para Imprimir a Partir de Qualquer PNG", desc: "PDF garante formato consistente em todos os dispositivos e impressoras. Converta infograficos, graficos e material web para PDF para impressao limpa e profissional." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Converter PNG para PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie suas imagens PNG", desc: "Arraste ou clique para escolher arquivos" },
                { num: "2", title: "Clique em Converter", desc: "Cada imagem se torna um PDF em segundos" },
                { num: "3", title: "Baixe seus PDFs", desc: "Obtenha individualmente ou como ZIP" },
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
                { name: "JPG para PDF", href: "/br/jpg-para-pdf", desc: "Converta imagens JPG para PDF" },
                { name: "PDF para PNG", href: "/br/pdf-para-png", desc: "Converta paginas PDF em imagens" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs em um" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
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
                { q: "Como converto um PNG para PDF?", a: "Envie sua imagem PNG, clique em Converter para PDF e baixe. Voce pode enviar varias imagens e cada uma sera convertida em seu proprio PDF." },
                { q: "Posso converter varias imagens PNG de uma vez?", a: "Sim. Selecione varios arquivos PNG e cada um sera convertido em um PDF separado. Baixe-os individualmente ou como um arquivo ZIP." },
                { q: "A transparencia e mantida?", a: "Imagens PNG com fundo transparente sao convertidas para PDF com fundo branco, pois PDF nao suporta transparencia da mesma forma que PNG." },
                { q: "A conversao reduz a qualidade?", a: "Nao. O PDF.it preserva a resolucao e qualidade total da sua imagem PNG no PDF resultante." },
                { q: "E seguro enviar minhas imagens?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo?", a: "Usuarios gratuitos podem enviar ate 25MB por imagem. Assinantes Pro e Business podem enviar ate 200MB por imagem." },
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
            { "@type": "Question", "name": "Como converto um PNG para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Envie sua imagem PNG, clique em Converter para PDF e baixe. Voce pode enviar varias imagens e cada uma sera convertida em seu proprio PDF." } },
            { "@type": "Question", "name": "Posso converter varias imagens PNG de uma vez?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Selecione varios arquivos PNG e cada um sera convertido em um PDF separado. Baixe-os individualmente ou como um arquivo ZIP." } },
            { "@type": "Question", "name": "A transparencia e mantida?", "acceptedAnswer": { "@type": "Answer", "text": "Imagens PNG com fundo transparente sao convertidas para PDF com fundo branco, pois PDF nao suporta transparencia da mesma forma que PNG." } },
            { "@type": "Question", "name": "A conversao reduz a qualidade?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it preserva a resolucao e qualidade total da sua imagem PNG no PDF resultante." } },
            { "@type": "Question", "name": "E seguro enviar minhas imagens?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." } },
            { "@type": "Question", "name": "Qual e o tamanho maximo de arquivo?", "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem enviar ate 25MB por imagem. Assinantes Pro e Business podem enviar ate 200MB por imagem." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
