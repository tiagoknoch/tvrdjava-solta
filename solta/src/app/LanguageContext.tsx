"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"

type Language = "en" | "sr" | "hr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [language, setLanguageState] = useState<Language>("sr")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage) {
      setLanguageState(storedLanguage)
    } else {
      setLanguageState("sr")
      localStorage.setItem("language", "sr")
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    router.refresh()
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

