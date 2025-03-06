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

  return (
    <AnimatedSectionCard id="web3" title="My Web3 Journey">
      <div className="space-y-4">
        <p className="fade-in text-sm sm:text-base">
          From early DeFi explorer to DAO contributor, my Web3 path spans multiple ecosystems. As an early member of Friends With Benefits (FWB) DAO, I helped shape community governance while serving on their Membership Committee.
        </p>
        
        <p className="fade-in text-sm sm:text-base">
          I was a co-organiser of the Weekly Web3 Workshop (WW3WS) in London, a vibrant community meetup where developers, creators, and curious minds converge to explore the cutting edge of decentralized technology.
        </p>

        <p className="fade-in text-sm sm:text-base">
          My interests extend across generative art NFTs, DeSci initiatives, and Ethereum's evolving infrastructure. I maintain my own Ethereum node and validator, staying hands-on with the technology I advocate for.
        </p>
      </div>
    </AnimatedSectionCard>
  )
}