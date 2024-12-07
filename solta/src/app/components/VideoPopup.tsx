'use client'

import { useState, useEffect } from 'react'

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {/* Add muted and playsInline attributes to enable autoplay on most browsers and devices */}
        <video
          src="/video/intro_video.mp4"
          controls
          autoPlay
          muted
          playsInline
          className="w-full max-w-3xl"
        >
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}
