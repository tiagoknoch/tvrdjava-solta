"use client"

import Link from "next/link"
import { useLanguage } from "../LanguageContext"

export default function Header() {
  const { language, setLanguage } = useLanguage()

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

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">{titles[language]}</h1>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          {navItems[language].home}
        </Link>
        <Link href="/about" className="text-blue-600 hover:text-blue-800">
          {navItems[language].about}
        </Link>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "sr" | "en" | "hr")}
          className="p-2 border rounded"
        >
          <option value="sr">Serbian</option>
          <option value="en">English</option>
          <option value="hr">Croatian</option>
        </select>
      </nav>
    </header>
  )
}

