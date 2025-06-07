"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "../LanguageContext"
import ReactCountryFlag from "react-country-flag"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const quizDropdownRef = useRef<HTMLDivElement>(null)

  const titles = {
    en: "Paths of Ancient Civilizations",
    sr: "Putevima antičkih civilizacija",
    hr: "Putovima antičkih civilizacija",
  }

  const navItems = {
    en: {
      home: "Home",
      quiz: "Quiz",
      handbook: "Handbook",
      about: "About Us",
      serbiaMap: "Serbia Map",
      croatiaMap: "Croatia Map",
    },
    sr: {
      home: "Početna",
      quiz: "Kviz",
      handbook: "Priručnik",
      about: "O nama",
      serbiaMap: "Mapa Srbije",
      croatiaMap: "Mapa Hrvatske",
    },
    hr: {
      home: "Početna",
      quiz: "Kviz",
      handbook: "Priručnik",
      about: "O nama",
      serbiaMap: "Karta Srbije",
      croatiaMap: "Karta Hrvatske",
    },
  }

  const quizOptions = {
    en: [
      { name: "Paths of Ancient Civilizations", url: "https://wordwall.net/resource/92698810" },
      { name: "Mapping Quiz", url: "https://wordwall.net/resource/93214669" },
    ],
    sr: [
      { name: "Putevima antičkih civilizacija", url: "https://wordwall.net/resource/92664396" },
      { name: "Kviz o mapiranju", url: "https://wordwall.net/resource/93184475" },
    ],
    hr: [
      { name: "Putevima antičkih civilizacija", url: "https://wordwall.net/resource/92698220" },
      { name: "Kviz o mapiranju", url: "https://wordwall.net/resource/93215501" },
    ],
  }

  const languageOptions = [
    { code: "sr", name: "Serbian", countryCode: "RS" },
    { code: "en", name: "English", countryCode: "GB" },
    { code: "hr", name: "Croatian", countryCode: "HR" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
      if (quizDropdownRef.current && !quizDropdownRef.current.contains(event.target as Node)) {
        setIsQuizOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (lang: "sr" | "en" | "hr") => {
    setLanguage(lang)
    setIsLanguageOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 p-4 shadow-md">
      {/* Mobile Header */}
      <div className="md:hidden flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <Link href={`/${language}`} className="hover:opacity-80">
            <h1 className="text-xl font-bold cursor-pointer">{titles[language]}</h1>
          </Link>
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-100"
            >
              <ReactCountryFlag
                countryCode={languageOptions.find((option) => option.code === language)?.countryCode || ""}
                svg
              />
              <span>{languageOptions.find((option) => option.code === language)?.name}</span>
              <ChevronDown size={16} />
            </button>
            {isLanguageOpen && (
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
        </div>
        <div className="flex justify-center space-x-4">
          <Link href={`/${language}/serbia-map`} className="text-blue-600 hover:text-blue-800 font-medium">
            {navItems[language].serbiaMap}
          </Link>
          <span className="text-gray-400">|</span>
          <Link href={`/${language}/croatia-map`} className="text-blue-600 hover:text-blue-800 font-medium">
            {navItems[language].croatiaMap}
          </Link>
        </div>
        <div className="flex justify-between">
          <Link href={`/${language}`} className="text-blue-600 hover:text-blue-800">
            {navItems[language].home}
          </Link>
          <div className="relative" ref={quizDropdownRef}>
            <button
              onClick={() => setIsQuizOpen(!isQuizOpen)}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
            >
              <span>{navItems[language].quiz}</span>
              <ChevronDown size={14} />
            </button>
            {isQuizOpen && (
              <div className="absolute left-0 mt-2 py-2 w-64 bg-white rounded-md shadow-xl z-20">
                {quizOptions[language].map((quiz, index) => (
                  <a
                    key={index}
                    href={quiz.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => setIsQuizOpen(false)}
                  >
                    {quiz.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href={`/mapping.${language}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            {navItems[language].handbook}
          </a>
          <Link href={`/${language}/about`} className="text-blue-600 hover:text-blue-800">
            {navItems[language].about}
          </Link>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center">
        {/* Left section: Home, Quiz, Handbook, About, Language */}
        <div className="flex items-center space-x-6">
          <Link href={`/${language}`} className="text-blue-600 hover:text-blue-800">
            {navItems[language].home}
          </Link>
          <div className="relative" ref={quizDropdownRef}>
            <button
              onClick={() => setIsQuizOpen(!isQuizOpen)}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
            >
              <span>{navItems[language].quiz}</span>
              <ChevronDown size={14} />
            </button>
            {isQuizOpen && (
              <div className="absolute left-0 mt-2 py-2 w-64 bg-white rounded-md shadow-xl z-20">
                {quizOptions[language].map((quiz, index) => (
                  <a
                    key={index}
                    href={quiz.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => setIsQuizOpen(false)}
                  >
                    {quiz.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href={`/mapping.${language}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            {navItems[language].handbook}
          </a>
          <Link href={`/${language}/about`} className="text-blue-600 hover:text-blue-800">
            {navItems[language].about}
          </Link>
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-100"
            >
              <ReactCountryFlag
                countryCode={languageOptions.find((option) => option.code === language)?.countryCode || ""}
                svg
              />
              <span>{languageOptions.find((option) => option.code === language)?.name}</span>
              <ChevronDown size={16} />
            </button>
            {isLanguageOpen && (
              <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
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
        </div>

        {/* Center section: Map Links */}
        <div className="flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <Link href={`/${language}/serbia-map`} className="text-blue-600 hover:text-blue-800 font-medium">
            {navItems[language].serbiaMap}
          </Link>
          <span className="text-gray-400">|</span>
          <Link href={`/${language}/croatia-map`} className="text-blue-600 hover:text-blue-800 font-medium">
            {navItems[language].croatiaMap}
          </Link>
        </div>

        {/* Right section: Title */}
        <Link href={`/${language}`} className="hover:opacity-80">
          <h1 className="text-xl font-bold cursor-pointer">{titles[language]}</h1>
        </Link>
      </div>
    </header>
  )
}
