"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Sparkles } from "lucide-react"

interface AIDescriptionGeneratorProps {
  title: string
  category: string
  condition: string
  onDescriptionGenerated: (description: string) => void
}

export function AIDescriptionGenerator({
  title,
  category,
  condition,
  onDescriptionGenerated,
}: AIDescriptionGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateDescription = async () => {
    if (!title || !category) {
      setError("Please fill in title and category first")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, condition }),
      })

      if (!response.ok) throw new Error("Failed to generate description")

      const data = await response.json()
      onDescriptionGenerated(data.description)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <Button
        type="button"
        onClick={generateDescription}
        disabled={isLoading}
        className="w-full bg-accent hover:bg-accent-dark text-background flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles size={18} />
            Generate with AI
          </>
        )}
      </Button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
