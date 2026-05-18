'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

export default function FBRIntegration() {
  

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
              Direct FBR API
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              FBR{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                INTEGRATION.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              Seamless API integration with Federal Board of Revenue systems, enabling automatic invoice compliance.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="pb-20 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black text-foreground"
            >
              Complete FBR Compliance
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                'Automated FBR submission and filing',
                'Real-time compliance checking',
                'Error handling and resolution',
                'Regular compliance updates',
                'Invoice validation against FBR rules',
                'Automatic rejection handling',
                'Tax calculation accuracy',
                'Complete audit trail',
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border"
                  style={{ background: 'rgba(0,162,102,0.03)', borderColor: 'rgba(0,162,102,0.1)' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(30,154,216,0.1)', border: '1px solid rgba(30,154,216,0.2)' }}>
                    <Check className="h-5 w-5 text-[#1E9AD8]" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="py-24 px-6 lg:px-16 border-t border-black/5 dark:border-white/5">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black text-foreground"
            >
              Easy Implementation
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { step: '1', title: 'Assessment', desc: 'We analyze your current invoicing workflow.' },
                { step: '2', title: 'Integration', desc: 'Seamless, high-speed FBR API integration.' },
                { step: '3', title: 'Testing', desc: 'Rigorous compliance testing and validation.' },
              ].map((item, i) => (
                <AnimatedCard
                  key={i}
                  index={i}
                  direction="bottom"
                  neonBorder={true}
                  className="p-8 text-center flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-primary to-success px-5 py-2 font-black text-white text-sm shadow-md">
                      Step {item.step}
                    </div>
                    <h3 className="mb-3 text-2xl font-black text-foreground">{item.title}</h3>
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

              <h2 className="mb-4 text-3xl md:text-5xl font-black leading-tight">Need FBR Integration?</h2>
              <p className="mb-8 text-lg font-semibold opacity-90">Let's discuss how we can get your business fully integrated with FBR APIs.</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923242465217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-primary shadow-lg hover:bg-gray-50 transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
