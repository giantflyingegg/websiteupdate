import './globals.css'  // This path needs to be updated since we moved the file
import type { Metadata } from 'next'
import { Roboto, Pacifico } from 'next/font/google'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

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
  title: 'Kieran Sweetman',
  description: 'Personal website of Kieran Sweetman - Developer, Web3 Enthusiast, and DeSci Advocate',
  keywords: ['Web3', 'Developer', 'DeSci', 'Ethereum', 'Technology'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${roboto.variable} ${pacifico.variable} 
        min-h-screen bg-gray-900 text-gray-100 
        flex flex-col antialiased`}
      >
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          {/* Page transition wrapper could be added here later */}
          {children}
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  )
}