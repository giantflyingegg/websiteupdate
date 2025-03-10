'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate badge color based on project type
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'web':
        return 'from-blue-500 to-blue-600';
      case 'blockchain':
        return 'from-purple-500 to-purple-600';
      case 'ai':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div 
      className={`group relative rounded-xl overflow-hidden
                border border-gray-700 bg-gray-800/80 backdrop-blur-sm
                transition-all duration-500 h-full
                ${isHovered 
                  ? 'shadow-lg shadow-blue-500/20 border-blue-500/50 scale-[1.02]' 
                  : 'shadow-md shadow-black/20 hover:shadow-blue-500/10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle background gradient that moves on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${isHovered ? 'animate-drift' : ''}`}
      />

      {/* Project Type Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span 
          className={`text-xs font-medium px-3 py-1 rounded-full
                    bg-gradient-to-r ${getBadgeColor(project.type)}
                    text-white shadow-sm`}
        >
          {project.type}
        </span>
      </div>

      {/* Project Image with zoom effect */}
      <div className="relative h-52 overflow-hidden">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-700
                      ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        ) : (
          <div className="w-full h-full">
            <PlaceholderImage 
              title={project.title}
              projectType={project.type}
            />
          </div>
        )}
        
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>

      {/* Project Content */}
      <div className="p-5 relative z-10">
        <h3 className={`text-xl font-bold mb-2 text-white transition-all duration-300
                      ${isHovered 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
                        : ''}`}>
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1 mb-5">
          {project.skills.slice(0, 3).map((skill) => (
            <span 
              key={skill} 
              className={`text-xs ${isHovered ? 'bg-blue-900/70' : 'bg-gray-700'} 
                        text-gray-300 px-2 py-1 rounded transition-colors duration-300`}
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className={`text-xs ${isHovered ? 'bg-blue-900/70' : 'bg-gray-700'} 
                            text-gray-300 px-2 py-1 rounded transition-colors duration-300`}>
              +{project.skills.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-4">
          <Link 
            href={`/portfolio/${project.id}`}
            className={`relative overflow-hidden group-hover:text-blue-300 text-blue-400 text-sm font-medium transition-colors duration-300 
                       after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 
                       group-hover:after:w-full after:transition-all after:duration-300`}
          >
            View Details →
          </Link>
          
          <div className="flex gap-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="View on GitHub"
              >
                <svg className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="View Live Demo"
              >
                <svg className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}