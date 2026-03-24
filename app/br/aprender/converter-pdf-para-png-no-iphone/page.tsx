import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter PDF para PNG no iPhone (Sem Apps) | PDF.it",
  description:
    "Aprenda como converter PDF para PNG no iPhone usando apenas o navegador. Imagens de alta qualidade sem instalar apps — guia rápido e grátis.",
  keywords: "pdf para png iphone, converter pdf para png no iphone, salvar pdf como png iphone, pdf para imagem iphone",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Preciso de app para converter PDF para PNG no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O PDF.it funciona direto no Safari do iPhone. Abra o site, envie seu PDF e baixe as imagens PNG — sem app necessário." } },
    { "@type": "Question", "name": "As imagens PNG ficam com boa qualidade no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. PNG é um formato sem perda de qualidade. As imagens convertidas pelo PDF.it mantêm toda a nitidez do PDF original." } },
    { "@type": "Question", "name": "Onde encontro as imagens PNG baixadas no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "As imagens ficam na pasta Downloads do app Arquivos. Se baixou como ZIP, toque no arquivo para descompactar. Para salvar no app Fotos, abra a imagem e toque em Compartilhar > Salvar Imagem." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Converter PDF para PNG no iPhone",
  "description": "Converta PDF para imagens PNG de alta qualidade direto no iPhone.",
  "step": [
    { "@type": "HowToStep", "name": "Abra o PDF.it no Safari", "text": "No iPhone, abra o Safari e acesse a ferramenta PDF para PNG do PDF.it." },
    { "@type": "HowToStep", "name": "Envie o PDF", "text": "Toque em Escolher arquivo e selecione o PDF dos seus Arquivos, iCloud ou email." },
    { "@type": "HowToStep", "name": "Baixe as imagens PNG", "text": "Toque em Converter e baixe as imagens PNG para o seu iPhone." }
  ]
}

export default function ConverterPdfParaPngNoIphonePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para PNG no iPhone (Sem Apps)</h1>
              <p className="text-xl text-slate-300">
                Precisa de imagens PNG de alta qualidade a partir de um PDF no iPhone? Veja como converter usando apenas o navegador — sem instalar nada.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Funciona direto no Safari do iPhone.</p>
            </div>
            <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PNG no iPhone?</h2>
              <p className="text-slate-600 mb-4">PNG é o formato preferido quando precisa de qualidade máxima no celular:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Documentos para enviar.</strong> Se precisa enviar uma página de documento por mensagem com texto legível, PNG mantém a nitidez.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Uso em apps de design.</strong> Apps como Canva no celular funcionam melhor com PNG para manter a qualidade.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Capturas para apresentações.</strong> PNGs de PDFs ficam perfeitos quando inseridos em apresentações no celular.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo no iPhone</h2>
              <div className="space-y-4">
                {[
                  { title: "Abra o PDF.it no Safari", desc: "No iPhone, abra o Safari e acesse pdf.it.com. Vá para a ferramenta PDF para PNG. O site funciona perfeitamente no celular — totalmente responsivo." },
                  { title: "Envie seu PDF", desc: "Toque em 'Escolher arquivo'. Selecione o PDF do app Arquivos, iCloud Drive, Downloads ou de um anexo de email salvo." },
                  { title: "Configure e converta", desc: "Escolha o DPI (200 DPI é ideal para uso geral no celular) e toque em Converter. Em segundos, suas imagens PNG estarão prontas para download." },
                  { title: "Baixe e encontre as imagens", desc: "Toque em Download. As imagens vão para a pasta Downloads no app Arquivos. Para salvar no app Fotos, abra a imagem e toque em Compartilhar > Salvar Imagem." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PNG ou JPG no iPhone?</h2>
              <p className="text-slate-600 mb-4">No celular, a escolha entre PNG e JPG depende do uso:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>Use PNG</strong> quando precisa de texto nítido, gráficos ou transparência</li>
                <li>- <strong>Use JPG</strong> quando quer arquivos menores para WhatsApp ou redes sociais</li>
                <li>- <strong>Dica:</strong> Se vai enviar pelo WhatsApp, JPG é melhor (menor e mais rápido). Para uso profissional, escolha PNG</li>
              </ul>
              <p className="text-slate-600 mt-4">Prefere JPG? Use nossa ferramenta <Link href="/br/pdf-para-jpg" className="text-orange-600 hover:underline">PDF para JPG</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para iPhone</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Economize Espaço</h3>
                  <p className="text-slate-600">PNGs são maiores que JPGs. Se seu iPhone está com pouco espaço, converta apenas as páginas que precisa e apague os arquivos depois de usar.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use o AirDrop</h3>
                  <p className="text-slate-600">Depois de converter, use AirDrop para enviar as imagens PNG para seu Mac, iPad ou outro iPhone rapidamente.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converter PDF para PNG no iPhone</h2>
            <p className="text-slate-300 mb-6">Direto no Safari — sem app, sem cadastro, qualidade perfeita.</p>
            <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para PNG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para PNG Online (Guia Completo)", href: "/br/aprender/converter-pdf-para-png" },
                { title: "PDF para JPG no iPhone (Sem Apps)", href: "/br/aprender/pdf-para-jpg-no-iphone" },
                { title: "PDF para PNG para Design", href: "/br/aprender/pdf-para-png-para-design" },
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

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Preciso de app para converter PDF para PNG no iPhone?", a: "Não. O PDF.it funciona direto no Safari do iPhone. Abra o site, envie seu PDF e baixe as imagens PNG — sem app necessário." },
                { q: "As imagens PNG ficam com boa qualidade no iPhone?", a: "Sim. PNG é um formato sem perda de qualidade. As imagens convertidas pelo PDF.it mantêm toda a nitidez do PDF original." },
                { q: "Onde encontro as imagens PNG baixadas no iPhone?", a: "As imagens ficam na pasta Downloads do app Arquivos. Se baixou como ZIP, toque no arquivo para descompactar. Para salvar no app Fotos, abra a imagem e toque em Compartilhar > Salvar Imagem." },
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
