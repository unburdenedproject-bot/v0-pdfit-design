import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Presentation, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PPT para PDF — E as Animacoes? O Que Converte e o Que Nao | PDF.it",
  description: "Descubra o que acontece com as animacoes e transicoes do PowerPoint quando voce converte para PDF. Saiba quais elementos sao preservados e como lidar com os que nao sao.",
  keywords: "ppt para pdf animacoes, powerpoint animacoes pdf, transicoes powerpoint pdf, animacoes perdem pdf, converter ppt animacoes",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "As animacoes do PowerPoint funcionam no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. PDF e um formato estatico, entao animacoes de entrada, saida, enfase e caminhos de movimento sao completamente perdidos. O PDF mostra o estado final de cada slide — como se todas as animacoes ja tivessem sido executadas." } },
  { "@type": "Question", "name": "E as transicoes entre slides?", "acceptedAnswer": { "@type": "Answer", "text": "Transicoes entre slides (como dissolucao, cortina, empurrar) tambem sao perdidas na conversao para PDF. Cada slide se torna uma pagina estatica no PDF." } },
  { "@type": "Question", "name": "GIFs animados sao preservados no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. GIFs animados sao convertidos para imagens estaticas no PDF, mostrando apenas o primeiro quadro. Se o GIF e essencial, considere manter o formato PPTX para apresentacao." } },
  { "@type": "Question", "name": "Como posso compartilhar uma apresentacao com animacoes?", "acceptedAnswer": { "@type": "Answer", "text": "Se as animacoes sao essenciais, considere: (1) compartilhar o arquivo PPTX original, (2) exportar como video MP4 no PowerPoint, ou (3) usar o PowerPoint Online para compartilhar um link." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como lidar com animacoes ao converter PPT para PDF", "description": "Entenda o que acontece com animacoes e como preparar seu PowerPoint para uma boa conversao.", "step": [
  { "@type": "HowToStep", "name": "Identifique slides com animacoes", "text": "Revise sua apresentacao e identifique quais slides dependem de animacoes para comunicar a mensagem." },
  { "@type": "HowToStep", "name": "Duplique slides animados", "text": "Para cada estado de animacao importante, crie um slide separado mostrando aquele estado. Assim o PDF tera multiplas paginas representando a sequencia." },
  { "@type": "HowToStep", "name": "Converta para PDF", "text": "Envie o arquivo preparado para o conversor do PDF.it e baixe o PDF com todos os estados visíveis." }
] }

export default function PptParaPdfAnimacoesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">PPT para PDF — E as Animacoes?</h1>
          <p className="text-xl text-slate-300">Voce vai converter seu PowerPoint para PDF mas tem animacoes na apresentacao? Entenda o que e preservado, o que se perde e como contornar as limitacoes.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Presentation className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter PPT para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">O que acontece com as animacoes no PDF?</h2>
            <p className="text-slate-600 mb-4">PDF e um formato de documento estatico — ele nao suporta nenhum tipo de animacao ou interatividade de apresentacao. Quando voce converte PowerPoint para PDF:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Animacoes de entrada/saida sao perdidas.</strong> Elementos que aparecem ou desaparecem com animacao sao mostrados no estado final — como se todas as animacoes ja tivessem rodado.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Transicoes entre slides sao removidas.</strong> Efeitos como dissolucao, cortina e empurrar nao existem no PDF.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>GIFs ficam estaticos.</strong> GIFs animados sao convertidos para uma imagem fixa (geralmente o primeiro quadro).</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Videos incorporados sao perdidos.</strong> Apenas a miniatura (thumbnail) do video e preservada no PDF.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">O que E preservado na conversao</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Elemento</th>
                  <th className="text-left py-3 px-4 font-bold">Preservado?</th>
                  <th className="text-left py-3 px-4 font-bold">Detalhes</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Texto e fontes</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4">Preservados com formatacao original</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Imagens</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4">Qualidade original mantida</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Formas e graficos</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4">Renderizados como elementos estaticos</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Animacoes</td><td className="py-3 px-4 text-red-600 font-semibold">Nao</td><td className="py-3 px-4">Estado final de cada slide e mostrado</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Transicoes</td><td className="py-3 px-4 text-red-600 font-semibold">Nao</td><td className="py-3 px-4">Completamente removidas</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Videos e GIFs</td><td className="py-3 px-4 text-red-600 font-semibold">Nao</td><td className="py-3 px-4">Apenas miniatura estatica</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como contornar a perda de animacoes</h2>
            <p className="text-slate-600 mb-4">Se suas animacoes sao importantes para a compreensao do conteudo, aqui estao solucoes praticas:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Duplique slides para cada estado.</strong> Em vez de um slide com 4 itens aparecendo um a um, crie 4 slides — cada um mostrando um item a mais. No PDF, isso simula a animacao.</li>
              <li>&#10003; <strong>Exporte como video MP4.</strong> No PowerPoint, va em Arquivo &gt; Exportar &gt; Criar Video. Isso preserva animacoes e transicoes em formato de video.</li>
              <li>&#10003; <strong>Use PowerPoint Online.</strong> Compartilhe um link para a apresentacao via OneDrive. O destinatario pode ver com todas as animacoes no navegador.</li>
              <li>&#10003; <strong>Adicione anotacoes.</strong> Se o PDF e suficiente, adicione textos como "1.", "2.", "3." para indicar a ordem de aparicao dos elementos.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Quando o PDF e melhor que manter animacoes</h2>
            <p className="text-slate-600 mb-4">Em muitos casos, PDF e a melhor escolha mesmo com a perda de animacoes:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Envio por email</strong> — PDFs sao menores e abrem em qualquer dispositivo.</li>
              <li>&#10003; <strong>Impressao</strong> — animacoes nao existem no papel. Veja nosso guia de <Link href="/br/aprender/ppt-para-pdf-para-imprimir" className="text-orange-600 hover:underline">PPT para PDF para imprimir</Link>.</li>
              <li>&#10003; <strong>Arquivamento</strong> — PDFs sao o formato padrao para documentos permanentes.</li>
              <li>&#10003; <strong>Seguranca</strong> — voce pode <Link href="/br/aprender/como-proteger-pdf-com-senha" className="text-orange-600 hover:underline">proteger o PDF com senha</Link> para evitar copias nao autorizadas.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta seu PowerPoint para PDF agora</h2>
          <p className="text-slate-300 mb-6">Envie seu arquivo PPTX e obtenha um PDF perfeito em segundos — gratis, sem cadastro.</p>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Presentation className="h-5 w-5" /> Converter PPT para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Converter PowerPoint para PDF online (guia completo)", href: "/br/aprender/converter-ppt-para-pdf" },
              { title: "PPT para PDF para imprimir: dicas de layout e qualidade", href: "/br/aprender/ppt-para-pdf-para-imprimir" },
              { title: "PPTX para PDF fontes faltando? Corrija o problema", href: "/br/aprender/pptx-para-pdf-fontes-faltando" },
              { title: "PPT para PDF no iPhone (metodo rapido)", href: "/br/aprender/ppt-para-pdf-no-iphone" },
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
