'use client'
import { useEffect, useRef } from 'react'

export default function BannerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const alphaRef = useRef(0)
  const outlineStartXRef = useRef(-400)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    imgRef.current = img
    img.src = '/images/Banner.png'

    const calcFontSize = (canvasWidth: number) => Math.round(canvasWidth / 15)

    const draw = () => {
      if (!canvas || !ctx || !img) return

      const aspectRatio = img.width / img.height
      canvas.height = canvas.width / aspectRatio

      ctx.clearRect(-10, -10, canvas.width + 20, canvas.height + 20)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      const fontSizeHeading = calcFontSize(canvas.width)
      ctx.font = `bold ${fontSizeHeading}px var(--font-pacifico)`

      if (alphaRef.current < 1) {
        alphaRef.current += 0.005
      }

      ctx.fillStyle = `rgba(0, 0, 0,${alphaRef.current})`

      const headX = canvas.width * 0.05
      const headY = canvas.height * 0.5

      ctx.fillText('About me', headX, headY)

      if (outlineStartXRef.current < headX) {
        outlineStartXRef.current += 2
      }

      ctx.strokeStyle = 'beige'
      ctx.lineWidth = 2
      ctx.strokeText('About me', outlineStartXRef.current - 1, headY)

      const fontSizeText = fontSizeHeading / 2
      ctx.font = `bold ${fontSizeText}px var(--font-roboto)`

      let textY = headY + fontSizeHeading
      const lineGap = fontSizeText * 1.5

      const lines = [
        "Kieran Sweetman",
        "Noob Software Developer",
        "Web3 Enthusiast",
        "DeSci and Global Health Advocate"
      ]

      lines.forEach(line => {
        ctx.fillStyle = `rgba(0, 0, 0, ${alphaRef.current})`
        ctx.fillText(line, headX, textY)
        ctx.strokeText(line, outlineStartXRef.current, textY)
        textY += lineGap
      })

      animationFrameRef.current = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      outlineStartXRef.current = -400
    }

    img.onload = () => {
      canvas.width = window.innerWidth
      draw()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="block w-full m-0" />
}