import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Smartphone, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter PPT para PDF no iPhone (Metodo Rapido) | OmnisPDF",
  description: "Aprenda a converter apresentacoes PowerPoint para PDF direto no seu iPhone. Sem app necessario — use o navegador Safari e converta PPTX para PDF em segundos.",
  keywords: "ppt para pdf iphone, converter powerpoint para pdf iphone, pptx para pdf celular, powerpoint para pdf no celular, converter ppt iphone",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Posso converter PPT para PDF no iPhone sem instalar nenhum app?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona diretamente no navegador Safari do iPhone. Basta acessar o site, enviar seu arquivo PPTX e baixar o PDF convertido. Nenhum app precisa ser instalado." } },
  { "@type": "Question", "name": "A qualidade da conversao no iPhone e a mesma do computador?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O processamento acontece nos servidores do OmnisPDF, nao no seu dispositivo. A qualidade e identica independente de voce usar iPhone, Android ou computador." } },
  { "@type": "Question", "name": "Qual o tamanho maximo de arquivo que posso converter no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem converter arquivos ate 25MB. Usuarios Pro podem enviar arquivos ate 200MB. Isso vale para qualquer dispositivo, incluindo iPhone." } },
  { "@type": "Question", "name": "Onde o PDF convertido fica salvo no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF e baixado para a pasta Downloads do seu iPhone, acessivel pelo app Arquivos. Voce tambem pode compartilhar diretamente via AirDrop, WhatsApp, email ou qualquer outro app." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como converter PPT para PDF no iPhone", "description": "Converta PowerPoint para PDF no iPhone em 3 passos simples usando o navegador.", "step": [
  { "@type": "HowToStep", "name": "Abra o OmnisPDF no Safari", "text": "No seu iPhone, abra o Safari e acesse a ferramenta PowerPoint para PDF do OmnisPDF." },
  { "@type": "HowToStep", "name": "Envie seu arquivo PPTX", "text": "Toque na area de upload e selecione o arquivo PowerPoint do iCloud Drive, Google Drive, ou da memoria do iPhone." },
  { "@type": "HowToStep", "name": "Baixe o PDF", "text": "Toque em Converter e depois baixe o PDF. O arquivo estara disponivel na pasta Downloads do app Arquivos." }
] }

export default function PptParaPdfNoIphonePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">PPT para PDF no iPhone</h1>
          <p className="text-xl text-slate-300">Precisa converter uma apresentacao PowerPoint para PDF direto no seu iPhone? Veja como fazer em segundos, sem instalar nenhum aplicativo.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Smartphone className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter PPT para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que converter PPT para PDF no iPhone?</h2>
            <p className="text-slate-600 mb-4">Muitas vezes voce recebe um arquivo PowerPoint pelo WhatsApp, email ou Google Drive e precisa transforma-lo em PDF rapidamente. No iPhone, isso e util para:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Compartilhar sem problemas de formatacao.</strong> PDFs mantem o layout original em qualquer dispositivo. Enviar um PPTX pode resultar em fontes trocadas e slides desconfigurados.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Enviar por WhatsApp ou email.</strong> PDFs sao mais leves e universais. Qualquer pessoa consegue abrir sem precisar do PowerPoint.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Imprimir direto do celular.</strong> Se voce precisa <Link href="/br/aprender/ppt-para-pdf-para-imprimir" className="text-orange-600 hover:underline">imprimir sua apresentacao</Link>, o PDF garante que tudo saia como esperado.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como converter PPT para PDF no iPhone (passo a passo)</h2>
            <div className="space-y-4">
              {[
                { title: "Abra o OmnisPDF no Safari", desc: "No seu iPhone, abra o Safari e acesse omnispdf.com/br/powerpoint-para-pdf. O site e totalmente responsivo e funciona perfeitamente em telas de celular." },
                { title: "Envie seu arquivo PowerPoint", desc: "Toque na area de upload. Voce pode selecionar arquivos do iCloud Drive, Google Drive, Dropbox, do app Arquivos ou de qualquer lugar no seu iPhone. Formatos PPTX e PPT sao aceitos." },
                { title: "Converta e baixe o PDF", desc: "Toque em Converter. O processamento acontece nos servidores do OmnisPDF (nao no seu iPhone), entao a conversao e rapida mesmo em conexoes mais lentas. Baixe o PDF e compartilhe diretamente." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para converter no iPhone</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Use Wi-Fi para arquivos grandes</strong> — arquivos acima de 10MB convertem mais rapido com Wi-Fi.</li>
              <li>&#10003; <strong>Salve no app Arquivos</strong> — apos baixar, o PDF fica na pasta Downloads do app Arquivos. De la, voce pode mover para o iCloud ou compartilhar.</li>
              <li>&#10003; <strong>Compartilhe diretamente</strong> — use o botao Compartilhar do Safari para enviar o PDF por AirDrop, WhatsApp, Telegram ou email sem precisar salvar primeiro.</li>
              <li>&#10003; <strong>Funciona em Android tambem</strong> — o mesmo metodo funciona no Chrome para Android. Veja nosso guia de <Link href="/br/aprender/office-para-pdf-no-celular" className="text-orange-600 hover:underline">Office para PDF no celular</Link>.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Alternativa: usar o app do PowerPoint no iPhone</h2>
            <p className="text-slate-600 mb-4">Se voce tem o app Microsoft PowerPoint instalado no iPhone, tambem pode exportar diretamente:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; Abra o arquivo no app PowerPoint.</li>
              <li>&#10003; Toque nos tres pontos (...) &gt; <strong>Exportar</strong> &gt; <strong>PDF</strong>.</li>
              <li>&#10003; Escolha onde salvar o PDF.</li>
            </ul>
            <p className="text-slate-600 mt-4">No entanto, se voce nao tem o app instalado ou nao quer instalar, o <Link href="/br/powerpoint-para-pdf" className="text-orange-600 hover:underline">conversor online do OmnisPDF</Link> e a opcao mais rapida.</p>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta PPT para PDF no seu iPhone agora</h2>
          <p className="text-slate-300 mb-6">Envie seu arquivo PPTX e obtenha um PDF perfeito em segundos — gratis, direto no navegador.</p>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Smartphone className="h-5 w-5" /> Converter PPT para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Converter PowerPoint para PDF online (guia completo)", href: "/br/aprender/converter-ppt-para-pdf" },
              { title: "PPT para PDF para imprimir: melhores dicas de layout e qualidade", href: "/br/aprender/ppt-para-pdf-para-imprimir" },
              { title: "Office para PDF no celular: guia completo", href: "/br/aprender/office-para-pdf-no-celular" },
              { title: "PPTX para PDF fontes faltando? Corrija incorporacao e substituicoes", href: "/br/aprender/pptx-para-pdf-fontes-faltando" },
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
