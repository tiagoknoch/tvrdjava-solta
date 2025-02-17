import type React from "react"
import Header from "../components/Header"

export default function LangLayout({
  children,
}: {
  children: React.ReactNode,
  params: Promise<{ lang: string }>
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

