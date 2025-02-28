import HeroSection from '@/components/home/HeroSection';
import About from '@/components/home/About';

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <About />
    </div>
  );
}