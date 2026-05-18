'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  { q: 'Is Smart Invoicing fully FBR compliant?', a: 'Yes. Smart Invoicing is 100% integrated with the Federal Board of Revenue (FBR) portal. Every invoice generated is automatically FBR-compliant, with complete scenario testing and real-time integration for seamless tax reporting.' },
  { q: 'How do I get started? Is setup difficult?', a: 'Getting started is completely free and simple. Our team handles the full registration and setup for you at no extra cost. You will be live and generating invoices within hours — no technical knowledge required.' },
  { q: 'Can I access it from anywhere?', a: 'Absolutely. Smart Invoicing is fully cloud-based, hosted on GoDaddy with an international IP. You can access your dashboard from any browser — laptop, tablet, or phone — from anywhere in the world.' },
  { q: 'What happens if I need support?', a: 'We provide dedicated support during business hours backed by 25+ years of industry expertise. Our team offers onboarding training, troubleshooting, and ongoing guidance. You can reach us by phone or WhatsApp.' },
  { q: 'Can I manage multiple companies in one account?', a: 'Yes. The Accounts + Inventory and Full Suite plans support multi-company management under a single login. Each company has its own separate data, reports, and invoicing — all accessible from one dashboard.' },
  { q: 'How does Excel bulk import work?', a: 'You can upload a standard Excel (.xlsx) file to bulk-import products, clients, or invoices. Our system validates and processes thousands of records in seconds. Ideal for businesses migrating from another system.' },
  { q: 'Is my data secure?', a: 'Your data is protected with enterprise-grade encryption hosted on secure GoDaddy international servers with 99.9% uptime SLA. Regular automated backups ensure your data is never lost.' },
  { q: 'What is the payment structure?', a: 'Monthly charges are payable 100% in advance. We also offer quarterly payment plans after initial setup. All plans include free registration and complete setup at no extra cost.' },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] opacity-[0.05]" style={{ background: 'radial-gradient(ellipse, #1E9AD8, #00A266)' }} />

      <div className="mx-auto max-w-3xl relative z-10">
        {/* Header — slides from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4 border" style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.3)', background: 'rgba(30,154,216,0.08)' }}>
            FAQ
          </span>
          <h2 className="text-4xl font-black md:text-5xl text-foreground">
            Got{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              Questions?
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about Smart Invoicing.</p>
        </motion.div>

        {/* FAQ items — alternate left/right slides */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden rounded-[1.5rem] cursor-default"
              style={{
                border: `1.5px solid ${open === i ? 'rgba(30,154,216,0.45)' : 'rgba(30,154,216,0.2)'}`,
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(20px)',
                boxShadow: open === i ? '0 0 30px rgba(30,154,216,0.12)' : 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="text-base font-black text-foreground pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: open === i ? 'rgba(30,154,216,0.2)' : 'rgba(30,154,216,0.08)', border: `1.5px solid ${open === i ? 'rgba(30,154,216,0.4)' : 'rgba(30,154,216,0.15)'}` }}
                >
                  <Plus size={14} style={{ color: open === i ? '#1E9AD8' : 'var(--muted-foreground)' }} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 rounded-[1.5rem] p-8 text-center"
          style={{ border: '1.5px solid rgba(0,162,102,0.3)', background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(20px)' }}
        >
          <p className="text-foreground font-black text-lg">Still have questions?</p>
          <p className="mt-2 text-muted-foreground text-sm">Our team is happy to help. Reach us directly.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <motion.a href="tel:+923242465217" whileHover={{ scale: 1.06, y: -2 }} className="rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              Call: +92 324 2465217
            </motion.a>
            <motion.a href="https://wa.me/923319287869" target="_blank" rel="noreferrer" whileHover={{ scale: 1.06, y: -2 }} className="rounded-xl px-5 py-3 text-sm font-bold border" style={{ borderColor: 'rgba(0,162,102,0.4)', color: '#00A266' }}>
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
