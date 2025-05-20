import React from 'react';
import { ShieldCheck, Terminal, Database, Network } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm an entry-level Cybersecurity Analyst with hands-on experience in penetration testing, 
              SIEM log analysis, and automating vulnerability scans. Certified in IBM Cybersecurity 
              Analyst and seasoned in CTF competitions, I help organizations identify and mitigate 
              OWASP Top 10 risks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in cybersecurity started with a passion for understanding how systems work and 
              how they can be protected. I've developed a methodical approach to security assessments 
              that combines technical acumen with clear communication to help stakeholders understand 
              complex security challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm currently focusing on expanding my expertise in cloud security and DevSecOps practices 
              while pursuing additional certifications such as CompTIA Security+ and CEH.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Securing With Precision and Rigor
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Constant vigilance and structured methodologies form the backbone of my approach to cyber defense.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg mr-4">
                    <ShieldCheck className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Vulnerability Assessment</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Systematic discovery and analysis of security weaknesses
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg mr-4">
                    <Terminal className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Security Automation</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Creating efficient scripts and workflows for continuous security monitoring
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg mr-4">
                    <Database className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Data Protection</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Implementation of controls to safeguard sensitive information
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg mr-4">
                    <Network className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Network Security</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Designing and implementing robust network defense strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;