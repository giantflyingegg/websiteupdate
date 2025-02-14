import HeroSection from '@/components/home/HeroSection'
import About from '@/components/home/About'

export default function Home() {
  return (
    // pt-16 accounts for fixed navbar height
    <div className="min-h-screen pt-16">
      <HeroSection />
      <About />
    </div>
  )
}