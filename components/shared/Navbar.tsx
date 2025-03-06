'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  // Handle scroll for auto-hiding navbar
  useEffect(() => {
    const controlNavbar = () => {
      // Don't hide when menu is open
      if (isMenuOpen) {
        setVisible(true)
        return
      }
      
      // For very small amounts of scroll, don't do anything to prevent jumpiness
      if (Math.abs(window.scrollY - lastScrollY) < 10) return
      
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down & past the threshold - hide
        setVisible(false)
      } else {
        // Scrolling up or near top - show
        setVisible(true)
      }
      
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY, isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false
    return pathname.startsWith(path)
  }

  return (
    <nav 
      className={`fixed w-full bg-gray-800/80 backdrop-blur-sm border-b border-blue-500/20 z-50 
                 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Home link - maintaining your preferred styling */}
          <Link 
            href="/" 
            className="text-2xl text-white hover:text-gray-200 transition-colors"
            onClick={closeMenu}
          >
            giantflyingegg.uk
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
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
            <NavLinks isActive={isActive} closeMenu={closeMenu} />
          </div>
        </div>

        {/* Mobile menu with smooth animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-40 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <NavLinks isActive={isActive} closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

// NavLinks component with closeMenu function
function NavLinks({ isActive, closeMenu }: { isActive: (path: string) => boolean, closeMenu: () => void }) {
  return (
    <>
      <Link 
        href="/" 
        className={`text-lg ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link 
        href="/ww3ws" 
        className={`text-lg ${isActive('/ww3ws') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
        onClick={closeMenu}
      >
        Web3
      </Link>
      <Link 
        href="/portfolio" 
        className={`text-lg ${isActive('/portfolio') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
        onClick={closeMenu}
      >
        Portfolio
      </Link>
    </>
  )
}