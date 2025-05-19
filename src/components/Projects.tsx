import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  tools: string[];
  image: string;
  outcomes: string[];
  github?: string;
  writeup?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(1);

  const projects: Project[] = [
    {
      id: 1,
      title: "Web App Security Assessment",
      type: "Penetration Testing",
      description: "Conducted a comprehensive security assessment of a mid-sized e-commerce application, identifying critical vulnerabilities including SQL injection and improper access controls.",
      tools: ["OWASP ZAP", "Burp Suite", "SQLmap", "Metasploit"],
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      outcomes: [
        "Identified 15 critical vulnerabilities including 3 SQL injection points",
        "Created detailed remediation steps for the development team",
        "90% of vulnerabilities remediated within two weeks",
        "Implemented WAF rules to mitigate remaining issues"
      ],
      github: "https://github.com/sahith143/webapp-pentest-framework",
      writeup: "/blog/webapp-security-assessment"
    },
    {
      id: 2,
      title: "Network Security Simulation",
      type: "Network Security",
      description: "Designed and implemented a simulated corporate network environment to demonstrate common attack vectors and defensive strategies. Used virtual machines to create separate network segments and security zones.",
      tools: ["GNS3", "Wireshark", "Snort", "pfSense"],
      image: "https://images.pexels.com/photos/6612905/pexels-photo-6612905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      outcomes: [
        "Created a multi-VLAN network with segmentation and access controls",
        "Demonstrated lateral movement techniques and prevention methods",
        "Implemented IDS/IPS with custom rule sets for threat detection",
        "Documented network security best practices"
      ],
      github: "https://github.com/sahith143/network-security-lab"
    },
    {
      id: 3,
      title: "Security Automation Toolkit",
      type: "Security Automation",
      description: "Developed a set of Python scripts to automate common security assessment tasks, including port scanning, vulnerability assessment, and report generation.",
      tools: ["Python", "Nmap API", "OpenVAS", "ReportLab"],
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      outcomes: [
        "Reduced security assessment time by 40%",
        "Automated repetitive security scanning tasks",
        "Created consistent, professional security reports",
        "Integrated with existing security tools via APIs"
      ],
      github: "https://github.com/sahith143/security-automation-toolkit",
      writeup: "/blog/security-automation"
    },
    {
      id: 4,
      title: "SIEM Dashboard Implementation",
      type: "Security Monitoring",
      description: "Implemented and configured a Security Information and Event Management (SIEM) solution for a small business to monitor and alert on security events across their infrastructure.",
      tools: ["ELK Stack", "Wazuh", "OSSEC", "Grafana"],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      outcomes: [
        "Centralized logging from 25+ diverse system types",
        "Created 15 custom dashboards for different security metrics",
        "Implemented alerting for critical security events",
        "Reduced incident response time from hours to minutes"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my cybersecurity work, demonstrating practical applications of security principles and tools.
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Project List</h3>
              <div className="space-y-4">
                {projects.map(project => (
                  <div 
                    key={project.id}
                    className={`
                      p-4 rounded-lg cursor-pointer transition-all
                      ${activeProject === project.id 
                        ? 'bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
                    `}
                    onClick={() => setActiveProject(project.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-800 dark:text-white">{project.title}</h4>
                      <ChevronRight className={`h-5 w-5 ${activeProject === project.id ? 'text-teal-500' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {activeProject && projects.find(p => p.id === activeProject) && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={projects.find(p => p.id === activeProject)?.image} 
                    alt={projects.find(p => p.id === activeProject)?.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {projects.find(p => p.id === activeProject)?.title}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400">
                        {projects.find(p => p.id === activeProject)?.type}
                      </p>
                    </div>
                    <div className="flex space-x-3 mt-2 sm:mt-0">
                      {projects.find(p => p.id === activeProject)?.github && (
                        <a 
                          href={projects.find(p => p.id === activeProject)?.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                      )}
                      {projects.find(p => p.id === activeProject)?.writeup && (
                        <a 
                          href={projects.find(p => p.id === activeProject)?.writeup} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          <ExternalLink className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {projects.find(p => p.id === activeProject)?.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects.find(p => p.id === activeProject)?.tools.map((tool, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-slate-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {projects.find(p => p.id === activeProject)?.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;