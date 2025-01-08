"use client";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/assets/images/about-school.jpg"
              alt="Students in classroom"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Our School
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 1990, our institution has been a beacon of academic excellence
              and character development. We believe in nurturing not just academic
              achievement, but the whole child - mind, body, and spirit.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To inspire and empower students to achieve excellence in education
                  and character.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading institution in holistic education and student
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 