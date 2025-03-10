// app/portfolio/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-24 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md">
        {/* Custom 404 illustration */}
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-gray-800">404</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">404</div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        
        <p className="text-gray-300 mb-8">
          The project you're looking for doesn't exist or has been moved to a different location.
        </p>
        
        <Link 
          href="/portfolio" 
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-transform hover:scale-105"
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
      </div>
    </div>
  );
}