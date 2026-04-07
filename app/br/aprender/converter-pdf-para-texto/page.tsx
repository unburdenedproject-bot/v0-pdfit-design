import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileTextIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter PDF para Texto Online (Extrair Texto de PDF) | PDF.it",
  description:
    "Aprenda como converter PDF para texto online e extrair todo o conteúdo de texto de qualquer PDF. Guia passo a passo — grátis, sem software.",
  keywords: "converter pdf para texto, pdf para txt, extrair texto de pdf, copiar texto de pdf, pdf para texto online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como extraio texto de um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para a ferramenta PDF para Texto do PDF.it e clique em Converter. O texto será extraído automaticamente e disponibilizado para download como arquivo TXT ou para copiar direto." } },
    { "@type": "Question", "name": "Posso extrair texto de PDF digitalizado?", "acceptedAnswer": { "@type": "Answer", "text": "PDFs digitalizados são imagens, não texto. Para extrair texto deles, use a ferramenta Scanner OCR do PDF.it que reconhece texto em imagens usando inteligência artificial." } },
    { "@type": "Question", "name": "O formato do texto é mantido?", "acceptedAnswer": { "@type": "Answer", "text": "O texto extraído mantém o conteúdo mas perde a formatação visual (negrito, itálico, fontes). É texto puro. Para manter a formatação, considere converter para Word em vez de TXT." } },
    { "@type": "Question", "name": "Posso converter PDF para texto no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador móvel. Envie o PDF, converta e baixe o texto diretamente no seu celular." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF para Texto",
  "description": "Extraia todo o texto de um PDF em 3 passos simples.",
  "step": [
    { "@type": "HowToStep", "name": "Envie seu PDF", "text": "Acesse a ferramenta PDF para Texto do PDF.it e envie seu arquivo PDF." },
    { "@type": "HowToStep", "name": "Clique em Converter", "text": "O PDF.it extrai automaticamente todo o texto do PDF." },
    { "@type": "HowToStep", "name": "Baixe ou copie o texto", "text": "Baixe como arquivo TXT ou copie o texto diretamente para usar onde precisar." }
  ]
}

export default function ConverterPdfParaTextoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para Texto</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Converter PDF para Texto Online (Extrair Texto de PDF)</h1>
              <p className="text-xl text-slate-300">
                Precisa extrair o texto de um PDF? Veja como converter PDF para texto puro em segundos — funciona com qualquer PDF que tenha texto selecionável.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileTextIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para extrair texto? Vá direto para a ferramenta.</p>
            </div>
            <Link href="/br/pdf-para-texto" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para Texto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter PDF para Texto?</h2>
              <p className="text-slate-600 mb-4">Extrair texto de um PDF é útil em muitas situações:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Copiar conteúdo.</strong> Extrair parágrafos, dados ou citações de um PDF para usar em outros documentos.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Editar texto.</strong> PDFs não são fáceis de editar. Extrair o texto permite editá-lo em qualquer editor de texto.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Análise de dados.</strong> Extrair texto de relatórios e documentos para processar em planilhas ou sistemas.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Acessibilidade.</strong> Texto puro pode ser lido por leitores de tela e ferramentas de acessibilidade.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Converter PDF para Texto (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Envie seu PDF", desc: "Acesse a ferramenta PDF para Texto e envie seu arquivo. Arquivos até 25MB são grátis — usuários Pro podem enviar até 200MB." },
                  { title: "Clique em Converter", desc: "O PDF.it extrai automaticamente todo o texto do PDF. O processo leva apenas alguns segundos." },
                  { title: "Baixe ou copie o texto", desc: "Baixe o resultado como arquivo TXT ou copie o texto diretamente. Use em qualquer editor de texto, email ou documento." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF com Texto vs PDF Digitalizado</h2>
              <p className="text-slate-600 mb-4">Existem dois tipos de PDF e é importante entender a diferença:</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">PDF com Texto Selecionável</h3>
                  <p className="text-slate-600 text-sm">Criado no Word, Excel ou outro programa. Você consegue selecionar e copiar texto. A ferramenta PDF para Texto funciona perfeitamente com este tipo.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">PDF Digitalizado (Imagem)</h3>
                  <p className="text-slate-600 text-sm">Criado por scanner ou foto. O texto é uma imagem — não é possível selecionar. Para este tipo, use <Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link> que reconhece texto em imagens.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhores Resultados</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verifique se o Texto é Selecionável</h3>
                  <p className="text-slate-600">Abra o PDF e tente selecionar texto com o mouse. Se conseguir, a ferramenta PDF para Texto vai funcionar. Se não conseguir, use o <Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Para Manter Formatação, Use Word</h3>
                  <p className="text-slate-600">Se precisa manter negrito, itálico e layout, considere converter para <Link href="/br/pdf-para-word" className="text-[#14D8C4] hover:underline">Word</Link> em vez de texto puro.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDFs com Muitas Colunas</h3>
                  <p className="text-slate-600">PDFs com layout em colunas podem gerar texto fora de ordem. Revise o resultado e reorganize se necessário.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Extrair Texto do Seu PDF?</h2>
            <p className="text-slate-300 mb-6">Envie seu PDF e obtenha texto puro em segundos — grátis, sem cadastro.</p>
            <Link href="/br/pdf-para-texto" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <FileTextIcon className="h-5 w-5" /> Converter PDF para Texto
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Converter PDF Digitalizado para Texto (OCR)", href: "/br/aprender/converter-pdf-digitalizado-para-texto" },
                { title: "Copiar Texto de PDF para Notas", href: "/br/aprender/copiar-texto-de-pdf-para-notas" },
                { title: "Extrair Texto de PDF no Celular", href: "/br/aprender/extrair-texto-de-pdf-no-celular" },
                { title: "PDF com Texto Ilegível — Solução", href: "/br/aprender/pdf-texto-ilegivel-solucao" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como extraio texto de um PDF?", a: "Envie seu PDF para a ferramenta PDF para Texto do PDF.it e clique em Converter. O texto será extraído automaticamente." },
                { q: "Posso extrair texto de PDF digitalizado?", a: "PDFs digitalizados são imagens. Para extrair texto deles, use a ferramenta Scanner OCR do PDF.it que reconhece texto em imagens." },
                { q: "O formato do texto é mantido?", a: "O texto extraído mantém o conteúdo mas perde a formatação visual. Para manter a formatação, considere converter para Word." },
                { q: "Posso converter PDF para texto no celular?", a: "Sim. O PDF.it funciona em qualquer navegador móvel. Envie o PDF, converta e baixe o texto diretamente no seu celular." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
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
