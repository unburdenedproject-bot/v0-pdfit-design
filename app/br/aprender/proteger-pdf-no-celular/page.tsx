import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Smartphone, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Proteger PDF no Celular — Android e iPhone | PDF.it",
  description: "Aprenda a adicionar senha em PDF direto no celular. Guia para Android e iPhone, sem app necessario. Proteja documentos confidenciais em segundos.",
  keywords: "proteger pdf celular, senha pdf android, proteger pdf iphone, criptografar pdf celular, pdf com senha celular",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Preciso instalar app para proteger PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it funciona direto no navegador do celular. Acesse o site, envie o PDF, defina a senha e baixe o arquivo protegido. Funciona em Chrome (Android) e Safari (iPhone)." } },
  { "@type": "Question", "name": "A protecao feita no celular e tao segura quanto no computador?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O processamento e feito nos servidores do PDF.it com criptografia AES-256. A seguranca e identica independente do dispositivo usado." } },
  { "@type": "Question", "name": "Posso proteger e enviar direto pelo WhatsApp?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos proteger o PDF, use o botao compartilhar do celular para enviar diretamente pelo WhatsApp, Telegram, email ou qualquer app. Lembre-se de enviar a senha por outro canal." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como proteger PDF no celular", "description": "Adicione senha ao seu PDF usando o celular em 3 passos.", "step": [
  { "@type": "HowToStep", "name": "Abra o PDF.it no navegador", "text": "No celular, abra Chrome ou Safari e acesse a ferramenta Proteger PDF do PDF.it." },
  { "@type": "HowToStep", "name": "Envie o PDF e defina a senha", "text": "Toque na area de upload, selecione o PDF e digite a senha desejada." },
  { "@type": "HowToStep", "name": "Baixe e compartilhe", "text": "Toque em Proteger, baixe o PDF criptografado e compartilhe pelo app desejado." }
] }

export default function ProtegerPdfNoCelularPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Proteger PDF no Celular</h1>
          <p className="text-xl text-slate-300">Precisa adicionar senha em um PDF direto no celular? Veja como proteger documentos no Android e iPhone sem instalar nenhum aplicativo.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Smartphone className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para proteger? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que proteger PDF no celular?</h2>
            <p className="text-slate-600 mb-4">Muitas vezes voce precisa enviar um documento confidencial e so tem o celular em maos:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Urgencia.</strong> Voce recebe um pedido urgente para enviar um documento protegido e nao tem acesso ao computador.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Mobilidade.</strong> Profissionais que trabalham em campo frequentemente precisam enviar documentos sensiveis pelo celular.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Praticidade.</strong> Com o PDF.it, voce protege, baixa e compartilha pelo WhatsApp em menos de 1 minuto.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">No Android (Chrome)</h2>
            <div className="space-y-4">
              {[
                { title: "Abra o Chrome", desc: "Acesse pdf.it.com/br/proteger-pdf. O site se adapta automaticamente a tela do celular." },
                { title: "Envie o PDF e defina a senha", desc: "Toque na area de upload, selecione o PDF do armazenamento interno ou Google Drive. Digite uma senha forte." },
                { title: "Proteja e compartilhe", desc: "Toque em Proteger. Baixe o PDF protegido e use o menu Compartilhar para enviar por WhatsApp, Telegram, email ou salvar no Google Drive." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">No iPhone (Safari)</h2>
            <div className="space-y-4">
              {[
                { title: "Abra o Safari", desc: "Acesse pdf.it.com/br/proteger-pdf no Safari. Dica: adicione o site a Tela de Inicio para acesso rapido." },
                { title: "Selecione o PDF e defina a senha", desc: "Toque na area de upload, escolha o PDF do iCloud Drive, app Arquivos ou outra fonte. Digite sua senha." },
                { title: "Proteja e compartilhe", desc: "Toque em Proteger, baixe o PDF e use o botao Compartilhar para enviar via AirDrop, WhatsApp, email ou salvar no iCloud." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas de seguranca no celular</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Envie a senha por outro canal</strong> — se enviar o PDF por email, mande a senha por WhatsApp (ou vice-versa).</li>
              <li>&#10003; <strong>Use senha forte</strong> — 12+ caracteres com letras, numeros e simbolos. Veja nossas <Link href="/br/aprender/melhores-praticas-senha-pdf" className="text-orange-600 hover:underline">melhores praticas para senhas</Link>.</li>
              <li>&#10003; <strong>Delete o PDF desprotegido</strong> do celular apos criar a versao protegida.</li>
              <li>&#10003; <strong>Use rede Wi-Fi segura</strong> — evite redes publicas ao enviar documentos confidenciais.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Precisa desbloquear um PDF no celular?</h2>
            <p className="text-slate-600">Se voce recebeu um PDF protegido e precisa remover a senha, veja nosso guia de <Link href="/br/aprender/desbloquear-pdf-no-celular" className="text-orange-600 hover:underline">como desbloquear PDF no celular</Link>.</p>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Proteja seu PDF no celular agora</h2>
          <p className="text-slate-300 mb-6">Adicione senha em segundos, direto no navegador — gratis, sem instalar nada.</p>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Smartphone className="h-5 w-5" /> Proteger PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como proteger PDF com senha (guia completo)", href: "/br/aprender/como-proteger-pdf-com-senha" },
              { title: "Proteger PDF antes de enviar por email", href: "/br/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Melhores praticas para senhas de PDF", href: "/br/aprender/melhores-praticas-senha-pdf" },
              { title: "Desbloquear PDF no celular", href: "/br/aprender/desbloquear-pdf-no-celular" },
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
