'use client';

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
    // Simple hash function for string
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
      className={`flex items-center justify-center ${className}`}
      style={{ background: bgGradient }}
    >
      <div className="text-white font-bold text-4xl opacity-60">
        {initials}
      </div>
    </div>
  );
}