import Link from "next/link"
import { Package, Gem, Palette, Zap, Watch, BookOpen } from "lucide-react"

const CATEGORIES = [
  { name: "Electronics", icon: Zap, count: "2,450" },
  { name: "Jewelry", icon: Gem, count: "1,890" },
  { name: "Art & Collectibles", icon: Palette, count: "3,120" },
  { name: "Watches", icon: Watch, count: "890" },
  { name: "Books & Media", icon: BookOpen, count: "1,560" },
  { name: "Other", icon: Package, count: "5,230" },
]

export function CategoriesPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">Browse Categories</h2>
          <p className="text-foreground/60">Explore thousands of items across all categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
                className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-smooth cursor-pointer"
              >
                <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-smooth" />
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-foreground/60">{category.count} items</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
