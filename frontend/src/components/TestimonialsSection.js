"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      image: "/assets/images/testimonial-1.jpg",
      quote: "The dedication of teachers and staff has made a remarkable difference in my child's academic journey."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Alumni",
      image: "/assets/images/testimonial-2.jpg",
      quote: "My years at this school shaped who I am today. The values and education I received are priceless."
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Student",
      image: "/assets/images/testimonial-3.jpg",
      quote: "I love the supportive environment and the numerous opportunities to grow both academically and personally."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What People Say About Us
        </h2>
        <div className="relative">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <blockquote className="text-xl text-gray-600 mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 