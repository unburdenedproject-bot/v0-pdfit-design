import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Printer, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Desbloquear PDF para Imprimir — Remover Restricao de Impressao | PDF.it",
  description: "Seu PDF nao permite imprimir? Aprenda a remover a restricao de impressao de PDFs protegidos. Desbloqueie e imprima em segundos.",
  keywords: "desbloquear pdf para imprimir, pdf nao imprime, remover restricao impressao pdf, pdf bloqueado impressao, imprimir pdf protegido",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que meu PDF nao permite imprimir?", "acceptedAnswer": { "@type": "Answer", "text": "O criador do PDF definiu uma senha de permissoes que restringe a impressao. Isso e diferente da senha de abertura — voce pode abrir e ler o PDF, mas nao pode imprimir, copiar texto ou editar." } },
  { "@type": "Question", "name": "Posso remover a restricao de impressao sem a senha?", "acceptedAnswer": { "@type": "Answer", "text": "Na maioria dos casos, sim. A ferramenta Desbloquear PDF do PDF.it pode remover restricoes de permissao (impressao, copia, edicao) sem precisar da senha de permissoes. Isso so funciona se o PDF nao tiver senha de abertura." } },
  { "@type": "Question", "name": "O conteudo do PDF muda ao desbloquear?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. Desbloquear apenas remove as restricoes. O conteudo, formatacao, imagens e layout permanecem 100% identicos." } },
  { "@type": "Question", "name": "E legal remover a restricao de impressao?", "acceptedAnswer": { "@type": "Answer", "text": "Se voce e o proprietario do documento ou tem autorizacao para imprimir, sim. Respeite sempre os direitos autorais e as politicas do criador do documento." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como desbloquear PDF para imprimir", "description": "Remova a restricao de impressao do PDF em 3 passos.", "step": [
  { "@type": "HowToStep", "name": "Envie o PDF bloqueado", "text": "Acesse a ferramenta Desbloquear PDF do PDF.it e envie o PDF que nao permite imprimir." },
  { "@type": "HowToStep", "name": "Remova as restricoes", "text": "O PDF.it detecta as restricoes de permissao e as remove automaticamente." },
  { "@type": "HowToStep", "name": "Imprima o PDF", "text": "Baixe o PDF desbloqueado e imprima normalmente usando Ctrl+P ou o menu do navegador." }
] }

export default function DesbloquearPdfParaImprimirPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear PDF para Imprimir</h1>
          <p className="text-xl text-slate-300">Seu PDF abre normalmente mas nao permite imprimir? Aprenda a remover essa restricao em segundos e imprima seu documento sem problemas.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Printer className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para desbloquear? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Desbloquear PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que o PDF nao imprime?</h2>
            <p className="text-slate-600 mb-4">Quando voce tenta imprimir e o botao esta cinza ou aparece uma mensagem de erro, isso significa que o criador do PDF adicionou uma <strong>senha de permissoes</strong> que bloqueia especificamente a impressao. Esse tipo de protecao:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Permite abrir e ler.</strong> Voce consegue ver todo o conteudo normalmente.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Bloqueia imprimir.</strong> O comando Ctrl+P e desabilitado ou produz erro.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Pode bloquear copiar texto.</strong> Selecionar e copiar texto tambem pode estar desabilitado.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Pode bloquear edicao.</strong> Preencher formularios e adicionar anotacoes podem estar bloqueados.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como desbloquear para imprimir (passo a passo)</h2>
            <div className="space-y-4">
              {[
                { title: "Envie o PDF bloqueado", desc: "Acesse a ferramenta Desbloquear PDF do PDF.it e envie o PDF que nao permite imprimir. Como o PDF abre sem senha, voce pode envia-lo normalmente." },
                { title: "O PDF.it remove as restricoes", desc: "A ferramenta detecta automaticamente as restricoes de permissao (impressao, copia, edicao) e as remove do PDF." },
                { title: "Baixe e imprima", desc: "Baixe o PDF desbloqueado. Agora use Ctrl+P (Windows) ou Cmd+P (Mac) para imprimir normalmente. A qualidade e identica ao original." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para impressao de qualidade</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Verifique o tamanho do papel.</strong> Certifique-se de que a configuracao da impressora corresponde ao tamanho do PDF (A4, Carta, etc.).</li>
              <li>&#10003; <strong>Escolha "Tamanho real"</strong> nas opcoes de impressao para evitar que o conteudo seja reduzido.</li>
              <li>&#10003; <strong>Para impressao em frente e verso</strong>, verifique se sua impressora suporta duplex automatico.</li>
              <li>&#10003; <strong>Se o PDF for de uma apresentacao</strong>, veja nosso guia de <Link href="/br/aprender/ppt-para-pdf-para-imprimir" className="text-[#14D8C4] hover:underline">PPT para PDF para imprimir</Link>.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">E se o PDF tiver senha de abertura?</h2>
            <p className="text-slate-600 mb-4">Se o PDF nao abre sem senha (diferente de so bloquear impressao), voce precisa da senha para desbloquear. Veja nossos guias:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/br/aprender/como-desbloquear-pdf" className="text-[#14D8C4] hover:underline">Como desbloquear PDF</Link> (guia completo).</li>
              <li>&#10003; <Link href="/br/aprender/desbloquear-pdf-senha-esquecida" className="text-[#14D8C4] hover:underline">Desbloquear PDF com senha esquecida</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Desbloqueie e imprima seu PDF</h2>
          <p className="text-slate-300 mb-6">Remova a restricao de impressao em segundos — gratis, sem cadastro.</p>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Printer className="h-5 w-5" /> Desbloquear PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como desbloquear PDF (guia completo)", href: "/br/aprender/como-desbloquear-pdf" },
              { title: "Desbloquear PDF com senha esquecida", href: "/br/aprender/desbloquear-pdf-senha-esquecida" },
              { title: "Desbloquear PDF no celular", href: "/br/aprender/desbloquear-pdf-no-celular" },
              { title: "Como proteger PDF com senha", href: "/br/aprender/como-proteger-pdf-com-senha" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}
