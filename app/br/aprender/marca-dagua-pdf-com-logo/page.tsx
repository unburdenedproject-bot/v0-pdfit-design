import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Marca d'Agua em PDF com Logo — Como Adicionar Seu Logo | PDF.it",
  description: "Aprenda a adicionar o logo da sua empresa como marca d'agua em PDF. Dicas de formato, transparencia e posicionamento para branding profissional.",
  keywords: "marca dagua pdf logo, adicionar logo pdf, watermark logo pdf, logo marca dagua documento, branding pdf logo",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Qual o melhor formato de imagem para marca d'agua com logo?", "acceptedAnswer": { "@type": "Answer", "text": "PNG com fundo transparente e o melhor formato. JPG funciona, mas adiciona um fundo branco ao redor do logo. Se seu logo so existe em JPG, considere converter para PNG com fundo transparente primeiro." } },
  { "@type": "Question", "name": "Qual a opacidade ideal para logo como marca d'agua?", "acceptedAnswer": { "@type": "Answer", "text": "Entre 20-40% e ideal para a maioria dos casos. Isso torna o logo visivel para identificacao mas sutil o suficiente para nao atrapalhar a leitura do conteudo." } },
  { "@type": "Question", "name": "Posso posicionar o logo em um canto especifico?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it permite posicionar a marca d'agua no centro, nos cantos ou em diagonal. Para branding sutil, o canto inferior direito e a posicao mais popular." } },
  { "@type": "Question", "name": "A marca d'agua com logo aparece ao imprimir?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. A marca d'agua e incorporada permanentemente no PDF, entao aparece tanto na tela quanto na impressao." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como adicionar logo como marca d'agua em PDF", "description": "Adicione o logo da sua empresa como marca d'agua em PDF.", "step": [
  { "@type": "HowToStep", "name": "Prepare seu logo", "text": "Tenha seu logo em formato PNG com fundo transparente. Resolucao minima de 300x300 pixels para boa qualidade." },
  { "@type": "HowToStep", "name": "Envie o PDF e o logo", "text": "Acesse a ferramenta Marca d'Agua do PDF.it, envie o PDF e depois selecione a opcao de marca d'agua por imagem para enviar seu logo." },
  { "@type": "HowToStep", "name": "Ajuste e aplique", "text": "Configure posicao, tamanho e opacidade (20-40% recomendado). Aplique e baixe o PDF com seu logo." }
] }

export default function MarcaDaguaPdfComLogoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca d&apos;Agua PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Marca d&apos;Agua em PDF com Logo</h1>
          <p className="text-xl text-slate-300">Quer adicionar o logo da sua empresa em todos os documentos PDF? Aprenda a usar imagem como marca d&apos;agua com configuracoes ideais de posicao e transparencia.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Image className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para adicionar seu logo? Va direto para a ferramenta.</p></div>
          <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Marca d&apos;Agua PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que usar logo como marca d&apos;agua?</h2>
            <p className="text-slate-600 mb-4">Adicionar o logo da empresa como marca d&apos;agua em PDFs traz beneficios profissionais importantes:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Branding consistente.</strong> Todos os documentos enviados reforcam a identidade visual da empresa.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Profissionalismo.</strong> Documentos com logo transmitem seriedade e confianca.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Protecao contra copias.</strong> O logo dificulta que terceiros se apropriem do conteudo.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Rastreabilidade.</strong> Documentos com logo sao facilmente identificaveis como seus.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Preparando seu logo</h2>
            <p className="text-slate-600 mb-4">Antes de adicionar o logo como marca d&apos;agua, prepare o arquivo corretamente:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Formato PNG com fundo transparente.</strong> Isso e essencial — JPG sempre adiciona fundo branco.</li>
              <li>&#10003; <strong>Resolucao minima de 300x300 pixels.</strong> Logos muito pequenos ficam pixelados, especialmente na impressao.</li>
              <li>&#10003; <strong>Versao monocromatica e ideal.</strong> Um logo em cinza claro ou com cor unica funciona melhor como marca d&apos;agua que logos coloridos complexos.</li>
              <li>&#10003; <strong>Proporcoes corretas.</strong> Mantenha a proporcao original do logo para evitar distorcao.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como adicionar logo como marca d&apos;agua</h2>
            <div className="space-y-4">
              {[
                { title: "Envie o PDF", desc: "Acesse a ferramenta Marca d'Agua PDF e envie o documento que recebera o logo." },
                { title: "Selecione marca d'agua por imagem", desc: "Escolha a opcao 'Imagem' e envie seu logo em PNG (preferencialmente com fundo transparente). Se so tem JPG, ele funcionara mas tera fundo branco." },
                { title: "Configure posicao e opacidade", desc: "Escolha onde posicionar o logo: centro (para protecao maxima), canto inferior direito (para branding sutil), ou diagonal (para cobertura ampla). Ajuste a opacidade entre 20-40%." },
                { title: "Aplique e baixe", desc: "Clique em Aplicar. O logo sera adicionado em todas as paginas. Baixe o PDF com a marca d'agua do seu logo." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Melhores configuracoes por uso</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Uso</th>
                  <th className="text-left py-3 px-4 font-bold">Posicao</th>
                  <th className="text-left py-3 px-4 font-bold">Opacidade</th>
                  <th className="text-left py-3 px-4 font-bold">Tamanho</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Propostas comerciais</td><td className="py-3 px-4">Canto inferior direito</td><td className="py-3 px-4">20-30%</td><td className="py-3 px-4">Pequeno</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Documentos confidenciais</td><td className="py-3 px-4">Centro diagonal</td><td className="py-3 px-4">30-40%</td><td className="py-3 px-4">Grande</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Relatorios para clientes</td><td className="py-3 px-4">Cabecalho central</td><td className="py-3 px-4">25-35%</td><td className="py-3 px-4">Medio</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Rascunhos internos</td><td className="py-3 px-4">Centro diagonal</td><td className="py-3 px-4">40-50%</td><td className="py-3 px-4">Grande</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Combinando logo com outras protecoes</h2>
            <p className="text-slate-600 mb-4">Para protecao maxima dos seus documentos, combine marca d&apos;agua com outras medidas:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/br/aprender/como-proteger-pdf-com-senha" className="text-orange-600 hover:underline">Proteger com senha</Link> — impede acesso nao autorizado.</li>
              <li>&#10003; <Link href="/br/aprender/como-adicionar-marca-dagua-em-pdf" className="text-orange-600 hover:underline">Marca d&apos;agua de texto</Link> — adicione "CONFIDENCIAL" alem do logo.</li>
              <li>&#10003; <strong>Restricao de permissoes</strong> — bloqueie impressao e copia de texto.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Adicione seu logo em todos os PDFs</h2>
          <p className="text-slate-300 mb-6">Marca d&apos;agua com logo profissional — personalize posicao e opacidade. Para usuarios Pro.</p>
          <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Image className="h-5 w-5" /> Marca d&apos;Agua PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como adicionar marca d'agua em PDF (guia completo)", href: "/br/aprender/como-adicionar-marca-dagua-em-pdf" },
              { title: "Como proteger PDF com senha", href: "/br/aprender/como-proteger-pdf-com-senha" },
              { title: "Proteger PDF antes de enviar por email", href: "/br/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Melhor formato para enviar documentos", href: "/br/aprender/melhor-formato-para-enviar-documentos" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
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
