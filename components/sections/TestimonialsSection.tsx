'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Raza Khan',
    role: 'Owner, Al-Fatah General Store',
    location: 'Lahore',
    rating: 5,
    text: 'Smart Invoicing transformed our FBR compliance. What took hours of manual work now happens in minutes. Cloud access means I can check invoices from anywhere.',
    avatar: 'AK',
    color: '#1E9AD8',
  },
  {
    name: 'Fatima Malik',
    role: 'CFO, Pak Textile Industries',
    location: 'Faisalabad',
    rating: 5,
    text: 'The inventory and accounts module together is incredibly powerful. We manage 3 company branches from a single dashboard. The support team is always available and knowledgeable.',
    avatar: 'FM',
    color: '#00A266',
  },
  {
    name: 'Usman Tariq',
    role: 'Director, City Wholesale Traders',
    location: 'Karachi',
    rating: 5,
    text: 'Migrating from our old system was seamless. The Excel bulk import handled 2,000+ products in one go. FBR integration works flawlessly and we have had zero compliance issues since switching.',
    avatar: 'UT',
    color: '#173B64',
  },
  {
    name: 'Sara Ahmed',
    role: 'CEO, Sunrise Manufacturing',
    location: 'Sialkot',
    rating: 5,
    text: 'The full suite with manufacturing workflow is exactly what we needed. Bill of materials, production tracking, and invoicing all in one place. Cut our admin time by 60%.',
    avatar: 'SA',
    color: '#1E9AD8',
  },
  {
    name: 'Bilal Hussain',
    role: 'Accountant, Metro Pharma',
    location: 'Rawalpindi',
    rating: 5,
    text: '25 years of expertise shows in every feature. Their team understood our needs immediately. The free setup and onboarding was professional and thorough. Highly recommended.',
    avatar: 'BH',
    color: '#00A266',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill={i < rating ? '#FFB800' : 'transparent'} stroke={i < rating ? '#FFB800' : 'rgba(255,255,255,0.2)'} />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="relative py-28 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-[0.07]" style={{ background: 'radial-gradient(ellipse, #00A266 0%, #1E9AD8 100%)' }} />

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4 border" style={{ color: '#00A266', borderColor: 'rgba(0,162,102,0.3)', background: 'rgba(0,162,102,0.08)' }}>
            Customer Stories
          </span>
          <h2 className="text-4xl font-black md:text-5xl text-foreground">
            Trusted by{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              1,000+ Businesses
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Real results from real Pakistani businesses.</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                borderColor: testimonials[active].color,
                boxShadow: `0 0 45px ${testimonials[active].color}30, 0 20px 60px rgba(0,0,0,0.35)`
              }}
              className="glass-card p-8 md:p-12 relative overflow-hidden min-h-[350px] md:min-h-[290px] flex flex-col justify-center transition-all duration-300 group"
              style={{ border: '1.5px solid rgba(255,255,255,0.06)' }}
            >
              {/* Dynamic hover background color layer */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.18] transition-opacity duration-500 pointer-events-none z-0"
                style={{
                  backgroundColor: testimonials[active].color,
                }}
              />
              <div className="inner-sweep" />
              <Quote size={80} className="absolute -top-2 -right-2 opacity-[0.04] z-0" style={{ color: testimonials[active].color }} />
              <div className="relative z-10">
                <Stars rating={testimonials[active].rating} />
                <p className="mt-6 text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0" style={{ background: `linear-gradient(135deg, ${testimonials[active].color}, #173B64)` }}>
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonials[active].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[active].role} · {testimonials[active].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 -left-5 -right-5 flex justify-between pointer-events-none">
            {([{ fn: () => setActive(p => (p - 1 + testimonials.length) % testimonials.length), Icon: ChevronLeft }, { fn: () => setActive(p => (p + 1) % testimonials.length), Icon: ChevronRight }] as const).map(({ fn, Icon }, i) => (
              <motion.button key={i} onClick={fn} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center glass-card" style={{ border: '1px solid rgba(30,154,216,0.25)' }}>
                <Icon size={18} style={{ color: '#1E9AD8' }} />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300" style={{ width: i === active ? '24px' : '8px', height: '8px', background: i === active ? '#1E9AD8' : 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{
                y: -4,
                borderColor: t.color,
                boxShadow: `0 0 20px ${t.color}30, 0 8px 24px rgba(0,0,0,0.2)`
              }}
              className="glass-card p-3 text-center transition-all duration-300 relative group overflow-hidden"
              style={{
                border: `1px solid ${i === active ? t.color + '66' : 'rgba(255,255,255,0.06)'}`,
                opacity: i === active ? 1 : 0.6
              }}
            >
              {/* Dynamic hover and active background color layer */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 ${
                  i === active ? 'opacity-[0.16]' : 'opacity-0 group-hover:opacity-[0.24]'
                }`}
                style={{
                  backgroundColor: t.color
                }}
              />
              <div className="w-8 h-8 rounded-full mx-auto flex items-center justify-center text-white text-xs font-black mb-1 relative z-10" style={{ background: `linear-gradient(135deg, ${t.color}, #173B64)` }}>
                {t.avatar}
              </div>
              <p className="text-[10px] text-muted-foreground truncate relative z-10">{t.name.split(' ')[0]}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
