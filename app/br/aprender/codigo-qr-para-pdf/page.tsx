import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Codigo QR para PDF (Compartilhe Documentos com QR) | OmnisPDF",
  description:
    "Crie um codigo QR que direciona para um PDF. Ideal para cardapios, manuais, catalogos e qualquer documento que voce queira compartilhar via QR code.",
  keywords: "codigo qr para pdf, qr code pdf, compartilhar pdf qr, qr code para documento",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como criar um QR code para um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Primeiro, hospede o PDF em um link publico (Google Drive, Dropbox ou seu servidor). Depois, use o gerador de QR do OmnisPDF para criar um QR code com essa URL. Ao escanear, o usuario sera direcionado ao PDF." } },
    { "@type": "Question", "name": "Posso gerar um QR direto de um arquivo PDF?", "acceptedAnswer": { "@type": "Answer", "text": "O QR code precisa apontar para uma URL. Voce precisa primeiro hospedar o PDF online e usar a URL publica para gerar o QR." } },
    { "@type": "Question", "name": "O PDF precisa estar online?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O QR code direciona para uma URL, entao o PDF precisa estar acessivel pela internet — em servicos como Google Drive, Dropbox, OneDrive ou seu proprio site." } },
    { "@type": "Question", "name": "Posso atualizar o PDF sem mudar o QR?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, se voce substituir o arquivo na mesma URL. Se o link permanecer o mesmo, o QR continuara funcionando com o PDF atualizado." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Criar um Codigo QR para PDF",
  "description": "Compartilhe qualquer PDF via codigo QR em 3 passos.",
  "step": [
    { "@type": "HowToStep", "name": "Hospede o PDF online", "text": "Faca upload do PDF para Google Drive, Dropbox ou seu site e obtenha o link publico." },
    { "@type": "HowToStep", "name": "Gere o QR code", "text": "No gerador de Codigo QR do OmnisPDF, selecione tipo URL e cole o link do PDF." },
    { "@type": "HowToStep", "name": "Baixe e use", "text": "Baixe o QR em PNG ou SVG e adicione ao seu material impresso ou digital." }
  ]
}

export default function CodigoQRParaPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Codigo QR para PDF</h1>
              <p className="text-xl text-slate-300">Compartilhe qualquer PDF atraves de um codigo QR. Ideal para cardapios, manuais, catalogos, apresentacoes e documentos que precisam ser acessados rapidamente.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><QrCode className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Crie um QR para seu PDF agora.</p>
            </div>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Gerador QR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar QR Code para PDF?</h2>
              <p className="text-slate-600 mb-4">Imagina que voce tem um cardapio em PDF, um catalogo de produtos ou um manual de instrucoes. Em vez de imprimir dezenas de copias ou enviar arquivos pesados por e-mail, voce pode criar um QR code que direciona direto para o documento.</p>
              <p className="text-slate-600 mb-4">O cliente escaneia com o celular e abre o PDF instantaneamente — sem downloads, sem aplicativos extras.</p>
              <p className="text-slate-600">Se voce atualizar o PDF mantendo o mesmo link, o QR continua funcionando com a versao mais recente.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo</h2>
              <div className="space-y-4">
                {[
                  { title: "Hospede o PDF online", desc: "Faca upload para Google Drive, Dropbox, OneDrive ou seu proprio site. Certifique-se de que o link e publico (qualquer pessoa com o link pode acessar)." },
                  { title: "Copie o link publico", desc: "Copie a URL completa do PDF. No Google Drive, use a opcao 'Obter link' e configure para 'Qualquer pessoa com o link'." },
                  { title: "Gere o QR code", desc: "No gerador de Codigo QR do OmnisPDF, selecione tipo 'URL', cole o link do PDF e gere o codigo." },
                  { title: "Baixe e use", desc: "Baixe em PNG (para digital) ou SVG (para impressao). Adicione ao cardapio, cartao, poster ou material impresso." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Casos de Uso Populares</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Cardapios de Restaurante</h3><p className="text-slate-600">Coloque o QR nas mesas e os clientes acessam o <Link href="/br/aprender/codigo-qr-para-cardapio-de-restaurante" className="text-orange-600 hover:underline">cardapio digital</Link> pelo celular. Atualize precos e pratos sem reimprimir.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Catalogos de Produtos</h3><p className="text-slate-600">Em feiras, lojas ou showrooms, o QR direciona para o catalogo completo em PDF com fotos e especificacoes.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Manuais de Instrucoes</h3><p className="text-slate-600">Coloque o QR na embalagem do produto e o cliente acessa o manual completo sem precisar guardar papeis.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Apresentacoes e Slides</h3><p className="text-slate-600">Apos uma palestra, compartilhe os slides em PDF via QR code para que os participantes acessem no celular.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas Importantes</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Antes de gerar o QR, <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">comprima o PDF</Link> para que carregue rapido no celular.</li>
                <li>&#10003; Teste o QR code escaneando com seu celular antes de imprimir ou publicar.</li>
                <li>&#10003; Se o PDF for grande, considere usar um servico de hospedagem rapido (nao e-mail com anexo).</li>
                <li>&#10003; Adicione texto como &quot;Escaneie para acessar&quot; proximo ao QR code.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Compartilhe PDFs com QR Code</h2>
            <p className="text-slate-300 mb-6">Crie um codigo QR que direciona para qualquer PDF em segundos.</p>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><QrCode className="h-5 w-5" /> Gerador de Codigo QR</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Criar Codigo QR", href: "/br/aprender/como-criar-codigo-qr" },
                { title: "Codigo QR para WiFi", href: "/br/aprender/codigo-qr-para-wifi" },
                { title: "Codigo QR para Cardapio de Restaurante", href: "/br/aprender/codigo-qr-para-cardapio-de-restaurante" },
                { title: "Tipos de Codigo QR Explicados", href: "/br/aprender/tipos-de-codigo-qr-explicados" },
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
                { q: "Como criar um QR code para um PDF?", a: "Hospede o PDF online, copie o link publico e use o gerador de QR do OmnisPDF para criar o codigo." },
                { q: "O PDF precisa estar online?", a: "Sim. O QR code direciona para uma URL, entao o PDF precisa estar acessivel pela internet." },
                { q: "Posso atualizar o PDF sem mudar o QR?", a: "Sim, se voce substituir o arquivo na mesma URL. O QR continuara funcionando com o PDF atualizado." },
                { q: "Posso gerar um QR direto de um arquivo PDF?", a: "O QR precisa apontar para uma URL. Primeiro hospede o PDF online e use a URL para gerar o QR." },
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
