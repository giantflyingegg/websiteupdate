'use client'
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
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

  // Pattern generation
  useEffect(() => {
    const radius = 100;
    const centerX = 200;
    const centerY = 200;
    
    const initialNodes = [
      { id: 1, x: centerX, y: centerY - radius, color: 'blue' },
      { id: 2, x: centerX - radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6), color: 'purple' },
      { id: 3, x: centerX + radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6), color: 'blue' }
    ];

    const initialConnections = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 1 }
    ];

    setNodes(initialNodes);
    setConnections(initialConnections);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 bg-gray-900">
      {/* Left section - Text content */}
      <div className="w-full md:w-1/2 space-y-6">
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
      </div>

      {/* Right section - Pattern visualization */}
      <div className="w-full md:w-1/2 h-96">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          {/* Draw connections */}
          {connections.map((conn, index) => (
            <line
              key={index}
              x1={nodes.find(n => n.id === conn.from)?.x}
              y1={nodes.find(n => n.id === conn.from)?.y}
              x2={nodes.find(n => n.id === conn.to)?.x}
              y2={nodes.find(n => n.id === conn.to)?.y}
              stroke={nodes.find(n => n.id === conn.from)?.color === 'blue' ? '#60A5FA' : '#A855F7'}
              strokeWidth="2"
              strokeOpacity="0.3"
            />
          ))}

          {/* Draw nodes */}
          {nodes.map((node) => (
            <g key={node.id} className="animate-float">
              <circle
                cx={node.x}
                cy={node.y}
                r="12"
                fill={node.color === 'blue' ? '#60A5FA' : '#A855F7'}
                fillOpacity="0.2"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill={node.color === 'blue' ? '#60A5FA' : '#A855F7'}
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;