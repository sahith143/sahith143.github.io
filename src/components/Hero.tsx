import React from 'react';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-100 to-gray-200 dark:from-gray-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white mb-4">
              Hi, I'm <span className="text-teal-600 dark:text-teal-400">Sahith</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-mono text-gray-700 dark:text-gray-300 mb-6">
              Aspiring Cybersecurity Analyst
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Protecting networks and applications through proactive testing & secure automation. 
              Specialized in vulnerability assessment, penetration testing, and security automation.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors flex items-center"
              >
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="https://docs.google.com/document/d/12V3JIzcV9cKxdiD_0LNzqPGZwxsTHBOH/edit?usp=sharing&ouid=105677499525097862312&rtpof=true&sd=true" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sahith143" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sahithreddy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://tryhackme.com/p/sahith" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
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
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <div className="flex items-center">
                  <span className="font-mono text-sm mr-1">HTB</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-600 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gray-800 dark:bg-gray-700 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10">
                <img 
                  src="https://res.cloudinary.com/dtxttnxhx/image/upload/v1747730989/kali_fllvtx.png" 
                  alt="Kali Linux Tools Interface" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
                <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400 font-mono">
                  Kali Linux - Advanced Penetration Testing Tools
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
