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
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg shadow-md border border-white/10">
                <img src="/logo.jpg" alt="Smart Invoicing Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-bold text-foreground">
                Smart Invoicing
              </span>
            </div>
            <p className="text-sm mb-4 text-muted-foreground">
              FBR-compliant digital invoicing solution for Pakistani businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/923242465217"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
              >
                <MessageCircle size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors bg-blue-400 text-white hover:bg-blue-500"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/solutions/digital-invoicing"
                  className="transition hover:text-primary"
                >
                  Digital Invoicing
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/vat-registration"
                  className="transition hover:text-primary"
                >
                  VAT Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/fbr-integration"
                  className="transition hover:text-primary"
                >
                  FBR Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/accounting"
                  className="transition hover:text-primary"
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
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/company/about"
                  className="transition hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/team"
                  className="transition hover:text-primary"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="transition hover:text-primary"
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
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:+923242465217" className="transition hover:text-primary">
                  +92 324-2465217
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:+923319287869" className="transition hover:text-primary">
                  +92 331-9287869
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:info@smartinvoicing.pk" className="transition hover:text-primary">
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
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="mt-12 border-t pt-8 text-center text-sm transition-colors border-border text-muted-foreground"
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
