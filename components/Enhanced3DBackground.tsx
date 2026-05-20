'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Enhanced3DBackground() {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()

  // 3D rotation values based on scroll
  const rotateX = useTransform(scrollY, [0, 1000], [0, 15])
  const rotateY = useTransform(scrollY, [0, 1000], [0, 10])
  const scaleValue = useTransform(scrollY, [0, 1000], [1, 1.1])

  // Parallax shifts for cinematic blobs
  const blobY1 = useTransform(scrollY, [0, 1500], [0, 150])
  const blobY2 = useTransform(scrollY, [0, 1500], [0, -100])
  const blobY3 = useTransform(scrollY, [0, 1500], [0, 180])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <>
      {/* MAIN BACKGROUND LAYER - 3D CINEMATIC */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden transition-colors duration-500 bg-background"
      >
        {/* Base Cinematic Gradient */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDark
              ? 'bg-gradient-to-br from-black via-slate-950 to-indigo-950/50 opacity-100'
              : 'bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 opacity-100'
          }`}
        />

        {/* Animated Cinematic Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0.8 : 0.9 }}
          transition={{ duration: 2 }}
          style={{ rotateX, rotateY, scale: scaleValue }}
          className={`absolute inset-0 transition-opacity duration-1000 will-change-transform ${
            isDark
              ? 'bg-gradient-to-tr from-blue-950/40 via-purple-950/30 to-indigo-950/20'
              : 'bg-gradient-to-tr from-sky-200/30 via-blue-100/20 to-emerald-100/30'
          }`}
        />

        {/* Primary 3D Glow Blob 1 - Top Left */}
        <motion.div
          animate={{
            opacity: [0.35, 0.5, 0.35],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] rounded-full pointer-events-none transition-colors duration-500 will-change-transform"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(59, 130, 246, 0.1) 45%, transparent 70%)'
              : 'radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(59, 130, 246, 0.08) 45%, transparent 70%)',
            y: blobY1,
          }}
        />

        {/* Secondary 3D Glow Blob 2 - Top Right */}
        <motion.div
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -top-[5%] right-[-15%] w-[50vw] h-[50vw] rounded-full pointer-events-none transition-colors duration-500 will-change-transform"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(236, 72, 153, 0.08) 45%, transparent 70%)'
              : 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, rgba(244, 114, 182, 0.06) 45%, transparent 70%)',
            y: blobY2,
          }}
        />

        {/* Tertiary 3D Glow Blob 3 - Bottom Center */}
        <motion.div
          animate={{
            opacity: [0.3, 0.45, 0.3],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute -bottom-[15%] left-[15%] w-[55vw] h-[55vw] rounded-full pointer-events-none transition-colors duration-500 will-change-transform"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(20, 184, 166, 0.08) 45%, transparent 70%)'
              : 'radial-gradient(circle, rgba(110, 231, 183, 0.15) 0%, rgba(153, 246, 228, 0.06) 45%, transparent 70%)',
            y: blobY3,
          }}
        />

        {/* Dynamic Center Spotlight */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[120vh] pointer-events-none transition-opacity duration-500"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.12) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 80%)'
              : 'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.18) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 80%)',
          }}
        />

        {/* Cinematic Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none mix-blend-overlay transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(0deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Data Stream Diagonal Lines - Animated */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ top: -300 }}
              animate={{ top: '100vh' }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 1.2,
              }}
              className={`absolute w-[2px] h-[300px] pointer-events-none ${
                i % 3 === 0
                  ? 'bg-gradient-to-b from-transparent via-blue-500 to-transparent'
                  : i % 3 === 1
                  ? 'bg-gradient-to-b from-transparent via-emerald-500 to-transparent'
                  : 'bg-gradient-to-b from-transparent via-purple-500 to-transparent'
              }`}
              style={{ left: `${15 + i * 15}%` }}
            />
          ))}
        </div>

        {/* Holographic Data Points */}
        <DataVisualization isDark={isDark} />
      </div>

      {/* FOREGROUND OVERLAY LAYER */}
      <div className="fixed inset-0 z-[45] pointer-events-none overflow-hidden">
        {/* Subtle Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Enhanced Particle Rain */}
        <EnhancedParticles isDark={isDark} />

        {/* Cursor Glow */}
        <CursorGlow isDark={isDark} />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.15)_95%)] dark:bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.55)_100%)] transition-all duration-500" />
      </div>
    </>
  )
}

function DataVisualization({ isDark }: { isDark: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating data cubes/dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: [0.2, 0.5, 0.2], y: 0 }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className={`absolute w-1 h-1 rounded-full ${
            isDark ? 'bg-cyan-400/60' : 'bg-blue-500/40'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Connecting lines between data points */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        style={{ pointerEvents: 'none' }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${10 + i * 20}%`}
            y1="10%"
            x2={`${15 + i * 18}%`}
            y2="90%"
            stroke={isDark ? '#06b6d4' : '#3b82f6'}
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </svg>
    </div>
  )
}

function EnhancedParticles({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      opacity: number
      vx: number
      vy: number
    }> = []

    // Create premium cinematic dust particles
    const particleCount = 60
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.3,
        speedY: -(Math.random() * 0.25 + 0.05),
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.6 + 0.1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        p.vx += (Math.random() - 0.5) * 0.02
        p.vy += (Math.random() - 0.5) * 0.02

        if (p.y < 0) {
          p.y = canvas.height
          p.x = Math.random() * canvas.width
          p.opacity = Math.random() * 0.6 + 0.1
        }

        if (p.x < 0 || p.x > canvas.width) {
          p.speedX = -p.speedX
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? `rgba(148, 163, 255, ${p.opacity * 0.8})`
          : `rgba(59, 130, 246, ${p.opacity * 0.6})`
        ctx.fill()

        // Glow effect
        ctx.strokeStyle = isDark
          ? `rgba(96, 165, 250, ${p.opacity * 0.4})`
          : `rgba(147, 197, 253, ${p.opacity * 0.3})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" />
  )
}

function CursorGlow({ isDark }: { isDark: boolean }) {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let mouseX = 0, mouseY = 0
    let currentX = 0, currentY = 0
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - 120
      mouseY = e.clientY - 120
    }

    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t

    const tick = () => {
      currentX = lerp(currentX, mouseX, 0.1)
      currentY = lerp(currentY, mouseY, 0.1)
      if (Math.abs(currentX - mouseX) > 0.1 || Math.abs(currentY - mouseY) > 0.1) {
         glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }
      rafId = requestAnimationFrame(tick)
    }
    
    tick()

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="absolute top-0 left-0 w-[240px] h-[240px] rounded-full pointer-events-none transition-colors duration-500 will-change-transform"
      style={{
        background: isDark
          ? 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
        transform: 'translate3d(-240px, -240px, 0)',
      }}
    />
  )
}
