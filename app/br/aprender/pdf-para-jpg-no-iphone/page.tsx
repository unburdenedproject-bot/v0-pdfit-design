import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter PDF para JPG no iPhone (Sem Apps) | PDF.it",
  description:
    "Aprenda como converter PDF para JPG no iPhone usando apenas o navegador. Sem apps para baixar — guia rápido e grátis para salvar páginas de PDF como imagens JPG no iOS.",
  keywords: "pdf para jpg iphone, converter pdf para jpg no iphone, pdf para imagem iphone, salvar pdf como jpg iphone",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Preciso baixar um app para converter PDF para JPG no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O PDF.it funciona diretamente no Safari ou Chrome do iPhone. Basta abrir o site, enviar seu PDF e baixar as imagens JPG — sem app necessário." } },
    { "@type": "Question", "name": "Onde ficam salvas as imagens JPG no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "As imagens JPG são salvas na pasta Downloads do iPhone ou diretamente no app Fotos, dependendo das configurações do seu navegador. Você pode acessá-las pelo app Arquivos." } },
    { "@type": "Question", "name": "Posso converter PDF para JPG no iPhone sem internet?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it é uma ferramenta online, então precisa de conexão com a internet. No entanto, a conversão é rápida e funciona bem mesmo com conexão móvel 4G/5G." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF para JPG no iPhone",
  "description": "Converta PDF para imagens JPG diretamente no iPhone em 3 passos simples.",
  "step": [
    { "@type": "HowToStep", "name": "Abra o PDF.it no Safari", "text": "No seu iPhone, abra o Safari ou Chrome e vá para a ferramenta PDF para JPG do PDF.it." },
    { "@type": "HowToStep", "name": "Envie seu PDF", "text": "Toque em 'Escolher arquivo' e selecione o PDF do app Arquivos, iCloud Drive ou email." },
    { "@type": "HowToStep", "name": "Baixe as imagens JPG", "text": "Toque em Converter e baixe as imagens JPG. Elas serão salvas na pasta Downloads ou no app Fotos." }
  ]
}

export default function PdfParaJpgNoIphonePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF para JPG no iPhone (Sem Apps)</h1>
              <p className="text-xl text-slate-300">
                Precisa converter um PDF para imagens JPG direto no iPhone? Veja como fazer em segundos usando apenas o navegador — sem baixar nenhum app.
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
              <p className="text-slate-700 font-semibold">Pronto para converter? Vá direto para a ferramenta.</p>
            </div>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter PDF para JPG no iPhone?</h2>
              <p className="text-slate-600 mb-4">Existem situações do dia a dia onde precisamos de uma imagem JPG em vez de um PDF no celular:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>WhatsApp e Telegram.</strong> Enviar um JPG mostra uma pré-visualização direto na conversa. Um PDF exige que a pessoa baixe e abra o arquivo.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Instagram e Stories.</strong> Não é possível postar PDFs nas redes sociais — mas JPGs funcionam em qualquer plataforma.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Formulários e cadastros.</strong> Muitos sites pedem upload de imagem (não PDF) para documentos como comprovantes e identidade.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo no iPhone</h2>
              <div className="space-y-4">
                {[
                  { title: "Abra o PDF.it no Safari", desc: "No seu iPhone, abra o Safari (ou Chrome) e acesse a ferramenta PDF para JPG do PDF.it. O site é totalmente responsivo e funciona perfeitamente em telas pequenas." },
                  { title: "Envie seu PDF", desc: "Toque em 'Escolher arquivo' e selecione o PDF. Você pode escolher de Arquivos, iCloud Drive, Downloads ou até de um anexo de email salvo. Arquivos até 25MB são grátis." },
                  { title: "Converta e baixe", desc: "Escolha a qualidade (150 DPI para WhatsApp, 200 DPI para uso geral) e toque em Converter. Baixe as imagens JPG — elas vão para a pasta Downloads do iPhone." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Onde Encontrar as Imagens Baixadas?</h2>
              <p className="text-slate-600 mb-4">Depois de converter, suas imagens JPG ficam salvas no iPhone. Para encontrá-las:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- Abra o app <strong>Arquivos</strong> e vá para a pasta <strong>Downloads</strong></li>
                <li>- Se baixou como ZIP, toque no arquivo para descompactar automaticamente</li>
                <li>- Para salvar no app Fotos, abra a imagem e toque em <strong>Compartilhar &gt; Salvar Imagem</strong></li>
                <li>- No Safari, verifique o ícone de downloads (seta para baixo) na barra de endereço</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para iPhone</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use o Safari para Melhor Compatibilidade</h3>
                  <p className="text-slate-600">O Safari no iPhone lida melhor com downloads de arquivos. Se estiver tendo problemas com outro navegador, tente no Safari.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Escolha DPI Menor para WhatsApp</h3>
                  <p className="text-slate-600">Para compartilhar no WhatsApp ou Telegram, 150 DPI é mais que suficiente. Imagens menores enviam mais rápido e ocupam menos espaço no celular.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Converta Apenas as Páginas Necessárias</h3>
                  <p className="text-slate-600">Se seu PDF tem muitas páginas, selecione apenas as que precisa. Isso economiza tempo e espaço no iPhone.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converter PDF para JPG no iPhone Agora</h2>
            <p className="text-slate-300 mb-6">Funciona direto no Safari — sem app, sem cadastro, sem complicação.</p>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para JPG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para JPG Online (Guia Completo)", href: "/br/aprender/converter-pdf-para-jpg" },
                { title: "Salvar Página do PDF como JPG", href: "/br/aprender/salvar-pagina-pdf-como-jpg" },
                { title: "PDF para JPG vs PNG: Qual Escolher?", href: "/br/aprender/pdf-para-jpg-vs-png" },
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
                { q: "Preciso baixar um app para converter PDF para JPG no iPhone?", a: "Não. O PDF.it funciona diretamente no Safari ou Chrome do iPhone. Basta abrir o site, enviar seu PDF e baixar as imagens JPG — sem app necessário." },
                { q: "Onde ficam salvas as imagens JPG no iPhone?", a: "As imagens JPG são salvas na pasta Downloads do iPhone ou diretamente no app Fotos, dependendo das configurações do seu navegador. Você pode acessá-las pelo app Arquivos." },
                { q: "Posso converter PDF para JPG no iPhone sem internet?", a: "O PDF.it é uma ferramenta online, então precisa de conexão com a internet. No entanto, a conversão é rápida e funciona bem mesmo com conexão móvel 4G/5G." },
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
