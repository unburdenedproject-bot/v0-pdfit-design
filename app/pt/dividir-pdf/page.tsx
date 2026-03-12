import Script from "next/script"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF Online — Separar Paginas de um PDF | OmnisPDF",
  description:
    "Divida um PDF em paginas separadas ou PDFs menores com o OmnisPDF. Extraia paginas por intervalo e baixe na hora — rapido, simples e online.",
  alternates: {
    languages: {
      en: "/split-pdf",
      es: "/es/dividir-pdf",
      pt: "/pt/dividir-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como divido um PDF em varios arquivos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, escolha as paginas ou intervalos que deseja e clique em Dividir PDF para baixar os novos arquivos." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair apenas certas paginas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Selecione os numeros de pagina ou um intervalo de paginas e o OmnisPDF criara um novo PDF contendo apenas essas paginas." }
    },
    {
      "@type": "Question",
      "name": "Posso dividir um PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores moveis — envie, selecione paginas, divida e baixe." }
    },
    {
      "@type": "Question",
      "name": "Posso dividir PDFs protegidos com senha?",
      "acceptedAnswer": { "@type": "Answer", "text": "Voce precisa desbloquear o PDF antes de dividi-lo. Use nossa ferramenta Desbloquear PDF primeiro." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar meu PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual e o tamanho maximo de PDF que posso dividir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro e Business podem enviar ate 200MB." }
    }
  ]
}

export default function DividirPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Split className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Divida um PDF em arquivos menores com o OmnisPDF. Extraia paginas especificas, divida por intervalos e baixe PDFs limpos na hora.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Intervalos de Paginas Personalizados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Split Interface */}
        <SplitPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Dividir PDF do OmnisPDF para extrair paginas de um PDF ou dividir um PDF grande em arquivos menores. Escolha um intervalo de paginas, divida por paginas individuais e baixe os PDFs que precisa — perfeito para compartilhar, enviar e imprimir.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Divida paginas de PDF em arquivos separados</li>
              <li>✓ Extraia um intervalo de paginas (ex.: paginas 3 a 7) em um novo PDF</li>
              <li>✓ Crie PDFs menores para e-mail, portais e impressao</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — divida PDFs no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Paginas de um PDF</h2>
              <p className="text-slate-600">
                Precisa de apenas uma parte de um documento? O OmnisPDF permite extrair as paginas que voce quer e salva-las como um novo PDF — ideal para formularios, contratos, capitulos e extratos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Divida um PDF em Paginas Individuais</h2>
              <p className="text-slate-600">
                Converta um PDF em muitos PDFs — um arquivo por pagina — para que voce possa enviar, compartilhar ou organizar paginas individualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Divida PDFs Grandes para Compartilhar e Enviar</h2>
              <p className="text-slate-600">
                Muitos sistemas de e-mail e portais limitam o tamanho de envio. Dividir ajuda a cumprir os limites e enviar apenas o necessario.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Dividir um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Escolha como dividir: extrair paginas, intervalos de paginas ou paginas individuais.",
                "Clique em Dividir PDF.",
                "Baixe seus novos arquivos PDF.",
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
                { name: "Unir PDF", href: "/pt/unir-pdf", desc: "Combine PDFs apos dividir" },
                { name: "Comprimir PDF", href: "/pt/comprimir-pdf", desc: "Reduza o tamanho antes de dividir" },
                { name: "Girar PDF", href: "/pt/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Proteger PDF", href: "/pt/proteger-pdf", desc: "Adicione protecao com senha" },
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
                { q: "Como divido um PDF em varios arquivos?", a: "Envie seu PDF para o OmnisPDF, escolha as paginas ou intervalos que deseja e clique em Dividir PDF para baixar os novos arquivos." },
                { q: "Posso extrair apenas certas paginas de um PDF?", a: "Sim. Selecione os numeros de pagina ou um intervalo de paginas e o OmnisPDF criara um novo PDF contendo apenas essas paginas." },
                { q: "Posso dividir um PDF no celular?", a: "Sim. O OmnisPDF funciona em navegadores moveis — envie, selecione paginas, divida e baixe." },
                { q: "Posso dividir PDFs protegidos com senha?", a: "Voce precisa desbloquear o PDF antes de dividi-lo. Use nossa ferramenta Desbloquear PDF primeiro." },
                { q: "E seguro enviar meu PDF?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de PDF que posso dividir?", a: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro e Business podem enviar ate 200MB." },
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
      <FooterPt />
    </div>
  )
}
