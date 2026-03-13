import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { RotatePdfInterface } from "@/components/rotate-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { RotateCw, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Girar PDF Online — Rotacionar Paginas de PDF | OmnisPDF",
  description:
    "Gire paginas de PDF online com o OmnisPDF. Corrija paginas de lado ou de cabeca para baixo, gire paginas especificas e baixe um PDF corrigido na hora.",
  alternates: {
    languages: {
      en: "/rotate-pdf",
      es: "/es/rotar-pdf",
      pt: "/br/girar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Posso girar apenas uma pagina de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF permite girar paginas individuais sem modificar o restante do documento." }
    },
    {
      "@type": "Question",
      "name": "Quais angulos de rotacao estao disponiveis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Voce pode girar paginas 90, 180 ou 270 graus — no sentido horario ou anti-horario." }
    },
    {
      "@type": "Question",
      "name": "Posso girar um PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim — a rotacao e especialmente util para documentos escaneados que ficam de lado ou de cabeca para baixo." }
    },
    {
      "@type": "Question",
      "name": "Posso girar um PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores moveis — envie, gire e baixe do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar meu PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual e o tamanho maximo de arquivo que posso girar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar ate 200MB. Contas Business podem enviar ate 1GB." }
    }
  ]
}

export default function GirarPDFPage() {
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
                <RotateCw className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Girar PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Corrija paginas de lado ou de cabeca para baixo com o OmnisPDF. Gire paginas individuais de PDF ou o documento completo e baixe um PDF com a orientacao correta.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>90°, 180°, 270°</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Rotate Interface */}
        <RotatePdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Girar PDF do OmnisPDF para rotacionar paginas de PDF e corrigir a orientacao em segundos. Gire uma unica pagina ou varias paginas 90°, 180° ou 270°, e baixe um PDF limpo que seja facil de ler, imprimir e compartilhar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Gire PDFs de lado e corrija paginas de cabeca para baixo</li>
              <li>✓ Gire uma unica pagina ou varias paginas no mesmo arquivo</li>
              <li>✓ Ideal para PDFs escaneados, formularios, recibos e documentos</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — gire PDFs no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Gire Paginas Individuais de PDF</h2>
              <p className="text-slate-600">
                Corrija apenas as paginas que precisam. Gire uma pagina, um intervalo ou varias paginas selecionadas sem alterar o restante do documento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Corrija PDFs Escaneados e Documentos de Lado</h2>
              <p className="text-slate-600">
                Os scanners frequentemente salvam paginas giradas incorretamente. O OmnisPDF ajuda voce a girar as paginas rapidamente para a direcao correta de leitura.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Salve um PDF com a Orientacao Correta</h2>
              <p className="text-slate-600">
                Apos girar, baixe um novo PDF com a orientacao de pagina atualizada — pronto para imprimir, enviar por e-mail e compartilhar.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Girar um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Selecione as paginas para girar ou escolha girar todas.",
                "Escolha a direcao de rotacao: 90° sentido horario, 90° sentido anti-horario ou 180°.",
                "Clique em Girar PDF e baixe o arquivo atualizado.",
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Extraia paginas antes de girar" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs apos girar" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho apos salvar" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extraia texto de PDFs escaneados" },
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
                { q: "Posso girar apenas uma pagina de um PDF?", a: "Sim. O OmnisPDF permite girar paginas individuais sem modificar o restante do documento." },
                { q: "Quais angulos de rotacao estao disponiveis?", a: "Voce pode girar paginas 90°, 180° ou 270° — no sentido horario ou anti-horario." },
                { q: "Posso girar um PDF escaneado?", a: "Sim — a rotacao e especialmente util para documentos escaneados que ficam de lado ou de cabeca para baixo." },
                { q: "Posso girar um PDF no celular?", a: "Sim. O OmnisPDF funciona em navegadores moveis — envie, gire e baixe do seu iPhone ou Android." },
                { q: "E seguro enviar meu PDF?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso girar?", a: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar ate 200MB. Contas Business podem enviar ate 1GB." },
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
