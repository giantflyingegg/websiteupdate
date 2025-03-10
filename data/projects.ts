// data/projects.ts
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

// Project data - ordered by progression timeline
export const projects: Project[] = [
  {
    id: 'counter',
    title: 'Interactive Counter',
    description: 'My first build! A simple yet elegant counter application with smooth animations and customizable themes.',
    type: 'web',
    image: '/images/projects/counter.jpg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    skillsNarrative: 'This was my first build! I saw this project on YouTube but wanted to see if I could build it myself to practice DOM manipulation. This project helped me understand the basics of JavaScript event handling and dynamic content updates.',
    github: 'https://github.com/giantflyingegg/Counter.git',
    liveUrl: 'https://giantflyingegg.uk/projects/counter/',
    detailedDescription: 'The Counter App was my introduction to JavaScript DOM manipulation. It features a clean interface with increment and decrement buttons, a reset function, and a visually appealing design that I created from scratch. While simple in concept, building this app helped establish fundamental coding practices that I continue to use.',
    challenges: [
      {
        challenge: 'Understanding event listeners and DOM manipulation',
        solution: 'I studied JavaScript documentation and practiced implementing different event types to create a responsive interface'
      },
      {
        challenge: 'Creating a visually appealing UI with minimal experience',
        solution: 'Applied basic design principles and iterated on the UI multiple times until I achieved a clean, intuitive interface'
      }
    ],
    features: [
      'Increment and decrement functionality',
      'Visual feedback on button clicks',
      'Reset button to return to zero',
      'Responsive design that works on all devices',
      'Clean, minimal interface'
    ],
    dateCompleted: '2023-05'
  },
  {
    id: 'calculator',
    title: 'JavaScript Calculator',
    description: 'A fully functional calculator with basic math operations and keyboard support, built to further practice JavaScript logic.',
    type: 'web',
    image: '/images/projects/calculator.jpg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    skillsNarrative: 'I used this project to further practice DOM manipulation as well as more complex JavaScript logic, which I created myself. It helped me understand how to structure an application with multiple functions working together.',
    github: 'https://github.com/giantflyingegg/Calculator.git',
    liveUrl: 'https://giantflyingegg.uk/projects/calculator/',
    detailedDescription: 'The Calculator App expanded on my JavaScript skills by requiring more complex logic and careful state management. I implemented the core arithmetic operations, memory functions, and a dynamic display that updates in real-time. The project taught me about the importance of code organization and handling edge cases.',
    challenges: [
      {
        challenge: 'Creating a reliable calculation engine that handles operations in the correct order',
        solution: 'Researched mathematical precedence rules and implemented a structured parsing approach'
      },
      {
        challenge: 'Managing display state across different operations',
        solution: 'Developed a state management system to track the current input, operation, and result values'
      }
    ],
    features: [
      'Basic arithmetic operations (add, subtract, multiply, divide)',
      'Clear and reset functions',
      'Error handling for invalid operations',
      'Responsive design for all screen sizes',
      'Keyboard input support'
    ],
    dateCompleted: '2023-06'
  },
  {
    id: 'encryption-app',
    title: 'Text Encryption Tool',
    description: 'A text encryption and decryption tool inspired by a CodeWars puzzle, built to practice complex JavaScript logic.',
    type: 'web',
    image: '/images/projects/encryption.jpg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    skillsNarrative: 'I got the idea for this project from a CodeWars puzzle. This was to help me practice more complex JavaScript logic and string manipulation. It was a great way to challenge myself with algorithm implementation.',
    github: 'https://github.com/giantflyingegg/Encryption-app.git',
    liveUrl: 'https://giantflyingegg.uk/projects/encryption-app/',
    detailedDescription: 'The Encryption App allows users to encrypt and decrypt text using various algorithms. Inspired by a CodeWars challenge, I expanded the concept into a full application with multiple encryption methods. This project helped me develop a stronger understanding of string manipulation, character encoding, and algorithm implementation.',
    challenges: [
      {
        challenge: 'Implementing encryption algorithms correctly',
        solution: 'Studied encryption principles and carefully tested each algorithm against known inputs and outputs'
      },
      {
        challenge: 'Creating an intuitive interface for encryption operations',
        solution: 'Designed a simple UI that clearly shows the encryption process and allows easy switching between methods'
      }
    ],
    features: [
      'Multiple encryption algorithms',
      'Real-time encryption and decryption',
      'Copy to clipboard functionality',
      'Mobile-friendly interface',
      'Input validation and error handling'
    ],
    dateCompleted: '2023-07'
  },
  {
    id: 'api-practice',
    title: 'API Explorer',
    description: 'An application that demonstrates fetching and displaying UK police crime data from a public API.',
    type: 'web',
    image: '/images/projects/api-practice.jpg',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'REST APIs', 'JSON'],
    skillsNarrative: 'I wanted to practice building using APIs both to develop my experience with them as well as to practice working with JSON. This project taught me about asynchronous JavaScript and handling external data sources.',
    github: 'https://github.com/giantflyingegg/Api-practice.git',
    liveUrl: 'https://giantflyingegg.uk/projects/api-practice/',
    detailedDescription: 'The Crime API App connects to the UK Police public API to display crime statistics and details. Users can search for crimes by location and view categorized results. I built this to gain experience with API integration, asynchronous programming, and data visualization. The app demonstrates handling of API responses, error states, and presenting complex data in a user-friendly format.',
    challenges: [
      {
        challenge: 'Working with asynchronous API calls',
        solution: 'Implemented async/await patterns to handle API responses cleanly'
      },
      {
        challenge: 'Presenting complex crime data in a meaningful way',
        solution: 'Created a filtering system and visual representation of crime categories for better data comprehension'
      }
    ],
    features: [
      'Integration with UK Police API',
      'Location-based crime searches',
      'Category filtering of crime data',
      'Visual representation of crime statistics',
      'Error handling for API failures',
      'Responsive design for mobile and desktop'
    ],
    dateCompleted: '2023-09'
  },
  {
    id: 'web3-counter',
    title: 'Web3 Counter',
    description: 'My first Solidity contract deployed on Sepolia testnet, a blockchain-based counter application that stores count values on Ethereum.',
    type: 'blockchain',
    image: '/images/projects/web3-counter.jpg',
    skills: ['Solidity', 'JavaScript', 'Web3.js', 'MetaMask Integration', 'Ethereum'],
    skillsNarrative: 'This is my first Solidity contract, live on Sepolia testnet. This helped me gain experience with Solidity and wallet integrations. This app requires a MetaMask wallet and testnet ETH.',
    github: 'https://github.com/giantflyingegg/Web3-Counter.git',
    liveUrl: 'https://giantflyingegg.uk/projects/web3-counter/',
    detailedDescription: 'The Web3 Counter is a decentralized application that stores counter values on the Ethereum blockchain (Sepolia testnet). Users can connect their MetaMask wallet, increment or decrement the counter, and see their transaction history. The counter value persists across sessions and devices since it\'s stored on the blockchain. This was my first exploration into Web3 development and smart contract creation.',
    challenges: [
      {
        challenge: 'Learning Solidity and smart contract development',
        solution: 'Studied Solidity documentation and followed tutorials to build a simple but functional contract'
      },
      {
        challenge: 'Integrating MetaMask wallet with the frontend',
        solution: 'Implemented Web3.js to create a seamless connection between the user interface and blockchain interactions'
      }
    ],
    features: [
      'Connect with MetaMask wallet',
      'Increment and decrement counters on the blockchain',
      'View transaction history',
      'Real-time updates when the counter changes',
      'Support for Sepolia testnet',
      'Transaction status feedback'
    ],
    dateCompleted: '2023-10'
  },
  {
    id: 'platform-game',
    title: 'Canvas Platform Game',
    description: 'A JavaScript platform game using Canvas API with physics, collisions, and level design, created for my Founders and Coders application.',
    type: 'web',
    image: '/images/projects/platform-game.jpg',
    skills: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'Game Physics'],
    skillsNarrative: 'Created for my Founders and Coders application, I was able to develop some experience with HTML5 Canvas, and significant experience with debugging code. This project challenged me to implement game physics and collision detection.',
    github: 'https://github.com/giantflyingegg/Platform-game.git',
    liveUrl: 'https://giantflyingegg.uk/projects/platform-game/',
    detailedDescription: 'This platform game, titled "Mysterious Forest," was built using vanilla JavaScript and the HTML Canvas API. It features multiple levels, character animation, physics-based movement, and collision detection. Created as part of my application to Founders and Coders bootcamp, it pushed me to learn advanced JavaScript concepts and game development principles.',
    challenges: [
      {
        challenge: 'Implementing collision detection with multiple object types',
        solution: 'Developed a bounding box system and overlap detection algorithm to handle different game elements'
      },
      {
        challenge: 'Creating realistic physics for player movement',
        solution: 'Implemented gravity, friction, and acceleration systems to create natural-feeling character movement'
      }
    ],
    features: [
      'Multiple game levels with increasing difficulty',
      'Character movement with jumping mechanics',
      'Obstacles and collectible items',
      'Score tracking system',
      'Level completion triggers',
      'Responsive game loop with consistent performance'
    ],
    dateCompleted: '2023-11'
  }
];