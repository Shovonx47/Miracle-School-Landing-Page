"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function NewsEventsSection() {
  const news = [
    {
      id: 'annual-sports-day-2024',
      date: "March 15, 2024",
      title: "Annual Sports Day",
      description: "Join us for our annual sports day celebration featuring various competitions.",
      image: "/assets/images/banners/pexels-goumbik-296301.jpg",
      category: "Sports",
      content: `
        <p>We are excited to announce our upcoming Annual Sports Day, a celebration of athletic excellence and school spirit. This year's event promises to be bigger and better than ever before.</p>

        <h2>Event Details</h2>
        <p>Date: March 15, 2024<br/>
        Time: 8:00 AM - 4:00 PM<br/>
        Venue: School Main Ground</p>
        // ... rest of the content ...
      `
    },
    {
      id: 'science-fair-2024',
      date: "March 20, 2024",
      title: "Science Fair 2024",
      description: "Students showcase their innovative science projects.",
      image: "/assets/images/banners/pexels-rdne-7606209.jpg",
      category: "Academic",
      content: `
        // Add detailed content here
      `
    },
    {
      id: 'cultural-program-2024',
      date: "March 25, 2024",
      title: "Cultural Program",
      description: "Celebrating our rich cultural heritage through performances.",
      image: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg",
      category: "Culture",
      content: `
        // Add detailed content here
      `
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Latest News & Events
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link 
              href={`/news-and-events/latest-news/${item.id}`} 
              key={index}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-red-600">{item.date}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <button className="mt-4 text-red-600 font-medium hover:text-red-700">
                    Read More →
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 