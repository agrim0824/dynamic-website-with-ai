"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import Image from "next/image"
import { AIDescriptionGenerator } from "@/components/ai-description-generator"

export default function SellPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    startingPrice: "",
    reservePrice: "",
    duration: "7",
    condition: "good",
  })
  const [images, setImages] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setImages((prev) => [...prev, event.target.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleDescriptionGenerated = (description: string) => {
    setFormData((prev) => ({ ...prev, description }))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Start Selling</h1>
          <p className="text-foreground/60">List your item and reach thousands of buyers</p>
        </div>

        <form className="space-y-8">
          {/* Item Details */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Item Details</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Item Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Be specific and descriptive"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the condition, features, and any defects"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth resize-none"
                />
                <AIDescriptionGenerator
                  title={formData.title}
                  category={formData.category}
                  condition={formData.condition}
                  onDescriptionGenerated={handleDescriptionGenerated}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="art">Art & Collectibles</option>
                    <option value="watches">Watches</option>
                    <option value="books">Books & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Condition</label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                  >
                    <option value="new">New</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Auction Duration</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                  >
                    <option value="1">1 day</option>
                    <option value="3">3 days</option>
                    <option value="7">7 days</option>
                    <option value="10">10 days</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Pricing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Starting Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                  <input
                    type="number"
                    name="startingPrice"
                    value={formData.startingPrice}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Reserve Price (Optional)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                  <input
                    type="number"
                    name="reservePrice"
                    value={formData.reservePrice}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Photos</h2>

            {/* Upload Area */}
            <label className="block mb-6 cursor-pointer">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth">
                <Upload className="w-12 h-12 text-foreground/40 mx-auto mb-3" />
                <p className="font-semibold mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-foreground/60">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>

            {/* Image Preview */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Preview ${index}`}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-error rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      <X size={16} className="text-background" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-smooth"
            >
              List Item
            </button>
            <button
              type="button"
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-primary transition-smooth"
            >
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
