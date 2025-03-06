import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === params.projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.projectId);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
        
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
          {/* Project header */}
          <div className="relative h-64 w-full">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">{project.title}</h1>
              </div>
            )}
            
            {/* Project type badge */}
            <div className="absolute top-4 right-4">
              <span 
                className={`text-sm font-medium px-3 py-1 rounded-full
                          ${project.type === 'web' ? 'bg-blue-500/80' : 
                            project.type === 'blockchain' ? 'bg-purple-500/80' :
                            project.type === 'ai' ? 'bg-green-500/80' : 'bg-gray-500/80'} 
                          text-white`}
              >
                {project.type}
              </span>
            </div>
          </div>
          
          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm font-medium text-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium text-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View Live
                  </a>
                )}
              </div>
            </div>
            
            <div className="border-b border-gray-700 mb-6 pb-6">
              <p className="text-gray-300 mb-4">{project.detailedDescription}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Skills narrative section */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 border border-blue-500/20">
              <h2 className="text-xl font-bold text-white mb-3">Skills Developed</h2>
              <p className="text-gray-300">{project.skillsNarrative}</p>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges and solutions */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-white mb-2">Challenge:</h3>
                    <p className="text-gray-300 mb-3">{item.challenge}</p>
                    <h3 className="font-bold text-white mb-2">Solution:</h3>
                    <p className="text-gray-300">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Project completion date */}
            <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400">
              Project completed: {new Date(project.dateCompleted).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}