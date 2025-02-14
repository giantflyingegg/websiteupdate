'use client'
import { useState, useEffect } from 'react';

const AbstractPattern = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  
  // Golden ratio for aesthetic positioning
  const PHI = (1 + Math.sqrt(5)) / 2;
  
  const generateInitialPattern = () => {
    // Calculate base triangle positions using golden ratio
    const radius = 100;
    const centerX = 200;
    const centerY = 200;
    
    // Generate 3 initial nodes in golden ratio positions
    const initialNodes = [
      {
        id: 1,
        x: centerX,
        y: centerY - radius,
        color: 'blue'
      },
      {
        id: 2,
        x: centerX - radius * Math.cos(Math.PI / 6),
        y: centerY + radius * Math.sin(Math.PI / 6),
        color: 'purple'
      },
      {
        id: 3,
        x: centerX + radius * Math.cos(Math.PI / 6),
        y: centerY + radius * Math.sin(Math.PI / 6),
        color: 'blue'
      }
    ];

    // Generate connections between all initial nodes
    const initialConnections = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 1 }
    ];

    setNodes(initialNodes);
    setConnections(initialConnections);
  };

  useEffect(() => {
    generateInitialPattern();
  }, []);

  return (
    <div className="w-full h-96 relative">
      <svg className="w-full h-full">
        {/* Draw connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          
          if (!fromNode || !toNode) return null;
          
          return (
            <line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={fromNode.color === 'blue' ? '#60A5FA' : '#A855F7'}
              strokeWidth="2"
              strokeOpacity="0.3"
              className="transition-all duration-1000"
            />
          );
        })}

        {/* Draw nodes */}
        {nodes.map((node) => (
          <g key={node.id} className="animate-float">
            {/* Node glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill={node.color === 'blue' ? '#60A5FA' : '#A855F7'}
              fillOpacity="0.2"
              className="transition-all duration-1000"
            />
            {/* Node core */}
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={node.color === 'blue' ? '#60A5FA' : '#A855F7'}
              className="transition-all duration-1000"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default AbstractPattern;