"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvancedSearchProps {
  onSearch: (query: string, filters: SearchFilters) => void
}

export interface SearchFilters {
  category: string
  priceMin: number | null
  priceMax: number | null
  condition: string
  sortBy: string
}

export function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [query, setQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    category: "all",
    priceMin: null,
    priceMax: null,
    condition: "all",
    sortBy: "newest",
  })

  const handleSearch = () => {
    onSearch(query, filters)
  }

  const resetFilters = () => {
    setFilters({
      category: "all",
      priceMin: null,
      priceMax: null,
      condition: "all",
      sortBy: "newest",
    })
    setQuery("")
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
          <input
            type="text"
            placeholder="Search auctions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
          />
        </div>
        <Button onClick={handleSearch} className="bg-primary hover:bg-primary-dark">
          Search
        </Button>
        <Button
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          className="border-border hover:border-primary"
        >
          <Filter size={20} />
        </Button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Filters</h3>
            <button onClick={resetFilters} className="text-sm text-primary hover:underline flex items-center gap-1">
              <X size={16} />
              Reset
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
                <option value="art">Art & Collectibles</option>
                <option value="watches">Watches</option>
              </select>
            </div>

            {/* Condition */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Condition</label>
              <select
                value={filters.condition}
                onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="all">All Conditions</option>
                <option value="new">New</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Min Price</label>
              <input
                type="number"
                placeholder="$0"
                value={filters.priceMin || ""}
                onChange={(e) =>
                  setFilters({ ...filters, priceMin: e.target.value ? Number.parseInt(e.target.value) : null })
                }
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Max Price</label>
              <input
                type="number"
                placeholder="$10000"
                value={filters.priceMax || ""}
                onChange={(e) =>
                  setFilters({ ...filters, priceMax: e.target.value ? Number.parseInt(e.target.value) : null })
                }
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Sort */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold mb-2 block">Sort By</label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="newest">Newest</option>
                <option value="ending-soon">Ending Soon</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="most-bids">Most Bids</option>
              </select>
            </div>
          </div>

          <Button onClick={handleSearch} className="w-full bg-primary hover:bg-primary-dark">
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  )
}
