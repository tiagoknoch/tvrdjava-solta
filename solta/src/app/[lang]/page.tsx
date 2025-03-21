"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "../LanguageContext"

export default function Home() {
  const router = useRouter()
  const { language } = useLanguage()

  useEffect(() => {
    router.push(`/${language}/serbia-map`)
  }, [language, router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to map...</p>
    </div>
  )
}

