import { Search, Gavel, Trophy, TrendingUp } from "lucide-react"

const STEPS = [
  {
    icon: Search,
    title: "Browse & Discover",
    description: "Explore thousands of unique items across all categories",
  },
  {
    icon: Gavel,
    title: "Place Your Bid",
    description: "Bid in real-time and compete with other buyers",
  },
  {
    icon: Trophy,
    title: "Win & Checkout",
    description: "Secure your item with our safe payment system",
  },
  {
    icon: TrendingUp,
    title: "Track & Manage",
    description: "Monitor your auctions and manage your collection",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-foreground/60">Simple steps to start bidding</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}

                <div className="relative bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
