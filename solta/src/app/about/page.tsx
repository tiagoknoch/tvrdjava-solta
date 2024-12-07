'use client'

import { useLanguage } from '../LanguageContext'

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold mb-4">
        {language === 'en' ? 'About Us' : 'O nama'}
      </h1>
      <p className="mb-4">
        {language === 'en' 
          ? 'Welcome to our interactive map project. We are dedicated to showcasing the beautiful locations and rich history of our region.'
          : 'Dobrodošli na naš projekat interaktivne mape. Posvećeni smo prikazivanju prelepih lokacija i bogate istorije našeg regiona.'}
      </p>
      <p>
        {language === 'en'
          ? 'Our team of local historians and tech enthusiasts have come together to create this unique experience for visitors and locals alike.'
          : 'Naš tim lokalnih istoričara i tehnoloških entuzijasta se udružio da stvori ovo jedinstveno iskustvo za posetioce i lokalno stanovništvo.'}
      </p>
    </div>
  )
}

