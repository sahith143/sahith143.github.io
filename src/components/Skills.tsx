import React from 'react';
import { 
  Shield, Bug, Terminal, AlertCircle, Network, Database, 
  Lock, Cpu, Server, FileCode
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { 
      icon: <Shield />, 
      title: "Network Penetration Testing", 
      description: "Internal & external network scanning, vulnerability assessment, and exploitation testing using industry-standard tools." 
    },
    { 
      icon: <Bug />, 
      title: "Web Application Security", 
      description: "OWASP Top 10 vulnerability identification, secure coding practices, and remediation strategies." 
    },
    { 
      icon: <Terminal />, 
      title: "Security Automation", 
      description: "Creating Python & Bash scripts to automate security tasks, vulnerability scanning, and reporting." 
    },
    { 
      icon: <AlertCircle />, 
      title: "Incident Response", 
      description: "Following incident handling procedures, containment strategies, and forensic analysis techniques." 
    },
    { 
      icon: <Server />, 
      title: "SIEM Implementation", 
      description: "Log analysis, alert configuration, and dashboard creation for real-time threat detection." 
    },
    { 
      icon: <Network />, 
      title: "Network Security", 
      description: "Firewall configuration, IDS/IPS implementation, and network traffic analysis." 
    },
    { 
      icon: <Database />, 
      title: "Database Security", 
      description: "Securing database systems against SQL injection and access control vulnerabilities." 
    },
    { 
      icon: <Lock />, 
      title: "Authentication Security", 
      description: "Implementing and testing robust authentication mechanisms and access controls." 
    },
    { 
      icon: <Cpu />, 
      title: "System Hardening", 
      description: "OS hardening, reducing attack surface, and implementing security baseline configurations." 
    },
    { 
      icon: <FileCode />, 
      title: "Secure Development", 
      description: "Integrating security testing into CI/CD pipelines and secure code reviews." 
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Skills & Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer a comprehensive range of cybersecurity services to help protect your digital assets and infrastructure.
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-teal-500"
            >
              <div className="text-teal-500 mb-4">
                {React.cloneElement(skill.icon as React.ReactElement, { className: "h-8 w-8" })}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Tools & Technologies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Scanning & Assessment</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Nmap</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> OpenVAS</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Nessus</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Nikto</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Web Application</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Burp Suite</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> OWASP ZAP</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> SQLmap</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Dirbuster</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Network Analysis</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Wireshark</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Tcpdump</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> GNS3</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Snort</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Programming</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Python</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> Bash</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> PowerShell</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> JavaScript</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-50 dark:bg-gray-800 rounded border-l-4 border-teal-500">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Certifications</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="mr-2">🔰</span> IBM Cybersecurity Analyst
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="mr-2">🔰</span> Certified Ethical Hacker (CEH) v13 (In Progress)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;