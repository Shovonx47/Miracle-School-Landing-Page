import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'History | Notre Dame College Dhaka',
  description: 'Explore the rich history and heritage of Notre Dame College Dhaka since its establishment in 1949.',
};

export default function HistoryPage() {
  const timelineEvents = [
    {
      year: "1949",
      title: "Establishment",
      description: "Notre Dame College was established by the Congregation of Holy Cross, marking the beginning of a prestigious educational journey in Dhaka."
    },
    {
      year: "1954",
      title: "First Graduation",
      description: "The first batch of students graduated from Notre Dame College, setting a precedent for academic excellence that continues to this day."
    },
    {
      year: "1960",
      title: "Campus Expansion",
      description: "Major expansion of college facilities including new academic buildings and laboratories to accommodate growing student population."
    },
  ];

  const stats = [
    { label: "Years of Excellence", value: "74+" },
    { label: "Alumni Worldwide", value: "100K+" },
    { label: "Faculty Members", value: "200+" },
    { label: "Academic Programs", value: "15+" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/assets/images/Buildings/low-rise-building.jpg"
          alt="Historic Notre Dame College"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Legacy</h1>
          <p className="text-xl text-gray-200 max-w-2xl text-center px-4">
            Seven decades of shaping minds and building futures at Notre Dame College Dhaka
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">A Legacy of Excellence</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="leading-relaxed">
              Notre Dame College, established in 1949, stands as a beacon of educational excellence in Bangladesh. 
              Founded by the Congregation of Holy Cross, our institution has cultivated a rich tradition of 
              academic achievement and moral formation that spans over seven decades.
            </p>
            <p className="leading-relaxed mt-4">
              Through the years, we have maintained our commitment to holistic education, combining rigorous 
              academic standards with character development and community service. Our legacy is reflected in 
              the countless alumni who have gone on to make significant contributions to society.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Historical Journey</h2>
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start group">
              <div className="flex-shrink-0 w-32">
                <div className="text-2xl font-bold text-blue-600">{event.year}</div>
              </div>
              <div className="flex-grow bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}