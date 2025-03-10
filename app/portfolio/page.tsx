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
        {/* Main Portfolio Grid */}
        <ProjectGrid />
      </div>
    </div>
  );
}