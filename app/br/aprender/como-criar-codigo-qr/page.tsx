import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Criar Codigo QR Online (Gerador Gratuito) | PDF.it",
  description:
    "Aprenda como criar um codigo QR online para URLs, texto, WiFi e informacoes de contato. Guia passo a passo para gerar codigos QR instantaneamente com o PDF.it.",
  keywords: "como criar codigo qr, gerar codigo qr, codigo qr online, gerador codigo qr gratis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como criar um codigo QR gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Acesse o gerador de Codigo QR do PDF.it, selecione o tipo (URL, texto, WiFi, contato), insira as informacoes e baixe a imagem do QR code. E gratuito e sem necessidade de cadastro." } },
    { "@type": "Question", "name": "Preciso pagar para gerar um codigo QR?", "acceptedAnswer": { "@type": "Answer", "text": "O gerador de Codigo QR do PDF.it e uma ferramenta Pro. Com o plano Pro ($3.99/mes) voce pode gerar codigos QR ilimitados com todas as opcoes de personalizacao." } },
    { "@type": "Question", "name": "O codigo QR expira?", "acceptedAnswer": { "@type": "Answer", "text": "Um codigo QR estatico nunca expira — ele simplesmente codifica a informacao diretamente na imagem. Enquanto a imagem existir, o QR funciona." } },
    { "@type": "Question", "name": "Posso personalizar as cores do QR?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. No PDF.it voce pode alterar a cor do codigo e do fundo. Mantenha bom contraste para garantir que scanners consigam ler o codigo." } },
    { "@type": "Question", "name": "Qual formato baixar?", "acceptedAnswer": { "@type": "Answer", "text": "PNG e ideal para uso digital (sites, redes sociais). SVG e melhor para impressao em alta qualidade pois nao perde resolucao ao redimensionar." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Criar um Codigo QR",
  "description": "Gere um codigo QR em 3 passos simples usando o gerador do PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Selecione o tipo de QR", "text": "Escolha entre URL, texto, WiFi, contato (vCard) ou outro tipo de conteudo para o seu codigo QR." },
    { "@type": "HowToStep", "name": "Insira as informacoes", "text": "Digite a URL, texto, credenciais WiFi ou dados de contato que deseja codificar no QR." },
    { "@type": "HowToStep", "name": "Personalize e baixe", "text": "Ajuste cores e tamanho se desejar, visualize o resultado e baixe a imagem em PNG ou SVG." }
  ]
}

export default function ComoCriarCodigoQRPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Criar Codigo QR</h1>
              <p className="text-xl text-slate-300">Gere codigos QR para URLs, texto, WiFi, contatos e mais. Guia completo passo a passo com dicas para criar QR codes profissionais.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><QrCode className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Crie seu codigo QR agora com o PDF.it.</p>
            </div>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Gerador QR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que E um Codigo QR?</h2>
              <p className="text-slate-600 mb-4">Um codigo QR (Quick Response) e um codigo de barras bidimensional que armazena informacoes como URLs, texto, dados de WiFi ou contatos. Ao escanear com a camera do celular, o conteudo e acessado instantaneamente.</p>
              <p className="text-slate-600">Codigos QR sao usados em marketing, cardapios de restaurantes, cartoes de visita, ingressos, pagamentos e muito mais. Sao faceis de criar e qualquer smartphone moderno pode le-los.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Criar um Codigo QR (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Escolha o tipo de conteudo", desc: "URL (link para site), texto livre, credenciais WiFi, contato (vCard), e-mail ou telefone. Cada tipo tem campos especificos." },
                  { title: "Insira as informacoes", desc: "Digite a URL completa (com https://), o texto, as credenciais da rede WiFi ou os dados do contato que deseja codificar." },
                  { title: "Personalize (opcional)", desc: "Ajuste as cores do codigo e do fundo. Mantenha alto contraste (codigo escuro, fundo claro) para garantir a leitura." },
                  { title: "Baixe a imagem", desc: "Escolha PNG para uso digital ou SVG para impressao. O QR esta pronto para usar em materiais, sites ou documentos." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tipos de Codigo QR Disponiveis</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>URL</strong> — Direciona para qualquer pagina da web. O uso mais comum de codigos QR.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Texto</strong> — Armazena uma mensagem de texto livre que aparece quando escaneado.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong><Link href="/br/aprender/codigo-qr-para-wifi" className="text-[#14D8C4] hover:underline">WiFi</Link></strong> — Conecta automaticamente ao WiFi ao escanear. Perfeito para restaurantes, hoteis e escritorios.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong><Link href="/br/aprender/codigo-qr-para-cartao-de-visita" className="text-[#14D8C4] hover:underline">Contato (vCard)</Link></strong> — Salva as informacoes de contato direto na agenda do celular.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>E-mail</strong> — Abre um e-mail pre-preenchido com destinatario e assunto.</span></li>
              </ul>
              <p className="text-slate-600 mt-4">Para mais detalhes, veja nosso artigo sobre <Link href="/br/aprender/tipos-de-codigo-qr-explicados" className="text-[#14D8C4] hover:underline">tipos de codigo QR explicados</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Codigos QR Eficazes</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Mantenha Alto Contraste</h3><p className="text-slate-600">Codigo escuro em fundo claro e a combinacao que funciona melhor. Evite cores muito claras ou combinacoes de baixo contraste.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Teste Antes de Publicar</h3><p className="text-slate-600">Sempre escaneie o QR com seu celular antes de imprimir ou publicar. Verifique se direciona para o link correto.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Tamanho Minimo</h3><p className="text-slate-600">Para impressao, o QR deve ter pelo menos 2x2 cm. Para outdoors ou materiais vistos a distancia, aumente proporcionalmente.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Adicione uma Chamada para Acao</h3><p className="text-slate-600">Coloque texto como &quot;Escaneie aqui&quot; ou &quot;Acesse o cardapio&quot; proximo ao QR para incentivar as pessoas a escanearem.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Gerador de QR do PDF.it</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Suporte a URL, texto, WiFi, contato (vCard), e-mail e telefone.</li>
                <li>&#10003; Personalizacao de cores do codigo e fundo.</li>
                <li>&#10003; Download em PNG e SVG.</li>
                <li>&#10003; Disponivel no plano <Link href="/br/precos" className="text-[#14D8C4] hover:underline">Pro</Link> ($3.99/mes).</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crie Seu Codigo QR Agora</h2>
            <p className="text-slate-300 mb-6">Gere codigos QR profissionais para qualquer finalidade em segundos.</p>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><QrCode className="h-5 w-5" /> Gerador de Codigo QR</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Codigo QR para PDF", href: "/br/aprender/codigo-qr-para-pdf" },
                { title: "Codigo QR para WiFi", href: "/br/aprender/codigo-qr-para-wifi" },
                { title: "Codigo QR para Cardapio de Restaurante", href: "/br/aprender/codigo-qr-para-cardapio-de-restaurante" },
                { title: "Codigo QR para Cartao de Visita", href: "/br/aprender/codigo-qr-para-cartao-de-visita" },
                { title: "Tipos de Codigo QR Explicados", href: "/br/aprender/tipos-de-codigo-qr-explicados" },
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
                { q: "Como criar um codigo QR gratis?", a: "Acesse o gerador de Codigo QR do PDF.it, selecione o tipo, insira as informacoes e baixe a imagem. Disponivel no plano Pro." },
                { q: "O codigo QR expira?", a: "Um codigo QR estatico nunca expira. Ele codifica a informacao diretamente na imagem. Enquanto a imagem existir, o QR funciona." },
                { q: "Posso personalizar as cores?", a: "Sim. Voce pode alterar a cor do codigo e do fundo. Mantenha bom contraste para garantir a leitura." },
                { q: "PNG ou SVG?", a: "PNG para uso digital. SVG para impressao em alta qualidade, pois nao perde resolucao ao redimensionar." },
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
