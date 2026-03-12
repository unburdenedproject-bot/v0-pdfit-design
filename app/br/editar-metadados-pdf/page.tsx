import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Editar Metadados de PDF — Altere Titulo, Autor e Propriedades | OmnisPDF",
  description:
    "Edite os metadados de um PDF com o OmnisPDF. Altere titulo, autor, assunto e palavras-chave de qualquer documento PDF — rapido, gratuito e no navegador.",
  alternates: {
    canonical: "https://omnispdf.com/br/editar-metadados-pdf",
    languages: {
      en: "https://omnispdf.com/edit-pdf-metadata",
      es: "https://omnispdf.com/es/editar-metadatos-pdf",
      pt: "https://omnispdf.com/br/editar-metadados-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que sao metadados de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Metadados sao informacoes ocultas dentro do PDF como titulo, autor, assunto, palavras-chave, data de criacao e software utilizado. Essas informacoes sao usadas para organizacao, busca e catalogacao de documentos.",
      },
    },
    {
      "@type": "Question",
      name: "Quais campos de metadados posso editar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voce pode editar o titulo, autor, assunto (subject), palavras-chave (keywords) e outros campos padrao de metadados PDF. Isso permite personalizar as informacoes do documento conforme suas necessidades.",
      },
    },
    {
      "@type": "Question",
      name: "Editar os metadados altera o conteudo do PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. Editar os metadados so modifica as informacoes descritivas do arquivo. O conteudo visivel do PDF — texto, imagens, formatacao — permanece exatamente igual.",
      },
    },
    {
      "@type": "Question",
      name: "Para que serve editar os metadados de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E util para organizacao de arquivos, SEO de documentos compartilhados online, conformidade corporativa, arquivamento profissional e para que os documentos sejam mais faceis de encontrar em buscas.",
      },
    },
    {
      "@type": "Question",
      name: "Posso editar metadados pelo celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O OmnisPDF funciona em navegadores moveis — suba seu PDF, edite os metadados e baixe o resultado pelo iPhone ou Android.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito editar metadados de um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Voce pode editar metadados de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro.",
      },
    },
  ],
}

export default function EditarMetadadosPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Editar Metadados de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Altere o titulo, autor, assunto e palavras-chave de qualquer PDF. Personalize as propriedades do seu documento para melhor organizacao, SEO e conformidade corporativa.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Edicao Instantanea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Edit Metadata"
          outputFormat="PDF"
          processingMessage="Editando metadados do seu PDF..."
          successMessage="Metadados atualizados com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Os metadados de um PDF contem informacoes descritivas como titulo, autor, assunto e palavras-chave. Com o OmnisPDF voce pode editar esses campos para organizar melhor seus documentos, melhorar sua visibilidade em buscas e cumprir com padroes corporativos de documentacao.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Edite titulo, autor, assunto e palavras-chave</li>
              <li>&#10003; O conteudo visivel do PDF nao e modificado</li>
              <li>&#10003; Melhore a organizacao e busca de documentos</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — edite metadados direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organizacao de Arquivos</h2>
              <p className="text-slate-600">
                Adicione titulos descritivos e nomes de autor aos seus PDFs para facilitar a busca e classificacao em sistemas de gestao documental e exploradores de arquivos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">SEO de Documentos</h2>
              <p className="text-slate-600">
                Otimize os metadados de PDFs que voce compartilha online. Os motores de busca leem o titulo e as palavras-chave dos metadados para indexar documentos PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conformidade Corporativa</h2>
              <p className="text-slate-600">
                Muitas empresas exigem que os documentos tenham metadados padronizados — autor oficial, departamento, data e classificacao. Edite os metadados para cumprir com essas politicas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Arquivamento Profissional</h2>
              <p className="text-slate-600">
                Prepare documentos para arquivamento a longo prazo com metadados completos e precisos. Facilite a recuperacao futura de documentos com informacoes descritivas corretas.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Editar Metadados de um PDF</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o OmnisPDF.",
                "Modifique os campos de metadados: titulo, autor, assunto e palavras-chave.",
                "Clique em Salvar e baixe seu PDF com os metadados atualizados.",
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
                { q: "O que sao metadados de um PDF?", a: "Metadados sao informacoes ocultas dentro do PDF como titulo, autor, assunto, palavras-chave, data de criacao e software utilizado. Essas informacoes sao usadas para organizacao, busca e catalogacao de documentos." },
                { q: "Quais campos de metadados posso editar?", a: "Voce pode editar o titulo, autor, assunto (subject), palavras-chave (keywords) e outros campos padrao de metadados PDF. Isso permite personalizar as informacoes do documento conforme suas necessidades." },
                { q: "Editar os metadados altera o conteudo do PDF?", a: "Nao. Editar os metadados so modifica as informacoes descritivas do arquivo. O conteudo visivel do PDF — texto, imagens, formatacao — permanece exatamente igual." },
                { q: "Para que serve editar os metadados de um PDF?", a: "E util para organizacao de arquivos, SEO de documentos compartilhados online, conformidade corporativa, arquivamento profissional e para que os documentos sejam mais faceis de encontrar em buscas." },
                { q: "Posso editar metadados pelo celular?", a: "Sim. O OmnisPDF funciona em navegadores moveis — suba seu PDF, edite os metadados e baixe o resultado pelo iPhone ou Android." },
                { q: "E gratuito editar metadados de um PDF?", a: "Sim. Voce pode editar metadados de PDFs de ate 25MB gratuitamente. Para arquivos maiores e processamento em lote, atualize para o plano Pro." },
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
