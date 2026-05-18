'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variant?: 'slide' | 'fade' | 'scale' | 'blur'
}

export function AnimatedSection({
  children,
  className = '',
  variant = 'fade',
}: AnimatedSectionProps) {
  const variants = {
    slide: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  )
}
