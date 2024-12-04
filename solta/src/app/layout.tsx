import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interactive Map',
  description: 'An interactive map with audio descriptions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={inter.className}>{children}</body>
      </LanguageProvider>
    </html>
  )
}

