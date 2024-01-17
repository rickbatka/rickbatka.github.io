import type { Metadata } from 'next'
import { Outfit, Bebas_Neue, Lexend, Merriweather_Sans } from 'next/font/google'
import './globals.css'

const fontFamily = Merriweather_Sans({weight: "400", subsets: ["latin"]}, );

export const metadata: Metadata = {
  title: 'Rick Batka',
  description: 'Portfolio and Resume for Rick Batka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${fontFamily.className} text-white`}>
        {children}
      </body>
    </html>
  )
}
