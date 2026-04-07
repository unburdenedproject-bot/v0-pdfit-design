import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF Grande em Arquivos Menores — Reduza o Tamanho Dividindo | PDF.it",
  description:
    "Divida um PDF grande em arquivos menores com PDF.it. Separe PDFs pesados em partes gerenciaveis para email, uploads e compartilhamento — rapido, gratis e no navegador.",
  alternates: {
    canonical: "/br/dividir-pdf-por-tamanho",
    languages: {
      en: "/split-pdf-by-size",
      es: "/es/dividir-pdf-por-tamanho",
      pt: "/br/dividir-pdf-por-tamanho",
    },
  },
}

export default function DividirPdfPorTamanhoPage() {
  const faqs = [
    { q: "Como divido um PDF grande em arquivos menores?", a: "Envie seu PDF para o PDF.it e insira intervalos de paginas para dividi-lo em partes iguais. Por exemplo, divida um PDF de 20 paginas em quatro arquivos de 5 paginas inserindo os intervalos 1-5, 6-10, 11-15 e 16-20. Baixe cada parte separadamente." },
    { q: "Posso dividir um PDF para caber no limite de anexo de email?", a: "Sim. A maioria dos provedores de email limita anexos a 25MB. Divida seu PDF grande em partes menores por intervalo de paginas e anexe cada parte em emails separados ou comprima cada parte com a ferramenta Comprimir para Email do PDF.it." },
    { q: "Quao pequenas podem ser as partes divididas?", a: "Cada parte pode ser tao pequena quanto uma unica pagina. O tamanho de cada parte depende do conteudo — paginas com imagens serao maiores que paginas somente com texto." },
    { q: "Dividir um PDF reduz a qualidade?", a: "Nao. A divisao apenas separa paginas em arquivos diferentes. O conteudo, imagens e formatacao permanecem exatamente iguais ao documento original." },
    { q: "Posso dividir um PDF para portais com limite de tamanho?", a: "Sim. Muitos portais tem limites de 5MB ou 10MB. Divida seu PDF em secoes menores e use as ferramentas de compressao do PDF.it em cada parte para garantir que atendam ao requisito de tamanho." },
    { q: "Posso recombinar os arquivos divididos depois?", a: "Com certeza. Use a ferramenta Unir PDF do PDF.it para combinar os arquivos divididos de volta em um unico documento sempre que precisar da versao completa." },
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF Grande em Arquivos Menores</h1>
              <p className="text-xl text-slate-300 mb-8">
                Separe PDFs pesados em arquivos menores e gerenciaveis que cabem em limites de email, portais de upload e plataformas de compartilhamento. Divida por intervalos de paginas para criar partes que funcionam em qualquer lugar — rapido, gratis e no navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Divida em Partes Menores</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Tem um PDF grande demais para enviar por email, fazer upload ou compartilhar? O PDF.it permite dividi-lo em arquivos menores selecionando intervalos de paginas. Por exemplo, divida um PDF de 20 paginas em quatro arquivos de 5 paginas — cada um pequeno o suficiente para anexar a um email ou enviar a um portal com limites rigorosos de tamanho.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Divida PDFs pesados em partes ideais para email</li>
              <li className="flex items-center gap-2">✓ Crie secoes de tamanho igual por intervalos de paginas</li>
              <li className="flex items-center gap-2">✓ Qualidade original preservada — sem recompressao</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — divida PDFs no navegador</li>
            </ul>
          </div>
        </section>

        {/* Split Interface */}
        <SplitPdfInterface />

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
                { title: "Dividir PDFs para Anexos de Email", desc: "A maioria dos provedores de email limita anexos a 25MB. Divida seu PDF em partes menores por intervalo de paginas e envie cada parte separadamente. Combine com compressao para arquivos ainda menores." },
                { title: "Atender Limites de Portais de Upload", desc: "Portais governamentais, candidaturas de emprego e envios universitarios frequentemente impoe limites rigorosos de tamanho. Divida seu PDF em secoes que caibam nesses limites." },
                { title: "Compartilhar Documentos Grandes em Partes", desc: "Precisa compartilhar um relatorio de 100 paginas por apps de mensagem? Divida-o em secoes logicas para que os destinatarios possam baixar e ler as partes que precisam." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Dividir um PDF Grande em Arquivos Menores</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF grande", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Insira os intervalos", desc: "Crie partes iguais (ex: 1-5, 6-10)" },
                { num: "3", title: "Baixe seus arquivos", desc: "Receba cada PDF menor instantaneamente" },
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
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Comprimir para Email", href: "/br/comprimir-pdf-para-email", desc: "PDFs prontos para email" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divisao geral de PDFs" },
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
