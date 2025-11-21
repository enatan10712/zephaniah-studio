"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16"
}

export function VideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const aspectRatioClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "9/16": "aspect-[9/16]",
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        containerRef.current.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const handleVideoEnd = () => {
    if (loop) {
      videoRef.current?.play()
    } else {
      setIsPlaying(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative bg-black rounded-lg overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onEnded={handleVideoEnd}
      />

      {/* Custom Controls */}
      {controls && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            {/* Volume Control */}
            <button
              onClick={toggleMute}
              className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}

      {/* Play Button Overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <button
            onClick={togglePlay}
            className="p-4 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors transform hover:scale-105"
          >
            <Play className="w-8 h-8 fill-current" />
          </button>
        </div>
      )}
    </div>
  )
}
