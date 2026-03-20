import type { SignatureKind } from "@/lib/esign/types"

export interface SignatureVariant {
  id: string
  label: string
  fontFamily: string
  fontSize: number
  letterSpacing?: number
  fontWeight?: number
  rotation?: number
  skewX?: number
  baselineShift?: number
  strokeAmplifier?: number
}

export interface DrawPoint {
  x: number
  y: number
}

export interface DrawStroke {
  points: DrawPoint[]
}

export const SIGNATURE_COLORS = [
  { id: "black", label: "Black", value: "#111827" },
  { id: "navy", label: "Dark Blue", value: "#1e3a5f" },
  { id: "gray", label: "Dark Gray", value: "#374151" },
] as const

export const TYPED_SIGNATURE_VARIANTS: SignatureVariant[] = [
  {
    id: "formal-script",
    label: "Formal Script",
    fontFamily: "'Snell Roundhand', 'Segoe Script', 'Apple Chancery', cursive",
    fontSize: 76,
    letterSpacing: 0.4,
    rotation: -3,
    strokeAmplifier: 0.6,
  },
  {
    id: "classic-pen",
    label: "Classic Pen",
    fontFamily: "'Segoe Script', 'Lucida Handwriting', cursive",
    fontSize: 72,
    letterSpacing: 0.2,
    rotation: -2,
    baselineShift: 2,
  },
  {
    id: "natural-hand",
    label: "Natural Hand",
    fontFamily: "'Bradley Hand', 'Segoe Print', 'Comic Sans MS', cursive",
    fontSize: 68,
    rotation: -4,
    skewX: -6,
    strokeAmplifier: 0.4,
  },
  {
    id: "modern-script",
    label: "Modern Script",
    fontFamily: "'SignPainter', 'Brush Script MT', 'Segoe Script', cursive",
    fontSize: 78,
    letterSpacing: 0.8,
    rotation: -1,
    strokeAmplifier: 0.8,
  },
  {
    id: "professional-clean",
    label: "Professional Clean",
    fontFamily: "'URW Chancery L', 'Times New Roman', serif",
    fontSize: 70,
    letterSpacing: 0.6,
    rotation: -2,
    skewX: -8,
  },
  {
    id: "messy-pen",
    label: "Messy Pen",
    fontFamily: "'Segoe Script', 'Bradley Hand', cursive",
    fontSize: 66,
    rotation: -5,
    skewX: -10,
    baselineShift: 5,
    strokeAmplifier: 0.5,
  },
  {
    id: "executive-script",
    label: "Executive Script",
    fontFamily: "'Edwardian Script ITC', 'Snell Roundhand', cursive",
    fontSize: 82,
    letterSpacing: 0.9,
    rotation: -3,
    strokeAmplifier: 0.9,
  },
  {
    id: "steady-ink",
    label: "Steady Ink",
    fontFamily: "'Segoe Script', 'Georgia', serif",
    fontSize: 70,
    letterSpacing: 0.3,
    rotation: -1,
    strokeAmplifier: 0.3,
  },
]

export function normalizeSignatureText(input: string, kind: SignatureKind) {
  const cleaned = input.replace(/\s+/g, " ").trim()
  if (!cleaned) return ""

  if (kind === "initials") {
    const letters = cleaned
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("")
    return letters.slice(0, 4)
  }

  return cleaned
}

export function svgToDataUrl(svgMarkup: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`
}

export function getStrokeWidth(baseWidth: number, variant?: SignatureVariant) {
  return Number((baseWidth * (variant?.strokeAmplifier ?? 1)).toFixed(2))
}

export function createTypedSignatureSvg({
  text,
  color,
  strokeWidth,
  variant,
  width = 640,
  height = 220,
}: {
  text: string
  color: string
  strokeWidth: number
  variant: SignatureVariant
  width?: number
  height?: number
}) {
  const escapedText = escapeXml(text)
  const transformParts = [
    variant.rotation ? `rotate(${variant.rotation} ${width / 2} ${height / 2})` : "",
    variant.skewX ? `skewX(${variant.skewX})` : "",
  ].filter(Boolean)

  const textY = height / 2 + (variant.baselineShift ?? 0)
  const stroke = getStrokeWidth(strokeWidth, variant)
  const transform = transformParts.length > 0 ? ` transform="${transformParts.join(" ")}"` : ""
  const letterSpacing = variant.letterSpacing ?? 0
  const fontWeight = variant.fontWeight ?? 400

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<rect width="100%" height="100%" fill="transparent"/>`,
    `<g${transform}>`,
    `<text x="50%" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="${color}" stroke="${color}" stroke-width="${stroke}" paint-order="stroke fill" font-family="${variant.fontFamily}" font-size="${variant.fontSize}" font-weight="${fontWeight}" letter-spacing="${letterSpacing}">${escapedText}</text>`,
    `</g>`,
    `</svg>`,
  ].join("")
}

export function createDrawSignatureSvg({
  strokes,
  color,
  strokeWidth,
  width,
  height,
}: {
  strokes: DrawStroke[]
  color: string
  strokeWidth: number
  width: number
  height: number
}) {
  const paths = strokes
    .map((stroke) => strokePointsToSvgPath(stroke.points))
    .filter(Boolean)
    .map(
      (path) =>
        `<path d="${path}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`
    )
    .join("")

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<rect width="100%" height="100%" fill="transparent"/>`,
    paths,
    `</svg>`,
  ].join("")
}

export async function svgMarkupToPngBlob(svgMarkup: string, width: number, height: number, scale = 3) {
  const img = await loadImage(svgToDataUrl(svgMarkup))
  const canvas = document.createElement("canvas")
  canvas.width = width * scale
  canvas.height = height * scale
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Unable to render signature preview.")
  ctx.scale(scale, scale)
  ctx.clearRect(0, 0, width, height)
  ctx.drawImage(img, 0, 0, width, height)
  const trimmed = trimCanvasTransparency(canvas)
  return await canvasToBlob(trimmed, "image/png")
}

export async function exportUploadPreviewToBlob({
  source,
  scale,
  offsetX,
  offsetY,
  width = 1200,
  height = 400,
}: {
  source: string
  scale: number
  offsetX: number
  offsetY: number
  width?: number
  height?: number
}) {
  const img = await loadImage(source)
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Unable to prepare uploaded signature.")

  ctx.clearRect(0, 0, width, height)

  const baseScale = Math.min(width / img.width, height / img.height)
  const renderedWidth = img.width * baseScale * scale
  const renderedHeight = img.height * baseScale * scale
  const x = (width - renderedWidth) / 2 + offsetX
  const y = (height - renderedHeight) / 2 + offsetY
  ctx.drawImage(img, x, y, renderedWidth, renderedHeight)

  const trimmed = trimCanvasTransparency(canvas)
  return await canvasToBlob(trimmed, "image/png")
}

export function drawStrokesOnCanvas(
  ctx: CanvasRenderingContext2D,
  strokes: DrawStroke[],
  color: string,
  strokeWidth: number
) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.strokeStyle = color
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  ctx.lineWidth = strokeWidth

  for (const stroke of strokes) {
    if (stroke.points.length === 0) continue
    if (stroke.points.length === 1) {
      const point = stroke.points[0]
      ctx.beginPath()
      ctx.arc(point.x, point.y, strokeWidth / 2, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
      continue
    }

    ctx.beginPath()
    ctx.moveTo(stroke.points[0].x, stroke.points[0].y)

    for (let i = 1; i < stroke.points.length - 1; i++) {
      const current = stroke.points[i]
      const next = stroke.points[i + 1]
      const midX = (current.x + next.x) / 2
      const midY = (current.y + next.y) / 2
      ctx.quadraticCurveTo(current.x, current.y, midX, midY)
    }

    const lastPoint = stroke.points[stroke.points.length - 1]
    ctx.lineTo(lastPoint.x, lastPoint.y)
    ctx.stroke()
  }
}

export function trimCanvasTransparency(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return canvas

  const { width, height } = canvas
  const imageData = ctx.getImageData(0, 0, width, height)
  const { data } = imageData

  let top = height
  let right = 0
  let bottom = 0
  let left = width
  let hasInk = false

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = data[(y * width + x) * 4 + 3]
      if (alpha > 0) {
        hasInk = true
        top = Math.min(top, y)
        right = Math.max(right, x)
        bottom = Math.max(bottom, y)
        left = Math.min(left, x)
      }
    }
  }

  if (!hasInk) return canvas

  const padding = 12
  const trimmedWidth = Math.max(right - left + padding * 2, 1)
  const trimmedHeight = Math.max(bottom - top + padding * 2, 1)
  const trimmed = document.createElement("canvas")
  trimmed.width = trimmedWidth
  trimmed.height = trimmedHeight
  const trimmedCtx = trimmed.getContext("2d")
  if (!trimmedCtx) return canvas

  trimmedCtx.drawImage(
    canvas,
    Math.max(left - padding, 0),
    Math.max(top - padding, 0),
    Math.min(right - left + padding * 2, width),
    Math.min(bottom - top + padding * 2, height),
    0,
    0,
    trimmedWidth,
    trimmedHeight
  )

  return trimmed
}

export async function canvasToBlob(canvas: HTMLCanvasElement, type = "image/png") {
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Unable to export signature asset."))
        return
      }
      resolve(blob)
    }, type)
  })
}

export async function getBlobImageDimensions(blob: Blob) {
  const objectUrl = URL.createObjectURL(blob)

  try {
    const image = await loadImage(objectUrl)
    return {
      width: image.naturalWidth || image.width,
      height: image.naturalHeight || image.height,
    }
  } finally {
    URL.revokeObjectURL(objectUrl)
  }
}

export function createSignatureFilename(kind: SignatureKind, method: string, extension = "png") {
  return `${kind}-${method}-${crypto.randomUUID()}.${extension}`
}

export async function loadImage(src: string) {
  return await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error("Unable to load image preview."))
    img.src = src
  })
}

function strokePointsToSvgPath(points: DrawPoint[]) {
  if (points.length === 0) return ""
  if (points.length === 1) {
    const point = points[0]
    return `M ${point.x} ${point.y} L ${point.x + 0.01} ${point.y + 0.01}`
  }

  let path = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length - 1; i++) {
    const current = points[i]
    const next = points[i + 1]
    const midX = (current.x + next.x) / 2
    const midY = (current.y + next.y) / 2
    path += ` Q ${current.x} ${current.y} ${midX} ${midY}`
  }

  const lastPoint = points[points.length - 1]
  path += ` L ${lastPoint.x} ${lastPoint.y}`
  return path
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}
