'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

export default function TaxCompliance() {
  

  return (
    <PageTransition>
      <main className="w-full overflow-x-hidden pt-20 bg-transparent text-foreground">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-24 pb-12 px-6 lg:px-16 text-center">
          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest border"
              style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}
            >
              FBR Tax Compliance
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              TAX{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                COMPLIANCE.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              Ensure your business stays completely compliant with FBR tax regulations, filings, and audit trails.
            </p>
          </div>
        </section>

        {/* Compliance Services */}
        <section className="pb-20 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black text-foreground"
            >
              Tax Compliance Services
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                'Automatic tax calculation based on regulations',
                'Filing deadline alerts and reminders',
                'Complete compliance documentation',
                'Expert tax advisory services',
                'Corporate tax registration and filing',
                'Withholding tax management',
                'Sales tax/GST compliance',
                'Tax optimization strategies',
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border"
                  style={{ background: 'rgba(30,154,216,0.03)', borderColor: 'rgba(30,154,216,0.1)' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,162,102,0.1)', border: '1px solid rgba(0,162,102,0.2)' }}>
                    <Check className="h-5 w-5 text-[#00A266]" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section className="py-24 px-6 lg:px-16 border-t border-black/5 dark:border-white/5">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black text-foreground"
            >
              What We Cover
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                { icon: '📋', title: 'VAT/GST Compliance', desc: 'Complete VAT return filing and management' },
                { icon: '💼', title: 'Corporate Tax', desc: 'CT return preparation and filing' },
                { icon: '🏢', title: 'Withholding Tax', desc: 'WTax calculation and reporting' },
                { icon: '🎯', title: 'Tax Planning', desc: 'Strategic tax optimization for your business' },
              ].map((item, i) => (
                <AnimatedCard
                  key={i}
                  index={i}
                  direction="bottom"
                  neonBorder={true}
                  className="p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="mb-2 text-2xl font-black text-foreground">{item.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-32 px-6 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl bg-gradient-to-r from-[#1E9AD8] to-[#00A266] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-20 bg-white" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 bg-white" />
              <div className="inner-sweep" />

              <h2 className="mb-4 text-3xl md:text-5xl font-black leading-tight">Ensure Tax Compliance Today</h2>
              <p className="mb-8 text-lg font-semibold opacity-90">Let our seasoned corporate specialists handle all your tax workflows.</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923242465217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-primary shadow-lg hover:bg-gray-50 transition-all duration-300"
              >
                Contact Our Experts
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
