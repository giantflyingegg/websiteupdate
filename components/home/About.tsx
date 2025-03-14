'use client'
import { useEffect, useRef } from 'react'
import AnimatedSectionCard from '@/components/shared/AnimatedSectionCard'
import Link from 'next/link'

export default function About() {
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
    <AnimatedSectionCard id="about" title="About me:">
      <div className="space-y-6 sm:space-y-8">
        {/* Background */}
        <div className="fade-in">
          <h3 className="text-lg font-bold text-blue-400 mb-2 sm:mb-3">Background</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            After a decade as an NHS physician, I pivoted to tech, driven by a passion for innovation. 
            My medical background gives me a unique perspective on problem-solving and user-centric design.
          </p>
        </div>

        {/* Technical Journey */}
        <div className="fade-in">
          <h3 className="text-lg font-bold text-blue-400 mb-2 sm:mb-3">Technical Journey</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
            I've completed a full stack bootcamp with Founders and Coders, multiple Encode Club bootcamps including Solidity and AI/ML, 
            and continuously expand my skills in both development and blockchain technologies.
          </p>
          
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Tailwind', 'Solidity', 'Python'].map(skill => (
              <span key={skill} className="bg-gray-800 px-2 py-1 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Simple link to Goals page */}
        <div className="fade-in mt-8 text-center">
          <p className="text-gray-300">
            <Link 
              href="/goals" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              See more about my current goals and direction →
            </Link>
          </p>
        </div>

        {/* Personal Note */}
        <p className="text-gray-400 text-center italic mt-6 sm:mt-8 fade-in text-xs sm:text-sm">
          Let's connect! I'm always happy to chat about Web3, AI, or if you want to jump down the rabbit hole, AGI and non-human intelligences
        </p>
      </div>
    </AnimatedSectionCard>
  )
}