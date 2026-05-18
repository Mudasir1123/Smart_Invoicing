'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Lock, ArrowRight, Sparkles, User, Briefcase, CheckCircle2, Phone, Hash, ShieldCheck, Eye, EyeOff } from 'lucide-react'
import { AnimatedButton } from '@/components/AnimatedButton'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function SignupPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [ntn, setNtn] = useState('')
  const [email, setEmail] = useState('')
  const [integrationType, setIntegrationType] = useState('Tier-1 Retailer')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match! Please check and try again.')
      return
    }
    if (!agreeTerms) {
      alert('Please agree to the Terms of Service & Privacy Policy.')
      return
    }
    alert(`Signup successful!\nName: ${name}\nNTN: ${ntn}\nCategory: ${integrationType}\nWelcome to Smart Invoicing FBR system!`)
  }

  const features = [
    { title: 'Free Automated Setup', desc: 'No credit card or setup fees to initialize compliance integration' },
    { title: '10 Invoices Included', desc: 'Free plan lets you issue up to 10 FBR-compliant invoices monthly' },
    { title: 'Dedicated Help Desk', desc: 'Direct onboarding help from FBR tax compliance authorities' },
  ]

  return (
    <PageTransition>
      <main className="w-full min-h-screen pt-20 bg-transparent text-foreground flex flex-col justify-between">
        <Navbar />

        <div className="flex-grow flex items-center justify-center py-16 px-6 lg:px-16 relative overflow-hidden">
          {/* Backdrop Glow Blobs */}
          <div className="pointer-events-none absolute -left-20 top-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: 'radial-gradient(circle, #00A266 0%, transparent 80%)' }} />
          <div className="pointer-events-none absolute -right-20 bottom-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: 'radial-gradient(circle, #1E9AD8 0%, transparent 80%)' }} />

          <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Side: Cinematic Showcase */}
            <div className="lg:col-span-5 hidden lg:flex flex-col justify-center pr-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 self-start inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest border"
                style={{ color: '#00A266', borderColor: 'rgba(0,162,102,0.3)', background: 'rgba(0,162,102,0.08)' }}
              >
                <Sparkles size={12} className="text-[#00A266] animate-pulse" />
                Register Now
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-none mb-6"
              >
                START YOUR{' '}
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
                Establish your FBR-compliant billing framework in under 5 minutes. Streamline accounts, stock control, and VAT returns.
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
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(30,154,216,0.15)' }}>
                      <CheckCircle2 size={15} className="text-[#1E9AD8]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base">{feat.title}</h4>
                      <p className="text-xs text-muted-foreground font-semibold mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Beautiful Glassmorphic Signup Form (Wider for Side-by-Side inputs) */}
            <div className="lg:col-span-7 w-full max-w-2xl mx-auto">
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
                  <div className="absolute inset-0 opacity-10" style={{ boxShadow: mounted && isDark ? 'inset 0 0 50px rgba(0,162,102,0.15)' : 'inset 0 0 50px rgba(0,162,102,0.3)' }} />
                  <div className="inner-sweep" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-black text-foreground mb-2">Create Account</h2>
                  <p className="text-sm font-semibold text-muted-foreground mb-8">Join thousands of compliant Pakistani enterprises today</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Company Name</label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Smart Systems Private Ltd"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone Number & NTN / CNIC */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+92 324 2465217"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">NTN / CNIC Number</label>
                        <div className="relative">
                          <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={ntn}
                            onChange={(e) => setNtn(e.target.value)}
                            placeholder="1234567-8"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Email Address & Integration Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">FBR POS Category</label>
                        <div className="relative">
                          <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <select
                            value={integrationType}
                            onChange={(e) => setIntegrationType(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm appearance-none cursor-pointer"
                          >
                            <option value="Tier-1 Retailer">Tier-1 Retailer</option>
                            <option value="Corporate Taxpayer">Corporate Taxpayer</option>
                            <option value="Wholesale Distributor">Wholesale Distributor</option>
                            <option value="Importer/Exporter">Importer/Exporter</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Password & Confirm Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-12 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm"
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

                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Confirm Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-12 py-3 rounded-xl border bg-white/50 border-black/10 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00A266]/40 focus:border-[#00A266] transition-all duration-300 font-semibold text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Agree Terms Checkbox */}
                    <div className="flex items-start justify-between pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          className="w-4.5 h-4.5 rounded border border-black/10 text-[#00A266] focus:ring-[#00A266] mt-0.5"
                        />
                        <span className="text-xs font-bold text-muted-foreground leading-relaxed">
                          I agree to the{' '}
                          <a href="#" className="text-[#00A266] hover:underline">Terms of Service</a> and{' '}
                          <a href="#" className="text-[#00A266] hover:underline">Privacy Policy</a>
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <AnimatedButton variant="success" size="lg" className="w-full mt-4" type="submit">
                      <span className="flex items-center justify-center gap-2 font-black uppercase tracking-wider text-xs">
                        Create Account <ArrowRight size={15} />
                      </span>
                    </AnimatedButton>
                  </form>

                  {/* Toggle Mode Footer */}
                  <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5 text-center">
                    <span className="text-xs font-semibold text-muted-foreground">Already have an account? </span>
                    <Link href="/login" className="text-xs font-black text-[#1E9AD8] hover:underline">
                      Log In
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
