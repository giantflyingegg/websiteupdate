import React, { ReactNode } from 'react';

interface SectionCardProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionCard = ({ id, title, children }: SectionCardProps) => {
  return (
    <section id={id} className="relative my-20 mx-4 md:mx-10">
      {/* Gradient border effect using pseudo-element */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl 
                    opacity-75 blur group-hover:opacity-100 transition duration-300
                    animate-tilt"></div>
      
      {/* Card content */}
      <div className="relative flex flex-col bg-gray-900 rounded-xl p-8
                    border border-gray-800/50 backdrop-blur-xl
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]
                    transition-all duration-300">
        
        {/* Title with gradient and animation */}
        <h2 className="font-pacifico text-4xl mb-8 pb-4
                     bg-gradient-to-r from-blue-400 to-purple-500 
                     text-transparent bg-clip-text
                     border-b border-blue-500/20">
          {title}
        </h2>

        {/* Content wrapper with standard text styling */}
        <div className="space-y-6 text-gray-300">
          {children}
        </div>
      </div>
    </section>
  );
};

// Example usage with animation wrapper
const AnimatedSectionCard = ({ id, title, children }: SectionCardProps) => {
  return (
    <div className="group perspective-1000">
      <SectionCard id={id} title={title}>
        {children}
      </SectionCard>
    </div>
  );
};

export default AnimatedSectionCard;