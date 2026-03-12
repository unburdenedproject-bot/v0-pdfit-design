import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Girar PDF (Rotacionar Paginas Facilmente) | OmnisPDF",
  description:
    "Aprenda como girar paginas de um PDF — 90, 180 ou 270 graus. Corrija a orientacao de documentos digitalizados e paginas invertidas — online, gratis.",
  keywords: "girar pdf, rotacionar pdf, como girar pdf, virar pdf, girar pagina pdf online gratis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como girar um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para a ferramenta Girar PDF do OmnisPDF, selecione as paginas e a direcao de rotacao (90, 180 ou 270 graus), clique em Girar e baixe o resultado. E gratis e nao precisa de cadastro." }
    },
    {
      "@type": "Question",
      "name": "Posso girar apenas algumas paginas do PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode selecionar paginas individuais ou intervalos para girar. As demais paginas permanecem na orientacao original." }
    },
    {
      "@type": "Question",
      "name": "Girar o PDF afeta a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Girar um PDF apenas muda a orientacao das paginas sem qualquer compressao ou alteracao de qualidade. O conteudo permanece identico." }
    },
    {
      "@type": "Question",
      "name": "Qual a diferenca entre girar 90 e 180 graus?",
      "acceptedAnswer": { "@type": "Answer", "text": "Girar 90 graus muda de retrato para paisagem (ou vice-versa). Girar 180 graus inverte a pagina de cabeca para baixo. Use 180 graus para corrigir paginas digitalizadas de cabeca para baixo." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Girar um PDF Online",
  "description": "Rotacione paginas do seu PDF em 3 passos simples.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie seu PDF",
      "text": "Acesse a ferramenta Girar PDF do OmnisPDF e envie o arquivo com paginas na orientacao errada."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione paginas e direcao",
      "text": "Escolha quais paginas girar e em qual direcao: 90 graus no sentido horario, anti-horario ou 180 graus."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe o PDF girado",
      "text": "Clique em Girar PDF e baixe o arquivo com as paginas na orientacao correta."
    }
  ]
}

export default function ComoGirarPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Girar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Girar PDF</h1>
              <p className="text-xl text-slate-300">
                Paginas de cabeca para baixo, de lado ou na orientacao errada? Veja como girar paginas de um PDF em segundos — sem software, sem cadastro.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para girar? Pule o guia e va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/girar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Girar PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Girar um PDF?</h2>
              <p className="text-slate-600 mb-4">
                Paginas na orientacao errada sao um problema comum, especialmente com documentos digitalizados:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Digitalizacao errada.</strong> O scanner ou app de digitalizacao capturou a pagina de lado ou de cabeca para baixo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Orientacoes misturadas.</strong> Algumas paginas estao em retrato e outras em paisagem no mesmo documento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>PDFs recebidos incorretamente.</strong> Alguem enviou um PDF com paginas na orientacao errada e voce precisa corrigir.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Girar (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF",
                    desc: "Acesse a ferramenta Girar PDF e envie o arquivo com paginas na orientacao errada.",
                  },
                  {
                    title: "Selecione paginas e direcao",
                    desc: "Escolha quais paginas girar: todas ou apenas as que estao erradas. Selecione a direcao: 90 graus horario, 90 graus anti-horario ou 180 graus.",
                  },
                  {
                    title: "Baixe o resultado",
                    desc: "Clique em Girar PDF e baixe o arquivo corrigido. As paginas estarao na orientacao certa, prontas para uso.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tipos de Rotacao</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Rotacao</th>
                      <th className="text-left py-3 px-4 font-bold">Efeito</th>
                      <th className="text-left py-3 px-4 font-bold">Quando Usar</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">90° horario</td>
                      <td className="py-3 px-4">Gira para a direita</td>
                      <td className="py-3 px-4">Pagina deitada para a esquerda</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">90° anti-horario</td>
                      <td className="py-3 px-4">Gira para a esquerda</td>
                      <td className="py-3 px-4">Pagina deitada para a direita</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">180°</td>
                      <td className="py-3 px-4">Inverte completamente</td>
                      <td className="py-3 px-4">Pagina de cabeca para baixo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Girar PDFs</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Verifique todas as paginas</strong> antes de girar — algumas podem estar corretas enquanto outras nao.</li>
                <li>&#10003; <strong>Gire antes de unir:</strong> se vai combinar documentos digitalizados com <Link href="/br/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link>, corrija a orientacao de cada um primeiro.</li>
                <li>&#10003; <strong>Funciona no celular:</strong> corrija paginas diretamente no iPhone ou Android pelo navegador.</li>
                <li>&#10003; <strong>Apos girar</strong>, voce pode <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">comprimir</Link> para reduzir o tamanho do arquivo.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Girar Seu PDF?</h2>
            <p className="text-slate-300 mb-6">Corrija a orientacao em segundos — gratis, sem cadastro.</p>
            <Link
              href="/br/girar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Girar PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Girar PDF Digitalizado", href: "/br/aprender/girar-pdf-digitalizado" },
                { title: "Girar PDF no iPhone", href: "/br/aprender/girar-pdf-no-iphone" },
                { title: "Corrigir PDF de Cabeca para Baixo", href: "/br/aprender/corrigir-pdf-de-cabeca-para-baixo" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como girar um PDF?", a: "Envie o PDF para a ferramenta Girar PDF do OmnisPDF, selecione as paginas e a direcao de rotacao, clique em Girar e baixe o resultado." },
                { q: "Posso girar apenas algumas paginas do PDF?", a: "Sim. Voce pode selecionar paginas individuais ou intervalos para girar. As demais paginas permanecem na orientacao original." },
                { q: "Girar o PDF afeta a qualidade?", a: "Nao. Girar um PDF apenas muda a orientacao das paginas sem qualquer compressao ou alteracao de qualidade." },
                { q: "Qual a diferenca entre girar 90 e 180 graus?", a: "Girar 90 graus muda de retrato para paisagem. Girar 180 graus inverte a pagina de cabeca para baixo." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
