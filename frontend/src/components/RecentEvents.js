import Image from 'next/image';
import Link from 'next/link';

export default function RecentEvents() {
  const events = [
    {
      title: "75th Anniversary Celebration",
      date: "December 15, 2024",
      image: "/assets/images/banners/pexels-goumbik-296301.jpg",
      description: "Notre Dame College celebrated its 75th anniversary with great enthusiasm..."
    },
    {
      title: "Science Fair 2024",
      date: "November 28, 2024",
      image: "/assets/images/banners/pexels-rdne-7606209.jpg",
      description: "Annual Science Fair showcasing innovative projects from our talented students..."
    },
    {
      title: "Cultural Program",
      date: "November 15, 2024",
      image: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg",
      description: "Students performed traditional and modern cultural programs..."
    }
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Recent Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Link
            key={index}
            href={`/news-and-events/upcoming-events/${encodeURIComponent(event.title.toLowerCase().replace(/ /g, '-'))}`}
            className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <span className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/news-and-events/upcoming-events">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            View All Events
          </button>
        </Link>
      </div>
    </div>
  );
} 