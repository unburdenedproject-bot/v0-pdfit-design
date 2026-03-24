import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Converter DOCX, XLSX, PPTX para PDF de Uma Vez | PDF.it",
  description: "Aprenda a converter multiplos arquivos do Office (Word, Excel, PowerPoint) para PDF de uma vez. Processamento em lote para usuarios Pro.",
  keywords: "converter docx para pdf, converter xlsx para pdf, converter pptx para pdf, office para pdf lote, converter varios arquivos pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Posso converter DOCX, XLSX e PPTX para PDF ao mesmo tempo?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Usuarios Pro do PDF.it podem usar o processamento em lote para enviar multiplos arquivos de diferentes formatos e converte-los todos para PDF simultaneamente." } },
  { "@type": "Question", "name": "Qual a diferenca entre converter cada formato separadamente?", "acceptedAnswer": { "@type": "Answer", "text": "O resultado e o mesmo. A ferramenta Office para PDF aceita todos os formatos em uma unica interface. Mas se voce precisa de opcoes especificas para cada formato, use as ferramentas dedicadas (Word para PDF, Excel para PDF, PowerPoint para PDF)." } },
  { "@type": "Question", "name": "Quantos arquivos posso converter de uma vez?", "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos convertem um arquivo por vez. Usuarios Pro podem enviar multiplos arquivos e baixar todos os PDFs em um arquivo ZIP." } },
  { "@type": "Question", "name": "Os arquivos originais sao preservados?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. A conversao gera novos arquivos PDF — seus arquivos originais DOCX, XLSX e PPTX nao sao alterados." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como converter DOCX, XLSX e PPTX para PDF", "description": "Converta multiplos formatos do Office para PDF usando o PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Acesse a ferramenta Office para PDF", "text": "Va ate pdf.it.com/br/office-para-pdf no seu navegador." },
  { "@type": "HowToStep", "name": "Envie seus arquivos", "text": "Arraste ou selecione seus arquivos DOCX, XLSX e/ou PPTX. Usuarios Pro podem enviar multiplos arquivos." },
  { "@type": "HowToStep", "name": "Baixe os PDFs", "text": "Clique em Converter e baixe os PDFs individualmente ou todos em um ZIP." }
] }

export default function ConverterDocxXlsxPptxParaPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter DOCX, XLSX, PPTX para PDF</h1>
          <p className="text-xl text-slate-300">Precisa converter varios tipos de arquivos do Office para PDF? Veja como fazer tudo de uma vez — Word, Excel e PowerPoint — em uma unica ferramenta.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter Office para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Todos os formatos do Office em uma ferramenta</h2>
            <p className="text-slate-600 mb-4">O PDF.it aceita todos os principais formatos do Microsoft Office. Nao importa se voce tem documentos Word, planilhas Excel ou apresentacoes PowerPoint — tudo pode ser convertido para PDF:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Formato</th>
                  <th className="text-left py-3 px-4 font-bold">Aplicativo</th>
                  <th className="text-left py-3 px-4 font-bold">Ideal para</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">DOCX / DOC</td><td className="py-3 px-4">Word</td><td className="py-3 px-4">Relatorios, curriculos, contratos, cartas</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">XLSX / XLS</td><td className="py-3 px-4">Excel</td><td className="py-3 px-4">Planilhas financeiras, tabelas, graficos</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">PPTX / PPT</td><td className="py-3 px-4">PowerPoint</td><td className="py-3 px-4">Apresentacoes, slides, propostas visuais</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como converter (passo a passo)</h2>
            <div className="space-y-4">
              {[
                { title: "Envie seus arquivos", desc: "Acesse a ferramenta Office para PDF e arraste seus arquivos DOCX, XLSX e/ou PPTX para a area de upload. Usuarios Pro podem enviar multiplos arquivos de uma vez." },
                { title: "Converta todos", desc: "O PDF.it detecta automaticamente o tipo de cada arquivo e aplica a conversao ideal. Cada arquivo gera um PDF separado." },
                { title: "Baixe os PDFs", desc: "Baixe cada PDF individualmente ou, se converteu multiplos arquivos (Pro), baixe todos em um unico ZIP. Perfeito para enviar por email." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Ferramentas dedicadas vs. ferramenta universal</h2>
            <p className="text-slate-600 mb-4">O PDF.it oferece tanto a ferramenta universal (Office para PDF) quanto ferramentas dedicadas para cada formato:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/br/word-para-pdf" className="text-orange-600 hover:underline">Word para PDF</Link> — otimizada para documentos de texto com cabecalhos, rodapes e indice.</li>
              <li>&#10003; <Link href="/br/excel-para-pdf" className="text-orange-600 hover:underline">Excel para PDF</Link> — preserva tabelas, graficos e areas de impressao.</li>
              <li>&#10003; <Link href="/br/powerpoint-para-pdf" className="text-orange-600 hover:underline">PowerPoint para PDF</Link> — converte slides com imagens, formas e graficos.</li>
              <li>&#10003; <Link href="/br/office-para-pdf" className="text-orange-600 hover:underline">Office para PDF</Link> — aceita qualquer formato em uma unica interface.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para conversao perfeita</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Incorpore fontes</strong> em todos os documentos antes de converter. Veja nosso guia de <Link href="/br/aprender/pptx-para-pdf-fontes-faltando" className="text-orange-600 hover:underline">fontes faltando</Link>.</li>
              <li>&#10003; <strong>Verifique a formatacao</strong> com Ctrl+P (visualizacao de impressao) antes de enviar.</li>
              <li>&#10003; <strong>Use formatos modernos</strong> (DOCX, XLSX, PPTX) em vez dos antigos (DOC, XLS, PPT).</li>
              <li>&#10003; Para manter o formato perfeito, leia nosso guia de <Link href="/br/aprender/office-para-pdf-manter-formato" className="text-orange-600 hover:underline">como manter a formatacao</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta todos os seus documentos para PDF</h2>
          <p className="text-slate-300 mb-6">Word, Excel, PowerPoint — envie qualquer formato e obtenha PDFs perfeitos em segundos.</p>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Converter Office para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Conversor Office para PDF: guia completo", href: "/br/aprender/office-para-pdf-conversor" },
              { title: "Office para PDF — como manter o formato", href: "/br/aprender/office-para-pdf-manter-formato" },
              { title: "Melhor formato para enviar documentos", href: "/br/aprender/melhor-formato-para-enviar-documentos" },
              { title: "Converter PPT para PDF (guia completo)", href: "/br/aprender/converter-ppt-para-pdf" },
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
