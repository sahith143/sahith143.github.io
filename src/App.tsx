import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Sahith | Cybersecurity Analyst";
    
    // Get the favicon element
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      // You'd ideally replace this with a custom favicon in a real implementation
      favicon.setAttribute('href', '/path-to-custom-favicon.svg');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;