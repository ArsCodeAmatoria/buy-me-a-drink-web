"use client"

import { useEffect, useRef } from 'react'

export function Bubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Bubble properties
    const bubbles: Array<{
      x: number
      y: number
      radius: number
      speed: number
      opacity: number
    }> = []

    // Create bubbles
    for (let i = 0; i < 50; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach(bubble => {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251, 238, 193, ${bubble.opacity})`
        ctx.fill()

        // Move bubble up
        bubble.y -= bubble.speed

        // Reset bubble position when it reaches top
        if (bubble.y < -bubble.radius) {
          bubble.y = canvas.height + bubble.radius
          bubble.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
} 