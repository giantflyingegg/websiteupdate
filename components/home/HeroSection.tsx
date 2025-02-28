'use client'
import { useState, useEffect } from 'react';
import PulsingPattern from '@/components/home/PulsingPattern'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const roles = ['Developer', 'Web3 Enthusiast', 'Former Physician'];

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
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Left section - Text content */}
      <div className={`w-full md:w-1/2 space-y-6 transform transition-all duration-1000 
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-pacifico bg-gradient-to-r from-blue-400 to-purple-500 
                       text-transparent bg-clip-text">
          Kieran Sweetman
        </h1>
        <div className="h-16">
          <p className="text-2xl md:text-3xl text-gray-200 font-roboto">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        <p className="text-gray-300 max-w-lg">
          Explore the intersection of healthcare, Web3, and software development through my journey from medicine to technology.
        </p>
      </div>

      {/* Right section - Pattern visualization */}
      <div className="w-full md:w-1/2 h-64 md:h-96 relative">
        <PulsingPattern />
      </div>
    </div>
  );
};

export default HeroSection;