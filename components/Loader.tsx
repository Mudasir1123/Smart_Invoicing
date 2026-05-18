'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoaderProps {
  onComplete?: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 7) + 2
      if (n >= 100) {
        n = 100
        clearInterval(id)
        setCount(100)
        setTimeout(() => setDone(true), 350)
        setTimeout(() => {
          setVisible(false)
          onComplete?.()
        }, 1000)
      } else {
        setCount(n)
      }
    }, 38)
    return () => clearInterval(id)
  }, [onComplete])

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: done ? 0 : 1 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #030D1A 0%, #040F1E 100%)' }}
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30,154,216,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30,154,216,0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Glow blobs */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.18, 0.35, 0.18] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: '#1E9AD8', filter: 'blur(130px)' }}
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: '#00A266', filter: 'blur(140px)' }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center gap-10">
          {/* Logo block */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div
              className="w-24 h-24 rounded-[2rem] flex items-center justify-center relative overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #1E9AD8 0%, #00A266 100%)' }}
            >
              {/* Shimmer sweep */}
              <motion.div
                animate={{ x: ['-120%', '220%'] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/3 h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                  transform: 'skewX(-15deg)',
                }}
              />
              <span className="text-4xl font-black text-white relative z-10 tracking-tight">SI</span>
            </div>

            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-[2rem] border-2"
              style={{ borderColor: '#1E9AD8' }}
            />
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
              className="absolute inset-0 rounded-[2rem] border"
              style={{ borderColor: '#00A266' }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <h1 className="text-3xl font-black text-white tracking-tight">Smart Invoicing</h1>
            <p className="mt-2 text-xs text-white/35 uppercase tracking-[0.25em] font-medium">
              FBR-Compliant Platform
            </p>
          </motion.div>

          {/* Percentage counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.span
              className="text-6xl font-black tabular-nums bg-clip-text text-transparent leading-none"
              style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}
            >
              {count}%
            </motion.span>

            {/* Progress track */}
            <div
              className="w-56 h-[3px] rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <div
                className="h-full rounded-full transition-all ease-linear"
                style={{
                  width: `${count}%`,
                  background: 'linear-gradient(90deg, #1E9AD8, #00A266)',
                  transitionDuration: '40ms',
                }}
              />
            </div>

            <p className="text-xs text-white/25 font-medium tracking-widest uppercase">
              {count < 40 ? 'Initializing…' : count < 75 ? 'Loading modules…' : count < 100 ? 'Almost ready…' : 'Welcome!'}
            </p>
          </motion.div>
        </div>

        {/* Exit curtain wipe */}
        {done && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 origin-top"
            style={{ background: 'linear-gradient(135deg, #173B64 0%, #1E9AD8 100%)' }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
