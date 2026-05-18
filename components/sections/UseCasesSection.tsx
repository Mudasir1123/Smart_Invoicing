'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingBag, Factory, Boxes, ArrowRight } from 'lucide-react'

const cases = [
  {
    icon: ShoppingBag,
    title: 'Retail Businesses',
    subtitle: 'Shops · Stores · Boutiques',
    color: '#1E9AD8',
    points: [
      'Fast invoice generation at point of sale',
      'Real-time inventory across multiple outlets',
      'Daily sales reports & profit tracking',
      'FBR-compliant receipts automatically',
      'Excel import for product catalogue',
    ],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    subtitle: 'Factories · Plants · Assembly',
    color: '#00A266',
    highlight: true,
    points: [
      'Bill of Materials (BOM) management',
      'Work-in-progress (WIP) tracking',
      'Raw material to finished goods flow',
      'Production cost & yield analysis',
      'Supplier invoicing & purchase orders',
    ],
  },
  {
    icon: Boxes,
    title: 'Wholesale & Distribution',
    subtitle: 'Distributors · Traders · Importers',
    color: '#173B64',
    points: [
      'Bulk invoice generation with Excel',
      'Multi-party account management',
      'Credit limit & aging reports',
      'Multi-company under one dashboard',
      'Volume discount & pricing tiers',
    ],
  },
]

// Each card: different 3D entry
const ENTRIES = [
  { opacity: 0, x: -150, y: 120, rotateY: -40, scale: 0.8 },
  { opacity: 0, y: 160,  scale: 0.7, rotate: -5 },
  { opacity: 0, x: 150,  y: 120, rotateY: 40, scale: 0.8 },
]

export function UseCasesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const headerY = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <section id="use-cases" ref={containerRef} className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: 'radial-gradient(ellipse, #1E9AD8, #00A266)' }} />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Header — perspective flip with scroll scrub */}
        <motion.div
          style={{ y: headerY }}
          className="text-center mb-28"
        >
          <span className="inline-block rounded-full px-6 py-2 text-sm font-bold uppercase tracking-widest mb-6 border" style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}>
            Who It&apos;s For
          </span>
          <h2 className="text-5xl font-black md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tighter">
            BUILT FOR EVERY{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              INDUSTRY.
            </span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            From corner shops to large factories — Smart Invoicing adapts to your business model.
          </p>
        </motion.div>

        {/* Cards — 3D swoop from different sides */}
        <div className="grid gap-8 md:grid-cols-3" style={{ perspective: '1200px' }}>
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={i}
                initial={ENTRIES[i]}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1, rotate: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative rounded-[1.5rem] p-8 flex flex-col cursor-default overflow-hidden glass-card"
                style={{
                  border: `1.5px solid ${c.color}${c.highlight ? '55' : '35'}`,
                  boxShadow: c.highlight ? `0 0 40px ${c.color}15` : 'none',
                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 60px ${c.color}22, 0 0 40px ${c.color}18` }} />
                {/* Top accent blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" style={{ background: c.color }} />
                <div className="inner-sweep" />

                {c.highlight && (
                  <div className="absolute top-4 right-4 rounded-full px-2.5 py-0.5 text-[10px] font-black" style={{ background: `${c.color}25`, color: c.color }}>
                    Most Popular
                  </div>
                )}

                {/* Icon — animated shake on hover */}
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, -8, 8, 0] }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: `${c.color}15`, border: `1.5px solid ${c.color}35` }}
                >
                  <Icon size={26} style={{ color: c.color }} />
                </motion.div>

                <h3 className="text-xl font-black text-foreground">{c.title}</h3>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-1 mb-6">{c.subtitle}</p>

                <ul className="space-y-3 flex-1">
                  {c.points.map((pt, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: i * 0.1 + pi * 0.07 }}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                      {pt}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-2 text-sm font-black group-hover:gap-4 transition-all duration-300" style={{ color: c.color }}>
                  Learn More <ArrowRight size={14} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
