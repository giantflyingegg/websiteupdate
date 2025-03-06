import Goals from '@/components/goals/Goals';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goals & Projects | Kieran Sweetman',
  description: 'Current goals, projects, and areas of focus for Kieran Sweetman - Web3, AI/ML, and DeSci initiatives.',
};

export default function GoalsPage() {
  return (
    <div className="w-full overflow-x-hidden px-2 sm:px-4 md:px-6 lg:px-8">
      <Goals />
    </div>
  );
}