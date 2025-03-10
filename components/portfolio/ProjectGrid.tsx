'use client';

import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects, ProjectType } from '@/data/projects';

// All possible project types for filtering
const projectTypes = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'other', label: 'Other' },
];

// Sort projects by completion date (oldest first to show progression)
const sortedProjects = [...projects].sort((a, b) => {
  // Parse dates and compare them
  const dateA = new Date(a.dateCompleted);
  const dateB = new Date(b.dateCompleted);
  return dateA.getTime() - dateB.getTime();
});

export default function ProjectGrid() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected type (maintaining chronological order)
  const filteredProjects = selectedType === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(project => project.type === selectedType);

  // Set up intersection observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the grid comes into view, set visibility true
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={gridRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Title with gradient */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-pacifico text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Projects
      </h1>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {projectTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${selectedType === type.id 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Grid of projects with staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            className={`transform transition-all duration-700 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ 
              transitionDelay: `${150 * (index % 6)}ms` // Staggered animation
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-gray-800/50 rounded-lg border border-gray-700 mt-8">
          <svg 
            className="w-16 h-16 text-gray-600 mx-auto mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
            />
          </svg>
          <p className="text-gray-400 text-lg">No projects found for this filter.</p>
          <p className="text-gray-500 mt-2">Try selecting a different category.</p>
        </div>
      )}

      {/* Progression indicator */}
      {filteredProjects.length > 0 && selectedType === 'all' && (
        <div className="mt-16 text-center">
          <p className="text-gray-400 italic">
            These projects are ordered by completion date to showcase my learning progression from my first build to more complex applications.
          </p>
        </div>
      )}
    </div>
  );
}