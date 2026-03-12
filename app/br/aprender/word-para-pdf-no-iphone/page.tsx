import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter Word para PDF no iPhone (Sem Apps) | OmnisPDF",
  description:
    "Aprenda como converter Word para PDF no iPhone usando apenas o navegador. Sem instalar apps — guia rápido para converter .docx para PDF no iOS.",
  keywords: "word para pdf iphone, converter word para pdf iphone, docx para pdf iphone, word para pdf ios, converter documento iphone",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Preciso do Microsoft Word no iPhone para converter?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O OmnisPDF converte Word para PDF direto no navegador, sem precisar do app Microsoft Word instalado no iPhone." } },
    { "@type": "Question", "name": "Onde encontro o arquivo Word no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Arquivos Word podem estar no app Arquivos, iCloud Drive, email (anexo), WhatsApp ou Google Drive. O OmnisPDF permite selecionar de qualquer uma dessas fontes." } },
    { "@type": "Question", "name": "A formatação é mantida no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF processa o documento no servidor, mantendo fontes, imagens e layout. O resultado é igual ao de um computador." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Converter Word para PDF no iPhone",
  "description": "Converta documentos Word para PDF direto no iPhone em 3 passos.",
  "step": [
    { "@type": "HowToStep", "name": "Abra o OmnisPDF no Safari", "text": "No iPhone, abra o Safari e acesse a ferramenta Word para PDF do OmnisPDF." },
    { "@type": "HowToStep", "name": "Envie o arquivo Word", "text": "Toque em Escolher arquivo e selecione o .docx do app Arquivos, iCloud ou email." },
    { "@type": "HowToStep", "name": "Baixe o PDF", "text": "Toque em Converter e baixe o PDF. Ele vai para a pasta Downloads do iPhone." }
  ]
}

export default function WordParaPdfNoIphonePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Word para PDF no iPhone (Sem Apps)</h1>
              <p className="text-xl text-slate-300">
                Precisa converter um documento Word para PDF direto no iPhone? Veja como fazer em segundos usando apenas o Safari — sem instalar nada.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Funciona direto no Safari do iPhone.</p>
            </div>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter Word para PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Você Precisa Disso?</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Enviar currículo por email.</strong> Recrutadores pedem PDF — e você só tem o .docx no celular.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Compartilhar documento no WhatsApp.</strong> PDFs são mais profissionais e abrem igual em qualquer celular.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Preencher formulário online.</strong> Muitos sites pedem upload de documento em PDF, não Word.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Urgência.</strong> Quando está longe do computador e precisa converter agora.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo no iPhone</h2>
              <div className="space-y-4">
                {[
                  { title: "Abra o OmnisPDF no Safari", desc: "No iPhone, abra o Safari e acesse omnispdf.com. Vá para a ferramenta Word para PDF. O site é totalmente responsivo." },
                  { title: "Envie o arquivo Word", desc: "Toque em 'Escolher arquivo'. Selecione o .docx do app Arquivos, iCloud Drive, Downloads, ou de um anexo de email salvo. Também funciona com arquivos do Google Drive." },
                  { title: "Converta e baixe o PDF", desc: "Toque em Converter. Em segundos, o PDF será gerado com toda a formatação do Word mantida. Baixe o PDF — ele vai para a pasta Downloads." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Onde Encontrar o PDF no iPhone</h2>
              <ul className="space-y-2 text-slate-700">
                <li>- Abra o app <strong>Arquivos</strong> e vá para <strong>Downloads</strong></li>
                <li>- No Safari, toque no ícone de downloads (seta para baixo) na barra de endereço</li>
                <li>- Use <strong>Compartilhar</strong> para enviar o PDF por email, WhatsApp ou AirDrop</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para iPhone</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Salve Documentos no Arquivos</h3>
                  <p className="text-slate-600">Mantenha seus documentos Word organizados no app Arquivos do iPhone. Isso facilita encontrá-los na hora de converter.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use o AirDrop para Transferir</h3>
                  <p className="text-slate-600">Depois de converter, use AirDrop para enviar o PDF para seu Mac ou outro dispositivo Apple instantaneamente.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verifique a Formatação</h3>
                  <p className="text-slate-600">Abra o PDF no iPhone antes de enviar para verificar que fontes e imagens ficaram corretas.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converter Word para PDF no iPhone</h2>
            <p className="text-slate-300 mb-6">Direto no Safari — sem app, sem cadastro, formatação mantida.</p>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <FileIcon className="h-5 w-5" /> Converter Word para PDF
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter Word para PDF Online (Guia Completo)", href: "/br/aprender/converter-word-para-pdf" },
                { title: "Word para PDF — Erros Comuns de Formato", href: "/br/aprender/word-para-pdf-erros-comuns-de-formato" },
                { title: "PDF para JPG no iPhone (Sem Apps)", href: "/br/aprender/pdf-para-jpg-no-iphone" },
                { title: "Extrair Texto de PDF no Celular", href: "/br/aprender/extrair-texto-de-pdf-no-celular" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Preciso do Microsoft Word no iPhone para converter?", a: "Não. O OmnisPDF converte Word para PDF direto no navegador, sem precisar do app Microsoft Word instalado." },
                { q: "Onde encontro o arquivo Word no iPhone?", a: "Arquivos Word podem estar no app Arquivos, iCloud Drive, email (anexo), WhatsApp ou Google Drive." },
                { q: "A formatação é mantida no celular?", a: "Sim. O OmnisPDF processa o documento no servidor, mantendo fontes, imagens e layout. O resultado é igual ao de um computador." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
