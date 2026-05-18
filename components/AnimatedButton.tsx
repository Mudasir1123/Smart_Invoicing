'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  glow?: boolean
}

export function AnimatedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  glow = true,
}: AnimatedButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)

  // ── Magnetic effect via motion values ─────────────────────────
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18 })
  const springY = useSpring(y, { stiffness: 200, damping: 18 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    const rect = btnRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    x.set((e.clientX - cx) * 0.35)
    y.set((e.clientY - cy) * 0.35)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  // ── Ripple effect ─────────────────────────────────────────────
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    const btn  = btnRef.current
    if (!btn) return
    const rect   = btn.getBoundingClientRect()
    const ripple = document.createElement('span')
    const size   = Math.max(rect.width, rect.height)
    ripple.className = 'ripple'
    ripple.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top:  ${e.clientY - rect.top  - size / 2}px;
    `
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 700)
    onClick?.()
  }

  const baseStyles = 'relative font-semibold rounded-2xl transition-all duration-300 ripple-container inline-flex items-center justify-center gap-2 select-none'

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#1e9ad8] via-[#22d3ee] to-[#10b981]
      text-white border border-transparent
      bg-[length:200%_200%] bg-left
      hover:bg-right hover:shadow-[0_0_30px_rgba(30,154,216,0.6)]
      ${glow ? 'btn-glow' : ''}
    `,
    secondary: `
      bg-transparent border border-[rgba(30,154,216,0.4)] text-[#1e9ad8]
      hover:border-[#22d3ee] hover:text-[#22d3ee]
      hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]
      backdrop-blur-sm
    `,
    ghost: `
      bg-transparent text-gray-600 dark:text-gray-300
      hover:text-[#1e9ad8] hover:bg-[rgba(30,154,216,0.06)]
    `,
  }

  const sizeStyles = {
    sm: 'px-5  py-2   text-sm',
    md: 'px-7  py-3   text-base',
    lg: 'px-10 py-4   text-lg',
  }

  return (
    <motion.button
      ref={btnRef}
      onClick={handleClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={!disabled ? { scale: 0.94 } : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? 'opacity-40 cursor-not-allowed' : ''
      } ${className}`}
      data-cursor-hover
    >
      {children}
    </motion.button>
  )
}
