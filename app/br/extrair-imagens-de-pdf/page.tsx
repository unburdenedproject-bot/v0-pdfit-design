import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Image, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Imagens de PDF Online — Baixar Fotos de PDF | PDF.it",
  description:
    "Extraia todas as imagens de arquivos PDF com o PDF.it. Retire fotos, logos e graficos de qualquer PDF — rapido, pelo navegador, sem cadastro.",
  alternates: {
    languages: {
      en: "/extract-images-from-pdf",
      es: "/es/extraer-imagenes-de-pdf",
      pt: "/br/extrair-imagens-de-pdf",
    },
  },
}

export default function ExtrairImagensDePDFPage() {
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
                <Image className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Imagens de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Retire todas as fotos, logos e graficos incorporados no seu PDF. Baixe-os como arquivo ZIP — instantaneo e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Todas as Imagens Extraidas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Removidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Precisa das fotos ou graficos de um PDF sem o texto e o layout? O extrator de imagens do PDF.it retira cada imagem incorporada — fotos, logos, graficos, diagramas — e as entrega como um arquivo ZIP que voce pode usar em qualquer lugar.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extraia todas as imagens incorporadas de qualquer PDF</li>
              <li className="flex items-center gap-2">✓ Imagens salvas no formato original (JPG, PNG)</li>
              <li className="flex items-center gap-2">✓ Perfeito para reutilizar fotos, logos e graficos</li>
              <li className="flex items-center gap-2">✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — extraia imagens no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Extract Images from PDF"
          outputFormat="ZIP"
          processingMessage="Extracting images from your PDF..."
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
                { title: "Reutilize Fotos e Graficos de PDFs", desc: "Recebeu um folheto, apresentacao ou relatorio em PDF? Extraia as imagens para reutiliza-las nos seus proprios documentos, slides ou redes sociais sem precisar de capturas de tela." },
                { title: "Extraia Logos e Recursos de Marca", desc: "Retire logos, icones e graficos de marca de guias de estilo PDF, materiais de marketing e documentos corporativos — obtenha os arquivos de imagem originais instantaneamente." },
                { title: "Diferente de PDF para JPG", desc: "PDF para JPG converte paginas inteiras em imagens. A extracao de imagens retira apenas os graficos incorporados — fotos, graficos, logos — separados do layout da pagina." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Extrair Imagens de um PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Envie ou arraste seu PDF para o PDF.it." },
                { num: "2", title: "Clique em Extrair", desc: "Todas as imagens incorporadas sao detectadas automaticamente." },
                { num: "3", title: "Baixe o ZIP", desc: "Baixe o arquivo ZIP com todas as imagens extraidas." },
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
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converte paginas em imagens" },
                { name: "PDF para PNG", href: "/br/pdf-para-png", desc: "Converte paginas em PNG" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduz o tamanho do arquivo" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extrai texto de escaneamentos" },
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
                { q: "Como extraio imagens de um PDF?", a: "Envie seu PDF ao PDF.it, clique em Extrair e baixe um arquivo ZIP com todas as imagens encontradas no seu PDF." },
                { q: "Em quais formatos as imagens sao extraidas?", a: "O PDF.it extrai as imagens no formato original — geralmente JPG ou PNG. As imagens sao baixadas como arquivo ZIP." },
                { q: "Qual e a diferenca entre extrair imagens e converter PDF para JPG?", a: "PDF para JPG converte cada pagina em uma imagem. Extrair Imagens retira apenas as fotos, logos e graficos incorporados — nao o layout completo da pagina." },
                { q: "Posso extrair imagens de um PDF escaneado?", a: "PDFs escaneados tratam toda a pagina como uma unica imagem. Voce pode extrai-la, mas sera o escaneamento completo da pagina em vez de graficos individuais." },
                { q: "Posso extrair imagens de um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, extraia e baixe do seu iPhone ou Android." },
                { q: "E gratis extrair imagens de um PDF?", a: "Sim. Contas gratuitas tem 10 extracoes por dia. Contas Pro tem extracoes ilimitadas." },
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
            { "@type": "Question", "name": "Como extraio imagens de um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it, clique em Extrair e baixe um arquivo ZIP com todas as imagens encontradas no seu PDF." } },
            { "@type": "Question", "name": "Em quais formatos as imagens sao extraidas?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it extrai as imagens no formato original — geralmente JPG ou PNG. As imagens sao baixadas como arquivo ZIP." } },
            { "@type": "Question", "name": "Qual e a diferenca entre extrair imagens e converter PDF para JPG?", "acceptedAnswer": { "@type": "Answer", "text": "PDF para JPG converte cada pagina em uma imagem. Extrair Imagens retira apenas as fotos, logos e graficos incorporados — nao o layout completo da pagina." } },
            { "@type": "Question", "name": "Posso extrair imagens de um PDF escaneado?", "acceptedAnswer": { "@type": "Answer", "text": "PDFs escaneados tratam toda a pagina como uma unica imagem. Voce pode extrai-la, mas sera o escaneamento completo da pagina em vez de graficos individuais." } },
            { "@type": "Question", "name": "Posso extrair imagens de um PDF pelo celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis — envie, extraia e baixe do seu iPhone ou Android." } },
            { "@type": "Question", "name": "E gratis extrair imagens de um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas tem 10 extracoes por dia. Contas Pro tem extracoes ilimitadas." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}
