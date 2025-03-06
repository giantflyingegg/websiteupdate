'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm border-b border-blue-500/20 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Home link */}
          <Link 
            href="/" 
            className="text-2xl font-pacifico bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            giantflyingegg.uk
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              <div className="space-y-2">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLinks isActive={isActive} />
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-3`}>
          <div className="flex flex-col space-y-4">
            <NavLinks isActive={isActive} />
          </div>
        </div>
      </div>
    </nav>
  )
}

// Separate component for nav links to avoid repetition
function NavLinks({ isActive }: { isActive: (path: string) => boolean }) {
  return (
    <>
      <Link 
        href="/" 
        className={`text-lg ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
      >
        Home
      </Link>
      <Link 
        href="/ww3ws" 
        className={`text-lg ${isActive('/ww3ws') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
      >
        Web3
      </Link>
      <Link 
        href="/portfolio" 
        className={`text-lg ${isActive('/portfolio') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
      >
        Portfolio
      </Link>
    </>
  )
}