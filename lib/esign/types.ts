export type SignatureMethod = "typed" | "drawn" | "uploaded"
export type SignatureKind = "signature" | "initials"

export interface SignatureAssetRecord {
  id: string
  user_id?: string
  kind: SignatureKind
  method: SignatureMethod
  asset_url: string
  preview_url?: string | null
  asset_mime: string
  width: number
  height: number
  aspect_ratio: number
  color?: string | null
  font_family?: string | null
  stroke_width?: number | null
  svg_markup?: string | null
  consented_at: string
  created_at: string
  updated_at: string
  metadata?: Record<string, unknown> | null
}

export interface SignatureSaveInput {
  kind: SignatureKind
  method: SignatureMethod
  assetUrl: string
  previewUrl?: string
  assetMime: string
  width: number
  height: number
  color?: string
  fontFamily?: string
  strokeWidth?: number
  svgMarkup?: string
  metadata?: Record<string, unknown>
}
