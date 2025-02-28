'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';

// Define types for better code organization
interface Node {
  id: number;
  x: number;
  y: number;
  color: 'blue' | 'purple';
  size: number;
  createdAt: number;
}

interface Connection {
  id: number;
  from: number;
  to: number;
  strength: number;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: 'blue' | 'purple';
  life: number;
  size: number;
}

const PulsingPattern = () => {
  // Core state
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [evolutionStage, setEvolutionStage] = useState(0);
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const pulsePhaseRef = useRef(0);
  const lastNodeIdRef = useRef(0);
  const lastConnectionIdRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  
  // Constants
  const MAX_NODES = 25;
  const BASE_EVOLUTION_DELAY = 6000; // ms
  const MIN_NODE_DISTANCE = 50;
  const CONNECTION_THRESHOLD = 120;
  const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

  // Generate unique IDs for particles
  const getUniqueId = () => {
    return `particle-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Initialize the pattern
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const { width, height } = container.getBoundingClientRect();
      
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.2;

      // Create initial triangle
      const initialNodes = [
        createNode(centerX, centerY - radius, 'blue'),
        createNode(
          centerX - radius * Math.cos(Math.PI / 6), 
          centerY + radius * Math.sin(Math.PI / 6), 
          'purple'
        ),
        createNode(
          centerX + radius * Math.cos(Math.PI / 6), 
          centerY + radius * Math.sin(Math.PI / 6), 
          'blue'
        ),
      ];

      const initialConnections = [
        createConnection(1, 2),
        createConnection(2, 3),
        createConnection(3, 1),
      ];

      setNodes(initialNodes);
      setConnections(initialConnections);
      setEvolutionStage(1);
    }
  }, []);

  // Helper function to create a new node
  const createNode = (x: number, y: number, color: 'blue' | 'purple') => {
    lastNodeIdRef.current += 1;
    return {
      id: lastNodeIdRef.current,
      x,
      y,
      color,
      size: 1,
      createdAt: Date.now()
    };
  };

  // Helper function to create a new connection
  const createConnection = (fromId: number, toId: number) => {
    lastConnectionIdRef.current += 1;
    return {
      id: lastConnectionIdRef.current,
      from: fromId,
      to: toId,
      strength: 1,
    };
  };

  // Create particle effects for all nodes when clicked
  const handleClick = useCallback(() => {
    // Make every node emit particles
    nodes.forEach(node => {
      createNodeParticles(node.x, node.y, node.color);
    });
  }, [nodes]);

  // Add click event listener
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('click', handleClick);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', handleClick);
      }
    };
  }, [handleClick]);

  // Handle visibility changes (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Main animation loop
  useEffect(() => {
    let startTime = performance.now();
    const pulseDuration = 4000; // 4 seconds per cycle
    
    const animate = (currentTime: number) => {
      if (!isVisibleRef.current) {
        // Skip animation frames when not visible
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate pulse phase (0 to 1)
      const elapsed = currentTime - startTime;
      const phase = (elapsed % pulseDuration) / pulseDuration;
      const pulseValue = (Math.sin(phase * Math.PI * 2) + 1) / 2;
      
      pulsePhaseRef.current = pulseValue;
      
      // Update particle positions
      updateParticles();
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Create particle effect for a node
  const createNodeParticles = (x: number, y: number, color: 'blue' | 'purple') => {
    setParticles(prevParticles => {
      const newParticles = [];
      const particleCount = Math.floor(Math.random() * 5) + 8;
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const speed = 0.8 + Math.random() * 1.2;
        
        newParticles.push({
          id: getUniqueId(),
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          life: 120,
          size: Math.random() * 3.5 + 1.5
        });
      }
      
      return [...prevParticles, ...newParticles];
    });
  };

  // Update particles
  const updateParticles = () => {
    setParticles(prevParticles => {
      // No automatic particle creation during pulse peaks
      // Only update existing particles
      return prevParticles
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1,
          size: p.size * 0.97 // Shrink over time
        }))
        .filter(p => p.life > 0); // Remove dead particles
    });
  };

  // Evolution system - grow the pattern on a regular schedule
  useEffect(() => {
    if (nodes.length >= MAX_NODES) {
      return; // Stop evolving if max nodes reached
    }
    
    const timer = setTimeout(() => {
      growPattern();
      setEvolutionStage(prev => prev + 1);
    }, BASE_EVOLUTION_DELAY);
    
    return () => clearTimeout(timer);
  }, [evolutionStage, nodes.length]);

  // Grow the pattern organically
  const growPattern = () => {
    if (!containerRef.current || !isVisibleRef.current) return;
    
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    // Add 1-2 nodes at a time
    const nodesToAdd = Math.min(
      Math.floor(Math.random() * 2) + 1,
      MAX_NODES - nodes.length
    );
    
    if (nodesToAdd <= 0) return;
    
    const newNodes = [];
    const newConnections = [];
    
    for (let i = 0; i < nodesToAdd; i++) {
      // Choose a random parent node
      const parentNodeIndex = Math.floor(Math.random() * nodes.length);
      const parentNode = nodes[parentNodeIndex];
      
      let foundPosition = false;
      
      // Try to find a valid position
      for (let attempt = 0; attempt < 10; attempt++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = MIN_NODE_DISTANCE * (1 + Math.random() * GOLDEN_RATIO);
        
        const newX = parentNode.x + Math.cos(angle) * distance;
        const newY = parentNode.y + Math.sin(angle) * distance;
        
        // Check if position is valid
        if (
          newX >= 0 && newX <= width &&
          newY >= 0 && newY <= height &&
          !nodes.some(node => 
            Math.hypot(node.x - newX, node.y - newY) < MIN_NODE_DISTANCE
          )
        ) {
          // Alternate colors
          const color = Math.random() > 0.4 ? 'blue' : 'purple';
          
          const newNode = createNode(newX, newY, color);
          newNodes.push(newNode);
          
          // Create particle effect at birth
          createNodeParticles(newX, newY, color);
          
          // Connect to parent
          newConnections.push(createConnection(parentNode.id, newNode.id));
          
          // Connect to nearby nodes
          nodes.forEach(node => {
            const distance = Math.hypot(node.x - newX, node.y - newY);
            if (
              node.id !== parentNode.id && 
              distance < CONNECTION_THRESHOLD &&
              Math.random() > 0.3
            ) {
              newConnections.push(createConnection(node.id, newNode.id));
            }
          });
          
          foundPosition = true;
          break;
        }
      }
      
      if (!foundPosition) {
        // If we can't find a position, try again with a different parent node
        i--;
      }
    }
    
    setNodes(prevNodes => [...prevNodes, ...newNodes]);
    setConnections(prevConnections => [...prevConnections, ...newConnections]);
  };

  // Calculate node style
  const calculateNodeStyle = useCallback((node: Node) => {
    const pulsePhase = pulsePhaseRef.current;
    const pulseScale = 1 + (pulsePhase * 0.2);
    
    const age = Date.now() - node.createdAt;
    
    // Node growth animation
    let ageScale;
    if (age < 800) {
      // First phase: rapid growth with slight overshoot
      const t = age / 800;
      ageScale = Math.min(1.1, t * (1.1 + Math.sin(t * Math.PI) * 0.2));
    } else if (age < 1800) {
      // Second phase: settle to normal size
      const t = (age - 800) / 1000;
      ageScale = 1.1 - t * 0.1 + Math.sin(t * Math.PI * 2) * 0.05 * (1 - t);
    } else {
      // Final phase: stable size
      ageScale = 1.0;
    }
    
    // Pulse flash effect for new nodes
    const isNewNode = age < 1800;
    const flashEffect = isNewNode ? 
      0.3 * Math.max(0, 1 - (age / 1800)) * (1 + Math.sin(age / 80) * 0.5) : 0;
    
    // Final scale calculation
    const finalScale = (pulseScale + flashEffect) * ageScale;
    
    // Node dimensions
    const coreRadius = 6 * finalScale * node.size;
    const glowRadius = coreRadius * 2 + (pulsePhase * 4);
    
    // Opacity calculation
    let baseOpacity;
    if (age < 500) {
      // Fade in
      baseOpacity = Math.min(0.8, age / 500 * 0.8);
    } else {
      // Normal pulse
      baseOpacity = 0.8 + (pulsePhase * 0.2);
    }
    
    const glowOpacity = 0.2 * baseOpacity;
    
    // Color calculation for new nodes
    let coreColor, glowColor;
    
    if (isNewNode) {
      const newness = Math.max(0, 1 - (age / 1800));
      const entrancePulse = 1 + Math.sin(age / 100) * newness * 0.5;
      
      if (node.color === 'blue') {
        coreColor = `rgba(${96 + 159 * newness * entrancePulse}, ${165 + 90 * newness * entrancePulse}, ${250 + 5 * newness * entrancePulse}, 1)`;
        glowColor = `rgba(${96 + 159 * newness * entrancePulse}, ${165 + 90 * newness * entrancePulse}, ${250 + 5 * newness * entrancePulse}, 0.5)`;
      } else {
        coreColor = `rgba(${168 + 87 * newness * entrancePulse}, ${85 + 170 * newness * entrancePulse}, ${247 + 8 * newness * entrancePulse}, 1)`;
        glowColor = `rgba(${168 + 87 * newness * entrancePulse}, ${85 + 170 * newness * entrancePulse}, ${247 + 8 * newness * entrancePulse}, 0.5)`;
      }
    } else {
      // Standard colors
      coreColor = node.color === 'blue' ? '#60A5FA' : '#A855F7';
      glowColor = node.color === 'blue' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(168, 85, 247, 0.5)';
    }
    
    return {
      core: {
        cx: node.x,
        cy: node.y,
        r: coreRadius,
        fill: coreColor,
        fillOpacity: baseOpacity,
      },
      glow: {
        cx: node.x,
        cy: node.y,
        r: glowRadius,
        fill: glowColor,
        fillOpacity: glowOpacity,
      }
    };
  }, []);

  // Calculate connection style
  const calculateConnectionStyle = useCallback((connection: Connection) => {
    const fromNode = nodes.find(n => n.id === connection.from);
    const toNode = nodes.find(n => n.id === connection.to);
    
    if (!fromNode || !toNode) {
      return null;
    }
    
    const pulsePhase = pulsePhaseRef.current;
    
    // Connection age calculation
    const fromNodeAge = Date.now() - fromNode.createdAt;
    const toNodeAge = Date.now() - toNode.createdAt;
    const connectionAge = Math.min(fromNodeAge, toNodeAge);
    
    // Connection properties
    const baseWidth = 1.5 * connection.strength;
    const width = baseWidth + (pulsePhase * 0.8);
    
    // Opacity with fade-in
    let opacity;
    if (connectionAge < 800) {
      const baseOpacity = Math.min(0.3, connectionAge / 800 * 0.3) * connection.strength;
      opacity = baseOpacity + (pulsePhase * 0.2);
    } else {
      const baseOpacity = 0.3 * connection.strength;
      opacity = baseOpacity + (pulsePhase * 0.2);
    }
    
    // Color based on from node
    const color = fromNode.color === 'blue' ? '#60A5FA' : '#A855F7';
    
    return {
      x1: fromNode.x,
      y1: fromNode.y,
      x2: toNode.x,
      y2: toNode.y,
      stroke: color,
      strokeWidth: width,
      strokeOpacity: opacity,
    };
  }, [nodes]);

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-pointer">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-20"
        style={{
          backgroundImage: `radial-gradient(
            circle at ${50 + Math.sin(pulsePhaseRef.current * Math.PI) * 10}% ${50 + Math.cos(pulsePhaseRef.current * Math.PI) * 10}%, 
            rgba(37, 99, 235, 0.1), 
            rgba(0, 0, 0, 0)
          )`
        }}
      ></div>
      
      <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
        {/* Draw connections */}
        {connections.map((connection) => {
          const style = calculateConnectionStyle(connection);
          if (!style) return null;
          
          return (
            <line
              key={`connection-${connection.id}`}
              {...style}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Draw particles */}
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.color === 'blue' ? '#60A5FA' : '#A855F7'}
            fillOpacity={particle.life / 100}
          />
        ))}

        {/* Draw nodes */}
        {nodes.map((node) => {
          const style = calculateNodeStyle(node);
          
          return (
            <g key={`node-${node.id}`} className="transition-transform duration-300">
              {/* Node glow/halo */}
              <circle
                {...style.glow}
                className="transition-all duration-300"
              />
              {/* Node core */}
              <circle
                {...style.core}
                className="transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PulsingPattern;