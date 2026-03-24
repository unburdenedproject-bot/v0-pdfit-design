import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { QrCode, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Melhores Praticas para Codigo QR (Guia Completo) | PDF.it",
  description:
    "Descubra as melhores praticas para criar, imprimir e usar codigos QR. Tamanho, contraste, posicao, teste e erros comuns a evitar.",
  keywords: "melhores praticas codigo qr, dicas qr code, como usar qr code, erros qr code, tamanho qr code",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Qual o tamanho minimo para um QR code impresso?", "acceptedAnswer": { "@type": "Answer", "text": "Para cartoes de visita e materiais de mao, minimo 2x2 cm. Para posters e displays, pelo menos 3x3 cm. Para outdoors, o QR deve ser grande o suficiente para ser escaneado a distancia (regra: 10x a distancia de leitura)." } },
    { "@type": "Question", "name": "Qual o melhor contraste para QR code?", "acceptedAnswer": { "@type": "Answer", "text": "Codigo escuro (preto ou cor escura) em fundo claro (branco ou cor clara). Nunca use codigo claro em fundo escuro — muitos leitores tem dificuldade com QR invertido." } },
    { "@type": "Question", "name": "Devo testar o QR code antes de publicar?", "acceptedAnswer": { "@type": "Answer", "text": "Sempre. Teste com pelo menos 2-3 celulares diferentes (iPhone e Android) em diferentes condicoes de luz. Verifique se o destino esta correto e acessivel." } },
    { "@type": "Question", "name": "Quantos dados posso colocar em um QR?", "acceptedAnswer": { "@type": "Answer", "text": "Ate ~4.296 caracteres alfanumericos. Porem, quanto mais dados, mais denso o QR fica. Para leitura confiavel, mantenha o conteudo o mais curto possivel — use URLs curtas e apenas campos essenciais em vCards." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Criar QR Codes Profissionais",
  "description": "Siga estas melhores praticas para criar QR codes que funcionam perfeitamente.",
  "step": [
    { "@type": "HowToStep", "name": "Minimize os dados", "text": "Use URLs curtas e apenas informacoes essenciais para manter o QR simples e facil de escanear." },
    { "@type": "HowToStep", "name": "Garanta contraste", "text": "Use codigo escuro em fundo claro com margem branca ao redor (zona silenciosa)." },
    { "@type": "HowToStep", "name": "Teste antes de publicar", "text": "Escaneie com multiplos celulares em diferentes condicoes antes de imprimir ou distribuir." }
  ]
}

export default function MelhoresPraticasQRPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Codigo QR</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Melhores Praticas para Codigo QR</h1>
              <p className="text-xl text-slate-300">Crie codigos QR que funcionam perfeitamente: tamanho correto, contraste adequado, testes essenciais e erros comuns a evitar.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><QrCode className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Crie QR codes profissionais com o PDF.it.</p>
            </div>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Gerador QR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tamanho e Resolucao</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Cartao de visita:</strong> Minimo 1.5x1.5 cm, ideal 2x2 cm.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Flyer ou cardapio:</strong> Minimo 2x2 cm, ideal 3x3 cm.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Poster ou banner:</strong> Pelo menos 5x5 cm.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Outdoor:</strong> Regra do 10:1 — para cada 1 metro de distancia de leitura, o QR precisa de 1 cm de lado.</span></li>
              </ul>
              <p className="text-slate-600 mt-4">Para impressao, sempre use formato SVG — ele nao perde qualidade ao redimensionar. PNG funciona bem para telas digitais.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Contraste e Cores</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Regra de Ouro: Escuro no Claro</h3><p className="text-slate-600">O codigo deve ser mais escuro que o fundo. Preto no branco e a combinacao classica e mais confiavel. Se usar cores, mantenha a proporcao de contraste alta.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Evite QR Invertido</h3><p className="text-slate-600">Codigo claro em fundo escuro pode nao funcionar em todos os leitores. Alguns celulares mais antigos nao conseguem ler QR invertido.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Zona Silenciosa</h3><p className="text-slate-600">Mantenha uma margem branca ao redor do QR (zona silenciosa). Sem essa margem, o leitor pode nao identificar onde o QR comeca e termina.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Conteudo e Dados</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Use URLs curtas.</strong> URLs longas geram QR mais densos e dificeis de escanear. Use encurtadores se necessario.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Inclua https://.</strong> Sempre inclua o protocolo completo na URL para garantir que o navegador abra corretamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Campos essenciais no vCard.</strong> Inclua apenas nome, telefone, e-mail e empresa. Endereco e notas aumentam a densidade do QR.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Verifique o destino.</strong> Se o QR aponta para uma URL, certifique-se de que a pagina e responsiva e carrega rapido no celular.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Teste Antes de Publicar</h2>
              <p className="text-slate-600 mb-4">A regra mais importante: sempre teste o QR code antes de publicar ou imprimir. Checklist:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#9745; Escaneie com iPhone (camera nativa).</li>
                <li>&#9745; Escaneie com Android (camera nativa ou Google Lens).</li>
                <li>&#9745; Teste em diferentes condicoes de iluminacao.</li>
                <li>&#9745; Verifique se o destino esta correto e acessivel.</li>
                <li>&#9745; Se for para impressao, imprima uma amostra e teste a versao impressa.</li>
                <li>&#9745; Para QR de WiFi, verifique se a conexao e estabelecida corretamente.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Erros Comuns a Evitar</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">QR Muito Pequeno</h3><p className="text-slate-600">Um QR de 1x1 cm em um poster de parede nao vai funcionar. Dimensione proporcionalmente a distancia de leitura.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Sem Chamada para Acao</h3><p className="text-slate-600">Um QR sozinho sem contexto nao convida ninguem a escanear. Adicione texto como &quot;Escaneie aqui&quot;, &quot;Veja o cardapio&quot; ou &quot;Salve meu contato&quot;.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Link Quebrado</h3><p className="text-slate-600">Se o QR aponta para um link que muda ou sai do ar, o QR se torna inutil. Use links permanentes e estáveis.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Nao Testar</h3><p className="text-slate-600">Publicar sem testar e o erro mais comum. Sempre escaneie o QR final com multiplos dispositivos.</p></div>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crie QR Codes Profissionais</h2>
            <p className="text-slate-300 mb-6">Aplique estas praticas e gere codigos QR que funcionam perfeitamente.</p>
            <Link href="/br/codigo-qr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><QrCode className="h-5 w-5" /> Gerador de Codigo QR</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Criar Codigo QR", href: "/br/aprender/como-criar-codigo-qr" },
                { title: "Tipos de Codigo QR Explicados", href: "/br/aprender/tipos-de-codigo-qr-explicados" },
                { title: "Codigo QR para PDF", href: "/br/aprender/codigo-qr-para-pdf" },
                { title: "Codigo QR para WiFi", href: "/br/aprender/codigo-qr-para-wifi" },
                { title: "Codigo QR para Cardapio de Restaurante", href: "/br/aprender/codigo-qr-para-cardapio-de-restaurante" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
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
                { q: "Qual o tamanho minimo para QR impresso?", a: "Minimo 2x2 cm para materiais de mao. Para distancias maiores, aplique a regra 10:1 (1 cm de QR para cada 1 metro de distancia)." },
                { q: "Qual o melhor contraste?", a: "Codigo escuro em fundo claro. Preto no branco e a combinacao mais confiavel." },
                { q: "Devo testar antes de publicar?", a: "Sempre. Teste com 2-3 celulares diferentes em diferentes condicoes de luz." },
                { q: "Quantos dados cabem em um QR?", a: "Ate ~4.296 caracteres. Mas mantenha o conteudo curto para QR simples e faceis de escanear." },
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
