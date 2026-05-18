'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatedButton } from './AnimatedButton'
import { Moon, Sun, ChevronDown, MessageCircle } from 'lucide-react'

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('navbar-theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.style.backgroundColor = '#111827'
    } else {
      document.documentElement.style.backgroundColor = '#ffffff'
    }
  }, [])

  const toggleTheme = () => {
    const newValue = !isDark
    setIsDark(newValue)
    localStorage.setItem('navbar-theme', newValue ? 'dark' : 'light')
    if (newValue) {
      document.documentElement.style.backgroundColor = '#111827'
    } else {
      document.documentElement.style.backgroundColor = '#ffffff'
    }
  }

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
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isDark ? 'bg-gray-900 shadow-lg border-b border-gray-800' : 'bg-white shadow-md border-b border-gray-100'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500">
              <span className="text-lg font-bold text-white">SI</span>
            </div>
            <span
              className={`hidden font-bold sm:inline transition-colors duration-300 text-sm ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Smart Invoicing
            </span>
          </Link>

          {/* Navigation Links */}
          <div
            className={`hidden items-center gap-1 md:flex ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
            </motion.div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                } ${openDropdown === 'solutions' ? (isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-primary') : ''}`}
              >
                Solutions
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {/* Solutions Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: openDropdown === 'solutions' ? 1 : 0,
                  y: openDropdown === 'solutions' ? 0 : -10,
                  pointerEvents: openDropdown === 'solutions' ? 'auto' : 'none',
                }}
                className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg py-2 transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
              >
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm transition-colors duration-300 ${
                      isDark
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="#pricing"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                Pricing
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                Blog
              </Link>
            </motion.div>

            {/* Company Dropdown */}
            <div className="relative group">
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => setOpenDropdown(openDropdown === 'company' ? null : 'company')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                } ${openDropdown === 'company' ? (isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-primary') : ''}`}
              >
                Company
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {/* Company Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: openDropdown === 'company' ? 1 : 0,
                  y: openDropdown === 'company' ? 0 : -10,
                  pointerEvents: openDropdown === 'company' ? 'auto' : 'none',
                }}
                className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg py-2 transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
              >
                {companyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm transition-colors duration-300 ${
                      isDark
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Theme Toggle, WhatsApp and CTA Button */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923242465217"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 transition-colors duration-300 ${
                isDark
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`rounded-full p-2 transition-colors duration-300 ${
                isDark
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} />
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
