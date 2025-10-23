"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

interface VideoGalleryProps {
  videos: string[]
  title: string
}

export function VideoGallery({ videos, title }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  if (videos.length === 0) return null

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Product Videos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative h-48 bg-card rounded-lg border border-border overflow-hidden cursor-pointer group"
            onClick={() => setSelectedVideo(video)}
          >
            <video
              src={video}
              className="w-full h-full object-cover"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
              <Play className="w-12 h-12 text-white fill-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <video src={selectedVideo} controls autoPlay className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  )
}
