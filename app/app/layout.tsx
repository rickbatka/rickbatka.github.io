import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfitFont = Outfit({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Rick Batka',
  description: 'Resume for Rick Batka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfitFont.className} text-white`}>{children}</body>
    </html>
  )
}
