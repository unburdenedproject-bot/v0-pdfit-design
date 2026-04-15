import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileText } from "lucide-react"
import Link from "next/link"

export default async function AuthErrorPagePt({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen flex-col bg-[#F3F4FF]">
      <HeaderBr />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #14D8C4, #6B7CFF)" }}>
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">
                Algo deu errado
              </CardTitle>
            </CardHeader>
            <CardContent>
              {params?.error ? (
                <p className="text-sm text-slate-600 text-center">
                  {"Erro: "}{params.error}
                </p>
              ) : (
                <p className="text-sm text-slate-600 text-center">
                  Ocorreu um erro nao especificado durante a autenticacao.
                </p>
              )}
              <div className="mt-6 text-center">
                <Link
                  href="/br/login"
                  className="text-sm text-[#14D8C4] hover:text-[#14D8C4] font-medium underline underline-offset-4"
                >
                  Voltar para login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <FooterBr />
    </div>
  )
}
