import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Smartphone, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Desbloquear PDF no Celular — Android e iPhone | PDF.it",
  description: "Aprenda a remover senha e restricoes de PDF direto no celular. Guia para Android e iPhone, sem app necessario.",
  keywords: "desbloquear pdf celular, remover senha pdf android, desbloquear pdf iphone, tirar senha pdf celular, pdf sem senha celular",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Preciso instalar app para desbloquear PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it funciona direto no navegador do celular (Chrome ou Safari). Acesse o site, envie o PDF, digite a senha e baixe o arquivo desbloqueado." } },
  { "@type": "Question", "name": "Funciona em Android e iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador moderno, tanto em Android quanto em iPhone/iPad." } },
  { "@type": "Question", "name": "Posso desbloquear um PDF recebido pelo WhatsApp?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Salve o PDF do WhatsApp no celular, depois abra o PDF.it no navegador e envie o arquivo salvo. Apos desbloquear, voce pode compartilhar de volta pelo WhatsApp." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como desbloquear PDF no celular", "description": "Remova a senha do PDF usando o celular em 3 passos.", "step": [
  { "@type": "HowToStep", "name": "Abra o PDF.it no navegador", "text": "No celular, abra Chrome ou Safari e acesse a ferramenta Desbloquear PDF do PDF.it." },
  { "@type": "HowToStep", "name": "Envie o PDF e digite a senha", "text": "Toque na area de upload, selecione o PDF e digite a senha atual." },
  { "@type": "HowToStep", "name": "Baixe e compartilhe", "text": "Toque em Desbloquear, baixe o PDF sem senha e compartilhe pelo app desejado." }
] }

export default function DesbloquearPdfNoCelularPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear PDF no Celular</h1>
          <p className="text-xl text-slate-300">Precisa remover a senha de um PDF e so tem o celular? Veja como desbloquear no Android e iPhone, sem instalar nenhum aplicativo.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Smartphone className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para desbloquear? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Desbloquear PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Quando voce precisa desbloquear no celular?</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Recebeu PDF protegido pelo WhatsApp.</strong> Um colega enviou um documento com senha e voce precisa salvar sem protecao.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Precisa imprimir do celular.</strong> O PDF tem restricao de impressao e voce quer imprimir via AirPrint ou Google Cloud Print.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Nao tem computador disponivel.</strong> Voce esta fora do escritorio e precisa resolver rapidamente.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">No Android (Chrome)</h2>
            <div className="space-y-4">
              {[
                { title: "Abra o Chrome", desc: "Acesse pdf.it.com/br/desbloquear-pdf. O site se adapta automaticamente a tela do celular." },
                { title: "Envie o PDF", desc: "Toque na area de upload e selecione o PDF do armazenamento interno, Google Drive ou Downloads. Se o PDF foi recebido pelo WhatsApp, primeiro salve no armazenamento." },
                { title: "Digite a senha e desbloqueie", desc: "Se o PDF tem senha de abertura, digite-a. Para restricoes de permissao, o processo pode ser automatico. Toque em Desbloquear e baixe o PDF livre." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">No iPhone (Safari)</h2>
            <div className="space-y-4">
              {[
                { title: "Abra o Safari", desc: "Acesse pdf.it.com/br/desbloquear-pdf no Safari." },
                { title: "Selecione o PDF", desc: "Toque na area de upload e escolha o PDF do iCloud Drive, app Arquivos ou outra fonte." },
                { title: "Desbloqueie e compartilhe", desc: "Digite a senha (se necessario), toque em Desbloquear e baixe. Use o botao Compartilhar para enviar via AirDrop, WhatsApp ou email." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas uteis</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Esqueceu a senha?</strong> Veja nosso guia de <Link href="/br/aprender/desbloquear-pdf-senha-esquecida" className="text-[#14D8C4] hover:underline">PDF com senha esquecida</Link>.</li>
              <li>&#10003; <strong>Precisa imprimir?</strong> Apos desbloquear, veja <Link href="/br/aprender/desbloquear-pdf-para-imprimir" className="text-[#14D8C4] hover:underline">como desbloquear para imprimir</Link>.</li>
              <li>&#10003; <strong>Quer proteger depois?</strong> Use a ferramenta <Link href="/br/aprender/proteger-pdf-no-celular" className="text-[#14D8C4] hover:underline">Proteger PDF no celular</Link> para adicionar uma nova senha.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Desbloqueie seu PDF no celular agora</h2>
          <p className="text-slate-300 mb-6">Remova a senha em segundos, direto no navegador — gratis, sem instalar nada.</p>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Smartphone className="h-5 w-5" /> Desbloquear PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como desbloquear PDF (guia completo)", href: "/br/aprender/como-desbloquear-pdf" },
              { title: "Desbloquear PDF com senha esquecida", href: "/br/aprender/desbloquear-pdf-senha-esquecida" },
              { title: "Desbloquear PDF para imprimir", href: "/br/aprender/desbloquear-pdf-para-imprimir" },
              { title: "Proteger PDF no celular", href: "/br/aprender/proteger-pdf-no-celular" },
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
