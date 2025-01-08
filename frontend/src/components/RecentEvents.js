import Image from 'next/image';

export default function RecentEvents() {
  const events = [
    {
      title: "75th Anniversary Celebration",
      date: "December 15, 2024",
      image: "/assets/images/anniversary.jpg",
      description: "Notre Dame College celebrated its 75th anniversary with great enthusiasm..."
    },
    {
      title: "Science Fair 2024",
      date: "November 28, 2024",
      image: "/assets/images/science-fair.jpg",
      description: "Annual Science Fair showcasing innovative projects from our talented students..."
    },
    {
      title: "Cultural Program",
      date: "November 15, 2024",
      image: "/assets/images/cultural.jpg",
      description: "Students performed traditional and modern cultural programs..."
    }
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Recent Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
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
              <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
          View All Events
        </button>
      </div>
    </div>
  );
} 