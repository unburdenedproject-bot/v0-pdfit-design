import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir Multiplos PDFs — Combine Varios Arquivos PDF de Uma Vez | PDF.it",
  description:
    "Una multiplos arquivos PDF em um unico documento com PDF.it. Envie varios PDFs, organize a ordem e combine — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/merge-multiple-pdfs",
      es: "/es/unir-multiples-pdfs",
      pt: "/br/unir-multiplos-pdfs",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quantos PDFs posso unir de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem unir varios PDFs de ate 25MB cada. Usuarios Pro podem combinar arquivos maiores (ate 200MB cada) e usar processamento em lote para maior eficiencia." }
    },
    {
      "@type": "Question",
      "name": "A ordem dos PDFs pode ser alterada antes de unir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos enviar seus PDFs, voce pode arrastar e soltar para reorganiza-los na ordem desejada antes de clicar em Unir." }
    },
    {
      "@type": "Question",
      "name": "Unir multiplos PDFs afeta a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it combina os PDFs sem recodificar. Texto, imagens, fontes e layout sao preservados exatamente como nos arquivos originais." }
    },
    {
      "@type": "Question",
      "name": "Preciso criar uma conta para unir PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Voce pode unir PDFs sem cadastro. Basta enviar os arquivos, combinar e baixar. Criar uma conta desbloqueia mais conversoes diarias." }
    },
    {
      "@type": "Question",
      "name": "Posso unir multiplos PDFs no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel — envie, organize e una PDFs diretamente do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "O PDF.it salva meus arquivos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Todos os arquivos sao excluidos automaticamente apos sua sessao. O PDF.it usa conexoes criptografadas e nao armazena seus documentos permanentemente." }
    }
  ]
}

export default function UnirMultiplosPdfsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Multiplos PDFs</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine varios arquivos PDF em um unico documento. Envie todos os seus PDFs, organize na ordem certa e una — tudo no navegador, sem instalar nada.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Varios Arquivos de Uma Vez</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
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
          processingMessage="Unindo seus PDFs..."
          successMessage="Seus PDFs foram combinados com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa combinar 3, 5 ou 20 PDFs em um so? O PDF.it torna isso simples. Envie todos os seus arquivos, arraste para reorganizar e clique em Unir. Em segundos, voce tera um unico PDF pronto para compartilhar, imprimir ou arquivar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Una 2 ou mais PDFs em um unico arquivo</li>
              <li>✓ Arraste e solte para reorganizar a ordem dos documentos</li>
              <li>✓ Sem perda de qualidade — texto, imagens e layout preservados</li>
              <li>✓ Funciona em qualquer dispositivo com navegador</li>
              <li>✓ Sem instalacao de software necessaria</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Una Capitulos de Livros ou Apostilas</h2>
              <p className="text-slate-600">
                Recebeu varios capitulos em PDFs separados? Una-os em um unico arquivo para leitura continua, impressao ou distribuicao.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Faturas e Recibos</h2>
              <p className="text-slate-600">
                Junte todas as suas faturas mensais ou recibos em um unico PDF para contabilidade, declaracao de impostos ou controle financeiro pessoal.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Monte Propostas e Documentos de Projeto</h2>
              <p className="text-slate-600">
                Combine capa, sumario, corpo do projeto e anexos em um unico arquivo profissional pronto para envio ao cliente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Unir Multiplos PDFs</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste todos os seus arquivos PDF para o PDF.it.",
                "Reorganize os arquivos na ordem desejada arrastando e soltando.",
                "Clique em Unir e baixe seu PDF combinado.",
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
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe paginas" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Achate campos" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta em imagens" },
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
                { q: "Quantos PDFs posso unir de uma vez?", a: "Usuarios gratuitos podem unir varios PDFs de ate 25MB cada. Usuarios Pro podem combinar arquivos maiores (ate 200MB cada) e usar processamento em lote para maior eficiencia." },
                { q: "A ordem dos PDFs pode ser alterada antes de unir?", a: "Sim. Apos enviar seus PDFs, voce pode arrastar e soltar para reorganiza-los na ordem desejada antes de clicar em Unir." },
                { q: "Unir multiplos PDFs afeta a qualidade?", a: "Nao. O PDF.it combina os PDFs sem recodificar. Texto, imagens, fontes e layout sao preservados exatamente como nos arquivos originais." },
                { q: "Preciso criar uma conta para unir PDFs?", a: "Nao. Voce pode unir PDFs sem cadastro. Basta enviar os arquivos, combinar e baixar. Criar uma conta desbloqueia mais conversoes diarias." },
                { q: "Posso unir multiplos PDFs no celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel — envie, organize e una PDFs diretamente do seu iPhone ou Android." },
                { q: "O PDF.it salva meus arquivos?", a: "Nao. Todos os arquivos sao excluidos automaticamente apos sua sessao. O PDF.it usa conexoes criptografadas e nao armazena seus documentos permanentemente." },
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
