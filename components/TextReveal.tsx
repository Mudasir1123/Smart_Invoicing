'use client'

import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  as: Component = 'p',
}: TextRevealProps) {
  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className={className}
    >
      {Component === 'span' ? (
        <motion.span className="inline">
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants}>
              {word}
              {index < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
        </motion.span>
      ) : (
        <Component>
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline">
              {word}
              {index < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
        </Component>
      )}
    </motion.div>
  )
}
