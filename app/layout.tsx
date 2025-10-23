import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PerformanceOptimizer } from "@/components/performance-optimizer"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BidRight - Premium Auction Platform",
  description: "Discover and bid on exclusive items in real-time with AI-powered recommendations",
  keywords: "auction, bidding, online marketplace, collectibles, jewelry, art",
  openGraph: {
    title: "BidRight - Premium Auction Platform",
    description: "Discover and bid on exclusive items in real-time",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <PerformanceOptimizer />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
