import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Droplets, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Adicionar Marca d'Agua em PDF — Guia Completo | PDF.it",
  description: "Aprenda a adicionar marca d'agua em PDF online. Texto ou imagem, personalize posicao, opacidade e tamanho. Proteja seus documentos contra uso nao autorizado.",
  keywords: "marca dagua pdf, adicionar marca dagua pdf, watermark pdf, marca d agua documento, proteger pdf marca dagua",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como adiciono marca d'agua em um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para a ferramenta Marca d'Agua do PDF.it, escolha entre texto ou imagem, personalize posicao e opacidade, e baixe o PDF com a marca d'agua aplicada. Todo o processo e online e leva segundos." } },
  { "@type": "Question", "name": "Posso usar meu logo como marca d'agua?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it aceita imagens PNG e JPG como marca d'agua. Envie seu logo e ajuste tamanho, posicao e transparencia. Para melhores resultados, use PNG com fundo transparente." } },
  { "@type": "Question", "name": "A marca d'agua aparece em todas as paginas?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, por padrao a marca d'agua e aplicada em todas as paginas do PDF. Usuarios Pro podem escolher paginas especificas." } },
  { "@type": "Question", "name": "E possivel remover a marca d'agua depois?", "acceptedAnswer": { "@type": "Answer", "text": "Marcas d'agua adicionadas pelo PDF.it sao permanentes no PDF. Guarde sempre uma copia do PDF original sem marca d'agua para o caso de precisar." } },
  { "@type": "Question", "name": "A marca d'agua afeta a qualidade do PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. A marca d'agua e adicionada como uma camada sobre o conteudo existente. O texto, imagens e layout originais permanecem inalterados em qualidade total." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como adicionar marca d'agua em PDF", "description": "Adicione marca d'agua de texto ou imagem ao seu PDF em 3 passos.", "step": [
  { "@type": "HowToStep", "name": "Envie seu PDF", "text": "Acesse a ferramenta Marca d'Agua do PDF.it e envie o arquivo que deseja marcar." },
  { "@type": "HowToStep", "name": "Personalize a marca d'agua", "text": "Escolha texto ou imagem, ajuste posicao, tamanho, rotacao e opacidade." },
  { "@type": "HowToStep", "name": "Baixe o PDF com marca d'agua", "text": "Clique em Aplicar e baixe o PDF com a marca d'agua em todas as paginas." }
] }

export default function ComoAdicionarMarcaDaguaEmPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca d&apos;Agua PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Adicionar Marca d&apos;Agua em PDF</h1>
          <p className="text-xl text-slate-300">Proteja seus documentos PDF com marca d&apos;agua personalizada — texto ou logo. Aprenda a configurar posicao, opacidade e aplicar em todas as paginas.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Droplets className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para adicionar? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Marca d&apos;Agua PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que adicionar marca d&apos;agua?</h2>
            <p className="text-slate-600 mb-4">Marca d&apos;agua e uma camada visual que protege e identifica seus documentos. Usos comuns:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Proteger propriedade intelectual.</strong> Marque propostas, relatorios e projetos com seu nome ou empresa para desencorajar copias.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Identificar documentos confidenciais.</strong> Adicione &quot;CONFIDENCIAL&quot;, &quot;RASCUNHO&quot; ou &quot;PARA REVISAO&quot; para indicar o status do documento.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Branding.</strong> Adicione o logo da empresa em todos os documentos para reforcar a marca.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Rastrear vazamentos.</strong> Use marcas personalizadas por destinatario para identificar a fonte de vazamentos.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como adicionar marca d&apos;agua (passo a passo)</h2>
            <div className="space-y-4">
              {[
                { title: "Envie seu PDF", desc: "Acesse a ferramenta Marca d'Agua PDF e arraste seu arquivo para a area de upload. Arquivos ate 25MB sao gratis." },
                { title: "Personalize a marca d'agua", desc: "Escolha entre texto (digite qualquer texto, como 'CONFIDENCIAL' ou seu nome) ou imagem (envie seu logo em PNG ou JPG). Ajuste posicao (centro, cantos), rotacao (diagonal e popular), opacidade (30-50% e ideal) e tamanho." },
                { title: "Aplique e baixe", desc: "Clique em Aplicar. A marca d'agua e adicionada em todas as paginas. Baixe o PDF marcado — pronto para compartilhar com protecao visual." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Tipos de marca d&apos;agua</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Tipo</th>
                  <th className="text-left py-3 px-4 font-bold">Melhor para</th>
                  <th className="text-left py-3 px-4 font-bold">Dica</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Texto diagonal</td><td className="py-3 px-4">Status do documento (RASCUNHO, CONFIDENCIAL)</td><td className="py-3 px-4">Use opacidade 30-40% para nao atrapalhar a leitura</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Logo central</td><td className="py-3 px-4">Branding corporativo</td><td className="py-3 px-4">Use PNG com fundo transparente</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Logo no canto</td><td className="py-3 px-4">Identificacao sutil</td><td className="py-3 px-4">Canto inferior direito e a posicao mais comum</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Texto repetido</td><td className="py-3 px-4">Protecao maxima</td><td className="py-3 px-4">Texto repetido em toda a pagina dificulta remocao</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para marcas d&apos;agua eficazes</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Opacidade entre 30-50%</strong> — visivel o suficiente para proteger, sutil o bastante para nao atrapalhar a leitura.</li>
              <li>&#10003; <strong>Posicao diagonal</strong> — mais dificil de recortar ou remover do que marcas em cantos.</li>
              <li>&#10003; <strong>Use PNG com transparencia</strong> para logos — JPG adiciona um fundo branco indesejado.</li>
              <li>&#10003; <strong>Combine com senha</strong> para protecao maxima. Veja como <Link href="/br/aprender/como-proteger-pdf-com-senha" className="text-orange-600 hover:underline">proteger PDF com senha</Link>.</li>
              <li>&#10003; <strong>Guarde o original sem marca</strong> — marcas d&apos;agua sao permanentes no PDF.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Usar logo como marca d&apos;agua</h2>
            <p className="text-slate-600 mb-4">Para adicionar seu logo da empresa como marca d&apos;agua, veja nosso guia dedicado: <Link href="/br/aprender/marca-dagua-pdf-com-logo" className="text-orange-600 hover:underline">Marca d&apos;Agua em PDF com Logo</Link>.</p>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Adicione marca d&apos;agua ao seu PDF</h2>
          <p className="text-slate-300 mb-6">Texto ou logo, personalize como quiser — gratis para usuarios Pro.</p>
          <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Droplets className="h-5 w-5" /> Marca d&apos;Agua PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Marca d'Agua em PDF com Logo — guia completo", href: "/br/aprender/marca-dagua-pdf-com-logo" },
              { title: "Como proteger PDF com senha", href: "/br/aprender/como-proteger-pdf-com-senha" },
              { title: "Proteger PDF antes de enviar por email", href: "/br/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Melhor formato para enviar documentos", href: "/br/aprender/melhor-formato-para-enviar-documentos" },
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
