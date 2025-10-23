"use client"
import Image from "next/image"
import { Shield, TrendingUp } from "lucide-react"
import { MediaGallery } from "@/components/media-gallery"
import { AdvancedBidPanel } from "@/components/advanced-bid-panel"
import { AuctionRecommendations } from "@/components/auction-recommendations"

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
  // Mock auction data
  const auction = {
    id: params.id,
    title: "Vintage Oil Painting - Sunset Landscape",
    description:
      "A stunning original oil painting from the 1970s featuring a beautiful sunset landscape. The painting is in excellent condition with vibrant colors and fine brushwork. Perfect for collectors and art enthusiasts.",
    images: ["/oil-painting-sunset.jpg", "/oil-painting-sunset.jpg", "/oil-painting-sunset.jpg"],
    currentPrice: 2500,
    startingPrice: 1000,
    reservePrice: 1500,
    bids: 24,
    seller: {
      name: "Art Collector Pro",
      rating: 4.8,
      sales: 156,
      avatar: "/seller-avatar.png",
    },
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    category: "Art & Collectibles",
    condition: "Excellent",
    dimensions: '24" x 36"',
    year: "1970s",
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Images */}
          <div className="lg:col-span-2">
            <MediaGallery images={auction.images} title={auction.title} />

            {/* Description */}
            <div className="bg-card rounded-lg border border-border p-6 mb-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">About This Item</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">{auction.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Condition</p>
                  <p className="font-semibold">{auction.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Dimensions</p>
                  <p className="font-semibold">{auction.dimensions}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Year</p>
                  <p className="font-semibold">{auction.year}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Category</p>
                  <p className="font-semibold">{auction.category}</p>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-bold mb-4">About the Seller</h2>
              <div className="flex items-center gap-4">
                <Image
                  src={auction.seller.avatar || "/placeholder.svg"}
                  alt={auction.seller.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{auction.seller.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <span className="flex items-center gap-1">
                      <TrendingUp size={16} className="text-primary" />
                      {auction.seller.rating} rating
                    </span>
                    <span>{auction.seller.sales} sales</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-smooth">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>

          {/* Right - Bidding Panel */}
          <div className="lg:col-span-1">
            <AdvancedBidPanel
              auctionId={auction.id}
              currentPrice={auction.currentPrice}
              startingPrice={auction.startingPrice}
              reservePrice={auction.reservePrice}
              bids={auction.bids}
              endTime={auction.endTime}
            />

            {/* Security Info */}
            <div className="bg-card rounded-lg border border-border p-4 flex items-start gap-3 mt-6">
              <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-sm mb-1">Secure Bidding</p>
                <p className="text-xs text-foreground/60">Your payment information is protected with SSL encryption</p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6">
              <AuctionRecommendations currentItem={auction.title} category={auction.category} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
