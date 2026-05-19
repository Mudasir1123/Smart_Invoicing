'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

// Each index gets a unique glow color cycling through brand palette
const GLOW_COLORS = [
  { glow: '#1E9AD8', border: 'rgba(30,154,216,0.55)', gradient: 'linear-gradient(135deg,#1E9AD8,#173B64)' },
  { glow: '#00A266', border: 'rgba(0,162,102,0.55)',  gradient: 'linear-gradient(135deg,#00A266,#1E9AD8)' },
  { glow: '#173B64', border: 'rgba(23,59,100,0.7)',   gradient: 'linear-gradient(135deg,#173B64,#1E9AD8)' },
  { glow: '#1E9AD8', border: 'rgba(30,154,216,0.55)', gradient: 'linear-gradient(135deg,#00A266,#173B64)' },
  { glow: '#00A266', border: 'rgba(0,162,102,0.55)',  gradient: 'linear-gradient(135deg,#1E9AD8,#00A266)' },
  { glow: '#173B64', border: 'rgba(23,59,100,0.7)',   gradient: 'linear-gradient(135deg,#1E9AD8,#173B64)' },
]

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'bottom' | 'top' | 'rotate-left' | 'rotate-right' | 'scale' | 'flip'
  index?: number
  neonBorder?: boolean
  glowColor?: string
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  direction = 'bottom',
  index = 0,
  neonBorder = false,
  glowColor,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const palette = GLOW_COLORS[index % GLOW_COLORS.length]
  const effectiveGlow = glowColor ?? palette.glow

  // 3D tilt via motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const rectRef = useRef<DOMRect | null>(null)

  const handleMouseEnter = () => {
    rectRef.current = cardRef.current?.getBoundingClientRect() ?? null
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    let rect = rectRef.current
    if (!rect) {
      rect = cardRef.current?.getBoundingClientRect() ?? null
      rectRef.current = rect
    }
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  
  const handleMouseLeave = () => {
    rectRef.current = null
    mouseX.set(0)
    mouseY.set(0)
  }

  // Direction-based entrance variants
  const initialMap: Record<string, object> = {
    left:         { x: -120, y: 60,   opacity: 0, rotate: 0,   scale: 0.9  },
    right:        { x:  120, y: 60,   opacity: 0, rotate: 0,   scale: 0.9  },
    bottom:       { x:   0,  y: 120,  opacity: 0, rotate: 0,   scale: 0.9  },
    top:          { x:   0,  y:-120,  opacity: 0, rotate: 0,   scale: 0.9  },
    'rotate-left':  { x: -80, y: 80,  opacity: 0, rotate: -15, scale: 0.85 },
    'rotate-right': { x:  80, y: 80,  opacity: 0, rotate:  15, scale: 0.85 },
    scale:        { x:   0,  y:  80,  opacity: 0, rotate: 0,   scale: 0.7  },
    flip:         { x:   0,  y: 80,   opacity: 0, rotateX: 80, scale: 0.85 },
  }

  // Split layout/sizing classes for the outer wrapper, and keep styling/padding on the inner card
  const classes = className.split(' ')
  const outerClasses = classes.filter(c => c.startsWith('col-') || c.startsWith('md:col-') || c.startsWith('lg:col-') || c.includes('grid') || c.includes('flex-1') || c.startsWith('h-') || c.startsWith('w-')).join(' ')
  const innerClasses = classes.filter(c => !c.startsWith('col-') && !c.startsWith('md:col-') && !c.startsWith('lg:col-') && !c.includes('grid') && !c.includes('flex-1')).join(' ')

  return (
    <motion.div
      ref={cardRef}
      initial={initialMap[direction] ?? initialMap.bottom}
      whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0, rotateX: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 20,
        mass: 1.2,
        delay: delay + index * 0.15,
      }}
      viewport={{ once: false, margin: '-60px' }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
      className={`relative group cursor-pointer ${neonBorder ? 'neon-border' : ''} ${outerClasses}`}
    >
      {/* Gradient border wrapper */}
      <div
        className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: palette.glow,
          padding: '1.5px',
          borderRadius: '1.5rem',
          zIndex: -1,
        }}
      />

      {/* Glass card body */}
      <div
        className={`relative glass-card overflow-hidden w-full h-full ${innerClasses}`}
        style={{
          border: `1.5px solid ${palette.border}`,
          borderRadius: '1.5rem',
        }}
      >
        {/* Inner light sweep on hover */}
        <div className="inner-sweep" />

        {/* Colored glow inset on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `inset 0 0 50px ${effectiveGlow}30, 0 0 40px ${effectiveGlow}20` }}
        />

        {/* Top-left corner accent */}
        <div
          className="absolute top-0 left-0 w-20 h-20 rounded-br-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ background: palette.glow }}
        />

        {/* Bottom-right corner accent */}
        <div
          className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
          style={{ background: palette.glow }}
        />

        {/* Hover glow border bottom line */}
        <div
          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          style={{ background: palette.glow }}
        />

        {children}
      </div>
    </motion.div>
  )
}
