import React from 'react';
import { Shield, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-teal-500 mr-2" />
            <span className="font-mono font-bold text-xl">Sahith</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/sahith143" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sahithreddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/sahith58" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="https://tryhackme.com/p/sahith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="TryHackMe"
            >
              <div className="flex items-center">
                <span className="font-mono text-sm mr-1">THM</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
            <a 
              href="https://app.hackthebox.com/profile/sahith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="HackTheBox"
            >
              <div className="flex items-center">
                <span className="font-mono text-sm mr-1">HTB</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Sahith. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors">Projects</a>
            <a href="#blog" className="text-gray-400 hover:text-teal-400 transition-colors">Write-ups</a>
            <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Secured with TLS 1.3 | Last updated: April 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;