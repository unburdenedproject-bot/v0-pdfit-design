"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import type { EmailOtpType } from "@supabase/supabase-js"

function ConfirmForm() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    async function confirm() {
      const tokenHash = searchParams.get("token_hash")
      const type = searchParams.get("type") as EmailOtpType | null
      const redirectTo = searchParams.get("redirect_to")

      if (!tokenHash || !type) {
        setErrorMessage("Parametros de confirmacao ausentes. Por favor, verifique o link no seu email.")
        setStatus("error")
        return
      }

      const supabase = createClient()
      if (!supabase) {
        setErrorMessage("Nao foi possivel conectar ao servico de autenticacao.")
        setStatus("error")
        return
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type,
      })

      if (error) {
        setErrorMessage(error.message || "A confirmacao falhou. O link pode ter expirado.")
        setStatus("error")
        return
      }

      setStatus("success")

      setTimeout(() => {
        let destination = "/pt"
        if (redirectTo) {
          try {
            const url = new URL(redirectTo, window.location.origin)
            if (url.origin === window.location.origin) {
              destination = redirectTo
            }
          } catch {
            // URL invalida — usar "/pt"
          }
        }
        window.location.href = destination
      }, 1200)
    }

    confirm()
  }, [searchParams])

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-sm w-full text-center">
      {status === "loading" && (
        <>
          <Loader2 className="h-10 w-10 animate-spin text-orange-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">Confirmando seu email</h1>
          <p className="text-sm text-slate-500">Por favor, aguarde um momento...</p>
        </>
      )}

      {status === "success" && (
        <>
          <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">Email confirmado</h1>
          <p className="text-sm text-slate-500">Redirecionando agora...</p>
        </>
      )}

      {status === "error" && (
        <>
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">A confirmacao falhou</h1>
          <p className="text-sm text-slate-500 mb-4">{errorMessage}</p>
          <a
            href="/pt/login"
            className="text-sm font-medium text-orange-500 hover:text-orange-600 underline underline-offset-2"
          >
            Voltar para login
          </a>
        </>
      )}
    </div>
  )
}

export default function AuthConfirmPagePt() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <Suspense fallback={null}>
        <ConfirmForm />
      </Suspense>
    </div>
  )
}
