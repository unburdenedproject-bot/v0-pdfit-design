import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF Online — Combinar Arquivos PDF em Um | OmnisPDF",
  description:
    "Una arquivos PDF em um unico documento com o OmnisPDF. Combine PDFs online, reordene paginas e baixe um unico PDF — rapido e simples.",
  alternates: {
    languages: {
      en: "/merge-pdf",
      es: "/es/unir-pdf",
      pt: "/br/unir-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como uno varios arquivos PDF em um so?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seus PDFs para o OmnisPDF, reordene-os como precisar e clique em Unir PDFs para baixar um unico arquivo combinado." }
    },
    {
      "@type": "Question",
      "name": "Posso reordenar os PDFs antes de uni-los?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Envie seus arquivos e ordene-os na sequencia correta — o OmnisPDF os une nessa ordem." }
    },
    {
      "@type": "Question",
      "name": "Posso unir PDFs no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores moveis — envie, una e baixe do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "Posso unir PDFs protegidos com senha?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs protegidos com senha precisam ser desbloqueados antes de uni-los. Use nossa ferramenta Desbloquear PDF primeiro." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar meus PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual e o tamanho maximo de arquivo para unir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de ate 25MB cada. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB cada." }
    }
  ]
}

export default function UnirPDFPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Arquivos PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine varios PDFs em um unico arquivo com o OmnisPDF. Envie, reordene, una e baixe — rapido, limpo e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Arquivos Ilimitados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Merging your PDF files..."
          successMessage="Your merged PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Unir PDF do OmnisPDF para combinar PDFs em um unico arquivo em segundos. Envie varios documentos PDF, ordene-os corretamente e baixe um unico PDF unido — perfeito para entregas, contratos, faturas e relatorios.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Una varios arquivos PDF em um unico PDF</li>
              <li>✓ Reordene arquivos antes de unir para a sequencia correta de paginas</li>
              <li>✓ Ideal para relatorios, recibos, faturas e formularios</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — una PDFs diretamente no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine PDFs em um Unico Documento</h2>
              <p className="text-slate-600">
                Una PDFs em um unico arquivo para compartilhar. Ideal para enviar um anexo em vez de muitos, ou entregar um pacote completo para escolas, bancos ou empregadores.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reordene Arquivos PDF Antes de Unir</h2>
              <p className="text-slate-600">
                Envie seus arquivos e ordene-os na ordem exata que desejar. O OmnisPDF os une na sequencia que voce escolher.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Una PDFs para Imprimir e Compartilhar</h2>
              <p className="text-slate-600">
                Crie um unico PDF limpo para imprimir, enviar por e-mail, arquivar ou enviar — sem gerenciar multiplos arquivos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Unir PDFs</h2>
            <div className="space-y-4">
              {[
                "Envie dois ou mais arquivos PDF para o OmnisPDF.",
                "Arraste para reordena-los na sequencia correta.",
                "Clique em Unir PDFs.",
                "Baixe o PDF combinado.",
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida um PDF em partes" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho apos unir" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione protecao com senha" },
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
                { q: "Como uno varios arquivos PDF em um so?", a: "Envie seus PDFs para o OmnisPDF, reordene-os como precisar e clique em Unir PDFs para baixar um unico arquivo combinado." },
                { q: "Posso reordenar os PDFs antes de uni-los?", a: "Sim. Envie seus arquivos e ordene-os na sequencia correta — o OmnisPDF os une nessa ordem." },
                { q: "Posso unir PDFs no celular?", a: "Sim. O OmnisPDF funciona em navegadores moveis — envie, una e baixe do seu iPhone ou Android." },
                { q: "Posso unir PDFs protegidos com senha?", a: "PDFs protegidos com senha precisam ser desbloqueados antes de uni-los. Use nossa ferramenta Desbloquear PDF primeiro." },
                { q: "E seguro enviar meus PDFs?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo para unir?", a: "Contas gratuitas podem enviar arquivos de ate 25MB cada. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB cada." },
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
