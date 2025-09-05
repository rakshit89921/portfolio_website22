import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-16 text-white">
          What Clients Say
        </h2>

        <div className="relative">
          <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-2xl shadow-2xl transform transition-all duration-500">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={24} 
                  className={`${i < currentTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
                />
              ))}
            </div>
            
            <blockquote className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">
              "{currentTestimonial.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">{currentTestimonial.name}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{currentTestimonial.position}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={20} className="text-slate-700 dark:text-slate-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={20} className="text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;