"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-background font-bold text-xl">B</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-foreground/60">Sign in to your BidRight account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border" />
              <span className="text-sm">Remember me</span>
            </label>
            <Link href="#" className="text-sm text-primary hover:text-primary/80 transition-smooth">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-smooth flex items-center justify-center gap-2"
          >
            Sign In
            <ArrowRight size={20} />
          </button>
        </form>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-foreground/60">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="px-4 py-3 bg-card border border-border rounded-lg hover:border-primary transition-smooth font-semibold">
            Google
          </button>
          <button className="px-4 py-3 bg-card border border-border rounded-lg hover:border-primary transition-smooth font-semibold">
            GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-foreground/60">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary hover:text-primary/80 font-semibold transition-smooth">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
