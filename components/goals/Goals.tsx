'use client'
import { useEffect, useRef } from 'react'
import AnimatedSectionCard from '@/components/shared/AnimatedSectionCard'

export default function Goals() {
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
    <div className="pt-20">
      {/* Simple Goals Card - Minimal Content */}
      <AnimatedSectionCard id="goals" title="Goals and Direction">
        <div className="space-y-6">
          {/* Current Focus */}
          <div className="fade-in">
            <h3 className="text-lg font-bold text-blue-400 mb-2 sm:mb-3">Current Focus</h3>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl">
              Since 2017, I've been active in the Ethereum ecosystem, working with DAOs and exploring Zero-Knowledge Proofs. 
              I co-organize Weekly Web3 Workshop (WW3WS) and manage my own Ethereum node and validator. 
              Currently, I'm diving into AI/ML tools like Hugging Face, LlamaFile, and Langchain.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-2">
              After completing a Solidity bootcamp, I'm working on integrating blockchain technology with AI systems. 
              I'm also learning to build simple Arduino projects with the goal of constructing my own drone this year.
            </p>
          </div>

          {/* Projects & Interests */}
          <div className="fade-in">
            <h3 className="text-lg font-bold text-blue-400 mb-2 sm:mb-3">Projects & Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-gray-300 text-base sm:text-lg md:text-xl">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>Web3</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>AI/ML</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>RaspberryPi & Arduino builds</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>ZK and Privacy-focused blockchain</span>
              </div>
            </div>
          </div>


        </div>
      </AnimatedSectionCard>
    </div>
  )
}