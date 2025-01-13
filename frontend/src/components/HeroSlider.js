"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "NDC Students",
      image: "/assets/images/Buildings/architecture-independence-palace-ho-chi-minh-city.jpg"
    },
    {
      id: 2,
      title: "WELCOME TO NOTRE DAME COLLEGE, DHAKA",
      image: "/assets/images/Buildings/low-rise-building.jpg"
    },
    {
      id: 3,
      title: "TEACHERS OF NDC",
      image: "/assets/images/Buildings/shot-train-station-roof-with-clocks-showing-quarter-three.jpg"
    },
    // Add more building images as per NDC website
    {
      id: 4,
      title: "Father Herington Bhaban",
      image: "/assets/images/Buildings/analog-landscape-city-with-buildings.jpg"
    },
    {
      id: 5,
      title: "Father Martin Bhaban",
      image: "/assets/images/Buildings/building.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 