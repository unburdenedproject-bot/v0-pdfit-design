import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Smartphone, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Office para PDF no Celular — Android e iPhone | PDF.it",
  description: "Converta arquivos Word, Excel e PowerPoint para PDF direto no celular. Guia completo para Android e iPhone, sem app necessario.",
  keywords: "office para pdf celular, converter office pdf android, office para pdf iphone, word para pdf celular, excel para pdf celular",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Preciso instalar algum app para converter Office para PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it funciona diretamente no navegador do celular (Chrome, Safari, Firefox). Basta acessar o site, enviar o arquivo e baixar o PDF." } },
  { "@type": "Question", "name": "Funciona tanto no Android quanto no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it e responsivo e funciona em qualquer navegador moderno, tanto em Android quanto em iPhone/iPad." } },
  { "@type": "Question", "name": "Posso converter arquivos do Google Drive ou iCloud?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Ao tocar na area de upload, voce pode selecionar arquivos do Google Drive, iCloud Drive, OneDrive, Dropbox ou da memoria do celular." } },
  { "@type": "Question", "name": "A qualidade e a mesma de converter no computador?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O processamento e feito nos servidores do PDF.it, nao no dispositivo. A qualidade do PDF e identica independente de onde voce acessa." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como converter Office para PDF no celular", "description": "Converta documentos do Office para PDF no Android ou iPhone em 3 passos.", "step": [
  { "@type": "HowToStep", "name": "Abra o PDF.it no navegador", "text": "No celular, abra o Chrome (Android) ou Safari (iPhone) e acesse a ferramenta Office para PDF do PDF.it." },
  { "@type": "HowToStep", "name": "Envie o arquivo do Office", "text": "Toque na area de upload e selecione o arquivo DOCX, XLSX ou PPTX do armazenamento do celular ou da nuvem." },
  { "@type": "HowToStep", "name": "Baixe e compartilhe o PDF", "text": "Toque em Converter, baixe o PDF e compartilhe por WhatsApp, email ou qualquer app." }
] }

export default function OfficeParaPdfNoCelularPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Office para PDF no Celular</h1>
          <p className="text-xl text-slate-300">Precisa converter um documento do Word, Excel ou PowerPoint para PDF direto no celular? Veja como fazer em Android e iPhone, sem instalar nenhum aplicativo.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Smartphone className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter Office para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que converter no celular?</h2>
            <p className="text-slate-600 mb-4">Nem sempre voce esta perto de um computador quando precisa enviar um documento em PDF. Situacoes comuns:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Enviar curriculo por email.</strong> Recrutadores pedem PDF — converta seu DOCX direto no celular antes de enviar.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Compartilhar planilha pelo WhatsApp.</strong> PDFs sao mais leves e qualquer pessoa pode abrir, mesmo sem Excel instalado.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Enviar apresentacao para cliente.</strong> PDF garante que o layout fique perfeito em qualquer dispositivo do cliente.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a passo no Android</h2>
            <div className="space-y-4">
              {[
                { title: "Abra o Chrome", desc: "No seu Android, abra o Chrome e acesse pdf.it.com/br/office-para-pdf. O site se adapta automaticamente a tela do celular." },
                { title: "Envie o arquivo", desc: "Toque na area de upload. Voce pode selecionar arquivos do armazenamento interno, Google Drive, OneDrive ou Dropbox. DOCX, XLSX e PPTX sao aceitos." },
                { title: "Converta e compartilhe", desc: "Toque em Converter, aguarde alguns segundos e baixe o PDF. Use o botao Compartilhar do Android para enviar por WhatsApp, Telegram, email ou salvar no Google Drive." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a passo no iPhone</h2>
            <div className="space-y-4">
              {[
                { title: "Abra o Safari", desc: "No seu iPhone, abra o Safari e acesse pdf.it.com/br/office-para-pdf. Para uma experiencia ainda melhor, adicione o site a Tela de Inicio." },
                { title: "Selecione o arquivo", desc: "Toque na area de upload e escolha o arquivo do iCloud Drive, Google Drive ou do app Arquivos. Formatos DOCX, XLSX e PPTX sao aceitos." },
                { title: "Baixe e compartilhe", desc: "Apos a conversao, toque em Baixar. O PDF vai para a pasta Downloads do app Arquivos. Compartilhe via AirDrop, WhatsApp, email ou qualquer app." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para converter no celular</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Use Wi-Fi para arquivos grandes</strong> — a conversao e mais rapida com boa conexao.</li>
              <li>&#10003; <strong>Verifique o PDF antes de enviar</strong> — abra o PDF no celular para confirmar que a formatacao esta correta.</li>
              <li>&#10003; <strong>Para PPT especificamente</strong>, veja nosso guia de <Link href="/br/aprender/ppt-para-pdf-no-iphone" className="text-orange-600 hover:underline">PPT para PDF no iPhone</Link>.</li>
              <li>&#10003; <strong>Para manter a formatacao perfeita</strong>, leia nosso artigo sobre <Link href="/br/aprender/office-para-pdf-manter-formato" className="text-orange-600 hover:underline">como manter o formato ao converter</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta Office para PDF no seu celular agora</h2>
          <p className="text-slate-300 mb-6">Envie qualquer documento do Office e obtenha um PDF perfeito — gratis, direto no navegador.</p>
          <Link href="/br/office-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Smartphone className="h-5 w-5" /> Converter Office para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Conversor Office para PDF: guia completo", href: "/br/aprender/office-para-pdf-conversor" },
              { title: "PPT para PDF no iPhone (metodo rapido)", href: "/br/aprender/ppt-para-pdf-no-iphone" },
              { title: "Office para PDF — como manter o formato", href: "/br/aprender/office-para-pdf-manter-formato" },
              { title: "Converter DOCX, XLSX, PPTX para PDF", href: "/br/aprender/converter-docx-xlsx-pptx-para-pdf" },
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
