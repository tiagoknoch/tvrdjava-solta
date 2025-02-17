"use client"

import { useLanguage } from "../../LanguageContext"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Us",
      paragraph1:
        "Welcome to our interactive map project. We are dedicated to showcasing the beautiful locations and rich history of our region.",
      paragraph2:
        "Our team of local historians and tech enthusiasts have come together to create this unique experience for visitors and locals alike.",
    },
    sr: {
      title: "O nama",
      paragraph1:
        "Dobrodošli na naš projekat interaktivne mape. Posvećeni smo prikazivanju prelepih lokacija i bogate istorije našeg regiona.",
      paragraph2:
        "Naš tim lokalnih istoričara i tehnoloških entuzijasta se udružio da stvori ovo jedinstveno iskustvo za posetioce i lokalno stanovništvo.",
    },
    hr: {
      title: "O nama",
      paragraph1:
        "Dobrodošli u naš projekt interaktivne karte. Posvećeni smo prikazivanju prekrasnih lokacija i bogate povijesti naše regije.",
      paragraph2:
        "Naš tim lokalnih povjesničara i tehnoloških entuzijasta udružio se kako bi stvorio ovo jedinstveno iskustvo za posjetitelje i lokalno stanovništvo.",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold mb-4">{content[language].title}</h1>
      <p className="mb-4">{content[language].paragraph1}</p>
      <p>{content[language].paragraph2}</p>
    </div>
  )
}

