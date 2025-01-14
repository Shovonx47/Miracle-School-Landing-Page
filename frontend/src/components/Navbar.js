"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "About Us",
      submenu: ["Mission & Vision", "History", "Administration", "Faculty & Staff"],
    },
    
    {
      title: "Academics",
      submenu: ["Programs Offered", "Curriculum", "Academic Calendar", "Departments", "Syllabus"],
    },
    {
      title: "Admissions",
      submenu: ["Admission Process", "Eligibility Criteria", "Application Forms", "Tuition & Fees", "Scholarships"],
    },
    {
      title: "Student Life",
      submenu: ["Extracurricular Activities", "Student Services", "Campus Facilities", "Events & Calendars"],
    },
    {
      title: "News & Events",
      submenu: ["Latest News", "Upcoming Events", "Notices"],
    },
    {
      title: "Contact Us",
      submenu: ["Contact Information", "Location Map"],
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              School Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {item.title}
                </button>
                <div className="absolute z-10 hidden group-hover:block w-48 bg-white shadow-lg">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem}
                      href={`/${item.title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        {menuItems.map((item) => (
          <div key={item.title} className="px-2 pt-2 pb-3 space-y-1">
            <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {item.title}
            </button>
            {item.submenu.map((subItem) => (
              <Link
                key={subItem}
                href={`/${item.title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`}
                className="block pl-6 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                {subItem}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
