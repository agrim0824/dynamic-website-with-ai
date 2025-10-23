"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Wand2 } from "lucide-react"
import Image from "next/image"

interface ImageGeneratorProps {
  title: string
  category: string
  description: string
  onImageGenerated: (imageUrl: string) => void
}

export function ImageGenerator({ title, category, description, onImageGenerated }: ImageGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const generateImage = async () => {
    if (!title || !category) {
      setError("Please fill in title and category first")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate-product-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, description }),
      })

      if (!response.ok) throw new Error("Failed to generate image")

      const data = await response.json()
      setGeneratedImage(data.image)
      onImageGenerated(data.image)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button
        type="button"
        onClick={generateImage}
        disabled={isLoading}
        className="w-full bg-accent hover:bg-accent-dark text-background flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Generating Image...
          </>
        ) : (
          <>
            <Wand2 size={18} />
            Generate Product Image with AI
          </>
        )}
      </Button>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {generatedImage && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
          <Image src={generatedImage || "/placeholder.svg"} alt="Generated product" fill className="object-cover" />
        </div>
      )}
    </div>
  )
}
