'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const BRAND_COLORS = ['#1E9AD8', '#00A266', '#173B64', '#1E9AD8', '#00A266']

export function MouseNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let particles: Particle[] = []
    const PARTICLE_COUNT = 90
    const MAX_DIST = 130
    const MOUSE_REPEL_DIST = 100

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)],
      }))
    }

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return { r, g, b }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Move particles
      particles.forEach((p) => {
        // Mouse attraction — gently pull particles toward cursor
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          // repel slightly from cursor
          p.vx -= (dx / dist) * 0.04
          p.vy -= (dy / dist) * 0.04
        } else if (dist < MOUSE_REPEL_DIST * 4 && dist > 0) {
          // attract at medium range
          p.vx += (dx / dist) * 0.015
          p.vy += (dy / dist) * 0.015
        }

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99

        // Clamp velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 1.5) { p.vx = (p.vx / speed) * 1.5; p.vy = (p.vy / speed) * 1.5 }

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25
            const { r, g, b: bv } = hexToRgb(a.color)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${r},${g},${bv},${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Connect particle to mouse
        const p = particles[i]
        const dxm = p.x - mx
        const dym = p.y - my
        const distm = Math.sqrt(dxm * dxm + dym * dym)
        if (distm < MOUSE_REPEL_DIST * 1.8) {
          const alpha = (1 - distm / (MOUSE_REPEL_DIST * 1.8)) * 0.6
          const { r, g, b: bv } = hexToRgb(p.color)
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(${r},${g},${bv},${alpha})`
          ctx.lineWidth = 1.2
          ctx.stroke()
        }
      }

      // Draw particles
      particles.forEach((p) => {
        const { r, g, b: bv } = hexToRgb(p.color)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${bv},${p.opacity})`
        ctx.fill()
      })

      // Draw mouse dot
      if (mx > 0 && my > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 40)
        grd.addColorStop(0, 'rgba(30,154,216,0.35)')
        grd.addColorStop(1, 'rgba(30,154,216,0)')
        ctx.beginPath()
        ctx.arc(mx, my, 40, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        ctx.beginPath()
        ctx.arc(mx, my, 4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(30,154,216,0.8)'
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  )
}
