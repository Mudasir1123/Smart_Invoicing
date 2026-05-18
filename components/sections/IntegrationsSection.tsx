'use client'

import { motion } from 'framer-motion'
import { CreditCard, Cloud, Building2, Globe, Smartphone, ShieldCheck, BarChart3, FileText } from 'lucide-react'

const integrations = [
  { icon: CreditCard,   label: 'Payment Systems',      desc: 'JazzCash, EasyPaisa, Bank Transfers',         color: '#1E9AD8' },
  { icon: Cloud,        label: 'Cloud Sync',            desc: 'GoDaddy International IP, Auto Backup',       color: '#00A266' },
  { icon: Building2,    label: 'Multi-Company',         desc: 'Manage unlimited companies in one login',     color: '#173B64' },
  { icon: Globe,        label: 'FBR Integration',       desc: 'Real-time FBR portal compliance sync',        color: '#1E9AD8' },
  { icon: FileText,     label: 'Excel / CSV',           desc: 'Bulk import/export for all modules',          color: '#00A266' },
  { icon: BarChart3,    label: 'Analytics',             desc: 'Revenue, tax, and inventory reports',         color: '#173B64' },
  { icon: Smartphone,   label: 'Mobile Access',         desc: 'Full access from any browser or device',     color: '#1E9AD8' },
  { icon: ShieldCheck,  label: 'Secure & Encrypted',   desc: 'Enterprise-grade data protection',            color: '#00A266' },
]

// Each card in the 4-col grid gets a different entry: column-by-column scale-rotate
const getVariant = (i: number) => {
  const col = i % 4
  const variations = [
    { opacity: 0, scale: 0.6, rotate: -12, y: 30 },
    { opacity: 0, y: 70, scale: 0.8 },
    { opacity: 0, scale: 0.6, rotate: 12, y: 30 },
    { opacity: 0, y: 70, scale: 0.8 },
  ]
  return variations[col]
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-28 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.06]" style={{ background: 'radial-gradient(ellipse, #173B64, #1E9AD8)' }} />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header — slides from right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4 border" style={{ color: '#173B64', borderColor: 'rgba(23,59,100,0.35)', background: 'rgba(23,59,100,0.08)' }}>
            Integrations & Capabilities
          </span>
          <h2 className="text-4xl font-black md:text-5xl text-foreground">
            Everything{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              Connected
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Seamlessly integrates with payment systems, FBR portal, cloud storage, and more.
          </p>
        </motion.div>

        {/* Grid — scale+rotate per column */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {integrations.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={getVariant(i)}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.65, delay: Math.floor(i / 4) * 0.12 + (i % 4) * 0.07, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.06 }}
                className="group relative rounded-[1.5rem] p-6 flex flex-col items-center text-center cursor-default overflow-hidden"
                style={{
                  border: `1.5px solid ${item.color}35`,
                  background: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.35s cubic-bezier(0.23,1,0.32,1)',
                }}
              >
                {/* Inset glow */}
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${item.color}22, 0 0 30px ${item.color}14` }} />
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-4 right-4 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full pointer-events-none" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
                <div className="inner-sweep" />

                <motion.div
                  whileHover={{ rotate: [0, -14, 14, -6, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}35` }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </motion.div>
                <p className="text-sm font-black text-foreground">{item.label}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 relative rounded-[1.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
          style={{ border: '1.5px solid rgba(30,154,216,0.3)', background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(20px)' }}
        >
          <div className="inner-sweep" />
          <div>
            <h3 className="text-xl font-black text-foreground">Need a custom integration?</h3>
            <p className="mt-2 text-muted-foreground text-sm">Our expert team builds tailored solutions for your specific workflow.</p>
          </div>
          <motion.a
            href="tel:+923242465217"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}
          >
            Talk to Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
