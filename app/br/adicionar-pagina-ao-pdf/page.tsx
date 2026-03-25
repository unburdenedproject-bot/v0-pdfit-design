import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Adicionar Pagina ao PDF — Insira Novas Paginas em Qualquer PDF | PDF.it",
  description:
    "Adicione paginas a um PDF com o PDF.it. Insira paginas extras de outro PDF no seu documento — rapido, gratuito e direto no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/adicionar-pagina-ao-pdf",
    languages: {
      en: "https://pdf.it.com/add-page-to-pdf",
      es: "https://pdf.it.com/es/agregar-pagina-a-pdf",
      pt: "https://pdf.it.com/br/adicionar-pagina-ao-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como adicionar uma pagina a um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suba seu PDF principal no PDF.it, depois suba o segundo PDF com as paginas que deseja inserir. Escolha a posicao e clique em Mesclar. O resultado sera um unico PDF com todas as paginas combinadas.",
      },
    },
    {
      "@type": "Question",
      name: "Posso adicionar paginas no meio de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A ferramenta de mesclagem do PDF.it permite combinar PDFs e reorganizar as paginas na ordem desejada, inserindo paginas em qualquer posicao do documento.",
      },
    },
    {
      "@type": "Question",
      name: "A qualidade do PDF muda ao adicionar paginas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. O PDF.it preserva a qualidade original de ambos os documentos. Texto, imagens e formatacao permanecem identicos apos a mesclagem.",
      },
    },
    {
      "@type": "Question",
      name: "Posso adicionar paginas de diferentes PDFs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode combinar paginas de multiplos PDFs em um unico documento. Suba todos os arquivos e organize as paginas na ordem desejada.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito adicionar paginas a um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode adicionar paginas a PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro.",
      },
    },
  ],
}

export default function AdicionarPaginaAoPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Adicionar Pagina ao PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Insira novas paginas em qualquer documento PDF. Combine paginas de diferentes arquivos para criar o documento completo que voce precisa.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Insercao Instantanea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Apos a Sessao</span></div>
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
          processingMessage="Adicionando paginas ao seu PDF..."
          successMessage="Paginas adicionadas com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa inserir paginas extras em um PDF? O PDF.it permite combinar paginas de diferentes documentos PDF em um unico arquivo. Suba seus PDFs, organize as paginas na ordem desejada e baixe o documento completo.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Adicione paginas de um ou varios PDFs</li>
              <li>&#10003; Insira paginas em qualquer posicao do documento</li>
              <li>&#10003; Qualidade original preservada</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — adicione paginas direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Complementar Relatorios</h2>
              <p className="text-slate-600">
                Adicione anexos, graficos ou paginas complementares a relatorios empresariais ja finalizados sem precisar recriar o documento inteiro.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Montar Documentacao</h2>
              <p className="text-slate-600">
                Combine paginas de diferentes fontes para montar documentacao completa — contratos com anexos, propostas com termos e condicoes, ou portfolios profissionais.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Inserir Capas e Sumarios</h2>
              <p className="text-slate-600">
                Adicione uma pagina de capa, sumario ou folha de rosto a um PDF existente. Ideal para apresentacoes, trabalhos academicos e documentos formais.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Atualizar Manuais</h2>
              <p className="text-slate-600">
                Insira novas paginas em manuais e guias para mante-los atualizados sem precisar recriar o documento do zero.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Adicionar Paginas a um PDF</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF principal para o PDF.it.",
                "Suba o segundo PDF com as paginas que deseja adicionar.",
                "Organize as paginas na ordem desejada e clique em Mesclar para baixar o resultado.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
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
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "Como adicionar uma pagina a um PDF?", a: "Suba seu PDF principal no PDF.it, depois suba o segundo PDF com as paginas que deseja inserir. Escolha a posicao e clique em Mesclar. O resultado sera um unico PDF com todas as paginas combinadas." },
                { q: "Posso adicionar paginas no meio de um PDF?", a: "Sim. A ferramenta de mesclagem do PDF.it permite combinar PDFs e reorganizar as paginas na ordem desejada, inserindo paginas em qualquer posicao do documento." },
                { q: "A qualidade do PDF muda ao adicionar paginas?", a: "Nao. O PDF.it preserva a qualidade original de ambos os documentos. Texto, imagens e formatacao permanecem identicos apos a mesclagem." },
                { q: "Posso adicionar paginas de diferentes PDFs?", a: "Sim. Voce pode combinar paginas de multiplos PDFs em um unico documento. Suba todos os arquivos e organize as paginas na ordem desejada." },
                { q: "E gratuito adicionar paginas a um PDF?", a: "Sim. Voce pode adicionar paginas a PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro." },
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
