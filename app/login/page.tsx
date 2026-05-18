'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Lock, ArrowRight, Sparkles, CheckCircle2, Eye, EyeOff } from 'lucide-react'
import { AnimatedButton } from '@/components/AnimatedButton'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function LoginPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated login submission
    alert('Login capability is simulated! Directing to FBR compliance dashboard.')
  }

  const features = [
    { title: 'FBR Integration', desc: 'Direct secure API link with Federal Board of Revenue' },
    { title: 'Smart Ledger', desc: 'Precision double-entry cloud cloud bookkeeping' },
    { title: '256-bit Security', desc: 'Bank-grade SSL encryption for absolute data security' },
  ]

  return (
    <PageTransition>
      <main className="w-full min-h-screen pt-20 bg-transparent text-foreground flex flex-col justify-between">
        <Navbar />

        <div className="flex-grow flex items-center justify-center py-16 px-6 lg:px-16 relative overflow-hidden">
          {/* Backdrop Glow Blobs */}
          <div className="pointer-events-none absolute -left-20 top-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: 'radial-gradient(circle, #1E9AD8 0%, transparent 80%)' }} />
          <div className="pointer-events-none absolute -right-20 bottom-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: 'radial-gradient(circle, #00A266 0%, transparent 80%)' }} />

          <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Side: Cinematic Showcase */}
            <div className="lg:col-span-6 hidden lg:flex flex-col justify-center pr-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 self-start inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest border"
                style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.3)', background: 'rgba(30,154,216,0.08)' }}
              >
                <Sparkles size={12} className="text-[#1E9AD8] animate-pulse" />
                Enterprise Portal
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-none mb-6"
              >
                MANAGE YOUR{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                  COMPLIANCE.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-muted-foreground font-semibold mb-10 leading-relaxed"
              >
                Access your secure portal to sync real-time invoices, generate compliance audits, and manage ledger balances.
              </motion.p>

              {/* Mini-features */}
              <div className="space-y-6">
                {features.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(0,162,102,0.15)' }}>
                      <CheckCircle2 size={15} className="text-[#00A266]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base">{feat.title}</h4>
                      <p className="text-xs text-muted-foreground font-semibold mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Beautiful Glassmorphic Login Form */}
            <div className="lg:col-span-6 w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                className="rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
                style={{
                  border: mounted && isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
                  background: mounted && isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(30px)',
                  boxShadow: mounted && isDark 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05)' 
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Border neon glow container */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-10" style={{ boxShadow: mounted && isDark ? 'inset 0 0 50px rgba(30,154,216,0.15)' : 'inset 0 0 50px rgba(30,154,216,0.3)' }} />
                  <div className="inner-sweep" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-black text-foreground mb-2">Welcome Back</h2>
                  <p className="text-sm font-semibold text-muted-foreground mb-8">Enter your credentials to access your invoice manager</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#1E9AD8]/40 focus:border-[#1E9AD8] transition-all duration-300 font-semibold text-sm"
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Password</label>
                        <a href="#" className="text-xs font-bold text-[#1E9AD8] hover:underline">Forgot password?</a>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-12 py-3.5 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#1E9AD8]/40 focus:border-[#1E9AD8] transition-all duration-300 font-semibold text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me Toggle */}
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4.5 h-4.5 rounded border border-black/10 text-[#1E9AD8] focus:ring-[#1E9AD8]"
                        />
                        <span className="text-xs font-bold text-muted-foreground">Remember this device</span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <AnimatedButton variant="primary" size="lg" className="w-full mt-4" type="submit">
                      <span className="flex items-center justify-center gap-2 font-black uppercase tracking-wider text-xs">
                        Sign In <ArrowRight size={15} />
                      </span>
                    </AnimatedButton>
                  </form>

                  {/* Toggle Mode Footer */}
                  <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 text-center">
                    <span className="text-xs font-semibold text-muted-foreground">Don't have an account? </span>
                    <Link href="/signup" className="text-xs font-black text-[#00A266] hover:underline">
                      Create an Account
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        <Footer />
      </main>
    </PageTransition>
  )
}
