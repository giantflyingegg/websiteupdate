'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const pathname = usePathname()

  // Handle scroll events to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      
      // Determine if scrolling up or down
      const isScrollingDown = currentScrollPos > prevScrollPos
      
      // Set visibility based on scroll direction and minimum scroll threshold
      if (isScrollingDown && currentScrollPos > 70) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      
      // Always show navbar when at the top of the page
      if (currentScrollPos <= 10) {
        setVisible(true)
      }
      
      // Update previous scroll position
      setPrevScrollPos(currentScrollPos)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  // Always show navbar when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      setVisible(true)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false
    return pathname.startsWith(path)
  }

  return (
    <nav 
      className={`fixed w-full bg-gray-800/80 backdrop-blur-sm border-b border-blue-500/20 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Home link */}
          <Link 
            href="/" 
            className="text-2xl text-white hover:text-gray-200 transition-colors"
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
        href="/goals" 
        className={`text-lg ${isActive('/goals') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
      >
        Goals
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