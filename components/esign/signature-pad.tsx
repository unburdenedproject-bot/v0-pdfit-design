"use client"

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { drawStrokesOnCanvas, createDrawSignatureSvg, svgMarkupToPngBlob } from "@/lib/esign/signature-utils"
import type { DrawStroke, DrawPoint } from "@/lib/esign/signature-utils"

export interface SignaturePadHandle {
  clear: () => void
  undo: () => void
  exportSignature: () => Promise<{ pngBlob: Blob; svgMarkup: string; width: number; height: number }>
  hasSignature: () => boolean
}

interface SignaturePadProps {
  color: string
  strokeWidth: number
  className?: string
}

const DISPLAY_WIDTH = 560
const DISPLAY_HEIGHT = 220

export const SignaturePad = forwardRef<SignaturePadHandle, SignaturePadProps>(function SignaturePad(
  { color, strokeWidth, className },
  ref
) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const activeStrokeRef = useRef<DrawPoint[]>([])
  const [strokes, setStrokes] = useState<DrawStroke[]>([])
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = DISPLAY_WIDTH * dpr
    canvas.height = DISPLAY_HEIGHT * dpr
    canvas.style.width = "100%"
    canvas.style.height = `${DISPLAY_HEIGHT}px`

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    drawStrokesOnCanvas(ctx, strokes, color, strokeWidth)
  }, [strokes, color, strokeWidth])

  useImperativeHandle(
    ref,
    () => ({
      clear() {
        setStrokes([])
      },
      undo() {
        setStrokes((prev) => prev.slice(0, -1))
      },
      hasSignature() {
        return strokes.length > 0
      },
      async exportSignature() {
        const svgMarkup = createDrawSignatureSvg({
          strokes,
          color,
          strokeWidth,
          width: DISPLAY_WIDTH,
          height: DISPLAY_HEIGHT,
        })
        const pngBlob = await svgMarkupToPngBlob(svgMarkup, DISPLAY_WIDTH, DISPLAY_HEIGHT)
        return {
          pngBlob,
          svgMarkup,
          width: DISPLAY_WIDTH,
          height: DISPLAY_HEIGHT,
        }
      },
    }),
    [strokes, color, strokeWidth]
  )

  const getRelativePoint = (event: PointerEvent | React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: ((event.clientX - rect.left) / rect.width) * DISPLAY_WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * DISPLAY_HEIGHT,
    }
  }

  const commitStroke = () => {
    if (activeStrokeRef.current.length === 0) return
    setStrokes((prev) => [...prev, { points: [...activeStrokeRef.current] }])
    activeStrokeRef.current = []
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    activeStrokeRef.current = [getRelativePoint(event)]
    setIsDrawing(true)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    activeStrokeRef.current = [...activeStrokeRef.current, getRelativePoint(event)]

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    drawStrokesOnCanvas(ctx, [...strokes, { points: activeStrokeRef.current }], color, strokeWidth)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    event.preventDefault()
    commitStroke()
    setIsDrawing(false)
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  )
})
