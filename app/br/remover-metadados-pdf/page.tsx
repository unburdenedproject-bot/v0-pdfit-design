import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Remover Metadados de PDF — Elimine Informacoes Ocultas | PDF.it",
  description:
    "Remova metadados de um PDF com o PDF.it. Elimine titulo, autor, data de criacao e outras informacoes ocultas do seu documento — rapido, gratuito e seguro.",
  alternates: {
    canonical: "https://pdf.it.com/br/remover-metadados-pdf",
    languages: {
      en: "https://pdf.it.com/remove-metadata-pdf",
      es: "https://pdf.it.com/es/eliminar-metadatos-pdf",
      pt: "https://pdf.it.com/br/remover-metadados-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Por que devo remover metadados de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Metadados podem conter informacoes sensiveis como nome do autor, software usado, datas de edicao e ate localizacao. Remover metadados protege sua privacidade ao compartilhar documentos.",
      },
    },
    {
      "@type": "Question",
      name: "Quais informacoes sao removidas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O PDF.it remove titulo, autor, assunto, palavras-chave, data de criacao, data de modificacao, software criador e outros campos de metadados padrao do PDF.",
      },
    },
    {
      "@type": "Question",
      name: "Remover metadados altera o conteudo do PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. Remover metadados so elimina as informacoes descritivas ocultas. O conteudo visivel do PDF — texto, imagens, formatacao — permanece exatamente igual.",
      },
    },
    {
      "@type": "Question",
      name: "Posso remover metadados de varios PDFs ao mesmo tempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Com o plano Pro do PDF.it voce pode processar varios arquivos em lote, removendo metadados de multiplos PDFs simultaneamente.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito remover metadados de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode remover metadados de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro.",
      },
    },
  ],
}

export default function RemoverMetadadosPDFPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remover Metadados de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Elimine informacoes ocultas do seu PDF como titulo, autor, datas e software utilizado. Proteja sua privacidade antes de compartilhar documentos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Remocao Instantanea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Remove Metadata"
          outputFormat="PDF"
          processingMessage="Removendo metadados do seu PDF..."
          successMessage="Metadados removidos com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Metadados de PDF podem revelar informacoes sensiveis sobre voce e sua organizacao. O PDF.it remove todos os campos de metadados do seu documento, garantindo que nenhuma informacao oculta seja compartilhada involuntariamente.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Remove titulo, autor, assunto e palavras-chave</li>
              <li>&#10003; Elimina datas de criacao e modificacao</li>
              <li>&#10003; Remove informacoes do software criador</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — remova metadados direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Protecao de Privacidade</h2>
              <p className="text-slate-600">
                Remova informacoes pessoais como nome do autor e software antes de compartilhar PDFs publicamente ou com terceiros.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conformidade com LGPD</h2>
              <p className="text-slate-600">
                Elimine dados pessoais ocultos em metadados para cumprir com regulamentacoes de protecao de dados como a LGPD e GDPR.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Documentos Anonimos</h2>
              <p className="text-slate-600">
                Prepare PDFs anonimos removendo qualquer rastro de autoria. Ideal para avaliacoes cegas, denuncias ou distribuicao neutra.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Limpeza de Documentos Corporativos</h2>
              <p className="text-slate-600">
                Remova metadados internos antes de enviar documentos para clientes ou parceiros externos. Evite vazamentos de informacoes sobre ferramentas e processos internos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Remover Metadados de um PDF</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o PDF.it.",
                "Clique em Remover Metadados para limpar todas as informacoes ocultas.",
                "Baixe seu PDF limpo, sem metadados.",
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
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Gire paginas do PDF" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe paginas do PDF" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Bloqueie formularios e camadas" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione senha ao PDF" },
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
                { q: "Por que devo remover metadados de um PDF?", a: "Metadados podem conter informacoes sensiveis como nome do autor, software usado, datas de edicao e ate localizacao. Remover metadados protege sua privacidade ao compartilhar documentos." },
                { q: "Quais informacoes sao removidas?", a: "O PDF.it remove titulo, autor, assunto, palavras-chave, data de criacao, data de modificacao, software criador e outros campos de metadados padrao do PDF." },
                { q: "Remover metadados altera o conteudo do PDF?", a: "Nao. Remover metadados so elimina as informacoes descritivas ocultas. O conteudo visivel do PDF — texto, imagens, formatacao — permanece exatamente igual." },
                { q: "Posso remover metadados de varios PDFs ao mesmo tempo?", a: "Sim. Com o plano Pro do PDF.it voce pode processar varios arquivos em lote, removendo metadados de multiplos PDFs simultaneamente." },
                { q: "E gratuito remover metadados de um PDF?", a: "Sim. Voce pode remover metadados de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro." },
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
