"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, User, ArrowRight } from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-background font-bold text-xl">B</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Join BidRight</h1>
          <p className="text-foreground/60">Create your account to start bidding</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border mt-1" />
            <span className="text-sm text-foreground/60">
              I agree to the{" "}
              <Link href="#" className="text-primary hover:text-primary/80">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:text-primary/80">
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-smooth flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight size={20} />
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-foreground/60">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-smooth">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
