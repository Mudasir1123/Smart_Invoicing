'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { AnimatedButton } from '../AnimatedButton'
import { TrendingUp, FileText, Users, Zap, CheckCircle, BarChart2 } from 'lucide-react'

function useCounter(target: number, duration = 2200, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return count
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const count = useCounter(target, 2200, started)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { label: 'Active Businesses', target: 1000, suffix: '+' },
  { label: 'Invoices Processed', target: 50000, suffix: '+' },
  { label: 'Years Experience', target: 25, suffix: '+' },
  { label: 'FBR Compliant', target: 100, suffix: '%' },
]

const pills = [
  { icon: CheckCircle, text: 'FBR Compliant' },
  { icon: Zap, text: 'Instant Setup' },
  { icon: BarChart2, text: 'Real-time Analytics' },
  { icon: Users, text: 'Multi-Company' },
  { icon: FileText, text: 'Excel Import' },
]

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Scrubbed parallax for the hero text
  const textY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 flex items-center justify-center">
      {/* Deep overlay to make white text pop more */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none z-[1]" />

      <motion.div 
        style={{ y: textY, opacity, scale, willChange: 'transform, opacity' }}
        className="relative z-10 mx-auto flex w-full flex-col items-center justify-center px-6 lg:px-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 inline-flex items-center gap-3 rounded-full px-6 py-2.5 text-base font-bold border backdrop-blur-md"
          style={{ background: 'rgba(30,154,216,0.15)', borderColor: 'rgba(30,154,216,0.4)', color: '#1E9AD8' }}
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#00A266', boxShadow: '0 0 10px #00A266' }} />
          Pakistan&apos;s #1 FBR-Compliant Digital Invoicing
        </motion.div>

        {/* MASSIVE Headline — Igloo Style */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center font-black leading-[0.9] tracking-tighter w-full max-w-[1400px]"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }} // Responsive massive text
        >
          <span className="text-foreground">TRANSFORM YOUR </span>
          <br className="hidden md:block" />
          <motion.span
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block bg-clip-text text-transparent pb-4"
            style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8 0%, #00A266 50%, #173B64 100%)', backgroundSize: '200% 200%' }}
          >
            INVOICING.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-8 max-w-3xl text-center text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium"
        >
          Seamless operations for accounting, inventory, and manufacturing. Fully cloud-based, FBR-integrated, backed by 25+ years of expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mt-14 flex flex-col gap-5 sm:flex-row"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 0 0 rgba(30,154,216,0.6)', '0 0 0 25px rgba(30,154,216,0)', '0 0 0 0 rgba(30,154,216,0)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="rounded-xl"
          >
            <AnimatedButton variant="primary" size="lg" className="text-lg px-10 py-5">
              <Zap size={20} className="mr-3 inline" />
              Get Free Demo
            </AnimatedButton>
          </motion.div>
          <AnimatedButton variant="secondary" size="lg" className="text-lg px-10 py-5" onClick={() => window.open('tel:+923242465217')}>
            Contact Now
          </AnimatedButton>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-4 max-w-5xl"
        >
          {pills.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.08, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.07, y: -4 }}
              className="flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-bold border cursor-default backdrop-blur-md"
              style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(30,154,216,0.35)', color: 'var(--foreground)' }}
            >
              <Icon size={16} style={{ color: '#00A266' }} />
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* Animated stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="mt-28 grid w-full grid-cols-2 gap-6 md:grid-cols-4 max-w-6xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1, type: 'spring', stiffness: 100, damping: 15 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass-card text-center px-6 py-8 cursor-default"
              style={{
                border: `1.5px solid ${['rgba(30,154,216,0.4)', 'rgba(0,162,102,0.4)', 'rgba(23,59,100,0.4)', 'rgba(30,154,216,0.4)'][i]}`,
              }}
            >
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-black bg-clip-text text-transparent mb-2 whitespace-nowrap"
                style={{ backgroundImage: `linear-gradient(135deg, ${['#1E9AD8, #00A266', '#00A266, #1E9AD8', '#173B64, #1E9AD8', '#1E9AD8, #00A266'][i]})` }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
