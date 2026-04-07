import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Organizar Paginas PDF Online — Classificar, Reorganizar e Gerenciar PDFs | PDF.it",
  description:
    "Organize suas paginas PDF com o PDF.it. Divida, una, gire e reordene paginas para criar documentos perfeitamente organizados — rapido, gratis e pelo navegador.",
  alternates: {
    languages: {
      en: "/organize-pdf",
      es: "/es/organizar-pdf",
      pt: "/br/organizar-pdf",
    },
  },
}

export default function OrganizarPDFPage() {
  const faqs = [
    { q: "Quais ferramentas o PDF.it oferece para organizar paginas PDF?", a: "O PDF.it oferece quatro ferramentas principais para organizar PDFs: Dividir PDF para extrair paginas ou secoes, Unir PDF para combinar varios arquivos em um, Girar PDF para corrigir a orientacao das paginas e Reordenar Paginas para reorganizar a sequencia." },
    { q: "Como reorganizo paginas em um PDF?", a: "Use a ferramenta Reordenar Paginas para reorganizar suas paginas PDF. Voce tambem pode dividir seu PDF em paginas individuais com Dividir PDF e depois uni-las novamente em qualquer ordem usando Unir PDF." },
    { q: "Posso remover paginas especificas de um PDF?", a: "Sim. Use Dividir PDF para extrair apenas as paginas que deseja manter, deixando de fora as que deseja remover. Depois, una as paginas restantes em um documento limpo." },
    { q: "Posso organizar paginas PDF no celular?", a: "Sim. Todas as ferramentas do PDF.it funcionam em navegadores moveis — divida, una, gire e reordene suas paginas PDF no iPhone ou Android sem instalar nenhum aplicativo." },
    { q: "Organizar paginas PDF e gratis?", a: "Sim. As ferramentas Dividir, Unir e Girar do PDF.it sao gratuitas e sem necessidade de cadastro. Usuarios gratuitos podem processar arquivos individuais de ate 25MB. Usuarios Pro tem processamento em lote e limites de arquivo maiores." },
    { q: "Posso combinar etapas de organizacao em um fluxo de trabalho?", a: "Sim. Voce pode encadear varias ferramentas — por exemplo, dividir um PDF para remover paginas indesejadas, girar paginas tortas e depois unir tudo em um unico documento organizado." },
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
                <Layers className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Organizar Paginas PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Classifique, reorganize e gerencie suas paginas PDF com o PDF.it. Divida, una, gire e reordene paginas para criar documentos perfeitamente organizados — tudo no seu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Multiplas Ferramentas</span></div>
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
              PDFs desorganizados desperdicam tempo e parecem pouco profissionais. Se voce precisa remover paginas extras, corrigir escaneamentos tortos, reordenar capitulos ou combinar arquivos de diferentes fontes, o PDF.it oferece as ferramentas para organizar seu documento — sem instalar nenhum software.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Divida PDFs para extrair ou remover paginas</li>
              <li className="flex items-center gap-2">✓ Una varios PDFs em um documento organizado</li>
              <li className="flex items-center gap-2">✓ Gire paginas para corrigir a orientacao</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
            </ul>
          </div>
        </section>

        {/* Tool Links */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md text-center">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/br/dividir-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors">
                Dividir PDF
              </Link>
              <Link href="/br/unir-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors">
                Unir PDF
              </Link>
              <Link href="/br/girar-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors">
                Girar PDF
              </Link>
              <Link href="/br/reordenar-paginas-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors">
                Reordenar Paginas
              </Link>
            </div>
          </div>
        </section>

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
                { title: "Organize Documentos Escaneados", desc: "Documentos escaneados frequentemente chegam com paginas fora de ordem, de cabeca para baixo ou com paginas em branco misturadas. Use Dividir, Girar e Unir para remontar tudo na ordem correta." },
                { title: "Prepare Envios e Candidaturas", desc: "Candidaturas de emprego, envios para universidades e registros oficiais exigem documentos em uma ordem especifica. Organize seu historico, curriculo e documentos de apoio em um unico PDF ordenado." },
                { title: "Limpe Arquivos Unidos", desc: "Apos unir varios PDFs, voce pode ficar com paginas duplicadas, paginas em branco ou secoes na ordem errada. Use Dividir e Reordenar para limpar o documento final." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Organizar Paginas PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Escolha a ferramenta certa", desc: "Dividir, Unir, Girar ou Reordenar Paginas" },
                { num: "2", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher" },
                { num: "3", title: "Baixe seu PDF", desc: "Receba seu documento organizado instantaneamente" },
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Extraia ou remova paginas" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine arquivos em um" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Reordenar Paginas", href: "/br/reordenar-paginas-pdf", desc: "Reorganize a ordem" },
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
