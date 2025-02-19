"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type Topic = {
    name: string
    imageCount: number
}

type SlideshowProps = {
    topics: Topic[]
}

export default function Slideshow({ topics }: SlideshowProps) {
    const [currentTopic, setCurrentTopic] = useState<Topic>(topics[0])
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        const newImages = Array.from(
            { length: currentTopic.imageCount },
            (_, i) => `/images/${currentTopic.name}/${i + 1}.jpg`,
        )
        setImages(newImages)
        setCurrentImageIndex(0)
    }, [currentTopic])

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="w-full max-w-3xl mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="topic-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Topic:
                </label>
                <select
                    id="topic-select"
                    value={currentTopic.name}
                    onChange={(e) => setCurrentTopic(topics.find((topic) => topic.name === e.target.value) || topics[0])}
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {topics.map((topic) => (
                        <option key={topic.name} value={topic.name}>
                            {topic.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
                {images.length > 0 && (
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={images[currentImageIndex] || "/placeholder.svg"}
                            alt={`${currentTopic.name} - Image ${currentImageIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    &#10095;
                </button>
            </div>
            <p className="text-center mt-2">
                Image {currentImageIndex + 1} of {images.length}
            </p>
        </div>
    )
}

