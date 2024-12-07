'use client'

import Link from 'next/link'
import { useLanguage } from '../LanguageContext'

export default function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">
        {language === 'sr' ? 'Putevima antičkih civilizacija' : 'Paths of Ancient Civilizations'}
      </h1>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          {language === 'sr' ? 'Početna' : 'Home'}
        </Link>
        <Link href="/about" className="text-blue-600 hover:text-blue-800">
          {language === 'sr' ? 'O nama' : 'About Us'}
        </Link>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'sr')}
          className="p-2 border rounded"
        >
          <option value="en">English</option>
          <option value="sr">Serbian</option>
        </select>
      </nav>
    </header>
  )
}

