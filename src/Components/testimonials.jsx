// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Nishith Patel',
      quote: 'Your assessment method is so good & patient support resolves issues promptly',
    },
    {
      name: 'Rashmi',
      quote: 'Quality, pocket friendly & consistent care is what Fix Health stands for',
    },
    {
        name: 'Nishith Patel',
        quote: 'Your assessment method is so good & patient support resolves issues promptly',
      },
  ];

  return (
    <div className="testimonials-section bg-gray-900 text-white py-8">
      <div className="md:max-w-2xl md:mx-auto max-w-md mx-8 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <p className="text-gray-500">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
