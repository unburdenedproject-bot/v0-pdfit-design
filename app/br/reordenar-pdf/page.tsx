import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Reordenar PDF — Mude a Ordem das Paginas do Seu PDF | PDF.it",
  description:
    "Reordene as paginas de um PDF com o PDF.it. Arraste e solte para mudar a ordem das paginas — rapido, gratuito e direto no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/reordenar-pdf",
    languages: {
      en: "https://pdf.it.com/reorder-pdf",
      es: "https://pdf.it.com/es/reordenar-pdf",
      pt: "https://pdf.it.com/br/reordenar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como reordenar paginas de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suba seu PDF no PDF.it, visualize as miniaturas das paginas, arraste e solte para mudar a ordem e baixe o PDF reorganizado.",
      },
    },
    {
      "@type": "Question",
      name: "Reordenar paginas altera o conteudo do PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. Reordenar paginas apenas muda a sequencia em que aparecem no documento. O conteudo de cada pagina — texto, imagens, formatacao — permanece identico.",
      },
    },
    {
      "@type": "Question",
      name: "Posso mover uma pagina do final para o inicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode mover qualquer pagina para qualquer posicao do documento. Basta arrastar a miniatura da pagina para a posicao desejada.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona com PDFs longos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it suporta PDFs com centenas de paginas. A versao gratuita aceita arquivos de ate 25MB e a versao Pro ate 200MB.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito reordenar paginas de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode reordenar paginas de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro.",
      },
    },
  ],
}

export default function ReordenarPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reordenar PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Mude a ordem das paginas do seu PDF com facilidade. Arraste e solte as paginas para criar a sequencia perfeita para seu documento.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Arrastar e Soltar</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Reorder PDF"
          outputFormat="PDF"
          processingMessage="Reordenando paginas do seu PDF..."
          successMessage="Paginas reordenadas com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              O PDF.it permite reordenar as paginas de qualquer PDF de forma visual e intuitiva. Visualize miniaturas de cada pagina, arraste para a nova posicao e exporte o documento reorganizado — tudo sem instalar nada.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Arraste e solte para reordenar paginas</li>
              <li>&#10003; Visualize miniaturas de cada pagina</li>
              <li>&#10003; Mova paginas para qualquer posicao</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — reordene PDFs direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Corrigir Ordem de Digitalizacao</h2>
              <p className="text-slate-600">
                Documentos digitalizados frequentemente ficam fora de ordem. Reordene as paginas para restaurar a sequencia correta do documento original.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reorganizar Apresentacoes</h2>
              <p className="text-slate-600">
                Mude a ordem dos slides em uma apresentacao PDF para ajustar o fluxo da narrativa ou adaptar o conteudo para diferentes publicos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Priorizar Paginas Importantes</h2>
              <p className="text-slate-600">
                Mova paginas mais importantes para o inicio do documento. Ideal para relatorios onde as conclusoes precisam aparecer primeiro.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preparar Documentos para Impressao</h2>
              <p className="text-slate-600">
                Reordene paginas antes de imprimir para garantir que o documento impresso siga a sequencia correta, especialmente para impressao frente e verso.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Reordenar Paginas de um PDF</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o PDF.it.",
                "Arraste e solte as miniaturas das paginas para mudar a ordem.",
                "Clique em Salvar e baixe seu PDF com as paginas reordenadas.",
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
        <section className="py-16 bg-[#F3F4FF]">
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
                { q: "Como reordenar paginas de um PDF?", a: "Suba seu PDF no PDF.it, visualize as miniaturas das paginas, arraste e solte para mudar a ordem e baixe o PDF reorganizado." },
                { q: "Reordenar paginas altera o conteudo do PDF?", a: "Nao. Reordenar paginas apenas muda a sequencia em que aparecem no documento. O conteudo de cada pagina — texto, imagens, formatacao — permanece identico." },
                { q: "Posso mover uma pagina do final para o inicio?", a: "Sim. Voce pode mover qualquer pagina para qualquer posicao do documento. Basta arrastar a miniatura da pagina para a posicao desejada." },
                { q: "Funciona com PDFs longos?", a: "Sim. O PDF.it suporta PDFs com centenas de paginas. A versao gratuita aceita arquivos de ate 25MB e a versao Pro ate 200MB." },
                { q: "E gratuito reordenar paginas de um PDF?", a: "Sim. Voce pode reordenar paginas de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro." },
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
