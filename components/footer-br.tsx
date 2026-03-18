import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export function FooterBr() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/logo-white.svg" alt="OmnisPDF" className="h-8 w-auto" width="180" height="32" loading="lazy" />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Converta, comprima, una, divida, digitalize e proteja arquivos PDF em segundos. Ferramentas simples que funcionam em qualquer dispositivo.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors" aria-label="Siga-nos no Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors" aria-label="Siga-nos no Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors" aria-label="Siga-nos no Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-400 transition-colors" aria-label="Siga-nos no LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="font-bold text-white mb-4">Ferramentas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/br/pdf-para-jpg" className="text-slate-400 hover:text-white transition-colors text-sm">
                  PDF para JPG
                </Link>
              </li>
              <li>
                <Link href="/br/unir-pdf" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Unir PDF
                </Link>
              </li>
              <li>
                <Link href="/br/dividir-pdf" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Dividir PDF
                </Link>
              </li>
              <li>
                <Link href="/br/comprimir-pdf" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Comprimir PDF
                </Link>
              </li>
              <li>
                <Link href="/br/proteger-pdf" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Proteger PDF
                </Link>
              </li>
              <li>
                <Link href="/br/scanner-ocr" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Scanner OCR
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/br/sobre" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/br/contato" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/br/precos" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Precos
                </Link>
              </li>
            </ul>

            <h3 className="font-bold text-white mb-4 mt-6">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/br/politica-de-privacidade" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Politica de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/br/termos-e-condicoes" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Termos e Condicoes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-white mb-4">Fale Conosco</h3>
            <div className="space-y-3">
              <a
                href="mailto:suporte@omnispdf.com"
                className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>suporte@omnispdf.com</span>
              </a>
              <p className="text-slate-400 text-xs">Respondemos em menos de 24 horas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} OmnisPDF. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/br/politica-de-privacidade" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacidade
            </Link>
            <Link href="/br/termos-e-condicoes" className="text-slate-400 hover:text-white text-sm transition-colors">
              Termos
            </Link>
            <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
