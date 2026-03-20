export type SignatureMethod = "typed" | "drawn" | "uploaded"
export type SignatureKind = "signature" | "initials"

export interface SignatureSessionAsset {
  id: string
  kind: SignatureKind
  method: SignatureMethod
  assetUrl: string
  previewUrl?: string
  assetMime: string
  width: number
  height: number
  aspectRatio: number
  color?: string
  fontFamily?: string
  strokeWidth?: number
  svgMarkup?: string
  createdAt: string
  metadata?: Record<string, unknown>
}
