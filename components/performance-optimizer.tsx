"use client"

import { useEffect, useState } from "react"

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    cls: 0,
  })

  useEffect(() => {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // First Contentful Paint
      const paintEntries = performance.getEntriesByType("paint")
      const fcp = paintEntries.find((entry) => entry.name === "first-contentful-paint")
      if (fcp) {
        setMetrics((prev) => ({ ...prev, fcp: Math.round(fcp.startTime) }))
      }

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics((prev) => ({ ...prev, lcp: Math.round(lastEntry.renderTime || lastEntry.loadTime) }))
      })
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })

      // Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics((prev) => ({ ...prev, cls: Math.round(clsValue * 100) / 100 }))
          }
        }
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })

      return () => {
        lcpObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null // This component only tracks metrics, doesn't render anything
}
