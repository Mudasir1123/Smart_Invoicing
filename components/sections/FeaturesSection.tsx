'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FileText, BarChart3, Package, Factory, Cloud, HeadphonesIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const features = [
  { icon: FileText,       title: 'Fast & Accurate Invoicing',     description: 'Generate FBR-compliant digital invoices instantly. Complete scenario testing ensures zero errors every time.', color: '#1E9AD8' },
  { icon: BarChart3,      title: 'Complete Accounts Management',  description: 'Full-cycle accounting from journal entries to financial statements. Real-time ledger with P&L reporting.',      color: '#00A266' },
  { icon: Package,        title: 'Inventory & Stock Control',     description: 'Live inventory tracking, purchase orders, and stock alerts. Excel bulk import for thousands of SKUs.',          color: '#173B64' },
  { icon: Factory,        title: 'Manufacturing Workflow',        description: 'Bill of materials, production planning, and work-in-progress tracking for manufacturing businesses.',           color: '#1E9AD8' },
  { icon: Cloud,          title: 'Secure Cloud System',           description: 'International IP hosting via GoDaddy. Access from anywhere — no installation required. 99.9% uptime SLA.',   color: '#00A266' },
  { icon: HeadphonesIcon, title: 'Training & Dedicated Support',  description: 'Complete onboarding, training sessions, and priority support from our 25+ year expert team.',                 color: '#173B64' },
]

// Alternate animation directions per card for visual variety
const SCROLL_VARIANTS = ['flip', 'slide-left', 'slide-right', 'scale', 'flip', 'scale'] as const
type Dir = typeof SCROLL_VARIANTS[number]

function FeatureCard({ feature, index }: { feature: typeof features[number]; index: number }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'
  const Icon = feature.icon
  const dir = SCROLL_VARIANTS[index]

  const initial: Record<Dir, object> = {
    'flip':        { opacity: 0, rotateX: 60, y: 120, scale: 0.85 },
    'slide-left':  { opacity: 0, x: -100, y: 80 },
    'slide-right': { opacity: 0, x: 100, y: 80 },
    'scale':       { opacity: 0, scale: 0.8, y: 100 },
  }

  return (
    <motion.div
      initial={initial[dir]}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, delay: (index % 3) * 0.15 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group relative cursor-default overflow-hidden rounded-[1.5rem]"
      style={{
        border: mounted && isDark ? `1.5px solid ${feature.color}44` : `1.5px solid ${feature.color}35`,
        background: mounted && isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(10px)',
        boxShadow: mounted && isDark ? 'inset 0 1px 1px rgba(255, 255, 255, 0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* Gradient glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.5rem]"
        style={{ boxShadow: `inset 0 0 60px ${feature.color}22, 0 0 40px ${feature.color}18` }}
      />
      {/* Top-right colored corner */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-8 group-hover:opacity-15 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: feature.color }}
      />
      {/* Animated bottom border */}
      <div
        className="absolute bottom-0 left-6 right-6 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full pointer-events-none"
        style={{ background: feature.color }}
      />

      <div className={`p-8 feat-card-${index}`}>
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: `${feature.color}18`, border: `1.5px solid ${feature.color}35` }}
        >
          <Icon className="h-7 w-7" style={{ color: feature.color }} />
        </motion.div>

        {/* Hover indicator dot */}
        <div
          className="absolute top-5 right-5 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: feature.color }}
        />

        <h3 className="text-2xl font-black text-foreground">{feature.title}</h3>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed font-medium">{feature.description}</p>

        <div
          className="mt-6 h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500 pointer-events-none"
          style={{ background: feature.color }}
        />
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.35], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section id="features" ref={containerRef} className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[150px] opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, #1E9AD8 0%, #00A266 100%)' }}
      />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Header — slides up with scrub */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-28"
        >
          <span
            className="inline-block rounded-full px-6 py-2 text-sm font-bold uppercase tracking-widest mb-6 border"
            style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}
          >
            Smart Features
          </span>
          <h2 className="text-5xl font-black md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tighter">
            EVERYTHING YOUR BUSINESS{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              NEEDS.
            </span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Powerful features designed for Pakistani businesses — from SMEs to large manufacturing enterprises.
          </p>
        </motion.div>

        {/* Features Grid — each card with a different scroll direction */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  )
}
