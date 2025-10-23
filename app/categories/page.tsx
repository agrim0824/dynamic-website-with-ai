import { Package, Gem, Palette, Zap, Watch, BookOpen, Music, Home } from "lucide-react"
import Link from "next/link"

const CATEGORIES = [
  {
    name: "Electronics",
    icon: Zap,
    description: "Computers, phones, cameras, and more",
    count: "2,450 items",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Jewelry",
    icon: Gem,
    description: "Rings, necklaces, bracelets, and watches",
    count: "1,890 items",
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "Art & Collectibles",
    icon: Palette,
    description: "Paintings, sculptures, and rare collectibles",
    count: "3,120 items",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Watches",
    icon: Watch,
    description: "Luxury and vintage timepieces",
    count: "890 items",
    color: "from-amber-500 to-amber-600",
  },
  {
    name: "Books & Media",
    icon: BookOpen,
    description: "Rare books, vinyl records, and DVDs",
    count: "1,560 items",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Music",
    icon: Music,
    description: "Instruments and audio equipment",
    count: "890 items",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Home & Garden",
    icon: Home,
    description: "Furniture, decor, and garden items",
    count: "2,340 items",
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "Other",
    icon: Package,
    description: "Everything else",
    count: "5,230 items",
    color: "from-gray-500 to-gray-600",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Browse Categories</h1>
          <p className="text-foreground/60">Explore thousands of items across all categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
                className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-smooth cursor-pointer"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-smooth flex items-center justify-center`}
                >
                  <Icon className="w-16 h-16 text-primary opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">{category.description}</p>
                  <p className="text-sm font-semibold text-primary">{category.count}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
