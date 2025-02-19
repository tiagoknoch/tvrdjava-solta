"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "../LanguageContext"
import ReactCountryFlag from "react-country-flag"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const titles = {
    en: "Paths of Ancient Civilizations",
    sr: "Putevima antičkih civilizacija",
    hr: "Putovima antičkih civilizacija",
  }

  const navItems = {
    en: { home: "Home", about: "About Us" },
    sr: { home: "Početna", about: "O nama" },
    hr: { home: "Početna", about: "O nama" },
  }

  const languageOptions = [
    { code: "sr", name: "Serbian", countryCode: "RS" },
    { code: "en", name: "English", countryCode: "GB" },
    { code: "hr", name: "Croatian", countryCode: "HR" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (lang: "sr" | "en" | "hr") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 p-4 flex justify-between items-center shadow-md">
      <Link href={`/${language}`} className="hover:opacity-80">
        <h1 className="text-xl font-bold cursor-pointer">{titles[language]}</h1>
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href={`/${language}`} className="text-blue-600 hover:text-blue-800">
          {navItems[language].home}
        </Link>
        <Link href={`/${language}/about`} className="text-blue-600 hover:text-blue-800">
          {navItems[language].about}
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-100"
          >
            <ReactCountryFlag
              countryCode={languageOptions.find((option) => option.code === language)?.countryCode || ""}
              svg
            />
            <span>{languageOptions.find((option) => option.code === language)?.name}</span>
            <ChevronDown size={16} />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => handleLanguageChange(option.code as "sr" | "en" | "hr")}
                >
                  <ReactCountryFlag countryCode={option.countryCode} svg className="mr-2" />
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

