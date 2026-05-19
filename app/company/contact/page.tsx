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
                  <svg className="h-14 w-14 fill-green-500" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h2 className="mb-4 text-4xl font-black text-foreground">Quick Response on WhatsApp</h2>
                <p className="mb-8 text-lg text-muted-foreground font-semibold">Get instant support directly from our expert team.</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/923242465217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-400 px-10 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300"
                >
                  <svg className="h-6 w-6 fill-white animate-pulse" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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
