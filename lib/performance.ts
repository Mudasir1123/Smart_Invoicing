// Performance monitoring utilities
export function logPerformanceMetrics() {
  if (typeof window === 'undefined') return

  window.addEventListener('load', () => {
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    const connectTime = perfData.responseEnd - perfData.requestStart
    const renderTime = perfData.domComplete - perfData.domLoading
    const redirectTime = perfData.redirectEnd - perfData.redirectStart

    console.log('Performance Metrics:')
    console.log(`Page Load Time: ${pageLoadTime}ms`)
    console.log(`Connect Time: ${connectTime}ms`)
    console.log(`Render Time: ${renderTime}ms`)
    console.log(`Redirect Time: ${redirectTime}ms`)

    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log(`${entry.name}: ${entry.value}ms`)
          }
        })
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })
      } catch (e) {
        // Silently handle if API is not available
      }
    }
  })
}

// Mobile performance detection
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

// Reduce motion preference
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Request animation frame with fallback
export function requestFrame(callback: FrameRequestCallback): number {
  return requestAnimationFrame(callback)
}

// Cancel animation frame with safety check
export function cancelFrame(id: number): void {
  cancelAnimationFrame(id)
}
