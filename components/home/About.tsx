'use client'
import { useEffect, useRef } from 'react'
import AnimatedSectionCard from '@/components/shared/AnimatedSectionCard'

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
      <div className="space-y-8">
        {/* Background */}
        <div className="fade-in">
          <h3 className="text-xl font-bold text-blue-400 mb-3">Background</h3>
          <p className="text-gray-300">
            After a decade as an NHS physician, I pivoted to tech, driven by a passion for innovation. 
            My medical background gives me a unique perspective on problem-solving and user-centric design.
          </p>
        </div>

        {/* Technical Journey */}
        <div className="fade-in">
          <h3 className="text-lg font-bold text-blue-400 mb-3">Technical Journey</h3>
          <p className="text-gray-300 mb-4">
            I've completed a full stack bootcamp with Founders and Coders, multiple Encode Club bootcamps including Solidity and AI/ML, 
            and continuously expand my skills in both development and blockchain technologies.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Tailwind', 'Solidity', 'Python'].map(skill => (
              <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="fade-in">
          <h3 className="text-lg font-bold text-blue-400 mb-3">Current Focus</h3>
          <p className="text-gray-300">
            Since 2017, I've been active in the Ethereum ecosystem, working with DAOs and exploring Zero-Knowledge Proofs. 
            I co-organize Weekly Web3 Workshop (WW3WS) and manage my own Ethereum node and validator. 
            Currently, I'm diving into AI/ML tools like Hugging Face, LlamaFile, and Langchain.
          </p>
        </div>

        {/* Projects & Interests */}
        <div className="fade-in">
          <h3 className="text-lg font-bold text-blue-400 mb-3">Projects & Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Web3</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>RaspberryPi & Arduino builds</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>ZK and Privacy-focused blockchain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>AI/ML integration</span>
            </div>
          </div>
        </div>

        {/* Personal Note */}
        <p className="text-gray-400 text-center italic mt-8 fade-in">
          Let's connect! I'm always happy to chat about Web3, AI, or if you want to jump down the rabbit hole, AGI and non-human intelligences
        </p>
      </div>
    </AnimatedSectionCard>
  )
}