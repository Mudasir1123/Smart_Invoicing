'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'

export default function Team() {
  

  const teamMembers = [
    {
      name: 'Muhammed Asif',
      role: 'Co-Founder & Lead Developer',
      bio: 'With 25+ years of experience in software development and FBR integration, Muhammed leads our technical vision.',
      phone: '+92 324-2465217',
      expertise: ['FBR Integration', 'Cloud Architecture', 'Digital Invoicing'],
    },
    {
      name: 'Muhammed Raza',
      role: 'Co-Founder & Business Head',
      bio: 'Muhammed brings deep expertise in business development and client success with industry knowledge.',
      phone: '+92 331-9287869',
      expertise: ['Client Relations', 'Business Strategy', 'Compliance'],
    },
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
              className="mb-6 inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest border will-change-transform"
              style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}
            >
              Meet The Experts
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              THE MINDS BEHIND{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                SMART INVOICING.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              Highly dedicated professionals with decades of expertise in FBR digitalization, tax systems, and cloud software engineering.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="pb-24 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <AnimatedCard
                  key={index}
                  index={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  neonBorder={true}
                  className="p-10 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-success shadow-lg">
                      <span className="text-2xl font-black text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="mb-2 text-3xl font-black text-foreground">{member.name}</h3>
                    <p className="mb-4 text-lg font-bold text-primary">{member.role}</p>
                    <p className="mb-8 leading-relaxed text-muted-foreground text-sm font-semibold">
                      {member.bio}
                    </p>
                    <div className="mb-8">
                      <h4 className="mb-4 text-xs font-bold text-foreground uppercase tracking-widest">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-block text-center rounded-xl bg-[#173B64] hover:bg-[#1E9AD8] px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Contact: {member.phone}
                  </a>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-24 px-6 lg:px-16 border-t border-black/5 dark:border-white/5">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center text-4xl font-black text-foreground will-change-transform"
            >
              Our Culture & Values
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly pushing boundaries to create better, faster digital tax solutions.',
                },
                {
                  title: 'Integrity',
                  description: 'Honest, transparent, and absolutely compliant with national FBR guidelines.',
                },
                {
                  title: 'Customer Focus',
                  description: 'Your continuous growth is our milestone. We prioritize client success 24/7.',
                },
              ].map((value, index) => (
                <AnimatedCard
                  key={index}
                  index={index}
                  direction="bottom"
                  neonBorder={false}
                  className="p-8 text-center flex flex-col justify-center min-h-[220px]"
                >
                  <h3 className="mb-4 text-2xl font-black text-primary">{value.title}</h3>
                  <p className="text-sm font-semibold text-muted-foreground leading-relaxed">{value.description}</p>
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
