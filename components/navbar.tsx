"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, Heart, User } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">B</span>
            </div>
            <span className="gradient-text font-bold text-xl hidden sm:inline">BidRight</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/auctions" className="text-foreground/80 hover:text-primary transition-smooth">
              Auctions
            </Link>
            <Link href="/categories" className="text-foreground/80 hover:text-primary transition-smooth">
              Categories
            </Link>
            <Link href="/sell" className="text-foreground/80 hover:text-primary transition-smooth">
              Sell
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-border rounded-lg transition-smooth">
              <Search size={20} className="text-foreground/80" />
            </button>
            <button className="p-2 hover:bg-border rounded-lg transition-smooth">
              <Heart size={20} className="text-foreground/80" />
            </button>
            <Link href="/login" className="p-2 hover:bg-border rounded-lg transition-smooth">
              <User size={20} className="text-foreground/80" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-border rounded-lg transition-smooth"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/auctions" className="block px-4 py-2 text-foreground/80 hover:text-primary">
              Auctions
            </Link>
            <Link href="/categories" className="block px-4 py-2 text-foreground/80 hover:text-primary">
              Categories
            </Link>
            <Link href="/sell" className="block px-4 py-2 text-foreground/80 hover:text-primary">
              Sell
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
