'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? 'show' : ''}>
        <li className="link"><Link href="/">Home</Link></li>
        <li className="link"><Link href="#about">About Me</Link></li>
        <li className="link"><Link href="#www3ws">WW3WS</Link></li>
        <li className="link"><Link href="#footer">Contact Me</Link></li>
        <li className="link">
          <a href="http://portfolio.giantflyingegg.com" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  )
}
