"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

interface Recommendation {
  title: string
  reason: string
}

interface AuctionRecommendationsProps {
  currentItem: string
  category: string
}

export function AuctionRecommendations({ currentItem, category }: AuctionRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("/api/get-recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentItem, category }),
        })

        if (response.ok) {
          const data = await response.json()
          setRecommendations(data.recommendations || [])
        }
      } catch (error) {
        console.error("Failed to fetch recommendations:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecommendations()
  }, [currentItem, category])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin text-primary" size={24} />
      </div>
    )
  }

  if (recommendations.length === 0) {
    return null
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="text-accent">✨</span>
        Recommended for You
      </h3>
      <div className="space-y-3">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="p-3 bg-background rounded-lg border border-border/50 hover:border-primary transition-smooth"
          >
            <p className="font-semibold text-sm mb-1">{rec.title}</p>
            <p className="text-xs text-foreground/60">{rec.reason}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
