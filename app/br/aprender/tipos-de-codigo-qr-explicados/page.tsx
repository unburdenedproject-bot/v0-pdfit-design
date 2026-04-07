import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Tipos de Codigo QR Explicados (Estatico, Dinamico, URL, WiFi, vCard) | PDF.it",
  description:
    "Entenda os diferentes tipos de codigo QR: estatico vs dinamico, URL, texto, WiFi, vCard e mais. Saiba qual tipo usar para cada situacao.",
  keywords: "tipos de codigo qr, qr code estatico, qr code dinamico, tipos qr code, qr url wifi vcard",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Qual a diferenca entre QR estatico e dinamico?", "acceptedAnswer": { "@type": "Answer", "text": "QR estatico codifica a informacao diretamente na imagem — nao pode ser alterado depois. QR dinamico aponta para uma URL intermediaria que pode ser redirecionada, permitindo mudar o destino sem alterar o codigo impresso." } },
    { "@type": "Question", "name": "Qual tipo de QR o PDF.it gera?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it gera codigos QR estaticos para URL, texto, WiFi, contato (vCard), e-mail e telefone. Sao permanentes e nao dependem de servicos externos." } },
    { "@type": "Question", "name": "QR code estatico expira?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. Um QR estatico nunca expira porque a informacao esta codificada diretamente na imagem. Ele funciona enquanto a imagem existir." } },
    { "@type": "Question", "name": "Qual tipo usar para cada situacao?", "acceptedAnswer": { "@type": "Answer", "text": "URL para links de sites, WiFi para conexao automatica de rede, vCard para cartoes de visita, e-mail para facilitar contato. O tipo depende do que voce quer que aconteca quando alguem escaneia." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Escolher o Tipo Certo de Codigo QR",
  "description": "Aprenda qual tipo de QR code usar para cada necessidade.",
  "step": [
    { "@type": "HowToStep", "name": "Defina o objetivo", "text": "Decida o que deve acontecer quando alguem escaneia: abrir um site, conectar WiFi, salvar contato, etc." },
    { "@type": "HowToStep", "name": "Escolha o tipo", "text": "Selecione URL, WiFi, vCard, texto ou outro tipo que corresponda ao seu objetivo." },
    { "@type": "HowToStep", "name": "Gere e teste", "text": "Crie o QR, escaneie com seu celular para confirmar que funciona como esperado." }
  ]
}

export default function TiposCodigoQRPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Tipos de Codigo QR Explicados</h1>
              <p className="text-xl text-slate-300">Entenda os diferentes tipos de QR code — estatico vs dinamico, URL, WiFi, vCard e mais. Saiba qual usar para cada situacao.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><QrCode className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Gere qualquer tipo de QR code com o PDF.it.</p>
            </div>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Gerador QR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">QR Estatico vs QR Dinamico</h2>
              <p className="text-slate-600 mb-4">A primeira grande distincao e entre QR estatico e dinamico:</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">QR Estatico</h3>
                  <p className="text-slate-600 text-sm">A informacao (URL, texto, dados WiFi) e codificada diretamente no padrao do QR. Nao pode ser alterado depois de criado. Nao depende de servicos externos e nunca expira. E o tipo que o PDF.it gera.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">QR Dinamico</h3>
                  <p className="text-slate-600 text-sm">O QR aponta para uma URL intermediaria de um servico. Esse servico redireciona para o destino final, que pode ser alterado sem mudar o QR impresso. Vantagem: flexibilidade. Desvantagem: depende de um servico externo que pode cobrar ou sair do ar.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tipos por Conteudo</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">URL (Link)</h3><p className="text-slate-600">O tipo mais comum. Ao escanear, abre uma pagina da web no navegador. Ideal para sites, landing pages, <Link href="/br/aprender/codigo-qr-para-pdf" className="text-[#14D8C4] hover:underline">PDFs hospedados</Link>, redes sociais e lojas online.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Texto</h3><p className="text-slate-600">Armazena uma mensagem de texto livre. Ao escanear, o texto aparece na tela. Util para mensagens curtas, instrucoes ou codigos.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">WiFi</h3><p className="text-slate-600">Codifica nome da rede, tipo de seguranca e senha. Ao escanear, o celular se conecta automaticamente. Perfeito para <Link href="/br/aprender/codigo-qr-para-wifi" className="text-[#14D8C4] hover:underline">restaurantes, hoteis e escritorios</Link>.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Contato (vCard)</h3><p className="text-slate-600">Armazena dados de contato: nome, telefone, e-mail, empresa, cargo. Ao escanear, o celular oferece salvar na agenda. Ideal para <Link href="/br/aprender/codigo-qr-para-cartao-de-visita" className="text-[#14D8C4] hover:underline">cartoes de visita</Link>.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">E-mail</h3><p className="text-slate-600">Abre o aplicativo de e-mail com destinatario, assunto e corpo pre-preenchidos. Util para formularios de contato e feedback.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Telefone</h3><p className="text-slate-600">Inicia uma chamada para o numero codificado. Ao escanear, o celular pergunta se deseja ligar. Simples e direto.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qual Tipo Usar?</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Para compartilhar seu site:</strong> URL</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Para compartilhar um documento:</strong> URL (com link para o <Link href="/br/aprender/codigo-qr-para-pdf" className="text-[#14D8C4] hover:underline">PDF hospedado</Link>)</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Para WiFi de visitantes:</strong> WiFi</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Para cartao de visita:</strong> vCard</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Para <Link href="/br/aprender/codigo-qr-para-cardapio-de-restaurante" className="text-[#14D8C4] hover:underline">cardapio de restaurante</Link>:</strong> URL (com link para o cardapio em PDF)</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Para suporte ao cliente:</strong> E-mail ou Telefone</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Capacidade de Dados</h2>
              <p className="text-slate-600 mb-4">Quanto mais dados o QR armazena, mais complexo (denso) ele fica. QR codes muito densos podem ser dificeis de escanear em tamanhos pequenos. Regra pratica:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>URLs curtas</strong> geram QR simples e faceis de escanear.</li>
                <li>&#10003; <strong>vCards com muitos campos</strong> geram QR mais densos — mantenha apenas informacoes essenciais.</li>
                <li>&#10003; <strong>Textos longos</strong> geram QR muito densos — use URL para conteudo extenso.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crie Qualquer Tipo de QR</h2>
            <p className="text-slate-300 mb-6">URL, WiFi, vCard, texto e mais. Tudo em um gerador.</p>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><QrCode className="h-5 w-5" /> Gerador de Codigo QR</Link>
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
                { title: "Codigo QR para Cartao de Visita", href: "/br/aprender/codigo-qr-para-cartao-de-visita" },
                { title: "Melhores Praticas para Codigo QR", href: "/br/aprender/melhores-praticas-codigo-qr" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
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
                { q: "Qual a diferenca entre QR estatico e dinamico?", a: "Estatico codifica a informacao direto na imagem (permanente). Dinamico usa URL intermediaria que pode ser redirecionada (flexivel, mas depende de servico externo)." },
                { q: "Qual tipo o PDF.it gera?", a: "O PDF.it gera QR codes estaticos para URL, texto, WiFi, vCard, e-mail e telefone." },
                { q: "QR code estatico expira?", a: "Nao. A informacao esta na imagem. Funciona enquanto a imagem existir." },
                { q: "Qual tipo usar?", a: "Depende do objetivo: URL para sites, WiFi para rede, vCard para contatos, e-mail para comunicacao." },
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
