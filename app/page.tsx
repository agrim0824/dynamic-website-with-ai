import { HeroSection } from "@/components/home/hero-section"
import { FeaturedAuctions } from "@/components/home/featured-auctions"
import { CategoriesPreview } from "@/components/home/categories-preview"
import { HowItWorks } from "@/components/home/how-it-works"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedAuctions />
      <CategoriesPreview />
      <HowItWorks />
    </>
  )
}
