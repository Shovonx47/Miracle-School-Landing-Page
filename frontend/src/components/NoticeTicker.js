"use client";
import { FaBullhorn } from 'react-icons/fa';

export default function NoticeTicker() {
  const notices = [
    "২০২৫ শিক্ষাবর্ষে ১ম শ্রেণিতে লটারির মাধ্যমে নির্বাচিত শিক্ষার্থীদের চূড়ান্ত ফলাফল",
    "অনলাইনে নতুন ছাত্র ভর্তি ‍ও টিউশন ফি প্রদানের নিয়মাবলি",
    "অনলাইনে টিউশন ফি প্রদানের ক্ষেত্রে লগইন আইডির ঘরে ছাত্র আইডি",
  ];

  return (
    <div className="bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center py-2.5">
          <div className="flex items-center font-bold text-red-600 mr-6 shrink-0 gap-2">
            <FaBullhorn className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Latest Notices</span>
          </div>
          <div className="overflow-hidden relative flex-1">
            <div className="whitespace-nowrap inline-block animate-marquee-smooth">
              {notices.map((notice, index) => (
                <span key={index} className="text-gray-700 font-medium mr-16 text-[15px]">
                  • {notice}
                </span>
              ))}
              {notices.map((notice, index) => (
                <span key={`duplicate-${index}`} className="text-gray-700 font-medium mr-16 text-[15px]">
                  • {notice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 