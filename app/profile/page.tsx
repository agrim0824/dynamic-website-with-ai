"use client"

import { useState } from "react"
import Image from "next/image"
import { Edit2, Heart, Gavel, Award } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("auctions")

  const user = {
    username: "Art Collector Pro",
    email: "collector@example.com",
    avatar: "/seller-avatar.png",
    bio: "Passionate art collector and auction enthusiast",
    rating: 4.8,
    totalSales: 156,
    totalBids: 342,
    memberSince: "January 2022",
  }

  const userAuctions = [
    {
      id: "1",
      title: "Vintage Oil Painting",
      image: "/oil-painting-sunset.jpg",
      status: "active",
      currentPrice: 2500,
      bids: 24,
    },
    {
      id: "2",
      title: 'MacBook Pro 16"',
      image: "/macbook-pro-on-desk.png",
      status: "active",
      currentPrice: 1800,
      bids: 18,
    },
  ]

  const watchlist = [
    {
      id: "3",
      title: "Diamond Ring",
      image: "/sparkling-diamond-ring.png",
      currentPrice: 5200,
      bids: 42,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-card rounded-lg border border-border p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.username}
              width={120}
              height={120}
              className="w-32 h-32 rounded-full"
            />

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold">{user.username}</h1>
                <button className="p-2 hover:bg-border rounded-lg transition-smooth">
                  <Edit2 size={20} className="text-primary" />
                </button>
              </div>

              <p className="text-foreground/70 mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Rating</p>
                  <p className="text-lg font-semibold flex items-center gap-1">
                    <Award size={18} className="text-primary" />
                    {user.rating} / 5.0
                  </p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Total Sales</p>
                  <p className="text-lg font-semibold">{user.totalSales}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Total Bids</p>
                  <p className="text-lg font-semibold">{user.totalBids}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Member Since</p>
                  <p className="text-lg font-semibold">{user.memberSince}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("auctions")}
            className={`px-6 py-4 font-semibold border-b-2 transition-smooth ${
              activeTab === "auctions"
                ? "border-primary text-primary"
                : "border-transparent text-foreground/60 hover:text-foreground"
            }`}
          >
            <Gavel className="inline mr-2" size={20} />
            My Auctions
          </button>
          <button
            onClick={() => setActiveTab("watchlist")}
            className={`px-6 py-4 font-semibold border-b-2 transition-smooth ${
              activeTab === "watchlist"
                ? "border-primary text-primary"
                : "border-transparent text-foreground/60 hover:text-foreground"
            }`}
          >
            <Heart className="inline mr-2" size={20} />
            Watchlist
          </button>
        </div>

        {/* Content */}
        {activeTab === "auctions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userAuctions.map((auction) => (
              <div
                key={auction.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-smooth"
              >
                <Image
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{auction.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${auction.currentPrice}</span>
                    <span className="text-sm text-foreground/60">{auction.bids} bids</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "watchlist" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {watchlist.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-smooth"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${item.currentPrice}</span>
                    <span className="text-sm text-foreground/60">{item.bids} bids</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
