import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export default async function AuthErrorPageEs({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen flex-col bg-[#F3F4FF]">
      <HeaderEs />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <CardTitle className="text-xl text-slate-800">
                Algo salió mal
              </CardTitle>
            </CardHeader>
            <CardContent>
              {params?.error ? (
                <p className="text-sm text-slate-600 text-center">
                  {"Error: "}{params.error}
                </p>
              ) : (
                <p className="text-sm text-slate-600 text-center">
                  Ocurrió un error no especificado durante la autenticación.
                </p>
              )}
              <div className="mt-6 text-center">
                <Link
                  href="/es/login"
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                >
                  Volver a iniciar sesión
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <FooterEs />
    </div>
  )
}
