// components/shared/PlaceholderImage.tsx
import { useMemo } from 'react';

interface PlaceholderImageProps {
  title: string;
  className?: string;
  projectType?: 'web' | 'blockchain' | 'ai' | 'other';
}

export default function PlaceholderImage({ 
  title, 
  className = 'w-full h-full', 
  projectType = 'web' 
}: PlaceholderImageProps) {
  // Generate a consistent background based on project title
  const bgGradient = useMemo(() => {
    // Simple hash function for string to ensure consistent colors for the same title
    const hash = title.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    // Get colors based on project type
    let fromColor, toColor;
    
    switch (projectType) {
      case 'web':
        fromColor = `hsl(210, ${40 + (hash % 30)}%, ${20 + (hash % 15)}%)`;
        toColor = `hsl(220, ${45 + (hash % 30)}%, ${15 + (hash % 15)}%)`;
        break;
      case 'blockchain':
        fromColor = `hsl(270, ${40 + (hash % 30)}%, ${20 + (hash % 15)}%)`;
        toColor = `hsl(280, ${45 + (hash % 30)}%, ${15 + (hash % 15)}%)`;
        break;
      case 'ai':
        fromColor = `hsl(150, ${40 + (hash % 30)}%, ${20 + (hash % 15)}%)`;
        toColor = `hsl(160, ${45 + (hash % 30)}%, ${15 + (hash % 15)}%)`;
        break;
      default:
        fromColor = `hsl(${hash % 360}, ${40 + (hash % 30)}%, ${20 + (hash % 15)}%)`;
        toColor = `hsl(${(hash % 360) + 20}, ${45 + (hash % 30)}%, ${15 + (hash % 15)}%)`;
    }
    
    return `linear-gradient(135deg, ${fromColor}, ${toColor})`;
  }, [title, projectType]);
  
  // Generate appropriate pattern overlay based on project type
  const patternSvg = useMemo(() => {
    switch (projectType) {
      case 'ai':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g fill="white">
              {/* Neural network nodes */}
              <circle cx="20" cy="20" r="3" />
              <circle cx="50" cy="15" r="3" />
              <circle cx="80" cy="20" r="3" />
              <circle cx="15" cy="50" r="3" />
              <circle cx="50" cy="50" r="3" />
              <circle cx="85" cy="50" r="3" />
              <circle cx="20" cy="80" r="3" />
              <circle cx="50" cy="85" r="3" />
              <circle cx="80" cy="80" r="3" />
              
              {/* Connection lines */}
              <line x1="20" y1="20" x2="50" y2="15" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="15" x2="80" y2="20" stroke="white" strokeWidth="0.5" />
              <line x1="15" y1="50" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="85" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="20" y1="80" x2="50" y2="85" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="85" x2="80" y2="80" stroke="white" strokeWidth="0.5" />
              
              <line x1="20" y1="20" x2="15" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="15" y1="50" x2="20" y2="80" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="15" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="85" stroke="white" strokeWidth="0.5" />
              <line x1="80" y1="20" x2="85" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="85" y1="50" x2="80" y2="80" stroke="white" strokeWidth="0.5" />
              
              <line x1="20" y1="20" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="15" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="80" y1="20" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="15" y1="50" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="85" y1="50" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="20" y1="80" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="85" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="80" y1="80" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
            </g>
          </svg>
        );
      case 'blockchain':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g fill="white">
              {/* Blockchain nodes */}
              <rect x="20" y="15" width="10" height="15" rx="2" />
              <rect x="45" y="15" width="10" height="15" rx="2" />
              <rect x="70" y="15" width="10" height="15" rx="2" />
              
              <rect x="20" y="40" width="10" height="15" rx="2" />
              <rect x="45" y="40" width="10" height="15" rx="2" />
              <rect x="70" y="40" width="10" height="15" rx="2" />
              
              <rect x="20" y="65" width="10" height="15" rx="2" />
              <rect x="45" y="65" width="10" height="15" rx="2" />
              <rect x="70" y="65" width="10" height="15" rx="2" />
              
              {/* Connecting lines */}
              <line x1="30" y1="22.5" x2="45" y2="22.5" stroke="white" strokeWidth="1" />
              <line x1="55" y1="22.5" x2="70" y2="22.5" stroke="white" strokeWidth="1" />
              
              <line x1="30" y1="47.5" x2="45" y2="47.5" stroke="white" strokeWidth="1" />
              <line x1="55" y1="47.5" x2="70" y2="47.5" stroke="white" strokeWidth="1" />
              
              <line x1="30" y1="72.5" x2="45" y2="72.5" stroke="white" strokeWidth="1" />
              <line x1="55" y1="72.5" x2="70" y2="72.5" stroke="white" strokeWidth="1" />
              
              <line x1="25" y1="30" x2="25" y2="40" stroke="white" strokeWidth="1" />
              <line x1="50" y1="30" x2="50" y2="40" stroke="white" strokeWidth="1" />
              <line x1="75" y1="30" x2="75" y2="40" stroke="white" strokeWidth="1" />
              
              <line x1="25" y1="55" x2="25" y2="65" stroke="white" strokeWidth="1" />
              <line x1="50" y1="55" x2="50" y2="65" stroke="white" strokeWidth="1" />
              <line x1="75" y1="55" x2="75" y2="65" stroke="white" strokeWidth="1" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  }, [projectType]);
  
  // Get initials from title
  const initials = useMemo(() => {
    return title
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }, [title]);
  
  return (
    <div 
      className={`flex items-center justify-center relative overflow-hidden ${className}`}
      style={{ background: bgGradient }}
    >
      {patternSvg}
      <div className="text-white font-bold text-4xl z-10 opacity-80">
        {initials}
      </div>
    </div>
  );
}