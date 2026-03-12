import Script from "next/script"
import Link from "next/link"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image as ImageIcon, Zap, Shield, Upload, FileText, Merge, RotateCw, Lock, ScanLine, Camera } from "lucide-react"

export const metadata = {
  title: "PNG para PDF — Converta Imagens PNG para PDF Online | OmnisPDF",
  description:
    "Converta imagens PNG para documentos PDF online gratis. Envie uma ou varias imagens e obtenha um PDF profissional na hora. Sem software para instalar.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como converto um PNG para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie sua imagem PNG para o OmnisPDF, clique em Converter para PDF e baixe o resultado. Voce pode enviar varias imagens PNG de uma vez e cada uma sera convertida em seu proprio arquivo PDF." }
    },
    {
      "@type": "Question",
      "name": "Posso converter varias imagens PNG para PDF de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Selecione varios arquivos PNG ao enviar e cada imagem sera convertida em um PDF separado. Voce pode baixa-los individualmente ou como um arquivo ZIP." }
    },
    {
      "@type": "Question",
      "name": "O conversor de PNG para PDF e gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Voce pode converter varias imagens PNG para PDF gratis por dia. Para conversoes ilimitadas e arquivos maiores, atualize para o plano Pro por $7.99/mes." }
    },
    {
      "@type": "Question",
      "name": "Converter PNG para PDF reduz a qualidade da imagem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O OmnisPDF preserva a resolucao, transparencia e qualidade original da sua imagem PNG ao converte-la para PDF." }
    },
    {
      "@type": "Question",
      "name": "A transparencia do PNG e preservada?",
      "acceptedAnswer": { "@type": "Answer", "text": "Imagens PNG com fundo transparente sao convertidas para PDF com fundo branco, pois o formato PDF nao suporta transparencia da mesma forma que PNG." }
    },
  ]
}

export default function PngParaPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-pt"
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
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PNG para PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Converta imagens PNG para documentos PDF. Envie uma ou varias imagens e obtenha um PDF profissional na hora.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Sem software para instalar. Sem cadastro necessario. Apenas envie e converta.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-orange-500" /><span>Multiplas Imagens</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversao Instantanea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Qualidade Total</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/png"]}
          acceptedExtensions=".png"
          formatLabel="PNG"
        />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie suas Imagens PNG", desc: "Arraste e solte seus arquivos PNG, ou clique para selecionar. Voce pode escolher uma ou varias imagens de uma vez." },
                { step: "2", title: "Converta para PDF", desc: "Clique no botao Converter e cada imagem se transforma em um documento PDF de alta qualidade em segundos." },
                { step: "3", title: "Baixe seus PDFs", desc: "Baixe cada PDF individualmente, ou baixe todos como um arquivo ZIP. A qualidade original da sua imagem e preservada." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Convert PNG to PDF */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por Que Converter PNG para PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                O formato PNG e excelente para imagens com alta qualidade e transparencia, mas nao e ideal para compartilhar documentos. Converter PNG para PDF permite compartilhar imagens em formato profissional e universalmente compativel.
              </p>
              <p className="text-slate-600 text-center">
                Os PDFs sao perfeitos para enviar capturas de tela, designs, infograficos ou qualquer imagem que precise ser apresentada como documento formal.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Capturas de Tela como PDF</h3>
                <p className="text-slate-600">
                  Converta capturas de tela PNG em documentos PDF profissionais. Ideal para documentacao tecnica, relatorios de bugs ou evidencia visual.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Designs e Infograficos</h3>
                <p className="text-slate-600">
                  Transforme designs graficos, infograficos e material visual PNG em PDFs prontos para imprimir ou compartilhar por e-mail.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Escaneados</h3>
                <p className="text-slate-600">
                  Muitos scanners salvam arquivos como PNG. Converta-os para PDF para criar documentos digitais organizados e faceis de arquivar.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Apresentacoes e Portfolios</h3>
                <p className="text-slate-600">
                  Converta imagens PNG do seu trabalho em PDFs individuais, depois combine-os com nossa ferramenta Unir PDF para criar um portfolio profissional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como converto um PNG para PDF?", a: "Envie sua imagem PNG, clique em Converter para PDF e baixe. Voce pode enviar varias imagens e cada uma sera convertida em seu proprio PDF." },
                { q: "Posso converter varias imagens PNG de uma vez?", a: "Sim. Selecione varios arquivos PNG e cada um sera convertido em um PDF separado. Baixe-os individualmente ou como um arquivo ZIP." },
                { q: "E gratis?", a: "Voce pode converter varias imagens gratis por dia. Para conversoes ilimitadas e arquivos maiores, atualize para Pro por $7.99/mes." },
                { q: "A conversao reduz a qualidade?", a: "Nao. O OmnisPDF preserva a resolucao e qualidade total da sua imagem PNG no PDF resultante." },
                { q: "A transparencia e mantida?", a: "Imagens PNG com fundo transparente sao convertidas para PDF com fundo branco, pois PDF nao suporta transparencia da mesma forma que PNG." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Converta suas Imagens PNG Agora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Rapido, gratis e seguro. Converta qualquer imagem PNG em um PDF profissional em segundos.
            </p>
            <Link
              href="/pt/png-para-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Converter PNG para PDF
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "JPG para PDF", desc: "Converta imagens JPG para PDF.", href: "/pt/jpg-para-pdf", icon: ImageIcon },
                { name: "PDF para PNG", desc: "Converta paginas PDF em imagens PNG.", href: "/pt/pdf-para-png", icon: FileText },
                { name: "Unir PDF", desc: "Combine varios PDFs em um so.", href: "/pt/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Reduza o tamanho do arquivo PDF.", href: "/pt/comprimir-pdf", icon: FileText },
                { name: "Limpar Escaneamento", desc: "Converta fotos do celular em PDFs limpos.", href: "/pt/limpar-escaneamento", icon: Camera },
                { name: "Scanner OCR", desc: "Torne PDFs escaneados pesquisaveis.", href: "/pt/scanner-ocr", icon: ScanLine },
                { name: "Girar PDF", desc: "Corrija paginas de cabeca para baixo ou de lado.", href: "/pt/girar-pdf", icon: RotateCw },
                { name: "Proteger PDF", desc: "Adicione protecao com senha.", href: "/pt/proteger-pdf", icon: Lock },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterPt />
    </div>
  )
}
