'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Entry wipe — slides down from top */}
        <motion.div
          key={pathname + '-wipe-in'}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[150] origin-top pointer-events-none"
          style={{ background: 'linear-gradient(160deg, #173B64 0%, #1E9AD8 50%, #00A266 100%)' }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
