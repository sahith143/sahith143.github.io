import React, { useState } from 'react';
import { AtSign, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a security project or need consulting? I'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Andhra Pradesh, INDIA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg mr-4">
                    <AtSign className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                    <a 
                      href="mailto:sahithreddi143@gmail.com" 
                      className="text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      sahithreddi143@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Phone</h4>
                    <a 
                      href="tel:+916301617318" 
                      className="text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      + 91 6301617318
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-50 dark:bg-gray-800 rounded border-l-4 border-teal-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Availability</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Currently available for freelance security assessments, penetration testing, and consulting projects.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Security Assessment">Security Assessment</option>
                    <option value="Penetration Testing">Penetration Testing</option>
                    <option value="Security Consulting">Security Consulting</option>
                    <option value="Training & Workshops">Training & Workshops</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors flex items-center"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;