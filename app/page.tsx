import BannerCanvas from '@/components/home/BannerCanvas'
import About from '@/components/home/About'

export default function Home() {
  return (
    // pt-16 accounts for fixed navbar height
    <div className="min-h-screen pt-16">
      <BannerCanvas />
      <About />
    </div>
  )
}