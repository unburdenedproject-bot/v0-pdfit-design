/**
 * Client-side file pre-validation.
 *
 * Runs the instant a user drops/selects a file -- before upload.
 * Catches empty files, files over the tier size limit, and files that
 * claim to be PDF but don't have a %PDF- header. Deep blank-content
 * checks still happen server-side via lib/blank-pdf-check.
 */

export type UserPlan = "free" | "pro" | "business" | "enterprise"

const FREE_MAX_MB = 25
const PRO_MAX_MB = 200
const BUSINESS_MAX_MB = 1024
const ENTERPRISE_MAX_MB = 1024

export function getSizeLimitMB(plan?: string): number {
  switch (plan) {
    case "enterprise": return ENTERPRISE_MAX_MB
    case "business":   return BUSINESS_MAX_MB
    case "pro":        return PRO_MAX_MB
    default:           return FREE_MAX_MB
  }
}

export function getSizeLimitLabel(plan?: string): string {
  const mb = getSizeLimitMB(plan)
  return mb >= 1024 ? `${mb / 1024}GB` : `${mb}MB`
}

export function getPlanLabel(plan?: string): string {
  switch (plan) {
    case "enterprise": return "Enterprise"
    case "business":   return "Business"
    case "pro":        return "Pro"
    default:           return "Free"
  }
}

export interface ClientValidationResult {
  ok: boolean
  error?: string
}

export async function validateClientFile(file: File, plan?: string): Promise<ClientValidationResult> {
  if (!file) {
    return { ok: false, error: "No file selected." }
  }

  if (file.size === 0) {
    return { ok: false, error: "This file is empty. Please upload a file with content." }
  }

  const maxBytes = getSizeLimitMB(plan) * 1024 * 1024
  if (file.size > maxBytes) {
    const limit = getSizeLimitLabel(plan)
    const planLabel = getPlanLabel(plan)
    const upgradeHint = plan === "enterprise" || plan === "business"
      ? ""
      : plan === "pro"
        ? " Upgrade to Business for files up to 1GB."
        : " Upgrade to Pro for files up to 200MB, or Business for up to 1GB."
    return {
      ok: false,
      error: `File exceeds the ${limit} limit for your ${planLabel} plan. Please choose a smaller file.${upgradeHint}`,
    }
  }

  // PDF header check -- catches renamed files, corrupted downloads, non-PDFs.
  if (file.name.toLowerCase().endsWith(".pdf")) {
    try {
      const header = await file.slice(0, 5).text()
      if (header !== "%PDF-") {
        return { ok: false, error: "This file is not a valid PDF. Please upload a real PDF file." }
      }
    } catch {
      return { ok: false, error: "Could not read this file. It may be corrupted." }
    }
  }

  return { ok: true }
}
