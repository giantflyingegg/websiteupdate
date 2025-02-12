'use client'
import { useEffect, useRef } from 'react'
import AnimatedSectionCard from '@/components/shared/AnimatedSectionCard'

export default function WWW3WS() {
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
    <AnimatedSectionCard id="www3ws" title="Weekly Web3 Workshop">
      <p className="fade-in">WW3WS is a weekly meetup dedicated to the Web3 space. Founded in 2022 by James Zaki, a developer with the Ethereum Foundation, our weekly meetups serve as a platform for talented individuals to share innovation, discussion, and exploration.</p>
      
      <p className="fade-in">While our roots lie in the Ethereum ecosystem, we also explore the broader crypto universe, tackling topics that range from the latest technological advancements to the economic, sociological, and philosophical underpinnings of this digital revolution.</p>
      
      <p className="fade-in">Below are two examples of presentations I have given at the workshops:</p>
      
      <div className="presentation-container">
        <div className="slides-container">
          <div className="iframe-wrapper">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vSDLQfKs0tWd6gaWeCq79T68o_ZpgjW1AcjqmfBRpkpojyRNp687v0SIYokEKDhFHyQvuEQDjaaYv2d/embed?start=false&loop=false&delayms=3000"
              frameBorder="0"
              allowFullScreen
              title="Google Slide Presentation 1"
              className="w-full aspect-video rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="slides-container mt-8">
          <div className="iframe-wrapper">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQdSG0Z_7Ql2wGSNU7vOAwxUupGq8oj0ugV90vNnZB-Ho7a9yFOCd7mYtddlcryRj2lwJdFrzdNpcCO/embed?start=false&loop=false&delayms=3000"
              frameBorder="0"
              allowFullScreen
              title="Google Slide Presentation 2"
              className="w-full aspect-video rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </AnimatedSectionCard>
  )
}