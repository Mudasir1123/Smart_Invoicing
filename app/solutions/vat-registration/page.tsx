'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

export default function VATRegistration() {
  

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
              FBR VAT Services
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              VAT{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                REGISTRATION.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              Complete VAT registration, filing, and advisory support for your growing business in Pakistan.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="pb-24 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'VAT Registration',
                  desc: 'Register your business under VAT with expert guidance and FBR compliance review.'
                },
                {
                  title: 'VAT De-Registration',
                  desc: 'Cancel VAT registration when your business no longer meets the registration threshold.'
                },
                {
                  title: 'VAT Return Filing',
                  desc: 'File your VAT returns accurately and on time with complete documentation.'
                },
                {
                  title: 'VAT Amendment',
                  desc: 'Amend your VAT registration details as per changes in your business.'
                },
                {
                  title: 'VAT Audit',
                  desc: 'Get your business VAT-audited to ensure compliance with FBR rules.'
                },
                {
                  title: 'VAT Refund Claim',
                  desc: 'Claim VAT refund for eligible expenses with complete documentation.'
                },
              ].map((service, i) => (
                <AnimatedCard
                  key={i}
                  index={i}
                  direction="bottom"
                  neonBorder={true}
                  className="p-8 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-success shadow-lg">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-black text-foreground">{service.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground leading-relaxed">{service.desc}</p>
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

              <h2 className="mb-4 text-3xl md:text-5xl font-black leading-tight">Ready to Register for VAT?</h2>
              <p className="mb-8 text-lg font-semibold opacity-90">Contact our experts for seamless FBR tax registration and filings.</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923242465217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-primary shadow-lg hover:bg-gray-50 transition-all duration-300"
              >
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
