import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Codigo QR para WiFi (Conecte Sem Digitar Senha) | PDF.it",
  description:
    "Crie um codigo QR para WiFi e permita que visitantes se conectem a sua rede apenas escaneando. Sem digitar senhas longas — perfeito para restaurantes, hoteis e escritorios.",
  keywords: "codigo qr wifi, qr code wifi, compartilhar wifi qr, qr wifi senha automatica",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como funciona um QR code para WiFi?", "acceptedAnswer": { "@type": "Answer", "text": "O QR code para WiFi codifica o nome da rede (SSID), tipo de seguranca e senha. Quando escaneado, o celular se conecta automaticamente sem precisar digitar a senha manualmente." } },
    { "@type": "Question", "name": "A senha fica exposta no QR?", "acceptedAnswer": { "@type": "Answer", "text": "A senha esta codificada no QR, mas nao e visivel a olho nu. Porem, qualquer pessoa que escaneie o QR podera se conectar. Use apenas para redes de visitantes, nao para a rede principal da empresa." } },
    { "@type": "Question", "name": "Funciona em iPhone e Android?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. iPhones com iOS 11+ e Android com versoes recentes reconhecem QR codes de WiFi nativamente pela camera." } },
    { "@type": "Question", "name": "Se eu mudar a senha, o QR para de funcionar?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Se a senha da rede mudar, voce precisa gerar um novo QR code com a senha atualizada." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Criar um Codigo QR para WiFi",
  "description": "Permita que visitantes se conectem ao WiFi escaneando um QR code.",
  "step": [
    { "@type": "HowToStep", "name": "Selecione tipo WiFi", "text": "No gerador de QR do PDF.it, selecione o tipo 'WiFi'." },
    { "@type": "HowToStep", "name": "Insira os dados da rede", "text": "Digite o nome da rede (SSID), selecione o tipo de seguranca (WPA/WPA2) e insira a senha." },
    { "@type": "HowToStep", "name": "Gere e imprima", "text": "Baixe o QR e coloque em local visivel no estabelecimento — recepcao, mesa, parede ou cartao." }
  ]
}

export default function CodigoQRWiFiPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Codigo QR para WiFi</h1>
              <p className="text-xl text-slate-300">Permita que visitantes se conectem ao WiFi apenas escaneando um QR code. Sem digitar senhas longas e complicadas.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><QrCode className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Crie um QR para seu WiFi agora.</p>
            </div>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Gerador QR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar QR Code para WiFi?</h2>
              <p className="text-slate-600 mb-4">Todo mundo ja passou por isso: chegar em um restaurante, hotel ou escritorio e pedir a senha do WiFi. A pessoa anota em um papel, voce digita errado, tenta de novo... Com um QR code, o visitante simplesmente escaneie e ja esta conectado.</p>
              <p className="text-slate-600 mb-4">Vantagens: elimina erros de digitacao, funciona em qualquer celular moderno, da uma impressao profissional e poupa tempo tanto para voce quanto para o visitante.</p>
              <p className="text-slate-600">E perfeito para restaurantes, cafes, hoteis, clinicas, saloes de beleza, coworkings e qualquer estabelecimento que ofereça WiFi para clientes.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Criar (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Selecione tipo WiFi no gerador", desc: "Acesse o gerador de Codigo QR do PDF.it e selecione o tipo 'WiFi' na lista de opcoes." },
                  { title: "Preencha os dados da rede", desc: "Nome da rede (SSID): exatamente como aparece nas configuracoes. Tipo de seguranca: WPA/WPA2 (o mais comum). Senha: exatamente como configurada no roteador." },
                  { title: "Personalize e gere", desc: "Ajuste cores se desejar (mantenha alto contraste). Clique em gerar para criar o QR code." },
                  { title: "Imprima e exiba", desc: "Baixe em PNG ou SVG. Imprima e coloque em local visivel: recepcao, mesas, parede proximo a entrada ou em um cartao de boas-vindas." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Onde Colocar o QR de WiFi</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Restaurantes e cafes:</strong> Nas mesas, no cardapio ou em display na entrada.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Hoteis e pousadas:</strong> No quarto, na recepcao e nas areas comuns.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Escritorios e coworkings:</strong> Na recepcao e nas salas de reuniao.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Clinicas e saloes:</strong> Na sala de espera.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas de Seguranca</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Use Rede de Visitantes</h3><p className="text-slate-600">Configure uma rede WiFi separada para visitantes no seu roteador. Nao compartilhe a senha da rede principal da empresa por QR code.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Troque a Senha Periodicamente</h3><p className="text-slate-600">Mude a senha da rede de visitantes regularmente e gere um novo QR code. Isso limita o acesso de pessoas que ja visitaram anteriormente.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Limite a Banda</h3><p className="text-slate-600">Configure o roteador para limitar a velocidade da rede de visitantes, garantindo que a rede principal nao seja afetada.</p></div>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crie o QR do Seu WiFi</h2>
            <p className="text-slate-300 mb-6">Visitantes se conectam em um toque, sem digitar senha.</p>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><QrCode className="h-5 w-5" /> Gerador de Codigo QR</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Criar Codigo QR", href: "/br/aprender/como-criar-codigo-qr" },
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
                { q: "Como funciona um QR code para WiFi?", a: "O QR codifica nome da rede, seguranca e senha. O celular se conecta automaticamente ao escanear." },
                { q: "A senha fica exposta?", a: "Esta codificada no QR, nao visivel a olho nu. Mas qualquer pessoa que escaneie podera se conectar." },
                { q: "Funciona em iPhone e Android?", a: "Sim. iPhones com iOS 11+ e Android recentes reconhecem QR de WiFi pela camera." },
                { q: "Se eu mudar a senha, o QR funciona?", a: "Nao. Voce precisa gerar um novo QR com a senha atualizada." },
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
