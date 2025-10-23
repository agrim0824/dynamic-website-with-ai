"use client"

import { useState } from "react"
import { AuctionCard } from "@/components/auction-card"
import { AdvancedSearch, type SearchFilters } from "@/components/advanced-search"

const MOCK_AUCTIONS = [
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
  {
    id: "4",
    title: "Luxury Watch - Swiss Made",
    image: "/luxury-watch.jpg",
    currentPrice: 3500,
    startingPrice: 2000,
    endTime: new Date(Date.now() + 1.5 * 24 * 60 * 60 * 1000),
    bids: 31,
    category: "Watches",
  },
]

export default function AuctionsPage() {
  const [filteredAuctions, setFilteredAuctions] = useState(MOCK_AUCTIONS)

  const handleSearch = (query: string, filters: SearchFilters) => {
    let results = MOCK_AUCTIONS

    // Text search
    if (query) {
      results = results.filter((auction) => auction.title.toLowerCase().includes(query.toLowerCase()))
    }

    // Category filter
    if (filters.category !== "all") {
      results = results.filter((auction) => auction.category.toLowerCase() === filters.category.toLowerCase())
    }

    // Price range filter
    if (filters.priceMin !== null) {
      results = results.filter((auction) => auction.currentPrice >= filters.priceMin!)
    }
    if (filters.priceMax !== null) {
      results = results.filter((auction) => auction.currentPrice <= filters.priceMax!)
    }

    // Sort
    switch (filters.sortBy) {
      case "ending-soon":
        results.sort((a, b) => a.endTime.getTime() - b.endTime.getTime())
        break
      case "price-low":
        results.sort((a, b) => a.currentPrice - b.currentPrice)
        break
      case "price-high":
        results.sort((a, b) => b.currentPrice - a.currentPrice)
        break
      case "most-bids":
        results.sort((a, b) => b.bids - a.bids)
        break
      default:
        // newest (default order)
        break
    }

    setFilteredAuctions(results)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Auctions</h1>
          <p className="text-foreground/60">Discover and bid on thousands of items</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <AdvancedSearch onSearch={handleSearch} />
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-foreground/60">
          Showing {filteredAuctions.length} of {MOCK_AUCTIONS.length} auctions
        </div>

        {/* Auctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>

        {filteredAuctions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">No auctions found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
