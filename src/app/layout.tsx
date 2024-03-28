import * as React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from './header'
import Footer from './footer'

const inter = Nunito_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hallucination Guys Blog',
  description:
    'Awesome blog talk about technical software engineering and architecture',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-32x32.png',
        href: '/favicon/favicon-32x32.png',
      },
      {
        url: '/favicon/favicon-16x16.png',
        href: '/favicon/favicon-16x16.png',
      },
      {
        url: '/favicon/apple-touch-icon.png',
        href: '/favicon/apple-touch-icon.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
