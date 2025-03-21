import mapIconsData from "../../public/mapIcons.json"

export interface MapIcon {
  id: string
  x: number
  y: number
  title: {
    en: string
    sr: string
    hr: string
  }
  description: {
    en: string
    sr: string
    hr: string
  }
  audioSrc: string
  iconColor: string
  iconType: "star" | "house" | "number"
  iconContent?: string | number
  country: "serbia" | "croatia"
}

const mapIconsWithTailwindColors: MapIcon[] = mapIconsData.map((icon) => ({
  ...icon,
  iconColor: `bg-${icon.iconColor}-500 hover:bg-${icon.iconColor}-600`,
  iconType: icon.iconType as "star" | "house" | "number",
  country: icon.country as "serbia" | "croatia",
}))

export const mapIcons: MapIcon[] = mapIconsWithTailwindColors

