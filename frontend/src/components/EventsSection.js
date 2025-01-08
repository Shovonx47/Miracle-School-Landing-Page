"use client";
import Image from 'next/image';

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "March 15, 2024",
      image: "/assets/images/sports-day.jpg",
      description: "Join us for a day of athletic excellence and school spirit."
    },
    {
      id: 2,
      title: "Science Fair",
      date: "April 5, 2024",
      image: "/assets/images/science-fair.jpg",
      description: "Showcasing innovative projects from our brilliant students."
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "May 20, 2024",
      image: "/assets/images/cultural-fest.jpg",
      description: "Celebrate diversity through music, dance, and art."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">
                  {event.description}
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 