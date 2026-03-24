import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR de PDF no Celular (iPhone e Android) | PDF.it",
  description:
    "Aprenda como aplicar OCR em PDFs digitalizados direto do celular. Funciona no iPhone e Android sem instalar nenhum app — tudo no navegador.",
  keywords: "ocr pdf celular, ocr pdf iphone, ocr pdf android, ocr pdf online celular, scanner ocr celular",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Posso usar OCR no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O Scanner OCR do PDF.it funciona no navegador do celular (Safari ou Chrome), sem necessidade de instalar nenhum aplicativo." } },
    { "@type": "Question", "name": "Funciona no iPhone e Android?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Qualquer navegador moderno funciona, incluindo Safari no iPhone e Chrome no Android." } },
    { "@type": "Question", "name": "Posso digitalizar um documento com a camera e aplicar OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Tire uma foto do documento, converta para PDF usando JPG para PDF, e depois aplique OCR com o Scanner OCR. Para melhores resultados, use a ferramenta Limpeza de Digitalizacao antes." } },
    { "@type": "Question", "name": "O processamento e feito no celular?", "acceptedAnswer": { "@type": "Answer", "text": "O processamento OCR e feito nos servidores do PDF.it. Voce faz upload do PDF e baixa o resultado — o celular nao precisa de muito poder de processamento." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Usar OCR no Celular",
  "description": "Aplique OCR em PDFs digitalizados usando seu iPhone ou Android.",
  "step": [
    { "@type": "HowToStep", "name": "Abra o PDF.it no navegador", "text": "No Safari (iPhone) ou Chrome (Android), acesse pdf.it.com e va para o Scanner OCR." },
    { "@type": "HowToStep", "name": "Faca upload do PDF", "text": "Selecione o PDF da pasta de arquivos ou downloads do celular." },
    { "@type": "HowToStep", "name": "Processe e baixe", "text": "Selecione o idioma, processe o OCR e baixe o PDF pesquisavel para o celular." }
  ]
}

export default function OCRPDFCelularPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR de PDF no Celular</h1>
              <p className="text-xl text-slate-300">Aplique OCR em PDFs digitalizados direto do seu iPhone ou Android. Sem apps, sem instalacao — tudo funciona no navegador do celular.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Use o Scanner OCR no seu celular agora.</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Scanner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar OCR no Celular?</h2>
              <p className="text-slate-600 mb-4">Voce esta fora do escritorio, recebe um contrato digitalizado por e-mail e precisa encontrar uma clausula especifica. Ou fotografa um documento importante com o celular e quer tornar o texto pesquisavel imediatamente.</p>
              <p className="text-slate-600 mb-4">Com o PDF.it, voce pode aplicar OCR em qualquer PDF direto do navegador do celular. O processamento e feito nos servidores, entao nao importa se seu celular e novo ou antigo.</p>
              <p className="text-slate-600">O fluxo e identico ao do computador: upload, selecionar idioma, processar e baixar.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo no Celular</h2>
              <div className="space-y-4">
                {[
                  { title: "Abra o PDF.it no navegador", desc: "No Safari (iPhone) ou Chrome (Android), acesse pdf.it.com. Toque no menu e selecione Scanner OCR." },
                  { title: "Selecione o PDF", desc: "Toque no botao de upload. No iPhone, escolha do app Arquivos ou de anexos de e-mail. No Android, selecione de Downloads ou do gerenciador de arquivos." },
                  { title: "Escolha o idioma", desc: "Selecione o idioma principal do documento (portugues, ingles, etc.) para maximizar a precisao do reconhecimento." },
                  { title: "Processe e baixe", desc: "Toque em processar e aguarde. O PDF pesquisavel sera baixado automaticamente para a pasta Downloads do celular." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Digitalizacao com Camera + OCR</h2>
              <p className="text-slate-600 mb-4">Uma combinacao poderosa no celular: fotografe um documento com a camera, converta a foto para PDF e aplique OCR. Veja como:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span>Tire uma foto bem iluminada do documento com a camera do celular.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span>Use <Link href="/br/limpeza-digitalizacao" className="text-orange-600 hover:underline">Limpeza de Digitalizacao</Link> para melhorar o contraste e remover sombras.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span>Converta a imagem para PDF com <Link href="/br/jpg-para-pdf" className="text-orange-600 hover:underline">JPG para PDF</Link>.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span>Aplique OCR com o <Link href="/br/scanner-ocr" className="text-orange-600 hover:underline">Scanner OCR</Link> para tornar o texto pesquisavel.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para o Celular</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Use Wi-Fi</h3><p className="text-slate-600">PDFs digitalizados podem ser grandes. Use Wi-Fi para upload e download mais rapidos e para economizar dados moveis.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Boa Iluminacao para Fotos</h3><p className="text-slate-600">Se estiver fotografando documentos com a camera, garanta iluminacao uniforme sem sombras. Isso melhora drasticamente a precisao do OCR.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Verifique o Resultado</h3><p className="text-slate-600">Apos baixar, abra o PDF e use a funcao de busca do leitor de PDF do celular para confirmar que o OCR funcionou corretamente.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">iPhone vs Android</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>iPhone:</strong> Use Safari. O PDF e salvo no app Arquivos, pasta Downloads. Voce tambem pode compartilhar direto por AirDrop ou e-mail.</li>
                <li>&#10003; <strong>Android:</strong> Use Chrome. O PDF vai para a pasta Downloads. Compartilhe via WhatsApp, e-mail ou qualquer app de mensagens.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">OCR no Celular em Segundos</h2>
            <p className="text-slate-300 mb-6">Torne qualquer PDF digitalizado pesquisavel direto do seu celular.</p>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Scanner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "O Que E OCR?", href: "/br/aprender/o-que-e-ocr" },
                { title: "OCR para Documento Digitalizado", href: "/br/aprender/ocr-documento-digitalizado" },
                { title: "OCR: PDF para Texto Pesquisavel", href: "/br/aprender/ocr-pdf-para-texto-pesquisavel" },
                { title: "Dicas para Melhorar a Precisao do OCR", href: "/br/aprender/dicas-precisao-ocr" },
                { title: "OCR para Texto Manuscrito", href: "/br/aprender/ocr-texto-manuscrito" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Posso usar OCR no celular?", a: "Sim. O Scanner OCR do PDF.it funciona no navegador do celular, sem necessidade de instalar nenhum aplicativo." },
                { q: "Funciona no iPhone e Android?", a: "Sim. Qualquer navegador moderno funciona, incluindo Safari no iPhone e Chrome no Android." },
                { q: "Posso digitalizar com a camera e aplicar OCR?", a: "Sim. Tire uma foto, converta para PDF e aplique OCR. Use Limpeza de Digitalizacao antes para melhores resultados." },
                { q: "O processamento e feito no celular?", a: "O processamento OCR e feito nos servidores do PDF.it. Voce faz upload e baixa o resultado — o celular nao precisa de muito poder de processamento." },
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
