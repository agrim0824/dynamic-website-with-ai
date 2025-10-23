"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Clock } from "lucide-react"
import { useState } from "react"

interface AuctionCardProps {
  auction: {
    id: string
    title: string
    image: string
    currentPrice: number
    startingPrice: number
    endTime: Date
    bids: number
    category: string
  }
}

export function AuctionCard({ auction }: AuctionCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const timeLeft = Math.max(0, Math.floor((auction.endTime.getTime() - Date.now()) / 1000))
  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)

  return (
    <Link href={`/auctions/${auction.id}`}>
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-smooth cursor-pointer">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-background">
          <Image
            src={auction.image || "/placeholder.svg"}
            alt={auction.title}
            width={300}
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-background text-xs font-semibold rounded-full">
            {auction.category}
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsFavorite(!isFavorite)
            }}
            className="absolute top-3 right-3 p-2 bg-background/80 hover:bg-primary rounded-full transition-smooth"
          >
            <Heart size={18} className={isFavorite ? "fill-primary text-primary" : "text-foreground/60"} />
          </button>

          {/* Time Left Badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-3 py-1 bg-background/80 rounded-full text-xs font-semibold">
            <Clock size={14} className="text-accent" />
            {hours}h {minutes}m
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-smooth">
            {auction.title}
          </h3>

          <div className="space-y-2 mb-4">
            <div>
              <p className="text-xs text-foreground/60 mb-1">Current Bid</p>
              <p className="text-2xl font-bold text-primary">${auction.currentPrice.toLocaleString()}</p>
            </div>
            <p className="text-xs text-foreground/60">Starting: ${auction.startingPrice.toLocaleString()}</p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-foreground/60">{auction.bids} bids</span>
            <span className="text-sm font-semibold text-accent">View Details</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
