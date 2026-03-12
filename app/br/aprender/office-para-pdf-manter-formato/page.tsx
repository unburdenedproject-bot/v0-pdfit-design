import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Office para PDF — Como Manter o Formato Original | OmnisPDF",
  description: "Aprenda a converter documentos do Office para PDF sem perder formatacao. Dicas para preservar fontes, tabelas, graficos e layout em Word, Excel e PowerPoint.",
  keywords: "office para pdf manter formato, converter sem perder formatacao, pdf formatacao original, word para pdf layout, excel para pdf tabelas",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que a formatacao muda quando converto para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Geralmente isso acontece por fontes nao incorporadas, margens diferentes ou configuracoes de pagina incompativeis. Fontes personalizadas que nao estao disponiveis no servidor de conversao sao substituidas por fontes padrao, alterando espacamento e layout." } },
  { "@type": "Question", "name": "Como garanto que as fontes fiquem corretas no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Incorpore as fontes no documento antes de converter. No Word/PowerPoint: Arquivo > Opcoes > Salvar > Incorporar fontes no arquivo. Alternativamente, use fontes padrao como Arial, Calibri ou Times New Roman." } },
  { "@type": "Question", "name": "As tabelas do Excel mantem a formatacao no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, na maioria dos casos. Certifique-se de que a area de impressao esta definida corretamente e que as colunas cabem na pagina. Use Visualizacao de Impressao no Excel antes de converter para verificar." } },
  { "@type": "Question", "name": "Como manter graficos e imagens em alta qualidade?", "acceptedAnswer": { "@type": "Answer", "text": "No Office, va em Arquivo > Opcoes > Avancado e desmarque 'Descartar dados de edicao' e configure a resolucao padrao para 'Alta fidelidade'. Isso preserva imagens em resolucao maxima." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como manter a formatacao ao converter Office para PDF", "description": "Garanta que seu documento do Office fique identico no PDF seguindo estas etapas.", "step": [
  { "@type": "HowToStep", "name": "Incorpore fontes e verifique layout", "text": "Incorpore fontes no documento e verifique margens, quebras de pagina e tamanho de papel." },
  { "@type": "HowToStep", "name": "Use visualizacao de impressao", "text": "Antes de converter, use Ctrl+P para ver como o documento ficara no PDF." },
  { "@type": "HowToStep", "name": "Converta com OmnisPDF", "text": "Envie o documento preparado para o OmnisPDF e baixe o PDF com formatacao preservada." }
] }

export default function OfficeParaPdfManterFormatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Office para PDF — Manter Formato</h1>
          <p className="text-xl text-slate-300">Converteu um documento do Office para PDF e a formatacao ficou diferente? Aprenda como preservar fontes, tabelas, graficos e layout na conversao.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter Office para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que a formatacao muda na conversao?</h2>
            <p className="text-slate-600 mb-4">Existem varias razoes pelas quais um documento do Office pode ficar diferente apos a conversao para PDF:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Fontes nao incorporadas.</strong> Se o documento usa fontes que nao estao disponiveis no servidor, elas sao substituidas. Veja nosso guia sobre <Link href="/br/aprender/pptx-para-pdf-fontes-faltando" className="text-orange-600 hover:underline">fontes faltando</Link>.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Margens e tamanho de pagina.</strong> Documentos criados para papel Carta (Letter) podem ficar cortados se o conversor assume A4, e vice-versa.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Tabelas muito largas.</strong> Tabelas do Excel que excedem a largura da pagina sao cortadas ou reduzidas no PDF.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Elementos flutuantes.</strong> Imagens e caixas de texto com posicionamento "livre" no Word podem se deslocar na conversao.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Word (DOCX)</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Incorpore fontes:</strong> Arquivo &gt; Opcoes &gt; Salvar &gt; Incorporar fontes no arquivo.</li>
              <li>&#10003; <strong>Defina margens explicitas:</strong> Layout &gt; Margens &gt; escolha um preset ou configure manualmente.</li>
              <li>&#10003; <strong>Use posicao "Em linha" para imagens:</strong> Imagens com layout "Em linha com texto" mantem posicao melhor que "Flutuante".</li>
              <li>&#10003; <strong>Verifique quebras de pagina:</strong> Use Ctrl+Shift+8 para ver marcas de formatacao e certifique-se de que quebras estao onde devem.</li>
              <li>&#10003; <strong>Visualize antes:</strong> Ctrl+P mostra exatamente como o PDF ficara.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Excel (XLSX)</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Defina a area de impressao:</strong> Selecione as celulas desejadas &gt; Layout de Pagina &gt; Area de Impressao &gt; Definir.</li>
              <li>&#10003; <strong>Ajuste colunas a pagina:</strong> Em Layout de Pagina &gt; Largura, selecione "1 pagina" para evitar cortes.</li>
              <li>&#10003; <strong>Escolha orientacao paisagem</strong> para tabelas largas: Layout de Pagina &gt; Orientacao &gt; Paisagem.</li>
              <li>&#10003; <strong>Repita cabecalhos:</strong> Layout de Pagina &gt; Imprimir Titulos &gt; defina linhas a repetir no topo.</li>
              <li>&#10003; <strong>Use Visualizacao de Quebra de Pagina</strong> para ver exatamente onde as paginas serao divididas.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para PowerPoint (PPTX)</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Incorpore fontes:</strong> Arquivo &gt; Opcoes &gt; Salvar &gt; Incorporar fontes no arquivo.</li>
              <li>&#10003; <strong>Verifique o tamanho do slide:</strong> Design &gt; Tamanho do Slide. Use Padrao (4:3) para papel ou Widescreen (16:9) para tela.</li>
              <li>&#10003; <strong>Cuidado com animacoes:</strong> <Link href="/br/aprender/ppt-para-pdf-animacoes" className="text-orange-600 hover:underline">Animacoes nao sao convertidas</Link> — o PDF mostra o estado final de cada slide.</li>
              <li>&#10003; <strong>Use imagens de alta resolucao</strong> para evitar que fiquem pixeladas no PDF.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Checklist final antes de converter</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; Fontes incorporadas no arquivo.</li>
              <li>&#10003; Tamanho de pagina/slide correto.</li>
              <li>&#10003; Margens verificadas.</li>
              <li>&#10003; Visualizacao de impressao conferida.</li>
              <li>&#10003; Arquivo salvo no formato mais recente (DOCX/XLSX/PPTX).</li>
              <li>&#10003; Imagens em alta resolucao.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta com formatacao perfeita</h2>
          <p className="text-slate-300 mb-6">Prepare seu documento, envie para o OmnisPDF e obtenha um PDF identico ao original — gratis.</p>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Converter Office para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Conversor Office para PDF: guia completo", href: "/br/aprender/office-para-pdf-conversor" },
              { title: "PPTX para PDF fontes faltando? Como corrigir", href: "/br/aprender/pptx-para-pdf-fontes-faltando" },
              { title: "Converter DOCX, XLSX, PPTX para PDF", href: "/br/aprender/converter-docx-xlsx-pptx-para-pdf" },
              { title: "Office para PDF no celular", href: "/br/aprender/office-para-pdf-no-celular" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}
