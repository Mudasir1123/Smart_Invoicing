'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="transition-colors duration-300 border-t py-16 px-6 lg:px-16 border-border bg-background/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg shadow-md border border-white/10">
                <img src="/logo.jpg" alt="Smart Invoicing Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-bold text-foreground">
                Smart Invoicing
              </span>
            </div>
            <p className="text-sm mb-4 text-foreground/75 dark:text-neutral-300">
              FBR-compliant digital invoicing solution for Pakistani businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923242465217"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 transition-all duration-300 border border-green-500/30 text-green-500 hover:text-white hover:bg-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] bg-transparent"
              >
                <MessageCircle size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 transition-all duration-300 border border-blue-500/30 text-blue-500 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] bg-transparent"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 transition-all duration-300 border border-sky-400/30 text-sky-400 hover:text-white hover:bg-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] bg-transparent"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 transition-all duration-300 border border-blue-600/30 text-blue-600 hover:text-white hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.4)] bg-transparent"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-foreground/75 dark:text-neutral-300">
              <li>
                <Link
                  href="/solutions/digital-invoicing"
                  className="transition-all duration-300 hover:text-[#1E9AD8] hover:translate-x-1.5 inline-block"
                >
                  Digital Invoicing
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/vat-registration"
                  className="transition-all duration-300 hover:text-[#1E9AD8] hover:translate-x-1.5 inline-block"
                >
                  VAT Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/fbr-integration"
                  className="transition-all duration-300 hover:text-[#1E9AD8] hover:translate-x-1.5 inline-block"
                >
                  FBR Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/accounting"
                  className="transition-all duration-300 hover:text-[#1E9AD8] hover:translate-x-1.5 inline-block"
                >
                  Accounting
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-foreground/75 dark:text-neutral-300">
              <li>
                <Link
                  href="/company/about"
                  className="transition-all duration-300 hover:text-[#00A266] hover:translate-x-1.5 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/team"
                  className="transition-all duration-300 hover:text-[#00A266] hover:translate-x-1.5 inline-block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-all duration-300 hover:text-[#00A266] hover:translate-x-1.5 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="transition-all duration-300 hover:text-[#00A266] hover:translate-x-1.5 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-foreground/75 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:+923242465217" className="transition-all duration-300 hover:text-[#1E9AD8] hover:translate-x-1 inline-block">
                  +92 324-2465217
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:+923319287869" className="transition-all duration-300 hover:text-[#1E9AD8] hover:translate-x-1 inline-block">
                  +92 331-9287869
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:info@smartinvoicing.pk" className="transition-all duration-300 hover:text-[#1E9AD8] hover:translate-x-1 inline-block">
                  info@smartinvoicing.pk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-red-500" />
                <span>Pakistan</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 border-t pt-8 text-center text-sm transition-colors border-border text-foreground/60 dark:text-neutral-400"
        >
          <p>
            © {currentYear} Smart Invoicing. All rights reserved. | FBR-Compliant Digital Invoicing Solution
          </p>
          <p className="mt-2">
            <span className="text-xs">Authorized Payment Portal for Digital Invoicing in Pakistan</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
