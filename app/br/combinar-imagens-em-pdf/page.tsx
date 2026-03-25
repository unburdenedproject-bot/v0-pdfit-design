import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combinar Imagens em PDF — Converta e Una Fotos em Um PDF | PDF.it",
  description:
    "Combine imagens JPG e PNG em um unico arquivo PDF com PDF.it. Perfeito para criar albuns, portfolios e documentos a partir de fotos — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/combine-images-into-pdf",
      es: "/es/combinar-imagenes-en-pdf",
      pt: "/br/combinar-imagens-em-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quais formatos de imagem posso combinar em PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it aceita imagens JPG, JPEG e PNG, alem de arquivos PDF. Voce pode misturar imagens e PDFs em um unico documento." }
    },
    {
      "@type": "Question",
      "name": "As imagens perdem qualidade ao serem convertidas para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it insere as imagens no PDF mantendo a resolucao original. Suas fotos ficam com a mesma qualidade no documento final." }
    },
    {
      "@type": "Question",
      "name": "Posso escolher a ordem das imagens no PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos enviar suas imagens, voce pode arrastar e soltar para organiza-las na ordem desejada antes de gerar o PDF." }
    },
    {
      "@type": "Question",
      "name": "Quantas imagens posso combinar em um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem enviar varias imagens de ate 25MB no total. Usuarios Pro podem processar imagens de ate 200MB para criar PDFs maiores." }
    },
    {
      "@type": "Question",
      "name": "Posso combinar imagens em PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis. Tire fotos com seu celular e combine-as em um PDF diretamente — perfeito para digitalizar documentos rapidamente." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar minhas fotos para o PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it usa conexoes criptografadas e exclui todas as imagens enviadas apos sua sessao. Suas fotos nunca sao armazenadas permanentemente." }
    }
  ]
}

export default function CombinarImagensEmPdfPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar Imagens em PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta e combine fotos JPG e PNG em um unico arquivo PDF. Perfeito para criar portfolios, albuns de fotos, documentacao visual e muito mais — tudo online e gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>JPG + PNG + PDF</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".jpg,.jpeg,.png,.pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Combinando suas imagens em PDF..."
          successMessage="Suas imagens foram combinadas em um PDF!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa transformar varias fotos em um documento PDF? O PDF.it converte e combina imagens JPG, JPEG e PNG em um unico PDF organizado. Ideal para portfolios visuais, documentacao fotografica, comprovantes e muito mais.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Aceita imagens JPG, JPEG, PNG e PDFs misturados</li>
              <li>✓ Qualidade original das imagens preservada</li>
              <li>✓ Organize a ordem das imagens antes de combinar</li>
              <li>✓ Resultado pronto para imprimir ou compartilhar</li>
              <li>✓ Funciona em qualquer dispositivo com navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Portfolios de Design e Fotografia</h2>
              <p className="text-slate-600">
                Combine suas melhores fotos ou trabalhos de design em um unico PDF profissional para enviar a clientes, agencias ou para entrevistas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Comprovantes e Documentacao Visual</h2>
              <p className="text-slate-600">
                Junte fotos de comprovantes de pagamento, recibos fotografados, prints de tela e outros documentos visuais em um unico PDF organizado.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Albuns de Fotos para Impressao</h2>
              <p className="text-slate-600">
                Crie albuns de fotos em PDF para imprimir ou compartilhar digitalmente. Organize as fotos na ordem desejada e gere um documento pronto para impressao.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Combinar Imagens em PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste suas imagens (JPG, PNG) ou PDFs para o PDF.it.",
                "Organize as imagens na ordem desejada.",
                "Clique em Combinar e baixe seu PDF com todas as imagens.",
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
                { q: "Quais formatos de imagem posso combinar em PDF?", a: "O PDF.it aceita imagens JPG, JPEG e PNG, alem de arquivos PDF. Voce pode misturar imagens e PDFs em um unico documento." },
                { q: "As imagens perdem qualidade ao serem convertidas para PDF?", a: "Nao. O PDF.it insere as imagens no PDF mantendo a resolucao original. Suas fotos ficam com a mesma qualidade no documento final." },
                { q: "Posso escolher a ordem das imagens no PDF?", a: "Sim. Apos enviar suas imagens, voce pode arrastar e soltar para organiza-las na ordem desejada antes de gerar o PDF." },
                { q: "Quantas imagens posso combinar em um PDF?", a: "Usuarios gratuitos podem enviar varias imagens de ate 25MB no total. Usuarios Pro podem processar imagens de ate 200MB para criar PDFs maiores." },
                { q: "Posso combinar imagens em PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis. Tire fotos com seu celular e combine-as em um PDF diretamente — perfeito para digitalizar documentos rapidamente." },
                { q: "E seguro enviar minhas fotos para o PDF.it?", a: "Sim. O PDF.it usa conexoes criptografadas e exclui todas as imagens enviadas apos sua sessao. Suas fotos nunca sao armazenadas permanentemente." },
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
