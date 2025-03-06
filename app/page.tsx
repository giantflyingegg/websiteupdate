import HeroSection from '@/components/home/HeroSection';
import About from '@/components/home/About';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <About />
      </div>
    </div>
  );
}