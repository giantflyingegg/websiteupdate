// app/portfolio/[projectId]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

// Generate metadata for each project page
export function generateMetadata({ params }: { params: { projectId: string } }) {
  const project = projects.find(p => p.id === params.projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }
  
  return {
    title: `${project.title} | Kieran Sweetman's Portfolio`,
    description: project.description,
  };
}

// In Next.js App Router, we use the direct component params type
export default function ProjectPage({ params }: { params: { projectId: string } }) {
  const { projectId } = params;
  
  // Find the project by ID
  const project = projects.find(p => p.id === projectId);
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', { 
      year: 'numeric', 
      month: 'long'
    }).format(date);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link 
          href="/portfolio" 
          className="inline-flex items-center mb-6 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </Link>
        
        {/* Project Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project image */}
            <div className="lg:col-span-1">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full">
                    <PlaceholderImage
                      title={project.title}
                      projectType={project.type}
                    />
                  </div>
                )}
              </div>
              
              {/* Project type badge */}
              <div className="mt-4 flex items-center">
                <span className="text-sm text-gray-400 mr-2">Project Type:</span>
                <span className={`
                  text-sm px-3 py-1 rounded-full 
                  ${
                    project.type === 'web' ? 'bg-blue-500/80' : 
                    project.type === 'blockchain' ? 'bg-purple-500/80' :
                    project.type === 'ai' ? 'bg-green-500/80' : 'bg-gray-500/80'
                  } 
                  text-white`}
                >
                  {project.type}
                </span>
              </div>
              
              {/* Completion date */}
              <div className="mt-2">
                <span className="text-sm text-gray-400">Completed:</span>{' '}
                <span className="text-sm text-gray-300">{formatDate(project.dateCompleted)}</span>
              </div>
              
              {/* External links */}
              <div className="mt-6 space-y-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
            
            {/* Project details */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {project.title}
              </h1>
              
              <p className="text-gray-300 text-lg mb-6">
                {project.description}
              </p>
              
              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 text-blue-400">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Skills narrative */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 text-blue-400">Skills Developed</h2>
                <p className="text-gray-300">{project.skillsNarrative}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed description */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">About this Project</h2>
          <div className="text-gray-300 leading-relaxed">
            <p className="mb-4">{project.detailedDescription}</p>
          </div>
        </div>
        
        {/* Features */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Key Features</h2>
          <ul className="space-y-2 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Challenges & Solutions */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Challenges & Solutions</h2>
          <div className="space-y-6">
            {project.challenges.map((item, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  <span className="text-blue-400 mr-2">Challenge {index + 1}:</span> 
                  {item.challenge}
                </h3>
                <div className="pl-6 border-l-2 border-blue-400/30 text-gray-300">
                  <p className="italic">Solution:</p>
                  <p>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}