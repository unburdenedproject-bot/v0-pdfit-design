import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileText, Zap, Settings, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Editar Metadados de PDF Online — Altere Titulo, Autor e Propriedades | PDF.it",
  description:
    "Edite metadados de PDF com PDF.it. Altere titulo, autor, assunto e outras propriedades do documento antes de compartilhar ou publicar — rapido e no navegador.",
  alternates: {
    canonical: "/br/editar-metadados-pdf",
    languages: {
      en: "/edit-pdf-metadata",
      es: "/es/editar-metadatos-pdf",
      pt: "/br/editar-metadados-pdf",
    },
  },
}

export default function EditarMetadadosPdfPage() {
  const faqs = [
    { q: "O que esta incluido nos metadados de um PDF?", a: "Os metadados do PDF incluem titulo do documento, nome do autor, assunto, palavras-chave, aplicativo criador, produtor, data de criacao e data de modificacao. Alguns PDFs tambem contem campos personalizados adicionados por sistemas de gestao documental corporativos." },
    { q: "Por que eu editaria os metadados de um PDF?", a: "Editar metadados permite definir um titulo profissional, corrigir o nome do autor, adicionar palavras-chave para buscas ou atualizar propriedades antes de publicar ou compartilhar. E especialmente importante para SEO quando PDFs sao indexados por motores de busca." },
    { q: "Os metadados do PDF afetam o SEO?", a: "Sim. Motores de busca podem ler metadados de PDFs. Um titulo bem escrito e palavras-chave relevantes ajudam seu PDF a ter melhor posicionamento nos resultados de busca. O Google frequentemente usa o campo de titulo do PDF como titulo da pagina nos resultados." },
    { q: "Posso alterar o nome do autor em um PDF?", a: "Sim. Ferramentas de edicao de metadados permitem alterar o campo do autor para qualquer nome ou remove-lo completamente. Isso e util ao remarcar documentos ou preparar arquivos para distribuicao publica." },
    { q: "Qual a diferenca entre editar metadados e editar conteudo do PDF?", a: "A edicao de metadados altera apenas as propriedades do documento (titulo, autor, datas, palavras-chave) — nao altera o texto visivel, imagens ou layout das paginas do PDF." },
    { q: "O PDF.it suporta edicao de metadados?", a: "A edicao direta de metadados estara disponivel em breve. Enquanto isso, voce pode usar Achatar PDF para limpar campos de formulario e anotacoes, ou Proteger PDF para garantir as propriedades do documento antes de compartilhar." },
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
                <FileText className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Editar Metadados de PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Altere o titulo, autor, assunto e outras propriedades dos seus PDFs antes de compartilhar ou publicar.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Atualizar Propriedades</span></div>
                <div className="flex items-center gap-2"><Settings className="h-4 w-4 text-[#14D8C4]" /><span>Documentos Profissionais</span></div>
                <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#14D8C4]" /><span>Melhor SEO</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Os metadados do PDF controlam como seu documento e identificado por sistemas operacionais, motores de busca e ferramentas de gestao documental. Editar essas propriedades permite definir um titulo claro, corrigir o autor, adicionar palavras-chave relevantes e garantir que seus PDFs tenham aparencia profissional ao serem compartilhados ou publicados online.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Defina um titulo profissional para SEO</li>
              <li className="flex items-center gap-2">✓ Atualize ou remova o autor e nome da empresa</li>
              <li className="flex items-center gap-2">✓ Adicione palavras-chave para melhorar a buscabilidade</li>
              <li className="flex items-center gap-2">✓ Prepare documentos para publicacao e distribuicao</li>
            </ul>
          </div>
        </section>

        {/* Tool Links */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md text-center">
            <p className="text-slate-600 mb-6">A edicao direta de metadados estara disponivel em breve. Enquanto isso, use estas ferramentas para gerenciar as propriedades do seu PDF:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/br/achatar-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
                Achatar PDF
              </Link>
              <Link href="/br/proteger-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
                Proteger PDF
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
                { title: "Por Que os Metadados Importam", desc: "Quando alguem abre seu PDF, o titulo dos metadados e o que aparece — nao o nome do arquivo. Motores de busca usam titulo e palavras-chave para classificar seu PDF. Metadados ausentes fazem documentos parecerem amadores." },
                { title: "Quais Propriedades Podem Ser Alteradas?", desc: "Os campos mais editados sao Titulo (exibido em abas de navegador e resultados de busca), Autor, Assunto e Palavras-chave. Voce tambem pode modificar datas de criacao e modificacao." },
                { title: "Preparacao Profissional de Documentos", desc: "Antes de distribuir relatorios, whitepapers ou propostas, revise os metadados. Garanta que o titulo corresponda ao cabecalho, que o autor esteja correto e que propriedades irrelevantes sejam removidas." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Editar Metadados de PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Abra seu PDF", desc: "Use uma ferramenta de edicao de metadados ou editor de PDF" },
                { num: "2", title: "Atualize as propriedades", desc: "Altere Titulo, Autor, Assunto e Palavras-chave" },
                { num: "3", title: "Salve e compartilhe", desc: "Baixe com metadados atualizados" },
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
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Remova camadas e campos" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Proteja PDFs com senha" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "Redacao de PDF", href: "/br/redacao-de-pdf", desc: "Redacionar conteudo (Business)" },
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
