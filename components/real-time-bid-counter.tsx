"use client"

import { useEffect, useState } from "react"
import { TrendingUp } from "lucide-react"

interface RealTimeBidCounterProps {
  initialBids: number
  auctionId: string
}

export function RealTimeBidCounter({ initialBids, auctionId }: RealTimeBidCounterProps) {
  const [bids, setBids] = useState(initialBids)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    // Simulate real-time bid updates
    const interval = setInterval(() => {
      // In a real app, this would connect to a WebSocket or polling endpoint
      if (Math.random() > 0.7) {
        setIsUpdating(true)
        setBids((prev) => prev + 1)
        setTimeout(() => setIsUpdating(false), 500)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [auctionId])

  return (
    <div className={`flex items-center gap-2 transition-all ${isUpdating ? "text-accent scale-110" : ""}`}>
      <TrendingUp size={18} className={isUpdating ? "animate-bounce" : ""} />
      <span className="font-semibold">{bids} bids</span>
    </div>
  )
}
