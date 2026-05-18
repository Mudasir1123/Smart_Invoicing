'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'
import { Check, Cloud, Lock, Zap } from 'lucide-react'

export default function DigitalInvoicing() {
  

  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access from anywhere with an internet connection. No installation required.',
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Enterprise-grade encryption protects your sensitive business data.',
    },
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'Lightning-fast invoice generation with 99.9% uptime guarantee.',
    },
  ]

  const capabilities = [
    'Complete solution – from registration to invoicing',
    'Fully integrated with FBR',
    'Cloud server with international IP (GoDaddy)',
    'Access from anywhere – no installation required',
    'Complete scenario testing',
    'Digital invoice generation',
    'Technical support & guidance',
    'Excel import for bulk invoicing',
    'Industry experts with 25+ years of experience',
    'Secure & reliable system',
  ]

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
              FBR Compliant Billing
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              DIGITAL{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                INVOICING.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              Modern digital billing systems fully integrated with FBR APIs, designed to scale with your sales operations.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="pb-24 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <AnimatedCard
                    key={index}
                    index={index}
                    direction="bottom"
                    neonBorder={true}
                    className="p-8 text-center flex flex-col justify-center min-h-[250px]"
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="rounded-2xl bg-gradient-to-br from-primary to-success p-4 shadow-lg">
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-2xl font-black text-foreground">{feature.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </AnimatedCard>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 px-6 lg:px-16 border-t border-black/5 dark:border-white/5">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black text-foreground"
            >
              What's Included
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ background: 'rgba(30,154,216,0.02)', borderColor: 'rgba(30,154,216,0.08)' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,162,102,0.1)', border: '1px solid rgba(0,162,102,0.2)' }}>
                    <Check className="h-5 w-5 text-[#00A266]" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">{capability}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Invoice Capacity */}
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

              <h2 className="mb-4 text-3xl md:text-5xl font-black leading-tight">Invoice Capacity</h2>
              <p className="mb-6 text-xl font-bold">Up to 10 invoices per month included in your subscription</p>
              <p className="text-sm font-semibold opacity-90">Need more? Chat with our experts for unlimited enterprise billing tiers.</p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
