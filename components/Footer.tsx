'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

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
                <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 transition-all duration-300 border border-blue-500/30 text-blue-500 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] bg-transparent"
              >
                <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 transition-all duration-300 border border-sky-400/30 text-sky-400 hover:text-white hover:bg-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] bg-transparent"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 transition-all duration-300 border border-blue-600/30 text-blue-600 hover:text-white hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.4)] bg-transparent"
              >
                <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
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
