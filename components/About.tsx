'use client'
import { useEffect, useRef } from 'react'

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
    <section id="about" className="bg-white mx-10 border border-black rounded-[2%]">
      <div className="about-info">
        <h1 className="font-pacifico pt-20 text-center text-4xl mt-0">Kieran Sweetman</h1>
        <p className="fade-in">Hello! My name is Kieran. After a decade in the medical field, working as a physician in the NHS, I decided to transition into the exciting world of technology and innovation. During my final years in medicine, I served as an OPM registrar in a busy east London hospital.</p>
        <p className="fade-in">Currently, I'm about a year into my coding journey. I have completed a full stack bootcamp with Founders and Coders and participated in a few bootcamps through Encode Club. My technical skills include experience with the OpenAI API, JavaScript, Node.js, HTML, CSS, and Solidity. I've also completed the CodeAcademy Python course and have started building using AI models from Hugging Face, as well as tools such as Ollama, CrewAI, Llamafile, and Langchain.</p>
        <p className="fade-in">Since 2017, I've immersed myself in crypto and Web3, becoming an active participant in the Ethereum community and ecosystem. My journey over the past two years has led me to work with influential DAOs and attend various Web3 and culture-centric conferences and events. I am particularly excited about Zero-Knowledge Proofs and have ideas for privacy-minded builds.</p>
        <p className="fade-in">I co-organise the Weekly Web3 Workshop (WW3WS), a meetup that brings enthusiasts together to explore the Web3 space. I've had the opportunity to build and run a full Ethereum node and validator. My interests span across various domains, including DeSci, DAOs, retro game emulation, generative art, and the emerging field of AI/ML. I also enjoy gaming and recently got my Odin2 running and streaming via Moonlight from my rig.</p>
        <p className="fade-in">For 2024, I aim to enhance my developer skills in the aforementioned languages and spend more time on Hugging Face and AI tools. I have experience building simple robotics tools using RaspberryPi, Arduino, and simple electronics components, and I plan to develop further in this area. I also have ideas for swarming drones using Ardupilot that I would like to explore.</p>
        <p className="fade-in">Come and say hi! I'm always happy to talk about technology, particularly when it's related to Web3 and AI. If you fancy diving down the rabbit hole, ask me about AGI or aliens!</p>
      </div>
    </section>
  )
}