import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "DOCX para PDF — Manter Formato (Sem Perder Formatacao) | PDF.it",
  description:
    "Aprenda como converter DOCX para PDF mantendo a formatacao original. Fontes, tabelas, imagens e layout preservados na conversao.",
  keywords: "docx para pdf manter formato, word para pdf sem perder formatacao, converter docx pdf formatacao, word pdf layout",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Por que meu Word perde formatacao ao converter para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Os motivos mais comuns sao: fontes nao incorporadas no documento, tabelas complexas que se desalinham, imagens mal ancoradas e diferencas entre o Word do computador e a ferramenta de conversao." } },
    { "@type": "Question", "name": "Como manter fontes ao converter para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Use fontes padrao do sistema (Arial, Times New Roman, Calibri) ou incorpore as fontes no documento Word antes de converter. No Word: Arquivo > Opcoes > Salvar > Incorporar fontes no arquivo." } },
    { "@type": "Question", "name": "Tabelas ficam desalinhadas no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Pode acontecer se as tabelas forem muito largas ou usarem largura automatica. Defina larguras fixas em centimetros e evite tabelas que excedam as margens da pagina." } },
    { "@type": "Question", "name": "O PDF.it preserva a formatacao?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O conversor Word para PDF do PDF.it preserva fontes, tabelas, imagens, cabecalhos, rodapes e layout. Se o documento Word estiver bem formatado, o PDF sera identico." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter DOCX para PDF Mantendo Formato",
  "description": "Converta Word para PDF sem perder formatacao em 3 passos.",
  "step": [
    { "@type": "HowToStep", "name": "Prepare o documento", "text": "Verifique fontes, tabelas e imagens no Word. Incorpore fontes se forem personalizadas." },
    { "@type": "HowToStep", "name": "Faca upload no PDF.it", "text": "Acesse a ferramenta Word para PDF e faca upload do arquivo DOCX." },
    { "@type": "HowToStep", "name": "Baixe o PDF", "text": "O PDF e gerado preservando layout, fontes e formatacao. Baixe e verifique o resultado." }
  ]
}

export default function DOCXParaPDFManterFormatoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">DOCX para PDF — Manter Formato</h1>
              <p className="text-xl text-slate-300">Converta documentos Word para PDF sem perder fontes, tabelas, imagens ou layout. Veja como garantir que o PDF fique identico ao original.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Converta DOCX para PDF agora.</p>
            </div>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Word para PDF <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que a Formatacao Se Perde?</h2>
              <p className="text-slate-600 mb-4">A conversao de Word para PDF deveria ser simples, mas varios fatores podem causar problemas de formatacao:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Fontes nao encontradas.</strong> Se o documento usa fontes que nao estao instaladas no computador ou servidor que faz a conversao, o sistema substitui por fontes padrao — alterando espacamento e layout.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Tabelas complexas.</strong> Tabelas com celulas mescladas, largura automatica ou conteudo extenso podem se desalinhar durante a conversao.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Imagens mal ancoradas.</strong> Imagens posicionadas como &quot;Em frente ao texto&quot; podem mudar de posicao. Use &quot;Alinhado com o texto&quot; para resultados mais previsiveis.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Cabecalhos e rodapes complexos.</strong> Elementos graficos em cabecalhos e rodapes podem se comportar diferente na conversao.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Manter a Formatacao (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Use fontes padrao ou incorpore", desc: "Prefira Arial, Times New Roman, Calibri ou Georgia. Se precisar de fontes personalizadas, incorpore-as: Arquivo > Opcoes > Salvar > Incorporar fontes no arquivo." },
                  { title: "Defina larguras fixas nas tabelas", desc: "Evite 'Ajustar automaticamente ao conteudo'. Defina largura fixa em centimetros para cada coluna e certifique-se de que a tabela cabe nas margens." },
                  { title: "Ancore imagens ao texto", desc: "Selecione a imagem, va em Layout e escolha 'Alinhado com o texto' ou 'Parte superior e inferior'. Evite 'Em frente ao texto' e 'Atras do texto'." },
                  { title: "Faca upload no PDF.it", desc: "Acesse Word para PDF do PDF.it e faca upload do DOCX. O conversor processa o documento preservando formatacao, fontes e layout." },
                  { title: "Verifique o resultado", desc: "Abra o PDF e compare com o original no Word. Verifique fontes, tabelas, imagens e numeracao de paginas." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas Extras</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Salve Como PDF no Word Primeiro</h3><p className="text-slate-600">No Word, use Arquivo &gt; Salvar como &gt; PDF para comparar. Se o resultado for diferente do PDF.it, o problema esta no documento, nao na ferramenta.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Evite Macros e Campos Dinamicos</h3><p className="text-slate-600">Campos como {`{PAGE}`}, {`{DATE}`} e macros podem nao ser convertidos corretamente. Converta campos em texto estatico antes: Ctrl+A, depois Ctrl+Shift+F9.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Comprima Depois</h3><p className="text-slate-600">Se o PDF ficou grande (especialmente com muitas imagens), use <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reduzir o tamanho sem perder qualidade visual.</p></div>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Sem Perder Formato</h2>
            <p className="text-slate-300 mb-6">DOCX para PDF com fontes, tabelas e layout preservados.</p>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Word para PDF</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Converter Curriculo Word para PDF", href: "/br/aprender/converter-curriculo-word-para-pdf" },
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
                { q: "Por que meu Word perde formatacao ao converter?", a: "Fontes nao incorporadas, tabelas complexas, imagens mal ancoradas e diferencas entre ferramentas de conversao sao as causas mais comuns." },
                { q: "Como manter fontes ao converter?", a: "Use fontes padrao (Arial, Calibri) ou incorpore no Word: Arquivo > Opcoes > Salvar > Incorporar fontes." },
                { q: "Tabelas ficam desalinhadas?", a: "Pode acontecer com tabelas de largura automatica. Defina larguras fixas em centimetros." },
                { q: "O PDF.it preserva a formatacao?", a: "Sim. Se o documento Word estiver bem formatado, o PDF sera identico ao original." },
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
