'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { mapIcons, MapIcon } from './mapData'
import { Play, Pause } from 'lucide-react'

export default function Home() {
  const [activeIcon, setActiveIcon] = useState<MapIcon | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleIconClick = (icon: MapIcon) => {
    setActiveIcon(icon)
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <main className="relative w-full h-screen">
      <Image
        src="/map.jpg"
        alt="Interactive map"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      {mapIcons.map((icon) => (
        <button
          key={icon.id}
          className="absolute w-8 h-8 bg-red-500 rounded-full"
          style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
          onClick={() => handleIconClick(icon)}
        />
      ))}
      {activeIcon && (
        <div className="absolute inset-x-0 bottom-0 p-4 bg-white bg-opacity-90">
          <h2 className="text-xl font-bold mb-2">{activeIcon.title}</h2>
          <p className="mb-4">{activeIcon.description}</p>
          <button
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full"
            onClick={handleAudioToggle}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio
            ref={audioRef}
            src={activeIcon.audioSrc}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}
    </main>
  )
}

