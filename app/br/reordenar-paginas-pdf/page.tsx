import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Reordenar Paginas de PDF — Reorganize Paginas Online | PDF.it",
  description:
    "Reordene as paginas de um PDF online com o PDF.it. Mova, reorganize e ajuste a ordem das paginas do seu documento — rapido, gratuito e seguro.",
  alternates: {
    canonical: "https://pdf.it.com/br/reordenar-paginas-pdf",
    languages: {
      en: "https://pdf.it.com/reorder-pdf-pages",
      es: "https://pdf.it.com/es/reordenar-paginas-pdf",
      pt: "https://pdf.it.com/br/reordenar-paginas-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como reordenar paginas de um PDF online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suba seu PDF no PDF.it, visualize todas as paginas como miniaturas, arraste cada pagina para a nova posicao desejada e baixe o PDF reorganizado.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso instalar algum software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. O PDF.it funciona inteiramente no navegador. Nao e necessario instalar nenhum software — basta acessar o site e subir seu PDF.",
      },
    },
    {
      "@type": "Question",
      name: "Posso reverter a ordem de todas as paginas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode reorganizar as paginas em qualquer ordem, incluindo inverter completamente a sequencia do documento.",
      },
    },
    {
      "@type": "Question",
      name: "O PDF original e modificado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. O PDF.it cria uma nova copia do PDF com as paginas na ordem desejada. Seu arquivo original permanece inalterado.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito reordenar paginas de PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode reordenar paginas de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro.",
      },
    },
  ],
}

export default function ReordenarPaginasPDFPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reordenar Paginas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reorganize as paginas do seu PDF online. Mova paginas individuais para qualquer posicao e crie a sequencia ideal para seu documento.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Reorganizacao Visual</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Removidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
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
              O reordenador de paginas do PDF.it oferece uma interface visual e intuitiva para reorganizar seu PDF. Cada pagina e exibida como miniatura — basta arrastar para a nova posicao. Ideal para corrigir ordem de digitalizacao, reorganizar capitulos ou preparar documentos para impressao.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Interface visual com miniaturas de paginas</li>
              <li>&#10003; Arraste e solte para reordenar</li>
              <li>&#10003; Mova paginas para qualquer posicao</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — reorganize paginas direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Corrigir Documentos Digitalizados</h2>
              <p className="text-slate-600">
                Paginas digitalizadas fora de ordem? Reordene as paginas visualmente para restaurar a sequencia correta sem precisar digitalizar novamente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Ajustar Trabalhos Academicos</h2>
              <p className="text-slate-600">
                Reorganize capitulos, mova a bibliografia ou ajuste a ordem dos anexos em trabalhos academicos e teses em formato PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Personalizar Materiais de Vendas</h2>
              <p className="text-slate-600">
                Reordene paginas de propostas comerciais e materiais de vendas para destacar os pontos mais relevantes para cada cliente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organizar Fotos e Portfolios</h2>
              <p className="text-slate-600">
                Reorganize a ordem de fotos, ilustracoes e trabalhos em portfolios PDF para criar a apresentacao mais impactante.
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
                "Visualize as miniaturas e arraste as paginas para a nova ordem.",
                "Clique em Salvar e baixe seu PDF com as paginas reorganizadas.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
                { q: "Como reordenar paginas de um PDF online?", a: "Suba seu PDF no PDF.it, visualize todas as paginas como miniaturas, arraste cada pagina para a nova posicao desejada e baixe o PDF reorganizado." },
                { q: "Preciso instalar algum software?", a: "Nao. O PDF.it funciona inteiramente no navegador. Nao e necessario instalar nenhum software — basta acessar o site e subir seu PDF." },
                { q: "Posso reverter a ordem de todas as paginas?", a: "Sim. Voce pode reorganizar as paginas em qualquer ordem, incluindo inverter completamente a sequencia do documento." },
                { q: "O PDF original e modificado?", a: "Nao. O PDF.it cria uma nova copia do PDF com as paginas na ordem desejada. Seu arquivo original permanece inalterado." },
                { q: "E gratuito reordenar paginas de PDF?", a: "Sim. Voce pode reordenar paginas de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro." },
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
