import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Upload, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF Pronto para Upload — Otimizar PDF para Portais | PDF.it",
  description:
    "Prepare seu PDF para upload com um clique. O PDF.it achata formulários, comprime o tamanho e corrige erros comuns — funciona com qualquer portal, sem cadastro.",
  alternates: {
    languages: {
      en: "/upload-ready-pdf",
      es: "/es/pdf-listo-para-subir",
      pt: "/br/pdf-pronto-para-upload",
    },
  },
}

export default function PDFProntoParaUploadPage() {
  const faqs = [
    { q: "O que faz o PDF Pronto para Upload?", a: "Automaticamente achata campos de formulário e anotações, comprime o tamanho do arquivo e otimiza a estrutura do PDF — tudo em um clique. O resultado é um PDF limpo que funciona com qualquer portal de upload." },
    { q: "Por que meu PDF é rejeitado quando faço upload?", a: "As razões mais comuns são: arquivo muito grande, campos de formulário interativos que não são exibidos corretamente, funções PDF não compatíveis ou estrutura corrompida. PDF Pronto para Upload corrige tudo isso automaticamente." },
    { q: "Com quais portais funciona?", a: "Com qualquer portal — formulários do governo, candidaturas universitárias, sites de emprego, solicitações de visto, sinistros de seguro, processos judiciais e mais. O resultado é um PDF universalmente compatível." },
    { q: "Os dados do meu formulário são preservados?", a: "Sim. Todos os seus dados inseridos, assinaturas e anotações são mesclados permanentemente no PDF. Nada é perdido — simplesmente se torna não editável." },
    { q: "É diferente de apenas comprimir um PDF?", a: "Sim. A compressão apenas reduz o tamanho do arquivo. PDF Pronto para Upload também achata formulários, mescla anotações e otimiza a estrutura do PDF para prevenir rejeições causadas por elementos interativos." },
    { q: "É grátis?", a: "Sim. Contas gratuitas têm 10 conversões por dia com otimização automática. Contas Pro têm conversões ilimitadas com controles avançados como tamanho alvo e nível de compressão." },
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
                <Upload className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Pronto para Upload</h1>
              <p className="text-xl text-slate-300 mb-8">
                Um clique para corrigir e otimizar seu PDF para qualquer portal de upload. Achata formulários, comprime o tamanho e corrige erros comuns de rejeição — automaticamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Otimização em Um Clique</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#14D8C4]" /><span>Funciona com Qualquer Portal</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Cansado de portais rejeitarem seu PDF? A ferramenta PDF Pronto para Upload do PDF.it corrige os problemas mais comuns em um clique — arquivos muito grandes, campos de formulário em branco, anotações incompatíveis e funções PDF não suportadas. O resultado é um PDF limpo e universalmente compatível que funciona em qualquer lugar.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Achata campos de formulário para que os dados sejam exibidos corretamente</li>
              <li className="flex items-center gap-2">✓ Comprime o tamanho do arquivo para limites de upload</li>
              <li className="flex items-center gap-2">✓ Funciona com portais do governo, universidades e emprego</li>
              <li className="flex items-center gap-2">✓ Sem instalação — otimize PDFs no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Upload Ready PDF"
          outputFormat="PDF"
          processingMessage="Preparando seu PDF para upload..."
          successMessage="Seu PDF pronto para upload está preparado!"
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
                { title: "Achatar, Comprimir e Otimizar", desc: "Campos de formulário e anotações são mesclados na página, o tamanho é reduzido e a estrutura do PDF é limpa — tudo em um clique." },
                { title: "Portais Governamentais e Vistos", desc: "Portais do governo são rigorosos com formato e tamanho do PDF. PDF Pronto para Upload garante que seus formulários estejam achatados, comprimidos e compatíveis." },
                { title: "Emprego, Universidade e Processos Legais", desc: "Portais de RH, sistemas universitários e processos judiciais frequentemente rejeitam PDFs com campos interativos ou arquivos grandes. Um clique resolve." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Preparar um PDF para Upload</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Clique em Pronto para Upload", desc: "O achatamento e a compressão são aplicados automaticamente" },
                { num: "3", title: "Baixe seu PDF", desc: "Obtenha seu arquivo otimizado instantaneamente" },
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
                { name: "Comprimir para 5MB", href: "/br/comprimir-pdf-para-5mb", desc: "Cumpra limites de 5MB" },
                { name: "Comprimir para 2MB", href: "/br/comprimir-pdf-para-2mb", desc: "Cumpra limites de 2MB" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Apenas achatar formulários" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Apenas reduzir tamanho" },
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
