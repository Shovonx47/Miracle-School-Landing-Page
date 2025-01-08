"use client";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-[600px]">
      <Image
        src="/assets/images/hero-background.jpg"
        alt="School campus"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Our School
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Nurturing minds, Building futures - Where excellence meets opportunity
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
} 