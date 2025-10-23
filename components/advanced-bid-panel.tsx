"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, TrendingUp, Clock } from "lucide-react"

interface AdvancedBidPanelProps {
  auctionId: string
  currentPrice: number
  startingPrice: number
  reservePrice: number
  bids: number
  endTime: Date
  onBidPlaced?: () => void
}

export function AdvancedBidPanel({
  auctionId,
  currentPrice,
  startingPrice,
  reservePrice,
  bids,
  endTime,
  onBidPlaced,
}: AdvancedBidPanelProps) {
  const [bidAmount, setBidAmount] = useState("")
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState("")
  const [liveBids, setLiveBids] = useState(bids)

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime()
      const end = new Date(endTime).getTime()
      const diff = end - now

      if (diff <= 0) {
        setTimeLeft("Auction Ended")
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [endTime])

  const handlePlaceBid = async () => {
    if (!bidAmount || Number.parseFloat(bidAmount) <= currentPrice) {
      setError("Bid must be higher than current price")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/bids", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          auctionId,
          bidAmount: Number.parseFloat(bidAmount),
        }),
      })

      if (!response.ok) throw new Error("Failed to place bid")

      setLiveBids((prev) => prev + 1)
      setBidAmount("")
      onBidPlaced?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Timer */}
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30 p-6">
        <div className="flex items-center gap-2 mb-4 text-primary">
          <Clock size={20} />
          <span className="font-semibold">Time Remaining</span>
        </div>
        <div className="text-3xl font-bold font-mono">{timeLeft}</div>
      </div>

      {/* Price Info */}
      <div className="bg-card rounded-lg border border-border p-6">
        <p className="text-sm text-foreground/60 mb-2">Current Bid</p>
        <p className="text-4xl font-bold text-primary mb-6">${currentPrice.toLocaleString()}</p>

        <div className="space-y-2 mb-6 pb-6 border-b border-border">
          <div className="flex justify-between text-sm">
            <span className="text-foreground/60">Starting Price</span>
            <span>${startingPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/60">Reserve Price</span>
            <span>${reservePrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm items-center">
            <span className="text-foreground/60 flex items-center gap-1">
              <TrendingUp size={16} className="text-accent" />
              Total Bids
            </span>
            <span className="font-semibold text-accent">{liveBids}</span>
          </div>
        </div>

        {/* Bid Input */}
        <div className="mb-4">
          <label className="text-sm text-foreground/60 mb-2 block">Your Bid</label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
              <input
                type="number"
                placeholder={`Minimum: $${(currentPrice + 1).toLocaleString()}`}
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
          </div>
        </div>

        <Button
          onClick={handlePlaceBid}
          disabled={isLoading}
          className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-smooth mb-3"
        >
          {isLoading ? "Placing Bid..." : "Place Bid"}
        </Button>

        <Button
          onClick={() => setIsFavorite(!isFavorite)}
          variant="outline"
          className={`w-full px-6 py-3 border rounded-lg font-semibold transition-smooth flex items-center justify-center gap-2 ${
            isFavorite ? "bg-primary/10 border-primary text-primary" : "border-border hover:border-primary"
          }`}
        >
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          {isFavorite ? "Saved" : "Save Item"}
        </Button>

        {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  )
}
