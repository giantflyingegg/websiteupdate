'use client'
import { useEffect, useRef } from 'react'
import AnimatedSectionCard from '@/components/shared/AnimatedSectionCard'

export default function Web3() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    })

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach(element => {
      observerRef.current?.observe(element)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  // Define a paragraph style with smaller margins
  const paragraphClass = "fade-in mb-4 last:mb-0"

  return (
    <AnimatedSectionCard id="web3" title="My Web3 Journey">
      <div className="flex flex-col">
        <p className={paragraphClass}>
          From early DeFi explorer to DAO contributor, my Web3 path spans multiple ecosystems. As an early member of Friends With Benefits (FWB) DAO, I helped shape community governance while serving on their Membership Committee.
        </p>
        
        <p className={paragraphClass}>
          My interests extend across generative art NFTs, DeSci initiatives, and Ethereum's evolving infrastructure. I maintain my own Ethereum node and validator, staying hands-on with the technology I advocate for.
        </p>
        
        <p className={paragraphClass}>
          I've been an active participant in the Weekly Web3 Workshop (WW3WS) in London, a vibrant community where developers, creators, and curious minds converge to explore the cutting edge of decentralized technology.
        </p>
      </div>
    </AnimatedSectionCard>
  )
}