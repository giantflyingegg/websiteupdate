export type ProjectType = 'web' | 'blockchain' | 'ai' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  image?: string;
  skills: string[];
  skillsNarrative: string;
  github?: string;
  liveUrl?: string;
  detailedDescription: string;
  challenges: {
    challenge: string;
    solution: string;
  }[];
  features: string[];
  dateCompleted: string;
}

// Project data
export const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: 'My personal website built with Next.js, featuring a dark theme and interactive elements.',
    type: 'web',
    image: '/images/projects/personal-website.jpg', // You'll need to add this image
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'SVG Animation'],
    skillsNarrative: 'This project marked my transition from static HTML/CSS to modern React development. I focused on learning component-based architecture and responsive design principles while implementing interactive SVG animations to create a more engaging user experience.',
    github: 'https://github.com/giantflyingegg/personal-website',
    liveUrl: 'https://giantflyingegg.uk',
    detailedDescription: 'My personal website showcases my journey from medicine to technology. Built with Next.js and TypeScript, it features a custom dark theme, interactive visualizations, and responsive design. The site serves as both a portfolio and a platform to share my experiences in Web3, AI, and software development.',
    challenges: [
      {
        challenge: 'Creating responsive, interactive SVG animations that performed well across devices',
        solution: 'Implemented efficient animation using requestAnimationFrame and React hooks, with optimizations for mobile devices'
      },
      {
        challenge: 'Implementing a dark theme with depth and visual interest',
        solution: 'Designed a custom color palette with subtle gradients and glowing effects to create visual hierarchy and depth'
      }
    ],
    features: [
      'Interactive network visualization',
      'Responsive design for all device sizes',
      'Optimized performance with Next.js',
      'Custom animations and transitions',
      'Integration with Cloudflare for hosting'
    ],
    dateCompleted: '2023-12'
  },
  // Add more projects as you develop them
];