"use client"

import { useState } from "react"
import Image from "next/image"
import { mapIcons, type MapIcon as MapIconType } from "../mapData"
import { Play, Pause } from "lucide-react"
import { useLanguage } from "../LanguageContext"
import MapIcon from "./MapIcon"

type MapSelectorProps = {
    country: "serbia" | "croatia"
}

export default function MapSelector({ country }: MapSelectorProps) {
    const [activeIcon, setActiveIcon] = useState<MapIconType | null>(null)
    const audioRef = useState<HTMLAudioElement | null>(null)[0]
    const [isPlaying, setIsPlaying] = useState(false)
    const { language } = useLanguage()

    // Filter icons based on the selected country
    const filteredIcons = mapIcons.filter((icon) => icon.country === country)

    const handleIconClick = (icon: MapIconType) => {
        setActiveIcon(icon)
        setIsPlaying(false)
        if (audioRef) {
            audioRef.pause()
            audioRef.currentTime = 0
        }
    }

    const handleAudioToggle = () => {
        if (audioRef) {
            if (isPlaying) {
                audioRef.pause()
            } else {
                audioRef.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    // Use the correct file extension based on the country
    const mapImageSrc = country === "serbia" ? "/maps/serbia-map.svg" : "/maps/croatia-map.jpg"

    // Determine the appropriate object-fit style based on the image type
    const objectFitStyle = country === "serbia" ? { objectFit: "contain" as const } : { objectFit: "cover" as const }

    return (
        <main className="relative w-full min-h-screen pt-20">
            <Image
                src={mapImageSrc || "/placeholder.svg"}
                alt={`${country} interactive map`}
                fill
                style={objectFitStyle}
                priority
            />
            {filteredIcons.map((icon) => (
                <button
                    key={icon.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
                    onClick={() => handleIconClick(icon)}
                >
                    <MapIcon color={icon.iconColor} type={icon.iconType} content={icon.iconContent} />
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

