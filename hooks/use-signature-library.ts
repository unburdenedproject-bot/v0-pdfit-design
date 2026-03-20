"use client"

import { useCallback, useEffect, useState } from "react"
import type { SignatureAssetRecord, SignatureSaveInput } from "@/lib/esign/types"

export function useSignatureLibrary(enabled = true) {
  const [signatures, setSignatures] = useState<SignatureAssetRecord[]>([])
  const [isLoading, setIsLoading] = useState(enabled)
  const [error, setError] = useState("")

  const fetchSignatures = useCallback(async () => {
    if (!enabled) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/esign/signatures", { cache: "no-store" })
      const data = (await response.json()) as { signatures?: SignatureAssetRecord[]; error?: string }

      if (!response.ok) {
        throw new Error(data.error || "Failed to load saved signatures.")
      }

      setSignatures(data.signatures || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load saved signatures.")
    } finally {
      setIsLoading(false)
    }
  }, [enabled])

  useEffect(() => {
    fetchSignatures()
  }, [fetchSignatures])

  const saveSignature = useCallback(async (input: SignatureSaveInput) => {
    const response = await fetch("/api/esign/signatures", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })

    const data = (await response.json()) as { signature?: SignatureAssetRecord; error?: string }
    if (!response.ok || !data.signature) {
      throw new Error(data.error || "Failed to save signature.")
    }

    setSignatures((prev) => [data.signature!, ...prev.filter((item) => item.id !== data.signature!.id)])
    return data.signature
  }, [])

  const deleteSignature = useCallback(async (id: string) => {
    const response = await fetch(`/api/esign/signatures/${id}`, {
      method: "DELETE",
    })

    const data = (await response.json()) as { success?: boolean; error?: string }
    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to delete signature.")
    }

    setSignatures((prev) => prev.filter((signature) => signature.id !== id))
  }, [])

  return {
    signatures,
    isLoading,
    error,
    fetchSignatures,
    saveSignature,
    deleteSignature,
  }
}
