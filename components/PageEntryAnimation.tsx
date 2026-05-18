'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageEntryAnimationProps {
  children: ReactNode
  delay?: number
}

export function PageEntryAnimation({ children, delay = 0 }: PageEntryAnimationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: 'blur(10px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  )
}

// 3D Stagger animation for list items
export function Stagger3D({ children }: { children: ReactNode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: '1000px' }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger3DItem({ children }: { children: ReactNode }) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  )
}
