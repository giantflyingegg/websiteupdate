import Navbar from '@/components/Navbar'
import BannerCanvas from '@/components/BannerCanvas'
import About from '@/components/About'
import WWW3WS from '@/components/WWW3WS'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#f2f8fa] min-h-screen">
      <Navbar />
      <BannerCanvas />
      <About />
      <WWW3WS />
      <Footer />
    </main>
  )
}