import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Codigo QR para Cartao de Visita (vCard Digital) | PDF.it",
  description:
    "Crie um codigo QR para cartao de visita que salva seus dados de contato direto na agenda do celular. Nome, telefone, e-mail e empresa em um toque.",
  keywords: "codigo qr cartao de visita, qr code vcard, cartao digital qr, contato qr code",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como funciona um QR de cartao de visita?", "acceptedAnswer": { "@type": "Answer", "text": "O QR code codifica suas informacoes de contato no formato vCard. Quando escaneado, o celular oferece a opcao de salvar o contato direto na agenda, com nome, telefone, e-mail, empresa e endereco." } },
    { "@type": "Question", "name": "Posso incluir foto no QR de contato?", "acceptedAnswer": { "@type": "Answer", "text": "O formato vCard suporta foto, mas isso aumenta significativamente o tamanho do QR code, podendo dificultar a leitura. Para cartoes de visita, recomenda-se incluir apenas texto." } },
    { "@type": "Question", "name": "Funciona em qualquer celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. iPhones e Androids modernos reconhecem QR codes de vCard e oferecem automaticamente a opcao de salvar o contato na agenda." } },
    { "@type": "Question", "name": "Qual tamanho minimo do QR no cartao?", "acceptedAnswer": { "@type": "Answer", "text": "O QR deve ter pelo menos 1.5x1.5 cm no cartao de visita impresso para ser escaneado de forma confiavel pela camera do celular." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Criar QR Code para Cartao de Visita",
  "description": "Crie um QR de contato que salva seus dados na agenda do celular.",
  "step": [
    { "@type": "HowToStep", "name": "Selecione tipo Contato/vCard", "text": "No gerador de QR do PDF.it, selecione o tipo 'Contato' ou 'vCard'." },
    { "@type": "HowToStep", "name": "Preencha seus dados", "text": "Insira nome, telefone, e-mail, empresa, cargo e site." },
    { "@type": "HowToStep", "name": "Gere e adicione ao cartao", "text": "Baixe o QR em SVG e envie ao designer do cartao de visita para inclusao no layout." }
  ]
}

export default function CodigoQRCartaoVisitaPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Codigo QR para Cartao de Visita</h1>
              <p className="text-xl text-slate-300">Seus dados de contato salvos na agenda do celular em um toque. Crie um QR code vCard para seu cartao de visita profissional.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><QrCode className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Crie o QR do seu cartao agora.</p>
            </div>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Gerador QR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar QR no Cartao de Visita?</h2>
              <p className="text-slate-600 mb-4">Cartoes de visita tradicionais tem um problema: a pessoa precisa digitar manualmente seu nome, telefone e e-mail na agenda. Na pratica, muitos cartoes acabam esquecidos na carteira ou jogados fora.</p>
              <p className="text-slate-600 mb-4">Com um QR code no cartao, a pessoa escaneie e seus dados sao salvos instantaneamente na agenda do celular — nome, telefone, e-mail, empresa, cargo e site. Zero digitacao, zero erro.</p>
              <p className="text-slate-600">Isso aumenta significativamente a chance de que a pessoa realmente salve seu contato e entre em contato depois.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Criar (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Selecione tipo Contato/vCard", desc: "No gerador de Codigo QR do PDF.it, escolha o tipo 'Contato' ou 'vCard' na lista de opcoes." },
                  { title: "Preencha seus dados", desc: "Nome completo, telefone (com DDD), e-mail profissional, nome da empresa, cargo, site e endereco (opcional)." },
                  { title: "Revise as informacoes", desc: "Verifique todos os dados. Um numero de telefone errado no QR e pior do que nao ter QR." },
                  { title: "Gere e baixe em SVG", desc: "Baixe em formato SVG para impressao de alta qualidade. Envie ao designer do cartao para inclusao no layout." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que Incluir no vCard</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Nome completo</strong> — Como voce quer aparecer na agenda do contato.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Telefone</strong> — Com codigo do pais (+55) e DDD. Inclua celular e fixo se tiver ambos.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>E-mail profissional</strong> — Use o e-mail da empresa, nao o pessoal.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Empresa e cargo</strong> — Ajuda a pessoa a lembrar quem voce e e o contexto do encontro.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#10003;</span><span><strong>Site</strong> — Se tiver site pessoal ou da empresa, inclua a URL completa.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas de Design no Cartao</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Tamanho do QR</h3><p className="text-slate-600">Minimo de 1.5x1.5 cm para leitura confiavel. Ideal entre 2x2 cm e 2.5x2.5 cm em um cartao padrao (9x5 cm).</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Posicao no Cartao</h3><p className="text-slate-600">Coloque no verso do cartao com espaco ao redor. Nao encoste o QR na borda — deixe pelo menos 3mm de margem.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Mantenha o Contraste</h3><p className="text-slate-600">QR escuro em fundo claro funciona melhor. Evite QR em cima de fotos ou texturas que dificultam a leitura.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Adicione Instrucao</h3><p className="text-slate-600">Coloque &quot;Escaneie para salvar contato&quot; proximo ao QR para incentivar o uso.</p></div>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">QR Code para Seu Cartao</h2>
            <p className="text-slate-300 mb-6">Crie um vCard digital que salva seus dados na agenda em um toque.</p>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><QrCode className="h-5 w-5" /> Gerador de Codigo QR</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Criar Codigo QR", href: "/br/aprender/como-criar-codigo-qr" },
                { title: "Tipos de Codigo QR Explicados", href: "/br/aprender/tipos-de-codigo-qr-explicados" },
                { title: "Melhores Praticas para Codigo QR", href: "/br/aprender/melhores-praticas-codigo-qr" },
                { title: "Codigo QR para WiFi", href: "/br/aprender/codigo-qr-para-wifi" },
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
                { q: "Como funciona um QR de cartao de visita?", a: "O QR codifica seus dados no formato vCard. Ao escanear, o celular oferece salvar o contato na agenda com nome, telefone, e-mail e empresa." },
                { q: "Funciona em qualquer celular?", a: "Sim. iPhones e Androids modernos reconhecem vCards automaticamente." },
                { q: "Qual tamanho minimo no cartao?", a: "Pelo menos 1.5x1.5 cm para leitura confiavel. Ideal entre 2x2 cm e 2.5x2.5 cm." },
                { q: "Posso incluir foto?", a: "O formato suporta, mas aumenta o tamanho do QR e pode dificultar a leitura. Recomenda-se apenas texto." },
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
