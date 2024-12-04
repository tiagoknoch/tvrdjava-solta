'use client'

import { useLanguage } from '../LanguageContext'

export default function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-white bg-opacity-90 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        {language === 'en' ? 'Interactive Map' : 'Interaktivna Mapa'}
      </h1>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'sr')}
        className="p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="sr">Serbian</option>
      </select>
    </header>
  )
}

