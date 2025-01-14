import Link from 'next/link';

export default function NoticeBoard() {
  const notices = [
    {
      title: "অনুষ্ঠানসূচি; ৭৫ বছর পূর্তি উৎসবের সমাপন...",
      date: "12/12/2024"
    },
    {
      title: "এইচএসসি ২০২৪ বোর্ড পরীক্ষায় উত্তীর্ণ শিক...",
      date: "12/12/2024"
    },
    {
      title: "৭৫ বছর পূর্তি উৎসবের সমাপনী অনুষ্ঠান রেজ...",
      date: "12/11/2024"
    }
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Notice Board</h2>
      <div className="space-y-4">
        {notices.map((notice, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
              {notice.title}
            </h3>
            <p className="text-sm text-gray-500">{notice.date}</p>
          </div>
        ))}
      </div>
      <Link href="/news-and-events/notices" className="mt-4 text-blue-600 hover:text-blue-800 font-semibold inline-block">
        More Notice →
      </Link>
    </div>
  );
} 