import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image as ImageIcon, Zap, Shield, Upload, FileText, Merge, RotateCw, Lock, ScanLine, Camera } from "lucide-react"

export const metadata = {
  title: "JPG para PDF — Converta Imagens JPG para PDF Online | OmnisPDF",
  description:
    "Converta imagens JPG e JPEG para documentos PDF online gratis. Envie uma ou varias imagens e obtenha um PDF profissional na hora. Sem software para instalar.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como converto um JPG para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie sua imagem JPG para o OmnisPDF, clique em Converter para PDF e baixe o resultado. Voce pode enviar varias imagens JPG de uma vez e cada uma sera convertida em seu proprio arquivo PDF." }
    },
    {
      "@type": "Question",
      "name": "Posso converter varias imagens JPG para PDF de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Selecione varios arquivos JPG ao enviar e cada imagem sera convertida em um PDF separado. Voce pode baixa-los individualmente ou usar o botao Baixar Tudo como ZIP para obte-los em um unico arquivo." }
    },
    {
      "@type": "Question",
      "name": "O conversor de JPG para PDF e gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Voce pode converter varias imagens JPG para PDF gratis por dia. Para conversoes ilimitadas, processamento em lote e arquivos maiores, atualize para o plano Pro por $7.99/mes." }
    },
    {
      "@type": "Question",
      "name": "Converter JPG para PDF reduz a qualidade da imagem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O OmnisPDF preserva a resolucao e qualidade original da sua imagem JPG ao converte-la para PDF. O PDF resultante contem a imagem em qualidade total." }
    },
    {
      "@type": "Question",
      "name": "Qual e o tamanho maximo de arquivo para a conversao de JPG para PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem enviar imagens JPG de ate 25MB cada. Assinantes Pro e Business podem enviar imagens de ate 200MB cada." }
    },
    {
      "@type": "Question",
      "name": "Tambem posso converter arquivos JPEG, ou so JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "JPG e JPEG sao o mesmo formato de imagem com extensoes de arquivo diferentes. Esta ferramenta aceita tanto arquivos .jpg quanto .jpeg." }
    },
  ]
}

export default function JpgParaPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-pt"
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
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter JPG para PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Converta imagens JPG e JPEG para documentos PDF. Envie uma ou varias imagens e obtenha um PDF profissional na hora.
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
          acceptedTypes={["image/jpeg"]}
          acceptedExtensions=".jpg,.jpeg"
          formatLabel="JPG"
        />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie suas Imagens JPG", desc: "Arraste e solte seus arquivos JPG ou JPEG, ou clique para selecionar. Voce pode escolher uma ou varias imagens de uma vez." },
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

        {/* Why Convert JPG to PDF */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por Que Converter JPG para PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                PDF e o formato de documento universal. Converter suas imagens JPG para PDF as torna mais faceis de compartilhar, imprimir e arquivar. Os PDFs mantem um formato consistente em todos os dispositivos e sistemas operacionais.
              </p>
              <p className="text-slate-600 text-center">
                Seja para enviar fotos como documentos, criar colecoes de imagens para imprimir, ou simplesmente compartilhar imagens em formato profissional, a conversao de JPG para PDF e a solucao.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Converter Fotos em PDF</h3>
                <p className="text-slate-600">
                  Converta fotos do celular ou camera em documentos PDF para compartilhar facilmente por e-mail ou apps de mensagem. Os PDFs ficam iguais em todos os dispositivos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Criar Albuns de Fotos</h3>
                <p className="text-slate-600">
                  Converta varias fotos JPG em PDFs individuais, depois use nossa ferramenta Unir PDF para combina-las em um unico documento. Perfeito para criar albuns digitais ou portfolios de imagens.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Digitalizar Fotos Impressas</h3>
                <p className="text-slate-600">
                  Fotos impressas escaneadas ou fotografadas salvas como JPG podem ser convertidas para PDF para arquivo digital a longo prazo. PDF e um formato estavel e amplamente compativel que continuara legivel por decadas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Enviar Documentos com Imagens</h3>
                <p className="text-slate-600">
                  Muitos aplicativos, portais e instituicoes exigem documentos em formato PDF. Converta suas imagens JPG de identidades, certificados, recibos ou formularios em PDFs para envia-los facilmente.
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
                { q: "Como converto um JPG para PDF?", a: "Envie sua imagem JPG, clique em Converter para PDF e baixe. Voce pode enviar varias imagens e cada uma sera convertida em seu proprio PDF." },
                { q: "Posso converter varias imagens JPG de uma vez?", a: "Sim. Selecione varios arquivos JPG e cada um sera convertido em um PDF separado. Baixe-os individualmente ou como um arquivo ZIP." },
                { q: "O conversor de JPG para PDF e gratis?", a: "Voce pode converter varias imagens gratis por dia. Para conversoes ilimitadas e arquivos maiores, atualize para Pro por $7.99/mes." },
                { q: "A conversao reduz a qualidade da imagem?", a: "Nao. O OmnisPDF preserva a resolucao e qualidade total da sua imagem JPG no PDF resultante." },
                { q: "Qual e o tamanho maximo de arquivo?", a: "Usuarios gratuitos podem enviar ate 25MB por imagem. Assinantes Pro e Business podem enviar ate 200MB por imagem." },
                { q: "Tambem posso converter arquivos JPEG?", a: "Sim. JPG e JPEG sao o mesmo formato com extensoes diferentes. Esta ferramenta aceita tanto arquivos .jpg quanto .jpeg." },
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
            <h2 className="text-2xl font-black mb-4">Converta suas Imagens JPG Agora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Rapido, gratis e seguro. Converta qualquer imagem JPG em um PDF profissional em segundos.
            </p>
            <Link
              href="/br/jpg-para-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Converter JPG para PDF
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PNG para PDF", desc: "Converta imagens PNG para PDF.", href: "/br/png-para-pdf", icon: ImageIcon },
                { name: "PDF para JPG", desc: "Converta paginas PDF em imagens JPG.", href: "/br/pdf-para-jpg", icon: FileText },
                { name: "Unir PDF", desc: "Combine varios PDFs em um so.", href: "/br/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Reduza o tamanho do arquivo PDF.", href: "/br/comprimir-pdf", icon: FileText },
                { name: "Limpar Escaneamento", desc: "Converta fotos do celular em PDFs limpos.", href: "/br/limpar-escaneamento", icon: Camera },
                { name: "Scanner OCR", desc: "Torne PDFs escaneados pesquisaveis.", href: "/br/scanner-ocr", icon: ScanLine },
                { name: "Girar PDF", desc: "Corrija paginas de cabeca para baixo ou de lado.", href: "/br/girar-pdf", icon: RotateCw },
                { name: "Proteger PDF", desc: "Adicione protecao com senha.", href: "/br/proteger-pdf", icon: Lock },
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
      <FooterBr />
    </div>
  )
}
