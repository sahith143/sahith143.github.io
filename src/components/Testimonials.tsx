import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
   {
  id: 1,
  name: "Aisha Patel",
  role: "Security Consultant",
  company: "SentinelForge Solutions",
  text: "Sahith's deep technical insights and detailed documentation significantly streamlined our remediation process. His threat modeling approach was both strategic and impactful.",
  image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
  id: 2,
  name: "Liam Nguyen",
  role: "DevSecOps Engineer",
  company: "NovaSec Labs",
  text: "Working with Sahith was a game-changer. He identified blind spots in our cloud infrastructure that even our internal audits had missed. Truly exceptional work!",
  image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What People Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feedback from mentors and professionals I've worked with.
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg shadow-md relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-teal-100 dark:text-teal-900/30" />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;