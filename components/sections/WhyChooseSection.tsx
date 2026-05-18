'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Smile, Cpu, HeadphonesIcon } from 'lucide-react'

const reasons = [
  { icon: Briefcase,       title: 'Designed for Growing Businesses', description: "Whether you're a small retailer or a large manufacturer, Smart Invoicing scales with your business — from 10 invoices/month to thousands.", color: '#1E9AD8', step: '01' },
  { icon: Smile,           title: 'Remarkably Easy to Use',          description: 'No technical knowledge needed. Our cloud platform is accessible from any browser with zero installation. Your team is live in hours.', color: '#00A266', step: '02' },
  { icon: Cpu,             title: 'Eliminates Manual Work',          description: 'Automate invoice generation, stock updates, and account entries. Excel bulk import handles thousands of records in minutes.',          color: '#173B64', step: '03' },
  { icon: HeadphonesIcon,  title: 'Dedicated Expert Support',        description: 'Backed by 25+ years of industry expertise. Hands-on onboarding, training, and ongoing business-hours support.',                       color: '#1E9AD8', step: '04' },
]

const stats = [
  { number: '1000+', label: 'Active Clients',   color: '#1E9AD8' },
  { number: '25+',   label: 'Years Experience', color: '#00A266' },
  { number: '100%',  label: 'FBR Compliant',    color: '#173B64' },
]

// Unique entry animations per reason card
const ENTRY_VARIANTS = [
  { initial: { opacity: 0, x: -150, y: 100, rotateY: -30, scale: 0.9 }, },
  { initial: { opacity: 0, y: 150,  scale: 0.75 }, },
  { initial: { opacity: 0, x:  150, y: 100, rotateY:  30, scale: 0.9 }, },
  { initial: { opacity: 0, y: 150,  rotate: 10, scale: 0.8 }, },
]

export function WhyChooseSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const headerY = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <section id="why-choose" ref={containerRef} className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.07]" style={{ background: 'radial-gradient(ellipse, #173B64 0%, #1E9AD8 100%)' }} />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Header — scale bounce in */}
        <motion.div
          style={{ y: headerY }}
          className="text-center mb-28"
        >
          <span className="inline-block rounded-full px-6 py-2 text-sm font-bold uppercase tracking-widest mb-6 border" style={{ color: '#173B64', borderColor: 'rgba(23,59,100,0.4)', background: 'rgba(23,59,100,0.1)' }}>
            Why Choose Us
          </span>
          <h2 className="text-5xl font-black md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tighter">
            BUILT FOR{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              PAKISTAN.
            </span>
          </h2>
        </motion.div>

        {/* Reasons — each with a different scroll entry */}
        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            const entry = ENTRY_VARIANTS[i]
            return (
              <motion.div
                key={i}
                initial={entry.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateY: 0 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 60, damping: 20, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative overflow-hidden rounded-[1.5rem] p-8 flex gap-6 cursor-default glass-card"
                style={{
                  border: `1.5px solid ${reason.color}35`,

                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 50px ${reason.color}20, 0 0 35px ${reason.color}15` }} />
                {/* Corner accent */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ background: reason.color }} />
                {/* Step number */}
                <div className="absolute top-3 right-5 text-6xl font-black opacity-[0.04] select-none" style={{ color: reason.color }}>{reason.step}</div>
                {/* Inner sweep */}
                <div className="inner-sweep" />

                <div className="flex-shrink-0 h-14 w-14 rounded-2xl flex items-center justify-center" style={{ background: `${reason.color}18`, border: `1.5px solid ${reason.color}35` }}>
                  <Icon size={26} style={{ color: reason.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats — bounce in staggered */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 120, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 + i * 0.15 }}
              whileHover={{ scale: 1.06, y: -5 }}
              className="group relative rounded-[1.5rem] text-center p-10 flex flex-col items-center justify-center cursor-default overflow-hidden glass-card"
              style={{ border: `1.5px solid ${stat.color}35` }}
            >
              <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 50px ${stat.color}22, 0 0 30px ${stat.color}18` }} />
              <p className="text-5xl font-black bg-clip-text text-transparent relative z-10" style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}, #1E9AD8)` }}>
                {stat.number}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
