'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'
import { AnimatedButton } from '@/components/AnimatedButton'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const plans = [
  {
    name: 'Accounts',
    price: 2000,
    period: '/month',
    description: 'Perfect for small businesses & retailers',
    badge: null,
    color: '#1E9AD8',
    features: [
      'Complete Accounts Management',
      'FBR-Compliant Digital Invoicing',
      'Cloud-Based Access (No Install)',
      'Up to 10 Invoices/month',
      'Free Registration & Setup',
      'Business Hours Support',
      'International IP Hosting (GoDaddy)',
      '25+ Years Expert Team',
    ],
  },
  {
    name: 'Accounts + Inventory',
    price: 3500,
    period: '/month',
    description: 'Best for growing businesses',
    badge: 'Most Popular',
    color: '#00A266',
    highlight: true,
    features: [
      'Everything in Accounts',
      'Full Inventory & Stock Control',
      'Purchase Orders & Stock Alerts',
      'Excel Bulk Import',
      'Multi-Location Inventory',
      'Advanced Analytics & Reports',
      'Priority Support',
      'Multi-Company Management',
    ],
  },
  {
    name: 'Full Suite',
    price: 5500,
    period: '/month',
    description: 'For manufacturing & large operations',
    badge: null,
    color: '#173B64',
    features: [
      'Everything in Accounts + Inventory',
      'Manufacturing Workflow Module',
      'Bill of Materials (BOM)',
      'Work-in-Progress Tracking',
      'Production Planning',
      'Custom Integrations',
      'Dedicated Account Manager',
      'Phone Support & Training',
    ],
  },
]

const CARD_ENTRIES = [
  { opacity: 0, x: -120, y: 100, rotate: -8, scale: 0.85 },
  { opacity: 0, y: 150, scale: 0.75 },
  { opacity: 0, x: 120, y: 100, rotate: 8, scale: 0.85 },
]

export default function PricingPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'
  const [billingYearly, setBillingYearly] = useState(false)

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
              style={{ color: '#00A266', borderColor: 'rgba(0,162,102,0.4)', background: 'rgba(0,162,102,0.1)' }}
            >
              Honest Plans
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              SIMPLE,{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                HONEST PRICING.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              No hidden fees, free complete registration & setup. Cancel or upgrade your plan anytime.
            </p>
          </div>
        </section>

        {/* Interactive Pricing Section */}
        <section className="pb-32 px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-16"
            >
              <span className={`text-sm font-bold ${!billingYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
              <button
                onClick={() => setBillingYearly(!billingYearly)}
                className="relative inline-flex h-6 w-12 items-center rounded-full border transition-colors duration-300"
                style={{ background: billingYearly ? '#1E9AD8' : 'rgba(30,154,216,0.1)', borderColor: billingYearly ? '#1E9AD8' : 'rgba(30,154,216,0.25)' }}
              >
                <span className="inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-300" style={{ transform: billingYearly ? 'translateX(1.5rem)' : 'translateX(0.25rem)' }} />
              </button>
              <span className={`text-sm font-bold flex items-center gap-1.5 ${billingYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
                <span className="rounded-full px-2.5 py-0.5 text-[11px] font-black" style={{ background: 'rgba(0,162,102,0.15)', color: '#00A266' }}>Save 15%</span>
              </span>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid gap-8 md:grid-cols-3 lg:gap-6 items-center">
              {plans.map((plan, index) => {
                const displayPrice = billingYearly ? Math.round(plan.price * 12 * 0.85) : plan.price
                const period = billingYearly ? '/year' : plan.period

                return (
                  <motion.div
                    key={index}
                    initial={CARD_ENTRIES[index]}
                    animate={{ opacity: 1, x: 0, y: 0, scale: plan.highlight ? 1.04 : 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 85, damping: 14, delay: index * 0.13 }}
                    whileHover={{ y: plan.highlight ? -6 : -10 }}
                    className="group relative flex flex-col justify-between min-h-[560px] rounded-[2rem] p-8 cursor-default"
                    style={{
                      border: mounted && isDark 
                        ? `1.5px solid ${plan.color}${plan.highlight ? '77' : '44'}`
                        : `1.5px solid ${plan.color}${plan.highlight ? '55' : '35'}`,
                      background: mounted && isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.65)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: plan.highlight 
                        ? (mounted && isDark 
                          ? `0 0 50px ${plan.color}25, 0 0 0 1px ${plan.color}33, inset 0 1px 1px rgba(255, 255, 255, 0.05)` 
                          : `0 0 50px ${plan.color}18, 0 0 0 1px ${plan.color}22`) 
                        : (mounted && isDark 
                          ? 'inset 0 1px 1px rgba(255, 255, 255, 0.05)'
                          : 'none'),
                      transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                    }}
                  >
                    {/* Glow and Sweep effects */}
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 0 60px ${plan.color}22, 0 0 50px ${plan.color}18` }} />
                      <div className="inner-sweep" />
                    </div>

                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-black shadow-lg" style={{ background: `linear-gradient(135deg, ${plan.color}, #1E9AD8)`, color: '#fff' }}>
                        <Star size={11} fill="white" />
                        {plan.badge}
                      </div>
                    )}

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-black uppercase tracking-widest mb-3" style={{ background: `${plan.color}15`, color: plan.color }}>
                        {plan.name}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 font-semibold">{plan.description}</p>

                      <div className="mb-6 pb-6 border-b" style={{ borderColor: `${plan.color}20` }}>
                        <div className="flex items-end gap-1">
                          <span className="text-sm font-bold text-muted-foreground">PKR</span>
                          <span className="text-5xl font-black text-foreground">{displayPrice.toLocaleString()}</span>
                          <span className="text-sm text-muted-foreground mb-1 font-semibold">{period}</span>
                        </div>
                        {billingYearly && (
                          <p className="mt-1 text-xs font-bold" style={{ color: '#00A266' }}>Saving PKR {Math.round(plan.price * 12 * 0.15).toLocaleString()}/year</p>
                        )}
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feat, fi) => (
                          <motion.li
                            key={fi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.08 + fi * 0.04 }}
                            className="flex items-center gap-3"
                          >
                            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,162,102,0.15)' }}>
                              <Check size={11} style={{ color: '#00A266' }} />
                            </div>
                            <span className="text-sm font-semibold text-foreground/80">{feat}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 relative z-10">
                      <AnimatedButton variant={plan.highlight ? 'primary' : 'secondary'} size="lg" className="w-full" onClick={() => window.open('https://wa.me/923242465217', '_blank')}>
                        {plan.highlight ? <span className="flex items-center gap-2"><Zap size={16} />Get Started</span> : 'Get Started'}
                      </AnimatedButton>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-muted-foreground mt-16 font-semibold"
            >
              All plans include free registration & complete setup. Monthly charges payable in advance. Quarterly options available after setup.
            </motion.p>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
