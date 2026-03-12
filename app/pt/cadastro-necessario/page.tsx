import Link from "next/link"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"

export default function SignupRequiredPagePt() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <HeaderPt />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#1E3A8A] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-[#111827] mb-2">
            Crie uma conta para continuar
          </h1>
          <p className="text-lg text-[#6B7280] mb-8">
            Nao e necessario cartao de credito.
          </p>
          <Link
            href="/pt/cadastro"
            className="block w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-6 rounded-xl text-center transition-colors mb-3"
          >
            Criar Conta Gratis
          </Link>
          <Link
            href="/pt/login"
            className="block w-full bg-white hover:bg-gray-50 text-[#111827] font-bold py-3 px-6 rounded-xl text-center border border-gray-200 transition-colors mb-6"
          >
            Entrar
          </Link>
          <p className="text-sm text-[#6B7280]">
            Voce precisara reenviar seu arquivo — removemos os uploads automaticamente.
          </p>
        </div>
      </main>
      <FooterPt />
    </div>
  )
}
