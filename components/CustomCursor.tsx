'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Add class to hide native cursor
    document.body.classList.add('custom-cursor')

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }

    // Smooth-follow the ring with lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }
    tick()

    // Hover expand effect
    const hoverTargets = 'a, button, [data-cursor-hover]'
    const onEnter = () => ring.classList.add('hovering')
    const onLeave = () => ring.classList.remove('hovering')

    const attachListeners = () => {
      document.querySelectorAll<HTMLElement>(hoverTargets).forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachListeners()

    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      document.body.classList.remove('custom-cursor')
      document.querySelectorAll<HTMLElement>(hoverTargets).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  id="cursor-dot"  />
      <div ref={ringRef} id="cursor-ring" />
    </>
  )
}
