'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 324-2465217',
      subtext: 'Muhammed Asif',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 331-9287869',
      subtext: 'Muhammed Raza',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@smartinvoicing.pk',
      subtext: 'Support Team',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      subtext: 'Serving all of Pakistan',
    },
  ]

  return (
    <PageTransition>
      <main className="w-full overflow-x-hidden pt-20 bg-transparent text-foreground">
        <Navbar />

        {/* Contact Hero */}
        <section className="relative pt-24 pb-12 px-6 lg:px-16 text-center">
          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest border"
              style={{ color: '#00A266', borderColor: 'rgba(0,162,102,0.4)', background: 'rgba(0,162,102,0.1)' }}
            >
              Get In Touch
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              CONNECT WITH{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                OUR TEAM.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              Have questions? We are here to help. Contact us using any of the methods below.
            </p>
          </div>
        </section>

        {/* Unified Professional Card Layout */}
        <section className="pb-20 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 55, damping: 18 }}
              className="grid grid-cols-1 md:grid-cols-12 rounded-[2rem] overflow-hidden glass-card shadow-2xl border"
              style={{ border: '1.5px solid rgba(30,154,216,0.25)' }}
            >
              {/* Left Column: 4 Contact Methods */}
              <div className="md:col-span-5 p-8 md:p-12 relative flex flex-col justify-between overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(23,59,100,0.06), rgba(30,154,216,0.04))' }}>
                <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: '#1E9AD8' }} />
                <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: '#00A266' }} />
                <div className="inner-sweep" />

                <div className="relative z-10 space-y-8">
                  <div>
                    <h2 className="text-2xl font-black text-foreground">Contact Info</h2>
                    <p className="text-sm font-semibold text-muted-foreground mt-2">Reach out to us directly through any channel.</p>
                  </div>

                  <div className="space-y-6">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(30,154,216,0.1)', border: '1px solid rgba(30,154,216,0.2)' }}>
                            <Icon size={18} style={{ color: '#1E9AD8' }} />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{method.label}</p>
                            <p className="text-sm font-black text-foreground mt-0.5">{method.value}</p>
                            <p className="text-[11px] font-semibold text-muted-foreground/80 mt-0.5">{method.subtext}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="relative z-10 mt-12 p-5 rounded-2xl border border-blue-500/20 dark:border-blue-400/20 bg-white/35 dark:bg-slate-900/60 backdrop-blur-md">
                  <p className="text-xs font-bold text-foreground">💡 Direct Backing</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-1 leading-relaxed">
                    Muhammed Asif & Muhammed Raza represent 25+ years of combined experience in the digital invoicing industry.
                  </p>
                </div>
              </div>

              {/* Right Column: Modern Contact Form */}
              <form className="md:col-span-7 p-8 md:p-12 space-y-6 bg-white/40 dark:bg-black/20 border-l border-black/5 dark:border-white/5">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground">Full Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: '0 0 25px rgba(30,154,216,0.2)' }}
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E9AD8] transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground">Email Address</label>
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: '0 0 25px rgba(30,154,216,0.2)' }}
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E9AD8] transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.01, boxShadow: '0 0 25px rgba(30,154,216,0.2)' }}
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E9AD8] transition-all duration-200"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01, boxShadow: '0 0 25px rgba(30,154,216,0.2)' }}
                    required
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E9AD8] transition-all duration-200 resize-none"
                    placeholder="Tell us more about your business needs..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl bg-gradient-to-r from-[#1E9AD8] to-[#00A266] py-4 text-sm font-black uppercase tracking-widest text-white transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(30,154,216,0.5)]"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="pb-24 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <AnimatedCard
              index={0}
              direction="bottom"
              neonBorder={true}
              className="rounded-3xl p-1 relative overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-[0.04]"></div>
              <div className="relative z-10 p-12 text-center flex flex-col items-center">
                <div className="rounded-full bg-green-500/20 p-6 mb-6">
                  <MessageCircle size={56} className="text-green-500" />
                </div>
                <h2 className="mb-4 text-4xl font-black text-foreground">Quick Response on WhatsApp</h2>
                <p className="mb-8 text-lg text-muted-foreground font-semibold">Get instant support directly from our expert team.</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/923242465217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-green-500 to-green-400 px-10 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300"
                >
                  Chat on WhatsApp Now
                </motion.a>
              </div>
            </AnimatedCard>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
