'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'

export default function About() {
  

  return (
    <PageTransition>
      <main
        className={`w-full overflow-x-hidden pt-20 transition-colors duration-300 bg-transparent text-foreground`}
      >
        <Navbar />

        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-16 relative">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 md:p-16 text-center relative overflow-hidden"
              style={{ border: '1.5px solid rgba(30,154,216,0.25)' }}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-10" style={{ background: '#1E9AD8' }} />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10" style={{ background: '#00A266' }} />
              <div className="inner-sweep" />

              <span className="inline-block rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest mb-6 border" style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}>
                About Our Company
              </span>
              <h1 className="mb-6 text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none">
                BUILDING THE FUTURE OF{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                  INVOICING.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                Leading the digital invoicing revolution in Pakistan with fully FBR-compliant, secure cloud-based solutions for growing businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-10 relative overflow-hidden flex flex-col justify-between"
                style={{ border: '1.5px solid rgba(30,154,216,0.25)' }}
              >
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(30,154,216,0.1)' }} />
                <div className="inner-sweep" />
                <div>
                  <h2 className="mb-6 text-3xl font-black text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    To simplify invoicing for Pakistani businesses by providing a cloud-based, 
                    FBR-compliant digital invoicing system that eliminates manual processes and ensures 
                    complete regulatory compliance.
                  </p>
                </div>
                <div className="mt-8 h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #1E9AD8, transparent)' }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-10 relative overflow-hidden flex flex-col justify-between"
                style={{ border: '1.5px solid rgba(0,162,102,0.25)' }}
              >
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(0,162,102,0.1)' }} />
                <div className="inner-sweep" />
                <div>
                  <h2 className="mb-6 text-3xl font-black text-foreground">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    To become the most trusted digital invoicing platform in South Asia, enabling businesses 
                    of all sizes to manage their finances securely and efficiently through innovative technology.
                  </p>
                </div>
                <div className="mt-8 h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #00A266, transparent)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={`py-16 transition-colors duration-300 bg-muted/30`}>
          <div className="mx-auto max-w-7xl px-6 lg:px-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { number: '25+', label: 'Years Experience' },
                { number: '1000+', label: 'Active Clients' },
                { number: '100%', label: 'FBR Compliant' },
                { number: '24/7', label: 'Cloud Support' },
              ].map((stat, index) => (
                <AnimatedCard
                  key={index}
                  index={index}
                  direction="bottom"
                  neonBorder={false}
                  className="text-center p-8 flex flex-col justify-center min-h-[150px]"
                >
                  <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-2 drop-shadow-md">{stat.number}</h3>
                  <p className="text-muted-foreground font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center text-4xl font-bold"
            >
              Why Choose Smart Invoicing?
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'FBR Compliant',
                  description: 'Fully integrated with FBR requirements for Pakistan',
                },
                {
                  title: 'Cloud-Based',
                  description: 'Access from anywhere, no installation needed',
                },
                {
                  title: 'Expert Support',
                  description: 'Industry experts with 25+ years of experience',
                },
                {
                  title: 'Affordable Pricing',
                  description: 'Starting from just Rs. 1250 per month per company',
                },
                {
                  title: 'Secure & Reliable',
                  description: 'Enterprise-grade security with international hosting',
                },
                {
                  title: 'Quick Setup',
                  description: 'Free registration and complete setup included',
                },
              ].map((item, index) => (
                <AnimatedCard
                  key={index}
                  index={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  neonBorder={true}
                  className="rounded-lg p-8 h-full flex flex-col justify-center"
                >
                  <h3 className="mb-4 text-2xl font-bold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
