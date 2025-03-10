// app/portfolio/page.tsx
import ProjectGrid from '@/components/portfolio/ProjectGrid';

export const metadata = {
  title: 'Portfolio | Kieran Sweetman',
  description: 'View my portfolio of web development, blockchain, and AI projects.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-pacifico mb-6 
                       bg-gradient-to-r from-blue-400 to-purple-500 
                       text-transparent bg-clip-text">
            My Portfolio
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mx-auto">
            A collection of my projects spanning web development, blockchain applications, 
            and AI experiments. Each project represents a step in my journey from medicine to technology.
          </p>
        </div>
        
        {/* Main Portfolio Grid */}
        <ProjectGrid />
      </div>
    </div>
  );
}