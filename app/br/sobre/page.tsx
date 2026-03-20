import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import type { Metadata } from "next"
import { Heart, Target, Crown, Gift, FileText, Building, GraduationCap, Briefcase, Shield, Workflow, ScanText } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sobre o OmnisPDF — Ferramentas PDF Gratis, Pro, Business e Enterprise",
  description:
    "Conheca o OmnisPDF, suas ferramentas PDF e seus planos. Compare Gratis, Pro, Business e Enterprise para conversao de PDF, OCR, assinatura eletronica, redacao, automacao e extracao de tabelas.",
  keywords: [
    "sobre o OmnisPDF",
    "ferramentas PDF",
    "ferramentas PDF gratis",
    "conversor PDF",
    "comprimir PDF",
    "unir PDF",
    "dividir PDF",
    "OCR PDF",
    "redacao PDF",
    "assinatura eletronica PDF",
    "automacao de fluxos",
    "extracao de tabelas",
    "ferramentas PDF Pro",
    "ferramentas PDF Business",
    "ferramentas PDF Enterprise",
  ],
  alternates: {
    languages: {
      en: "https://omnispdf.com/about",
      es: "https://omnispdf.com/es/acerca",
      pt: "https://omnispdf.com/br/sobre",
    },
  },
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Planos do OmnisPDF: Ferramentas PDF Gratis, Pro, Business e Enterprise</h1>
              <p className="text-xl text-slate-300">
                Ferramentas PDF no navegador para conversao, compressao, OCR, assinatura eletronica, redacao, automacao de fluxos e processamento documental empresarial.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-6">
              O OmnisPDF ajuda pessoas, estudantes, equipes juridicas, contabeis, operacionais e empresas em crescimento a trabalhar com arquivos PDF diretamente no navegador. Voce pode converter PDF para Word, Excel, JPG, PNG e TXT, comprimir PDFs para email e limites de upload, unir e dividir documentos PDF, executar OCR em PDFs digitalizados, adicionar assinaturas eletronicas, redigir conteudo sensivel, automatizar fluxos e extrair tabelas para Excel.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Nossos planos foram pensados para crescer com o seu fluxo de trabalho. O plano Gratis cobre ferramentas PDF essenciais, o Pro libera conversao avancada e utilidades com IA, o Business adiciona fluxos documentais de nivel empresarial, e o Enterprise soma maior volume de processamento, modelos de fluxo e suporte premium para operacoes documentais mais exigentes.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-4">O que voce pode fazer com o OmnisPDF</h2>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Converter PDFs para Word, Excel, JPG/PNG, TXT e muito mais</li>
                <li>✓ Comprimir PDFs para reduzir o tamanho do arquivo para email e uploads</li>
                <li>✓ Unir e dividir PDFs para envios e pacotes de documentos</li>
                <li>✓ Executar OCR para tornar PDFs digitalizados pesquisaveis</li>
                <li>✓ Proteger, adicionar marca d&apos;agua, assinar, comparar e redigir PDFs com mais seguranca</li>
                <li>✓ Automatizar fluxos PDF recorrentes e extrair tabelas para Excel</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compare os planos do OmnisPDF</h2>
              <p className="text-slate-600 mb-6">
                O OmnisPDF oferece quatro niveis de planos para que voce possa comecar com ferramentas PDF gratis e fazer upgrade apenas quando aumentarem seu volume documental, o tamanho dos arquivos, as exigencias de compliance ou a complexidade dos seus fluxos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Plano Gratis</h3>
                </div>
                <p className="text-green-900 font-medium text-sm mb-4">Ideal para conversao PDF ocasional, compressao, uniao, divisao e tarefas documentais do dia a dia.</p>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• 10 conversoes por dia</li>
                  <li>• Ferramentas PDF essenciais</li>
                  <li>• Arquivos ate 25MB</li>
                  <li>• Sem cadastro para ferramentas gratuitas</li>
                  <li>• Ideal para estudantes, uso pessoal e trabalho leve de escritorio</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Pro — $7.99/mes</h3>
                </div>
                <p className="text-orange-900 font-medium text-sm mb-4">Ideal para freelancers, candidatos e profissionais que precisam de conversao PDF avancada e limites maiores de uso.</p>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Conversoes ilimitadas</li>
                  <li>• Todas as ferramentas PDF</li>
                  <li>• Arquivos ate 200MB</li>
                  <li>• OCR, marca d&apos;agua e ferramentas Office para PDF</li>
                  <li>• Otimizador ATS, criador de curriculo, URL para PDF e gerador de QR</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">Business — $13.99/mes</h3>
                </div>
                <p className="text-indigo-900 font-medium text-sm mb-4">Ideal para equipes que lidam com contratos, faturas, relatorios, documentos digitalizados e fluxos repetitivos.</p>
                <ul className="space-y-2 text-indigo-800 text-sm">
                  <li>• Tudo o que esta incluido no Pro</li>
                  <li>• Arquivos ate 1GB</li>
                  <li>• Automacao de fluxos</li>
                  <li>• Extracao de tabelas, comparacao de PDF, assinatura eletronica e redacao</li>
                  <li>• Feito para operacoes, financeiro, RH e equipes com alto volume documental</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-amber-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold text-white">Enterprise — $49.99/mes</h3>
                </div>
                <p className="text-slate-200 font-medium text-sm mb-4">Ideal para escritorios, contadores, laboratorios e organizacoes que precisam de mais volume, prioridade e suporte premium.</p>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li>• Tudo o que esta incluido no Business</li>
                  <li>• Extracao de tabelas para Excel: 2.000 paginas por mes</li>
                  <li>• Modelos de fluxo personalizados</li>
                  <li>• Fila de processamento prioritaria</li>
                  <li>• Suporte dedicado por email com resposta em 24 horas</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ScanText className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Conversao PDF Avancada</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  O OmnisPDF cobre fluxos comuns como PDF para Word, PDF para Excel, PDF para PowerPoint, Word para PDF, Excel para PDF, JPG para PDF, PNG para PDF, URL para PDF e OCR para documentos digitalizados. Isso torna a plataforma util para limpeza, edicao, compartilhamento e arquivamento de documentos.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Ferramentas de Fluxo Business</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Os planos Business e Enterprise adicionam automacao de fluxos, extracao de tabelas, comparacao de PDF, assinatura eletronica e redacao PDF. Esses recursos foram feitos para documentos juridicos, contratos, processamento de faturas, compliance, auditoria e operacoes PDF recorrentes.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Capacidade de Nivel Enterprise</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  O Enterprise inclui limites mensais maiores para extracao de tabelas, modelos de fluxo, prioridade na fila e suporte dedicado. Foi pensado para firmas e equipes que precisam de processamento PDF confiavel no navegador sem depender de software de desktop em cada maquina.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Nossa Missao</h2>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-slate-800 text-lg leading-relaxed">
                    Oferecer ferramentas PDF confiaveis no navegador que funcionem de forma rapida e simples, sem instalacoes, sem plugins e sem necessidade de conhecimento tecnico. Queremos que conversao PDF, OCR, redacao, assinatura eletronica, extracao de tabelas e automacao estejam ao alcance de pessoas e equipes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Projetado para Fluxos de Trabalho Reais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-7 w-7 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-900">Estudantes e Pesquisadores</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Converta trabalhos, extraia tabelas e comprima documentos grandes</li>
                    <li>• Divida PDFs com varios capitulos em arquivos separados</li>
                    <li>• Execute OCR em anotacoes e materiais digitalizados</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-7 w-7 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Empresas</h3>
                  </div>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Processe faturas, contratos, pacotes de onboarding e relatorios</li>
                    <li>• Combine PDFs para envios e entregaveis para clientes</li>
                    <li>• Use OCR, assinatura eletronica, redacao e automacao</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-7 w-7 text-purple-600" />
                    <h3 className="text-lg font-bold text-purple-900">Freelancers</h3>
                  </div>
                  <ul className="space-y-2 text-purple-800 text-sm">
                    <li>• Prepare entregaveis para clientes</li>
                    <li>• Adicione marcas d&apos;agua e senhas aos seus arquivos</li>
                    <li>• Comprima portfolios para compartilhar com facilidade</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-7 w-7 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-900">Uso Pessoal</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li>• Formularios, organizacao e documentos para compartilhar</li>
                    <li>• Converta e comprima arquivos do dia a dia</li>
                    <li>• Proteja documentos pessoais com senha</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qual plano do OmnisPDF voce deve escolher?</h2>
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="space-y-4 text-slate-600">
                  <p>
                    Escolha <strong>Gratis</strong> se voce precisa de um conversor PDF online confiavel, compressor PDF, uniao PDF, divisao PDF ou protecao com senha para arquivos do dia a dia.
                  </p>
                  <p>
                    Escolha <strong>Pro</strong> se voce precisa de ferramentas PDF mais avancadas como OCR, conversao Office para PDF, ferramentas de curriculo com IA, arquivos maiores e uso ilimitado.
                  </p>
                  <p>
                    Escolha <strong>Business</strong> se sua equipe trabalha com contratos, faturas, registros digitalizados, comparacoes, assinaturas ou fluxos PDF repetitivos.
                  </p>
                  <p>
                    Escolha <strong>Enterprise</strong> se voce precisa de suporte premium, modelos de fluxo, extracao de tabelas em alto volume e uma estrutura mais forte para trabalho juridico, contabil, financeiro, laboratorial ou de compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Comece a converter gratis
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Voce nao precisa de conta para usar as ferramentas gratuitas. Atualize quando precisar de acesso ilimitado, arquivos maiores, OCR, assinatura eletronica, redacao, extracao de tabelas, automacao ou suporte Enterprise.
                </p>
                <Link href="/br#tools">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                    Comecar Gratis →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
