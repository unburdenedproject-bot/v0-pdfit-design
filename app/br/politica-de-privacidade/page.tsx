import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Politica de Privacidade — PDF.it",
  description: "Saiba como o PDF.it coleta, usa e protege seus dados.",
}

export default function PrivacyPolicyPagePt() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0E0F1E] text-white py-16 overflow-hidden">
          {/* Radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,216,196,0.12)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(107,124,255,0.08)_0%,_transparent_50%)]" />
          {/* Grain */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <filter id="heroGrainBr">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#heroGrainBr)" />
          </svg>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#14D8C4]/20 to-[#0E0F1E] border border-[#14D8C4]/20 shadow-[0_0_30px_rgba(20,216,196,0.15)]">
                <Shield className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4 text-white">Politica de Privacidade</h1>
              <p className="text-xl text-slate-300">
                Sua privacidade importa. Veja exatamente como tratamos seus dados.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Dark sub-section container */}
              <div className="relative bg-[#0E0F1E] rounded-3xl p-6 lg:p-10 overflow-hidden">
                {/* Radial gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(20,216,196,0.06)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(107,124,255,0.06)_0%,_transparent_50%)]" />

                {/* Metallic gradient border wrapper */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10">
                  {/* Glassmorphism inner card */}
                  <div className="rounded-2xl bg-white/[0.07] backdrop-blur-xl p-8 lg:p-12">
                    <div className="space-y-2 mb-8">
                      <h2 className="text-2xl font-bold text-white">Politica de Privacidade — PDF.it</h2>
                      <p className="text-slate-500 text-sm"><strong>Data de vigencia:</strong> 1 de janeiro de 2024</p>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-10">
                      PDF.it ("nos", "nosso") valoriza sua privacidade. Esta Politica de Privacidade explica quais informacoes coletamos, como as usamos e as opcoes que voce tem.
                    </p>

                    <div className="space-y-10">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">1. Informacoes que Coletamos</h3>
                        <p className="text-slate-300 font-semibold mb-2">A. Dados de uso do site (coletados automaticamente)</p>
                        <p className="text-slate-400 mb-4">Quando voce visita o PDF.it, nos e nossos provedores de servicos podemos coletar informacoes basicas de uso como endereco IP (usado para aproximar localizacao), tipo de dispositivo e navegador, sistema operacional, paginas visitadas, URL de referencia e marcas de tempo de sessao.</p>
                        <p className="text-slate-300 font-semibold mb-2">B. Informacoes que voce fornece</p>
                        <p className="text-slate-400 mb-4">Se voce entrar em contato conosco, podemos coletar seu endereco de email e o conteudo da sua mensagem.</p>
                        <p className="text-slate-300 font-semibold mb-2">C. Seus arquivos</p>
                        <p className="text-slate-400">Os arquivos que voce envia sao transmitidos de forma segura aos nossos servidores de processamento para realizar a conversao ou operacao solicitada. Os arquivos sao removidos automaticamente de nossos servidores apos o termino da sua sessao. Nao armazenamos, revisamos ou compartilhamos o conteudo dos seus arquivos.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">2. Como Usamos as Informacoes</h3>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Operar e manter o site e as ferramentas</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Melhorar o desempenho, a confiabilidade e a experiencia do usuario</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Compreender padroes de uso e resolver problemas</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Responder a consultas e solicitacoes de suporte</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Prevenir fraude, abuso e incidentes de seguranca</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">3. Cookies, Analiticas e Publicidade</h3>
                        <p className="text-slate-400 mb-4">Usamos cookies e tecnologias semelhantes para funcionalidade essencial do site, analiticas (compreensao do trafego e uso de funcoes) e publicidade atraves do Google AdSense.</p>
                        <p className="text-slate-400">Voce pode controlar os cookies atraves das configuracoes do seu navegador. Dependendo da sua localizacao, voce podera ver um banner de consentimento de cookies para gerenciar suas preferencias.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">4. Servicos de Terceiros</h3>
                        <p className="text-slate-400 mb-2">Usamos servicos de terceiros incluindo:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Google Analytics — analiticas do site</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Google AdSense — publicidade</li>
                        </ul>
                        <p className="text-slate-400 mt-4">Esses provedores podem definir cookies e coletar informacoes sob suas proprias politicas de privacidade. Voce pode revisar e gerenciar suas preferencias atraves das <a href="https://myaccount.google.com/data-and-privacy" className="text-[#14D8C4] hover:text-[#2EE6D6]">configuracoes de privacidade e anuncios do Google</a>.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">5. Retencao de Dados</h3>
                        <p className="text-slate-400 mb-2">Os arquivos enviados para processamento sao removidos automaticamente de nossos servidores apos o termino da sua sessao.</p>
                        <p className="text-slate-400">Os dados de uso do site sao conservados pelo tempo necessario para operar e melhorar o PDF.it. As mensagens de suporte sao conservadas conforme necessario para responder e manter o historico de suporte.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">6. Seguranca de Dados</h3>
                        <p className="text-slate-400">Todas as transferencias de arquivos usam criptografia SSL. Aplicamos medidas administrativas, tecnicas e organizacionais razoaveis para proteger as informacoes. No entanto, nenhum metodo de transmissao ou armazenamento e 100% seguro.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">7. Privacidade de Menores</h3>
                        <p className="text-slate-400">O PDF.it nao e destinado a menores de 13 anos. Nao coletamos intencionalmente informacoes pessoais de menores.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">8. Seus Direitos e Opcoes</h3>
                        <p className="text-slate-400 mb-2">Dependendo de onde voce mora, voce pode ter direitos de acessar, excluir ou corrigir certas informacoes pessoais. Voce tambem pode:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Gerenciar cookies no seu navegador</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Ajustar a personalizacao de anuncios nas configuracoes de anuncios do Google</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Entrar em contato conosco para solicitar a exclusao de mensagens de suporte que nos tenha enviado</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">9. Alteracoes a Esta Politica</h3>
                        <p className="text-slate-400">Podemos atualizar esta politica periodicamente. As atualizacoes serao publicadas aqui com uma Data de vigencia revisada.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">10. Fale Conosco</h3>
                        <p className="text-slate-400">
                          Se voce tiver duvidas sobre esta Politica de Privacidade, entre em contato conosco em{" "}
                          <a href="mailto:suporte@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            suporte@pdf.it.com
                          </a>.
                        </p>
                      </div>
                    </div>

                    {/* Privacy callout */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                      <div className="bg-[#14D8C4]/5 border border-[#14D8C4]/20 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-[#14D8C4] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white mb-2">Seus Arquivos Sao Removidos Apos Cada Sessao</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              Os arquivos enviados ao PDF.it sao processados de forma segura e removidos automaticamente apos o termino da sua sessao. Nao armazenamos, revisamos ou compartilhamos seus documentos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy footer section */}
        <section className="bg-[#0E0F1E] py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-slate-500" />
              <p className="text-slate-500 text-xs">Arquivos removidos imediatamente apos o download.</p>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
