'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [emailHovered, setEmailHovered] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-16 pt-8 pb-6 border-t border-gray-800">
      {/* Subtle animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col items-center">
          {/* Contact heading with gradient text */}
          <h3 className="text-2xl md:text-3xl font-pacifico bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
            Get in touch
          </h3>
          
          {/* Contact links with hover animations */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Email link with animation */}
            <a 
              href="mailto:abwaham@gmail.com"
              className="group relative flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
            >
              {/* Icon with float animation on hover */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className={`w-5 h-5 transition-transform duration-300 ${
                  emailHovered ? 'transform -translate-y-1' : ''
                }`}
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              
              <span>Email</span>
              
              {/* Animated underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            {/* GitHub link with animation */}
            <a 
              href="https://github.com/giantflyingegg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              onMouseEnter={() => setGithubHovered(true)}
              onMouseLeave={() => setGithubHovered(false)}
            >
              {/* Icon with float animation on hover */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className={`w-5 h-5 transition-transform duration-300 ${
                  githubHovered ? 'transform -translate-y-1' : ''
                }`}
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              
              <span>GitHub</span>
              
              {/* Animated underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          
          {/* Copyright with subtle reveal animation */}
          <p className="text-gray-500 text-sm animate-appear">
            © {currentYear} Kieran Sweetman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}