'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { TrendingUp, FileText, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useTheme } from 'next-themes'

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const animate = (ts: number) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [start, target, duration])
  return count
}

const revenueData = [40, 65, 48, 72, 58, 85, 70, 92, 78, 98, 88, 110]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function DashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.3 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const isDark = theme === 'dark'

  const revenue = useCountUp(1247500, 2000, visible)
  const invoices = useCountUp(3842, 2000, visible)
  const clients = useCountUp(1038, 2000, visible)
  const compliance = useCountUp(100, 1500, visible)

  const kpis = [
    { label: 'Total Revenue', value: `PKR ${revenue.toLocaleString()}`, icon: DollarSign, color: '#1E9AD8', trend: '+18.2%', up: true },
    { label: 'Invoices', value: invoices.toLocaleString(), icon: FileText, color: '#00A266', trend: '+24.5%', up: true },
    { label: 'Active Clients', value: clients.toLocaleString(), icon: Users, color: '#173B64', trend: '+12.4%', up: true },
    { label: 'Tax Compliance', value: `${compliance}%`, icon: TrendingUp, color: '#1E9AD8', trend: 'Perfect', up: true },
  ]

  const recentInvoices = [
    { id: 'INV-0042', client: 'Al-Fatah Traders', amount: 'PKR 45,000', status: 'Paid', date: 'May 18' },
    { id: 'INV-0041', client: 'Pak Steel Mills', amount: 'PKR 128,500', status: 'Sent', date: 'May 17' },
    { id: 'INV-0040', client: 'City Wholesale', amount: 'PKR 22,000', status: 'Paid', date: 'May 16' },
  ]


  const maxVal = Math.max(...revenueData)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.4], [-80, 0])

  return (
    <section id="dashboard" ref={sectionRef} className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 w-[700px] h-[700px] rounded-full blur-[180px] opacity-[0.07]" style={{ background: 'radial-gradient(ellipse, #1E9AD8, #00A266)' }} />

      <div className="mx-auto max-w-[1400px] relative z-10">
        <motion.div style={{ y: headerY }} className="text-center mb-28">
          <span className="inline-block rounded-full px-6 py-2 text-sm font-bold uppercase tracking-widest mb-6 border" style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}>
            Live Dashboard Preview
          </span>
          <h2 className="text-5xl font-black md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tighter">
            YOUR BUSINESS,{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
              AT A GLANCE.
            </span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Real-time insights, analytics, and invoice management — all in one powerful dashboard.
          </p>
        </motion.div>

        {/* Dashboard UI — 3D swoop-in animation */}
        <motion.div
          initial={{ opacity: 0, rotateX: -12, y: -100, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 55, damping: 18, mass: 1.1 }}
          style={{ transformPerspective: 1200 }}
          className="relative rounded-[1.5rem] overflow-hidden glass-card"
        >
          {/* Dashboard glow and border */}
          <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none" style={{ boxShadow: '0 30px 60px -15px rgba(30,154,216,0.2)' }} />

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(30,154,216,0.15)', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(30,154,216,0.06)' }}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono font-bold tracking-wider uppercase">Smart Invoicing</span>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {kpis.map((kpi, i) => {
                const Icon = kpi.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 + i * 0.1 }}
                    className="rounded-2xl p-5"
                    style={{ 
                      background: mounted && isDark ? 'rgba(15, 23, 42, 0.45)' : 'rgba(255, 255, 255, 0.5)', 
                      border: mounted && isDark ? `1.5px solid ${kpi.color}35` : `1.5px solid ${kpi.color}25`, 
                      boxShadow: mounted && isDark ? `inset 0 0 20px ${kpi.color}15, 0 1px 1px rgba(255, 255, 255, 0.03)` : `inset 0 0 20px ${kpi.color}10`
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${kpi.color}18`, border: `1px solid ${kpi.color}30` }}>
                        <Icon size={18} style={{ color: kpi.color }} />
                      </div>
                      <span className="text-xs font-bold flex items-center gap-0.5" style={{ color: kpi.up ? '#00A266' : '#ef4444' }}>
                        {kpi.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                        {kpi.trend}
                      </span>
                    </div>
                    <p className="text-2xl font-black text-foreground leading-none mb-1">{kpi.value}</p>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{kpi.label}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
              {/* Chart */}
              <div className="lg:col-span-3 rounded-2xl p-6" style={{ 
                background: mounted && isDark ? 'rgba(15, 23, 42, 0.45)' : 'rgba(255, 255, 255, 0.5)', 
                border: mounted && isDark ? '1.5px solid rgba(30,154,216,0.25)' : '1.5px solid rgba(30,154,216,0.15)',
                boxShadow: mounted && isDark ? 'inset 0 1px 1px rgba(255, 255, 255, 0.03)' : 'none'
              }}>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm font-black text-foreground">Revenue Overview</p>
                  <span className="text-xs font-bold text-muted-foreground px-3 py-1 rounded-md" style={{ background: mounted && isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: 'var(--muted-foreground)' }}>2026</span>
                </div>
                <div className="flex items-end gap-3 h-40">
                  {revenueData.map((val, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.6, type: 'spring', stiffness: 100 }}
                      className="flex-1 rounded-t-lg relative group"
                      style={{
                        height: `${(val / maxVal) * 100}%`,
                        background: i === revenueData.length - 1 ? 'linear-gradient(to top, #1E9AD8, #00A266)' : 'rgba(30,154,216,0.2)',
                        transformOrigin: 'bottom',
                        minHeight: '8px',
                      }}
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        PKR {val}k
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  {months.map((m, i) => (
                    <span key={i} className="text-[10px] font-bold text-muted-foreground uppercase">{m}</span>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="lg:col-span-2 rounded-2xl p-6" style={{ 
                background: mounted && isDark ? 'rgba(15, 23, 42, 0.45)' : 'rgba(255, 255, 255, 0.5)', 
                border: mounted && isDark ? '1.5px solid rgba(30,154,216,0.25)' : '1.5px solid rgba(30,154,216,0.15)',
                boxShadow: mounted && isDark ? 'inset 0 1px 1px rgba(255, 255, 255, 0.03)' : 'none'
              }}>
                <p className="text-sm font-black text-foreground mb-6">Recent Invoices</p>
                <div className="space-y-4">
                  {recentInvoices.map((inv, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.6 + i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                      style={{ border: mounted && isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.05)' }}
                    >
                      <div>
                        <p className="text-xs font-black text-foreground">{inv.id}</p>
                        <p className="text-[11px] font-semibold text-muted-foreground">{inv.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black text-foreground">{inv.amount}</p>
                        <span className="text-[10px] font-black rounded-full px-2.5 py-0.5 inline-block mt-1" style={{ background: inv.status === 'Paid' ? 'rgba(0,162,102,0.15)' : 'rgba(30,154,216,0.15)', color: inv.status === 'Paid' ? '#00A266' : '#1E9AD8' }}>
                          {inv.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
