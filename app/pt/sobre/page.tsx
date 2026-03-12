import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { Heart, Target, Crown, Gift, FileText, Building, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Sobre o OmnisPDF — Ferramentas PDF Gratis e Pro",
  description:
    "O OmnisPDF ajuda voce a converter, comprimir, unir, dividir, digitalizar e proteger PDFs no seu navegador. Comece gratis, atualize para Pro quando precisar de mais.",
  alternates: {
    languages: {
      "en": "https://omnispdf.com/about",
      "es": "https://omnispdf.com/es/acerca",
      "pt": "https://omnispdf.com/pt/sobre",
    },
  },
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Ferramentas PDF Gratis e Pro</h1>
              <p className="text-xl text-slate-300">
                Comece com ferramentas gratuitas de conversao PDF, depois atualize quando precisar de arquivos maiores e funcoes avancadas.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-6">
              O OmnisPDF ajuda voce a converter, comprimir, unir, dividir, digitalizar com OCR e proteger PDFs diretamente no seu navegador. Use o plano gratuito para tarefas do dia a dia, e mude para Pro quando precisar de mais limites e funcoes avancadas.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-4">O que voce pode fazer com o OmnisPDF?</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Converter PDFs para Word, Excel, JPG/PNG, TXT e mais</li>
                <li>&#10003; Comprimir PDFs para reduzir tamanho de arquivo para email e uploads</li>
                <li>&#10003; Unir e dividir PDFs para envios e pacotes de documentos</li>
                <li>&#10003; Executar OCR para tornar PDFs digitalizados pesquisaveis</li>
                <li>&#10003; Proteger e adicionar marca d'agua a PDFs para compartilhamento seguro</li>
              </ul>
            </div>

            {/* Free vs Pro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Plano Gratuito</h3>
                </div>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>&#8226; 10 conversoes por dia</li>
                  <li>&#8226; Ferramentas PDF essenciais</li>
                  <li>&#8226; Arquivos ate 25MB</li>
                  <li>&#8226; Sem cadastro para ferramentas gratuitas</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Pro — $7.99/mes</h3>
                </div>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>&#8226; Conversoes ilimitadas</li>
                  <li>&#8226; Todas as ferramentas PDF</li>
                  <li>&#8226; Arquivos ate 200MB</li>
                  <li>&#8226; OCR, Marca d'Agua, Word/Excel/PPT para PDF</li>
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Nossa Missao</h2>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-slate-800 text-lg leading-relaxed">
                    Oferecer ferramentas PDF confiaveis baseadas no navegador que funcionam rapida e simplesmente — sem instalacoes, sem plugins, sem conhecimentos tecnicos necessarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Built for real workflows */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Projetado para Fluxos de Trabalho Reais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-7 w-7 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-900">Estudantes e Pesquisadores</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>&#8226; Converta trabalhos, extraia tabelas, comprima documentos grandes</li>
                    <li>&#8226; Divida PDFs de varios capitulos em arquivos separados</li>
                    <li>&#8226; Digitalize com OCR anotacoes de aula e livros didaticos</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-7 w-7 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Empresas</h3>
                  </div>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>&#8226; Processe notas fiscais e contratos</li>
                    <li>&#8226; Combine PDFs para envios</li>
                    <li>&#8226; Execute OCR em documentos digitalizados</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-7 w-7 text-purple-600" />
                    <h3 className="text-lg font-bold text-purple-900">Freelancers</h3>
                  </div>
                  <ul className="space-y-2 text-purple-800 text-sm">
                    <li>&#8226; Prepare entregas para clientes</li>
                    <li>&#8226; Adicione marca d'agua e senha a arquivos</li>
                    <li>&#8226; Comprima portfolios para compartilhar</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-7 w-7 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-900">Uso Pessoal</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li>&#8226; Formularios, organizacao e compartilhamento</li>
                    <li>&#8226; Converta e comprima documentos do dia a dia</li>
                    <li>&#8226; Proteja arquivos pessoais com senha</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Comece a converter gratis
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Nao precisa de conta para as ferramentas gratuitas. Atualize para Pro quando precisar de acesso ilimitado e funcoes avancadas.
                </p>
                <Link href="/pt#tools">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                    Comecar Gratis &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterPt />
    </div>
  )
}
