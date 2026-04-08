import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

const API_BASE = "https://api.ilovepdf.com/v1"

/**
 * OCR PDF processor — extracted from app/api/ocr-pdf/route.ts
 * Uses iLoveAPI REST endpoints for pdfocr task.
 */
export async function ocrPdfProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const publicKey = process.env.ILOVEAPI_PUBLIC_KEY
  const secretKey = process.env.ILOVEAPI_SECRET_KEY

  if (!publicKey || !secretKey) {
    throw new Error("Processing service not configured")
  }

  const lang = (params.lang as string) || "eng"
  const originalName = (params.original_name as string) || "input.pdf"

  onProgress(5)

  // Validate PDF header
  const headerBytes = await readFile(tmpPath).then((buf) => buf.subarray(0, 5))
  if (headerBytes.length < 5 || headerBytes.toString("ascii") !== "%PDF-") {
    throw new Error("The uploaded file is not a valid PDF")
  }

  // Check for blank PDF
  const pdfBytes = await readFile(tmpPath)
  try {
    const { isBlankPdf } = await import("@/lib/blank-pdf-check")
    const { blank } = await isBlankPdf(pdfBytes)
    if (blank) {
      throw new Error("This file appears to be empty and cannot be processed")
    }
  } catch (err) {
    if ((err as Error).message.includes("empty")) throw err
  }

  onProgress(10)

  const region = (process.env.ILOVEAPI_REGION || "us").toLowerCase()

  // 1) AUTH -> token
  const authRes = await fetch(`${API_BASE}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ public_key: publicKey }),
  })
  if (!authRes.ok) throw new Error("OCR failed: auth error")

  const authJson = await authRes.json()
  const token = authJson?.token
  if (!token) throw new Error("OCR failed: auth response missing token")

  const authHeaders = { Authorization: `Bearer ${token}` }

  onProgress(20)

  // 2) START -> server + task
  const startUrl = `${API_BASE}/start/pdfocr/${region}`
  let startRes = await fetch(startUrl, { method: "GET", headers: authHeaders })
  if (startRes.status === 405) {
    startRes = await fetch(startUrl, { method: "POST", headers: authHeaders })
  }
  if (!startRes.ok) throw new Error("OCR failed: start error")

  const startJson = await startRes.json()
  const server = startJson?.server
  const task = startJson?.task
  if (!server || !task) throw new Error("OCR failed: start response missing server/task")

  const serverBase = `https://${server}`

  onProgress(35)

  // 3) UPLOAD -> server_filename
  const uploadForm = new FormData()
  uploadForm.append("task", task)
  const blob = new Blob([pdfBytes], { type: "application/pdf" })
  uploadForm.append("file", blob, originalName)

  const uploadRes = await fetch(`${serverBase}/v1/upload`, {
    method: "POST",
    headers: authHeaders,
    body: uploadForm,
  })
  if (!uploadRes.ok) throw new Error("OCR failed: upload error")

  const uploadJson = await uploadRes.json()
  const serverFilename = uploadJson?.server_filename
  if (!serverFilename) throw new Error("OCR failed: upload response missing server_filename")

  onProgress(55)

  // 4) PROCESS -> pdfocr
  const processPayload = {
    task,
    tool: "pdfocr",
    files: [{ server_filename: serverFilename, filename: originalName }],
    ocr_languages: [lang],
  }

  const processRes = await fetch(`${serverBase}/v1/process`, {
    method: "POST",
    headers: { ...authHeaders, "Content-Type": "application/json" },
    body: JSON.stringify(processPayload),
  })
  if (!processRes.ok) throw new Error("OCR failed: process error")

  onProgress(75)

  // 5) DOWNLOAD -> final bytes
  const downloadRes = await fetch(`${serverBase}/v1/download/${task}`, {
    method: "GET",
    headers: authHeaders,
  })
  if (!downloadRes.ok) throw new Error("OCR failed: download error")

  const out = Buffer.from(await downloadRes.arrayBuffer())

  onProgress(90)

  // Upload result to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "")
  const outputFilename = `ocr_${baseName}.pdf`

  const resultBlob = await put(outputFilename, out, {
    access: "public",
    contentType: "application/pdf",
  })

  logger.info("ocr_pdf_complete", {
    originalName,
    lang,
    outputUrl: resultBlob.url,
  })

  return {
    outputUrl: resultBlob.url,
    outputFilename,
  }
}
