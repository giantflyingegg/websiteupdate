import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Sorry, the project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
}