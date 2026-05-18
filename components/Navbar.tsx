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
    { name: 'VAT Registration', href: '/solutions/vat-registration' },
    { name: 'FBR Integration', href: '/solutions/fbr-integration' },
    { name: 'Digital Invoicing', href: '/solutions/digital-invoicing' },
    { name: 'Accounting', href: '/solutions/accounting' },
    { name: 'Tax Compliance', href: '/solutions/tax-compliance' },
  ]

  const companyItems = [
    { name: 'About Us', href: '/company/about' },
    { name: 'Contact Us', href: '/company/contact' },
    { name: 'Team', href: '/company/team' },
    { name: 'Blog', href: '/blog' },
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
            className="hidden items-center gap-1 md:flex text-muted-foreground"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-foreground hover:bg-muted"
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
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-1 ${openDropdown === 'solutions' ? 'text-[#1E9AD8] bg-black/5 dark:bg-white/10' : 'hover:text-[#1E9AD8] hover:bg-black/5 dark:hover:bg-white/10'}`}
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
                className="absolute left-0 top-full mt-1 w-64 rounded-2xl shadow-2xl py-3 border backdrop-blur-2xl bg-white/90 dark:bg-[#0a0f1a]/90 border-black/5 dark:border-white/10"
              >
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm font-semibold transition-all duration-300 text-foreground/70 hover:text-[#1E9AD8] hover:bg-black/5 dark:hover:bg-white/5 mx-2 rounded-xl"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/pricing"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-foreground hover:bg-muted"
              >
                Pricing
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-foreground hover:bg-muted"
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
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-1 ${openDropdown === 'company' ? 'text-[#00A266] bg-black/5 dark:bg-white/10' : 'hover:text-[#00A266] hover:bg-black/5 dark:hover:bg-white/10'}`}
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
                className="absolute left-0 top-full mt-1 w-56 rounded-2xl shadow-2xl py-3 border backdrop-blur-2xl bg-white/90 dark:bg-[#0a0f1a]/90 border-black/5 dark:border-white/10"
              >
                {companyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm font-semibold transition-all duration-300 text-foreground/70 hover:text-[#00A266] hover:bg-black/5 dark:hover:bg-white/5 mx-2 rounded-xl"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
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
              className="rounded-full p-2 transition-colors duration-300 bg-muted/50 text-foreground hover:bg-muted"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </motion.button>

            <AnimatedButton variant="primary" size="md">
              Get Started
            </AnimatedButton>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
