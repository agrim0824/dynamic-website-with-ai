"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

interface MediaGalleryProps {
  images: string[]
  title: string
}

export function MediaGallery({ images, title }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-96 md:h-[500px] bg-card rounded-lg overflow-hidden border border-border group">
        <Image
          src={images[selectedIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${selectedIndex + 1}`}
          fill
          className="w-full h-full object-cover"
          priority
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-lg opacity-0 group-hover:opacity-100 transition-all"
        >
          <Maximize2 size={20} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 rounded-full text-sm font-semibold">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                selectedIndex === index ? "border-primary" : "border-border hover:border-primary"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
