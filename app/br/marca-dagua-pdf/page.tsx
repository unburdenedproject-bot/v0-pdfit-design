import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { WatermarkPdfInterface } from "@/components/watermark-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Droplets, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Adicionar Marca d'Água em PDF Online | OmnisPDF",
  description:
    "Adicione uma marca d'água a um PDF com o OmnisPDF. Aplique marcas d'água de texto ou imagem como CONFIDENCIAL, ajuste a opacidade e baixe instantaneamente.",
  alternates: {
    canonical: "https://omnispdf.com/br/marca-dagua-pdf",
    languages: {
      "en": "https://omnispdf.com/watermark-pdf",
      "es": "https://omnispdf.com/es/marca-de-agua-pdf",
      "pt": "https://omnispdf.com/br/marca-dagua-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Posso adicionar uma marca d'água de texto como CONFIDENCIAL ou RASCUNHO?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF pode aplicar uma marca d'água de texto em todas as páginas do seu PDF para indicar claramente o status do documento." }
    },
    {
      "@type": "Question",
      "name": "Posso adicionar um logo como marca d'água em um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Envie uma imagem e posicione-a como marca d'água nas páginas do seu PDF." }
    },
    {
      "@type": "Question",
      "name": "A marca d'água aparece em todas as páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A marca d'água é aplicada em todas as páginas do PDF por padrão." }
    },
    {
      "@type": "Question",
      "name": "A marca d'água afeta o conteúdo do meu PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. Adicionar uma marca d'água apenas sobrepõe o texto ou imagem selecionado nas suas páginas. Todo o conteúdo existente permanece intacto." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual é o tamanho máximo de arquivo ao qual posso adicionar marca d'água?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas Pro podem enviar arquivos de até 200MB. Contas Business podem enviar até 1GB. Esta ferramenta está disponível para usuários Pro e Business." }
    }
  ]
}

export default function MarcaDaguaPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Adicionar Marca d'Água em PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Adicione uma marca d'água de texto ou imagem com o OmnisPDF — marque seus PDFs como CONFIDENCIAL, RASCUNHO, ou adicione seu logo para branding e proteção. Disponível para usuários Pro e Business.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Marcas d'Água de Texto e Imagem</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Download Instantâneo</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Watermark Interface */}
        <WatermarkPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Marca d'Água PDF do OmnisPDF para adicionar uma marca d'água a um PDF em segundos. Aplique uma marca d'água de texto (CONFIDENCIAL, RASCUNHO, AMOSTRA) ou uma marca d'água de imagem, personalize a posição e transparência, e baixe um PDF com marca d'água pronto para compartilhar. Esta ferramenta está disponível para usuários Pro e Business.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Adicione marcas d'água de texto ou imagem a PDFs</li>
              <li>✓ Marque documentos como Confidencial, Rascunho ou Uso Interno</li>
              <li>✓ Adicione marcas d'água com logo para branding</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — adicione marcas d'água pelo navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Adicione Marcas d'Água de Texto (CONFIDENCIAL, RASCUNHO, AMOSTRA)</h2>
              <p className="text-slate-600">
                Insira uma marca d'água de texto clara em todas as páginas do seu PDF para comunicar o status do documento e reduzir o compartilhamento acidental de versões sensíveis.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Adicione uma Marca d'Água com Imagem ou Logo</h2>
              <p className="text-slate-600">
                Envie um logo ou imagem de selo e posicione-o no seu PDF para dar branding a propostas, faturas e documentos de marketing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Personalize Posição, Opacidade e Rotação</h2>
              <p className="text-slate-600">
                Controle como sua marca d'água aparece — mantenha-a visível sem bloquear o conteúdo ajustando a transparência, tamanho, ângulo e posição.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Adicionar uma Marca d'Água a um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie seu PDF ao OmnisPDF.",
                "Escolha marca d'água de Texto ou Imagem e personalize as configurações: opacidade, tamanho, posição e rotação.",
                "Clique em Adicionar Marca d'Água e baixe seu PDF com marca d'água.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicionar proteção com senha" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduzir tamanho após marca d'água" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combinar documentos com marca d'água" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Adicionar marca d'água só em seções" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Posso adicionar uma marca d'água de texto como CONFIDENCIAL ou RASCUNHO?", a: "Sim. O OmnisPDF pode aplicar uma marca d'água de texto em todas as páginas do seu PDF para indicar claramente o status do documento." },
                { q: "Posso adicionar um logo como marca d'água em um PDF?", a: "Sim. Envie uma imagem e posicione-a como marca d'água nas páginas do seu PDF." },
                { q: "A marca d'água aparece em todas as páginas?", a: "Sim. A marca d'água é aplicada em todas as páginas do PDF por padrão." },
                { q: "A marca d'água afeta o conteúdo do meu PDF?", a: "Não. Adicionar uma marca d'água apenas sobrepõe o texto ou imagem selecionado nas suas páginas. Todo o conteúdo existente permanece intacto." },
                { q: "É seguro enviar meu PDF?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual é o tamanho máximo de arquivo ao qual posso adicionar marca d'água?", a: "Contas Pro podem enviar arquivos de até 200MB. Contas Business podem enviar até 1GB. Esta ferramenta está disponível para usuários Pro e Business." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
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
