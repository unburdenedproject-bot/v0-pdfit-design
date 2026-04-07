import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF para JPG para PowerPoint (Melhores Configurações + Dicas) | PDF.it",
  description:
    "Aprenda como converter PDF para JPG com a qualidade ideal para inserir em apresentações do PowerPoint e Google Slides. Dicas de DPI, tamanho e formatação.",
  keywords: "pdf para jpg powerpoint, inserir pdf no powerpoint, pdf para imagem apresentação, pdf para slide",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Qual o melhor DPI para JPG no PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "200 DPI é ideal para PowerPoint. Oferece boa qualidade visual sem deixar o arquivo da apresentação muito pesado. Para projeção em tela grande, 300 DPI é recomendado." } },
    { "@type": "Question", "name": "Posso inserir um PDF diretamente no PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "O PowerPoint permite inserir PDFs como objetos, mas não exibe o conteúdo diretamente nos slides. Converter para JPG primeiro é a solução mais prática e compatível." } },
    { "@type": "Question", "name": "A imagem JPG fica desfocada no PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "Se a imagem fica desfocada, provavelmente o DPI está baixo demais. Use 200-300 DPI na conversão. Também evite redimensionar a imagem no PowerPoint para muito maior que o tamanho original." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF para JPG para PowerPoint",
  "description": "Converta páginas de PDF para imagens JPG otimizadas para apresentações.",
  "step": [
    { "@type": "HowToStep", "name": "Converta o PDF para JPG", "text": "Use a ferramenta PDF para JPG do PDF.it com 200 DPI para qualidade ideal em apresentações." },
    { "@type": "HowToStep", "name": "Insira no PowerPoint", "text": "No PowerPoint, vá em Inserir > Imagem e selecione o arquivo JPG convertido." },
    { "@type": "HowToStep", "name": "Ajuste o tamanho", "text": "Redimensione a imagem no slide mantendo a proporção. Evite ampliar além do tamanho original." }
  ]
}

export default function PdfParaJpgParaPowerpointPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF para JPG para PowerPoint (Melhores Configurações + Dicas)</h1>
              <p className="text-xl text-slate-300">
                Precisa inserir conteúdo de um PDF em uma apresentação? Veja como converter PDF para JPG com a qualidade perfeita para PowerPoint e Google Slides.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Converta agora e insira no PowerPoint em minutos.</p>
            </div>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter PDF para JPG para Apresentações?</h2>
              <p className="text-slate-600 mb-4">O PowerPoint não lida bem com PDFs diretamente. Converter para JPG resolve vários problemas:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Compatibilidade total.</strong> JPGs funcionam em PowerPoint, Google Slides, Keynote e qualquer ferramenta de apresentação.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Exibição inline.</strong> A imagem aparece diretamente no slide, sem precisar abrir outro programa.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Fácil de posicionar.</strong> Você pode redimensionar, recortar e posicionar a imagem livremente no slide.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Fazer (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Converta o PDF para JPG", desc: "Acesse a ferramenta PDF para JPG do PDF.it. Envie seu PDF e selecione 200 DPI (ideal para apresentações). Clique em Converter e baixe as imagens." },
                  { title: "Insira no PowerPoint", desc: "Abra sua apresentação no PowerPoint. Vá em Inserir > Imagem > Este Dispositivo e selecione o arquivo JPG. A imagem será inserida no slide atual." },
                  { title: "Ajuste o tamanho e posição", desc: "Arraste os cantos da imagem para redimensionar (segure Shift para manter a proporção). Posicione no slide conforme necessário. Evite ampliar a imagem além do tamanho original para não perder qualidade." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qual DPI Usar para Apresentações?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">DPI</th><th className="text-left py-3 px-4 font-bold">Uso</th><th className="text-left py-3 px-4 font-bold">Resultado</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">150 DPI</td><td className="py-3 px-4">Compartilhar por email, apresentações casuais</td><td className="py-3 px-4">Arquivo leve, qualidade OK</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">200 DPI</td><td className="py-3 px-4">Apresentações profissionais (recomendado)</td><td className="py-3 px-4">Boa qualidade, arquivo moderado</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">300 DPI</td><td className="py-3 px-4">Projeção em tela grande, impressão</td><td className="py-3 px-4">Máxima qualidade, arquivo grande</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Apresentações Profissionais</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use PNG para Gráficos e Tabelas</h3>
                  <p className="text-slate-600">Se seu PDF contém gráficos, tabelas ou texto fino, considere converter para <Link href="/br/pdf-para-png" className="text-[#14D8C4] hover:underline">PNG</Link> em vez de JPG. O PNG mantém linhas e texto mais nítidos.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Converta Apenas as Páginas Necessárias</h3>
                  <p className="text-slate-600">Não converta o PDF inteiro se só precisa de 2-3 páginas. Isso mantém sua apresentação mais leve e organizada.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Não Amplie Demais a Imagem</h3>
                  <p className="text-slate-600">Ampliar uma imagem JPG além do tamanho original causa perda de nitidez. Se precisa de imagem grande, use 300 DPI na conversão.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Seu PDF para PowerPoint Agora</h2>
            <p className="text-slate-300 mb-6">Obtenha imagens JPG de alta qualidade prontas para inserir em qualquer apresentação.</p>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para JPG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para JPG Online (Guia Completo)", href: "/br/aprender/converter-pdf-para-jpg" },
                { title: "PDF para JPG vs PNG: Qual Escolher?", href: "/br/aprender/pdf-para-jpg-vs-png" },
                { title: "Por Que PDF para JPG Fica Borrado (E Como Resolver)", href: "/br/aprender/por-que-pdf-para-jpg-fica-borrado" },
                { title: "PDF para PNG para Design", href: "/br/aprender/pdf-para-png-para-design" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Qual o melhor DPI para JPG no PowerPoint?", a: "200 DPI é ideal para PowerPoint. Oferece boa qualidade visual sem deixar o arquivo da apresentação muito pesado. Para projeção em tela grande, 300 DPI é recomendado." },
                { q: "Posso inserir um PDF diretamente no PowerPoint?", a: "O PowerPoint permite inserir PDFs como objetos, mas não exibe o conteúdo diretamente nos slides. Converter para JPG primeiro é a solução mais prática e compatível." },
                { q: "A imagem JPG fica desfocada no PowerPoint?", a: "Se a imagem fica desfocada, provavelmente o DPI está baixo demais. Use 200-300 DPI na conversão. Também evite redimensionar a imagem no PowerPoint para muito maior que o tamanho original." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
