'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { AnimatedButton } from './AnimatedButton'
import { Moon, Sun, ChevronDown } from 'lucide-react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isDark = theme === 'dark'

  if (!mounted) return null

  const solutionsItems = [
    { name: 'VAT Registration', description: 'Register & manage VAT compliance', href: '/solutions/vat-registration' },
    { name: 'FBR Integration', description: 'Real-time FBR POS & invoice integration', href: '/solutions/fbr-integration' },
    { name: 'Digital Invoicing', description: 'Issue FBR-compliant digital invoices', href: '/solutions/digital-invoicing' },
    { name: 'Accounting', description: 'Track cashflow, profits & tax records', href: '/solutions/accounting' },
    { name: 'Tax Compliance', description: 'Stay audit-ready and file easily', href: '/solutions/tax-compliance' },
  ]

  const companyItems = [
    { name: 'About Us', description: 'Our mission to digitize trade in Pakistan', href: '/company/about' },
    { name: 'Contact Us', description: 'Get 24/7 priority business support', href: '/company/contact' },
    { name: 'Team', description: 'Meet the experts behind the tech', href: '/company/team' },
    { name: 'Blog', description: 'Latest updates, guides & tax compliance tips', href: '/blog' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full transition-colors duration-500 bg-white/60 dark:bg-[#030712]/60 backdrop-blur-xl shadow-sm border-b border-black/5 dark:border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg shadow-md border border-white/10">
              <img src="/logo.jpg" alt="Smart Invoicing Logo" className="h-full w-full object-cover" />
            </div>
            <span
              className="hidden font-bold sm:inline transition-colors duration-300 text-sm text-foreground"
            >
              Smart Invoicing
            </span>
          </Link>

          {/* Navigation Links */}
          <div
            className="hidden items-center gap-1 md:flex text-foreground/80"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/"
                className="px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:text-[#1E9AD8] hover:bg-black/5 dark:hover:bg-[#1E9AD8]/10"
              >
                Home
              </Link>
            </motion.div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-1 ${openDropdown === 'solutions' ? 'text-[#1E9AD8] bg-black/5 dark:bg-[#1E9AD8]/10' : 'hover:text-[#1E9AD8] hover:bg-black/5 dark:hover:bg-[#1E9AD8]/10'}`}
              >
                Solutions
                <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Solutions Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{
                  opacity: openDropdown === 'solutions' ? 1 : 0,
                  y: openDropdown === 'solutions' ? 0 : 10,
                  scale: openDropdown === 'solutions' ? 1 : 0.95,
                  pointerEvents: openDropdown === 'solutions' ? 'auto' : 'none',
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 top-full mt-1 w-[320px] rounded-2xl shadow-2xl py-3 border backdrop-blur-2xl bg-white/95 dark:bg-[#0a0f1a]/95 border-black/5 dark:border-white/10"
              >
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item block px-5 py-3 text-left transition-all duration-300 hover:bg-black/5 dark:hover:bg-[#1E9AD8]/10 mx-2 rounded-xl"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <p className="text-sm font-bold text-foreground transition-colors group-hover/item:text-[#1E9AD8]">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 font-normal transition-colors group-hover/item:text-muted-foreground/90">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </motion.div>
            </div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/pricing"
                className="px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:text-[#1E9AD8] hover:bg-black/5 dark:hover:bg-[#1E9AD8]/10"
              >
                Pricing
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:text-[#00A266] hover:bg-black/5 dark:hover:bg-[#00A266]/10"
              >
                Blog
              </Link>
            </motion.div>

            {/* Company Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setOpenDropdown('company')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-1 ${openDropdown === 'company' ? 'text-[#00A266] bg-black/5 dark:bg-[#00A266]/10' : 'hover:text-[#00A266] hover:bg-black/5 dark:hover:bg-[#00A266]/10'}`}
              >
                Company
                <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Company Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{
                  opacity: openDropdown === 'company' ? 1 : 0,
                  y: openDropdown === 'company' ? 0 : 10,
                  scale: openDropdown === 'company' ? 1 : 0.95,
                  pointerEvents: openDropdown === 'company' ? 'auto' : 'none',
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 top-full mt-1 w-[280px] rounded-2xl shadow-2xl py-3 border backdrop-blur-2xl bg-white/95 dark:bg-[#0a0f1a]/95 border-black/5 dark:border-white/10"
              >
                {companyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item block px-5 py-3 text-left transition-all duration-300 hover:bg-black/5 dark:hover:bg-[#00A266]/10 mx-2 rounded-xl"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <p className="text-sm font-bold text-foreground transition-colors group-hover/item:text-[#00A266]">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 font-normal transition-colors group-hover/item:text-muted-foreground/90">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="flex items-center gap-3">

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="rounded-full p-2.5 transition-all duration-300 bg-black/5 dark:bg-white/5 text-foreground hover:text-[#1E9AD8] hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </motion.button>

            <Link href="/login" className="hidden sm:inline-block">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 text-foreground/80 hover:text-[#1E9AD8] hover:bg-black/5 dark:hover:bg-[#1E9AD8]/10 cursor-pointer"
              >
                Log In
              </motion.span>
            </Link>

            <Link href="/signup">
              <AnimatedButton variant="primary" size="md">
                Get Started
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
