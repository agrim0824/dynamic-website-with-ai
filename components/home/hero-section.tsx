"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card to-background py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-primary">Welcome to Premium Auctions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Bid on <span className="gradient-text">Exclusive Items</span> in Real-Time
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover rare collectibles, luxury goods, and unique treasures. Join thousands of bidders in the world's
              most trusted auction platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auctions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-smooth"
              >
                Start Bidding
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/sell"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-smooth"
              >
                Sell Your Items
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-foreground/60">Active Auctions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100K+</p>
                <p className="text-sm text-foreground/60">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">$50M+</p>
                <p className="text-sm text-foreground/60">Total Traded</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/luxury-watch.jpg"
              alt="Luxury Watch"
              width={500}
              height={500}
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
