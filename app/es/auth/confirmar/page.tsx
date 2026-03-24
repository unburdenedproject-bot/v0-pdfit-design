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
        setErrorMessage("Faltan parámetros de confirmación. Por favor revisa el enlace en tu correo.")
        setStatus("error")
        return
      }

      const supabase = createClient()
      if (!supabase) {
        setErrorMessage("No se pudo conectar al servicio de autenticación.")
        setStatus("error")
        return
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type,
      })

      if (error) {
        setErrorMessage(error.message || "La confirmación falló. El enlace puede haber expirado.")
        setStatus("error")
        return
      }

      setStatus("success")

      setTimeout(() => {
        let destination = "/es"
        if (redirectTo) {
          try {
            const url = new URL(redirectTo, window.location.origin)
            if (url.origin === window.location.origin) {
              destination = redirectTo
            }
          } catch {
            // URL inválida — usar "/"
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
          <h1 className="text-xl font-bold text-slate-800 mb-1">Confirmando tu correo</h1>
          <p className="text-sm text-slate-500">Por favor espera un momento...</p>
        </>
      )}

      {status === "success" && (
        <>
          <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">Correo confirmado</h1>
          <p className="text-sm text-slate-500">Redirigiendo ahora...</p>
        </>
      )}

      {status === "error" && (
        <>
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">La confirmación falló</h1>
          <p className="text-sm text-slate-500 mb-4">{errorMessage}</p>
          <a
            href="/es/login"
            className="text-sm font-medium text-orange-500 hover:text-orange-600 underline underline-offset-2"
          >
            Volver a iniciar sesión
          </a>
        </>
      )}
    </div>
  )
}

export default function AuthConfirmPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] flex items-center justify-center px-4">
      <Suspense fallback={null}>
        <ConfirmForm />
      </Suspense>
    </div>
  )
}
