"use client";
import { useState } from "react";
import Image from "next/image";

export default function PrincipalMessage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullMessage = `
    Notre Dame College, Dhaka is one of the most renowned educational institutions in Bangladesh. 
    Since its inception in 1949, it has been maintaining excellence in academic performance, 
    discipline, and character formation. 
    The college emphasizes not only academic achievements but also the overall development of its students.
    With a strong commitment to values and a supportive environment, it has become a beacon of 
    hope and inspiration for thousands of students over the decades. 
    Its alumni have gone on to make significant contributions to society in various fields, 
    carrying forward the legacy of Notre Dame College.
  `;

  const shortMessage = `
    Notre Dame College, Dhaka is one of the most renowned educational institutions in Bangladesh. 
    Since its inception in 1949, it has been maintaining excellence in academic performance, 
    discipline and character formation...
  `;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Principal's Message</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative h-[300px] w-full">
            <Image
              src="/assets/images/poeple/inspiring-new-boss.jpg"
              alt="Principal"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="font-bold text-lg">Fr. Hemanto Pius Rozario, CSC</h3>
            <p className="text-gray-600">Principal</p>
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-600 mb-4">
            {isExpanded ? fullMessage : shortMessage}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            {isExpanded ? "Read Less ↑" : "Read More →"}
          </button>
        </div>
      </div>
    </div>
  );
}
