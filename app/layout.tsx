import React from "react"
import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans', weight: ['400', '500', '600', '700'] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const playfair = { variable: '--font-playfair' }; // Declaring the playfair variable

export const metadata: Metadata = {
  title: 'Reaj Uddin - Meta Ads & Performance Marketing Specialist',
  description: 'Meta Ads specialist helping Bangladeshi businesses scale revenue through research-driven campaigns and performance marketing strategies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
