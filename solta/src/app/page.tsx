'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { mapIcons, MapIcon as MapIconType } from './mapData'
import { Play, Pause } from 'lucide-react'
import { useLanguage } from './LanguageContext'
import MapIcon from './components/MapIcon'
import VideoPopup from './components/VideoPopup'

export default function Home() {
  const [activeIcon, setActiveIcon] = useState<MapIconType | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { language } = useLanguage()

  const handleIconClick = (icon: MapIconType) => {
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
    <main className="relative w-full min-h-screen pt-20">
      <VideoPopup />
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
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
          onClick={() => handleIconClick(icon)}
        >
          <MapIcon
            color={icon.iconColor}
            type={icon.iconType}
            content={icon.iconContent}
          />
        </button>
      ))}
      {activeIcon && (
        <div className="absolute inset-x-0 bottom-0 p-4 bg-white bg-opacity-90">
          <h2 className="text-xl font-bold mb-2">{activeIcon.title[language]}</h2>
          <p className="mb-4">{activeIcon.description[language]}</p>
          <button
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full"
            onClick={handleAudioToggle}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio
            ref={audioRef}
            src={`/audio/${activeIcon.audioSrc}.${language}.m4a`}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}
    </main>
  )
}

