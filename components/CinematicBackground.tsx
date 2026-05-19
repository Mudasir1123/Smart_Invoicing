'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function CinematicBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  // Scroll scrubbed parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -800])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 1200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 900])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [15, -45])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-20, 60])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [10, -20])
  
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (

    <div 
      className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden transition-colors duration-500" 
      style={{ 
        background: isDark 
          ? '#030712' 
          : '#FDFDFD' // Pure, high-end clean white 
      }}
    >
      
      {/* Large glowing orbs to give depth (Igloo style extreme colors) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: isDark ? [0.25, 0.35, 0.25] : [0.15, 0.25, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full"
        style={{ 
          background: isDark
            ? 'radial-gradient(circle, rgba(30, 154, 216, 0.18) 0%, rgba(30, 154, 216, 0.05) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(30, 154, 216, 0.1) 0%, rgba(30, 154, 216, 0.02) 40%, transparent 70%)',
        }}
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: isDark ? [0.15, 0.25, 0.15] : [0.05, 0.1, 0.05] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-30%] right-[-10%] w-[80vw] h-[80vw] rounded-full"
        style={{ 
          background: isDark
            ? 'radial-gradient(circle, rgba(0, 162, 102, 0.15) 0%, rgba(0, 162, 102, 0.04) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 162, 102, 0.08) 0%, rgba(0, 162, 102, 0.02) 40%, transparent 70%)',
        }}
      />

      {/* Floating Data UI Elements linked to Scroll (Igloo Parallax style) */}
      
      {/* Element 1: Invoice Card */}
      <motion.div
        style={{ y: y1, rotate: rotate1, x: '10vw', willChange: 'transform' }}
        className={`absolute top-[20vh] w-64 h-80 rounded-[2rem] border p-6 shadow-2xl opacity-60 ${isDark ? 'border-white/5 bg-gray-950/20' : 'border-black/5 bg-white/40'}`}
      >
        <div className="w-12 h-12 rounded-full bg-blue-500/20 mb-6" />
        <div className="space-y-3">
          <div className="h-4 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-4 w-1/2 rounded-full bg-foreground/10" />
          <div className="h-4 w-full rounded-full bg-foreground/5" />
        </div>
        <div className="mt-8 space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-1/3 rounded-full bg-foreground/20" />
            <div className="h-3 w-1/4 rounded-full bg-green-500/40" />
          </div>
          <div className="flex justify-between">
            <div className="h-3 w-1/4 rounded-full bg-foreground/20" />
            <div className="h-3 w-1/3 rounded-full bg-foreground/10" />
          </div>
        </div>
      </motion.div>

      {/* Element 2: Chart Card */}
      <motion.div
        style={{ y: y2, rotate: rotate2, right: '5vw', willChange: 'transform' }}
        className={`absolute top-[10vh] w-80 h-64 rounded-[2rem] border p-6 shadow-2xl opacity-40 ${isDark ? 'border-white/5 bg-gray-950/20' : 'border-black/5 bg-white/40'}`}
      >
        <div className="flex items-end gap-2 h-32 mt-4">
          {[40, 70, 45, 90, 65, 100].map((h, i) => (
            <div key={i} className="flex-1 bg-green-500/30 rounded-t-lg" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="h-5 w-1/3 rounded-full bg-foreground/30" />
          <div className="h-8 w-1/4 rounded-full bg-blue-500/20" />
        </div>
      </motion.div>

      {/* Element 3: Stats Dashboard */}
      <motion.div
        style={{ y: y3, rotate: rotate3, left: '-5vw', willChange: 'transform' }}
        className={`absolute top-[60vh] w-72 h-48 rounded-[2rem] border p-6 shadow-2xl opacity-50 ${isDark ? 'border-white/5 bg-gray-950/20' : 'border-black/5 bg-white/40'}`}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="h-10 w-10 rounded-xl bg-foreground/10" />
          <div className="h-6 w-16 rounded-full bg-green-500/20" />
        </div>
        <div className="h-8 w-1/2 rounded-full bg-foreground/40 mb-3" />
        <div className="h-4 w-3/4 rounded-full bg-foreground/20" />
      </motion.div>

      {/* Element 4: Floating Receipt */}
      <motion.div
        style={{ y: y4, rotate: rotate1, right: '15vw', willChange: 'transform' }}
        className={`absolute top-[70vh] w-56 h-96 rounded-[1.5rem] border p-6 shadow-2xl ${isDark ? 'border-foreground/5 bg-background/40 opacity-30' : 'border-[#1E9AD8]/10 bg-white/95 opacity-90'}`}
      >
        <div className="h-12 w-full rounded-xl bg-foreground/10 mb-6" />
        <div className="space-y-4">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="flex justify-between">
               <div className="h-2 w-1/2 rounded-full bg-foreground/20" />
               <div className="h-2 w-1/4 rounded-full bg-foreground/30" />
             </div>
          ))}
        </div>
        <div className="mt-8 border-t-2 border-dashed border-foreground/20 pt-4 flex justify-between">
          <div className="h-4 w-1/3 rounded-full bg-foreground/40" />
          <div className="h-4 w-1/3 rounded-full bg-foreground/60" />
        </div>
      </motion.div>

      {/* Subtle Noise Texture for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}
