"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LatestNews() {
  const news = [
    {
      id: 'annual-sports-day-2024',
      date: "March 15, 2024",
      title: "Annual Sports Day",
      description: "Join us for our annual sports day celebration featuring various competitions.",
      image: "/assets/images/banners/pexels-goumbik-296301.jpg",
      category: "Sports"
    },
    {
      id: 'science-fair-2024',
      date: "March 20, 2024",
      title: "Science Fair 2024",
      description: "Students showcase their innovative science projects.",
      image: "/assets/images/banners/pexels-rdne-7606209.jpg",
      category: "Academic"
    },
    {
      id: 'cultural-program-2024',
      date: "March 25, 2024",
      title: "Cultural Program",
      description: "Celebrating our rich cultural heritage through performances.",
      image: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg",
      category: "Culture"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {news.map((article, index) => (
        <Link href={`/news-and-events/latest-news/${article.id}`} key={article.id}>
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img 
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-red-600">{article.date}</span>
                <span className="text-sm bg-red-50 text-red-600 px-2 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
} 