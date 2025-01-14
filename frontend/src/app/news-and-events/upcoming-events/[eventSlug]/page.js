import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin, ArrowLeft } from 'lucide-react';

export default function EventPage({ params }) {
  const { eventSlug } = params;
  const eventTitle = eventSlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Mock data - replace with actual data fetching
  const eventData = {
    title: eventTitle,
    date: "December 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium, Notre Dame College",
    image: "/assets/images/banners/pexels-goumbik-296301.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    highlights: [
      "Special guest appearances",
      "Interactive sessions",
      "Cultural performances",
      "Award ceremony"
    ],
    schedule: [
      { time: "2:00 PM", activity: "Registration and Welcome" },
      { time: "2:30 PM", activity: "Opening Ceremony" },
      { time: "3:00 PM", activity: "Main Event" },
      { time: "4:30 PM", activity: "Closing Ceremony" },
      { time: "5:00 PM", activity: "Refreshments" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <Link 
        href="/news-and-events/upcoming-events"
        className="inline-flex items-center px-4 py-2 m-4 text-sm font-medium text-gray-700 hover:text-blue-600"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Events
      </Link>

      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src={eventData.image}
          alt={eventData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{eventData.title}</h1>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <CalendarDays className="w-5 h-5 mr-2" />
                {eventData.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {eventData.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {eventData.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About the Event</h2>
              <p className="text-gray-700 whitespace-pre-line">{eventData.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                {eventData.schedule.map((item, index) => (
                  <div key={index} className="flex items-start border-b last:border-b-0 pb-4 last:pb-0">
                    <div className="w-24 font-semibold text-blue-600">{item.time}</div>
                    <div className="flex-1">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
              <ul className="space-y-3">
                {eventData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* You can add more sidebar components here */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Need More Information?</h3>
              <p className="text-gray-600 mb-4">Contact our event coordinator for any queries.</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 