import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">B</span>
              </div>
              <span className="gradient-text font-bold text-lg">BidRight</span>
            </div>
            <p className="text-foreground/60 text-sm">Premium auction platform for exclusive items</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/auctions" className="text-foreground/60 hover:text-primary transition-smooth">
                  Browse Auctions
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-foreground/60 hover:text-primary transition-smooth">
                  Start Selling
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-foreground/60 hover:text-primary transition-smooth">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-smooth">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-smooth">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-foreground/60">
                <Mail size={16} /> support@bidright.com
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <Phone size={16} /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <MapPin size={16} /> New York, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">© 2025 BidRight. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-foreground/60 hover:text-primary transition-smooth">
              Privacy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary transition-smooth">
              Terms
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary transition-smooth">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
