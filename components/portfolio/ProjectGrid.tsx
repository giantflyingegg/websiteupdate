'use client';

import { useState } from 'react';
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

export default function ProjectGrid() {
  const [selectedType, setSelectedType] = useState<string>('all');

  // Filter projects based on selected type
  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {projectTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedType === type.id 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Grid of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects found for this filter.</p>
        </div>
      )}
    </div>
  );
}