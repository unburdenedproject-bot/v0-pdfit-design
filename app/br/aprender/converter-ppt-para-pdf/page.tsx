import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Presentation, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Converter PowerPoint para PDF Online (PPTX para PDF) | PDF.it",
  description: "Aprenda como converter PowerPoint para PDF online em segundos. Guia passo a passo sobre qualidade de slides, paginas de notas e por que PDF e o melhor formato para compartilhar apresentacoes.",
  keywords: "converter powerpoint para pdf online, pptx para pdf, powerpoint para pdf, conversor ppt para pdf, converter ppt para pdf gratis",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como converto PowerPoint para PDF de graca?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu arquivo PPTX ou PPT para a ferramenta PowerPoint para PDF do PDF.it, clique em Converter e baixe o PDF. Nao e necessario cadastro para seus primeiros 3 arquivos. A conversao preserva o layout dos slides, fontes e imagens." } },
  { "@type": "Question", "name": "Converter PowerPoint para PDF mantem a formatacao?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Converter para PDF preserva seu texto, imagens, formas, graficos e layout exatamente como aparecem no PowerPoint. Os unicos elementos que nao sao transferidos sao animacoes e transicoes, ja que PDF e um formato estatico." } },
  { "@type": "Question", "name": "Posso converter PPTX para PDF sem ter o PowerPoint instalado?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it e uma ferramenta online que funciona em qualquer navegador. Voce nao precisa do PowerPoint, Microsoft Office nem nenhum software instalado. Basta enviar seu arquivo e converter." } },
  { "@type": "Question", "name": "Como incluo as notas do apresentador no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No PowerPoint, va em Arquivo > Exportar > Criar PDF e escolha 'Paginas de notas' como layout. Isso imprime cada slide com suas notas abaixo. Se estiver convertendo online, exporte como Paginas de notas no PowerPoint primeiro, depois converta o arquivo resultante." } },
  { "@type": "Question", "name": "Minhas fontes do PowerPoint ficarao iguais no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Se voce usar fontes padrao (Arial, Calibri, Times New Roman), sim. Fontes personalizadas ou incomuns podem ser substituidas se nao estiverem incorporadas. Para evitar isso, incorpore as fontes no PowerPoint antes de converter: va em Arquivo > Opcoes > Salvar > marque 'Incorporar fontes no arquivo'." } },
  { "@type": "Question", "name": "Posso converter o PDF de volta para PowerPoint depois?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it oferece uma ferramenta PDF para PowerPoint que converte seu PDF de volta para um arquivo PPTX editavel. Tenha em mente que layouts complexos podem precisar de ajustes menores apos a conversao." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como converter PowerPoint para PDF online", "description": "Converta sua apresentacao PPTX ou PPT para PDF em 3 passos simples usando o PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Envie seu arquivo PowerPoint", "text": "Va ate a ferramenta PowerPoint para PDF do PDF.it e envie seu arquivo PPTX ou PPT clicando ou arrastando para a area de upload." },
  { "@type": "HowToStep", "name": "Converta para PDF", "text": "Clique em Converter. O PDF.it processa sua apresentacao e cria um PDF que preserva seus slides, fontes e imagens." },
  { "@type": "HowToStep", "name": "Baixe seu PDF", "text": "Baixe o arquivo PDF convertido. Ele esta pronto para compartilhar por email, enviar para portais ou imprimir — e ficara igual em qualquer dispositivo." }
] }

export default function ConverterPptParaPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PowerPoint para PDF Online (PPTX para PDF)</h1>
          <p className="text-xl text-slate-300">Precisa compartilhar uma apresentacao sem se preocupar com fontes, formatacao ou compatibilidade de software? Veja como converter PowerPoint para PDF em segundos — gratis, online, sem software necessario.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Presentation className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter PPT para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que converter PowerPoint para PDF?</h2>
            <p className="text-slate-600 mb-4">Arquivos PowerPoint sao otimos para criar e editar apresentacoes, mas nao sao ideais para compartilhar. Veja por que o PDF e o melhor formato para distribuicao:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Visualizacao universal.</strong> PDFs abrem em qualquer dispositivo — Windows, Mac, iPhone, Android — sem precisar do PowerPoint instalado. Sua audiencia ve exatamente o que voce planejou.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Sem edicoes acidentais.</strong> Enviar um PPTX significa que qualquer pessoa pode modificar seus slides. Um PDF trava o conteudo para que seu trabalho permaneca intacto.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Layout consistente.</strong> Fontes mudam, imagens se deslocam e graficos quebram quando um PPTX e aberto em outro computador. O PDF congela o layout pixel por pixel.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Tamanho de arquivo menor.</strong> PDFs geralmente sao menores que o PPTX original. Se o arquivo ainda for grande, voce pode <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">comprimir o PDF</Link> ainda mais.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como converter PowerPoint para PDF (passo a passo)</h2>
            <div className="space-y-4">
              {[
                { title: "Envie seu arquivo PowerPoint", desc: "Va ate a ferramenta PowerPoint para PDF e arraste seu arquivo PPTX ou PPT para a area de upload, ou clique para procurar. Arquivos ate 25MB sao gratis — usuarios Pro podem enviar ate 200MB." },
                { title: "Clique em Converter", desc: "O PDF.it converte sua apresentacao em um PDF de alta qualidade. Cada slide se torna uma pagina. Texto, imagens, formas e graficos sao preservados exatamente como aparecem no PowerPoint." },
                { title: "Baixe seu PDF", desc: "Baixe o PDF finalizado e compartilhe com confianca. O arquivo fica identico em cada dispositivo e plataforma — nao e necessario PowerPoint para visualizar." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">O que e convertido para PDF (e o que nao e)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Elemento</th>
                  <th className="text-left py-3 px-4 font-bold">Converte?</th>
                  <th className="text-left py-3 px-4 font-bold">Observacoes</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Texto e fontes</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4">Fontes padrao convertem perfeitamente; fontes personalizadas devem ser incorporadas primeiro</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Imagens e formas</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4">Preservadas na qualidade original</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Graficos e diagramas</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td><td className="py-3 px-4">Renderizados como imagens estaticas no PDF</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Animacoes</td><td className="py-3 px-4 text-red-600 font-semibold">Nao</td><td className="py-3 px-4">PDF e estatico — <Link href="/br/aprender/ppt-para-pdf-animacoes" className="text-orange-600 hover:underline">saiba mais</Link></td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Transicoes</td><td className="py-3 px-4 text-red-600 font-semibold">Nao</td><td className="py-3 px-4">As transicoes de slides sao perdidas no PDF</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Videos incorporados</td><td className="py-3 px-4 text-red-600 font-semibold">Nao</td><td className="py-3 px-4">Apenas a miniatura/poster do video e conservada</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 mt-4 text-sm">Tem curiosidade sobre as animacoes especificamente? Leia nosso guia completo sobre <Link href="/br/aprender/ppt-para-pdf-animacoes" className="text-orange-600 hover:underline">o que acontece com as animacoes do PowerPoint no PDF</Link>.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como obter a melhor qualidade de slides no seu PDF</h2>
            <p className="text-slate-600 mb-4">A qualidade do seu PDF depende da qualidade do seu PowerPoint original. Aqui vao dicas para obter os melhores resultados:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Use imagens de alta resolucao</strong> nos seus slides (pelo menos 150 DPI para tela, 300 DPI para impressao).</li>
              <li>&#10003; <strong>Incorpore suas fontes</strong> antes de converter. Va em Arquivo &gt; Opcoes &gt; Salvar &gt; marque "Incorporar fontes no arquivo." Isso previne <Link href="/br/aprender/pptx-para-pdf-fontes-faltando" className="text-orange-600 hover:underline">problemas de fontes faltando</Link>.</li>
              <li>&#10003; <strong>Evite compressao excessiva</strong> de imagens dentro do PowerPoint — deixe a qualidade original ser transferida para o PDF.</li>
              <li>&#10003; <strong>Verifique o tamanho do slide</strong> antes de converter. Padrao (4:3) e Widescreen (16:9) funcionam, mas certifique-se de que a proporcao corresponde a sua saida desejada. Veja nosso <Link href="/br/aprender/ppt-para-pdf-para-imprimir" className="text-orange-600 hover:underline">guia de impressao</Link> para detalhes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Incluindo notas do apresentador no seu PDF</h2>
            <p className="text-slate-600 mb-4">Por padrao, converter um PowerPoint para PDF inclui apenas os slides. Se voce precisa das notas do apresentador no PDF:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; No PowerPoint, va em <strong>Arquivo &gt; Exportar &gt; Criar PDF/XPS</strong>.</li>
              <li>&#10003; Clique em <strong>Opcoes</strong> e selecione <strong>"Paginas de notas"</strong> em "Publicar o que."</li>
              <li>&#10003; Isso cria um PDF onde cada pagina mostra o slide acima e as notas do apresentador abaixo.</li>
              <li>&#10003; Alternativamente, imprima como PDF usando o layout "Paginas de notas" em Arquivo &gt; Imprimir.</li>
            </ul>
            <p className="text-slate-600 mt-4">Se voce ja tem um arquivo PPTX e nao consegue acessar o PowerPoint, envie-o para o <Link href="/br/powerpoint-para-pdf" className="text-orange-600 hover:underline">conversor do PDF.it</Link> para uma conversao rapida apenas dos slides.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Convertendo outros arquivos do Office para PDF</h2>
            <p className="text-slate-600 mb-4">PowerPoint nao e o unico tipo de arquivo que voce pode converter. O PDF.it tambem trabalha com:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/br/word-para-pdf" className="text-orange-600 hover:underline">Word para PDF</Link> — Converta arquivos DOCX e DOC para PDF.</li>
              <li>&#10003; <Link href="/br/excel-para-pdf" className="text-orange-600 hover:underline">Excel para PDF</Link> — Converta planilhas preservando layouts de tabelas.</li>
              <li>&#10003; <Link href="/br/office-para-pdf" className="text-orange-600 hover:underline">Office para PDF</Link> — Uma ferramenta para qualquer arquivo do Microsoft Office.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Pronto para converter seu PowerPoint?</h2>
          <p className="text-slate-300 mb-6">Envie seu arquivo PPTX e obtenha um PDF perfeito em segundos — gratis, sem cadastro.</p>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Presentation className="h-5 w-5" /> Converter PPT para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "PPT para PDF para imprimir: melhores dicas de layout e qualidade", href: "/br/aprender/ppt-para-pdf-para-imprimir" },
              { title: "As animacoes do PowerPoint funcionam no PDF? O que converte (e o que nao)", href: "/br/aprender/ppt-para-pdf-animacoes" },
              { title: "PPTX para PDF fontes faltando? Corrija incorporacao e substituicoes", href: "/br/aprender/pptx-para-pdf-fontes-faltando" },
              { title: "Converter PPT para PDF no iPhone (metodo rapido)", href: "/br/aprender/ppt-para-pdf-no-iphone" },
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
