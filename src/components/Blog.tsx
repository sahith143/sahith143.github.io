import React from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "OWASP Top 10: SQL Injection Attack Demonstration & Prevention",
      excerpt: "A detailed walkthrough of SQL injection vulnerabilities with examples, attack vectors, and practical mitigation strategies.",
      date: "April 15, 2024",
      readTime: "12 min read",
      category: "Web Security",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "/blog/sql-injection-prevention"
    },
    {
      id: 2,
      title: "Setting Up a Home Security Lab with Kali Linux & Vulnerable VMs",
      excerpt: "Step-by-step guide to creating your own cybersecurity practice environment using virtualization and purposely vulnerable systems.",
      date: "March 22, 2024",
      readTime: "15 min read",
      category: "Security Lab",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "/blog/home-security-lab"
    },
    {
      id: 3,
      title: "Automating Security Scans with Python: Building a Vulnerability Scanner",
      excerpt: "Learn how to create your own basic vulnerability scanner using Python, integrating with Nmap and other security tools.",
      date: "February 18, 2024",
      readTime: "18 min read",
      category: "Automation",
      image: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "/blog/python-vulnerability-scanner"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Technical Write-ups</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge through detailed technical articles, tutorials, and CTF walkthroughs.
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-full">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <a 
                  href={post.slug}
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                >
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;