"use client"

import Slideshow from "@/app/components/Slideshow"
import { useLanguage } from "../../LanguageContext"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Us",
      paragraph1:
        "Welcome to the site dedicated to the ERASMUS+ KA2 project \"Following the paths of Ancient Civilizations\". Within the framework of the project, joint cooperation was achieved by Primary School \"Grohote\" from Šolta in the Republic of Croatia and Primary School \"Tvrđava\" from Petrovaradin in the Republic of Serbia.",
      paragraph2:
        " Our goal was to visit sites within our two states where the remains of Ancient Rome are located. In front of you is a digital guide of those locations, information about the places we visited, as well as impressions of our cooperation. We hope you enjoy!",
      slideshowTitle: "Explore Our Photo Gallery",
    },
    sr: {
      title: "O Nama",
      paragraph1:
        "Dobrodošli na sajt posvećen ERASMUS+ KA2 projektu \"Putevima antičkih civilizacija\". U okviru projekta, zajedničku saradnju ostvarile su OŠ \"Grohote\" sa Šolte iz Republike Hrvatske i POŠ \"Tvrđava\" iz Petrovaradinu u Republici Srbiji. ",
      paragraph2:
        "Naš cilj je bio da obiđemo lokacije u okviru naše dve države na kojima se nalaze ostaci Starog Rima. Pred vama je digitalni vodič tih lokacija, informacije o mestima koje smo posetili, kao i utisci o našoj saradnji. Nadamo se da ćete uživati!",
      slideshowTitle: "Istražite našu foto galeriju",
    },
    hr: {
      title: "O Nama",
      paragraph1:
        "Dobrodošli na stranicu posvećenu ERASMUS+ KA2 projektu „Cestama drevnih civilizacija“. U okviru projekta zajedničku suradnju ostvarile su Osnovna škola „Grohote“ sa Šolte u Republici Hrvatskoj i Osnovna škola „Tvrđava“ iz Petrovaradina u Republici Srbiji. ",
      paragraph2:
        "Cilj nam je bio posjetiti lokalitete unutar naše dvije zemlje gdje se nalaze ostaci starog Rima. Pred vama je digitalni vodič tih lokacija, podaci o mjestima koja smo posjetili, kao i dojmovi naše suradnje. Nadamo se da ćete uživati!",
      slideshowTitle: "Istražite našu foto galeriju",
    },
  }


  const topics = [
    { name: "arheoloski_muzej_u_zadru", imageCount: 4 },
    { name: "dioklecijanov_ribnjak", imageCount: 1 },
    { name: "morske_orgulje", imageCount: 2 },
    { name: "pozdrav_suncu", imageCount: 3 },
    { name: "projektna_nedelja_decembar", imageCount: 11 },
    { name: "salona_u_solinu", imageCount: 6 },
    { name: "starine", imageCount: 3 },
  ]

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold mb-4">{content[language].title}</h1>
      <p className="mb-4">{content[language].paragraph1}</p>
      <p className="mb-8">{content[language].paragraph2}</p>
      <h2 className="text-2xl font-bold mb-4">{content[language].slideshowTitle}</h2>
      <Slideshow topics={topics} />
    </div>
  )
}

