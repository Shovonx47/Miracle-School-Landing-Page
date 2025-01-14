"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function UpcomingEvents() {
  const allEvents = [
    {
      title: "75th Anniversary Celebration",
      date: "December 15, 2024",
      image: "/assets/images/banners/pexels-goumbik-296301.jpg",
      description:
        "Notre Dame College celebrated its 75th anniversary with great enthusiasm...",
    },
    {
      title: "Science Fair 2024",
      date: "November 28, 2024",
      image: "/assets/images/banners/pexels-rdne-7606209.jpg",
      description:
        "Annual Science Fair showcasing innovative projects from our talented students...",
    },
    {
      title: "Cultural Program",
      date: "November 15, 2024",
      image: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg",
      description:
        "Students performed traditional and modern cultural programs...",
    },
    {
      title: "Sports Week 2024",
      date: "December 20, 2024",
      image: "/assets/images/banners/sports-week.jpg",
      description:
        "Annual sports week featuring various athletic competitions and team events...",
    },
    {
      title: "Alumni Meet 2025",
      date: "January 15, 2025",
      image: "/assets/images/banners/alumni-meet.jpg",
      description:
        "Yearly alumni gathering to celebrate achievements and strengthen connections...",
    },
    // Add more events as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // Filtered events based on search query
  const filteredEvents = allEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + eventsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Events</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentEvents.map((event, index) => (
          <Link
            key={index}
            href={`/news-and-events/upcoming-events/${encodeURIComponent(event.title.toLowerCase().replace(/ /g, '-'))}`}
            className="rounded-lg overflow-hidden shadow-md bg-white transition-transform hover:scale-105"
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
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="flex items-center text-blue-600 hover:text-blue-800 font-semibold disabled:text-gray-400"
          >
            <FaChevronLeft className="mr-2" />
            Previous
          </button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="flex items-center text-blue-600 hover:text-blue-800 font-semibold disabled:text-gray-400"
          >
            Next
            <FaChevronRight className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
}
