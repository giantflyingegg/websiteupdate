'use client'
import { useState, useEffect } from 'react';
import PulsingPattern from '@/components/home/PulsingPattern'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const roles = ['AI/ML', 'Web3', 'Medicine'];

  // Typing animation effect
  useEffect(() => {
    const targetText = roles[currentIndex];
    if (displayText.length < targetText.length) {
      const timer = setTimeout(() => {
        setDisplayText(targetText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex]);

  // Fade in effect on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Left section - Text content: centered on mobile, left-aligned with indent on medium+ screens */}
      <div className={`w-full md:w-1/2 space-y-4 md:space-y-6 transform transition-all duration-1000 
                      text-center md:text-left md:pl-8 lg:pl-16 xl:pl-24
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-pacifico bg-gradient-to-r from-blue-400 to-purple-500 
                       text-transparent bg-clip-text pt-0">
            Kieran Sweetman
          </h1>
          
          <div className="h-12 sm:h-16 mt-2">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-roboto">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right section - Pattern visualization: full width on mobile, half width on medium+ screens */}
      <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-96 relative mt-8 md:mt-0">
        <PulsingPattern />
      </div>
    </div>
  );
};

export default HeroSection;