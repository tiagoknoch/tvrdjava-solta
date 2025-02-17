import type React from "react"
import Header from "../components/Header"

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

