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

// Project data - in specified order
export const projects: Project[] = [
  {
    id: 'counter',
    title: 'Interactive Counter',
    description: 'A simple yet elegant counter application with smooth animations and customizable themes.',
    type: 'web',
    image: '/images/projects/counter.jpg',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Animation API'],
    skillsNarrative: 'This project helped me deepen my understanding of DOM manipulation and event handling. I focused on creating a clean, minimal UI with smooth animations to provide visual feedback for user interactions.',
    github: 'https://github.com/giantflyingegg/counter',
    liveUrl: 'https://giantflyingegg.uk/projects/counter/',
    detailedDescription: 'The Interactive Counter is a lightweight application that provides a satisfying user experience for counting operations. It features smooth animations, keyboard controls, and a clean, minimal interface that works on all devices.',
    challenges: [
      {
        challenge: 'Implementing smooth animations for counter changes',
        solution: 'Used CSS transitions and the Web Animation API to create fluid number transitions'
      },
      {
        challenge: 'Making the counter responsive across device sizes',
        solution: 'Implemented a flexible layout with relative units and media queries'
      }
    ],
    features: [
      'Increment and decrement controls',
      'Keyboard shortcuts for quick counting',
      'Smooth number transition animations',
      'Responsive design that works on all devices',
      'Customizable counter range and step values'
    ],
    dateCompleted: '2023-06'
  },
  {
    id: 'calculator',
    title: 'JavaScript Calculator',
    description: 'A fully functional calculator with advanced math operations and keyboard support.',
    type: 'web',
    image: '/images/projects/calculator.jpg',
    skills: ['JavaScript', 'CSS Grid', 'Math Operations', 'Event Handling'],
    skillsNarrative: 'This project helped me solidify my understanding of JavaScript functions, event handling, and state management. I focused on creating a calculator that not only looked good but also handled edge cases properly.',
    github: 'https://github.com/giantflyingegg/calculator',
    liveUrl: 'https://giantflyingegg.uk/projects/calculator/',
    detailedDescription: 'This calculator application provides standard and scientific calculation capabilities in a clean, responsive interface. It supports keyboard input, maintains calculation history, and handles complex operations with proper order of operations.',
    challenges: [
      {
        challenge: 'Implementing proper order of operations for complex calculations',
        solution: 'Built a custom expression parser that follows mathematical precedence rules'
      },
      {
        challenge: 'Handling floating point precision issues',
        solution: 'Implemented rounding and precision control to avoid common floating point errors'
      }
    ],
    features: [
      'Standard and scientific calculation modes',
      'Keyboard support for quick calculations',
      'Calculation history and memory functions',
      'Responsive design that adapts to any screen size',
      'Clear, intuitive interface with visual feedback'
    ],
    dateCompleted: '2023-05'
  },
  {
    id: 'encryption-app',
    title: 'Encryption App',
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
    title: 'Crime API App',
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
    title: 'Platform Game',
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
  },
  // New projects after platform game
  {
    id: 'discord-ai-bot',
    title: 'Discord AI Bot',
    description: 'A Discord chatbot leveraging the OpenAI API for chat, image generation and moderation endpoints.',
    type: 'ai',
    // No image provided, will use the placeholder
    skills: ['Node.js', 'Discord.js', 'OpenAI API', 'Image Generation', 'Content Moderation'],
    skillsNarrative: 'Developed in partnership with a colleague for my Founders and Coders bootcamp, this project taught me how to integrate multiple AI services into a Discord bot. I gained valuable experience with the Discord API, asynchronous programming patterns, and implementing effective content moderation.',
    github: 'https://github.com/fac30sb/discord-ai-bot--kieran-ollie.git',
    detailedDescription: 'This Discord bot uses the OpenAI API to provide intelligent chat responses, generate images based on user prompts, and moderate content for server safety. The bot can be configured with different personalities and response styles, and includes features like conversation memory and context awareness. It was built as a collaborative project during my Founders and Coders bootcamp.',
    challenges: [
      {
        challenge: 'Managing conversation context and memory efficiently',
        solution: 'Implemented a sliding window approach to maintain relevant conversation history while limiting token usage'
      },
      {
        challenge: 'Ensuring appropriate content moderation without being overly restrictive',
        solution: 'Developed a tiered moderation system with configurable sensitivity levels and override capabilities for administrators'
      }
    ],
    features: [
      'Natural conversation using OpenAI\'s chat models',
      'Image generation from text prompts',
      'Content moderation for server safety',
      'Customizable bot personalities',
      'Context-aware responses that remember conversation history',
      'Command system for specific functions and utilities'
    ],
    dateCompleted: '2024-01'
  },
  {
    id: 'spotify-sentiment-playlist',
    title: 'Sentiment-Based Spotify Playlist Generator',
    description: 'A web application that generates Spotify playlists based on text sentiment analysis using the OpenAI API.',
    type: 'ai',
    // No image provided, will use the placeholder
    skills: ['React', 'OpenAI API', 'Spotify API', 'Sentiment Analysis', 'OAuth Authentication'],
    skillsNarrative: 'This project was developed with a partner for my Founders and Coders bootcamp. It combined my interests in music and AI, teaching me how to work with OAuth flows, multiple API integrations, and sentiment analysis techniques.',
    github: 'https://github.com/fac30sb/api_project--emma-kieran.git',
    detailedDescription: 'The Sentiment-Based Spotify Playlist Generator analyzes the emotional tone of user-provided text using OpenAI\'s language models, then generates a personalized Spotify playlist that matches the detected mood. Users can connect their Spotify accounts, input any text (like journal entries, social media posts, or creative writing), and receive a custom playlist that reflects the emotional content of their writing.',
    challenges: [
      {
        challenge: 'Accurately mapping sentiment analysis to musical attributes',
        solution: 'Created a sophisticated mapping system between emotional dimensions and Spotify\'s audio features like valence, energy, and tempo'
      },
      {
        challenge: 'Implementing secure OAuth authentication with Spotify',
        solution: 'Developed a robust authentication flow with proper token handling and refresh mechanics'
      }
    ],
    features: [
      'Text sentiment analysis using OpenAI',
      'Spotify integration with OAuth authentication',
      'Custom playlist generation based on mood',
      'Audio feature analysis and matching',
      'Save generated playlists to Spotify account',
      'Share playlists with friends'
    ],
    dateCompleted: '2024-02'
  },
  {
    id: 'text-to-image-generator',
    title: 'AI Text to Image Generator',
    description: 'A Next.js application combining OpenAI\'s chat and text-to-speech capabilities with local Stable Diffusion for image generation.',
    type: 'ai',
    // No image provided, will use the placeholder
    skills: ['Next.js', 'React', 'OpenAI API', 'Stable Diffusion', 'TTS', 'Whisper API'],
    skillsNarrative: 'Built as my final project for the Encode Club AI Foundation Bootcamp, this solo project challenged me to integrate multiple AI systems including text generation, speech processing, and image creation. It significantly deepened my understanding of AI model pipelines.',
    github: 'https://github.com/giantflyingegg/encodeFinalProject.git',
    detailedDescription: 'This comprehensive AI tool combines multiple technologies to create a seamless text-to-image experience. Users can input prompts which are enhanced by OpenAI\'s language models, converted to speech using text-to-speech technology, and then processed by a local installation of Stable Diffusion to generate high-quality images. The application demonstrates how different AI systems can be chained together to create a powerful creative tool.',
    challenges: [
      {
        challenge: 'Integrating local Stable Diffusion with web-based APIs',
        solution: 'Created a modular architecture that allows the frontend to communicate with the local image generation system via a custom API bridge'
      },
      {
        challenge: 'Optimizing prompt engineering for better image outputs',
        solution: 'Implemented an AI-assisted prompt enhancement system that refines user inputs before sending them to the image generation pipeline'
      }
    ],
    features: [
      'Text-to-image generation with Stable Diffusion',
      'AI-powered prompt enhancement',
      'Text-to-speech capability',
      'Speech-to-text using Whisper API',
      'Local image generation without dependency on external services',
      'Image history and management',
      'Customizable generation parameters'
    ],
    dateCompleted: '2024-03'
  },
  {
    id: 'tokenized-real-estate',
    title: 'EVM Real Estate Tokenization',
    description: 'A blockchain project implementing tokenized real estate ownership using ERC-1155 for fractionalized asset management.',
    type: 'blockchain',
    // No image provided, will use the placeholder
    skills: ['Solidity', 'ERC-1155', 'Node.js', 'Yarn', 'Scaffold ETH', 'Smart Contracts'],
    skillsNarrative: 'Developed as a collaborative final project for my Encode Club Solidity Bootcamp, this system demonstrates how blockchain technology can revolutionize real estate ownership. I focused on implementing the ERC-1155 token standard to enable fractional ownership of property assets.',
    github: 'https://github.com/Agent009/evm-real-estate-tokenised.git',
    detailedDescription: 'This EVM-based real estate tokenization platform allows property owners to tokenize their assets and sell fractional ownership to multiple investors. Using the ERC-1155 token standard, the system supports both fungible and non-fungible aspects of real estate ownership, enabling innovative investment models like partial ownership, revenue sharing, and automated dividend distribution. The project was built using Scaffold ETH to accelerate development of the frontend interface.',
    challenges: [
      {
        challenge: 'Implementing compliant fractional ownership mechanisms',
        solution: 'Developed a custom implementation of ERC-1155 with additional logic for ownership rights, voting, and revenue distribution'
      },
      {
        challenge: 'Creating a secure and transparent system for property valuation and token issuance',
        solution: 'Integrated an oracle-based valuation system with multi-signature requirements for property verification and token minting'
      }
    ],
    features: [
      'Tokenization of real estate assets using ERC-1155',
      'Fractional ownership with transferable tokens',
      'Automated revenue distribution to token holders',
      'Governance mechanisms for property decisions',
      'Property verification and valuation system',
      'User-friendly interface built with Scaffold ETH',
      'Smart contract-based escrow for secure transactions'
    ],
    dateCompleted: '2024-04'
  }
];