import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Codigo QR para Cardapio de Restaurante | PDF.it",
  description:
    "Crie um codigo QR para o cardapio digital do seu restaurante. Clientes acessam o menu pelo celular sem tocar em nada. Facil de atualizar precos e pratos.",
  keywords: "codigo qr cardapio, qr code restaurante, cardapio digital qr, menu qr code restaurante",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como criar um QR code para cardapio?", "acceptedAnswer": { "@type": "Answer", "text": "Crie o cardapio em PDF, hospede online (Google Drive, Dropbox ou site) e use o gerador de QR do PDF.it para criar um codigo que direciona para o link do cardapio." } },
    { "@type": "Question", "name": "Posso atualizar o cardapio sem trocar o QR?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Se voce substituir o PDF no mesmo link, o QR continuara funcionando com o cardapio atualizado. Nao precisa reimprimir os QR codes." } },
    { "@type": "Question", "name": "O cliente precisa instalar algum app?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. Celulares modernos (iPhone e Android) leem QR codes direto pela camera. O cardapio abre no navegador automaticamente." } },
    { "@type": "Question", "name": "Onde colocar o QR code no restaurante?", "acceptedAnswer": { "@type": "Answer", "text": "Nas mesas (adesivo ou display de acrilico), na vitrine, na fachada, no balcao e em materiais promocionais. Adicione o texto 'Escaneie para ver o cardapio'." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Criar QR Code para Cardapio de Restaurante",
  "description": "Crie um cardapio digital acessivel por QR code para seu restaurante.",
  "step": [
    { "@type": "HowToStep", "name": "Crie o cardapio em PDF", "text": "Monte o cardapio em Word, Google Docs ou Canva e exporte como PDF." },
    { "@type": "HowToStep", "name": "Hospede online", "text": "Faca upload para Google Drive ou Dropbox e obtenha o link publico." },
    { "@type": "HowToStep", "name": "Gere o QR e imprima", "text": "Cole o link no gerador de QR do PDF.it, baixe e imprima para colocar nas mesas." }
  ]
}

export default function CodigoQRCardapioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Codigo QR para Cardapio de Restaurante</h1>
              <p className="text-xl text-slate-300">Transforme seu cardapio em digital com um QR code. Clientes acessam o menu pelo celular, voce atualiza precos e pratos sem reimprimir nada.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><QrCode className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Crie o QR do seu cardapio agora.</p>
            </div>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Gerador QR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar Cardapio Digital com QR?</h2>
              <p className="text-slate-600 mb-4">Cardapios digitais com QR code se tornaram padrao em restaurantes. As vantagens sao claras: o cliente acessa o menu pelo celular sem tocar em nada, voce atualiza precos e pratos instantaneamente sem reimprimir, e da uma impressao moderna e profissional ao estabelecimento.</p>
              <p className="text-slate-600">Alem disso, voce economiza com impressao — um cardapio fisico pode custar R$15-50 por unidade, e qualquer mudanca de preco significa reimprimir tudo. Com o QR, basta atualizar o PDF online.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo Completo</h2>
              <div className="space-y-4">
                {[
                  { title: "Monte o cardapio", desc: "Use Word, Google Docs, Canva ou qualquer editor. Inclua nomes dos pratos, descricoes, precos e fotos se possivel. Exporte como PDF." },
                  { title: "Otimize o PDF", desc: "Use o PDF.it para comprimir o PDF e garantir carregamento rapido no celular. Um cardapio de 2-3 MB ja e grande para celulares com conexao lenta." },
                  { title: "Hospede o cardapio online", desc: "Faca upload para Google Drive, Dropbox ou seu site. Configure o link como publico para que qualquer pessoa possa acessar." },
                  { title: "Gere o QR code", desc: "No gerador de Codigo QR do PDF.it, selecione tipo URL e cole o link do cardapio. Personalize cores se desejar." },
                  { title: "Imprima e distribua", desc: "Baixe em SVG para impressao de alta qualidade. Imprima adesivos ou cartoes e coloque nas mesas, no balcao e na vitrine." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para um Cardapio Digital Eficaz</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Design Responsivo</h3><p className="text-slate-600">O cardapio sera visto em telas de celular. Use fontes grandes (minimo 14pt), espacamento generoso e layout vertical. Evite tabelas largas que exigem rolagem horizontal.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Comprima o PDF</h3><p className="text-slate-600">Use <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> do PDF.it para reduzir o tamanho. Cardapios com fotos podem ficar pesados — comprima para menos de 1MB se possivel.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Adicione Texto ao QR</h3><p className="text-slate-600">Proximo ao QR, coloque &quot;Escaneie para ver o cardapio&quot; ou &quot;Aponte a camera para o menu&quot;. Nem todos sabem o que e um QR code.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">QR de WiFi Tambem</h3><p className="text-slate-600">Considere colocar um <Link href="/br/aprender/codigo-qr-para-wifi" className="text-orange-600 hover:underline">QR de WiFi</Link> ao lado do QR do cardapio. Clientes apreciam a conveniencia.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Atualizando o Cardapio</h2>
              <p className="text-slate-600 mb-4">A grande vantagem do cardapio digital: quando precos mudam ou novos pratos sao adicionados, basta atualizar o PDF no mesmo link. O QR impresso nas mesas continua funcionando com o conteudo atualizado.</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; No Google Drive: substitua o arquivo mantendo o mesmo link de compartilhamento.</li>
                <li>&#10003; No Dropbox: substitua o arquivo na mesma pasta — o link permanece identico.</li>
                <li>&#10003; No seu site: substitua o PDF no servidor com o mesmo nome de arquivo.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Cardapio Digital em Minutos</h2>
            <p className="text-slate-300 mb-6">Crie o QR code do seu cardapio e coloque nas mesas do restaurante.</p>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><QrCode className="h-5 w-5" /> Gerador de Codigo QR</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Criar Codigo QR", href: "/br/aprender/como-criar-codigo-qr" },
                { title: "Codigo QR para PDF", href: "/br/aprender/codigo-qr-para-pdf" },
                { title: "Codigo QR para WiFi", href: "/br/aprender/codigo-qr-para-wifi" },
                { title: "Melhores Praticas para Codigo QR", href: "/br/aprender/melhores-praticas-codigo-qr" },
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
                { q: "Como criar um QR para cardapio?", a: "Crie o cardapio em PDF, hospede online e use o gerador de QR do PDF.it com o link do cardapio." },
                { q: "Posso atualizar sem trocar o QR?", a: "Sim. Substitua o PDF no mesmo link e o QR continuara funcionando com o cardapio atualizado." },
                { q: "O cliente precisa de app?", a: "Nao. Celulares modernos leem QR codes direto pela camera." },
                { q: "Onde colocar o QR no restaurante?", a: "Nas mesas, vitrine, balcao e materiais promocionais. Adicione texto 'Escaneie para ver o cardapio'." },
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
