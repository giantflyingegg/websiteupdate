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
  createdAt: number;
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
  const [time, setTime] = useState<number>(0);
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const lastNodeIdRef = useRef(0);
  const lastConnectionIdRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const evolutionRef = useRef<NodeJS.Timeout | null>(null);
  const nodesRef = useRef<Node[]>([]);
  
  // Update the ref when nodes change
  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);
  
  // Constants
  const MAX_NODES = 25;
  const EVOLUTION_INTERVAL = 6000; // ms
  const MIN_NODE_DISTANCE = 50;
  const CONNECTION_THRESHOLD = 120;
  const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

  // Generate a unique ID for particles
  const getUniqueParticleId = () => {
    return `particle-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  // Create new node
  const createNode = useCallback((x: number, y: number, color: 'blue' | 'purple') => {
    lastNodeIdRef.current += 1;
    return {
      id: lastNodeIdRef.current,
      x,
      y,
      color,
      size: 1,
      createdAt: Date.now()
    };
  }, []);

  // Create new connection
  const createConnection = useCallback((fromId: number, toId: number) => {
    lastConnectionIdRef.current += 1;
    return {
      id: lastConnectionIdRef.current,
      from: fromId,
      to: toId,
      strength: 1,
      createdAt: Date.now()
    };
  }, []);

  // Create particle effect for a node
  const createNodeParticles = useCallback((x: number, y: number, color: 'blue' | 'purple') => {
    const newParticles: Particle[] = [];
    const particleCount = Math.floor(Math.random() * 5) + 8;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const speed = 0.8 + Math.random() * 1.2;
      
      newParticles.push({
        id: getUniqueParticleId(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        life: 120,
        size: Math.random() * 3.5 + 1.5
      });
    }
    
    setParticles(prevParticles => [...prevParticles, ...newParticles]);
  }, []);

  // Update particles (move them and reduce their life)
  const updateParticles = useCallback(() => {
    setParticles(prevParticles => {
      return prevParticles
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1,
          size: p.size * 0.97
        }))
        .filter(p => p.life > 0);
    });
  }, []);

  // Grow the pattern organically
  const growPattern = useCallback(() => {
    console.log('Growing pattern...');
    if (!containerRef.current) return;
    
    // Use the ref to get the current nodes state
    const currentNodes = nodesRef.current;
    
    // Safety check - ensure we have nodes
    if (currentNodes.length === 0) return;
    
    // Stop if we've reached the maximum
    if (currentNodes.length >= MAX_NODES) {
      console.log('Maximum nodes reached, not growing further');
      return;
    }
    
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    // Add 1-3 nodes at a time for organic growth with randomness
    const nodesToAdd = Math.min(
      Math.floor(Math.random() * 3) + 1,  // 1-3 nodes
      MAX_NODES - currentNodes.length
    );
    
    if (nodesToAdd <= 0) return;
    
    const newNodes: Node[] = [];
    const newConnections: Connection[] = [];
    
    for (let i = 0; i < nodesToAdd; i++) {
      // Choose a random parent node with safety check
      const parentNodeIndex = Math.min(Math.floor(Math.random() * currentNodes.length), currentNodes.length - 1);
      const parentNode = currentNodes[parentNodeIndex];
      
      // Add null check before using parentNode
      if (!parentNode) continue;
      
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
          !currentNodes.some(node => 
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
          currentNodes.forEach(node => {
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
        // If we can't find a position, try again with a different parent
        i--;
      }
    }
    
    // Update state with new nodes and connections
    if (newNodes.length > 0) {
      console.log(`Adding ${newNodes.length} new nodes`);
      setNodes(prevNodes => [...prevNodes, ...newNodes]);
      setConnections(prevConnections => [...prevConnections, ...newConnections]);
    }
  }, [CONNECTION_THRESHOLD, MIN_NODE_DISTANCE, MAX_NODES, createNodeParticles, createNode, createConnection]);

  // Handle evolution system
  const startEvolutionSystem = useCallback(() => {
    console.log('Starting evolution system');
    
    // Clear any existing evolution timer
    if (evolutionRef.current) {
      clearTimeout(evolutionRef.current);
    }
    
    const evolve = () => {
      console.log(`Evolution cycle - Current nodes: ${nodesRef.current.length}/${MAX_NODES}`);
      
      // Only grow if we haven't reached the maximum
      if (nodesRef.current.length < MAX_NODES) {
        growPattern();
        
        // Always use the specified interval
        const nextInterval = EVOLUTION_INTERVAL;
        console.log(`Scheduling next evolution in ${nextInterval/1000} seconds`);
        evolutionRef.current = setTimeout(evolve, nextInterval);
      } else {
        console.log('Maximum nodes reached, stopping evolution');
      }
    };
    
    // Start the first evolution cycle after a short delay
    // This gives time for the component to fully initialize
    evolutionRef.current = setTimeout(evolve, 2000);
    
    // Return cleanup function
    return () => {
      if (evolutionRef.current) {
        clearTimeout(evolutionRef.current);
      }
    };
  }, [growPattern, MAX_NODES, EVOLUTION_INTERVAL]);

  // Handle clicks - make all nodes emit particles
  const handleClick = useCallback(() => {
    console.log('Click handler activated');
    // Make every node emit particles
    nodesRef.current.forEach(node => {
      createNodeParticles(node.x, node.y, node.color);
    });
    
    // Trigger a growth cycle for immediate feedback
    if (nodesRef.current.length < MAX_NODES) {
      growPattern();
    }
  }, [createNodeParticles, growPattern, MAX_NODES]);

  // Main animation loop
  const startAnimationLoop = useCallback(() => {
    const animate = (timestamp: number) => {
      // Update time state to trigger re-renders (this drives all animations)
      setTime(timestamp);
      
      // Update particles
      updateParticles();
      
      // Continue the loop
      rafIdRef.current = requestAnimationFrame(animate);
    };
    
    rafIdRef.current = requestAnimationFrame(animate);
  }, [updateParticles]);

  // Initialize the pattern with a triangle
  useEffect(() => {
    console.log('Initializing pattern');
    
    if (containerRef.current) {
      const container = containerRef.current;
      const { width, height } = container.getBoundingClientRect();
      
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.2;
      const now = Date.now();

      // Create initial triangle pattern
      const initialNodes = [
        {
          id: 1,
          x: centerX,
          y: centerY - radius,
          color: 'blue' as 'blue',
          size: 1,
          createdAt: now
        },
        {
          id: 2,
          x: centerX - radius * Math.cos(Math.PI / 6),
          y: centerY + radius * Math.sin(Math.PI / 6),
          color: 'purple' as 'purple',
          size: 1,
          createdAt: now
        },
        {
          id: 3,
          x: centerX + radius * Math.cos(Math.PI / 6),
          y: centerY + radius * Math.sin(Math.PI / 6),
          color: 'blue' as 'blue',
          size: 1,
          createdAt: now
        },
      ];

      // Connect nodes to form a triangle
      const initialConnections = [
        {
          id: 1,
          from: 1,
          to: 2,
          strength: 1,
          createdAt: now
        },
        {
          id: 2,
          from: 2,
          to: 3,
          strength: 1,
          createdAt: now
        },
        {
          id: 3,
          from: 3,
          to: 1,
          strength: 1,
          createdAt: now
        },
      ];

      console.log('Setting initial nodes and connections');
      
      // Set initial state
      lastNodeIdRef.current = 3;
      lastConnectionIdRef.current = 3;
      setNodes(initialNodes);
      setConnections(initialConnections);
      
      // Start animation loop
      startAnimationLoop();
    }
    
    return () => {
      // Clean up on unmount
      console.log('Cleaning up component');
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (evolutionRef.current) {
        clearTimeout(evolutionRef.current);
      }
    };
  }, [startAnimationLoop]);
  
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
  
  // Start evolution system after initialization - only ONCE
  useEffect(() => {
    // Only run this effect once after initial nodes are set
    const hasInitialNodes = nodes.length > 0;
    if (hasInitialNodes) {
      console.log(`Starting evolution system with ${nodes.length} initial nodes - ONE TIME SETUP`);
      const cleanup = startEvolutionSystem();
      return cleanup;
    }
  }, [startEvolutionSystem, nodes.length]); // Include nodes.length to ensure it runs after nodes are set

  // Calculate node visual style based on age and pulse
  const calculateNodeStyle = useCallback((node: Node) => {
    // Current time for age calculation
    const now = Date.now();
    const age = now - node.createdAt;
    
    // Calculate pulse phase (0 to 1)
    const pulseDuration = 4000; // 4 seconds per cycle
    const pulsePhase = ((now % pulseDuration) / pulseDuration);
    const pulseValue = (Math.sin(pulsePhase * Math.PI * 2) + 1) / 2;
    
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
    const pulseScale = 1 + (pulseValue * 0.2);
    const finalScale = (pulseScale + flashEffect) * ageScale;
    
    // Node dimensions
    const coreRadius = 6 * finalScale * node.size;
    const glowRadius = coreRadius * 2 + (pulseValue * 4);
    
    // Opacity calculation
    let baseOpacity;
    if (age < 500) {
      // Fade in
      baseOpacity = Math.min(0.8, age / 500 * 0.8);
    } else {
      // Normal pulse
      baseOpacity = 0.8 + (pulseValue * 0.2);
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
  }, [time]); // Depend on time to ensure recalculation on each animation frame

  // Calculate connection style
  const calculateConnectionStyle = useCallback((connection: Connection) => {
    const fromNode = nodes.find(n => n.id === connection.from);
    const toNode = nodes.find(n => n.id === connection.to);
    
    if (!fromNode || !toNode) {
      return null;
    }
    
    // Current time for calculations
    const now = Date.now();
    
    // Calculate pulse phase (0 to 1)
    const pulseDuration = 4000; // 4 seconds per cycle
    const pulsePhase = ((now % pulseDuration) / pulseDuration);
    const pulseValue = (Math.sin(pulsePhase * Math.PI * 2) + 1) / 2;
    
    // Connection age calculation
    const connectionAge = now - connection.createdAt;
    const isNewConnection = connectionAge < 1800;
    
    // Connection properties
    const baseWidth = 1.5 * connection.strength;
    const width = baseWidth + (pulseValue * 0.8);
    
    // Opacity with fade-in
    let opacity;
    if (connectionAge < 800) {
      // Fade in gradually
      const baseOpacity = Math.min(0.3, connectionAge / 800 * 0.3) * connection.strength;
      opacity = baseOpacity + (pulseValue * 0.2);
    } else {
      // Regular opacity for established connections
      const baseOpacity = 0.3 * connection.strength;
      opacity = baseOpacity + (pulseValue * 0.2);
    }
    
    // Color based from from node
    let color;
    if (isNewConnection) {
      // Brighter color for new connections
      const brightnessFactor = Math.max(0, 1 - (connectionAge / 1800));
      color = fromNode.color === 'blue' ? 
        `rgba(${96 + 159 * brightnessFactor}, ${165 + 90 * brightnessFactor}, 250, ${opacity})` :
        `rgba(${168 + 87 * brightnessFactor}, ${85 + 170 * brightnessFactor}, 247, ${opacity})`;
    } else {
      // Standard colors for established connections
      color = fromNode.color === 'blue' ? '#60A5FA' : '#A855F7';
    }
    
    return {
      x1: fromNode.x,
      y1: fromNode.y,
      x2: toNode.x,
      y2: toNode.y,
      stroke: color,
      strokeWidth: width,
      strokeOpacity: opacity,
    };
  }, [nodes, time]); // Depend on nodes and time to ensure recalculation

  // Calculate background gradient position based on time
  const backgroundGradient = useCallback(() => {
    const now = Date.now();
    const cycle = 10000; // 10 second cycle
    const phase = (now % cycle) / cycle;
    
    return {
      backgroundImage: `radial-gradient(
        circle at ${50 + Math.sin(phase * Math.PI * 2) * 10}% ${50 + Math.cos(phase * Math.PI * 2) * 10}%, 
        rgba(37, 99, 235, 0.1), 
        rgba(0, 0, 0, 0)
      )`
    };
  }, [time]); // Depend on time to ensure recalculation

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative cursor-pointer"
      onClick={handleClick}
    >
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-20"
        style={backgroundGradient()}
      ></div>
      
      {/* No debug info displayed */}
      
      <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
        {/* Draw connections */}
        {connections.map((connection) => {
          const style = calculateConnectionStyle(connection);
          if (!style) return null;
          
          return (
            <line
              key={`connection-${connection.id}`}
              {...style}
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
            <g key={`node-${node.id}`}>
              {/* Node glow/halo */}
              <circle
                {...style.glow}
              />
              {/* Node core */}
              <circle
                {...style.core}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PulsingPattern;