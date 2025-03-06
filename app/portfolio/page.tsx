import ProjectGrid from '@/components/portfolio/ProjectGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Kieran Sweetman',
  description: 'Portfolio of projects by Kieran Sweetman - Web development, Solidity, and AI',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-pacifico bg-gradient-to-r from-blue-400 to-purple-500 
                       text-transparent bg-clip-text mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-3xl">
            A collection of my work spanning web development, blockchain, AI, and more. 
            Each project represents different skills and technologies I've been exploring
            on my journey from medicine to tech.
          </p>
        </header>
        
        <ProjectGrid />
      </div>
    </div>
  );
}