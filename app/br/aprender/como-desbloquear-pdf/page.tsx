import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Desbloquear PDF — Remover Senha de PDF | PDF.it",
  description: "Aprenda a desbloquear PDF protegido com senha. Guia passo a passo para remover senha de abertura e senha de permissoes do seu PDF.",
  keywords: "desbloquear pdf, remover senha pdf, tirar senha pdf, pdf sem senha, desproteger pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como removo a senha de um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para a ferramenta Desbloquear PDF do PDF.it, digite a senha atual e clique em Desbloquear. O PDF.it remove a protecao e voce baixa o PDF sem senha." } },
  { "@type": "Question", "name": "Posso desbloquear um PDF sem saber a senha?", "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs com senha de abertura (que impede abrir o arquivo), voce precisa saber a senha. Para PDFs com apenas senha de permissoes (que restringe imprimir/copiar mas permite abrir), a ferramenta pode remover as restricoes." } },
  { "@type": "Question", "name": "Desbloquear PDF e legal?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, desde que voce seja o proprietario do documento ou tenha autorizacao do proprietario. Desbloquear PDFs de terceiros sem permissao pode violar direitos autorais e leis de propriedade intelectual." } },
  { "@type": "Question", "name": "O conteudo do PDF e alterado ao desbloquear?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. Desbloquear apenas remove a protecao com senha. O conteudo, formatacao, imagens e layout permanecem identicos." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como desbloquear PDF protegido", "description": "Remova a senha do seu PDF em 3 passos.", "step": [
  { "@type": "HowToStep", "name": "Envie o PDF protegido", "text": "Acesse a ferramenta Desbloquear PDF do PDF.it e envie o arquivo protegido." },
  { "@type": "HowToStep", "name": "Digite a senha", "text": "Insira a senha atual do PDF para autorizar a remocao da protecao." },
  { "@type": "HowToStep", "name": "Baixe o PDF desbloqueado", "text": "Clique em Desbloquear e baixe o PDF sem protecao de senha." }
] }

export default function ComoDesbloquearPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Desbloquear PDF</h1>
          <p className="text-xl text-slate-300">Tem um PDF protegido com senha e precisa remover a protecao? Aprenda a desbloquear seu PDF em segundos — mantendo todo o conteudo intacto.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Unlock className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para desbloquear? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Desbloquear PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Quando voce precisa desbloquear um PDF?</h2>
            <p className="text-slate-600 mb-4">Existem varias situacoes em que desbloquear um PDF e necessario:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Voce protegeu e agora precisa editar.</strong> Voce mesmo colocou a senha e agora quer remover para editar ou compartilhar sem restricoes.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Precisa imprimir um PDF restrito.</strong> O PDF abre normalmente mas nao permite imprimir. Veja nosso guia de <Link href="/br/aprender/desbloquear-pdf-para-imprimir" className="text-orange-600 hover:underline">desbloquear PDF para imprimir</Link>.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Copiar texto bloqueado.</strong> O PDF tem senha de permissoes que impede copiar texto.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Combinar com outros PDFs.</strong> Voce precisa <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">juntar PDFs</Link> mas um deles esta protegido.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como desbloquear seu PDF (passo a passo)</h2>
            <div className="space-y-4">
              {[
                { title: "Envie o PDF protegido", desc: "Acesse a ferramenta Desbloquear PDF e arraste o arquivo para a area de upload. O PDF.it detecta automaticamente o tipo de protecao." },
                { title: "Digite a senha (se necessario)", desc: "Se o PDF tem senha de abertura, digite-a. Se tem apenas senha de permissoes, a ferramenta pode remover as restricoes automaticamente." },
                { title: "Baixe o PDF desbloqueado", desc: "Clique em Desbloquear. O PDF e processado e voce baixa a versao sem protecao — mesmo conteudo, sem restricoes." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Tipos de protecao PDF</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Tipo</th>
                  <th className="text-left py-3 px-4 font-bold">Sintoma</th>
                  <th className="text-left py-3 px-4 font-bold">Precisa de senha para desbloquear?</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Senha de abertura</td><td className="py-3 px-4">PDF nao abre sem senha</td><td className="py-3 px-4 text-red-600 font-semibold">Sim</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Senha de permissoes</td><td className="py-3 px-4">PDF abre mas nao permite imprimir/copiar/editar</td><td className="py-3 px-4 text-green-600 font-semibold">Nao (em muitos casos)</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Ambas</td><td className="py-3 px-4">Exige senha para abrir E restringe permissoes</td><td className="py-3 px-4 text-red-600 font-semibold">Sim (para a senha de abertura)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Esqueceu a senha?</h2>
            <p className="text-slate-600 mb-4">Se voce esqueceu a senha de abertura do PDF, as opcoes sao limitadas. Leia nosso guia completo sobre <Link href="/br/aprender/desbloquear-pdf-senha-esquecida" className="text-orange-600 hover:underline">desbloquear PDF com senha esquecida</Link> para entender suas alternativas.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Apos desbloquear</h2>
            <p className="text-slate-600 mb-4">Depois de desbloquear, voce pode:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/br/aprender/desbloquear-pdf-para-imprimir" className="text-orange-600 hover:underline">Imprimir o PDF</Link> sem restricoes.</li>
              <li>&#10003; Copiar texto livremente.</li>
              <li>&#10003; <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Juntar com outros PDFs</Link>.</li>
              <li>&#10003; <Link href="/br/dividir-pdf" className="text-orange-600 hover:underline">Dividir o PDF</Link> em partes.</li>
              <li>&#10003; Se necessario, <Link href="/br/aprender/como-proteger-pdf-com-senha" className="text-orange-600 hover:underline">adicionar uma nova senha</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Desbloqueie seu PDF agora</h2>
          <p className="text-slate-300 mb-6">Remova a senha em segundos — gratis, sem cadastro, conteudo intacto.</p>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Unlock className="h-5 w-5" /> Desbloquear PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Desbloquear PDF com senha esquecida", href: "/br/aprender/desbloquear-pdf-senha-esquecida" },
              { title: "Desbloquear PDF no celular", href: "/br/aprender/desbloquear-pdf-no-celular" },
              { title: "Desbloquear PDF para imprimir", href: "/br/aprender/desbloquear-pdf-para-imprimir" },
              { title: "Como proteger PDF com senha", href: "/br/aprender/como-proteger-pdf-com-senha" },
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
