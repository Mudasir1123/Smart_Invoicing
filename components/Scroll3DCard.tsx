'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface Scroll3DCardProps {
  children: ReactNode
  index: number
  className?: string
  neonBorder?: boolean
  direction?: 'left' | 'right'
}

export function Scroll3DCard({
  children,
  index,
  className = '',
  neonBorder = false,
  direction = 'left',
}: Scroll3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // 3D perspective rotation based on scroll
  const rotateX = useTransform(
    scrollY,
    [index * 200, index * 200 + 600],
    [20, -20]
  )
  const rotateY = useTransform(
    scrollY,
    [index * 200, index * 200 + 600],
    [direction === 'left' ? 15 : -15, direction === 'left' ? -15 : 15]
  )
  const translateY = useTransform(
    scrollY,
    [index * 200, index * 200 + 400],
    [60, 0]
  )

  // Spring animation for smooth transitions
  const rotateXSpring = useSpring(rotateX, {
    stiffness: 100,
    damping: 20,
  })
  const rotateYSpring = useSpring(rotateY, {
    stiffness: 100,
    damping: 20,
  })
  const translateYSpring = useSpring(translateY, {
    stiffness: 100,
    damping: 20,
  })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    ScrollTrigger.create({
      trigger: card,
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        y: translateYSpring,
        perspective: '1200px',
      }}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-500 will-change-transform ${
        neonBorder
          ? 'border-2 border-transparent bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]'
          : 'bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl'
      } ${className}`}
      whileHover={{
        y: -10,
        boxShadow:
          neonBorder
            ? '0 0 40px rgba(6, 182, 212, 0.6)'
            : '0 20px 40px rgba(0, 0, 0, 0.3)',
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Background gradient animation on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 transition-opacity duration-500"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
            'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Neon border glow on hover */}
      {neonBorder && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 20px rgba(6, 182, 212, 0.3)`,
          }}
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute -inset-1/2 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent blur-2xl group-hover:block"
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  )
}
