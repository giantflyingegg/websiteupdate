import type { Metadata } from 'next'
import { Roboto, Pacifico } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: 'Kieran Sweetman homepage',
  description: 'Personal website of Kieran Sweetman - Developer, Web3 Enthusiast, and DeSci Advocate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  )
}