"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

type Language = "en" | "sr" | "hr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguageState] = useState<Language>("sr")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage) {
      setLanguageState(storedLanguage)
    } else {
      setLanguageState("sr")
      localStorage.setItem("language", "sr")
    }

    // Check if the current path starts with a valid language code
    const pathLang = pathname.split("/")[1] as Language
    if (["en", "sr", "hr"].includes(pathLang)) {
      if (pathLang !== language) {
        setLanguageState(pathLang)
        localStorage.setItem("language", pathLang)
      }
    } else if (pathname !== "/") {
      // If no valid language in URL and not at root, redirect to /sr
      router.push(`/sr${pathname}`)
    }
  }, [pathname, language, router])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)

    // Update the URL to reflect the new language
    const newPathname = "/" + lang + (pathname === "/" ? "" : pathname.substring(pathname.indexOf("/", 1)))
    router.push(newPathname)
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

