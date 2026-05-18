'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface EnhancedTextAnimationProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
  delay?: number
  variant?: 'slide' | 'fade' | 'blur' | 'wave'
}

export function EnhancedTextAnimation({
  text,
  as: Component = 'p',
  className = '',
  delay = 0,
  variant = 'slide',
}: EnhancedTextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const words = text.split(' ')
    container.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
      .join('<span class="inline-block w-2"></span>')

    const spans = container.querySelectorAll('span > span')

    if (variant === 'wave') {
      gsap.from(spans, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    } else if (variant === 'slide') {
      gsap.from(spans, {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    } else if (variant === 'blur') {
      gsap.from(spans, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.8,
        stagger: 0.04,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    } else {
      gsap.from(spans, {
        opacity: 0,
        duration: 0.6,
        stagger: 0.04,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [text, variant, delay])

  return (
    <Component ref={containerRef} className={className} />
  )
}

// Alternative: Word-based animation
interface AnimatedWordProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
}

export function AnimatedWord({ children, as: Component = 'p', className = '' }: AnimatedWordProps) {
  const words = children.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (custom = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * custom },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      as={Component}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
