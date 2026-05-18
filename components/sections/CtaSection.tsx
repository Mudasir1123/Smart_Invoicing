'use client'

import { motion } from 'framer-motion'
import { AnimatedButton } from '../AnimatedButton'
import { Phone, MessageCircle, Zap } from 'lucide-react'

export function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden py-32 px-6 lg:px-16">
      {/* Animated Wave BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, #1E9AD8 0%, #00A266 50%, #173B64 100%)',
          }}
        />
        {/* Floating orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[100px]"
          style={{ background: '#1E9AD8' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px]"
          style={{ background: '#00A266' }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 border"
            style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}
          >
            Get Started Today
          </span>

          <h2 className="text-4xl font-black md:text-5xl lg:text-6xl text-foreground leading-tight">
            Start Smart.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}
            >
              Invoice Smart.
            </span>{' '}
            Grow Smart.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join 1,000+ businesses transforming their operations with Smart Invoicing.
            Free setup. No contracts. Cancel anytime.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row justify-center"
          >
            {/* Pulsing primary button */}
            <motion.div
              animate={{ boxShadow: ['0 0 0 0 rgba(30,154,216,0.5)', '0 0 0 20px rgba(30,154,216,0)', '0 0 0 0 rgba(30,154,216,0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="rounded-xl"
            >
              <AnimatedButton
                variant="primary"
                size="lg"
                onClick={() => window.open('https://wa.me/923242465217?text=Hi%20Smart%20Invoicing,%20I%20want%20a%20free%20demo!', '_blank')}
              >
                <span className="flex items-center gap-2">
                  <Zap size={18} />
                  Get Free Demo
                </span>
              </AnimatedButton>
            </motion.div>

            <AnimatedButton
              variant="secondary"
              size="lg"
              onClick={() => window.open('tel:+923242465217')}
            >
              <span className="flex items-center gap-2">
                <Phone size={18} />
                Contact Now
              </span>
            </AnimatedButton>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              { label: 'Muhammed Asif', phone: '+92 324 2465217' },
              { label: 'Muhammed Raza', phone: '+92 331 9287869' },
            ].map((contact, i) => (
              <motion.a
                key={i}
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.05, y: -3 }}
                className="glass-card flex items-center gap-3 px-5 py-3 cursor-pointer"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(30,154,216,0.15)' }}
                >
                  <Phone size={14} style={{ color: '#1E9AD8' }} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{contact.label}</p>
                  <p className="text-sm font-bold text-foreground">{contact.phone}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            ✓ Free registration & setup &nbsp;·&nbsp; ✓ No hidden fees &nbsp;·&nbsp; ✓ Starts from PKR 1,250/month
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
