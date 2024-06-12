import React, { useState, useEffect } from 'react';
import './style.css';

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform is amazing! It has helped me take better care of my turtles.",
  },
  {
    name: "Jane Smith",
    feedback: "The resources available here are top-notch. Highly recommend!",
  },
  {
    name: "Sam Wilson",
    feedback: "Great community and excellent information. My turtles are thriving thanks to this site.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <h2>What Our Users Say</h2>
      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
          >
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
