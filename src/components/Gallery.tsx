"use client"

import { useState } from "react"
import Image from "next/image"
import { VideoPlayer } from "./ui/VideoPlayer"
import { X, ZoomIn, Play } from "lucide-react"

interface MediaItem {
  id: string
  type: "image" | "video"
  src: string
  thumbnail?: string
  poster?: string
  title?: string
  description?: string
}

interface GalleryProps {
  items: MediaItem[]
  className?: string
  columns?: 2 | 3 | 4
  showLightbox?: boolean
}

export function Gallery({ items, className = "", columns = 3, showLightbox = true }: GalleryProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  const openLightbox = (item: MediaItem) => {
    if (showLightbox) {
      setSelectedItem(item)
    }
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            {item.type === "image" ? (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.thumbnail || item.src}
                  alt={item.title || ""}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden">
                <VideoPlayer
                  src={item.src}
                  poster={item.poster || item.thumbnail}
                  className="w-full h-full"
                  controls={false}
                  muted={true}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="p-3 bg-gold-500 text-white rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>
            )}

            {/* Title */}
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-serif text-lg">{item.title}</h3>
                {item.description && (
                  <p className="text-white/80 text-sm">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && showLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gold-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Content */}
            {selectedItem.type === "image" ? (
              <div className="relative max-w-4xl max-h-[80vh]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title || ""}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            ) : (
              <div className="relative max-w-4xl max-h-[80vh]">
                <VideoPlayer
                  src={selectedItem.src}
                  poster={selectedItem.poster}
                  className="w-full max-h-[80vh]"
                  controls={true}
                  muted={false}
                />
              </div>
            )}

            {/* Title and Description */}
            {(selectedItem.title || selectedItem.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                {selectedItem.title && (
                  <h3 className="text-white font-serif text-2xl mb-2">{selectedItem.title}</h3>
                )}
                {selectedItem.description && (
                  <p className="text-white/80">{selectedItem.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
