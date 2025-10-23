"use client"

import { AuctionCard } from "@/components/auction-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FEATURED_AUCTIONS = [
  {
    id: "1",
    title: "Vintage Oil Painting - Sunset Landscape",
    image: "/oil-painting-sunset.jpg",
    currentPrice: 2500,
    startingPrice: 1000,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    bids: 24,
    category: "Art & Collectibles",
  },
  {
    id: "2",
    title: 'MacBook Pro 16" M3 Max - Pristine Condition',
    image: "/macbook-pro-on-desk.png",
    currentPrice: 1800,
    startingPrice: 1200,
    endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    bids: 18,
    category: "Electronics",
  },
  {
    id: "3",
    title: "Sparkling Diamond Ring - 2.5 Carat",
    image: "/sparkling-diamond-ring.png",
    currentPrice: 5200,
    startingPrice: 3000,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    bids: 42,
    category: "Jewelry",
  },
]

export function FeaturedAuctions() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Auctions</h2>
            <p className="text-foreground/60">Handpicked items ending soon</p>
          </div>
          <Link
            href="/auctions"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth"
          >
            View All
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_AUCTIONS.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </div>
    </section>
  )
}
